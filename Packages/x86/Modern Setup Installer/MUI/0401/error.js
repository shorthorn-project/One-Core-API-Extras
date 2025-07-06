





function ErrorSkipBtnHandler()
{
    if (InActivation_AppMode())
    {
        window.external.Hangup();
        ShowIFrame('False');
        window.setTimeout("ExitWPA();",1000);
    }
    else
    {
        window.external.Hangup();
        PopCKPT();
        GoCancel();
    }
}


function DialErrorNextBtnHandler() 
{
    GoToDialingPage();
}



function CnncterrNextBtnHandler() 
{
    if (g.Callwait != null)
    {
        TapiObj.set_CallWaiting = g.Callwait.value;
    }
    window.external.set_DialAlternative(false);
    DialErrorNextBtnHandler();
}

var L_EnterValidPhoneNumber_Text = "˛˛·« Ì„ﬂ‰ Õ–› —ﬁ„ «·Â« › ﬂ·Ì«.";
function CheckPhoneNumer(phoneNumber)
{
    if (phoneNumber.length == 0)
    {
        return false;
    }
    return true;
}



function ToobusyNextBtnHandler() 
{
    window.external.set_DialAlternative(true);

    if (!(g.DialRuleYes.checked)) {
        TapiObj.set_DialOut(g.edtOutsideLine.value);
        TapiObj.set_CallWaiting(g.edtCallWaiting.value);
    }
    
    if (g.DialTone.checked)
    {
        TapiObj.set_PhoneSystem(1);
    }
    else
    {
        TapiObj.set_PhoneSystem(0);
    }

    
    DialErrorNextBtnHandler();
}

var gTooBusyHaveError1 = false;
var gTooBusyHaveError2 = false;
var gTooBusyHaveError3 = false;

var L_altnumber_Text = "ÿ·» «·—ﬁ„ «·»<u>œ</u>Ì· Â–«:";
var L_altnumber01_Text = "* ÿ·» «·—ﬁ„ «·»<u>œ</u>Ì· Â–«:";
var L_outsideline_Text = "≈÷«›… Â–« «·—ﬁ„ ··Õ <u>’</u>Ê· ⁄·Ï Œÿ Œ«—ÃÌ:";
var L_outsideline01_Text = "* ≈÷«›… Â–« «·—ﬁ„ ··Õ <u>’</u>Ê· ⁄·Ï Œÿ Œ«—ÃÌ:";
var L_callwaiting_Text = " ⁄ÿÌ· „Ì“… «·„<u>ﬂ</u>«·„… »«·«‰ Ÿ«—:";
var L_callwaiting01_Text = "*  ⁄ÿÌ· „Ì“… «·„<u>ﬂ</u>«·„… »«·«‰ Ÿ«—:";

function NewToobusyNextBtnHandler() 
{
    gTooBusyHaveError1 = false;
    gTooBusyHaveError2 = false;
    gTooBusyHaveError3 = false;
    g.tberrspan1.style.visibility = "hidden";
    g.tberrspan2.style.visibility = "hidden";
    g.tberrspan3.style.visibility = "hidden";

    if (g.cb_altnumber.checked)
    {
        g_AltnumberHolder = g.edt_altnumber.value;
        window.external.set_DialNumber(g.edt_altnumber.value);

        if (g.edt_altnumber.value != "")
        {
            g.lbl_altnumber.innerHTML = L_altnumber_Text;
            g.lbl_altnumber.className = "text-primary";
        }
        else
        {
            gTooBusyHaveError1 = true;
            g.lbl_altnumber.innerHTML = L_altnumber01_Text;
            g.lbl_altnumber.className = "text-error";
        }
    }
    else
    {
        g_AltnumberHolder = "";
        window.external.set_DialAlternative(true);
    }

    if (g.cb_outsideline.checked)
    {
        g_OutsidelineHolder = g.edt_outsideline.value;
        TapiObj.set_DialOut(g.edt_outsideline.value);

        if (g.edt_outsideline.value != "")
        {
            g.lbl_outsideline.innerHTML = L_outsideline_Text;
            g.lbl_outsideline.className = "text-primary";
        }
        else
        {
            gTooBusyHaveError2 = true;
            g.lbl_outsideline.innerHTML = L_outsideline01_Text;
            g.lbl_outsideline.className = "text-error";
        }
    }
    else
    {
        g_OutsidelineHolder = "";
        TapiObj.set_DialOut(g.edt_outsideline.value);    
    }

    if (g.cb_callwaiting.checked)
    {
        g_CallwaitingHolder = g.edt_callwaiting.value;
        TapiObj.set_CallWaiting(g.edt_callwaiting.value);

        if (g.edt_callwaiting.value != "")
        {
            g.lbl_callwaiting.innerHTML = L_callwaiting_Text;
            g.lbl_callwaiting.className = "text-primary";
        }
        else
        {
            gTooBusyHaveError3 = true;
            g.lbl_callwaiting.innerHTML = L_callwaiting01_Text;
            g.lbl_callwaiting.className = "text-error";
        }
    }
    else
    {
        g_CallwaitingHolder = "";
        TapiObj.set_CallWaiting(g.edt_callwaiting.value);
    }

    if (g.DialTone.checked)
    {
        TapiObj.set_PhoneSystem(1);
    }
    else
    {
        TapiObj.set_PhoneSystem(0);
    }

    if ((gTooBusyHaveError1) || (gTooBusyHaveError2) || (gTooBusyHaveError3))
        NewToobusy_LoadMe();
    else
        DialErrorNextBtnHandler(); 
}

