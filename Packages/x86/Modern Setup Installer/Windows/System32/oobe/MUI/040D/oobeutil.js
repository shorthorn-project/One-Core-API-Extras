





var ERR_ACT_UNINITIALIZED         = -1;
var ERR_ACT_SUCCESS               = 0;
var ERR_ACT_INACCESSIBLE          = 1;
var ERR_ACT_INVALID_PID           = 2;
var ERR_ACT_USED_PID              = 3;
var ERR_ACT_INTERNAL_WINDOWS_ERR  = 4;
var ERR_ACT_BLOCKED_PID           = 5;
var ERR_ACT_CORRUPTED_PID         = 6;
var ERR_ACT_NETWORK_FAILURE       = 7;
var ERR_ACT_DEDICATED_PID_ENTRY   = 8;


var g_ProductName = "Windows XP";
var g_ActivationRequired = window.external.NeedActivation();
var g_DoActivation = false;
var g_ActivationStatus = ERR_ACT_UNINITIALIZED;
var g_act_specific_error = 0;
var g_OOBEMUIDir = window.external.GetOOBEMUIPath();


var L_MissingOEMName_Text = "Error: Missing OEM Name in oobeinfo.ini [Branding] section.";


var DebugObj = null;


if (null == DebugObj){
    DebugObj = new Object;
    DebugObj = window.external.Debug;
}









function trace(sMsg)
{
    DebugObj.Trace(sMsg);
}


function Navigate(strURL)
{
    
    try
    {
       g.document.body.style.cursor = "default";
    }
    catch(e){}

    strURL = g_OOBEMUIDir + "\\" + strURL;

    trace("Navigate: " + strURL);
    g.navigate(strURL);
}   


var g_CheckFinishAgain = true;
function CheckFinishStatus()
{
    if (g_CheckFinishAgain)
    {
        if (g_DoActivation)
            g_IsActivationSuccessful = true;
        else
            g_IsActivationSuccessful = false;
        if (g_PostToMS)
            g_IsMSRegistrationSuccessful = true;
        else
            g_IsMSRegistrationSuccessful = false;

        if (g_PostToOEM)
            g_IsOEMRegistrationSuccessful = true;
        else
            g_IsOEMRegistrationSuccessful = false;
    }
}

<!--REQUIRED FUNCTION NAME-->
function ActivationComplete(status, status_errcode)
{
g_CheckFinishAgain = true;
    if ( status != null) {

        g_ActivationStatus = status;

        if ( g_ActivationStatus != ERR_ACT_SUCCESS ) {

            trace("Activation failed.  Error = " + g_ActivationStatus);

            
            g_IsActivationSuccessful      = false;
            g_IsMSRegistrationSuccessful  = false;
            g_IsOEMRegistrationSuccessful = false;

            g_act_specific_error = status_errcode;
            GoNavigate(CKPT_ACT_MSG);
            return;
        }
        else
        {
            CheckFinishStatus();
            
            g_CheckFinishAgain = false;
        }

        g_ActivationRequired = false;
        g_DoActivation = false;
        StatusObj.set_Status(MS_REGISTRATION, true);
    }

    if (g_PostToOEM)
    {
        if (0 == RegisterObj.get_OEMAddRegPage)
        {
            window.external.PostRegData(POST_TO_OEM);
            StatusObj.set_Status(OEM_REGISTRATION, true);
            g_IgnoreDialErr = true;
            PopCKPT(CKPT_REGDIAL);
            PopCKPT(CKPT_REGISTER3);
            PopCKPT();    
            CheckFinishStatus();
            if (InReminderMode())
                GoNavigate(CKPT_ACT_MSG);      
            else
                GoNavigate(CKPT_ICONN);        
        }
        else
        {
            
            
            
            
            g_IgnoreDialErr = true;

            if ( APP_REG_MODE == window.external.Directions.get_AppMode() )
            {
                Navigate("html\\oemreg\\roemadd.htm");
            }
            else
            {
                Navigate("html\\oemreg\\oemadd.htm");
            }
        }
    }
    else
    {
        g_IgnoreDialErr = true;

        PopCKPT(CKPT_REGDIAL);
        PopCKPT(CKPT_REGISTER3);
        PopCKPT();    
        CheckFinishStatus();
        if (InReminderMode())
            GoNavigate(CKPT_ACT_MSG);    
        else
            GoNavigate(CKPT_ICONN);      
    }

    if ((g_PostToMS && g_PostToOEM && (1 == RegisterObj.get_PostToOEM)) ||
        ((0 == RegisterObj.get_PostToOEM) && g_PostToMS))
    {
        if ( APP_REG_MODE == window.external.Directions.get_AppMode() )
        {
            
            
            
            window.external.StopRemind(REMIND_REG);
        }
        else
        {
            
            
            
            window.external.DeleteRemind(REMIND_REG);
        }
    }
}






var SORT_DEFAULT                = 0x0;     

var LANG_JAPANESE               = 0x11;
var LANG_KOREAN                 = 0x12;
var LANG_CHINESE                = 0x04;

var SUBLANG_KOREAN              = 0x01;    
var SUBLANG_CHINESE_TRADITIONAL = 0x01;    
var SUBLANG_CHINESE_SIMPLIFIED  = 0x02;    
var SUBLANG_DEFAULT             = 0x01;    









function MAKELANGID(p, s)
{
    return (( s << 10) | p);
}

function MAKELCID(lgid, srtid)
{
    return ((srtid << 16) | lgid);
}

function IsKoreanLocale() {
   var language = ApiObj.get_UserDefaultUILanguage();
   if (language == MAKELCID(MAKELANGID(LANG_KOREAN, SUBLANG_KOREAN), SORT_DEFAULT)) {
      return true;
   }

   return false;
}

function IsFarEastLocale()
{
    
    
    var language = ApiObj.get_UserDefaultUILanguage();

    if (language == MAKELCID(MAKELANGID(LANG_KOREAN, SUBLANG_KOREAN), SORT_DEFAULT) ||
        language == MAKELCID(MAKELANGID(LANG_CHINESE, SUBLANG_CHINESE_TRADITIONAL), SORT_DEFAULT) ||
        language == MAKELCID(MAKELANGID(LANG_CHINESE, SUBLANG_CHINESE_SIMPLIFIED), SORT_DEFAULT) ||
        language == MAKELCID(MAKELANGID(LANG_JAPANESE, SUBLANG_DEFAULT), SORT_DEFAULT))
        return true
    else
        return false;
}

