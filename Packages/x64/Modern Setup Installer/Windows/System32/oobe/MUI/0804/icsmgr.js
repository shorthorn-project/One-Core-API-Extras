

var ICS_CONN_STARTING = 1;
var ICS_CONN_CONNECTING = 2;
var ICS_CONN_CONNECTED = 3;
var ICS_CONN_DISCONNECTING = 4;
var ICS_CONN_DISCONNECTED = 5;
var ICS_CONN_STOPPED = 6;
var ICS_CONN_PERMANENT = 7;
var ICS_CONN_UNK_DIAL_STATE = 8;
var ICS_CONN_CALLWAITING = 9;
var ICS_CONN_HN_UNAVAILABLE = 1000;
var ICS_CONN_TIMEOUT = 5000;

var oldState = ICS_CONN_DISCONNECTED;
var currentState = ICS_CONN_DISCONNECTED;


var ICS_CONN_TYPE_REG = 0;
var ICS_CONN_TYPE_ISP = 1;
var ICS_CONN_TYPE_REF = 2;
var ICS_CONN_TYPE_MIG = 3;

var ICS_Error_Id = 0;
var ICS_ERR_HN_UNAVAILABLE = ICS_Error_Id++;
var ICS_ERR_MODEM_DISCONNECTED = ICS_Error_Id++;
var ICS_ERR_MODEM_FAILED_CONNECT = ICS_Error_Id++;
var ICS_ERR_STOPPED = ICS_Error_Id++;
var ICS_ERR_PERM_DISCONNECTED = ICS_Error_Id++;
var ICS_ERR_TIMEOUT = ICS_Error_Id++;
var LAN_ERR_HW_UNAVAILABLE1 = ICS_Error_Id++;
var LAN_ERR_HW_UNAVAILABLE2 = ICS_Error_Id++;








var CONNECTIONTYPE_INVALID            = 0x00000000;



var CONNECTIONTYPE_NONE               = 0x00000001;



var CONNECTIONTYPE_MODEM              = 0x00000002;



var CONNECTIONTYPE_LAN_ICS            = 0x00000004;



var CONNECTIONTYPE_LAN_BROADBAND      = 0x00000008;




var CONNECTIONTYPE_LAN_INDETERMINATE  = 0x00000010;



var CONNECTIONTYPE_OTHER              = 0x00000020;


var CONNECTIONTYPE_LAN                = (CONNECTIONTYPE_LAN_ICS |
                                         CONNECTIONTYPE_LAN_BROADBAND |
                                         CONNECTIONTYPE_LAN_INDETERMINATE);

var INTERNET_UNKNOWN = -1;
var INTERNET_NO = 0;
var INTERNET_YES = 1;


var g_ConnectionCapabilities      = CONNECTIONTYPE_INVALID;
var g_PreferredConnection         = null;  
var g_Internet                    = INTERNET_UNKNOWN;
var g_ModemTypes                  = null;

var L_ERR_HN_UNAVAILABLE_Text = "您的计算机通过您的网络同 Internet 的连接已经中断。<br><br>要还原连接，请确定网络电缆已安全地插入计算机和网络。";


var L_ERRSTOPPED_Text = "您的网络中的 Internet 连接共享当前不可用。请单击<b>重试</b>重新尝试连接。";
var L_ERR_PERM_DISCONNECTED_Text = "Internet 连接共享已被中断。如果您正使用高速适配器连接 Internet (例如，宽带)，请确保适配器配置正确并且网线已被安全地连接。<br><br>请单击<b>重试</b>重新连接。";
var L_ERRTIMEOUT_Text = "连接 Internet 时发生问题。您的连接超时或该计算机有关使用共享 Internet 连接的配置不正确。<br><br>请单击<b>重试</b>重新连接。";
var L_ERR_LAN_UNAVAILABLE1_Text = "您的计算机没有通过网络连接到 Internet。<br><br>请检查网络设置并确定您能够连接到 Internet，然后再试一次。";
var L_ERR_LAN_UNAVAILABLE2_Text = "您的计算机没有通过网络连接到 Internet。<br><br>请选择下列一种方式:";