function TelError_TelephoneBtnHandler() 
{
    
    PopCKPT();
    GoNavigate(CKPT_ACTIVSVC)
}

function Enable_TelBtn_ActMode()
{
    if (InActivation_AppMode())
    {
        
        GetPageTitle();

        g.btnTelephone.style.display = "inline";
        g.btnTelephone.onmouseover = HandleButtonMouseOver;
        g.btnTelephone.onmouseout  = HandleButtonMouseOut;
        g.btnTelephone.onclick     = TelError_TelephoneBtnHandler;

        
        var L_RemindMeLater_Text = "··„ «»⁄… »œÊ‰  ‰›Ì– Â–Â «·„Â„…° «‰ﬁ— ›Êﬁ <b>–ﬂ—‰Ì ·«Õﬁ«</b>.";
        g.RemindMeLaterText.innerHTML = L_RemindMeLater_Text;
        var L_RemindMeLater01_Text = " –<u>ﬂ</u>—‰Ì ·«Õﬁ« ";
        var AccesskeyRemind_M = "M";
        g.btnSkip.innerHTML   = L_RemindMeLater01_Text;
        g.btnSkip.accessKey   = AccesskeyRemind_M;
    }
}

function DefaultErr_LoadMe()
{
    InitFrameRef();

    if (APP_MSN_MODE == window.external.Directions.get_AppMode())
    {
        var spanCollection = g.document.body.getElementsByTagName("span");
        if (spanCollection != 0)
        {
            for (var i = 0; i < spanCollection.length; i++)
            {
                if (spanCollection[i].className == "text-primary-btndesc")
                {
                    var styleObj = spanCollection[i].style;
                    styleObj.position = "relative";
                    styleObj.top = "0";
                    styleObj.left = "0";
                }
            }
        }
    }

    InitButtons();

    try
    {
        if(g.btnRestore != null) 
        {
            if (InReminderMode())
            {
                g.btnRestore.onmouseover = HandleButtonMouseOver;
                g.btnRestore.onmouseout  = HandleButtonMouseOut;
                g.btnRestore.className="buttons";
            }
            else
            {
                g.btnRestore.onmouseover = HandleNextButtonMouseOver;
                g.btnRestore.onmouseout  = HandleNextButtonMouseOut;
                g.btnRestore.onmousedown = HandleNextButtonMouseDown;
                g.btnRestore.className="newbuttonsNext";
            }
        } 
    } catch (e) {}

    Enable_TelBtn_ActMode();

    g.btnNext.focus();
    window.external.set_DialAlternative(false);
    g.btnNext.onclick = DialErrorNextBtnHandler;
    g.btnSkip.onclick = ErrorSkipBtnHandler;
}

function Cnncterr_LoadMe()
{
    DefaultErr_LoadMe();
    g.btnNext.onclick = CnncterrNextBtnHandler;
    if (g.Callwait != null)
        g.Callwait.value = TapiObj.get_CallWaiting;
}

