



var L_PhoneNumberLegit_Text = "\\map=\"one \\pau=100\\ eight hundred R U le jit\"=\"1-800-R U LEGIT\"\\";


var g_strRegionSetting = "";
var g_strKeyboardSetting = "";
var g_strLangSetting = " ";



function Agent_AddCommonCommands() 
{
    g_AgentCharacter.Commands.RemoveAll();

    var L_AddCommonCommands1_Text = "�رղ˵�(&C)";

    g_AgentCharacter.Commands.Add("CloseMenu", L_AddCommonCommands1_Text);
        
    if (g_bAgentShowSpecialISPCommands) 
    {
        
		var L_AddCommonCommands2_Text = "�������й� Internet ע����Ϣ(&A)";
		var L_AddCommonCommands3_Text = "�������� Internet ע��(&R)";
		var L_AddCommonCommands4_Text = "���� Internet ע��(&S)";

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
        var L_AddAssistantanceCommand1_Text = "��Ӧ�ú�˭��ϵ�Ի�ø���İ���(&F)";       

        g_AgentCharacter.Commands.Add("Agent_OnCommand_AboutAssistance", L_AddAssistantanceCommand1_Text);
    }
}

function Agent_OnCommand_AboutAssistance() 
{

    Agent_StopAll();

    var L_AboutAssistance1_Text = "���绰 %s ��������������ϵ��";
    var re = /%s/i;
    var L_AboutAssistance2_Text = "�������ļ������������ϵ��";

    
    

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
            Agent_Speak(L_AboutAssistance2_Text);
    else
            Agent_Speak(L_AboutAssistance1_Text.replace(re, strPhoneNumber));

    Agent_Play("ReadReturn");
}

function Agent_AddWhatToDoNextCommand() 
{
    var L_AddWhatToDoNextCommand1_Text = "��һ���Ҹ���ʲô(&W)?";
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

        var L_WhatToDoNext1_Text = "Ҫ�������뵥������һ������ť��";
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

        var L_WhatToDoNext2_Text = "Ҫ���ص�ǰһ���裬�뵥������һ������ť��";
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

        var L_WhatToDoNext3_Text = "�������Ե�������������ť���������������衣";
        Agent_Speak(L_WhatToDoNext3_Text);
        
        Agent_Play("RestPose");
    }       
}

function Agent_DoSpecialISPCommand1() 
{
	
	
			
	Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
			
	var L_ISPSpecialTellMeAboutInternetSignup1_Text = "����ǰ���ڽ��� Internet ����ע�ᡣ";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup1_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup2_Text = "����������⣬�����һ� F1��";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup2_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup3_Text = "�ҽ��ڲ˵�����ʾ���������ѡ�����¿�ʼ��������һ���֡�";
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

    var L_EncourageNextButton1_Text = "��������һ������ť�� | ֻ�赥������һ������ť! | �뵥������һ������ť�� | ��������һ������ť������һ����";
    Agent_Speak(L_EncourageNextButton1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnF1() 
{
    var L_OnF1_Text = "����Ҫ������? | ��Ҫ�Ұ�æ��?";
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

    var L_PreWelcomeScript1_Text = "��ӭʹ�� Windows XP!";
    Agent_Speak(L_PreWelcomeScript1_Text);

    var L_PreWelcomeScript2_Text = "�ҿ��԰��������ü������";
    Agent_Speak(L_PreWelcomeScript2_Text);

    var L_PreWelcomeScript3_Text = "�ڴ˹����У��ҿ���Ϊ�����������⡣";
    Agent_Speak(L_PreWelcomeScript3_Text);
                
    Agent_MoveToElement(document.all("AssistImg"), "LeftCenter"); 
    
    

    var L_PreWelcomeScript4_Text = "�����Ҫ������ֻ��ʹ����굥���һ� F1 ����";
    Agent_Speak(L_PreWelcomeScript4_Text);
    
    Agent_Play("PointLeft");

    var L_PreWelcomeScript5_Text = "�ҽ���ʱΪ��Ч�͡�";
    Agent_Speak(L_PreWelcomeScript5_Text);
    
    Agent_Play("RestPose");

    g_AgentRequestHideImage = g_AgentCharacter.Hide();
}



function Agent_WelcomeAddCommands() 
{
    
    
    

    var L_WelcomeAddCommands1_Text = "�������йظù��̵����(&T)";
    var L_WelcomeAddCommands2_Text = "��һ���Ҹ���ʲô(&W)?";

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

    var L_WelcomeWhatToDoNext1_Text = "���һ�о������뵥������һ������ť��";
    Agent_Speak(L_WelcomeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnWelcomeCommand_AboutProcess() 
{
    Agent_StopAll();

    var L_AboutProcess1_Text = "�������һϵ����Ļ�еĵ�һ������Щ��Ļ���԰����������Լ��ļ������";
    Agent_Speak(L_AboutProcess1_Text);

    var L_AboutProcess2_Text = "ÿ����Ļ������ѡ���������Ϣ����������������һ�����衣";
    Agent_Speak(L_AboutProcess2_Text);

    var L_AboutProcess3_Text = "��������󼸷�����Ҫ���еĲ���ļ�Ԥ��:";
    Agent_Speak(L_AboutProcess3_Text);

    var L_AboutProcess4_Text = "��һ�����ǻ�ȷ�����ļ������Ӳ��(�������������̺�ʱ��)��ת������";
    Agent_Speak(L_AboutProcess4_Text);

    var L_AboutProcess5_Text = "���ǻ���ȷ�����ļ������ȷ��������(��������������Ļ�)��";
    Agent_Speak(L_AboutProcess5_Text);


    var L_AboutProcess6_Text = "�ڶ���������һ��ع�����       %1 ��ʹ�����������Э�顣";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess6_Text, g_ProductName));
    
    if (!window.external.get_RetailOOBE()) 
    {
    var L_AboutProcess7_Text = "�����ļ�����е��ƽ�������������ӣ�������ѡ���� Microsoft �� %1 ע�ᣬ�������ǿ��������ṩ������Ȥ�Ĳ�Ʒ���»��Żݡ�";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess7_Text, g_OEMNameStr));
    } 
    else 
    {    
    var L_AboutProcess7_Text = "�����ļ�����е��ƽ�������������ӣ�������ѡ���� Microsoft ע�ᣬ�������ǿ��������ṩ������Ȥ�Ĳ�Ʒ���»��Żݡ�";
    Agent_Speak(L_AboutProcess7_Text);
    }       

    var L_AboutProcess8_Text = "��������ѡ���Ƿ���֤ \\map=%1\\ ����α�����ȷ����ʹ�õ��ǺϷ��ĸ�����";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess8_Text, g_ProductName));

    var L_AboutProcess9_Text = "�����������Ը�⣬�ҿ��԰��������ӵ� Internet��";
    Agent_Speak(L_AboutProcess9_Text); 

    var L_AboutProcess10_Text = "��������������˲��裬�ڴ�֮�����Լ�����ʱ���ӡ�";
    Agent_Speak(L_AboutProcess10_Text);

    var L_AboutProcess11_Text = "���ģ��һ������ʹÿλʹ�ô˼�������˶������Զ������á�";
    Agent_Speak(L_AboutProcess11_Text);

    var L_AboutProcess12_Text = "����������Ҫ���еĲ��費�࣬�������ھͿ�ʼ!";
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

    var L_AboutProcess13_Text = "Ҫ��ʼ���뵥������һ������ť��";
    Agent_Speak(L_AboutProcess13_Text);
    
    Agent_Play("RestPose");
}


                                                       

function Agent_TimeZoneAddCommands() 
{
    var L_TimeZoneCommand1_Text = "��������һ����ô��(&T)";
    var L_TimeZoneCommand2_Text = "���ѡ��ʱ��(&O)?";

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
        var L_TimeZoneMenuCommand3_Text = "ʲô����ʱ��(&A)?";

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
    var L_ExplainTimeZoneStep1_Text = "����������Ҫʹ���ĸ�ʱ����      Windows ����Ӧ���������������ʱ�ӡ�";
    Agent_Speak(L_ExplainTimeZoneStep1_Text);

    var L_ExplainTimeZoneStep2_Text = "��Ҳ������ Windows �Զ�������ʱ��ʱ�䡣";
    Agent_Speak(L_ExplainTimeZoneStep2_Text);

    var L_ExplainTimeZoneStep3_Text = "�������һ���漰��Ӳ���Ĳ��衣";
    Agent_Speak(L_ExplainTimeZoneStep3_Text);

    var L_ExplainTimeZoneStep4_Text = "��һ�����������������Э�顣";
    Agent_Speak(L_ExplainTimeZoneStep4_Text);
    
}

function Agent_OnTimeZoneCommand_SelectZone() 
{
    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone1_Text = "���б��е�ʱ����ʾΪ��������ʱ�䣬�� GMT���Ӽ�����Сʱ��";
    Agent_Speak(L_TellUserHowToSelectTimeZone1_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone2_Text = "�����˴��򰴼����ϵ� Tab ��������ѡ�� ";
    Agent_Speak(L_TellUserHowToSelectTimeZone2_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Right");

    var L_TellUserHowToSelectTimeZone3_Text = "Ȼ�󵥻���ЩС��ͷ�İ�ť����ʹ�ü����ϵ����¼�ͷ������ʱ��ѡ�";
    Agent_Speak(L_TellUserHowToSelectTimeZone3_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone4_Text = "������Ҫ��ʱ�����뵥����ʱ���򰴼����ϵ� Enter ����";
    Agent_Speak(L_TellUserHowToSelectTimeZone4_Text);

    var L_TellUserHowToSelectTimeZone5_Text = "����ѡ���ʱ�����Ը�����ʾ��";
    Agent_Speak(L_TellUserHowToSelectTimeZone5_Text);

    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserHowToSelectTimeZone6_Text = "�������ס�ĵ���ʹ����ʱ�ƣ����ָ����ڴ˴�������һ����ѡ����ѡ�";
    Agent_Speak(L_TellUserHowToSelectTimeZone6_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone7_Text = "Windows ����һ�������Զ������������ʱ�ӡ�";
    Agent_Speak(L_TellUserHowToSelectTimeZone7_Text);
    
}

function Agent_OnTimeZoneCommand_DaylightSavings() 
{
    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserAboutDaylightOption1_Text = "��һ���ĳЩʱ���ڣ�ĳЩʱ����ʱ����ǰ����󲦶��Ե�������������ʱ��Ĳ��졣";
    Agent_Speak(L_TellUserAboutDaylightOption1_Text);
    
    Agent_Play("RestPose");

    var L_TellUserAboutDaylightOption2_Text = "�ڷ��������ʱ�����ϣ��       Windows �Զ������������ʱ�ӣ����ָ����ڴ˴���Ȼ�󵥻�һ����ѡ�и�ѡ�";
    Agent_Speak(L_TellUserAboutDaylightOption2_Text);

}



function Agent_OEMHWAddCommands() 
{
    var L_OEMHWMenuCommand1_Text = "����ҽ����������(&T)";
    var L_OEMHWMenuCommand2_Text = "����ô֪���ҵ�����ϵͳ�Ƿ�����(&O)?";
    var L_OEMHWMenuCommand3_Text = "����ҵ�����ϵͳ�����У���ô��(&A)?";
    var L_OEMHWMenuCommand4_Text = "��α�ʾ�ҵĴ�(&D)?";

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
    var L_OEMHWAboutThisScreen1_Text = "�����Ļ���԰�����ȷ�ϼ����������ϵͳ�Ƿ����С�";
	  Agent_Speak(L_OEMHWAboutThisScreen1_Text);

    var L_OEMHWAboutThisScreen2_Text = "����ϵͳ�Ĺ��ɲ���Ϊ: ������������������������������������ %1 �����";
	  Agent_Speak(ApiObj.formatMessage(L_OEMHWAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnOEMHWHowDoIKnow() 
{
    var L_OEMHWHowDoIKnow1_Text = "���������һ����������˵������ϵͳ����������";
	  Agent_Speak(L_OEMHWHowDoIKnow1_Text);

    var L_OEMHWHowDoIKnow2_Text = "����������������ȼ�����������������ǲ����������̫�͡�";
	  Agent_Speak(L_OEMHWHowDoIKnow2_Text);

    var L_OEMHWHowDoIKnow3_Text = "����⻹���ܾ������⣬���ǽ����Ա�Ŀ����ԡ�";
	  Agent_Speak(L_OEMHWHowDoIKnow3_Text);
}

function Agent_OnOEMHWIsNotWorking() 
{
    var L_OEMHWIsNotWorking1_Text = "��һ����ȷ���������ĵ�Դ�Ѿ���ͨ��";
	  Agent_Speak(L_OEMHWIsNotWorking1_Text);
	
    var L_OEMHWIsNotWorking2_Text = "��Щ��������һ��������ʾ��Դ�ѽ�ͨ��";
	  Agent_Speak(L_OEMHWIsNotWorking2_Text);

    var L_OEMHWIsNotWorking3_Text = "�ڶ�����ȷ����������������������ġ�";
	  Agent_Speak(L_OEMHWIsNotWorking3_Text);

    var L_OEMHWIsNotWorking4_Text = "�����������������...";
	  Agent_Speak(L_OEMHWIsNotWorking4_Text);

    var L_OEMHWIsNotWorking5_Text = "��������ȷ���������Ѿ������Դ��ڲ���ȷ�ز���������";
	  Agent_Speak(L_OEMHWIsNotWorking5_Text);
	
	  var L_OEMHWIsNotWorking6_Text = "�����װѼ��������˷��ڴ���Ϊ�������Ĳ�ڡ�";
	  Agent_Speak(L_OEMHWIsNotWorking6_Text);

    var L_OEMHWIsNotWorking7_Text = "���ģ��������һ����������������ȷ����������������һ��";
	  Agent_Speak(L_OEMHWIsNotWorking7_Text);

    var L_OEMHWIsNotWorking8_Text = "������������������������������һ̨������ϵ���������";
	  Agent_Speak(L_OEMHWIsNotWorking8_Text);

    var L_OEMHWIsNotWorking9_Text = "��������������������������Ĳ�������������Ҫ�滻��������Щ��������";
	  Agent_Speak(L_OEMHWIsNotWorking9_Text);
}

function Agent_OnOEMHWIndicateAnswer() 
{
	  Agent_GestureAtElement(g.document.all("Sound_Yes"), "Left");
    
    var L_OEMHWIndicateAnswer1_Text = "�����ָ��ָ�����ߵİ�ɫԲȦ��";
	  Agent_Speak(L_OEMHWIndicateAnswer1_Text);
    
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("radioNoSound"), "Left");

    var L_OEMHWIndicateAnswer2_Text = "����һ�Ρ�";
	  Agent_Speak(L_OEMHWIndicateAnswer2_Text);
    
    Agent_Play("RestPose");

    var L_OEMHWIndicateAnswer3_Text = "���Ҫʹ�ü�����ѡ�����Ĵ𰸣��밴 Tab ����ֱ��������Ҫ����İ�ɫԲȦ��Χ����һ��ģ���ľ��Σ�Ȼ���ٰ��ո����";
	  Agent_Speak(L_OEMHWIndicateAnswer3_Text);
}




function Agent_CompNameAddCommands() 
{
    var L_CompNameMenuCommand1_Text = "��������һ������ʲô(&T)";
    var L_CompNameMenuCommand2_Text = "�ڴ�֮����������������(&O)";

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
    var L_CompNameAboutThisScreen1_Text = "�ڴ���Ļ�����ļ����������֡�";
	  Agent_Speak(L_CompNameAboutThisScreen1_Text);

    var L_CompNameAboutThisScreen2_Text = "�����̨���������������������������ӣ���������������û���ʶ���ļ������";
	  Agent_Speak(L_CompNameAboutThisScreen2_Text);
}

function Agent_OnCompNameHowToRename() 
{
    var L_CompNameHowToRename1_Text = "��� Windows ��װ�󣬵�������ʼ���˵��ϵġ�������塱��";
	  Agent_Speak(L_CompNameHowToRename1_Text);

    var L_CompNameHowToRename2_Text = "���������ܺ�ά�����µġ�ϵͳ��ͼ�꣬Ȼ���ա����������ѡ��ϵ�˵�����в�����";
	  Agent_Speak(L_CompNameHowToRename2_Text);

    var L_CompNameHowToRename3_Text = "�����������Щ���裬�뵥������ʼ���˵��ϵġ�������֧�֡����Ա��������Ĵ𰸺��������м�ֵ����Ϣ��";
	  Agent_Speak(L_CompNameHowToRename3_Text);
}




function Agent_SECURITYPASSAddCommands() 
{
    var L_SECURITYPASSMenuCommand1_Text = "��������һ������ʲô(&H)";
    var L_SECURITYPASSMenuCommand2_Text = "ʲô�Ǵ����������÷���(&A)?";

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
    var L_SECURITYPASSAboutThisScreen1_Text = "���Ҫ�������������ֹδ��Ȩ���û����ʣ������ڴ���Ļ�ϴ������롣";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen1_Text);

    var L_SECURITYPASSAboutThisScreen2_Text = "Ҫע��һ������: �����̨������������ϵ���������������ӣ��� \"Administrator\" �û�������Ч�����¼���û����Է����������硣";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen2_Text);
    
    var L_SECURITYPASSAboutThisScreen3_Text = "��ˣ����Ǽ��������Ƽ�ʹ�� \\map=Administrator\\ �������������ļ�������������硣";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen3_Text);
}

function Agent_OnSECURITYPASSBestWay() 
{
    var L_SECURITYPASSBestWay1_Text = "Ҫ�������İ�ȫ�ԣ�����Ӧ�ú���������Щ�ɷֵ�����: ��Сд��ĸ�����֡�";
	  Agent_Speak(L_SECURITYPASSBestWay1_Text);

    var L_SECURITYPASSBestWay2_Text = "���У��ַ���˳��Խ���������Խ��ȫ��";
	  Agent_Speak(L_SECURITYPASSBestWay2_Text);

    var L_SECURITYPASSBestWay3_Text = "���������Ժ��� 127 �ַ���";
	  Agent_Speak(L_SECURITYPASSBestWay3_Text);
    
    var L_SECURITYPASSBestWay4_Text = "���ǣ������ʹ�� Windows ��������Ҳ�м����ʹ�� Windows 95 �� Windows 98 ���������ܹ�����Щ������ϵ�¼�����磬�뿼��ʹ�ò����� 14 ���ַ������롣";
	  Agent_Speak(L_SECURITYPASSBestWay4_Text);
}



function Agent_JOINDOMAINAddCommands() 
{
    var L_JOINDOMAINMenuCommand1_Text = "��������һ������ʲô(&T)";
    var L_JOINDOMAINMenuCommand2_Text = "ʲô����(&A)?";
    var L_JOINDOMAINMenuCommand3_Text = "����μ�����(&O)?"; 
    var L_JOINDOMAINMenuCommand4_Text = "��һ���Ҹ���ʲô(&W)?";


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
    var L_JOINDOMAINAboutThisScreen1_Text = "�����ڴ���Ļ�Ͼ����Ƿ��ô˼������Ϊ���Ա��";
    Agent_Speak(L_JOINDOMAINAboutThisScreen1_Text);

    var L_JOINDOMAINAboutThisScreen2_Text = "�����ѡ�����һ���������������̨�����Ҫ����������ơ�";
    Agent_Speak(L_JOINDOMAINAboutThisScreen2_Text);
}

function Agent_OnJOINDOMAINDifference() 
{
    var L_JOINDOMAINDifference1_Text = "������Ϊһ����Ԫ�������һ��������";
    Agent_Speak(L_JOINDOMAINDifference1_Text);
    
    var L_JOINDOMAINDifference2_Text = "���磬һ����˾���Խ�������ͼ�칫�������м������ӵ�һ������������Щ��������Թ���ͬ���ķ���Ȩ�����ӵ���ͬ�Ĵ�ӡ���ϡ�";
    Agent_Speak(L_JOINDOMAINDifference2_Text);

    var L_JOINDOMAINDifference3_Text = "�������ȷ��ѡ���ĸ�ѡ���ѡ�񡰷񡱣�Ȼ�󵥻�����һ������ť��";
    Agent_Speak(L_JOINDOMAINDifference3_Text);
}

function Agent_OnJOINDOMAINHowToName() 
{
 	  Agent_GestureAtElement(g.document.all("radioYesDomain"), "Left");
 
    var L_JOINDOMAINHowToName1_Text = "�������ѡ�˼������ѡ�";
    Agent_Speak(L_JOINDOMAINHowToName1_Text);
      
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("textboxDomain"), "Left");
  
    var L_JOINDOMAINHowToName2_Text = "���������Ǹ�ѡ������Ŀ��м���һ�����ơ�";
    Agent_Speak(L_JOINDOMAINHowToName2_Text);
      
    Agent_Play("RestPose");
  
    var L_JOINDOMAINHowToName3_Text = "���û��ѡ�������ѡ������޷��������ơ�";
    Agent_Speak(L_JOINDOMAINHowToName3_Text);
  
    var L_JOINDOMAINHowToName4_Text = "��ˣ�����ѡ��������ѡ��ǰ���˿�ᱣ�ֻ�ɫ����ʾ�޷����롣";
    Agent_Speak(L_JOINDOMAINHowToName4_Text);
  
    var L_JOINDOMAINHowToName5_Text = "���Ҫ����̨���������һ���������������Ա��ȡһ����Ч��������";
    Agent_Speak(L_JOINDOMAINHowToName5_Text);
  
    var L_JOINDOMAINHowToName6_Text = "�����������������ָ��һ�����ơ�";
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
    
    var L_JOINDOMAINWhatToDoNext1_Text = "����ѡ��һ��ѡ����뵥������һ������ť��";
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
    
    var L_JOINDOMAINWhatToDoNext2_Text = "�������Ե�������һ������ť��ѡ�񷵻ص�ǰһ����Ļ��";
    Agent_Speak(L_JOINDOMAINWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}




function Agent_JNDOM_AAddCommands() 
{
    var L_JNDOMAMenuCommand1_Text = "��������һ����ô��(&T)";
    var L_JNDOMAMenuCommand2_Text = "�����������û����ƺ�����(&S)?";
    var L_JNDOMAMenuCommand3_Text = "ʲô����(&A)?";
    var L_JNDOMAMenuCommand4_Text = "��һ���Ҹ���ʲô(&W)?";
    
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
    var L_JNDOM_A_AboutThisStep1_Text = "�ڴ���Ļ��������ʶ����Ȩ���˼�������������ˡ�";
  	Agent_Speak(L_JNDOM_A_AboutThisStep1_Text);
}

function Agent_OnJNDOM_AHowToEnter() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_HowToEnter1_Text = "���ڴ˴���������Ʋ���������е��κ��û���һ������������Ψһ�ġ�";
    Agent_Speak(L_JNDOM_A_HowToEnter1_Text);
      
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_HowToEnter2_Text = "���ڴ˴�����������������û��ʻ�������ƥ�䡣";
    Agent_Speak(L_JNDOM_A_HowToEnter2_Text);
      
    Agent_Play("RestPose");
    
    var L_JNDOM_A_HowToEnter3_Text = "�����֪��Ӧ��ʹ���ĸ��û��������룬���������������Ա��ϵ��";
    Agent_Speak(L_JNDOM_A_HowToEnter3_Text);
}

function Agent_OnJNDOM_AWhatIsDomain() 
{
    var L_JNDOM_A_WhatIsDomain1_Text = "������Ϊһ����Ԫ�������һ��������";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain1_Text);
  	
    var L_JNDOM_A_WhatIsDomain2_Text = "���磬һ����˾���Խ�������ͼ�칫�������м������ӵ�һ������������Щ��������Թ���ͬ���ķ���Ȩ�����ӵ���ͬ�Ĵ�ӡ���ϡ�";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain2_Text);
      
    Agent_Play("RestPose");		
}