<!--REQUIRED FUNCTION NAME-->
function OnIcsConnectionStatus(iStatus)
{
    oldState = currentState;
    currentState = iStatus;

    switch (g_CurrentCKPT)
    {
    case CKPT_REGISTER1:
    case CKPT_REGISTER3:
    case CKPT_ISPSIGNUP:
    case CKPT_REFDIAL:
    case CKPT_MIGDIAL:
        break;
    default:
        return;
    }

    switch(iStatus)
    {
        case ICS_CONN_TIMEOUT:
                ICS_Error_Id = ICS_ERR_TIMEOUT;
                Navigate("icserror\\icsdc.htm");
                break;
        case ICS_CONN_PERMANENT:
                break;
        case ICS_CONN_STOPPED:
                switch (oldState)
                {
                    case ICS_CONN_PERMANENT:
                         ICS_Error_Id = ICS_ERR_STOPPED;
                         Navigate("icserror\\icsdc.htm");
                         break;
                    default:
                         break;
                }
                break;
        case ICS_CONN_HN_UNAVAILABLE:
                ICS_Error_Id = ICS_ERR_HN_UNAVAILABLE;
                Navigate("icserror\\icsdc.htm");
                break;
        default:
                break;
    }
}





function IcsDcError_LoadMe()
{
    InitFrameRef();
    InitNewButtons();
    g.btnNext.onclick = IcsErrorNextBtnHandler;
    g.btnSkip.onclick = IcsErrorSkipBtnHandler;

    switch (ICS_Error_Id)
    {

    case ICS_ERR_HN_UNAVAILABLE:
        g.ErrorPara1.innerHTML = L_ERR_HN_UNAVAILABLE_Text;
        break;
    case ICS_ERR_STOPPED:
        g.ErrorPara1.innerHTML = L_ERRSTOPPED_Text;
        break;
    case ICS_ERR_PERM_DISCONNECTED:
        g.ErrorPara1.innerHTML = L_ERR_PERM_DISCONNECTED_Text;
        break;
    case ICS_ERR_TIMEOUT:
        g.ErrorPara1.innerHTML = L_ERRTIMEOUT_Text;
        break;
    case LAN_ERR_HW_UNAVAILABLE1:
    case LAN_ERR_HW_UNAVAILABLE2:
        g.btnBack.style.visibility = "visible";
        g.BackBtnLocalText.style.visibility = "visible";
        g.btnBack.onclick = IcsErrorBackBtnHandler;
        if (ICS_Error_Id == LAN_ERR_HW_UNAVAILABLE1)
        {
            g.ErrorPara1.innerHTML = L_ERR_LAN_UNAVAILABLE1_Text;
        }
        else
        {
            g.ErrorPara1.innerHTML = L_ERR_LAN_UNAVAILABLE2_Text;
            g.ErrorPara2.style.display = "inline";
        }
        break;
    }
    g.btnNext.focus();
}

function IcsErrorBackBtnHandler()
{
    GoNavigate(g_CurrentCKPT);
}

function IcsErrorNextBtnHandler()
{
    DisableAllButtons();
    ResetConnectedToInternetEx();
    switch (g_CurrentCKPT)
    {
    case CKPT_REGISTER1:
    case CKPT_REGISTER3:
        if (ICS_Error_Id == LAN_ERR_HW_UNAVAILABLE1)
        {
            LanActReg();
        }
        else if (ICS_Error_Id == LAN_ERR_HW_UNAVAILABLE2)
        {
            if (g.rb_conn_modem.checked)
            {
                GoNavigate(CKPT_REGDIAL);
            }
            else
            {
                LanActReg();
            }
        }
        else
        {
            IcsConnect(ICS_CONN_TYPE_REG);
        }
        break;
    case CKPT_ISPSIGNUP:
        IcsConnect(ICS_CONN_TYPE_ISP);
        break;
    case CKPT_REFDIAL:
        IcsConnect(ICS_CONN_TYPE_REF);
        break;
    case CKPT_MIGDIAL:
        IcsConnect(ICS_CONN_TYPE_MIG);
        break;
    default:
        break;
    }
}

function IcsErrorSkipBtnHandler()
{
    switch (g_CurrentCKPT)
    {
    case CKPT_REGISTER1:
    case CKPT_REGISTER3:
        
        g_CurrentCKPT = CKPT_ACT_MSG;
        break;
    default:
        break;
    }
    GoCancel();
}

function LanActReg()
{
    if (g_Internet == INTERNET_UNKNOWN)
    {
        ConnectedToInternetEx(true, "LanActReg2();");
        g.document.body.style.cursor = "wait";
    }
    else
    {
        LanActReg2();
    }
}