var g_AltnumberHolder   = null;
var g_OutsidelineHolder = null;
var g_CallwaitingHolder = null;

function Toobusy_LoadMe()
{
    DefaultErr_LoadMe();
    
    g.spanDisplayNumber.innerText = window.external.get_DialNumber;
    g.edtOutsideLine.value = TapiObj.get_DialOut;
    g.edtCallWaiting.value = TapiObj.get_CallWaiting;
    if (1 == TapiObj.get_PhoneSystem)
    {
        g.DialTone.checked = true;
    }
    else
    {
        g.DialPulse.checked = true;
    }
    
    g.btnNext.onclick = ToobusyNextBtnHandler;
    
    SelectDialRule();
}


function NewToobusy_LoadMe()
{
    DefaultErr_LoadMe();

    
    var L_tbstr1_Text = "·« Ì„ﬂ‰ ·»—‰«„Ã «·≈⁄œ«œ «·« ’«· »Â–« «·—ﬁ„ · ‰‘Ìÿ «·ﬂ„»ÌÊ — Ê ”ÃÌ·Â.";
    var L_tbstr2_Text = "·« Ì„ﬂ‰ ·»—‰«„Ã «·≈⁄œ«œ «·« ’«· »Â–« «·—ﬁ„ · ‰‘Ìÿ «·ﬂ„»ÌÊ —.";
    var L_tbstr3_Text = "·« Ì„ﬂ‰ ·»—‰«„Ã «·≈⁄œ«œ «·« ’«· »Â–« «·—ﬁ„ · ”ÃÌ· «·ﬂ„»ÌÊ —.";

    var L_tbstr4_Text = "··„ «»⁄… »œÊ‰  ‰‘Ìÿ «·ﬂ„»ÌÊ — Ê ”ÃÌ·Â° «‰ﬁ— ›Êﬁ <b> ŒÿÌ</b>.";
    var L_tbstr5_Text = "··„ «»⁄… »œÊ‰  ‰‘Ìÿ «·ﬂ„»ÌÊ —° «‰ﬁ— ›Êﬁ <b> ŒÿÌ</b>.";
    var L_tbstr6_Text = "··„ «»⁄… »œÊ‰  ”ÃÌ· «·ﬂ„»ÌÊ —, «‰ﬁ— ›Êﬁ <b> ŒÿÌ</b>.";
    
    if (g_DoActivation)
    {
        if  ((g_PostToMS) || (g_PostToOEM))
        {
            g.tbpar1.innerHTML = L_tbstr1_Text;
            g.tbpar2.innerHTML = L_tbstr4_Text;
        }
        else
        {
            g.tbpar1.innerHTML = L_tbstr2_Text;
            g.tbpar2.innerHTML = L_tbstr5_Text;
        }
    }
    else
    {
        g.tbpar1.innerHTML = L_tbstr3_Text;
        g.tbpar2.innerHTML = L_tbstr6_Text;
    }
    


    var fLoadPhoneNumber = window.external.get_DialNumber;
    g.spanDisplayNumber.innerHTML = "&nbsp;&nbsp;<B>" + fLoadPhoneNumber + "</B>";

    if (gTooBusyHaveError1)
        g.tberrspan1.style.visibility = "visible";
    if (gTooBusyHaveError2)
        g.tberrspan2.style.visibility = "visible";
    if (gTooBusyHaveError3)
        g.tberrspan3.style.visibility = "visible";


    if (((g_AltnumberHolder == null) || (g_AltnumberHolder == "")) && (!gTooBusyHaveError1))
    {
        g_AltnumberHolder = "";
        g.edt_altnumber.value = "";
        g.edt_altnumber.style.backgroundColor = "#dddddd";
        g.edt_altnumber.style.disabled = true;
        g.cb_altnumber.checked = false;
    }
    else
    {
        g.edt_altnumber.disabled = false;
        g.edt_altnumber.value = g_AltnumberHolder;
        g.edt_altnumber.style.backgroundColor = "#ffffff";
        g.cb_altnumber.checked = true;
    }

    if (!gTooBusyHaveError2)
        g_OutsidelineHolder = TapiObj.get_DialOut;

    if (((g_OutsidelineHolder == null) || (g_OutsidelineHolder == "")) && (!gTooBusyHaveError2))
    {
        g_OutsidelineHolder = "";
        g.edt_outsideline.value = "";
        g.edt_outsideline.style.backgroundColor = "#dddddd";
        g.edt_outsideline.disabled = true;
        g.cb_outsideline.checked = false;
    }
    else
    {
        g.edt_outsideline.disabled = false;
        g.edt_outsideline.value = g_OutsidelineHolder;
        g.edt_outsideline.style.backgroundColor = "#ffffff";
        g.cb_outsideline.checked = true;
    }


    if (!gTooBusyHaveError3)
        g_CallwaitingHolder = TapiObj.get_CallWaiting;

    if (((g_CallwaitingHolder == null) || (g_CallwaitingHolder == "")) && (!gTooBusyHaveError3))
    {
        g_CallwaitingHolder = "";
        g.edt_callwaiting.value = "";
        g.edt_callwaiting.style.backgroundColor = "#dddddd";
        g.edt_callwaiting.disabled = true;
        g.cb_callwaiting.checked = false;
    }
    else
    {
        g.edt_callwaiting.disabled = false;
        g.edt_callwaiting.value = g_CallwaitingHolder;
        g.edt_callwaiting.style.backgroundColor = "#ffffff";
        g.cb_callwaiting.checked = true;
    }

    if (1 == TapiObj.get_PhoneSystem)
    {
        g.DialTone.checked = true;
    }
    else
    {
        g.DialPulse.checked = true;
    }

    g.btnNext.onclick = NewToobusyNextBtnHandler;
}


