
var PAGE_DIAL_READY = 40;
var PAGE_DIAL_UP    = 41;

var gNextChkPt = 0;

var APP_OOBE_MODE    = 0;
var APP_REG_MODE     = 2;
var APP_ACT_MODE     = 5;
var REMIND_REG       = 0;
var REMIND_ISP       = 1;
var APP_MSN_MODE     = 4;


var L_REGSRV_Text      = "Po��ta� se p�ipojuje k registra�n�mu serveru.";
var L_ACTSRV_Text      = "Po��ta� se p�ipojuje k aktiva�n�mu serveru.";
var L_ACT_REG_SRV_Text = "Po��ta� se p�ipojuje k aktiva�n�mu a registra�n�mu serveru.";

var L_REGCOM_Text      = "Registrace syst�mu Windows... ";
var L_REGCOM2_Text     = "Registrace po��ta�e...";
var L_ACTCOM_Text      = "Aktivace syst�mu Windows...";
var L_ACTREGCOM_Text   = "Aktivace a registrace syst�mu Windows...";

var g_CustomPhoneBook   = null;
var g_CustomDialingPage = null;

function SetCustomDialing(PhoneBook, DialingPage)
{
    g_CustomDialingPage = DialingPage;
    g_CustomPhoneBook = PhoneBook;
}






function InActivation_AppMode()
{
    return (APP_ACT_MODE == window.external.Directions.get_AppMode());
}

function InReminderMode()
{
    return (APP_REG_MODE == window.external.Directions.get_AppMode() ||
            APP_ACT_MODE == window.external.Directions.get_AppMode()
            );
}

function ShowAregDial()
{
    Navigate("actsetup\\aregdial.htm");
    SetTimerShowIFrame(500);
}

function GoToDialingPage()
{
    if ( APP_REG_MODE == window.external.Directions.get_AppMode() ) {
        Navigate("regsetup\\rregdial.htm");

    } else if ( APP_ACT_MODE == window.external.Directions.get_AppMode() ) {
        ShowIFrame('False');
        window.setTimeout("ShowAregDial();",500);
    } else {
        DisableAllButtons();
        switch (g_CurrentCKPT)
        {
            case CKPT_MIGDIAL:
                
                Navigate("setup\\migdial.htm");
                break;
            case CKPT_REFDIAL:
                
                
                if (true == StatusObj.get_Status(REFERALDLCOMPLETED))
                {
                    GoNavigate(CKPT_MIGLIST);
                }
                else
                {
                    Navigate("setup\\refdial.htm");
                }
                break;
            case CKPT_REGDIAL:
                
                Navigate("setup\\regdial.htm");
                break;
            case CKPT_ISPDIAL:
                
                if (g_CustomDialingPage)
                {
                    Navigate(g_CustomDialingPage);
                }
                else
                {
                    Navigate("setup\\dialup.htm");
                }
                break;
            default:
                
                break;
        }
    }
}

function DialRdy_OutsideLineClicked( )

{
    try
    {
        if (null == g.event)
            return;
    }
    catch(e)
    {
        return;
    }

    DialRdy_SetOutsideLine( );
}

function DialRdy_SetOutsideLine( )
{
    if (true == g.radioOutsideLineYes.checked &&
        "visible" == g.spnOutsideLine.style.visibility)
    {
        g.spnOutsideLineNumber.style.visibility = "visible";
        g.edtOutsideLineNumber.style.visibility = "visible";
        g.edtOutsideLineNumber.value = TapiObj.get_DialOut;
        if (0 == g.edtOutsideLineNumber.value.length)
        {
            g.edtOutsideLineNumber.value = "9";
        }
    }
    else
    {
        g.edtOutsideLineNumber.value = "";
        g.spnOutsideLineNumber.style.visibility = "hidden";
        g.spnOutsideLine.style.visibility = "hidden";
    }

}