function Agent_OnJNDOM_AWhatToDoNext() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_WhatToDoNext1_Text = "���ڴ˴������û���";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext1_Text);
      
    Agent_Play("RestPose");		
  	
    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_WhatToDoNext2_Text = "���Ǹ��û��������";
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
    
    var L_JNDOM_A_WhatToDoNext3_Text = "�뵥������һ������ť��";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext3_Text);
      
    Agent_Play("RestPose");		
}



function Agent_ActivationAddCommands() 
{
    var L_ActivationMenuCommand1_Text = "��������һ����ʲô(&T)";
    var L_ActivationMenuCommand2_Text = "�������йظü������Ϣ(&M)";
    var L_ActivationMenuCommand3_Text = "�������������(&O)?";
    var L_ActivationMenuCommand4_Text = "���û������������������(&D)?";
    var L_ActivationMenuCommand5_Text = "������������ô��(&A)?";
    var L_ActivationMenuCommand6_Text = "��һ���Ҹ���ʲô(&W)?";

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
    
    var L_ActivationAboutThisScreen1_Text = "�ڴ���Ļ�����������Ƿ����ڻ����Ժ󼤻� %1��";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutThisScreen1_Text, g_ProductName));
    
    var L_ActivationAboutThisScreen2_Text = "�������ȵ��Ժ�ż������Դӡ���ʼ���˵����С���Ʒ�����򵼡���";
    Agent_Speak(L_ActivationAboutThisScreen2_Text);
    
    var L_ActivationAboutThisScreen3_Text = "���ǻ�ÿ���������������� \\map=Windows\\ ���������Ϳ��Լ���ʹ������";
    Agent_Speak(L_ActivationAboutThisScreen3_Text);
}

function Agent_OnActivationAboutActivation() 
{
    var L_ActivationAboutActivation1_Text = "�������������뵽�µĽ�ǿ������ÿ�ʱ������ͨ����Ҫ��������˿������ʹ������";
    Agent_Speak(L_ActivationAboutActivation1_Text);
    
    var L_ActivationAboutActivation2_Text = "����ᱣ���������������Է�ֹ����δ����Ȩʹ�����Ŀ���";
    Agent_Speak(L_ActivationAboutActivation2_Text);
    
    var L_ActivationAboutActivation3_Text = "%1 ������ͬ���ĵ�����ͬ���ǣ�����Ҫ����ǰ����������ָ���ļ���������ʹ�� \\map=%2\\ ��";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationHowToActivateLater() 
{
    var L_ActivationHowToActivateLater1_Text = "��������������ÿ�����죬�� %1 ��������һ��СС�����ѡ�";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationHowToActivateLater1_Text, g_ProductName));
    
    var L_ActivationHowToActivateLater2_Text = "�ӡ���ʼ���˵��������Ե��������� Windows�������С���Ʒ�����򵼡���";
    Agent_Speak(L_ActivationHowToActivateLater2_Text);
    
    var L_ActivationHowToActivateLater3_Text = "�����������Щ���裬�����ڡ���ʼ���˵�������������֧�֡���������������Ĵ𰸺�����������Ϣ��";
    Agent_Speak(L_ActivationHowToActivateLater3_Text);
}

function Agent_OnActivationHowToActivateUnconnected() 
{
    Agent_GestureAtElement(g.rb_act_2, "Left");
    	
    var L_ActivationHowToActivateUnconnected1_Text = "��������ѡ�� \"��\" ��";
    Agent_Speak(L_ActivationHowToActivateUnconnected1_Text);
    
    Agent_Play("RestPose");
    
    var L_ActivationHowToActivateUnconnected2_Text = "��װ Windows ���������ڡ���ʼ���˵����������� Windows�������С���Ʒ�����򵼡���";
    Agent_Speak(L_ActivationHowToActivateUnconnected2_Text);
    
    var L_ActivationHowToActivateUnconnected3_Text = "�򵼻�������ʾһ���绰���룬������ʹ�ô˺��룬ͨ���绰������ \\map=Windows\\ ��";
    Agent_Speak(L_ActivationHowToActivateUnconnected3_Text);
}

function Agent_OnActivationWhatHappensNoActivate() 
{
    var L_ActivationWhatHappensNoActivate1_Text = "�ڼ������޽���ǰ�����ɼ���ʹ�� %1��";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate1_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate2_Text = "���ڴ����޽���֮ǰ�������뼤�� %1 ���ܼ���ʹ������";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate2_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate3_Text = "��������ڶ�����������޷���ʹ�� %1��";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate3_Text, g_ProductName));
}