function Check_cb_altnumber()
{
    if (g.cb_altnumber.checked == true)
    {
        g.edt_altnumber.style.backgroundColor = "#ffffff";
        g.edt_altnumber.disabled = false;
        g.edt_altnumber.value = g_AltnumberHolder;
        g.edt_altnumber.focus();
    }
    else
    {
        g_AltnumberHolder = g.edt_altnumber.value;
        g.edt_altnumber.value = "";
        g.edt_altnumber.style.backgroundColor = "#dddddd";
        g.edt_altnumber.disabled = true;
        g.lbl_altnumber.innerHTML = L_altnumber_Text;
        g.lbl_altnumber.className = "text-primary";
    }
}


function Check_cb_outsideline()
{
    if (g.cb_outsideline.checked == true)
    {
        g.edt_outsideline.style.backgroundColor = "#ffffff";
        g.edt_outsideline.disabled = false;
        g.edt_outsideline.value = g_OutsidelineHolder;
        g.edt_outsideline.focus();
    }
    else
    {
        g_OutsidelineHolder = g.edt_outsideline.value;
        g.edt_outsideline.value = "";
        g.edt_outsideline.style.backgroundColor = "#dddddd";
        g.edt_outsideline.disabled = true;
        g.lbl_outsideline.innerHTML = L_outsideline_Text;
        g.lbl_outsideline.className = "text-primary";
    }
}


function Check_cb_callwaiting()
{
    if (g.cb_callwaiting.checked == true)
    {
        g.edt_callwaiting.style.backgroundColor = "#ffffff";
        g.edt_callwaiting.disabled = false;
        g.edt_callwaiting.value = g_CallwaitingHolder;
        g.edt_callwaiting.focus();
    }
    else
    {
        g_CallwaitingHolder = g.edt_callwaiting.value;
        g.edt_callwaiting.value = "";
        g.edt_callwaiting.style.backgroundColor = "#dddddd";
        g.edt_callwaiting.disabled = true;
        g.lbl_callwaiting.innerHTML = L_callwaiting_Text;
        g.lbl_callwaiting.className = "text-primary";
    }
}

function SelectDialRule()
{    
    if (g.DialRuleYes.checked)
    {
        if (g.edtPhoneNumber)
            g.edtPhoneNumber.disabled=false;
        g.edtOutsideLine.disabled=true;
        g.edtCallWaiting.disabled=true;
    }
    else
    {
        if (g.edtPhoneNumber)
            g.edtPhoneNumber.disabled=true;
        g.edtOutsideLine.disabled=false;
        g.edtCallWaiting.disabled=false;
    }
}