function Dial_NextBtnHandler()
{
    switch (gCurrPage)
    {
        case PAGE_DIAL_READY:
        {
            if (g.DialRdy_ctrl1.style.visibility=="visible")
            {
                TapiObj.set_AreaCode = g.edtAreaCode.value;
                TapiObj.set_CountryIndex = g.selCountry.selectedIndex;

                
                if (g.PulseToneDialing.style.visibility != "hidden")
                {
                    if (g.radioTouchToneYes.checked)
                        TapiObj.set_PhoneSystem = 1;
                    else
                        TapiObj.set_PhoneSystem = 0;
                }

            }

            if ("visible" == g.spnOutsideLine.style.visibility &&
                true == g.radioOutsideLineYes.checked &&
                "visible" == g.spnOutsideLineNumber.style.visibility
                )
            {
              TapiObj.set_DialOut = g.edtOutsideLineNumber.value;
            }

            if (window.external.CheckPhoneBook(
                (g_CustomPhoneBook == null) ? "msobe.isp" : g_CustomPhoneBook
                ))
            {   
                GoToDialingPage();
            }
            else
            {
                if (InReminderMode())
                {
                    Navigate("regerror\\rpberr.htm");
                }
                else
                {

                    if (g_CurrentCKPT == CKPT_ISPDIAL)
                    {
                        Navigate("isperror\\isppberr.htm");
                    }
                    else
                    {
                        Navigate("error\\pberr.htm");
                    }
                }
            }
            break;
        }
        case PAGE_DIAL_UP:
        {
            break;
        }
    }


}

var g_IgnoreDialErr = true;



function Dial_BackBtnHandler()
{
    switch (gCurrPage)
    {
        case PAGE_DIAL_READY:
        {
            break;
        }
        case PAGE_DIAL_UP:
        {
            g_IgnoreDialErr = true;
            ResetDialing();
            GoBack();
            break;
        }
    }

}




function Dial_SkipBtnHandler()
{
    PopCKPT(CKPT_ISPDIAL); 
    PopCKPT(CKPT_REGDIAL);

    switch (gCurrPage)
    {
        case PAGE_DIAL_READY:
        {
            GoCancel();
            break;
        }
        case PAGE_DIAL_UP:
        {
            ResetDialing();
            GoCancel();
            break;
        }
    }
}




function DialRdy_LoadMe()
{
    if (InActivation_AppMode())
        ShowIFrame();

    gCurrPage = PAGE_DIAL_READY;
    InitFrameRef();
    if (InActivation_AppMode())
        CheckContrastMode();

    if (g != null)
    {
        g_FirstFocusElement = g.btnNext;
        if (InActivation_AppMode())
            window.setTimeout("DoFocus();",1000);
        else
            g_FirstFocusElement.focus();
    }

    InitButtons();

    var fTapi = TapiObj.IsTAPIConfigured;
    if (!fTapi && !g_bTapiDone)
    {
        g.DialRdy_ctrl1.style.visibility="visible";
        if(g_CountryIdx < 0)
        {
            g_CountryIdx = TapiObj.get_CountryIndex;
        }
        g.edtAreaCode.value    = TapiObj.get_AreaCode;

        g.selCountry.selectedIndex = g_CountryIdx;

        if(1 == TapiObj.get_PhoneSystem)
            g.radioTouchToneYes.checked = true; 
        else
            g.radioTouchToneNo.checked = true; 
    }

    if (true == ApiObj.get_OOBEDebugMode)
    {
        g.spnOutsideLine.style.visibility = "visible";
    }
    DialRdy_SetOutsideLine( );


    g.btnNext.onclick = Dial_NextBtnHandler;
    g.btnSkip.onclick = Dial_SkipBtnHandler;

    if ((APP_MSN_MODE == window.external.Directions.get_AppMode()) &&
        window.external.CalledFromMsn())
    {
        g.btnBack.style.visibility = "hidden";
        g.BackBtnLocalText.style.visibility = "hidden";
    }
}