function Agent_OnActivationWhatToDoNext() 
{
    Agent_GestureAtElement(g.act_spn1, "Left");
    
    var L_ActivationWhatToDoNext1_Text = "ѡ�����������Ĵ𰸺�";
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
            
    var L_ActivationWhatToDoNext2_Text = "�뵥������һ������ť��";
    Agent_Speak(L_ActivationWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");	
}



function Agent_ActivationErrorAddCommands() 
{
    var L_ActivationErrorMenuCommand1_Text = "��������һ����ô��(&T)";
    var L_ActivationErrorMenuCommand2_Text = "�������йظü������Ϣ(&M)";
    var L_ActivationErrorMenuCommand3_Text = "�ڴ�֮������������(&O)?";
    var L_ActivationErrorMenuCommand4_Text = "���û������������������(&D)?";
    var L_ActivationErrorMenuCommand5_Text = "������������ô��(&A)?";


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
    var L_ActivationErrorAboutThisScreen1_Text = "���ִ���Ļ��ԭ�������޷��������ǵļ������ġ�";
	Agent_Speak(L_ActivationErrorAboutThisScreen1_Text);
	
    var L_ActivationErrorAboutThisScreen2_Text = "��ɰ�װ %1 ��������ڡ���ʼ���˵����������� \\map=Windows\\ �������С���Ʒ�����򵼡���";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnActivationErrorAboutActivation() 
{
    var L_ActivationErrorAboutActivation1_Text = "�������������뵽�µĽ�ǿ������ÿ�ʱ������ͨ����Ҫ��������˿������ʹ������";
	Agent_Speak(L_ActivationErrorAboutActivation1_Text);
	
    var L_ActivationErrorAboutActivation2_Text = "����ᱣ���������������Է�ֹ����δ����Ȩʹ�����Ŀ���";
	Agent_Speak(L_ActivationErrorAboutActivation2_Text);
	
    var L_ActivationErrorAboutActivation3_Text = "%1 ������ͬ���ĵ�����ͬ���ǣ�������Ҫ����ǰ����������ָ����������ʹ�� \\map= %2\\ ��";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationErrorHowToActivateLater() 
{
    var L_ActivationErrorHowToActivateLater1_Text = "��������������ÿ�����죬�� %1 ��������һ��СС�����ѡ�";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationErrorHowToActivateLater2_Text = "�ӡ���ʼ���˵��������Ե��������� Windows�������С���Ʒ�����򵼡���";
	Agent_Speak(L_ActivationErrorHowToActivateLater2_Text);
	
    var L_ActivationErrorHowToActivateLater3_Text = "�����������Щ���裬�����ڡ���ʼ���˵�������������֧�֡���������������Ĵ𰸺������������Ϣ��";
	Agent_Speak(L_ActivationErrorHowToActivateLater3_Text);
}

function Agent_OnActivationErrorHowToActivateUnconnected() 
{
    var L_ActivationErrorHowToActivateUnconnected1_Text = "��װ Windows ���������ڡ���ʼ���˵����������� Windows�������С���Ʒ�����򵼡���";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected1_Text);
	
    var L_ActivationErrorHowToActivateUnconnected2_Text = "�򵼻�������ʾһ���绰���룬������ʹ�ô˺��룬ͨ���绰������ \\map=Windows\\ ��";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected2_Text);
}

function Agent_OnActivationErrorWhatHappensNoActivate() 
{
    var L_ActivationErrorWhatHappensNoActivate1_Text = "�ڼ������޽���ǰ�����ɼ���ʹ�� %1��";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate2_Text = "���ڴ����޽���֮ǰ�������뼤�� %1 ���ܼ���ʹ������";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate3_Text = "��������ڶ�����������޷���ʹ�� %1��";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_ActivationPrivacyPolicyAddCommands() 
{
    var L_ActivationPrivacyPolicyMenuCommand1_Text = "��������һ����ô��(&T)";
    var L_ActivationPrivacyPolicyMenuCommand2_Text = "�������йظü������Ϣ(&M)";
    var L_ActivationPrivacyPolicyMenuCommand3_Text = "�������������(&O)?";
    var L_ActivationPrivacyPolicyMenuCommand4_Text = "���û������������������(&D)?";
    var L_ActivationPrivacyPolicyMenuCommand5_Text = "������������ô��(&A)?";


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
    var L_ActivationPrivacyPolicyAboutThisScreen1_Text = "����Ļ���͵������� %1 ʱ��������������������˽��";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutThisScreen1_Text, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyAboutActivation() 
{
    var L_ActivationPrivacyPolicyAboutActivation1_Text = "�������������뵽�µĽ�ǿ������ÿ�ʱ������ͨ����Ҫ��������˿������ʹ������";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation1_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation2_Text = "����ᱣ���������������Է�ֹ����δ����Ȩʹ�����Ŀ���";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation2_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation3_Text = "%1 ������ͬ���ĵ�����ͬ���ǣ�������Ҫ����ǰ����������ָ���ļ���������ʹ�� \\map=%2\\ ��";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyHowToActivateLater() 
{
    var L_ActivationPrivacyPolicyHowToActivateLater1_Text = "��������������ÿ�����죬�� %1 ��������һ��СС�����ѡ�";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyHowToActivateLater2_Text = "�ӡ���ʼ���˵��������Ե��������� Windows�������С���Ʒ�����򵼡���";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater2_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateLater3_Text = "�����������Щ���裬�����ڡ���ʼ���˵�������������֧�֡���������������Ĵ𰸺������������Ϣ��";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater3_Text);
}

function Agent_OnActivationPrivacyPolicyHowToActivateUnconnected() 
{
    var L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text = "��װ Windows ���������ڡ���ʼ���˵����������� Windows�������С���Ʒ�����򵼡���";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text = "�򵼻�������ʾһ���绰���룬������ʹ�ô˺��룬ͨ���绰������ \\map=Windows\\ ��";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text);
}

function Agent_OnActivationPrivacyPolicyWhatHappensNoActivate() 
{
    var L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text = "�ڼ�����˽�������޽���ǰ�����ɼ���ʹ�� %1��";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text = "���ڴ����޽���֮ǰ�������뼤�� %1 ���ܼ���ʹ������";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text = "��������������˽�������޶�����������޷���ʹ�� \\map=%1\\ ��";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_DSLMAINAddCommands() 
{
    var L_DSLMAINMenuCommand1_Text = "��������һ����ô��(&T)";
    var L_DSLMAINMenuCommand2_Text = "��Ҫ�û����������һЩԭ��(&S)";
    var L_DSLMAINMenuCommand3_Text = "��������һ����ʲô(&W)?";
    
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
    var L_DSLMAINAboutThisScreen1_Text = "�ڴ���Ļ�����������Ƿ�Ҫ���û�����������ܴӴ˼�������� \\map=Internet\\ ��";
	Agent_Speak(L_DSLMAINAboutThisScreen1_Text);
}

function Agent_OnDSLMAINSomeReasons() 
{
    var L_DSLMAINHowToMoveOn1_Text = "�������Ψһʹ�ô˼�������ˣ���ôΪ�˷������������ \\map=%1\\ �Զ����������û��������롣";
	Agent_Speak(ApiObj.FormatMessage(L_DSLMAINHowToMoveOn1_Text, g_ProductName));
	
    var L_DSLMAINHowToMoveOn2_Text = "������ÿ���������ӵ� Internet ʱ�����Ͳ����������Ϣ��";
	Agent_Speak(L_DSLMAINHowToMoveOn2_Text);
	
    var L_DSLMAINHowToMoveOn3_Text = "���ǣ�������������˹���˼���������������������ʹ��ͬ���� Internet �ʻ�����ô���Ϳ���ʹ���û��������������������ʻ���";
	Agent_Speak(L_DSLMAINHowToMoveOn3_Text);
	
    var L_DSLMAINHowToMoveOn4_Text = "���磬������������ĺ����ǹ���˼�������������ǿ�������������Ϸ��";
	Agent_Speak(L_DSLMAINHowToMoveOn4_Text);
	
    var L_DSLMAINHowToMoveOn5_Text = "��������������������δ������ͬ�������¾���� Internet��";
	Agent_Speak(L_DSLMAINHowToMoveOn5_Text);		
}

function Agent_OnDSLMAINWhatToDoNext()
{	
	Agent_GestureAtElement(g.dslmain_TitleText, "Left");
	
    var L_DSLMAINWhatToDoNext1_Text = "ѡ�����������Ĵ𰸺�";
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
	
	var L_DSLMAINWhatToDoNext2_Text = "�뵥������һ������ť��";
	Agent_Speak(L_DSLMAINWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");
}



function Agent_DSL_AAddCommands() 
{
    var L_DSLAMenuCommand1_Text = "��������һ����ô��(&T)";
    var L_DSLAMenuCommand2_Text = "Internet ������ʲô(&A)?";
    var L_DSLAMenuCommand3_Text = "���ӵ� Internet ��Ҫʲô(&D)?";
    var L_DSLAMenuCommand4_Text = "�������й� Internet ע����Ϣ(&E)";

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
    var L_DSL_A_AboutThisStep1_Text = "�ڴ���Ļ������������ Internet �����ṩ��(���Ϊ ISP)�ṩ���ʻ����������Ϳ��Դ���̨��������ӵ� Internet��";
	Agent_Speak(L_DSL_A_AboutThisStep1_Text);
}

function Agent_DSL_AWhatIsInternet() 
{
    var L_DSL_A_WhatIsInternet1_Text = "Internet  ��ȫ����ļ�������硣";
	Agent_Speak(L_DSL_A_WhatIsInternet1_Text);
	
    var L_DSL_A_WhatIsInternet2_Text = "������ܷ��� Internet�������Դӳ�ǧ�������Դ�м������ڿ��ŵ���Ϣ����Щ��Դ����ѧУ����������ҵ�͸��ˡ�";
	Agent_Speak(L_DSL_A_WhatIsInternet2_Text);
	
    var L_DSL_A_WhatIsInternet3_Text = "World Wide Web, ��� Web����ʹ�ó�����̽�� Internet ��ϵͳ��";
	Agent_Speak(L_DSL_A_WhatIsInternet3_Text);
	
    var L_DSL_A_WhatIsInternet4_Text = "�����������ֻ�ͼƬ��������������ʱ�����ǻ��������������ҳ��ͬһҳ������ⲿ�֣����߿���ִ��һ��������������һ��Ӧ�ó���";
	Agent_Speak(L_DSL_A_WhatIsInternet4_Text);
	
    var L_DSL_A_WhatIsInternet5_Text = "��ʹ�� Web �������� Web�����������֡�ͼƬ�����������ֵ�Ӱ����ʽ���� Internet ����ʾ��Ϣ��Ӧ�ó���";
	Agent_Speak(L_DSL_A_WhatIsInternet5_Text);
	
    var L_DSL_A_WhatIsInternet6_Text = "Microsoft �ṩ���� Web �����:";
	Agent_Speak(L_DSL_A_WhatIsInternet6_Text);
	
    var L_DSL_A_WhatIsInternet7_Text = "MSN Explorer (�ʺ����ֺ��ڼ���ʹ�ü��������) �� Internet \\map=Explorer\\ ��";
	Agent_Speak(L_DSL_A_WhatIsInternet7_Text);
}

function Agent_DSL_ANeedToConnect() 
{	
    var L_DSL_A_NeedToConnect1_Text = "���ӵ� Internet����ֻ�������� ����";
	Agent_Speak(L_DSL_A_NeedToConnect1_Text);	
	
    var L_DSL_A_NeedToConnect2_Text = "���ȣ�����Ҫһ��������������Ѿ����ˡ�";
	Agent_Speak(L_DSL_A_NeedToConnect2_Text);
	
    var L_DSL_A_NeedToConnect3_Text = "�ڶ�������Ҫһ�� Internet �����ṩ�̣�����Ϊ ISP��";
	Agent_Speak(L_DSL_A_NeedToConnect3_Text);
	
    var L_DSL_A_NeedToConnect4_Text = "ISP �ṩ Internet �������ʣ�������绰��˾�����ṩ�绰����һ����";
	Agent_Speak(L_DSL_A_NeedToConnect4_Text);
	
    var L_DSL_A_NeedToConnect5_Text = "����Ҫ�������ļ��������       Internet ����ʱ�������û�� \\map=ISP\\ ���һ������һ����";
	Agent_Speak(L_DSL_A_NeedToConnect5_Text);
	
    var L_DSL_A_NeedToConnect6_Text = "������ ����Ҫһ�������ļ���������� ISP ������һ����豸��";
	Agent_Speak(L_DSL_A_NeedToConnect6_Text);
	
    var L_DSL_A_NeedToConnect7_Text = "����Ǵ���Ļ��Ŀ�ġ�";
	Agent_Speak(L_DSL_A_NeedToConnect7_Text);
}

function Agent_DSL_AInternetSignup() 
{
    var L_DSL_A_AboutThisScreen1_Text = "������Ѿ����� Internet �ʻ�����ô��� Internet �����ṩ���Ѿ������ṩ����һ��Ϣ��";
	Agent_Speak(L_DSL_A_AboutThisScreen1_Text);
	
    var L_DSL_A_AboutThisScreen2_Text = "����һ���¼����������ζ�������������µ� Internet �ʻ���";
	Agent_Speak(L_DSL_A_AboutThisScreen2_Text);
	
    var L_DSL_A_AboutThisScreen3_Text = "������ʹ�����ɼ������ʹ�õ�ͬ�����ʻ���Ϣ��";
	Agent_Speak(L_DSL_A_AboutThisScreen3_Text);
	
    var L_DSL_A_AboutThisScreen4_Text = "���������û�д����ļ�������ӵ� Internet����������˼������ʱ���������Ѿ��յ��� \\map=Internet\\ �ʻ�����Ϣ��";
	Agent_Speak(L_DSL_A_AboutThisScreen4_Text);
	
    var L_DSL_A_AboutThisScreen5_Text = "������������̸�����һ��ֽ�����û���������� ISP ���ƣ���ô�ڴ���Ļ���������Ϣ��";
	Agent_Speak(L_DSL_A_AboutThisScreen5_Text);
}



function Agent_DSL_BAddCommands() 
{

    var L_DSL_B_MenuCommand1_Text = "��������һ����ô��(&T)";
    var L_DSL_B_MenuCommand2_Text = "IP ��ʲô(&A)?";
    var L_DSL_B_MenuCommand3_Text = "DNS ��ʲô(&D)?";
    var L_DSL_B_MenuCommand4_Text = "��һ���Ҹ���ʲô(&W)?";

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
    var L_DSL_B_AboutThisScreen1_Text = "����һ����Ļ�������������������ṩ���� Internet �ʻ���Ϣ�����ӵ� Internet��";
	Agent_Speak(L_DSL_B_AboutThisScreen1_Text);

    var L_DSL_B_AboutThisScreen2_Text = "�ڴ���Ļ�ϣ�����Ҫ���������ⲿ������������ӵ� Internet��";
	Agent_Speak(L_DSL_B_AboutThisScreen2_Text);
}

function Agent_OnDSL_BWhatIsIP() 
{
    var L_DSL_B_WhatIsIP1_Text = "���ӵ� Internet ��ÿ̨���������һ�� Internet Э��� \"IP\" ��ַ�������� Internet ��ʶ��������Ψһ�ĺ��롣";
	Agent_Speak(L_DSL_B_WhatIsIP1_Text);

    var L_DSL_B_WhatIsIP2_Text = "��������ʱ������ ISP ͨ�����Զ������ļ����һ�� IP ��ַ��";
	Agent_Speak(L_DSL_B_WhatIsIP2_Text);

    var L_DSL_B_WhatIsIP3_Text = "����������£�����Ȼ��Ҫ�ֶ�����һ�� IP ��ַ��";
	Agent_Speak(L_DSL_B_WhatIsIP3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_staticip, "Left");
	
	var L_DSL_B_WhatIsIP4_Text = "���� ISP Ӧ�������ṩһ�� IP ��ַ�ڴ����롣";
	Agent_Speak(L_DSL_B_WhatIsIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnDSL_BWhatIsDNS() 
{
    var L_DSL_B_WhatIsDNS1_Text = "Ҫ�� Internet ��Ѱ�ҵ�ַ�����ļ������Ҫ��һ������������     (DNS) ���ӣ����� Internet �ϵļ����ָ�� IP ��ַ��";
	Agent_Speak(L_DSL_B_WhatIsDNS1_Text);

    var L_DSL_B_WhatIsDNS2_Text = "�ڴ��������£����� ISP ���Զ������ļ����ָ��һ�� DNS ��ַ��";
	Agent_Speak(L_DSL_B_WhatIsDNS2_Text);

    var L_DSL_B_WhatIsDNS3_Text = "���� ISP Ҫ���������ļ���������ô� DNS ��ַ��";
	Agent_Speak(L_DSL_B_WhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_prefdns, "Left");

    var L_DSL_B_WhatIsDNS4_Text = "���� ISP Ӧ�������ṩһ������Ҫ�� DNS �ڴ�����";
	Agent_Speak(L_DSL_B_WhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.dsl_lbl_altdns, "Left");

    var L_DSL_B_WhatIsDNS5_Text = "�������Ҫ�� DNS û�У��������ṩ����һ�� DNS��";
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
	
    var L_DSL_B_WhatToDoNext1_Text = "�뵥������һ������ť������";
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

    var L_DSL_B_WhatToDoNext2_Text = "�������Ե�������һ������ť���ص�ǰһ���衣";
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

    var L_DSL_B_WhatToDoNext3_Text = "���ߣ�������ı������⣬�뵥�����������Լ����������ô˼�������� Internet��";
	Agent_Speak(L_DSL_B_WhatToDoNext3_Text);
    
    Agent_Play("RestPose");	
}



function Agent_ICONNECTAddCommands() 
{

    var L_ICONNECTMenuCommand1_Text = "��������һ����ô��(&T)";
    var L_ICONNECTMenuCommand2_Text = "ʲô�Ǿ�̬ IP ��ַ(&A)?";
    var L_ICONNECTMenuCommand3_Text = "DNS ��ʲô(&D)?";
    var L_ICONNECTMenuCommand4_Text = "��һ���Ҹ���ʲô(&W)?";

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
    var L_ICONNECTAboutThisScreen1_Text = "����һ����Ļ�������������������ṩ���� Internet �ʻ���Ϣ�����ӵ� Internet��";
	Agent_Speak(L_ICONNECTAboutThisScreen1_Text);

    var L_ICONNECTAboutThisScreen2_Text = "�ڴ���Ļ�ϣ�����Ҫ���������ⲿ������������ӵ� Internet��";
	Agent_Speak(L_ICONNECTAboutThisScreen2_Text);
}

function Agent_OnICONNECTWhatIsStaticIP() 
{
    var L_ICONNECTWhatIsStaticIP1_Text = "���ӵ� Internet ��ÿ̨���������һ�� Internet Э��� \"IP\" ��ַ�������� Internet ��ʶ��������Ψһ�ĺ��롣";
	Agent_Speak(L_ICONNECTWhatIsStaticIP1_Text);

    var L_ICONNECTWhatIsStaticIP2_Text = "��������ʱ������ ISP ͨ�����Զ������ļ����һ�� IP ��ַ��";
	Agent_Speak(L_ICONNECTWhatIsStaticIP2_Text);

    var L_ICONNECTWhatIsStaticIP3_Text = "����������£�����Ȼ��Ҫ�ֶ�����һ�� IP ��ַ��";
	Agent_Speak(L_ICONNECTWhatIsStaticIP3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_staticIP, "Left");
	
	var L_ICONNECTWhatIsStaticIP4_Text = "���� ISP Ӧ�������ṩһ�� IP ��ַ�ڴ����롣";
	Agent_Speak(L_ICONNECTWhatIsStaticIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnICONNECTWhatIsDNS() 
{
    var L_ICONNECTWhatIsDNS1_Text = "Ҫ�� Internet ��Ѱ�ҵ�ַ�����ļ������Ҫ��һ������������     (DNS)���ӣ����� Internet �ϵļ����ָ�� IP ��ַ��";
	Agent_Speak(L_ICONNECTWhatIsDNS1_Text);

    var L_ICONNECTWhatIsDNS2_Text = "�ڴ��������£����� ISP ���Զ������ļ����ָ��һ�� DNS ��ַ��";
	Agent_Speak(L_ICONNECTWhatIsDNS2_Text);

    var L_ICONNECTWhatIsDNS3_Text = "���� ISP Ҫ���������ļ���������ô� DNS ��ַ��";
	Agent_Speak(L_ICONNECTWhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_prefrDNS, "Left");

    var L_ICONNECTWhatIsDNS4_Text = "���� ISP Ӧ�������ṩһ������Ҫ�� DNS �ڴ����룬";
	Agent_Speak(L_ICONNECTWhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.iconnect_spn_alterDNS, "Left");

    var L_ICONNECTWhatIsDNS5_Text = "�������Ҫ�� DNS û�У��������ṩ����һ�� DNS��";
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
	
    var L_ICONNECTWhatToDoNext1_Text = "�뵥������һ������ť������";
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

    var L_ICONNECTWhatToDoNext2_Text = "���ߣ�������ı������⣬�뵥�����������Լ����������ô˼�������� Internet��";
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

    var L_ICONNECTWhatToDoNext3_Text = "����������ͨ����������һ������ť������ǰ��Ļ��";
	Agent_Speak(L_ICONNECTWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}





function Agent_ICNTLASTAddCommands() {

        var L_ICNTLASTMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_ICNTLASTMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_ICNTLASTMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

        
        
        

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

        var L_SCONNECTMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_SCONNECTMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_SCONNECTMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

        
        
        

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
        var L_SCONNECTAboutThisScreen_Text = "Some temporary string here ...";
	Agent_Speak(L_SCONNECTAboutThisScreen_Text);
}

function Agent_OnSCONNECTHowToMoveOn() 
{
        var L_SCONNECTHowToMoveOn_Text = "Some more temporary string here ...";
	Agent_Speak(L_SCONNECTHowToMoveOn_Text);	
}



function Agent_SCNTLASTAddCommands() {

        var L_SCNTLASTMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_SCNTLASTMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_SCNTLASTMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnSCNTLASTWhatToDoNext", L_SCNTLASTMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCNTLASTAboutThisScreen", L_SCNTLASTMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCNTLASTHowToMoveOn", L_SCNTLASTMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnSCNTLASTWhatToDoNext() 
{
	Agent_GestureAtElement(g.btnNext, "TopCenterWidth");

        var L_SCNTLASTWhatToDoNext1_Text = "Some temporary string here ...";
	Agent_Speak(L_SCNTLASTWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnSCNTLASTAboutThisScreen() 
{
     var L_SCNTLASTAboutThisScreen_Text = "Some temporary string here ...";
	Agent_Speak(L_SCNTLASTAboutThisScreen_Text);
}

function Agent_OnSCNTLASTHowToMoveOn() 
{
        var L_SCNTLASTHowToMoveOn_Text = "Some more temporary string here ...";
	Agent_Speak(L_SCNTLASTHowToMoveOn_Text);		
}






function Agent_BadPIDAddCommands() 
{
    var L_BadPIDMenuCommand1_Text = "��������һ����ô��(&T)";
    var L_BadPIDMenuCommand2_Text = "��������ҵĲ�Ʒ��Կ(&O)?";
    var L_BadPIDMenuCommand3_Text = "�����֪���ҵĲ�Ʒ��Կ���Ҹ���ô��(&A)?";
    var L_BadPIDMenuCommand4_Text = "�����Ʒ��Կ�������ã��Ҹ���ô��(&I)?";
    var L_BadPIDMenuCommand5_Text = "��˭��绰��ȡ����İ���(&R)?";
    var L_BadPIDMenuCommand6_Text = "��һ���Ҹ���ʲô(&W)?";
        
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
    var L_BadPIDAboutThisStep1_Text = "������һ����Ļ������Ĳ�Ʒ��Կ��Ч��";
    Agent_Speak(L_BadPIDAboutThisStep1_Text);
    
    var L_BadPIDAboutThisStep2_Text = "����ζ����û����һ���汾�� \\map=Windows XP\\ �Ĳ�Ʒ��Կƥ�䡣";
    Agent_Speak(L_BadPIDAboutThisStep2_Text);

    var L_BadPIDAboutThisStep3_Text = "û��һ����Ч�Ĳ�Ʒ��Կ�� \\map=Windows\\ �޷�������";
    Agent_Speak(L_BadPIDAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDAboutThisStep4_Text = "�������Ϊ��������ˣ��뵥������һ������ť��������ȷ����Կ��";
    Agent_Speak(L_BadPIDAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep5_Text = "���ǣ������ȷ�����������Կ����ȷ�ģ����������뼸�ζ�û�гɹ�����ô���� Windows �����ǵ���ġ�";
    Agent_Speak(L_BadPIDAboutThisStep5_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDAboutThisStep6_Text = "���������������뵥�����رա���ť���ر����ļ������";
    Agent_Speak(L_BadPIDAboutThisStep6_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep7_Text = "����������ô��벦��绰 1-800-RU-LEGIT��";
    Agent_Speak(L_BadPIDAboutThisStep7_Text);

    var L_BadPIDAboutThisStep8_Text = "�������������һ���������뵱�ص� Microsoft �ֹ�˾��ϵ��";
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
	
    var L_BadPIDHowToEnter1_Text = "��������һ����������һ����Ļ��";
    Agent_Speak(L_BadPIDHowToEnter1_Text);
    
    Agent_Play("RestPose");
    
    var L_BadPIDHowToEnter2_Text = "ָ��(����ȥ��һ����˸�Ĵ�ֱ��)����ͣ����Ҫ����ĵ�һ�����";
    Agent_Speak(L_BadPIDHowToEnter2_Text);

    var L_BadPIDHowToEnter3_Text = "���������һ�� 5 ���ַ���ָ����Զ��Ƶ���һ�����������Ϳ������������ 5 ���ַ���";
    Agent_Speak(L_BadPIDHowToEnter3_Text);

    var L_BadPIDHowToEnter4_Text = "��Ҫ�������ַ����Ĵ�Сд��";
    Agent_Speak(L_BadPIDHowToEnter4_Text);

    var L_BadPIDHowToEnter5_Text = "Ȼ�󵥻�����һ������ť������";
    Agent_Speak(L_BadPIDHowToEnter5_Text);
}

function Agent_OnBadPIDWhatIfNotKnown() 
{
    var L_BadPIDWhatIfNotKnown1_Text = "��� CD ����û�в�Ʒ��Կ���������� PC �����š���ı������Ʒ֤���ǩ�ϲ��ҡ�";
    Agent_Speak(L_BadPIDWhatIfNotKnown1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
    
    var L_BadPIDWhatIfNotKnown2_Text = "�����ҵ���Ʒ��Կ���뵥������һ������ť������һ����Ļ�Ŀ��������Ʒ��Կ��";
    Agent_Speak(L_BadPIDWhatIfNotKnown2_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotKnown3_Text = "������Ҳ�����Ʒ��Կ���벦�� %s �����ļ������������ϵ��";
    var re = /%s/i;
    var L_BadPIDWhatIfNotKnown4_Text = "������Ҳ�����Ʒ��Կ���������ļ������������ϵ��";

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
        Agent_Speak(L_BadPIDWhatIfNotKnown4_Text);
    else
        Agent_Speak(L_BadPIDWhatIfNotKnown3_Text.replace(re, strPhoneNumber));
}

function Agent_OnBadPIDWhatIfNotWorking() 
{
    var L_BadPIDWhatIfNotWorking1_Text = "������û����ȷ���롣";
    Agent_Speak(L_BadPIDWhatIfNotWorking1_Text);
    
    var L_BadPIDWhatIfNotWorking2_Text = "����Ҫ�����Ʒ��Կ������ 25 ���ַ���";
    Agent_Speak(L_BadPIDWhatIfNotWorking2_Text);

    var L_BadPIDWhatIfNotWorking3_Text = "ÿ������Ӧ���� 5 ����ĸ�����֡�";
    Agent_Speak(L_BadPIDWhatIfNotWorking3_Text);

    var L_BadPIDWhatIfNotWorking4_Text = "�ڿ�ʼʹ�� Windows ֮ǰ������������Ϸ��Ĳ�Ʒ��Կ��";
    Agent_Speak(L_BadPIDWhatIfNotWorking4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDWhatIfNotWorking5_Text = "�������Ϊ��������ˣ��뵥������һ������ť��������ȷ����Կ��";
    Agent_Speak(L_BadPIDWhatIfNotWorking5_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking6_Text = "���ǣ������ȷ�����������Կ����ȷ�ģ����������뼸�ζ�û�гɹ�����ô���� Windows �����ǵ���ġ�";
    Agent_Speak(L_BadPIDWhatIfNotWorking6_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatIfNotWorking7_Text = "���������������뵥�����رա���ť���ر����ļ������";
    Agent_Speak(L_BadPIDWhatIfNotWorking7_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking8_Text = "����������ô��벦��绰 1-800-RU-LEGIT��";
    Agent_Speak(L_BadPIDWhatIfNotWorking8_Text);

    var L_BadPIDWhatIfNotWorking9_Text = "�������������һ���������뵱�ص� Microsoft �ֹ�˾��ϵ��";
    Agent_Speak(L_BadPIDWhatIfNotWorking9_Text);
}

function Agent_OnBadPIDWhoCanICall() 
{
    var L_BadPIDWhoCanICall1_Text = "������Ĳ�Ʒ��Կû�б����ܣ�����������ô��벦�� \\map=1-800-RU-LEGIT\\ ��";
    Agent_Speak(L_BadPIDWhoCanICall1_Text);
    
    var L_BadPIDWhoCanICall2_Text = "�������������һ���������뱾�ص� Microsoft �ֹ�˾��ϵ��";
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
	
    var L_BadPIDWhatToDoNext1_Text = "��������һ������ť��������ȷ����Կ��";
    Agent_Speak(L_BadPIDWhatToDoNext1_Text);
    
    var L_BadPIDWhatToDoNext2_Text = "������Ĳ�Ʒ��Կû�б����ܣ����� Windows �����ǵ���ġ�";
    Agent_Speak(L_BadPIDWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatToDoNext3_Text = "���������������뵥�����رա���ť���ر����ļ������";
    Agent_Speak(L_BadPIDWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatToDoNext4_Text = "����������ô��벦��绰 1-800-RU-LEGIT��";
    Agent_Speak(L_BadPIDWhatToDoNext4_Text);

    var L_BadPIDWhatToDoNext5_Text = "�������������һ���������뵱�ص� Microsoft �ֹ�˾��ϵ��";
    Agent_Speak(L_BadPIDWhatToDoNext5_Text);
}



function Agent_IconnAddCommands() 
{
    var L_IconnMenuCommand1_Text = "��������һ����ô��(&T)";
    var L_IconnMenuCommand2_Text = "��Ӧ��ѡ���ĸ�ѡ��(&P)?";
    var L_IconnMenuCommand3_Text = "��һ���Ҹ���ʲô(&W)?";

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
    var L_IconnAboutThisStep1_Text = "���Ѿ��ɹ��������ļ�����ϰ�װ�� Microsoft Windows XP!";
    Agent_Speak(L_IconnAboutThisStep1_Text); 
      
    var L_IconnAboutThisStep2_Text = "�����ҿ��԰������������ļ�����Ա���� Internet��";
    Agent_Speak(L_IconnAboutThisStep2_Text);
       
    var L_IconnAboutThisStep3_Text = "��������ڻ�������������ɰ�װ Windows �������Դӡ���ʼ���˵����� Internet �����򵼡�";
    Agent_Speak(L_IconnAboutThisStep3_Text);
}

function Agent_IconnWhichOption() 
{    
    var L_IconnWhichOption1_Text = "������ƻ�ʹ�� Internet �����ṩ��(��� ISP)����ѡ�񡰷񡱡���������Ҫ��װ���ǵ������";
    Agent_Speak(L_IconnWhichOption1_Text); 
      
    var L_IconnWhichOption2_Text = "������Ѿ������Ǽ� ISP �� CD������֪��������ô����";
    Agent_Speak(L_IconnWhichOption2_Text);
       
    var L_IconnWhichOption3_Text = "Ȼ������ɰ�װ Windows ���������ļ�������� Internet��";
    Agent_Speak(L_IconnWhichOption3_Text);
}

function Agent_OnIconnWhatToDoNext() 
{      
    Agent_GestureAtElement(g.radioYesIconn, "Left");  
    
    var L_IconnWhatToDoNext1_Text = "�������Ҫ�������� Internet ���ӣ��뵥�����ǡ�ѡ�";
    Agent_Speak(L_IconnWhatToDoNext1_Text);
    
    Agent_Play("RestPose"); 
        
    Agent_GestureAtElement(g.radioNoIconn, "Left");  
    
    var L_IconnWhatToDoNext2_Text = "���ߣ���������ڲ������� \\map=Internet\\ ���ӣ���ѡ�� \"��\"";
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

    var L_IconnWhatToDoNext3_Text = "Ȼ�󵥻�����һ������ť������";
    Agent_Speak(L_IconnWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPAddCommands() 
{
    var L_ISPMenuCommand1_Text = "��������һ����ô��(&T)";
    var L_ISPMenuCommand2_Text = "����ҵļ���������̸����ʻ���Ϣ����ô��(&A)?";
    var L_ISPMenuCommand3_Text = "��һ���Ҹ���ʲô(&W)?";

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
    var L_ISPAboutThisStep1_Text = "����һ��Ļ��������ѡ����η��� Internet��";
    Agent_Speak(L_ISPAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");

    var L_ISPAboutThisStep2_Text = "������ʹ�� MSN��";
    Agent_Speak(L_ISPAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");

        var L_ISPAboutThisStep3_Text = "����һ����ͬ�� Internet �����ṩ�̡�";
        Agent_Speak(L_ISPAboutThisStep3_Text);
        
        Agent_Play("RestPose");
    }
    
    Agent_GestureAtElement(g.radioSkip, "Left");

    var L_ISPAboutThisStep4_Text = "�������������ڲ����� Internet ���ӡ�";
    Agent_Speak(L_ISPAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPWhatIfGivenAccount() 
{
    var L_ISPWhatIfGivenAccount1_Text = "�����������ļ������ʱ�����������̿����Ѿ������ṩ�� \\map=Internet\\ �ʻ�����Ϣ��";
	Agent_Speak(L_ISPWhatIfGivenAccount1_Text);
	
    var L_ISPWhatIfGivenAccount2_Text = "�ʻ���Ϣ�����û��������롢 \\map=Internet\\ �����ṩ�����ƺ͵绰���롣";
	Agent_Speak(L_ISPWhatIfGivenAccount2_Text);
	
    var L_ISPWhatIfGivenAccount3_Text = "�����������Щ��Ϣ����ô����ӵ��һ�� Internet �ʻ���";
	Agent_Speak(L_ISPWhatIfGivenAccount3_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");
	
    var L_ISPWhatIfGivenAccount4_Text = "��� ISP ������ MSN����ѡ��˵�һ��ѡ�";
	Agent_Speak(L_ISPWhatIfGivenAccount4_Text);
    
    Agent_Play("RestPose");

    
    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");
    	
        var L_ISPWhatIfGivenAccount5_Text = "��� ISP ���Ʋ��� MSN����ѡ��˵ڶ���ѡ�";
    	Agent_Speak(L_ISPWhatIfGivenAccount5_Text);
        
        Agent_Play("RestPose");
    }

    Agent_GestureAtElement(g.radioSkip, "Left");
    
    var L_ISPWhatIfGivenAccount6_Text = "���ߣ�������ȵ��Ժ���ڴ˼���������� Internet ���ӣ���ѡ������һ��ѡ�";
	Agent_Speak(L_ISPWhatIfGivenAccount6_Text);
			    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_ISPWhatIfGivenAccount7_Text = "Ȼ�󵥻�����һ������ť��";
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
    
    var L_ISPWhatToDoNext1_Text = "����ѡ��һ��ѡ����뵥������һ������ť��";
	Agent_Speak(L_ISPWhatToDoNext1_Text);
	
	Agent_Play("RestPose");
}



function Agent_ICSAddCommands() 
{
	var L_ICSAddCommands1_Text = "��������һ����ô��(&T)";
	var L_ICSAddCommands2_Text = "ʲô�� Internet ���ӷ���ǽ(&A)?";
	var L_ICSAddCommands3_Text = "ʲô�����簲װ��(&I)?";
	
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
	var L_ICSAboutThisStep1_Text = "�ڸ���Ļ�ϣ�������ѡ������ü�������� Internet��";
	Agent_Speak(L_ICSAboutThisStep1_Text);
	
	var L_ICSAboutThisStep2_Text = "����ü�������ӵ���������������磬������ʹ�ô�������� \\map=Internet\\��";
	Agent_Speak(L_ICSAboutThisStep2_Text);
	
	var L_ICSAboutThisStep3_Text = "���򣬿������ô˼����ֱ�����ӵ� Internet��";
	Agent_Speak(L_ICSAboutThisStep3_Text);
	
	var L_ICSAboutThisStep4_Text = "������ѡ���ĸ�ѡ�Windows XP ��ʹ�� Internet ���ӷ���ǽ������������ֹ���� Internet �û�δ����Ȩ���Է������ļ������";
	Agent_Speak(L_ICSAboutThisStep4_Text);
}
	
function Agent_ICSWhatIsFirewall() 
{
	var L_ICSWhatIsFirewall1_Text = "����ǽ�Ǳ��������������������İ�ȫϵͳ��������ƿ�����ֹ������������(�� Internet )���ⲿ��в(��ڿ�)��";
	Agent_Speak(L_ICSWhatIsFirewall1_Text);
	
	var L_ICSWhatIsFirewall2_Text = "�������� Windows XP ������ʱ��Windows XP �� Internet ���ӷ���ǽ���ܻ��Զ����á�";
	Agent_Speak(L_ICSWhatIsFirewall2_Text);
	
	var L_ICSWhatIsFirewall3_Text = "����˼��������һ�������һ���֣�����ֱ�ӷ��� Internet������ǽҲ�ᱻ���á�";
	Agent_Speak(L_ICSWhatIsFirewall3_Text);
}
	
function Agent_ICSWhatIsNetworkWizard() 
{
	var L_ICSWhatIsNetworkWizard1_Text = "���򵼻�������һ��һ����������סլ��λ�������硣";
	Agent_Speak(L_ICSWhatIsNetworkWizard1_Text);
	
	var L_ICSWhatIsNetworkWizard2_Text = "������ڴ˹��̲��뽫�˼�������ӵ����磬�������ڴ�֮�����ӡ�";
	Agent_Speak(L_ICSWhatIsNetworkWizard2_Text);
	
	var L_ICSWhatIsNetworkWizard3_Text = "�ڡ���ʼ���˵����뵥�������г��򡱡�";
	Agent_Speak(L_ICSWhatIsNetworkWizard3_Text);
	
	var L_ICSWhatIsNetworkWizard4_Text = "Ȼ�󵥻����������͡�ͨѶ�������ҡ����簲װ�򵼡���";
	Agent_Speak(L_ICSWhatIsNetworkWizard4_Text);
	
	var L_ICSWhatIsNetworkWizard5_Text = "�����������Щ���裬�뵥������ʼ���˵��ϵġ�������֧�֡����Ա��������Ĵ𰸺������м�ֵ����Ϣ��";
	Agent_Speak(L_ICSWhatIsNetworkWizard5_Text);
}



function Agent_ICSDCAddCommands() 
{
	var L_ICSDCAddCommands1_Text = "��������һ����ô��(&T)";
	var L_ICSDCAddCommands2_Text = "��һ���Ҹ���ʲô(&W)?";
	
	g_AgentCharacter.Commands.Add("Agent_ICSDCAboutThisStep", L_ICSDCAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_ICSDCWhatToDoNext", L_ICSDCAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_ICSDCAboutThisStep() 
{
	var L_ICSDCAboutThisStep1_Text = "����Ļ�����������ļ�����Ѿ��� \\map=Internet\\ ���ж����ӡ�";
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
    
	var L_ICSDCWhatToDoNext1_Text = "���������ԡ���ť���������ӵ� \\map=Internet\\��";
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
    
	var L_ICSDCWhatToDoNext2_Text = "���ߵ������������������ӵ� \\map=Internet\\ ��������";
	Agent_Speak(L_ICSDCWhatToDoNext2_Text);
	
	Agent_Play("RestPose");
}



function Agent_Ident1AddCommands() 
{
    var L_Ident1AddCommands1_Text = "��������һ����ô��(&T)";
    var L_Ident1AddCommands2_Text = "ʲô���û��ʻ�(&A)?";
    var L_Ident1AddCommands3_Text = "�趨�û��ʻ��ĺô���ʲô(&R)?";
    var L_Ident1AddCommands4_Text = "��һ���Ҹ���ʲô(&W)?";

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
	var L_Ident1AboutThisStep1_Text = "�ڴ���Ļ�ϣ�������ʶ��ʹ�ô˼�����������û���";
	Agent_Speak(L_Ident1AboutThisStep1_Text);
	
	var L_Ident1AboutThisStep2_Text = "������������û�����˼������ÿ���û����������Լ����ʻ������˻� Windows XP��";
	Agent_Speak(L_Ident1AboutThisStep2_Text);
    
    var L_Ident1AboutThisStep3_Text = "������ÿ���û����������Լ��ļ�������á���Ȩ�������ļ�����վ���Ӻ�����ѡ��ͬʱ�ֲ�Ӱ�������û������á�";
    Agent_Speak(L_Ident1AboutThisStep3_Text);
    
    var L_Ident1AboutThisStep4_Text = "���������ʱ������ӭʹ�á���Ļ������ĸ˳����ʾ���������Ļ�����������������";
    Agent_Speak(L_Ident1AboutThisStep4_Text);
    
    var L_Ident1AboutThisStep5_Text = "����ӭʹ�á���Ļ����������ʾÿ���û�����Ƭ��";
    Agent_Speak(L_Ident1AboutThisStep5_Text);
    
    var L_Ident1AboutThisStep6_Text = "Ҫ���Ժ������Щ���������Ե�������ʼ���˵��ϵġ�������塱��Ȼ�󵥻����û��ʻ���ͼ�ꡣ";
    Agent_Speak(L_Ident1AboutThisStep6_Text);
}

function Agent_Ident1Command_WhatIsUserAccount() 
{	
	var L_Ident1WhatIsUserAccount1_Text = "����������칫�ҵ������˹�ͬʹ��һ̨�����������ϲ���û��ʻ��ġ�";
	Agent_Speak(L_Ident1WhatIsUserAccount1_Text);
	
	var L_Ident1WhatIsUserAccount2_Text = "�����û��ʻ���������:";
	Agent_Speak(L_Ident1WhatIsUserAccount2_Text);
    
    var L_Ident1WhatIsUserAccount3_Text = "���˻� Windows ��֯����ʾ��Ϣ�ķ�ʽ������Ӱ�������û�����ѡ��;";
    Agent_Speak(L_Ident1WhatIsUserAccount3_Text);
    
    var L_Ident1WhatIsUserAccount4_Text = "��Ҫ������ܷ��������ļ�;";
    Agent_Speak(L_Ident1WhatIsUserAccount4_Text);
    
    var L_Ident1WhatIsUserAccount5_Text = "�������� Web �ղؼк�������ʵ���վ�б�;";
    Agent_Speak(L_Ident1WhatIsUserAccount5_Text);
    
    var L_Ident1WhatIsUserAccount6_Text = "������Ҫ�ļ��������;";
    Agent_Speak(L_Ident1WhatIsUserAccount6_Text);
    
    var L_Ident1WhatIsUserAccount7_Text = "Ϊÿ���û��Զ�������; ����";
    Agent_Speak(L_Ident1WhatIsUserAccount7_Text);
    
    var L_Ident1WhatIsUserAccount8_Text = "�򻯵�¼�ͼ�����û�֮��Ŀ����л���";
    Agent_Speak(L_Ident1WhatIsUserAccount8_Text);
}

function Agent_Ident1Command_Benefits() 
{	
	var L_Ident1Benefits1_Text = "��ǰ������������ζ�������û����Կ�������˽���ļ�����װ������Ҫ����Ϸ����������߸������ļ�������á�";
	Agent_Speak(L_Ident1Benefits1_Text);
	
	var L_Ident1Benefits2_Text = "������ȫ��һ����!";
	Agent_Speak(L_Ident1Benefits2_Text);
    
    var L_Ident1Benefits3_Text = "�����û��ʻ�ʱ��ÿ���û������Ը��˻� Windows������Ӱ����̨������������û���";
    Agent_Speak(L_Ident1Benefits3_Text);
    
    var L_Ident1Benefits4_Text = "Ҫ��һ���˽��û��ʻ����뵥������ʼ���˵��ϵġ�������֧�֡�����������Ĵ𰸺������м�ֵ����Ϣ��";
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
    
    var L_Ident1WhatToDoNext1_Text = "����Ҫʹ����̨������������û����󣬵�������һ������ť�Ա������";
    Agent_Speak(L_Ident1WhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_Ident1WhatToDoNext2_Text = "��װ�� Windows �������Ը�����Щ�û���������û���";
    Agent_Speak(L_Ident1WhatToDoNext2_Text);
        
    var L_Ident1WhatToDoNext3_Text = "ֻ�赥������ʼ���˵��ϵġ�������塱����ѡ���û��ʻ�����";
    Agent_Speak(L_Ident1WhatToDoNext3_Text);
}



function Agent_IdentitiesAddCommands() 
{
    var L_IdentitiesAddCommands1_Text = "��������һ����ô��(&T)";
    var L_IdentitiesAddCommands2_Text = "ʲô���û��ʻ�(&A)?";
    var L_IdentitiesAddCommands3_Text = "�趨�û��ʻ��ĺô���ʲô(&R)?";
    var L_IdentitiesAddCommands4_Text = "��һ���Ҹ���ʲô(&W)?";

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
	var L_IdentitiesAboutThisStep1_Text = "�ڴ���Ļ�ϣ�������ʶ��ʹ�ô˼�����������û���";
	Agent_Speak(L_IdentitiesAboutThisStep1_Text);
	
	var L_IdentitiesAboutThisStep2_Text = "������������û�����˼������ÿ���û����������Լ����ʻ������˻� Windows XP��";
	Agent_Speak(L_IdentitiesAboutThisStep2_Text);
    
    var L_IdentitiesAboutThisStep3_Text = "������ÿ���û����������Լ��ļ�������á���Ȩ�������ļ�����վ���Ӻ�����ѡ��ͬʱ�ֲ�Ӱ�������û������á�";
    Agent_Speak(L_IdentitiesAboutThisStep3_Text);
    
    var L_IdentitiesAboutThisStep4_Text = "���������ʱ������ӭʹ�á���Ļ������ĸ˳����ʾ���������Ļ�����������������";
    Agent_Speak(L_IdentitiesAboutThisStep4_Text);
    
    var L_IdentitiesAboutThisStep5_Text = "����ӭʹ�á���Ļ����������ʾÿ���û�����Ƭ��";
    Agent_Speak(L_IdentitiesAboutThisStep5_Text);
    
    var L_IdentitiesAboutThisStep6_Text = "Ҫ���Ժ������Щ���������Ե�������ʼ���˵��ϵġ�������塱��Ȼ�󵥻����û��ʻ���ͼ�ꡣ";
    Agent_Speak(L_IdentitiesAboutThisStep6_Text);
}

function Agent_IdentitiesCommand_WhatIsUserAccount() 
{	
	var L_IdentitiesWhatIsUserAccount1_Text = "����������칫�ҵ������˹�ͬʹ��һ̨�����������ϲ���û��ʻ��ġ�";
	Agent_Speak(L_IdentitiesWhatIsUserAccount1_Text);
	
	var L_IdentitiesWhatIsUserAccount2_Text = "�����û��ʻ���������:";
	Agent_Speak(L_IdentitiesWhatIsUserAccount2_Text);
    
    var L_IdentitiesWhatIsUserAccount3_Text = "���˻� Windows ��֯����ʾ��Ϣ�ķ�ʽ������Ӱ�������û�����ѡ��; ";
    Agent_Speak(L_IdentitiesWhatIsUserAccount3_Text);
    
    var L_IdentitiesWhatIsUserAccount4_Text = "��Ҫ������ܷ��������ļ�;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount4_Text);
    
    var L_IdentitiesWhatIsUserAccount5_Text = "�������� Web �ղؼк�������ʵ���վ�б�; ";
    Agent_Speak(L_IdentitiesWhatIsUserAccount5_Text);
    
    var L_IdentitiesWhatIsUserAccount6_Text = "������Ҫ�ļ��������; ";
    Agent_Speak(L_IdentitiesWhatIsUserAccount6_Text);
    
    var L_IdentitiesWhatIsUserAccount7_Text = "Ϊÿ���û��Զ�������; ����";
    Agent_Speak(L_IdentitiesWhatIsUserAccount7_Text);
    
    var L_IdentitiesWhatIsUserAccount8_Text = "�򻯵�¼�ͼ�����û�֮��Ŀ����л���";
    Agent_Speak(L_IdentitiesWhatIsUserAccount8_Text);
}

function Agent_IdentitiesCommand_Benefits() 
{	
	var L_IdentitiesBenefits1_Text = "��ǰ������������ζ�������û����Կ�������˽���ļ�����װ������Ҫ����Ϸ����������߸������ļ�������á�";
	Agent_Speak(L_IdentitiesBenefits1_Text);
	
	var L_IdentitiesBenefits2_Text = "������ȫ��һ����!";
	Agent_Speak(L_IdentitiesBenefits2_Text);
    
    var L_IdentitiesBenefits3_Text = "�����û��ʻ�ʱ��ÿ���û������Ը��˻� Windows������Ӱ����̨������������û���";
    Agent_Speak(L_IdentitiesBenefits3_Text);
    
    var L_IdentitiesBenefits4_Text = "Ҫ��һ���˽��û��ʻ����뵥������ʼ���˵��ϵġ�������֧�֡�����������Ĵ𰸺������м�ֵ����Ϣ��";
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
    
    var L_IdentitiesWhatToDoNext1_Text = "����Ҫʹ����̨������������û����󣬵�������һ������ť�Ա������";
    Agent_Speak(L_IdentitiesWhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_IdentitiesWhatToDoNext2_Text = "��װ�� Windows �������Ը�����Щ�û���������û���";
    Agent_Speak(L_IdentitiesWhatToDoNext2_Text);
        
    var L_IdentitiesWhatToDoNext3_Text = "ֻ�赥������ʼ���˵��ϵġ�������塱����ѡ���û��ʻ�����";
    Agent_Speak(L_IdentitiesWhatToDoNext3_Text);
}



function Agent_KeybdAddCommands() 
{
	var L_KeybdMenuCommand1_Text = "��������һ����ô��(&T)";
    var L_KeybdMenuCommand2_Text = "���������ѡ����������(&D)?";
    var L_KeybdMenuCommand3_Text = "���������ѡ����������(&O)?";
    var L_KeybdMenuCommand4_Text = "���������ѡ���������(&S)?";

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
    var L_KeybdAboutThisStep1_Text = "������ļ�����Ļ�ϣ������Ը��� Windows ��������������ѡ��������ú�ʱ����ʾ���֡����ں����֡�";
    Agent_Speak(L_KeybdAboutThisStep1_Text);
        
    var L_KeybdAboutThisStep2_Text = "���磬�ڴ���Ļ�ϣ�ѡ�������ס����ĵ��������ڼ�������ʹ�õ����Ժ���ʹ�õļ��̡�";
    Agent_Speak(L_KeybdAboutThisStep2_Text);
        
    var L_KeybdAboutThisStep3_Text = "Windows ��ȷ����ȷ��ʾ���ڡ�ʱ��ͻ��ҡ�";
    Agent_Speak(L_KeybdAboutThisStep3_Text);
        
    var L_KeybdAboutThisStep4_Text = "���磬�����ѡ��������Ϊ��������Ӣ����Ϊ�������ԣ���ô��������������Ԫ��ʾ�� ";
    Agent_Speak(L_KeybdAboutThisStep4_Text);

    var L_KeybdAboutThisStep5_Text = "���ǣ������ѡ��Ӣ����Ϊ�������򣬻�����������Ӣ����ʾ��";
    Agent_Speak(L_KeybdAboutThisStep5_Text);
}

function Agent_KeybdHowToSelectRegion() 
{     
    Agent_GestureAtElement(g.selRegion, "Left");
     
    var L_KeybdHowToSelectRegion1_Text = "�����ϵ������ڴ��б��а���ĸ˳����֡�";
    Agent_Speak(L_KeybdHowToSelectRegion1_Text);	
   
    var L_KeybdHowToSelectRegion2_Text = "�����б�������¼����ϵ� Tab ��ֱ�����ҵ�����";
    Agent_Speak(L_KeybdHowToSelectRegion2_Text);	
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selRegion, "Right");
        
    var L_KeybdHowToSelectRegion3_Text = "Ȼ�󵥻���ЩС��ͷ�İ�ť����ʹ�ü����ϵ����¼�ͷ����������ѡ�";
    Agent_Speak(L_KeybdHowToSelectRegion3_Text);
        
    var L_KeybdHowToSelectRegion4_Text = "���������ס���������󣬵��������ڼ����ϰ��� Enter ����";
    Agent_Speak(L_KeybdHowToSelectRegion4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.RegionName, "Left");

    var L_KeybdHowToSelectRegion5_Text = "��Ҫѡ������������ڴ˿��С�";
    Agent_Speak(L_KeybdHowToSelectRegion5_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectLanguage() 
{        		
    var L_KeybdHowToSelectLanguage1_Text = "ѡ�����ʹ�õ����ԡ�";
    Agent_Speak(L_KeybdHowToSelectLanguage1_Text);
        
    var L_KeybdHowToSelectLanguage2_Text = "���磬������˵����������Ǽ������Ӧ�ó������ʹ�õ��ļ�ͨ����Ӣ��ģ����ڴ˴�ѡ��Ӣ�";
    Agent_Speak(L_KeybdHowToSelectLanguage2_Text);   
        
    Agent_GestureAtElement(g.selLang, "Left");  
        
    var L_KeybdHowToSelectLanguage3_Text = "���Ի��ڴ��б��а�����ĸ˳����ʾ��";
    Agent_Speak(L_KeybdHowToSelectLanguage3_Text);

    var L_KeybdHowToSelectLanguage4_Text = "�����˴����¼����ϵ� Tab ��ֱ����Ҫȥ�ĵط���";
    Agent_Speak(L_KeybdHowToSelectLanguage4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selLang, "Right");

    var L_KeybdHowToSelectLanguage5_Text = "Ȼ�󵥻���ЩС��ͷ�İ�ť����ʹ�ü����ϵ����¼�ͷ����������ѡ�";
    Agent_Speak(L_KeybdHowToSelectLanguage5_Text);

    var L_KeybdHowToSelectLanguage6_Text = "��������Ҫ�����Ժ󣬵������������ļ����ϰ� Enter ����";
    Agent_Speak(L_KeybdHowToSelectLanguage6_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.LangName, "Left");

    var L_KeybdHowToSelectLanguage7_Text = "��Ҫѡ������������ڴ˿��С�";
    Agent_Speak(L_KeybdHowToSelectLanguage7_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectKeyboard() 
{		
    var L_KeybdHowToSelectKeyboard1_Text = "���̻��ڴ��б��а�����ĸ˳����ʾ��";
    Agent_Speak(L_KeybdHowToSelectKeyboard1_Text);
    
    Agent_GestureAtElement(g.selKeyboard, "Left");
        
    var L_KeybdHowToSelectKeyboard2_Text = "�����˴����¼����ϵ� Tab ��ֱ����Ҫȥ�ĵط���";
    Agent_Speak(L_KeybdHowToSelectKeyboard2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selKeyboard, "Right");
        
    var L_KeybdHowToSelectKeyboard3_Text = "Ȼ�󵥻���ЩС��ͷ�İ�ť����ʹ�ü����ϵ����¼�ͷ�������б��е�ѡ�";
    Agent_Speak(L_KeybdHowToSelectKeyboard3_Text);
        
    var L_KeybdHowToSelectKeyboard4_Text = "�������ļ����ʹ�õļ��̺󣬵��������ڼ����ϰ� Enter ����";
    Agent_Speak(L_KeybdHowToSelectKeyboard4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.KeyboardName, "Left");

    var L_KeybdHowToSelectKeyboard5_Text = "��Ҫѡ��ļ��̻�����ڴ˿��С�";
    Agent_Speak(L_KeybdHowToSelectKeyboard5_Text);
    
    Agent_Play("RestPose");
}



function Agent_EulaAddCommands() 
{
    var L_EulaCommand1_Text = "��������һ����ô��(&T)";
    var L_EulaCommand2_Text = "��α�ʾ�ҵĴ�(&O)";
    var L_EulaCommand3_Text = "EULA ������ʲô(&A)?";
    var L_EulaCommand4_Text = "EULA ��������ʲô(&D)?";
    var L_EulaCommand5_Text = "�����ҡ���һ������ť�����õ�ԭ��(&I)?";
    var L_EulaCommand6_Text = "��һ���Ҹ���ʲô(&W)?";

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
        var L_EulaMenuCommand5_Text = "�����ҡ���һ������ť�����õ�ԭ��(&I)?";

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
    var L_EulaAboutThisStep1_Text = "�ڴ���Ļ���������Ķ� Microsoft Windows ���Э�飬Ȼ���ʾ���Ƿ���ܡ�";
    Agent_Speak(L_EulaAboutThisStep1_Text);		
    
    Agent_GestureAtElement(g.txtEULA,"Left");
        
    var L_EulaAboutThisStep2_Text = "Ҫʹ�� Windows����������ܴ�Э�顣";
    Agent_Speak(L_EulaAboutThisStep2_Text);
    
    Agent_Play("RestPose");
}

function Agent_EulaHowToAnswer() 
{		
    Agent_GestureAtElement(g.radioAgree,"Left");
    
    var L_EulaHowToAnswer1_Text = "�����ָ��ָ�����ߵİ�ɫԲȦ��Ȼ�󵥻�һ�Ρ�";
    Agent_Speak(L_EulaHowToAnswer1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaHowToAnswer2_Text = "Ȼ���¡���һ������ť��";
    Agent_Speak(L_EulaHowToAnswer2_Text);
}

function Agent_EulaWhatIsEula() 
{		
    var L_EulaWhatIsEula1_Text = "���� Microsoft ��Ʒ��ʹ��Ӧ�����������û����Э������� \\map=(EULA)\\ �Ͱ�Ȩ���Ĺ涨��";
    Agent_Speak(L_EulaWhatIsEula1_Text);
        
    var L_EulaWhatIsEula2_Text = "EULA �ǹ淶����κϷ�ʹ����ɲ�Ʒ�ĺ�ͬ����������ʹ�ð�װ�ڱ�������ϵĸò�Ʒ���ض�Ȩ����";
    Agent_Speak(L_EulaWhatIsEula2_Text);
}

function Agent_EulaWhatDoesEulaSay() 
{		
    var L_EulaWhatDoesEulaSay1_Text = "һ����������������EULA �������ʹ�� Windows XP ����ɲ�������һЩ����Ȩ����";
    Agent_Speak(L_EulaWhatDoesEulaSay1_Text);
        
    var L_EulaWhatDoesEulaSay2_Text = "ͬʱ��Ҳ����ʹ�� Windows XP ����һЩ���ơ�";
    Agent_Speak(L_EulaWhatDoesEulaSay2_Text);	
    
    Agent_GestureAtElement(g.txtEULA,"Right");	
        
    var L_EulaWhatDoesEulaSay3_Text = "Ҫ�Ķ���ϸ���ݣ�������������֤���衱�½ڡ�";
    Agent_Speak(L_EulaWhatDoesEulaSay3_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatDoesEulaSay4_Text = "EULA �������޵����Ϳ��Ա��ݻ�浵 Windows XP ������������������";
    Agent_Speak(L_EulaWhatDoesEulaSay4_Text);
}

function Agent_EulaWhereIsNextButton() 
{		
    var L_EulaWhereIsNextButton1_Text = "����һ������ť�����ã���Ϊ��δѡ���Ƿ���ܸ����Э�顣";
    Agent_Speak(L_EulaWhereIsNextButton1_Text);
        
    var L_EulaWhereIsNextButton2_Text = "���ȣ����뵥�����ǡ��򡰷�ѡ�";
    Agent_Speak(L_EulaWhereIsNextButton2_Text);
}

function Agent_EulaWhatToDoNext() 
{			
    Agent_GestureAtElement(g.radioAgree,"Left");
    	
    var L_EulaWhatToDoNext1_Text = "�Ķ����Э����뵥�����ǡ��Խ��ܴ�Э�顣";
    Agent_Speak(L_EulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatToDoNext2_Text = "���ߣ�����������ܴ�Э�飬�뵥�����񡱡�";
    Agent_Speak(L_EulaWhatToDoNext2_Text);
        
    var L_EulaWhatToDoNext3_Text = "Ҫ����ʹ�� Windows����������ܴ�Э�顣";
    Agent_Speak(L_EulaWhatToDoNext3_Text);
    			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_EulaWhatToDoNext4_Text = "Ȼ�󵥻�����һ������ť��������һ����";
    Agent_Speak(L_EulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_BadEulaAddCommands() {

    var L_BadEulaCommand1_Text = "��������һ����ô��(&T)";
    var L_BadEulaCommand2_Text = "EULA ��������ʲô(&A)?";
    var L_BadEulaCommand3_Text = "����Ҳ����� EULA������ô��(&I)?";
    var L_BadEulaCommand4_Text = "��������һ����ô��(&W)";

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
    var L_BadEulaAboutThisStep1_Text = "����ǰ��Ļ����ѡ�񲻽������Э�顣";
    Agent_Speak(L_BadEulaAboutThisStep1_Text);

    var L_BadEulaAboutThisStep2_Text = "��������ܣ������޷�ʹ�� \\map=Windows\\��";
    Agent_Speak(L_BadEulaAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadEulaAboutThisStep3_Text = "���ǣ������Ե�������һ������ť���ص���һ����Ļ�����ܴ�Э�顣";
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
        
    var L_BadEulaAboutThisStep4_Text = "����ȷ������ֹͣʹ�� Windows���رռ������";
    Agent_Speak(L_BadEulaAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_BadEulaWhatDoesEulaSay()
{
    var L_BadEulaWhatDoesEulaSay1_Text = "һ����������������EULA �������ʹ�� Windows XP ����ɲ�������һЩ����Ȩ����";
    Agent_Speak(L_BadEulaWhatDoesEulaSay1_Text);

    var L_BadEulaWhatDoesEulaSay2_Text = "ͬʱ��Ҳ����ʹ�� Windows XP ����һЩ���ơ�";
    Agent_Speak(L_BadEulaWhatDoesEulaSay2_Text);

    var L_BadEulaWhatDoesEulaSay3_Text = "Ҫ�Ķ���ϸ���ݣ��뵥������һ������ť���� EULA�����¹��������������֤�����֡�";
    Agent_Speak(L_BadEulaWhatDoesEulaSay3_Text);
        
    var L_BadEulaWhatDoesEulaSay4_Text = "EULA �������޵����Ϳ��Ա��ݻ�浵 Windows XP ������������������";
    Agent_Speak(L_BadEulaWhatDoesEulaSay4_Text);
}

function Agent_BadEulaWhatIfIDontAcceptEula()
{
    var L_BadEulaWhatIfIDontAcceptEula1_Text = "��Ϊ EULA ������ʹ�� Windows   XP ����ɣ����ڿ�ʼʹ��        Windows XP ֮ǰ����������Э�顣";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadEulaWhatIfIDontAcceptEula2_Text = "����������������Э�飬�����Ե������رա���ť���ر����ļ������";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula2_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatIfIDontAcceptEula3_Text = "���������������ʱ��ص�����Ļ��";
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
    
    var L_BadEulaWhatToDoNext1_Text = "��������������Э�飬�뵥������һ������ť��";
    Agent_Speak(L_BadEulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatToDoNext2_Text = "������������Э�飬���ܼ����ý��̲���ʼʹ�� Windows��";
    Agent_Speak(L_BadEulaWhatToDoNext2_Text);

    var L_BadEulaWhatToDoNext3_Text = "����������������Э�飬�����Ե������رա���ť���ر����ļ������";
    Agent_Speak(L_BadEulaWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_BadEulaWhatToDoNext4_Text = "���������������ʱ��ص�����Ļ��";
    Agent_Speak(L_BadEulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}




function Agent_ProductKeyAddCommands() 
{
    var L_ProductKeyAddCommands1_Text = "��������һ����ô��(&T)";
    var L_ProductKeyAddCommands2_Text = "ʲô�ǲ�Ʒ��Կ(&A)?";
    var L_ProductKeyAddCommands4_Text = "��һ���Ҹ���ʲô(&W)?";

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

        var L_ProductKeyAddCommands3_Text = "�����ҡ���һ������ť�����õ�ԭ��(&I)?";

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
    var L_ProductKeyAboutThisStep1_Text = "�ڸ���Ļ�ϣ��������ļ����������Ϊ���ṩ�� 25 ���ַ��Ĳ�Ʒ��Կ��";
    Agent_Speak(L_ProductKeyAboutThisStep1_Text);

    var L_ProductKeyAboutThisStep2_Text = "��� CD ��װ��û�в�Ʒ��Կ���������� PC �����š���ı������Ʒ֤���ǩ�ϲ��ҡ�";
    Agent_Speak(L_ProductKeyAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pid1,"Left");

    var L_ProductKeyAboutThisStep3_Text = "�ڴ˴�������κ���ĸ�����Զ���ɴ�д��";
    Agent_Speak(L_ProductKeyAboutThisStep3_Text);
    
    Agent_Play("RestPose");
        
    var L_ProductKeyAboutThisStep4_Text = "�˲�������Ϳ���ע�����ļ�����Լ����� Microsoft Windows   �ˡ�";
    Agent_Speak(L_ProductKeyAboutThisStep4_Text);
        
    var L_ProductKeyAboutThisStep5_Text = "������ס�ע�� Windows �Ժ����Ϳ������ܵ����п������ܵ�Ȩ�档";
    Agent_Speak(L_ProductKeyAboutThisStep5_Text);
}

function Agent_ProductKeyWhatIsProdKey()
{
    var L_ProductKeyWhatIsProdKey1_Text = "Microsoft �ṩ��ÿ�� Windows ����һ��Ψһ�Ĳ�Ʒ��Կ��";
    Agent_Speak(L_ProductKeyWhatIsProdKey1_Text);

    var L_ProductKeyWhatIsProdKey2_Text = "��Ʒ��Կ����������ȷ������������� Microsoft ����Ʒ��";
    Agent_Speak(L_ProductKeyWhatIsProdKey2_Text);

    var L_ProductKeyWhatIsProdKey3_Text = "���������ڷ�ֹ����һ�ݵ���� \\map=Windows\\��";
    Agent_Speak(L_ProductKeyWhatIsProdKey3_Text);
        
    var L_ProductKeyWhatIsProdKey4_Text = "���⣬��Ʒ��Կ����ȷ���������ض����û�Ȩ�棬��֧�֡��г����������� Web ��Ʒ��";
    Agent_Speak(L_ProductKeyWhatIsProdKey4_Text);
}

function Agent_ProductKeyWhyNextNotAvailable()
{
    var L_ProductKeyWhyNextNotAvailable1_Text = "��Ϊ������һ����Ч�Ĳ�Ʒ��Կ������һ������ť�����á�";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable1_Text);

    var L_ProductKeyWhyNextNotAvailable2_Text = "����������Ч�Ĳ�Ʒ��Կ��";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable2_Text);

    var L_ProductKeyWhyNextNotAvailable3_Text = "Ȼ����ܵ�������һ�����Լ�����";
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
    
    var L_ProductKeyWhatToDoNext1_Text = "������Ч�Ĳ�Ʒ��Կ���뵥������һ������ť��";
    Agent_Speak(L_ProductKeyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}




function Agent_Reg1AddCommands() 
{
    var L_Reg1Command1_Text = "��������һ����ô��(&T)";
    var L_Reg1Command2_Text = "�������й�ע�����Ϣ(&E)";
    var L_Reg1Command3_Text = "����������ע��(&O)?";
    var L_Reg1Command4_Text = "�����Ժ�ע����(&R)?";
    var L_Reg1Command5_Text = "ע����ʲô�ô�(&A)?";
    var L_Reg1Command6_Text = "������һЩ���ڹ������Ϣ(&M)";

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
    var L_Reg1AboutThisStep1_Text = "�˴�Ϊע�Ჿ�ֵĿ�ʼ��";
    Agent_Speak(L_Reg1AboutThisStep1_Text);

    var L_Reg1AboutThisStep2_Text = "�˴���ע�� Windows��";
    Agent_Speak(L_Reg1AboutThisStep2_Text);

    var L_Reg1AboutThisStep3_Text = "���к󣬽��Ϸ����� Microsoft �����ߵ��Żݡ�";
    Agent_Speak(L_Reg1AboutThisStep3_Text);
        
    var L_Reg1AboutThisStep4_Text = "��Щ������ò�Ʒ���µ�֪ͨ������ Microsoft ������Ĳ�Ʒ֧�ַ���";
    Agent_Speak(L_Reg1AboutThisStep4_Text);
        
    var L_Reg1AboutThisStep5_Text = "�ڴ���Ļ�������Ծ���ע�᷽ʽ��";
    Agent_Speak(L_Reg1AboutThisStep5_Text);
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");
        
    var L_Reg1AboutThisStep6_Text = "��Ҫ���Ҹ����й� Microsoft ��˽���ߣ����������ӡ�";
    Agent_Speak(L_Reg1AboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1AboutRegistration()
{    
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1AboutRegistration1_Text = "�뵥���˴�����ע�ᣬȻ�󵥻�����һ������ť��";
    Agent_Speak(L_Reg1AboutRegistration1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.rb_reg_ms_no,"Left");

    var L_Reg1AboutRegistration2_Text = "�������������ע�ᣬ�뵥���ڶ���ѡ�Ȼ�󵥻�����һ������";
    Agent_Speak(L_Reg1AboutRegistration2_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1HowToRegister()
{      
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1HowToRegister1_Text = "Ҫע������ Windows����ȷ��ѡ���ˡ��ǡ�ѡ�";
    Agent_Speak(L_Reg1HowToRegister1_Text); 
    
    Agent_Play("RestPose");

    var L_Reg1HowToRegister2_Text = "Ȼ�󵥻�����һ������ť������";
    Agent_Speak(L_Reg1HowToRegister2_Text);
}

function Agent_Reg1RegisterLater()
{
    var L_Reg1RegisterLater1_Text = "�������������ע�ᣬ����������� Windows ��װ��ע������ \\map=Windows\\��";
    Agent_Speak(L_Reg1RegisterLater1_Text);

    var L_Reg1RegisterLater2_Text = "�ڡ���ʼ���˵��ϵ��������С���Ȼ������ regwiz /r��";
    Agent_Speak(L_Reg1RegisterLater2_Text);

    var L_Reg1RegisterLater3_Text = "�����������Щ���裬�뵥������ʼ���˵��ϵġ�������֧�֡����Ա��������Ĵ𰸺������м�ֵ����Ϣ��";
    Agent_Speak(L_Reg1RegisterLater3_Text);
}

function Agent_Reg1WhyRegister()
{
    var L_Reg1WhyRegister1_Text = "ע�� Windows ������������ \\map=Microsoft\\ �û���Ȩ�档";
    Agent_Speak(L_Reg1WhyRegister1_Text);

    var L_Reg1WhyRegister2_Text = "��Щ������ò�Ʒ���µ�֪ͨ������ Microsoft ������Ĳ�Ʒ֧�ַ���";
    Agent_Speak(L_Reg1WhyRegister2_Text);
}

function Agent_Reg1AboutSharingInfo()
{
    
    if (!window.external.get_RetailOOBE()) 
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "��ѡ����Щѡ��ʱ������ѡ������ Microsoft �����ļ���������̹���ע����Ϣ��";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text); 
    
        Agent_Play("RestPose");
    }
    else
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "��ѡ����Щѡ��ʱ������ѡ������ Microsoft ����ע����Ϣ��";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");     
    }
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");

    var L_Reg1AboutSharingInfo2_Text = "Ҫ�˽����� Microsoft ��˽���ߣ��뵥�������ӡ�";
    Agent_Speak(L_Reg1AboutSharingInfo2_Text);
    
    Agent_Play("RestPose");
    
    if (!window.external.get_RetailOOBE()) 
    {           
        Agent_GestureAtElement(g.reg1_spn3,"Left");
                
        var L_Reg1AboutSharingInfo3_Text = "Ҫ�����˽� %1 ��˽���ߣ��뵥�������ӡ�";
        Agent_Speak(ApiObj.FormatMessage(L_Reg1AboutSharingInfo3_Text, g_OEMNameStr));
    
        Agent_Play("RestPose");
    }
}




function Agent_Reg3AddCommands() 
{
    var L_Reg3Command1_Text = "��������һ����ô��(&T)";
    var L_Reg3Command2_Text = "�������ı���Ϣ(&O)?";
    var L_Reg3Command3_Text = "������һЩ���ڹ������Ϣ(&M)";

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
    var L_Reg3AboutThisStep1_Text = "Ҫע������ Microsoft Windows�����ڴ���Ļ�������Ҫ����Ϣ��";
    Agent_Speak(L_Reg3AboutThisStep1_Text);
    
    Agent_GestureAtElement(g.UserCity,"Left");

    var L_Reg3AboutThisStep2_Text = "���˱��С���ѡ������⣬���п��ж���Ҫ������Ϣ��";
    Agent_Speak(L_Reg3AboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_Reg3AboutThisStep3_Text = "���ǣ������Ҳ�����˿�ѡ��Ϣ���Ǿ͸����ˡ�";
    Agent_Speak(L_Reg3AboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_Reg3AboutThisStep4_Text = "��ɺ��뵥������һ������ť��";
    Agent_Speak(L_Reg3AboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg3HowToChangeInfo()
{
    var L_Reg3HowToChangeInfo1_Text = "�����Ѿ��ڿ��������һЩ��ʾ����������ô����";
    Agent_Speak(L_Reg3HowToChangeInfo1_Text);
    
    Agent_GestureAtElement(g.UserLastName,"Left");

    var L_Reg3HowToChangeInfo2_Text = "���磬ֻҪ�����ˡ��ա���Ϳ��Կ�ʼ���롣";
    Agent_Speak(L_Reg3HowToChangeInfo2_Text);

    var L_Reg3HowToChangeInfo3_Text = "��ʱ��˸������(�����)������ʾ�ڸÿ��С�";
    Agent_Speak(L_Reg3HowToChangeInfo3_Text);

    var L_Reg3HowToChangeInfo4_Text = "��������ݽ�����ʾ�ڲ�����¡�";
    Agent_Speak(L_Reg3HowToChangeInfo4_Text);
    
    Agent_Play("RestPose");

    var L_Reg3HowToChangeInfo5_Text = "�������ϵ����Ҽ�ͷ�����ƶ�����㡣";
    Agent_Speak(L_Reg3HowToChangeInfo5_Text);

    var L_Reg3HowToChangeInfo6_Text = "���ң�������ʹ�� Delete ��ɾ��������Ժ���ַ�������ʹ�� \\map=Backspace\\ ��ɾ���������ǰ���ַ���";
    Agent_Speak(L_Reg3HowToChangeInfo6_Text);

    var L_Reg3HowToChangeInfo7_Text = "����������һ���ַ�����ָ����ڿ�������Ҫ����ַ��ĵط���������";
    Agent_Speak(L_Reg3HowToChangeInfo7_Text);

    var L_Reg3HowToChangeInfo8_Text = "Ȼ��������Ҫ������ַ���";
    Agent_Speak(L_Reg3HowToChangeInfo8_Text);

    var L_Reg3HowToChangeInfo9_Text = "�����û�������ڿ��в�����ʾ���ڿ��У������ص��ġ�";
    Agent_Speak(L_Reg3HowToChangeInfo9_Text);

    var L_Reg3HowToChangeInfo10_Text = "����ʾֻ�ǰ�����������������ע����Ϣ��һ���֡�";
    Agent_Speak(L_Reg3HowToChangeInfo10_Text);
}

function Agent_Reg3AboutSharingInfo()
{    
    if (!window.external.get_RetailOOBE()) 
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
        
        var L_Reg3AboutSharingInfo1_Text = "��ѡ����Щѡ��ʱ������ѡ������ Microsoft �����ļ���������̹���ע����Ϣ��";
        Agent_Speak(L_Reg3AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");
    }
    else
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
         
        var L_Reg3AboutSharingInfo1_Text = "��ѡ����Щѡ��ʱ������ѡ������ Microsoft ����ע����Ϣ��";
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

        

        L_Register3PlayCheckBoxScript1_Text = "Ŀǰ������Ļ�ϵ�ע����Ϣ�����͸� Microsoft �ͼ���������̡�";
        L_Register3PlayCheckBoxScript2_Text = "Ŀǰ������Ļ�ϵ�ע����Ϣ�����͸� Microsoft�������ᷢ�͸�����������̡�";
        L_Register3PlayCheckBoxScript3_Text = "Ŀǰ������Ļ�ϵ�ע����Ϣ�����͸�����������̣������ᷢ�͸� \\map=Microsoft\\��";
        L_Register3PlayCheckBoxScript4_Text = "Ŀǰ������Ļ�ϵ�ע����Ϣ�Ȳ��ᷢ�͸� Microsoft��Ҳ���ᷢ�͸�����������̡�";

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

        var L_Register3PlayCheckBoxScript5_Text = "����Ϣ�����������ڷ������³���ʱ֪ͨ���Լ�Ϊ���ṩע���û�Ӧ���е�Ȩ�档";
        Agent_Speak(L_Register3PlayCheckBoxScript5_Text);

        var L_Register3PlayCheckBoxScript6_Text = "���Ҫ���Ĵ���Ϣ�ķ��������";
        Agent_Speak(L_Register3PlayCheckBoxScript6_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(elem, "TopCenterWidth");
		else
			Agent_GestureAtElement(elem, "Left");

        var L_Register3PlayCheckBoxScript7_Text = "ֻ�赥���˿�";
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

        var L_Register3EncourageTabKey1_Text = "�� Tab ���Ƶ��˴���";
        Agent_Speak(L_Register3EncourageTabKey1_Text);
}

function Agent_Register3EncourageMouseClick() {

        var L_Register3EncourageMouseClick1_Text = "�����ָ���Ƶ��˴���������ߵİ�ť��";
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

                        var L_Register3PlayElementScript1_Text = "���ڴ˿��м����������֡�";
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

                        var L_Register3PlayElementScript3_Text = "����������������м�����";
                        Agent_Speak(L_Register3PlayElementScript3_Text);

                        break;

                case "UserLastName":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript4_Text = "���ڴ˿��м����������ϡ�";
                        Agent_Speak(L_Register3PlayElementScript4_Text);

                        break;

                case "UserAddress":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript5_Text = "���ڴ˴��������Ľֵ���ַ��";
                        Agent_Speak(L_Register3PlayElementScript5_Text);

                        break;

                case "UserAddress2":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        Agent_Play("Think");

                        var L_Register3PlayElementScript6_Text = "�����д��ַ��Ϣ�Ŀռ䲻�����뵥���˴��������밴 Tab ���Ƶ���һ�����С�";
                        Agent_Speak(L_Register3PlayElementScript6_Text);

                        Agent_Play("RestPose");

                        break;

                case "UserCity":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript7_Text = "���ڴ˴�����������ס����/�����ơ�";
                        Agent_Speak(L_Register3PlayElementScript7_Text);

                        break;

                case "UserStateTextBox":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript8_Text = "���ڴ˴�����ʡ/��������";
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
                                var L_Register3PlayElementScript91_Text = "����Ҫѡ��ʡ/��������";
                                Agent_Speak(L_Register3PlayElementScript91_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript92_Text = "Ҫ��ʾʡ/�������б�������굥�����µļ�ͷ��";
                                Agent_Speak(L_Register3PlayElementScript92_Text);

                        }

                        else if (elem.id == "selCAProvince") {
                                var L_Register3PlayElementScript93_Text = "����Ҫѡ��ʡ/��������";
                                Agent_Speak(L_Register3PlayElementScript93_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript94_Text = "Ҫ��ʾʡ/�������б�������굥�����µļ�ͷ��";
                                Agent_Speak(L_Register3PlayElementScript94_Text);

                        }

                        else {
                                var L_Register3PlayElementScript95_Text = "����Ҫѡ�����(����)��������굥�����µļ�ͷ��";
                                Agent_Speak(L_Register3PlayElementScript95_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript96_Text = "Ҫ��ʾ����(����)�б�������굥�����µļ�ͷ��";
                                Agent_Speak(L_Register3PlayElementScript96_Text);

                        }

                        Agent_Play("Explain");

                        var L_Register3PlayElementScript11_Text = "Ȼ�󣬵�����Ӧ��ʡ/����������";
                        var L_Register3PlayElementScript12_Text = "Ȼ�󣬵�����Ӧ��ʡ/����������";
                        var L_Register3PlayElementScript13_Text = "Ȼ�󣬵�����Ӧ�Ĺ���/��������";

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

                        var L_Register3PlayElementScript14_Text = "���ڴ˴������������롣";
                        Agent_Speak(L_Register3PlayElementScript14_Text);

                        break;

                case "UserEmailAddress":

                        if (elem.value == "") {

							if (g.document.dir == "rtl") 
								Agent_GestureAtElement(elem, "Left");
		
							else
								Agent_GestureAtElement(elem, "Right");

                            var L_Register3PlayElementScript15_Text = "���ĵ����ʼ���ַ�ǿ�ѡ�ģ��������������������������ѡ��ʽ��";
                            Agent_Speak(L_Register3PlayElementScript15_Text);
							
							g_bAgentRegister3ShortEmail = true;
							
							Agent_Play("Explain");
							
                            var L_Register3PlayElementScript16_Text = "�����û�е����ʼ���ַ���벻����д�ÿ�";
                            Agent_Speak(L_Register3PlayElementScript16_Text);
							
							Agent_Play("Blink");
							                             
                        }
                        
                        else if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) {

	                       if (g_strAgentLastFocusID == "UserEmailAddress") {

								Agent_Play("Decline");
								
								var L_Register3PlayElementScript17_Text = "�ܱ�Ǹ���õ����ʼ���ַ��Ч��";
								Agent_Speak(L_Register3PlayElementScript17_Text);

								Agent_ExplainEmailAddress();
								
								if (g.document.dir == "rtl")
									Agent_GestureAtElement(elem, "Left");
								
								else
									Agent_GestureAtElement(elem, "Right");
                                        
								Agent_Play("Alert");
                                        
								var L_Register3PlayElementScript18_Text = "�����û�е����ʼ���ַ���벻����д����";
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
        var L_ExplainEmailAddress1_Text = "�����ʼ���ַͨ����Ϊ�����֡�";
        Agent_Speak(L_ExplainEmailAddress1_Text);

        var L_ExplainEmailAddress2_Text = "��һ�������ʻ��������� @ ���š��ڶ�������������";
        Agent_Speak(L_ExplainEmailAddress2_Text);

        var L_ExplainEmailAddress3_Text = "���磬�����ʼ���ַ������: \\map=%s\\";
        var re = /%s/i;
        var strEmail = "\\map=\"\"=\"greatcustomer@msn.com\"\\";

        Agent_Speak(L_ExplainEmailAddress3_Text.replace(re, strEmail) + "\\pau=2000\\");

        Agent_Play("RestPose");
}







function Agent_PrivacyMSAddCommands() 
{
    var L_PrivacyMSCommand1_Text = "��������һ����ô��(&T)";
    var L_PrivacyMSCommand2_Text = "ʲô�ǰ�ȫ������(&A)?";
    var L_PrivacyMSCommand3_Text = "ʲô�� cookie(&K)?";
    var L_PrivacyMSCommand4_Text = "��һ���Ҹ���ʲô(&W)?";

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
    var L_PrivacyMSAboutThisStep1_Text = "����Ļ����ʾ Microsoft ����˽������";
    Agent_Speak(L_PrivacyMSAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.privtext,"Left");

    var L_PrivacyMSAboutThisStep2_Text = "�������ڴ˴���������֡�";
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

    var L_PrivacyMSAboutThisStep3_Text = "Ȼ�󣬵�������һ����������һ����Ļ��";
    Agent_Speak(L_PrivacyMSAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PrivacyMSWhatIsSecureServer()
{
    var L_PrivacyMSWhatIsSecureServer1_Text = "��������������������������ṩ������Դ(����Ϣ)�ļ������";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer1_Text);

    var L_PrivacyMSWhatIsSecureServer2_Text = "��ȫ�����������ṩ��ȫ����ļ���������ܱ�֤δ�������֤���û����ܷ��ʷ������ϴ������Ϣ��";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer2_Text);

    var L_PrivacyMSWhatIsSecureServer3_Text = "���磬������ Microsoft ע������������͵�ַ��Ϣ�ʹ����� \\map=Microsoft\\ �İ�ȫע��������ϡ�";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer3_Text);
        
    var L_PrivacyMSWhatIsSecureServer4_Text = "������Ϣ���ᱻ����������ȫ���棬�����Ͳ�����Ϊע������ \\map=Microsoft\\ ����ĵ���������������ϵ��";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer4_Text);
}

function Agent_PrivacyMSWhatIsCookie()
{
    var L_PrivacyMSWhatIsCookie1_Text = "cookie �ǵ�������ĳЩ��վʱ���������ļ�����е�һ��С�����ļ���";
    Agent_Speak(L_PrivacyMSWhatIsCookie1_Text);

    var L_PrivacyMSWhatIsCookie2_Text = "cookie �����������Ļ�����Ϣ���������ĵ����ʼ���ַ���������ڷ��ʴ�վ��ʱ�Ͳ���ÿ�������롣";
    Agent_Speak(L_PrivacyMSWhatIsCookie2_Text);

    var L_PrivacyMSWhatIsCookie3_Text = "���磬���������վ�Ϲ�������Ʒ����վ�����������ļ��������һ�����������ʼĵ�ַ��Ϣ�� \\map=cookie\\��";
    Agent_Speak(L_PrivacyMSWhatIsCookie3_Text);
        
    var L_PrivacyMSWhatIsCookie4_Text = "�����´��������ʴ���վʱ���������ٴ��������Ϣ��";
    Agent_Speak(L_PrivacyMSWhatIsCookie4_Text);
        
    var L_PrivacyMSWhatIsCookie5_Text = "������ Microsoft ע������Ĳ�Ʒ ID�������͵�ַ�ᴢ�������������һ�� cookie �ϡ�";
    Agent_Speak(L_PrivacyMSWhatIsCookie5_Text);
        
    var L_PrivacyMSWhatIsCookie6_Text = "���������´η���               www.microsoft.com ʱ������վ��֪�����Ѿ���ע��� Windows �û���";
    Agent_Speak(L_PrivacyMSWhatIsCookie6_Text);
}

function Agent_PrivacyMSWhatToDoNext()
{    
    Agent_GestureAtElement(g.privtext,"Left");
    
    var L_PrivacyMSWhatToDoNext1_Text = "Ҫ������˽��������ϸ��Ϣ���뵥���ÿ�";
    Agent_Speak(L_PrivacyMSWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.privtext,"Right");

    var L_PrivacyMSWhatToDoNext2_Text = "Ȼ��ʹ�� �� ���� �� ��������˽������";
    Agent_Speak(L_PrivacyMSWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_PrivacyMSWhatToDoNext3_Text = "��Ҳ����ʹ�ü����ϵ� Page Down �� Page Up �������ı���";
    Agent_Speak(L_PrivacyMSWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
        
    var L_PrivacyMSWhatToDoNext4_Text = "�����Ķ������˽�������뵥������һ������ť�����ص���һ��ע����Ļ��";
    Agent_Speak(L_PrivacyMSWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}





function Agent_RefDialAddCommands() 
{
    var L_RefDialAddCommands1_Text = "��������һ����ô��(&T)";
    var L_RefDialAddCommands2_Text = "��һ���Ҹ���ʲô(&W)?";

    g_AgentCharacter.Commands.Add("Agent_RefDialAboutThisStep", L_RefDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialWhatToDoNext", L_RefDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RefDialAboutThisStep()
{
    var L_RefDialAboutThisStep1_Text = "�ڴ�����£�Windows ��Ҫ������ѵ绰��";
    Agent_Speak(L_RefDialAboutThisStep1_Text);

    var L_RefDialAboutThisStep2_Text = "�⽫������ʹ�øü���������е� Internet �ʻ���";
    Agent_Speak(L_RefDialAboutThisStep2_Text);
}

function Agent_RefDialWhatToDoNext()
{    
    Agent_GestureAtElement(g.btnManual,"Left");
    
    var L_RefDialWhatToDoNext1_Text = "��������� Internet �����ṩ��(���Ϊ ISP)��֪��Ҫʹ���ĸ� \\map=ISP\\ ���뵥�����������á���ť��";
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

    var L_RefDialWhatToDoNext2_Text = "���������б���ѡ�������ĵ������õ� IPS���뵥������һ����������";
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

    var L_RefDialWhatToDoNext3_Text = "���ߵ������������������øü�������� Internet ��������";
    Agent_Speak(L_RefDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RefDialingAddCommands() 
{
    var L_RefDialingAddCommands1_Text = "��������һ����ô��(&T)";
    var L_RefDialingAddCommands2_Text = "��Ļ�м������ʲô(&A)?";
    var L_RefDialingAddCommands3_Text = "��һ���Ҹ���ʲô(&W)?";

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
    var L_RefDialingAboutThisStep1_Text = "Windows ���ڽ������ӵ�         Microsoft Referral Service �Ա���������ڵ������õ� \\map=Internet\\ �����ṩ���б�";
    Agent_Speak(L_RefDialingAboutThisStep1_Text);

    var L_RefDialingAboutThisStep2_Text = "���Ժ�...";
    Agent_Speak(L_RefDialingAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingAboutThisStep3_Text = "�����Ը�⣬���������ò���򷵻���ǰ��Ļ��";
    Agent_Speak(L_RefDialingAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RefDialingWhatsThisBar()
{    
    Agent_GestureAtElement(g.tblProg,"Left");
    
    var L_RefDialingWhatsThisBar1_Text = "���ǽ���ָʾ��������������˹��̵Ľ��ȡ�";
    Agent_Speak(L_RefDialingWhatsThisBar1_Text);

    var L_RefDialingWhatsThisBar2_Text = "����Ϣ���Ƽ��������ص����ļ�����Ϻ󣬴����ᱻ������";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
    
    Agent_Play("RestPose");

    var L_RefDialingWhatsThisBar3_Text = "��������Ϣ���غ󣬴����ᱻȫ�������������Զ�ת����һ����Ļ��";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
}

function Agent_RefDialingWhatToDoNext()
{
    var L_RefDialingWhatToDoNext1_Text = "���Եȣ�Windows ���ڽ��й� ISP ����Ϣ�� Microsoft Referral \\map=Service\\ ���ص����ļ������";
    Agent_Speak(L_RefDialingWhatToDoNext1_Text);

    var L_RefDialingWhatToDoNext2_Text = "����һ����ɺ���һ����Ļ���Զ����֡�";
    Agent_Speak(L_RefDialingWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingWhatToDoNext3_Text = "������������˲��裬�뵥������������ť��";
    Agent_Speak(L_RefDialingWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RegDialAddCommands()
{
    var L_RegDialAddCommands1_Text = "��������һ����ô��(&T)";
    var L_RegDialAddCommands2_Text = "��һ���Ҹ���ʲô(&W)?";

    g_AgentCharacter.Commands.Add("Agent_RegDialAboutThisStep", L_RegDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RegDialWhatToDoNext", L_RegDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RegDialAboutThisStep()
{
    var L_RegDialAboutThisStep1_Text = "Windows ����ʹ�����ļ����������ѵ绰�Ա����ӵ�ע�����ġ�";
    Agent_Speak(L_RegDialAboutThisStep1_Text);

    var L_RegDialAboutThisStep2_Text = "���Ժ�...";
    Agent_Speak(L_RegDialAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialAboutThisStep3_Text = "�����Ը�⣬���������ò���򷵻ص���һ��Ļ��";
    Agent_Speak(L_RegDialAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RegDialWhatToDoNext()
{
    var L_RegDialWhatToDoNext1_Text = "���Եȣ�Windows ��������ע�����ġ�";
    Agent_Speak(L_RegDialWhatToDoNext1_Text);

    var L_RegDialWhatToDoNext2_Text = "һ�� Windows ������ӣ����Զ��ƶ�����һ��Ļ��";
    Agent_Speak(L_RegDialWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialWhatToDoNext3_Text = "������������˲��裬�뵥������������ť��";
    Agent_Speak(L_RegDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigDialAddCommands()
{
    var L_MigDialAddCommands1_Text = "��������һ����ô��(&T)";
    var L_MigDialAddCommands2_Text = "��������һ����ô��(&W)";

    g_AgentCharacter.Commands.Add("Agent_MigDialAboutThisStep", L_MigDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_MigDialWhatToDoNext", L_MigDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_MigDialAboutThisStep()
{
    var L_MigDialAboutThisStep1_Text = "�ڴ�����£�Windows ��Ҫ������ѵ绰��";
    Agent_Speak(L_MigDialAboutThisStep1_Text);

    var L_MigDialAboutThisStep2_Text = "�⽫������ʹ�øü���������е� Internet �ʻ���";
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
    
    var L_MigDialWhatToDoNext1_Text = "��������һ������ť��ʼ���š�";
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

    var L_MigDialWhatToDoNext2_Text = "���ߣ��������������һ���裬�뵥������������ť��";
    Agent_Speak(L_MigDialWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}





function Agent_MigListAddCommands() 
{
    
    
    
	var L_MigListAddCommands1_Text = "��������һ����ô��(&T)";
	var L_MigListAddCommands2_Text = "��������һ����ô��(&W)";
	
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
    var L_MigListAboutThisStep1_Text = "�ڸ���Ļ�ϣ�������ѡ������ʹ�õ� Internet �����ṩ��(���Ϊ ISP)��";
    Agent_Speak(L_MigListAboutThisStep1_Text);

    var L_MigListAboutThisStep2_Text = "�⽫������ʹ�øü���������е� Internet �ʻ���";
    Agent_Speak(L_MigListAboutThisStep2_Text);
}

function Agent_MigListWhatToDoNext()
{
    Agent_GestureAtElement(g.selISPDropList,"Left");
    
    var L_MigListWhatToDoNext1_Text = "�����б��е���Ŀ��ѡ������ \\map=Internet\\ �����ṩ�̡�";
    Agent_Speak(L_MigListWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_MigListWhatToDoNext2_Text = "������ķ����ṩ��û�����ڴ˱��У������б��϶˵���\"�ҵ� ISP ���ڴ��б���\"��";
    Agent_Speak(L_MigListWhatToDoNext2_Text);

    var L_MigListWhatToDoNext3_Text = "�������� ISP ��ϵ�Ի�ȡ�������ڴ˼���������´��� Internet �ʻ���";
    Agent_Speak(L_MigListWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_MigListWhatToDoNext4_Text = "Ȼ�󵥻�����һ������ť������";
    Agent_Speak(L_MigListWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigPageAddCommands() 
{
	var L_MigPageAddCommands1_Text = "��������һ����ʲô(&N)";
	var L_MigPageAddCommands2_Text = "�������йظ���Ļ����Ϣ(&S)";
	var L_MigPageAddCommands3_Text = "����������ƶ�����һ��Ļ(&M)";
	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_WhatToDoNext", L_MigPageAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_AboutThisStep", L_MigPageAddCommands2_Text);
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_HowToMoveOn", L_MigPageAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_MigPageCommand_WhatToDoNext() {
		
	var L_MigPageWhatToDoNext1_Text = "������ɸ���Ļ��";
	Agent_Speak(L_MigPageWhatToDoNext1_Text);
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
			
	var L_MigPageWhatToDoNext2_Text = "�뵥������һ������ť��";
	Agent_Speak(L_MigPageWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}

function Agent_MigPageCommand_AboutThisStep() 
{
	var L_MigPageAboutThisStep1_Text = "�ڸ���Ļ�ϣ����ǽ���ͼʹ�����з����ṩ���������� Internet �ʻ���";
	Agent_Speak(L_MigPageAboutThisStep1_Text);
	
	Agent_Play("Pleased");
	
	var L_MigPageAboutThisStep2_Text = "�밴�ո���Ļ�ϵ�˵��(������ \\map=Internet\\ �����ṩ���ṩ)���С�";
	Agent_Speak(L_MigPageAboutThisStep2_Text);
}

function Agent_MigPageCommand_HowToMoveOn() 
{
	var L_MigPageHowToMoveOn1_Text = "������ɸ���Ļ��";
	Agent_Speak(L_MigPageHowToMoveOn1_Text);		
			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

	var L_MigPageHowToMoveOn2_Text = "�뵥������һ������ť������";
	Agent_Speak(L_MigPageHowToMoveOn2_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPDialAddCommands() 
{
    var L_ISPDial1_Text = "��������һ����ô��(&T)";
    var L_ISPDial2_Text = "��һ���Ҹ���ʲô(&W)?";

    g_AgentCharacter.Commands.Add("Agent_ISPDialAboutThisStep", L_ISPDial1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDialWhatToDoNext", L_ISPDial2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPDialAboutThisStep()
{
    var L_ISPDialAboutThisStep1_Text = "�ڴ�����£�Windows ��Ҫ������ѵ绰��";
    Agent_Speak(L_ISPDialAboutThisStep1_Text);

    var L_ISPDialAboutThisStep2_Text = "�⽫Ϊ��ע��һ���µ� Internet �ʻ���";
    Agent_Speak(L_ISPDialAboutThisStep2_Text);

    var L_ISPDialAboutThisStep3_Text = "�뵥������һ������ť������";
    Agent_Speak(L_ISPDialAboutThisStep3_Text);
}

function Agent_ISPDialWhatToDoNext()
{
    var L_ISPDialWhatToDoNext1_Text = "�뵥������һ������ť������";
    Agent_Speak(L_ISPDialWhatToDoNext1_Text);

    var L_ISPDialWhatToDoNext2_Text = "�򵥻����������Լ����������ô˼�������� Internet��֮����������ʱ����...";
    Agent_Speak(L_ISPDialWhatToDoNext2_Text);
}




function Agent_DialToneAddCommands()
{
    var L_DialToneAddCommands1_Text = "��������һ����ô��(&T)";
    var L_DialToneAddCommands2_Text = "���������Ҫ�ƶ��ҵļ�������Ҹ���ô��(&A)?";
    var L_DialToneAddCommands3_Text = "��һ���Ҹ���ʲô(&W)?";

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
    var L_DialToneAboutThisStep1_Text = "Windows �޷���⵽��������";
    Agent_Speak(L_DialToneAboutThisStep1_Text);

    var L_DialToneAboutThisStep2_Text = "����������ԭ����ɡ�";
    Agent_Speak(L_DialToneAboutThisStep2_Text);

    var L_DialToneAboutThisStep3_Text = "��һ����鲢ȷ��������ĵ绰������ȷ�������ˡ�";
    Agent_Speak(L_DialToneAboutThisStep3_Text);

    var L_DialToneAboutThisStep4_Text = "�ڶ���ȷ����ʱû����ʹ�����ĵ绰��";
    Agent_Speak(L_DialToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneAboutThisStep5_Text = "Ȼ�󵥻����ز�����ť���½��в��š�";
    Agent_Speak(L_DialToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_DialToneHowToMove()
{
    var L_DialToneHowToMove1_Text = "�������Ҫ�ƶ�������������ӵ绰�ߣ���ȷ�ϵ�Դ�ѹرա�";
    Agent_Speak(L_DialToneHowToMove1_Text);

    var L_DialToneHowToMove2_Text = "���������������ʱ��Windows ����ӽ�������ʼִ�иù��̡�";
    Agent_Speak(L_DialToneHowToMove2_Text);
}

function Agent_DialToneWhatToDoNext()
{
    var L_DialToneWhatToDoNext1_Text = "���ȣ�����������绰�ߵ����ӣ�";
    Agent_Speak(L_DialToneWhatToDoNext1_Text);

    var L_DialToneWhatToDoNext2_Text = "Ȼ�󣬼�鲢ȷ����������ʹ�õ绰��";
    Agent_Speak(L_DialToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneWhatToDoNext3_Text = "Ȼ�󵥻����ز�����ť���½��в��š�";
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

    var L_DialToneWhatToDoNext4_Text = "���ߵ�������������ť�Լ�������ע��򼤻����� Windows XP��";
    Agent_Speak(L_DialToneWhatToDoNext4_Text);
    
    Agent_Play("RestPose");

    var L_DialToneWhatToDoNext5_Text = "�ڴ�֮����������ʱע�ᡣ";
    Agent_Speak(L_DialToneWhatToDoNext5_Text);
}



function Agent_CnnctErrAddCommands() 
{
    var L_CnnctErrAddCommands1_Text = "��������һ����ô��(&T)";
    var L_CnnctErrAddCommands2_Text = "��������ιرյȴ��绰(&O)?";
    var L_CnnctErrAddCommands3_Text = "��һ���Ҹ���ʲô(&W)?";

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
    var L_CnnctErrAboutThisStep1_Text = "����ȥע�����ĵĵ绰���жϡ�";
    Agent_Speak(L_CnnctErrAboutThisStep1_Text);

    var L_CnnctErrAboutThisStep2_Text = "����������ԭ����ɡ�";
    Agent_Speak(L_CnnctErrAboutThisStep2_Text);

    var L_CnnctErrAboutThisStep3_Text = "��һ��: ���ӿ��ܹ��ڣ��������Զ��жϡ�";
    Agent_Speak(L_CnnctErrAboutThisStep3_Text);

    var L_CnnctErrAboutThisStep4_Text = "�ڶ���: ����ʱ����������ʹ�����ĵ绰��";
    Agent_Speak(L_CnnctErrAboutThisStep4_Text);

    var L_CnnctErrAboutThisStep5_Text = "������: ������к��еȴ����񣬴�����ĵ绰���ܻ�ʹ�����жϡ�";
    Agent_Speak(L_CnnctErrAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrAboutThisStep6_Text = "������ĵ绰����������еȴ�����֪���رո÷���ĺ��룬�뽫������˴���";
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

    var L_CnnctErrAboutThisStep7_Text = "Ȼ�󣬵�������һ������ť�������ӡ�";
    Agent_Speak(L_CnnctErrAboutThisStep7_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrTurnOffCallWaiting()
{
    var L_CnnctErrTurnOffCallWaiting1_Text = "���ĵ绰����˾���Ը������رպ��еȴ��ĺ��롣";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting1_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrTurnOffCallWaiting2_Text = "�ڽ�������ʱ�����Ҫ�رպ��еȴ������뽫�˺�������˴���";
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

    var L_CnnctErrTurnOffCallWaiting3_Text = "Ȼ�󵥻�����һ������ť��";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrWhatToDoNext()
{
    var L_CnnctErrWhatToDoNext1_Text = "���ȣ�ȷ��������ʹ���������� \\map=Microsoft\\ ��ϵ�ĵ绰��";
    Agent_Speak(L_CnnctErrWhatToDoNext1_Text);

    var L_CnnctErrWhatToDoNext2_Text = "��Σ�������к��еȴ�������ʱ����رա�";
    Agent_Speak(L_CnnctErrWhatToDoNext2_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrWhatToDoNext3_Text = "Ҫ�رպ��еȴ������ڴ���������롣";
    Agent_Speak(L_CnnctErrWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_CnnctErrWhatToDoNext4_Text = "�����绰��������ǻ��ٴ��Զ����ú��еȴ���";
    Agent_Speak(L_CnnctErrWhatToDoNext4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrWhatToDoNext5_Text = "����������һ��ʱ���뵥������һ������ť��";
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

    var L_CnnctErrWhatToDoNext6_Text = "���ߵ�������������ť����ע����������в�����";
    Agent_Speak(L_CnnctErrWhatToDoNext6_Text);
    
    Agent_Play("RestPose");
}



function Agent_HandShakeAddCommands() 
{
    var L_HandShakeAddCommands1_Text = "��������һ����ô��(&T)";
    var L_HandShakeAddCommands2_Text = "��һ���Ҹ���ʲô(&W)?";

    g_AgentCharacter.Commands.Add("Agent_HandShakeAboutThisStep", L_HandShakeAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_HandShakeWhatToDoNext", L_HandShakeAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_HandShakeAboutThisStep()
{
    var L_HandShakeAboutThisStep1_Text = "Windows ��ʱ�޷����ӵ� \\map=Microsoft\\��";
    Agent_Speak(L_HandShakeAboutThisStep1_Text);

    var L_HandShakeAboutThisStep2_Text = "������ǵ绰��·̫æ�����ļ�����޷���绰��";
    Agent_Speak(L_HandShakeAboutThisStep2_Text);

    var L_HandShakeAboutThisStep3_Text = "���Եȴ������ӡ�";
    Agent_Speak(L_HandShakeAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_HandShakeAboutThisStep4_Text = "Ȼ�󵥻����ز�����ť�������ӡ�";
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
    
    var L_HandShakeWhatToDoNext1_Text = "�ȴ������Ӻ󵥻����ز�����ť��";
    Agent_Speak(L_HandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_HandShakeWhatToDoNext2_Text = "������Ѿ������˼��Σ��������ļ������������ϵ��";
    Agent_Speak(L_HandShakeWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_HandShakeWhatToDoNext3_Text = "���ߵ�������������ť��������ע�����ļ������";
    Agent_Speak(L_HandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_NoAnswerAddCommands() 
{
    var L_NoAnswerAddCommands1_Text = "��������һ����ô��(&T)";
    var L_NoAnswerAddCommands2_Text = "����������绰���벻��ȷ���Ҹ���ô��(&A)?";
    var L_NoAnswerAddCommands3_Text = "��һ���Ҹ���ʲô(&W)?";

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
    var L_NoAnswerAboutThisStep1_Text = "������ĵ绰û��Ӧ��";
    Agent_Speak(L_NoAnswerAboutThisStep1_Text);

    var L_NoAnswerAboutThisStep2_Text = "����绰�����Ƿ���ȷ��";
    Agent_Speak(L_NoAnswerAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_NoAnswerAboutThisStep3_Text = "�����������û�����⣬�ȴ������ӣ�Ȼ�󵥻����ز�����ť����һ�Ρ�";
    Agent_Speak(L_NoAnswerAboutThisStep3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.edtPhoneNumber,"Left");

    var L_NoAnswerAboutThisStep4_Text = "���ǣ�����˺��벻��ȷ���뵥���˴�����������";
    Agent_Speak(L_NoAnswerAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_NoAnswerAboutThisStep5_Text = "Ȼ�󵥻����ز�����ť��";
    Agent_Speak(L_NoAnswerAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.btnRestore,"Right");

    var L_NoAnswerAboutThisStep6_Text = "��������ԭ����ť�������Ի�ԭ \\map=Windows\\ ԭ����ͼ������ĺ��롣";
    Agent_Speak(L_NoAnswerAboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_NoAnswerWhatIfWrongNumber()
{
    var L_NoAnswerWhatIfWrongNumber1_Text = "����˵绰���벻��ȷ���뵥�����ı���";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber1_Text);

    var L_NoAnswerWhatIfWrongNumber2_Text = "��ʱ��˸������(�����)������ʾ�ڸÿ��С�";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber2_Text);

    var L_NoAnswerWhatIfWrongNumber3_Text = "��������ݽ�����ʾ�ڲ�����¡�";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber3_Text);

    var L_NoAnswerWhatIfWrongNumber4_Text = "�������ϵ����Ҽ�ͷ�����ƶ�����㡣";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber4_Text);

    var L_NoAnswerWhatIfWrongNumber5_Text = "������ʹ�� Delete ��ɾ�������֮����ַ���";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber5_Text);

    var L_NoAnswerWhatIfWrongNumber6_Text = "��ʹ�� Backspace ��ɾ�������֮ǰ���ַ���";
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
    
    var L_NoAnswerWhatToDoNext1_Text = "������Ѽ��˴��ĵ绰���벢�Ҹú�����ȷ���뵥�����ز�����ť�������ӡ�";
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

    var L_NoAnswerWhatToDoNext2_Text = "Ҫ�������У�����Ҫѡ���������ӻ��ʱ����ע�ᡣ";
    Agent_Speak(L_NoAnswerWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}



function Agent_PulseAddCommands() 
{

    var L_PulseAddCommands1_Text = "��������һ����ô��(&T)";
    var L_PulseAddCommands2_Text = "��һ���Ҹ���ʲô(&W)?";

    g_AgentCharacter.Commands.Add("Agent_PulseAboutThisStep", L_PulseAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_PulseWhatToDoNext", L_PulseAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_PulseAboutThisStep()
{
    var L_PulseAboutThisStep1_Text = "Windows �޷��������ĵ绰�Ƿ�ʹ����Ƶ�����岦�ŷ�ʽ��";
    Agent_Speak(L_PulseAboutThisStep1_Text);

    var L_PulseAboutThisStep2_Text = "Windows ��Ҫ֪�����ŷ�ʽ���ܼ�����";
    Agent_Speak(L_PulseAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseAboutThisStep3_Text = "�ڴ���Ļ�ϣ���ָ���绰�ߵĲ��ŷ�����";
    Agent_Speak(L_PulseAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PulseWhatToDoNext()
{
    var L_PulseWhatToDoNext1_Text = "�������ĵ绰����ʹ�õĲ��ŷ�ʽ����ߵİ�ɫԲȦ��";
    Agent_Speak(L_PulseWhatToDoNext1_Text);
    
    Agent_GestureAtElement(g.tone,"Left");

    var L_PulseWhatToDoNext2_Text = "������ĵ绰ʹ����Ƶ���ŷ�ʽ���뵥���˴���";
    Agent_Speak(L_PulseWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseWhatToDoNext3_Text = "���ߣ�������ĵ绰ʹ�����岦�ŷ�ʽ���뵥���˴���";
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

    var L_PulseWhatToDoNext4_Text = "Ȼ�󵥻�����һ������ť���½��в��š�";
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

    var L_PulseWhatToDoNext5_Text = "���ߵ�������������ť��������ע�����ļ������";
    Agent_Speak(L_PulseWhatToDoNext5_Text);
    
    Agent_Play("RestPose");
}





function Agent_TooBusyAddCommands() 
{
        var L_TooBusyAddCommands1_Text = "��������һ����ô��(&T)";
        var L_TooBusyAddCommands2_Text = "����������绰���벻��ȷ���Ҹ���ô��(&A)?";
        var L_TooBusyAddCommands3_Text = "��һ���Ҹ���ʲô(&W)?";

        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_AboutThisStep", L_TooBusyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatIfIncorrect", L_TooBusyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatToDoNext", L_TooBusyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_TooBusyCommand_AboutThisStep() 
{
    var L_TooBusyAboutThisStep1_Text = "������ĵ绰���Ի�ռ�ߡ�";
    Agent_Speak(L_TooBusyAboutThisStep1_Text);

    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyAboutThisStep2_Text = "���˺����Ƿ���ȷ��";
    Agent_Speak(L_TooBusyAboutThisStep2_Text);
        
    Agent_Play("RestPose");

    var L_TooBusyAboutThisStep3_Text = "���������ȷ�����Եȼ����ӣ�";
    Agent_Speak(L_TooBusyAboutThisStep3_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyAboutThisStep4_Text = "Ȼ�󵥻����ز�����ť���½��в��š�";
    Agent_Speak(L_TooBusyAboutThisStep4_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatIfIncorrect() 
{        
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect1_Text = "����˴��ĵ绰���벻��ȷ��";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("cb_altnumber"),"Left");
    
    var L_TooBusyPhoneNumberIncorrect2_Text = " �����˸�ѡ��";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_altnumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect3_Text = "���ڴ˴�������һ�����롣";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("cb_outsideline"),"Left");

    var L_TooBusyPhoneNumberIncorrect4_Text = "�������Ҫ����һ��������ܽ�ͨ���ߣ��뵥���˸�ѡ��";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect4_Text);

    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("edt_outsideline"),"Right");

    var L_TooBusyPhoneNumberIncorrect5_Text = "���ڴ˴�����˺��롣";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect5_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect6_Text = "������к��еȴ�������绰���ϲ����绰��";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect6_Text);

    var L_TooBusyPhoneNumberIncorrect7_Text = "�������ӵ�ͬʱ�������׹رպ��еȴ�����";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect7_Text);
        
    Agent_GestureAtElement(g.document.all("cb_callwaiting"),"Left");

    var L_TooBusyPhoneNumberIncorrect8_Text = "�����˸�ѡ��";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect8_Text);

    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_callwaiting"),"Right");

    var L_TooBusyPhoneNumberIncorrect9_Text = "���ڴ˴�����˴��롣";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect9_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect10_Text = "������ʹ����󣬺��еȴ�����ָ���";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect10_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyPhoneNumberIncorrect11_Text = "����������һ��ʱ�����ס�������ز�����ť��";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect11_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatToDoNext() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyWhatToDoNext1_Text = "������Ѽ��˴��ĵ绰���벢�Ҹú�����ȷ��";
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
    
     var L_TooBusyWhatToDoNext2_Text = "�������ز�����ť���½������ӡ�";
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

    var L_TooBusyWhatToDoNext3_Text = "���ߣ���������������ť�����˲��衣��ɰ�װ Windows ����������ʱע�ᡣ";
    Agent_Speak(L_TooBusyWhatToDoNext3_Text);
        
    Agent_Play("RestPose");
}



function Agent_ISPDToneAddCommands() 
{
    var L_ISPDToneAddCommands1_Text = "��������һ����ô��(&T)";
    var L_ISPDToneAddCommands2_Text = "�����Ҫ�ƶ������������ô��(&A)?";
    var L_ISPDToneAddCommands3_Text = "��������һ����ô��(&W)";

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
    var L_ISPDToneAboutThisStep1_Text = "Windows �޷���⵽��������";
    Agent_Speak(L_ISPDToneAboutThisStep1_Text);

    var L_ISPDToneAboutThisStep2_Text = "����������ԭ����ɡ�";
    Agent_Speak(L_ISPDToneAboutThisStep2_Text);

    var L_ISPDToneAboutThisStep3_Text = "���ȣ���鲢ȷ��������ĵ绰������ȷ�������ˡ�";
    Agent_Speak(L_ISPDToneAboutThisStep3_Text);

    var L_ISPDToneAboutThisStep4_Text = "��Σ�ȷ����ʱû����ʹ�����ĵ绰��";
    Agent_Speak(L_ISPDToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneAboutThisStep5_Text = "Ȼ�󵥻����ز�����ť���½��в��š�";
    Agent_Speak(L_ISPDToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPDToneHowToMove()
{
    var L_ISPDToneHowToMove1_Text = "�������Ҫ�ƶ�������������ӵ绰�ߣ���ȷ�ϵ�Դ�ѹرա�";
    Agent_Speak(L_ISPDToneHowToMove1_Text);

    var L_ISPDToneHowToMove2_Text = "���������������ʱ��Windows ����ӽ�������ʼִ�иù��̡�";
    Agent_Speak(L_ISPDToneHowToMove2_Text);
}

function Agent_ISPDToneWhatToDoNext()
{
    var L_ISPDToneWhatToDoNext1_Text = "���ȣ����������绰�ߵ����ӣ�";
    Agent_Speak(L_ISPDToneWhatToDoNext1_Text);

    var L_ISPDToneWhatToDoNext2_Text = "Ȼ�󣬼�鲢ȷ����������ʹ�õ绰��";
    Agent_Speak(L_ISPDToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneWhatToDoNext3_Text = "Ȼ�󵥻����ز�����ť���½��в��š�";
    Agent_Speak(L_ISPDToneWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_ISPCnErrAddCommands() {

        var L_ISPCnErrAddCommands1_Text = "��������һ����ʲô(&N)";
        var L_ISPCnErrAddCommands2_Text = "��������ιرյȴ��绰(&T)";
        var L_ISPCnErrAddCommands3_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_ISPCnErrAddCommands4_Text = "����������ƶ�����һ��Ļ(&M)";

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
        var L_ISPCnErrIntro1_Text = "���ӵ���װ Internet ����ĵ绰�ѱ��жϡ�";
        Agent_Speak(L_ISPCnErrIntro1_Text);

        Agent_MoveToElement(g.document.all("txtBullet1"),"Left");
        
        var L_ISPCnErrIntro2_Text = "����������ԭ����ɡ�";
        Agent_Speak(L_ISPCnErrIntro2_Text);

        var L_ISPCnErrIntro3_Text = "��һ��: ���ӿ��ܹ��ڣ��������Զ��жϡ�";
        Agent_Speak(L_ISPCnErrIntro3_Text);

        var L_ISPCnErrIntro4_Text = "�ڶ���: ����ʱ����������ʹ�����ĵ绰��";
        Agent_Speak(L_ISPCnErrIntro4_Text);

        var L_ISPCnErrIntro5_Text = "������: ������к��еȴ����񣬴�����ĵ绰���ܻ��ж����ӡ�";
        Agent_Speak(L_ISPCnErrIntro5_Text);

        Agent_GestureAtElement(g.document.all("Callwait"),"Left");

        var L_ISPCnErrIntro6_Text = "������ĵ绰��������ȴ��绰����֪���رո÷���ĺ��룬�뽫������˴���";
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

        var L_ISPCnErrIntro7_Text = "Ȼ�󵥻����ز�����ť�������ӡ�";
        Agent_Speak(L_ISPCnErrIntro7_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("txtBullet1"),"Left");

        var L_ISPCnErrWhatToDoNext1_Text = "������ѽ���������������ܵ����⣬";
        Agent_Speak(L_ISPCnErrWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPCnErrWhatToDoNext2_Text = "��ϣ�����½������ӣ�";
        Agent_Speak(L_ISPCnErrWhatToDoNext2_Text);

        var L_ISPCnErrWhatToDoNext3_Text = "�뵥�����ز�����ť�������ӡ�";
        Agent_Speak(L_ISPCnErrWhatToDoNext3_Text);
}

function Agent_ISPCnErrCommand_HowToTurnOffCallWaiting() 
{
        Agent_GestureAtElement(g.document.all("Callwait"),"Left");
        
        var L_ISPCnErrHowToTurnOffCallWaiting1_Text = "�ڽ�������ʱ�����Ҫ�رպ��еȴ�����";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting1_Text);

        var L_ISPCnErrHowToTurnOffCallWaiting2_Text = "���ڴ˴�������롣";
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

        var L_ISPCnErrHowToTurnOffCallWaiting3_Text = "Ȼ�󵥻����ز�����ť��";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_HowToMoveOn() 
{
        var L_ISPCnErrHowToMoveOn1_Text = "Ҫ����������Ҫѡ���������ӻ������ò��衣";
        Agent_Speak(L_ISPCnErrHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrHowToMoveOn2_Text = "�뵥�����ز�����ť�����½������ӡ�";
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

        var L_ISPCnErrHowToMoveOn3_Text = "�򵥻�����������ť���������������ӡ�";
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

        var L_ISPHandShakeAddCommands1_Text = "��������һ����ʲô(&N)";
        var L_ISPHandShakeAddCommands2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_ISPHandShakeAddCommands3_Text = "����������ƶ�����һ��Ļ(&M)";

        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_WhatToDoNext", L_ISPHandShakeAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_AboutThisScreen", L_ISPHandShakeAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_HowToMoveOn", L_ISPHandShakeAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPHandShakeIntro() {

}

function Agent_ISPHandShakeCommand_AboutThisScreen() 
{
        var L_ISPHandShakeIntro1_Text = "����ѡ�� Internet �����ṩ�̵����ʻ�����Ŀǰ�����ڡ�";
        Agent_Speak(L_ISPHandShakeIntro1_Text);

        var L_ISPHandShakeIntro2_Text = "�Ҳ�ȷ��ԭ��";
        Agent_Speak(L_ISPHandShakeIntro2_Text);

        var L_ISPHandShakeIntro3_Text = "���ǣ��������Եȼ����Ӻ��ز���";
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
        
        var L_ISPHandShakeIntro4_Text = "���߿��Դ�ʱ�������� Internet ����";
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

        var L_ISPHandShakeWhatToDoNext1_Text = "�Եȼ����Ӻ󵥻����ز�����ť��";
        Agent_Speak(L_ISPHandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeWhatToDoNext2_Text = "������Ѿ����Լ��Σ�";
        Agent_Speak(L_ISPHandShakeWhatToDoNext2_Text);
        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeWhatToDoNext3_Text = "�����Ե�������������ť�����ڴ�ʱ���� Internet �����������";
        Agent_Speak(L_ISPHandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPHandShakeCommand_HowToMoveOn() 
{
        var L_ISPHandShakeHowToMoveOn1_Text = "�Եȼ����Ӻ�";
        Agent_Speak(L_ISPHandShakeHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPHandShakeHowToMoveOn2_Text = "�������ز�����ť���³������ӡ�";
        Agent_Speak(L_ISPHandShakeHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeHowToMoveOn3_Text = "������Ѿ����Լ��Σ�";
        Agent_Speak(L_ISPHandShakeHowToMoveOn3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeHowToMoveOn4_Text = "������ͨ����������������ť�������� Internet �����������";
        Agent_Speak(L_ISPHandShakeHowToMoveOn4_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPInsAddCommands() {

        var L_ISPInsAddCommands1_Text = "��������һ����ʲô(&N)";
        var L_ISPInsAddCommands2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_ISPInsAddCommands3_Text = "����������ƶ�����һ��Ļ(&M)";

        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_WhatToDoNext", L_ISPInsAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_AboutThisScreen", L_ISPInsAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_HowToMoveOn", L_ISPInsAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPInsIntro() {

}

function Agent_ISPInsCommand_AboutThisScreen() 
{
        var L_ISPInsIntro1_Text = "�ܱ�Ǹ��Windows �޷�ͨ��ѡ���ķ����ṩ�����ӵ� Internet��";
        Agent_Speak(L_ISPInsIntro1_Text);

        var L_ISPInsIntro2_Text = "����� Web ��������� Internet ���ͺͽ��յ����ʼ�ʱ�������⣬";
        Agent_Speak(L_ISPInsIntro2_Text);

        var L_ISPInsIntro3_Text = "�벦�����ķ����ṩ�̼���֧�ֵ绰Ѱ�������";
        Agent_Speak(L_ISPInsIntro3_Text);
}

function Agent_ISPInsCommand_WhatToDoNext() 
{
        var L_ISPInsWhatToDoNext1_Text = "�뵥������һ������ť������";
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

        var L_ISPInsHowToMoveOn1_Text = "�뵥������һ������ť��";
        Agent_Speak(L_ISPInsHowToMoveOn1_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPNoAnwAddCommands() {

        var L_ISPNoAnwAddCommands1_Text = "��������һ����ʲô(&N)";
        var L_ISPNoAnwAddCommands2_Text = "����������绰���벻��ȷ���Ҹ���ô��(&P)";
        var L_ISPNoAnwAddCommands3_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_ISPNoAnwAddCommands4_Text = "����������ƶ�����һ��Ļ(&M)";

        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoNext", L_ISPNoAnwAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect", L_ISPNoAnwAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_AboutThisScreen", L_ISPNoAnwAddCommands3_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_HowToMoveOn", L_ISPNoAnwAddCommands4_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPNoAnwCommand_AboutThisScreen() 
{
        var L_ISPNoAnwIntro1_Text = "������ĵ绰û��Ӧ��";
        Agent_Speak(L_ISPNoAnwIntro1_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro2_Text = "����绰�����Ƿ���ȷ��";
        Agent_Speak(L_ISPNoAnwIntro2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwIntro3_Text = "���������ȷ�����Եȼ����ӣ�";
        Agent_Speak(L_ISPNoAnwIntro3_Text);

        var L_ISPNoAnwIntro4_Text = "Ȼ�󵥻����ز�����ť�������ӡ�";
        Agent_Speak(L_ISPNoAnwIntro4_Text);

        var L_ISPNoAnwIntro5_Text = "���ǣ�����绰���벻��ȷ��";
        Agent_Speak(L_ISPNoAnwIntro5_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro6_Text = "�뵥���˴���������б༭��";
        Agent_Speak(L_ISPNoAnwIntro6_Text);

        Agent_Play("RestPose");

        var L_ISPNoAnwIntro7_Text = "Ȼ�󵥻����ز�����ť��";
        Agent_Speak(L_ISPNoAnwIntro7_Text);
}

function Agent_ISPNoAnwCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwWhatToDoNext1_Text = "������Ѽ��˴��ĵ绰���벢�Ҹú�����ȷ��";
        Agent_Speak(L_ISPNoAnwWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwWhatToDoNext2_Text = "��׼�����½������ӣ�";
        Agent_Speak(L_ISPNoAnwWhatToDoNext2_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwWhatToDoNext3_Text = "�뵥�����ز�����ť��";
        Agent_Speak(L_ISPNoAnwWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwPhoneNumberIncorrect1_Text = "����˴��ĵ绰���벻��ȷ��";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect1_Text);

        var L_ISPNoAnwPhoneNumberIncorrect2_Text = "�뵥�����ı���";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwPhoneNumberIncorrect3_Text = "��ʱ��˸������(�����)������ʾ�ڸÿ��С�";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect3_Text);

        var L_ISPNoAnwPhoneNumberIncorrect4_Text = "��������ݽ�����ʾ�ڲ�����¡�";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect4_Text);

        var L_ISPNoAnwPhoneNumberIncorrect5_Text = "�������ϵ���������Ҽ�ͷ�����ƶ�����㡣";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect5_Text);

        var L_ISPNoAnwPhoneNumberIncorrect6_Text = "������ʹ�� Delete ��ɾ�������֮����ַ���";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect6_Text);

        var L_ISPNoAnwPhoneNumberIncorrect7_Text = "��ʹ�� Backspace ��ɾ�������֮ǰ���ַ���";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect7_Text);
}

function Agent_ISPNoAnwCommand_HowToMoveOn() 
{
        var L_ISPNoAnwHowToMoveOn1_Text = "Ҫ����������Ҫѡ���������ӻ����� Internet �������á�";
        Agent_Speak(L_ISPNoAnwHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwHowToMoveOn2_Text = "�������ز�����ť���½������ӡ�";
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

        var L_ISPNoAnwHowToMoveOn3_Text = "�򵥻�����������ť������ \\map=Internet\\ ����������ö�������";
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

        var L_ISPPhBsyAddCommands1_Text = "��������һ����ʲô(&N)";
        var L_ISPPhBsyAddCommands2_Text = "����������绰���벻��ȷ���Ҹ���ô��(&P)";
        var L_ISPPhBsyAddCommands3_Text = "��������һ����ô��(&T)";

        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoNext", L_ISPPhBsyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect", L_ISPPhBsyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_AboutThisScreen", L_ISPPhBsyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPPhBsyIntro() {

}

function Agent_ISPPhBsyCommand_AboutThisScreen() 
{
        var L_ISPPhBsyIntro1_Text = "Windows �޷����ӵ���ѡ��� \\map=Internet\\ ����Ӧ�̡�";
        Agent_Speak(L_ISPPhBsyIntro1_Text);

        var L_ISPPhBsyIntro2_Text ="�绰����ռ�ߣ����� Internet ����Ӧ�̿��������������⡣";
        Agent_Speak(L_ISPPhBsyIntro2_Text);

        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyIntro3_Text = "����绰�����Ƿ���ȷ��";
        Agent_Speak(L_ISPPhBsyIntro3_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro4_Text = "���������ȷ�����Եȼ����ӣ�";
        Agent_Speak(L_ISPPhBsyIntro4_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPPhBsyIntro5_Text = "Ȼ�󵥻����ز�����ť���²��š�";
        Agent_Speak(L_ISPPhBsyIntro5_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro6_Text = "���ǣ�����绰���벻��ȷ��";
        Agent_Speak(L_ISPPhBsyIntro6_Text);

        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyIntro7_Text = "�뵥���˴���ʹ�õ绰���е�����һ�����롣";
        Agent_Speak(L_ISPPhBsyIntro7_Text);

        Agent_Play("RestPose");

        var L_ISPPhBsyIntro8_Text = "Ȼ�󵥻����ز�����ť��";
        Agent_Speak(L_ISPPhBsyIntro8_Text);
}

function Agent_ISPPhBsyCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyWhatToDoNext1_Text = "������Ѿ�����˴˵绰����û���⣬";
        Agent_Speak(L_ISPPhBsyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");    
    
        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyWhatToDoNext2_Text = "������ѡ�񲦴���һ�����룬";
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

        var L_ISPPhBsyWhatToDoNext4_Text = "�������ز�����ť���½������ӡ�";
        Agent_Speak(L_ISPPhBsyWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_ISPPhBsyPhoneNumberIncorrect1_Text = "����˴��ĵ绰���벻��ȷ��";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

    var L_ISPPhBsyPhoneNumberIncorrect2_Text = "�뵥���˵�ѡ��ť������绰���е���һ�����롣";
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

    var L_ISPPhBsyPhoneNumberIncorrect3_Text = "��������������ʱ���뵥�����ز�����ť��";
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

    var L_FinishAddCommands1_Text = "��������һ����ô��(&T)";  
    var L_FinishAddCommands2_Text = "������������ע��(&O)?";    
    var L_FinishAddCommands3_Text = "�����������漤�� Windows(&D)?";    
    var L_FinishAddCommands4_Text = "���������ܷ��� Internet(&A)?";    
    var L_FinishAddCommands5_Text = "��һ���Ҹ���ʲô(&W)?";

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
    var L_FinishAboutThisStep1_Text = "��ϲ��! ���Ѿ���ɸý���!";
    Agent_Speak(L_FinishAboutThisStep1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishAboutThisStep2_Text = "Ҫ������ʼʹ�� Windows��ֻ�赥������ɡ���ť��";
    Agent_Speak(L_FinishAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_FinishAboutThisStep3_Text = "Ҫ���� Windows XP �м������ĵ������ܣ��뵥������ʼ���˵��ϵġ�������֧�֡���Ȼ���������������롰���Ρ� ��";
    Agent_Speak(L_FinishAboutThisStep3_Text);
}

function Agent_FinishHowToRegister() 
{
    var L_FinishHowToRegister1_Text = "������ڴ˹��̵���Щʱ��������ע�ᣬ��������ʱ�ڡ���ʼ���˵����������С������� regwiz /r��";
    Agent_Speak(L_FinishHowToRegister1_Text);
        
    var L_FinishHowToRegister2_Text = "�����������Щ���裬�뵥������ʼ���˵��ϵġ�������֧�֡����Ա��Ա��������Ĵ𰸺������м�ֵ����Ϣ��";
    Agent_Speak(L_FinishHowToRegister2_Text);
}

function Agent_FinishHowToActivate() 
{
    var L_FinishHowToActivate1_Text = "������ڴ˹��̵���Щʱ�������˼���� Windows ��������ÿ����������һ��СС����ʾ��";
    Agent_Speak(L_FinishHowToActivate1_Text);
        
    var L_FinishHowToActivate2_Text = "��������ָ����ʱ���ڼ��� \\map=Windows\\ ���ܼ���ʹ������";
    Agent_Speak(L_FinishHowToActivate2_Text);

    var L_FinishHowToActivate3_Text = "�������ȴ����ѣ��������ڡ���ʼ���˵��ϵ��������� Windows�������С���Ʒ�����򵼡���";
    Agent_Speak(L_FinishHowToActivate3_Text);

    var L_FinishHowToActivate4_Text = "�����������Щ���裬�뵥������ʼ���˵��ϵġ�������֧�֡����Ա��������Ĵ𰸺������м�ֵ����Ϣ��";
    Agent_Speak(L_FinishHowToActivate4_Text);
}

function Agent_FinishHowToAccessInternet() 
{
    var L_FinishHowToAccessInternet1_Text = "������Ѿ����ô˼��������     Internet������ Windows ����ġ���ʼ���˵��ϵ��� Internet��";
    Agent_Speak(L_FinishHowToAccessInternet1_Text);
        
    var L_FinishHowToAccessInternet2_Text = "�����̨�������δ�� Internet ���ӣ�Internet �����򵼽�����֡�";
    Agent_Speak(L_FinishHowToAccessInternet2_Text);

    var L_FinishHowToAccessInternet3_Text = "���մ��򵼵Ĳ������ӵ� \\map=Internet\\��";
    Agent_Speak(L_FinishHowToAccessInternet3_Text);
}

function Agent_FinishWhatToDoNext() 
{
    var L_FinishWhatToDoNext1_Text = "���Ѿ������ļ��������ɰ�װ   Microsoft Windows XP!";
    Agent_Speak(L_FinishWhatToDoNext1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishWhatToDoNext2_Text = "ֻ�赥������ɡ���ť��";
    Agent_Speak(L_FinishWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_FinishWhatToDoNext3_Text = "Ҫ���� Windows XP �м������ĵ������ܣ��뵥������ʼ���˵��ϵġ�������֧�֡���Ȼ���������������롰���Ρ� ��";
    Agent_Speak(L_FinishWhatToDoNext3_Text);

    var L_FinishWhatToDoNext4_Text = "�뾡������ Microsoft Windows \\map=XP!\\";
    Agent_Speak(L_FinishWhatToDoNext4_Text);
}






function Agent_MouseTutAddCommands() {

        var L_MouseTutMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_MouseTutMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_MouseTutMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

        
        
        

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

        var L_MouseTutIntroTellMeWhatToDoNext1_Text = "Ҫ��ʼѧϰ���ʹ����꣬�뵥�����̡̳���ť��";
        Agent_Speak(L_MouseTutIntroTellMeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutTellMeAboutThisScreen() 
{
        var L_MouseTutTellMeAboutThisScreen1_Text = "����Ļ�ǰ������˽����ʹ�ü��������ϵ����Ļ������Ļ��";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen1_Text);

        var L_MouseTutTellMeAboutThisScreen2_Text = "������ѡ������ý̳̣�";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen2_Text);

        var L_MouseTutTellMeAboutThisScreen3_Text = "����������Ѿ���ʹ����꣬�����������ý̡̳�";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen1_Text = "Ҫ��ʼѧϰ���ʹ����꣬�뵥�����̡̳���ť��";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text = "�򵥻�����һ���������ý̡̳�";
        Agent_Speak(L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_MouseTutAAddCommands() {

        var L_MouseTutAMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_MouseTutAMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_MouseTutAMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeWhatToDoNext", L_MouseTutAMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeAboutThisScreen", L_MouseTutAMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeHowToMoveToNextScreen", L_MouseTutAMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutATellMeWhatToDoNext() 
{
        var L_MouseTutAWhatToDoNext1_Text = "�����ƶ�����Ա��˽�ָ���������Ļ���ƶ���";
        Agent_Speak(L_MouseTutAWhatToDoNext1_Text);

        var L_MouseTutAWhatToDoNext2_Text = "��ȷ����ƽ���ı������ƶ���ꡣ";
        Agent_Speak(L_MouseTutAWhatToDoNext2_Text);
}

function Agent_OnMouseTutATellMeAboutThisScreen() 
{

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutATellMeAboutThisScreen1_Text = "����Ļ��ʾ���ʹ���������Ļ���ƶ�ָ�롣";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutATellMeAboutThisScreen2_Text = "��������������ҡ���ǰ������ƶ����ɡ�";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen2_Text);

        var L_MouseTutATellMeAboutThisScreen3_Text = "���Գ���һ��!";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen3_Text);
}

function Agent_OnMouseTutATellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutBAddCommands() {

        var L_MouseTutBMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_MouseTutBMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_MouseTutBMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeWhatToDoNext", L_MouseTutBMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeAboutThisScreen", L_MouseTutBMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeHowToMoveToNextScreen", L_MouseTutBMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutBTellMeWhatToDoNext() 
{
        var L_MouseTutBWhatToDoNext1_Text = "����̧����겢�����ƶ�������λ�á�";
        Agent_Speak(L_MouseTutBWhatToDoNext1_Text);

        var L_MouseTutBWhatToDoNext2_Text = "Ȼ�������������ƶ���";
        Agent_Speak(L_MouseTutBWhatToDoNext2_Text);
}

function Agent_OnMouseTutBTellMeAboutThisScreen() 
{
        var L_MouseTutBTellMeAboutThisScreen1_Text = "����Ļ��ʾ���ƶ��ռ䲻��ʱ��ε�����ꡣ";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen1_Text);

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutBTellMeAboutThisScreen2_Text = "��������겢�����ƶ������ʵ�λ�ü��ɡ�";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen2_Text);

        Agent_Play("RestPose");

        var L_MouseTutBTellMeAboutThisScreen3_Text = "������������ƶ�ʱ��ָ�뽫�������ƶ�����һ�¡�";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen3_Text);

        var L_MouseTutBTellMeAboutThisScreen4_Text = "ע��: ��ƽ�������ƶ����ʱ��ָ��Ż��ƶ�!";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutBTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutCAddCommands() {

        var L_MouseTutCMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_MouseTutCMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_MouseTutCMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeWhatToDoNext", L_MouseTutCMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeAboutThisScreen", L_MouseTutCMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeHowToMoveToNextScreen", L_MouseTutCMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_MouseTutCIntro() {
        
}

function Agent_OnMouseTutCTellMeWhatToDoNext() 
{
        var L_MouseTutCWhatToDoNext1_Text = "�����ƶ����ʹָ���ڸ���Ļ��ͼ�ΰ�ť���ƶ���";
        Agent_Speak(L_MouseTutCWhatToDoNext1_Text);
}

function Agent_OnMouseTutCTellMeAboutThisScreen() 
{
        var L_MouseTutCTellMeAboutThisScreen1_Text = "����Ļʹ���ܹ���ϰ����ƶ����ָ�롣";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutCTellMeAboutThisScreen2_Text = "ʹ�����ʹָ����ͼ�ΰ�ť�Ͻ����ƶ���";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutCTellMeAboutThisScreen3_Text = "ע��: ��ָ���ڰ�ť���ƶ�ʱ����ť��ۻᷢ���ı�!";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen3_Text);

        var L_MouseTutCTellMeAboutThisScreen4_Text = "���ƿ�ָ��ʱ����ť���ָ�ԭ����";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutCTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutDAddCommands() {

        var L_MouseTutDMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_MouseTutDMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_MouseTutDMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeWhatToDoNext", L_MouseTutDMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeAboutThisScreen", L_MouseTutDMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeHowToMoveToNextScreen", L_MouseTutDMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutDTellMeWhatToDoNext() 
{
        var L_MouseTutDWhatToDoNext1_Text = "���Ե�����������";
        Agent_Speak(L_MouseTutDWhatToDoNext1_Text);
}

function Agent_OnMouseTutDTellMeAboutThisScreen() 
{
        var L_MouseTutDTellMeAboutThisScreen1_Text = "�ò������̳��ܹ�ʹ���˽���ε�����ꡣ";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen1_Text);

        var elem = g.document.all("image");

        Agent_MoveToElement(elem, "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen2_Text = "Ҫѡ����Ļ�ϵ���Ŀ����ʹ����꽫ָ���ƶ�����Ŀ�ϣ�";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen2_Text);

        Agent_GestureAtElement(g.document.all("image"), "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen3_Text = "Ȼ����մ˴��������²��ͷ���갴ť��";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutDTellMeAboutThisScreen4_Text = "���Ϊ����!";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutDTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutEAddCommands() {

        var L_MouseTutEMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_MouseTutEMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_MouseTutEMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeWhatToDoNext", L_MouseTutEMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeAboutThisScreen", L_MouseTutEMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeHowToMoveToNextScreen", L_MouseTutEMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutETellMeWhatToDoNext() 
{
        var L_MouseTutEWhatToDoNext1_Text = "�ڸ���Ļ��ͼ�ΰ�ť����ϰ������������";
        Agent_Speak(L_MouseTutEWhatToDoNext1_Text);
}

function Agent_OnMouseTutETellMeAboutThisScreen() 
{
        var L_MouseTutETellMeAboutThisScreen1_Text = "����Ļ�ܹ�ʹ����ϰ��굥����";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutETellMeAboutThisScreen2_Text = "ʹ�����ָ��һ��ͼ�ΰ�ť��";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutETellMeAboutThisScreen3_Text = "��������������";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen3_Text);

        var L_MouseTutETellMeAboutThisScreen4_Text = "Ȼ��ʹ������ͼƬ������ϰ��";
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

        var L_MouseTutFMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_MouseTutFMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_MouseTutFMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

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
        var L_MouseTutFTellMeAboutThisScreen1_Text = "�ü���! ";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen1_Text);

        var L_MouseTutFTellMeAboutThisScreen2_Text = "��ĿǰΪֹ�����Ѿ��˽����ʹ��������ָ��򵥻�������";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen2_Text);

        var L_MouseTutFTellMeAboutThisScreen3_Text = "����������ϰʹ����Щ������ \\map=Windows\\ ����ҳ������������н���������";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen3_Text);

        var L_MouseTutFTellMeAboutThisScreen4_Text = "�������׼���������뵥������һ������";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutFTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutGAddCommands() {

        var L_MouseTutGMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_MouseTutGMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_MouseTutGMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeWhatToDoNext", L_MouseTutGMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeAboutThisScreen", L_MouseTutGMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeHowToMoveToNextScreen", L_MouseTutGMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutGPreDisplayMenu() {

        if (g.btnNext.disabled) {

                var L_MouseTutGMenuCommand4_Text = "�����ҡ���һ������ť�����õ�ԭ��(&W)";

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
        var L_MouseTutGWhyNextNotAvailable1_Text = "������δѡ��һ�����У�����һ������ť�����á�";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable1_Text);

		Agent_GestureAtElement(g.document.all("selCity"),"LeftCenter");

        var L_MouseTutGWhyNextNotAvailable2_Text = "���������ȵ���ĳ�����С�";
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

        var L_MouseTutGWhyNextNotAvailable3_Text = "Ȼ����ܵ�������һ�����Լ�����";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeWhatToDoNext() {
		
		if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "RightCenter");

        var L_MouseTutGWhatToDoNext1_Text = "�뵥�����¼�ͷ���������б�";
        Agent_Speak(L_MouseTutGWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

		if (g.document.dir == "rtl")
			Agent_Play("RestPose");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGWhatToDoNext2_Text = "Ȼ�󵥻���������ѡ��һ�����С�";
        Agent_Speak(L_MouseTutGWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutGWhatToDoNext3_Text = "Ȼ���Ե����б��е���������!";
        Agent_Speak(L_MouseTutGWhatToDoNext3_Text);

        Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
}

function Agent_OnMouseTutGTellMeAboutThisScreen() {
        var L_MouseTutGTellMeAboutThisScreen1_Text = "�ڸ���Ļ�ϣ���������ϰ����ѡ���б��е���Ŀ��";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGTellMeAboutThisScreen2_Text = "���������б��еĳ���ʱ��";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");
		
        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("imgTable"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("imgTable"), "RightCenter");

        var L_MouseTutGTellMeAboutThisScreen3_Text = "�˴�����ʾ�ó��е�ͼƬ��";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeHowToMoveToNextScreen() {

        if (g.btnNext.disabled) {

                Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

                var L_MouseTutGHowToMoveToNextScreen1_Text = "����Ҫ�����˴��ĳ��У�";
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

                var L_MouseTutGHowToMoveToNextScreen2_Text = "Ȼ�󵥻�����һ������ť��";
                Agent_Speak(L_MouseTutGHowToMoveToNextScreen2_Text);
    
                Agent_Play("RestPose");
        }

        else
                MouseTut_HowToMoveToNextScreen();

}




function Agent_MouseTutHAddCommands() {

        var L_MouseTutHMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_MouseTutHMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_MouseTutHMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeWhatToDoNext", L_MouseTutHMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeAboutThisScreen", L_MouseTutHMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeHowToMoveToNextScreen", L_MouseTutHMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutHTellMeWhatToDoNext() {

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHWhatToDoNext1_Text = "�뵥��ѡ���Աߵ�ԲȦ��ѡ��һ��ѡ�";
        Agent_Speak(L_MouseTutHWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutHWhatToDoNext2_Text = "�⽫����ͼƬ����ʾ��ʽ��";
        Agent_Speak(L_MouseTutHWhatToDoNext2_Text);

        var L_MouseTutHWhatToDoNext3_Text = "�볢�Ե�������ѡ��!";
        Agent_Speak(L_MouseTutHWhatToDoNext3_Text);
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeAboutThisScreen() {
        var L_MouseTutHTellMeAboutThisScreen1_Text = "�ڸ���Ļ�ϣ���������ϰ��һ�ν�������һ��ѡ��ʱ���ѡ��ѡ�";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHTellMeAboutThisScreen2_Text = "���������˴���ԲȦʱ��";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("cityImg"), "LeftCenter");
        else
			Agent_GestureAtElement(g.document.all("cityImg"), "RightCenter");

        var L_MouseTutHTellMeAboutThisScreen3_Text = "������ͼƬ����ʾ��ʽ��";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutIAddCommands() {

        var L_MouseTutIMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_MouseTutIMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_MouseTutIMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeWhatToDoNext", L_MouseTutIMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeAboutThisScreen", L_MouseTutIMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeHowToMoveToNextScreen", L_MouseTutIMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutITellMeWhatToDoNext() {

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutIWhatToDoNext1_Text = "�����˴�һ������ѡ��鿴ͼƬЧ����";
        Agent_Speak(L_MouseTutIWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutIWhatToDoNext2_Text = "�ٴε���ѡ�����ȡ��ѡ��";
        Agent_Speak(L_MouseTutIWhatToDoNext2_Text);

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeAboutThisScreen() {
        var L_MouseTutITellMeAboutThisScreen1_Text = "��ʱ�����Դ�ѡ���ѡ����ѡ�";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen1_Text);

        var L_MouseTutITellMeAboutThisScreen2_Text = "�ڸ���Ļ�ϣ�������ѡ��ͬ��ͼƬ��ʾ��ʽ��";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen2_Text);

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutITellMeAboutThisScreen3_Text = "���赥���˴�ѡ���Աߵĸ�ѡ�򼴿ɡ�";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutJAddCommands() {

        var L_MouseTutJMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_MouseTutJMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_MouseTutJMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

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

        var L_MouseTutJWhatToDoNext1_Text = "�뵥���˴����ı���";
        Agent_Speak(L_MouseTutJWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutJWhatToDoNext2_Text = "Ȼ����������Ҫ��ʾ�ı��⡣";
        Agent_Speak(L_MouseTutJWhatToDoNext2_Text);
}

function Agent_OnMouseTutJTellMeAboutThisScreen() {
        var L_MouseTutJTellMeAboutThisScreen1_Text = "��ʱ������ʹ���Լ�������ʹѡ����˻���";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen1_Text);

        var L_MouseTutJTellMeAboutThisScreen2_Text = "�ڸ���Ļ�ϣ���������������ͼƬ���⡣";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen2_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(g.document.all("caption"), "Left");
		else
			Agent_GestureAtElement(g.document.all("CaptionLabel"), "Left");

        var L_MouseTutJTellMeAboutThisScreen3_Text = "���赥���˴����ı����������ı��⼴�ɡ�";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutJTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutKAddCommands() {

        var L_MouseTutKMenuCommand1_Text = "��������һ����ʲô(&N)";
        var L_MouseTutKMenuCommand2_Text = "�������йظ���Ļ����Ϣ(&S)";
        var L_MouseTutKMenuCommand3_Text = "����������ƶ�����һ��Ļ(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeWhatToDoNext", L_MouseTutKMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeAboutThisScreen", L_MouseTutKMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeHowToMoveToNextScreen", L_MouseTutKMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutKTellMeWhatToDoNext() {
        var L_MouseTutKWhatToDoNext1_Text = "ף����! ���Ѿ���ɸ����̳�!";
        Agent_Speak(L_MouseTutKWhatToDoNext1_Text);

        var L_MouseTutKWhatToDoNext2_Text = "�뵥������һ������ť��������һ����";
        Agent_Speak(L_MouseTutKWhatToDoNext2_Text);
}

function Agent_OnMouseTutKTellMeAboutThisScreen() {
        var L_MouseTutKTellMeAboutThisScreen1_Text = "̫����! ���ļ���ͼƬ�����!";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen1_Text);
        
        var L_MouseTutKTellMeAboutThisScreen2_Text = "���Ѿ���������̡̳�";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen2_Text);

        var L_MouseTutKTellMeAboutThisScreen3_Text = "�йذ����϶���������С��ʹ������Ҽ��ȼ��ܵĸ�����Ľ̳̣������״����� Windows ʱ���ġ���������";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutKTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function MouseTut_WhatToDoNext() 
{
        var L_MouseTutTellMeWhatToDoNext1_Text = "���赥������һ������ť������һ��Ļ�Ĳ�����";
        Agent_Speak(L_MouseTutTellMeWhatToDoNext1_Text);

        var L_MouseTutTellMeWhatToDoNext2_Text = "���ߣ���������������ť�������̵̳�ʣ�ಿ�֡�";
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

        var L_MouseTutTellMeHowToMoveToNextScreen1_Text = "�뵥������һ����������һ��Ļ��";
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

        var L_MouseTutTellMeHowToMoveToNextScreen2_Text = "�򵥻��������������ý̡̳�";
        Agent_Speak(L_MouseTutTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_2nicsAddCommands() 
{
    var L_2nicsMenuCommand1_Text = "��������һ����ô��(&T)";
    
    g_AgentCharacter.Commands.Add("Agent_On2nicsAboutThisStep", L_2nicsMenuCommand1_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_On2nicsAboutThisStep() 
{
    var L_2nicsAboutThisScreen1_Text = "����Ļ���ͽ����ļ�������ӵ� \\map=Internet\\ �Ķ��ַ�ʽ��";
	Agent_Speak(L_2nicsAboutThisScreen1_Text);
	
    var L_2nicsAboutThisScreen2_Text = "��ɰ�װ Windows ��������ѡ������ʹ�õ����ӡ�";
	Agent_Speak(L_2nicsAboutThisScreen2_Text);
}



function Agent_UserNameAddCommands() 
{
    var L_UserNameCommand1_Text = "��������һ����ô��(&T)";
    var L_UserNameCommand2_Text = "�ҵ����ֳ���������(&E)?";
    var L_UserNameCommand3_Text = "�ڴ�֮������θ����ҵ�����(&O)?";
    var L_UserNameCommand4_Text = "��һ���Ҹ���ʲô(&W)?";
    
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
    var L_UserNameAboutThisStep1_Text = "�ڴ���Ļ����������ʾ������ݣ�����������¼��Windows �Ϳ���ʶ������";
	Agent_Speak(L_UserNameAboutThisStep1_Text);
}

function Agent_OnUserNameWhereIsName() 
{
    var L_UserNameWhereIsName1_Text = "�������ֻ������ Windows ����ʱ�ġ���ӭʹ�á���Ļ ��";
	Agent_Speak(L_UserNameWhereIsName1_Text);
	
    var L_UserNameWhereIsName2_Text = "����¼������������ڡ���ʼ���˵���";
	Agent_Speak(L_UserNameWhereIsName2_Text);
	
    var L_UserNameWhereIsName3_Text = "������˵�¼�����ļ�����������ġ��ҵ��ĵ����ļ��У��������ֽ�������ڴ��ļ��е������ϡ�";
	Agent_Speak(L_UserNameWhereIsName3_Text);
	
    var L_UserNameWhereIsName4_Text = "���磬���ļ��л��ԡ�David ���ĵ������֣����������û���֪�����ļ���������ġ�";
	Agent_Speak(L_UserNameWhereIsName4_Text);
	
    var L_UserNameWhereIsName5_Text = "������������ʼ���˵��ϵġ�������塱���ٵ������û��ʻ�������������Ҳ��������û��б��ϡ�";
	Agent_Speak(L_UserNameWhereIsName5_Text);
}

function Agent_OnUserNameHowToChangeName() 
{
    var L_UserNameHowToChangeName1_Text = "��¼�� Windows ����������������������뵥������ʼ���˵��ϵġ�������塱��";
	Agent_Speak(L_UserNameHowToChangeName1_Text);
	
    var L_UserNameHowToChangeName2_Text = "Ȼ�󵥻����û��ʻ�����";
	Agent_Speak(L_UserNameHowToChangeName2_Text);
	
    var L_UserNameHowToChangeName3_Text = "�����ܸ�������������ʹ�ô˼�����������û���������";
	Agent_Speak(L_UserNameHowToChangeName3_Text);
}

function Agent_OnUserNameWhatToDoNext() 
{
    var L_UserNameWhatToDoNext1_Text = "��������һ������ť���������ӵ� \\map=Internet\\��";
	Agent_Speak(L_UserNameWhatToDoNext1_Text);
	
    var L_UserNameWhatToDoNext2_Text = "���ߵ������������������ӵ� \\map=Internet\\ ��������";
	Agent_Speak(L_UserNameWhatToDoNext2_Text);
}