function RestoreDialRule()
{
    g.spanDisplayNumber.innerText = window.external.get_DialNumber;
    if (g.edtPhoneNumber)
        g.edtPhoneNumber.value = window.external.get_PhBkNumber;
    g.edtOutsideLine.value = TapiObj.get_DialOut;
    g.edtCallWaiting.value = TapiObj.get_CallWaiting;
    if (1 == TapiObj.get_PhoneSystem)
    {
        g.DialTone.checked = true;
    }
    else
    {
        g.DialPulse.checked = true;
    }
}


function ISPInsError_NextBtnHandler() 
{
    PopCKPT();
    GoNavigate(CKPT_OEMCUST);
}
function ISPInsError_LoadMe()
{
    DefaultErr_LoadMe();
    g.ins_ISPName1.innerText = window.external.get_ISPName;
    g.ins_ISPName2.innerText = window.external.get_ISPName;
    g.btnNext.onclick = ISPInsError_NextBtnHandler;
}



function NoAnswNextBtnHandler() 
{
    if (g.DialTone.checked)
    {
        TapiObj.set_PhoneSystem(1);
    }
    else
    {
        TapiObj.set_PhoneSystem(0);
    }
    
    if (g.DialRuleYes.checked) {
        if (CheckPhoneNumer(g.edtPhoneNumber.value))
        {
            window.external.set_DialNumber(g.edtPhoneNumber.value);
            DialErrorNextBtnHandler();
        }
        else
        {
            g.edtPhoneNumber.value = window.external.get_DialNumber;
            g.error_mesg.innerHTML = L_EnterValidPhoneNumber_Text;
            g.error_mesg.style.display="inline";
        }
    }
    else
    {
        TapiObj.set_DialOut(g.edtOutsideLine.value);
        TapiObj.set_CallWaiting(g.edtCallWaiting.value);
        window.external.set_DialAlternative(false);
        DialErrorNextBtnHandler();
    }
    

    
}

function NoAnsw_LoadMe()
{
    DefaultErr_LoadMe();
        
    g.spanDisplayNumber.innerText = window.external.get_DialNumber;
    g.edtPhoneNumber.value = g.spanDisplayNumber.innerText;
    g.edtOutsideLine.value = TapiObj.get_DialOut;
    g.edtCallWaiting.value = TapiObj.get_CallWaiting;
    if (1 == TapiObj.get_PhoneSystem)
    {
        g.DialTone.checked = true;
    }
    else
    {
        g.DialPulse.checked = true;
    }

    g.btnNext.onclick = NoAnswNextBtnHandler;
    
    SelectDialRule();

}



function NoModemBtnHandler() 
{
    window.external.Finish();
}
function NoModem_LoadMe()
{
    DefaultErr_LoadMe();
    g.btnNext.onclick = NoModemBtnHandler;
}

function Pulse_LoadMe()
{
    DefaultErr_LoadMe();
    if (1 == TapiObj.set_PhoneSystem)
        g.tone.checked = true;
    else
        g.pulse.checked = true;
}