var L_PostToOEMandMS_Text = "Syst�m nyn� vyto�� telefonn� ��slo a zaregistruje v� nov� po��ta� u spole�nost� Microsoft a %1. ";
var L_PostToMS_Text       = "Nyn� bude vyto�eno telefonn� ��slo k registraci nov�ho po��ta�e u spole�nosti Microsoft. ";
var L_PostToOEM_Text      = "Syst�m nyn� vyto�� telefonn� ��slo a zaregistruje v� nov� po��ta� u spole�nosti %1. ";
var L_PrepToActRegOnline_Text  = "P��prava aktivace a registrace online";


var L_PrepToActReg_Text   = "Syst�m Windows nyn� vyto�� telefonn� ��slo, aby bylo mo�n� aktivovat syst�m a zaregistrovat jej u spole�nosti Microsoft.";
var L_PrepToActReg2_Text  = "Syst�m Windows nyn� vyto�� telefonn� ��slo, aby bylo mo�n� aktivovat syst�m u spole�nosti Microsoft a zaregistrovat jej u spole�nosti %1.";
var L_PrepToActReg3_Text  = "Syst�m Windows nyn� vyto�� telefonn� ��slo, aby bylo mo�n� aktivovat a zaregistrovat syst�m u spole�nosti Microsoft a zaregistrovat jej u spole�nosti %1.";
var L_PrepToAct_Text      = "Syst�m Windows nyn� vyto�� telefonn� ��slo, aby bylo mo�n� aktivovat syst�m u spole�nosti Microsoft.";

var OemNameStr = window.external.Signup.get_OEMName();

function RegDialRdy_LoadMe()
{
    DialRdy_LoadMe();

    if (InActivation_AppMode())
    {
        if (g_PostToMS)
        {
            g.Title_Text.innerText   = L_PrepToActRegOnline_Text;
            g.RegDialReadyIntro.innerText = L_PrepToActReg_Text;
        }

        
        var L_RemindMeLater01_Text = " P�ipo<u>m</u>enout pozd�ji ";
        var AccesskeyRemind_M = "M";
        g.btnSkip.innerHTML   = L_RemindMeLater01_Text;
        g.btnSkip.accessKey   = AccesskeyRemind_M;
    }

    if (!InReminderMode())
    {
        if (g_DoActivation)
        {
            if (g_PostToMS && !g_PostToOEM)
                g.RegDialReadyIntro.innerText = L_PrepToActReg_Text;
            else if (!g_PostToMS && g_PostToOEM)
                g.RegDialReadyIntro.innerText = ApiObj.FormatMessage(L_PrepToActReg2_Text, OemNameStr);
            else if (g_PostToMS && g_PostToOEM)
                g.RegDialReadyIntro.innerText = ApiObj.FormatMessage(L_PrepToActReg3_Text, OemNameStr);
            else if (!g_PostToMS && !g_PostToOEM)
                g.RegDialReadyIntro.innerText = L_PrepToAct_Text;
        }
        else
        {
            if (g_PostToMS && g_PostToOEM)
            {
                g.RegDialReadyIntro.innerText = ApiObj.FormatMessage(L_PostToOEMandMS_Text, OemNameStr);
            }
            else if (g_PostToMS)
            {
                g.RegDialReadyIntro.innerText = L_PostToMS_Text;
            }
            else 
            {
                g.RegDialReadyIntro.innerText = ApiObj.FormatMessage(L_PostToOEM_Text, OemNameStr);
            }
        }
    }
    else
    {
        GetPageTitle();
        if (1 == RegisterObj.get_PostToOEM)
        {
            if (g_PostToOEM)
            {
                if (g_PostToMS)
                {
                    g.RegDialReadyIntro.innerText = ApiObj.FormatMessage(L_PostToOEMandMS_Text, OemNameStr);
                }
                else
                {
                    g.RegDialReadyIntro.innerText = ApiObj.FormatMessage(L_PostToOEM_Text, OemNameStr);
                }
            }
        }
    }
}



var L_ConnectToOnlineAct_Text     = "P�ipojov�n� k aktivaci online";
var L_ConnectToOnlineActReg_Text = "P�ipojov�n� k aktivaci a registraci online";
var L_ConnectToOnlineReg_Text     = "P�ipojov�n� k registraci online";