function LanActReg2()
{
    if (!ConnectedToInternetEx(false))
    {
        if (HasModem())
        {
            ICS_Error_Id = LAN_ERR_HW_UNAVAILABLE2;
        }
        else
        {
            ICS_Error_Id = LAN_ERR_HW_UNAVAILABLE1;
        }
        Navigate("icserror\\icsdc.htm");
    }
    else
    {
        CommonActReg();
    }
}

function IcsConnect(iConnectionType)
{
    
    
    
    if (g_Internet == INTERNET_UNKNOWN)
    {
        ConnectedToInternetEx(true, "IcsConnect2("+iConnectionType+")");
    }
    else
    {
        IcsConnect2(iConnectionType);
    }
}

function IcsConnect2(iConnectionType)
{
    if (!ConnectedToInternetEx(false))
    {
         OnIcsConnectionStatus ( ICS_CONN_HN_UNAVAILABLE );
         return;
    }

    switch (iConnectionType)
    {
    case ICS_CONN_TYPE_REG:
        CommonActReg();
        break;
    case ICS_CONN_TYPE_ISP:
        
        window.external.Connect(CONNECTED_ISP_SIGNUP, "msobe.isp");
        break;
    case ICS_CONN_TYPE_REF:
        
        window.external.Connect(CONNECTED_REFFERAL, "migrate.isp");
        break;
    case ICS_CONN_TYPE_MIG:
        
        
        window.external.Connect(CONNECTED_ISP_MIGRATE, gselectedISPIndx);
        break;
    default:
        break;
    }
}

function CommonActReg()
{
    
    
    window.external.Connect(CONNECTED_REGISTRATION, "reg.isp");
    if (g_DoActivation)
    {
        window.external.AsyncActivate(g_PostToMS);
    }
    else 
    {
        if (g_PostToMS)
        {
            window.external.PostRegData(POST_TO_MS);
            StatusObj.set_Status(MS_REGISTRATION, true);
        }
        ActivationComplete();
    }
}

function UseIcs()
{

    fResult = ((CONNECTIONTYPE_LAN_ICS == GetPreferredConnection())
                && HasIcs()) ? true : false;
    trace("UseIcs: " + fResult);
    return fResult;
}   

function HasIcs()
{
    fResult = (CONNECTIONTYPE_LAN_ICS & GetConnectionCapabilities()) ? true : false;
    trace("HasIcs: " + fResult);
    return fResult;
} 

function UseBroadband()
{
    fResult = (CONNECTIONTYPE_LAN_BROADBAND == GetPreferredConnection() && HasBroadband()) ? true : false;
    trace("UseBroadband: " + fResult);
    return fResult;
}   

function HasBroadband()
{
    fResult = (CONNECTIONTYPE_LAN_BROADBAND & GetConnectionCapabilities()) ? true : false;
    trace("HasBroadband: " + fResult);
    return fResult;
} 

function HasIndeterminateLan()
{
    fResult = (CONNECTIONTYPE_LAN_INDETERMINATE & GetConnectionCapabilities()) ? true : false;
    trace("HasIndeterminateLan: " + fResult);
    return fResult;
} 



function UseModem()
{
    fResult = (CONNECTIONTYPE_MODEM == GetPreferredConnection() && HasModem()) ? true : false;
    trace("UseModem: " + fResult);
    return fResult;
}   


function HasModem()
{
    
    
    
    fResult = (CONNECTIONTYPE_MODEM & GetConnectionCapabilities()) ? true : false;
    trace("HasModem: " + fResult);
    return fResult;

} 

function HasAnalogModem()
{
    GetConnectionCapabilities();
    fResult = (g_ModemTypes == ERR_COMM_NO_ERROR);
    trace("HasAnalogModem: " + fResult);
    return fResult;
} 

function UseAnalogModem()
{
    fResult = (CONNECTIONTYPE_MODEM == GetPreferredConnection() && HasAnalogModem()) ? true : false;
    trace("UseAnalogModem: " + fResult);
    return fResult;
} 

function UseNetwork()
{
    return (UseIcs() || UseBroadband() || HasIndeterminateLan());
} 

function HasNetwork()
{
    var fResult = (GetConnectionCapabilities() & CONNECTIONTYPE_LAN) ? true : false;
    trace("HasNetwork: " + fResult);
    return fResult;
} 

function HasConnection()
{
    fResult = (HasNetwork() || HasModem());
    trace("HasConnection: " + fResult);
    return fResult;
} 