function DesktopPbErr_LoadMe()
{
    InitFrameRef();
    if (InActivation_AppMode())
    {
        GetPageTitle();
    }

    InitButtons();

    var L_DeskpbErrOEMName_Text = g_OEMNameStr;
    if (L_DeskpbErrOEMName_Text == "")
    {
        L_DeskpbErrOEMName_Text = L_MissingOEMName_Text;
    }

    var L_DeskMainPBerrMsg_Text = "";

    if (g_DoActivation)
    {
        if  ((g_PostToMS) && (g_PostToOEM))
        {
            L_DeskMainPBerrMsg_Text        = "«· ”ÃÌ· Ê«· ‰‘Ìÿ ⁄»— «·≈‰ —‰  €Ì— „ Ê›— Õ«·Ì« ›Ì »·œﬂ √Ê ≈ﬁ·Ì„ﬂ. · ”ÃÌ· «·ﬂ„»ÌÊ — »œÊ‰ « ’«· ≈‰ —‰ ° «·—Ã«¡ «·« ’«· »«·—ﬁ„ %1. Ì„ﬂ‰ﬂ  ‰‘Ìÿ ‰”Œ ﬂ „‰ Windows »«” Œœ«„ « ’«· ≈‰ —‰  √Ê »Ê«”ÿ… «·« ’«· »‹ Microsoft ⁄»— «·Â« ›.";
            g.Desktoppberr_par1.innerText  = ApiObj.FormatMessage(L_DeskMainPBerrMsg_Text, L_DeskpbErrOEMName_Text);
        }
        else if ((g_PostToMS) && (!g_PostToOEM))
        {
            g.Title_Text.innerText = " ⁄–— «· ‰‘Ìÿ Ê«· ”ÃÌ· ⁄»— «·≈‰ —‰ ";
            GetPageTitle();
            L_DeskMainPBerrMsg_Text        = "«· ”ÃÌ· Ê«· ‰‘Ìÿ ⁄»— «·≈‰ —‰  €Ì— „ Ê›— Õ«·Ì« ›Ì »·œﬂ √Ê ≈ﬁ·Ì„ﬂ. Ì„ﬂ‰ﬂ  ‰‘Ìÿ ‰”Œ ﬂ „‰ Windows »«” Œœ«„ « ’«· ≈‰ —‰  √Ê »Ê«”ÿ… «·« ’«· »‹ Microsoft ⁄»— «·Â« ›. √‰  »Õ«Ã… ≈·Ï « ’«· ≈‰ —‰  · ”ÃÌ· ‰”Œ ﬂ „‰ Windows „⁄ Microsoft.";
            g.Desktoppberr_par1.innerText  = L_DeskMainPBerrMsg_Text;
        }
        else if ((!g_PostToMS) && (g_PostToOEM))
        {
            L_DeskMainPBerrMsg_Text        = "«· ‰‘Ìÿ ⁄»— «·≈‰ —‰  €Ì— „ Ê›— Õ«·Ì« ›Ì »·œﬂ √Ê ≈ﬁ·Ì„ﬂ. Ì„ﬂ‰ﬂ  ‰‘Ìÿ ‰”Œ ﬂ „‰ Windows »«” Œœ«„ « ’«· ≈‰ —‰  √Ê »Ê«”ÿ… «·« ’«· »‹ Microsoft ⁄»— «·Â« ›. · ”ÃÌ· «·ﬂ„»ÌÊ — »œÊ‰ « ’«· ≈‰ —‰ ° «·—Ã«¡ «·« ’«· »«·—ﬁ„ %1.";
            g.Desktoppberr_par1.innerText  = ApiObj.FormatMessage(L_DeskMainPBerrMsg_Text, L_DeskpbErrOEMName_Text);
        }
        else
        {
            g.Title_Text.innerText = " ⁄–— «· ‰‘Ìÿ ⁄»— «·≈‰ —‰ ";
            GetPageTitle();
            
            L_DeskMainPBerrMsg_Text        = "«· ‰‘Ìÿ ⁄»— «·≈‰ —‰  €Ì— „ Ê›— Õ«·Ì« ›Ì »·œﬂ √Ê ≈ﬁ·Ì„ﬂ. Ì„ﬂ‰ﬂ  ‰‘Ìÿ ‰”Œ ﬂ „‰ Windows »«” Œœ«„ « ’«· ≈‰ —‰  √Ê »Ê«”ÿ… «·« ’«· »‹ Microsoft ⁄»— «·Â« ›.";
            g.Desktoppberr_par1.innerText  = L_DeskMainPBerrMsg_Text;
        }
    }
    else
    {
        if ((!g_PostToMS) && (g_PostToOEM))
        {
            g.Title_Text.innerText = " ⁄–— «· ”ÃÌ· ⁄»— «·≈‰ —‰ ";
            GetPageTitle();
            L_DeskMainPBerrMsg_Text        = "«· ”ÃÌ· ⁄»— «·≈‰ —‰  €Ì— „ Ê›— Õ«·Ì« ›Ì »·œﬂ √Ê ≈ﬁ·Ì„ﬂ. · ”ÃÌ· «·ﬂ„»ÌÊ — »œÊ‰ « ’«· ≈‰ —‰ ° «·—Ã«¡ «·« ’«· »«·—ﬁ„ %1.";
            g.Desktoppberr_par1.innerText  = ApiObj.FormatMessage(L_DeskMainPBerrMsg_Text, L_DeskpbErrOEMName_Text);
        }
    }

    g.btnBack.focus();
    g.btnBack.onclick = window.parent.SimpleNavBack;
}