function RegDial_LoadMe()
{
    gCurrPage = PAGE_DIAL_UP;
    InitFrameRef();
    if (InActivation_AppMode())
        CheckContrastMode();
    g.btnNext.disabled = true;
    if (g != null)
    {
        g_FirstFocusElement = g.btnBack;
    }

    if (InActivation_AppMode())
    {
        






        GetPageTitle();
    }

    if (!InReminderMode())
    {
        if (g_DoActivation)
        {
            if (g_PostToMS || g_PostToOEM)
                g.regdial_title.innerText = L_ConnectToOnlineActReg_Text;
            else
                g.regdial_title.innerText = L_ConnectToOnlineAct_Text;
        }
        else
        {
            g.regdial_title.innerText = L_ConnectToOnlineReg_Text;
        }
    }

    InitButtons();

    setTimeout("DoRegistrationDial()" , 40);

    g.btnNext.onclick = Dial_NextBtnHandler;
    g.btnBack.onclick = Dial_BackBtnHandler;
    g.btnSkip.onclick = Dial_SkipBtnHandler;

}

function DoRegistrationDial()
{
    g_IgnoreDialErr = false;
    window.external.DialEx(CONNECTED_REGISTRATION, "reg.isp");
}





function Dialup_LoadMe()
{
    gCurrPage = PAGE_DIAL_UP;
    InitFrameRef();
    g.btnNext.disabled = true;
    if (g != null)
    {
        g_FirstFocusElement = g.btnBack;
    }

    InitButtons();

    setTimeout("DoDialExternal()" , 40);

    g.btnNext.onclick = Dial_NextBtnHandler;
    g.btnBack.onclick = Dial_BackBtnHandler;
    g.btnSkip.onclick = Dial_SkipBtnHandler;

}

function ResetDialing()
{
    g_bRedial = false;
    g_LineProblem = 0;
    g_bFirstServerError = true;
    g_strISPFile = "";
    g_IgnoreDialErr = true;
    window.external.Hangup();
}


function SetDialing(strISPFile)
{
    g_strISPFile = strISPFile;

    g_DialCKPT = g_CurrentCKPT;

    g_ModalDialogUp = false;
}


function DoDialExternal()
{
    SetDialing((g_CustomPhoneBook == null) ? "msobe.isp" : g_CustomPhoneBook);

    DoDial();
}


function DoDial()
{
    g_IgnoreDialErr = false;
    if (g_bRedial)
    {
        window.external.ReDialEx(CONNECTED_ISP_SIGNUP, g_strISPFile);
    }
    else
    {
        window.external.DialEx(CONNECTED_ISP_SIGNUP, g_strISPFile);
    }
}


function Redial()
{
    DoDial();
}


<!--REQUIRED FUNCTION NAME-->
function OnDialing()
{
    

    switch (g_CurrentCKPT)
    {
        case CKPT_REGDIAL:
            if (g != null && g.spnISPName != null)
            {
                if (InActivation_AppMode())
                {
                    if (g_PostToMS)
                        g.spnISPName.innerText = L_ACT_REG_SRV_Text;
                    else
                        g.spnISPName.innerText = L_ACTSRV_Text;
                }
                else
                if (!InReminderMode())
                {
                    if (g_DoActivation)
                    {
                        if (g_PostToMS || g_PostToOEM)
                            g.spnISPName.innerText = L_ACT_REG_SRV_Text;
                        else
                            g.spnISPName.innerText = L_ACTSRV_Text;
                    }
                    else
                    {
                        g.spnISPName.innerText = L_REGSRV_Text;
                    }
                }
                else
                {
                    g.spnISPName.innerText = L_REGSRV_Text;
                }
            }
            if (g != null && g.spnDialing != null)
            {
                g.spnDialing.innerText = window.external.get_DialNumber;
            }
            break;
    }

}

