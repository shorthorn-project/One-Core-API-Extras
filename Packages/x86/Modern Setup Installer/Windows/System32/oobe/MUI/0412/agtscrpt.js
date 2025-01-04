



var L_PhoneNumberLegit_Text = "\\map=\"one \\pau=100\\ eight hundred R U le jit\"=\"1-800-R U LEGIT\"\\";


var g_strRegionSetting = "";
var g_strKeyboardSetting = "";
var g_strLangSetting = " ";



function Agent_AddCommonCommands() 
{
    g_AgentCharacter.Commands.RemoveAll();

    var L_AddCommonCommands1_Text = "�޴� �ݱ�(&C)";

    g_AgentCharacter.Commands.Add("CloseMenu", L_AddCommonCommands1_Text);
        
    if (g_bAgentShowSpecialISPCommands) 
    {
        
		var L_AddCommonCommands2_Text = "���ͳ� ��Ͽ� ���� ����(&A)";
		var L_AddCommonCommands3_Text = "���ͳ� ��� �ٽ� ����(&R)";
		var L_AddCommonCommands4_Text = "���ͳ� ��� �ǳʶٱ�(&S)";

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
        var L_AddAssistantanceCommand1_Text = "���� ��û�� ���� ����(&F)";       

        g_AgentCharacter.Commands.Add("Agent_OnCommand_AboutAssistance", L_AddAssistantanceCommand1_Text);
    }
}

function Agent_OnCommand_AboutAssistance() 
{

    Agent_StopAll();

    var L_AboutAssistance1_Text = "��ǻ�� ������ü(%s)�� �����Ͻʽÿ�.";
    var re = /%s/i;
    var L_AboutAssistance2_Text = "��ǻ�� ������ü�� �����Ͻʽÿ�.";

    
    

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
            Agent_Speak(L_AboutAssistance2_Text);
    else
            Agent_Speak(L_AboutAssistance1_Text.replace(re, strPhoneNumber));

    Agent_Play("ReadReturn");
}

function Agent_AddWhatToDoNextCommand() 
{
    var L_AddWhatToDoNextCommand1_Text = "���� �۾��� ���� ����(&W)";
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

        var L_WhatToDoNext1_Text = "�۾��� ����Ϸ��� [����] ���߸� Ŭ���Ͻʽÿ�.";
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

        var L_WhatToDoNext2_Text = "���� ȭ������ ���ư����� [�ڷ�] ���߸� Ŭ���Ͻʽÿ�.";
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

        var L_WhatToDoNext3_Text = "[�ǳʶٱ�] ���߸� Ŭ���Ͽ� �� �ܰ踦 ������ ���� �ֽ��ϴ�.";
        Agent_Speak(L_WhatToDoNext3_Text);
        
        Agent_Play("RestPose");
    }       
}

