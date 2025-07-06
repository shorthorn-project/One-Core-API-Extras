



var L_PhoneNumberLegit_Text = "\\map=\"one \\pau=100\\ eight hundred R U le jit\"=\"1-800-R U LEGIT\"\\";


var g_strRegionSetting = "";
var g_strKeyboardSetting = "";
var g_strLangSetting = " ";



function Agent_AddCommonCommands() 
{
    g_AgentCharacter.Commands.RemoveAll();

    var L_AddCommonCommands1_Text = "Å&ÛáÇÞ ÇáÞÇÆãÉ";

    g_AgentCharacter.Commands.Add("CloseMenu", L_AddCommonCommands1_Text);
        
    if (g_bAgentShowSpecialISPCommands) 
    {
        
		var L_AddCommonCommands2_Text = "ÇÎÈÑäì Úä ÇáÊÓÌíá ÈÅäÊÑä&Ê";
		var L_AddCommonCommands3_Text = "ÅÚÇÏÉ ÇáÊÓÌíá ÈÅ&äÊÑäÊ";
		var L_AddCommonCommands4_Text = "Ê&ÎØí ÇáÊÓÌíá ÈÅäÊÑäÊ";

		try 
		{
			g_AgentCharacter.Commands.Add(kpszISPSpecialCommand1, L_AddCommonCommands2_Text);
			g_AgentCharacter.Commands.Add(kpszISPSpecialCommand2, L_AddCommonCommands3_Text);
			g_AgentCharacter.Commands.Add(kpszISPSpecialCommand3, L_AddCommonCommands4_Text);
		}
		catch (e) 
		{
		}
	}
}

function Agent_AddAssistantanceCommand() 
{
    if (!window.external.get_RetailOOBE()) 
    {
        var L_AddAssistantanceCommand1_Text = "Èãä íãßääí ÇáÇÊÕÇá ááÍÕæá Úáì ÇáãÒíÏ ãä ÇáãÓÇÚÏ&É¿";       

        g_AgentCharacter.Commands.Add("Agent_OnCommand_AboutAssistance", L_AddAssistantanceCommand1_Text);
    }
}

function Agent_OnCommand_AboutAssistance() 
{

    Agent_StopAll();

    var L_AboutAssistance1_Text = "ÇáÇÊÕÇá ÈÇáÔÑßÉ ÇáãÕäÚÉ ááßãÈíæÊÑ Úáì ý%s.";
    var re = /%s/i;
    var L_AboutAssistance2_Text = "ÇÊÕá ÈÇáÔÑßÉ ÇáãÕäøÚÉ ááßãÈíæÊÑ.";

    
    

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
            Agent_Speak(L_AboutAssistance2_Text);
    else
            Agent_Speak(L_AboutAssistance1_Text.replace(re, strPhoneNumber));

    Agent_Play("ReadReturn");
}

function Agent_AddWhatToDoNextCommand() 
{
    var L_AddWhatToDoNextCommand1_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";
    g_AgentCharacter.Commands.Add("Agent_OnCommand_WhatToDoNext", L_AddWhatToDoNextCommand1_Text);
}

function Agent_OnCommand_WhatToDoNext()
{
    Agent_StopAll();
    
    if (g.btnNext.style.visibility == 'visible')
    {
        if (window.parent.document.dir == "rtl")
        {
            Agent_MoveToElement(g.btnNext, "TopCenterWidth");
        }
        else
        {
            Agent_MoveToElement(g.btnNext, "TopLeft");
        }        
    
        Agent_Play("PointDown");

        var L_WhatToDoNext1_Text = "ááãÊÇÈÚÉ¡ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí'.";
        Agent_Speak(L_WhatToDoNext1_Text);
        
        Agent_Play("RestPose");
    }
   
    if (g.btnBack.style.visibility == 'visible')
    {
        if (window.parent.document.dir == "rtl")
        {
            Agent_MoveToElement(g.btnBack, "TopLeft");
        }
        else
        {
            Agent_MoveToElement(g.btnBack, "TopCenterWidth");
        } 
    
        Agent_Play("PointDown"); 

        var L_WhatToDoNext2_Text = "ááÑÌæÚ Åáì ÇáÎØæÉ ÇáÓÇÈÞÉ¡ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÓÇÈÞ'.";
        Agent_Speak(L_WhatToDoNext2_Text);
        
        Agent_Play("RestPose");   
    }
    
    if (g.btnSkip.style.visibility == 'visible')
    {
        if (window.parent.document.dir == "rtl")
        {
            Agent_MoveToElement(g.btnSkip, "TopCenterWidth");
        }
        else
        {
            Agent_MoveToElement(g.btnSkip, "TopLeft");
        } 
    
        Agent_Play("PointDown");

        var L_WhatToDoNext3_Text = "íãßäß ÃíÖÇð ÊÎØí ÎØæÉ ÇáÅÏÎÇá åÐå ÈæÇÓØÉ ÇáäÞÑ ÝæÞ ÇáÒÑ 'ÊÎØí'.";
        Agent_Speak(L_WhatToDoNext3_Text);
        
        Agent_Play("RestPose");
    }       
}

function Agent_DoSpecialISPCommand1() 
{
	
	
			
	Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
			
	var L_ISPSpecialTellMeAboutInternetSignup1_Text = "ÃäÊ ÊÚãá ÍÇáíÇð ÚÈÑ ÚãáíÉ ÊÓÌíá ááæÕæá Åáì ÅäÊÑäÊ.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup1_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup2_Text = "ÅÐÇ æÇÌåÊ ÃíÉ ãÔßáÇÊ Ýí ÇáãÊÇÈÚÉ¡ ÝÇäÞÑ ÝæÞí Ãæ ÇÖÛØ Úáì F1¡";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup2_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup3_Text = "æÓÃÞæã ÈÚÑÖ ÃæÇãÑ Ýí ÇáÞÇÆãÉ íãßäß ÇÎÊíÇÑåÇ ááÈÏÁ ãÑÉ ËÇäíÉ Ãæ ááÊÎØí Åáì ÇáÞÓã ÇáÊÇáí.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup3_Text);
}

function Agent_DoSpecialISPCommand2() 
{
	
	
			
	
			
	window.parent.GoBack();
}

function Agent_DoSpecialISPCommand3() 
{
    
    
    			
    window.parent.GoCancel();			
}

function Agent_EncourageNextButton() 
{
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_EncourageNextButton1_Text = "ÇäÞÑ ÝæÞ ÒÑ ÇáÊÇáí. | ÝÞØ ÇäÞÑ ÝæÞ ÒÑ ÇáÊÇáí! | ÇáÑÌÇÁ ÇáäÞÑ ÝæÞ ÒÑ ÇáÊÇáí. | ÇäÞÑ ÝæÞ ÒÑ ÇáÊÇáí ááÇäÊÞÇá Åáì ÇáÎØæÉ ÇáÊÇáíÉ.";
    Agent_Speak(L_EncourageNextButton1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnF1() 
{
    var L_OnF1_Text = "ßíÝ íãßä Ãä ÃÓÇÚÏß¿ | ßíÝ íãßääí ãÚÇæäÊß¿";
    Agent_Speak(L_OnF1_Text);
    
    Agent_Play("RestPose");    
}





function Agent_PreWelcome() 
{
    g_bAgentPreWelcome = true;

    Agent_PreWelcomeScript();
}

function Agent_PreWelcomeScript() 
{
    Agent_Play("Shimmer");

    var L_PreWelcomeScript1_Text = "ãÑÍÈÇ Èß Ýí Windows XP !";
    Agent_Speak(L_PreWelcomeScript1_Text);

    var L_PreWelcomeScript2_Text = "ÃäÇ åäÇ áãÓÇÚÏÊß Ýí ÚãáíÉ ÅÚÏÇÏ ÌåÇÒß.";
    Agent_Speak(L_PreWelcomeScript2_Text);

    var L_PreWelcomeScript3_Text = "íãßääí ÔÑÍ ÇáÎØæÇÊ ÃËäÇÁ ÞíÇãß ÈåÇ.";
    Agent_Speak(L_PreWelcomeScript3_Text);
                
    Agent_MoveToElement(document.all("AssistImg"), "LeftCenter"); 
    
    

    var L_PreWelcomeScript4_Text = "Ýí Ãí æÞÊ ÊÍÊÇÌ Èå ááãÓÇÚÏÉ¡ ÇäÞÑ ÝæÞ ÕæÑÊí ÈÇáãÇæÓ Ãæ ÇÖÛØ ãÝÊÇÍ þF1 Úáì áæÍÉ ÇáãÝÇÊíÍ.";
    Agent_Speak(L_PreWelcomeScript4_Text);
    
    Agent_Play("PointLeft");

    var L_PreWelcomeScript5_Text = "ÓÃßæä åäÇ ÅÐÇ ÇÍÊÌÊäí.";
    Agent_Speak(L_PreWelcomeScript5_Text);
    
    Agent_Play("RestPose");

    g_AgentRequestHideImage = g_AgentCharacter.Hide();
}



function Agent_WelcomeAddCommands() 
{
    
    
    

    var L_WelcomeAddCommands1_Text = "&ÃÎÈÑäí Úä åÐå ÇáÚãáíÉ";
    var L_WelcomeAddCommands2_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_OnWelcomeCommand_AboutProcess", L_WelcomeAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnWelcomeCommand_WhatToDoNext", L_WelcomeAddCommands2_Text);
    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_WelcomeIntro() 
{
    
    

    if (!g_bAgentPreWelcome)
        Agent_PreWelcome();
    else
        return;
}

function Agent_OnWelcomeCommand_WhatToDoNext() 
{
    if (window.parent.document.dir == "rtl")
    {
        Agent_MoveToElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_MoveToElement(g.btnNext, "TopLeft");    
    }
    
    Agent_Play("PointDown");

    var L_WelcomeWhatToDoNext1_Text = "Åä ßäÊ ÌÇåÒÇð ááÈÏÁ¡ ÇäÞÑ ÝæÞ ÒÑ ÇáÊÇáí.";
    Agent_Speak(L_WelcomeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnWelcomeCommand_AboutProcess() 
{
    Agent_StopAll();

    var L_AboutProcess1_Text = "ãÇ ÊÔÇåÏå Ýí ÇáÎáÝ åæ ÇáÔÇÔÉ ÇáÃæáì ãä ÊÓáÓá ÔÇÔÇÊ ãÕããÉ áãÓÇÚÏÊß ÈÇáÊÃßÏ ãä Ãä ÇáßãÈíæÊÑ áÏíß Êã ÅÚÏÇÏå ÈÇáØÑíÞÉ ÇáÊí ÊÑíÏ.";
    Agent_Speak(L_AboutProcess1_Text);

    var L_AboutProcess2_Text = "ÓÊØáÈ ãäß ßá ÔÇÔÉ  ÅÌÑÇÁ ÇÎÊíÇÑ Ãæ ßÊÇÈÉ ÈÚÖ ÇáãÚáæãÇÊ¡ Ãæ ÊÑÔÏß Íæá ÇáÎØæÉ ÇáÊÇáíÉ.";
    Agent_Speak(L_AboutProcess2_Text);

    var L_AboutProcess3_Text = "åäÇ ãÚÇíäÉ ÓÑíÚÉ ááÎØæÇÊ ÇáÊí ÓäÞæã ÈåÇ Ýí ÇáÏÞÇÆÞ ÇáÞáíáÉ ÇáÊÇáíÉ:";
    Agent_Speak(L_AboutProcess3_Text);

    var L_AboutProcess4_Text = "ÃæáÇð¡ ÓäÊÃßÏ ãä ÃÌåÒÉ ÇáßãÈíæÊÑ áÏíß¡ ãËá ãßÈÑÇÊ ÇáÕæÊ¡ æáæÍÉ ÇáãÝÇÊíÍ¡ æÇáÓÇÚÉ¡ ÊÚãá ÈÔßá Óáíã.";
    Agent_Speak(L_AboutProcess4_Text);

    var L_AboutProcess5_Text = "ÓíÊã ÇáÊÃßÏ ãä Ãä ÇáßãÈíæÊÑ áÏíß ãæÕæá ÈÔßá ÕÍíÍ Åáì ÔÈßÉ ÇÊÕÇá Ýí ÍÇá ÃÑÏÊå Ãä íßæä ßÐáß.";
    Agent_Speak(L_AboutProcess5_Text);


    var L_AboutProcess6_Text = "ËÇäíÇð¡ ÓÊÊáÞì ÇÊÝÇÞíÉ ÊÑÎíÕ ÊæÖÍ ÔÑæØ ÇÓÊÎÏÇã %1.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess6_Text, g_ProductName));
    
    if (!window.external.get_RetailOOBE()) 
    {
    var L_AboutProcess7_Text = "ÅÐÇ ßÇä áÏì ÇáßãÈíæÊÑ ãæÏã íÚãá Ãæ ÇÊÕÇá ÈÔÈßÉ ÇÊÕÇá¡ Óíßæä áÏíß ÇáÎíÇÑ ááÊÓÌíá ãÚ  Microsoft æ%1 ÈÍíË íãßääÇ ÅÑÓÇá ãÚáæãÇÊ áß Úä ÊÍÏíËÇÊ ÇáãäÊÌÇÊ æÚä ÇáÚÑæÖ ÇáÊí ÞÏ Êõåãß.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess7_Text, g_OEMNameStr));
    } 
    else 
    {    
    var L_AboutProcess7_Text = "ÅÐÇ ßÇä áÏì ÇáßãÈíæÊÑ ãæÏã íÚãá Ãæ ÇÊÕÇá ÈÔÈßÉ ÇÊÕÇá¡ Óíßæä áÏíß ÇáÎíÇÑ ááÊÓÌíá ãÚ  Microsoft ÈÍíË íãßääÇ ÅÑÓÇá ãÚáæãÇÊ áß Úä ÊÍÏíËÇÊ ÇáãäÊÌÇÊ æÚä ÇáÚÑæÖ ÇáÊí ÞÏ Êõåãß.";
    Agent_Speak(L_AboutProcess7_Text);
    }       

    var L_AboutProcess8_Text = "Óíßæä áÏíß ÇáÎíÇÑ ááÊÍÞÞ ãä ÃÕÇáÉ %1 ááÊÃßÏ ãä Ãäß ÊÓÊÎÏã äÓÎÉ ÔÑÚíÉ.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess8_Text, g_ProductName));

    var L_AboutProcess9_Text = "ËÇáËÇð¡ íãßääí ãÓÇÚÏÊß Úáì ÇáÇÊÕÇá ÈÅäÊÑäÊ ÅÐÇ ÃÑÏÊ åÐÇ.";
    Agent_Speak(L_AboutProcess9_Text); 

    var L_AboutProcess10_Text = "ÅÐÇ ÞÑÑÊ ÊÎØí åÐå ÇáÎØæÉ¡ íãßäß ÏÇÆãÇð ÇáÇÊÕÇá áÇÍÞÇð ãÊì ÃÑÏÊ Ðáß.";
    Agent_Speak(L_AboutProcess10_Text);

    var L_AboutProcess11_Text = "æÑÇÈÚÇð¡ ÈÅãßÇäí ãÓÇÚÏÊß Úáì ÌÚá åÐÇ ÇáßãÈíæÊÑ ÞÇÈá ááÊÎÕíÕ ãä ÃÌá ßá ÔÎÕ ÓíÞæã ÈÇÓÊÎÏÇãå. ";
    Agent_Speak(L_AboutProcess11_Text);

    var L_AboutProcess12_Text = "åÐÇ ßá ãÇ åäÇáß¡ áÇ ÏÇÚí ááÐåÇÈ ÈÚíÏÇð¡ ÝáäÔÑÚ ÈÇáÚãá!";
    Agent_Speak(L_AboutProcess12_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_MoveToElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_MoveToElement(g.btnNext, "TopLeft");
    }
    
    Agent_Play("PointDown");

    var L_AboutProcess13_Text = "ááÈÏÁ¡ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí'.";
    Agent_Speak(L_AboutProcess13_Text);
    
    Agent_Play("RestPose");
}


                                                       

function Agent_TimeZoneAddCommands() 
{
    var L_TimeZoneCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_TimeZoneCommand2_Text = "&ßíÝ ÃÍÏÏ ÇáãäØÞÉ ÇáÒãäíÉ¿";

    g_AgentCharacter.Commands.Add("Agent_OnTimeZoneCommand_AboutStep", L_TimeZoneCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnTimeZoneCommand_SelectZone", L_TimeZoneCommand2_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnTimeZonePreDisplayMenu() 
{
    if (g.document.all("daylight").disabled) 
    {
        try 
        {
            g_AgentCharacter.Commands.Remove("Agent_OnTimeZoneCommand_DaylightSavings");
        }
        catch (e) 
        {
        }
    }

    else 
    { 
        var L_TimeZoneMenuCommand3_Text = "ãÇ åæ ÇáÊæ&ÞíÊ ÇáÕíÝí¿";

        try 
        {
            g_AgentCharacter.Commands.Insert("Agent_OnTimeZoneCommand_DaylightSavings","Agent_OnCommand_WhatToDoNext",true,L_TimeZoneMenuCommand3_Text);
        }
        catch (e) 
        {
        }
    }
}

function Agent_OnTimeZoneCommand_AboutStep() 
{
    var L_ExplainTimeZoneStep1_Text = "ÃÎÈÑäÇ Úä ÇáãäØÞÉ ÇáÒãäíÉ ÇáÊí ÓÊÓÊÎÏã ÇáßãÈíæÊÑ ÝíåÇ¡ æÓíÞæã Windows ÈÊÚííä ÓÇÚÉ ÊæÞíÊ ÇáßãÈíæÊÑ ÊÈÚÇð áåÇ.";
    Agent_Speak(L_ExplainTimeZoneStep1_Text);

    var L_ExplainTimeZoneStep2_Text = "ÃíÖÇð¡ ÅÐÇ ÃÑÏÊ¡ íãßäß ÌÚá Windows íÞæã ÈÊÍÏíË ÇáÓÇÚÉ ãä ÃÌá ÇáÊæÞíÊ ÇáÕíÝí ÊáÞÇÆíÇð.";
    Agent_Speak(L_ExplainTimeZoneStep2_Text);

    var L_ExplainTimeZoneStep3_Text = "åÐå åí ÇáÎØæÉ ÇáÃÎíÑÉ ÇáÊí ÊÊÚáÞ ÈÃÌåÒÊß.";
    Agent_Speak(L_ExplainTimeZoneStep3_Text);

    var L_ExplainTimeZoneStep4_Text = "ÊÇáíÇð¡ ÓääÊÞá Åáì ÇÊÝÇÞíÉ ÇáÊÑÎíÕ.";
    Agent_Speak(L_ExplainTimeZoneStep4_Text);
    
}

function Agent_OnTimeZoneCommand_SelectZone() 
{
    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone1_Text = "ÊÙåÑ ÇáãäÇØÞ ÇáÒãäíÉ Ýí åÐå ÇáÞÇÆãÉ ÈÊæÞíÊ ÛÑíäÊÔ Ãæ GMT¡ íõÌãÚ áåÇ Ãæ íõØÑÍ ãäåÇ ÚÏÏ ÓÇÚÇÊ.";
    Agent_Speak(L_TellUserHowToSelectTimeZone1_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone2_Text = "ÇäÞÑ åäÇ Ãæ ÇÖÛØ ãÝÊÇÍ Tab Úáì áæÍÉ ÇáãÝÇÊíÍ ÍÊì ÊÕá ÅáíåÇ. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone2_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Right");

    var L_TellUserHowToSelectTimeZone3_Text = "Ëã ÇäÞÑ ÝæÞ ÃÒÑÇÑ ÇáÃÓåã ÇáÕÛíÑÉ åÐå¡ Ãæ ÇÓÊÎÏã ãÝÇÊíÍ ÇáÃÓåã ááÃÚáì æááÃÓÝá Úáì áæÍÉ ÇáãÝÇÊíÍ¡ ááÊãÑíÑ ÎáÇá ÇáãäÇØÞ ÇáÒãäíÉ. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone3_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone4_Text = "ÚäÏãÇ ÊÔÇåÏ ÇáãäØÞÉ ÇáÒãäíÉ ÇáÊí ÊÑíÏ¡ ÇäÞÑ ÝæÞåÇ Ãæ ÇÖÛØ Enter Úáì áæÍÉ ÇáãÝÇÊíÍ.";
    Agent_Speak(L_TellUserHowToSelectTimeZone4_Text);

    var L_TellUserHowToSelectTimeZone5_Text = "ÓÊÙåÑ ÇáãäØÞÉ ÇáÒãäíÉ ÇáÊí ÍÏÏÊåÇ ááÊæ ÈÔßá ããíÒ.";
    Agent_Speak(L_TellUserHowToSelectTimeZone5_Text);

    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserHowToSelectTimeZone6_Text = "ÅÐÇ ßäÊ Ýí ãäØÞÉ ÊÓÊÎÏã ÇáÊæÞíÊ ÇáÕíÝí¡ ÖÚ ÇáãÄÔÑ åäÇ¡ Ëã ÇäÞÑ ãÑÉ æÇÍÏÉ áÊÍÏíÏ åÐÇ ÇáÎíÇÑ.";
    Agent_Speak(L_TellUserHowToSelectTimeZone6_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone7_Text = "æÓíÖÈØ Windows ÓÇÚÉ ÇáßãÈíæÊÑ áÏíß ÊáÞÇÆíÇð ãÑÊíä Ýí ÇáÓäÉ.";
    Agent_Speak(L_TellUserHowToSelectTimeZone7_Text);
    
}

function Agent_OnTimeZoneCommand_DaylightSavings() 
{
    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserAboutDaylightOption1_Text = "Ýí ÈÚÖ ÇáãäÇØÞ ÇáÒãäíÉ¡ íÊã ÊÞÏíã Ãæ ÊÃÎíÑ ÇáÓÇÚÉ ÃËäÇÁ ÈÚÖ ÃæÞÇÊ ÇáÓäÉ æÐáß áÖÈØ ÇÎÊáÇÝÇÊ ÇáÊæÞíÊ ÇáÕíÝí.";
    Agent_Speak(L_TellUserAboutDaylightOption1_Text);
    
    Agent_Play("RestPose");

    var L_TellUserAboutDaylightOption2_Text = "ÅÐÇ ßäÊ ÊÑíÏ Ãä íÞæã Windows ÈÖÈØ ÓÇÚÉ ÇáßãÈíæÊÑ ÊáÞÇÆíÇð ÚäÏ ÍÏæË Ðáß¡ ÍÏÏ åÐÇ ÇáÎíÇÑ ÈæÇÓØÉ æÖÚ ÇáãÄÔÑ åäÇ Ëã ÇáäÞÑ áãÑÉ æÇÍÏÉ.";
    Agent_Speak(L_TellUserAboutDaylightOption2_Text);

}



function Agent_OEMHWAddCommands() 
{
    var L_OEMHWMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_OEMHWMenuCommand2_Text = "ßí&Ý áí Ãä ÃÚÑÝ ÅÐÇ ßÇä äÙÇã ÇáÕæÊ íÚãá¿";
    var L_OEMHWMenuCommand3_Text = "ãÇÐÇ áæ Ãä äÙÇã Çá&ÕæÊ áÇ íÚãá¿";
    var L_OEMHWMenuCommand4_Text = "ßíÝ &ÃÔíÑ Åáì ÅÌÇÈÊí¿";

    g_AgentCharacter.Commands.Add("Agent_OnOEMHWAboutThisScreen", L_OEMHWMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnOEMHWHowDoIKnow", L_OEMHWMenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_OnOEMHWIsNotWorking", L_OEMHWMenuCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_OnOEMHWIndicateAnswer", L_OEMHWMenuCommand4_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnOEMHWAboutThisScreen() 
{		
    var L_OEMHWAboutThisScreen1_Text = "åÐå åí ÇáÔÇÔÉ ÇáÊí ÊÊÃßÏ ãä ÎáÇáåÇ Ãä äÙÇã ÇáÕæÊ Ýí ÇáßãÈíæÊÑ íÚãá.";
	  Agent_Speak(L_OEMHWAboutThisScreen1_Text);

    var L_OEMHWAboutThisScreen2_Text = "íÊÃáÝ äÙÇã ÇáÕæÊ ãä ãßÈÑÇÊ ÇáÕæÊ æÈØÇÞÉ ÇáÕæÊ ÏÇÎá ÇáßãÈíæÊÑ¡ æÈÑäÇãÌ %1 ÇáÐí íÓãÍ áß ÈÞÑÇÁÉ ÇáÕæÊ.";
	  Agent_Speak(ApiObj.formatMessage(L_OEMHWAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnOEMHWHowDoIKnow() 
{
    var L_OEMHWHowDoIKnow1_Text = "ÅÐÇ ßäÊ ÊÓãÚ ÕæÊÇð ÇáÂä¡ Ýåæ íÚãá.";
	  Agent_Speak(L_OEMHWHowDoIKnow1_Text);

    var L_OEMHWHowDoIKnow2_Text = "ÅÐÇ ßäÊ áÇ ÊÓãÚ ÕæÊÇð¡ ÊÃßÏ ÃæáÇð ãä ÍÌã ÕæÊ ÇáÓãÇÚÇÊ ááÊÃßÏ ãä Ãäå áã íÊã ÊÚííäå Úáì ãÓÊæì ãäÎÝÖ.";
	  Agent_Speak(L_OEMHWHowDoIKnow2_Text);

    var L_OEMHWHowDoIKnow3_Text = "ÅÐÇ áã íõÕáÍ Ðáß ÇáÃãæÑ¡ ÓäÑì ÇÍÊãÇáÇÊ ÃÎÑì.";
	  Agent_Speak(L_OEMHWHowDoIKnow3_Text);
}

function Agent_OnOEMHWIsNotWorking() 
{
    var L_OEMHWIsNotWorking1_Text = "ÃæáÇð¡ ÊÃßÏ ãä ÊÔÛíá ãßÈÑÇÊ ÇáÕæÊ.";
	  Agent_Speak(L_OEMHWIsNotWorking1_Text);
	
    var L_OEMHWIsNotWorking2_Text = "áÏì ÈÚÖ ãßÈÑÇÊ ÇáÕæÊ ÖæÁ íÔíÑ ÅäåÇ Ýí ÍÇáÉ ÇáÊÔÛíá.";
	  Agent_Speak(L_OEMHWIsNotWorking2_Text);

    var L_OEMHWIsNotWorking3_Text = "ËÇäíÇð¡ ÊÃßÏ ãä ÊÚííä ÍÌã ÇáÕæÊ Åáì ãÓÊæì ãÓãæÚ.";
	  Agent_Speak(L_OEMHWIsNotWorking3_Text);

    var L_OEMHWIsNotWorking4_Text = "ÅÐÇ ßäÊ ãÇÒáÊ áÇ ÊÓãÚ Ãí ÕæÊ íÕÏÑ ÚäåÇ...";
	  Agent_Speak(L_OEMHWIsNotWorking4_Text);

    var L_OEMHWIsNotWorking5_Text = "ËÇáËÇð¡ ÊÃßÏ Ãä ãßÈÑÇÊ ÇáÕæÊ ãæÕæáÉ Åáì ãÃÎÐ ßåÑÈÇÆí¡ æÃäåÇ ãæÕæáÉ Åáì ÇáßãÈíæÊÑ ÈÔßá Óáíã.";
	  Agent_Speak(L_OEMHWIsNotWorking5_Text);
	
	  var L_OEMHWIsNotWorking6_Text = "ãä ÇáÓåá ÇáæÞÚ Ýí ÎØÃ Èíä ÞÇÈÓ ãíßÑæÝæä ÇáßãÈíæÊÑ æÞÇÈÓ ãßÈÑÇÊ ÇáÕæÊ.";
	  Agent_Speak(L_OEMHWIsNotWorking6_Text);

    var L_OEMHWIsNotWorking7_Text = "ÑÇÈÚÇð¡ ÅÐÇ ßÇä áÏíß ÓãÇÚÇÊ stereo¡ ÊÃßÏ ãä ÃäåÇ ãæÕæáÉ ÈÈÚÖåÇ.";
	  Agent_Speak(L_OEMHWIsNotWorking7_Text);

    var L_OEMHWIsNotWorking8_Text = "ÃÎíÑÇð¡ ÅÐÇ ßäÊ ãÇ ÒáÊ áÇ ÊÓãÚ ÕæÊ¡ ÍÇæá ÇÓÊÚÇÑÉ ãÌãæÚÉ ÓãÇÚÇÊ ãä ßãÈíæÊÑ ÂÎÑ.";
	  Agent_Speak(L_OEMHWIsNotWorking8_Text);

    var L_OEMHWIsNotWorking9_Text = "ÅÐÇ ÚãáÊ ÇáÓãÇÚÇÊ ÇáãÓÊáÝÉ æáßä ÓãÇÚÇÊß áã ÊÚãá¡ ÝÚáíß ÇÓÊÈÏÇá Ãæ ÅÕáÇÍ ÓãÇÚÇÊß.";
	  Agent_Speak(L_OEMHWIsNotWorking9_Text);
}

function Agent_OnOEMHWIndicateAnswer() 
{
	  Agent_GestureAtElement(g.document.all("Sound_Yes"), "Left");
    
    var L_OEMHWIndicateAnswer1_Text = "ÝÞØ ÖÚ ãÄÔÑ ÇáãÇæÓ Ýí ÇáÏÇÆÑÉ ÇáÈíÖÇÁ Åáì íãíä ÌæÇÈß¡";
	  Agent_Speak(L_OEMHWIndicateAnswer1_Text);
    
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("radioNoSound"), "Left");

    var L_OEMHWIndicateAnswer2_Text = "æÇäÞÑ ãÑÉ æÇÍÏÉ.";
	  Agent_Speak(L_OEMHWIndicateAnswer2_Text);
    
    Agent_Play("RestPose");

    var L_OEMHWIndicateAnswer3_Text = "ÅÐÇ ÃÑÏÊ ÇÓÊÎÏÇã áæÍÉ ÇáãÝÇÊíÍ ááÅÌÇÈÉ¡ ÇÖÛØ Úáì ãÝÊÇÍ Tab ÍÊì ÊÑì ãÓÊØíá ÈÇåÊ Íæá ÇáÏÇÆÑÉ ÇáÈíÖÇÁ ÇáÊÑ ÊÑíÏ ÊÍÏíÏåÇ¡ æÇÖÛØ Úáì ÒÑ ÇáãÓÇÝÉ Space.";
	  Agent_Speak(L_OEMHWIndicateAnswer3_Text);
}




function Agent_CompNameAddCommands() 
{
    var L_CompNameMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_CompNameMenuCommand2_Text = "ßí&Ý ÃÞæã ÈÊÛííÑ ÇÓã ÇáßãÈíæÊÑ Ýí æÞÊò áÇÍÞ¿";

    g_AgentCharacter.Commands.Add("Agent_OnCompNameAboutThisScreen", L_CompNameMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnCompNameHowToRename", L_CompNameMenuCommand2_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnCompNameAboutThisScreen() 
{		
    var L_CompNameAboutThisScreen1_Text = "åÐå åí ÇáÔÇÔÉ ÍíË ÊÞæã ÈÊÚííä ÇÓã ááßãÈíæÊÑ.";
	  Agent_Speak(L_CompNameAboutThisScreen1_Text);

    var L_CompNameAboutThisScreen2_Text = "åÐÇ ÇáÇÓã íÚÑÝ Úä ÇáßãÈíæÊÑ ÇáÎÇÕ Èß áÈÇÞí ÇáãÓÊÎÏãíä ÅÐÇ ßÇä åÐÇ ÇáßãÈíæÊÑ ãÊÕáÇð ÈÃÌåÒÉ ßãÈíæÊÑ ÃÎÑì Úáì ÔÈßÉ ÇÊÕÇá.";
	  Agent_Speak(L_CompNameAboutThisScreen2_Text);
}

function Agent_OnCompNameHowToRename() 
{
    var L_CompNameHowToRename1_Text = "ÈÚÏ ÇáÇäÊåÇÁ ãä ÊËÈíÊ Windows¡ ÇäÞÑ ÝæÞ áæÍÉ ÇáÊÍßã Úáì ÇáÞÇÆãÉ ÇÈÏÃ.";
	  Agent_Speak(L_CompNameHowToRename1_Text);

    var L_CompNameHowToRename2_Text = "ÇäÞÑ ÝæÞ ÑãÒ 'ÇáäÙÇã' Öãä 'ÇáÃÏÇÁ æÇáÕíÇäÉ' Ëã ÇÊÈÚ ÇáÅÑÔÇÏÇÊ Ýí ÚáÇãÉ ÇáÊÈæíÈ 'ÇÓã ÇáßãÈíæÊÑ'.";
	  Agent_Speak(L_CompNameHowToRename2_Text);

    var L_CompNameHowToRename3_Text = "ÅÐÇ äÓíÊ åÐå ÇáÎØæÇÊ¡ ÇäÞÑ ÝæÞ ÇáÊÚáíãÇÊ æÇáÏÚã Úáì ÇáÞÇÆãÉ ÇÈÏÃ ááÍÕæá Úáì ÇáÃÌæÈÉ áÃÓÆáÊß æãÒíÏ ãä ÇáãÚáæãÇÊ ÇáãÝíÏÉ.";
	  Agent_Speak(L_CompNameHowToRename3_Text);
}




function Agent_SECURITYPASSAddCommands() 
{
    var L_SECURITYPASSMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_SECURITYPASSMenuCommand2_Text = "ãÇ åí ÃÝ&Öá ØÑíÞÉ áÅäÔÇÁ ßáãÉ ãÑæÑ¿";

    g_AgentCharacter.Commands.Add("Agent_OnSECURITYPASSAboutThisScreen", L_SECURITYPASSMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnSECURITYPASSBestWay", L_SECURITYPASSMenuCommand2_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnSECURITYPASSAboutThisScreen() 
{
    var L_SECURITYPASSAboutThisScreen1_Text = "åÐå åí ÇáÔÇÔÉ ÍíË ÊÞæã ÈÅäÔÇÁ ßáãÉ ãÑæÑ ÅÐÇ ÃÑÏÊ ÍãÇíÉ åÐÇ ÇáßãÈíæÊÑ ãä ÇáæÕæá ÇáÛíÑ ãÕÑÍ Èå.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen1_Text);

    var L_SECURITYPASSAboutThisScreen2_Text = "ÔíÁ æÇÍÏ ÊÌÏÑ ãáÇÍÙÊå: ÅÐÇ ßÇä åÐÇ ÇáßãÈíæÊÑ ãÊÕáÇð ÈÃÌåÒÉ ßãÈíæÊÑ ÃÎÑì Úáì ÔÈßÉ ÇÊÕÇá¡ ÝÅä ãä íÞæã ÈÊÓÌíá ÇáÏÎæá ÈÇÓã ÇáãÓÊÎÏã \"Administrator\" æÈßáãÉ ãÑæÑ ÕÇáÍÉ íÓÊØíÚ ÇáæÕæá Åáì ßÇãá ÇáÔÈßÉ.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen2_Text);
    
    var L_SECURITYPASSAboutThisScreen3_Text = "áÐáß¡ ãä ÇáãÓÊÍÓä Ãä ÊØÇáÈ ÈßáãÉ ãÑæÑ ãÓÄæá áÍãÇíÉ ÇáßãÈíæÊÑ-- æÔÈßÉ ÇáÇÊÕÇá¡ Åä æÌÏÊ.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen3_Text);
}

function Agent_OnSECURITYPASSBestWay() 
{
    var L_SECURITYPASSBestWay1_Text = "áÒíÇÏÉ ÃãÇä ßáãÉ ÇáãÑæÑ¡ íÌÈ Ãä ÊÊÖãä Úáì ÇáÃÞá ÅËäíä ãä ÇáÚäÇÕÑ ÇáÊÇáíÉ: ÃÍÑÝ ßÈíÑÉ æÃÍÑÝ ÕÛíÑÉ¡ æÃÑÞÇã.";
	  Agent_Speak(L_SECURITYPASSBestWay1_Text);

    var L_SECURITYPASSBestWay2_Text = "ÃíÖÇð¡ ÈÞÏÑ ãÇ íßæä ÊÓáÓá ÇáÃÍÑÝ ÃßËÑ ÚÔæÇÆíÉ¡ ÈÞÏÑ ãÇ Êßæä ßáãÉ ÇáÓÑ ÂãäÉ.";
	  Agent_Speak(L_SECURITYPASSBestWay2_Text);

    var L_SECURITYPASSBestWay3_Text = "íãßä Ãä Êßæä ßáãÉ ÇáãÑæÑ ÈØæá íÕá Åáì 127 ÍÑÝÇð.";
	  Agent_Speak(L_SECURITYPASSBestWay3_Text);
    
    var L_SECURITYPASSBestWay4_Text = "æáßä¡ ÅÐÇ ßäÊ ÊÓÊÎÏã Windows Úáì ÔÈßÉ ÇÊÕÇá áÏíåÇ ÃÌåÒÉ ßãÈíæÊÑ ÊÓÊÎÏã Windows 95 Ãæ Windows 98, æÊÑíÏ Ãä Êßæä ÞÇÏÑÇð Úáì ÊÓÌíá ÇáÏÎæá Åáì ÔÈßÉ ÇáÇÊÕÇá ãä ÃÌåÒÉ ÇáßãÈíæÊÑ Êáß¡ ÇäÊÈå Åáì ÇÓÊÎÏÇã ßáãÇÊ ãÑæÑ áÇ ÊÊÚÏì 14 ÍÑÝÇð.";
	  Agent_Speak(L_SECURITYPASSBestWay4_Text);
}



function Agent_JOINDOMAINAddCommands() 
{
    var L_JOINDOMAINMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_JOINDOMAINMenuCommand2_Text = "ã&Ç åæ ÇáãÌÇá¿";
    var L_JOINDOMAINMenuCommand3_Text = "ßí&Ý ÃÔÇÑß Ýí ãÌÇá¿"; 
    var L_JOINDOMAINMenuCommand4_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";


    g_AgentCharacter.Commands.Add("Agent_OnJOINDOMAINAboutThisScreen", L_JOINDOMAINMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnJOINDOMAINDifference", L_JOINDOMAINMenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_OnJOINDOMAINHowToName", L_JOINDOMAINMenuCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_OnJOINDOMAINWhatToDoNext", L_JOINDOMAINMenuCommand4_Text);
    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnJOINDOMAINAboutThisScreen() 
{		
    var L_JOINDOMAINAboutThisScreen1_Text = "åÐå åí ÇáÔÇÔÉ ÍíË ÊÞÑÑ ãÇ ÅÐÇ ßäÊ ÊÑíÏ Ãä ÊÌÚá åÐÇ ÇáßãÈíæÊÑ ÚÖæÇð Ýí ãÌÇá Ãã áÇ.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen1_Text);

    var L_JOINDOMAINAboutThisScreen2_Text = "ÅÐÇ ÇÎÊÑÊ ÇáãÔÇÑßÉ ÈãÌÇá¡ Úáíß ßÊÇÈÉ ÇÓã ÇáãÌÇá ÇáÐí íÔÇÑß Ýíå åÐÇ ÇáßãÈíæÊÑ.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen2_Text);
}

function Agent_OnJOINDOMAINDifference() 
{
    var L_JOINDOMAINDifference1_Text = "ÇáãÌÇá åæ ãÌãæÚÉ ãä ÃÌåÒÉ ÇáßãÈíæÊÑ ÊÊã ÅÏÇÑÊåÇ ßæÍÏÉ.";
    Agent_Speak(L_JOINDOMAINDifference1_Text);
    
    var L_JOINDOMAINDifference2_Text = "Úáì ÓÈíá ÇáãËÇá¡ ÞÏ ÊÖíÝ ÇáÔÑßÉ ßÇÝÉ ÃÌåÒÉ ÇáßãÈíæÊÑ Ýí ãßÊÈåÇ ÈÏãÔÞ Åáì ãÌÇá ÈÍíË ÊÊÔÇÑß ÈÇãÊíÇÒÇÊ ÇáæÕæá äÝÓåÇ æÊÊÕá ÈäÝÓ ÇáØÇÈÚÇÊ.";
    Agent_Speak(L_JOINDOMAINDifference2_Text);

    var L_JOINDOMAINDifference3_Text = "ÅÐÇ áã Êßä ãÊÃßÏÇð ãä ÇáÎíÇÑ ÇáÐí ÊÑíÏå¡ ÍÏÏ 'áÇ' æÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí'.";
    Agent_Speak(L_JOINDOMAINDifference3_Text);
}

function Agent_OnJOINDOMAINHowToName() 
{
 	  Agent_GestureAtElement(g.document.all("radioYesDomain"), "Left");
 
    var L_JOINDOMAINHowToName1_Text = "ÅÐÇ ÍÏÏÊ ÎíÇÑ ÇáãÔÇÑßÉ Ýí ãÌÇá¡";
    Agent_Speak(L_JOINDOMAINHowToName1_Text);
      
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("textboxDomain"), "Left");
  
    var L_JOINDOMAINHowToName2_Text = "íãßäß ßÊÇÈÉ ÇÓã Ýí ÇáãÑÈÚ ÇáãæÌæÏ ÃÓÝá Ðáß ÇáÎíÇÑ.";
    Agent_Speak(L_JOINDOMAINHowToName2_Text);
      
    Agent_Play("RestPose");
  
    var L_JOINDOMAINHowToName3_Text = "áÇ íãßäß ßÊÇÈÉ Ãí ÇÓã ÅÐÇ áã ÊÞã ÈÊÍÏíÏ ÎíÇÑ ÇáãÔÇÑßÉ ÈãÌÇá.";
    Agent_Speak(L_JOINDOMAINHowToName3_Text);
  
    var L_JOINDOMAINHowToName4_Text = "áÐáß¡ íÈÞì ÇáãÑÈÚ ÑãÇÏíÇð ááÅÔÇÑÉ Úáì Ãäå áÇ íãßäß ÇáßÊÇÈÉ Ýíå ÍÊì ÊÍÏÏ ÎíÇÑ ÇáãÔÇÑßÉ ÈãÌÇá.";
    Agent_Speak(L_JOINDOMAINHowToName4_Text);
  
    var L_JOINDOMAINHowToName5_Text = "ÅÐÇ ßäÊ ÞÏ ÃÔÑßÊ åÐÇ ÇáßãÈíæÊÑ ÈãÌÇá¡ ÇØáÈ ãä ãÓÄæá ÇáÔÈßÉ ÇÓã ãÌÇá ÕÇáÍ.";
    Agent_Speak(L_JOINDOMAINHowToName5_Text);
  
    var L_JOINDOMAINHowToName6_Text = "ÅÐÇ áã Êßä ãÔÊÑßÇð ÈãÌÇá¡ áÇ ÏÇÚ áÊÍÏíÏ ÇÓã.";
    Agent_Speak(L_JOINDOMAINHowToName6_Text);
}

function Agent_OnJOINDOMAINWhatToDoNext() 
{    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }
    
    var L_JOINDOMAINWhatToDoNext1_Text = "ÈÚÏ ÇáÞíÇã ÈÇáÊÍÏíÏ¡ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí'.";
    Agent_Speak(L_JOINDOMAINWhatToDoNext1_Text);
    
    Agent_Play("RestPose");   
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
    
    var L_JOINDOMAINWhatToDoNext2_Text = "íãßäß ÃíÖÇð ÇÎÊíÇÑ ÇáÚæÏÉ Åáì ÇáÔÇÔÉ ÇáÓÇÈÞÉ ÈæÇÓØÉ ÇáäÞÑ ÝæÞ ÒÑ 'ÇáÓÇÈÞ'.";
    Agent_Speak(L_JOINDOMAINWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}




function Agent_JNDOM_AAddCommands() 
{
    var L_JNDOMAMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_JNDOMAMenuCommand2_Text = "ßíÝ ÃÞæã ÈÅÏÎÇá ÇÓã ÇáãÓÊÎÏã æ&ßáãÉ ÇáãÑæÑ¿";
    var L_JNDOMAMenuCommand3_Text = "ã&Ç åæ ÇáãÌÇá¿";
    var L_JNDOMAMenuCommand4_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";
    
    g_AgentCharacter.Commands.Add("Agent_OnJNDOM_AAboutThisStep", L_JNDOMAMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnJNDOM_AHowToEnter", L_JNDOMAMenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_OnJNDOM_AWhatIsDomain", L_JNDOMAMenuCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_OnJNDOM_AWhatToDoNext", L_JNDOMAMenuCommand4_Text);
    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnJNDOM_AAboutThisStep()
{
    var L_JNDOM_A_AboutThisStep1_Text = "åÐå åí ÔÇÔÉ ÇáÊÚÑíÝ ÈÇáÔÎÕ ÇáãÎæøá ÈÖãø åÐÇ ÇáßãÈíæÊÑ Åáì ÇáãÌÇá.";
  	Agent_Speak(L_JNDOM_A_AboutThisStep1_Text);
}

function Agent_OnJNDOM_AHowToEnter() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_HowToEnter1_Text = "ÇáÇÓã ÇáÐí ÊßÊÈå åäÇ íÌÈ Ãä íßæä ÝÑíÏÇð Èíä ÃÓãÇÁ ÇáãÓÊÎÏãíä ÇáÂÎÑíä Öãä ÇáãÌÇá.";
    Agent_Speak(L_JNDOM_A_HowToEnter1_Text);
      
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_HowToEnter2_Text = "ßáãÉ ÇáãÑæÑ ÇáÊí ÊßÊÈåÇ åäÇ íÌÈ Ãä ÊØÇÈÞ ßáãÉ ÇáãÑæÑ Ýí ÍÓÇÈ ÇáãÓÊÎÏã.";
    Agent_Speak(L_JNDOM_A_HowToEnter2_Text);
      
    Agent_Play("RestPose");
    
    var L_JNDOM_A_HowToEnter3_Text = "ÅÐÇ áã ÊÚÑÝ ÇÓã ÇáãÓÊÎÏã æßáãÉ ÇáãÑæÑ ÇáÊí Úáíß ÇÓÊÎÏÇãåÇ¡ ÇÊÕá ÈãÓÄæá ÔÈßÉ ÇáÇÊÕÇá.";
    Agent_Speak(L_JNDOM_A_HowToEnter3_Text);
}

function Agent_OnJNDOM_AWhatIsDomain() 
{
    var L_JNDOM_A_WhatIsDomain1_Text = "ÇáãÌÇá åæ ãÌãæÚÉ ãä ÃÌåÒÉ ÇáßãÈíæÊÑ ÊÊã ÅÏÇÑÊåÇ ßæÍÏÉ.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain1_Text);
  	
    var L_JNDOM_A_WhatIsDomain2_Text = "Úáì ÓÈíá ÇáãËÇá¡ ÞÏ ÊÖíÝ ÇáÔÑßÉ ßÇÝÉ ÃÌåÒÉ ÇáßãÈíæÊÑ Ýí ãßÊÈåÇ ÈÏãÔÞ Åáì ãÌÇá ãÇ ÈÍíË ÊÊÔÇÑß ÈÇãÊíÇÒÇÊ ÇáæÕæá äÝÓåÇ æÊÊÕá ÈäÝÓ ÇáØÇÈÚÇÊ.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain2_Text);
      
    Agent_Play("RestPose");		
}

function Agent_OnJNDOM_AWhatToDoNext() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_WhatToDoNext1_Text = "ÈÚÏ ßÊÇÈÉ ÇÓã ÇáãÓÊÎÏã åäÇ";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext1_Text);
      
    Agent_Play("RestPose");		
  	
    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_WhatToDoNext2_Text = "æßáãÉ ÇáãÑæÑ ÇáÎÇÕÉ ÈÐáß ÇáãÓÊÎÏã åäÇ,";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext2_Text);
      
    Agent_Play("RestPose");		
  	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
    
    var L_JNDOM_A_WhatToDoNext3_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí'.";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext3_Text);
      
    Agent_Play("RestPose");		
}



function Agent_ActivationAddCommands() 
{
    var L_ActivationMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_ActivationMenuCommand2_Text = "ÃÎÈÑäí &Úä ÇáÊäÔíØ";
    var L_ActivationMenuCommand3_Text = "ßí&Ý ÃÞæã ÈÇáÊäÔíØ áÇÍÞÇð¿";
    var L_ActivationMenuCommand4_Text = "ßíÝ íãßääí &ÇáÊäÔíØ ÅÐÇ áã Ãßä ãÊÕáÇð ÈÅäÊÑäÊ¿";
    var L_ActivationMenuCommand5_Text = "ãÇ&ÐÇ íÍÏË ÅÐÇ áã ÃÞã ÈÇáÊäÔíØ¿";
    var L_ActivationMenuCommand6_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_OnActivationAboutThisScreen", L_ActivationMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnActivationAboutActivation", L_ActivationMenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_OnActivationHowToActivateLater", L_ActivationMenuCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_OnActivationHowToActivateUnconnected", L_ActivationMenuCommand4_Text);
    g_AgentCharacter.Commands.Add("Agent_OnActivationWhatHappensNoActivate", L_ActivationMenuCommand5_Text);
    g_AgentCharacter.Commands.Add("Agent_OnActivationWhatToDoNext", L_ActivationMenuCommand6_Text);
    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnActivationAboutThisScreen() 
{    
    Agent_MoveToElement(g.rb_act_2, "Left");
    
    var L_ActivationAboutThisScreen1_Text = "Ýí åÐå ÇáÔÇÔÉ íãßäß Ãä ÊÞÑÑ ÊäÔíØ %1 ÇáÂä Ãæ áÇÍÞÇð.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutThisScreen1_Text, g_ProductName));
    
    var L_ActivationAboutThisScreen2_Text = "ÅÐÇ ÇäÊÙÑÊ Åáì æÞÊ áÇÍÞ¡ íãßäß ÊÔÛíá ãÚÇáÌ ÊäÔíØ ÇáãäÊÌ ãä ÇáÞÇÆãÉ 'ÇÈÏÃ'.";
    Agent_Speak(L_ActivationAboutThisScreen2_Text);
    
    var L_ActivationAboutThisScreen3_Text = "æÓäÞæã ÈÊÐßíÑß ßá ÚÏÉ ÃíÇã áÊäÔíØ Windows ÈÍíË íãßäß ãÊÇÈÚÉ ÇÓÊÎÏÇãå.";
    Agent_Speak(L_ActivationAboutThisScreen3_Text);
}

function Agent_OnActivationAboutActivation() 
{
    var L_ActivationAboutActivation1_Text = "ÚäÏãÇ ÊÍÕá Úáì ÈØÇÞÉ ÏÇÆä Ãæ ÈØÇÞÉ ÇÆÊãÇä ãä ÇáÈäß¡ ÝÅä ÇáÈäß íØáÈ ãäß ÚÇÏÉð ÊäÔíØ ÇáÈØÇÞÉ ÞÈá Ãä ÊÊãßä ãä ÇÓÊÎÏÇãåÇ.";
    Agent_Speak(L_ActivationAboutActivation1_Text);
    
    var L_ActivationAboutActivation2_Text = "ÇáÊäÔíØ íÍãíß æíÍãí ÇáÈäß ãä ÇáÇÓÊÎÏÇã ÛíÑ ÇáãÕÑÍ Èå ááÈØÇÞÉ.";
    Agent_Speak(L_ActivationAboutActivation2_Text);
    
    var L_ActivationAboutActivation3_Text = "íÚãá ÊäÔíØ %1 ÈÇáØÑíÞÉ äÝÓåÇ¡ ÚÏÇ Ãäå íãßäß ÇÓÊÎÏÇã %2 ãä ÃÌá ÝÊÑÉ ÊäÔíØ ãÍÏÏÉ ÞÈá Ãä ÊõØÇáÈ ÈÊäÔíØå.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationHowToActivateLater() 
{
    var L_ActivationHowToActivateLater1_Text = "ÅÐÇ ÊÎØíÊ ÇáÊäÔíØ ÇáÂä¡ ÓíÙåÑ ÊÐßíÑ ÕÛíÑ Úáì ÓØÍ ãßÊÈ %1 ßá ÚÏÉ ÃíÇã.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationHowToActivateLater1_Text, g_ProductName));
    
    var L_ActivationHowToActivateLater2_Text = "ÚäÏåÇ íãßäß ÊÔÛíá ãÚÇáÌ ÊäÔíØ ÇáãäÊÌ ÈæÇÓØÉ ÇáÇäÊÞÇá Åáì ÇáÞÇÆãÉ 'ÇÈÏÃ' æÇáäÞÑ ÝæÞ ÊäÔíØ Windows.";
    Agent_Speak(L_ActivationHowToActivateLater2_Text);
    
    var L_ActivationHowToActivateLater3_Text = "ÅÐÇ ßäÊ äÓíÊ åÐå ÇáÎØæÇÊ¡ ÇäÊÞá Åáì ÇáÞÇÆãÉ ÇÈÏÃ æÇäÞÑ ÝæÞ ÇáÊÚáíãÇÊ æÇáÏÚã ááÍÕæá Úáì ÇáÃÌæÈÉ áÃÓÆáÊß æãÒíÏ ãä ÇáãÚáæãÇÊ ÇáãÝíÏÉ.";
    Agent_Speak(L_ActivationHowToActivateLater3_Text);
}

function Agent_OnActivationHowToActivateUnconnected() 
{
    Agent_GestureAtElement(g.rb_act_2, "Left");
    	
    var L_ActivationHowToActivateUnconnected1_Text = "ÈÈÓÇØÉ ÇÎÊÑ \"áÇ\" åäÇ.";
    Agent_Speak(L_ActivationHowToActivateUnconnected1_Text);
    
    Agent_Play("RestPose");
    
    var L_ActivationHowToActivateUnconnected2_Text = "ÚäÏ ÇáÇäÊåÇÁ ãä ÅÚÏÇÏ Windows¡ íãßäß ÊÔÛíá ãÚÇáÌ ÊäÔíØ ÇáãäÊÌ ÈæÇÓØÉ ÇáäÞÑ ÝæÞ ÊäÔíØ Windows Úáì ÇáÞÇÆãÉ ÇÈÏÃ.";
    Agent_Speak(L_ActivationHowToActivateUnconnected2_Text);
    
    var L_ActivationHowToActivateUnconnected3_Text = "íÚÑÖ áß ÇáãÚÇáÌ ÑÞãÇð åÇÊÝíÇð íãßäß ÇáÇÊÕÇá Èå áÊäÔíØ Windows ÚÈÑ ÇáåÇÊÝ.";
    Agent_Speak(L_ActivationHowToActivateUnconnected3_Text);
}

function Agent_OnActivationWhatHappensNoActivate() 
{
    var L_ActivationWhatHappensNoActivate1_Text = "íãßäß ãÊÇÈÚÉ ÇÓÊÎÏÇã %1 ÍÊì ÊäÊåí ÕáÇÍíÉ ÝÊÑÉ ÇáÊäÔíØ.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate1_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate2_Text = "æáßä ÚäÏ äåÇíÉ ÇáÝÊÑÉ¡ íÌÈ Úáíß ÊäÔíØ %1 áßí ÊÊÇÈÚ ÇÓÊÎÏÇãå.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate2_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate3_Text = "ÅÐÇ ÇäÊåÊ ÝÊÑÉ ÕáÇÍíÉ ÇáÊäÔíØ¡ áä íßæä ÈÅãßÇäß ÇÓÊÎÏÇã %1.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate3_Text, g_ProductName));
}

function Agent_OnActivationWhatToDoNext() 
{
    Agent_GestureAtElement(g.act_spn1, "Left");
    
    var L_ActivationWhatToDoNext1_Text = "ÈÚÏ ÊÍÏíÏ ÇáÌæÇÈ áåÐÇ ÇáÓÄÇá¡";
    Agent_Speak(L_ActivationWhatToDoNext1_Text);	
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
            
    var L_ActivationWhatToDoNext2_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí'.";
    Agent_Speak(L_ActivationWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");	
}



function Agent_ActivationErrorAddCommands() 
{
    var L_ActivationErrorMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_ActivationErrorMenuCommand2_Text = "ÃÎÈÑäí &Úä ÇáÊäÔíØ";
    var L_ActivationErrorMenuCommand3_Text = "ßí&Ý ÃÞæã ÈÇáÊäÔíØ áÇÍÞÇð¿";
    var L_ActivationErrorMenuCommand4_Text = "ßíÝ íãßääí &ÇáÊäÔíØ ÅÐÇ áã Ãßä ãÊÕáÇð ÈÅäÊÑäÊ¿";
    var L_ActivationErrorMenuCommand5_Text = "ãÇ&ÐÇ íÍÏË ÅÐÇ áã ÃÞã ÈÇáÊäÔíØ¿";


    g_AgentCharacter.Commands.Add("Agent_OnActivationErrorAboutThisScreen", L_ActivationErrorMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnActivationErrorAboutActivation", L_ActivationErrorMenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_OnActivationErrorHowToActivateLater", L_ActivationErrorMenuCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_OnActivationErrorHowToActivateUnconnected", L_ActivationErrorMenuCommand4_Text);
    g_AgentCharacter.Commands.Add("Agent_OnActivationErrorWhatHappensNoActivate", L_ActivationErrorMenuCommand5_Text);

    Agent_AddWhatToDoNextCommand();        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnActivationErrorAboutThisScreen() 
{
    var L_ActivationErrorAboutThisScreen1_Text = "ÊÙåÑ åÐå ÇáÔÇÔÉ áÃäß áã ÊÊãßä ãä ÇáæÕæá Åáì ãÑßÒ ÇáÊäÔíØ.";
	Agent_Speak(L_ActivationErrorAboutThisScreen1_Text);
	
    var L_ActivationErrorAboutThisScreen2_Text = "ÚäÏ ÇáÇäÊåÇÁ ãä ÅÚÏÇÏ %1¡ íãßäß ÊÔÛíá ãÚÇáÌ ÊäÔíØ ÇáãäÊÌ ÈæÇÓØÉ ÇáäÞÑ ÝæÞ ÊäÔíØ Windows Úáì ÇáÞÇÆãÉ ÇÈÏÃ.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnActivationErrorAboutActivation() 
{
    var L_ActivationErrorAboutActivation1_Text = "ÚäÏãÇ ÊÍÕá Úáì ÈØÇÞÉ ÏÇÆä Ãæ ÈØÇÞÉ ÇÆÊãÇä ãä ÇáÈäß¡ ÝÅä ÇáÈäß íØáÈ ãäß ÚÇÏÉð ÊäÔíØ ÇáÈØÇÞÉ ÞÈá Ãä ÊÊãßä ãä ÇÓÊÎÏÇãåÇ.";
	Agent_Speak(L_ActivationErrorAboutActivation1_Text);
	
    var L_ActivationErrorAboutActivation2_Text = "ÇáÊäÔíØ íÍãíß æíÍãí ÇáÈäß ãä ÇáÇÓÊÎÏÇã ÛíÑ ÇáãÕÑÍ Èå ááÈØÇÞÉ.";
	Agent_Speak(L_ActivationErrorAboutActivation2_Text);
	
    var L_ActivationErrorAboutActivation3_Text = "íÚãá ÊäÔíØ %1 ÈÇáØÑíÞÉ äÝÓåÇ¡ ÚÏÇ Ãäå íãßäß ÇÓÊÎÏÇã %2 ãä ÃÌá ÚÏÏ ãÍÏÏ ãä ÇáÃíÇã ÞÈá Ãä ÊõØÇáÈ ÈÊäÔíØå.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationErrorHowToActivateLater() 
{
    var L_ActivationErrorHowToActivateLater1_Text = "ÅÐÇ ÊÎØíÊ ÇáÊäÔíØ ÇáÂä¡ ÓíÙåÑ ÊÐßíÑ ÕÛíÑ Úáì ÓØÍ ãßÊÈ %1 ßá ÚÏÉ ÃíÇã.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationErrorHowToActivateLater2_Text = "ÚäÏåÇ íãßäß ÊÔÛíá ãÚÇáÌ ÊäÔíØ ÇáãäÊÌ ÈæÇÓØÉ ÇáÇäÊÞÇá Åáì ÇáÞÇÆãÉ 'ÇÈÏÃ' æÇáäÞÑ ÝæÞ ÊäÔíØ Windows.";
	Agent_Speak(L_ActivationErrorHowToActivateLater2_Text);
	
    var L_ActivationErrorHowToActivateLater3_Text = "ÅÐÇ ßäÊ äÓíÊ åÐå ÇáÎØæÇÊ¡ ÇäÊÞá Åáì ÇáÞÇÆãÉ ÇÈÏÃ æÇäÞÑ ÝæÞ ÇáÊÚáíãÇÊ æÇáÏÚã ááÍÕæá Úáì ÇáÃÌæÈÉ áÃÓÆáÊß æãÒíÏ ãä ÇáãÚáæãÇÊ ÇáãÝíÏÉ.";
	Agent_Speak(L_ActivationErrorHowToActivateLater3_Text);
}

function Agent_OnActivationErrorHowToActivateUnconnected() 
{
    var L_ActivationErrorHowToActivateUnconnected1_Text = "ÚäÏ ÇáÇäÊåÇÁ ãä ÅÚÏÇÏ Windows¡ íãßäß ÊÔÛíá ãÚÇáÌ ÊäÔíØ ÇáãäÊÌ ÈæÇÓØÉ ÇáäÞÑ ÝæÞ ÊäÔíØ Windows Úáì ÇáÞÇÆãÉ ÇÈÏÃ.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected1_Text);
	
    var L_ActivationErrorHowToActivateUnconnected2_Text = "íÚÑÖ áß ÇáãÚÇáÌ ÑÞãÇð åÇÊÝíÇð íãßäß ÇáÇÊÕÇá Èå áÊäÔíØ Windows ÚÈÑ ÇáåÇÊÝ.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected2_Text);
}

function Agent_OnActivationErrorWhatHappensNoActivate() 
{
    var L_ActivationErrorWhatHappensNoActivate1_Text = "íãßäß ãÊÇÈÚÉ ÇÓÊÎÏÇã %1 ÍÊì ÊäÊåí ÕáÇÍíÉ ÝÊÑÉ ÇáÊäÔíØ.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate2_Text = "æáßä ÚäÏ äåÇíÉ ÇáÝÊÑÉ¡ íÌÈ Úáíß ÊäÔíØ %1 áßí ÊÊÇÈÚ ÇÓÊÎÏÇãå.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate3_Text = "ÅÐÇ ÇäÊåÊ ÝÊÑÉ ÕáÇÍíÉ ÇáÊäÔíØ¡ áä íßæä ÈÅãßÇäß ÇÓÊÎÏÇã %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_ActivationPrivacyPolicyAddCommands() 
{
    var L_ActivationPrivacyPolicyMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_ActivationPrivacyPolicyMenuCommand2_Text = "ÃÎÈÑäí &Úä ÇáÊäÔíØ";
    var L_ActivationPrivacyPolicyMenuCommand3_Text = "ßí&Ý ÃÞæã ÈÇáÊäÔíØ áÇÍÞÇð¿";
    var L_ActivationPrivacyPolicyMenuCommand4_Text = "ßíÝ íãßääí &ÇáÊäÔíØ ÅÐÇ áã Ãßä ãÊÕáÇð ÈÅäÊÑäÊ¿";
    var L_ActivationPrivacyPolicyMenuCommand5_Text = "ãÇ&ÐÇ íÍÏË ÅÐÇ áã ÃÞã ÈÇáÊäÔíØ¿";


    g_AgentCharacter.Commands.Add("Agent_OnActivationPrivacyPolicyAboutThisScreen", L_ActivationPrivacyPolicyMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnActivationPrivacyPolicyAboutActivation", L_ActivationPrivacyPolicyMenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_OnActivationPrivacyPolicyHowToActivateLater", L_ActivationPrivacyPolicyMenuCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_OnActivationPrivacyPolicyHowToActivateUnconnected", L_ActivationPrivacyPolicyMenuCommand4_Text);
    g_AgentCharacter.Commands.Add("Agent_OnActivationPrivacyPolicyWhatHappensNoActivate", L_ActivationPrivacyPolicyMenuCommand5_Text);
    
    Agent_AddWhatToDoNextCommand(); 
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnActivationPrivacyPolicyAboutThisScreen() 
{
    var L_ActivationPrivacyPolicyAboutThisScreen1_Text = "ÊÔÑÍ åÐå ÇáÔÇÔÉ ßíÝíÉ ÍãÇíÉ ÎÕæÕíÊß ÚäÏ ÊäÔíØ %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutThisScreen1_Text, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyAboutActivation() 
{
    var L_ActivationPrivacyPolicyAboutActivation1_Text = "ÚäÏãÇ ÊÍÕá Úáì ÈØÇÞÉ ÏÇÆä Ãæ ÈØÇÞÉ ÇÆÊãÇä ãä ÇáÈäß¡ ÝÅä ÇáÈäß íØáÈ ãäß ÚÇÏÉð ÊäÔíØ ÇáÈØÇÞÉ ÞÈá Ãä ÊÊãßä ãä ÇÓÊÎÏÇãåÇ.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation1_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation2_Text = "ÇáÊäÔíØ íÍãíß æíÍãí ÇáÈäß ãä ÇáÇÓÊÎÏÇã ÛíÑ ÇáãÕÑÍ Èå ááÈØÇÞÉ.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation2_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation3_Text = "íÚãá ÊäÔíØ %1 ÈÇáØÑíÞÉ äÝÓåÇ¡ ÚÏÇ Ãäå íãßäß ÇÓÊÎÏÇã %2 ãä ÃÌá ÝÊÑÉ ÊäÔíØ ãÍÏÏÉ ÞÈá Ãä ÊõØÇáÈ ÈÊäÔíØå.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyHowToActivateLater() 
{
    var L_ActivationPrivacyPolicyHowToActivateLater1_Text = "ÅÐÇ ÊÎØíÊ ÇáÊäÔíØ ÇáÂä¡ ÓíÙåÑ ÊÐßíÑ ÕÛíÑ Úáì ÓØÍ ãßÊÈ %1 ßá ÚÏÉ ÃíÇã.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyHowToActivateLater2_Text = "ÚäÏåÇ íãßäß ÊÔÛíá ãÚÇáÌ ÊäÔíØ ÇáãäÊÌ ÈæÇÓØÉ ÇáÇäÊÞÇá Åáì ÇáÞÇÆãÉ 'ÇÈÏÃ' æÇáäÞÑ ÝæÞ ÊäÔíØ Windows.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater2_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateLater3_Text = "ÅÐÇ ßäÊ äÓíÊ åÐå ÇáÎØæÇÊ¡ ÇäÊÞá Åáì ÇáÞÇÆãÉ ÇÈÏÃ æÇäÞÑ ÝæÞ ÇáÊÚáíãÇÊ æÇáÏÚã ááÍÕæá Úáì ÇáÃÌæÈÉ áÃÓÆáÊß æãÒíÏ ãä ÇáãÚáæãÇÊ ÇáãÝíÏÉ.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater3_Text);
}

function Agent_OnActivationPrivacyPolicyHowToActivateUnconnected() 
{
    var L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text = "ÚäÏ ÇáÇäÊåÇÁ ãä ÅÚÏÇÏ Windows¡ íãßäß ÊÔÛíá ãÚÇáÌ ÊäÔíØ ÇáãäÊÌ ÈæÇÓØÉ ÇáäÞÑ ÝæÞ ÊäÔíØ Windows Úáì ÇáÞÇÆãÉ ÇÈÏÃ.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text = "íÚÑÖ áß ÇáãÚÇáÌ ÑÞãÇð åÇÊÝíÇð íãßäß ÇáÇÊÕÇá Èå áÊäÔíØ Windows ÚÈÑ ÇáåÇÊÝ.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text);
}

function Agent_OnActivationPrivacyPolicyWhatHappensNoActivate() 
{
    var L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text = "íãßäß ãÊÇÈÚÉ ÇÓÊÎÏÇã %1 ÍÊì ÊäÊåí ÕáÇÍíÉ ÝÊÑÉ ActivationPrivacyPolicy.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text = "æáßä ÚäÏ äåÇíÉ ÇáÝÊÑÉ¡ íÌÈ Úáíß ÊäÔíØ %1 áßí ÊÊÇÈÚ ÇÓÊÎÏÇãå.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text = "ÅÐÇ ÇäÊåÊ ÝÊÑÉ ÕáÇÍíÉ ActivationPrivacyPolicy¡ áä íßæä ÈÅãßÇäß ÇÓÊÎÏÇã %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_DSLMAINAddCommands() 
{
    var L_DSLMAINMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_DSLMAINMenuCommand2_Text = "&ÈÚÖ ÇáÃÓÈÇÈ áØáÈ ÇÓã ÇáãÓÊÎÏã æßáãÉ ÇáãÑæÑ";
    var L_DSLMAINMenuCommand3_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";
    
    g_AgentCharacter.Commands.Add("Agent_OnDSLMAINAboutThisScreen", L_DSLMAINMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnDSLMAINSomeReasons", L_DSLMAINMenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_OnDSLMAINWhatToDoNext", L_DSLMAINMenuCommand3_Text);
    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnDSLMAINAboutThisScreen() 
{
    var L_DSLMAINAboutThisScreen1_Text = "Ýí åÐå ÇáÔÇÔÉ ÊÞÑÑ ÅÐÇ ãÇ ßÇä ÇÓã ãÓÊÎÏã æßáãÉ ãÑæÑ ãØáæÈíä ááæÕæá Åáì ÅäÊÑäÊ ãä åÐÇ ÇáßãÈíæÊÑ.";
	Agent_Speak(L_DSLMAINAboutThisScreen1_Text);
}

function Agent_OnDSLMAINSomeReasons() 
{
    var L_DSLMAINHowToMoveOn1_Text = "ÅÐÇ ßäÊ ÇáÔÎÕ ÇáæÍíÏ ÇáÐí íÓÊÎÏã åÐÇ ÇáßãÈíæÊÑ¡ ÝÅäå ãä ÇáãáÇÆã Ãä ÊÌÚá %1 íÎÒä ÇÓã ÇáãÓÊÎÏã ÇáÎÇÕ Èß æßáãÉ ÇáãÑæÑ ÊáÞÇÆíÇð.";
	Agent_Speak(ApiObj.FormatMessage(L_DSLMAINHowToMoveOn1_Text, g_ProductName));
	
    var L_DSLMAINHowToMoveOn2_Text = "ÈåÐå ÇáØÑíÞÉ¡ áä ÊÍÊÇÌ Åáì ßÊÇÈÉ Êáß ÇáãÚáæãÇÊ Ýí ßá ãÑÉ ÊÑíÏ ÇáÇÊÕÇá ÈÅäÊÑäÊ.";
	Agent_Speak(L_DSLMAINHowToMoveOn2_Text);
	
    var L_DSLMAINHowToMoveOn3_Text = "æáßä ÅÐÇ ßäÊ ÊÊÔÇÑß ÈåÐÇ ÇáßãÈíæÊÑ ãÚ ÂÎÑíä¡ æáÇ ÊÑíÏ Ãä ÊÔÇÑß ÍÓÇÈß ÈÅäÊÑäÊ ãÚåã¡ íãßäß ÚäÏåÇ ÍãÇíÉ ÍÓÇÈß ÈÇÓã ãÓÊÎÏã æßáãÉ ãÑæÑ.";
	Agent_Speak(L_DSLMAINHowToMoveOn3_Text);
	
    var L_DSLMAINHowToMoveOn4_Text = "ãËáÇð¡ ÞÏ ÊÑÛÈ ÈãÔÇÑßÉ åÐÇ ÇáßãÈíæÊÑ ãÚ ÃÈäÇÆß ÈÍíË íßæä ÈÅãßÇäåã ÊÔÛíá ÇáÊÓÇáí.";
	Agent_Speak(L_DSLMAINHowToMoveOn4_Text);
	
    var L_DSLMAINHowToMoveOn5_Text = "æáßäß áÇ ÊÑÛÈ ÈÃä íÓÊÎÏãæÇ ÅäÊÑäÊ ÈÏæä ÅÐäß.";
	Agent_Speak(L_DSLMAINHowToMoveOn5_Text);		
}

function Agent_OnDSLMAINWhatToDoNext()
{	
	Agent_GestureAtElement(g.dslmain_TitleText, "Left");
	
    var L_DSLMAINWhatToDoNext1_Text = "ÈÚÏ ÊÍÏíÏ ÇáÌæÇÈ áåÐÇ ÇáÓÄÇá¡";
	Agent_Speak(L_DSLMAINWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
	var L_DSLMAINWhatToDoNext2_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí'.";
	Agent_Speak(L_DSLMAINWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");
}



function Agent_DSL_AAddCommands() 
{
    var L_DSLAMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_DSLAMenuCommand2_Text = "ãÇ &åí ÅäÊÑäÊ ÈÇáÖÈØ¿";
    var L_DSLAMenuCommand3_Text = "ãÇÐÇ ÃÍ&ÊÇÌ ááÇÊÕÇá ÈÅäÊÑäÊ¿";
    var L_DSLAMenuCommand4_Text = "Ç&ÎÈÑäì Úä ÇáÊÓÌíá ÈÅäÊÑäÊ";

    g_AgentCharacter.Commands.Add("Agent_DSL_AAboutThisStep", L_DSLAMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_DSL_AWhatIsInternet", L_DSLAMenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_DSL_ANeedToConnect", L_DSLAMenuCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_DSL_AInternetSignup", L_DSLAMenuCommand4_Text);
    
    Agent_AddWhatToDoNextCommand();        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_DSL_AAboutThisStep() 
{
    var L_DSL_A_AboutThisStep1_Text = "Ýí åÐå ÇáÔÇÔÉ ÊÞæã ÈÅÚÏÇÏ ÍÓÇÈß ãÚ ãæÝÑ ÎÏãÉ ÅäÊÑäÊ¡ Ãæ ÇÎÊÕÇÑÇð \"ISP\"¡ ÈÍíË íãßäß ÇáÇÊÕÇá ÈÅäÊÑäÊ ãä åÐÇ ÇáßãÈíæÊÑ.";
	Agent_Speak(L_DSL_A_AboutThisStep1_Text);
}

function Agent_DSL_AWhatIsInternet() 
{
    var L_DSL_A_WhatIsInternet1_Text = "ÅäÊÑäÊ åí ÔÈßÉ ÇÊÕÇá ÚÇáãíÉ áÃÌåÒÉ ÇáßãÈíæÊÑ.";
	Agent_Speak(L_DSL_A_WhatIsInternet1_Text);
	
    var L_DSL_A_WhatIsInternet2_Text = "ÅÐÇ ßÇä áÏíß ÅãßÇäíÉ ÇáæÕæá Åáì ÅäÊÑäÊ¡ íãßäß ÇáÍÕæá Úáì ãÚáæãÇÊ ãÊæÝÑÉ ááÚãæã ãä ãáÇííä ÇáãÕÇÏÑ¡ ÊÊÖãä ÇáãÏÇÑÓ¡ æÇáÏæÇÆÑ ÇáÍßæãíÉ¡ æãÑÇßÒ ÇáÃÚãÇá¡ æÇáãæÇÞÚ ÇáÝÑÏíÉ.";
	Agent_Speak(L_DSL_A_WhatIsInternet2_Text);
	
    var L_DSL_A_WhatIsInternet3_Text = "ÔÈßÉ World Wide Web¡ Ãæ ÇÎÊÕÇÑÇð \"the Web\"¡ åí äÙÇã áÇÓÊßÔÇÝ ÅäÊÑäÊ ÈæÇÓØÉ ÇÓÊÎÏÇã ÇáÇÑÊÈÇØÇÊ ÇáÊÔÚÈíÉ.";
	Agent_Speak(L_DSL_A_WhatIsInternet3_Text);
	
    var L_DSL_A_WhatIsInternet4_Text = "ÇáÇÑÊÈÇØÇÊ ÇáÊÔÚÈíÉ åí äÕæÕ Ãæ ÕæÑ ÊÃÎÐß¡ ÚäÏ ÇáäÞÑ ÝæÞåÇ¡ Åáì ÕÝÍÉ æíÈ ÃÎÑì Ãæ ÌÒÁ ÂÎÑ ãä ÇáÕÝÍÉ äÝÓåÇ¡ Ãæ ÊõäÝÐ ÅÌÑÇÁ ãÍÏÏ ãËá ÝÊÍ ÈÑäÇãÌ.";
	Agent_Speak(L_DSL_A_WhatIsInternet4_Text);
	
    var L_DSL_A_WhatIsInternet5_Text = "ááÊäÞá Ýí æíÈ¡ Úáíß ÇÓÊÎÏÇã ÈÑäÇãÌ ÇÓÊÚÑÇÖ æíÈ¡ æåæ ÈÑäÇãÌ íÚÑÖ ãÚáæãÇÊ Úáì ÅäÊÑäÊ ÈÔßá äÕæÕ¡ æÕæÑ¡ æÃÕæÇÊ¡ æÃÝáÇã ÑÞãíÉ.";
	Agent_Speak(L_DSL_A_WhatIsInternet5_Text);
	
    var L_DSL_A_WhatIsInternet6_Text = "ÊÞÏã Microsoft ÈÑäÇãÌí ÇÓÊÚÑÇÖ áæíÈ:";
	Agent_Speak(L_DSL_A_WhatIsInternet6_Text);
	
    var L_DSL_A_WhatIsInternet7_Text = "ÇáãÓÊÚÑÖ MSN Explorer¡ æåæ ÈÑäÇãÌ ÇÓÊÚÑÇÖ ÚÙíã ãä ÃÌá ÇáãÈÊÏÆíä æãä ÃÌá ÇáÃÔÎÇÕ ÇáÐíä íÓÊÎÏãæä ÃÌåÒÉ ÇáßãÈíæÊÑ ãä ÇáãäÒá¡ æíÓÊÎÏãæä Internet Explorer.";
	Agent_Speak(L_DSL_A_WhatIsInternet7_Text);
}

function Agent_DSL_ANeedToConnect() 
{	
    var L_DSL_A_NeedToConnect1_Text = "ÃäÊ ÈÍÇÌÉ Åáì ËáÇËÉ ÃÔíÇÁ ááÇÊÕÇá ÈÅäÊÑäÊ.";
	Agent_Speak(L_DSL_A_NeedToConnect1_Text);	
	
    var L_DSL_A_NeedToConnect2_Text = "ÃæáÇð¡ íÌÈ Ãä íßæä áÏíß ßãÈíæÊÑ.";
	Agent_Speak(L_DSL_A_NeedToConnect2_Text);
	
    var L_DSL_A_NeedToConnect3_Text = "ËÇäíÇð¡ ÃäÊ ÈÍÇÌÉ Åáì ãæÝÑ ÎÏãÉ ÅäÊÑäÊ¡ Ãæ ÇÎÊÕÇÑÇð \"ISP\".";
	Agent_Speak(L_DSL_A_NeedToConnect3_Text);
	
    var L_DSL_A_NeedToConnect4_Text = "íæÝÑ ISP ÎÏãÉ ÅäÊÑäÊ Ãæ ÇáæÕæá ÅáíåÇ¡ ÈÇáØÑíÞÉ äÝÓåÇ ÇáÊí ÊæÝÑ ÔÑßÉ ÇáåÇÊÝ ÇáÎÏãÉ ÇáåÇÊÝíÉ.";
	Agent_Speak(L_DSL_A_NeedToConnect4_Text);
	
    var L_DSL_A_NeedToConnect5_Text = "ÚäÏãÇ äÕá Åáì ÌÒÁ ÅÚÏÇÏ ÇáßãÈíæÊÑ ááæÕæá Åáì ÅäÊÑäÊ¡ ÓÃÞæã ÈãÓÇÚÏÊß Ýí ÇáÚËæÑ Úáì ISP ÅÐÇ áã íßä áÏíß ãÓÈÞÇð.";
	Agent_Speak(L_DSL_A_NeedToConnect5_Text);
	
    var L_DSL_A_NeedToConnect6_Text = "ËÇáËÇð¡ ÃäÊ ÈÍÇÌÉ Åáì ÌåÇÒ íÞæã ÈÇáÇÊÕÇá ÇáÝÚáí Èíä ÇáßãÈíæÊÑ æ ISP.";
	Agent_Speak(L_DSL_A_NeedToConnect6_Text);
	
    var L_DSL_A_NeedToConnect7_Text = "åÐå åæ ÇáÛÑÖ ãä åÐå ÇáÔÇÔÉ.";
	Agent_Speak(L_DSL_A_NeedToConnect7_Text);
}

function Agent_DSL_AInternetSignup() 
{
    var L_DSL_A_AboutThisScreen1_Text = "ÅÐÇ ßÇä áÏíß ãÓÈÞÇð ÍÓÇÈ ÅäÊÑäÊ¡ ÝÓíßæä ãæÝÑ ÎÏãÉ ÅäÊÑäÊ ÞÏ ÒæÏß ÈåÐå ÇáãÚáæãÇÊ.";
	Agent_Speak(L_DSL_A_AboutThisScreen1_Text);
	
    var L_DSL_A_AboutThisScreen2_Text = "áÓÊ ÈÍÇÌÉ Åáì ÅÚÏÇÏ ÍÓÇÈ ÅäÊÑäÊ ÌÏíÏ ÝÞØ áÃäå áÏíß ßãÈíæÊÑ ÌÏíÏ.";
	Agent_Speak(L_DSL_A_AboutThisScreen2_Text);
	
    var L_DSL_A_AboutThisScreen3_Text = "íãßäß ÇÓÊÎÏÇã ãÚáæãÇÊ ÇáÍÓÇÈ äÝÓå ÈÇáÖÈØ ÇáÊí ÇÓÊÎÏãÊåÇ ÈÇáßãÈíæÊÑ ÇáÞÏíã.";
	Agent_Speak(L_DSL_A_AboutThisScreen3_Text);
	
    var L_DSL_A_AboutThisScreen4_Text = "ÅÐÇ áã ÊÊÕá ÃÈÏÃ ÈÅäÊÑäÊ ãä ÇáßãÈíæÊÑ ÇáÎÇÕ Èß¡ ÞÏ Êßæä ÊáÞíÊ ãÚáæãÇÊ ÍÓÇÈ ÅäÊÑäÊ ÚäÏ ÔÑÇÆß åÐÇ ÇáßãÈíæÊÑ.";
	Agent_Speak(L_DSL_A_AboutThisScreen4_Text);
	
    var L_DSL_A_AboutThisScreen5_Text = "ÅÐÇ ÃÚØÇß ÇáÈÇÆÚ ÞØÚÉ æÑÞ ÚáíåÇ ÇÓã ãÓÊÎÏã¡ æßáãÉ ãÑæÑ¡ æÇÓã ISP¡ ÝÇßÊÈ åÐå ÇáãÚáæãÇÊ Úáì åÐå ÇáÔÇÔÉ.";
	Agent_Speak(L_DSL_A_AboutThisScreen5_Text);
}



function Agent_DSL_BAddCommands() 
{

    var L_DSL_B_MenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_DSL_B_MenuCommand2_Text = "ãÇ&ÐÇ íÚäí IP¿";
    var L_DSL_B_MenuCommand3_Text = "ãÇÐÇ &íÚäí DNS¿";
    var L_DSL_B_MenuCommand4_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_OnDSL_BAboutThisScreen", L_DSL_B_MenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnDSL_BWhatIsIP", L_DSL_B_MenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_OnDSL_BWhatIsDNS", L_DSL_B_MenuCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_OnDSL_BWhatToDoNext", L_DSL_B_MenuCommand4_Text);
  
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnDSL_BAboutThisScreen() 
{
    var L_DSL_B_AboutThisScreen1_Text = "Úáì ÇáÔÇÔÉ ÇáÃÎíÑÉ¡ ÃÎÈÑÊäÇ ßíÝ ÓÊÊÕá ÈÅäÊÑäÊ ÈæÇÓØÉ ÊæÝíÑ ãÚáæãÇÊ ÍÓÇÈ ÅäÊÑäÊ.";
	Agent_Speak(L_DSL_B_AboutThisScreen1_Text);

    var L_DSL_B_AboutThisScreen2_Text = "Ýí åÐå ÇáÔÇÔÉ¡ Úáíß ÅÚáÇãäÇ Úä ßíÝíÉ ÊÃÓíÓ ÇáßãÈíæÊÑ ááÇÊÕÇá ÇáÝÚáí ÈÅäÊÑäÊ.";
	Agent_Speak(L_DSL_B_AboutThisScreen2_Text);
}

function Agent_OnDSL_BWhatIsIP() 
{
    var L_DSL_B_WhatIsIP1_Text = "ßá ßãÈíæÊÑ ãÊÕá ÈÅäÊÑäÊ áÏíå ÈÑæÊæßæá ÅäÊÑäÊ Ãæ ÚäæÇä \"IP\"¡ ÇáÐí åæ ÑÞã ÝÑíÏ íõÚÑÝ ÇáßãÈíæÊÑ Åáì ÃÌåÒÉ ÇáßãÈíæÊÑ ÇáÃÎÑì Úáì ÅäÊÑäÊ.";
	Agent_Speak(L_DSL_B_WhatIsIP1_Text);

    var L_DSL_B_WhatIsIP2_Text = "ÚäÏãÇ ÊÊÕá¡ íãäÍ ISP ÚÇÏÉð ÇáßãÈíæÊÑ áÏíß ÚäæÇä IP ÊáÞÇÆíÇð.";
	Agent_Speak(L_DSL_B_WhatIsIP2_Text);

    var L_DSL_B_WhatIsIP3_Text = "ÈåÐå ÇáÍÇáÉ¡ ÅÐÇð¡ Úáíß ÅÏÎÇá ÚäæÇä IP íÏæíÇð.";
	Agent_Speak(L_DSL_B_WhatIsIP3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_staticip, "Left");
	
	var L_DSL_B_WhatIsIP4_Text = "íÌÈ Ãä íÒæÏß ISP ÈÚäæÇä IP áßÊÇÈÊå åäÇ.";
	Agent_Speak(L_DSL_B_WhatIsIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnDSL_BWhatIsDNS() 
{
    var L_DSL_B_WhatIsDNS1_Text = "ááÚËæÑ Úáì ÚäæÇä Úáì ÅäÊÑäÊ¡ íÍÊÇÌ ÇáßãÈíæÊÑ áÏíß ááÇÊÕÇá ÈãáÞã ÇÓã ÇáãÌÇá (DNS)¡ ÇáÐí íÚíä ÚäÇæíä IP Åáì ÇáÃÌåÒÉ Úáì ÅäÊÑäÊ.";
	Agent_Speak(L_DSL_B_WhatIsDNS1_Text);

    var L_DSL_B_WhatIsDNS2_Text = "Ýí ãÚÙã ÇáÃÍæÇá¡ ÚäæÇä DNS íÊã ÊÚííäå ÊáÞÇÆíÇð ãä ÞÈá ISP.";
	Agent_Speak(L_DSL_B_WhatIsDNS2_Text);

    var L_DSL_B_WhatIsDNS3_Text = "íØáÈ ISP ÈÃä ÊÚíä ÚäæÇä DNS Úáì ÇáßãÈíæÊÑ áÏíß.";
	Agent_Speak(L_DSL_B_WhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_prefdns, "Left");

    var L_DSL_B_WhatIsDNS4_Text = "íÌÈ Ãä íÒæÏß ISP ÈÚäæÇä DNS ÇáãÝÖá áßÊÇÈÊå åäÇ";
	Agent_Speak(L_DSL_B_WhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.dsl_lbl_altdns, "Left");

    var L_DSL_B_WhatIsDNS5_Text = "æÚäæÇä DNS ÈÏíá íãßä ÇÓÊÎÏÇãå Ýí ÍÇá ÚÏã ÊæÝÑ DNS ÇáãÝÖá.";
	Agent_Speak(L_DSL_B_WhatIsDNS5_Text);
    
    Agent_Play("RestPose");
	
	Agent_MoveToElement(g.dsl_lbl_altdns, "Bottom");
}

function Agent_OnDSL_BWhatToDoNext() 
{	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_DSL_B_WhatToDoNext1_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááãÊÇÈÚÉ.";
	Agent_Speak(L_DSL_B_WhatToDoNext1_Text);
    
    Agent_Play("RestPose");	
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_DSL_B_WhatToDoNext2_Text = "íãßäß ÃíÖÇð ÇáäÞÑ ÝæÞ ÒÑ 'ÇáÓÇÈÞ' ááÚæÏÉ Åáì ÇáÎØæÉ ÇáÓÇÈÞÉ.";
	Agent_Speak(L_DSL_B_WhatToDoNext2_Text);
    
    Agent_Play("RestPose");	
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_DSL_B_WhatToDoNext3_Text = "Ãæ¡ ÅÐÇ ÛíÑÊ ÑÃíß¡ ÇäÞÑ ÝæÞ \"ÊÎØí\" ááãÊÇÈÚÉ ÈÏæä ÅÚÏÇÏ åÐÇ ÇáßãÈíæÊÑ ãä ÃÌá ÇáæÕæá Åáì ÅäÊÑäÊ.";
	Agent_Speak(L_DSL_B_WhatToDoNext3_Text);
    
    Agent_Play("RestPose");	
}



function Agent_ICONNECTAddCommands() 
{

    var L_ICONNECTMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_ICONNECTMenuCommand2_Text = "ãÇ &åæ ÚäæÇä IP ÇáËÇÈÊ¿";
    var L_ICONNECTMenuCommand3_Text = "ãÇÐÇ &íÚäí DNS¿";
    var L_ICONNECTMenuCommand4_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_OnICONNECTAboutThisScreen", L_ICONNECTMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnICONNECTWhatIsStaticIP", L_ICONNECTMenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_OnICONNECTWhatIsDNS", L_ICONNECTMenuCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_OnICONNECTWhatToDoNext", L_ICONNECTMenuCommand4_Text);
  
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnICONNECTAboutThisScreen() 
{
    var L_ICONNECTAboutThisScreen1_Text = "Úáì ÇáÔÇÔÉ ÇáÃÎíÑÉ¡ ÃÎÈÑÊäÇ ßíÝ ÓÊÊÕá ÈÅäÊÑäÊ ÈæÇÓØÉ ÊæÝíÑ ãÚáæãÇÊ ÍÓÇÈ ÅäÊÑäÊ.";
	Agent_Speak(L_ICONNECTAboutThisScreen1_Text);

    var L_ICONNECTAboutThisScreen2_Text = "Ýí åÐå ÇáÔÇÔÉ¡ ÃäÊ ÈÍÇÌÉ Åáì ÅÚáÇãäÇ Úä ßíÝíÉ ÊÃÓíÓ ÇáßãÈíæÊÑ ááÇÊÕÇá ÇáÝÚáí ÈÅäÊÑäÊ.";
	Agent_Speak(L_ICONNECTAboutThisScreen2_Text);
}

function Agent_OnICONNECTWhatIsStaticIP() 
{
    var L_ICONNECTWhatIsStaticIP1_Text = "ßá ßãÈíæÊÑ ãÊÕá ÈÅäÊÑäÊ áÏíå ÈÑæÊæßæá ÅäÊÑäÊ Ãæ ÚäæÇä \"IP\"¡ ÇáÐí åæ ÑÞã ÝÑíÏ íõÚÑÝ ÇáßãÈíæÊÑ Åáì ÃÌåÒÉ ÇáßãÈíæÊÑ ÇáÃÎÑì Úáì ÅäÊÑäÊ.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP1_Text);

    var L_ICONNECTWhatIsStaticIP2_Text = "ÚäÏãÇ ÊÊÕá¡ íãäÍ ISP ÚÇÏÉð ÇáßãÈíæÊÑ áÏíß ÚäæÇä IP ÊáÞÇÆíÇð.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP2_Text);

    var L_ICONNECTWhatIsStaticIP3_Text = "ÈåÐå ÇáÍÇáÉ¡ ÅÐÇð¡ Úáíß ÅÏÎÇá ÚäæÇä IP íÏæíÇð.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_staticIP, "Left");
	
	var L_ICONNECTWhatIsStaticIP4_Text = "íÌÈ Ãä íÒæÏß ISP ÈÚäæÇä IP áßÊÇÈÊå åäÇ.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnICONNECTWhatIsDNS() 
{
    var L_ICONNECTWhatIsDNS1_Text = "ááÚËæÑ Úáì ÚäæÇä Úáì ÅäÊÑäÊ¡ íÍÊÇÌ ÇáßãÈíæÊÑ áÏíß ááÇÊÕÇá ÈãáÞã ÇÓã ÇáãÌÇá (DNS)¡ ÇáÐí íÚíä ÚäÇæíä IP Åáì ÇáÃÌåÒÉ Úáì ÅäÊÑäÊ.";
	Agent_Speak(L_ICONNECTWhatIsDNS1_Text);

    var L_ICONNECTWhatIsDNS2_Text = "Ýí ãÚÙã ÇáÃÍæÇá¡ ÚäæÇä DNS íÊã ÊÚííäå ÊáÞÇÆíÇð ãä ÞÈá ISP.";
	Agent_Speak(L_ICONNECTWhatIsDNS2_Text);

    var L_ICONNECTWhatIsDNS3_Text = "íØáÈ ISP ÈÃä ÊÚíä ÚäæÇä DNS Úáì ÇáßãÈíæÊÑ áÏíß.";
	Agent_Speak(L_ICONNECTWhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_prefrDNS, "Left");

    var L_ICONNECTWhatIsDNS4_Text = "íÌÈ Ãä íÒæÏß ISP ÈÚäæÇä DNS ÇáãÝÖá áßÊÇÈÊå åäÇ";
	Agent_Speak(L_ICONNECTWhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.iconnect_spn_alterDNS, "Left");

    var L_ICONNECTWhatIsDNS5_Text = "æÚäæÇä DNS ÈÏíá íãßä ÇÓÊÎÏÇãå Ýí ÍÇá ÚÏã ÊæÝÑ DNS ÇáãÝÖá.";
	Agent_Speak(L_ICONNECTWhatIsDNS5_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnICONNECTWhatToDoNext() 
{	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_ICONNECTWhatToDoNext1_Text = "ÇäÞÑ ÝæÞ ÒÑ ÇáÊÇáí ááãÊÇÈÚÉ.";
	Agent_Speak(L_ICONNECTWhatToDoNext1_Text);
    
    Agent_Play("RestPose");	
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_ICONNECTWhatToDoNext2_Text = "Ãæ¡ ÅÐÇ ÛíÑÊ ÑÃíß¡ ÇäÞÑ ÝæÞ \"ÊÎØí\" ááãÊÇÈÚÉ ÈÏæä ÅÚÏÇÏ åÐÇ ÇáßãÈíæÊÑ ãä ÃÌá ÇáæÕæá Åáì ÅäÊÑäÊ.";
	Agent_Speak(L_ICONNECTWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_ICONNECTWhatToDoNext3_Text = "íãßäß ÃíÖÇð ÇáÚæÏÉ Åáì ÇáÔÇÔÉ ÇáÓÇÈÞÉ ÈæÇÓØÉ ÇáäÞÑ ÝæÞ ÒÑ 'ÇáÓÇÈÞ'.";
	Agent_Speak(L_ICONNECTWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}





function Agent_ICNTLASTAddCommands() {

        var L_ICNTLASTMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_ICNTLASTMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_ICNTLASTMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnICNTLASTWhatToDoNext", L_ICNTLASTMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnICNTLASTAboutThisScreen", L_ICNTLASTMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnICNTLASTHowToMoveOn", L_ICNTLASTMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnICNTLASTWhatToDoNext() 
{

	Agent_GestureAtElement(g.btnNext, "TopCenterWidth");

        var L_ICNTLASTWhatToDoNext1_Text = "ÈÚÖ ÇáÓáÇÓá ÇáãÄÞÊÉ åäÇ ...íÞæã icntlast.htm ÈÇáÊÇáí";
	Agent_Speak(L_ICNTLASTWhatToDoNext1_Text);
}

function Agent_OnICNTLASTAboutThisScreen() 
{		
        var L_ICNTLASTAboutThisScreen_Text = "ÈÚÖ ÇáÓáÇÓá ÇáãÄÞÊÉ åäÇ ...icntlast.htm Íæá ÇáÎØæÉ";
	Agent_Speak(L_ICNTLASTAboutThisScreen_Text);
}

function Agent_OnICNTLASTHowToMoveOn() 
{
        var L_ICNTLASTHowToMoveOn_Text = "ÈÚÖ ÇáÓáÇÓá ÇáãÄÞÊÉ ÇáÅÖÇÝíÉ åäÇ ...icntlast.htm ÇáÇäÊÞÇá Åáì";
	Agent_Speak(L_ICNTLASTHowToMoveOn_Text);
}



function Agent_SCONNECTAddCommands() {

        var L_SCONNECTMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_SCONNECTMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_SCONNECTMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnSCONNECTWhatToDoNext", L_SCONNECTMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCONNECTAboutThisScreen", L_SCONNECTMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCONNECTHowToMoveOn", L_SCONNECTMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnSCONNECTWhatToDoNext() 
{
	Agent_GestureAtElement(g.btnNext, "TopCenterWidth");

        var L_SCONNECTWhatToDoNext1_Text = "ÈÚÖ ÇáÓáÇÓá ÇáãÄÞÊÉ åäÇ ...sconnect.htm ÇáÞíÇã ÈÇáÊÇáí";
	Agent_Speak(L_SCONNECTWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnSCONNECTAboutThisScreen() 
{
        var L_SCONNECTAboutThisScreen_Text = "ÈÚÖ ÇáÓáÇÓá ÇáãÄÞÊÉ åäÇ ...sconnect.htm Íæá ÇáÎØæÉ";
	Agent_Speak(L_SCONNECTAboutThisScreen_Text);
}

function Agent_OnSCONNECTHowToMoveOn() 
{
        var L_SCONNECTHowToMoveOn_Text = "ÈÚÖ ÇáÓáÇÓá ÇáãÄÞÊÉ ÇáÅÖÇÝíÉ åäÇ ...sconnect.htm ÇáÇäÊÞÇá Åáì";
	Agent_Speak(L_SCONNECTHowToMoveOn_Text);	
}



function Agent_SCNTLASTAddCommands() {

        var L_SCNTLASTMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_SCNTLASTMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_SCNTLASTMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnSCNTLASTWhatToDoNext", L_SCNTLASTMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCNTLASTAboutThisScreen", L_SCNTLASTMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCNTLASTHowToMoveOn", L_SCNTLASTMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnSCNTLASTWhatToDoNext() 
{
	Agent_GestureAtElement(g.btnNext, "TopCenterWidth");

        var L_SCNTLASTWhatToDoNext1_Text = "ÈÚÖ ÇáÓáÇÓá ÇáãÄÞÊÉ åäÇ ...íÞæã scntlast.htm ÈÇáÊÇáí";
	Agent_Speak(L_SCNTLASTWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnSCNTLASTAboutThisScreen() 
{
     var L_SCNTLASTAboutThisScreen_Text = "ÈÚÖ ÇáÓáÇÓá ÇáãÄÞÊÉ åäÇ ...scntlast.htm Íæá ÇáÎØæÉ";
	Agent_Speak(L_SCNTLASTAboutThisScreen_Text);
}

function Agent_OnSCNTLASTHowToMoveOn() 
{
        var L_SCNTLASTHowToMoveOn_Text = "ÈÚÖ ÇáÓáÇÓá ÇáãÄÞÊÉ ÇáÅÖÇÝíÉ åäÇ ...scntlast.htm ÇáÇäÊÞÇá Åáì";
	Agent_Speak(L_SCNTLASTHowToMoveOn_Text);		
}






function Agent_BadPIDAddCommands() 
{
    var L_BadPIDMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_BadPIDMenuCommand2_Text = "ßí&Ý ÃÞæã ÈÅÏÎÇá ÑÞã ÇáãäÊÌ¿";
    var L_BadPIDMenuCommand3_Text = "ãÇ&ÐÇ ÅÐÇ áã Ãßä ÃÚÑÝ ãÝÊÇÍ ÇáãäÊÌ ÇáÎÇÕ Èí¿";
    var L_BadPIDMenuCommand4_Text = "ãÇÐÇ ÃÝÚá &ÅÐÇ ßÇä ãÝÊÇÍ ÇáãäÊÌ áÏí áÇ íÚãá¿";
    var L_BadPIDMenuCommand5_Text = "ãÚ ãä íãßääí ÇáÇÊÕÇá ááÍÕæá Úáì Çá&ãÒíÏ ãä ÇáÊÚáíãÇÊ¿";
    var L_BadPIDMenuCommand6_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";
        
    g_AgentCharacter.Commands.Add("Agent_OnBadPIDAboutThisStep", L_BadPIDMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_OnBadPIDHowToEnter", L_BadPIDMenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_OnBadPIDWhatIfNotKnown", L_BadPIDMenuCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_OnBadPIDWhatIfNotWorking", L_BadPIDMenuCommand4_Text);
    g_AgentCharacter.Commands.Add("Agent_OnBadPIDWhoCanICall", L_BadPIDMenuCommand5_Text);
    g_AgentCharacter.Commands.Add("Agent_OnBadPIDWhatToDoNext", L_BadPIDMenuCommand6_Text);
    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnBadPIDAboutThisStep() 
{
    var L_BadPIDAboutThisStep1_Text = "ãÝÊÇÍ ÇáãäÊÌ ÇáÐí ÃÏÎáÊå Ýí ÇáÔÇÔÉ ÇáÓÇÈÞÉ ÛíÑ ÕÍíÍ.";
    Agent_Speak(L_BadPIDAboutThisStep1_Text);
    
    var L_BadPIDAboutThisStep2_Text = "åÐÇ íÚäí ÈÃäå áÇ íØÇÈÞ ãÝÊÇÍ ÇáãäÊÌ áäÓÎÉ ÃÕíáÉ ãä Windows XP.";
    Agent_Speak(L_BadPIDAboutThisStep2_Text);

    var L_BadPIDAboutThisStep3_Text = "áä íÚãá Windows ÈÏæä ãÝÊÇÍ ãäÊÌ ÕÇáÍ.";
    Agent_Speak(L_BadPIDAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDAboutThisStep4_Text = "ÅÐÇ ßäÊ ÊÚÊÞÏ Ãäß ßÊÈÊå ÈÔß ÎÇØÆ¡ ÇäÞÑ ÝæÞ ÒÑ ÇáÓÇÈÞ æÇßÊÈ ÇáãÝÊÇÍ ÇáÕÍíÍ.";
    Agent_Speak(L_BadPIDAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep5_Text = "æáßä ÅÐÇ ßäÊ ãÊÃßÏÇð ÈÃäß ßÊÈÊå ÈÔßá ÕÍíÍ¡ Ãæ Ãäß ÍÇæáÊ ÚÏÉ ãÑÇÊ ÈÏæä Ãä ÊäÌÍ¡ ÝÅä äÓÎÊß ãä Windows ÞÏ Êßæä ÛíÑ ÔÑÚíÉ.";
    Agent_Speak(L_BadPIDAboutThisStep5_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDAboutThisStep6_Text = "Ýí åÐå ÇáÍÇáÉ¡ ÇäÞÑ ÝæÞ ÒÑ ÅíÞÇÝ ÇáÊÔÛíá áÅíÞÇÝ ÊÔÛíá ÇáßãÈíæÊÑ.";
    Agent_Speak(L_BadPIDAboutThisStep6_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep7_Text = "Ëã ÇÊÕá ÈÇáÑÞã ý1-800-RU-LEGIT ÅÐÇ ßäÊ Ýí ÇáæáÇíÇÊ ÇáãÊÍÏÉ Ãæ ßäÏÇ.";
    Agent_Speak(L_BadPIDAboutThisStep7_Text);

    var L_BadPIDAboutThisStep8_Text = "Ýí ßÇÝÉ ÇáÈáÏÇä/ÇáÃÞÇáíã ÇáÃÎÑì¡ ÇÊÕá ÈÇáãßÊÈ ÇáÝÑÚí ÇáãÍáí áÜ Microsoft.";
    Agent_Speak(L_BadPIDAboutThisStep8_Text);
}

function Agent_OnBadPIDHowToEnter() 
{
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
	
    var L_BadPIDHowToEnter1_Text = "ÇäÞÑ ÝæÞ ÇáÒÑ 'ÇáÓÇÈÞ' ááÑÌæÚ Åáì ÇáÔÇÔÉ ÇáÓÇÈÞÉ.";
    Agent_Speak(L_BadPIDHowToEnter1_Text);
    
    Agent_Play("RestPose");
    
    var L_BadPIDHowToEnter2_Text = "ÇáãÄÔÑ¡ æÇáÐí íÙåÑ ãËá ÎØ ÚãæÏí íæãÖ¡ Óíßæä ÞÏ ÊæÖÚ Ýí ÇáãÑÈÚ ÇáÃæá ÇáÐí ÊÍÊÇÌ Ãä ÊßÊÈ Ýíå.";
    Agent_Speak(L_BadPIDHowToEnter2_Text);

    var L_BadPIDHowToEnter3_Text = "ÈÚÏ ßÊÇÈÉ ÇáÃÍÑÝ ÇáÎãÓÉ ÇáÃæáì¡ íäÊÞá ÇáãÄÔÑ ÊáÞÇÆíÇð Åáì ÇáãÑÈÚ ÇáÊÇáí ÈÍíË íãßäß ßÊÇÈÉ ÇáÃÍÑÝ ÇáÎãÓÉ ÇáÊÇáíÉ.";
    Agent_Speak(L_BadPIDHowToEnter3_Text);

    var L_BadPIDHowToEnter4_Text = "áÇ ÊßÊÈ ÝæÇÕá æáÇ ÊåÊã ÅÐÇ ßÇäÊ ÇáÃÍÑÝ ßÈíÑÉ.";
    Agent_Speak(L_BadPIDHowToEnter4_Text);

    var L_BadPIDHowToEnter5_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááãÊÇÈÚÉ.";
    Agent_Speak(L_BadPIDHowToEnter5_Text);
}

function Agent_OnBadPIDWhatIfNotKnown() 
{
    var L_BadPIDWhatIfNotKnown1_Text = "ÅÐÇ áã íÙåÑ ãÝÊÇÍ ÇáãäÊÌ Úáì ÛáÇÝ ÇáÞÑÕ CD¡ ÊÍÞÞ ãä ãáÕÞ ÔåÇÏÉ ÇáÃÕÇáÉ Úáì ÌåÇÒ ÇáßãÈíæÊÑ Ãæ Úáì ÇáÌåÉ ÇáÎáÝíÉ áßÊÇÈ \"ÇáÔÑæÚ ÈÇáÚãá\".";
    Agent_Speak(L_BadPIDWhatIfNotKnown1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
    
    var L_BadPIDWhatIfNotKnown2_Text = "ÈÚÏ ÇáÚËæÑ Úáì ãÝÊÇÍ ÇáãäÊÌ¡ ÇäÞÑ ÝæÞ ÒÑ ÇáÓÇÈÞ æÇßÊÈ ãÝÊÇÍ ÇáãäÊÌ Ýí ÇáãÑÈÚÇÊ Úáì ÇáÔÇÔÉ ÇáÓÇÈÞÉ.";
    Agent_Speak(L_BadPIDWhatIfNotKnown2_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotKnown3_Text = "ÅÐÇ áã ÊÊãßä ãä ÇáÚËæÑ Úáì ãÝÊÇÍ ÇáãäÊÌ¡ ÇÊÕá ÈãÕäøÚ ÇáßãÈíæÊÑ Úáì ÇáÑÞã ý%s.";
    var re = /%s/i;
    var L_BadPIDWhatIfNotKnown4_Text = "ÅÐÇ áã ÊÊãßä ãä ÇáÚËæÑ Úáì ãÝÊÇÍ ÇáãäÊÌ¡ ÇÊÕá ÈãÕäøÚ ÇáßãÈíæÊÑ.";

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
        Agent_Speak(L_BadPIDWhatIfNotKnown4_Text);
    else
        Agent_Speak(L_BadPIDWhatIfNotKnown3_Text.replace(re, strPhoneNumber));
}

function Agent_OnBadPIDWhatIfNotWorking() 
{
    var L_BadPIDWhatIfNotWorking1_Text = "ÞÏ Êßæä ÃÎØÃÊ Ýí ßÊÇÈÊå.";
    Agent_Speak(L_BadPIDWhatIfNotWorking1_Text);
    
    var L_BadPIDWhatIfNotWorking2_Text = "ÃäÊ ÈÍÇÌÉ Åáì ÊÖãíä ßÇÝÉ ÇáÃÍÑÝ ÇáÜ 25 áãÝÊÇÍ ÇáãäÊÌ.";
    Agent_Speak(L_BadPIDWhatIfNotWorking2_Text);

    var L_BadPIDWhatIfNotWorking3_Text = "íÌÈ Ãä íÍÊæí ßá ÞÓã Úáì ÎãÓÉ ÃÍÑÝ Ãæ ÃÑÞÇã.";
    Agent_Speak(L_BadPIDWhatIfNotWorking3_Text);

    var L_BadPIDWhatIfNotWorking4_Text = "íÌÈ ßÊÇÈÉ ãÝÊÇÍ ãäÊÌ ÕÇáÍ ÞÈá Êãßäß ãä ÈÏÁ ÇÓÊÎÏÇã Windows.";
    Agent_Speak(L_BadPIDWhatIfNotWorking4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDWhatIfNotWorking5_Text = "ÅÐÇ ßäÊ ÊÚÊÞÏ Ãäß ßÊÈÊå ÈÔß ÎÇØÆ¡ ÇäÞÑ ÝæÞ ÒÑ ÇáÓÇÈÞ æÇßÊÈ ÇáãÝÊÇÍ ÇáÕÍíÍ.";
    Agent_Speak(L_BadPIDWhatIfNotWorking5_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking6_Text = "æáßä ÅÐÇ ßäÊ ãÊÃßÏÇð ÈÃäß ßÊÈÊå ÈÔßá ÕÍíÍ¡ Ãæ Ãäß ÍÇæáÊ ÚÏÉ ãÑÇÊ ÈÏæä Ãä ÊäÌÍ¡ ÝÅä äÓÎÊß ãä Windows ÞÏ Êßæä ÛíÑ ÔÑÚíÉ.";
    Agent_Speak(L_BadPIDWhatIfNotWorking6_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatIfNotWorking7_Text = "Ýí åÐå ÇáÍÇáÉ¡ ÇäÞÑ ÝæÞ ÒÑ ÅíÞÇÝ ÇáÊÔÛíá áÅíÞÇÝ ÊÔÛíá ÇáßãÈíæÊÑ.";
    Agent_Speak(L_BadPIDWhatIfNotWorking7_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking8_Text = "Ëã ÇÊÕá ÈÇáÑÞã ý1-800-RU-LEGIT ÅÐÇ ßäÊ Ýí ÇáæáÇíÇÊ ÇáãÊÍÏÉ Ãæ ßäÏÇ.";
    Agent_Speak(L_BadPIDWhatIfNotWorking8_Text);

    var L_BadPIDWhatIfNotWorking9_Text = "Ýí ßÇÝÉ ÇáÈáÏÇä/ÇáÃÞÇáíã ÇáÃÎÑì¡ ÇÊÕá ÈÇáãßÊÈ ÇáÝÑÚí ÇáãÍáí áÜ Microsoft.";
    Agent_Speak(L_BadPIDWhatIfNotWorking9_Text);
}

function Agent_OnBadPIDWhoCanICall() 
{
    var L_BadPIDWhoCanICall1_Text = "ÅÐÇ áã íÊã ÞÈæá ãÝÊÇÍ ÇáãäÊÌ áÏíß¡ ÇÊÕá ÈÇáÑÞã ý1-800-RU-LEGIT ÅÐÇ ßäÊ Ýí ÇáæáÇíÇÊ ÇáãÊÍÏÉ Ãæ ßäÏÇ.";
    Agent_Speak(L_BadPIDWhoCanICall1_Text);
    
    var L_BadPIDWhoCanICall2_Text = "Ýí ßÇÝÉ ÇáÈáÏÇä/ÇáÃÞÇáíã ÇáÃÎÑì¡ ÇÊÕá ÈÇáãßÊÈ ÇáÝÑÚí ÇáãÍáí áÜ Microsoft.";
    Agent_Speak(L_BadPIDWhoCanICall2_Text);
}

function Agent_OnBadPIDWhatToDoNext() 
{    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
	
    var L_BadPIDWhatToDoNext1_Text = "ÇäÞÑ ÝæÞ ÒÑ ÇáÓÇÈÞ æÇßÊÈ ÇáãÝÊÇÍ ÇáÕÍíÍ.";
    Agent_Speak(L_BadPIDWhatToDoNext1_Text);
    
    var L_BadPIDWhatToDoNext2_Text = "ÅÐÇ áã íÊã ÞÈæá ãÝÊÇÍ ÇáãäÊÌ áÏíß¡ ãä ÇáãÍÊãá Ãä Êßæä äÓÎÊß ãä Windows ÛíÑ ÔÑÚíÉ.";
    Agent_Speak(L_BadPIDWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatToDoNext3_Text = "Ýí åÐå ÇáÍÇáÉ¡ ÇäÞÑ ÝæÞ ÒÑ ÅíÞÇÝ ÇáÊÔÛíá áÅíÞÇÝ ÊÔÛíá ÇáßãÈíæÊÑ. ";
    Agent_Speak(L_BadPIDWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatToDoNext4_Text = "Ëã ÇÊÕá ÈÇáÑÞã ý1-800-RU-LEGIT ÅÐÇ ßäÊ Ýí ÇáæáÇíÇÊ ÇáãÊÍÏÉ Ãæ ßäÏÇ.";
    Agent_Speak(L_BadPIDWhatToDoNext4_Text);

    var L_BadPIDWhatToDoNext5_Text = "Ýí ßÇÝÉ ÇáÈáÏÇä/ÇáÃÞÇáíã ÇáÃÎÑì¡ ÇÊÕá ÈÇáãßÊÈ ÇáÝÑÚí ÇáãÍáí áÜ Microsoft.";
    Agent_Speak(L_BadPIDWhatToDoNext5_Text);
}



function Agent_IconnAddCommands() 
{
    var L_IconnMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_IconnMenuCommand2_Text = "Ãí &ÎíÇÑ íÌÈ Úáí Ãä ÃÎÊÇÑ¿";
    var L_IconnMenuCommand3_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_IconnAboutThisStep", L_IconnMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_IconnWhichOption", L_IconnMenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_OnIconnWhatToDoNext", L_IconnMenuCommand3_Text);

    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_IconnAboutThisStep() 
{    
    var L_IconnAboutThisStep1_Text = "áÞÏ ÞãÊ ÈÊËÈíÊ Windows Windows XP Úáì ÇáßãÈíæÊÑ ÈäÌÇÍ!";
    Agent_Speak(L_IconnAboutThisStep1_Text); 
      
    var L_IconnAboutThisStep2_Text = "Ýí åÐå ÇáãÑÍáÉ¡ íãßääí ãÓÇÚÏÊß ÈÅÚÏÇÏ ÇáßãÈíæÊÑ ãä ÃÌá ÇáæÕæá Åáì ÅäÊÑäÊ.";
    Agent_Speak(L_IconnAboutThisStep2_Text);
       
    var L_IconnAboutThisStep3_Text = "ÅÐÇ áã Êßä ÌÇåÒÇð ááÞíÇã ÈåÐÇ ÇáÂä¡ íãßäß ÊÔÛíá ãÚÇáÌ ÇáÇÊÕÇá ÈÅäÊÑäÊ ãä ÞÇÆãÉ 'ÇÈÏÃ' ÈÚÏ ÇáÇäÊåÇÁ ãä ÅÚÏÇÏ Windows.";
    Agent_Speak(L_IconnAboutThisStep3_Text);
}

function Agent_IconnWhichOption() 
{    
    var L_IconnWhichOption1_Text = "ÍÏÏ áÇ ÅÐÇ ßäÊ ÊÎØØ áÇÓÊÎÏÇã ãæÝÑ ÎÏãÉ ÅäÊÑäÊ¡ Ãæ ÇÎÊÕÇÑÇð \"ISP\"¡ ÇáÐí íÊØáÈ ãäß ÊËÈíÊ ÇáÈÑäÇãÌ ÇáÎÇÕ Èå.";
    Agent_Speak(L_IconnWhichOption1_Text); 
      
    var L_IconnWhichOption2_Text = "ÊÚÑÝ Ãä åÐå åí ÇáÍÇáÉ ÅÐÇ ßÇä áÏíß ãÓÈÞÇð ÞÑÕ ãÖÛæØ CD ãä Ðáß ÇáãæÝÑ ISP.";
    Agent_Speak(L_IconnWhichOption2_Text);
       
    var L_IconnWhichOption3_Text = "Ëã Þã ÈÅÚÏÇÏ ÇáßãÈíæÊÑ ãä ÃÌá ÇáæÕæá Åáì ÅäÊÑäÊ ÈÚÏ Ãä ÊäÊåí ãä ÅÚÏÇÏ Windows.";
    Agent_Speak(L_IconnWhichOption3_Text);
}

function Agent_OnIconnWhatToDoNext() 
{      
    Agent_GestureAtElement(g.radioYesIconn, "Left");  
    
    var L_IconnWhatToDoNext1_Text = "ÅÐÇ ßäÊ ÊÑíÏ ãÓÇÚÏÉ ÈÅÚÏÇÏ ÇÊÕÇá ÈÅäÊÑäÊ¡ ÇäÞÑ ÝæÞ ÇáÎíÇÑ äÚã.";
    Agent_Speak(L_IconnWhatToDoNext1_Text);
    
    Agent_Play("RestPose"); 
        
    Agent_GestureAtElement(g.radioNoIconn, "Left");  
    
    var L_IconnWhatToDoNext2_Text = "Ãæ¡ ÅÐÇ ßäÊ áÇ ÊÑíÏ ÊÃÓíÓ ÇÊÕÇá ÅäÊÑäÊ Ýí åÐÇ ÇáæÞÊ¡ ÇÎÊÑ \"áÇ\"";
    Agent_Speak(L_IconnWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_IconnWhatToDoNext3_Text = "Ëã¡ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááãÊÇÈÚÉ.";
    Agent_Speak(L_IconnWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPAddCommands() 
{
    var L_ISPMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_ISPMenuCommand2_Text = "ãÇ&ÐÇ ÅÐÇ ÃÚØÇäí ÈÇÆÚ ÇáÌåÇÒ ãÚáæãÇÊ ÍÓÇÈ¿";
    var L_ISPMenuCommand3_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_ISPAboutThisStep", L_ISPMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPWhatIfGivenAccount", L_ISPMenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPWhatToDoNext", L_ISPMenuCommand3_Text);
    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPAboutThisStep() 
{
    var L_ISPAboutThisStep1_Text = "Ýí åÐå ÇáÔÇÔÉ ÊÍÏÏ ßíÝ ÊÑíÏ ÇáæÕæá Åáì ÅäÊÑäÊ.";
    Agent_Speak(L_ISPAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");

    var L_ISPAboutThisStep2_Text = "íãßäß ÇÓÊÎÏÇã MSN,";
    Agent_Speak(L_ISPAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");

        var L_ISPAboutThisStep3_Text = "Ãæ ãæÝÑ ÎÏãÉ ÅäÊÑäÊ ãÎÊáÝ.";
        Agent_Speak(L_ISPAboutThisStep3_Text);
        
        Agent_Play("RestPose");
    }
    
    Agent_GestureAtElement(g.radioSkip, "Left");

    var L_ISPAboutThisStep4_Text = "Ãæ íãßäß  ÇáãÊÇÈÚÉ Ïæä ÅÚÏÇÏ ÇÊÕÇá ÅäÊÑäÊ ÇáÂä.";
    Agent_Speak(L_ISPAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPWhatIfGivenAccount() 
{
    var L_ISPWhatIfGivenAccount1_Text = "ÚäÏ ÔÑÇÆß áÌåÇÒ ÇáßãÈíæÊÑ¡ ÞÏ íßæä ÇáÈÇÆÚ ÃÚØÇß ãÚáæãÇÊ ÍÓÇÈ ÇáÅäÊÑäÊ Úáì æÑÞÉ.";
	Agent_Speak(L_ISPWhatIfGivenAccount1_Text);
	
    var L_ISPWhatIfGivenAccount2_Text = "ÊÊÖãä Êáß ÇáãÚáæãÇÊ ÇÓã ãÓÊÎÏã¡ æßáãÉ ãÑæÑ¡ æÇÓã æÑÞã åÇÊÝ ãæÝøÑ ÎÏãÉ ÅäÊÑäÊ.";
	Agent_Speak(L_ISPWhatIfGivenAccount2_Text);
	
    var L_ISPWhatIfGivenAccount3_Text = "ÅÐÇ ßÇäÊ åÐå ÇáãÚáæãÇÊ áÏíß¡ ÝÃäÊ Êãáß ÍÓÇÈ ÅäÊÑäÊ ãÓÈÞÇð.";
	Agent_Speak(L_ISPWhatIfGivenAccount3_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");
	
    var L_ISPWhatIfGivenAccount4_Text = "ÅÐÇ ßÇä ÇÓã ISP (ãæÝÑ ÎÏãÉ ÅäÊÑäÊ) åæ MSN, ÝÞã ÈÊÍÏíÏ ÇáÎíÇÑ ÇáÃæá.";
	Agent_Speak(L_ISPWhatIfGivenAccount4_Text);
    
    Agent_Play("RestPose");

    
    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");
    	
        var L_ISPWhatIfGivenAccount5_Text = "ÅÐÇ áã íßä ÇÓã ISP (ãæÝÑ ÎÏãÉ ÅäÊÑäÊ) åæ MSN, ÝÞã ÈÊÍÏíÏ ÇáÎíÇÑ ÇáËÇäí ÈÏáÇð ãä Ðáß.";
    	Agent_Speak(L_ISPWhatIfGivenAccount5_Text);
        
        Agent_Play("RestPose");
    }

    Agent_GestureAtElement(g.radioSkip, "Left");
    
    var L_ISPWhatIfGivenAccount6_Text = "Ãæ¡ ÅÐÇ ÃÑÏÊ ÇáÇäÊÙÇÑ áÅÚÏÇÏ ÇÊÕÇá ÅäÊÑäÊ Úáì åÐÇ ÇáßãÈíæÊÑ áÇÍÞÇð¡ ÝÞã ÈÊÍÏíÏ ÇáÎíÇÑ ÇáÃÎíÑ.";
	Agent_Speak(L_ISPWhatIfGivenAccount6_Text);
			    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_ISPWhatIfGivenAccount7_Text = "Ëã ÇäÞÑ ÒÑ 'ÇáÊÇáí'.";
	Agent_Speak(L_ISPWhatIfGivenAccount7_Text);
	
	Agent_Play("RestPose");
}

function Agent_ISPWhatToDoNext() 
{				    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
    
    var L_ISPWhatToDoNext1_Text = "ÈÚÏ ÊÍÏíÏ ÎíÇÑ¡ ÇäÞÑ ÝæÞ ÒÑ ÇáÊÇáí.";
	Agent_Speak(L_ISPWhatToDoNext1_Text);
	
	Agent_Play("RestPose");
}



function Agent_ICSAddCommands() 
{
	var L_ICSAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
	var L_ICSAddCommands2_Text = "ãÇ åæ ÌÏÇÑ ÍãÇíÉ ÇáÇÊ&ÕÇá ÈÅäÊÑäÊ¿";
	var L_ICSAddCommands3_Text = "ãÇ åæ ã&ÚÇáÌ ÔÈßÉ ÇáÇÊÕÇá ÇáãäÒáíÉ¿";
	
	g_AgentCharacter.Commands.Add("Agent_ICSAboutThisStep", L_ICSAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_ICSWhatIsFirewall", L_ICSAddCommands2_Text);
	g_AgentCharacter.Commands.Add("Agent_ICSWhatIsNetworkWizard", L_ICSAddCommands3_Text);
        
    Agent_AddWhatToDoNextCommand();        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_ICSAboutThisStep() 
{
	var L_ICSAboutThisStep1_Text = "Ýí åÐå ÇáÔÇÔÉ ÊÎÊÇÑ ßíÝ ÊÑíÏ Ãä íÞæã åÐÇ ÇáßãÈíæÊÑ ÈÇáæÕæá Åáì ÅäÊÑäÊ.";
	Agent_Speak(L_ICSAboutThisStep1_Text);
	
	var L_ICSAboutThisStep2_Text = "ÅÐÇ ßÇä åÐÇ ÇáßãÈíæÊÑ ãÊÕá ÈÔÈßÉ ÇÊÕÇá áÃÌåÒÉ ßãÈíæÊÑ ÃÎÑì¡ íãßäß ÇÓÊÎÏÇã ÔÈßÉ ÇáÇÊÕÇá ááæÕæá Åáì ÅäÊÑäÊ.";
	Agent_Speak(L_ICSAboutThisStep2_Text);
	
	var L_ICSAboutThisStep3_Text = "æÅáÇ¡ íãßä ÅÚÏÇÏ ÇáßãÈíæÊÑ áÅäÔÇÁ ÇÊÕÇá ãÈÇÔÑ ÈÅäÊÑäÊ.";
	Agent_Speak(L_ICSAboutThisStep3_Text);
	
	var L_ICSAboutThisStep4_Text = "ÈÛÖ ÇáäÙÑ Úä ÇáÎíÇÑ ÇáÐí ÇÎÊÑÊå¡ íÞæã Windows XP ÈÍãÇíÊß ÈæÇÓØÉ ÌÏÇÑ ÍãÇíÉ ÇÊÕÇá ÅäÊÑäÊ áÊÃãíä ÇáßãÈíæÊÑ ãä ÇáæÕæá ÛíÑ ÇáãÕÑÍ Èå ÈæÇÓØÉ ãÓÊÎÏãí ÇáÅäÊÑäÊ.";
	Agent_Speak(L_ICSAboutThisStep4_Text);
}
	
function Agent_ICSWhatIsFirewall() 
{
	var L_ICSWhatIsFirewall1_Text = "ÌÏÇÑ ÇáÍãÇíÉ åæ äÙÇã ÃãÇä ãÕãã áÍãÇíÉ ÇáßãÈíæÊÑ - Ãæ ÔÈßÉ ÇÊÕÇá ÇáßãÈíæÊÑ - ãä ÇáÊåÏíÏÇÊ ÇáÎÇÑÌíÉ¡ ãËá ÇáãÊØÝáíä¡ ÇáÐíä íÃÊæä ãä ÔÈßÇÊ ÇÊÕÇá ÃÎÑì¡ ãËá ÅäÊÑäÊ.";
	Agent_Speak(L_ICSWhatIsFirewall1_Text);
	
	var L_ICSWhatIsFirewall2_Text = "ÚäÏãÇ ÊÞæã ÈÅÚÏÇÏ ÔÈßÉ ÇáÇÊÕÇá Ýí Windows XP¡ íÊã ÊÔÛíá ãíÒÉ ÌÏÇÑ ÍãÇíÉ ÇÊÕÇá ÅäÊÑäÊ Ýí Windows XP ÊáÞÇÆíÇð.";
	Agent_Speak(L_ICSWhatIsFirewall2_Text);
	
	var L_ICSWhatIsFirewall3_Text = "æíÊã ÊÔÛíáåÇ ÃíÖÇð ÅÐÇ ßÇä ÇáßãÈíæÊÑ áíÓ ÌÒÁ ãä ÔÈßÉ ÇÊÕÇá æáßäå íÊÕá ÈÅäÊÑäÊ ãÈÇÔÑÉð.";
	Agent_Speak(L_ICSWhatIsFirewall3_Text);
}
	
function Agent_ICSWhatIsNetworkWizard() 
{
	var L_ICSWhatIsNetworkWizard1_Text = "íÑÔÏß åÐÇ ÇáãÚÇáÌ ÎáÇá ßá ÎØæÉ Ýí ÅÚÏÇÏ ÔÈßÉ ÇáÇÊÕÇá Ýí ÇáãäÒá Ãæ Ýí ãßÇä ÇáÚãá.";
	Agent_Speak(L_ICSWhatIsNetworkWizard1_Text);
	
	var L_ICSWhatIsNetworkWizard2_Text = "ÅÐÇ ßäÊ áÇ ÊÑíÏ ÇÊÕÇá åÐÇ ÇáßãÈíæÊÑ ÈÅäÊÑäÊ ÃËäÇÁ åÐå ÇáÚãáíÉ¡ íãßäß ÇáÞíÇã ÈÐáß áÇÍÞÇð.";
	Agent_Speak(L_ICSWhatIsNetworkWizard2_Text);
	
	var L_ICSWhatIsNetworkWizard3_Text = "ÇäÊÞá Åáì ÞÇÆãÉ ÇÈÏÃ æÇäÞÑ ÝæÞ ÈÑÇãÌ ÅÖÇÝíÉ.";
	Agent_Speak(L_ICSWhatIsNetworkWizard3_Text);
	
	var L_ICSWhatIsNetworkWizard4_Text = "Ëã ÇäÞÑ ÝæÞ ÇáÈÑÇãÌ ÇáãáÍÞÉ Ëã ÇÊÕÇáÇÊ ááÚËæÑ Úáì ãÚÇáÌ ÔÈßÉ ÇáÇÊÕÇá ÇáãäÒáíÉ.";
	Agent_Speak(L_ICSWhatIsNetworkWizard4_Text);
	
	var L_ICSWhatIsNetworkWizard5_Text = "ÅÐÇ äÓíÊ åÐå ÇáÎØæÇÊ¡ ÇäÞÑ ÝæÞ ÇáÊÚáíãÇÊ æÇáÏÚã Úáì ÇáÞÇÆãÉ ÇÈÏÃ ááÍÕæá Úáì ÇáÃÌæÈÉ áÃÓÆáÊß æãÒíÏ ãä ÇáãÚáæãÇÊ ÇáãÝíÏÉ.";
	Agent_Speak(L_ICSWhatIsNetworkWizard5_Text);
}



function Agent_ICSDCAddCommands() 
{
	var L_ICSDCAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
	var L_ICSDCAddCommands2_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";
	
	g_AgentCharacter.Commands.Add("Agent_ICSDCAboutThisStep", L_ICSDCAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_ICSDCWhatToDoNext", L_ICSDCAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_ICSDCAboutThisStep() 
{
	var L_ICSDCAboutThisStep1_Text = "ÊÔÑÍ áß åÐå ÇáÔÇÔÉ Ãä ÌåÇÒ ÇáßãÈíæÊÑ ÃÕÈÍ ÛíÑ ãÊÕá ÈÅäÊÑäÊ.";
	Agent_Speak(L_ICSDCAboutThisStep1_Text);
}
	
function Agent_ICSDCWhatToDoNext() 
{		    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
    
	var L_ICSDCWhatToDoNext1_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáãÍÇæáÉ' áãÍÇæáÉ ÅÚÇÏÉ ÇáÇÊÕÇá ÈÅäÊÑäÊ.";
	Agent_Speak(L_ICSDCWhatToDoNext1_Text);
	
	Agent_Play("RestPose");
			    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }
    
	var L_ICSDCWhatToDoNext2_Text = "Ãæ ÇäÞÑ ÝæÞ \"ÊÎØí\" ááãÊÇÈÚÉ ÈÏæä ÇáÇÊÕÇá ÈÅäÊÑäÊ.";
	Agent_Speak(L_ICSDCWhatToDoNext2_Text);
	
	Agent_Play("RestPose");
}



function Agent_Ident1AddCommands() 
{
    var L_Ident1AddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_Ident1AddCommands2_Text = "ãÇ åæ &ÍÓÇÈ ÇáãÓÊÎÏã¿";
    var L_Ident1AddCommands3_Text = "ãÇ åí ÝæÇÆÏ Å&ÚÏÇÏ ÍÓÇÈÇÊ ÇáãÓÊÎÏã¿";
    var L_Ident1AddCommands4_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_Ident1Command_AboutThisStep", L_Ident1AddCommands1_Text);	
    g_AgentCharacter.Commands.Add("Agent_Ident1Command_WhatIsUserAccount", L_Ident1AddCommands2_Text);
    g_AgentCharacter.Commands.Add("Agent_Ident1Command_Benefits", L_Ident1AddCommands3_Text);
    g_AgentCharacter.Commands.Add("Agent_Ident1WhatToDoNext", L_Ident1AddCommands4_Text);        
  
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_Ident1Command_AboutThisStep() 
{	
	var L_Ident1AboutThisStep1_Text = "åÐå åí ÇáÔÇÔÉ ÍíË ÊõÚÑÝ ÇáÃÔÎÇÕ ÇáÂÎÑíä ÇáÐíä ÓíÓÊÎÏãæä åÐÇ ÇáßãÈíæÊÑ.";
	Agent_Speak(L_Ident1AboutThisStep1_Text);
	
	var L_Ident1AboutThisStep2_Text = "ÅÐÇ ÞãÊ ÈãÔÇÑßÉ åÐÇ ÇáßãÈíæÊÑ ãÚ ÂÎÑíä¡ íãßä áßá ãÓÊÎÏã ÅÖÝÇÁ ØÇÈÚ ÔÎÕí Úáì Windows XP ÈæÇÓØÉ ÅÚÏÇÏ ÍÓÇÈ áßá ÔÎÕ.";
	Agent_Speak(L_Ident1AboutThisStep2_Text);
    
    var L_Ident1AboutThisStep3_Text = "æÈåÐå ÇáØÑíÞÉ¡ íãßä áßá ãÓÊÎÏã ÇÓÊÎÏÇã ÅÚÏÇÏÇÊ ÇáßãÈíæÊÑ ÇáÎÇÕÉ Èå¡ æÇãÊíÇÒÇÊå, æÇÑÊÈÇØÇÊ æíÈ¡ æãáÝÇÊå ÇáÎÇÕÉ¡ æÎíÇÑÇÊ ÃÎÑì¡ Ïæä ÇáÊÃËíÑ Úáì ÇáØÑíÞÉ ÇáÊí ÞãÊ ÈÊÔÎíÕå ÈåÇ ãä ÃÌáß.";
    Agent_Speak(L_Ident1AboutThisStep3_Text);
    
    var L_Ident1AboutThisStep4_Text = "ÚäÏ ÈÏÁ ÊÔÛíá ÇáßãÈíæÊÑ¡ ÓÊÚÑÖ áß ÔÇÔÉ ÇáÊÑÍíÈ ßÇÝÉ ÇáÃÓãÇÁ ÇáÊí ÊßÊÈåÇ Úáì åÐå ÇáÔÇÔÉ ÈÇáÊÑÊíÈ ÇáÃÈÌÏí.";
    Agent_Speak(L_Ident1AboutThisStep4_Text);
    
    var L_Ident1AboutThisStep5_Text = "æÓÊÚÑÖ áß ßÐáß ÕæÑÉ áßá ÔÎÕ.";
    Agent_Speak(L_Ident1AboutThisStep5_Text);
    
    var L_Ident1AboutThisStep6_Text = "ßãÇ íãßäß ÏÇÆãÇð ÊÛííÑ åÐå ÇáÃÓãÇÁ áÇÍÞÇð æÐáß ÈÇáäÞÑ ÝæÞ 'áæÍÉ ÇáÊÍßã' Ýí ÇáÞÇÆãÉ 'ÇÈÏÃ'¡ æãä Ëã ÇáäÞÑ ÝæÞ ÑãÒ 'ÍÓÇÈÇÊ ÇáãÓÊÎÏãíä'.";
    Agent_Speak(L_Ident1AboutThisStep6_Text);
}

function Agent_Ident1Command_WhatIsUserAccount() 
{	
	var L_Ident1WhatIsUserAccount1_Text = "ÅÐÇ ÔÇÑßÊ ÌåÇÒ ßãÈíæÊÑ ãÚ ÃÔÎÇÕ ÂÎÑíä Ýí ÇáãäÒá Ãæ ÇáãßÊÈ¡ ÓÊÚÌÈß ÍÓÇÈÇÊ ÇáãÓÊÎÏãíä.";
	Agent_Speak(L_Ident1WhatIsUserAccount1_Text);
	
	var L_Ident1WhatIsUserAccount2_Text = "ÈÇÓÊÎÏÇã ÍÓÇÈÇÊ ÇáãÓÊÎÏãíä¡ íãßäß:";
	Agent_Speak(L_Ident1WhatIsUserAccount2_Text);
    
    var L_Ident1WhatIsUserAccount3_Text = "ÅÖÝÇÁ ØÇÈÚ ÔÎÕí Úáì ØÑíÞÉ ÊäÙíã Windows ááãÚáæãÇÊ æÚÑÖåÇ¡ Ïæä ÇáÊÃËíÑ Úáì ÊÝÖíáÇÊ ÇáÂÎÑíäº";
    Agent_Speak(L_Ident1WhatIsUserAccount3_Text);
    
    var L_Ident1WhatIsUserAccount4_Text = "ÊØÇáÈ ÈßáãÉ ãÑæÑ ááæÕæá Åáì ãáÝÇÊßº";
    Agent_Speak(L_Ident1WhatIsUserAccount4_Text);
    
    var L_Ident1WhatIsUserAccount5_Text = "ÊÐßøÑ ÞÇÆãÉ ÔÎÕíÉ ÈãæÇÞÚ æíÈ ÇáãÝÖáÉ æÇáãæÇÞÚ ÇáÊí ÒÑÊåÇ ãÄÎÑÇðº";
    Agent_Speak(L_Ident1WhatIsUserAccount5_Text);
    
    var L_Ident1WhatIsUserAccount6_Text = "ÍãÇíÉ ÅÚÏÇÏÇÊ ÇáßãÈíæÊÑ ÇáåÇãÉº";
    Agent_Speak(L_Ident1WhatIsUserAccount6_Text);
    
    var L_Ident1WhatIsUserAccount7_Text = "ÊÎÕíÕ ÓØÍ ÇáãßÊÈ áßá ãÓÊÎÏã";
    Agent_Speak(L_Ident1WhatIsUserAccount7_Text);
    
    var L_Ident1WhatIsUserAccount8_Text = "ÊÈÓíØ ÊÓÌíá ÇáÏÎæá æÇáÊÈÏíá ÇáÓÑíÚ Èíä ãÓÊÎÏãí ÇáßãÈíæÊÑ.";
    Agent_Speak(L_Ident1WhatIsUserAccount8_Text);
}

function Agent_Ident1Command_Benefits() 
{	
	var L_Ident1Benefits1_Text = "Åä ãÔÇÑßÉ ßãÈíæÊÑ ÊÚäí Ãäå ÈÅãßÇä ãÓÊÎÏãíä ÂÎÑíä ÑÄíÉ ãáÝÇÊß ÇáÎÇÕÉ¡ æÊËÈíÊ ÃáÚÇÈ Ãæ ÈÑÇãÌ ÃÎÑì áÇ ÊÑíÏåÇ¡ Ãæ ÊÛííÑ ÅÚÏÇÏÇÊ ÇáßãÈíæÊÑ.";
	Agent_Speak(L_Ident1Benefits1_Text);
	
	var L_Ident1Benefits2_Text = "áÞÏ ÊÛíøÑ ßá Ðáß ÇáÂä!";
	Agent_Speak(L_Ident1Benefits2_Text);
    
    var L_Ident1Benefits3_Text = "ÚäÏ ÅÚÏÇÏ ÍÓÇÈÇÊ ÇáãÓÊÎÏã¡ ÈÅãßÇä ßá ãÓÊÎÏã ÊÎÕíÕ Windows Ïæä ÇáÊÃËíÑ Úáì ÇáãÓÊÎÏãíä ÇáÂÎÑíä áåÐÇ ÇáßãÈíæÊÑ.";
    Agent_Speak(L_Ident1Benefits3_Text);
    
    var L_Ident1Benefits4_Text = "áãÚÑÝÉ ÇáãÒíÏ Íæá ÍÓÇÈÇÊ ÇáãÓÊÎÏãíä¡ ÇäÞÑ ÝæÞ ÇáÊÚáíãÇÊ æÇáÏÚã Úáì ÇáÞÇÆãÉ ÇÈÏÃ ááÚËæÑ Úáì ÇáÑÏ Úáì ÃÓÆáÊß æÇáãÒíÏ ãä ÇáãÚáæãÇÊ ÇáÞíãÉ.";
    Agent_Speak(L_Ident1Benefits4_Text);
}

function Agent_Ident1WhatToDoNext() 
{		    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
    
    var L_Ident1WhatToDoNext1_Text = "ÈÚÏ ßÊÇÈÉ ÃÓãÇÁ ÇáÃÔÎÇÕ ÇáÂÎÑíä ÇáÐíä ÓíÓÊÎÏãæä åÐÇ ÇáßãÈíæÊÑ¡ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááÇÓÊãÑÇÑ.";
    Agent_Speak(L_Ident1WhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_Ident1WhatToDoNext2_Text = "íãßäß ÊÛííÑ åÐå ÇáÃÓãÇÁ æÅÖÇÝÉ ÇáãÒíÏ ãä ÇáãÓÊÎÏãíä áÇÍÞÇð ÈÚÏ ÇáÇäÊåÇÁ ãä ÅÚÏÇÏ Windows.";
    Agent_Speak(L_Ident1WhatToDoNext2_Text);
        
    var L_Ident1WhatToDoNext3_Text = "ÝÞØ ÇäÞÑ ÝæÞ 'áæÍÉ ÇáÊÍßã' Ýí ÇáÞÇÆãÉ 'ÇÈÏÃ'¡ æãä Ëã ÇÎÊÑ 'ÍÓÇÈÇÊ ÇáãÓÊÎÏãíä'.";
    Agent_Speak(L_Ident1WhatToDoNext3_Text);
}



function Agent_IdentitiesAddCommands() 
{
    var L_IdentitiesAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_IdentitiesAddCommands2_Text = "ãÇ åæ &ÍÓÇÈ ÇáãÓÊÎÏã¿";
    var L_IdentitiesAddCommands3_Text = "ãÇ åí ÝæÇÆÏ Å&ÚÏÇÏ ÍÓÇÈÇÊ ÇáãÓÊÎÏã¿";
    var L_IdentitiesAddCommands4_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_IdentitiesCommand_AboutThisStep", L_IdentitiesAddCommands1_Text);	
    g_AgentCharacter.Commands.Add("Agent_IdentitiesCommand_WhatIsUserAccount", L_IdentitiesAddCommands2_Text);
    g_AgentCharacter.Commands.Add("Agent_IdentitiesCommand_Benefits", L_IdentitiesAddCommands3_Text);
    g_AgentCharacter.Commands.Add("Agent_IdentitiesWhatToDoNext", L_IdentitiesAddCommands4_Text);
    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_IdentitiesCommand_AboutThisStep() 
{	
	var L_IdentitiesAboutThisStep1_Text = "åÐå åí ÇáÔÇÔÉ ÍíË ÊõÚÑÝ ÇáÃÔÎÇÕ ÇáÂÎÑíä ÇáÐíä ÓíÓÊÎÏãæä åÐÇ ÇáßãÈíæÊÑ.";
	Agent_Speak(L_IdentitiesAboutThisStep1_Text);
	
	var L_IdentitiesAboutThisStep2_Text = "ÅÐÇ ÞãÊ ÈãÔÇÑßÉ åÐÇ ÇáßãÈíæÊÑ ãÚ ÂÎÑíä¡ íãßä áßá ãÓÊÎÏã ÅÖÝÇÁ ØÇÈÚ ÔÎÕí Úáì Windows XP ÈæÇÓØÉ ÅÚÏÇÏ ÍÓÇÈ áßá ÔÎÕ.";
	Agent_Speak(L_IdentitiesAboutThisStep2_Text);
    
    var L_IdentitiesAboutThisStep3_Text = "æÈåÐå ÇáØÑíÞÉ¡ íãßä áßá ãÓÊÎÏã ÇÓÊÎÏÇã ÅÚÏÇÏÇÊ ÇáßãÈíæÊÑ ÇáÎÇÕÉ Èå¡ æÇãÊíÇÒÇÊå, æãáÝÇÊå ÇáÎÇÕÉ¡ æÎíÇÑÇÊ ÃÎÑì¡ Ïæä ÇáÊÃËíÑ Úáì ÇáØÑíÞÉ ÇáÊí ÞãÊ ÈÊÔÎíÕå ÈåÇ ãä ÃÌáß.";
    Agent_Speak(L_IdentitiesAboutThisStep3_Text);
    
    var L_IdentitiesAboutThisStep4_Text = "ÚäÏ ÈÏÁ ÊÔÛíá ÇáßãÈíæÊÑ¡ ÓÊÚÑÖ áß ÔÇÔÉ ÇáÊÑÍíÈ ßÇÝÉ ÇáÃÓãÇÁ ÇáÊí ÊßÊÈåÇ Úáì åÐå ÇáÔÇÔÉ ÈÇáÊÑÊíÈ ÇáÃÈÌÏí.";
    Agent_Speak(L_IdentitiesAboutThisStep4_Text);
    
    var L_IdentitiesAboutThisStep5_Text = "æÓÊÚÑÖ áß ßÐáß ÕæÑÉ áßá ÔÎÕ.";
    Agent_Speak(L_IdentitiesAboutThisStep5_Text);
    
    var L_IdentitiesAboutThisStep6_Text = "ßãÇ íãßäß ÏÇÆãÇð ÊÛííÑ åÐå ÇáÃÓãÇÁ áÇÍÞÇð æÐáß ÈÇáäÞÑ ÝæÞ 'áæÍÉ ÇáÊÍßã' Ýí ÇáÞÇÆãÉ 'ÇÈÏÃ'¡ æãä Ëã ÇáäÞÑ ÝæÞ ÑãÒ 'ÍÓÇÈÇÊ ÇáãÓÊÎÏãíä'.";
    Agent_Speak(L_IdentitiesAboutThisStep6_Text);
}

function Agent_IdentitiesCommand_WhatIsUserAccount() 
{	
	var L_IdentitiesWhatIsUserAccount1_Text = "ÅÐÇ ÔÇÑßÊ ÌåÇÒ ßãÈíæÊÑ ãÚ ÃÔÎÇÕ ÂÎÑíä Ýí ÇáãäÒá Ãæ ÇáãßÊÈ¡ ÓÊÚÌÈß ÍÓÇÈÇÊ ÇáãÓÊÎÏãíä.";
	Agent_Speak(L_IdentitiesWhatIsUserAccount1_Text);
	
	var L_IdentitiesWhatIsUserAccount2_Text = "ÈÇÓÊÎÏÇã ÍÓÇÈÇÊ ÇáãÓÊÎÏãíä¡ íãßäß:";
	Agent_Speak(L_IdentitiesWhatIsUserAccount2_Text);
    
    var L_IdentitiesWhatIsUserAccount3_Text = "ÅÖÝÇÁ ØÇÈÚ ÔÎÕí Úáì ØÑíÞÉ ÊäÙíã Windows ááãÚáæãÇÊ æÚÑÖåÇ¡ Ïæä ÇáÊÃËíÑ Úáì ÊÝÖíáÇÊ ÇáÂÎÑíäº";
    Agent_Speak(L_IdentitiesWhatIsUserAccount3_Text);
    
    var L_IdentitiesWhatIsUserAccount4_Text = "ÊØÇáÈ ÈßáãÉ ãÑæÑ ááæÕæá Åáì ãáÝÇÊßº";
    Agent_Speak(L_IdentitiesWhatIsUserAccount4_Text);
    
    var L_IdentitiesWhatIsUserAccount5_Text = "ÊÐßøÑ ÞÇÆãÉ ÔÎÕíÉ ÈãæÇÞÚ æíÈ ÇáãÝÖáÉ æÇáãæÇÞÚ ÇáÊí ÒÑÊåÇ ãÄÎÑÇðº";
    Agent_Speak(L_IdentitiesWhatIsUserAccount5_Text);
    
    var L_IdentitiesWhatIsUserAccount6_Text = "ÍãÇíÉ ÅÚÏÇÏÇÊ ÇáßãÈíæÊÑ ÇáåÇãÉº";
    Agent_Speak(L_IdentitiesWhatIsUserAccount6_Text);
    
    var L_IdentitiesWhatIsUserAccount7_Text = "ÊÎÕíÕ ÓØÍ ÇáãßÊÈ áßá ãÓÊÎÏã";
    Agent_Speak(L_IdentitiesWhatIsUserAccount7_Text);
    
    var L_IdentitiesWhatIsUserAccount8_Text = "ÊÈÓíØ ÊÓÌíá ÇáÏÎæá æÇáÊÈÏíá ÇáÓÑíÚ Èíä ãÓÊÎÏãí ÇáßãÈíæÊÑ.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount8_Text);
}

function Agent_IdentitiesCommand_Benefits() 
{	
	var L_IdentitiesBenefits1_Text = "Åä ãÔÇÑßÉ ßãÈíæÊÑ ÊÚäí Ãäå ÈÅãßÇä ãÓÊÎÏãíä ÂÎÑíä ÑÄíÉ ãáÝÇÊß ÇáÎÇÕÉ¡ æÊËÈíÊ ÃáÚÇÈ Ãæ ÈÑÇãÌ ÃÎÑì áÇ ÊÑíÏåÇ¡ Ãæ ÊÛííÑ ÅÚÏÇÏÇÊ ÇáßãÈíæÊÑ.";
	Agent_Speak(L_IdentitiesBenefits1_Text);
	
	var L_IdentitiesBenefits2_Text = "áÞÏ ÊÛíøÑ ßá Ðáß ÇáÂä!";
	Agent_Speak(L_IdentitiesBenefits2_Text);
    
    var L_IdentitiesBenefits3_Text = "ÚäÏ ÅÚÏÇÏ ÍÓÇÈÇÊ ÇáãÓÊÎÏã¡ ÈÅãßÇä ßá ãÓÊÎÏã ÊÎÕíÕ Windows Ïæä ÇáÊÃËíÑ Úáì ÇáãÓÊÎÏãíä ÇáÂÎÑíä áåÐÇ ÇáßãÈíæÊÑ.";
    Agent_Speak(L_IdentitiesBenefits3_Text);
    
    var L_IdentitiesBenefits4_Text = "áãÚÑÝÉ ÇáãÒíÏ Íæá ÍÓÇÈÇÊ ÇáãÓÊÎÏãíä¡ ÇäÞÑ ÝæÞ ÇáÊÚáíãÇÊ æÇáÏÚã Úáì ÇáÞÇÆãÉ ÇÈÏÃ ááÚËæÑ Úáì ÇáÑÏ Úáì ÃÓÆáÊß æÇáãÒíÏ ãä ÇáãÚáæãÇÊ ÇáÞíãÉ.";
    Agent_Speak(L_IdentitiesBenefits4_Text);
}

function Agent_IdentitiesWhatToDoNext() 
{		    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
    
    var L_IdentitiesWhatToDoNext1_Text = "ÈÚÏ ßÊÇÈÉ ÃÓãÇÁ ÇáÃÔÎÇÕ ÇáÂÎÑíä ÇáÐíä ÓíÓÊÎÏãæä åÐÇ ÇáßãÈíæÊÑ¡ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááÇÓÊãÑÇÑ.";
    Agent_Speak(L_IdentitiesWhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_IdentitiesWhatToDoNext2_Text = "íãßäß ÊÛííÑ åÐå ÇáÃÓãÇÁ æÅÖÇÝÉ ÇáãÒíÏ ãä ÇáãÓÊÎÏãíä áÇÍÞÇð ÈÚÏ ÇáÇäÊåÇÁ ãä ÅÚÏÇÏ Windows.";
    Agent_Speak(L_IdentitiesWhatToDoNext2_Text);
        
    var L_IdentitiesWhatToDoNext3_Text = "ÝÞØ ÇäÞÑ ÝæÞ 'áæÍÉ ÇáÊÍßã' Ýí ÇáÞÇÆãÉ 'ÇÈÏÃ'¡ æãä Ëã ÇÎÊÑ 'ÍÓÇÈÇÊ ÇáãÓÊÎÏãíä'.";
    Agent_Speak(L_IdentitiesWhatToDoNext3_Text);
}



function Agent_KeybdAddCommands() 
{
	var L_KeybdMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_KeybdMenuCommand2_Text = "&ßíÝ ÃÍÏÏ ÇáÅÞáíã¿";
    var L_KeybdMenuCommand3_Text = "ßíÝ ÃÍ&ÏÏ ÇááÛÉ¿";
    var L_KeybdMenuCommand4_Text = "ßíÝ Ã&ÍÏÏ áæÍÉ ÇáãÝÇÊíÍ¿";

    g_AgentCharacter.Commands.Add("Agent_KeybdAboutThisStep", L_KeybdMenuCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_KeybdHowToSelectRegion", L_KeybdMenuCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_KeybdHowToSelectLanguage", L_KeybdMenuCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_KeybdHowToSelectKeyboard", L_KeybdMenuCommand4_Text);

    Agent_AddWhatToDoNextCommand();        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_KeybdAboutThisStep() 
{		
    var L_KeybdAboutThisStep1_Text = "Ýí ÇáÔÇÔÇÊ ÇáÞáíáÉ ÇáÊÇáíÉ¡ íãßäß Ãä ÊÎÈÑ Windows Úä ßíÝíÉ ÚÑÖ ÇáäÕ¡ æÇáÊæÇÑíÎ¡ æÇáÃÑÞÇã ÇÓÊäÇÏÇð Åáì ÊÝÖíáÇÊ ÇááÛÉ¡ æÇáãäØÞÉ¡ æÇáãäØÞÉ ÇáÒãäíÉ áÏíß.";
    Agent_Speak(L_KeybdAboutThisStep1_Text);
        
    var L_KeybdAboutThisStep2_Text = "ãËáÇð¡ Úáì åÐå ÇáÔÇÔÉ¡ ÍÏÏ ÇáÅÞáíã ÇáÃÞÑÈ Ýí ÇáÚÇáã áãßÇä æÌæÏß¡ ÇááÛÉ ÇáÊí ÓÊÓÊÎÏãåÇ ÈÊßÑÇÑ Úáì ÇáßãÈíæÊÑ¡ æáæÍÉ ÇáãÝÇÊíÍ ÇáÊí ÊÓÊÎÏãåÇ.";
    Agent_Speak(L_KeybdAboutThisStep2_Text);
        
    var L_KeybdAboutThisStep3_Text = "ÓíÊÃßÏ Windows ãä ÚÑÖ ÇáÊÇÑíÎ¡ æÇáæÞÊ¡ æÇáÚãáÉ ÈÔßá ÕÍíÍ.";
    Agent_Speak(L_KeybdAboutThisStep3_Text);
        
    var L_KeybdAboutThisStep4_Text = "Úáì ÓÈíá ÇáãËÇá¡ ÅÐÇ ÇÎÊÑÊ ÇáæáÇíÇÊ ÇáãÊÍÏÉ ßÅÞáíã ÎÇÕ Èß æÇááÛÉ ÇáÅäßáíÒíÉ ßÅÚÏÇÏ áÛÉ ÎÇÕ Èß¡ ÝÅä ÇáÞíã ÇáäÞÏíÉ ÓÊÙåÑ ÈÇáÏæáÇÑ ÇáÃãÑíßí.";
    Agent_Speak(L_KeybdAboutThisStep4_Text);

    var L_KeybdAboutThisStep5_Text = "æáßä ÅÐÇ ÇÎÊÑÊ ÇáããáßÉ ÇáãÊÍÏÉ ßÅÞáíã ÎÇÕ Èß¡ ÝÅäåÇ ÓÊÙåÑ ÈÇáÌäíå ÇáÇÓÊÑáíäí.";
    Agent_Speak(L_KeybdAboutThisStep5_Text);
}

function Agent_KeybdHowToSelectRegion() 
{     
    Agent_GestureAtElement(g.selRegion, "Left");
     
    var L_KeybdHowToSelectRegion1_Text = "ÊÙåÑ ÇáÃÞÇáíã ÇáÚÇáãíÉ Ýí åÐå ÇáÞÇÆãÉ ÈÇáÊÑÊíÈ ÇáÃÈÌÏí.";
    Agent_Speak(L_KeybdHowToSelectRegion1_Text);	
   
    var L_KeybdHowToSelectRegion2_Text = "ÇäÞÑ ÏÇÎá åÐå ÇáÞÇÆãÉ¡ Ãæ ÇÖÛØ ãÝÊÇÍ Tab Úáì áæÍÉ ÇáãÝÇÊíÍ ÍÊì ÊÕá ÅáíåÇ.";
    Agent_Speak(L_KeybdHowToSelectRegion2_Text);	
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selRegion, "Right");
        
    var L_KeybdHowToSelectRegion3_Text = "Ëã ÇäÞÑ ÝæÞ ÃÒÑÇÑ ÇáÃÓåã ÇáÕÛíÑÉ åÐå¡ Ãæ ÇÓÊÎÏã ãÝÇÊíÍ ÇáÃÓåã ááÃÚáì æááÃÓÝá Úáì áæÍÉ ÇáãÝÇÊíÍ¡ ááÊãÑíÑ ÎáÇá ÇáÃÞÇáíã.";
    Agent_Speak(L_KeybdHowToSelectRegion3_Text);
        
    var L_KeybdHowToSelectRegion4_Text = "ÚäÏãÇ ÊÔÇåÏ ÇáÅÞáíã ÇáÃÞÑÈ Åáì ãßÇä æÌæÏß¡ ÇäÞÑ ÝæÞå Ãæ ÇÖÛØ Enter Úáì áæÍÉ ÇáãÝÇÊíÍ.";
    Agent_Speak(L_KeybdHowToSelectRegion4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.RegionName, "Left");

    var L_KeybdHowToSelectRegion5_Text = "ÓíÙåÑ ÇáÅÞáíã ÇáÐí ÍÏÏÊå ÈåÐÇ ÇáãÑÈÚ.";
    Agent_Speak(L_KeybdHowToSelectRegion5_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectLanguage() 
{        		
    var L_KeybdHowToSelectLanguage1_Text = "ÇÎÊÑ ÇááÛÉ ÇáÊí ÛÇáÈÇð ãÇ ÊÊÎÇØÈ ÈåÇ.";
    Agent_Speak(L_KeybdHowToSelectLanguage1_Text);
        
    var L_KeybdHowToSelectLanguage2_Text = "ãËáÇð¡ ÅÐÇ ßäÊ ÛÇáÈÇð ãÇ ÊÊßáã ÈÇááÛÉ ÇáÅÓÈÇäíÉ¡ æáßä ÈÑÇãÌ ÇáßãÈíæÊÑ æÇáãáÝÇÊ ÇáÊí ÊÚãá ÚáíåÇ ÚÇÏÉð åí ÈÇááÛÉ ÇáÅäßáíÒíÉ¡ ÝÇÎÊÑ ÇáÅäßáíÒíÉ åäÇ.";
    Agent_Speak(L_KeybdHowToSelectLanguage2_Text);   
        
    Agent_GestureAtElement(g.selLang, "Left");  
        
    var L_KeybdHowToSelectLanguage3_Text = "ÊÙåÑ ÇááÛÇÊ Ýí åÐå ÇáÞÇÆãÉ ÈÇáÊÑÊíÈ ÇáÃÈÌÏí.";
    Agent_Speak(L_KeybdHowToSelectLanguage3_Text);

    var L_KeybdHowToSelectLanguage4_Text = "ÇäÞÑ åäÇ Ãæ ÇÖÛØ ãÝÊÇÍ Tab Úáì áæÍÉ ÇáãÝÇÊíÍ ÍÊì ÊÕá ÅáíåÇ.";
    Agent_Speak(L_KeybdHowToSelectLanguage4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selLang, "Right");

    var L_KeybdHowToSelectLanguage5_Text = "Ëã ÇäÞÑ ÝæÞ ÃÒÑÇÑ ÇáÃÓåã ÇáÕÛíÑÉ åÐå¡ Ãæ ÇÓÊÎÏã ãÝÇÊíÍ ÇáÃÓåã ááÃÚáì æááÃÓÝá Úáì áæÍÉ ÇáãÝÇÊíÍ¡ ááÊãÑíÑ ÎáÇá ÇáÃÞÇáíã.";
    Agent_Speak(L_KeybdHowToSelectLanguage5_Text);

    var L_KeybdHowToSelectLanguage6_Text = "ÚäÏãÇ ÊÔÇåÏ ÇááÛÉ ÇáÊí ÊÑíÏ¡ ÇäÞÑ ÝæÞåÇ Ãæ ÇÖÛØ Enter Úáì áæÍÉ ÇáãÝÇÊíÍ.";
    Agent_Speak(L_KeybdHowToSelectLanguage6_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.LangName, "Left");

    var L_KeybdHowToSelectLanguage7_Text = "ÓÊÙåÑ ÇááÛÉ ÇáÊí ÍÏÏÊåÇ Ýí åÐÇ ÇáãÑÈÚ.";
    Agent_Speak(L_KeybdHowToSelectLanguage7_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectKeyboard() 
{		
    var L_KeybdHowToSelectKeyboard1_Text = "ÊÙåÑ áæÍÇÊ ÇáãÝÇÊíÍ Ýí åÐå ÇáÞÇÆãÉ ÈÇáÊÑÊíÈ ÇáÃÈÌÏí.";
    Agent_Speak(L_KeybdHowToSelectKeyboard1_Text);
    
    Agent_GestureAtElement(g.selKeyboard, "Left");
        
    var L_KeybdHowToSelectKeyboard2_Text = "ÇäÞÑ åäÇ Ãæ ÇÖÛØ ãÝÊÇÍ Tab Úáì áæÍÉ ÇáãÝÇÊíÍ ÍÊì ÊÕá ÅáíåÇ.";
    Agent_Speak(L_KeybdHowToSelectKeyboard2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selKeyboard, "Right");
        
    var L_KeybdHowToSelectKeyboard3_Text = "Ëã ÇäÞÑ ÝæÞ ÃÒÑÇÑ ÇáÃÓåã ÇáÕÛíÑÉ åÐå¡ Ãæ ÇÓÊÎÏã ãÝÇÊíÍ ÇáÃÓåã ááÃÚáì æááÃÓÝá Úáì áæÍÉ ÇáãÝÇÊíÍ¡ ááÊãÑíÑ ÎáÇá ÇáÞÇÆãÉ.";
    Agent_Speak(L_KeybdHowToSelectKeyboard3_Text);
        
    var L_KeybdHowToSelectKeyboard4_Text = "ÚäÏãÇ ÊÔÇåÏ áæÍÉ ÇáãÝÇÊíÍ ÇáÊí ÊÓÊÎÏãåÇ ãÚ åÐÇ ÇáßãÈíæÊÑ¡ ÇäÞÑ ÝæÞåÇ Ãæ ÇÖÛØ Enter Úáì áæÍÉ ÇáãÝÇÊíÍ.";
    Agent_Speak(L_KeybdHowToSelectKeyboard4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.KeyboardName, "Left");

    var L_KeybdHowToSelectKeyboard5_Text = "ÓÊÙåÑ áæÍÉ ÇáãÝÇÊíÍ ÇáÊí ÍÏÏÊåÇ Ýí åÐÇ ÇáãÑÈÚ.";
    Agent_Speak(L_KeybdHowToSelectKeyboard5_Text);
    
    Agent_Play("RestPose");
}



function Agent_EulaAddCommands() 
{
    var L_EulaCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_EulaCommand2_Text = "ßí&Ý ÃÚÈøÑ Úä ÅÌÇÈÊí";
    var L_EulaCommand3_Text = "ãÇ åí EULA ÈÇá&ÖÈØ¿";
    var L_EulaCommand4_Text = "ãÇ Çá&Ðí ÊÞæáå ÇÊÝÇÞíÉ ÊÑÎíÕ ÇáãÓÊÎÏã¿";
    var L_EulaCommand5_Text = "&áãÇÐÇ ÒÑ 'ÇáÊÇáí' ÛíÑ ãÊæÝÑ¿";
    var L_EulaCommand6_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_EulaAboutThisStep", L_EulaCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_EulaHowToAnswer", L_EulaCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_EulaWhatIsEula", L_EulaCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_EulaWhatDoesEulaSay", L_EulaCommand4_Text);
    g_AgentCharacter.Commands.Add("Agent_EulaWhereIsNextButton", L_EulaCommand5_Text);
    g_AgentCharacter.Commands.Add("Agent_EulaWhatToDoNext", L_EulaCommand6_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnEulaPreDisplayMenu() 
{
    if (g.btnNext.disabled) 
    {
        var L_EulaMenuCommand5_Text = "&áãÇÐÇ ÒÑ 'ÇáÊÇáí' ÛíÑ ãÊæÝÑ¿";

        try 
        {
            g_AgentCharacter.Commands.Insert("Agent_EulaWhereIsNextButton", "Agent_EulaWhatToDoNext",false,L_EulaMenuCommand5_Text);
        }
        catch (e) 
        {
        }
    }

    else 
    {
        try 
        {
            g_AgentCharacter.Commands.Remove("Agent_OnEulaMenuCommand5");
        }
        catch (e) 
        {
        }
    }
}

function Agent_EulaAboutThisStep() 
{	 
    var L_EulaAboutThisStep1_Text = "Ýí åÐå ÇáÔÇÔÉ íãßäß ÚÑÖ ÇÊÝÇÞíÉ ÇáÊÑÎíÕ áÜ Microsoft Windows¡ Ëã ÇáÅÔÇÑÉ Ýí ÍÇá ÇáãæÇÝÞÉ.";
    Agent_Speak(L_EulaAboutThisStep1_Text);		
    
    Agent_GestureAtElement(g.txtEULA,"Left");
        
    var L_EulaAboutThisStep2_Text = "áßí ÊÓÊÎÏã Windows¡ íÌÈ Úáíß ÞÈæá åÐå ÇáÇÊÝÇÞíÉ.";
    Agent_Speak(L_EulaAboutThisStep2_Text);
    
    Agent_Play("RestPose");
}

function Agent_EulaHowToAnswer() 
{		
    Agent_GestureAtElement(g.radioAgree,"Left");
    
    var L_EulaHowToAnswer1_Text = "ÝÞØ ÖÚ ãÄÔÑ Ýí ÇáÏÇÆÑÉ ÇáÈíÖÇÁ Åáì íãíä ÌæÇÈß¡ Ëã ÇäÞÑ ãÑÉ æÇÍÏÉ.";
    Agent_Speak(L_EulaHowToAnswer1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaHowToAnswer2_Text = "Ëã ÇÖÛØ ÒÑ 'ÇáÊÇáí'.";
    Agent_Speak(L_EulaHowToAnswer2_Text);
}

function Agent_EulaWhatIsEula() 
{		
    var L_EulaWhatIsEula1_Text = "Åä ÇÓÊÎÏÇãß áãäÊÌÇÊ Microsoft ÎÇÖÚ áÔÑæØ ÇÊÝÇÞíÉ ÊÑÎíÕ ÇáãÓÊÎÏã (EULA)¡ ÈÇáÅÖÇÝÉ Åáì ÞÇäæä ÍÞæÞ ÇáäÔÑ.";
    Agent_Speak(L_EulaWhatIsEula1_Text);
        
    var L_EulaWhatIsEula2_Text = "Åä EULA åæ ÚÞÏ íÔÑÍ ÈÇáÊÝÕíá ÇáÇÓÊÎÏÇã ÇáÞÇäæäí ááãäÊÌ ÇáãÑÎÕ¡ æíãäÍß ÍÞ ãÍÏÏ áÇÓÊÎÏÇã åÐÇ ÇáãäÊÌ Úáì ÇáßãÈíæÊÑ.";
    Agent_Speak(L_EulaWhatIsEula2_Text);
}

function Agent_EulaWhatDoesEulaSay() 
{		
    var L_EulaWhatDoesEulaSay1_Text = "ÍÇáãÇ ÊÞÈá ÈäæÏåÇ¡ ÊÚØíß EULA ÇáÃÐä ÈÇÓÊÎÏÇã Windows XP ßãÇ ÊãäÍß ÈÚÖ ÇáÍÞæÞ ÇáÅÖÇÝíÉ.";
    Agent_Speak(L_EulaWhatDoesEulaSay1_Text);
        
    var L_EulaWhatDoesEulaSay2_Text = "æíÝÑÖ ÃíÖÇð ÈÚÖ ÇáÞíæÏ Úáì ÇÓÊÎÏÇãß áÜ Windows XP.";
    Agent_Speak(L_EulaWhatDoesEulaSay2_Text);	
    
    Agent_GestureAtElement(g.txtEULA,"Left");	
        
    var L_EulaWhatDoesEulaSay3_Text = "áÞÑÇÁÉ ÇáÊÝÇÕíá¡ ãÑÑ Åáì ÇáÃÓÝá Åáì ÞÓã ãäÍ ÇáÊÑÎíÕ.";
    Agent_Speak(L_EulaWhatDoesEulaSay3_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatDoesEulaSay4_Text = "ÊÕÝ EULA ÇáÖãÇä ÇáãÍÏæÏ¡ æÈäæÏå æÇáÊí íãßäß ÖãäåÇ ÅÌÑÇÁ äÓÎÉ ÇÍÊíÇØíÉ Ãæ äÓÎÉ ÃÑÔíÝ áÜ Windows XP.";
    Agent_Speak(L_EulaWhatDoesEulaSay4_Text);
}

function Agent_EulaWhereIsNextButton() 
{		
    var L_EulaWhereIsNextButton1_Text = "áÇ íÊæÝÑ ÒÑ 'ÇáÊÇáí' ÈÚÏ ÈÓÈÈ ÚÏã ÇÎÊíÇÑ ÇáãæÇÝÞÉ Úáì ÇÊÝÇÞíÉ ÇáÊÑÎíÕ åÐå.";
    Agent_Speak(L_EulaWhereIsNextButton1_Text);
        
    var L_EulaWhereIsNextButton2_Text = "íÌÈ ÃæáÇð ÇáäÞÑ ÝæÞ ÎíÇÑ 'äÚã' Ãæ 'áÇ'.";
    Agent_Speak(L_EulaWhereIsNextButton2_Text);
}

function Agent_EulaWhatToDoNext() 
{			
    Agent_GestureAtElement(g.radioAgree,"Left");
    	
    var L_EulaWhatToDoNext1_Text = "ÈÚÏ ÞÑÇÁÉ ÇÊÝÇÞíÉ ÇáÊÑÎíÕ¡ ÇäÞÑ ÝæÞ äÚã ááãæÇÝÞÉ ÚáíåÇ.";
    Agent_Speak(L_EulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatToDoNext2_Text = "Ãæ ÅÐÇ ßäÊ áÇ ÊÑíÏ ÇáãæÇÝÞÉ ÚáíåÇ¡ ÇäÞÑ ÝæÞ áÇ.";
    Agent_Speak(L_EulaWhatToDoNext2_Text);
        
    var L_EulaWhatToDoNext3_Text = "íÌÈ Úáíß ÃíÖÇð ÞÈæá åÐå ÇáÇÊÝÇÞíÉ ÅÐÇ ÃÑÏÊ ãÊÇÈÚÉ ÇÓÊÎÏÇã Windows.";
    Agent_Speak(L_EulaWhatToDoNext3_Text);
    			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_EulaWhatToDoNext4_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááÇäÊÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ.";
    Agent_Speak(L_EulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_BadEulaAddCommands() {

    var L_BadEulaCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_BadEulaCommand2_Text = "ãÇ Çá&Ðí ÊÞæáå ÇÊÝÇÞíÉ ÊÑÎíÕ ÇáãÓÊÎÏã¿";
    var L_BadEulaCommand3_Text = "ãÇÐÇ &áæ Ãääí áã ÃÞÈá ÇÊÝÇÞíÉ ÊÑÎíÕ ÇáãÓÊÎÏã¿";
    var L_BadEulaCommand4_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß";

    g_AgentCharacter.Commands.Add("Agent_BadEulaAboutThisStep", L_BadEulaCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_BadEulaWhatDoesEulaSay", L_BadEulaCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_BadEulaWhatIfIDontAcceptEula", L_BadEulaCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_BadEulaWhatToDoNext", L_BadEulaCommand4_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_BadEulaAboutThisStep()
{
    var L_BadEulaAboutThisStep1_Text = "ÇÎÊÑÊ Úáì ÇáÔÇÔÉ ÇáÓÇÈÞÉ ÚÏã ÞÈæá ÇÊÝÇÞíÉ ÇáÊÑÎíÕ.";
    Agent_Speak(L_BadEulaAboutThisStep1_Text);

    var L_BadEulaAboutThisStep2_Text = "äÊíÌÉð áÐáß¡ áä Êßæä ÞÇÏÑÇð Úáì ÇÓÊÎÏÇã Windows.";
    Agent_Speak(L_BadEulaAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadEulaAboutThisStep3_Text = "æáßä íãßäß ÇáÚæÏÉ Åáì ÇáÔÇÔÉ ÇáÓÇÈÞÉ ÈÇáäÞÑ ÝæÞ ÒÑ 'ÇáÓÇÈÞ' æÇáãæÇÝÞÉ Úáì ÇáÇÊÝÇÞíÉ.";
    Agent_Speak(L_BadEulaAboutThisStep3_Text);
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_BadEulaAboutThisStep4_Text = "Ãæ ÃßøÏ Ãäß ÊÑíÏ Ãä ÊÊæÞÝ Úä ÇÓÊÎÏÇã Windows æÃæÞÝ ÊÔÛíá ÇáßãÈíæÊÑ.";
    Agent_Speak(L_BadEulaAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_BadEulaWhatDoesEulaSay()
{
    var L_BadEulaWhatDoesEulaSay1_Text = "ÍÇáãÇ ÊÞÈá ÈäæÏåÇ¡ ÊÚØíß EULA ÇáÃÐä ÈÇÓÊÎÏÇã Windows XP ßãÇ ÊãäÍß ÈÚÖ ÇáÍÞæÞ ÇáÅÖÇÝíÉ.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay1_Text);

    var L_BadEulaWhatDoesEulaSay2_Text = "æíÝÑÖ ÃíÖÇð ÈÚÖ ÇáÞíæÏ Úáì ÇÓÊÎÏÇãß áÜ Windows XP.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay2_Text);

    var L_BadEulaWhatDoesEulaSay3_Text = "áÞÑÇÁÉ ÇáÊÝÇÕíá¡ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÓÇÈÞ'¡ æÇÝÊÍ ÇÊÝÇÞíÉ ÇáÊÑÎíÕ ááãÓÊÎÏã (EULA)¡ Ëã ãÑøÑ Åáì ÃÓÝá Åáì ÞÓã 'ãäÍ ÇáÊÑÎíÕ'.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay3_Text);
        
    var L_BadEulaWhatDoesEulaSay4_Text = "ÊÕÝ EULA ÇáÖãÇä ÇáãÍÏæÏ¡ æÈäæÏå æÇáÊí íãßäß ÖãäåÇ ÅÌÑÇÁ äÓÎÉ ÇÍÊíÇØíÉ Ãæ äÓÎÉ ÃÑÔíÝ áÜ Windows XP.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay4_Text);
}

function Agent_BadEulaWhatIfIDontAcceptEula()
{
    var L_BadEulaWhatIfIDontAcceptEula1_Text = "áÃä EULA ÊãäÍß ÇáÃÐä ÈÇÓÊÎÏÇã Windows XP¡ Úáíß ÞÈæá åÐå ÇáÇÊÝÇÞíÉ ÞÈá Ãä ÊÊãßä ãä ÈÏÁ ÇÓÊÎÏÇã Windows XP.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadEulaWhatIfIDontAcceptEula2_Text = "ÅÐÇ ÞÑÑÊ ÚÏã ÞÈæáåÇ¡ íãßäß ÚäÏåÇ ÅíÞÇÝ ÊÔÛíá ÇáßãÈíæÊÑ æÐáß ÈÇÓÊÎÏÇã ÇáÒÑ 'ÅíÞÇÝ ÇáÊÔÛíá'.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula2_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatIfIDontAcceptEula3_Text = "ÚäÏãÇ ÊÚÇæÏ ÊÔÛíá ÇáßãÈíæÊÑ¡ ÓæÝ ÊÚæÏ Åáì åÐå ÇáÔÇÔÉ.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula3_Text);
}

function Agent_BadEulaWhatToDoNext()
{    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
    
    var L_BadEulaWhatToDoNext1_Text = "ÅÐÇ ÞÑÑÊ ÞÈæá ÇÊÝÇÞíÉ ÇáÊÑÎíÕ¡ ÇäÞÑ ÝæÞ ÇáÒÑ 'ÇáÓÇÈÞ'.";
    Agent_Speak(L_BadEulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatToDoNext2_Text = "Úáíß ÞÈæá ÇáÇÊÝÇÞíÉ ááÇÓÊãÑÇÑ ÈåÐå ÇáÚãáíÉ æÇáÈÏÁ ÈÇÓÊÎÏÇã Windows.";
    Agent_Speak(L_BadEulaWhatToDoNext2_Text);

    var L_BadEulaWhatToDoNext3_Text = "ÅÐÇ ÞÑÑÊ ÚÏã ÞÈæáåÇ¡ ÇäÞÑ ÝæÞ ÇáÒÑ 'ÅíÞÇÝ ÇáÊÔÛíá' áÅíÞÇÝ ÊÔÛíá ÇáßãÈíæÊÑ.";
    Agent_Speak(L_BadEulaWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_BadEulaWhatToDoNext4_Text = "ÚäÏãÇ ÊÚÇæÏ ÊÔÛíá ÇáßãÈíæÊÑ¡ ÓæÝ ÊÚæÏ Åáì åÐå ÇáÔÇÔÉ.";
    Agent_Speak(L_BadEulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}




function Agent_ProductKeyAddCommands() 
{
    var L_ProductKeyAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_ProductKeyAddCommands2_Text = "ãÇ åæ ã&ÝÊÇÍ ÇáãäÊÌ¿";
    var L_ProductKeyAddCommands4_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_ProductKeyAboutThisStep", L_ProductKeyAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_ProductKeyWhatIsProdKey", L_ProductKeyAddCommands2_Text);
    g_AgentCharacter.Commands.Add("Agent_ProductKeyWhatToDoNext",L_ProductKeyAddCommands4_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnProductKeyPreDisplayMenu() 
{

    if (g.btnNext.disabled) 
    {

        var L_ProductKeyAddCommands3_Text = "&áãÇÐÇ ÒÑ 'ÇáÊÇáí' ÛíÑ ãÊæÝÑ¿";

        try 
        {
                g_AgentCharacter.Commands.Insert("Agent_ProductKeyWhyNextNotAvailable","Agent_ProductKeyWhatToDoNext",false,L_ProductKeyAddCommands3_Text);
        }
        catch (e) 
        {
        }

    }

    else 
    {

        try 
        {
                g_AgentCharacter.Commands.Remove("Agent_ProductKeyWhyNextNotAvailable");
        }
        catch (e) 
        {
        }

    }

}

function Agent_ProductKeyAboutThisStep()
{
    var L_ProductKeyAboutThisStep1_Text = "Ýí åÐå ÇáÔÇÔÉ ÊÞæã ÈßÊÇÈÉ ÇáÃÍÑÝ ÇáÜ 25 áãÝÊÇÍ ÇáãäÊÌ ÇáÐí íÌÈ ÊæÝíÑå ãä ÞÈá ÇáÔÑßÉ ÇáãÕäÚÉ ááßãÈíæÊÑ.";
    Agent_Speak(L_ProductKeyAboutThisStep1_Text);

    var L_ProductKeyAboutThisStep2_Text = "ÅÐÇ áã íÙåÑ ãÝÊÇÍ ÇáãäÊÌ Úáì ÛáÇÝ ÇáÞÑÕ ÇáãÖÛæØ¡ ÊÍÞÞ ãä ãáÕÞ ÔåÇÏÉ ÇáÃÕÇáÉ Úáì ÌåÇÒ ÇáßãÈíæÊÑ Ãæ Úáì ÇáÌåÉ ÇáÎáÝíÉ áßÊÇÈ 'ÇáÔÑæÚ ÈÇáÚãá'.";
    Agent_Speak(L_ProductKeyAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pid1,"Left");

    var L_ProductKeyAboutThisStep3_Text = "ÓíÊã ÅÏÎÇá ÃíÉ ÃÍÑÝ ÊÞæã ÈßÊÇÈÊåÇ ßÃÍÑÝ ßÈíÑÉ ÊáÞÇÆíÇð.";
    Agent_Speak(L_ProductKeyAboutThisStep3_Text);
    
    Agent_Play("RestPose");
        
    var L_ProductKeyAboutThisStep4_Text = "ÈÚÏ åÐå ÇáÎØæÉ¡ íãßäß ÊÓÌíá ÇáßãÈíæÊÑ æäÓÎÉ Microsoft Windows ÇáÎÇÕÉ Èß.";
    Agent_Speak(L_ProductKeyAboutThisStep4_Text);
        
    var L_ProductKeyAboutThisStep5_Text = "ÅäåÇ ÚãáíÉ ÓåáÉ¡ æíÄÏí ÊÓÌíá Windows Åáì ÊÒæíÏß ÈÇáßËíÑ ãä ÇáÝæÇÆÏ ÇáÚÙíãÉ.";
    Agent_Speak(L_ProductKeyAboutThisStep5_Text);
}

function Agent_ProductKeyWhatIsProdKey()
{
    var L_ProductKeyWhatIsProdKey1_Text = "Êã ÊÔÝíÑ ßá äÓÎÉ ãä Windows ãäÊÌÉ ãä ÞÈá Microsoft ÈãÝÊÇÍ ãäÊÌ ÝÑíÏ.";
    Agent_Speak(L_ProductKeyWhatIsProdKey1_Text);

    var L_ProductKeyWhatIsProdKey2_Text = "íÖãä áß ãÝÊÇÍ ÇáãäÊÌ ÔÑÇÁ ãäÊÌ Microsoft ÃÕáí.";
    Agent_Speak(L_ProductKeyWhatIsProdKey2_Text);

    var L_ProductKeyWhatIsProdKey3_Text = "æíÓÇÚÏß Ýí ÇáÍãÇíÉ ãä ÇáäÓÎ ÛíÑ ÇáÃÕáíÉ áÜ Windows.";
    Agent_Speak(L_ProductKeyWhatIsProdKey3_Text);
        
    var L_ProductKeyWhatIsProdKey4_Text = "íÄåáß ÃíÖÇð ãÝÊÇÍ ÇáãäÊÌ ááÍÕæá Úáì ÝæÇÆÏ ãÓÊåáß ãÚíäÉ¡ ãËá ÎÏãÇÊ ÇáÏÚã æÇáÊÓæíÞ æÚÑæÖ æíÈ æÇáÊÑÞíÉ.";
    Agent_Speak(L_ProductKeyWhatIsProdKey4_Text);
}

function Agent_ProductKeyWhyNextNotAvailable()
{
    var L_ProductKeyWhyNextNotAvailable1_Text = "ÒÑ 'ÇáÊÇáí' ÛíÑ ãÊæÝÑ áÃäß áã ÊßÊÈ ãÝÊÇÍ ãäÊÌ ÕÇáÍ.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable1_Text);

    var L_ProductKeyWhyNextNotAvailable2_Text = "íÌÈ Úáíß ßÊÇÈÉ ãÝÊÇÍ ãäÊÌ ÕÇáÍ.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable2_Text);

    var L_ProductKeyWhyNextNotAvailable3_Text = "ÚäÏåÇ íãßäß ÇáäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááãÊÇÈÚÉ.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable3_Text);
}

function Agent_ProductKeyWhatToDoNext()
{        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
    
    var L_ProductKeyWhatToDoNext1_Text = "ÈÚÏ ßÊÇÈÉ ãÝÊÇÍ ãäÊÌ ÕÇáÍ¡ ÇäÞÑ ÝæÞ ÒÑ ÇáÊÇáí.";
    Agent_Speak(L_ProductKeyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}




function Agent_Reg1AddCommands() 
{
    var L_Reg1Command1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_Reg1Command2_Text = "Ã&ÎÈÑäí Úä ÇáÊÓÌíá";
    var L_Reg1Command3_Text = "ßí&Ý ÃÞæã ÈÇáÊÓÌíá ÇáÂä¿";
    var L_Reg1Command4_Text = "åá íãßääí Çá&ÊÓÌíá áÇÍÞÇð¿";
    var L_Reg1Command5_Text = "ã&Ç åí ÃåãíÉ ÇáÊÓÌíá¿";
    var L_Reg1Command6_Text = "ÃÎÈÑäí &Úä ãÔÇÑßÉ ÇáãÚáæãÇÊ";

    g_AgentCharacter.Commands.Add("Agent_Reg1AboutThisStep", L_Reg1Command1_Text);
    g_AgentCharacter.Commands.Add("Agent_Reg1AboutRegistration", L_Reg1Command2_Text);
    g_AgentCharacter.Commands.Add("Agent_Reg1HowToRegister", L_Reg1Command3_Text);
    g_AgentCharacter.Commands.Add("Agent_Reg1RegisterLater", L_Reg1Command4_Text);
    g_AgentCharacter.Commands.Add("Agent_Reg1WhyRegister", L_Reg1Command5_Text);
    g_AgentCharacter.Commands.Add("Agent_Reg1AboutSharingInfo", L_Reg1Command6_Text);

    Agent_AddWhatToDoNextCommand();        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_Reg1AboutThisStep()
{
    var L_Reg1AboutThisStep1_Text = "åÐå åí ÈÏÇíÉ ÞÓã ÇáÊÓÌíá.";
    Agent_Speak(L_Reg1AboutThisStep1_Text);

    var L_Reg1AboutThisStep2_Text = "åäÇ ÓÊßæä ÞÇÏÑÇð Úáì ÊÓÌíá äÓÎÉ Windows.";
    Agent_Speak(L_Reg1AboutThisStep2_Text);

    var L_Reg1AboutThisStep3_Text = "ÚäÏ ÅÌÑÇÁ ÇáÊÓÌíá¡ ÓÊÕÈÍ ãÄåáÇð áÚÏÏ ãä ÝæÇÆÏ Microsoft ááÚãáÇÁ.";
    Agent_Speak(L_Reg1AboutThisStep3_Text);
        
    var L_Reg1AboutThisStep4_Text = "ÊÊÖãä Êáß ÇáÝæÇÆÏ ÅÚáÇãß ÈÊÍÏíËÇÊ ÇáãäÊÌ¡ æÇáæÕæá Åáì ÎÏãÇÊ ÏÚã ÇáãäÊÌ ÇáÞíøãÉ ãä Microsoft.";
    Agent_Speak(L_Reg1AboutThisStep4_Text);
        
    var L_Reg1AboutThisStep5_Text = "Úáì åÐå ÇáÔÇÔÉ¡ íãßäß ÊÞÑíÑ ßíÝíÉ ÇáÊÓÌíá ÇáÊí ÊÑíÏåÇ.";
    Agent_Speak(L_Reg1AboutThisStep5_Text);
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");
        
    var L_Reg1AboutThisStep6_Text = "æÅÐÇ ßäÊ ÊÑíÏ ÇßÊÔÇÝ ÇáãÒíÏ Íæá äåÌ ÇáÎÕæÕíÉ áÜ Microsoft¡ ÇäÞÑ ÝæÞ åÐÇ ÇáÇÑÊÈÇØ.";
    Agent_Speak(L_Reg1AboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1AboutRegistration()
{    
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1AboutRegistration1_Text = "ÇäÞÑ åäÇ áÊÈÏÃ ÚãáíÉ ÇáÊÓÌíá¡ Ëã ÇäÞÑ ÝæÞ ÒÑ ÇáÊÇáí.";
    Agent_Speak(L_Reg1AboutRegistration1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.rb_reg_ms_no,"Left");

    var L_Reg1AboutRegistration2_Text = "æáßä ÅÐÇ ßäÊ ÊÝÖá ÚÏã ÇáÊÓÌíá¡ ÇäÞÑ ÝæÞ ÇáÎíÇÑ ÇáËÇäí¡ Ëã ÇäÞÑ ÝæÞ \"ÇáÊÇáí\".";
    Agent_Speak(L_Reg1AboutRegistration2_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1HowToRegister()
{      
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1HowToRegister1_Text = "áÊÓÌíá äÓÎÊß ãä Windows¡ ÊÃßÏ ãä ÊÍÏíÏ ÇáÎíÇÑ äÚã.";
    Agent_Speak(L_Reg1HowToRegister1_Text); 
    
    Agent_Play("RestPose");

    var L_Reg1HowToRegister2_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááãÊÇÈÚÉ.";
    Agent_Speak(L_Reg1HowToRegister2_Text);
}

function Agent_Reg1RegisterLater()
{
    var L_Reg1RegisterLater1_Text = "ÅÐÇ ÊÎØíÊ ÇáÊÓÌíá ÇáÂä¡ íãßäß ÊÓÌíá äÓÎÊß ãä Windows ÈÚÏ ÅäåÇÁ ÅÚÏÇÏ Windows.";
    Agent_Speak(L_Reg1RegisterLater1_Text);

    var L_Reg1RegisterLater2_Text = "ÇäÞÑ ÝÞØ ÝæÞ ÇáÊÔÛíá Úáì ÇáÞÇÆãÉ ÇÈÏÃ æÇßÊÈ regwiz /r.";
    Agent_Speak(L_Reg1RegisterLater2_Text);

    var L_Reg1RegisterLater3_Text = "ÅÐÇ äÓíÊ åÐå ÇáÎØæÇÊ¡ ÇäÞÑ ÝæÞ ÇáÊÚáíãÇÊ æÇáÏÚã Úáì ÇáÞÇÆãÉ ÇÈÏÃ ááÍÕæá Úáì ÇáÃÌæÈÉ áÃÓÆáÊß æãÒíÏ ãä ÇáãÚáæãÇÊ ÇáãÝíÏÉ.";
    Agent_Speak(L_Reg1RegisterLater3_Text);
}

function Agent_Reg1WhyRegister()
{
    var L_Reg1WhyRegister1_Text = "ÚäÏ ÊÓÌíá äÓÎÉ Windows¡ ÓÊÕÈÍ ãÄåáÇð áÚÏÏ ãä ÝæÇÆÏ Microsoft ááÚãáÇÁ.";
    Agent_Speak(L_Reg1WhyRegister1_Text);

    var L_Reg1WhyRegister2_Text = "ÊÊÖãä Êáß ÇáÝæÇÆÏ ÅÚáÇãß ÈÊÍÏíËÇÊ ÇáãäÊÌ æÇáæÕæá Åáì ÎÏãÇÊ ÏÚã ÇáãäÊÌ ÇáÞíøãÉ ãä Microsoft.";
    Agent_Speak(L_Reg1WhyRegister2_Text);
}

function Agent_Reg1AboutSharingInfo()
{
    
    if (!window.external.get_RetailOOBE()) 
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "ÚäÏ ãÑÇÌÚÉ åÐå ÇáÎíÇÑÇÊ¡ ÇÎÊÑ ãÔÇÑßÉ ãÚáæãÇÊ ÇáÊÓÌíá ãÚ Microsoft æÇáÔÑßÉ ÇáãÕäÚÉ ááÌåÇÒ.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text); 
    
        Agent_Play("RestPose");
    }
    else
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "ÚäÏ ãÑÇÌÚÉ åÐå ÇáÎíÇÑÇÊ¡ ÇÎÊÑ ãÔÇÑßÉ ãÚáæãÇÊ ÇáÊÓÌíá ãÚ Microsoft.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");     
    }
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");

    var L_Reg1AboutSharingInfo2_Text = "áÊÚáã ÇáãÒíÏ Íæá äåÌ ÇáÎÕæÕíÉ áÜ Microsoft¡ ÇäÞÑ ÝæÞ åÐÇ ÇáÇÑÊÈÇØ.";
    Agent_Speak(L_Reg1AboutSharingInfo2_Text);
    
    Agent_Play("RestPose");
    
    if (!window.external.get_RetailOOBE()) 
    {           
        Agent_GestureAtElement(g.reg1_spn3,"Left");
                
        var L_Reg1AboutSharingInfo3_Text = "áÊÚáã ÇáãÒíÏ Íæá äåÌ ÇáÎÕæÕíÉ áÜ %1¡ ÇäÞÑ ÝæÞ åÐÇ ÇáÇÑÊÈÇØ.";
        Agent_Speak(ApiObj.FormatMessage(L_Reg1AboutSharingInfo3_Text, g_OEMNameStr));
    
        Agent_Play("RestPose");
    }
}




function Agent_Reg3AddCommands() 
{
    var L_Reg3Command1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_Reg3Command2_Text = "ßí&Ý ÃÞæã ÈÊÛííÑ ÇáãÚáæãÇÊ¿";
    var L_Reg3Command3_Text = "ÃÎÈÑäí &Úä ãÔÇÑßÉ ÇáãÚáæãÇÊ";

    g_AgentCharacter.Commands.Add("Agent_Reg3AboutThisStep", L_Reg3Command1_Text);
    g_AgentCharacter.Commands.Add("Agent_Reg3HowToChangeInfo", L_Reg3Command2_Text);
    g_AgentCharacter.Commands.Add("Agent_Reg3AboutSharingInfo", L_Reg3Command3_Text);

    Agent_AddWhatToDoNextCommand();        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_Reg3AboutThisStep()
{
    var L_Reg3AboutThisStep1_Text = "áÊÓÌíá äÓÎÉ Microsoft Windows¡ íÌÈ ãáÁ ÇáãÚáæãÇÊ ÇáãØáæÈÉ Úáì åÐå ÇáÔÇÔÉ.";
    Agent_Speak(L_Reg3AboutThisStep1_Text);
    
    Agent_GestureAtElement(g.UserCity,"Left");

    var L_Reg3AboutThisStep2_Text = "äÍÊÇÌ ÇáãÚáæãÇÊ ãä ÃÌá ßÇÝÉ ÇáãÑÈÚÇÊ ÚÏÇ ÇáãÑÈÚÇÊ ÇáÊí áÏíåÇ ÚáÇãÉ 'ÇÎÊíÇÑí.'";
    Agent_Speak(L_Reg3AboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_Reg3AboutThisStep3_Text = "áßä Óíßæä ãä ÇáÃÝÖá ÅÐÇ ÞãÊ ÈãáÁ ÇáãÚáæãÇÊ ÇáÇÎÊíÇÑíÉ ÃíÖÇð.";
    Agent_Speak(L_Reg3AboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_Reg3AboutThisStep4_Text = "ÚäÏãÇ ÊäÊåí ãä åÐÇ¡ ÇäÞÑ ÝæÞ ÇáÑÒ 'ÇáÊÇáí'.";
    Agent_Speak(L_Reg3AboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg3HowToChangeInfo()
{
    var L_Reg3HowToChangeInfo1_Text = "ÞãäÇ ÈÅÖÇÝÉ ÈÚÖ ÇáÊáãíÍÇÊ ÏÇÎá ÇáãÑÈÚÇÊ áÊÑì ãÇ íÌÈ Ãä ÊÞæã Èå.";
    Agent_Speak(L_Reg3HowToChangeInfo1_Text);
    
    Agent_GestureAtElement(g.UserLastName,"Left");

    var L_Reg3HowToChangeInfo2_Text = "ãËáÇð¡ ÇäÞÑ Ýí ãÑÈÚ ÇÓã ÇáÚÇÆáÉ áßí ÊÈÏÃ ÇáßÊÇÈÉ.";
    Agent_Speak(L_Reg3HowToChangeInfo2_Text);

    var L_Reg3HowToChangeInfo3_Text = "íÌÈ Ãä íÙåÑ Ýí ÇáãÑÈÚ ÎØ ÚãæÏí æÇãÖ¡ ãÚÑæÝ ÈäÞØÉ ÇáÅÏÑÇÌ.";
    Agent_Speak(L_Reg3HowToChangeInfo3_Text);

    var L_Reg3HowToChangeInfo4_Text = "ãåãÇ ÊßÊÈ ÓíÊã ÅÏÎÇáå Ýí äÞØÉ ÇáÅÏÑÇÌ.";
    Agent_Speak(L_Reg3HowToChangeInfo4_Text);
    
    Agent_Play("RestPose");

    var L_Reg3HowToChangeInfo5_Text = "íãßäß ÊÍÑíß äÞØÉ ÇáÅÏÑÇÌ Ýí ãÑÈÚ ÇáäÕ ÈÇáÖÛØ Úáì ãÝÊÇÍí ÇáÃÓåã ÇáÃíãä Ãæ ÇáÃíÓÑ Úáì áæÍÉ ÇáãÝÇÊíÍ.";
    Agent_Speak(L_Reg3HowToChangeInfo5_Text);

    var L_Reg3HowToChangeInfo6_Text = "æíãßäß ÇÓÊÎÏÇã ãÝÊÇÍ Delete áÅÒÇáÉ ÇáÍÑæÝ ÈÚÏ äÞØÉ ÇáÅÏÑÇÌ¡ Ãæ ÇÓÊÎÏã ãÝÊÇÍ ÇáãÓÇÝÉ áÅÒÇáÉ ÇáÃÍÑÝ ÞÈá äÞØÉ ÇáÅÏÑÇÌ.";
    Agent_Speak(L_Reg3HowToChangeInfo6_Text);

    var L_Reg3HowToChangeInfo7_Text = "ÅÐÇ ÃÑÏÊ ÅÏÑÇÌ ÍÑÝ¡ ÖÚ ÇáãÄÔÑ ÏÇÎá ÇáãÑÈÚ Ýí ÇáãßÇä ÇáÐí ÊÑíÏ ÅÖÇÝÉ ÍÑÝ Ýíå¡ æÇäÞÑ.";
    Agent_Speak(L_Reg3HowToChangeInfo7_Text);

    var L_Reg3HowToChangeInfo8_Text = "Ëã ÇßÊÈ ÇáÍÑÝ ÇáÐí ÊÑíÏ ÅÏÑÇÌå.";
    Agent_Speak(L_Reg3HowToChangeInfo8_Text);

    var L_Reg3HowToChangeInfo9_Text = "áÇ ÊåÊã ÅÐÇ áã ÊßÊÈ Ýí ãÑÈÚ æãÇ ÒÇá ÇáÊáãíÍ íÙåÑ åäÇß.";
    Agent_Speak(L_Reg3HowToChangeInfo9_Text);

    var L_Reg3HowToChangeInfo10_Text = "ÇáÊáãíÍ áãÓÇÚÏÊß ÝÞØ. æáíÓ ÌÒÁ ãä ãÚáæãÇÊ ÇáÊÓÌíá.";
    Agent_Speak(L_Reg3HowToChangeInfo10_Text);
}

function Agent_Reg3AboutSharingInfo()
{    
    if (!window.external.get_RetailOOBE()) 
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
        
        var L_Reg3AboutSharingInfo1_Text = "ÚäÏ ãÑÇÌÚÉ åÐå ÇáÎíÇÑÇÊ¡ ÇÎÊÑ ãÔÇÑßÉ ãÚáæãÇÊ ÇáÊÓÌíá ãÚ Microsoft æÇáÔÑßÉ ÇáãÕäÚÉ ááÌåÇÒ.";
        Agent_Speak(L_Reg3AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");
    }
    else
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
         
        var L_Reg3AboutSharingInfo1_Text = "ÚäÏ ãÑÇÌÚÉ åÐå ÇáÎíÇÑÇÊ¡ ÇÎÊÑ ãÔÇÑßÉ ãÚáæãÇÊ ÇáÊÓÌíá ãÚ Microsoft.";
        Agent_Speak(L_Reg3AboutSharingInfo1_Text); 
    
        Agent_Play("RestPose"); 
    }
}

function Agent_OnRegister3KeyDown(elem, keyCode) {

	switch (elem.id) {
		case "UserFirstName":
		case "UserMiddleName":
        case "UserLastName":
        case "UserAddress":
        case "UserAddress2":
        case "UserCity":
        case "UserStateTextBox":
        case "UserZipCode":
		case "UserEmailAddress":
        case "selUSState":
        case "selCAProvince":
        case "selCountry":
        case "sharems":
        case "shareoem":
	    
	        
	
	        if (keyCode == 9) {

                
                
                
                

                return;
		    }

			
			
			

			if (!Agent_IsLooking()) {

                Agent_StopAll();

                var dir;

                if (elem.type == "checkbox")
                
					if (g.document.dir == "rtl") {
						
						if (elem.id == "sharems")
							dir = "TopCenterWidth";
						
						else 
							dir = "BottomCenterWidth";
					}
					
					else
                        dir = "Left";

                else {
                        if ((elem.id == "UserZipCode") && !IsFarEastLocale()) {
                                
                                if (g.document.dir == "rtl")
									dir = "Left";
									
                                else 
									dir = "TopRight";
                        }
                        else {	
								if (g.document.dir == "rtl")
									dir = "Left";
								else
									dir = "Right";
						}
						
                }

                Agent_MoveToElement(elem, dir, 0);

                if ((dir == "TopRight") || (dir == "TopCenterWidth"))
                    Agent_StartLookingAtElement(elem, "LookDown");
                        
				else if (dir == "BottomCenterWidth")
					Agent_StartLookingAtElement(elem, "LookUp");
					
                else
                    Agent_StartLookingAtElement(elem, "Look" + dir);
			}
        
			else {

                

                Agent_KeepLooking();
			}
			
			break;
	
		default:
			return;
					
	}
				
}

function Agent_OnRegister3GotFocus(elem) {

        var dir;

        if (elem.type == "checkbox"){
			
			if (g.document.dir == "rtl") {
			
				if (elem.id == "sharems")
					dir = "TopCenterWidth"
			
				else
					dir = "BottomCenterWidth"
			
			}	
			
			else
				dir = "Left";

        }
        
        else {

                

                if ((elem.id == "UserZipCode")&& !IsFarEastLocale()) {
            
					if (g.document.dir == "rtl")
						dir = "Left"
						
                    else 
						dir = "TopRight";
				}
						
                else {
					
					if (g.document.dir == "rtl")
						dir = "Left"
					
					else
						dir = "Right";
				}
				
        }

        Agent_StopAll();

        Agent_MoveToElement(elem, dir, 0);

        if ((dir == "TopRight") || (dir == "TopCenterWidth"))
            Agent_StartLookingAtElement(elem, "LookDown");
        
        else if (dir == "BottomCenterWidth")
			Agent_StartLookingAtElement(elem, "LookUp");	
        
        else
            Agent_StartLookingAtElement(elem, "Look" + dir);

        
        

        switch (elem.id) {
                case "selUSState":
                        g_bAgentRegister3VisitState = true;
                        break;

                case "selCAProvince":
                        g_bAgentRegister3VisitProvince = true;
                        break;

                case "selCountry":
                        g_bAgentRegister3VisitCountry = true;
                        break;
        }
}

function Agent_Register3PlayCheckBoxScript(id) {

        var elemMs;
        var elemOem;

        
        
        

        elemMs = g.document.all("sharems");
        elemOem = g.document.all("shareoem");

        if (id == "sharems")
                elem = elemMs;
        else if (id == "shareoem")
                elem = elemOem;
        else
                return;

        

        if (g.document.dir == "rtl") 
			Agent_MoveToElement(elem, "TopCenterWidth", kdwAgentMoveSpeed);
		else
			Agent_MoveToElement(elem, "Left", kdwAgentMoveSpeed);

        

        L_Register3PlayCheckBoxScript1_Text = "ÍÇáíÇð¡ Êã ÊÚííä ÅÑÓÇá ãÚáæãÇÊ ÇáÊÓÌíá Úáì åÐå ÇáÔÇÔÉ Åáì ßá ãä Microsoft æÇáÔÑßÉ ÇáãÕäÚÉ ááßãÈíæÊÑ.";
        L_Register3PlayCheckBoxScript2_Text = "ÍÇáíÇð¡ Êã ÊÚííä ÅÑÓÇá ãÚáæãÇÊ ÇáÊÓÌíá Úáì åÐå ÇáÔÇÔÉ Åáì Microsoft æáíÓ ááÔÑßÉ ÇáãÕäÚÉ ááßãÈíæÊÑ.";
        L_Register3PlayCheckBoxScript3_Text = "ÍÇáíÇð¡ Êã ÊÚííä ÅÑÓÇá ãÚáæãÇÊ ÇáÊÓÌíá Úáì åÐå ÇáÔÇÔÉ Åáì ÇáÔÑßÉ ÇáãÕäÚÉ ááßãÈíæÊÑ æáíÓ áÜ Microsoft.";
        L_Register3PlayCheckBoxScript4_Text = "ÍÇáíÇð¡ áä íÊã ÅÑÓÇá ãÚáæãÇÊ ÇáÊÓÌíá Úáì åÐå ÇáÔÇÔÉ Åáì Microsoft æáÇ Åáì ÇáÔÑßÉ ÇáãÕäÚÉ ááßãÈíæÊÑ.";

        var str;

        if (elemMs.checked && elemOem.checked)
                str = L_Register3PlayCheckBoxScript1_Text;
        else if (elemMs.checked && !elemOem.checked)
                str = L_Register3PlayCheckBoxScript2_Text;
        else if (!elemMs.checked && elemOem.checked)
                str = L_Register3PlayCheckBoxScript3_Text;
        else if (!elemMs.checked && !elemOem.checked)
                str = L_Register3PlayCheckBoxScript4_Text;

        
        
        Agent_Speak(str);

        var L_Register3PlayCheckBoxScript5_Text = "ÊÓÇÚÏ åÐå ÇáãÚáæãÇÊ ÈÅÈÞÇÆß Úáì Úáã ÈÊÍÏíËÇÊ ÇáãäÊÌ æÇáÝæÇÆÏ ÇáÃÎÑì ááÚãáÇÁ ÇáãÓÌáíä.";
        Agent_Speak(L_Register3PlayCheckBoxScript5_Text);

        var L_Register3PlayCheckBoxScript6_Text = "ÅÐÇ ßäÊ ÊÑíÏ ÊÛííÑ ÍÇáÉ ÅÑÓÇá åÐå ÇáãÚáæãÇÊ¡";
        Agent_Speak(L_Register3PlayCheckBoxScript6_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(elem, "TopCenterWidth");
		else
			Agent_GestureAtElement(elem, "Left");

        var L_Register3PlayCheckBoxScript7_Text = "ÝÞØ ÇäÞÑ ÝæÞ ÇáãÑÈÚÇÊ ÇáãæÌæÏÉ åäÇ.";
        Agent_Speak(L_Register3PlayCheckBoxScript7_Text);

        Agent_Play("RestPose");
}

function Agent_Register3IsComplete() {

        
        

        

        var strCurrent = g_strAgentLastFocusID;

        if (strCurrent == "") {
           
           if (IsFarEastLocale() && !IsKoreanLocale()) 
                strCurrent = "UserLastName";
           
           else 
                strCurrent = "UserFirstName";
           
        }

        var elem = g.document.all(strCurrent);

        if (null == elem)
                return null;

        switch (strCurrent) {

                case "UserFirstName":

                        if ((elem.value == "") && (g.document.all("UserMiddleName").value == ""))
                                return elem;

                        break;

                case "UserMiddleName":

                        if ((elem.value == "") && (g.document.all("UserFirstName").value == ""))
                                return elem;

                        break;

                case "UserLastName":
                case "UserAddress":
                case "UserCity":

                        if (elem.value == "")
							return elem;

                        break;

                case "UserStateTextBox":
					
						if ((elem.value == "") && (g.document.all("StateLabel").innerText.indexOf("*") >=0))
							return elem;

                        break;
					
                case "UserZipCode":
				
						if ((elem.value == "") && (g.document.all("LabelZip").innerText.indexOf("*") >=0))
							return elem;
							
						break;
						
				case "UserEmailAddress":
						
						if ((elem.value == "") && !g_bAgentRegister3ShortEmail ) {
							return elem;
						
                        }
                                                
                        break;
        }

        
        

        if (!IsFarEastLocale()) {

                

                

                elem = g.document.all("UserFirstName");

                if (elem.value == "") {
                        if (g.document.all("UserMiddleName").value == "")
                                return elem;
                }

                
                
                
                

                elem = g.document.all("UserMiddleName");

                if (elem.value == "") {
                        if (g.document.all("UserFirstName").value == "")
                                return elem;
                }

                

                elem = g.document.all("UserLastName");

                if (elem.value == "")
                        return elem;

                

                elem = g.document.all("UserAddress");

                if (elem.value == "")
                        return elem;

                

                elem = g.document.all("UserCity");

                if (elem.value == "")
                        return elem;

                

                elem = g.document.all("UserStateTextBox");

                if (elem.style.display != "none") {

                        if ((elem.value == "") && (g.document.all("StateLabel").innerText.indexOf("*") >=0))
                                return elem;
                
                }

                else {

                        elem = g.document.all("selUSState");

                        

                        if (elem.style.display != "none") {
                                if ((!g_bAgentRegister3VisitState) || (elem.options(elem.selectedIndex).text == "") )
                                        return elem;
                        }

                        else {

                                elem = g.document.all("selCAProvince");

                                if ((!g_bAgentRegister3VisitProvince)|| (elem.options(elem.selectedIndex).text == "") )
                                        return elem;
                        }
                }

                

                elem = g.document.all("UserZipCode");

                if ((elem.value == "") && (g.document.all("LabelZip").innerText.indexOf("*") >=0))
                        return elem;

                

                elem = g.document.all("selCountry");

                if (!g_bAgentRegister3VisitCountry)
                        return elem;


                

                elem = g.document.all("UserEmailAddress");

                if	(elem.value != "") {
					if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) 
						return elem;
                }

                

                if (!g_bAgentRegister3Privacy) {

                        

                        if (g.document.all("RegChkBxGrp").style.display != "none") {
                                g_bAgentRegister3Privacy = true;
                                return g.document.all("sharems");
                        }

                }

                

                return null;

        }

        
        

        else
                return Agent_Reg3FarEastLocaleOrder();

}

function Agent_Reg3FarEastLocaleOrder() {

        

        

        if(!IsKoreanLocale()) {
           elem = g.document.all("UserLastName");

           if (elem.value == "")
                return elem;
        }

        

        elem = g.document.all("UserFirstName");

        if (elem.value == "")
           return elem;


        

        elem = g.document.all("selCountry");

        if (!g_bAgentRegister3VisitCountry)
                return elem;

        

        elem = g.document.all("UserStateTextBox");

        if ((elem.style.visibility != "hidden") && (elem.style.display != "none")) {

				if ((elem.value == "") && (g.document.all("StateLabel").innerText.indexOf("*") >=0))
                        return elem;
        }

        else {

                elem = g.document.all("selUSState");

                

                if (elem.style.display != "none") {
                        if ((!g_bAgentRegister3VisitState) || (elem.options(elem.selectedIndex).text == "") )
                                return elem;
                }

		        else {

			        elem = g.document.all("selCAProvince");

				    if ((!g_bAgentRegister3VisitProvince) || (elem.options(elem.selectedIndex).text == "") )
                                return elem;
                }
                
        }

        

        elem = g.document.all("UserCity");

        if (elem.value == "")
                return elem;

        

        elem = g.document.all("UserAddress");

        if (elem.value == "")
                return elem;

        

        elem = g.document.all("UserZipCode");

        if ((elem.value == "") && (g.document.all("LabelZip").innerText.indexOf("*") >=0))
                return elem;

        

        elem = g.document.all("UserEmailAddress");

			if (elem.value != "") {
				if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) 
					return elem;
            }

        

        if (!g_bAgentRegister3Privacy) {

                

                if (g.document.all("RegChkBxGrp").style.display != "none") {
                        g_bAgentRegister3Privacy = true;
                        return g.document.all("sharems");
                }

        }

        

        return null;

}

function Agent_Register3EncourageInteraction(elem) {

        var bExplainDropDownArrow = false;

        
        

        if (g_strAgentLastFocusID == "") {

                elem.focus();

                g_AgentCharacter.Activate(2);

                Agent_StopAll();
        }
        
        else if (g_strAgentLastFocusID != elem.id) {

                
                
                

                switch (elem.id) {
                        case "UserMiddleName":
                        case "UserLastName":
                        case "UserAddress":
                        case "UserAddress2":
                        case "UserCity":
                        case "UserStateTextBox":
                        case "UserEmailAddress":
								
								if (g.document.dir == "rtl")
									Agent_GestureAtElement(elem, "Left");
								
								else
		                            Agent_GestureAtElement(elem, "Right");

                                if (Agent_IsNextTabItem(g.document.all(g_strAgentLastFocusID), elem))
                                        Agent_Register3EncourageTabKey();
        
                                else
                                        Agent_Register3EncourageMouseClick();

                                if (elem.id == "UserEmailAddress")
                                        break;

                                return;


                        case "UserZipCode":
                        
								if (g.document.dir == "rtl") 
									Agent_GestureAtElement(elem, "Left");
								
								else
		                            Agent_GestureAtElement(elem, (IsFarEastLocale() ? "Right" : "TopRight"));

                                if (Agent_IsNextTabItem(g.document.all(g_strAgentLastFocusID), elem))
                                        Agent_Register3EncourageTabKey();
        
                                else
                                        Agent_Register3EncourageMouseClick();

                                if (elem.id == "UserEmailAddress")
                                        break;

                                return;

                        case "selUSState":
                        case "selCAProvince":
                        case "selCountry":

                                if (Agent_IsNextTabItem(g.document.all(g_strAgentLastFocusID), elem))
                                        bExplainDropDownArrow = true;

                                break;
                }
        }

        switch (elem.id) {
                case "UserFirstName":
                case "UserMiddleName":
                case "UserLastName":
                case "UserAddress":
                case "UserAddress2":
                case "UserCity":
                case "UserStateTextBox":
                case "selUSState":
                case "selCAProvince":
                case "selCountry":
                case "UserZipCode":
                case "UserEmailAddress":
                case "sharems":
                case "shareoem":

                        Agent_Register3PlayElementScript(elem);

                        if (bExplainDropDownArrow)
                                Agent_Register3DropDownArrowExplain();

                        break;
        
        }
        
}

function Agent_Register3EncourageTabKey() {

        var L_Register3EncourageTabKey1_Text = "ÇÖÛØ  ãÝÊÇÍ Tab ááÇäÊÞÇá Åáì åäÇ.";
        Agent_Speak(L_Register3EncourageTabKey1_Text);
}

function Agent_Register3EncourageMouseClick() {

        var L_Register3EncourageMouseClick1_Text = "ÍÑß ãÄÔÑ ÇáãÇæÓ Åáì åäÇ Ëã ÇäÞÑ ÝæÞ ÇáÒÑ ÇáÃíÓÑ.";
        Agent_Speak(L_Register3EncourageMouseClick1_Text);
}

function Agent_Register3DropDownArrowExplain() {








}

function Agent_Register3PlayElementScript(elem) {

        var str;
        var dir;

        switch (elem.id) {

                case "UserFirstName":
						if (g.document.dir == "rtl") 
							Agent_GestureAtElement(elem, "Left");
						else
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript1_Text = "ÇßÊÈ ÇáÇÓã ÇáÃæá Ýí åÐÇ ÇáãÑÈÚ.";
                        Agent_Speak(L_Register3PlayElementScript1_Text);

                        if (g.document.dir == "rtl") {
	                        Agent_Play("LookLeft");
		                    Agent_Play("LookLeftBlink");
			                Agent_Play("LookLefttReturn");
						
						}
						
				        else {
				            Agent_Play("LookRight");
					        Agent_Play("LookRightBlink");
						    Agent_Play("LookRightReturn");

						}
    
                        break;

                case "UserMiddleName":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript3_Text = "åÐÇ åæ ãßÇä ßÊÇÈÉ ÇáÇÓã ÇáÃæÓØ.";
                        Agent_Speak(L_Register3PlayElementScript3_Text);

                        break;

                case "UserLastName":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript4_Text = "ÇßÊÈ ÇáÇÓã ÇáÃÎíÑ Ýí åÐÇ ÇáãÑÈÚ.";
                        Agent_Speak(L_Register3PlayElementScript4_Text);

                        break;

                case "UserAddress":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript5_Text = "ÇßÊÈ ÚäæÇä ÇáÔÇÑÚ åäÇ.";
                        Agent_Speak(L_Register3PlayElementScript5_Text);

                        break;

                case "UserAddress2":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        Agent_Play("Think");

                        var L_Register3PlayElementScript6_Text = "ÅÐÇ ßäÊ ÊÑíÏ ãÓÇÍÉ ÅÖÇÝíÉ ááÚäæÇä¡ ÇáÑÌÇÁ ÅÏÎÇáå åäÇ. æÅáÇ¡ ÇäÞÑ ÝæÞ ãÝÊÇÍ Tab ááÇäÊÞÇá.";
                        Agent_Speak(L_Register3PlayElementScript6_Text);

                        Agent_Play("RestPose");

                        break;

                case "UserCity":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript7_Text = "ÇßÊÈ åäÇ ÇÓã ÇáãÏíäÉ ÍíË ÊÞíã.";
                        Agent_Speak(L_Register3PlayElementScript7_Text);

                        break;

                case "UserStateTextBox":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript8_Text = "ÇßÊÈ ÇáæáÇíÉ Ãæ ÇáãÞÇØÚÉ ÇáÊí ÊÚíÔ ÝíåÇ åäÇ.";
                        Agent_Speak(L_Register3PlayElementScript8_Text);

                        break;

                case "selUSState":
                case "selCAProvince":
                case "selCountry":
						
						if (g.document.dir == "rtl")
							dir = "Left"
						else
							dir = "Right";

                        Agent_MoveToElement(elem, dir);
                        
                        Agent_Play("Explain");

                        if (elem.id == "selUSState") {
                                var L_Register3PlayElementScript91_Text = "íÌÈ ÊÍÏíÏ æáÇíÉ.";
                                Agent_Speak(L_Register3PlayElementScript91_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript92_Text = "áÚÑÖ ÞÇÆãÉ ÈÇáæáÇíÇÊ¡ ÇäÞÑ ÈÇÓÊÎÏÇã ÇáãÇæÓ ÝæÞ ÒÑ ÇáÓåã ÇáÐí íÔíÑ Åáì ÃÓÝá.";
                                Agent_Speak(L_Register3PlayElementScript92_Text);

                        }

                        else if (elem.id == "selCAProvince") {
                                var L_Register3PlayElementScript93_Text = "íÌÈ ÊÍÏíÏ ãÞÇØÚÉ.";
                                Agent_Speak(L_Register3PlayElementScript93_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript94_Text = "áÚÑÖ ÞÇÆãÉ ÈÇáãÞÇØÚÇÊ¡ ÇäÞÑ ÈÇÓÊÎÏÇã ÇáãÇæÓ ÝæÞ ÒÑ ÇáÓåã ÇáÐí íÔíÑ Åáì ÃÓÝá.";
                                Agent_Speak(L_Register3PlayElementScript94_Text);

                        }

                        else {
                                var L_Register3PlayElementScript95_Text = "íÌÈ ÊÍÏíÏ ÇáÈáÏ Ãæ ÇáÅÞáíã ÇáÐí ÊÚíÔ Ýíå¡  ÇäÞÑ ÈÇÓÊÎÏÇã ÇáãÇæÓ ÝæÞ ÒÑ ÇáÓåã ÇáÐí íÔíÑ Åáì ÃÓÝá.";
                                Agent_Speak(L_Register3PlayElementScript95_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript96_Text = "áÚÑÖ ÞÇÆãÉ ÈÇáÈáÏÇä æÇáÃÞÇáíã¡ ÇäÞÑ ÈÇÓÊÎÏÇã ÇáãÇæÓ ÝæÞ ÒÑ ÇáÓåã ÇáÐí íÔíÑ Åáì ÃÓÝá.";
                                Agent_Speak(L_Register3PlayElementScript96_Text);

                        }

                        Agent_Play("Explain");

                        var L_Register3PlayElementScript11_Text = "Ëã ÍÏÏ ÇáÎíÇÑ ÈÇáäÞÑ ÝæÞ ÇáæáÇíÉ.";
                        var L_Register3PlayElementScript12_Text = "Ëã Þã ÈÇáÊÍÏíÏ ÈÇáäÞÑ ÝæÞ ÇáãÞÇØÚÉ.";
                        var L_Register3PlayElementScript13_Text = "Ëã Þã ÈÇáÊÍÏíÏ ÈÇáäÞÑ ÝæÞ ÇáÈáÏ Ãæ ÇáÅÞáíã.";

                        if (elem.id == "selUSState")
                                str = L_Register3PlayElementScript11_Text;
                        else if (elem.id == "selCAProvince")
                                str = L_Register3PlayElementScript12_Text;
                        else
                                str = L_Register3PlayElementScript13_Text;

                        Agent_Speak(str);

                        break;

                case "UserZipCode":
						
						if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else
							Agent_GestureAtElement(elem, (IsFarEastLocale() ? "Right" : "TopRight"));

                        var L_Register3PlayElementScript14_Text = "ÇÏÎá ÇáÑãÒ ÇáÈÑíÏí åäÇ.";
                        Agent_Speak(L_Register3PlayElementScript14_Text);

                        break;

                case "UserEmailAddress":

                        if (elem.value == "") {

							if (g.document.dir == "rtl") 
								Agent_GestureAtElement(elem, "Left");
		
							else
								Agent_GestureAtElement(elem, "Right");

                            var L_Register3PlayElementScript15_Text = "ÚäæÇä ÇáÈÑíÏ ÇáÅáíßÊÑæäí ÇÎÊíÇÑí æáßäå ÇáØÑíÞÉ ÇáãÝÖáÉ áäÇ Ýí ÇáÇÊÕÇá Èß.";
                            Agent_Speak(L_Register3PlayElementScript15_Text);
							
							g_bAgentRegister3ShortEmail = true;
							
							Agent_Play("Explain");
							
                            var L_Register3PlayElementScript16_Text = "ÅÐÇ áã íßä áÏíß ÚäæÇä ÈÑíÏ ÅáßÊÑæäí¡ ÇÊÑß åÐÇ ÇáãÑÈÚ ÝÇÑÛÇð.";
                            Agent_Speak(L_Register3PlayElementScript16_Text);
							
							Agent_Play("Blink");
							                             
                        }
                        
                        else if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) {

	                       if (g_strAgentLastFocusID == "UserEmailAddress") {

								Agent_Play("Decline");
								
								var L_Register3PlayElementScript17_Text = "ÚÐÑÇð¡ áÇ íÈÏæ åÐÇ ßÚäæÇä ÈÑíÏ ÅáßÊÑæäí ÕÇáÍ.";
								Agent_Speak(L_Register3PlayElementScript17_Text);

								Agent_ExplainEmailAddress();
								
								if (g.document.dir == "rtl")
									Agent_GestureAtElement(elem, "Left");
								
								else
									Agent_GestureAtElement(elem, "Right");
                                        
								Agent_Play("Alert");
                                        
								var L_Register3PlayElementScript18_Text = "ÅÐÇ áã íßä áÏíß ÚäæÇä ÈÑíÏ ÅáßÊÑæäí¡ ÇÊÑß åÐÇ ÇáÍÞá ÝÇÑÛÇð.";
								Agent_Speak(L_Register3PlayElementScript18_Text);
										
								Agent_Play("Blink");
								
                            }
                                
                        }

                        break;

                case "sharems":
                case "shareoem":
                        if (g.document.all("RegChkBxGrp").style.display != "none") {
                                Agent_Register3PlayCheckBoxScript(elem.id);
                                return;
                        }

                        else {
                                Agent_EncourageNextButton();
                        }        
	}
}
function Agent_ExplainEmailAddress() 
{
        var L_ExplainEmailAddress1_Text = "íÊÃáÝ ÚäæÇä ÇáÈÑíÏ ÇáÅáßÊÑæäí ÚãæãÇð ãä ÌÒÃíä.";
        Agent_Speak(L_ExplainEmailAddress1_Text);

        var L_ExplainEmailAddress2_Text = "ÇáÌÒÁ ÇáÃæá åæ ÇÓã ÇáÍÓÇÈ¡ ÇáÐí íõÊÈÚ ÈÇáÑãÒ @. ÇáÌÒÁ ÇáËÇäí åæ ÇÓã ÇáãÌÇá.";
        Agent_Speak(L_ExplainEmailAddress2_Text);

        var L_ExplainEmailAddress3_Text = "Úáì ÓÈíá ÇáãËÇá¡ íãßä áÚäæÇä ÇáÈÑíÏ ÇáÅáíßÊÑæäí Ãä íßæä ãËá: %s";
        var re = /%s/i;
        var strEmail = "\\map=\"\"=\"greatcustomer@msn.com\"\\";

        Agent_Speak(L_ExplainEmailAddress3_Text.replace(re, strEmail) + "\\pau=2000\\");

        Agent_Play("RestPose");
}







function Agent_PrivacyMSAddCommands() 
{
    var L_PrivacyMSCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_PrivacyMSCommand2_Text = "ã&Ç åæ ÇáãáÞã ÇáÂãä¿";
    var L_PrivacyMSCommand3_Text = "ãÇ åí ãáÝÇÊ ÇáÇÑ&ÊÈÇØ¿";
    var L_PrivacyMSCommand4_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_PrivacyMSAboutThisStep", L_PrivacyMSCommand1_Text);
    g_AgentCharacter.Commands.Add("Agent_PrivacyMSWhatIsSecureServer", L_PrivacyMSCommand2_Text);
    g_AgentCharacter.Commands.Add("Agent_PrivacyMSWhatIsCookie", L_PrivacyMSCommand3_Text);
    g_AgentCharacter.Commands.Add("Agent_PrivacyMSWhatToDoNext", L_PrivacyMSCommand4_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_PrivacyMSAboutThisStep()
{
    var L_PrivacyMSAboutThisStep1_Text = "ÊÚÑÖ åÐå ÇáÔÇÔÉ ÈíÇä ÇáÎÕæÕíÉ áÜ Microsoft.";
    Agent_Speak(L_PrivacyMSAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.privtext,"Left");

    var L_PrivacyMSAboutThisStep2_Text = "íãßäß ÞÑÇÁÉ ÇáäÕ åäÇ.";
    Agent_Speak(L_PrivacyMSAboutThisStep2_Text);
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_PrivacyMSAboutThisStep3_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ ÇáÓÇÈÞ ááÚæÏÉ Åáì ÇáÔÇÔÉ ÇáÓÇÈÞÉ.";
    Agent_Speak(L_PrivacyMSAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PrivacyMSWhatIsSecureServer()
{
    var L_PrivacyMSWhatIsSecureServer1_Text = "ÇáãáÞã åæ ßãÈíæÊÑ íæÝÑ ãæÇÑÏ ãÔÊÑßÉ¡ ãËá ÇáãÚáæãÇÊ¡ Åáì ÃÌåÒÉ ßãÈíæÊÑ ÃÎÑì Úáì ÔÈßÉ ÇáÇÊÕÇá.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer1_Text);

    var L_PrivacyMSWhatIsSecureServer2_Text = "ÇáãáÞã ÇáÂãä åæ ßãÈíæÊÑ áÏíå ÅãßÇäíÉ ÊæÝíÑ ÇáãÚÇãáÇÊ ÇáÂãäÉ¡ æíÖãä Ãä ÇáãÚáæãÇÊ ÇáãÎÒäÉ Úáíå ÛíÑ ÞÇÈáÉ ááæÕæá ãä ÞÈá ÌåÇÊ ÛíÑ ãÕÑÍ áåÇ.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer2_Text);

    var L_PrivacyMSWhatIsSecureServer3_Text = "ãËáÇð¡ ÚäÏãÇ ÊÞæã ÈÇáÊÓÌíá ãÚ Microsoft¡ íÊã ÊÎÒíä ãÚáæãÇÊ ÇÓãß æÚäæÇäß Úáì ãáÞã ÇáÊÓÌíá ÇáÂãä áÜ Microsoft.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer3_Text);
        
    var L_PrivacyMSWhatIsSecureServer4_Text = "ÈåÐå ÇáØÑíÞÉ¡ ÊÈÞì ãÚáæãÇÊß ÓÑíÉ æÂãäÉ¡ æáä íÊã ÇáÇÊÕÇá Èß ãä ÌåÇÊ ÃÎÑì ÎÇÑÌ Microsoft ÈÚÏ Ãä ÊÞæã ÈÇáÊÓÌíá.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer4_Text);
}

function Agent_PrivacyMSWhatIsCookie()
{
    var L_PrivacyMSWhatIsCookie1_Text = "ãáÝÇ ÇáÇÑÊÈÇØ åæ ãáÝ ÈíÇäÇÊ ÕÛíÑ íÊã ÊÎÒíäå Úáì ÇáßãÈíæÊÑ ÚäÏ ÒíÇÑÊß áÈÚÖ ãæÇÞÚ æíÈ.";
    Agent_Speak(L_PrivacyMSWhatIsCookie1_Text);

    var L_PrivacyMSWhatIsCookie2_Text = "ÊÍÊæí ãáÝÇÊ ÇáÇÑÊÈÇØ Úáì ãÚáæãÇÊ ÃÓÇÓíÉ Íæáß¡ ãËá ÚäæÇä ÇáÈÑíÏ ÇáÅáßÊÑæäí¡ ÈÍíË áä Êßæä ÈÍÇÌÉ Åáì ÅÏÎÇáåÇ Ýí ßá ãÑÉ ÊÒæÑ ÇáãæÞÚ.";
    Agent_Speak(L_PrivacyMSWhatIsCookie2_Text);

    var L_PrivacyMSWhatIsCookie3_Text = "ãËáÇð¡ ÅÐÇ ÞãÊ ÈÚãáíÉ ÔÑÇÁ ãä ãæÞÚ Úáì æíÈ¡ ÞÏ íÑÓá åÐÇ ÇáãæÞÚ ãáÝ ÇÑÊÈÇØ ááßãÈíæÊÑ íÍÊæí Úáì ãÚáæãÇÊ ÇáÔÍä.";
    Agent_Speak(L_PrivacyMSWhatIsCookie3_Text);
        
    var L_PrivacyMSWhatIsCookie4_Text = "áåÐÇ Ýí ÇáãÑÉ ÇáÊÇáíÉ ÇáÊí ÊÒæÑ ÝíåÇ Ðáß ÇáãæÞÚ¡ áä Êßæä ÈÍÇÌÉ Åáì ÅÏÎÇá Êáß ÇáãÚáæãÇÊ ãÑÉ ÃÎÑì.";
    Agent_Speak(L_PrivacyMSWhatIsCookie4_Text);
        
    var L_PrivacyMSWhatIsCookie5_Text = "ÚäÏãÇ ÊõÓÌá ãÚ Microsoft¡ íÊã ÍÝÙ ãÚÑÝ ÇáãäÊÌ¡ æÇÓãß¡ æÚäæÇäß Ýí ãáÝ ÇÑÊÈÇØ Úáì ÇáßãÈíæÊÑ ÇáÎÇÕ Èß.";
    Agent_Speak(L_PrivacyMSWhatIsCookie5_Text);
        
    var L_PrivacyMSWhatIsCookie6_Text = "áåÐÇ Ýí ÇáãÑÉ ÇáÊÇáíÉ ÇáÊí ÊÒæÑ ÝíåÇ www.microsoft.com¡ ÓíÊÚÑÝ Úáíß ãæÞÚ æíÈ ßãÓÊÎÏã ãÓÌá áÜ Windows.";
    Agent_Speak(L_PrivacyMSWhatIsCookie6_Text);
}

function Agent_PrivacyMSWhatToDoNext()
{    
    Agent_GestureAtElement(g.privtext,"Left");
    
    var L_PrivacyMSWhatToDoNext1_Text = "áÑÄíÉ ÇáãÒíÏ ãä ÈíÇä ÇáÎÕæÕíÉ¡ ÇäÞÑ ÝæÞ åÐÇ ÇáãÑÈÚ.";
    Agent_Speak(L_PrivacyMSWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.privtext,"Right");

    var L_PrivacyMSWhatToDoNext2_Text = "Ëã ÇÓÊÎÏã ÒÑí 'ÇáÓåã Åáì ÃÚáì' æ'ÇáÓåã Åáì ÃÓÝá' ááÊãÑíÑ ÎáÇá ÈíÇä ÇáÎÕæÕíÉ.";
    Agent_Speak(L_PrivacyMSWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_PrivacyMSWhatToDoNext3_Text = "íãßäß ÃíÖÇð ÇÓÊÎÏÇã ãÝÊÇÍí Page Down æ Page Up Úáì áæÍÉ ÇáãÝÇÊíÍ ááÊäÞá ÎáÇá ÇáäÕ.";
    Agent_Speak(L_PrivacyMSWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
        
    var L_PrivacyMSWhatToDoNext4_Text = "ÚäÏ ÇáÇäÊåÇÁ ãä ÞÑÇÁÉ ÈíÇä ÇáÎÕæÕíÉ¡ ÇäÞÑ ÝæÞ ÇáÒÑ 'ÇáÓÇÈÞ' ááÑÌæÚ Åáì ÔÇÔÉ ÇáÊÓÌíá ÇáÓÇÈÞÉ.";
    Agent_Speak(L_PrivacyMSWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}





function Agent_RefDialAddCommands() 
{
    var L_RefDialAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_RefDialAddCommands2_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_RefDialAboutThisStep", L_RefDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialWhatToDoNext", L_RefDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RefDialAboutThisStep()
{
    var L_RefDialAboutThisStep1_Text = "Ýí åÐå ÇáãÑÍáÉ¡ íÍÊÇÌ Windows áÅÌÑÇÁ ãßÇáãÉ åÇÊÝíÉ ãÌÇäíÉ.";
    Agent_Speak(L_RefDialAboutThisStep1_Text);

    var L_RefDialAboutThisStep2_Text = "Óíõãßäß åÐÇ ãä ÇÓÊÎÏÇã ÍÓÇÈ ÅäÊÑäÊ Úáì åÐÇ ÇáßãÈíæÊÑ.";
    Agent_Speak(L_RefDialAboutThisStep2_Text);
}

function Agent_RefDialWhatToDoNext()
{    
    Agent_GestureAtElement(g.btnManual,"Left");
    
    var L_RefDialWhatToDoNext1_Text = "ÅÐÇ ßÇä áÏíß ãÓÈÞÇð ãæÝÑ ÎÏãÉ ÅäÊÑäÊ¡ Ãæ ÇÎÊÕÇÑÇð 'ISP'¡ Ãæ ßäÊ ÊÚáã Ãí ISP ÊÑíÏ ÇÓÊÎÏÇãå¡ ÇäÞÑ ÝæÞ ÒÑ Have Settings.";
    Agent_Speak(L_RefDialWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_RefDialWhatToDoNext2_Text = "ÅÐÇ ÃÑÏÊ ÇáÊÍÏíÏ ãä ÞÇÆãÉ ISPs ÇáãÊæÝÑíä Ýí ãäØÞÊß¡ ÇäÞÑ ÝæÞ 'ÇáÊÇáí' ááãÊÇÈÚÉ.";
    Agent_Speak(L_RefDialWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialWhatToDoNext3_Text = "Ãæ ÇäÞÑ ÝæÞ ÊÎØí ááãÊÇÈÚÉ ÈÏæä ÅÚÏÇÏ åÐÇ ÇáßãÈíæÊÑ ãä ÃÌá ÇáæÕæá Åáì ÅäÊÑäÊ.";
    Agent_Speak(L_RefDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RefDialingAddCommands() 
{
    var L_RefDialingAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_RefDialingAddCommands2_Text = "ã&Ç åæ ÇáÔÑíØ ÇáãæÌæÏ Ýí æÓØ ÇáÔÇÔÉ¿";
    var L_RefDialingAddCommands3_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_RefDialingAboutThisStep", L_RefDialingAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialingWhatsThisBar", L_RefDialingAddCommands2_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialingWhatToDoNext", L_RefDialingAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RefDialingAboutThisStep()
{
    var L_RefDialingAboutThisStep1_Text = "íÞæã Windows ÍÇáíÇð ÈÇáÇÊÕÇá 'ÈÎÏãÉ Microsoft Referral' áÇÓÊÑÏÇÏ ÞÇÆãÉ ÈãæÝÑí ÎÏãÉ ÅäÊÑäÊ ÇáãÊæÝÑíä Ýí ÇáãäØÞÉ áÏíß.";
    Agent_Speak(L_RefDialingAboutThisStep1_Text);

    var L_RefDialingAboutThisStep2_Text = "ÇáÑÌÇÁ ÇáÇäÊÙÇÑ...";
    Agent_Speak(L_RefDialingAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingAboutThisStep3_Text = "Ãæ ÅÐÇ ÃÑÏÊ¡ íãßäß ÊÎØí åÐå ÇáÎØæÉ Ãæ ÇáÑÌæÚ Åáì ÇáÔÇÔÉ ÇáÓÇÈÞÉ.";
    Agent_Speak(L_RefDialingAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RefDialingWhatsThisBar()
{    
    Agent_GestureAtElement(g.tblProg,"Left");
    
    var L_RefDialingWhatsThisBar1_Text = "Ðáß åæ ÔÑíØ ãÄÔÑ ÇáÊÞÏã¡ ÇáÐí íÚÑÖ áß ÇáÍÏ ÇáÐí æÕáÊ Åáíå ÇáÚãáíÉ.";
    Agent_Speak(L_RefDialingWhatsThisBar1_Text);

    var L_RefDialingWhatsThisBar2_Text = "ÃËäÇÁ ÊÍãíá ÇáãÚáæãÇÊ ãä ÇáÎÏãÉ ÇáãÑÌÚíÉ Åáì ÌåÇÒ ÇáßãÈíæÊÑ¡ íãÊáÆ ÇáÔÑíØ.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
    
    Agent_Play("RestPose");

    var L_RefDialingWhatsThisBar3_Text = "ÚäÏãÇ íÊã ÊÍãíá ßÇÝÉ ÇáãÚáæãÇÊ¡ Óíßæä ÇáÔÑíØ ããÊáÆ ÈÇáßÇãá æÓÊäÊÞá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ ÊáÞÇÆíÇð.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
}

function Agent_RefDialingWhatToDoNext()
{
    var L_RefDialingWhatToDoNext1_Text = "ÇáÑÌÇÁ ÇáÇäÊÙÇÑ ÍÊì íÞæã Windows ÈÊÍãíá ÇáãÚáæãÇÊ Íæá ISP ãä 'Microsoft Referral Service'.";
    Agent_Speak(L_RefDialingWhatToDoNext1_Text);

    var L_RefDialingWhatToDoNext2_Text = "ÍÇáãÇ íÊã ÇáÊÍãíá¡ ÊÙåÑ ÇáÔÇÔÉ ÇáÊÇáíÉ ÊáÞÇÆíÇð.";
    Agent_Speak(L_RefDialingWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingWhatToDoNext3_Text = "ÅÐÇ ÃÑÏÊ ÊÎØí åÐå ÇáÎØæÉ¡ ÇäÞÑ ÝæÞ ÇáÒÑ 'ÊÎØí'.";
    Agent_Speak(L_RefDialingWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RegDialAddCommands()
{
    var L_RegDialAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_RegDialAddCommands2_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_RegDialAboutThisStep", L_RegDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RegDialWhatToDoNext", L_RegDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RegDialAboutThisStep()
{
    var L_RegDialAboutThisStep1_Text = "íÓÊÎÏã Windows ÍÇáíÇð ÇáßãÈíæÊÑ áÅÌÑÇÁ ãßÇáãÉ åÇÊÝíÉ ãÌÇäíÉ ááÇÊÕÇá ÈãÑßÒ ÇáÊÓÌíá.";
    Agent_Speak(L_RegDialAboutThisStep1_Text);

    var L_RegDialAboutThisStep2_Text = "ÇáÑÌÇÁ ÇáÇäÊÙÇÑ...";
    Agent_Speak(L_RegDialAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialAboutThisStep3_Text = "Ãæ ÅÐÇ ÃÑÏÊ¡ íãßäß ÊÎØí åÐå ÇáÎØæÉ¡ Ãæ ÇáÑÌæÚ Åáì ÇáÔÇÔÉ ÇáÓÇÈÞÉ.";
    Agent_Speak(L_RegDialAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RegDialWhatToDoNext()
{
    var L_RegDialWhatToDoNext1_Text = "ÇáÑÌÇÁ ÇáÇäÊÙÇÑ ÍÊì íÞæã Windows ÈÇáÇÊÕÇá ÈãÑßÒ ÇáÊÓÌíá.";
    Agent_Speak(L_RegDialWhatToDoNext1_Text);

    var L_RegDialWhatToDoNext2_Text = "ÈãÌÑÏ ÇÊÕÇá Windows¡ ÓíÊã ÇáÇäÊÞÇá ÊáÞÇÆíÇð Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ.";
    Agent_Speak(L_RegDialWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialWhatToDoNext3_Text = "ÅÐÇ ÃÑÏÊ ÊÎØí åÐå ÇáÎØæÉ¡ ÇäÞÑ ÝæÞ ÇáÒÑ 'ÊÎØí'.";
    Agent_Speak(L_RegDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigDialAddCommands()
{
    var L_MigDialAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_MigDialAddCommands2_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß";

    g_AgentCharacter.Commands.Add("Agent_MigDialAboutThisStep", L_MigDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_MigDialWhatToDoNext", L_MigDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_MigDialAboutThisStep()
{
    var L_MigDialAboutThisStep1_Text = "Ýí åÐå ÇáãÑÍáÉ¡ íÍÊÇÌ Windows áÅÌÑÇÁ ãßÇáãÉ åÇÊÝíÉ ãÌÇäíÉ.";
    Agent_Speak(L_MigDialAboutThisStep1_Text);

    var L_MigDialAboutThisStep2_Text = "Óíõãßäß åÐÇ ãä ÇÓÊÎÏÇã ÍÓÇÈ ÅäÊÑäÊ Úáì åÐÇ ÇáßãÈíæÊÑ.";
    Agent_Speak(L_MigDialAboutThisStep2_Text);
}

function Agent_MigDialWhatToDoNext()
    {    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
    
    var L_MigDialWhatToDoNext1_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' áÈÏÁ ÇáØáÈ.";
    Agent_Speak(L_MigDialWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_MigDialWhatToDoNext2_Text = "Ãæ¡ ÅÐÇ ÃÑÏÊ ÊÎØí åÐå ÇáÎØæÉ¡ ÇäÞÑ ÝæÞ ÇáÒÑ 'ÊÎØí'.";
    Agent_Speak(L_MigDialWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}





function Agent_MigListAddCommands() 
{
    
    
    
	var L_MigListAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
	var L_MigListAddCommands2_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß";
	
	g_AgentCharacter.Commands.Add("Agent_MigListAboutThisStep", L_MigListAddCommands1_Text);
	g_AgentCharacter.Commands.Add("Agent_MigListWhatToDoNext", L_MigListAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnMigListPreDisplayMenu()
{
    var MigListCommands = g_AgentCharacter.Commands;

    if (g.MigListNoOffer.style.display == "inline")
    {
        if (MigListCommands.count >= 3)
        {
            MigListCommands.Remove("Agent_MigListAboutThisStep");
            MigListCommands.Remove("Agent_MigListWhatToDoNext");
        }
    }
    else
    {
        if (MigListCommands.count < 3)
        {
            Agent_MigListAddCommands();
        }
    }
}

function Agent_MigListAboutThisStep()
{
    var L_MigListAboutThisStep1_Text = "ÊÎÊÇÑ Ýí åÐå ÇáÔÇÔÉ 'ãæÝÑ ÎÏãÉ ÅäÊÑäÊ'¡ Ãæ ÇÎÊÕÇÑÇð 'ISP'¡ ÇáÐí ÊÑíÏ ÇÓÊÎÏÇãå.";
    Agent_Speak(L_MigListAboutThisStep1_Text);

    var L_MigListAboutThisStep2_Text = "Óíõãßäß åÐÇ ãä ÇÓÊÎÏÇã ÍÓÇÈ ÅäÊÑäÊ Úáì åÐÇ ÇáßãÈíæÊÑ.";
    Agent_Speak(L_MigListAboutThisStep2_Text);
}

function Agent_MigListWhatToDoNext()
{
    Agent_GestureAtElement(g.selISPDropList,"Left");
    
    var L_MigListWhatToDoNext1_Text = "ÍÏÏ 'ãæÝÑ ÎÏãÉ ÅäÊÑäÊ' ÈÇáäÞÑ ÝæÞå Ýí åÐå ÇáÞÇÆãÉ.";
    Agent_Speak(L_MigListWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_MigListWhatToDoNext2_Text = "ÅÐÇ áã íßä ãæÝÑ ÎÏãÉ ÅäÊÑäÊ ÇáÎÇÕ Èß ãÏÑÌÇð Ýí ÇáÞÇÆãÉ¡ ÇäÞÑ ÝæÞ \"My ISP is not on the list\" Ýí ÃÚáì ÇáÞÇÆãÉ.";
    Agent_Speak(L_MigListWhatToDoNext2_Text);

    var L_MigListWhatToDoNext3_Text = "æÇÊÕá ÈãæÝÑ ÎÏãÉ ÅäÊÑäÊ ááãÓÇÚÏÉ ÈÅÚÇÏÉ ÊÃÓíÓ ÍÓÇÈ ÅäÊÑäÊ ÇáÎÇÕ Èß Úáì åÐÇ ÇáßãÈíæÊÑ.";
    Agent_Speak(L_MigListWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_MigListWhatToDoNext4_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááãÊÇÈÚÉ.";
    Agent_Speak(L_MigListWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigPageAddCommands() 
{
	var L_MigPageAddCommands1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
	var L_MigPageAddCommands2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
	var L_MigPageAddCommands3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";
	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_WhatToDoNext", L_MigPageAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_AboutThisStep", L_MigPageAddCommands2_Text);
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_HowToMoveOn", L_MigPageAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_MigPageCommand_WhatToDoNext() {
		
	var L_MigPageWhatToDoNext1_Text = "ÚäÏãÇ ÊäÊåí ãä åÐå ÇáÕÝÍÉ.";
	Agent_Speak(L_MigPageWhatToDoNext1_Text);
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
			
	var L_MigPageWhatToDoNext2_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí'.";
	Agent_Speak(L_MigPageWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}

function Agent_MigPageCommand_AboutThisStep() 
{
	var L_MigPageAboutThisStep1_Text = "ÓäÍÇæá Ýí åÐå ÇáÔÇÔÉ Êãßíä ÍÓÇÈ ÅäÊÑäÊ ÇáÎÇÕ Èß ãÚ ãæÝÑ ÇáÎÏãÉ ÇáãæÌæÏ.";
	Agent_Speak(L_MigPageAboutThisStep1_Text);
	
	Agent_Play("Pleased");
	
	var L_MigPageAboutThisStep2_Text = "ÝÞØ ÇÊÈÚ ÇáÊÚáíãÇÊ ÇáÊí ÊÙåÑ Úáì åÐå ÇáÔÇÔÉ ÇáÊí íæÝÑåÇ ãæÝÑ ÎÏãÉ ÇäÊÑäÊ ÇáÎÇÕ Èß.";
	Agent_Speak(L_MigPageAboutThisStep2_Text);
}

function Agent_MigPageCommand_HowToMoveOn() 
{
	var L_MigPageHowToMoveOn1_Text = "ÚäÏãÇ Êßãá åÐå ÇáÔÇÔÉ¡";
	Agent_Speak(L_MigPageHowToMoveOn1_Text);		
			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

	var L_MigPageHowToMoveOn2_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááãÊÇÈÚÉ.";
	Agent_Speak(L_MigPageHowToMoveOn2_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPDialAddCommands() 
{
    var L_ISPDial1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_ISPDial2_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_ISPDialAboutThisStep", L_ISPDial1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDialWhatToDoNext", L_ISPDial2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPDialAboutThisStep()
{
    var L_ISPDialAboutThisStep1_Text = "Ýí åÐå ÇáãÑÍáÉ¡ íÍÊÇÌ Windows áÅÌÑÇÁ ãßÇáãÉ åÇÊÝíÉ ãÌÇäíÉ.";
    Agent_Speak(L_ISPDialAboutThisStep1_Text);

    var L_ISPDialAboutThisStep2_Text = "åÐÇ ãä ÃÌá ÊÓÌíá ÍÓÇÈ ÅäÊÑäÊ ÇáÌÏíÏ.";
    Agent_Speak(L_ISPDialAboutThisStep2_Text);

    var L_ISPDialAboutThisStep3_Text = "ÝÞØ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááãÊÇÈÚÉ.";
    Agent_Speak(L_ISPDialAboutThisStep3_Text);
}

function Agent_ISPDialWhatToDoNext()
{
    var L_ISPDialWhatToDoNext1_Text = "ÇäÞÑ ÝæÞ ÒÑ ÇáÊÇáí ááãÊÇÈÚÉ.";
    Agent_Speak(L_ISPDialWhatToDoNext1_Text);

    var L_ISPDialWhatToDoNext2_Text = "Ãæ ÇäÞÑ ÝæÞ ÊÎØí ááãÊÇÈÚÉ ÈÏæä ÅÚÏÇÏ åÐÇ ÇáßãÈíæÊÑ ãä ÃÌá ÇáæÕæá Åáì ÅäÊÑäÊ. íãßäß ÏæãÇð ÇáÞíÇã ÈåÐÇ áÇÍÞÇð...";
    Agent_Speak(L_ISPDialWhatToDoNext2_Text);
}




function Agent_DialToneAddCommands()
{
    var L_DialToneAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_DialToneAddCommands2_Text = "ãÇ&ÐÇ ÅÐÇ ßäÊ ÈÍÇÌÉ Åáì äÞá ÇáßãÈíæÊÑ¿";
    var L_DialToneAddCommands3_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_DialToneAboutThisStep", L_DialToneAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_DialToneHowToMove", L_DialToneAddCommands2_Text);
    g_AgentCharacter.Commands.Add("Agent_DialToneWhatToDoNext", L_DialToneAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_DialToneAboutThisStep()
{
    var L_DialToneAboutThisStep1_Text = "þþÊÚÐÑ Úáì Windows ÇáßÔÝ Úä Øäíä ÇáØáÈ.";
    Agent_Speak(L_DialToneAboutThisStep1_Text);

    var L_DialToneAboutThisStep2_Text = "ÞÏ íßæä åäÇß ÃÓÈÇÈ ÚÏíÏÉ áåÐÇ.";
    Agent_Speak(L_DialToneAboutThisStep2_Text);

    var L_DialToneAboutThisStep3_Text = "ÃæáÇð¡ ÊÍÞÞ ááÊÃßÏ ãä æÕá ßÇÈá ÇáåÇÊÝ ááßãÈíæÊÑ ãä ÇáØÑÝíä ÈÔßá ÕÍíÍ.";
    Agent_Speak(L_DialToneAboutThisStep3_Text);

    var L_DialToneAboutThisStep4_Text = "ËÇäíÇð¡ ÊÃßÏ ãä ÚÏã æÌæÏ ÃÍÏ íÍÇæá ÇÓÊÎÏÇã ÎØ ÇáåÇÊÝ áÏíß Ýí åÐå ÇááÍÙÉ.";
    Agent_Speak(L_DialToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneAboutThisStep5_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' áãÍÇæáÉ ÇáØáÈ ãÑÉ ÃÎÑì.";
    Agent_Speak(L_DialToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_DialToneHowToMove()
{
    var L_DialToneHowToMove1_Text = "ÅÐÇ ßÇä Úáíß äÞá ÇáßãÈíæÊÑ áæÕáå ÈÎØ ÇáåÇÊÝ¡ ÝÊÃßÏ ãä Ãä ÇáØÇÞÉ ãÝÕæáÉ.";
    Agent_Speak(L_DialToneHowToMove1_Text);

    var L_DialToneHowToMove2_Text = "ÚäÏ ÅÚÇÏÉ ÊÔÛíá ÇáßãÈíæÊÑ¡ ÓíÞæã Windows ÈÇÓÊÆäÇÝ åÐå ÇáÚãáíÉ ãä ÍíË ÇäÊåíÊ.";
    Agent_Speak(L_DialToneHowToMove2_Text);
}

function Agent_DialToneWhatToDoNext()
{
    var L_DialToneWhatToDoNext1_Text = "ÊÍÞÞ ÃæáÇð ãä ÇÊÕÇá ÇáßãÈíæÊÑ ÈÎØ ÇáåÇÊÝ.";
    Agent_Speak(L_DialToneWhatToDoNext1_Text);

    var L_DialToneWhatToDoNext2_Text = "Ëã¡ ÊÍÞÞ ááÊÃßÏ ãä ÚÏã ÇÓÊÎÏÇã ÎØ ÇáåÇÊÝ ãÓÈÞÇð.";
    Agent_Speak(L_DialToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneWhatToDoNext3_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' áãÍÇæáÉ ÇáØáÈ ãÑÉ ÃÎÑì.";
    Agent_Speak(L_DialToneWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_DialToneWhatToDoNext4_Text = "Ãæ ÇäÞÑ ÝæÞ ÒÑ 'ÊÎØí' ááãÊÇÈÚÉ ÈÏæä ÊÓÌíá Ãæ ÊäÔíØ äÓÎÊß ãäWindows XP.";
    Agent_Speak(L_DialToneWhatToDoNext4_Text);
    
    Agent_Play("RestPose");

    var L_DialToneWhatToDoNext5_Text = "íãßäß ÏæãÇð ÇáÊÓÌíá áÇÍÞÇð.";
    Agent_Speak(L_DialToneWhatToDoNext5_Text);
}



function Agent_CnnctErrAddCommands() 
{
    var L_CnnctErrAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_CnnctErrAddCommands2_Text = "ßíÝ ÃÞæã ÈÅíÞÇÝ ÊÔÛíá ÎÏãÉ ÇäÊÙÇÑ ãßÇáãÉ¿";
    var L_CnnctErrAddCommands3_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_CnnctErrAboutThisStep", L_CnnctErrAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_CnnctErrTurnOffCallWaiting", L_CnnctErrAddCommands2_Text);
    g_AgentCharacter.Commands.Add("Agent_CnnctErrWhatToDoNext", L_CnnctErrAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_CnnctErrAboutThisStep()
{
    var L_CnnctErrAboutThisStep1_Text = "ÊãÊ ãÞÇØÚÉ ãßÇáãÊß ÇáåÇÊÝíÉ ãÚ ãÑßÒ ÇáÊÓÌíá.";
    Agent_Speak(L_CnnctErrAboutThisStep1_Text);

    var L_CnnctErrAboutThisStep2_Text = "ÞÏ íßæä åäÇß ÃÓÈÇÈ ÚÏíÏÉ áåÐÇ.";
    Agent_Speak(L_CnnctErrAboutThisStep2_Text);

    var L_CnnctErrAboutThisStep3_Text = "ÃæáÇð¡ ÑÈãÇ áã ÊÓÊÎÏã ÇáÇÊÕÇá áãÏÉ ØæíáÉ ãä ÇáæÞÊ æÞÏ Êã ÞØÚ ÇÊÕÇáß ÊáÞÇÆíÇð.";
    Agent_Speak(L_CnnctErrAboutThisStep3_Text);

    var L_CnnctErrAboutThisStep4_Text = "ËÇäíÇð¡ ÞÏ íßæä åäÇß ÔÎÕ ãÇ ÍÇæá ÇÓÊÎÏÇã ÎØ ÇáåÇÊÝ ÈíäãÇ ÃäÊ ãÊÕá.";
    Agent_Speak(L_CnnctErrAboutThisStep4_Text);

    var L_CnnctErrAboutThisStep5_Text = "ËÇáËÇð¡ ÞÏ ÊÊã ãÞÇØÚÊß ãä ÞÈá ãßÇáãÉ æÇÑÏÉ¡ Åä ßÇä áÏíß ÎÏãÉ ÇäÊÙÇÑ ãßÇáãÉ.";
    Agent_Speak(L_CnnctErrAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrAboutThisStep6_Text = "Åä ßÇäÊ ÎÏãÉ ÇáåÇÊÝ áÏíß ÊÊÖãä ÇäÊÙÇÑ ãßÇáãÉ æÃäÊ ÊÚÑÝ ÇáÑÞã áÅíÞÇÝ ÊÔÛíáå¡ ÇßÊÈå åäÇ.";
    Agent_Speak(L_CnnctErrAboutThisStep6_Text);
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrAboutThisStep7_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' áãÍÇæáÉ ÅÚÇÏÉ ÇáÇÊÕÇá ãÑÉ ÃÎÑì.";
    Agent_Speak(L_CnnctErrAboutThisStep7_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrTurnOffCallWaiting()
{
    var L_CnnctErrTurnOffCallWaiting1_Text = "íãßä áãæÝÑ ÎÏãÉ ÇáåÇÊÝ áÏíß ÅÚáÇãß ÈÑãÒ ÅíÞÇÝ ÊÔÛíá ÎÏãÉ ÇäÊÙÇÑ ÇáãßÇáãÇÊ.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting1_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrTurnOffCallWaiting2_Text = "Åä ßäÊ ÊÑíÏ ÅíÞÇÝ ÊÔÛíá ÎÏãÉ ÇäÊÙÇÑ ãßÇáãÉ ÃËäÇÁ ÅÌÑÇÁ åÐÇ ÇáÇÊÕÇá¡ ÇßÊÈ Ðáß ÇáÑÞã åäÇ.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting2_Text);
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrTurnOffCallWaiting3_Text = "Ëã ÇäÞÑ ÒÑ 'ÇáÊÇáí'.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrWhatToDoNext()
{
    var L_CnnctErrWhatToDoNext1_Text = "ÃæáÇð¡ ÊÃßÏ ãä ÚÏã æÌæÏ ÔÎÕ ÂÎÑ íÓÊÎÏã ÎØ ÇáåÇÊÝ ÇáÐí ÊÍÇæá ÇÓÊÎÏÇãå ááÇÊÕÇá ÈÜ Microsoft.";
    Agent_Speak(L_CnnctErrWhatToDoNext1_Text);

    var L_CnnctErrWhatToDoNext2_Text = "ËÇäíÇð¡ ÅÐÇ ßÇäÊ áÏíß ÎÏãÉ ÇäÊÙÇÑ ÇáãßÇáãÇÊ¡ Þã ÈÅíÞÇÝ ÊÔÛíáåÇ ãÄÞÊÇð.";
    Agent_Speak(L_CnnctErrWhatToDoNext2_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrWhatToDoNext3_Text = "áÅíÞÇÝ ÊÔÛíáåÇ¡ ÇßÊÈ ÇáÑãÒ Ýí åÐÇ ÇáãÑÈÚ.";
    Agent_Speak(L_CnnctErrWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_CnnctErrWhatToDoNext4_Text = "ÈÚÏ ÅÊãÇã ãßÇáãÊß¡ ÓäÞæã ÈÊÔÛíá ÎÏãÉ ÇäÊÙÇÑ ÇáãßÇáãÇÊ ãÑÉ ÃÎÑì ÊáÞÇÆíÇð.";
    Agent_Speak(L_CnnctErrWhatToDoNext4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrWhatToDoNext5_Text = "ÚäÏãÇ Êßæä ÌÇåÒÇð ááãÍÇæáÉ ãÑÉ ÃÎÑì¡ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí'.";
    Agent_Speak(L_CnnctErrWhatToDoNext5_Text);
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_CnnctErrWhatToDoNext6_Text = "Ãæ ÇäÞÑ ÝæÞ ÒÑ 'ÊÎØí' ááãÊÇÈÚÉ ÈÏæä ÊÓÌíá.";
    Agent_Speak(L_CnnctErrWhatToDoNext6_Text);
    
    Agent_Play("RestPose");
}



function Agent_HandShakeAddCommands() 
{
    var L_HandShakeAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_HandShakeAddCommands2_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_HandShakeAboutThisStep", L_HandShakeAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_HandShakeWhatToDoNext", L_HandShakeAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_HandShakeAboutThisStep()
{
    var L_HandShakeAboutThisStep1_Text = "áã íÊãßä Windows ãä ÇáÇÊÕÇá ÈÜ Microsoft ÇáÂä.";
    Agent_Speak(L_HandShakeAboutThisStep1_Text);

    var L_HandShakeAboutThisStep2_Text = "íãßä Ãä íÍÏË åÐÇ áÃä ÎØæØ ÇáåÇÊÝ ãÔÛæáÉ¡ Ãæ áÃä ÇáßãÈíæÊÑ áã íßä ÞÇÏÑÇð Úáì ÅÌÑÇÁ ãßÇáãÉ åÇÊÝíÉ.";
    Agent_Speak(L_HandShakeAboutThisStep2_Text);

    var L_HandShakeAboutThisStep3_Text = "ÍÇæá ÇáÇäÊÙÇÑ ÈÖÚ ÏÞÇÆÞ.";
    Agent_Speak(L_HandShakeAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_HandShakeAboutThisStep4_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' ááãÍÇæáÉ ãÑÉ ÃÎÑì.";
    Agent_Speak(L_HandShakeAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_HandShakeWhatToDoNext()
{    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
    
    var L_HandShakeWhatToDoNext1_Text = "ÇäÊÙÑ ÈÖÚ ÏÞÇÆÞ¡ Ëã ÇäÞÑ ÝæÞ ÇáÒÑ 'ÅÚÇÏÉ ÇáØáÈ'.";
    Agent_Speak(L_HandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_HandShakeWhatToDoNext2_Text = "ÅÐÇ ßäÊ ÞÏ ÞãÊ ÈÐáß ÚÏÉ ãÑÇÊ¡ ÑÇÌÚ ÇáÔÑßÉ ÇáãÕäÚÉ ááßãÈíæÊÑ.";
    Agent_Speak(L_HandShakeWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_HandShakeWhatToDoNext3_Text = "Ãæ ÇäÞÑ ÝæÞ ÇáÒÑ 'ÊÎØí' ááãÊÇÈÚÉ Ïæä ÊÓÌíá ÇáßãÈíæÊÑ.";
    Agent_Speak(L_HandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_NoAnswerAddCommands() 
{
    var L_NoAnswerAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_NoAnswerAddCommands2_Text = "ãÇÐÇ áæ ßÇä ÑÞã ÇáåÇÊÝ ÛíÑ ÕÍíÍ¿";
    var L_NoAnswerAddCommands3_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_NoAnswerAboutThisStep", L_NoAnswerAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_NoAnswerWhatIfWrongNumber", L_NoAnswerAddCommands2_Text);
    g_AgentCharacter.Commands.Add("Agent_NoAnswerWhatToDoNext", L_NoAnswerAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_NoAnswerAboutThisStep()
{
    var L_NoAnswerAboutThisStep1_Text = "þþáã íÓÊÌÈ ÑÞã ÇáåÇÊÝ ÇáÐí ÍÇæáäÇ ØáÈå.";
    Agent_Speak(L_NoAnswerAboutThisStep1_Text);

    var L_NoAnswerAboutThisStep2_Text = "ÊÃßÏ ãä ÇáÑÞã áÊÑì ÅÐÇ ßÇä ÕÍíÍÇð.";
    Agent_Speak(L_NoAnswerAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_NoAnswerAboutThisStep3_Text = "ÅÐÇ ßÇä Úáì ãÇ íÑÇã¡ ÇäÊÙÑ ÈÖÚ ÏÞÇÆÞ¡ Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' ááãÍÇæáÉ ãÑÉ ÃÎÑì.";
    Agent_Speak(L_NoAnswerAboutThisStep3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.edtPhoneNumber,"Left");

    var L_NoAnswerAboutThisStep4_Text = "æãÚ Ðáß¡ ÅÐÇ ßÇä ÇáÑÞã ÛíÑ ÕÍíÍ¡ ÇäÞÑ åäÇ æÞã ÈßÊÇÈÊå.";
    Agent_Speak(L_NoAnswerAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_NoAnswerAboutThisStep5_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ'.";
    Agent_Speak(L_NoAnswerAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.btnRestore,"Right");

    var L_NoAnswerAboutThisStep6_Text = "íãßäß ÏÇÆãÇ ÇÓÊÚÇÏÉ ÇáÑÞã ÇáÃÕáí ÇáÐí ÍÇæá Windows ØáÈå ÈæÇÓØÉ ÇáäÞÑ ÝæÞ ÇáÒÑ 'ÇÓÊÚÇÏÉ'.";
    Agent_Speak(L_NoAnswerAboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_NoAnswerWhatIfWrongNumber()
{
    var L_NoAnswerWhatIfWrongNumber1_Text = "Åä ßÇä ÑÞã ÇáåÇÊÝ åäÇ ÛíÑ ÕÍíÍ¡ ÇäÞÑ ÝæÞ ãÑÈÚ ÇáäÕ.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber1_Text);

    var L_NoAnswerWhatIfWrongNumber2_Text = "íÌÈ Ãä íÙåÑ Ýí ÇáãÑÈÚ ÎØ ÚãæÏí æÇãÖ¡ ãÚÑæÝ ÈäÞØÉ ÇáÅÏÑÇÌ.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber2_Text);

    var L_NoAnswerWhatIfWrongNumber3_Text = "ãåãÇ ÊßÊÈ ÓíÊã ÅÏÎÇáå Ýí äÞØÉ ÇáÅÏÑÇÌ.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber3_Text);

    var L_NoAnswerWhatIfWrongNumber4_Text = "íãßäß ÊÍÑíß äÞØÉ ÇáÅÏÑÇÌ Ýí ãÑÈÚ ÇáäÕ ÈÇáÖÛØ Úáì ãÝÊÇÍí ÇáÃÓåã ÇáÃíãä Ãæ ÇáÃíÓÑ Úáì áæÍÉ ÇáãÝÇÊíÍ.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber4_Text);

    var L_NoAnswerWhatIfWrongNumber5_Text = "æíãßäß ÇÓÊÎÏÇã ãÝÊÇÍ Delete áÅÒÇáÉ ÇáÍÑæÝ ÈÚÏ äÞØÉ ÇáÅÏÑÇÌ.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber5_Text);

    var L_NoAnswerWhatIfWrongNumber6_Text = "Ãæ ÇÓÊÎÏÇã ãÝÊÇÍ Backspace áÅÒÇáÉ ÇáÍÑæÝ ÞÈá äÞØÉ ÇáÅÏÑÇÌ.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber6_Text);
}

function Agent_NoAnswerWhatToDoNext()
{    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
    
    var L_NoAnswerWhatToDoNext1_Text = "ÅÐÇ ÊÍÞÞÊ ãä ÑÞã ÇáåÇÊÝ åäÇ æÈÏÇ ÕÍíÍÇð¡ ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' áãÍÇæáÉ ÅÚÇÏÉ ÇáÇÊÕÇá.";
    Agent_Speak(L_NoAnswerWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_NoAnswerWhatToDoNext2_Text = "þþááãÊÇÈÚÉ¡ íÌÈ ÇÎÊíÇÑ ÅãÇ ÅÚÇÏÉ ÇáÇÊÕÇá Ãæ ÊÎØí ÊÓÌíá ÇáßãÈíæÊÑ Ýí åÐÇ ÇáæÞÊ.";
    Agent_Speak(L_NoAnswerWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}



function Agent_PulseAddCommands() 
{

    var L_PulseAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_PulseAddCommands2_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_PulseAboutThisStep", L_PulseAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_PulseWhatToDoNext", L_PulseAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_PulseAboutThisStep()
{
    var L_PulseAboutThisStep1_Text = "áã íÊãßä Windows ãä ÊÍÏíÏ ÅÐÇ ãÇ ßÇä ÇáåÇÊÝ íÓÊÎÏã ÇáØáÈ ÈÇáØäíä Ãã ÈÇáäÈÖ.";
    Agent_Speak(L_PulseAboutThisStep1_Text);

    var L_PulseAboutThisStep2_Text = "Windows ÈÍÇÌÉ Åáì ãÚÑÝÉ åÐÇ ÞÈá Ãä äÈÇÔÑ.";
    Agent_Speak(L_PulseAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseAboutThisStep3_Text = "ÊÍÏÏ Ýí åÐå ÇáÔÇÔÉ ÃÓáæÈ ÇáØáÈ áÎØ ÇáåÇÊÝ.";
    Agent_Speak(L_PulseAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PulseWhatToDoNext()
{
    var L_PulseWhatToDoNext1_Text = "ÇäÞÑ ÏÇÎá ÇáÏÇÆÑÉ ÇáÈíÖÇÁ Åáì íÓÇÑ ÃÓáæÈ ÇáØáÈ ÇáÐí íÓÊÎÏãå ÎØ ÇáåÇÊÝ.";
    Agent_Speak(L_PulseWhatToDoNext1_Text);
    
    Agent_GestureAtElement(g.tone,"Left");

    var L_PulseWhatToDoNext2_Text = "ÇäÞÑ åäÇ ÅÐÇ ßÇä ÇáåÇÊÝ íÓÊÎÏã ÇáØáÈ ÈÇáØäíä.";
    Agent_Speak(L_PulseWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseWhatToDoNext3_Text = "Ãæ åäÇ ÅÐÇ ßÇä íÓÊÎÏã ÇáØáÈ ÇáäÈÖí.";
    Agent_Speak(L_PulseWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_PulseWhatToDoNext4_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' áãÍÇæáÉ ÇáØáÈ ãÑÉ ÃÎÑì.";
    Agent_Speak(L_PulseWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_PulseWhatToDoNext5_Text = "Ãæ ÇäÞÑ ÝæÞ ÇáÒÑ 'ÊÎØí' ááãÊÇÈÚÉ ÈÏæä ÊÓÌíá ÌåÇÒ ÇáßãÈíæÊÑ.";
    Agent_Speak(L_PulseWhatToDoNext5_Text);
    
    Agent_Play("RestPose");
}





function Agent_TooBusyAddCommands() 
{
        var L_TooBusyAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
        var L_TooBusyAddCommands2_Text = "ãÇÐÇ áæ ßÇä ÑÞã ÇáåÇÊÝ ÛíÑ ÕÍíÍ¿";
        var L_TooBusyAddCommands3_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_AboutThisStep", L_TooBusyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatIfIncorrect", L_TooBusyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatToDoNext", L_TooBusyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_TooBusyCommand_AboutThisStep() 
{
    var L_TooBusyAboutThisStep1_Text = "ÑÞã ÇáåÇÊÝ ÇáÐí ÍÇæáäÇ ØáÈå ÅãÇ ÛíÑ ÕÍíÍ Ãæ ãÔÛæá.";
    Agent_Speak(L_TooBusyAboutThisStep1_Text);

    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyAboutThisStep2_Text = "ÊÍÞÞ áÊÑì ÅÐÇ ßÇä åÐÇ ÇáÑÞã ÕÍíÍÇð.";
    Agent_Speak(L_TooBusyAboutThisStep2_Text);
        
    Agent_Play("RestPose");

    var L_TooBusyAboutThisStep3_Text = "ÅÐÇ ßÇä íÈÏæ ÌíÏÇð¡ ÇäÊÙÑ ÈÖÚÉ ÏÞÇÆÞ¡";
    Agent_Speak(L_TooBusyAboutThisStep3_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyAboutThisStep4_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' áãÍÇæáÉ ÇáØáÈ ãÑÉ ÃÎÑì.";
    Agent_Speak(L_TooBusyAboutThisStep4_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatIfIncorrect() 
{        
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect1_Text = "Åä ßÇä ÑÞã ÇáåÇÊÝ ÇáãÚÑæÖ åäÇ ÛíÑ ÕÍíÍ¡";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("cb_altnumber"),"Left");
    
    var L_TooBusyPhoneNumberIncorrect2_Text = " ÇäÞÑ ÝæÞ ÎÇäÉ ÇáÇÎÊíÇÑ åÐå¡";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_altnumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect3_Text = "æÃÏÎá ÑÞãÇð ÈÏíáÇð åäÇ.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("cb_outsideline"),"Left");

    var L_TooBusyPhoneNumberIncorrect4_Text = "ÅÐÇ ßäÊ ÈÍÇÌÉ Åáì ØáÈ ÑÞã áßí ÊÍÕá Úáì ÑÞã ÎÇÑÌí¡ ÇäÞÑ ÝæÞ ÎÇäÉ ÇáÇÎÊíÇÑ åÐå¡";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect4_Text);

    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("edt_outsideline"),"Right");

    var L_TooBusyPhoneNumberIncorrect5_Text = "æÇßÊÈ ÇáÑÞã åäÇ.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect5_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect6_Text = "ÅÐÇ ßÇäÊ áÏíß ÎÏãÉ ÇäÊÙÇÑ ÇáãßÇáãÇÊ¡ ÝÞÏ ÊÊã ãÞÇØÚÉ ÇáãßÇáãÉ ÇáÕÇÏÑÉ ÈæÇÓØÉ ãßÇáãÉ æÇÑÏÉ.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect6_Text);

    var L_TooBusyPhoneNumberIncorrect7_Text = "íãßäß ÈÓåæáÉ ÅíÞÇÝ ÊÔÛíá ÎÏãÉ ÇäÊÙÇÑ ÇáãßÇáãÇÊ ÃËäÇÁ ÅÌÑÇÁ åÐÇ ÇáÇÊÕÇá.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect7_Text);
        
    Agent_GestureAtElement(g.document.all("cb_callwaiting"),"Left");

    var L_TooBusyPhoneNumberIncorrect8_Text = "ÝÞØ ÇäÞÑ ÝæÞ ÎÇäÉ ÇáÇÎÊíÇÑ åÐå¡";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect8_Text);

    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_callwaiting"),"Right");

    var L_TooBusyPhoneNumberIncorrect9_Text = "æÇßÊÈ ÇáÑãÒ åäÇ.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect9_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect10_Text = "ÓÊÚæÏ ãíÒÉ ÇäÊÙÇÑ ÇáãßÇáãÇÊ Åáì ÇáÚãá ÈÚÏ ÅÊãÇã åÐå ÇáãßÇáãÉ.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect10_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyPhoneNumberIncorrect11_Text = "ÊÐßÑ Ãä ÊäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' ÚäÏãÇ Êßæä ÌÇåÒÇð ááãÍÇæáÉ ãä ÌÏíÏ.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect11_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatToDoNext() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyWhatToDoNext1_Text = "ÅÐÇ ÊÍÞÞÊ ãä ÑÞã ÇáåÇÊÝ åäÇ æÈÏÇ ÕÍíÍÇð¡";
    Agent_Speak(L_TooBusyWhatToDoNext1_Text);
        
    Agent_Play("RestPose");

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
    
     var L_TooBusyWhatToDoNext2_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' áãÍÇæáÉ ÅÚÇÏÉ ÇáÇÊÕÇá.";
    Agent_Speak(L_TooBusyWhatToDoNext2_Text);
        
    Agent_Play("RestPose");

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_TooBusyWhatToDoNext3_Text = "Ãæ ÇäÞÑ ÝæÞ ÇáÒÑ ÊÎØí áÊÌÇæÒ åÐå ÇáÎØæÉ. íãßäß ÏæãÇ ÇáÊÓÌíá ÈÚÏ ÅäåÇÁ ÅÚÏÇÏ Windows.";
    Agent_Speak(L_TooBusyWhatToDoNext3_Text);
        
    Agent_Play("RestPose");
}



function Agent_ISPDToneAddCommands() 
{
    var L_ISPDToneAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_ISPDToneAddCommands2_Text = "ãÇ&ÐÇ ÅÐÇ ßäÊ ÈÍÇÌÉ Åáì äÞá ÇáßãÈíæÊÑ";
    var L_ISPDToneAddCommands3_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß";

    g_AgentCharacter.Commands.Add("Agent_ISPDToneAboutThisStep", L_ISPDToneAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDToneHowToMove", L_ISPDToneAddCommands2_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDToneWhatToDoNext", L_ISPDToneAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPDToneAboutThisStep()
{
    var L_ISPDToneAboutThisStep1_Text = "þþÊÚÐÑ Úáì Windows ÇáßÔÝ Úä Øäíä ÇáØáÈ.";
    Agent_Speak(L_ISPDToneAboutThisStep1_Text);

    var L_ISPDToneAboutThisStep2_Text = "ÞÏ íßæä åäÇß ÃÓÈÇÈ ÚÏíÏÉ áåÐÇ.";
    Agent_Speak(L_ISPDToneAboutThisStep2_Text);

    var L_ISPDToneAboutThisStep3_Text = "ÃæáÇð¡ ÊÍÞÞ ááÊÃßÏ ãä æÕá ßÇÈá ÇáåÇÊÝ ááßãÈíæÊÑ ãä ØÑÝíÉ ÈÔßá ÕÍíÍ.";
    Agent_Speak(L_ISPDToneAboutThisStep3_Text);

    var L_ISPDToneAboutThisStep4_Text = "ËÇäíÇð¡ ÊÃßÏ ãä ÚÏã æÌæÏ ÃÍÏ íÍÇæá ÇÓÊÎÏÇã ÎØ ÇáåÇÊÝ áÏíß Ýí åÐå ÇááÍÙÉ.";
    Agent_Speak(L_ISPDToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneAboutThisStep5_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' áãÍÇæáÉ ÇáØáÈ ãÑÉ ÃÎÑì.";
    Agent_Speak(L_ISPDToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPDToneHowToMove()
{
    var L_ISPDToneHowToMove1_Text = "ÅÐÇ ßÇä Úáíß äÞá ÇáßãÈíæÊÑ áæÕáå ÈÎØ ÇáåÇÊÝ¡ ÝÊÃßÏ ãä Ãä ÇáØÇÞÉ ãÝÕæáÉ.";
    Agent_Speak(L_ISPDToneHowToMove1_Text);

    var L_ISPDToneHowToMove2_Text = "ÚäÏ ÅÚÇÏÉ ÊÔÛíá ÇáßãÈíæÊÑ¡ ÓíÞæã Windows ÈÇÓÊÆäÇÝ åÐå ÇáÚãáíÉ ãä ÍíË ÇäÊåíÊ.";
    Agent_Speak(L_ISPDToneHowToMove2_Text);
}

function Agent_ISPDToneWhatToDoNext()
{
    var L_ISPDToneWhatToDoNext1_Text = "ÊÍÞÞ ÃæáÇð ãä ÇÊÕÇá ÇáßãÈíæÊÑ ÈÎØ ÇáåÇÊÝ.";
    Agent_Speak(L_ISPDToneWhatToDoNext1_Text);

    var L_ISPDToneWhatToDoNext2_Text = "Ëã¡ ÊÍÞÞ ááÊÃßÏ ãä ÚÏã ÇÓÊÎÏÇã ÎØ ÇáåÇÊÝ ãÓÈÞÇð.";
    Agent_Speak(L_ISPDToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneWhatToDoNext3_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' áãÍÇæáÉ ÇáØáÈ ãÑÉ ÃÎÑì.";
    Agent_Speak(L_ISPDToneWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_ISPCnErrAddCommands() {

        var L_ISPCnErrAddCommands1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_ISPCnErrAddCommands2_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÅíÞÇÝ &ÊÔÛíá ÎÏãÉ ÇäÊÙÇÑ ãßÇáãÉ";
        var L_ISPCnErrAddCommands3_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_ISPCnErrAddCommands4_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        g_AgentCharacter.Commands.Add("Agent_ISPCnErrCommand_WhatToDoNext", L_ISPCnErrAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPCnErrCommand_HowToTurnOffCallWaiting", L_ISPCnErrAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPCnErrCommand_AboutThisScreen", L_ISPCnErrAddCommands3_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPCnErrCommand_HowToMoveOn", L_ISPCnErrAddCommands4_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPCnErrIntro() {

}

function Agent_ISPCnErrCommand_AboutThisScreen() 
{
        var L_ISPCnErrIntro1_Text = "ÊãÊ ãÞÇØÚÉ ÇÊÕÇá ÇáåÇÊÝ ÇáÐí Êã ÅÌÑÇÆå áÅÚÏÇÏ ÎÏãÉ ÅäÊÑäÊ áÏíß.";
        Agent_Speak(L_ISPCnErrIntro1_Text);

        Agent_MoveToElement(g.document.all("txtBullet1"),"Left");
        
        var L_ISPCnErrIntro2_Text = "ÞÏ íßæä åäÇß ÃÓÈÇÈ ÚÏíÏÉ áåÐÇ.";
        Agent_Speak(L_ISPCnErrIntro2_Text);

        var L_ISPCnErrIntro3_Text = "ÃæáÇð¡ ÑÈãÇ áã ÊÓÊÎÏã ÇáÇÊÕÇá áãÏÉ ØæíáÉ ãä ÇáæÞÊ æÞÏ Êã ÞØÚ ÇÊÕÇáß ÊáÞÇÆíÇð.";
        Agent_Speak(L_ISPCnErrIntro3_Text);

        var L_ISPCnErrIntro4_Text = "ËÇäíÇð¡ ÞÏ íßæä åäÇß ÔÎÕ ãÇ ÍÇæá ÇÓÊÎÏÇã ÎØ ÇáåÇÊÝ ÈíäãÇ ÃäÊ ãÊÕá.";
        Agent_Speak(L_ISPCnErrIntro4_Text);

        var L_ISPCnErrIntro5_Text = "ËÇáËÇð¡ ÞÏ ÊÊã ãÞÇØÚÊß ãä ÞÈá ãßÇáãÉ æÇÑÏÉ¡ Åä ßÇä áÏíß ÎÏãÉ ÇäÊÙÇÑ ãßÇáãÉ.";
        Agent_Speak(L_ISPCnErrIntro5_Text);

        Agent_GestureAtElement(g.document.all("Callwait"),"Left");

        var L_ISPCnErrIntro6_Text = "Åä ßÇäÊ ÎÏãÉ ÇáåÇÊÝ áÏíß ÊÊÖãä ÇäÊÙÇÑ ãßÇáãÉ æÃäÊ ÊÚÑÝ ÇáÑÞã áÅíÞÇÝ ÊÔÛíáå¡ Þã ÈÅÏÎÇáå åäÇ.";
        Agent_Speak(L_ISPCnErrIntro6_Text);
    
    Agent_Play("RestPose");

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrIntro7_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' áãÍÇæáÉ ÅÚÇÏÉ ÇáÇÊÕÇá ãÑÉ ÃÎÑì.";
        Agent_Speak(L_ISPCnErrIntro7_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("txtBullet1"),"Left");

        var L_ISPCnErrWhatToDoNext1_Text = "ÅÐÇ ÞãÊ ÈÍá ßÇÝÉ åÐå ÇáÃÓÈÇÈ ÇáãÍÊãáÉ¡";
        Agent_Speak(L_ISPCnErrWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPCnErrWhatToDoNext2_Text = "æÊÑíÏ ãÍÇæáÉ ÅÚÇÏÉ ÇáÇÊÕÇá¡";
        Agent_Speak(L_ISPCnErrWhatToDoNext2_Text);

        var L_ISPCnErrWhatToDoNext3_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' ááãÍÇæáÉ ãÑÉ ÃÎÑì.";
        Agent_Speak(L_ISPCnErrWhatToDoNext3_Text);
}

function Agent_ISPCnErrCommand_HowToTurnOffCallWaiting() 
{
        Agent_GestureAtElement(g.document.all("Callwait"),"Left");
        
        var L_ISPCnErrHowToTurnOffCallWaiting1_Text = "Åä ßäÊ ÊÑíÏ ÅíÞÇÝ ÊÔÛíá ÎÏãÉ ÇäÊÙÇÑ ãßÇáãÉ ááåÇÊÝ¡ ÃËäÇÁ ÅÌÑÇÁ åÐÇ ÇáÇÊÕÇá¡";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting1_Text);

        var L_ISPCnErrHowToTurnOffCallWaiting2_Text = "ÃÏÎá ÇáÑÞã åäÇ.";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting2_Text);
    
    Agent_Play("RestPose");

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrHowToTurnOffCallWaiting3_Text = "Ëã¡ ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ'.";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_HowToMoveOn() 
{
        var L_ISPCnErrHowToMoveOn1_Text = "ááãÊÇÈÚÉ¡ íÌÈ ÇÎÊíÇÑ ÅÚÇÏÉ ÇáÇÊÕÇá Ãæ ÊÎØí åÐå ÇáÎØæÉ.";
        Agent_Speak(L_ISPCnErrHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrHowToMoveOn2_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' áãÍÇæáÉ ÅÚÇÏÉ ÇáÇÊÕÇá¡";
        Agent_Speak(L_ISPCnErrHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPCnErrHowToMoveOn3_Text = "Ãæ ÇäÞÑ ÝæÞ ÒÑ 'ÊÎØí' ááãÊÇÈÚÉ ÈÏæä ÅÚÇÏÉ ÇáãÍÇæáÉ.";
        Agent_Speak(L_ISPCnErrHowToMoveOn3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnISPCnErrGotFocus(elem) {

        Agent_StopAll();

        var dir = "Left";

        Agent_MoveToElement(elem, dir, 0);

        Agent_StartLookingAtElement(elem, "Look" + dir);

}

function Agent_OnISPCnErrKeyDown(elem, keyCode) {

	switch (elem.id) {
		case "Callwait":

			

			if (keyCode == 9) {

                
                
                
                

                return;
			}

			if (!Agent_IsLooking()) {

                Agent_StopAll();

                Agent_MoveToElement(elem, "Left", 0);
                Agent_StartLookingAtElement(elem, "LookLeft");
			}
			
			else {

                

                Agent_KeepLooking();
			}
			
			break;
		
		default:
			return;
			
	}

}



function Agent_ISPHandShakeAddCommands() {

        var L_ISPHandShakeAddCommands1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_ISPHandShakeAddCommands2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_ISPHandShakeAddCommands3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_WhatToDoNext", L_ISPHandShakeAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_AboutThisScreen", L_ISPHandShakeAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_HowToMoveOn", L_ISPHandShakeAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPHandShakeIntro() {

}

function Agent_ISPHandShakeCommand_AboutThisScreen() 
{
        var L_ISPHandShakeIntro1_Text = "íÊæÝÑ ÍÇáíÇð ÎÏãÇÊ ÍÓÇÈ ÌÏíÏÉ áãæÝÑ ÎÏãÉ ÇäÊÑäÊ ÇáÐí ÍÏÏÊå.";
        Agent_Speak(L_ISPHandShakeIntro1_Text);

        var L_ISPHandShakeIntro2_Text = "ÛíÑ ãÊÃßÏ ãä ÇáÓÈÈ.";
        Agent_Speak(L_ISPHandShakeIntro2_Text);

        var L_ISPHandShakeIntro3_Text = "æáßä íãßäß ãÍÇæáÉ ÇáÇäÊÙÇÑ áÈÖÚ ÏÞÇÆÞ Ëã ÅÚÇÏÉ ÇáØáÈ.";
        Agent_Speak(L_ISPHandShakeIntro3_Text);

        Agent_Play("RestPose");
        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }
        
        var L_ISPHandShakeIntro4_Text = "Ãæ ÊÎØí ÅÚÏÇÏ ÎÏãÉ ÅäÊÑäÊ ÇáÂä.";
        Agent_Speak(L_ISPHandShakeIntro4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPHandShakeCommand_WhatToDoNext() 
{
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPHandShakeWhatToDoNext1_Text = "ÇäÊÙÑ ÈÖÚ ÏÞÇÆÞ¡ Ëã ÇäÞÑ ÝæÞ ÇáÒÑ 'ÅÚÇÏÉ ÇáÇÊÕÇá'.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeWhatToDoNext2_Text = "ÅÐÇ ßäÊ ÍÇæáÊ ÇáÞíÇã ÈåÐÇ ãÑÊíä¡";
        Agent_Speak(L_ISPHandShakeWhatToDoNext2_Text);
        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeWhatToDoNext3_Text = "íãßäß ÇáäÞÑ ÝæÞ ÇáÒÑ 'ÊÎØí' ááãÊÇÈÚÉ ÈÏæä ÅÚÏÇÏ ÎÏãÉ ÅäÊÑäÊ ÇáÂä.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPHandShakeCommand_HowToMoveOn() 
{
        var L_ISPHandShakeHowToMoveOn1_Text = "ÇäÊÙÑ ÈÖÚ ÏÞÇÆÞ¡";
        Agent_Speak(L_ISPHandShakeHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPHandShakeHowToMoveOn2_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' ááãÍÇæáÉ ãÑÉ ÃÎÑì.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeHowToMoveOn3_Text = "Ãæ ÅÐÇ ßäÊ ÍÇæáÊ ÇáÞíÇã ÈåÐÇ ãÓÈÞÇð¡";
        Agent_Speak(L_ISPHandShakeHowToMoveOn3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeHowToMoveOn4_Text = "íãßäß ÇáãÊÇÈÚÉ ÈÏæä ÅÚÏÇÏ ÎÏãÉ ÅäÊÑäÊ Úä ØÑíÞ ÇáäÞÑ ÝæÞ ÇáÒÑ 'ÊÎØí'.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn4_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPInsAddCommands() {

        var L_ISPInsAddCommands1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_ISPInsAddCommands2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_ISPInsAddCommands3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_WhatToDoNext", L_ISPInsAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_AboutThisScreen", L_ISPInsAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_HowToMoveOn", L_ISPInsAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPInsIntro() {

}

function Agent_ISPInsCommand_AboutThisScreen() 
{
        var L_ISPInsIntro1_Text = "ÚÐÑÇð¡ áã íÊãßä Windows ãä ÇáÇÊÕÇá ÈÅäÊÑäÊ ãä ÎáÇá ãæÝÑ ÇáÎÏãÉ ÇáÐí ÍÏÏÊå.";
        Agent_Speak(L_ISPInsIntro1_Text);

        var L_ISPInsIntro2_Text = "ÅÐÇ æÇÌåÊ ãÔßáÉ ÃËäÇÁ ÇáÇÊÕÇá ÈÅäÊÑäÊ Ýí ãÓÊÚÑÖ æíÈ Ãæ ÅÑÓÇá æÊáÞí ÇáÈÑíÏ ÇáÅáßÊÑæäí¡";
        Agent_Speak(L_ISPInsIntro2_Text);

        var L_ISPInsIntro3_Text = "ÇÊÕá ÈÇáÏÚã ÇáÝäí áãæÝÑ ÇáÎÏãÉ ááãÓÇÚÏÉ.";
        Agent_Speak(L_ISPInsIntro3_Text);
}

function Agent_ISPInsCommand_WhatToDoNext() 
{
        var L_ISPInsWhatToDoNext1_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááãÊÇÈÚÉ.";
        Agent_Speak(L_ISPInsWhatToDoNext1_Text);
}

function Agent_ISPInsCommand_HowToMoveOn() 
{
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPInsHowToMoveOn1_Text = "ÝÞØ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí'.";
        Agent_Speak(L_ISPInsHowToMoveOn1_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPNoAnwAddCommands() {

        var L_ISPNoAnwAddCommands1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_ISPNoAnwAddCommands2_Text = "ÃÎÈÑäí ÚãÇ íÌÈ Úãáå ÅÐÇ ßÇä ÑÞã ÇáåÇÊ&Ý ÛíÑ ÕÍíÍ";
        var L_ISPNoAnwAddCommands3_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_ISPNoAnwAddCommands4_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoNext", L_ISPNoAnwAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect", L_ISPNoAnwAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_AboutThisScreen", L_ISPNoAnwAddCommands3_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_HowToMoveOn", L_ISPNoAnwAddCommands4_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPNoAnwCommand_AboutThisScreen() 
{
        var L_ISPNoAnwIntro1_Text = "þþáã íÓÊÌÈ ÑÞã ÇáåÇÊÝ ÇáÐí ÍÇæáäÇ ØáÈå.";
        Agent_Speak(L_ISPNoAnwIntro1_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro2_Text = "ÊÃßÏ ãä ÇáÑÞã áÊÑì ÅÐÇ ßÇä ÕÍíÍÇð.";
        Agent_Speak(L_ISPNoAnwIntro2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwIntro3_Text = "ÅÐÇ ßÇä íÈÏæ ÌíÏÇð¡ ÇäÊÙÑ ÈÖÚÉ ÏÞÇÆÞ¡";
        Agent_Speak(L_ISPNoAnwIntro3_Text);

        var L_ISPNoAnwIntro4_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' ááãÍÇæáÉ ãÑÉ ÃÎÑì.";
        Agent_Speak(L_ISPNoAnwIntro4_Text);

        var L_ISPNoAnwIntro5_Text = "æãÚ Ðáß¡ ÅÐÇ ßÇä ÇáÑÞã ÛíÑ ÕÍíÍ¡";
        Agent_Speak(L_ISPNoAnwIntro5_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro6_Text = "ÇäÞÑ åäÇ æÞã ÈÊÍÑíÑå.";
        Agent_Speak(L_ISPNoAnwIntro6_Text);

        Agent_Play("RestPose");

        var L_ISPNoAnwIntro7_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ'.";
        Agent_Speak(L_ISPNoAnwIntro7_Text);
}

function Agent_ISPNoAnwCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwWhatToDoNext1_Text = "ÅÐÇ ÊÍÞÞÊ ãä ÑÞã ÇáåÇÊÝ åäÇ æÈÏÇ ÕÍíÍÇð¡";
        Agent_Speak(L_ISPNoAnwWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwWhatToDoNext2_Text = "æÃäÊ ÌÇåÒ áãÍÇæáÉ ÅÚÇÏÉ ÇáÇÊÕÇá¡";
        Agent_Speak(L_ISPNoAnwWhatToDoNext2_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwWhatToDoNext3_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ'.";
        Agent_Speak(L_ISPNoAnwWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwPhoneNumberIncorrect1_Text = "Åä ßÇä ÑÞã ÇáåÇÊÝ åäÇ ÛíÑ ÕÍíÍ¡";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect1_Text);

        var L_ISPNoAnwPhoneNumberIncorrect2_Text = "ÇäÞÑ ÝæÞ ãÑÈÚ ÇáäÕ.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwPhoneNumberIncorrect3_Text = "íÌÈ Ãä íÙåÑ Ýí ÇáãÑÈÚ ÎØ ÚãæÏí æÇãÖ¡ ãÚÑæÝ ÈäÞØÉ ÇáÅÏÑÇÌ.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect3_Text);

        var L_ISPNoAnwPhoneNumberIncorrect4_Text = "ãåãÇ ÊßÊÈ ÓíÊã ÅÏÎÇáå Ýí äÞØÉ ÇáÅÏÑÇÌ.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect4_Text);

        var L_ISPNoAnwPhoneNumberIncorrect5_Text = "íãßäß ÊÍÑíß äÞØÉ ÇáÅÏÑÇÌ Åáì ãÑÈÚ ÇáäÕ æÐáß ÈÇáÖÛØ Úáì ãÝÊÇÍí ÇáÃÓåã ÇáÃíÓÑ Ãæ ÇáÃíãä Úáì áæÍÉ ÇáãÝÇÊíÍ.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect5_Text);

        var L_ISPNoAnwPhoneNumberIncorrect6_Text = "æíãßäß ÇÓÊÎÏÇã ãÝÊÇÍ Delete áÅÒÇáÉ ÇáÍÑæÝ ÈÚÏ äÞØÉ ÇáÅÏÑÇÌ.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect6_Text);

        var L_ISPNoAnwPhoneNumberIncorrect7_Text = "Ãæ ÇÓÊÎÏÇã ãÝÊÇÍ Backspace áÅÒÇáÉ ÇáÍÑæÝ ÞÈá äÞØÉ ÇáÅÏÑÇÌ.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect7_Text);
}

function Agent_ISPNoAnwCommand_HowToMoveOn() 
{
        var L_ISPNoAnwHowToMoveOn1_Text = "ááãÊÇÈÚÉ¡ íÌÈ ÇÎÊíÇÑ ÅãÇ ÅÚÇÏÉ ÇáÇÊÕÇá Ãæ ÊÎØí ÅÚÏÇÏ ÎÏãÉ ÅäÊÑäÊ áÏíß.";
        Agent_Speak(L_ISPNoAnwHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwHowToMoveOn2_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' áãÍÇæáÉ ÅÚÇÏÉ ÇáÇÊÕÇá.";
        Agent_Speak(L_ISPNoAnwHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPNoAnwHowToMoveOn3_Text = "Ãæ ÇäÞÑ ÝæÞ ÒÑ 'ÊÎØí' ááãÊÇÈÚÉ ÈÏæä ÅÚÏÇÏ ÎÏãÉ ÅäÊÑäÊ.";
        Agent_Speak(L_ISPNoAnwHowToMoveOn3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnISPNoAnwGotFocus(elem) {

        Agent_StopAll();

        var dir = "Left";

        Agent_MoveToElement(elem, dir, 0);

        Agent_StartLookingAtElement(elem, "Look" + dir);

}

function Agent_OnISPNoAnwKeyDown(elem, keyCode) {

	switch (elem.id) {
		case "edtPhoneNumber":

	        

		    if (keyCode == 9) {

                
                
                
                

                return;
			}

			if (!Agent_IsLooking()) {

                Agent_StopAll();

                Agent_MoveToElement(elem, "Left", 0);
                Agent_StartLookingAtElement(elem, "LookLeft");
			}
			
			else {

                

                Agent_KeepLooking();
			}

			break;
			
		default:
			return;
			
	}
}



function Agent_ISPPhBsyAddCommands() {

        var L_ISPPhBsyAddCommands1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_ISPPhBsyAddCommands2_Text = "ÃÎÈÑäí ÚãÇ íÌÈ Úãáå ÅÐÇ ßÇä ÑÞã ÇáåÇÊ&Ý ÛíÑ ÕÍíÍ";
        var L_ISPPhBsyAddCommands3_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";

        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoNext", L_ISPPhBsyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect", L_ISPPhBsyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_AboutThisScreen", L_ISPPhBsyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPPhBsyIntro() {

}

function Agent_ISPPhBsyCommand_AboutThisScreen() 
{
        var L_ISPPhBsyIntro1_Text = "þþÊÚÐÑ Windows Ýí ÇáÇÊÕÇá ÈãæÝÑ ÎÏãÉ ÅäÊÑäÊ ÇáãÍÏÏ.";
        Agent_Speak(L_ISPPhBsyIntro1_Text);

        var L_ISPPhBsyIntro2_Text ="þþÞÏ íßæä ÎØ ÇáåÇÊÝ ãÔÛæáÇð¡ Ãæ ÞÏ íæÇÌå ãæÝÑ ÎÏãÉ ÅäÊÑäÊ ãÔÇßá ÝäíÉ.";
        Agent_Speak(L_ISPPhBsyIntro2_Text);

        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyIntro3_Text = "ÊÃßÏ ãä ÇáÑÞã áÊÑì ÅÐÇ ßÇä ÕÍíÍÇð.";
        Agent_Speak(L_ISPPhBsyIntro3_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro4_Text = "ÅÐÇ ßÇä íÈÏæ ÌíÏÇð¡ ÇäÊÙÑ ÈÖÚÉ ÏÞÇÆÞ¡";
        Agent_Speak(L_ISPPhBsyIntro4_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPPhBsyIntro5_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' áãÍÇæáÉ ÇáØáÈ ãÑÉ ÃÎÑì.";
        Agent_Speak(L_ISPPhBsyIntro5_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro6_Text = "æãÚ Ðáß¡ ÅÐÇ ßÇä ÇáÑÞã ÛíÑ ÕÍíÍ¡";
        Agent_Speak(L_ISPPhBsyIntro6_Text);

        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyIntro7_Text = "ÝÇäÞÑ åäÇ áãÍÇæáÉ ÑÞã ÈÏíá Ýí ÏÝÊÑ ÇáåÇÊÝ.";
        Agent_Speak(L_ISPPhBsyIntro7_Text);

        Agent_Play("RestPose");

        var L_ISPPhBsyIntro8_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ'.";
        Agent_Speak(L_ISPPhBsyIntro8_Text);
}

function Agent_ISPPhBsyCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyWhatToDoNext1_Text = "Åä ÊÍÞÞÊ ãä ÑÞã ÇáåÇÊÝ æÈÏÇ ÓáíãÇð¡";
        Agent_Speak(L_ISPPhBsyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");    
    
        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyWhatToDoNext2_Text = "Ãæ Ãäß ÞÏ ÇÎÊÑÊ ØáÈ ÑÞã ÈÏíá¡";
        Agent_Speak(L_ISPPhBsyWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPPhBsyWhatToDoNext4_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' áãÍÇæáÉ ÅÚÇÏÉ ÇáÇÊÕÇá.";
        Agent_Speak(L_ISPPhBsyWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_ISPPhBsyPhoneNumberIncorrect1_Text = "Åä ßÇä ÑÞã ÇáåÇÊÝ åäÇ ÛíÑ ÕÍíÍ¡";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

    var L_ISPPhBsyPhoneNumberIncorrect2_Text = "ÇäÞÑ ÝæÞ ÒÑ ÇáÎíÇÑ ááãÍÇæáÉ ÈÑÞã ÈÏíá Ýí ÏÝÊÑ ÇáåÇÊÝ.";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPPhBsyPhoneNumberIncorrect3_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÅÚÇÏÉ ÇáØáÈ' ÚäÏãÇ Êßæä ÌÇåÒÇð áãÍÇæáÉ ÅÚÇÏÉ ÇáÇÊÕÇá.";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnISPPhBsyGotFocus(elem) {

        Agent_StopAll();

        var dir = "Left";

        Agent_MoveToElement(elem, dir, 0);

        Agent_StartLookingAtElement(elem, "Look" + dir);

}

function Agent_OnISPPhBsyKeyDown(elem, keyCode) {

	switch (elem.id) {
		case "edtPhoneNumber":

        

	        if (keyCode == 9) {

                
                
                
                

                return;
		    }

			if (!Agent_IsLooking()) {

                Agent_StopAll();

                Agent_MoveToElement(elem, "Left", 0);
                Agent_StartLookingAtElement(elem, "LookLeft");
			}

			else {

                

                Agent_KeepLooking();
			}
			
			break;
			
		default:
			return;
	
	}
	
}



function Agent_FinishAddCommands() {

    var L_FinishAddCommands1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";  
    var L_FinishAddCommands2_Text = "ßí&Ý ÃÞæã ÈÇáÊÓÌíá ãä ÓØÍ ÇáãßÊÈ¿";    
    var L_FinishAddCommands3_Text = "ßíÝ Ã&Þæã ÈÊäÔíØ Windows ãä ÓØÍ ÇáãßÊÈ¿";    
    var L_FinishAddCommands4_Text = "ßíÝ Ã&Õá Åáì ÇáÅäÊÑäÊ¿";    
    var L_FinishAddCommands5_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";

    g_AgentCharacter.Commands.Add("Agent_FinishAboutThisStep", L_FinishAddCommands1_Text);
    
    if (!g_IsMSRegistrationSuccessful)
    {
        g_AgentCharacter.Commands.Add("Agent_FinishHowToRegister", L_FinishAddCommands2_Text);
    }
    
    if (!g_IsActivationSuccessful)
    {
        g_AgentCharacter.Commands.Add("Agent_FinishHowToActivate", L_FinishAddCommands3_Text);
    }
        
    if (!(bHasSignup || ConnectedToInternetEx(false)))
    {
        g_AgentCharacter.Commands.Add("Agent_FinishHowToAccessInternet", L_FinishAddCommands4_Text);
    }
    
    g_AgentCharacter.Commands.Add("Agent_FinishWhatToDoNext", L_FinishAddCommands5_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_FinishAboutThisStep() 
{
    var L_FinishAboutThisStep1_Text = "þþÊåÇäíäÇ! Êã ÅßãÇá åÐå ÇáÚãáíÉ!";
    Agent_Speak(L_FinishAboutThisStep1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishAboutThisStep2_Text = "áÈÏÁ ÇÓÊÎÏÇã Windows ÇáÂä¡ ÇäÞÑ ÝæÞ ÇáÒÑ 'ÅäåÇÁ'.";
    Agent_Speak(L_FinishAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_FinishAboutThisStep3_Text = "ãä ÃÌá ÌæáÉ Íæá ÇáãíÒÇÊ ÇáåÇãÉ æÇáÌÏíÏÉ Ýí Windows XP¡ ÇäÞÑ ÝæÞ ÇáÊÚáíãÇÊ æÇáÏÚã Ýí ÇáÞÇÆãÉ ÇÈÏÃ¡ Ëã ÇßÊÈ \"ÌæáÉ\" Ýí ÇáãÑÈÚ ÈÍË.";
    Agent_Speak(L_FinishAboutThisStep3_Text);
}

function Agent_FinishHowToRegister() 
{
    var L_FinishHowToRegister1_Text = "ÅÐÇ ÊÎØíÊ ÇáÊÓÌíá ÇáÐí íÓÈÞ åÐå ÇáÚãáíÉ¡ íãßäß ÊÓÌíá äÓÎÊß ãä Windows Ýí Ãí æÞÊ ÈæÇÓØÉ ÇáäÞÑ ÝæÞ ÇáÊÔÛíá Ýí ÞÇÆãÉ ÇÈÏÇ æßÊÇÈÉ regwiz /r.";
    Agent_Speak(L_FinishHowToRegister1_Text);
        
    var L_FinishHowToRegister2_Text = "ÅÐÇ äÓíÊ åÐå ÇáÎØæÇÊ¡ ÇäÞÑ ÝæÞ ÇáÊÚáíãÇÊ æÇáÏÚã Úáì ÇáÞÇÆãÉ ÇÈÏÃ ááÍÕæá Úáì ÇáÃÌæÈÉ áÃÓÆáÊß æãÒíÏ ãä ÇáãÚáæãÇÊ ÇáãÝíÏÉ.";
    Agent_Speak(L_FinishHowToRegister2_Text);
}

function Agent_FinishHowToActivate() 
{
    var L_FinishHowToActivate1_Text = "ÅÐÇ ÊÎØíÊ ÇáÊäÔíØ ÓÇÈÞÇð Ýí åÐå ÇáÚãáíÉ¡ ÓíÙåÑ ÊÐßíÑ ÕÛíÑ Úáì ÓØÍ ãßÊÈ Windows ßá ÚÏÉ ÃíÇã.";
    Agent_Speak(L_FinishHowToActivate1_Text);
        
    var L_FinishHowToActivate2_Text = "íÌÈ Úáíß ÊäÔíØ Windows Öãä ÝÊÑÉ ÇáÊäÔíØ ÇáãÍÏÏÉ áßí ÊÊÇÈÚ ÇÓÊÎÏÇãå.";
    Agent_Speak(L_FinishHowToActivate2_Text);

    var L_FinishHowToActivate3_Text = "ÅÐÇ ßäÊ áÇ ÊÑíÏ ÇäÊÙÇÑ ÇáÊÐßíÑ¡ íãßäß ÊÔÛíá ãÚÇáÌ ÊäÔíØ ÇáãäÊÌ ÈæÇÓØÉ ÇáäÞÑ ÝæÞ 'ÊäÔíØ Windows' Ýí ÇáÞÇÆãÉ ÇÈÏÃ.";
    Agent_Speak(L_FinishHowToActivate3_Text);

    var L_FinishHowToActivate4_Text = "ÅÐÇ äÓíÊ åÐå ÇáÎØæÇÊ¡ ÇäÞÑ ÝæÞ ÇáÊÚáíãÇÊ æÇáÏÚã Úáì ÇáÞÇÆãÉ ÇÈÏÃ ááÍÕæá Úáì ÇáÃÌæÈÉ áÃÓÆáÊß æãÒíÏ ãä ÇáãÚáæãÇÊ ÇáãÝíÏÉ.";
    Agent_Speak(L_FinishHowToActivate4_Text);
}

function Agent_FinishHowToAccessInternet() 
{
    var L_FinishHowToAccessInternet1_Text = "ÅÐÇ ÞãÊ ÓÇÈÞÇð ÈÅÚÏÇÏ ÇáßãÈíæÊÑ ááæÕæá Åáì ÅäÊÑäÊ¡ ÈÈÓÇØÉ ÇäÞÑ ÝæÞ ÅäÊÑäÊ Ýí ÃÚáì ÞÇÆãÉ ÃÈÏÃ Úáì ÓØÍ ãßÊÈ Windows.";
    Agent_Speak(L_FinishHowToAccessInternet1_Text);
        
    var L_FinishHowToAccessInternet2_Text = "ÅÐÇ áã íÊã ÅÚÏÇÏ åÐÇ ÇáßãÈíæÊÑ ááæÕæá Åáì ÅäÊÑäÊ¡ ÓíÙåÑ ãÚÇáÌ ÇÊÕÇá ÅäÊÑäÊ.";
    Agent_Speak(L_FinishHowToAccessInternet2_Text);

    var L_FinishHowToAccessInternet3_Text = "ÇÊÈÚ ÇáÎØæÇÊ Ýí åÐÇ ÇáãÚÇáÌ ááÇÊÕÇá ÈÅäÊÑäÊ.";
    Agent_Speak(L_FinishHowToAccessInternet3_Text);
}

function Agent_FinishWhatToDoNext() 
{
    var L_FinishWhatToDoNext1_Text = "áÞÏ ÇäÊåíÊ ãä ÅÚÏÇÏ ÇáßãÈíæÊÑ ãÚ Microsoft Windows XP!";
    Agent_Speak(L_FinishWhatToDoNext1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishWhatToDoNext2_Text = "ÝÞØ ÇäÞÑ ÝæÞ ÒÑ 'ÅäåÇÁ'.";
    Agent_Speak(L_FinishWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_FinishWhatToDoNext3_Text = "ááÞíÇã ÈÌæáÉ Íæá ÇáãíÒÇÊ ÇáÌÏíÏÉ¡ æÇáãËíÑÉ Ýí Windows XP¡ ÇäÞÑ ÝæÞ ÇáÊÚáíãÇÊ æÇáÏÚã Úáì ÇáÞÇÆãÉ ÇÈÏÃ¡ æËã ÇßÊÈ \"ÌæáÉ\" Ýí ÇáãÑÈÚ ÈÍË.";
    Agent_Speak(L_FinishWhatToDoNext3_Text);

    var L_FinishWhatToDoNext4_Text = "Ëã ÊãÊÚ ÈÇÓÊÎÏÇã Windows Windows XP!";
    Agent_Speak(L_FinishWhatToDoNext4_Text);
}






function Agent_MouseTutAddCommands() {

        var L_MouseTutMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_MouseTutMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_MouseTutMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutTellMeWhatToDoNext", L_MouseTutMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutTellMeAboutThisScreen", L_MouseTutMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutTellMeHowToMoveToNextScreen", L_MouseTutMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutTellMeWhatToDoNext() {

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_MouseTutIntroTellMeWhatToDoNext1_Text = "ááÈÏÁ¡ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÈÑäÇãÌ ÇáÊÚáíãí'.";
        Agent_Speak(L_MouseTutIntroTellMeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutTellMeAboutThisScreen() 
{
        var L_MouseTutTellMeAboutThisScreen1_Text = "åÐå åí ÈÏÇíÉ ãÌãæÚÉ ãä ÇáÔÇÔÇÊ ÊÓÇÚÏß Ýí ÊÚáã ßíÝíÉ ÇÓÊÎÏÇã ãÇæÓ ÇáßãÈíæÊÑ.";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen1_Text);

        var L_MouseTutTellMeAboutThisScreen2_Text = "íãßäß ÇÎÊíÇÑ ÚÑÖ åÐÇ ÇáÈÑäÇãÌ ÇáÊÚáíãí¡";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen2_Text);

        var L_MouseTutTellMeAboutThisScreen3_Text = "Ãæ íãßäß ÇáÊÎØí ÅÐÇ ßäÊ ÊÚÑÝ ãÓÈÞÇð ßíÝ ÊÓÊÎÏã ÇáãÇæÓ.";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen3_Text);
}

function Agent_OnMouseTutTellMeHowToMoveToNextScreen() 
{
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_MouseTutIntroTellMeHowToMoveToNextScreen1_Text = "ááÈÏÁ¡ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÈÑäÇãÌ ÇáÊÚáíãí'.";
        Agent_Speak(L_MouseTutIntroTellMeHowToMoveToNextScreen1_Text);
    
    Agent_Play("RestPose");

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text = "Ãæ ÇáäÞÑ ÝæÞ 'ÇáÊÇáí' áÊÎØí åÐÇ ÇáÈÑäÇãÌ ÇáÊÚáíãí.";
        Agent_Speak(L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_MouseTutAAddCommands() {

        var L_MouseTutAMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_MouseTutAMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_MouseTutAMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeWhatToDoNext", L_MouseTutAMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeAboutThisScreen", L_MouseTutAMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeHowToMoveToNextScreen", L_MouseTutAMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutATellMeWhatToDoNext() 
{
        var L_MouseTutAWhatToDoNext1_Text = "ÍÇæá ÊÍÑíß ÇáãÇæÓ áÑÄíÉ ßíÝíÉ ÊÍÑß ÇáãÄÔÑ Úáì ÇáÔÇÔÉ.";
        Agent_Speak(L_MouseTutAWhatToDoNext1_Text);

        var L_MouseTutAWhatToDoNext2_Text = "ÊÃßÏ ãä ÊÍÑíßå Úáì ÓØÍ ãÓÊæí.";
        Agent_Speak(L_MouseTutAWhatToDoNext2_Text);
}

function Agent_OnMouseTutATellMeAboutThisScreen() 
{

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutATellMeAboutThisScreen1_Text = "ÊæÖÍ áß åÐå ÇáÔÇÔÉ ßíÝíÉ ÇÓÊÎÏÇã ÇáãÇæÓ áÊÍÑíß ÇáãÄÔÑ Úáì ÇáÔÇÔÉ.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutATellMeAboutThisScreen2_Text = "ÝÞØ ÍÇæá ÊÍÑíß ÇáãÇæÓ íãíäÇð Ãæ íÓÇÑÇð Ãæ äÍæ ÇáßãÈíæÊÑ Ãæ ÈÚíÏÇð Úäå.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen2_Text);

        var L_MouseTutATellMeAboutThisScreen3_Text = "ÌÑÈå ÈäÝÓß!";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen3_Text);
}

function Agent_OnMouseTutATellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutBAddCommands() {

        var L_MouseTutBMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_MouseTutBMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_MouseTutBMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeWhatToDoNext", L_MouseTutBMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeAboutThisScreen", L_MouseTutBMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeHowToMoveToNextScreen", L_MouseTutBMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutBTellMeWhatToDoNext() 
{
        var L_MouseTutBWhatToDoNext1_Text = "ÍÇæá ÇáÊÞÇØ ÇáãÇæÓ æÊÍÑíßå Åáì ãæÞÚ ÂÎÑ.";
        Agent_Speak(L_MouseTutBWhatToDoNext1_Text);

        var L_MouseTutBWhatToDoNext2_Text = "Ëã ÖÚå æÍÑßå ãÑÉ ÃÎÑì.";
        Agent_Speak(L_MouseTutBWhatToDoNext2_Text);
}

function Agent_OnMouseTutBTellMeAboutThisScreen() 
{
        var L_MouseTutBTellMeAboutThisScreen1_Text = "ÊæÖÍ áß åÐå ÇáÔÇÔÉ ßíÝíÉ ÖÈØ ÇáãÇæÓ Åä ÊÑßÊ ÇáãæÞÚ.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen1_Text);

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutBTellMeAboutThisScreen2_Text = "ÝÞØ ÇáÊÞØ ÇáãÇæÓ æÍÑßå Åáì ãßÇä ãÑíÍ.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen2_Text);

        Agent_Play("RestPose");

        var L_MouseTutBTellMeAboutThisScreen3_Text = "ÚäÏ æÖÚ ÇáãÇæÓ æÊÍÑíßå¡ íÊÈÚ ÇáãÄÔÑ ÇáÍÑßÇÊ ÇáÊí ÊÌÑíåÇ.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen3_Text);

        var L_MouseTutBTellMeAboutThisScreen4_Text = "áÇÍÙ Ãä ÇáãÄÔÑ íÊÍÑß ÝÞØ ÚäÏ ÊÍÑíß ÇáãÇæÓ Úáì ÓØÍ ãÓÊæí!";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutBTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutCAddCommands() {

        var L_MouseTutCMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_MouseTutCMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_MouseTutCMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeWhatToDoNext", L_MouseTutCMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeAboutThisScreen", L_MouseTutCMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeHowToMoveToNextScreen", L_MouseTutCMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_MouseTutCIntro() {
        
}

function Agent_OnMouseTutCTellMeWhatToDoNext() 
{
        var L_MouseTutCWhatToDoNext1_Text = "ÍÇæá ÊÍÑíß ÇáãÇæÓ áßí íÊÍÑß ÇáãÄÔÑ Úáì ÃÒÑÇÑ ÇáÑÓæãÇÊ Ýí åÐå ÇáÔÇÔÉ.";
        Agent_Speak(L_MouseTutCWhatToDoNext1_Text);
}

function Agent_OnMouseTutCTellMeAboutThisScreen() 
{
        var L_MouseTutCTellMeAboutThisScreen1_Text = "Êõãßäß åÐå ÇáÔÇÔÉ ãä ÊÍÑíß ÇáãÄÔÑ ÈæÇÓØÉ ÇáãÇæÓ.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutCTellMeAboutThisScreen2_Text = "ÇÓÊÎÏã ÇáãÇæÓ áÊÍÑíß ÇáãÄÔÑ ÝæÞ ÃÒÑÇÑ ÇáÑÓæãÇÊ åÐå.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutCTellMeAboutThisScreen3_Text = "áÇÍÙ Ãä ÊÍÑíß ÇáãÄÔÑ ÝæÞ ÇáÒÑ íÛíÑ ãÙåÑå!";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen3_Text);

        var L_MouseTutCTellMeAboutThisScreen4_Text = "íÑÌÚ ÇáÒÑ Åáì ãÙåÑå ÇáÃÕáí ÚäÏ ÊÍÑíß ÇáãÄÔÑ ÈÚíÏÇð Úä ÕæÑÊå.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutCTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutDAddCommands() {

        var L_MouseTutDMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_MouseTutDMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_MouseTutDMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeWhatToDoNext", L_MouseTutDMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeAboutThisScreen", L_MouseTutDMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeHowToMoveToNextScreen", L_MouseTutDMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutDTellMeWhatToDoNext() 
{
        var L_MouseTutDWhatToDoNext1_Text = "ÍÇæá ÇáäÞÑ ÝæÞ ÒÑ ÇáãÇæÓ ÇáÃíãä.";
        Agent_Speak(L_MouseTutDWhatToDoNext1_Text);
}

function Agent_OnMouseTutDTellMeAboutThisScreen() 
{
        var L_MouseTutDTellMeAboutThisScreen1_Text = "åÐÇ ÇáÌÒÁ ãä ÇáÈÑäÇãÌ ÇáÊÚáíãí Íæá ÊÚáíã ÇáäÞÑ Úáì ÇáãÇæÓ.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen1_Text);

        var elem = g.document.all("image");

        Agent_MoveToElement(elem, "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen2_Text = "áÊÍÏíÏ ÚäÕÑ Úáì ÇáÔÇÔÉ¡ ÇÓÊÎÏã ÇáãÇæÓ áÊÍÑíß ÇáãÄÔÑ ÝæÞ  ÇáÚäÕÑ¡";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen2_Text);

        Agent_GestureAtElement(g.document.all("image"), "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen3_Text = "Ëã ÇÖÛØ ÒÑ ÇáãÇæÓ æÍÑÑå ßãÇ ÊÑì åäÇ.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutDTellMeAboutThisScreen4_Text = "íÓãì åÐÇ ÇáäÞÑ!";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutDTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutEAddCommands() {

        var L_MouseTutEMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_MouseTutEMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_MouseTutEMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeWhatToDoNext", L_MouseTutEMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeAboutThisScreen", L_MouseTutEMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeHowToMoveToNextScreen", L_MouseTutEMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutETellMeWhatToDoNext() 
{
        var L_MouseTutEWhatToDoNext1_Text = "ÊÏÑÈ Úáì ÇáäÞÑ ÈÒÑ ÇáãÇæÓ ÇáÃíÓÑ ÝæÞ ÃÒÑÇÑ ÇáÑÓæãÇÊ Úáì åÐå ÇáÔÇÔÉ.";
        Agent_Speak(L_MouseTutEWhatToDoNext1_Text);
}

function Agent_OnMouseTutETellMeAboutThisScreen() 
{
        var L_MouseTutETellMeAboutThisScreen1_Text = "Êãßäß åÐå ÇáÔÇÔÉ ãä ÊÌÑíÈ ÇáäÞÑ ÈæÇÓØÉ ÇáãÇæÓ.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutETellMeAboutThisScreen2_Text = "ÇÓÊÎÏã ÇáãÇæÓ ááÅÔÇÑÉ Åáì ÃÍÏ ÃÒÑÇÑ ÇáÑÓæãÇÊ åÐå.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutETellMeAboutThisScreen3_Text = "Ëã ÇäÞÑ ÝæÞ ÒÑ ÇáãÇæÓ ÇáÃíÓÑ.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen3_Text);

        var L_MouseTutETellMeAboutThisScreen4_Text = "Ëã ÌÑÈ Ðáß ãÚ ÃÒÑÇÑ ÇáÑÓæãÇÊ ÇáÃÎÑì.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutETellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}

function Agent_OnMouseTutEElementClick(elem) {

        Agent_MoveToElement(elem, "TopCenterWidth", 0);

        Agent_StartLookingAtElement(elem, "LookDown");

}



function Agent_MouseTutFAddCommands() {

        var L_MouseTutFMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_MouseTutFMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_MouseTutFMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutFTellMeWhatToDoNext", L_MouseTutFMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutFTellMeAboutThisScreen", L_MouseTutFMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutFTellMeHowToMoveToNextScreen", L_MouseTutFMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutFTellMeWhatToDoNext() {

        MouseTut_WhatToDoNext()

}

function Agent_OnMouseTutFTellMeAboutThisScreen() 
{
        var L_MouseTutFTellMeAboutThisScreen1_Text = "Úãá ÚÙíã!";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen1_Text);

        var L_MouseTutFTellMeAboutThisScreen2_Text = "ÍÊì ÇáÂä ÊÚáãÊ ßíÝíÉ ÇáäÞÑ æÇáÅÔÇÑÉ ÈÇáãÇæÓ.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen2_Text);

        var L_MouseTutFTellMeAboutThisScreen3_Text = "ÇáÂä ÓÊÞæã ÈÊØÈíÞ åÐå ÇáãåÇÑÇÊ ááÊÝÇÚá ãÚ ÇáÚäÇÕÑ ÇáÃÎÑì ÇáÊí ÓÊÌÏåÇ Ýí Windows Ãæ Úáì ÕÝÍÇÊ æíÈ.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen3_Text);

        var L_MouseTutFTellMeAboutThisScreen4_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ÚäÏãÇ Êßæä ÌÇåÒÇð ááÇäÊÞÇá.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutFTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutGAddCommands() {

        var L_MouseTutGMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_MouseTutGMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_MouseTutGMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeWhatToDoNext", L_MouseTutGMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeAboutThisScreen", L_MouseTutGMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeHowToMoveToNextScreen", L_MouseTutGMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutGPreDisplayMenu() {

        if (g.btnNext.disabled) {

                var L_MouseTutGMenuCommand4_Text = "ÃÎÈÑäí Úä ÓÈÈ ßæä ÇáÒÑ 'ÇáÊÇáí' ÛíÑ ãÊæÝÑ";

                try {
                        g_AgentCharacter.Commands.Insert("Agent_OnMouseTutGWhyNextDisabled","Agent_OnMouseTutGTellMeHowToMoveToNextScreen",false,L_MouseTutGMenuCommand4_Text);
                }
                catch (e) {
                }

        }

        else {

                try {
                        g_AgentCharacter.Commands.Remove("Agent_OnMouseTutGWhyNextDisabled");
                }
                catch (e) {
                }

        }

}

function Agent_OnMouseTutGWhyNextDisabled() 
{
        var L_MouseTutGWhyNextNotAvailable1_Text = "ÒÑ 'ÇáÊÇáí' ÛíÑ ãÊæÝÑ áÃäß áã ÊÎÊÑ ãÏíäÉ ÈÚÏ.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable1_Text);

		Agent_GestureAtElement(g.document.all("selCity"),"LeftCenter");

        var L_MouseTutGWhyNextNotAvailable2_Text = "íÌÈ ÃæáÇð ÇáäÞÑ ÝæÞ ÃÍÏ åÐå ÇáãÏä.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable2_Text);
    
    Agent_Play("RestPose");

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_MouseTutGWhyNextNotAvailable3_Text = "ÚäÏåÇ íãßäß ÇáäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááãÊÇÈÚÉ.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeWhatToDoNext() {
		
		if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "RightCenter");

        var L_MouseTutGWhatToDoNext1_Text = "ÇäÞÑ ÝæÞ ãÝÊÇÍí 'ÇáÓåã Åáì ÃÚáì' æ'ÇáÓåã Åáì ÃÓÝá' ááÊãÑíÑ ÎáÇá ÞÇÆãÉ ÇáãÏä.";
        Agent_Speak(L_MouseTutGWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

		if (g.document.dir == "rtl")
			Agent_Play("RestPose");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGWhatToDoNext2_Text = "Ëã ÍÏÏ ãÏíäÉ ÈæÇÓØÉ ÇáäÞÑ ÝæÞ ÇÓãåÇ.";
        Agent_Speak(L_MouseTutGWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutGWhatToDoNext3_Text = "Ëã ÍÇæá ÇáäÞÑ ÝæÞ ãÏä ÃÎÑì!";
        Agent_Speak(L_MouseTutGWhatToDoNext3_Text);

        Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
}

function Agent_OnMouseTutGTellMeAboutThisScreen() {
        var L_MouseTutGTellMeAboutThisScreen1_Text = "Úáì åÐå ÇáÔÇÔÉ íãßäß ÇáÊÏÑøÈ Úáì ÇáäÞÑ áÊÍÏíÏ ÚäÕÑ ãä ÞÇÆãÉ.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGTellMeAboutThisScreen2_Text = "ÚäÏ ÇáäÞÑ ÝæÞ ãÏíäÉ ãä åÐå ÇáÞÇÆãÉ¡";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");
		
        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("imgTable"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("imgTable"), "RightCenter");

        var L_MouseTutGTellMeAboutThisScreen3_Text = "ÓÊÙåÑ ÕæÑÊåÇ åäÇ.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeHowToMoveToNextScreen() {

        if (g.btnNext.disabled) {

                Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

                var L_MouseTutGHowToMoveToNextScreen1_Text = "íÌÈ ÇáäÞÑ ÝæÞ ãÏíäÉ åäÇ¡";
                Agent_Speak(L_MouseTutGHowToMoveToNextScreen1_Text);
    
                Agent_Play("RestPose");

            if (window.parent.document.dir == "rtl")
            {
                Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
            }
            else
            {
                Agent_GestureAtElement(g.btnNext, "TopLeft");
            }  

                var L_MouseTutGHowToMoveToNextScreen2_Text = "Ëã ÇäÞÑ ÒÑ 'ÇáÊÇáí'.";
                Agent_Speak(L_MouseTutGHowToMoveToNextScreen2_Text);
    
                Agent_Play("RestPose");
        }

        else
                MouseTut_HowToMoveToNextScreen();

}




function Agent_MouseTutHAddCommands() {

        var L_MouseTutHMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_MouseTutHMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_MouseTutHMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeWhatToDoNext", L_MouseTutHMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeAboutThisScreen", L_MouseTutHMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeHowToMoveToNextScreen", L_MouseTutHMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutHTellMeWhatToDoNext() {

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHWhatToDoNext1_Text = "ÍÏÏ ÃÍÏ åÐå ÇáÎíÇÑÇÊ ÈÇáäÞÑ ÝæÞ ÇáÏÇÆÑÉ ÇáãÌÇæÑÉ áå.";
        Agent_Speak(L_MouseTutHWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutHWhatToDoNext2_Text = "ÓíÛíÑ Ðáß ßíÝíÉ ÅÙåÇÑ ÇáÕæÑÉ.";
        Agent_Speak(L_MouseTutHWhatToDoNext2_Text);

        var L_MouseTutHWhatToDoNext3_Text = "Ëã ÍÇæá ÇáäÞÑ ÝæÞ ÇáÎíÇÑÇÊ ÇáÃÎÑì!";
        Agent_Speak(L_MouseTutHWhatToDoNext3_Text);
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeAboutThisScreen() {
        var L_MouseTutHTellMeAboutThisScreen1_Text = "Úáì åÐå ÇáÔÇÔÉ íãßä ÇáÊÏøÑÈ Úáì ßíÝíÉ ÊÍÏíÏ ÇÎÊíÇÑ ÚäÏãÇ íßæä åäÇß ÎíÇÑÇð æÇÍÏÇð íãßä ÊÚííäå Ýí ÇáãÑÉ ÇáæÇÍÏÉ.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHTellMeAboutThisScreen2_Text = "ÚäÏ ÇáäÞÑ ÝæÞ ÇáÏæÇÆÑ ÇáãæÌæÏÉ åäÇ¡";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("cityImg"), "LeftCenter");
        else
			Agent_GestureAtElement(g.document.all("cityImg"), "RightCenter");

        var L_MouseTutHTellMeAboutThisScreen3_Text = "ÊõÛíøöÑ ØÑíÞÉ ÅÙåÇÑ ÇáÕæÑÉ ÇáãæÌæÏÉ åäÇ.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutIAddCommands() {

        var L_MouseTutIMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_MouseTutIMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_MouseTutIMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeWhatToDoNext", L_MouseTutIMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeAboutThisScreen", L_MouseTutIMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeHowToMoveToNextScreen", L_MouseTutIMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutITellMeWhatToDoNext() {

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutIWhatToDoNext1_Text = "ÇäÞÑ ÝæÞ ÎíÇÑ Ãæ ÃßËÑ ãä ÇáÎíÇÑÇÊ ÇáãæÌæÏÉ åäÇ æáÇÍÙ ÇáÊÃËíÑ Úáì ÇáÕæÑÉ.";
        Agent_Speak(L_MouseTutIWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutIWhatToDoNext2_Text = "ÇäÞÑ ÝæÞ ÇáÎíÇÑ ãÑÉ ÃÎÑì áãÓÍ ÇáÎíÇÑ.";
        Agent_Speak(L_MouseTutIWhatToDoNext2_Text);

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeAboutThisScreen() {
        var L_MouseTutITellMeAboutThisScreen1_Text = "íãßäß ÃÍíÇäÇð ÊÍÏíÏ ÎíÇÑÇÊ ãÊÚÏÏÉ Ýí ãÌãæÚÉ ÎíÇÑÇÊ.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen1_Text);

        var L_MouseTutITellMeAboutThisScreen2_Text = "Úáì åÐå ÇáÔÇÔÉ íãßäß ÇÎÊíÇÑ ÃÓÇáíÈ ÚÑÖ ãÎÊáÝÉ ááÕæÑÉ.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen2_Text);

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutITellMeAboutThisScreen3_Text = "ÝÞØ ÇäÞÑ ÝæÞ ÇáãÑÈÚÇÊ ÇáãÌÇæÑÉ ááÎíÇÑÇÊ ÇáãæÌæÏÉ åäÇ.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutJAddCommands() {

        var L_MouseTutJMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_MouseTutJMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_MouseTutJMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutJTellMeWhatToDoNext", L_MouseTutJMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutJTellMeAboutThisScreen", L_MouseTutJMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutJTellMeHowToMoveToNextScreen", L_MouseTutJMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutJTellMeWhatToDoNext() {

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(g.document.all("caption"), "Left");
		else
			Agent_GestureAtElement(g.document.all("CaptionLabel"), "Left");

        var L_MouseTutJWhatToDoNext1_Text = "ÇäÞÑ ÝæÞ ÇáãÑÈÚ ÇáãæÌæÏ åäÇ¡";
        Agent_Speak(L_MouseTutJWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutJWhatToDoNext2_Text = "Ëã ÇßÊÈ ÇáäÕ ÇáÐí ÊÑíÏ ÅÙåÇÑå ßÊÚáíÞ.";
        Agent_Speak(L_MouseTutJWhatToDoNext2_Text);
}

function Agent_OnMouseTutJTellMeAboutThisScreen() {
        var L_MouseTutJTellMeAboutThisScreen1_Text = "íãßäß ÃÍíÇäÇð ÊÎÕíÕ ÎíÇÑ ãÇ ÈßáãÇÊ ãä ÚäÏß.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen1_Text);

        var L_MouseTutJTellMeAboutThisScreen2_Text = "Úáì åÐå ÇáÔÇÔÉ íãßäß ßÊÇÈÉ ÊÚáíÞ áÕæÑÊß.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen2_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(g.document.all("caption"), "Left");
		else
			Agent_GestureAtElement(g.document.all("CaptionLabel"), "Left");

        var L_MouseTutJTellMeAboutThisScreen3_Text = "ÝÞØ ÇäÞÑ ÝæÞ ÇáãÑÈÚ ÇáãæÌæÏ åäÇ æÇßÊÈ ÇáÊÚáíÞ.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutJTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutKAddCommands() {

        var L_MouseTutKMenuCommand1_Text = "ÃÎÈÑäí ãÇ ÇáÐí íÌÈ ÇáÞíÇã Èå ÈÚ&Ï Ðáß";
        var L_MouseTutKMenuCommand2_Text = "ÃÎÈÑäí Úä åÐå Çá&ÔÇÔÉ";
        var L_MouseTutKMenuCommand3_Text = "ÃÎÈÑäí Úä ßíÝíÉ ÇáÇäÊ&ÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeWhatToDoNext", L_MouseTutKMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeAboutThisScreen", L_MouseTutKMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeHowToMoveToNextScreen", L_MouseTutKMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutKTellMeWhatToDoNext() {
        var L_MouseTutKWhatToDoNext1_Text = "ÊåÇäíäÇ! Êã ÅßãÇá ÇáÈÑäÇãÌ ÇáÊÚáíãí ááãÇæÓ!";
        Agent_Speak(L_MouseTutKWhatToDoNext1_Text);

        var L_MouseTutKWhatToDoNext2_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááãÊÇÈÚÉ Ýí ÇáÔÇÔÉ ÇáÊÇáíÉ.";
        Agent_Speak(L_MouseTutKWhatToDoNext2_Text);
}

function Agent_OnMouseTutKTellMeAboutThisScreen() {
        var L_MouseTutKTellMeAboutThisScreen1_Text = "Úãá ÑÇÆÚ! Êã ÅäåÇÁ ÇáÕæÑÉ!";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen1_Text);
        
        var L_MouseTutKTellMeAboutThisScreen2_Text = "Êã ÅßãÇá ÇáÈÑäÇãÌ ÇáÊÚáíãí ááãÇæÓ.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen2_Text);

        var L_MouseTutKTellMeAboutThisScreen3_Text = "ááÍÕæá Úáì ÈÑäÇãÌ ÊÚáíãí ÃßËÑ ÊÚãÞÇð íÛØí ãåÇÑÇÊ ãËá ÇáÓÍÈ æÊÛííÑ ÇáÍÌã æÇÓÊÎÏÇã ÒÑ ÇáãÇæÓ ÇáÃíãä¡ ÇäÙÑ 'ÊÚáíãÇÊ' ÚäÏ ÈÏÁ ÊÔÛíá Windows.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutKTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function MouseTut_WhatToDoNext() 
{
        var L_MouseTutTellMeWhatToDoNext1_Text = "ÝÞØ ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' ááÇäÊÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ¡";
        Agent_Speak(L_MouseTutTellMeWhatToDoNext1_Text);

        var L_MouseTutTellMeWhatToDoNext2_Text = "Ãæ ÇäÞÑ ÝæÞ ÒÑ 'ÊÎØí' áÊÎØí ÈÞíÉ ÇáÈÑäÇãÌ ÇáÊÚáíãí.";
        Agent_Speak(L_MouseTutTellMeWhatToDoNext2_Text);
}

function MouseTut_HowToMoveToNextScreen() 
{
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_MouseTutTellMeHowToMoveToNextScreen1_Text = "ÇäÞÑ ÝæÞ 'ÇáÊÇáí' ááÇäÊÞÇá Åáì ÇáÔÇÔÉ ÇáÊÇáíÉ¡";
        Agent_Speak(L_MouseTutTellMeHowToMoveToNextScreen1_Text);
    
    Agent_Play("RestPose");

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_MouseTutTellMeHowToMoveToNextScreen2_Text = "Ãæ ÇäÞÑ ÝæÞ 'ÊÎØí' áÊÎØí åÐÇ ÇáÈÑäÇãÌ ÇáÊÚáíãí.";
        Agent_Speak(L_MouseTutTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_2nicsAddCommands() 
{
    var L_2nicsMenuCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    
    g_AgentCharacter.Commands.Add("Agent_On2nicsAboutThisStep", L_2nicsMenuCommand1_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_On2nicsAboutThisStep() 
{
    var L_2nicsAboutThisScreen1_Text = "ÊÔÑÍ åÐå ÇáÔÇÔÉ ÈÃä åäÇß ÃßËÑ ãä ØÑíÞÉ ããßäÉ ãä ÃÌá ÇÊÕÇá ÇáßãÈíæÊÑ ÈÅäÊÑäÊ.";
	Agent_Speak(L_2nicsAboutThisScreen1_Text);
	
    var L_2nicsAboutThisScreen2_Text = "íãßäß ÇÎÊíÇÑ Ãí ÇÊÕÇá ÊÑíÏ ÇÓÊÎÏÇãå ÈÚÏ ÇáÇäÊåÇÁ ãä ÅÚÏÇÏ Windows.";
	Agent_Speak(L_2nicsAboutThisScreen2_Text);
}



function Agent_UserNameAddCommands() 
{
    var L_UserNameCommand1_Text = "ÃÎÈÑäí Úä &åÐå ÇáÎØæÉ";
    var L_UserNameCommand2_Text = "&Ãíä íÙåÑ ÇÓãí¿";
    var L_UserNameCommand3_Text = "&ßíÝ íãßääí ÊÛííÑ ÇáÇÓã áÇÍÞÇð¿";
    var L_UserNameCommand4_Text = "&ãÇÐÇ Úáíø Ãä ÃÝÚá ÈÚÏ Ðáß¿";
    
    g_AgentCharacter.Commands.Add("Agent_OnUserNameAboutThisStep", L_UserNameCommand1_Text);    
    g_AgentCharacter.Commands.Add("Agent_OnUserNameWhereIsName", L_UserNameCommand2_Text);    
    g_AgentCharacter.Commands.Add("Agent_OnUserNameHowToChangeName", L_UserNameCommand3_Text);    
    g_AgentCharacter.Commands.Add("Agent_OnUserNameWhatToDoNext", L_UserNameCommand4_Text);
    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_OnUserNameAboutThisStep() 
{
    var L_UserNameAboutThisStep1_Text = "Ýí åÐå ÇáÔÇÔÉ ÊõÚÑÝ Úä äÝÓß ÈæÇÓØÉ ÇáÇÓã ÇáÃæá æÇáÇÓã ÇáÃÎíÑ ÍÊì íÊÚÑÝ Úáíß Windows ÚäÏ ÊÓÌíáß ÇáÏÎæá.";
	Agent_Speak(L_UserNameAboutThisStep1_Text);
}

function Agent_OnUserNameWhereIsName() 
{
    var L_UserNameWhereIsName1_Text = "ÓíÙåÑ ÇÓãß ÇáÃæá Úáì ÔÇÔÉ ÇáÊÑÍíÈ¡ ÇáÊí ÊÙåÑ ÚäÏãÇ ÊÈÏÃ ÊÔÛíá Windows.";
	Agent_Speak(L_UserNameWhereIsName1_Text);
	
    var L_UserNameWhereIsName2_Text = "Óíßæä ÃíÖÇð ãæÌæÏ Ýí ÃÚáì ÞÇÆãÉ ÇÈÏÃ ÚäÏãÇ ÊÓÌá ÏÎæáß.";
	Agent_Speak(L_UserNameWhereIsName2_Text);
	
    var L_UserNameWhereIsName3_Text = "ÅÐÇ ÞÇã ÔÎÕ ÂÎÑ ÈÊÓÌíá ÇáÏÎæá Åáì ÇáßãÈíæÊÑ ÇáÎÇÕ Èß æÝÊÍ ãÌáÏ ÇáãÓÊäÏÇÊ¡ ÓíÙåÑ ÇÓãß Ýí ÇÓã ÇáãÌáÏ.";
	Agent_Speak(L_UserNameWhereIsName3_Text);
	
    var L_UserNameWhereIsName4_Text = "ãËáÇð¡ ÓíÙåÑ ÇáãÌáÏ ÈÔßá \"ãÓÊäÏÇÊ David\" ÈÍíË íÚÑÝ ÇáãÓÊÎÏãíä ÇáÂÎÑíä ÈÃä åÐÇ ÇáãÌáÏ ÎÇÕ Èß.";
	Agent_Speak(L_UserNameWhereIsName4_Text);
	
    var L_UserNameWhereIsName5_Text = "ÓíÙåÑ ÇÓãß ÃíÖÇð Ýí ÞÇÆãÉ ÇáãÓÊÎÏãíä ÚäÏ ÇáäÞÑ ÝæÞ áæÍÉ ÇáÊÍßã Úáì ÇáÞÇÆãÉ ÇÈÏÃ¡ Ëã ÇáäÞÑ ÝæÞ ÍÓÇÈÇÊ ÇáãÓÊÎÏãíä.";
	Agent_Speak(L_UserNameWhereIsName5_Text);
}

function Agent_OnUserNameHowToChangeName() 
{
    var L_UserNameHowToChangeName1_Text = "áÊÛííÑ ÇÓãß ÚäÏ ÊÓÌíá ÏÎæáß Åáì Windows¡ ÇäÞÑ ÝæÞ áæÍÉ ÇáÊÍßã Úáì ÇáÞÇÆãÉ ÇÈÏÃ.";
	Agent_Speak(L_UserNameHowToChangeName1_Text);
	
    var L_UserNameHowToChangeName2_Text = "Ëã ÇäÞÑ ÝæÞ ÍÓÇÈÇÊ ÇáãÓÊÎÏãíä.";
	Agent_Speak(L_UserNameHowToChangeName2_Text);
	
    var L_UserNameHowToChangeName3_Text = "Óíßæä ÈÅãßÇäß ÊÛííÑ ÇÓãß ÈÇáÅÖÇÝÉ Åáì ÃÓãÇÁ ãÓÊÎÏãíä ÂÎÑíä áåÐÇ ÇáßãÈíæÊÑ.";
	Agent_Speak(L_UserNameHowToChangeName3_Text);
}

function Agent_OnUserNameWhatToDoNext() 
{
    var L_UserNameWhatToDoNext1_Text = "ÇäÞÑ ÝæÞ ÒÑ 'ÇáÊÇáí' áãÍÇæáÉ ÅÚÇÏÉ ÇáÇÊÕÇá ÈÅäÊÑäÊ.";
	Agent_Speak(L_UserNameWhatToDoNext1_Text);
	
    var L_UserNameWhatToDoNext2_Text = "Ãæ ÇäÞÑ ÝæÞ ÊÎØí ááãÊÇÈÚÉ ÈÏæä ÇáÇÊÕÇá ÈÅäÊÑäÊ.";
	Agent_Speak(L_UserNameWhatToDoNext2_Text);
}