<!--REQUIRED FUNCTION NAME-->
function OnConnecting()
{
    

    switch (g_CurrentCKPT)
    {
        case CKPT_REGDIAL:
            if (g != null && g.spnRegDialStatus != null)
            {
                if (InActivation_AppMode())
                {
                    if (g_PostToMS)
                        g.spnRegDialStatus.innerText = L_ACTREGCOM_Text;
                    else
                        g.spnRegDialStatus.innerText = L_ACTCOM_Text;
                    g_AfterConnectionDone = true;
                }
                else
                if (!InReminderMode())
                {
                    if (g_DoActivation)
                    {
                        if (g_PostToMS || g_PostToOEM)
                            g.spnRegDialStatus.innerText = L_ACTREGCOM_Text;
                        else
                            g.spnRegDialStatus.innerText = L_ACTCOM_Text;
                    }
                    else
                    {
                        g.spnRegDialStatus.innerText = L_REGCOM2_Text;
                    }
                }
                else
                {
                    g.spnRegDialStatus.innerText = L_REGCOM_Text;
                }
            }
            break;
    }
}

<!--REQUIRED FUNCTION NAME-->
function OnConnected()
{
    

    g_bTapiDone = true;

    switch (g_CurrentCKPT)
    {
    case CKPT_REGDIAL:
        if ( g_DoActivation )
        {
            window.external.AsyncActivate( g_PostToMS );
            return;
        }
        else if (g_PostToMS)
        {
            window.external.PostRegData(POST_TO_MS);
            StatusObj.set_Status(MS_REGISTRATION, true);
        }

        ActivationComplete( );
        break;
    }
}

<!--REQUIRED FUNCTION NAME-->
function OnDownloading()
{
}

<!--REQUIRED FUNCTION NAME-->
function OnDisconnect()
{

}

<!--REQUIRED FUNCTION NAME-->
function OnDialingError(derr)
{
    window.external.Hangup();

    if (g_IgnoreDialErr)
        return;


    
    if (InReminderMode())
    {
        g_AfterConnectionDone = false;
        switch (derr)
        {
         case DERR_PORT_OR_DEVICE:
         case DERR_PORT_ALREADY_OPEN:
         case DERR_HARDWARE_FAILURE:
         case DERR_DIALTONE:
            Navigate("regerror\\rdtone.htm");
            break;

         case DERR_BUSY:
            Navigate("regerror\\rtoobusy.htm");
            break;

         case DERR_VOICEANSWER:
         case DERR_PPP_TIMEOUT:
            Navigate("regerror\\rhndshk.htm");
            break;

         case DERR_NO_CARRIER:
            Navigate("regerror\\rpulse.htm");
            break;

         case DERR_REMOTE_DISCONNECT:
            Navigate("regerror\\rcnterr.htm");
            break;

         case DERR_NOANSWER:
            Navigate("regerror\\rnoansw.htm");
            break;

         default:
            Navigate("regerror\\rhndshk.htm");
            break;
        }
    }
    else
    {

        switch (derr)
        {
         case DERR_PORT_OR_DEVICE:
         case DERR_PORT_ALREADY_OPEN:
         case DERR_HARDWARE_FAILURE:
         case DERR_DIALTONE:
            Navigate("error\\dialtone.htm");
            break;

         case DERR_BUSY:
            Navigate("error\\toobusy.htm");
            break;

         case DERR_VOICEANSWER:
         case DERR_PPP_TIMEOUT:
            Navigate("error\\hndshake.htm");
            break;

         case DERR_NO_CARRIER:
            Navigate("error\\pulse.htm");
            break;

         case DERR_REMOTE_DISCONNECT:
            Navigate("error\\cnncterr.htm");
            break;

         case DERR_NOANSWER:
            Navigate("error\\noanswer.htm");
            break;

         default:
            Navigate("error\\hndshake.htm");
            break;
        }
    }

}

<!--REQUIRED FUNCTION NAME -->
function OnServerError(derr)
{
    window.external.Hangup();

    if (g_IgnoreDialErr)
        return;

    Navigate("error\\isp2busy.htm");
}