function Agent_DoSpecialISPCommand1() 
{
	
	
			
	Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
			
	var L_ISPSpecialTellMeAboutInternetSignup1_Text = "���ͳ� �׼��� ��� ������ ���� ���Դϴ�.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup1_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup2_Text = "��� �����ϴ� �� ������ ������ ���⸦ Ŭ���ϰų� <F1> Ű�� �����ʽÿ�.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup2_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup3_Text = "�ٽ� �����ϰų� ���� �ܰ�� �ǳʶ� �� �ִ� ����� �޴��� ǥ�õ˴ϴ�.";
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

    var L_EncourageNextButton1_Text = "[����]�� Ŭ���Ͻʽÿ�. | [����]�� Ŭ���Ͻʽÿ�. | [����]�� Ŭ���Ͻʽÿ�. | ���� �ܰ�� �̵��Ϸ��� [����]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_EncourageNextButton1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnF1() 
{
    var L_OnF1_Text = "������ ���� �帱���? | ������ �ʿ��Ͻʴϱ�?";
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

    var L_PreWelcomeScript1_Text = "Windows XP�� ����� �ּż� �����մϴ�.";
    Agent_Speak(L_PreWelcomeScript1_Text);

    var L_PreWelcomeScript2_Text = "�� ������� ������� ��ǻ�� ������ �����ݴϴ�.";
    Agent_Speak(L_PreWelcomeScript2_Text);

    var L_PreWelcomeScript3_Text = "������ �ʿ��ϸ� �������� ���콺�� ���� Ŭ���ϰų�";
    Agent_Speak(L_PreWelcomeScript3_Text);
                
    Agent_MoveToElement(document.all("AssistImg"), "LeftCenter"); 
    
    

    var L_PreWelcomeScript4_Text = "Ű���忡�� <F1> Ű�� ���� �ֽʽÿ�.";
    Agent_Speak(L_PreWelcomeScript4_Text);
    
    Agent_Play("PointLeft");

    var L_PreWelcomeScript5_Text = "������ �ʿ��ϸ� �������� ���� �帮�ڽ��ϴ�.";
    Agent_Speak(L_PreWelcomeScript5_Text);
    
    Agent_Play("RestPose");

    g_AgentRequestHideImage = g_AgentCharacter.Hide();
}



function Agent_WelcomeAddCommands() 
{
    
    
    

    var L_WelcomeAddCommands1_Text = "�� �۾��� ���� ����(&T)";
    var L_WelcomeAddCommands2_Text = "���� �۾��� ���� ����(&W)";

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

    var L_WelcomeWhatToDoNext1_Text = "������ �غ� �Ǿ����� [����] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_WelcomeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnWelcomeCommand_AboutProcess() 
{
    Agent_StopAll();

    var L_AboutProcess1_Text = "�ڿ� ���̴� ȭ���� �ý����� ������ ������ ���õ� ȭ�� �� ù ȭ���Դϴ�.";
    Agent_Speak(L_AboutProcess1_Text);

    var L_AboutProcess2_Text = "������ ȭ���� ������ �ϰų� �Ϻ� ������ �Է��ϵ��� ����ڿ��� ��û�մϴ�. �Ǵ� ������ ������ �۾��� ���� ������ �����մϴ�.";
    Agent_Speak(L_AboutProcess2_Text);

    var L_AboutProcess3_Text = "���⿡���� ������ �� �� ���� ������ �ܰ踦 �����ϰ� �̸� �����ݴϴ�.";
    Agent_Speak(L_AboutProcess3_Text);

    var L_AboutProcess4_Text = "ù°, ����Ŀ, Ű����, �ð� ���� ��ǻ�� �ϵ��� �ùٸ��� �۵��ϴ��� Ȯ���մϴ�.";
    Agent_Speak(L_AboutProcess4_Text);

    var L_AboutProcess5_Text = "���� ��ǻ�Ͱ� ��Ʈ��ũ�� ����� ����Ǿ� �ִ����� Ȯ���մϴ�.";
    Agent_Speak(L_AboutProcess5_Text);


    var L_AboutProcess6_Text = "��°, %1�� ��뿡 ���� �����ϴ� ���� ����� �о �� �ֽ��ϴ�.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess6_Text, g_ProductName));
    
    if (!window.external.get_RetailOOBE()) 
    {
    var L_AboutProcess7_Text = "��ǻ�Ϳ� �� �� ��Ʈ��ũ ������ ������ Microsoft �� %1�� ����Ͽ� ��ǰ ������Ʈ �� Ư�� ��� � ���� ������ ������ �� �ֽ��ϴ�.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess7_Text, g_OEMNameStr));
    } 
    else 
    {    
    var L_AboutProcess7_Text = "��ǻ�Ϳ� �� �� ��Ʈ��ũ ������ ������ Microsoft�� ����Ͽ� ��ǰ ������Ʈ �� Ư�� ��翡 ���� ������ ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_AboutProcess7_Text);
    }       

    var L_AboutProcess8_Text = "���� ���� ��� ���� %1 �纻�� ��ǰ���� Ȯ���غ� �� �ֽ��ϴ�.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess8_Text, g_ProductName));

    var L_AboutProcess9_Text = "��°, ���ͳ� ������ ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_AboutProcess9_Text); 

    var L_AboutProcess10_Text = "�� �ܰ踦 �ǳʶٸ� ���߿� ������ �ٽ� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_AboutProcess10_Text);

    var L_AboutProcess11_Text = "��°, ��ǻ�͸� ����ϴ� ����ڸ��� ��ǻ�͸� ���������� �����Ͽ� ����� �� �ֽ��ϴ�. ";
    Agent_Speak(L_AboutProcess11_Text);

    var L_AboutProcess12_Text = "��, ���� ������ ������ �ϰڽ��ϴ�.";
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

    var L_AboutProcess13_Text = "�����Ϸ��� [����] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_AboutProcess13_Text);
    
    Agent_Play("RestPose");
}


                                                       

function Agent_TimeZoneAddCommands() 
{
    var L_TimeZoneCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_TimeZoneCommand2_Text = "ǥ�� �ð���� ��� �����մϱ�(&O)?";

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
        var L_TimeZoneMenuCommand3_Text = "�ϱ� ���� �ð����� ���� ����(&A)";

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
    var L_ExplainTimeZoneStep1_Text = "��ǻ�Ϳ��� ����� ǥ�� �ð��븦 �����ϸ� ��ǻ���� �ð踦 �ش� �ð��뿡 ���� �������ݴϴ�.";
    Agent_Speak(L_ExplainTimeZoneStep1_Text);

    var L_ExplainTimeZoneStep2_Text = "���� �ϱ� ���� �ð��� �µ��� Windows���� �ڵ����� �ð踦 ������Ʈ�մϴ�.";
    Agent_Speak(L_ExplainTimeZoneStep2_Text);

    var L_ExplainTimeZoneStep3_Text = "�� �ܰ�� �ϵ����� ���õ� ������ �ܰ��Դϴ�.";
    Agent_Speak(L_ExplainTimeZoneStep3_Text);

    var L_ExplainTimeZoneStep4_Text = "�� ������ ���� ��� �ܰ�� �Ѿ�ϴ�.";
    Agent_Speak(L_ExplainTimeZoneStep4_Text);
    
}

function Agent_OnTimeZoneCommand_SelectZone() 
{
    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone1_Text = "�� ����� ǥ�� �ð���� �׸���ġ ǥ�� �ð�(GMT)�� �ð��� ���ϰų� ���� ǥ���մϴ�.";
    Agent_Speak(L_TellUserHowToSelectTimeZone1_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone2_Text = "���⸦ ���콺�� Ŭ���ϰų� ����� �̵��� ������ Ű������ <Tab> Ű�� �����ʽÿ�. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone2_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Right");

    var L_TellUserHowToSelectTimeZone3_Text = "ǥ�� �ð��븦 ��ũ���ؼ� ������ ȭ��ǥ ���߸� Ŭ���ϰų� Ű���忡�� ���� �� �Ʒ��� ȭ��ǥ Ű�� ����Ͻʽÿ�. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone3_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone4_Text = "���ϴ� ǥ�� �ð��밡 ǥ�õǸ� ���콺 ���߷� Ŭ���ϰų� Ű���忡�� <Enter> Ű�� �����ʽÿ�.";
    Agent_Speak(L_TellUserHowToSelectTimeZone4_Text);

    var L_TellUserHowToSelectTimeZone5_Text = "������ ǥ�� �ð��밡 �����Ǿ� ��Ÿ���ϴ�.";
    Agent_Speak(L_TellUserHowToSelectTimeZone5_Text);

    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserHowToSelectTimeZone6_Text = "�ϱ� ���� �ð����� ����ϴ� ������ ��� �ִ� ��쿡�� �� �ɼ��� �����Ͻʽÿ�.";
    Agent_Speak(L_TellUserHowToSelectTimeZone6_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone7_Text = "�ϳ⿡ �� ���� ��ǻ���� �ð谡 �ڵ����� �����˴ϴ�.";
    Agent_Speak(L_TellUserHowToSelectTimeZone7_Text);
    
}

function Agent_OnTimeZoneCommand_DaylightSavings() 
{
    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserAboutDaylightOption1_Text = "�Ϻ� ǥ�� �ð��뿡���� �ϱ� ���� �ð����� ���߾� �ð踦 �ڵ����� �����մϴ�.";
    Agent_Speak(L_TellUserAboutDaylightOption1_Text);
    
    Agent_Play("RestPose");

    var L_TellUserAboutDaylightOption2_Text = "�ϱ� ���� �ð����� ���۵� �� �ý����� �ð谡 �ڵ����� �����ǵ��� �Ϸ��� ���콺 �����͸� ����� �̵��� �� �� �� Ŭ���Ͽ� �� �ɼ��� �����Ͻʽÿ�.";
    Agent_Speak(L_TellUserAboutDaylightOption2_Text);

}



function Agent_OEMHWAddCommands() 
{
    var L_OEMHWMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_OEMHWMenuCommand2_Text = "���� �ý����� �۵��ϴ��� ��� �� �� �ֽ��ϱ�(&O)?";
    var L_OEMHWMenuCommand3_Text = "��ǻ�Ϳ��� �Ҹ��� �鸮�� ������ ��� �մϱ�(&A)?";
    var L_OEMHWMenuCommand4_Text = "������ ���� ����� ��� �����մϱ�(&D)?";

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
    var L_OEMHWAboutThisScreen1_Text = "�� ȭ�鿡���� ��ǻ���� ���� �ý����� �ùٸ��� �۵��ϴ��� Ȯ���մϴ�.";
	  Agent_Speak(L_OEMHWAboutThisScreen1_Text);

    var L_OEMHWAboutThisScreen2_Text = "���� �ý����� ��ǻ�Ϳ� ��� �ִ� ���� ī��, ���带 ������ִ� %1 ����Ʈ���� �� ����Ŀ�� �����˴ϴ�.";
	  Agent_Speak(ApiObj.formatMessage(L_OEMHWAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnOEMHWHowDoIKnow() 
{
    var L_OEMHWHowDoIKnow1_Text = "�Ҹ��� �鸮�� ����� �۵��ϴ� ���Դϴ�.";
	  Agent_Speak(L_OEMHWHowDoIKnow1_Text);

    var L_OEMHWHowDoIKnow2_Text = "�Ҹ��� �鸮�� ������ ����Ŀ ������ ���� Ȯ���ؾ� �մϴ�.";
	  Agent_Speak(L_OEMHWHowDoIKnow2_Text);

    var L_OEMHWHowDoIKnow3_Text = "������ ������ �Ҹ��� �鸮�� ������ �ٸ� ����� �õ��� �� �� �ֽ��ϴ�.";
	  Agent_Speak(L_OEMHWHowDoIKnow3_Text);
}

function Agent_OnOEMHWIsNotWorking() 
{
    var L_OEMHWIsNotWorking1_Text = "ù ��°, ����Ŀ ������ ���� �ִ��� Ȯ���� ���ʽÿ�.";
	  Agent_Speak(L_OEMHWIsNotWorking1_Text);
	
    var L_OEMHWIsNotWorking2_Text = "���� ǥ�õ��� �ִ� ����Ŀ�� ���, ǥ�õ��� Ȯ���� ���ʽÿ�.";
	  Agent_Speak(L_OEMHWIsNotWorking2_Text);

    var L_OEMHWIsNotWorking3_Text = "�� ��°, ������ �����ϰ� �����Ǿ� �ִ��� Ȯ���� ���ʽÿ�.";
	  Agent_Speak(L_OEMHWIsNotWorking3_Text);

    var L_OEMHWIsNotWorking4_Text = "������ Ȯ���� �Ŀ��� ����Ŀ���� �Ҹ��� �鸮�� ������...";
	  Agent_Speak(L_OEMHWIsNotWorking4_Text);

    var L_OEMHWIsNotWorking5_Text = "�� ��°, ����Ŀ�� �ܼ�Ʈ �� ��ǻ�Ϳ� �ùٸ��� ����Ǿ� �ִ��� Ȯ���� ���ʽÿ�.";
	  Agent_Speak(L_OEMHWIsNotWorking5_Text);
	
	  var L_OEMHWIsNotWorking6_Text = "��ǻ���� ����ũ�� ����Ŀ�� ���� �߸� ����Ǿ� �ֱ� ����Ƿ� �� ������ Ȯ���ؾ� �մϴ�.";
	  Agent_Speak(L_OEMHWIsNotWorking6_Text);

    var L_OEMHWIsNotWorking7_Text = "�� ��°��, ���׷��� ����Ŀ�� ����ϰ� ���� ���, �� ���� ����Ŀ�� ���� ����Ǿ� �ִ��� Ȯ���� ���ʽÿ�.";
	  Agent_Speak(L_OEMHWIsNotWorking7_Text);

    var L_OEMHWIsNotWorking8_Text = "��� �Ҹ��� �鸮�� �ʴ� ���, �ٸ� ����Ŀ�� ������ ���ʽÿ�.";
	  Agent_Speak(L_OEMHWIsNotWorking8_Text);

    var L_OEMHWIsNotWorking9_Text = "�ٸ� ����Ŀ�� �����Ͽ� �Ҹ��� �鸮�� ������ ����Ŀ�� ������ �ִ� ���Դϴ�.";
	  Agent_Speak(L_OEMHWIsNotWorking9_Text);
}

function Agent_OnOEMHWIndicateAnswer() 
{
	  Agent_GestureAtElement(g.document.all("Sound_Yes"), "Left");
    
    var L_OEMHWIndicateAnswer1_Text = "���콺 �����͸� �׸� ���� ��� ���ö� ���� �̵��� ��";
	  Agent_Speak(L_OEMHWIndicateAnswer1_Text);
    
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("radioNoSound"), "Left");

    var L_OEMHWIndicateAnswer2_Text = "���콺�� �� �� Ŭ���Ͻʽÿ�.";
	  Agent_Speak(L_OEMHWIndicateAnswer2_Text);
    
    Agent_Play("RestPose");

    var L_OEMHWIndicateAnswer3_Text = "Ű���带 ����Ͽ� �׸��� �����Ϸ���, �����Ϸ��� �׸��� ��� ���ö� ������ �������� ǥ�õǴ� ���簢���� ��Ÿ�� ������ <Tab> Ű�� ���� ����, �����̽��ٸ� �����ʽÿ�.";
	  Agent_Speak(L_OEMHWIndicateAnswer3_Text);
}




function Agent_CompNameAddCommands() 
{
    var L_CompNameMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_CompNameMenuCommand2_Text = "��ǻ�� �̸� ���濡 ���� ����(&O)";

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
    var L_CompNameAboutThisScreen1_Text = "�� �ܰ迡���� ��ǻ���� �̸��� ������ �� �ֽ��ϴ�.";
	  Agent_Speak(L_CompNameAboutThisScreen1_Text);

    var L_CompNameAboutThisScreen2_Text = "��ǻ�Ͱ� ��Ʈ��ũ���� �ٸ� ��ǻ�Ϳ� ����Ǿ� ���� ���, �� �ܰ迡�� ������ �̸��� ����Ͽ� ��ǻ�͸� �ĺ��� �� �ֽ��ϴ�.";
	  Agent_Speak(L_CompNameAboutThisScreen2_Text);
}

function Agent_OnCompNameHowToRename() 
{
    var L_CompNameHowToRename1_Text = "Windows ��ġ�� ��ģ �� [����] �޴����� [������]�� Ŭ���Ͻʽÿ�.";
	  Agent_Speak(L_CompNameHowToRename1_Text);

    var L_CompNameHowToRename2_Text = "[���� �� ���� ����]���� [�ý���] �������� Ŭ���ϰ� [��ǻ�� �̸�] �ǿ� ��Ÿ���� ���� �����ʽÿ�.";
	  Agent_Speak(L_CompNameHowToRename2_Text);

    var L_CompNameHowToRename3_Text = "���� ����� ��ﳪ�� �ʴ� ���, ���߿��� [����] �޴��� [���� �� ����]�� Ŭ���Ͽ� ������ ���ų� ��Ÿ ������ �����Ͻʽÿ�.";
	  Agent_Speak(L_CompNameHowToRename3_Text);
}




function Agent_SECURITYPASSAddCommands() 
{
    var L_SECURITYPASSMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_SECURITYPASSMenuCommand2_Text = "��ȣ�� ����� ���� ���� ����� �����Դϱ�(&A)?";

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
    var L_SECURITYPASSAboutThisScreen1_Text = "������ ���� ����ڰ� �� ��ǻ�Ϳ� �׼������� ���ϵ��� �� �ܰ迡�� ��ȣ�� ������ �� �ֽ��ϴ�.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen1_Text);

    var L_SECURITYPASSAboutThisScreen2_Text = "����: ���� �� ��ǻ�Ͱ� ��Ʈ��ũ���� �ٸ� ��ǻ�Ϳ� ����Ǿ� ������, \"Administrator\" ����� �̸� �� ��ȣ�� �α׿��ϴ� �� ����ڴ� ��ü ��Ʈ��ũ�� �׼����� �� �ְ� �˴ϴ�.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen2_Text);
    
    var L_SECURITYPASSAboutThisScreen3_Text = "���� ��ǻ�� �� ��Ʈ��ũ(�ִ� ���)�� ��ȣ�ϱ� ���� ������ ������ ��ȣ�� �����ϴ� ���� �����ϴ�.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen3_Text);
}

function Agent_OnSECURITYPASSBestWay() 
{
    var L_SECURITYPASSBestWay1_Text = "��ȣ�� ���ȼ��� ���̱� ���ؼ��� �빮��, �ҹ��� �� ��ȣ �� �ּ� �� ���� ��Ҹ� ��ȣ�� �����ϴ� ���� �����ϴ�.";
	  Agent_Speak(L_SECURITYPASSBestWay1_Text);

    var L_SECURITYPASSBestWay2_Text = "���ڸ� �������� �����Ͽ� ��ȣ�� �ۼ��ϸ� ������ ���� �� �ֽ��ϴ�.";
	  Agent_Speak(L_SECURITYPASSBestWay2_Text);

    var L_SECURITYPASSBestWay3_Text = "��ȣ�� 127�ڱ��� ����� �� �ֽ��ϴ�.";
	  Agent_Speak(L_SECURITYPASSBestWay3_Text);
    
    var L_SECURITYPASSBestWay4_Text = "Windows 95 �Ǵ� Windows 98�� ��ġ�� ��ǻ�Ͱ� �ִ� ��Ʈ��ũ���� �ش� ��ǻ�͸� ����Ͽ� ��Ʈ��ũ�� �α׿��Ϸ���, 14�� ������ ���̷� ��ȣ�� �ۼ��ؾ� �մϴ�.";
	  Agent_Speak(L_SECURITYPASSBestWay4_Text);
}



function Agent_JOINDOMAINAddCommands() 
{
    var L_JOINDOMAINMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_JOINDOMAINMenuCommand2_Text = "�������̶� �����Դϱ�(&A)?";
    var L_JOINDOMAINMenuCommand3_Text = "�����ο� ��� �����մϱ�(&O)?"; 
    var L_JOINDOMAINMenuCommand4_Text = "���� �۾��� ���� ����(&W)";


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
    var L_JOINDOMAINAboutThisScreen1_Text = "�� �ܰ迡���� ��ǻ�͸� �������� ���������� ������ ������ ���θ� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen1_Text);

    var L_JOINDOMAINAboutThisScreen2_Text = "�����ο� �����Ϸ��� ��쿡�� �� ��ǻ�Ͱ� ���Ե� ������ �̸��� �Է��ؾ� �մϴ�.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen2_Text);
}

function Agent_OnJOINDOMAINDifference() 
{
    var L_JOINDOMAINDifference1_Text = "�������� �ϳ��� ������ �����Ǵ� ��ǻ���� �����Դϴ�.";
    Agent_Speak(L_JOINDOMAINDifference1_Text);
    
    var L_JOINDOMAINDifference2_Text = "Ư�� ������ �繫�ǿ� �ִ� ��� ��ǻ�͸� �ϳ��� �����ο� �߰��Ͽ�, ������ �׼��� ������ �����ϰ�, ���� �����Ϳ� �����ϵ��� �� �� �ֽ��ϴ�.";
    Agent_Speak(L_JOINDOMAINDifference2_Text);

    var L_JOINDOMAINDifference3_Text = "� �ɼ��� ������� �� �𸣸� [�ƴϿ�]�� ������ �� [����] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_JOINDOMAINDifference3_Text);
}

function Agent_OnJOINDOMAINHowToName() 
{
 	  Agent_GestureAtElement(g.document.all("radioYesDomain"), "Left");
 
    var L_JOINDOMAINHowToName1_Text = "�����ο� �����ϴ� �ɼ��� �����ϸ�";
    Agent_Speak(L_JOINDOMAINHowToName1_Text);
      
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("textboxDomain"), "Left");
  
    var L_JOINDOMAINHowToName2_Text = "�ش� �ɼ� �Ʒ��� �ִ� �Է¶��� �̸��� �Է��� �� �ֽ��ϴ�.";
    Agent_Speak(L_JOINDOMAINHowToName2_Text);
      
    Agent_Play("RestPose");
  
    var L_JOINDOMAINHowToName3_Text = "������ ���� �ɼ��� �������� ���� ��쿡�� �̸��� �Է��� �� �����ϴ�.";
    Agent_Speak(L_JOINDOMAINHowToName3_Text);
  
    var L_JOINDOMAINHowToName4_Text = "������ ���� �ɼ��� �����ϱ� ������ �Է¶��� ����� �� �����Ƿ� �̸��� �Է��� �� �����ϴ�.";
    Agent_Speak(L_JOINDOMAINHowToName4_Text);
  
    var L_JOINDOMAINHowToName5_Text = "�� ��ǻ�͸� �����ο� �����ϱ� ���ϴ� ���, ��Ʈ��ũ �����ڿ��� ������ �̸��� �����Ͻʽÿ�.";
    Agent_Speak(L_JOINDOMAINHowToName5_Text);
  
    var L_JOINDOMAINHowToName6_Text = "�����ο� �������� ������ �̸��� ������ �ʿ䰡 �����ϴ�.";
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
    
    var L_JOINDOMAINWhatToDoNext1_Text = "������ �Ŀ� [����]�� Ŭ���Ͻʽÿ�.";
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
    
    var L_JOINDOMAINWhatToDoNext2_Text = "���� �ܰ�� ���ư����� [�ڷ�]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_JOINDOMAINWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}




function Agent_JNDOM_AAddCommands() 
{
    var L_JNDOMAMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_JNDOMAMenuCommand2_Text = "����� �̸� �� ��ȣ�� ��� �Է��մϱ�(&P)?";
    var L_JNDOMAMenuCommand3_Text = "�������̶� �����Դϱ�(&A)?";
    var L_JNDOMAMenuCommand4_Text = "���� �۾��� ���� ����(&W)";
    
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
    var L_JNDOM_A_AboutThisStep1_Text = "������ �� ��ǻ�͸� �����ο� ���Խ�Ű�� ������ �ִ� ����� Ȯ���ϴ� ȭ���Դϴ�.";
  	Agent_Speak(L_JNDOM_A_AboutThisStep1_Text);
}

function Agent_OnJNDOM_AHowToEnter() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_HowToEnter1_Text = "���⿡ �Է��ϴ� �̸��� ������ ���� �ٸ� ����� �̸� �߿� �����ؾ� �մϴ�.";
    Agent_Speak(L_JNDOM_A_HowToEnter1_Text);
      
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_HowToEnter2_Text = "���⿡ �Է��ϴ� ��ȣ�� ����� ������ ��ȣ�� ��ġ�ؾ� �մϴ�.";
    Agent_Speak(L_JNDOM_A_HowToEnter2_Text);
      
    Agent_Play("RestPose");
    
    var L_JNDOM_A_HowToEnter3_Text = "� ����� ���� �� ��ȣ�� ����ؾ� �ϴ��� �𸣸� ��Ʈ��ũ �����ڿ��� �����Ͻʽÿ�.";
    Agent_Speak(L_JNDOM_A_HowToEnter3_Text);
}

function Agent_OnJNDOM_AWhatIsDomain() 
{
    var L_JNDOM_A_WhatIsDomain1_Text = "�������� �ϳ��� ������ �����Ǵ� ��ǻ���� �����Դϴ�.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain1_Text);
  	
    var L_JNDOM_A_WhatIsDomain2_Text = "Ư�� ������ �繫�ǿ� �ִ� ��� ��ǻ�͸� �ϳ��� �����ο� �߰��Ͽ�, ������ �׼��� ������ �����ϰ�, ���� �����Ϳ� �����ϵ��� �� �� �ֽ��ϴ�.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain2_Text);
      
    Agent_Play("RestPose");		
}

function Agent_OnJNDOM_AWhatToDoNext() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_WhatToDoNext1_Text = "����� �̸��� ���⿡ �Է��� ��";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext1_Text);
      
    Agent_Play("RestPose");		
  	
    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_WhatToDoNext2_Text = "����� ��ȣ�� ���⿡ �Է��Ͻʽÿ�.";
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
    
    var L_JNDOM_A_WhatToDoNext3_Text = "[����] ���߸� Ŭ���Ͻʽÿ�.";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext3_Text);
      
    Agent_Play("RestPose");		
}



function Agent_ActivationAddCommands() 
{
    var L_ActivationMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_ActivationMenuCommand2_Text = "��ǰ ������ ���� ����(&M)";
    var L_ActivationMenuCommand3_Text = "���߿� ��ǰ ������ �޴� ����� ���� ����(&O)";
    var L_ActivationMenuCommand4_Text = "���ͳݿ� �������� �ʴ� ��쿡�� ��� ��ǰ ������ �޽��ϱ�(&D)?";
    var L_ActivationMenuCommand5_Text = "��ǰ ������ ���� ���� ��� ��� �˴ϱ�(&A)?";
    var L_ActivationMenuCommand6_Text = "���� �۾��� ���� ����(&W)";

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
    
    var L_ActivationAboutThisScreen1_Text = "���⿡���� %1 ��ǰ ������ ���� ���� ������, �ƴϸ� ���߿� ���� ������ �����մϴ�.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutThisScreen1_Text, g_ProductName));
    
    var L_ActivationAboutThisScreen2_Text = "���߿� [����] �޴����� [��ǰ ���� ������]�� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_ActivationAboutThisScreen2_Text);
    
    var L_ActivationAboutThisScreen3_Text = "���� Windows�� ��� ����� �� �ֵ��� �� �� �������� ��ǰ ������ ���� �˷��ݴϴ�.";
    Agent_Speak(L_ActivationAboutThisScreen3_Text);
}

function Agent_OnActivationAboutActivation() 
{
    var L_ActivationAboutActivation1_Text = "�Ϲ������� ���࿡�� �� ���� ī�峪 �ſ� ī�带 ������ ���࿡ ī�带 '����'���� ���� ��û�ؾ� ����� �� �ֽ��ϴ�.";
    Agent_Speak(L_ActivationAboutActivation1_Text);
    
    var L_ActivationAboutActivation2_Text = "������ �ϸ� ���ε��� ���� ����ڰ� ī�带 ������� ���ϵ��� �Ͽ� ����ڿ� ������ ��ȣ�� �� �ֽ��ϴ�.";
    Agent_Speak(L_ActivationAboutActivation2_Text);
    
    var L_ActivationAboutActivation3_Text = "��ǰ ������ �ޱ� ���� ������ �Ⱓ ���� %2��(��) ����� �� �ִٴ� ���� �����ϸ� %1 ��ǰ ������ ���� ����Դϴ�.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationHowToActivateLater() 
{
    var L_ActivationHowToActivateLater1_Text = "���� ��ǰ ������ ���� �ʴ� ��쿡�� �� �� �������� %1 ���� ȭ�鿡 ���� �˸��� ǥ�õ˴ϴ�.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationHowToActivateLater1_Text, g_ProductName));
    
    var L_ActivationHowToActivateLater2_Text = "[����] �޴����� [Windows ��ǰ ����]�� Ŭ���ϸ� [��ǰ ���� ������]�� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_ActivationHowToActivateLater2_Text);
    
    var L_ActivationHowToActivateLater3_Text = "���� ����� ��ﳪ�� �ʴ� ���, ���߿��� [����] �޴��� [���� �� ����]�� Ŭ���Ͽ�, ������ ���ų� ��Ÿ ������ �����Ͻʽÿ�.";
    Agent_Speak(L_ActivationHowToActivateLater3_Text);
}

function Agent_OnActivationHowToActivateUnconnected() 
{
    Agent_GestureAtElement(g.rb_act_2, "Left");
    	
    var L_ActivationHowToActivateUnconnected1_Text = "���⿡�� \"�ƴϿ�\"�� �����Ͻʽÿ�.";
    Agent_Speak(L_ActivationHowToActivateUnconnected1_Text);
    
    Agent_Play("RestPose");
    
    var L_ActivationHowToActivateUnconnected2_Text = "Windows ��ġ�� ������ [����] �޴����� [Windows ��ǰ ����]�� Ŭ���Ͽ� [��ǰ ���� ������]�� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_ActivationHowToActivateUnconnected2_Text);
    
    var L_ActivationHowToActivateUnconnected3_Text = "�����翡�� ��ȭ�� Windows ��ǰ ������ ���� �� �ִ� ��ȭ ��ȣ�� �����ݴϴ�.";
    Agent_Speak(L_ActivationHowToActivateUnconnected3_Text);
}

function Agent_OnActivationWhatHappensNoActivate() 
{
    var L_ActivationWhatHappensNoActivate1_Text = "��ǰ ���� �Ⱓ�� ����� �������� %1��(��) ��� ����� �� �ֽ��ϴ�.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate1_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate2_Text = "�� �Ⱓ�� ���� �� %1�� ��ǰ ������ �޾ƾ߸� ��� ����� �� �ֽ��ϴ�.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate2_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate3_Text = "��ǰ ���� �Ⱓ�� ���� �Ŀ��� �� �̻� %1��(��) ����� �� �����ϴ�.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate3_Text, g_ProductName));
}

function Agent_OnActivationWhatToDoNext() 
{
    Agent_GestureAtElement(g.act_spn1, "Left");
    
    var L_ActivationWhatToDoNext1_Text = "���ϴ� �׸��� ������ ��";
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
            
    var L_ActivationWhatToDoNext2_Text = "[����] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_ActivationWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");	
}



function Agent_ActivationErrorAddCommands() 
{
    var L_ActivationErrorMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_ActivationErrorMenuCommand2_Text = "��ǰ ������ ���� ����(&M)";
    var L_ActivationErrorMenuCommand3_Text = "���߿� ��ǰ ������ �޴� ����� ���� ����(&O)";
    var L_ActivationErrorMenuCommand4_Text = "���ͳݿ� �������� �ʴ� ��쿡�� ��� ��ǰ ������ �޽��ϱ�(&D)?";
    var L_ActivationErrorMenuCommand5_Text = "��ǰ ������ ���� ���� ��� ��� �˴ϱ�(&A)?";


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
    var L_ActivationErrorAboutThisScreen1_Text = "�� ȭ���� ��ǰ ���� ���Ϳ� �������� ���߱� ������ ��Ÿ�� ���Դϴ�.";
	Agent_Speak(L_ActivationErrorAboutThisScreen1_Text);
	
    var L_ActivationErrorAboutThisScreen2_Text = "%1 ��ġ�� ������ [����] �޴��� [Windows ��ǰ ����]�� Ŭ���Ͽ� [��ǰ ���� ������]�� ������ �� �ֽ��ϴ�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnActivationErrorAboutActivation() 
{
    var L_ActivationErrorAboutActivation1_Text = "�Ϲ������� ���࿡�� �� ���� ī�峪 �ſ� ī�带 ������ ���࿡ ī�带 '����'���� ���� ��û�ؾ� ����� �� �ֽ��ϴ�.";
	Agent_Speak(L_ActivationErrorAboutActivation1_Text);
	
    var L_ActivationErrorAboutActivation2_Text = "������ �ϸ� ���ε��� ���� ����ڰ� ī�带 ������� ���ϵ��� �Ͽ� ����ڿ� ������ ��ȣ�� �� �ֽ��ϴ�.";
	Agent_Speak(L_ActivationErrorAboutActivation2_Text);
	
    var L_ActivationErrorAboutActivation3_Text = "��ǰ ������ �ޱ� ���� ������ �Ⱓ ���� %2��(��) ����� �� �ִٴ� ���� �����ϸ� %1 ��ǰ ������ ���� ����Դϴ�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationErrorHowToActivateLater() 
{
    var L_ActivationErrorHowToActivateLater1_Text = "���� ��ǰ ������ ���� �ʴ� ��쿡�� �� �� �������� %1 ���� ȭ�鿡 ���� �˸��� ǥ�õ˴ϴ�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationErrorHowToActivateLater2_Text = "[����] �޴����� [Windows ��ǰ ����]�� Ŭ���ϸ� [��ǰ ���� ������]�� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_ActivationErrorHowToActivateLater2_Text);
	
    var L_ActivationErrorHowToActivateLater3_Text = "���� ����� ��ﳪ�� �ʴ� ���, ���߿��� [����] �޴��� [���� �� ����]�� Ŭ���Ͽ�, ������ ���ų� ��Ÿ ������ �����Ͻʽÿ�.";
	Agent_Speak(L_ActivationErrorHowToActivateLater3_Text);
}

function Agent_OnActivationErrorHowToActivateUnconnected() 
{
    var L_ActivationErrorHowToActivateUnconnected1_Text = "Windows ��ġ�� ������ [����] �޴����� [Windows ��ǰ ����]�� Ŭ���Ͽ� [��ǰ ���� ������]�� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected1_Text);
	
    var L_ActivationErrorHowToActivateUnconnected2_Text = "�����翡�� ��ȭ�� Windows ��ǰ ������ ���� �� �ִ� ��ȭ ��ȣ�� �����ݴϴ�.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected2_Text);
}

function Agent_OnActivationErrorWhatHappensNoActivate() 
{
    var L_ActivationErrorWhatHappensNoActivate1_Text = "��ǰ ���� �Ⱓ�� ����� �������� %1��(��) ��� ����� �� �ֽ��ϴ�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate2_Text = "�� �Ⱓ�� ���� �� %1�� ��ǰ ������ �޾ƾ߸� ��� ����� �� �ֽ��ϴ�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate3_Text = "��ǰ ���� �Ⱓ�� ���� �Ŀ��� �� �̻� %1��(��) ����� �� �����ϴ�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_ActivationPrivacyPolicyAddCommands() 
{
    var L_ActivationPrivacyPolicyMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_ActivationPrivacyPolicyMenuCommand2_Text = "��ǰ ������ ���� ����(&M)";
    var L_ActivationPrivacyPolicyMenuCommand3_Text = "���߿� ��ǰ ������ �޴� ����� ���� ����(&O)";
    var L_ActivationPrivacyPolicyMenuCommand4_Text = "���ͳݿ� �������� �ʴ� ��쿡�� ��� ��ǰ ������ �޽��ϱ�(&D)?";
    var L_ActivationPrivacyPolicyMenuCommand5_Text = "��ǰ ������ ���� ���� ��� ��� �˴ϱ�(&A)?";


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
    var L_ActivationPrivacyPolicyAboutThisScreen1_Text = "���⿡���� %1 ��ǰ ���� �� ���� ������ ��� ��ȣ�Ǵ����� �����մϴ�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutThisScreen1_Text, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyAboutActivation() 
{
    var L_ActivationPrivacyPolicyAboutActivation1_Text = "�Ϲ������� ���࿡�� �� ���� ī�峪 �ſ� ī�带 ������ ���࿡ ī�带 '����'���� ���� ��û�ؾ� ����� �� �ֽ��ϴ�.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation1_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation2_Text = "������ �ϸ� ���ε��� ���� ����ڰ� ī�带 ������� ���ϵ��� �Ͽ� ����ڿ� ������ ��ȣ�� �� �ֽ��ϴ�.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation2_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation3_Text = "��ǰ ������ �ޱ� ���� ������ �Ⱓ ���� %2��(��) ����� �� �ִٴ� ���� �����ϸ� %1 ��ǰ ������ ���� ����Դϴ�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyHowToActivateLater() 
{
    var L_ActivationPrivacyPolicyHowToActivateLater1_Text = "���� ��ǰ ������ ���� �ʴ� ��쿡�� �� �� �������� %1 ���� ȭ�鿡 ���� �˸��� ǥ�õ˴ϴ�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyHowToActivateLater2_Text = "[����] �޴����� [Windows ��ǰ ����]�� Ŭ���ϸ� [��ǰ ���� ������]�� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater2_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateLater3_Text = "���� ����� ��ﳪ�� �ʴ� ���, ���߿��� [����] �޴��� [���� �� ����]�� Ŭ���Ͽ�, ������ ���ų� ��Ÿ ������ �����Ͻʽÿ�.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater3_Text);
}

function Agent_OnActivationPrivacyPolicyHowToActivateUnconnected() 
{
    var L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text = "Windows ��ġ�� ������ [����] �޴����� [Windows ��ǰ ����]�� Ŭ���Ͽ� [��ǰ ���� ������]�� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text = "�����簡 ��ȭ�� Windows ��ǰ ������ ���� �� �ִ� ��ȭ ��ȣ�� �����ݴϴ�.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text);
}

function Agent_OnActivationPrivacyPolicyWhatHappensNoActivate() 
{
    var L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text = "ActivationPrivacyPolicy �Ⱓ�� ����� �������� %1��(��) ��� ����� �� �ֽ��ϴ�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text = "�� �Ⱓ�� ���� �� %1�� ��ǰ ������ �޾ƾ߸� ��� ����� �� �ֽ��ϴ�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text = "ActivationPrivacyPolicy �Ⱓ�� ���� �Ŀ��� �� �̻� %1��(��) ����� �� �����ϴ�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_DSLMAINAddCommands() 
{
    var L_DSLMAINMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_DSLMAINMenuCommand2_Text = "����� �̸��� ��ȣ�� �ʿ��� ����(&S)";
    var L_DSLMAINMenuCommand3_Text = "���� �۾��� ���� ����(&W)";
    
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
    var L_DSLMAINAboutThisScreen1_Text = "���⿡���� �� ��ǻ�Ϳ��� ���ͳݿ� �׼����ϴ� �� ����� �̸��� ��ȣ�� �ʿ����� ���θ� �����մϴ�.";
	Agent_Speak(L_DSLMAINAboutThisScreen1_Text);
}

function Agent_OnDSLMAINSomeReasons() 
{
    var L_DSLMAINHowToMoveOn1_Text = "��ǻ�͸� ȥ�� ����� ���� %1���� �ڵ����� ����� �̸��� ��ȣ�� �����ϵ��� �ϴ� ���� ���մϴ�.";
	Agent_Speak(ApiObj.FormatMessage(L_DSLMAINHowToMoveOn1_Text, g_ProductName));
	
    var L_DSLMAINHowToMoveOn2_Text = "�׷��� ���ͳݿ� ������ ������ ���� ������ �Է��� �ʿ䰡 �����ϴ�.";
	Agent_Speak(L_DSLMAINHowToMoveOn2_Text);
	
    var L_DSLMAINHowToMoveOn3_Text = "������ �ٸ� ����� ��ǻ�͸� ������ ���, ���ͳ� ������ �����ϰ� ���� ������ ����� �̸��� ��ȣ�� �����Ͽ� ����� ������ ��ȣ�� �� �ֽ��ϴ�.";
	Agent_Speak(L_DSLMAINHowToMoveOn3_Text);
	
    var L_DSLMAINHowToMoveOn4_Text = "���� ���, �� ��ǻ�Ϳ��� ������ �ϸ鼭 �� �� �ֵ��� ���̵�� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_DSLMAINHowToMoveOn4_Text);
	
    var L_DSLMAINHowToMoveOn5_Text = "������ ������� �㰡 ���̴� �ٸ� ����ڰ� ���ͳ��� Ž���� �� �����ϴ�.";
	Agent_Speak(L_DSLMAINHowToMoveOn5_Text);		
}

function Agent_OnDSLMAINWhatToDoNext()
{	
	Agent_GestureAtElement(g.dslmain_TitleText, "Left");
	
    var L_DSLMAINWhatToDoNext1_Text = "���ϴ� �׸��� ������ ��";
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
	
	var L_DSLMAINWhatToDoNext2_Text = "[����] ���߸� Ŭ���Ͻʽÿ�.";
	Agent_Speak(L_DSLMAINWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");
}



function Agent_DSL_AAddCommands() 
{
    var L_DSLAMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_DSLAMenuCommand2_Text = "���ͳݿ� ���� ����(&A)";
    var L_DSLAMenuCommand3_Text = "���ͳݿ� �����Ϸ��� ��� �ؾ� �մϱ�(&D)?";
    var L_DSLAMenuCommand4_Text = "���ͳ� ��Ͽ� ���� ����(&E)";

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
    var L_DSL_A_AboutThisStep1_Text = "���⿡���� ���ͳ� ���� ������(\"ISP\") ������ �����Ͽ� ��ǻ�Ϳ��� ���ͳݿ� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_DSL_A_AboutThisStep1_Text);
}

function Agent_DSL_AWhatIsInternet() 
{
    var L_DSL_A_WhatIsInternet1_Text = "���ͳ��� ������������ ����� ��ǻ�� ��Ʈ��ũ�Դϴ�.";
	Agent_Speak(L_DSL_A_WhatIsInternet1_Text);
	
    var L_DSL_A_WhatIsInternet2_Text = "���ͳݿ� �����ϸ� �б�, ����, ���ü, ���� ���� ������ �� �鸸 ���� ���� ������ �ִ� ���� ������ �˻��� �� �ֽ��ϴ�.";
	Agent_Speak(L_DSL_A_WhatIsInternet2_Text);
	
    var L_DSL_A_WhatIsInternet3_Text = "World Wide Web(\"��\")�� �����۸�ũ�� ����Ͽ� ���ͳ��� Ž���ϱ� ���� �ý����Դϴ�.";
	Agent_Speak(L_DSL_A_WhatIsInternet3_Text);
	
    var L_DSL_A_WhatIsInternet4_Text = "�����۸�ũ�� ������ �� �ٸ� �� ������ �Ǵ� ���� �������� �ٸ� �κ����� �̵��ϰų� ���α׷��� ���� ���� Ư�� ������ �����ϴ� �ؽ�Ʈ �Ǵ� �׸��Դϴ�.";
	Agent_Speak(L_DSL_A_WhatIsInternet4_Text);
	
    var L_DSL_A_WhatIsInternet5_Text = "���� Ž���� ���� �� �������� ����մϴ�. �� �������� ���ͳݻ� �ִ� �ؽ�Ʈ, �׸�, ���� �� ������ ������ ���� ������ ǥ���ϴ� ���α׷��Դϴ�.";
	Agent_Speak(L_DSL_A_WhatIsInternet5_Text);
	
    var L_DSL_A_WhatIsInternet6_Text = "Microsoft������ �� ���� �� �������� �����մϴ�.";
	Agent_Speak(L_DSL_A_WhatIsInternet6_Text);
	
    var L_DSL_A_WhatIsInternet7_Text = "MSN Explorer�� Internet Explorer�� �����ϸ�, MSN Explorer�� �ʺ��ڿ� �������� ��ǻ�͸� ����ϴ� ������� �����մϴ�.";
	Agent_Speak(L_DSL_A_WhatIsInternet7_Text);
}

function Agent_DSL_ANeedToConnect() 
{	
    var L_DSL_A_NeedToConnect1_Text = "���ͳݿ� �����Ϸ��� ���� �� ������ �����ؾ� �մϴ�.";
	Agent_Speak(L_DSL_A_NeedToConnect1_Text);	
	
    var L_DSL_A_NeedToConnect2_Text = "ù°, ��ǻ�Ͱ� �ʿ��մϴ�.";
	Agent_Speak(L_DSL_A_NeedToConnect2_Text);
	
    var L_DSL_A_NeedToConnect3_Text = "��°, ���ͳ� ���� ������(\"ISP\")�� �ʿ��մϴ�.";
	Agent_Speak(L_DSL_A_NeedToConnect3_Text);
	
    var L_DSL_A_NeedToConnect4_Text = "��ȭ ȸ�翡�� ��ȭ ���񽺸� �����ϴ� ��ó�� ISP�� ���ͳ� ���� �Ǵ� �׼����� �����մϴ�.";
	Agent_Speak(L_DSL_A_NeedToConnect4_Text);
	
    var L_DSL_A_NeedToConnect5_Text = "��ǻ�Ϳ��� ���ͳ� ������ ������ �� ISP�� ���� ���, ã�� �� �ֵ��� ���͵帳�ϴ�.";
	Agent_Speak(L_DSL_A_NeedToConnect5_Text);
	
    var L_DSL_A_NeedToConnect6_Text = "��°, ��ǻ�Ϳ� ISP�� ���������� ������ �� ��ġ�� �ʿ��մϴ�.";
	Agent_Speak(L_DSL_A_NeedToConnect6_Text);
	
    var L_DSL_A_NeedToConnect7_Text = "���� ������ �� �ܰ迡�� ������ �۾��Դϴ�.";
	Agent_Speak(L_DSL_A_NeedToConnect7_Text);
}

function Agent_DSL_AInternetSignup() 
{
    var L_DSL_A_AboutThisScreen1_Text = "���ͳ� ������ �̹� �ִ� ��쿡�� ���ͳ� ���� �����ڰ� �� ������ �������ݴϴ�.";
	Agent_Speak(L_DSL_A_AboutThisScreen1_Text);
	
    var L_DSL_A_AboutThisScreen2_Text = "�� ��ǻ���̱� ������ �� ���ͳ� ������ ������ �ʿ�� �����ϴ�.";
	Agent_Speak(L_DSL_A_AboutThisScreen2_Text);
	
    var L_DSL_A_AboutThisScreen3_Text = "���� ��ǻ�Ϳ��� ����ϴ� ���� ������ �״�� ����� �� �ֽ��ϴ�.";
	Agent_Speak(L_DSL_A_AboutThisScreen3_Text);
	
    var L_DSL_A_AboutThisScreen4_Text = "�� ��ǻ�Ϳ��� ���ͳݿ� ó�� �����ϴ� ��쿡�� �� ��ǻ�͸� ������ �� ���ͳ� ���� ������ �޾��� �� �ֽ��ϴ�.";
	Agent_Speak(L_DSL_A_AboutThisScreen4_Text);
	
    var L_DSL_A_AboutThisScreen5_Text = "��ǰ ����ó���� ����� �̸�, ��ȣ �� ISP �̸��� �޾����� �ش� ������ �� ȭ�鿡 �Է��Ͻʽÿ�.";
	Agent_Speak(L_DSL_A_AboutThisScreen5_Text);
}



function Agent_DSL_BAddCommands() 
{

    var L_DSL_B_MenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_DSL_B_MenuCommand2_Text = "IP�� ���� ����(&A)";
    var L_DSL_B_MenuCommand3_Text = "DNS�� ���� ����(&D)";
    var L_DSL_B_MenuCommand4_Text = "���� �۾��� ���� ����(&W)";

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
    var L_DSL_B_AboutThisScreen1_Text = "������ ȭ�鿡�� ������� ���ͳ� ���� ������ �����Ͽ� ���ͳ� ���� ����� �˷��־�� �մϴ�.";
	Agent_Speak(L_DSL_B_AboutThisScreen1_Text);

    var L_DSL_B_AboutThisScreen2_Text = "�� ȭ�鿡���� ��ǻ�͸� ���ͳݿ� ���� �����ϴ� ����� �����մϴ�.";
	Agent_Speak(L_DSL_B_AboutThisScreen2_Text);
}

function Agent_OnDSL_BWhatIsIP() 
{
    var L_DSL_B_WhatIsIP1_Text = "���ͳݿ� ����� ��� ��ǻ�Ϳ��� ���ͳ� ��������(\"IP\") �ּҰ� ������, �� �ּҴ� ���ͳݻ󿡼� �� ��ǻ�͸� �ٸ� ��ǻ�Ϳ� �����ϴ� ���� ��ȣ�Դϴ�.";
	Agent_Speak(L_DSL_B_WhatIsIP1_Text);

    var L_DSL_B_WhatIsIP2_Text = "�Ϲ������� ���ͳݿ� ������ �� ISP�� ����� ��ǻ�Ϳ� IP �ּҸ� �ڵ����� �ο��մϴ�.";
	Agent_Speak(L_DSL_B_WhatIsIP2_Text);

    var L_DSL_B_WhatIsIP3_Text = "������ �� ��쿡�� IP �ּҸ� ���� �Է��ؾ� �մϴ�.";
	Agent_Speak(L_DSL_B_WhatIsIP3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_staticip, "Left");
	
	var L_DSL_B_WhatIsIP4_Text = "ISP�� ���⿡ �Է��� IP �ּҸ� �����մϴ�.";
	Agent_Speak(L_DSL_B_WhatIsIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnDSL_BWhatIsDNS() 
{
    var L_DSL_B_WhatIsDNS1_Text = "���ͳݿ��� �ּҸ� ã������ ���ͳݻ��� ��ǻ�Ϳ� IP�� �Ҵ��ϴ� ������ �̸� ����(DNS)�� ��ǻ�Ͱ� ����Ǿ�� �մϴ�.";
	Agent_Speak(L_DSL_B_WhatIsDNS1_Text);

    var L_DSL_B_WhatIsDNS2_Text = "��κ��� ��� DNS �ּҴ� ISP���� �ڵ����� �Ҵ��մϴ�.";
	Agent_Speak(L_DSL_B_WhatIsDNS2_Text);

    var L_DSL_B_WhatIsDNS3_Text = "ISP�� �����Ϸ��� ��ǻ�Ϳ� DNS �ּҸ� �����ؾ� �մϴ�.";
	Agent_Speak(L_DSL_B_WhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_prefdns, "Left");

    var L_DSL_B_WhatIsDNS4_Text = "ISP�� ���⿡ �Է��� �⺻ ���� DNS�� �����մϴ�.";
	Agent_Speak(L_DSL_B_WhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.dsl_lbl_altdns, "Left");

    var L_DSL_B_WhatIsDNS5_Text = "�⺻ ���� DNS�� ����� �� ���� ��쿡�� ��ü DNS�� �����մϴ�.";
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
	
    var L_DSL_B_WhatToDoNext1_Text = "����Ϸ��� [����] ���߸� Ŭ���Ͻʽÿ�.";
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

    var L_DSL_B_WhatToDoNext2_Text = "���� [�ڷ�] ���߸� Ŭ���Ͽ� ���� �ܰ�� ���ư� �� �ֽ��ϴ�.";
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

    var L_DSL_B_WhatToDoNext3_Text = "�ƴϸ� [�ǳʶٱ�]�� Ŭ���Ͽ� �� ��ǻ�Ϳ� ���ͳ� �׼����� �������� �ʰ� �۾��� ����Ͻʽÿ�.";
	Agent_Speak(L_DSL_B_WhatToDoNext3_Text);
    
    Agent_Play("RestPose");	
}



function Agent_ICONNECTAddCommands() 
{

    var L_ICONNECTMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_ICONNECTMenuCommand2_Text = "���� IP �ּҿ� ���� ����(&A)";
    var L_ICONNECTMenuCommand3_Text = "DNS�� ���� ����(&D)";
    var L_ICONNECTMenuCommand4_Text = "���� �۾��� ���� ����(&W)";

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
    var L_ICONNECTAboutThisScreen1_Text = "������ ȭ�鿡�� ������� ���ͳ� ���� ������ �����Ͽ� ���ͳ� ���� ����� �˷��־�� �մϴ�.";
	Agent_Speak(L_ICONNECTAboutThisScreen1_Text);

    var L_ICONNECTAboutThisScreen2_Text = "�� ȭ�鿡���� ��ǻ�͸� ���ͳݿ� ���� �����ϴ� ����� �����մϴ�.";
	Agent_Speak(L_ICONNECTAboutThisScreen2_Text);
}

function Agent_OnICONNECTWhatIsStaticIP() 
{
    var L_ICONNECTWhatIsStaticIP1_Text = "���ͳݿ� ����� ��� ��ǻ�Ϳ��� ���ͳ� ��������(\"IP\") �ּҰ� ������, �� �ּҴ� ���ͳݻ󿡼� �� ��ǻ�͸� �ٸ� ��ǻ�Ϳ� �����ϴ� ���� ��ȣ�Դϴ�.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP1_Text);

    var L_ICONNECTWhatIsStaticIP2_Text = "�Ϲ������� ���ͳݿ� ������ �� ISP�� ����� ��ǻ�Ϳ� IP �ּҸ� �ڵ����� �ο��մϴ�.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP2_Text);

    var L_ICONNECTWhatIsStaticIP3_Text = "������ �� ��쿡�� IP �ּҸ� ���� �Է��ؾ� �մϴ�.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_staticIP, "Left");
	
	var L_ICONNECTWhatIsStaticIP4_Text = "ISP�� ���⿡ �Է��� IP �ּҸ� �����մϴ�.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnICONNECTWhatIsDNS() 
{
    var L_ICONNECTWhatIsDNS1_Text = "���ͳݿ��� �ּҸ� ã������ ���ͳݻ��� ��ǻ�Ϳ� IP�� �Ҵ��ϴ� ������ �̸� ����(DNS)�� ��ǻ�Ͱ� ����Ǿ�� �մϴ�.";
	Agent_Speak(L_ICONNECTWhatIsDNS1_Text);

    var L_ICONNECTWhatIsDNS2_Text = "��κ��� ��� DNS �ּҴ� ISP���� �ڵ����� �Ҵ��մϴ�.";
	Agent_Speak(L_ICONNECTWhatIsDNS2_Text);

    var L_ICONNECTWhatIsDNS3_Text = "ISP�� �����Ϸ��� ��ǻ�Ϳ� DNS �ּҸ� �����ؾ� �մϴ�.";
	Agent_Speak(L_ICONNECTWhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_prefrDNS, "Left");

    var L_ICONNECTWhatIsDNS4_Text = "ISP�� ���⿡ �Է��� �⺻ ���� DNS�� �����մϴ�.";
	Agent_Speak(L_ICONNECTWhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.iconnect_spn_alterDNS, "Left");

    var L_ICONNECTWhatIsDNS5_Text = "�⺻ ���� DNS�� ����� �� ���� ��쿡�� ��ü DNS�� �����մϴ�.";
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
	
    var L_ICONNECTWhatToDoNext1_Text = "����Ϸ��� [����] ���߸� Ŭ���Ͻʽÿ�.";
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

    var L_ICONNECTWhatToDoNext2_Text = "�ƴϸ� [�ǳʶٱ�]�� Ŭ���Ͽ� �� ��ǻ�Ϳ� ���ͳ� �׼����� �������� �ʰ� �۾��� ����Ͻʽÿ�.";
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

    var L_ICONNECTWhatToDoNext3_Text = "���� [�ڷ�] ���߸� Ŭ���Ͽ� ���� ȭ������ ���ư� �� �ֽ��ϴ�.";
	Agent_Speak(L_ICONNECTWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}





function Agent_ICNTLASTAddCommands() {

        var L_ICNTLASTMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_ICNTLASTMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_ICNTLASTMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnICNTLASTWhatToDoNext", L_ICNTLASTMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnICNTLASTAboutThisScreen", L_ICNTLASTMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnICNTLASTHowToMoveOn", L_ICNTLASTMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnICNTLASTWhatToDoNext() 
{

	Agent_GestureAtElement(g.btnNext, "TopCenterWidth");

        var L_ICNTLASTWhatToDoNext1_Text = "Some temporary string here ...icntlast.htm do next";
	Agent_Speak(L_ICNTLASTWhatToDoNext1_Text);
}

function Agent_OnICNTLASTAboutThisScreen() 
{		
        var L_ICNTLASTAboutThisScreen_Text = "Some temporary string here ...icntlast.htm about step";
	Agent_Speak(L_ICNTLASTAboutThisScreen_Text);
}

function Agent_OnICNTLASTHowToMoveOn() 
{
        var L_ICNTLASTHowToMoveOn_Text = "Some more temporary string here ...icntlast.htm move on";
	Agent_Speak(L_ICNTLASTHowToMoveOn_Text);
}



function Agent_SCONNECTAddCommands() {

        var L_SCONNECTMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_SCONNECTMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_SCONNECTMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnSCONNECTWhatToDoNext", L_SCONNECTMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCONNECTAboutThisScreen", L_SCONNECTMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCONNECTHowToMoveOn", L_SCONNECTMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnSCONNECTWhatToDoNext() 
{
	Agent_GestureAtElement(g.btnNext, "TopCenterWidth");

        var L_SCONNECTWhatToDoNext1_Text = "Some temporary string here ...sconnect.htm do next";
	Agent_Speak(L_SCONNECTWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnSCONNECTAboutThisScreen() 
{
        var L_SCONNECTAboutThisScreen_Text = "Some temporary string here ...sconnect.htm about step";
	Agent_Speak(L_SCONNECTAboutThisScreen_Text);
}

function Agent_OnSCONNECTHowToMoveOn() 
{
        var L_SCONNECTHowToMoveOn_Text = "Some more temporary string here ...sconnect.htm move on";
	Agent_Speak(L_SCONNECTHowToMoveOn_Text);	
}



function Agent_SCNTLASTAddCommands() {

        var L_SCNTLASTMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_SCNTLASTMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_SCNTLASTMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnSCNTLASTWhatToDoNext", L_SCNTLASTMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCNTLASTAboutThisScreen", L_SCNTLASTMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCNTLASTHowToMoveOn", L_SCNTLASTMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnSCNTLASTWhatToDoNext() 
{
	Agent_GestureAtElement(g.btnNext, "TopCenterWidth");

        var L_SCNTLASTWhatToDoNext1_Text = "Some temporary string here ...scntlast.htm do next";
	Agent_Speak(L_SCNTLASTWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnSCNTLASTAboutThisScreen() 
{
     var L_SCNTLASTAboutThisScreen_Text = "Some temporary string here ...scntlast.htm about step";
	Agent_Speak(L_SCNTLASTAboutThisScreen_Text);
}

function Agent_OnSCNTLASTHowToMoveOn() 
{
        var L_SCNTLASTHowToMoveOn_Text = "Some more temporary string here ...scntlast.htm move on";
	Agent_Speak(L_SCNTLASTHowToMoveOn_Text);		
}






function Agent_BadPIDAddCommands() 
{
    var L_BadPIDMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_BadPIDMenuCommand2_Text = "��ǰ Ű�� �Է��ϴ� ����� ���� ����(&O)";
    var L_BadPIDMenuCommand3_Text = "��ǰ Ű�� �𸣴� ��쿡 ���� ����(&A)";
    var L_BadPIDMenuCommand4_Text = "��ǰ Ű�� �۵����� �ʴ� ��쿡 ���� ����(&I)";
    var L_BadPIDMenuCommand5_Text = "������ �� �ʿ��� ��쿡 ���� ����(&R)";
    var L_BadPIDMenuCommand6_Text = "���� �۾��� ���� ����(&W)";
        
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
    var L_BadPIDAboutThisStep1_Text = "���� ȭ�鿡�� �Է��� ��ǰ Ű�� ��ȿ���� �ʽ��ϴ�.";
    Agent_Speak(L_BadPIDAboutThisStep1_Text);
    
    var L_BadPIDAboutThisStep2_Text = "��ǰ Ű�� ������ Windows XP �纻�� ��ǰ Ű�� ��ġ���� �ʽ��ϴ�.";
    Agent_Speak(L_BadPIDAboutThisStep2_Text);

    var L_BadPIDAboutThisStep3_Text = "��ȿ�� ��ǰ Ű�� ������� ������ Windows�� �۵����� �ʽ��ϴ�.";
    Agent_Speak(L_BadPIDAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDAboutThisStep4_Text = "��ǰ Ű�� �߸� �Է��� ��쿡�� [�ڷ�] ���߸� Ŭ���Ͽ� �ùٸ� ��ǰ Ű�� �ٽ� �Է��Ͻʽÿ�.";
    Agent_Speak(L_BadPIDAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep5_Text = "��ǰ Ű�� �ùٸ��� �Է��߰ų� ���� �� ������ ��쿡�� Windows �ҹ� �������� �� �ֽ��ϴ�.";
    Agent_Speak(L_BadPIDAboutThisStep5_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDAboutThisStep6_Text = "�� ��쿡�� [�ý��� ����] ���߸� Ŭ���Ͽ� ��ǻ�͸� ���ʽÿ�.";
    Agent_Speak(L_BadPIDAboutThisStep6_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep7_Text = "�� ����, �̱��̳� ĳ���ٿ����� 1-800-RU-LEGIT�� �����Ͻʽÿ�.";
    Agent_Speak(L_BadPIDAboutThisStep7_Text);

    var L_BadPIDAboutThisStep8_Text = "��Ÿ �ٸ� ����/���������� �ش� Microsoft ����� �����Ͻʽÿ�.";
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
	
    var L_BadPIDHowToEnter1_Text = "���� ȭ������ ���ư����� [�ڷ�] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_BadPIDHowToEnter1_Text);
    
    Agent_Play("RestPose");
    
    var L_BadPIDHowToEnter2_Text = "������(�����̴� ������)�� �Է��� ù° �Է¶��� ��Ÿ���ϴ�.";
    Agent_Speak(L_BadPIDHowToEnter2_Text);

    var L_BadPIDHowToEnter3_Text = "ó�� 5�ڸ� �Է��ϸ� ���� 5�ڸ� �Է��� �� �ֵ��� �����Ͱ� �ڵ����� ���� �Է¶����� �̵��մϴ�.";
    Agent_Speak(L_BadPIDHowToEnter3_Text);

    var L_BadPIDHowToEnter4_Text = "�������� �Է��ϰų� ��ҹ��ڸ� ������ �ʿ䰡 �����ϴ�.";
    Agent_Speak(L_BadPIDHowToEnter4_Text);

    var L_BadPIDHowToEnter5_Text = "[����] ���߸� Ŭ���Ͽ� ��� �����Ͻʽÿ�.";
    Agent_Speak(L_BadPIDHowToEnter5_Text);
}

function Agent_OnBadPIDWhatIfNotKnown() 
{
    var L_BadPIDWhatIfNotKnown1_Text = "��ǰ Ű�� CD ���̽��� ������ PC �Ǵ� \"��� ����\" ���� ��ǰ ����(CA) ��ƼĿ�� Ȯ���غ��ʽÿ�.";
    Agent_Speak(L_BadPIDWhatIfNotKnown1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
    
    var L_BadPIDWhatIfNotKnown2_Text = "��ǰ Ű�� ã������ [�ڷ�] ���߸� Ŭ���Ͽ� ���� ȭ������ ���ư� �� �ش� �Է¶��� ��ǰ Ű�� �Է��Ͻʽÿ�.";
    Agent_Speak(L_BadPIDWhatIfNotKnown2_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotKnown3_Text = "��ǰ Ű�� ã�� �� ���� ��� %s(��)�� ��ǻ�� ������ü�� �����Ͻʽÿ�.";
    var re = /%s/i;
    var L_BadPIDWhatIfNotKnown4_Text = "��ǰ Ű�� ã�� �� ���� ��� ��ǻ�� ������ü�� �����Ͻʽÿ�.";

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
        Agent_Speak(L_BadPIDWhatIfNotKnown4_Text);
    else
        Agent_Speak(L_BadPIDWhatIfNotKnown3_Text.replace(re, strPhoneNumber));
}

function Agent_OnBadPIDWhatIfNotWorking() 
{
    var L_BadPIDWhatIfNotWorking1_Text = "��ǰ Ű�� �߸� �Է����� �� �ֽ��ϴ�.";
    Agent_Speak(L_BadPIDWhatIfNotWorking1_Text);
    
    var L_BadPIDWhatIfNotWorking2_Text = "25���� ��ǰ Ű�� ��� �Է��ؾ� �մϴ�.";
    Agent_Speak(L_BadPIDWhatIfNotWorking2_Text);

    var L_BadPIDWhatIfNotWorking3_Text = "�� �κ��� 5���� ���� �Ǵ� ���ڷ� �����˴ϴ�.";
    Agent_Speak(L_BadPIDWhatIfNotWorking3_Text);

    var L_BadPIDWhatIfNotWorking4_Text = "Windows�� ����Ϸ��� ��ȿ�� ��ǰ Ű�� �Է��ؾ� �մϴ�.";
    Agent_Speak(L_BadPIDWhatIfNotWorking4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDWhatIfNotWorking5_Text = "��ǰ Ű�� �߸� �Է��� ��쿡�� [�ڷ�] ���߸� Ŭ���Ͽ� �ùٸ� ��ǰ Ű�� �ٽ� �Է��Ͻʽÿ�.";
    Agent_Speak(L_BadPIDWhatIfNotWorking5_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking6_Text = "��ǰ Ű�� �ùٸ��� �Է��߰ų� ���� �� ������ ��쿡�� Windows �ҹ� �������� �� �ֽ��ϴ�.";
    Agent_Speak(L_BadPIDWhatIfNotWorking6_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatIfNotWorking7_Text = "�� ��쿡�� [�ý��� ����] ���߸� Ŭ���Ͽ� ��ǻ�͸� ���ʽÿ�.";
    Agent_Speak(L_BadPIDWhatIfNotWorking7_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking8_Text = "�� ����, �̱��̳� ĳ���ٿ����� 1-800-RU-LEGIT�� �����Ͻʽÿ�.";
    Agent_Speak(L_BadPIDWhatIfNotWorking8_Text);

    var L_BadPIDWhatIfNotWorking9_Text = "��Ÿ �ٸ� ����/���������� �ش� Microsoft ����� �����Ͻʽÿ�.";
    Agent_Speak(L_BadPIDWhatIfNotWorking9_Text);
}

function Agent_OnBadPIDWhoCanICall() 
{
    var L_BadPIDWhoCanICall1_Text = "��ǰ Ű�� ���ε��� ������ �̱��̳� ĳ������ ��� 1-800-RU-LEGIT�� ��ȭ�� �Žʽÿ�.";
    Agent_Speak(L_BadPIDWhoCanICall1_Text);
    
    var L_BadPIDWhoCanICall2_Text = "��Ÿ �ٸ� ����/���������� �ش� Microsoft ����� �����Ͻʽÿ�.";
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
	
    var L_BadPIDWhatToDoNext1_Text = "[�ڷ�] ���߸� Ŭ���ϰ� �ùٸ� Ű�� �Է��Ͻʽÿ�.";
    Agent_Speak(L_BadPIDWhatToDoNext1_Text);
    
    var L_BadPIDWhatToDoNext2_Text = "��ǰ Ű�� ���ε��� ������ Windows �ҹ� �������� �� �ֽ��ϴ�.";
    Agent_Speak(L_BadPIDWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatToDoNext3_Text = "�� ��쿡�� [�ý��� ����] ���߸� Ŭ���Ͽ� ��ǻ�͸� ���ʽÿ�. ";
    Agent_Speak(L_BadPIDWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatToDoNext4_Text = "�� ����, �̱��̳� ĳ���ٿ����� 1-800-RU-LEGIT�� �����Ͻʽÿ�.";
    Agent_Speak(L_BadPIDWhatToDoNext4_Text);

    var L_BadPIDWhatToDoNext5_Text = "��Ÿ �ٸ� ����/���������� �ش� Microsoft ����� �����Ͻʽÿ�.";
    Agent_Speak(L_BadPIDWhatToDoNext5_Text);
}



function Agent_IconnAddCommands() 
{
    var L_IconnMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_IconnMenuCommand2_Text = "������ �ɼǿ� ���� ����(&P)";
    var L_IconnMenuCommand3_Text = "���� �۾��� ���� ����(&W)";

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
    var L_IconnAboutThisStep1_Text = "Windows XP ��ġ�� �Ϸ�Ǿ����ϴ�.";
    Agent_Speak(L_IconnAboutThisStep1_Text); 
      
    var L_IconnAboutThisStep2_Text = "���� ���ͳݿ� �����ϵ��� ��ǻ�͸� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_IconnAboutThisStep2_Text);
       
    var L_IconnAboutThisStep3_Text = "���� �������� �������� Windows ��ġ�� ���� �� [����] �޴����� [���ͳ� ���� ������]�� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_IconnAboutThisStep3_Text);
}

function Agent_IconnWhichOption() 
{    
    var L_IconnWhichOption1_Text = "���ͳ� ���� ������(\"ISP\")���� �����ϴ� ����Ʈ��� ��ġ�Ϸ��� [�ƴϿ�]�� �����Ͻʽÿ�.";
    Agent_Speak(L_IconnWhichOption1_Text); 
      
    var L_IconnWhichOption2_Text = "�� ��쿡�� ISP���� ������ CD�� �־�� �մϴ�.";
    Agent_Speak(L_IconnWhichOption2_Text);
       
    var L_IconnWhichOption3_Text = "Windows ��ġ�� ������ ��ǻ�Ϳ� ���ͳ� �׼����� �����Ͻʽÿ�.";
    Agent_Speak(L_IconnWhichOption3_Text);
}

function Agent_OnIconnWhatToDoNext() 
{      
    Agent_GestureAtElement(g.radioYesIconn, "Left");  
    
    var L_IconnWhatToDoNext1_Text = "���ͳݿ� �����ϵ��� ��ǻ�͸� �����Ϸ��� [��] �ɼ��� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_IconnWhatToDoNext1_Text);
    
    Agent_Play("RestPose"); 
        
    Agent_GestureAtElement(g.radioNoIconn, "Left");  
    
    var L_IconnWhatToDoNext2_Text = "���� ���ͳ� ������ �������� �������� \"�ƴϿ�\"�� �����Ͻʽÿ�.";
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

    var L_IconnWhatToDoNext3_Text = "�۾��� ����Ϸ��� [����] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_IconnWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPAddCommands() 
{
    var L_ISPMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_ISPMenuCommand2_Text = "��ǻ�͸� ������ �� ���� ������ ���� ��쿡 ���� ����(&A)";
    var L_ISPMenuCommand3_Text = "���� �۾��� ���� ����(&W)";

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
    var L_ISPAboutThisStep1_Text = "�� ȭ�鿡���� ���ͳݿ� �׼����ϴ� ����� �����մϴ�.";
    Agent_Speak(L_ISPAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");

    var L_ISPAboutThisStep2_Text = "MSN�� ����ϰų�";
    Agent_Speak(L_ISPAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");

        var L_ISPAboutThisStep3_Text = "�ٸ� ���ͳ� ���� �����ڸ� ����� �� �ֽ��ϴ�.";
        Agent_Speak(L_ISPAboutThisStep3_Text);
        
        Agent_Play("RestPose");
    }
    
    Agent_GestureAtElement(g.radioSkip, "Left");

    var L_ISPAboutThisStep4_Text = "���� ���ͳ� ������ �������� �ʰ� �۾��� ��� ������ ���� �ֽ��ϴ�.";
    Agent_Speak(L_ISPAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPWhatIfGivenAccount() 
{
    var L_ISPWhatIfGivenAccount1_Text = "��ǻ�͸� ������ �� �븮������ �μ�� ���ͳ� ���� ������ �־��� ���Դϴ�.";
	Agent_Speak(L_ISPWhatIfGivenAccount1_Text);
	
    var L_ISPWhatIfGivenAccount2_Text = "���� �������� ����� �̸�, ��ȣ, ���ͳ� ���� ������ �̸� �� ��ȭ ��ȣ�� ���Ե˴ϴ�.";
	Agent_Speak(L_ISPWhatIfGivenAccount2_Text);
	
    var L_ISPWhatIfGivenAccount3_Text = "�� ������ ������ ���ͳ� ������ �̹� �ִ� ���Դϴ�.";
	Agent_Speak(L_ISPWhatIfGivenAccount3_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");
	
    var L_ISPWhatIfGivenAccount4_Text = "ISP �̸��� MSN�̸� ���� �ɼ��� �����Ͻʽÿ�.";
	Agent_Speak(L_ISPWhatIfGivenAccount4_Text);
    
    Agent_Play("RestPose");

    
    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");
    	
        var L_ISPWhatIfGivenAccount5_Text = "ISP �̸��� MSN�� �ƴϸ� ��° �ɼ��� �����Ͻʽÿ�.";
    	Agent_Speak(L_ISPWhatIfGivenAccount5_Text);
        
        Agent_Play("RestPose");
    }

    Agent_GestureAtElement(g.radioSkip, "Left");
    
    var L_ISPWhatIfGivenAccount6_Text = "�� ��ǻ���� ���ͳ� ������ ���߿� �����Ϸ��� ������ �ɼ��� �����Ͻʽÿ�.";
	Agent_Speak(L_ISPWhatIfGivenAccount6_Text);
			    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_ISPWhatIfGivenAccount7_Text = "�۾��� ��ģ ��, [����]�� Ŭ���Ͻʽÿ�.";
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
    
    var L_ISPWhatToDoNext1_Text = "�ɼ��� ������ �� [����] ���߸� Ŭ���Ͻʽÿ�.";
	Agent_Speak(L_ISPWhatToDoNext1_Text);
	
	Agent_Play("RestPose");
}



function Agent_ICSAddCommands() 
{
	var L_ICSAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
	var L_ICSAddCommands2_Text = "���ͳ� ���� ��ȭ���� ���� ����(&A)";
	var L_ICSAddCommands3_Text = "Ȩ ��Ʈ��ŷ �����翡 ���� ����(&I)";
	
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
	var L_ICSAboutThisStep1_Text = "���⿡���� ���ͳݿ� �׼����ϴ� ����� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_ICSAboutThisStep1_Text);
	
	var L_ICSAboutThisStep2_Text = "�� ��ǻ�Ͱ� ��Ʈ��ũ�� ����Ǿ� �ִ� ��쿡�� ��Ʈ��ũ�� ����Ͽ� ���ͳݿ� �׼����� �� �ֽ��ϴ�.";
	Agent_Speak(L_ICSAboutThisStep2_Text);
	
	var L_ICSAboutThisStep3_Text = "�ƴϸ� ���ͳݿ� ���� ����ǵ��� ��ǻ�͸� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_ICSAboutThisStep3_Text);
	
	var L_ICSAboutThisStep4_Text = "������ �ɼǿ� �������, Windows XP�� ���ε��� ���� �ٸ� ���ͳ� ����ڰ� ������� ��ǻ�Ϳ� �׼������� ���ϵ��� ���ͳ� ���� ��ȭ������ ��ȣ�մϴ�.";
	Agent_Speak(L_ICSAboutThisStep4_Text);
}
	
function Agent_ICSWhatIsFirewall() 
{
	var L_ICSWhatIsFirewall1_Text = "��ȭ���� ���ͳݰ� ���� �ٸ� ��Ʈ��ũ���� ������ ��Ŀ ���� �ܺ��� �������κ��� ������� ��ǻ�� �Ǵ� ��Ʈ��ũ�� ��ȣ�ϵ��� ��ȵ� ���� �ý����Դϴ�.";
	Agent_Speak(L_ICSWhatIsFirewall1_Text);
	
	var L_ICSWhatIsFirewall2_Text = "Windows XP���� ��Ʈ��ũ�� ��ġ�ϸ� Windows XP�� ���ͳ� ���� ��ȭ�� ����� �ڵ����� �����ϴ�.";
	Agent_Speak(L_ICSWhatIsFirewall2_Text);
	
	var L_ICSWhatIsFirewall3_Text = "��ǻ�Ͱ� ��Ʈ��ũ�� �Ϻδ� �ƴ����� ���ͳݿ� ���� �׼����ϴ� ��쿡�� �� ����� �����ϴ�.";
	Agent_Speak(L_ICSWhatIsFirewall3_Text);
}
	
function Agent_ICSWhatIsNetworkWizard() 
{
	var L_ICSWhatIsNetworkWizard1_Text = "�����簡 �����̳� ȸ�翡�� ��Ʈ��ũ�� �����ϴ� ������ �ܰ������� �����ݴϴ�.";
	Agent_Speak(L_ICSWhatIsNetworkWizard1_Text);
	
	var L_ICSWhatIsNetworkWizard2_Text = "�� ���� �߿� ��ǻ�͸� ��Ʈ��ũ�� �������� �������� ���߿� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_ICSWhatIsNetworkWizard2_Text);
	
	var L_ICSWhatIsNetworkWizard3_Text = "[����] �޴����� [��� ���α׷�]�� Ŭ���Ͻʽÿ�.";
	Agent_Speak(L_ICSWhatIsNetworkWizard3_Text);
	
	var L_ICSWhatIsNetworkWizard4_Text = "[Ȩ ��Ʈ��ŷ ������]�� ã������ [���� ���α׷�]���� [���]�� Ŭ���Ͻʽÿ�.";
	Agent_Speak(L_ICSWhatIsNetworkWizard4_Text);
	
	var L_ICSWhatIsNetworkWizard5_Text = "���� ����� ��ﳪ�� �ʴ� ���, [����] �޴��� [���� �� ����]�� Ŭ���Ͽ� ������ ���ų� ��Ÿ ������ �����Ͻʽÿ�.";
	Agent_Speak(L_ICSWhatIsNetworkWizard5_Text);
}



function Agent_ICSDCAddCommands() 
{
	var L_ICSDCAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
	var L_ICSDCAddCommands2_Text = "���� �۾��� ���� ����(&W)";
	
	g_AgentCharacter.Commands.Add("Agent_ICSDCAboutThisStep", L_ICSDCAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_ICSDCWhatToDoNext", L_ICSDCAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_ICSDCAboutThisStep() 
{
	var L_ICSDCAboutThisStep1_Text = "�� ȭ�鿡���� ��ǻ�Ͱ� ���ͳݿ� ����Ǿ� ���� ������ �����մϴ�.";
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
    
	var L_ICSDCWhatToDoNext1_Text = "���ͳݿ� �ٽ� �����Ϸ��� [�ٽ� �õ�]�� Ŭ���Ͻʽÿ�.";
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
    
	var L_ICSDCWhatToDoNext2_Text = "���ͳݿ� �������� �ʰ� ����Ϸ��� [�ǳʶٱ�]�� Ŭ���Ͻʽÿ�.";
	Agent_Speak(L_ICSDCWhatToDoNext2_Text);
	
	Agent_Play("RestPose");
}



function Agent_Ident1AddCommands() 
{
    var L_Ident1AddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_Ident1AddCommands2_Text = "����� �����̶� �����Դϱ�(&A)?";
    var L_Ident1AddCommands3_Text = "����� ������ �����ϴ� ������ �����Դϱ�(&R)?";
    var L_Ident1AddCommands4_Text = "���� �۾��� ���� ����(&W)";

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
	var L_Ident1AboutThisStep1_Text = "�� �ܰ迡���� �� ��ǻ�͸� ����ϴ� ����ڸ� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_Ident1AboutThisStep1_Text);
	
	var L_Ident1AboutThisStep2_Text = "�� ��ǻ�͸� �ٸ� ����ڿ� ������ ���, ����ڸ��� �ٸ� ����� ������ �ۼ��Ͽ� �������� ������ ����� �� �ֽ��ϴ�.";
	Agent_Speak(L_Ident1AboutThisStep2_Text);
    
    var L_Ident1AboutThisStep3_Text = "�̷��� �ϸ�, ����ڸ��� �ٸ� ������� ������ ������ ��ġ�� �ʰ� ������ ��ǻ�� ����, ����, ���� ����, �� ����Ʈ ��ũ �� ��Ÿ �ɼ��� ����� �� �ְ� �˴ϴ�.";
    Agent_Speak(L_Ident1AboutThisStep3_Text);
    
    var L_Ident1AboutThisStep4_Text = "��ǻ�͸� ������ ��, �� ȭ�鿡�� �Է��� ��� �̸��� ���� ȭ�鿡 ���������� ǥ�õ˴ϴ�.";
    Agent_Speak(L_Ident1AboutThisStep4_Text);
    
    var L_Ident1AboutThisStep5_Text = "�� ����ڸ� �����ϱ� ���� �׸��� ǥ�õ˴ϴ�.";
    Agent_Speak(L_Ident1AboutThisStep5_Text);
    
    var L_Ident1AboutThisStep6_Text = "[����] �޴��� [������]�� �ִ� [����� ����] �������� Ŭ���Ͽ� �� �̸��� �������� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_Ident1AboutThisStep6_Text);
}

function Agent_Ident1Command_WhatIsUserAccount() 
{	
	var L_Ident1WhatIsUserAccount1_Text = "��ǻ�͸� �����̳� ���忡 �ִ� �ٸ� ����� ������ ��쿡�� ����� ������ ����� ���� �����ϴ�.";
	Agent_Speak(L_Ident1WhatIsUserAccount1_Text);
	
	var L_Ident1WhatIsUserAccount2_Text = "����� �������� �� �� �ִ� �۾�:";
	Agent_Speak(L_Ident1WhatIsUserAccount2_Text);
    
    var L_Ident1WhatIsUserAccount3_Text = "�ٸ� ������� �⺻ ������ ������ ��ġ�� �ʰ� ������� ���� ������ �°� ������ ���� �� ǥ���� �� �ֽ��ϴ�.";
    Agent_Speak(L_Ident1WhatIsUserAccount3_Text);
    
    var L_Ident1WhatIsUserAccount4_Text = "����� ������ �ۼ��ϸ� ���� ���� �׼��� �� ��ȣ�� ����ؾ� �մϴ�.";
    Agent_Speak(L_Ident1WhatIsUserAccount4_Text);
    
    var L_Ident1WhatIsUserAccount5_Text = "�� ���ã�� �� �ֱٿ� �湮�� ����Ʈ�� ���� ����� ����˴ϴ�.";
    Agent_Speak(L_Ident1WhatIsUserAccount5_Text);
    
    var L_Ident1WhatIsUserAccount6_Text = "����� ������ �߿��� ��ǻ�� ������ ��ȣ�� �� �ֽ��ϴ�.";
    Agent_Speak(L_Ident1WhatIsUserAccount6_Text);
    
    var L_Ident1WhatIsUserAccount7_Text = "�� ����ڸ��� �ٸ� ����ũ���� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_Ident1WhatIsUserAccount7_Text);
    
    var L_Ident1WhatIsUserAccount8_Text = "������ �α׿� �� ���� ����� ��ȯ�� ����� �� �ֽ��ϴ�.";
    Agent_Speak(L_Ident1WhatIsUserAccount8_Text);
}

function Agent_Ident1Command_Benefits() 
{	
	var L_Ident1Benefits1_Text = "���ݱ����� ��ǻ�͸� �����ϸ�, �ٸ� ����ڰ� ������ �������� ������ �� �� �־���, ���ϰ� ������ �ʴ� ����Ʈ���� �Ǵ� ������ ��ġ�ϰų� ��ǻ���� ������ ������ ���� �־����ϴ�.";
	Agent_Speak(L_Ident1Benefits1_Text);
	
	var L_Ident1Benefits2_Text = "����� ������ ����ϸ�,";
	Agent_Speak(L_Ident1Benefits2_Text);
    
    var L_Ident1Benefits3_Text = "�� ����ڴ� ��ǻ�͸� �����ϴ� �ٸ� ����ڿ��� ������ ��ġ�� �ʰ� ���� ������ ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_Ident1Benefits3_Text);
    
    var L_Ident1Benefits4_Text = "����� ������ ���� �ڼ��� ������ [����] �޴��� [���� �� ����]�� Ŭ���Ͽ� ���� �� ��Ÿ ������ �����Ͻʽÿ�.";
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
    
    var L_Ident1WhatToDoNext1_Text = "�� ��ǻ�͸� ����� �ٸ� ������� �̸��� �Է��� �� [����]�� Ŭ���Ͽ� ��� �����Ͻʽÿ�.";
    Agent_Speak(L_Ident1WhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_Ident1WhatToDoNext2_Text = "Windows ��ġ�� ��ģ �� �̸��� �����ϰų� ����ڸ� �߰��� �� �ֽ��ϴ�.";
    Agent_Speak(L_Ident1WhatToDoNext2_Text);
        
    var L_Ident1WhatToDoNext3_Text = "[����] �޴����� [������]�� Ŭ���ϰ� [����� ����]�� �����Ͻʽÿ�.";
    Agent_Speak(L_Ident1WhatToDoNext3_Text);
}



function Agent_IdentitiesAddCommands() 
{
    var L_IdentitiesAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_IdentitiesAddCommands2_Text = "����� �����̶� �����Դϱ�(&A)?";
    var L_IdentitiesAddCommands3_Text = "����� ������ �����ϴ� ������ �����Դϱ�(&R)?";
    var L_IdentitiesAddCommands4_Text = "���� �۾��� ���� ����(&W)";

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
	var L_IdentitiesAboutThisStep1_Text = "�� �ܰ迡���� �� ��ǻ�͸� ����ϴ� ����ڸ� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_IdentitiesAboutThisStep1_Text);
	
	var L_IdentitiesAboutThisStep2_Text = "�� ��ǻ�͸� �ٸ� ����ڿ� ������ ���, ����ڸ��� �ٸ� ����� ������ �ۼ��Ͽ� �������� ������ ����� �� �ֽ��ϴ�.";
	Agent_Speak(L_IdentitiesAboutThisStep2_Text);
    
    var L_IdentitiesAboutThisStep3_Text = "�̷��� �ϸ�, ����ڸ��� �ٸ� ������� ������ ������ ��ġ�� �ʰ� ������ ��ǻ�� ����, ����, ���� ����, �� ����Ʈ ��ũ �� ��Ÿ �ɼ��� ����� �� �ְ� �˴ϴ�.";
    Agent_Speak(L_IdentitiesAboutThisStep3_Text);
    
    var L_IdentitiesAboutThisStep4_Text = "��ǻ�͸� ������ ��, �� ȭ�鿡�� �Է��� ��� �̸��� ���� ȭ�鿡 ���������� ǥ�õ˴ϴ�.";
    Agent_Speak(L_IdentitiesAboutThisStep4_Text);
    
    var L_IdentitiesAboutThisStep5_Text = "�� ����ڸ� �����ϱ� ���� �׸��� ǥ�õ˴ϴ�.";
    Agent_Speak(L_IdentitiesAboutThisStep5_Text);
    
    var L_IdentitiesAboutThisStep6_Text = "[����] �޴��� [������]�� �ִ� [����� ����] �������� Ŭ���Ͽ� �� �̸��� �������� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_IdentitiesAboutThisStep6_Text);
}

function Agent_IdentitiesCommand_WhatIsUserAccount() 
{	
	var L_IdentitiesWhatIsUserAccount1_Text = "��ǻ�͸� �����̳� ���忡 �ִ� �ٸ� ����� ������ ��쿡�� ����� ������ ����� ���� �����ϴ�.";
	Agent_Speak(L_IdentitiesWhatIsUserAccount1_Text);
	
	var L_IdentitiesWhatIsUserAccount2_Text = "����� �������� �� �� �ִ� �۾�:";
	Agent_Speak(L_IdentitiesWhatIsUserAccount2_Text);
    
    var L_IdentitiesWhatIsUserAccount3_Text = "�ٸ� ������� �⺻ ������ ������ ��ġ�� �ʰ� ������� ���� ������ �°� ������ ���� �� ǥ���� �� �ֽ��ϴ�.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount3_Text);
    
    var L_IdentitiesWhatIsUserAccount4_Text = "����� ������ �ۼ��ϸ� ���� ���� �׼��� �� ��ȣ�� ����ؾ� �մϴ�.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount4_Text);
    
    var L_IdentitiesWhatIsUserAccount5_Text = "�� ���ã�� �� �ֱٿ� �湮�� ����Ʈ�� ���� ����� ����˴ϴ�.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount5_Text);
    
    var L_IdentitiesWhatIsUserAccount6_Text = "����� ������ �߿��� ��ǻ�� ������ ��ȣ�� �� �ֽ��ϴ�.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount6_Text);
    
    var L_IdentitiesWhatIsUserAccount7_Text = "�� ����ڸ��� �ٸ� ����ũ���� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount7_Text);
    
    var L_IdentitiesWhatIsUserAccount8_Text = "������ �α׿� �� ���� ����� ��ȯ�� ����� �� �ֽ��ϴ�.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount8_Text);
}

function Agent_IdentitiesCommand_Benefits() 
{	
	var L_IdentitiesBenefits1_Text = "���ݱ����� ��ǻ�͸� �����ϸ�, �ٸ� ����ڰ� ������ �������� ������ �� �� �־���, ���ϰ� ������ �ʴ� ����Ʈ���� �Ǵ� ������ ��ġ�ϰų� ��ǻ���� ������ ������ ���� �־����ϴ�.";
	Agent_Speak(L_IdentitiesBenefits1_Text);
	
	var L_IdentitiesBenefits2_Text = "����� ������ ����ϸ�,";
	Agent_Speak(L_IdentitiesBenefits2_Text);
    
    var L_IdentitiesBenefits3_Text = "�� ����ڴ� ��ǻ�͸� �����ϴ� �ٸ� ����ڿ��� ������ ��ġ�� �ʰ� ���� ������ ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_IdentitiesBenefits3_Text);
    
    var L_IdentitiesBenefits4_Text = "����� ������ ���� �ڼ��� ������ [����] �޴��� [���� �� ����]�� Ŭ���Ͽ� ���� �� ��Ÿ ������ �����Ͻʽÿ�.";
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
    
    var L_IdentitiesWhatToDoNext1_Text = "�� ��ǻ�͸� ����� �ٸ� ������� �̸��� �Է��� �� [����]�� Ŭ���Ͽ� ��� �����Ͻʽÿ�.";
    Agent_Speak(L_IdentitiesWhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_IdentitiesWhatToDoNext2_Text = "Windows ��ġ�� ��ģ �� �̸��� �����ϰų� ����ڸ� �߰��� �� �ֽ��ϴ�.";
    Agent_Speak(L_IdentitiesWhatToDoNext2_Text);
        
    var L_IdentitiesWhatToDoNext3_Text = "[����] �޴����� [������]�� Ŭ���ϰ� [����� ����]�� �����Ͻʽÿ�.";
    Agent_Speak(L_IdentitiesWhatToDoNext3_Text);
}



function Agent_KeybdAddCommands() 
{
	var L_KeybdMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_KeybdMenuCommand2_Text = "������ ������ �����ϴ� ����� ���� ����(&D)";
    var L_KeybdMenuCommand3_Text = "�� �����ϴ� ����� ���� ����(&O)";
    var L_KeybdMenuCommand4_Text = "Ű���带 �����ϴ� ����� ���� ����(&S)";

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
    var L_KeybdAboutThisStep1_Text = "������ ǥ�õǴ� ȭ�鿡���� ������� ��� ����, ������ �ɼ� �� ǥ�� �ð��븦 �������� �ؽ�Ʈ, ��¥, ���� ���� ǥ���ϴ� ����� �����մϴ�.";
    Agent_Speak(L_KeybdAboutThisStep1_Text);
        
    var L_KeybdAboutThisStep2_Text = "���� ���, �� ȭ�鿡�� ����ڰ� �����ϴ� ����, ��ǻ�Ϳ��� ����� ��� �� ��� ���� Ű���带 �����Ͻʽÿ�.";
    Agent_Speak(L_KeybdAboutThisStep2_Text);
        
    var L_KeybdAboutThisStep3_Text = "�׷��� Windows���� ��¥, �ð� �� ��ȭ�� ��Ȯ�ϰ� ǥ���մϴ�.";
    Agent_Speak(L_KeybdAboutThisStep3_Text);
        
    var L_KeybdAboutThisStep4_Text = "���� ���, ������ �̱��� �����ϰ� ���� ��� �����ϸ� ��ȭ�� �̱� �޷��� ǥ�õ˴ϴ�.";
    Agent_Speak(L_KeybdAboutThisStep4_Text);

    var L_KeybdAboutThisStep5_Text = "������ ������ ������ �����ϴ� ��쿡�� ���� �Ŀ��� ��ȭ�� ǥ�õ˴ϴ�.";
    Agent_Speak(L_KeybdAboutThisStep5_Text);
}

function Agent_KeybdHowToSelectRegion() 
{     
    Agent_GestureAtElement(g.selRegion, "Left");
     
    var L_KeybdHowToSelectRegion1_Text = "�� ����� ������ ���������� ǥ�õ˴ϴ�.";
    Agent_Speak(L_KeybdHowToSelectRegion1_Text);	
   
    var L_KeybdHowToSelectRegion2_Text = "��� ���� ���콺�� Ŭ���ϰų� ����� �̵��� ������ Ű������ <Tab> Ű�� �����ʽÿ�.";
    Agent_Speak(L_KeybdHowToSelectRegion2_Text);	
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selRegion, "Right");
        
    var L_KeybdHowToSelectRegion3_Text = "������ ��ũ���ؼ� ������ ȭ��ǥ ���߸� Ŭ���ϰų� Ű���忡�� ���� �� Ŭ���Ͻʽÿ���ǥ Ű�� ����Ͻʽÿ�.";
    Agent_Speak(L_KeybdHowToSelectRegion3_Text);
        
    var L_KeybdHowToSelectRegion4_Text = "���ϴ� ������ ǥ�õǸ� ���콺 ���߷� Ŭ���ϰų� Ű���忡�� <Enter> Ű�� �����ϴ�.";
    Agent_Speak(L_KeybdHowToSelectRegion4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.RegionName, "Left");

    var L_KeybdHowToSelectRegion5_Text = "������ ������ �� ���ڿ� ��Ÿ���ϴ�.";
    Agent_Speak(L_KeybdHowToSelectRegion5_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectLanguage() 
{        		
    var L_KeybdHowToSelectLanguage1_Text = "����� �� �����Ͻʽÿ�.";
    Agent_Speak(L_KeybdHowToSelectLanguage1_Text);
        
    var L_KeybdHowToSelectLanguage2_Text = "���� ���, �����ξ ��������� �Ϲ������� �۾��ϴ� ��ǻ�� ���α׷��� ������ ����� �Ǿ� ������ ���⿡�� ��� �����Ͻʽÿ�.";
    Agent_Speak(L_KeybdHowToSelectLanguage2_Text);   
        
    Agent_GestureAtElement(g.selLang, "Left");  
        
    var L_KeybdHowToSelectLanguage3_Text = "�� ����� ���� ���������� ǥ�õ˴ϴ�.";
    Agent_Speak(L_KeybdHowToSelectLanguage3_Text);

    var L_KeybdHowToSelectLanguage4_Text = "���⸦ ���콺�� Ŭ���ϰų� ����� �̵��� ������ Ű������ <Tab> Ű�� �����ʽÿ�.";
    Agent_Speak(L_KeybdHowToSelectLanguage4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selLang, "Right");

    var L_KeybdHowToSelectLanguage5_Text = "������ ��ũ���ؼ� ������ ȭ��ǥ ���߸� Ŭ���ϰų� Ű���忡�� ���� �� �Ʒ��� ȭ��ǥ Ű�� ����Ͻʽÿ�.";
    Agent_Speak(L_KeybdHowToSelectLanguage5_Text);

    var L_KeybdHowToSelectLanguage6_Text = "���ϴ� �� ǥ�õǸ� ���콺 ���߷� Ŭ���ϰų� Ű���忡�� <Enter> Ű�� �����ϴ�.";
    Agent_Speak(L_KeybdHowToSelectLanguage6_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.LangName, "Left");

    var L_KeybdHowToSelectLanguage7_Text = "������ �� �� ���ڿ� ��Ÿ���ϴ�.";
    Agent_Speak(L_KeybdHowToSelectLanguage7_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectKeyboard() 
{		
    var L_KeybdHowToSelectKeyboard1_Text = "�� ��Ͽ� ǥ�õǴ� Ű����� �������Դϴ�.";
    Agent_Speak(L_KeybdHowToSelectKeyboard1_Text);
    
    Agent_GestureAtElement(g.selKeyboard, "Left");
        
    var L_KeybdHowToSelectKeyboard2_Text = "���⸦ ���콺�� Ŭ���ϰų� ����� �̵��� ������ Ű������ <Tab> Ű�� �����ʽÿ�.";
    Agent_Speak(L_KeybdHowToSelectKeyboard2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selKeyboard, "Right");
        
    var L_KeybdHowToSelectKeyboard3_Text = "����� ��ũ���ؼ� ������ ȭ��ǥ ���߸� Ŭ���ϰų� Ű���忡�� ���� �� �Ʒ��� ȭ��ǥ Ű�� ����Ͻʽÿ�.";
    Agent_Speak(L_KeybdHowToSelectKeyboard3_Text);
        
    var L_KeybdHowToSelectKeyboard4_Text = "�� ��ǻ�Ϳ��� ��� ���� Ű���尡 ǥ�õǸ� ���콺 ���߷� Ŭ���ϰų� Ű���忡�� <Enter> Ű�� �����ϴ�.";
    Agent_Speak(L_KeybdHowToSelectKeyboard4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.KeyboardName, "Left");

    var L_KeybdHowToSelectKeyboard5_Text = "������ Ű���尡 �� ���ڿ� ��Ÿ���ϴ�.";
    Agent_Speak(L_KeybdHowToSelectKeyboard5_Text);
    
    Agent_Play("RestPose");
}



function Agent_EulaAddCommands() 
{
    var L_EulaCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_EulaCommand2_Text = "������ ���� ����� ��� �����մϱ�(&O)?";
    var L_EulaCommand3_Text = "EULA�� ���� ����(&A)";
    var L_EulaCommand4_Text = "EULA�� ����(&D)";
    var L_EulaCommand5_Text = "[����] ���߸� ����� �� ���� ������ ���� ����(&I)";
    var L_EulaCommand6_Text = "���� �۾��� ���� ����(&W)";

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
        var L_EulaMenuCommand5_Text = "[����] ���߸� ����� �� ���� ������ ���� ����(&I)";

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
    var L_EulaAboutThisStep1_Text = "���⿡���� Microsoft Windows ���� ����� �о�� ������ ������ ���θ� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_EulaAboutThisStep1_Text);		
    
    Agent_GestureAtElement(g.txtEULA,"Left");
        
    var L_EulaAboutThisStep2_Text = "Windows�� ����Ϸ��� �� ��࿡ �����ؾ� �մϴ�.";
    Agent_Speak(L_EulaAboutThisStep2_Text);
    
    Agent_Play("RestPose");
}

function Agent_EulaHowToAnswer() 
{		
    Agent_GestureAtElement(g.radioAgree,"Left");
    
    var L_EulaHowToAnswer1_Text = "���콺 �����͸� �׸� ���� ��� ���ö� ���� �̵���Ų �� ���콺�� �� �� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_EulaHowToAnswer1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaHowToAnswer2_Text = "[����] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_EulaHowToAnswer2_Text);
}

function Agent_EulaWhatIsEula() 
{		
    var L_EulaWhatIsEula1_Text = "Microsoft ��ǰ�� ���۱ǹ��Ӹ� �ƴ϶� ���� ����� ���� ���(EULA) ���뿡 ���Ͽ� ����� �� �ֽ��ϴ�.";
    Agent_Speak(L_EulaWhatIsEula1_Text);
        
    var L_EulaWhatIsEula2_Text = "EULA�� �㰡���� ��ǰ�� ���� ��뿡 ���� �����ϴ� ����̸�, ��ǻ�Ϳ��� �ش� ��ǰ�� ����ϱ� ���� Ư���� ������ ����մϴ�.";
    Agent_Speak(L_EulaWhatIsEula2_Text);
}

function Agent_EulaWhatDoesEulaSay() 
{		
    var L_EulaWhatDoesEulaSay1_Text = "��࿡ �����ϸ�, EULA������ Windows XP�� ����� �� �ִ� ��� ������ �ο��ϰ�, �Ϻ��� �߰� ���ѵ� ����մϴ�.";
    Agent_Speak(L_EulaWhatDoesEulaSay1_Text);
        
    var L_EulaWhatDoesEulaSay2_Text = "�Ӹ� �ƴ϶�, Windows XP ������ Ư�� ���� ���׵� ���ԵǾ� �ֽ��ϴ�.";
    Agent_Speak(L_EulaWhatDoesEulaSay2_Text);	
    
    Agent_GestureAtElement(g.txtEULA,"Right");	
        
    var L_EulaWhatDoesEulaSay3_Text = "�ڼ��� ������ �������� '���� ���' �κ��� �����Ͻʽÿ�.";
    Agent_Speak(L_EulaWhatDoesEulaSay3_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatDoesEulaSay4_Text = "���� EULA�� ������ ������, ��� �Ǵ� ������ ���� Windows XP�� ���纻�� ������ ������ �����մϴ�.";
    Agent_Speak(L_EulaWhatDoesEulaSay4_Text);
}

function Agent_EulaWhereIsNextButton() 
{		
    var L_EulaWhereIsNextButton1_Text = "���� ��࿡ �����ϴ� ���� ���θ� �������� �ʾұ� ������ [����] ���߸� ����� �� �����ϴ�.";
    Agent_Speak(L_EulaWhereIsNextButton1_Text);
        
    var L_EulaWhereIsNextButton2_Text = "���� [��] �Ǵ� [�ƴϿ�]�� �����ؾ� �մϴ�.";
    Agent_Speak(L_EulaWhereIsNextButton2_Text);
}

function Agent_EulaWhatToDoNext() 
{			
    Agent_GestureAtElement(g.radioAgree,"Left");
    	
    var L_EulaWhatToDoNext1_Text = "���� ����� ���� �� �����Ϸ��� [��]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_EulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatToDoNext2_Text = "���� ��࿡ �������� �������� [�ƴϿ�]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_EulaWhatToDoNext2_Text);
        
    var L_EulaWhatToDoNext3_Text = "Windows�� ��� ����Ϸ��� �� ��࿡ �����ؾ� �մϴ�.";
    Agent_Speak(L_EulaWhatToDoNext3_Text);
    			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_EulaWhatToDoNext4_Text = "���� ȭ������ �̵��Ϸ��� [����] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_EulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_BadEulaAddCommands() {

    var L_BadEulaCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_BadEulaCommand2_Text = "EULA������ ������ �����ϰ� �ֽ��ϱ�(&A)?";
    var L_BadEulaCommand3_Text = "EULA�� �������� ������ ��� �˴ϱ�(&I)?";
    var L_BadEulaCommand4_Text = "���� �۾��� ���� ����(&W)";

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
    var L_BadEulaAboutThisStep1_Text = "���� ȭ�鿡�� ���� ��࿡ �������� �ʾҽ��ϴ�.";
    Agent_Speak(L_BadEulaAboutThisStep1_Text);

    var L_BadEulaAboutThisStep2_Text = "���� ��࿡ �������� ������ Windows�� ����� �� �����ϴ�.";
    Agent_Speak(L_BadEulaAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadEulaAboutThisStep3_Text = "[�ڷ�] ���߸� Ŭ���Ͽ� ���� ȭ������ ���ư� ���� ��࿡ ������ �� �ֽ��ϴ�.";
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
        
    var L_BadEulaAboutThisStep4_Text = "�������� �ʴ� ���, Windows�� ����� �����ϰ� ��ǻ�͸� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_BadEulaAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_BadEulaWhatDoesEulaSay()
{
    var L_BadEulaWhatDoesEulaSay1_Text = "��࿡ �����ϸ�, EULA������ Windows XP�� ����� �� �ִ� ��� ������ �ο��ϰ�, �Ϻ��� �߰� ���ѵ� ����մϴ�.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay1_Text);

    var L_BadEulaWhatDoesEulaSay2_Text = "�Ӹ� �ƴ϶�, Windows XP ������ Ư�� ���� ���׵� ���ԵǾ� �ֽ��ϴ�.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay2_Text);

    var L_BadEulaWhatDoesEulaSay3_Text = "�ڼ��� ������ �������� [�ڷ�]�� Ŭ���ϰ�, EULA�� ���� '���� �㿩'�� �����Ͻʽÿ�.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay3_Text);
        
    var L_BadEulaWhatDoesEulaSay4_Text = "���� EULA�� ������ ������, ��� �Ǵ� ������ ���� Windows XP�� ���纻�� ������ ������ �����մϴ�.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay4_Text);
}

function Agent_BadEulaWhatIfIDontAcceptEula()
{
    var L_BadEulaWhatIfIDontAcceptEula1_Text = "EULA���� Windows XP�� ��� ������ ����ϱ� ������, Windows XP�� ����ϱ� ���� �� ��࿡ �����ؾ߸� �մϴ�.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadEulaWhatIfIDontAcceptEula2_Text = "��࿡ �������� �������� [�ý��� ����]�� Ŭ���Ͽ� ��ǻ�͸� �����Ͻʽÿ�.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula2_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatIfIDontAcceptEula3_Text = "��ǻ�͸� �ٽ� �����ϸ� �� ȭ���� ǥ�õ˴ϴ�.";
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
    
    var L_BadEulaWhatToDoNext1_Text = "���� ��࿡ �����Ϸ��� [�ڷ�]�� Ŭ���Ͻʽÿ�. ";
    Agent_Speak(L_BadEulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatToDoNext2_Text = "�� �۾��� ��� �����Ͽ� Windows�� ����Ϸ��� ���� ��࿡ �����ؾ߸� �մϴ�.";
    Agent_Speak(L_BadEulaWhatToDoNext2_Text);

    var L_BadEulaWhatToDoNext3_Text = "��࿡ �������� �������� [�ý��� ����]�� Ŭ���Ͽ� ��ǻ�͸� �����Ͻʽÿ�.";
    Agent_Speak(L_BadEulaWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_BadEulaWhatToDoNext4_Text = "��ǻ�͸� �ٽ� �����ϸ� �� ȭ���� ǥ�õ˴ϴ�.";
    Agent_Speak(L_BadEulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}




function Agent_ProductKeyAddCommands() 
{
    var L_ProductKeyAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_ProductKeyAddCommands2_Text = "��ǰ Ű�� ���� ����(&A)";
    var L_ProductKeyAddCommands4_Text = "���� �۾��� ���� ����(&W)";

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

        var L_ProductKeyAddCommands3_Text = "[����] ���߸� ����� �� ���� ������ ���� ����(&I)";

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
    var L_ProductKeyAboutThisStep1_Text = "���⿡���� ��ǻ�� ������ü���� ������ 25�ڸ��� ��ǰ Ű�� �Է��ؾ� �մϴ�.";
    Agent_Speak(L_ProductKeyAboutThisStep1_Text);

    var L_ProductKeyAboutThisStep2_Text = "��ǰ Ű�� CD ���̽��� ������ PC �Ǵ� '��� ����' ���� ��ǰ ����(CA) ��ƼĿ�� Ȯ���غ��ʽÿ�.";
    Agent_Speak(L_ProductKeyAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pid1,"Left");

    var L_ProductKeyAboutThisStep3_Text = "���⿡ �Է��ϴ� ���ڴ� �ڵ����� �빮�ڷ� ǥ�õ˴ϴ�.";
    Agent_Speak(L_ProductKeyAboutThisStep3_Text);
    
    Agent_Play("RestPose");
        
    var L_ProductKeyAboutThisStep4_Text = "�� �ܰ� �Ŀ� ��ǻ�Ϳ� Microsoft Windows�� ����� �� �ֽ��ϴ�.";
    Agent_Speak(L_ProductKeyAboutThisStep4_Text);
        
    var L_ProductKeyAboutThisStep5_Text = "Windows�� ����ϸ� �پ��� ������ ���� �� �ֽ��ϴ�.";
    Agent_Speak(L_ProductKeyAboutThisStep5_Text);
}

function Agent_ProductKeyWhatIsProdKey()
{
    var L_ProductKeyWhatIsProdKey1_Text = "Microsoft���� ������ ��� Windows���� ������ ��ǰ Ű�� �����Ǿ� �ֽ��ϴ�.";
    Agent_Speak(L_ProductKeyWhatIsProdKey1_Text);

    var L_ProductKeyWhatIsProdKey2_Text = "��ǰ Ű�� ���� Microsoft ��ǰ�� ���������� Ȯ���� �� �ֽ��ϴ�.";
    Agent_Speak(L_ProductKeyWhatIsProdKey2_Text);

    var L_ProductKeyWhatIsProdKey3_Text = "Windows �ҹ� ���������κ��� ����ڸ� ��ȣ�մϴ�.";
    Agent_Speak(L_ProductKeyWhatIsProdKey3_Text);
        
    var L_ProductKeyWhatIsProdKey4_Text = "���� �� �����̳� ������ ����, ���׷��̵� �� �� ���񽺿� ���� �پ��� ������ ���� �� �ְ� �˴ϴ�.";
    Agent_Speak(L_ProductKeyWhatIsProdKey4_Text);
}

function Agent_ProductKeyWhyNextNotAvailable()
{
    var L_ProductKeyWhyNextNotAvailable1_Text = "��ȿ�� ��ǰ Ű�� �Է����� �ʾұ� ������ [����] ���߸� ����� �� �����ϴ�.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable1_Text);

    var L_ProductKeyWhyNextNotAvailable2_Text = "��ȿ�� ��ǰ Ű�� �Է��ؾ� �մϴ�.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable2_Text);

    var L_ProductKeyWhyNextNotAvailable3_Text = "[����] ���߸� Ŭ���Ͽ� ����� �� �ֽ��ϴ�.";
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
    
    var L_ProductKeyWhatToDoNext1_Text = "��ȿ�� ��ǰ Ű�� �Է��� �� [����] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_ProductKeyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}




function Agent_Reg1AddCommands() 
{
    var L_Reg1Command1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_Reg1Command2_Text = "��Ͽ� ���� ����(&E)";
    var L_Reg1Command3_Text = "���� ����Ϸ��� ��� �ؾ� �մϱ�(&O)?";
    var L_Reg1Command4_Text = "���߿� ����� �� �ֽ��ϱ�(&R)?";
    var L_Reg1Command5_Text = "����� �߿伺�� ���� ����(&A)";
    var L_Reg1Command6_Text = "���� ������ ���� ����(&M)";

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
    var L_Reg1AboutThisStep1_Text = "��� ������ �����մϴ�.";
    Agent_Speak(L_Reg1AboutThisStep1_Text);

    var L_Reg1AboutThisStep2_Text = "���⼭ Windows�� ����� �� �ֽ��ϴ�.";
    Agent_Speak(L_Reg1AboutThisStep2_Text);

    var L_Reg1AboutThisStep3_Text = "Microsoft Windows�� ����ϸ� Microsoft�� ������ �帮�� ���� ���� Ư���� ���� �� �ֽ��ϴ�.";
    Agent_Speak(L_Reg1AboutThisStep3_Text);
        
    var L_Reg1AboutThisStep4_Text = "�̷��� Ư������ ��ǰ ������Ʈ ������ �ް�, Microsoft�� ��� ���� ���񽺸� ����� �� �ִ� ������ ���Ե˴ϴ�.";
    Agent_Speak(L_Reg1AboutThisStep4_Text);
        
    var L_Reg1AboutThisStep5_Text = "�� ȭ�鿡�� ��� ����� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_Reg1AboutThisStep5_Text);
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");
        
    var L_Reg1AboutThisStep6_Text = "Microsoft �������� ��ȣ��å�� ���� �ڼ��� ������ ������ �� ��ũ�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_Reg1AboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1AboutRegistration()
{    
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1AboutRegistration1_Text = "��� ������ �����Ϸ��� ���⸦ Ŭ���� �� [����] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_Reg1AboutRegistration1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.rb_reg_ms_no,"Left");

    var L_Reg1AboutRegistration2_Text = "������� �������� �� ��° �ɼ��� Ŭ���ϰ� [����]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_Reg1AboutRegistration2_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1HowToRegister()
{      
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1HowToRegister1_Text = "Windows�� ����Ϸ��� [��] �ɼ��� ���õǾ����� Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_Reg1HowToRegister1_Text); 
    
    Agent_Play("RestPose");

    var L_Reg1HowToRegister2_Text = "[����] ���߸� Ŭ���Ͽ� ��� �����Ͻʽÿ�.";
    Agent_Speak(L_Reg1HowToRegister2_Text);
}

function Agent_Reg1RegisterLater()
{
    var L_Reg1RegisterLater1_Text = "���� ����� �����ϸ� ���߿� Windows ��ġ�� ���� �� ����� �� �ֽ��ϴ�.";
    Agent_Speak(L_Reg1RegisterLater1_Text);

    var L_Reg1RegisterLater2_Text = "[����] �޴����� [����]�� Ŭ���ϰ� regwiz /r�� �Է��Ͻʽÿ�.";
    Agent_Speak(L_Reg1RegisterLater2_Text);

    var L_Reg1RegisterLater3_Text = "���� ����� ��ﳪ�� �ʴ� ���, [����] �޴��� [���� �� ����]�� Ŭ���Ͽ� ������ ���ų� ��Ÿ ������ �����Ͻʽÿ�.";
    Agent_Speak(L_Reg1RegisterLater3_Text);
}

function Agent_Reg1WhyRegister()
{
    var L_Reg1WhyRegister1_Text = "Microsoft Windows�� ����ϸ� Microsoft�� ������ �帮�� ���� ���� Ư���� ���� �� �ֽ��ϴ�.";
    Agent_Speak(L_Reg1WhyRegister1_Text);

    var L_Reg1WhyRegister2_Text = "�̷��� Ư������ ��ǰ ������Ʈ ������ �ް�, Microsoft�� ��� ���� ���񽺸� ����� �� �ִ� ������ ���Ե˴ϴ�.";
    Agent_Speak(L_Reg1WhyRegister2_Text);
}

function Agent_Reg1AboutSharingInfo()
{
    
    if (!window.external.get_RetailOOBE()) 
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "�� �ɼ��� �����ϸ� ������� ��� ������ Microsoft �� ��ǻ�� ������ü�� �����˴ϴ�.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text); 
    
        Agent_Play("RestPose");
    }
    else
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "�� �ɼ��� �����ϸ� ������� ��� ������ Microsoft�� �����˴ϴ�.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");     
    }
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");

    var L_Reg1AboutSharingInfo2_Text = "Microsoft �������� ��ȣ��å�� ���� �ڼ��� ������ ������ �� ��ũ�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_Reg1AboutSharingInfo2_Text);
    
    Agent_Play("RestPose");
    
    if (!window.external.get_RetailOOBE()) 
    {           
        Agent_GestureAtElement(g.reg1_spn3,"Left");
                
        var L_Reg1AboutSharingInfo3_Text = "%1 �������� ��ȣ��å�� ���� �ڼ��� ������ ������ �� ��ũ�� Ŭ���Ͻʽÿ�.";
        Agent_Speak(ApiObj.FormatMessage(L_Reg1AboutSharingInfo3_Text, g_OEMNameStr));
    
        Agent_Play("RestPose");
    }
}




function Agent_Reg3AddCommands() 
{
    var L_Reg3Command1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_Reg3Command2_Text = "���� ���� ����� ���� ����(&O)";
    var L_Reg3Command3_Text = "���� ������ ���� ����(&M)";

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
    var L_Reg3AboutThisStep1_Text = "Microsoft Windows�� ����Ϸ��� �� ȭ�鿡 �ʿ��� ������ �Է��ؾ� �մϴ�.";
    Agent_Speak(L_Reg3AboutThisStep1_Text);
    
    Agent_GestureAtElement(g.UserCity,"Left");

    var L_Reg3AboutThisStep2_Text = "'�ɼ�'���� ǥ�õ� �׸��� ������ ��� �Է¶��� ������ �Է��Ͻʽÿ�.";
    Agent_Speak(L_Reg3AboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_Reg3AboutThisStep3_Text = "�����ϸ� �ɼ����� ǥ�õ� ������ �Է��ϴ� ���� �����ϴ�.";
    Agent_Speak(L_Reg3AboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_Reg3AboutThisStep4_Text = "�Է��� �������� [����]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_Reg3AboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg3HowToChangeInfo()
{
    var L_Reg3HowToChangeInfo1_Text = "���� ���ο� ������ �۾��� ���� �˷��ִ� ���� �߰��߽��ϴ�.";
    Agent_Speak(L_Reg3HowToChangeInfo1_Text);
    
    Agent_GestureAtElement(g.UserLastName,"Left");

    var L_Reg3HowToChangeInfo2_Text = "���� ���, �̸��� �Է��Ϸ��� [�̸�] ���ڸ� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_Reg3HowToChangeInfo2_Text);

    var L_Reg3HowToChangeInfo3_Text = "�Է¶��� Ŭ���ϸ� �����̴� ������(���� ����)�� ǥ�õ˴ϴ�.";
    Agent_Speak(L_Reg3HowToChangeInfo3_Text);

    var L_Reg3HowToChangeInfo4_Text = "�Է��ϴ� ������ ��� ���� ������ �Էµ˴ϴ�.";
    Agent_Speak(L_Reg3HowToChangeInfo4_Text);
    
    Agent_Play("RestPose");

    var L_Reg3HowToChangeInfo5_Text = "Ű������ ���� ȭ��ǥ Ű�� ������ ȭ��ǥ Ű�� ���� ���� ������ �̵��� �� �ֽ��ϴ�.";
    Agent_Speak(L_Reg3HowToChangeInfo5_Text);

    var L_Reg3HowToChangeInfo6_Text = "<Delete> Ű�� ����Ͽ� ���� ���� �ڿ� �ִ� ���ڸ� �����ϰų� �齺���̽� Ű�� ����Ͽ� ���� ���� �տ� �ִ� ���ڸ� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_Reg3HowToChangeInfo6_Text);

    var L_Reg3HowToChangeInfo7_Text = "���ڸ� �����Ϸ��� ���� ������ ���ڸ� ������ ��ġ�� ���콺 �����͸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_Reg3HowToChangeInfo7_Text);

    var L_Reg3HowToChangeInfo8_Text = "������ ���ڸ� �Է��Ͻʽÿ�.";
    Agent_Speak(L_Reg3HowToChangeInfo8_Text);

    var L_Reg3HowToChangeInfo9_Text = "���ڿ� �ƹ� �͵� �Է����� ������ ���� �״�� ǥ�õ˴ϴ�.";
    Agent_Speak(L_Reg3HowToChangeInfo9_Text);

    var L_Reg3HowToChangeInfo10_Text = "����� ����ڸ� �����ֱ� ���� �����̹Ƿ� ������� ��� ������ ���Ե��� �ʽ��ϴ�.";
    Agent_Speak(L_Reg3HowToChangeInfo10_Text);
}

function Agent_Reg3AboutSharingInfo()
{    
    if (!window.external.get_RetailOOBE()) 
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
        
        var L_Reg3AboutSharingInfo1_Text = "�� �ɼ��� �����ϸ� ������� ��� ������ Microsoft �� ��ǻ�� ������ü�� �����˴ϴ�.";
        Agent_Speak(L_Reg3AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");
    }
    else
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
         
        var L_Reg3AboutSharingInfo1_Text = "�� �ɼ��� �����ϸ� ������� ��� ������ Microsoft�� �����˴ϴ�.";
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

        

        L_Register3PlayCheckBoxScript1_Text = "���� �� ȭ�鿡 �ִ� ��� ������ Microsoft �� ��ǻ�� ������ü�� �������� �����Ǿ� �ֽ��ϴ�.";
        L_Register3PlayCheckBoxScript2_Text = "���� �� ȭ�鿡 �ִ� ��� ������  Microsoft�� �������� �����Ǿ� �ֽ��ϴ�(��ǻ�� ������ü���� ������ ����).";
        L_Register3PlayCheckBoxScript3_Text = "���� �� ȭ�鿡 �ִ� ��� ������  Microsoft���� ������ �ʰ� ��ǻ�� ������ü���� �������� �����Ǿ� �ֽ��ϴ�.";
        L_Register3PlayCheckBoxScript4_Text = "���� �� ȭ�鿡 �ִ� ��� ������  Microsoft �� ��ǻ�� ������ü�� ��� �������� �����Ǿ� �ֽ��ϴ�.";

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

        var L_Register3PlayCheckBoxScript5_Text = "�̷��� ������ ���� ��ǰ ������Ʈ �� ��� ����ڰ� ���� �� �ִ� �پ��� ���ÿ� ���� ������ ��� ���� �� �ֽ��ϴ�.";
        Agent_Speak(L_Register3PlayCheckBoxScript5_Text);

        var L_Register3PlayCheckBoxScript6_Text = "�� ������ ���� ���θ� �����Ϸ��� ";
        Agent_Speak(L_Register3PlayCheckBoxScript6_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(elem, "TopCenterWidth");
		else
			Agent_GestureAtElement(elem, "Left");

        var L_Register3PlayCheckBoxScript7_Text = "�� �Է¶��� Ŭ���Ͻʽÿ�.";
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

        var L_Register3EncourageTabKey1_Text = "����� �̵��Ϸ��� <Tab> Ű�� �����ʽÿ�.";
        Agent_Speak(L_Register3EncourageTabKey1_Text);
}

function Agent_Register3EncourageMouseClick() {

        var L_Register3EncourageMouseClick1_Text = "���콺 �����͸� ����� �̵��Ͽ� ���콺�� ���� ���߸� Ŭ���Ͻʽÿ�.";
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

                        var L_Register3PlayElementScript1_Text = "�̸��� �Է��Ͻʽÿ�.";
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

                        var L_Register3PlayElementScript3_Text = "�߰� �̸��� �Է��Ͻʽÿ�.";
                        Agent_Speak(L_Register3PlayElementScript3_Text);

                        break;

                case "UserLastName":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript4_Text = "���� �Է��մϴ�.";
                        Agent_Speak(L_Register3PlayElementScript4_Text);

                        break;

                case "UserAddress":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript5_Text = "�ּҸ� �Է��Ͻʽÿ�.";
                        Agent_Speak(L_Register3PlayElementScript5_Text);

                        break;

                case "UserAddress2":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        Agent_Play("Think");

                        var L_Register3PlayElementScript6_Text = "�ּ� �Է¿� �� ���� ������ �ʿ��ϸ� �̰��� �Է��Ͻʽÿ�. <Tab> Ű�� ���� ���� �Է¶����� �̵��Ͻʽÿ�.";
                        Agent_Speak(L_Register3PlayElementScript6_Text);

                        Agent_Play("RestPose");

                        break;

                case "UserCity":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript7_Text = "��/��/�� �̸��� �Է��Ͻʽÿ�.";
                        Agent_Speak(L_Register3PlayElementScript7_Text);

                        break;

                case "UserStateTextBox":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript8_Text = "��/�� �̸��� �Է��Ͻʽÿ�.";
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
                                var L_Register3PlayElementScript91_Text = "��/���� �����ؾ� �մϴ�.";
                                Agent_Speak(L_Register3PlayElementScript91_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript92_Text = "��/�� ����� ǥ���Ϸ��� ���콺�� �Ʒ��� ȭ��ǥ ���߸� Ŭ���Ͻʽÿ�.";
                                Agent_Speak(L_Register3PlayElementScript92_Text);

                        }

                        else if (elem.id == "selCAProvince") {
                                var L_Register3PlayElementScript93_Text = "��/���� �����ؾ� �մϴ�.";
                                Agent_Speak(L_Register3PlayElementScript93_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript94_Text = "��/�� ����� ǥ���Ϸ��� ���콺�� �Ʒ��� ȭ��ǥ ���߸� Ŭ���Ͻʽÿ�.";
                                Agent_Speak(L_Register3PlayElementScript94_Text);

                        }

                        else {
                                var L_Register3PlayElementScript95_Text = "����/������ �����ؾ� �մϴ�. ���콺�� �Ʒ��� ȭ��ǥ ���߸� Ŭ���Ͻʽÿ�.";
                                Agent_Speak(L_Register3PlayElementScript95_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript96_Text = "����/���� ����� ǥ���Ϸ��� ���콺�� �Ʒ��� ȭ��ǥ ���߸� Ŭ���Ͻʽÿ�.";
                                Agent_Speak(L_Register3PlayElementScript96_Text);

                        }

                        Agent_Play("Explain");

                        var L_Register3PlayElementScript11_Text = "��/���� �����Ͻʽÿ�.";
                        var L_Register3PlayElementScript12_Text = "��/���� �����Ͻʽÿ�.";
                        var L_Register3PlayElementScript13_Text = "����/������ �����Ͻʽÿ�.";

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

                        var L_Register3PlayElementScript14_Text = "���� ��ȣ�� �Է��Ͻʽÿ�.";
                        Agent_Speak(L_Register3PlayElementScript14_Text);

                        break;

                case "UserEmailAddress":

                        if (elem.value == "") {

							if (g.document.dir == "rtl") 
								Agent_GestureAtElement(elem, "Left");
		
							else
								Agent_GestureAtElement(elem, "Right");

                            var L_Register3PlayElementScript15_Text = "���� ���� �ּҴ� �ʼ� �׸��� �ƴմϴ�. Microsoft������ ����ڿ��� ������ ���� �Ϲ������� ���� ������ ����մϴ�.";
                            Agent_Speak(L_Register3PlayElementScript15_Text);
							
							g_bAgentRegister3ShortEmail = true;
							
							Agent_Play("Explain");
							
                            var L_Register3PlayElementScript16_Text = "���� ���� �ּҰ� ���� ���, �Է¶��� ��� �νʽÿ�.";
                            Agent_Speak(L_Register3PlayElementScript16_Text);
							
							Agent_Play("Blink");
							                             
                        }
                        
                        else if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) {

	                       if (g_strAgentLastFocusID == "UserEmailAddress") {

								Agent_Play("Decline");
								
								var L_Register3PlayElementScript17_Text = "���� ���� �ּҰ� �ùٸ��� �ʽ��ϴ�.";
								Agent_Speak(L_Register3PlayElementScript17_Text);

								Agent_ExplainEmailAddress();
								
								if (g.document.dir == "rtl")
									Agent_GestureAtElement(elem, "Left");
								
								else
									Agent_GestureAtElement(elem, "Right");
                                        
								Agent_Play("Alert");
                                        
								var L_Register3PlayElementScript18_Text = "���� ���� �ּҰ� ���� ���, �Է¶��� ��� �νʽÿ�.";
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
        var L_ExplainEmailAddress1_Text = "���� ���� �ּҴ� ���� �� �κ����� �Ǿ� �ֽ��ϴ�.";
        Agent_Speak(L_ExplainEmailAddress1_Text);

        var L_ExplainEmailAddress2_Text = "@ ��ȣ�� �� �κ��� ���� �̸��̰�, �� �κ��� ������ �̸��Դϴ�.";
        Agent_Speak(L_ExplainEmailAddress2_Text);

        var L_ExplainEmailAddress3_Text = "��: %s";
        var re = /%s/i;
        var strEmail = "\\map=\"\"=\"greatcustomer@msn.com\"\\";

        Agent_Speak(L_ExplainEmailAddress3_Text.replace(re, strEmail) + "\\pau=2000\\");

        Agent_Play("RestPose");
}







function Agent_PrivacyMSAddCommands() 
{
    var L_PrivacyMSCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_PrivacyMSCommand2_Text = "���� ������ ���� ����(&A)";
    var L_PrivacyMSCommand3_Text = "��Ű�� ���� ����(&K)";
    var L_PrivacyMSCommand4_Text = "���� �۾��� ���� ����(&W)";

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
    var L_PrivacyMSAboutThisStep1_Text = "�� ȭ�鿡 Microsoft �������� ��ȣ��å�� ǥ�õ˴ϴ�.";
    Agent_Speak(L_PrivacyMSAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.privtext,"Left");

    var L_PrivacyMSAboutThisStep2_Text = "���⿡�� �ڼ��� ������ �о �� �ֽ��ϴ�.";
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

    var L_PrivacyMSAboutThisStep3_Text = "���� ȭ������ ���ư����� [�ڷ�] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_PrivacyMSAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PrivacyMSWhatIsSecureServer()
{
    var L_PrivacyMSWhatIsSecureServer1_Text = "������ ���� ���� ���� ���ҽ��� ��Ʈ��ũ���� �ٸ� ��ǻ�Ϳ� �����ϴ� ��ǻ���Դϴ�.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer1_Text);

    var L_PrivacyMSWhatIsSecureServer2_Text = "���� ������ ���� Ʈ����� ����� ���� ��ǻ�ͷ�, ���ε��� ���� ����ڰ� ��ǻ�Ϳ� ����� ������ �׼����� �� ������ �Ǿ� �ֽ��ϴ�.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer2_Text);

    var L_PrivacyMSWhatIsSecureServer3_Text = "���� ���, Microsoft�� ����ϸ� ������� �̸��� �ּ� ������ Microsoft�� ���� ��� ������ ����˴ϴ�.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer3_Text);
        
    var L_PrivacyMSWhatIsSecureServer4_Text = "�̷��� �Ͽ� ������� ������ �����ϰ� ����� ������ �� ������ ��� ���� Microsoft �̿��� �� 3�ڰ� �̷��� ������ ����Ͽ� ����ڿ��� ������ �� �����ϴ�.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer4_Text);
}

function Agent_PrivacyMSWhatIsCookie()
{
    var L_PrivacyMSWhatIsCookie1_Text = "��Ű�� ��� �� ����Ʈ�� �湮���� �� ������� ��ǻ�Ϳ� ����Ǵ� ������ �����Դϴ�.";
    Agent_Speak(L_PrivacyMSWhatIsCookie1_Text);

    var L_PrivacyMSWhatIsCookie2_Text = "��Ű���� ������� ���� ���� �ּ� ��� ���� �⺻���� ������ ��������Ƿ� ����Ʈ�� �湮�� ������ �ش� ������ �ٽ� �Է����� �ʾƵ� �˴ϴ�.";
    Agent_Speak(L_PrivacyMSWhatIsCookie2_Text);

    var L_PrivacyMSWhatIsCookie3_Text = "���� ���, �� ����Ʈ���� ��ǰ�� ������ ��� �� �� ����Ʈ���� ���� ������ ���Ե� ��Ű�� ������� ��ǻ�ͷ� ���� �� �ֽ��ϴ�.";
    Agent_Speak(L_PrivacyMSWhatIsCookie3_Text);
        
    var L_PrivacyMSWhatIsCookie4_Text = "�׷��� ������ ���� �� ����Ʈ�� �湮���� �� ������ �ٽ� �Է����� �ʾƵ� �˴ϴ�.";
    Agent_Speak(L_PrivacyMSWhatIsCookie4_Text);
        
    var L_PrivacyMSWhatIsCookie5_Text = "Microsoft�� ����ϸ� ��ǰ ID, ����� �̸� �� �ּҰ� ����� ��ǻ���� ��Ű�� ����˴ϴ�.";
    Agent_Speak(L_PrivacyMSWhatIsCookie5_Text);
        
    var L_PrivacyMSWhatIsCookie6_Text = "������ www.microsoft.com�� �湮�ϸ� �� ����Ʈ���� ��ϵ� Windows ����ڷ� �ν��մϴ�.";
    Agent_Speak(L_PrivacyMSWhatIsCookie6_Text);
}

function Agent_PrivacyMSWhatToDoNext()
{    
    Agent_GestureAtElement(g.privtext,"Left");
    
    var L_PrivacyMSWhatToDoNext1_Text = "�������� ��ȣ��å�� ��ü ������ ������ �� ���ڸ� Ŭ���� ��,";
    Agent_Speak(L_PrivacyMSWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.privtext,"Right");

    var L_PrivacyMSWhatToDoNext2_Text = "���� �� �Ʒ��� ȭ��ǥ ���߸� ����Ͽ� �������� ��ȣ��å�� ������ ��ũ���Ͻʽÿ�.";
    Agent_Speak(L_PrivacyMSWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_PrivacyMSWhatToDoNext3_Text = "<Page Down> �� <Page Up> Ű�� ����Ͽ� ��ũ���� ���� �ֽ��ϴ�.";
    Agent_Speak(L_PrivacyMSWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
        
    var L_PrivacyMSWhatToDoNext4_Text = "�������� ��ȣ��å�� ��� �о����� [�ڷ�] ���߸� Ŭ���Ͽ� ���� ��� ȭ������ ���ư��ʽÿ�.";
    Agent_Speak(L_PrivacyMSWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}





function Agent_RefDialAddCommands() 
{
    var L_RefDialAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_RefDialAddCommands2_Text = "���� �۾��� ���� ����(&W)";

    g_AgentCharacter.Commands.Add("Agent_RefDialAboutThisStep", L_RefDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialWhatToDoNext", L_RefDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RefDialAboutThisStep()
{
    var L_RefDialAboutThisStep1_Text = "�� �ܰ迡���� ������ �δ� ��ȣ�� ��ȭ�� �̴ϴ�.";
    Agent_Speak(L_RefDialAboutThisStep1_Text);

    var L_RefDialAboutThisStep2_Text = "�̷��� �ϸ� ���� ��ǻ�Ϳ��� ������� ���� ���ͳ� ������ ����� �� �ֽ��ϴ�.";
    Agent_Speak(L_RefDialAboutThisStep2_Text);
}

function Agent_RefDialWhatToDoNext()
{    
    Agent_GestureAtElement(g.btnManual,"Left");
    
    var L_RefDialWhatToDoNext1_Text = "��� ���� ���ͳ� ���� ������(ISP)�� �̹� �ְų� ����� ISP�� �ƴ� ��쿡�� [���� ����] ���߸� Ŭ���Ͻʽÿ�.";
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

    var L_RefDialWhatToDoNext2_Text = "����� �� �ִ� ISP ��Ͽ��� �����Ϸ��� [����]�� Ŭ���Ͽ� ��� �����Ͻʽÿ�.";
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

    var L_RefDialWhatToDoNext3_Text = "�� ��ǻ�Ϳ� ���ͳ� �׼����� �������� �������� [�ǳʶٱ�]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_RefDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RefDialingAddCommands() 
{
    var L_RefDialingAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_RefDialingAddCommands2_Text = "ȭ�� ����� ǥ���ٿ� ���� ����(&A)";
    var L_RefDialingAddCommands3_Text = "���� �۾��� ���� ����(&W)";

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
    var L_RefDialingAboutThisStep1_Text = "������ �������� ��� ������ ���ͳ� ���� �������� ����� Ȯ���ϱ� ���� Microsoft ��ȸ ���񽺿� ���� ���Դϴ�.";
    Agent_Speak(L_RefDialingAboutThisStep1_Text);

    var L_RefDialingAboutThisStep2_Text = "��� ��ٷ� �ֽʽÿ�...";
    Agent_Speak(L_RefDialingAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingAboutThisStep3_Text = "�� �ܰ踦 �����ϰų� ���� ȭ������ ���ư� �� �ֽ��ϴ�.";
    Agent_Speak(L_RefDialingAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RefDialingWhatsThisBar()
{    
    Agent_GestureAtElement(g.tblProg,"Left");
    
    var L_RefDialingWhatsThisBar1_Text = "�۾� ���� ���°� ǥ�õǴ� ����� ǥ�����Դϴ�.";
    Agent_Speak(L_RefDialingWhatsThisBar1_Text);

    var L_RefDialingWhatsThisBar2_Text = "��ȸ ���񽺿��� ��ǻ�ͷ� ������ �ٿ�ε��ϸ� ���� ���밡 ä�����ϴ�.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
    
    Agent_Play("RestPose");

    var L_RefDialingWhatsThisBar3_Text = "��� ������ �ٿ�ε��ϸ� ���� ���밡 ������ ä������ �ڵ����� ���� ȭ������ �Ѿ�ϴ�.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
}

function Agent_RefDialingWhatToDoNext()
{
    var L_RefDialingWhatToDoNext1_Text = "Microsoft ��ȸ ���񽺿��� ISP ������ ��ǻ�ͷ� �ٿ�ε��ϴ� ���� ��� ��ٷ� �ֽʽÿ�.";
    Agent_Speak(L_RefDialingWhatToDoNext1_Text);

    var L_RefDialingWhatToDoNext2_Text = "�ٿ�ε尡 �Ϸ�Ǹ� ���� ȭ���� �ڵ����� ��Ÿ���ϴ�.";
    Agent_Speak(L_RefDialingWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingWhatToDoNext3_Text = "�� �ܰ踦 �����Ϸ��� [�ǳʶٱ�] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_RefDialingWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RegDialAddCommands()
{
    var L_RegDialAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_RegDialAddCommands2_Text = "���� �۾��� ���� ����(&W)";

    g_AgentCharacter.Commands.Add("Agent_RegDialAboutThisStep", L_RegDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RegDialWhatToDoNext", L_RegDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RegDialAboutThisStep()
{
    var L_RegDialAboutThisStep1_Text = "��� ���Ϳ� �����ϱ� ���� ������ �δ� ��ȭ�� �Ŵ� ���Դϴ�.";
    Agent_Speak(L_RegDialAboutThisStep1_Text);

    var L_RegDialAboutThisStep2_Text = "��� ��ٷ� �ֽʽÿ�...";
    Agent_Speak(L_RegDialAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialAboutThisStep3_Text = "�� �ܰ踦 �����ϰų� ���� ȭ������ ���ư� �� �ֽ��ϴ�.";
    Agent_Speak(L_RegDialAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RegDialWhatToDoNext()
{
    var L_RegDialWhatToDoNext1_Text = "��� ���Ϳ� �����ϴ� ���� ��� ��ٸ��ʽÿ�.";
    Agent_Speak(L_RegDialWhatToDoNext1_Text);

    var L_RegDialWhatToDoNext2_Text = "����Ǹ� �ڵ����� ���� ȭ������ �̵��˴ϴ�.";
    Agent_Speak(L_RegDialWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialWhatToDoNext3_Text = "�� �ܰ踦 �����Ϸ��� [�ǳʶٱ�] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_RegDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigDialAddCommands()
{
    var L_MigDialAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_MigDialAddCommands2_Text = "���� �۾��� ���� ����(&W)";

    g_AgentCharacter.Commands.Add("Agent_MigDialAboutThisStep", L_MigDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_MigDialWhatToDoNext", L_MigDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_MigDialAboutThisStep()
{
    var L_MigDialAboutThisStep1_Text = "�� �ܰ迡���� ������ �δ� ��ȣ�� ��ȭ�� �̴ϴ�.";
    Agent_Speak(L_MigDialAboutThisStep1_Text);

    var L_MigDialAboutThisStep2_Text = "�̷��� �ϸ� ���� ��ǻ�Ϳ��� ������� ���� ���ͳ� ������ ����� �� �ֽ��ϴ�.";
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
    
    var L_MigDialWhatToDoNext1_Text = "[����] ���߸� Ŭ���Ͽ� ��ȭ �ɱ⸦ �����Ͻʽÿ�.";
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

    var L_MigDialWhatToDoNext2_Text = "�� �ܰ踦 �����Ϸ��� [�ǳʶٱ�]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_MigDialWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}





function Agent_MigListAddCommands() 
{
    
    
    
	var L_MigListAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
	var L_MigListAddCommands2_Text = "���� �۾��� ���� ����(&W)";
	
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
    var L_MigListAboutThisStep1_Text = "����Ϸ��� ���ͳ� ���� ������(ISP)�� �����Ͻʽÿ�.";
    Agent_Speak(L_MigListAboutThisStep1_Text);

    var L_MigListAboutThisStep2_Text = "�̷��� �ϸ� ���� ��ǻ�Ϳ��� ������� ���� ���ͳ� ������ ����� �� �ֽ��ϴ�.";
    Agent_Speak(L_MigListAboutThisStep2_Text);
}

function Agent_MigListWhatToDoNext()
{
    Agent_GestureAtElement(g.selISPDropList,"Left");
    
    var L_MigListWhatToDoNext1_Text = "��Ͽ��� ���ϴ� �׸��� Ŭ���Ͽ� ���ͳ� ���� �����ڸ� �����Ͻʽÿ�.";
    Agent_Speak(L_MigListWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_MigListWhatToDoNext2_Text = "���ϴ� ISP�� ��Ͽ� ���� ��쿡�� ��� �� �Ʒ��� �ִ� [ISP�� ��Ͽ� ����]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_MigListWhatToDoNext2_Text);

    var L_MigListWhatToDoNext3_Text = "�� ��ǻ�Ϳ� ���ͳ� ������ �ٽ� ����� �� ������ �ʿ��ϸ� ISP�� �����Ͻʽÿ�.";
    Agent_Speak(L_MigListWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_MigListWhatToDoNext4_Text = "[����] ���߸� Ŭ���Ͽ� ��� �����Ͻʽÿ�.";
    Agent_Speak(L_MigListWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigPageAddCommands() 
{
	var L_MigPageAddCommands1_Text = "���� �۾��� ���� ����(&N)";
	var L_MigPageAddCommands2_Text = "�� ȭ�鿡 ���� ����(&S)";
	var L_MigPageAddCommands3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";
	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_WhatToDoNext", L_MigPageAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_AboutThisStep", L_MigPageAddCommands2_Text);
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_HowToMoveOn", L_MigPageAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_MigPageCommand_WhatToDoNext() {
		
	var L_MigPageWhatToDoNext1_Text = "�� �ܰ踦 �Ϸ��� ��,";
	Agent_Speak(L_MigPageWhatToDoNext1_Text);
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
			
	var L_MigPageWhatToDoNext2_Text = "[����] ���߸� Ŭ���Ͻʽÿ�.";
	Agent_Speak(L_MigPageWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}

function Agent_MigPageCommand_AboutThisStep() 
{
	var L_MigPageAboutThisStep1_Text = "���� ���� �����ڸ� ���� ���ͳ� ������ ����ϵ��� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_MigPageAboutThisStep1_Text);
	
	Agent_Play("Pleased");
	
	var L_MigPageAboutThisStep2_Text = "���ͳ� ���� �����ڿ��� �����ϴ� ȭ���� ���ø� �����ʽÿ�.";
	Agent_Speak(L_MigPageAboutThisStep2_Text);
}

function Agent_MigPageCommand_HowToMoveOn() 
{
	var L_MigPageHowToMoveOn1_Text = "�� �ܰ踦 �Ϸ��� ��,";
	Agent_Speak(L_MigPageHowToMoveOn1_Text);		
			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

	var L_MigPageHowToMoveOn2_Text = "����Ϸ��� [����] ���߸� Ŭ���Ͻʽÿ�.";
	Agent_Speak(L_MigPageHowToMoveOn2_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPDialAddCommands() 
{
    var L_ISPDial1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_ISPDial2_Text = "���� �۾��� ���� ����(&W)";

    g_AgentCharacter.Commands.Add("Agent_ISPDialAboutThisStep", L_ISPDial1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDialWhatToDoNext", L_ISPDial2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPDialAboutThisStep()
{
    var L_ISPDialAboutThisStep1_Text = "�� �ܰ迡���� ������ �δ� ��ȣ�� ��ȭ�� �̴ϴ�.";
    Agent_Speak(L_ISPDialAboutThisStep1_Text);

    var L_ISPDialAboutThisStep2_Text = "�� ������ ���� �� ������ ����մϴ�.";
    Agent_Speak(L_ISPDialAboutThisStep2_Text);

    var L_ISPDialAboutThisStep3_Text = "[����] ���߸� Ŭ���Ͽ� ��� �����Ͻʽÿ�.";
    Agent_Speak(L_ISPDialAboutThisStep3_Text);
}

function Agent_ISPDialWhatToDoNext()
{
    var L_ISPDialWhatToDoNext1_Text = "[����] ���߸� Ŭ���Ͽ� ��� �����Ͻʽÿ�.";
    Agent_Speak(L_ISPDialWhatToDoNext1_Text);

    var L_ISPDialWhatToDoNext2_Text = "�� ��ǻ�Ϳ� ���ͳ� �׼����� �������� �������� [�ǳʶٱ�]�� Ŭ���Ͻʽÿ�. ���߿� �� �۾��� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_ISPDialWhatToDoNext2_Text);
}




function Agent_DialToneAddCommands()
{
    var L_DialToneAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_DialToneAddCommands2_Text = "��ǻ�͸� �ű� �� �ؾ� �� �Ͽ� ���� ����(&A)";
    var L_DialToneAddCommands3_Text = "���� �۾��� ���� ����(&W)";

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
    var L_DialToneAboutThisStep1_Text = "�߽����� �����ϴ�.";
    Agent_Speak(L_DialToneAboutThisStep1_Text);

    var L_DialToneAboutThisStep2_Text = "������ ���� ���� ���� ������ ���캼 �� �ֽ��ϴ�.";
    Agent_Speak(L_DialToneAboutThisStep2_Text);

    var L_DialToneAboutThisStep3_Text = "���� ��ȭ���� ��ǻ�Ϳ� �ùٸ��� ����Ǿ� �ִ��� Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_DialToneAboutThisStep3_Text);

    var L_DialToneAboutThisStep4_Text = "�ٸ� ����� ��ȭ�� ����Ϸ��� �ϴ��� Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_DialToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneAboutThisStep5_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͽ� �ٽ� ��ȭ�� �ɾ� ���ʽÿ�.";
    Agent_Speak(L_DialToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_DialToneHowToMove()
{
    var L_DialToneHowToMove1_Text = "��ȭ���� �����ϱ� ���� ��ǻ�͸� �Űܾ� �� ��쿡�� ������ ������ Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_DialToneHowToMove1_Text);

    var L_DialToneHowToMove2_Text = "�ý����� �ٽ� �����ϸ� �ߴܵ� �κк��� �۾��� �ٽ� ����˴ϴ�.";
    Agent_Speak(L_DialToneHowToMove2_Text);
}

function Agent_DialToneWhatToDoNext()
{
    var L_DialToneWhatToDoNext1_Text = "��ǻ�Ϳ� ��ȭ���� �ùٸ��� ����Ǿ� �ִ��� Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_DialToneWhatToDoNext1_Text);

    var L_DialToneWhatToDoNext2_Text = "��ȭ�� ��� ���� �ƴ��� Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_DialToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneWhatToDoNext3_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͽ� �ٽ� ��ȭ�� �ɾ� ���ʽÿ�.";
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

    var L_DialToneWhatToDoNext4_Text = "������� �ʰų� Windows XP�� ��ǰ���� �������� �ʰ� ��� �����Ϸ��� [�ǳʶٱ�]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_DialToneWhatToDoNext4_Text);
    
    Agent_Play("RestPose");

    var L_DialToneWhatToDoNext5_Text = "���߿� �������� ����� �� �ֽ��ϴ�.";
    Agent_Speak(L_DialToneWhatToDoNext5_Text);
}



function Agent_CnnctErrAddCommands() 
{
    var L_CnnctErrAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_CnnctErrAddCommands2_Text = "��ȭ �� ��⸦ �����ϴ� ����� ���� ����(&O)";
    var L_CnnctErrAddCommands3_Text = "���� �۾��� ���� ����(&W)";

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
    var L_CnnctErrAboutThisStep1_Text = "��� ���Ϳ� ��ȭ�� �Ŵ� ���� ��ȭ ������ ���������ϴ�.";
    Agent_Speak(L_CnnctErrAboutThisStep1_Text);

    var L_CnnctErrAboutThisStep2_Text = "������ ���� ���� ���� ������ ���캼 �� �ֽ��ϴ�.";
    Agent_Speak(L_CnnctErrAboutThisStep2_Text);

    var L_CnnctErrAboutThisStep3_Text = "ù°, ���� �ð� ���� ������� �ʾ� ������ �ڵ����� ���������ϴ�.";
    Agent_Speak(L_CnnctErrAboutThisStep3_Text);

    var L_CnnctErrAboutThisStep4_Text = "��°, ����Ǿ� �ִ� ���� �ٸ� ����ڰ� ��ȭ�� ����Ϸ��� �߽��ϴ�.";
    Agent_Speak(L_CnnctErrAboutThisStep4_Text);

    var L_CnnctErrAboutThisStep5_Text = "��°, ��ȭ �� ��� ���񽺸� ����ϴ� ���, �ɷ��� ��ȭ�� ���� ������ �������� �� �ֽ��ϴ�.";
    Agent_Speak(L_CnnctErrAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrAboutThisStep6_Text = "��ȭ �� ��� ���񽺸� ����ϴ� ���, ����� ������ �� �ִ� ��ȣ�� �Ʒ��� �Է��Ͻʽÿ�.";
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

    var L_CnnctErrAboutThisStep7_Text = "[����] ���߸� Ŭ���Ͽ� �ٽ� �����Ͻʽÿ�.";
    Agent_Speak(L_CnnctErrAboutThisStep7_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrTurnOffCallWaiting()
{
    var L_CnnctErrTurnOffCallWaiting1_Text = "��ȭ �� ��� ���� ���� �ڵ�� ��ȭ ���� �����ڷκ��� ���� �� �ֽ��ϴ�.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting1_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrTurnOffCallWaiting2_Text = "�� ���� �߿� ��ȭ �� ��� ���񽺸� �����Ϸ��� �ش� ��ȣ�� �Է��Ͻʽÿ�.";
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

    var L_CnnctErrTurnOffCallWaiting3_Text = "�۾��� ��ģ ��, [����]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrWhatToDoNext()
{
    var L_CnnctErrWhatToDoNext1_Text = "Microsoft�� �����ϱ� ���� ����Ϸ��� ��ȭ���� �ٸ� ����� ������� �ʴ��� Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_CnnctErrWhatToDoNext1_Text);

    var L_CnnctErrWhatToDoNext2_Text = "��ȭ �� ��⸦ ����ϴ� ��쿡�� ��� ���ʽÿ�.";
    Agent_Speak(L_CnnctErrWhatToDoNext2_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrWhatToDoNext3_Text = "��ȭ �� ��⸦ ������ �� �Է¶��� �ڵ带 �Է��Ͻʽÿ�.";
    Agent_Speak(L_CnnctErrWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_CnnctErrWhatToDoNext4_Text = "��ȭ ��ȭ�� �Ϸ�Ǹ� ��ȭ �� ��� ���񽺰� �ٽ� �����ϴ�.";
    Agent_Speak(L_CnnctErrWhatToDoNext4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrWhatToDoNext5_Text = "�ٽ� �õ��� �غ� �Ǿ����� [����]�� Ŭ���Ͻʽÿ�.";
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

    var L_CnnctErrWhatToDoNext6_Text = "������� �ʰ� ��� �����Ϸ��� [�ǳʶٱ�]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_CnnctErrWhatToDoNext6_Text);
    
    Agent_Play("RestPose");
}



function Agent_HandShakeAddCommands() 
{
    var L_HandShakeAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_HandShakeAddCommands2_Text = "���� �۾��� ���� ����(&W)";

    g_AgentCharacter.Commands.Add("Agent_HandShakeAboutThisStep", L_HandShakeAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_HandShakeWhatToDoNext", L_HandShakeAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_HandShakeAboutThisStep()
{
    var L_HandShakeAboutThisStep1_Text = "���� Microsoft�� ������ �� �����ϴ�.";
    Agent_Speak(L_HandShakeAboutThisStep1_Text);

    var L_HandShakeAboutThisStep2_Text = "��ȭ�� ��� ���̰ų� ��ǻ�Ϳ��� ��ȭ�� �� �� �����ϴ�.";
    Agent_Speak(L_HandShakeAboutThisStep2_Text);

    var L_HandShakeAboutThisStep3_Text = "��ø� ��ٷ� ���ʽÿ�.";
    Agent_Speak(L_HandShakeAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_HandShakeAboutThisStep4_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͽ� �ٽ� �õ��Ͻʽÿ�.";
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
    
    var L_HandShakeWhatToDoNext1_Text = "��� ��ٸ� ��, [�ٽ� �ɱ�]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_HandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_HandShakeWhatToDoNext2_Text = "������ ��ӵǴ� ��쿡�� ��ǻ�� ������ü�� �����Ͻʽÿ�.";
    Agent_Speak(L_HandShakeWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_HandShakeWhatToDoNext3_Text = "��ǻ�͸� ������� �ʰ� ��� �����Ϸ��� [�ǳʶٱ�]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_HandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_NoAnswerAddCommands() 
{
    var L_NoAnswerAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_NoAnswerAddCommands2_Text = "��ȭ ��ȣ�� �ùٸ��� ���� ��쿡 ���� ����(&A)";
    var L_NoAnswerAddCommands3_Text = "���� �۾��� ���� ����(&W)";

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
    var L_NoAnswerAboutThisStep1_Text = "�����Ϸ��� ��ȭ ��ȣ���� ������ �����ϴ�.";
    Agent_Speak(L_NoAnswerAboutThisStep1_Text);

    var L_NoAnswerAboutThisStep2_Text = "��ȣ�� �´��� Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_NoAnswerAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_NoAnswerAboutThisStep3_Text = "��ȣ�� �ùٸ��� ��� ��ٸ� �� [�ٽ� ��ȭ �ɱ�] ���߸� Ŭ���Ͽ� �ٽ� �õ��Ͻʽÿ�.";
    Agent_Speak(L_NoAnswerAboutThisStep3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.edtPhoneNumber,"Left");

    var L_NoAnswerAboutThisStep4_Text = "��ȣ�� �ùٸ��� ���� ��쿡�� ���⸦ Ŭ���Ͽ� �����Ͻʽÿ�.";
    Agent_Speak(L_NoAnswerAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_NoAnswerAboutThisStep5_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_NoAnswerAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.btnRestore,"Right");

    var L_NoAnswerAboutThisStep6_Text = "Windows���� �����ϴ� �⺻ ��ȭ ��ȣ�� �ٽ� ����Ϸ��� [����]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_NoAnswerAboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_NoAnswerWhatIfWrongNumber()
{
    var L_NoAnswerWhatIfWrongNumber1_Text = "��ȭ ��ȣ�� �ùٸ��� ���� ��쿡�� �Է¶��� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber1_Text);

    var L_NoAnswerWhatIfWrongNumber2_Text = "�Է¶��� Ŭ���ϸ� �����̴� ������(���� ����)�� ǥ�õ˴ϴ�.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber2_Text);

    var L_NoAnswerWhatIfWrongNumber3_Text = "�Է��ϴ� ������ ��� ���� ������ �Էµ˴ϴ�.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber3_Text);

    var L_NoAnswerWhatIfWrongNumber4_Text = "Ű������ ���� ȭ��ǥ Ű�� ������ ȭ��ǥ Ű�� ���� ���� ������ �̵��� �� �ֽ��ϴ�.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber4_Text);

    var L_NoAnswerWhatIfWrongNumber5_Text = "<Delete> Ű�� ����Ͽ� ���� ���� ���� ���ڸ� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber5_Text);

    var L_NoAnswerWhatIfWrongNumber6_Text = "�齺���̽� Ű�� ������ ���� ���� ���� ���ڰ� �����˴ϴ�.";
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
    
    var L_NoAnswerWhatToDoNext1_Text = "��ȭ ��ȣ�� �ùٸ��� Ȯ���� �� �غ� �Ǿ����� [�ٽ� �ɱ�]�� Ŭ���Ͽ� �ٽ� �����Ͻʽÿ�.";
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

    var L_NoAnswerWhatToDoNext2_Text = "��� �����Ϸ��� �ٽ� ������ �����ϰų� ������ ��ǻ�͸� ����ϴ� ������ �����ؾ� �մϴ�.";
    Agent_Speak(L_NoAnswerWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}



function Agent_PulseAddCommands() 
{

    var L_PulseAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_PulseAddCommands2_Text = "���� �۾��� ���� ����(&W)";

    g_AgentCharacter.Commands.Add("Agent_PulseAboutThisStep", L_PulseAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_PulseWhatToDoNext", L_PulseAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_PulseAboutThisStep()
{
    var L_PulseAboutThisStep1_Text = "��ȭ�� �� ������� �޽� ������� Ȯ������ ���߽��ϴ�.";
    Agent_Speak(L_PulseAboutThisStep1_Text);

    var L_PulseAboutThisStep2_Text = "����Ϸ��� �� ������ �Է��ؾ� �մϴ�.";
    Agent_Speak(L_PulseAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseAboutThisStep3_Text = "�� ȭ�鿡�� ��ȭ �ɱ� ����� �����մϴ�.";
    Agent_Speak(L_PulseAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PulseWhatToDoNext()
{
    var L_PulseWhatToDoNext1_Text = "��� ���� ��ȭ �ɱ� ��� ���� ��� ���ö��� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_PulseWhatToDoNext1_Text);
    
    Agent_GestureAtElement(g.tone,"Left");

    var L_PulseWhatToDoNext2_Text = "�� ����� ����ϸ� ���⸦ Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_PulseWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseWhatToDoNext3_Text = "�޽� ����� ����ϸ� ���⸦ Ŭ���Ͻʽÿ�.";
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

    var L_PulseWhatToDoNext4_Text = "[����]�� Ŭ���ϰ� �ٽ� ��ȭ�� �ɾ� ���ʽÿ�.";
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

    var L_PulseWhatToDoNext5_Text = "��ǻ�͸� ������� �ʰ� ��� �����Ϸ��� [�ǳʶٱ�]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_PulseWhatToDoNext5_Text);
    
    Agent_Play("RestPose");
}





function Agent_TooBusyAddCommands() 
{
        var L_TooBusyAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
        var L_TooBusyAddCommands2_Text = "��ȭ ��ȣ�� �ùٸ��� ���� ��쿡 ���� ����(&A)";
        var L_TooBusyAddCommands3_Text = "���� �۾��� ���� ����(&W)";

        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_AboutThisStep", L_TooBusyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatIfIncorrect", L_TooBusyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatToDoNext", L_TooBusyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_TooBusyCommand_AboutThisStep() 
{
    var L_TooBusyAboutThisStep1_Text = "�����Ϸ��� ��ȭ ��ȣ�� �߸��Ǿ��ų� ��ȭ ���Դϴ�.";
    Agent_Speak(L_TooBusyAboutThisStep1_Text);

    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyAboutThisStep2_Text = "�� ��ȣ�� �ùٸ��� Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_TooBusyAboutThisStep2_Text);
        
    Agent_Play("RestPose");

    var L_TooBusyAboutThisStep3_Text = "��ȣ�� �ùٸ��� ��� ��ٸ� ��,";
    Agent_Speak(L_TooBusyAboutThisStep3_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyAboutThisStep4_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͽ� �ٽ� ��ȭ�� �ɾ� ���ʽÿ�.";
    Agent_Speak(L_TooBusyAboutThisStep4_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatIfIncorrect() 
{        
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect1_Text = "�� ��ȭ ��ȣ�� �ùٸ��� ���� ���,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("cb_altnumber"),"Left");
    
    var L_TooBusyPhoneNumberIncorrect2_Text = "�� Ȯ�ζ��� �����Ͻʽÿ�.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_altnumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect3_Text = "���⿡ �ٸ� ��ȭ ��ȣ�� �Է��Ͻʽÿ�.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("cb_outsideline"),"Left");

    var L_TooBusyPhoneNumberIncorrect4_Text = "�ܺ� ��ȭ�� �� �ʿ䰡 ������ �� Ȯ�ζ��� �����Ͻʽÿ�.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect4_Text);

    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("edt_outsideline"),"Right");

    var L_TooBusyPhoneNumberIncorrect5_Text = "���⿡ ��ȣ�� �Է��Ͻʽÿ�.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect5_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect6_Text = "��ȭ �� ��⸦ ����ϴ� ��쿡�� �Ŵ� ��ȭ�� �ɷ��� ��ȭ�� ���� �ߴܵ� �� �ֽ��ϴ�.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect6_Text);

    var L_TooBusyPhoneNumberIncorrect7_Text = "�� ���� �߿��� ��ȭ �� ��� ���񽺸� ���� ���� �����ϴ�.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect7_Text);
        
    Agent_GestureAtElement(g.document.all("cb_callwaiting"),"Left");

    var L_TooBusyPhoneNumberIncorrect8_Text = "�� Ȯ�ζ��� �����Ͻʽÿ�.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect8_Text);

    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_callwaiting"),"Right");

    var L_TooBusyPhoneNumberIncorrect9_Text = "���⿡ �ڵ带 �Է��Ͻʽÿ�.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect9_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect10_Text = "��ȭ ��ȭ�� �Ϸ�Ǹ� ��ȭ �� ��� ���񽺰� �ٽ� �����ϴ�.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect10_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyPhoneNumberIncorrect11_Text = "�ٽ� ��ȭ�� �� �غ� �Ǿ����� [�ٽ� �ɱ�] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect11_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatToDoNext() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyWhatToDoNext1_Text = "�� ��ȭ ��ȣ�� �ùٸ��� Ȯ���� ��,";
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
    
     var L_TooBusyWhatToDoNext2_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͽ� �ٽ� �����մϴ�.";
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

    var L_TooBusyWhatToDoNext3_Text = "[�ǳʶٱ�] ���߸� Ŭ���Ͽ� �� �ܰ踦 ������ ���� �ֽ��ϴ�. Windows ��ġ�� ���� �� ����� �� �ֽ��ϴ�.";
    Agent_Speak(L_TooBusyWhatToDoNext3_Text);
        
    Agent_Play("RestPose");
}



function Agent_ISPDToneAddCommands() 
{
    var L_ISPDToneAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_ISPDToneAddCommands2_Text = "��ǻ�͸� �ű� �� �ؾ� �� �Ͽ� ���� ����(&A)";
    var L_ISPDToneAddCommands3_Text = "���� �۾��� ���� ����(&W)";

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
    var L_ISPDToneAboutThisStep1_Text = "�߽����� �����ϴ�.";
    Agent_Speak(L_ISPDToneAboutThisStep1_Text);

    var L_ISPDToneAboutThisStep2_Text = "������ ���� ���� ���� ������ ���캼 �� �ֽ��ϴ�.";
    Agent_Speak(L_ISPDToneAboutThisStep2_Text);

    var L_ISPDToneAboutThisStep3_Text = "���� ��ȭ���� ��ǻ�Ϳ� �ùٸ��� ����Ǿ� �ִ��� Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_ISPDToneAboutThisStep3_Text);

    var L_ISPDToneAboutThisStep4_Text = "�ٸ� ����� ��ȭ�� ����Ϸ��� �ϴ��� Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_ISPDToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneAboutThisStep5_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͽ� �ٽ� ��ȭ�� �ɾ� ���ʽÿ�.";
    Agent_Speak(L_ISPDToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPDToneHowToMove()
{
    var L_ISPDToneHowToMove1_Text = "��ȭ���� �����ϱ� ���� ��ǻ�͸� �Űܾ� �� ��쿡�� ������ ������ Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_ISPDToneHowToMove1_Text);

    var L_ISPDToneHowToMove2_Text = "�ý����� �ٽ� �����ϸ� �ߴܵ� �κк��� �۾��� �ٽ� ����˴ϴ�.";
    Agent_Speak(L_ISPDToneHowToMove2_Text);
}

function Agent_ISPDToneWhatToDoNext()
{
    var L_ISPDToneWhatToDoNext1_Text = "��ǻ�Ϳ� ��ȭ���� �ùٸ��� ����Ǿ� �ִ��� Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_ISPDToneWhatToDoNext1_Text);

    var L_ISPDToneWhatToDoNext2_Text = "��ȭ�� ��� ���� �ƴ��� Ȯ���Ͻʽÿ�.";
    Agent_Speak(L_ISPDToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneWhatToDoNext3_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͽ� �ٽ� ��ȭ�� �ɾ� ���ʽÿ�.";
    Agent_Speak(L_ISPDToneWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_ISPCnErrAddCommands() {

        var L_ISPCnErrAddCommands1_Text = "���� �۾��� ���� ����(&N)";
        var L_ISPCnErrAddCommands2_Text = "��ȭ �� ��⸦ �����ϴ� ����� ���� ����(&T)";
        var L_ISPCnErrAddCommands3_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_ISPCnErrAddCommands4_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

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
        var L_ISPCnErrIntro1_Text = "���ͳ� ���񽺸� �����ϴ� ���� ��ȭ ������ ���������ϴ�.";
        Agent_Speak(L_ISPCnErrIntro1_Text);

        Agent_MoveToElement(g.document.all("txtBullet1"),"Left");
        
        var L_ISPCnErrIntro2_Text = "������ ���� ���� ���� ������ ���캼 �� �ֽ��ϴ�.";
        Agent_Speak(L_ISPCnErrIntro2_Text);

        var L_ISPCnErrIntro3_Text = "ù°, ���� �ð� ���� ������� �ʾ� ������ �ڵ����� ���������ϴ�.";
        Agent_Speak(L_ISPCnErrIntro3_Text);

        var L_ISPCnErrIntro4_Text = "��°, ����Ǿ� �ִ� ���� �ٸ� ����ڰ� ��ȭ�� ����Ϸ��� �߽��ϴ�.";
        Agent_Speak(L_ISPCnErrIntro4_Text);

        var L_ISPCnErrIntro5_Text = "��°, ��ȭ �� ��� ���񽺸� ����ϴ� ���, �ɷ��� ��ȭ�� ���� ������ �������� �� �ֽ��ϴ�.";
        Agent_Speak(L_ISPCnErrIntro5_Text);

        Agent_GestureAtElement(g.document.all("Callwait"),"Left");

        var L_ISPCnErrIntro6_Text = "��ȭ �� ��� ���񽺸� ����ϰ� �ְ�, �� ����� ������ �� �ִ� ��ȣ�� �˰� ������ �Ʒ��� ��ȣ�� �Է��Ͻʽÿ�.";
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

        var L_ISPCnErrIntro7_Text = "[�ٽ� �ɱ�] ���߸� Ŭ���Ͽ� �ٽ� �����Ͻʽÿ�.";
        Agent_Speak(L_ISPCnErrIntro7_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("txtBullet1"),"Left");

        var L_ISPCnErrWhatToDoNext1_Text = "���� ���� ������ �ذ��� ��,";
        Agent_Speak(L_ISPCnErrWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPCnErrWhatToDoNext2_Text = "�ٽ� �����Ϸ���";
        Agent_Speak(L_ISPCnErrWhatToDoNext2_Text);

        var L_ISPCnErrWhatToDoNext3_Text = "[�ٽ� �ɱ�] ���߸� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_ISPCnErrWhatToDoNext3_Text);
}

function Agent_ISPCnErrCommand_HowToTurnOffCallWaiting() 
{
        Agent_GestureAtElement(g.document.all("Callwait"),"Left");
        
        var L_ISPCnErrHowToTurnOffCallWaiting1_Text = "�����ϴ� ���� ��ȭ �� ��� ���񽺸� �����Ϸ���";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting1_Text);

        var L_ISPCnErrHowToTurnOffCallWaiting2_Text = "�ش� ��ȣ�� ���⿡ �Է��Ͻʽÿ�.";
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

        var L_ISPCnErrHowToTurnOffCallWaiting3_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_HowToMoveOn() 
{
        var L_ISPCnErrHowToMoveOn1_Text = "��� �����Ϸ��� �ٽ� ������ �����ϰų� �� �ܰ踦 �����ؾ� �մϴ�.";
        Agent_Speak(L_ISPCnErrHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrHowToMoveOn2_Text = "�ٽ� ������ �õ��Ϸ��� [�ٽ� �ɱ�]�� Ŭ���ϰ�,";
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

        var L_ISPCnErrHowToMoveOn3_Text = "�ٽ� �������� �ʰ� ��� �����Ϸ��� [�ǳʶٱ�]�� Ŭ���Ͻʽÿ�.";
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

        var L_ISPHandShakeAddCommands1_Text = "���� �۾��� ���� ����(&N)";
        var L_ISPHandShakeAddCommands2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_ISPHandShakeAddCommands3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_WhatToDoNext", L_ISPHandShakeAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_AboutThisScreen", L_ISPHandShakeAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_HowToMoveOn", L_ISPHandShakeAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPHandShakeIntro() {

}

function Agent_ISPHandShakeCommand_AboutThisScreen() 
{
        var L_ISPHandShakeIntro1_Text = "������ ���ͳ� ���� �������� �� ���� ���񽺸� ���� ����� �� �����ϴ�.";
        Agent_Speak(L_ISPHandShakeIntro1_Text);

        var L_ISPHandShakeIntro2_Text = "(������ �� �� ���� ������ �߻��߽��ϴ�.)";
        Agent_Speak(L_ISPHandShakeIntro2_Text);

        var L_ISPHandShakeIntro3_Text = "������ �� �� ���� ��ٸ� �� �ٽ� ��ȭ�� �� �� �ֽ��ϴ�.";
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
        
        var L_ISPHandShakeIntro4_Text = "���ͳ� ���� ������ ������ ���� �ֽ��ϴ�.";
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

        var L_ISPHandShakeWhatToDoNext1_Text = "��� ��ٸ� ��, [�ٽ� �ɱ�]�� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeWhatToDoNext2_Text = "������ ��ӵǴ� ��쿡��";
        Agent_Speak(L_ISPHandShakeWhatToDoNext2_Text);
        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeWhatToDoNext3_Text = "[�ǳʶٱ�]�� Ŭ���Ͽ� ���ͳ� ���񽺸� �������� �ʰ� ��� ������ �� �ֽ��ϴ�.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPHandShakeCommand_HowToMoveOn() 
{
        var L_ISPHandShakeHowToMoveOn1_Text = "��� ��ٸ� ��,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPHandShakeHowToMoveOn2_Text = "[�ٱ� �ɱ�]�� Ŭ���Ͽ� �ٽ� �����Ͻʽÿ�.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeHowToMoveOn3_Text = "������ ��ӵǴ� ��쿡��";
        Agent_Speak(L_ISPHandShakeHowToMoveOn3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeHowToMoveOn4_Text = "[�ǳʶٱ�]�� Ŭ���Ͽ� ���ͳ� ���񽺸� �������� �ʰ� ��� ������ �� �ֽ��ϴ�.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn4_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPInsAddCommands() {

        var L_ISPInsAddCommands1_Text = "���� �۾��� ���� ����(&N)";
        var L_ISPInsAddCommands2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_ISPInsAddCommands3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_WhatToDoNext", L_ISPInsAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_AboutThisScreen", L_ISPInsAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_HowToMoveOn", L_ISPInsAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPInsIntro() {

}

function Agent_ISPInsCommand_AboutThisScreen() 
{
        var L_ISPInsIntro1_Text = "������ ���� �����ڸ� ���� ���ͳݿ� �������� ���߽��ϴ�.";
        Agent_Speak(L_ISPInsIntro1_Text);

        var L_ISPInsIntro2_Text = "�� �������� ����Ͽ� ���ͳݿ� �����ϴ� �� ������ �ְų�, ���� ������ ������ �޴� �� ������ ������";
        Agent_Speak(L_ISPInsIntro2_Text);

        var L_ISPInsIntro3_Text = "���� �������� ��� ���� ���񽺿� �����Ͻʽÿ�.";
        Agent_Speak(L_ISPInsIntro3_Text);
}

function Agent_ISPInsCommand_WhatToDoNext() 
{
        var L_ISPInsWhatToDoNext1_Text = "����Ϸ��� [����] ���߸� Ŭ���Ͻʽÿ�.";
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

        var L_ISPInsHowToMoveOn1_Text = "[����] ���߸� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_ISPInsHowToMoveOn1_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPNoAnwAddCommands() {

        var L_ISPNoAnwAddCommands1_Text = "���� �۾��� ���� ����(&N)";
        var L_ISPNoAnwAddCommands2_Text = "��ȭ ��ȣ�� �ùٸ��� ���� ��쿡 ���� ����(&P)";
        var L_ISPNoAnwAddCommands3_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_ISPNoAnwAddCommands4_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoNext", L_ISPNoAnwAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect", L_ISPNoAnwAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_AboutThisScreen", L_ISPNoAnwAddCommands3_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_HowToMoveOn", L_ISPNoAnwAddCommands4_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPNoAnwCommand_AboutThisScreen() 
{
        var L_ISPNoAnwIntro1_Text = "�����Ϸ��� ��ȭ ��ȣ���� ������ �����ϴ�.";
        Agent_Speak(L_ISPNoAnwIntro1_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro2_Text = "��ȣ�� �´��� Ȯ���Ͻʽÿ�.";
        Agent_Speak(L_ISPNoAnwIntro2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwIntro3_Text = "��ȣ�� �ùٸ��� ��� ��ٸ� ��,";
        Agent_Speak(L_ISPNoAnwIntro3_Text);

        var L_ISPNoAnwIntro4_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͽ� �ٽ� �õ��Ͻʽÿ�.";
        Agent_Speak(L_ISPNoAnwIntro4_Text);

        var L_ISPNoAnwIntro5_Text = "��ȣ�� �ùٸ��� ���� ���,";
        Agent_Speak(L_ISPNoAnwIntro5_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro6_Text = "���⸦ Ŭ���Ͽ� ��ȣ�� �����ϰ�";
        Agent_Speak(L_ISPNoAnwIntro6_Text);

        Agent_Play("RestPose");

        var L_ISPNoAnwIntro7_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_ISPNoAnwIntro7_Text);
}

function Agent_ISPNoAnwCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwWhatToDoNext1_Text = "�� ��ȭ ��ȣ�� �ùٸ��� Ȯ���� ��,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwWhatToDoNext2_Text = "�ٽ� ������ �غ� �Ǿ�����";
        Agent_Speak(L_ISPNoAnwWhatToDoNext2_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwWhatToDoNext3_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_ISPNoAnwWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwPhoneNumberIncorrect1_Text = "�� ��ȭ ��ȣ�� �ùٸ��� ���� ���,";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect1_Text);

        var L_ISPNoAnwPhoneNumberIncorrect2_Text = "�Է¶��� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwPhoneNumberIncorrect3_Text = "�Է¶��� Ŭ���ϸ� �����̴� ������(���� ����)�� ǥ�õ˴ϴ�.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect3_Text);

        var L_ISPNoAnwPhoneNumberIncorrect4_Text = "�Է��ϴ� ������ ��� ���� ������ �Էµ˴ϴ�.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect4_Text);

        var L_ISPNoAnwPhoneNumberIncorrect5_Text = "Ű������ ���� ȭ��ǥ Ű�� ������ ȭ��ǥ Ű�� ���� ���� ������ �̵��� �� �ֽ��ϴ�.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect5_Text);

        var L_ISPNoAnwPhoneNumberIncorrect6_Text = "<Delete> Ű�� ����Ͽ� ���� ���� ���� ���ڸ� ������ �� �ֽ��ϴ�.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect6_Text);

        var L_ISPNoAnwPhoneNumberIncorrect7_Text = "�齺���̽� Ű�� ������ ���� ���� ���� ���ڰ� �����˴ϴ�.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect7_Text);
}

function Agent_ISPNoAnwCommand_HowToMoveOn() 
{
        var L_ISPNoAnwHowToMoveOn1_Text = "��� �����Ϸ��� �ٽ� ������ �����ϰų� ���ͳ� ���� ������ �����ؾ� �մϴ�.";
        Agent_Speak(L_ISPNoAnwHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwHowToMoveOn2_Text = " [�ٽ� �ɱ�]�� Ŭ���Ͽ� �ٽ� �����Ͻʽÿ�.";
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

        var L_ISPNoAnwHowToMoveOn3_Text = "���ͳ� ���񽺸� �������� �ʰ� ��� �����Ϸ��� [�ǳʶٱ�]�� Ŭ���Ͻʽÿ�.";
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

        var L_ISPPhBsyAddCommands1_Text = "���� �۾��� ���� ����(&N)";
        var L_ISPPhBsyAddCommands2_Text = "��ȭ ��ȣ�� �ùٸ��� ���� ��쿡 ���� ����(&P)";
        var L_ISPPhBsyAddCommands3_Text = "�� ȭ�鿡 ���� ����(&T)";

        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoNext", L_ISPPhBsyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect", L_ISPPhBsyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_AboutThisScreen", L_ISPPhBsyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPPhBsyIntro() {

}

function Agent_ISPPhBsyCommand_AboutThisScreen() 
{
        var L_ISPPhBsyIntro1_Text = "������ ���� �����ڸ� ���� ���ͳ� ���񽺿� �������� ���߽��ϴ�.";
        Agent_Speak(L_ISPPhBsyIntro1_Text);

        var L_ISPPhBsyIntro2_Text ="���ͳ� ���� �����ڿ� ����� ������ �ְų� ��ȭ ���� �� �ֽ��ϴ�.";
        Agent_Speak(L_ISPPhBsyIntro2_Text);

        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyIntro3_Text = "��ȣ�� �´��� Ȯ���Ͻʽÿ�.";
        Agent_Speak(L_ISPPhBsyIntro3_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro4_Text = "��ȣ�� �ùٸ��� ��� ��ٸ� ��, ";
        Agent_Speak(L_ISPPhBsyIntro4_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPPhBsyIntro5_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͽ� �ٽ� ��ȭ�� �ɾ� ���ʽÿ�.";
        Agent_Speak(L_ISPPhBsyIntro5_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro6_Text = "��ȣ�� �ùٸ��� ���� ���, ";
        Agent_Speak(L_ISPPhBsyIntro6_Text);

        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyIntro7_Text = "���⸦ Ŭ���Ͽ� ��ȭ ��ȣ�ο��� �ٸ� ��ȣ�� �����Ͻʽÿ�.";
        Agent_Speak(L_ISPPhBsyIntro7_Text);

        Agent_Play("RestPose");

        var L_ISPPhBsyIntro8_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_ISPPhBsyIntro8_Text);
}

function Agent_ISPPhBsyCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyWhatToDoNext1_Text = "��ȭ ��ȣ�� Ȯ���Ͽ� ��ȣ�� �°ų� ";
        Agent_Speak(L_ISPPhBsyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");    
    
        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyWhatToDoNext2_Text = "�ٸ� ��ȣ�� ��ȭ �ɱ⸦ ������ ��쿡�� ";
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

        var L_ISPPhBsyWhatToDoNext4_Text = "[�ٽ� �ɱ�]�� Ŭ���Ͽ� �ٽ� �����մϴ�.";
        Agent_Speak(L_ISPPhBsyWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_ISPPhBsyPhoneNumberIncorrect1_Text = "�� ��ȭ ��ȣ�� �ùٸ��� ���� ���, ";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

    var L_ISPPhBsyPhoneNumberIncorrect2_Text = "�� ���� ���߸� Ŭ���Ͽ� ��ȭ ��ȣ�ο��� �ٸ� ��ȣ�� �����Ͻʽÿ�.";
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

    var L_ISPPhBsyPhoneNumberIncorrect3_Text = "�ٽ� ������ �غ� �Ǹ� [�ٽ� �ɱ�]�� Ŭ���Ͻʽÿ�.";
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

    var L_FinishAddCommands1_Text = "�� ȭ�鿡 ���� ����(&T)";  
    var L_FinishAddCommands2_Text = "���� ȭ�鿡�� ����ϴ� ����� ���� ����(&O)";    
    var L_FinishAddCommands3_Text = "����ũ�鿡�� Windows ��ǰ ������ �������� ��� �ؾ� �մϱ�(&D)?";    
    var L_FinishAddCommands4_Text = "��� ���ͳݿ� �׼����� �� �ֽ��ϱ�(&A)?";    
    var L_FinishAddCommands5_Text = "���� �۾��� ���� ����(&W)";

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
    var L_FinishAboutThisStep1_Text = "������ �Ϸ��߽��ϴ�.";
    Agent_Speak(L_FinishAboutThisStep1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishAboutThisStep2_Text = "Windows�� ����Ϸ��� [��ħ]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_FinishAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_FinishAboutThisStep3_Text = "Windows XP�� ���� �� ����� ���� ������ [����] �޴��� �ִ� [���� �� ����]�� Ŭ���� ���� �˻� ���ڿ� \"�ѷ�����\"�� �Է��Ͻʽÿ�.";
    Agent_Speak(L_FinishAboutThisStep3_Text);
}

function Agent_FinishHowToRegister() 
{
    var L_FinishHowToRegister1_Text = "�� �ܰ迡�� ����� ������ ��쿡�� [����] �޴����� [����]�� Ŭ���ϰ� regwiz /r�� �Է��Ͽ� ������ Windows�� ����� �� �ֽ��ϴ�.";
    Agent_Speak(L_FinishHowToRegister1_Text);
        
    var L_FinishHowToRegister2_Text = "���� ����� ��ﳪ�� �ʴ� ���, [����] �޴��� [���� �� ����]�� Ŭ���Ͽ� ������ ���ų� ��Ÿ ������ �����Ͻʽÿ�.";
    Agent_Speak(L_FinishHowToRegister2_Text);
}

function Agent_FinishHowToActivate() 
{
    var L_FinishHowToActivate1_Text = "�� �ܰ迡�� ��ǰ ������ ������ ��쿡�� ��ĥ �������� Windows ���� ȭ�鿡 �̸� �˸� �޽����� ǥ�õ˴ϴ�.";
    Agent_Speak(L_FinishHowToActivate1_Text);
        
    var L_FinishHowToActivate2_Text = "������ ��ǰ ���� �Ⱓ�� ������ ���� ��ǰ ������ �޾ƾ� Windows�� ��� ����� �� �ֽ��ϴ�.";
    Agent_Speak(L_FinishHowToActivate2_Text);

    var L_FinishHowToActivate3_Text = "�˸��� ǥ�õǱ� ���� [��ǰ ���� ������]�� �����Ϸ��� [����] �޴����� [Windows ��ǰ ����]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_FinishHowToActivate3_Text);

    var L_FinishHowToActivate4_Text = "���� ����� ��ﳪ�� �ʴ� ���, [����] �޴��� [���� �� ����]�� Ŭ���Ͽ� ������ ���ų� ��Ÿ ������ �����Ͻʽÿ�.";
    Agent_Speak(L_FinishHowToActivate4_Text);
}

function Agent_FinishHowToAccessInternet() 
{
    var L_FinishHowToAccessInternet1_Text = "�̹� �� ��ǻ�Ϳ� ���ͳ� �׼����� �����Ǿ� ������ Windows ���� ȭ���� [����] �޴����� [���ͳ�]�� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_FinishHowToAccessInternet1_Text);
        
    var L_FinishHowToAccessInternet2_Text = "��ǻ�Ͱ� ���ͳݿ� �׼����ϵ��� �����Ǿ� ���� ������ ���ͳ� ���� �����簡 ����˴ϴ�.";
    Agent_Speak(L_FinishHowToAccessInternet2_Text);

    var L_FinishHowToAccessInternet3_Text = "�� �����縦 �ܰ躰�� �����ϸ� ���ͳݿ� ������ �� �ֽ��ϴ�.";
    Agent_Speak(L_FinishHowToAccessInternet3_Text);
}

function Agent_FinishWhatToDoNext() 
{
    var L_FinishWhatToDoNext1_Text = "Microsoft Windows XP ��ġ�� �Ϸ��߽��ϴ�!";
    Agent_Speak(L_FinishWhatToDoNext1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishWhatToDoNext2_Text = "[��ħ] ���߸� Ŭ���Ͻʽÿ�.";
    Agent_Speak(L_FinishWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_FinishWhatToDoNext3_Text = "Windows XP�� ���� �� ����� ���� ������ [����] �޴��� �ִ� [���� �� ����]�� Ŭ���� ���� �˻� ���ڿ� \"�ѷ�����\"�� �Է��Ͻʽÿ�.";
    Agent_Speak(L_FinishWhatToDoNext3_Text);

    var L_FinishWhatToDoNext4_Text = "���� Windows XP�� ����Ͻø� �˴ϴ�!";
    Agent_Speak(L_FinishWhatToDoNext4_Text);
}






function Agent_MouseTutAddCommands() {

        var L_MouseTutMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_MouseTutMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_MouseTutMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        
        
        

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

        var L_MouseTutIntroTellMeWhatToDoNext1_Text = "�����Ϸ��� [�ڽ���]�� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_MouseTutIntroTellMeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutTellMeAboutThisScreen() 
{
        var L_MouseTutTellMeAboutThisScreen1_Text = "�� ȭ���� �ڽ����� ù ȭ������, ���콺�� ������ �����մϴ�.";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen1_Text);

        var L_MouseTutTellMeAboutThisScreen2_Text = "�� �ڽ����� ���� ���콺�� ����� �����ϰų�, ";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen2_Text);

        var L_MouseTutTellMeAboutThisScreen3_Text = "�̹� ���콺�� ��뿡 �ͼ��� ���, �� �ڽ����� �ǳʶ� ���� �ֽ��ϴ�.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen1_Text = "�����Ϸ��� [�ڽ���]�� Ŭ���Ͻʽÿ�.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text = "�ڽ����� �ǳʶٷ��� [����]�� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_MouseTutAAddCommands() {

        var L_MouseTutAMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_MouseTutAMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_MouseTutAMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeWhatToDoNext", L_MouseTutAMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeAboutThisScreen", L_MouseTutAMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeHowToMoveToNextScreen", L_MouseTutAMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutATellMeWhatToDoNext() 
{
        var L_MouseTutAWhatToDoNext1_Text = "���콺�� �������� ȭ���� �����͸� �̵��� ���ʽÿ�.";
        Agent_Speak(L_MouseTutAWhatToDoNext1_Text);

        var L_MouseTutAWhatToDoNext2_Text = "���콺�� ��� ������ ����ؾ� �մϴ�.";
        Agent_Speak(L_MouseTutAWhatToDoNext2_Text);
}

function Agent_OnMouseTutATellMeAboutThisScreen() 
{

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutATellMeAboutThisScreen1_Text = "���⿡���� ���콺�� ����Ͽ� ȭ���� �����͸� �����̴� ����� �����մϴ�.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutATellMeAboutThisScreen2_Text = "���콺�� ���� �������� ������ ���ʽÿ�.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen2_Text);

        var L_MouseTutATellMeAboutThisScreen3_Text = "���� ������ ���ʽÿ�.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen3_Text);
}

function Agent_OnMouseTutATellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutBAddCommands() {

        var L_MouseTutBMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_MouseTutBMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_MouseTutBMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeWhatToDoNext", L_MouseTutBMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeAboutThisScreen", L_MouseTutBMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeHowToMoveToNextScreen", L_MouseTutBMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutBTellMeWhatToDoNext() 
{
        var L_MouseTutBWhatToDoNext1_Text = "���콺�� ��� �ٸ� ������ �ű� ��,";
        Agent_Speak(L_MouseTutBWhatToDoNext1_Text);

        var L_MouseTutBWhatToDoNext2_Text = "���콺�� ���� ���� ������ ���ʽÿ�.";
        Agent_Speak(L_MouseTutBWhatToDoNext2_Text);
}

function Agent_OnMouseTutBTellMeAboutThisScreen() 
{
        var L_MouseTutBTellMeAboutThisScreen1_Text = "�� ȭ�鿡���� ���콺�� ������ �� �ִ� ������ ������ ���, ���콺�� �����ϴ� ����� �����մϴ�.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen1_Text);

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutBTellMeAboutThisScreen2_Text = "���콺�� �� ������ �� �ִ� ������ ����� ������ �ű�ʽÿ�.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen2_Text);

        Agent_Play("RestPose");

        var L_MouseTutBTellMeAboutThisScreen3_Text = "���콺�� ���� ���� ���ϴ� ������ ���콺 �����͸� �̵��Ͻʽÿ�.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen3_Text);

        var L_MouseTutBTellMeAboutThisScreen4_Text = "���콺�� ��� ������ ������ ������ �����Ͱ� �̵��մϴ�.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutBTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutCAddCommands() {

        var L_MouseTutCMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_MouseTutCMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_MouseTutCMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeWhatToDoNext", L_MouseTutCMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeAboutThisScreen", L_MouseTutCMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeHowToMoveToNextScreen", L_MouseTutCMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_MouseTutCIntro() {
        
}

function Agent_OnMouseTutCTellMeWhatToDoNext() 
{
        var L_MouseTutCWhatToDoNext1_Text = "���콺�� ������ �����Ͱ� �׷��� ���� ���� ������ �� ���ʽÿ�.";
        Agent_Speak(L_MouseTutCWhatToDoNext1_Text);
}

function Agent_OnMouseTutCTellMeAboutThisScreen() 
{
        var L_MouseTutCTellMeAboutThisScreen1_Text = "�� ȭ�鿡���� ���콺�� �����͸� �����̴� ������ �� �� �ֽ��ϴ�.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutCTellMeAboutThisScreen2_Text = "���콺�� ����Ͽ� �׷��� ���� ���� �����͸� �̵��� ���ʽÿ�.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutCTellMeAboutThisScreen3_Text = "�����͸� ���� ���� ������ ������ ����� �ٲ�ϴ�.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen3_Text);

        var L_MouseTutCTellMeAboutThisScreen4_Text = "�����͸� �̹��� ������ �̵��ϸ�, ���߰� ������ ������� �ٽ� ���ƿɴϴ�.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutCTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutDAddCommands() {

        var L_MouseTutDMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_MouseTutDMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_MouseTutDMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeWhatToDoNext", L_MouseTutDMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeAboutThisScreen", L_MouseTutDMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeHowToMoveToNextScreen", L_MouseTutDMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutDTellMeWhatToDoNext() 
{
        var L_MouseTutDWhatToDoNext1_Text = "���콺 ���� ���߸� Ŭ���Ͽ� ���ʽÿ�.";
        Agent_Speak(L_MouseTutDWhatToDoNext1_Text);
}

function Agent_OnMouseTutDTellMeAboutThisScreen() 
{
        var L_MouseTutDTellMeAboutThisScreen1_Text = "���⿡���� ���콺 Ŭ���ϱ⸦ ������ �� �ֽ��ϴ�.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen1_Text);

        var elem = g.document.all("image");

        Agent_MoveToElement(elem, "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen2_Text = "ȭ�鿡�� �� �׸��� �����Ϸ��� ���콺�� ����Ͽ� �����͸� �ش� �׸� ���� �̵��� ��,";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen2_Text);

        Agent_GestureAtElement(g.document.all("image"), "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen3_Text = "ȭ�鿡 ǥ�õ� �Ͱ� ���� ���콺�� ���߸� �����ٰ� �����ϴ�.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutDTellMeAboutThisScreen4_Text = "�̰��� Ŭ���̶� �մϴ�.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutDTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutEAddCommands() {

        var L_MouseTutEMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_MouseTutEMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_MouseTutEMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeWhatToDoNext", L_MouseTutEMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeAboutThisScreen", L_MouseTutEMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeHowToMoveToNextScreen", L_MouseTutEMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutETellMeWhatToDoNext() 
{
        var L_MouseTutEWhatToDoNext1_Text = "�� ȭ���� �׷��� ���߸� ���콺�� ���� ���߷� Ŭ���Ͽ� ���ʽÿ�.";
        Agent_Speak(L_MouseTutEWhatToDoNext1_Text);
}

function Agent_OnMouseTutETellMeAboutThisScreen() 
{
        var L_MouseTutETellMeAboutThisScreen1_Text = "�� ȭ�鿡���� ���콺�� ����Ͽ� ������ ������ �� �� �ֽ��ϴ�.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutETellMeAboutThisScreen2_Text = "���콺�� ����Ͽ� �����͸� �� �׷��� ���� ���� �̵��� ��,";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutETellMeAboutThisScreen3_Text = "���콺�� ���� ���߸� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen3_Text);

        var L_MouseTutETellMeAboutThisScreen4_Text = "�ٸ� �׷��� ���ߵ� Ŭ���Ͽ� ���ʽÿ�.";
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

        var L_MouseTutFMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_MouseTutFMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_MouseTutFMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

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
        var L_MouseTutFTellMeAboutThisScreen1_Text = "�� �ϼ̽��ϴ�.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen1_Text);

        var L_MouseTutFTellMeAboutThisScreen2_Text = "���ݱ��� ���콺�� ����Ű�� Ŭ���ϴ� ����� ������ϴ�.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen2_Text);

        var L_MouseTutFTellMeAboutThisScreen3_Text = "���ݱ��� ������ ������ Windows �Ǵ� �� ������ ��� ����ϴ� ������ �����մϴ�.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen3_Text);

        var L_MouseTutFTellMeAboutThisScreen4_Text = "��� �����Ϸ��� [����]�� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutFTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutGAddCommands() {

        var L_MouseTutGMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_MouseTutGMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_MouseTutGMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeWhatToDoNext", L_MouseTutGMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeAboutThisScreen", L_MouseTutGMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeHowToMoveToNextScreen", L_MouseTutGMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutGPreDisplayMenu() {

        if (g.btnNext.disabled) {

                var L_MouseTutGMenuCommand4_Text = "[����] ���߸� ����� �� ���� ������ ���� ����(&W)";

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
        var L_MouseTutGWhyNextNotAvailable1_Text = "���ø� �������� �ʾұ� ������ [����] ���߸� ����� �� �����ϴ�.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable1_Text);

		Agent_GestureAtElement(g.document.all("selCity"),"LeftCenter");

        var L_MouseTutGWhyNextNotAvailable2_Text = "���� ���� �� �ϳ��� �����ؾ߸�";
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

        var L_MouseTutGWhyNextNotAvailable3_Text = "[����] ���߸� Ŭ���Ͽ� ����� �� �ֽ��ϴ�.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeWhatToDoNext() {
		
		if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "RightCenter");

        var L_MouseTutGWhatToDoNext1_Text = "��/�Ʒ��� ȭ��ǥ�� Ŭ���Ͽ� ���� ����� ��ũ���� �� �ֽ��ϴ�.";
        Agent_Speak(L_MouseTutGWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

		if (g.document.dir == "rtl")
			Agent_Play("RestPose");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGWhatToDoNext2_Text = "���� �̸��� Ŭ���Ͽ� ���ø� �����Ͻʽÿ�.";
        Agent_Speak(L_MouseTutGWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutGWhatToDoNext3_Text = "��Ͽ� �ִ� �ٸ� ���õ� ������ ���ʽÿ�.";
        Agent_Speak(L_MouseTutGWhatToDoNext3_Text);

        Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
}

function Agent_OnMouseTutGTellMeAboutThisScreen() {
        var L_MouseTutGTellMeAboutThisScreen1_Text = "�� ȭ�鿡���� ��Ͽ��� �׸��� �����ϱ� ���� ���콺 ���߸� Ŭ���ϴ� ������ �� �� �ֽ��ϴ�.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGTellMeAboutThisScreen2_Text = "��Ͽ��� ���ø� Ŭ���ϸ� ";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");
		
        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("imgTable"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("imgTable"), "RightCenter");

        var L_MouseTutGTellMeAboutThisScreen3_Text = "�ش� ���ð� ȭ�鿡 ǥ�õ˴ϴ�.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeHowToMoveToNextScreen() {

        if (g.btnNext.disabled) {

                Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

                var L_MouseTutGHowToMoveToNextScreen1_Text = "���⿡�� ���ø� �ϳ� �����Ͻʽÿ�.";
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

                var L_MouseTutGHowToMoveToNextScreen2_Text = "�۾��� ��ģ ��, [����]�� Ŭ���Ͻʽÿ�.";
                Agent_Speak(L_MouseTutGHowToMoveToNextScreen2_Text);
    
                Agent_Play("RestPose");
        }

        else
                MouseTut_HowToMoveToNextScreen();

}




function Agent_MouseTutHAddCommands() {

        var L_MouseTutHMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_MouseTutHMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_MouseTutHMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeWhatToDoNext", L_MouseTutHMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeAboutThisScreen", L_MouseTutHMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeHowToMoveToNextScreen", L_MouseTutHMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutHTellMeWhatToDoNext() {

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHWhatToDoNext1_Text = "���ϴ� �׸� ���� ���� Ŭ���Ͽ� �ɼ��� �����Ͻʽÿ�.";
        Agent_Speak(L_MouseTutHWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutHWhatToDoNext2_Text = "�� �ɼ��� �׸� ǥ�� ����� �ٲߴϴ�.";
        Agent_Speak(L_MouseTutHWhatToDoNext2_Text);

        var L_MouseTutHWhatToDoNext3_Text = "�ٸ� �ɼǵ� Ŭ���Ͽ� ���ʽÿ�.";
        Agent_Speak(L_MouseTutHWhatToDoNext3_Text);
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeAboutThisScreen() {
        var L_MouseTutHTellMeAboutThisScreen1_Text = "�� ȭ�鿡���� �ϳ��� �ɼǸ��� �����ϴ� ����� ������ �� �ֽ��ϴ�.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHTellMeAboutThisScreen2_Text = "���⿡�� ���� Ŭ���ϸ�";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("cityImg"), "LeftCenter");
        else
			Agent_GestureAtElement(g.document.all("cityImg"), "RightCenter");

        var L_MouseTutHTellMeAboutThisScreen3_Text = "�ش� �ɼǿ� ���� ���� ����� ����˴ϴ�.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutIAddCommands() {

        var L_MouseTutIMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_MouseTutIMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_MouseTutIMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeWhatToDoNext", L_MouseTutIMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeAboutThisScreen", L_MouseTutIMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeHowToMoveToNextScreen", L_MouseTutIMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutITellMeWhatToDoNext() {

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutIWhatToDoNext1_Text = "�ϳ� �̻��� �ɼ��� Ŭ���ϰ� ������ ��� ���ϴ��� Ȯ���� ���ʽÿ�.";
        Agent_Speak(L_MouseTutIWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutIWhatToDoNext2_Text = "������ �ɼ��� ����Ϸ��� �ش� �ɼ��� �ٽ� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_MouseTutIWhatToDoNext2_Text);

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeAboutThisScreen() {
        var L_MouseTutITellMeAboutThisScreen1_Text = "������ �� �ִ� �ɼ� ������ ������ ���� �ɼ��� ���ÿ� ������ ���� �ֽ��ϴ�.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen1_Text);

        var L_MouseTutITellMeAboutThisScreen2_Text = "�� ȭ�鿡���� ������ �ٸ� ���÷��� ��Ÿ���� ������ �� �ֽ��ϴ�.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen2_Text);

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutITellMeAboutThisScreen3_Text = "�ɼ� ���� �ִ� Ȯ�ζ��� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutJAddCommands() {

        var L_MouseTutJMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_MouseTutJMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_MouseTutJMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

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

        var L_MouseTutJWhatToDoNext1_Text = "�Է¶��� Ŭ���� ��,";
        Agent_Speak(L_MouseTutJWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutJWhatToDoNext2_Text = "�������� ǥ���� �ؽ�Ʈ�� �Է��Ͻʽÿ�.";
        Agent_Speak(L_MouseTutJWhatToDoNext2_Text);
}

function Agent_OnMouseTutJTellMeAboutThisScreen() {
        var L_MouseTutJTellMeAboutThisScreen1_Text = "������ ������ ����ڰ� ���ϴ� ��� ������ �� �ֽ��ϴ�.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen1_Text);

        var L_MouseTutJTellMeAboutThisScreen2_Text = "�� ȭ�鿡���� ������ ������ �Է��� �� �ֽ��ϴ�.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen2_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(g.document.all("caption"), "Left");
		else
			Agent_GestureAtElement(g.document.all("CaptionLabel"), "Left");

        var L_MouseTutJTellMeAboutThisScreen3_Text = "�Է¶��� Ŭ���ϰ� ������ �Է��Ͻʽÿ�.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutJTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutKAddCommands() {

        var L_MouseTutKMenuCommand1_Text = "���� �۾��� ���� ����(&N)";
        var L_MouseTutKMenuCommand2_Text = "�� ȭ�鿡 ���� ����(&S)";
        var L_MouseTutKMenuCommand3_Text = "���� ȭ������ �̵��ϴ� ����� ���� ����(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeWhatToDoNext", L_MouseTutKMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeAboutThisScreen", L_MouseTutKMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeHowToMoveToNextScreen", L_MouseTutKMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutKTellMeWhatToDoNext() {
        var L_MouseTutKWhatToDoNext1_Text = "�����մϴ�. ���콺 �ڽ����� ���ƽ��ϴ�.";
        Agent_Speak(L_MouseTutKWhatToDoNext1_Text);

        var L_MouseTutKWhatToDoNext2_Text = "[����] ���߸� Ŭ���Ͽ� ���� ȭ������ �̵��Ͻʽÿ�.";
        Agent_Speak(L_MouseTutKWhatToDoNext2_Text);
}

function Agent_OnMouseTutKTellMeAboutThisScreen() {
        var L_MouseTutKTellMeAboutThisScreen1_Text = "���콺�� ��� ������ ���� �ް� ���� �۾��� �Ϸ��߽��ϴ�.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen1_Text);
        
        var L_MouseTutKTellMeAboutThisScreen2_Text = "���콺 �ڽ����� ���ƽ��ϴ�.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen2_Text);

        var L_MouseTutKTellMeAboutThisScreen3_Text = "����, ũ�� ����, ���콺 ������ ���� ���� ���� �� �� �ڼ��� ���뿡 ���ؼ��� ������ �����Ͻʽÿ�.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutKTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function MouseTut_WhatToDoNext() 
{
        var L_MouseTutTellMeWhatToDoNext1_Text = "���� ȭ������ �̵��Ϸ��� [����]�� Ŭ���ϰ�,";
        Agent_Speak(L_MouseTutTellMeWhatToDoNext1_Text);

        var L_MouseTutTellMeWhatToDoNext2_Text = "�� �ڽ����� ������ �κ��� �ǳʶٷ��� [�ǳʶٱ�]�� Ŭ���Ͻʽÿ�.";
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

        var L_MouseTutTellMeHowToMoveToNextScreen1_Text = "���� ȭ������ �̵��Ϸ��� [����]�� Ŭ���ϰ�,";
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

        var L_MouseTutTellMeHowToMoveToNextScreen2_Text = "�� �ڽ����� �ǳʶٷ��� [�ǳʶٱ�]�� Ŭ���Ͻʽÿ�.";
        Agent_Speak(L_MouseTutTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_2nicsAddCommands() 
{
    var L_2nicsMenuCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    
    g_AgentCharacter.Commands.Add("Agent_On2nicsAboutThisStep", L_2nicsMenuCommand1_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_On2nicsAboutThisStep() 
{
    var L_2nicsAboutThisScreen1_Text = "���⿡���� ��ǻ�͸� ���ͳݿ� �����ϴ� ���� ���� ����� �����մϴ�.";
	Agent_Speak(L_2nicsAboutThisScreen1_Text);
	
    var L_2nicsAboutThisScreen2_Text = "Windows ��ġ �� ����� ���� ����� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_2nicsAboutThisScreen2_Text);
}



function Agent_UserNameAddCommands() 
{
    var L_UserNameCommand1_Text = "�� ȭ�鿡 ���� ����(&T)";
    var L_UserNameCommand2_Text = "�̸��� ǥ�õǴ� ���� ����Դϱ�(&E)?";
    var L_UserNameCommand3_Text = "���߿� �̸��� �����Ϸ��� ��� �մϱ�(&O)?";
    var L_UserNameCommand4_Text = "���� �۾��� ���� ����(&W)";
    
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
    var L_UserNameAboutThisStep1_Text = "���⿡���� Windows�� �α׿��� �� ����� �̸��� �����մϴ�.";
	Agent_Speak(L_UserNameAboutThisStep1_Text);
}

function Agent_OnUserNameWhereIsName() 
{
    var L_UserNameWhereIsName1_Text = "Windows�� �����ϸ� ��Ÿ���� ���� ȭ�鿡 ������� �̸��� ��Ÿ���ϴ�.";
	Agent_Speak(L_UserNameWhereIsName1_Text);
	
    var L_UserNameWhereIsName2_Text = "���� �α׿����� �� ���� �޴� �� ������ ��Ÿ���ϴ�.";
	Agent_Speak(L_UserNameWhereIsName2_Text);
	
    var L_UserNameWhereIsName3_Text = "�ٸ� ����ڰ� �� ��ǻ�Ϳ� �α׿��Ͽ� �� ���� ������ ���� ������� �̸��� �ش� ���� �̸��� ǥ�õ˴ϴ�.";
	Agent_Speak(L_UserNameWhereIsName3_Text);
	
    var L_UserNameWhereIsName4_Text = "���� ���, ���� �̸��� \"ȫ�浿�� ����\"�� ���� ǥ�õǹǷ� �� ������ ����ڸ� �ٸ� ����ڰ� �� �� �ֽ��ϴ�.";
	Agent_Speak(L_UserNameWhereIsName4_Text);
	
    var L_UserNameWhereIsName5_Text = "���� [����] �޴����� [������]�� Ŭ���ϰ� [����� ����]�� Ŭ���ϸ� ������� �̸��� ����� ��Ͽ� ��Ÿ���ϴ�.";
	Agent_Speak(L_UserNameWhereIsName5_Text);
}

function Agent_OnUserNameHowToChangeName() 
{
    var L_UserNameHowToChangeName1_Text = "Windows�� �α׿��� �� �̸��� �����Ϸ��� [����] �޴����� [������]�� Ŭ���Ͻʽÿ�.";
	Agent_Speak(L_UserNameHowToChangeName1_Text);
	
    var L_UserNameHowToChangeName2_Text = "[����� ����]�� Ŭ���Ͻʽÿ�.";
	Agent_Speak(L_UserNameHowToChangeName2_Text);
	
    var L_UserNameHowToChangeName3_Text = "�� ��ǻ���� �ٸ� ����� �̸��Ӹ� �ƴ϶� ����� �ڽ��� �̸��� ������ �� �ֽ��ϴ�.";
	Agent_Speak(L_UserNameHowToChangeName3_Text);
}

function Agent_OnUserNameWhatToDoNext() 
{
    var L_UserNameWhatToDoNext1_Text = "���ͳݿ� �ٽ� �����Ϸ��� [����]�� Ŭ���Ͻʽÿ�.";
	Agent_Speak(L_UserNameWhatToDoNext1_Text);
	
    var L_UserNameWhatToDoNext2_Text = "���ͳݿ� �������� �ʰ� ����Ϸ��� [�ǳʶٱ�]�� Ŭ���Ͻʽÿ�.";
	Agent_Speak(L_UserNameWhatToDoNext2_Text);
}