function SetPreferredConnection(ctPreferred)
{
    
    
    
    if (window.external.SetPreferredConnection(ctPreferred))
    {
        g_PreferredConnection = ctPreferred;
    }
    else if ((ctPreferred == CONNECTIONTYPE_MODEM) && HasModem())
    {
        g_PreferredConnection = CONNECTIONTYPE_MODEM;
    }

    
    ApiObj.set_RegValue(HKEY_LOCAL_MACHINE, OOBE_MAIN_REG_KEY + "\\TEMP", PREFCONN_REG_VALUE, g_PreferredConnection);

}   

function GetPreferredConnection()
{
    if (CONNECTIONTYPE_INVALID == g_PreferredConnection
        )
    {
        trace("Calling window.external.GetPreferredConnection");
        g_PreferredConnection = window.external.GetPreferredConnection();

        
        
        
        if (CONNECTIONTYPE_NONE == g_PreferredConnection
            && HasModem() )
        {
            g_PreferredConnection = CONNECTIONTYPE_MODEM;
        }
    }

    trace("GetPreferredConnection: " + g_PreferredConnection);
    return g_PreferredConnection;

} 

function GetConnectionCapabilities()
{
    
    if (CONNECTIONTYPE_INVALID == g_ConnectionCapabilities)
    {
        trace("Calling window.external.GetConnectionCapabilities");
        g_ConnectionCapabilities = window.external.GetConnectionCapabilities();

        
        
        
        g_ModemTypes = window.external.CheckDialReady();
        if (ERR_COMM_NO_ERROR == g_ModemTypes ||
            ERR_COMM_ISDN == g_ModemTypes ||
            ERR_COMM_PHONE_AND_ISDN == g_ModemTypes)
        {
            g_ConnectionCapabilities |= CONNECTIONTYPE_MODEM;
        }        
    }

    trace("GetConnectionCapabilities: " + g_ConnectionCapabilities);
    return g_ConnectionCapabilities;

} 

function InternetCapabilityExists()
{
    var     fExists = false;

    
    
    if (HasNetwork())
    {
        fExists = true;
    }

    if (!fExists && HasModem())
    {
        fExists = true;
    }
    trace("InternetCapabilityExists: " + fExists);
    return fExists;

} 

var ICS_MINIMUM_CALLBACK_SLEEP_TIME = 6000;
var ICS_MINIMUM_TIMEOUT = 40;

var g_ConnectedToInternetCallback = null;
var g_WhenCallbackInit = 0;








function ConnectedToInternetEx(bRefresh, callback)
{
    var retval = false;

    if (UseModem() && (GetConnectionCapabilities() == CONNECTIONTYPE_MODEM))
    {
        
        
        if (callback == null)
        {
            retval = window.external.ConnectedToInternet();
        }
        else
        {
            trace("ConnectedToInternetEx("+bRefresh+", "+callback+")");
            setTimeout(callback, ICS_MINIMUM_CALLBACK_SLEEP_TIME);
        }
    }
    else if (bRefresh && g_Internet == INTERNET_UNKNOWN)
    {
        
        if (callback == null)
        {
            retval = window.external.ConnectedToInternetEx()
            g_Internet = (retval) ? INTERNET_YES : INTERNET_NO;
        }
        else
        {
            g_ConnectedToInternetCallback = callback;
            g_WhenCallbackInit = (new Date()).getTime();
            setTimeout("window.external.AsyncConnectedToInternetEx()",
                ICS_MINIMUM_TIMEOUT);
            
        }
    }
    else
    {
        
        if (callback == null)
        {
            retval = (g_Internet == INTERNET_YES);
        }
        else
        {
            setTimeout(callback, ICS_MINIMUM_CALLBACK_SLEEP_TIME);
        }
    }

    return retval;
}

function ResetConnectedToInternetEx()
{
    g_Internet = INTERNET_UNKNOWN;
}

<!--REQUIRED FUNCTION NAME-->
function ReturnConnectedToInternetEx(bConnected)
{
    g_Internet = (bConnected) ? INTERNET_YES : INTERNET_NO;
    if (g_ConnectedToInternetCallback != null)
    {
        var callback = g_ConnectedToInternetCallback;
        var timeRemained = ICS_MINIMUM_CALLBACK_SLEEP_TIME -
            ((new Date()).getTime() - g_WhenCallbackInit);

        g_ConnectedToInternetCallback = null;
        g_WhenCallbackInit = 0;

        if (timeRemained < ICS_MINIMUM_TIMEOUT)
        {
            setTimeout(callback, ICS_MINIMUM_TIMEOUT);
        }
        else
        {
            setTimeout(callback, timeRemained);
        }
    }
}

