



var L_PhoneNumberLegit_Text = "�}�C�N���\�t�g������� ��@�R�s�[�z�b�g���C��";


var g_strRegionSetting = "";
var g_strKeyboardSetting = "";
var g_strLangSetting = " ";



function Agent_AddCommonCommands() 
{
    g_AgentCharacter.Commands.RemoveAll();

    var L_AddCommonCommands1_Text = "���j���[�����(&C)";

    g_AgentCharacter.Commands.Add("CloseMenu", L_AddCommonCommands1_Text);
        
    if (g_bAgentShowSpecialISPCommands) 
    {
        
		var L_AddCommonCommands2_Text = "�C���^�[�l�b�g �T�C���A�b�v�ɂ��Ēm�肽��(&A)";
		var L_AddCommonCommands3_Text = "�C���^�[�l�b�g �T�C���A�b�v���ĂъJ�n����(&R)";
		var L_AddCommonCommands4_Text = "�C���^�[�l�b�g �T�C���A�b�v���ȗ�����(&S)";

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
        var L_AddAssistantanceCommand1_Text = "�������Ƃ��̖₢���킹��ɂ��Ēm�肽��(&F)";       

        g_AgentCharacter.Commands.Add("Agent_OnCommand_AboutAssistance", L_AddAssistantanceCommand1_Text);
    }
}

function Agent_OnCommand_AboutAssistance() 
{

    Agent_StopAll();

    var L_AboutAssistance1_Text = "%s �̃R���s���[�^�̐������ɂ��₢���킹���������B";
    var re = /%s/i;
    var L_AboutAssistance2_Text = "�R���s���[�^�̐������ɂ��₢���킹���������B";

    
    

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
            Agent_Speak(L_AboutAssistance2_Text);
    else
            Agent_Speak(L_AboutAssistance1_Text.replace(re, strPhoneNumber));

    Agent_Play("ReadReturn");
}

function Agent_AddWhatToDoNextCommand() 
{
    var L_AddWhatToDoNextCommand1_Text = "���ɉ���������悢���m�肽��(&W)";
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

        var L_WhatToDoNext1_Text = "������ɂ́A[����] ���N���b�N���Ă��������B";
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

        var L_WhatToDoNext2_Text = "�O�̃X�e�b�v�ɖ߂�ɂ́A[�߂�] ���N���b�N���Ă��������B";
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

        var L_WhatToDoNext3_Text = "[�ȗ�] ���N���b�N���Ă��̃X�e�b�v�����ׂďȗ����邱�Ƃ��ł��܂��B";
        Agent_Speak(L_WhatToDoNext3_Text);
        
        Agent_Play("RestPose");
    }       
}

function Agent_DoSpecialISPCommand1() 
{
	
	
			
	Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
			
	var L_ISPSpecialTellMeAboutInternetSignup1_Text = "���݁A�C���^�[�l�b�g �A�J�E���g�ւ̃T�C���A�b�v���s���Ă��܂��B";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup1_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup2_Text = "��肪�����đ��s�ł��Ȃ��ꍇ�́A�����N���b�N���邩�AF1 �L�[�������Ă��������B";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup2_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup3_Text = "���j���[����A�ĂъJ�n���邩�A�ȗ����Ď��̉�ʂɐi�ނ���I���ł��܂��B";
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

    var L_EncourageNextButton1_Text = "[����] ���N���b�N���Ă��������B| [����] ���N���b�N���Ă��������B| [����] ���N���b�N���Ă��������B| [����] ���N���b�N���āA���̎菇�ɐi�݂܂��B";
    Agent_Speak(L_EncourageNextButton1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnF1() 
{
    var L_OnF1_Text = "������ł���? | ����`�����܂��傤��?";
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

    var L_PreWelcomeScript1_Text = "Windows XP �ւ悤����!";
    Agent_Speak(L_PreWelcomeScript1_Text);

    var L_PreWelcomeScript2_Text = "�R���s���[�^���Z�b�g�A�b�v���邨��`�������܂��B";
    Agent_Speak(L_PreWelcomeScript2_Text);

    var L_PreWelcomeScript3_Text = "�X�e�b�v���Ƃɐ������܂��B";
    Agent_Speak(L_PreWelcomeScript3_Text);
                
    Agent_MoveToElement(document.all("AssistImg"), "LeftCenter"); 
    
    

    var L_PreWelcomeScript4_Text = "�����K�v�ȂƂ��́A���̎����N���b�N���邩�AF1 �L�[�������Ă��������B";
    Agent_Speak(L_PreWelcomeScript4_Text);
    
    Agent_Play("PointLeft");

    var L_PreWelcomeScript5_Text = "����܂őҋ@���Ă��܂��B";
    Agent_Speak(L_PreWelcomeScript5_Text);
    
    Agent_Play("RestPose");

    g_AgentRequestHideImage = g_AgentCharacter.Hide();
}



function Agent_WelcomeAddCommands() 
{
    
    
    

    var L_WelcomeAddCommands1_Text = "���̏����ɂ��Ēm�肽��(&T)";
    var L_WelcomeAddCommands2_Text = "���ɉ���������悢���m�肽��(&W)";

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

    var L_WelcomeWhatToDoNext1_Text = "�n�߂鏀�����ł�����A[����] ���N���b�N���Ă��������B";
    Agent_Speak(L_WelcomeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnWelcomeCommand_AboutProcess() 
{
    Agent_StopAll();

    var L_AboutProcess1_Text = "�D�݂ɉ����ăR���s���[�^���Z�b�g�A�b�v���邽�߂̉�ʂ����ɕ\������Ă��܂��B";
    Agent_Speak(L_AboutProcess1_Text);

    var L_AboutProcess2_Text = "�e��ʂɂ́A���⎖���⑀��̎菇�Ȃǂ��\������܂��B";
    Agent_Speak(L_AboutProcess2_Text);

    var L_AboutProcess3_Text = "�����ŁA�菇�̊ȒP�ȃv���r���[�����Ă݂܂��傤�B";
    Agent_Speak(L_AboutProcess3_Text);

    var L_AboutProcess4_Text = "�܂��A�X�s�[�J�[�A�L�[�{�[�h�A���v�Ȃǂ̃R���s���[�^�̃n�[�h�E�F�A�����������삵�Ă��邱�Ƃ��m�F���܂��B";
    Agent_Speak(L_AboutProcess4_Text);

    var L_AboutProcess5_Text = "�܂��A�l�b�g���[�N�ɐ������ڑ�����Ă��邱�Ƃ��m�F���܂��B";
    Agent_Speak(L_AboutProcess5_Text);


    var L_AboutProcess6_Text = "2 �ԖڂɁA%1 �̎g�p�����������g�p�����_�񂪕\������܂��B";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess6_Text, g_ProductName));
    
    if (!window.external.get_RetailOOBE()) 
    {
    var L_AboutProcess7_Text = "�R���s���[�^�Ń��f���܂��̓l�b�g���[�N�ڑ����g�p����Ă���ꍇ�AMicrosoft �� %1 �Ƀ��[�U�[�o�^���āA���i�̍X�V����ŐV�����󂯎�邱�Ƃ��ł��܂��B";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess7_Text, g_OEMNameStr));
    } 
    else 
    {    
    var L_AboutProcess7_Text = "�R���s���[�^�Ń��f���܂��̓l�b�g���[�N�ڑ����g�p����Ă���ꍇ�AMicrosoft �Ƀ��[�U�[�o�^���A���i�̍X�V����ŐV�����󂯎�邱�Ƃ��ł��܂��B";
    Agent_Speak(L_AboutProcess7_Text);
    }       

    var L_AboutProcess8_Text = "�܂��A%1 �̔F�؂��m�F���Ă��g���̂��̂����K�i�ł��邱�Ƃ��m�F���邱�Ƃ��ł��܂��B";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess8_Text, g_ProductName));

    var L_AboutProcess9_Text = "3 �ԖڂɁA�C���^�[�l�b�g�ɐڑ����邨��`�������܂��B";
    Agent_Speak(L_AboutProcess9_Text); 

    var L_AboutProcess10_Text = "���̎菇���ȗ������ꍇ�́A��Ŏ����Őڑ����邱�Ƃ��ł��܂��B";
    Agent_Speak(L_AboutProcess10_Text);

    var L_AboutProcess11_Text = "4 �ԖڂɁA���̃R���s���[�^���g���e���[�U�[�p�ɃR���s���[�^���J�X�^�}�C�Y���邱�Ƃ��ł��܂��B";
    Agent_Speak(L_AboutProcess11_Text);

    var L_AboutProcess12_Text = "�ȏ�ł��B�ł́A�n�߂܂��傤�B";
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

    var L_AboutProcess13_Text = "�J�n����ɂ́A[����] ���N���b�N���Ă��������B";
    Agent_Speak(L_AboutProcess13_Text);
    
    Agent_Play("RestPose");
}


                                                       

function Agent_TimeZoneAddCommands() 
{
    var L_TimeZoneCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_TimeZoneCommand2_Text = "�^�C�� �]�[����I��������@���m�肽��(&O)";

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
        var L_TimeZoneMenuCommand3_Text = "�Ď��Ԃɂ��Ēm�肽��(&A)";

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
    var L_ExplainTimeZoneStep1_Text = "�R���s���[�^���g���ꏊ�̃^�C�� �]�[����I�����Ă��������B����ɂ��A�R���s���[�^�̎��v���ݒ肳��܂��B";
    Agent_Speak(L_ExplainTimeZoneStep1_Text);

    var L_ExplainTimeZoneStep2_Text = "���v���Ď��ԂɎ����I�ɍX�V����悤�ɐݒ肷�邱�Ƃ��ł��܂��B";
    Agent_Speak(L_ExplainTimeZoneStep2_Text);

    var L_ExplainTimeZoneStep3_Text = "�n�[�h�E�F�A�Ɋւ���Ō�̃X�e�b�v�ł��B";
    Agent_Speak(L_ExplainTimeZoneStep3_Text);

    var L_ExplainTimeZoneStep4_Text = "���̎g�p�����_��Ɉڂ�܂��B";
    Agent_Speak(L_ExplainTimeZoneStep4_Text);
    
}

function Agent_OnTimeZoneCommand_SelectZone() 
{
    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone1_Text = "���̈ꗗ�̃^�C�� �]�[���́A�W�����Ƃ̎��� (�v���X�܂��̓}�C�i�X) �ŕ\������܂��B";
    Agent_Speak(L_TellUserHowToSelectTimeZone1_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone2_Text = "�������N���b�N���邩�ATab �L�[�������Ă��������B";
    Agent_Speak(L_TellUserHowToSelectTimeZone2_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Right");

    var L_TellUserHowToSelectTimeZone3_Text = "�����̏��������{�^�����N���b�N���邩�A�L�[�{�[�h�̏㉺�̕����L�[���g���ă^�C�� �]�[�����X�N���[�����Ă��������B";
    Agent_Speak(L_TellUserHowToSelectTimeZone3_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone4_Text = "��]����^�C�� �]�[��������������A���̃^�C�� �]�[�����N���b�N���邩�A Enter �L�[�������Ă��������B";
    Agent_Speak(L_TellUserHowToSelectTimeZone4_Text);

    var L_TellUserHowToSelectTimeZone5_Text = "�I�������^�C�� �]�[���͋����\������܂��B";
    Agent_Speak(L_TellUserHowToSelectTimeZone5_Text);

    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserHowToSelectTimeZone6_Text = "�Ď��Ԃ��g���Ă���n��ɂ��Z�܂��̏ꍇ�́A�|�C���^�������ɒu���� 1 ��N���b�N���A���̃`�F�b�N�{�b�N�X���I���ɂ��Ă��������B";
    Agent_Speak(L_TellUserHowToSelectTimeZone6_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone7_Text = "�N�� 2 ��R���s���[�^�̎��v�������I�ɒ�������܂��B";
    Agent_Speak(L_TellUserHowToSelectTimeZone7_Text);
    
}

function Agent_OnTimeZoneCommand_DaylightSavings() 
{
    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserAboutDaylightOption1_Text = "�^�C�� �]�[���ɂ���ẮA��N�̂��鎞���Ɏ��v��i�܂�����A�x�点�邱�Ƃɂ���āA���Ǝ��Ԃ̍��ق𒲐����邱�Ƃ�����܂��B";
    Agent_Speak(L_TellUserAboutDaylightOption1_Text);
    
    Agent_Play("RestPose");

    var L_TellUserAboutDaylightOption2_Text = "�R���s���[�^�̎��v�������I�ɒ����������ꍇ�́A�|�C���^�������ɒu���� 1 ��N���b�N���A���̃`�F�b�N�{�b�N�X���I���ɂ��Ă��������B";
    Agent_Speak(L_TellUserAboutDaylightOption2_Text);

}



function Agent_OEMHWAddCommands() 
{
    var L_OEMHWMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_OEMHWMenuCommand2_Text = "�T�E���h �V�X�e���𓮍삷����@���m�肽��(&O)";
    var L_OEMHWMenuCommand3_Text = "�T�E���h���łȂ��ꍇ�̑Ώ��@���m�肽��(&A)";
    var L_OEMHWMenuCommand4_Text = "�������������@���m�肽��(&D)";

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
    var L_OEMHWAboutThisScreen1_Text = "����̓R���s���[�^�̃T�E���h �V�X�e�������삵�Ă��邱�Ƃ��m���߂��ʂł��B";
	  Agent_Speak(L_OEMHWAboutThisScreen1_Text);

    var L_OEMHWAboutThisScreen2_Text = "�T�E���h �V�X�e���́A�X�s�[�J�[�A�R���s���[�^���̃T�E���h �J�[�h�A�����Đ����� %1 �\�t�g�E�F�A����Ȃ�܂��B";
	  Agent_Speak(ApiObj.formatMessage(L_OEMHWAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnOEMHWHowDoIKnow() 
{
    var L_OEMHWHowDoIKnow1_Text = "�������������Ă���ꍇ�́A���삵�Ă���Ƃ������Ƃł��B";
	  Agent_Speak(L_OEMHWHowDoIKnow1_Text);

    var L_OEMHWHowDoIKnow2_Text = "�����������Ȃ��ꍇ�́A�X�s�[�J�[�̉��ʐݒ肪�Ⴗ���Ȃ����ǂ����m�F���Ă��������B";
	  Agent_Speak(L_OEMHWHowDoIKnow2_Text);

    var L_OEMHWHowDoIKnow3_Text = "����ŏC������Ȃ��ꍇ�́A�ق��̉\���𒲂ׂ܂��B";
	  Agent_Speak(L_OEMHWHowDoIKnow3_Text);
}

function Agent_OnOEMHWIsNotWorking() 
{
    var L_OEMHWIsNotWorking1_Text = "�ŏ��ɃX�s�[�J�[�̃X�C�b�`���I���ɂȂ��Ă��邱�Ƃ��m�F���Ă��������B";
	  Agent_Speak(L_OEMHWIsNotWorking1_Text);
	
    var L_OEMHWIsNotWorking2_Text = "�X�s�[�J�[�ɂ́A�I���ɂȂ��Ă��邱�Ƃ��������C�g���t���Ă�����̂�����܂��B";
	  Agent_Speak(L_OEMHWIsNotWorking2_Text);

    var L_OEMHWIsNotWorking3_Text = "2 �ԖڂɁA������������悤�ɉ��ʂ�ݒ肵�Ă��邱�Ƃ��m�F���Ă��������B";
	  Agent_Speak(L_OEMHWIsNotWorking3_Text);

    var L_OEMHWIsNotWorking4_Text = "����ł��܂������������Ȃ��ꍇ��...";
	  Agent_Speak(L_OEMHWIsNotWorking4_Text);

    var L_OEMHWIsNotWorking5_Text = "3 �ԖڂɁA�X�s�[�J�[���d���ɂȂ����Ă��āA�R���s���[�^�ɐ������ڑ�����Ă��邱�Ƃ��m�F���Ă��������B";
	  Agent_Speak(L_OEMHWIsNotWorking5_Text);
	
	  var L_OEMHWIsNotWorking6_Text = "�R���s���[�^�̃}�C�N�p�v���O�ƃX�s�[�J�[�p�v���O���ԈႦ�邱�Ƃ��悭����܂��B";
	  Agent_Speak(L_OEMHWIsNotWorking6_Text);

    var L_OEMHWIsNotWorking7_Text = "4 �ԖڂɁA�X�e���I �X�s�[�J�[�̏ꍇ�A�e�X�s�[�J�[��ڑ����Ă��邱�Ƃ��m�F���Ă��������B";
	  Agent_Speak(L_OEMHWIsNotWorking7_Text);

    var L_OEMHWIsNotWorking8_Text = "�Ō�ɁA����ł��܂������������Ȃ��ꍇ�́A�ʂ̃R���s���[�^�̃X�s�[�J�[���g���Ď����Ă��������B";
	  Agent_Speak(L_OEMHWIsNotWorking8_Text);

    var L_OEMHWIsNotWorking9_Text = "�ق��̃X�s�[�J�[�ŉ����������A�����̃X�s�[�J�[�ł͕������Ȃ��ꍇ�́A�X�s�[�J�[���������邩�A�܂��͏C������K�v������܂��B";
	  Agent_Speak(L_OEMHWIsNotWorking9_Text);
}

function Agent_OnOEMHWIndicateAnswer() 
{
	  Agent_GestureAtElement(g.document.all("Sound_Yes"), "Left");
    
    var L_OEMHWIndicateAnswer1_Text = "�����̍��ׂ̔����ۂɃ|�C���^�����킹�āA";
	  Agent_Speak(L_OEMHWIndicateAnswer1_Text);
    
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("radioNoSound"), "Left");

    var L_OEMHWIndicateAnswer2_Text = "1 ��N���b�N���Ă��������B";
	  Agent_Speak(L_OEMHWIndicateAnswer2_Text);
    
    Agent_Play("RestPose");

    var L_OEMHWIndicateAnswer3_Text = "�L�[�{�[�h���g���đI������ꍇ�́ATab �L�[���g���đI������I�v�V�������l�p�ň͂�ł���X�y�[�X �o�[�������Ă��������B";
	  Agent_Speak(L_OEMHWIndicateAnswer3_Text);
}




function Agent_CompNameAddCommands() 
{
    var L_CompNameMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_CompNameMenuCommand2_Text = "��ŃR���s���[�^�̖��O��ύX������@���m�肽��(&O)";

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
    var L_CompNameAboutThisScreen1_Text = "����́A�R���s���[�^�����w�肷���ʂł��B";
	  Agent_Speak(L_CompNameAboutThisScreen1_Text);

    var L_CompNameAboutThisScreen2_Text = "���̃R���s���[�^���l�b�g���[�N��̂ق��̃R���s���[�^�Ɛڑ����Ă���ꍇ�́A���̖��O�ɂ���ĔF������܂��B";
	  Agent_Speak(L_CompNameAboutThisScreen2_Text);
}

function Agent_OnCompNameHowToRename() 
{
    var L_CompNameHowToRename1_Text = "Windows �̃Z�b�g�A�b�v������������A[�X�^�[�g] ���j���[�� [�R���g���[�� �p�l��] ���N���b�N���Ă��������B";
	  Agent_Speak(L_CompNameHowToRename1_Text);

    var L_CompNameHowToRename2_Text = "[�p�t�H�[�}���X�ƃ����e�i���X] �� [�V�X�e��] �A�C�R�����N���b�N���āA[�R���s���[�^��] �^�u�̐����ɏ]���Ă��������B";
	  Agent_Speak(L_CompNameHowToRename2_Text);

    var L_CompNameHowToRename3_Text = "�����̃X�e�b�v��Y�ꂽ�ꍇ�́A[�X�^�[�g] ���j���[�� [�w���v�ƃT�|�[�g] ���N���b�N����Ƌ^��ɑ΂���񓚂�ق��̗L�v�ȏ��������邱�Ƃ��ł��܂��B";
	  Agent_Speak(L_CompNameHowToRename3_Text);
}




function Agent_SECURITYPASSAddCommands() 
{
    var L_SECURITYPASSMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_SECURITYPASSMenuCommand2_Text = "�p�X���[�h���쐬����œK�ȕ��@��m�肽��(&A)";

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
    var L_SECURITYPASSAboutThisScreen1_Text = "����́A���F����Ă��Ȃ��A�N�Z�X���炱�̃R���s���[�^��ی삷�邽�߂Ƀp�X���[�h���쐬�����ʂł��B";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen1_Text);

    var L_SECURITYPASSAboutThisScreen2_Text = "����: ���̃R���s���[�^���l�b�g���[�N��̂ق��̃R���s���[�^�Ɛڑ����Ă���ꍇ�ɁA\"Administrator\"�Ƃ��ă��O�I�����Ă��ėL���ȃp�X���[�h�������[�U�[�̓l�b�g���[�N�S�̂ɃA�N�Z�X���邱�Ƃ��ł��܂��B";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen2_Text);
    
    var L_SECURITYPASSAboutThisScreen3_Text = "�R���s���[�^�ƃl�b�g���[�N��ی삷�邽�߁AAdministrator �̃p�X���[�h�������Ƃ����������߂��܂��B";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen3_Text);
}

function Agent_OnSECURITYPASSBestWay() 
{
    var L_SECURITYPASSBestWay1_Text = "�p�X���[�h�̃Z�L�����e�B�����シ��ɂ́A�������A�啶���A����ѐ����̂����A���Ȃ��Ƃ� 2 �̗v�f���܂ޕK�v������܂��B";
	  Agent_Speak(L_SECURITYPASSBestWay1_Text);

    var L_SECURITYPASSBestWay2_Text = "�܂��A��胉���_���ɕ�����I�ԂƁA�p�X���[�h�̈��S���������܂��B";
	  Agent_Speak(L_SECURITYPASSBestWay2_Text);

    var L_SECURITYPASSBestWay3_Text = "�p�X���[�h�̒����� 127 �����܂łł��B";
	  Agent_Speak(L_SECURITYPASSBestWay3_Text);
    
    var L_SECURITYPASSBestWay4_Text = "�������AWindows 95 �܂��� Windows 98 ���g���Ă���R���s���[�^������l�b�g���[�N��� Windows ���g���Ă��āA�����̃R���s���[�^����l�b�g���[�N�Ƀ��O�I���������ꍇ�́A14 ������蒷���p�X���[�h�͎g��Ȃ��悤�ɂ��Ă��������B";
	  Agent_Speak(L_SECURITYPASSBestWay4_Text);
}



function Agent_JOINDOMAINAddCommands() 
{
    var L_JOINDOMAINMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_JOINDOMAINMenuCommand2_Text = "�h���C���ɂ��Ēm�肽��(&A)";
    var L_JOINDOMAINMenuCommand3_Text = "�h���C���ɎQ��������@��m�肽��(&O)"; 
    var L_JOINDOMAINMenuCommand4_Text = "���ɉ���������悢���m�肽��(&W)";


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
    var L_JOINDOMAINAboutThisScreen1_Text = "����́A���̃R���s���[�^���h���C���̃����o�ɂ��邩�A���Ȃ��������肷���ʂł��B";
    Agent_Speak(L_JOINDOMAINAboutThisScreen1_Text);

    var L_JOINDOMAINAboutThisScreen2_Text = "�h���C���ɎQ�����邱�Ƃ�I������ꍇ�A���̃R���s���[�^���Q������h���C���̖��O����͂���K�v������܂��B";
    Agent_Speak(L_JOINDOMAINAboutThisScreen2_Text);
}

function Agent_OnJOINDOMAINDifference() 
{
    var L_JOINDOMAINDifference1_Text = "�h���C���́A���j�b�g�Ƃ��ĊǗ�����Ă���R���s���[�^ �O���[�v�ł��B";
    Agent_Speak(L_JOINDOMAINDifference1_Text);
    
    var L_JOINDOMAINDifference2_Text = "���Ƃ��΁A�I�t�B�X�ɂ���R���s���[�^�����ׂĂ���h���C���ɒǉ����āA�����A�N�Z�X���������L������A�����v�����^�ɐڑ�������ł��܂��B";
    Agent_Speak(L_JOINDOMAINDifference2_Text);

    var L_JOINDOMAINDifference3_Text = "�I������I�v�V�������킩��Ȃ��ꍇ�́A[������] ��I������ [����] ���N���b�N���Ă��������B";
    Agent_Speak(L_JOINDOMAINDifference3_Text);
}

function Agent_OnJOINDOMAINHowToName() 
{
 	  Agent_GestureAtElement(g.document.all("radioYesDomain"), "Left");
 
    var L_JOINDOMAINHowToName1_Text = "�h���C���ɎQ������I�v�V�����̃`�F�b�N�{�b�N�X���I���ɂ�����A";
    Agent_Speak(L_JOINDOMAINHowToName1_Text);
      
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("textboxDomain"), "Left");
  
    var L_JOINDOMAINHowToName2_Text = "�I�v�V�����̉��̗��ɖ��O����͂ł��܂��B";
    Agent_Speak(L_JOINDOMAINHowToName2_Text);
      
    Agent_Play("RestPose");
  
    var L_JOINDOMAINHowToName3_Text = "�h���C���ɎQ������I�v�V������I�����Ȃ������ꍇ�́A���O����͂ł��܂���B";
    Agent_Speak(L_JOINDOMAINHowToName3_Text);
  
    var L_JOINDOMAINHowToName4_Text = "�����D�F�\���ɂȂ��Ă���̂́A�h���C���ɎQ������I�v�V������I������܂œ��͂ł��Ȃ����Ƃ������܂��B";
    Agent_Speak(L_JOINDOMAINHowToName4_Text);
  
    var L_JOINDOMAINHowToName5_Text = "���̃R���s���[�^���h���C���ɎQ��������ꍇ�́A�L���ȃh���C�������l�b�g���[�N�Ǘ��҂ɖ₢���킹�Ă��������B";
    Agent_Speak(L_JOINDOMAINHowToName5_Text);
  
    var L_JOINDOMAINHowToName6_Text = "�h���C���ɎQ�������Ȃ��ꍇ�́A���O���w�肷��K�v�͂���܂���B";
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
    
    var L_JOINDOMAINWhatToDoNext1_Text = "�I��������A[����] ���N���b�N���Ă��������B";
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
    
    var L_JOINDOMAINWhatToDoNext2_Text = "[�߂�] ���N���b�N���đO�̉�ʂɖ߂邱�Ƃ�I�����邱�Ƃ��ł��܂��B ";
    Agent_Speak(L_JOINDOMAINWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}




function Agent_JNDOM_AAddCommands() 
{
    var L_JNDOMAMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_JNDOMAMenuCommand2_Text = "���[�U�[���ƃp�X���[�h����͂�����@�ɂ��Ēm�肽��(&P)";
    var L_JNDOMAMenuCommand3_Text = "�h���C���ɂ��Ēm�肽��(&A)";
    var L_JNDOMAMenuCommand4_Text = "���ɉ���������悢���m�肽��(&W)";
    
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
    var L_JNDOM_A_AboutThisStep1_Text = "����́A���̃R���s���[�^���h���C���ɎQ�������錠�������郆�[�U�[�����ʂ����ʂł��B";
  	Agent_Speak(L_JNDOM_A_AboutThisStep1_Text);
}

function Agent_OnJNDOM_AHowToEnter() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_HowToEnter1_Text = "�����ɓ��͂��閼�O�́A�h���C���̂ق��̃R���s���[�^�Əd�����Ȃ��A�ŗL�̖��O����͂���K�v������܂��B";
    Agent_Speak(L_JNDOM_A_HowToEnter1_Text);
      
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_HowToEnter2_Text = "�����ɓ��͂���p�X���[�h�̓��[�U�[�̃A�J�E���g�̃p�X���[�h�ƈ�v����K�v������܂��B";
    Agent_Speak(L_JNDOM_A_HowToEnter2_Text);
      
    Agent_Play("RestPose");
    
    var L_JNDOM_A_HowToEnter3_Text = "�g���郆�[�U�[���ƃp�X���[�h���킩��Ȃ��ꍇ�́A�l�b�g���[�N�Ǘ��҂ɖ₢���킹�Ă��������B";
    Agent_Speak(L_JNDOM_A_HowToEnter3_Text);
}

function Agent_OnJNDOM_AWhatIsDomain() 
{
    var L_JNDOM_A_WhatIsDomain1_Text = "�h���C���́A���j�b�g�Ƃ��ĊǗ�����Ă���R���s���[�^ �O���[�v�ł��B";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain1_Text);
  	
    var L_JNDOM_A_WhatIsDomain2_Text = "���Ƃ��΁A�I�t�B�X�ɂ���R���s���[�^�����ׂĂ���h���C���ɒǉ����āA�����A�N�Z�X���������L������A�����v�����^�ɐڑ�������ł��܂��B";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain2_Text);
      
    Agent_Play("RestPose");		
}

function Agent_OnJNDOM_AWhatToDoNext() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_WhatToDoNext1_Text = "�����Ƀ��[�U�[������͂��A";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext1_Text);
      
    Agent_Play("RestPose");		
  	
    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_WhatToDoNext2_Text = "�����Ƀp�X���[�h����͂�����A";
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
    
    var L_JNDOM_A_WhatToDoNext3_Text = "[����] ���N���b�N���Ă��������B";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext3_Text);
      
    Agent_Play("RestPose");		
}



function Agent_ActivationAddCommands() 
{
    var L_ActivationMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_ActivationMenuCommand2_Text = "���C�Z���X�F�؂ɂ��Ēm�肽��(&M)";
    var L_ActivationMenuCommand3_Text = "��Ń��C�Z���X�F�؂̎葱�����s�����@���m�肽��(&O)";
    var L_ActivationMenuCommand4_Text = "�C���^�[�l�b�g�ɐڑ����Ă��Ȃ��ꍇ�Ƀ��C�Z���X�F�؂̎葱�����s�����@���m�肽��(&D)";
    var L_ActivationMenuCommand5_Text = "���C�Z���X�F�؂̎葱�����s��Ȃ��Ƃǂ��Ȃ邩�m�肽��(&A)";
    var L_ActivationMenuCommand6_Text = "���ɉ���������悢���m�肽��(&W)";

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
    
    var L_ActivationAboutThisScreen1_Text = "����� %1 �̃��C�Z���X�F�؂̎葱�����������s�����A��ōs���������߂��ʂł��B";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutThisScreen1_Text, g_ProductName));
    
    var L_ActivationAboutThisScreen2_Text = "��ōs���ꍇ�́A[�X�^�[�g] ���j���[���琻�i�̃��C�Z���X�F�؃E�B�U�[�h�����s�ł��܂��B";
    Agent_Speak(L_ActivationAboutThisScreen2_Text);
    
    var L_ActivationAboutThisScreen3_Text = "���C�Z���X�F�؂̎葱�����s�����Ƃ𑣂��m�F���b�Z�[�W�������u���ɕ\������܂��B";
    Agent_Speak(L_ActivationAboutThisScreen3_Text);
}

function Agent_OnActivationAboutActivation() 
{
    var L_ActivationAboutActivation1_Text = "��s����V�����f�r�b�g �J�[�h��N���W�b�g �J�[�h�����t�����Ƃ��ɁA�ʏ킻���̃J�[�h���g���n�߂�O�ɋ�s�ɃJ�[�h�́u�F�؁v���s�����Ƃ����߂��邱�Ƃ�����܂��B";
    Agent_Speak(L_ActivationAboutActivation1_Text);
    
    var L_ActivationAboutActivation2_Text = "�g�p�葱�������邱�Ƃɂ���āA���`�l�ȊO�̐l���J�[�h���g�p���邱�Ƃ�h���܂��B";
    Agent_Speak(L_ActivationAboutActivation2_Text);
    
    var L_ActivationAboutActivation3_Text = "%1 �̃��C�Z���X�F�؂͂���Ɠ����悤�Ȃ��̂ł��B�Ⴂ�́A���C�Z���X�F�؂��s���O�ɓ���̗L������ %2 ���g���邱�Ƃ��ł��邱�Ƃł��B";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationHowToActivateLater() 
{
    var L_ActivationHowToActivateLater1_Text = "���C�Z���X�F�؂��ȗ������ꍇ�́A%1 �f�X�N�g�b�v�ɐ����u���Ɋm�F���b�Z�[�W���\������܂��B";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationHowToActivateLater1_Text, g_ProductName));
    
    var L_ActivationHowToActivateLater2_Text = "[�X�^�[�g] ���j���[���� [Windows �̃��C�Z���X�F��] ���N���b�N���āAWindows �̃��C�Z���X�F�؃E�B�U�[�h�����s�ł��܂��B";
    Agent_Speak(L_ActivationHowToActivateLater2_Text);
    
    var L_ActivationHowToActivateLater3_Text = "�����̃X�e�b�v��Y�ꂽ�ꍇ�́A[�X�^�[�g] ���j���[�� [�w���v�ƃT�|�[�g] ���N���b�N���Ď���ɑ΂��铚����ق��̖𗧂����������Ă��������B";
    Agent_Speak(L_ActivationHowToActivateLater3_Text);
}

function Agent_OnActivationHowToActivateUnconnected() 
{
    Agent_GestureAtElement(g.rb_act_2, "Left");
    	
    var L_ActivationHowToActivateUnconnected1_Text = "[������] ��I�����Ă��������B";
    Agent_Speak(L_ActivationHowToActivateUnconnected1_Text);
    
    Agent_Play("RestPose");
    
    var L_ActivationHowToActivateUnconnected2_Text = "Windows �̃Z�b�g�A�b�v������������A[�X�^�[�g] ���j���[�� [Windows �̃��C�Z���X�F��] ���N���b�N���āAWindows �̃��C�Z���X�F�؃E�B�U�[�h�����s�ł��܂��B";
    Agent_Speak(L_ActivationHowToActivateUnconnected2_Text);
    
    var L_ActivationHowToActivateUnconnected3_Text = "�E�B�U�[�h�ɂ́A�d�b�Ń��C�Z���X�F�؂̎葱�����s�����߂̓d�b�ԍ����\������Ă��܂��B";
    Agent_Speak(L_ActivationHowToActivateUnconnected3_Text);
}

function Agent_OnActivationWhatHappensNoActivate() 
{
    var L_ActivationWhatHappensNoActivate1_Text = "���C�Z���X�F�؂̗L���������؂��܂� %1 ���g�����Ƃ��ł��܂��B";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate1_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate2_Text = "�������A���������g�����߂ɂ͗L���������؂����� %1 �̃��C�Z���X�F�؂̎葱�����s���K�v������܂��B";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate2_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate3_Text = "���C�Z���X�F�؂̗L���������؂ꂽ�ꍇ�ɂ́A%1 �����������g�����Ƃ͂ł��Ȃ��Ȃ�܂��B";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate3_Text, g_ProductName));
}

function Agent_OnActivationWhatToDoNext() 
{
    Agent_GestureAtElement(g.act_spn1, "Left");
    
    var L_ActivationWhatToDoNext1_Text = "���̎���ɑ΂��铚����I��������A";
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
            
    var L_ActivationWhatToDoNext2_Text = "[����] ���N���b�N���Ă��������B";
    Agent_Speak(L_ActivationWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");	
}



function Agent_ActivationErrorAddCommands() 
{
    var L_ActivationErrorMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_ActivationErrorMenuCommand2_Text = "���C�Z���X�F�؂ɂ��Ēm�肽��(&M)";
    var L_ActivationErrorMenuCommand3_Text = "��Ń��C�Z���X�F�؂̎葱�����s�����@���m�肽��(&O)";
    var L_ActivationErrorMenuCommand4_Text = "�C���^�[�l�b�g�ɐڑ����Ă��Ȃ��ꍇ�Ƀ��C�Z���X�F�؂̎葱�����s�����@���m�肽��(&D)";
    var L_ActivationErrorMenuCommand5_Text = "���C�Z���X�F�؂̎葱�����s��Ȃ��Ƃǂ��Ȃ邩�m�肽��(&A)";


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
    var L_ActivationErrorAboutThisScreen1_Text = "���̉�ʂ́A���C�Z���X�F�؂��I�����C���ōs���Ȃ��������߂ɕ\������Ă��܂��B";
	Agent_Speak(L_ActivationErrorAboutThisScreen1_Text);
	
    var L_ActivationErrorAboutThisScreen2_Text = ".%1 �̃Z�b�g�A�b�v������������A[�X�^�[�g] ���j���[�� [Windows �̃��C�Z���X�F��] ���N���b�N���� Windows �̃��C�Z���X�F�؃E�B�U�[�h�����s�ł��܂��B";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnActivationErrorAboutActivation() 
{
    var L_ActivationErrorAboutActivation1_Text = "��s����V�����f�r�b�g �J�[�h��N���W�b�g �J�[�h�����t�����Ƃ��ɁA�ʏ킻���̃J�[�h���g���n�߂�O�ɋ�s�ɃJ�[�h�́u�F�؁v���s�����Ƃ����߂��邱�Ƃ�����܂��B";
	Agent_Speak(L_ActivationErrorAboutActivation1_Text);
	
    var L_ActivationErrorAboutActivation2_Text = "�g�p�葱�������邱�Ƃɂ���āA���`�l�ȊO�̐l���J�[�h���g�p���邱�Ƃ�h���܂��B";
	Agent_Speak(L_ActivationErrorAboutActivation2_Text);
	
    var L_ActivationErrorAboutActivation3_Text = "%1 �̃��C�Z���X�F�؂͂���Ɠ����悤�Ȃ��̂ł��B�Ⴂ�́A���C�Z���X�F�؂̎葱�����s���O�ɓ���̓��� %2 ���g���邱�Ƃ��ł��邱�Ƃł��B";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationErrorHowToActivateLater() 
{
    var L_ActivationErrorHowToActivateLater1_Text = "���C�Z���X�F�؂��ȗ������ꍇ�́A%1 �f�X�N�g�b�v�ɐ����u���Ɋm�F���b�Z�[�W���\������܂��B";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationErrorHowToActivateLater2_Text = "[�X�^�[�g] ���j���[���� [Windows �̃��C�Z���X�F��] ���N���b�N���āAWindows �̃��C�Z���X�F�؃E�B�U�[�h�����s�ł��܂��B";
	Agent_Speak(L_ActivationErrorHowToActivateLater2_Text);
	
    var L_ActivationErrorHowToActivateLater3_Text = "�����̃X�e�b�v��Y�ꂽ�ꍇ�́A[�X�^�[�g] ���j���[�� [�w���v�ƃT�|�[�g] ���N���b�N���Ď���ɑ΂��铚����ق��̖𗧂����������Ă��������B";
	Agent_Speak(L_ActivationErrorHowToActivateLater3_Text);
}

function Agent_OnActivationErrorHowToActivateUnconnected() 
{
    var L_ActivationErrorHowToActivateUnconnected1_Text = "Windows �̃Z�b�g�A�b�v������������A[�X�^�[�g] ���j���[�� [Windows �̃��C�Z���X�F��] ���N���b�N���āAWindows �̃��C�Z���X�F�؃E�B�U�[�h�����s�ł��܂��B";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected1_Text);
	
    var L_ActivationErrorHowToActivateUnconnected2_Text = "�E�B�U�[�h�ɂ́A�d�b�Ń��C�Z���X�F�؂̎葱�����s�����߂̓d�b�ԍ����\������Ă��܂��B";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected2_Text);
}

function Agent_OnActivationErrorWhatHappensNoActivate() 
{
    var L_ActivationErrorWhatHappensNoActivate1_Text = "���C�Z���X�F�؂̗L���������؂��܂� %1 ���g�����Ƃ��ł��܂��B";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate2_Text = "�������A���������g�����߂ɂ͗L���������؂����� %1 �̃��C�Z���X�F�؂̎葱�����s���K�v������܂��B";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate3_Text = "���C�Z���X�F�؂̗L���������؂ꂽ�ꍇ�ɂ́A%1 �����������g�����Ƃ͂ł��Ȃ��Ȃ�܂��B";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_ActivationPrivacyPolicyAddCommands() 
{
    var L_ActivationPrivacyPolicyMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_ActivationPrivacyPolicyMenuCommand2_Text = "���C�Z���X�F�؂ɂ��Ēm�肽��(&M)";
    var L_ActivationPrivacyPolicyMenuCommand3_Text = "��Ń��C�Z���X�F�؂̎葱�����s�����@���m�肽��(&O)";
    var L_ActivationPrivacyPolicyMenuCommand4_Text = "�C���^�[�l�b�g�ɐڑ����Ă��Ȃ��ꍇ�Ƀ��C�Z���X�F�؂̎葱�����s�����@���m�肽��(&D)";
    var L_ActivationPrivacyPolicyMenuCommand5_Text = "���C�Z���X�F�؂̎葱�����s��Ȃ��Ƃǂ��Ȃ邩�m�肽��(&A)";


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
    var L_ActivationPrivacyPolicyAboutThisScreen1_Text = "���̉�ʂł́A%1 �̃��C�Z���X�F�؂̎葱�����s���Ƃ��Ƀv���C�o�V�[���ی삳�����@�ɂ��Đ������܂��B";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutThisScreen1_Text, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyAboutActivation() 
{
    var L_ActivationPrivacyPolicyAboutActivation1_Text = "��s����V�����f�r�b�g �J�[�h��N���W�b�g �J�[�h�����t�����Ƃ��ɁA�ʏ킻���̃J�[�h���g���n�߂�O�ɋ�s�ɃJ�[�h�́u�F�؁v���s�����Ƃ����߂��邱�Ƃ�����܂��B";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation1_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation2_Text = "�g�p�葱�������邱�Ƃɂ���āA���`�l�ȊO�̐l���J�[�h���g�p���邱�Ƃ�h���܂��B";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation2_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation3_Text = "%1 �̃��C�Z���X�F�؂͂���Ɠ����悤�Ȃ��̂ł��B�Ⴂ�́A���C�Z���X�F�؂��s���O�ɓ���̗L������ %2 ���g���邱�Ƃ��ł��邱�Ƃł��B";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyHowToActivateLater() 
{
    var L_ActivationPrivacyPolicyHowToActivateLater1_Text = "���C�Z���X�F�؂��ȗ������ꍇ�́A%1 �f�X�N�g�b�v�ɐ����u���Ɋm�F���b�Z�[�W���\������܂��B";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyHowToActivateLater2_Text = "[�X�^�[�g] ���j���[���� [Windows �̃��C�Z���X�F��] ���N���b�N���āAWindows �̃��C�Z���X�F�؃E�B�U�[�h�����s�ł��܂��B";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater2_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateLater3_Text = "�����̃X�e�b�v��Y�ꂽ�ꍇ�́A[�X�^�[�g] ���j���[�� [�w���v�ƃT�|�[�g] ���N���b�N���Ď���ɑ΂��铚����ق��̖𗧂����������Ă��������B";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater3_Text);
}

function Agent_OnActivationPrivacyPolicyHowToActivateUnconnected() 
{
    var L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text = "Windows �̃Z�b�g�A�b�v������������A[�X�^�[�g] ���j���[�� [Windows �̃��C�Z���X�F��] ���N���b�N���āAWindows �̃��C�Z���X�F�؃E�B�U�[�h�����s�ł��܂��B";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text = "�E�B�U�[�h�ɂ́A�d�b�Ń��C�Z���X�F�؂̎葱�����s�����߂̓d�b�ԍ����\������Ă��܂��B";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text);
}

function Agent_OnActivationPrivacyPolicyWhatHappensNoActivate() 
{
    var L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text = "���C�Z���X�F�؂̃v���C�o�V�[ �|���V�[�̗L���������؂��܂� %1 ���g�����Ƃ��ł��܂��B";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text = "�������A���������g�����߂ɂ͗L���������؂����� %1 �̃��C�Z���X�F�؂̎葱�����s���K�v������܂��B";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text = "���C�Z���X�F�؂̃v���C�o�V�[ �|���V�[�̗L���������؂ꂽ�ꍇ�ɂ́A%1 �����������g�����Ƃ͂ł��Ȃ��Ȃ�܂��B";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_DSLMAINAddCommands() 
{
    var L_DSLMAINMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_DSLMAINMenuCommand2_Text = "���[�U�[���ƃp�X���[�h���K�v�ȗ��R(&S)";
    var L_DSLMAINMenuCommand3_Text = "���ɉ���������悢���m�肽��(&W)";
    
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
    var L_DSLMAINAboutThisScreen1_Text = "����́A���̃R���s���[�^����C���^�[�l�b�g�ɃA�N�Z�X���邽�߂Ƀ��[�U�[���ƃp�X���[�h���K�v���ǂ��������߂��ʂł��B";
	Agent_Speak(L_DSLMAINAboutThisScreen1_Text);
}

function Agent_OnDSLMAINSomeReasons() 
{
    var L_DSLMAINHowToMoveOn1_Text = "���̃R���s���[�^���g�����[�U�[�� 1 �l�̏ꍇ�́A%1 �����̃��[�U�[���ƃp�X���[�h�������I�ɕۊǂ���悤�ɂ���ƕ֗��ł��B";
	Agent_Speak(ApiObj.FormatMessage(L_DSLMAINHowToMoveOn1_Text, g_ProductName));
	
    var L_DSLMAINHowToMoveOn2_Text = "���̕��@���ƁA�C���^�[�l�b�g�ɐڑ�����Ƃ��ɖ��������͂���K�v������܂���B";
	Agent_Speak(L_DSLMAINHowToMoveOn2_Text);
	
    var L_DSLMAINHowToMoveOn3_Text = "���̃R���s���[�^���ق��̃��[�U�[�Ƌ��L���A�C���^�[�l�b�g �A�J�E���g�����L�������Ȃ��ꍇ�ɂ́A�����̃A�J�E���g�����[�U�[���ƃp�X���[�h�ŕی삷��K�v������܂��B";
	Agent_Speak(L_DSLMAINHowToMoveOn3_Text);
	
    var L_DSLMAINHowToMoveOn4_Text = "���Ƃ��΁A���̃R���s���[�^���q���Ƌ��L����ꍇ�A�q���̓R���s���[�^�ŃQ�[�������邱�Ƃ��ł��܂����A";
	Agent_Speak(L_DSLMAINHowToMoveOn4_Text);
	
    var L_DSLMAINHowToMoveOn5_Text = "���Ȃ��ɂ̓C���^�[�l�b�g �T�[�t�B�����ł��Ȃ��悤�ɂł��܂��B";
	Agent_Speak(L_DSLMAINHowToMoveOn5_Text);		
}

function Agent_OnDSLMAINWhatToDoNext()
{	
	Agent_GestureAtElement(g.dslmain_TitleText, "Left");
	
    var L_DSLMAINWhatToDoNext1_Text = "���̎���ɑ΂��铚����I��������A";
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
	
	var L_DSLMAINWhatToDoNext2_Text = "[����] ���N���b�N���Ă��������B";
	Agent_Speak(L_DSLMAINWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");
}



function Agent_DSL_AAddCommands() 
{
    var L_DSLAMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_DSLAMenuCommand2_Text = "�C���^�[�l�b�g�Ƃ͉����m�肽��(&A)";
    var L_DSLAMenuCommand3_Text = "�C���^�[�l�b�g�ւ̐ڑ��ɂ͉����K�v���m�肽��(&D)";
    var L_DSLAMenuCommand4_Text = "�C���^�[�l�b�g �T�C���A�b�v�ɂ��Ēm�肽��(&E)";

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
    var L_DSL_A_AboutThisStep1_Text = "����́A�C���^�[�l�b�g �T�[�r�X �v���o�C�_ (ISP) �ɃA�J�E���g���Z�b�g�A�b�v���āA���̃R���s���[�^����C���^�[�l�b�g�ɐڑ��ł���悤�ɂ����ʂł��B";
	Agent_Speak(L_DSL_A_AboutThisStep1_Text);
}

function Agent_DSL_AWhatIsInternet() 
{
    var L_DSL_A_WhatIsInternet1_Text = "�C���^�[�l�b�g�͐��E���ɍL����R���s���[�^�̃l�b�g���[�N�ł��B";
	Agent_Speak(L_DSL_A_WhatIsInternet1_Text);
	
    var L_DSL_A_WhatIsInternet2_Text = "�C���^�[�l�b�g�ɃA�N�Z�X����ƁA�w�Z�A���{�A�r�W�l�X�A�l�ȂǑ����̏�񌹂Ō��J���ꗘ�p�ł�������擾�ł��܂��B";
	Agent_Speak(L_DSL_A_WhatIsInternet2_Text);
	
    var L_DSL_A_WhatIsInternet3_Text = "World Wide Web (Web) �̓n�C�p�[�����N���g���ăC���^�[�l�b�g��T������V�X�e���ł��B";
	Agent_Speak(L_DSL_A_WhatIsInternet3_Text);
	
    var L_DSL_A_WhatIsInternet4_Text = "�n�C�p�[�����N�̓e�L�X�g�܂��͉摜�ɐݒ肳��A�N���b�N����ƕʂ� Web �y�[�W�⓯���y�[�W�̕ʂ̕����ɃW�����v������A�v���O�������J���Ȃǂ̓���̓�������s�����肵�܂��B";
	Agent_Speak(L_DSL_A_WhatIsInternet4_Text);
	
    var L_DSL_A_WhatIsInternet5_Text = "Web ���Q�Ƃ���ɂ́A�C���^�[�l�b�g��̏����e�L�X�g�A�摜�A���A�f�W�^�� ���[�r�[�Ȃǂ̌`���̏���\������v���O�����ł��� Web �u���E�U���g���܂��B ";
	Agent_Speak(L_DSL_A_WhatIsInternet5_Text);
	
    var L_DSL_A_WhatIsInternet6_Text = "Microsoft �� 2 �� Web �u���E�U��񋟂��Ă��܂��B";
	Agent_Speak(L_DSL_A_WhatIsInternet6_Text);
	
    var L_DSL_A_WhatIsInternet7_Text = "���S�҂�ƒ�ŃR���s���[�^���g�����[�U�[�ɍœK�� MSN Explorer �ƁA������ Internet Explorer �ł��B";
	Agent_Speak(L_DSL_A_WhatIsInternet7_Text);
}

function Agent_DSL_ANeedToConnect() 
{	
    var L_DSL_A_NeedToConnect1_Text = "�C���^�[�l�b�g�ɐڑ�����ɂ́A���� 3 ���K�v�ł��B";
	Agent_Speak(L_DSL_A_NeedToConnect1_Text);	
	
    var L_DSL_A_NeedToConnect2_Text = "1 �Ԗڂ́A�݂Ȃ���͂��łɂ������ɂȂ��Ă��܂����A�R���s���[�^���K�v�ł��B";
	Agent_Speak(L_DSL_A_NeedToConnect2_Text);
	
    var L_DSL_A_NeedToConnect3_Text = "2 �ԖڂɁA�C���^�[�l�b�g �T�[�r�X �v���o�C�_ (ISP) ���K�v�ł��B";
	Agent_Speak(L_DSL_A_NeedToConnect3_Text);
	
    var L_DSL_A_NeedToConnect4_Text = "�d�b��Ђ��d�b�T�[�r�X��񋟂���̂Ɠ����悤�ɁAISP �̓C���^�[�l�b�g �T�[�r�X�܂��̓C���^�[�l�b�g �A�N�Z�X��񋟂��܂��B";
	Agent_Speak(L_DSL_A_NeedToConnect4_Text);
	
    var L_DSL_A_NeedToConnect5_Text = "�C���^�[�l�b�g�փA�N�Z�X����悤�ɃR���s���[�^���Z�b�g�A�b�v����i�K�ɂȂ�AISP �Ƃ܂��_�񂵂Ă��Ȃ��ꍇ�́AISP �������邨��`�������܂��B";
	Agent_Speak(L_DSL_A_NeedToConnect5_Text);
	
    var L_DSL_A_NeedToConnect6_Text = "3 �ԖڂɁA�R���s���[�^�� ISP �𕨗��I�ɐڑ����邽�߂̃f�o�C�X���K�v�ł��B";
	Agent_Speak(L_DSL_A_NeedToConnect6_Text);
	
    var L_DSL_A_NeedToConnect7_Text = "�ȏオ���̉�ʂ̖ړI�ł��B";
	Agent_Speak(L_DSL_A_NeedToConnect7_Text);
}

function Agent_DSL_AInternetSignup() 
{
    var L_DSL_A_AboutThisScreen1_Text = "���ɃC���^�[�l�b�g �A�J�E���g���������̏ꍇ�́A�C���^�[�l�b�g �T�[�r�X �v���o�C�_�ɂ�肱�̏��͊��ɒ񋟂���Ă���͂��ł��B";
	Agent_Speak(L_DSL_A_AboutThisScreen1_Text);
	
    var L_DSL_A_AboutThisScreen2_Text = "�V�����R���s���[�^���w����������Ƃ����āA�V�����C���^�[�l�b�g �A�J�E���g���쐬����K�v�͂���܂���B";
	Agent_Speak(L_DSL_A_AboutThisScreen2_Text);
	
    var L_DSL_A_AboutThisScreen3_Text = "���܂ł̃R���s���[�^�Ŏg���Ă����̂Ƃ܂����������A�J�E���g�����g�����Ƃ��ł��܂��B";
	Agent_Speak(L_DSL_A_AboutThisScreen3_Text);
	
    var L_DSL_A_AboutThisScreen4_Text = "�����̃R���s���[�^����C���^�[�l�b�g�ɐڑ��������Ƃ��܂��Ȃ��ꍇ�ł��A���̃R���s���[�^���w�������Ƃ��ɃC���^�[�l�b�g �A�J�E���g�̏����󂯎���Ă���\��������܂��B";
	Agent_Speak(L_DSL_A_AboutThisScreen4_Text);
	
    var L_DSL_A_AboutThisScreen5_Text = "�̔��X���烆�[�U�[���A�p�X���[�h�A����� ISP �����L�ڂ��ꂽ�p�����󂯎�����ꍇ�́A���̉�ʂł����̏�����͂��Ă��������B";
	Agent_Speak(L_DSL_A_AboutThisScreen5_Text);
}



function Agent_DSL_BAddCommands() 
{

    var L_DSL_B_MenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_DSL_B_MenuCommand2_Text = "IP �ɂ��Ēm�肽��(&A)";
    var L_DSL_B_MenuCommand3_Text = "DNS �ɂ��Ēm�肽��(&D)";
    var L_DSL_B_MenuCommand4_Text = "���ɉ���������悢���m�肽��(&W)";

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
    var L_DSL_B_AboutThisScreen1_Text = "�O�̉�ʂł́A�C���^�[�l�b�g �A�J�E���g����񋟂��ăC���^�[�l�b�g�֐ڑ�������@��I�����܂����B";
	Agent_Speak(L_DSL_B_AboutThisScreen1_Text);

    var L_DSL_B_AboutThisScreen2_Text = "���̉�ʂł́A���̃R���s���[�^�ŃC���^�[�l�b�g�ւ̕����I�Ȑڑ����m��������@��I�����܂��B";
	Agent_Speak(L_DSL_B_AboutThisScreen2_Text);
}

function Agent_OnDSL_BWhatIsIP() 
{
    var L_DSL_B_WhatIsIP1_Text = "�C���^�[�l�b�g�ɐڑ����Ă���e�R���s���[�^�ɂ̓C���^�[�l�b�g �v���g�R�� (IP) �A�h���X������܂��B���̃A�h���X�́A�C���^�[�l�b�g��ŔC�ӂ̃R���s���[�^���ق��̃R���s���[�^�Ǝ��ʂ��邽�߂̈�ӂȔԍ��ł��B";
	Agent_Speak(L_DSL_B_WhatIsIP1_Text);

    var L_DSL_B_WhatIsIP2_Text = "�C���^�[�l�b�g�ɐڑ�����Ƃ��ɁA�ʏ� ISP �ɂ�� IP �A�h���X���R���s���[�^�Ɏ����I�ɗ^�����܂��B";
	Agent_Speak(L_DSL_B_WhatIsIP2_Text);

    var L_DSL_B_WhatIsIP3_Text = "�������A���̏ꍇ�� IP �A�h���X���蓮�œ��͂���K�v������܂��B";
	Agent_Speak(L_DSL_B_WhatIsIP3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_staticip, "Left");
	
	var L_DSL_B_WhatIsIP4_Text = "ISP ���炱���ɓ��͂��� IP �A�h���X���󂯎��K�v������܂��B";
	Agent_Speak(L_DSL_B_WhatIsIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnDSL_BWhatIsDNS() 
{
    var L_DSL_B_WhatIsDNS1_Text = "�C���^�[�l�b�g�̃A�h���X����������ɂ́A�R���s���[�^���h���C�� �l�[�� �V�X�e�� (DNS) �ɐڑ�����K�v������܂��BDNS �ɂ��A�C���^�[�l�b�g��̃R���s���[�^�� IP �A�h���X�����蓖�Ă��܂��B";
	Agent_Speak(L_DSL_B_WhatIsDNS1_Text);

    var L_DSL_B_WhatIsDNS2_Text = "�قƂ�ǂ̏ꍇ�ADNS �A�h���X�� ISP �ɂ�莩���I�Ɋ��蓖�Ă��܂��B";
	Agent_Speak(L_DSL_B_WhatIsDNS2_Text);

    var L_DSL_B_WhatIsDNS3_Text = "ISP �ɂ��R���s���[�^�� DNS �A�h���X��ݒ肷��悤�ɋ��߂��܂��B";
	Agent_Speak(L_DSL_B_WhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_prefdns, "Left");

    var L_DSL_B_WhatIsDNS4_Text = "�����ɓ��͂���D�� DNS ��";
	Agent_Speak(L_DSL_B_WhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.dsl_lbl_altdns, "Left");

    var L_DSL_B_WhatIsDNS5_Text = "�D�� DNS �𗘗p�ł��Ȃ��ꍇ�Ɏg������ DNS ���^�����܂��B";
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
	
    var L_DSL_B_WhatToDoNext1_Text = "[����] ���N���b�N���āA��ɐi��ł��������B";
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

    var L_DSL_B_WhatToDoNext2_Text = "�܂��A[�߂�] ���N���b�N���đO�̃X�e�b�v�ɖ߂邱�Ƃ��ł��܂��B ";
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

    var L_DSL_B_WhatToDoNext3_Text = "�܂��́A���̃R���s���[�^�̃C���^�[�l�b�g�ڑ����Z�b�g�A�b�v���Ȃ��ő��s����ɂ� [�ȗ�] ���N���b�N���Ă��������B";
	Agent_Speak(L_DSL_B_WhatToDoNext3_Text);
    
    Agent_Play("RestPose");	
}



function Agent_ICONNECTAddCommands() 
{

    var L_ICONNECTMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_ICONNECTMenuCommand2_Text = "�ÓI IP �A�h���X�ɂ��Ēm�肽��(&A)";
    var L_ICONNECTMenuCommand3_Text = "DNS �ɂ��Ēm�肽��(&D)";
    var L_ICONNECTMenuCommand4_Text = "���ɉ���������悢���m�肽��(&W)";

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
    var L_ICONNECTAboutThisScreen1_Text = "�O�̉�ʂł́A�C���^�[�l�b�g �A�J�E���g����񋟂��ăC���^�[�l�b�g�֐ڑ�������@��I�����܂����B";
	Agent_Speak(L_ICONNECTAboutThisScreen1_Text);

    var L_ICONNECTAboutThisScreen2_Text = "���̉�ʂł́A���̃R���s���[�^�ŃC���^�[�l�b�g�ւ̕����I�Ȑڑ����m��������@��I�����܂��B";
	Agent_Speak(L_ICONNECTAboutThisScreen2_Text);
}

function Agent_OnICONNECTWhatIsStaticIP() 
{
    var L_ICONNECTWhatIsStaticIP1_Text = "�C���^�[�l�b�g�ɐڑ����Ă���e�R���s���[�^�ɂ̓C���^�[�l�b�g �v���g�R�� (IP) �A�h���X������܂��B���̃A�h���X�́A�C���^�[�l�b�g��ŔC�ӂ̃R���s���[�^���ق��̃R���s���[�^�Ǝ��ʂ��邽�߂̈�ӂȔԍ��ł��B";
	Agent_Speak(L_ICONNECTWhatIsStaticIP1_Text);

    var L_ICONNECTWhatIsStaticIP2_Text = "�C���^�[�l�b�g�ɐڑ�����Ƃ��ɁA�ʏ� ISP �ɂ�� IP �A�h���X���R���s���[�^�Ɏ����I�ɗ^�����܂��B";
	Agent_Speak(L_ICONNECTWhatIsStaticIP2_Text);

    var L_ICONNECTWhatIsStaticIP3_Text = "�������A���̏ꍇ�� IP �A�h���X���蓮�œ��͂���K�v������܂��B";
	Agent_Speak(L_ICONNECTWhatIsStaticIP3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_staticIP, "Left");
	
	var L_ICONNECTWhatIsStaticIP4_Text = "ISP ���炱���ɓ��͂��� IP �A�h���X���󂯎��K�v������܂��B";
	Agent_Speak(L_ICONNECTWhatIsStaticIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnICONNECTWhatIsDNS() 
{
    var L_ICONNECTWhatIsDNS1_Text = "�C���^�[�l�b�g�̃A�h���X����������ɂ́A�R���s���[�^���h���C�� �l�[�� �V�X�e�� (DNS) �ɐڑ�����K�v������܂��BDNS �ɂ��A�C���^�[�l�b�g��̃R���s���[�^�� IP �A�h���X�����蓖�Ă��܂��B";
	Agent_Speak(L_ICONNECTWhatIsDNS1_Text);

    var L_ICONNECTWhatIsDNS2_Text = "�قƂ�ǂ̏ꍇ�ADNS �A�h���X�� ISP �ɂ�莩���I�Ɋ��蓖�Ă��܂��B";
	Agent_Speak(L_ICONNECTWhatIsDNS2_Text);

    var L_ICONNECTWhatIsDNS3_Text = "ISP �ɂ��R���s���[�^�� DNS �A�h���X��ݒ肷��悤�ɋ��߂��܂��B";
	Agent_Speak(L_ICONNECTWhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_prefrDNS, "Left");

    var L_ICONNECTWhatIsDNS4_Text = "�����ɓ��͂���D�� DNS ��";
	Agent_Speak(L_ICONNECTWhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.iconnect_spn_alterDNS, "Left");

    var L_ICONNECTWhatIsDNS5_Text = "�D�� DNS �𗘗p�ł��Ȃ��ꍇ�Ɏg������ DNS ���^�����܂��B";
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
	
    var L_ICONNECTWhatToDoNext1_Text = "[����] ���N���b�N���āA��ɐi��ł��������B";
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

    var L_ICONNECTWhatToDoNext2_Text = "�܂��́A���̃R���s���[�^�̃C���^�[�l�b�g�ڑ����Z�b�g�A�b�v���Ȃ��ő��s����ɂ� [�ȗ�] ���N���b�N���Ă��������B";
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

    var L_ICONNECTWhatToDoNext3_Text = "[�߂�] ���N���b�N���āA�O�̉�ʂɖ߂邱�Ƃ��ł��܂��B";
	Agent_Speak(L_ICONNECTWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}





function Agent_ICNTLASTAddCommands() {

        var L_ICNTLASTMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_ICNTLASTMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_ICNTLASTMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

        
        
        

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

        var L_SCONNECTMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_SCONNECTMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_SCONNECTMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

        
        
        

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

        var L_SCNTLASTMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_SCNTLASTMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_SCNTLASTMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

        
        
        

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
    var L_BadPIDMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_BadPIDMenuCommand2_Text = "�v���_�N�g �L�[�̓��͕��@�ɂ��Ēm�肽��(&O)";
    var L_BadPIDMenuCommand3_Text = "�v���_�N�g �L�[���킩��Ȃ��ꍇ�̑Ώ��@�ɂ��Ēm�肽��(&A)";
    var L_BadPIDMenuCommand4_Text = "�v���_�N�g �L�[�����삵�Ȃ��ꍇ�̑Ώ��@�ɂ��Ēm�肽��(&I)";
    var L_BadPIDMenuCommand5_Text = "����ɏڂ����w���v�̖⍇����ɂ��Ēm�肽��(&R)";
    var L_BadPIDMenuCommand6_Text = "���ɉ���������悢���m�肽��(&W)";
        
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
    var L_BadPIDAboutThisStep1_Text = "�O�̉�ʂœ��͂��ꂽ�v���_�N�g �L�[�͗L���ł͂���܂���B";
    Agent_Speak(L_BadPIDAboutThisStep1_Text);
    
    var L_BadPIDAboutThisStep2_Text = "����͓��͂��ꂽ�v���_�N�g �L�[���F�؂��ꂽ Windows XP �̃v���_�N�g �L�[�ƈ�v���Ȃ��Ƃ������Ƃł��B";
    Agent_Speak(L_BadPIDAboutThisStep2_Text);

    var L_BadPIDAboutThisStep3_Text = "Windows �͗L���ȃv���_�N�g �L�[���Ȃ��Ɠ��삵�܂���B";
    Agent_Speak(L_BadPIDAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDAboutThisStep4_Text = "�Ԉ���ăv���_�N�g �L�[����͂����Ǝv���ꍇ�́A[�߂�] ���N���b�N���Đ������L�[����͂��Ă��������B";
    Agent_Speak(L_BadPIDAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep5_Text = "�������A�v���_�N�g �L�[�𐳂���������͂��Ă��������Ȃ������ꍇ�́AWindows ����@�R�s�[�ł���\��������܂��B";
    Agent_Speak(L_BadPIDAboutThisStep5_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDAboutThisStep6_Text = "���̏ꍇ�́A[�V���b�g�_�E��] ���N���b�N���ăR���s���[�^�̓d����؂��Ă��������B";
    Agent_Speak(L_BadPIDAboutThisStep6_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep7_Text = "���ꂩ��A�}�C�N���\�t�g������� ��@�R�s�[�z�b�g���C���܂ł��A�����������B";
    Agent_Speak(L_BadPIDAboutThisStep7_Text);

    var L_BadPIDAboutThisStep8_Text = "���̂ق��̍��܂��͒n��ɂ��Z�܂��̏ꍇ�́A���߂��� Microsoft �x�Ђɂ��A�����������B";
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
	
    var L_BadPIDHowToEnter1_Text = "[�߂�] ���N���b�N���āA�O�̉�ʂɖ߂��Ă��������B";
    Agent_Speak(L_BadPIDHowToEnter1_Text);
    
    Agent_Play("RestPose");
    
    var L_BadPIDHowToEnter2_Text = "�����Ȑ����_�ł��Ă���悤�Ɍ�����|�C���^���A���͂���K�v������ŏ��̃e�L�X�g �{�b�N�X���ɂ���܂��B";
    Agent_Speak(L_BadPIDHowToEnter2_Text);

    var L_BadPIDHowToEnter3_Text = "�ŏ��� 5 ��������͂���ƁA�|�C���^�͎����I�Ɏ��̃{�b�N�X�Ɉړ����Ď��� 5 ��������͂ł���悤�ɂȂ�܂��B";
    Agent_Speak(L_BadPIDHowToEnter3_Text);

    var L_BadPIDHowToEnter4_Text = "�n�C�t������͂�����A�啶���Ə������̋�ʂɂ��ċC�ɂ����肷�邱�Ƃ͂���܂���B";
    Agent_Speak(L_BadPIDHowToEnter4_Text);

    var L_BadPIDHowToEnter5_Text = "[����] ���N���b�N���đ��s���Ă��������B";
    Agent_Speak(L_BadPIDHowToEnter5_Text);
}

function Agent_OnBadPIDWhatIfNotKnown() 
{
    var L_BadPIDWhatIfNotKnown1_Text = "�v���_�N�g �L�[�� CD �P�[�X�ɓ\���Ă��Ȃ��ꍇ�́A�R���s���[�^�܂��̓}�j���A���w�͂��߂Ɂx�̗����ɓ\���Ă� Certificate of Authenticity (COA) �̃X�e�b�J�[���m�F���Ă��������B";
    Agent_Speak(L_BadPIDWhatIfNotKnown1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
    
    var L_BadPIDWhatIfNotKnown2_Text = "�v���_�N�g �L�[������������A[�߂�] ���N���b�N���đO�̉�ʂ̃{�b�N�X�Ƀv���_�N�g �L�[����͂��Ă��������B";
    Agent_Speak(L_BadPIDWhatIfNotKnown2_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotKnown3_Text = "�v���_�N�g �L�[��������Ȃ��ꍇ�A%s �̃R���s���[�^�̐������ɂ��A�����������B";
    var re = /%s/i;
    var L_BadPIDWhatIfNotKnown4_Text = "�v���_�N�g �L�[��������Ȃ��ꍇ�A�R���s���[�^�̐������ɂ��A�����������B";

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
        Agent_Speak(L_BadPIDWhatIfNotKnown4_Text);
    else
        Agent_Speak(L_BadPIDWhatIfNotKnown3_Text.replace(re, strPhoneNumber));
}

function Agent_OnBadPIDWhatIfNotWorking() 
{
    var L_BadPIDWhatIfNotWorking1_Text = "�v���_�N�g �L�[���Ԉ���ē��͂��ꂽ�\��������܂��B";
    Agent_Speak(L_BadPIDWhatIfNotWorking1_Text);
    
    var L_BadPIDWhatIfNotWorking2_Text = "25 �����̃v���_�N�g �L�[�����ׂē��͂���K�v������܂��B";
    Agent_Speak(L_BadPIDWhatIfNotWorking2_Text);

    var L_BadPIDWhatIfNotWorking3_Text = "�e�{�b�N�X�ɂ� 5 �����̉p��������͂���K�v������܂��B";
    Agent_Speak(L_BadPIDWhatIfNotWorking3_Text);

    var L_BadPIDWhatIfNotWorking4_Text = "�L���ȃv���_�N�g �L�[����͂��Ȃ��ƁAWindows �̎g�p���J�n���邱�Ƃ͂ł��܂���B";
    Agent_Speak(L_BadPIDWhatIfNotWorking4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDWhatIfNotWorking5_Text = "�Ԉ���ăv���_�N�g �L�[����͂����Ǝv���ꍇ�́A[�߂�] ���N���b�N���Đ������L�[����͂��Ă��������B";
    Agent_Speak(L_BadPIDWhatIfNotWorking5_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking6_Text = "�������A�v���_�N�g �L�[�𐳂���������͂��Ă��������Ȃ������ꍇ�́AWindows ����@�R�s�[�ł���\��������܂��B";
    Agent_Speak(L_BadPIDWhatIfNotWorking6_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatIfNotWorking7_Text = "���̏ꍇ�́A[�V���b�g�_�E��] ���N���b�N���ăR���s���[�^�̓d����؂��Ă��������B";
    Agent_Speak(L_BadPIDWhatIfNotWorking7_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking8_Text = "���ꂩ��A�}�C�N���\�t�g������� ��@�R�s�[�z�b�g���C���܂ł��A�����������B";
    Agent_Speak(L_BadPIDWhatIfNotWorking8_Text);

    var L_BadPIDWhatIfNotWorking9_Text = "���̂ق��̍��܂��͒n��ɂ��Z�܂��̏ꍇ�́A���߂��� Microsoft �x�Ђɂ��A�����������B";
    Agent_Speak(L_BadPIDWhatIfNotWorking9_Text);
}

function Agent_OnBadPIDWhoCanICall() 
{
    var L_BadPIDWhoCanICall1_Text = "�v���_�N�g �L�[���󂯓�����Ȃ������ꍇ�́A�}�C�N���\�t�g������� ��@�R�s�[�z�b�g���C���܂ł��A�����������B";
    Agent_Speak(L_BadPIDWhoCanICall1_Text);
    
    var L_BadPIDWhoCanICall2_Text = "���̂ق��̍��܂��͒n��ɂ��Z�܂��̏ꍇ�́A���߂��� Microsoft �x�Ђɂ��A�����������B";
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
	
    var L_BadPIDWhatToDoNext1_Text = "[�߂�] ���N���b�N���āA�������L�[����͂��Ă��������B";
    Agent_Speak(L_BadPIDWhatToDoNext1_Text);
    
    var L_BadPIDWhatToDoNext2_Text = "�v���_�N�g �L�[���󂯓�����Ȃ������ꍇ�́AWindows ����@�R�s�[�̉\��������܂��B";
    Agent_Speak(L_BadPIDWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatToDoNext3_Text = "���̏ꍇ�́A[�V���b�g�_�E��] ���N���b�N���ăR���s���[�^�̓d����؂��Ă��������B";
    Agent_Speak(L_BadPIDWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatToDoNext4_Text = "���ꂩ��A�}�C�N���\�t�g������� ��@�R�s�[�z�b�g���C���܂ł��A�����������B";
    Agent_Speak(L_BadPIDWhatToDoNext4_Text);

    var L_BadPIDWhatToDoNext5_Text = "���̂ق��̍��܂��͒n��ɂ��Z�܂��̏ꍇ�́A���߂��� Microsoft �x�Ђɂ��A�����������B";
    Agent_Speak(L_BadPIDWhatToDoNext5_Text);
}



function Agent_IconnAddCommands() 
{
    var L_IconnMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_IconnMenuCommand2_Text = "�I������I�v�V�����ɂ��Ēm�肽��(&P)";
    var L_IconnMenuCommand3_Text = "���ɉ���������悢���m�肽��(&W)";

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
    var L_IconnAboutThisStep1_Text = "�R���s���[�^�� Windows XP ���������C���X�g�[������܂����B";
    Agent_Speak(L_IconnAboutThisStep1_Text); 
      
    var L_IconnAboutThisStep2_Text = "���̎��_�ŁA�R���s���[�^���C���^�[�l�b�g�ɃA�N�Z�X����悤�ɃZ�b�g�A�b�v���邨��`�������܂��B";
    Agent_Speak(L_IconnAboutThisStep2_Text);
       
    var L_IconnAboutThisStep3_Text = "���Z�b�g�A�b�v���鏀�����ł��Ă��Ȃ��ꍇ�́AWindows �̃Z�b�g�A�b�v������������� [�X�^�[�g] ���j���[����C���^�[�l�b�g�ڑ��E�B�U�[�h�����s���Ă��������B";
    Agent_Speak(L_IconnAboutThisStep3_Text);
}

function Agent_IconnWhichOption() 
{    
    var L_IconnWhichOption1_Text = "��p�̃\�t�g�E�F�A���K�v�ȃC���^�[�l�b�g �T�[�r�X �v���o�C�_ (ISP) ���g���ꍇ�� [������] ��I�����Ă��������B";
    Agent_Speak(L_IconnWhichOption1_Text); 
      
    var L_IconnWhichOption2_Text = "����́AISP ������� CD ���擾���Ă���ꍇ�ł��B";
    Agent_Speak(L_IconnWhichOption2_Text);
       
    var L_IconnWhichOption3_Text = "Windows �̃Z�b�g�A�b�v������������ŁA�C���^�[�l�b�g�ւ̃A�N�Z�X�̂��߂ɃR���s���[�^���Z�b�g�A�b�v���Ă��������B";
    Agent_Speak(L_IconnWhichOption3_Text);
}

function Agent_OnIconnWhatToDoNext() 
{      
    Agent_GestureAtElement(g.radioYesIconn, "Left");  
    
    var L_IconnWhatToDoNext1_Text = "�C���^�[�l�b�g�ڑ��̃Z�b�g�A�b�v�ŏ������K�v�ȏꍇ�́A[�͂�] ���N���b�N���Ă��������B";
    Agent_Speak(L_IconnWhatToDoNext1_Text);
    
    Agent_Play("RestPose"); 
        
    Agent_GestureAtElement(g.radioNoIconn, "Left");  
    
    var L_IconnWhatToDoNext2_Text = "�܂��́A����̓C���^�[�l�b�g�ڑ����m�����Ȃ��ꍇ�́A[������] ���N���b�N���Ă��������B";
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

    var L_IconnWhatToDoNext3_Text = "���s����ɂ́A[����] ���N���b�N���Ă��������B";
    Agent_Speak(L_IconnWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPAddCommands() 
{
    var L_ISPMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_ISPMenuCommand2_Text = "�R���s���[�^�̔̔��X����A�J�E���g������肵���ꍇ�̑Ώ��@�ɂ��Ēm�肽��(&A)";
    var L_ISPMenuCommand3_Text = "���ɉ���������悢���m�肽��(&W)";

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
    var L_ISPAboutThisStep1_Text = "���̉�ʂł̓C���^�[�l�b�g�ւ̃A�N�Z�X���@��I�����܂��B";
    Agent_Speak(L_ISPAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");

    var L_ISPAboutThisStep2_Text = "MSN �܂���";
    Agent_Speak(L_ISPAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");

        var L_ISPAboutThisStep3_Text = "�ʂ̃C���^�[�l�b�g �T�[�r�X �v���o�C�_���g�����Ƃ��ł��܂��B";
        Agent_Speak(L_ISPAboutThisStep3_Text);
        
        Agent_Play("RestPose");
    }
    
    Agent_GestureAtElement(g.radioSkip, "Left");

    var L_ISPAboutThisStep4_Text = "�܂��́A����̓C���^�[�l�b�g�ڑ����Z�b�g�A�b�v���Ȃ��ő��s���邱�Ƃ��ł��܂��B";
    Agent_Speak(L_ISPAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPWhatIfGivenAccount() 
{
    var L_ISPWhatIfGivenAccount1_Text = "�R���s���[�^���w�������Ƃ��ɁA�̔��X����C���^�[�l�b�g�̃A�J�E���g��񂪋L�ڂ��ꂽ�p�����󂯎�邱�Ƃ�����܂��B";
	Agent_Speak(L_ISPWhatIfGivenAccount1_Text);
	
    var L_ISPWhatIfGivenAccount2_Text = "�A�J�E���g���ɂ́A���[�U�[���A�p�X���[�h�A�C���^�[�l�b�g �T�[�r�X �v���o�C�_�̖��O�Ɠd�b�ԍ��Ȃǂ��܂܂�܂��B";
	Agent_Speak(L_ISPWhatIfGivenAccount2_Text);
	
    var L_ISPWhatIfGivenAccount3_Text = "���̏����������̏ꍇ�́A���ɃC���^�[�l�b�g �A�J�E���g���������ł��B";
	Agent_Speak(L_ISPWhatIfGivenAccount3_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");
	
    var L_ISPWhatIfGivenAccount4_Text = "ISP ���� MSN �ł���ꍇ�́A���̍ŏ��̃I�v�V������I�����Ă��������B";
	Agent_Speak(L_ISPWhatIfGivenAccount4_Text);
    
    Agent_Play("RestPose");

    
    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");
    	
        var L_ISPWhatIfGivenAccount5_Text = "ISP ���� MSN �ł͂Ȃ��ꍇ�́A���� 2 �Ԗڂ̃I�v�V������I�����Ă��������B";
    	Agent_Speak(L_ISPWhatIfGivenAccount5_Text);
        
        Agent_Play("RestPose");
    }

    Agent_GestureAtElement(g.radioSkip, "Left");
    
    var L_ISPWhatIfGivenAccount6_Text = "�܂��́A���̃R���s���[�^�̃C���^�[�l�b�g�ڑ�����ŃZ�b�g�A�b�v����ꍇ�́A���̍Ō�̃I�v�V������I�����Ă��������B";
	Agent_Speak(L_ISPWhatIfGivenAccount6_Text);
			    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_ISPWhatIfGivenAccount7_Text = "���ꂩ��A[����] ���N���b�N���Ă��������B";
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
    
    var L_ISPWhatToDoNext1_Text = "�I�v�V������I��������A[����] ���N���b�N���Ă��������B";
	Agent_Speak(L_ISPWhatToDoNext1_Text);
	
	Agent_Play("RestPose");
}



function Agent_ICSAddCommands() 
{
	var L_ICSAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
	var L_ICSAddCommands2_Text = "�C���^�[�l�b�g�ڑ��t�@�C�A�E�H�[���ɂ��Ēm�肽��(&A)";
	var L_ICSAddCommands3_Text = "�l�b�g���[�N �Z�b�g�A�b�v �E�B�U�[�h�ɂ��Ēm�肽��(&I)";
	
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
	var L_ICSAboutThisStep1_Text = "���̉�ʂł́A�C���^�[�l�b�g�ɃA�N�Z�X������@��I�����܂��B";
	Agent_Speak(L_ICSAboutThisStep1_Text);
	
	var L_ICSAboutThisStep2_Text = "���̃R���s���[�^���ق��̃R���s���[�^�̃l�b�g���[�N�ɐڑ����Ă���ꍇ�́A���̃l�b�g���[�N���g�p���ăC���^�[�l�b�g�ɃA�N�Z�X���邱�Ƃ��ł��܂��B";
	Agent_Speak(L_ICSAboutThisStep2_Text);
	
	var L_ICSAboutThisStep3_Text = "���̂ق��̏ꍇ�́A�C���^�[�l�b�g�ɒ��ڐڑ�����悤�ɃR���s���[�^���Z�b�g�A�b�v���邱�Ƃ��ł��܂��B";
	Agent_Speak(L_ICSAboutThisStep3_Text);
	
	var L_ICSAboutThisStep4_Text = "�I�������I�v�V�����Ɋ֌W�Ȃ��AWindows XP �̓C���^�[�l�b�g�ڑ��t�@�C�A�E�H�[�����g���Ăق��̃C���^�[�l�b�g�̃��[�U�[����@�����̕K�v�ȃR���s���[�^��ی삵�܂��B ";
	Agent_Speak(L_ICSAboutThisStep4_Text);
}
	
function Agent_ICSWhatIsFirewall() 
{
	var L_ICSWhatIsFirewall1_Text = "�t�@�C�A�E�H�[���́A�C���^�[�l�b�g�ȂǊO���̃l�b�g���[�N���痈��n�b�J�[�Ȃǂ̊O���̋��Ђ���R���s���[�^�܂��̓l�b�g���[�N��ی삷�邽�߂ɐ݌v���ꂽ�Z�L�����e�B �V�X�e���ł��B";
	Agent_Speak(L_ICSWhatIsFirewall1_Text);
	
	var L_ICSWhatIsFirewall2_Text = "Windows XP �Ńl�b�g���[�N���Z�b�g�A�b�v����Ƃ��ɁA�C���^�[�l�b�g�ڑ��t�@�C�A�E�H�[���@�\�������I�ɃI���ɂȂ�܂��B";
	Agent_Speak(L_ICSWhatIsFirewall2_Text);
	
	var L_ICSWhatIsFirewall3_Text = "�܂��A���̃R���s���[�^���l�b�g���[�N��ɂ͂Ȃ��A�C���^�[�l�b�g�ɒ��ڃA�N�Z�X����ꍇ���I���ɂȂ�܂��B";
	Agent_Speak(L_ICSWhatIsFirewall3_Text);
}
	
function Agent_ICSWhatIsNetworkWizard() 
{
	var L_ICSWhatIsNetworkWizard1_Text = "���̃E�B�U�[�h�ŁA����ǂ��ĉƒ�܂��̓I�t�B�X�Ńl�b�g���[�N���Z�b�g�A�b�v�ł��܂��B";
	Agent_Speak(L_ICSWhatIsNetworkWizard1_Text);
	
	var L_ICSWhatIsNetworkWizard2_Text = "���̒i�K�ł͂��̃R���s���[�^���l�b�g���[�N�ɐڑ��������Ȃ��ꍇ�́A��Őڑ����邱�Ƃ��ł��܂��B";
	Agent_Speak(L_ICSWhatIsNetworkWizard2_Text);
	
	var L_ICSWhatIsNetworkWizard3_Text = "[�X�^�[�g] ���j���[�� [���ׂẴv���O����] ���N���b�N���Ă��������B";
	Agent_Speak(L_ICSWhatIsNetworkWizard3_Text);
	
	var L_ICSWhatIsNetworkWizard4_Text = "[�A�N�Z�T��] ���N���b�N���Ă��� [�ʐM] ���N���b�N����ƁA�l�b�g���[�N �Z�b�g�A�b�v �E�B�U�[�h������܂��B";
	Agent_Speak(L_ICSWhatIsNetworkWizard4_Text);
	
	var L_ICSWhatIsNetworkWizard5_Text = "�����̃X�e�b�v��Y�ꂽ�ꍇ�́A[�X�^�[�g] ���j���[�� [�w���v�ƃT�|�[�g] ���N���b�N����Ƌ^��ɑ΂���񓚂�ق��̗L�v�ȏ��������邱�Ƃ��ł��܂��B";
	Agent_Speak(L_ICSWhatIsNetworkWizard5_Text);
}



function Agent_ICSDCAddCommands() 
{
	var L_ICSDCAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
	var L_ICSDCAddCommands2_Text = "���ɉ���������悢���m�肽��(&W)";
	
	g_AgentCharacter.Commands.Add("Agent_ICSDCAboutThisStep", L_ICSDCAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_ICSDCWhatToDoNext", L_ICSDCAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_ICSDCAboutThisStep() 
{
	var L_ICSDCAboutThisStep1_Text = "���̉�ʂł́A�R���s���[�^�ƃC���^�[�l�b�g�̐ڑ����ؒf���ꂽ���Ƃ������܂��B";
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
    
	var L_ICSDCWhatToDoNext1_Text = "[�Ď��s] ���N���b�N���āA�C���^�[�l�b�g�ɍĐڑ����Ă��������B";
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
    
	var L_ICSDCWhatToDoNext2_Text = "�܂��́A�C���^�[�l�b�g�ɐڑ����Ȃ��ő�����ɂ́A[�ȗ�] ���N���b�N���Ă��������B";
	Agent_Speak(L_ICSDCWhatToDoNext2_Text);
	
	Agent_Play("RestPose");
}



function Agent_Ident1AddCommands() 
{
    var L_Ident1AddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_Ident1AddCommands2_Text = "���[�U�[ �A�J�E���g�ɂ��Ēm�肽��(&A)";
    var L_Ident1AddCommands3_Text = "���[�U�[ �A�J�E���g���Z�b�g�A�b�v���闘�_�ɂ��Ēm�肽��(&R)";
    var L_Ident1AddCommands4_Text = "���ɉ���������悢���m�肽��(&W)";

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
	var L_Ident1AboutThisStep1_Text = "����͂��̃R���s���[�^���g���ق��̃��[�U�[�����ʂ����ʂł��B";
	Agent_Speak(L_Ident1AboutThisStep1_Text);
	
	var L_Ident1AboutThisStep2_Text = "���̃R���s���[�^���ق��̃��[�U�[�Ƌ��L����ꍇ�A�e���[�U�[�͂��ꂼ��̃A�J�E���g���Z�b�g�A�b�v���� Windows XP ���J�X�^�}�C�Y�ł��܂��B";
	Agent_Speak(L_Ident1AboutThisStep2_Text);
    
    var L_Ident1AboutThisStep3_Text = "�������邱�ƂŁA�e���[�U�[�͎����p�ɃJ�X�^�}�C�Y���ꂽ�R���s���[�^�ݒ�A�����A�l�t�@�C���AWeb �T�C�g �����N�A���̂ق��̃I�v�V�������ێ����邱�Ƃ��ł��܂��B";
    Agent_Speak(L_Ident1AboutThisStep3_Text);
    
    var L_Ident1AboutThisStep4_Text = "�R���s���[�^���N������Ƃ��ɁA���̉�ʂœ��͂������O�̂��ׂĂ����O���ɂ悤������ʂɕ\������܂��B";
    Agent_Speak(L_Ident1AboutThisStep4_Text);
    
    var L_Ident1AboutThisStep5_Text = "�e���[�U�[�̉摜���\������܂��B";
    Agent_Speak(L_Ident1AboutThisStep5_Text);
    
    var L_Ident1AboutThisStep6_Text = "[�X�^�[�g] ���j���[�� [�R���g���[�� �p�l��] ���N���b�N���� [���[�U�[ �A�J�E���g]  ���N���b�N���āA��ł��ł����O��ύX���邱�Ƃ��ł��܂��B";
    Agent_Speak(L_Ident1AboutThisStep6_Text);
}

function Agent_Ident1Command_WhatIsUserAccount() 
{	
	var L_Ident1WhatIsUserAccount1_Text = "�ƒ��I�t�B�X�łق��̃��[�U�[�ƃR���s���[�^�����L����ꍇ�́A���[�U�[ �A�J�E���g���g���ƕ֗��ł��B";
	Agent_Speak(L_Ident1WhatIsUserAccount1_Text);
	
	var L_Ident1WhatIsUserAccount2_Text = "���[�U�[ �A�J�E���g���g���ƁA���̂��Ƃ��ł��܂�:";
	Agent_Speak(L_Ident1WhatIsUserAccount2_Text);
    
    var L_Ident1WhatIsUserAccount3_Text = "�ق��̃��[�U�[�̐ݒ�ɉe�����y�ڂ����ƂȂ��AWindows ���Ǘ����������\�������肷��悤�ɃJ�X�^�}�C�Y����B";
    Agent_Speak(L_Ident1WhatIsUserAccount3_Text);
    
    var L_Ident1WhatIsUserAccount4_Text = "�t�@�C���ɃA�N�Z�X����̂Ƀp�X���[�h��v������B";
    Agent_Speak(L_Ident1WhatIsUserAccount4_Text);
    
    var L_Ident1WhatIsUserAccount5_Text = "Web �̂��C�ɓ����ŋߖK�ꂽ�T�C�g�̈ꗗ��ۑ�����B";
    Agent_Speak(L_Ident1WhatIsUserAccount5_Text);
    
    var L_Ident1WhatIsUserAccount6_Text = "�d�v�ȃR���s���[�^�ݒ��ی삷��B";
    Agent_Speak(L_Ident1WhatIsUserAccount6_Text);
    
    var L_Ident1WhatIsUserAccount7_Text = "�e���[�U�[�̃f�X�N�g�b�v���J�X�^�}�C�Y����B";
    Agent_Speak(L_Ident1WhatIsUserAccount7_Text);
    
    var L_Ident1WhatIsUserAccount8_Text = "�ȒP�Ƀ��O�I���ł��A���[�U�[�����΂₭�؂�ւ��邱�Ƃ��ł���B";
    Agent_Speak(L_Ident1WhatIsUserAccount8_Text);
}

function Agent_Ident1Command_Benefits() 
{	
	var L_Ident1Benefits1_Text = "�ȑO�́A�R���s���[�^�����L����ƁA�ق��̃��[�U�[���l�t�@�C�����Q�Ƃł�����A�����͎g��Ȃ��Q�[����ق��̃\�t�g�E�F�A���C���X�g�[���ł�����A�R���s���[�^�ݒ��ύX�ł����肵�܂����B";
	Agent_Speak(L_Ident1Benefits1_Text);
	
	var L_Ident1Benefits2_Text = "�������̂悤�ȐS�z�͂���܂���B";
	Agent_Speak(L_Ident1Benefits2_Text);
    
    var L_Ident1Benefits3_Text = "���[�U�[ �A�J�E���g�̃Z�b�g�A�b�v�����s����ƁA�e���[�U�[�͂ق��̃��[�U�[�ɉe�����y�ڂ����ƂȂ� Windows ���J�X�^�}�C�Y�ł��܂��B";
    Agent_Speak(L_Ident1Benefits3_Text);
    
    var L_Ident1Benefits4_Text = "���[�U�[ �A�J�E���g�ɂ��Ă̏ڍׂ́A[�X�^�[�g] ���j���[���� [�w���v�ƃT�|�[�g] ���N���b�N���Ď���ɑ΂���񓚂�ق��̗L�v�ȏ����������Ă��������B";
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
    
    var L_Ident1WhatToDoNext1_Text = "���̃R���s���[�^���g���ق��̃��[�U�[�̖��O����͂�����A[����] ���N���b�N���đ����Ă��������B";
    Agent_Speak(L_Ident1WhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_Ident1WhatToDoNext2_Text = "Windows �̃Z�b�g�A�b�v�I����A���O��ύX������A��Ń��[�U�[��ǉ����邱�Ƃ��ł��܂��B";
    Agent_Speak(L_Ident1WhatToDoNext2_Text);
        
    var L_Ident1WhatToDoNext3_Text = "[�X�^�[�g] ���j���[�� [�R���g���[�� �p�l��] ���N���b�N���� [���[�U�[ �A�J�E���g]  ��I�����Ă��������B";
    Agent_Speak(L_Ident1WhatToDoNext3_Text);
}



function Agent_IdentitiesAddCommands() 
{
    var L_IdentitiesAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_IdentitiesAddCommands2_Text = "���[�U�[ �A�J�E���g�ɂ��Ēm�肽��(&A)";
    var L_IdentitiesAddCommands3_Text = "���[�U�[ �A�J�E���g���Z�b�g�A�b�v���闘�_�ɂ��Ēm�肽��(&R)";
    var L_IdentitiesAddCommands4_Text = "���ɉ���������悢���m�肽��(&W)";

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
	var L_IdentitiesAboutThisStep1_Text = "����͂��̃R���s���[�^���g���ق��̃��[�U�[�����ʂ����ʂł��B";
	Agent_Speak(L_IdentitiesAboutThisStep1_Text);
	
	var L_IdentitiesAboutThisStep2_Text = "���̃R���s���[�^���ق��̃��[�U�[�Ƌ��L����ꍇ�A�e���[�U�[�͂��ꂼ��̃A�J�E���g���Z�b�g�A�b�v���� Windows XP ���J�X�^�}�C�Y�ł��܂��B";
	Agent_Speak(L_IdentitiesAboutThisStep2_Text);
    
    var L_IdentitiesAboutThisStep3_Text = "�������邱�ƂŁA�e���[�U�[�͎����p�ɃJ�X�^�}�C�Y���ꂽ�R���s���[�^�ݒ�A�����A�l�t�@�C���AWeb �T�C�g �����N�A���̂ق��̃I�v�V�������ێ����邱�Ƃ��ł��܂��B";
    Agent_Speak(L_IdentitiesAboutThisStep3_Text);
    
    var L_IdentitiesAboutThisStep4_Text = "�R���s���[�^���N������Ƃ��ɁA���̉�ʂœ��͂������O�̂��ׂĂ����O���ɂ悤������ʂɕ\������܂��B";
    Agent_Speak(L_IdentitiesAboutThisStep4_Text);
    
    var L_IdentitiesAboutThisStep5_Text = "�e���[�U�[�̉摜���\������܂��B";
    Agent_Speak(L_IdentitiesAboutThisStep5_Text);
    
    var L_IdentitiesAboutThisStep6_Text = "[�X�^�[�g] ���j���[�� [�R���g���[�� �p�l��] ���N���b�N���� [���[�U�[ �A�J�E���g]  ���N���b�N���āA��ł��ł����O��ύX���邱�Ƃ��ł��܂��B";
    Agent_Speak(L_IdentitiesAboutThisStep6_Text);
}

function Agent_IdentitiesCommand_WhatIsUserAccount() 
{	
	var L_IdentitiesWhatIsUserAccount1_Text = "�ƒ��I�t�B�X�łق��̃��[�U�[�ƃR���s���[�^�����L����ꍇ�́A���[�U�[ �A�J�E���g���g���ƕ֗��ł��B";
	Agent_Speak(L_IdentitiesWhatIsUserAccount1_Text);
	
	var L_IdentitiesWhatIsUserAccount2_Text = "���[�U�[ �A�J�E���g���g���ƁA���̂��Ƃ��ł��܂�:";
	Agent_Speak(L_IdentitiesWhatIsUserAccount2_Text);
    
    var L_IdentitiesWhatIsUserAccount3_Text = "�ق��̃��[�U�[�̐ݒ�ɉe�����y�ڂ����ƂȂ��AWindows ���Ǘ����������\�������肷��悤�ɃJ�X�^�}�C�Y����B";
    Agent_Speak(L_IdentitiesWhatIsUserAccount3_Text);
    
    var L_IdentitiesWhatIsUserAccount4_Text = "�t�@�C���ɃA�N�Z�X����̂Ƀp�X���[�h��v������B";
    Agent_Speak(L_IdentitiesWhatIsUserAccount4_Text);
    
    var L_IdentitiesWhatIsUserAccount5_Text = "Web �̂��C�ɓ����ŋߖK�ꂽ�T�C�g�̈ꗗ��ۑ�����B";
    Agent_Speak(L_IdentitiesWhatIsUserAccount5_Text);
    
    var L_IdentitiesWhatIsUserAccount6_Text = "�d�v�ȃR���s���[�^�ݒ��ی삷��B";
    Agent_Speak(L_IdentitiesWhatIsUserAccount6_Text);
    
    var L_IdentitiesWhatIsUserAccount7_Text = "�e���[�U�[�̃f�X�N�g�b�v���J�X�^�}�C�Y����B";
    Agent_Speak(L_IdentitiesWhatIsUserAccount7_Text);
    
    var L_IdentitiesWhatIsUserAccount8_Text = "�ȒP�Ƀ��O�I���ł��A���[�U�[�����΂₭�؂�ւ��邱�Ƃ��ł���B";
    Agent_Speak(L_IdentitiesWhatIsUserAccount8_Text);
}

function Agent_IdentitiesCommand_Benefits() 
{	
	var L_IdentitiesBenefits1_Text = "�ȑO�́A�R���s���[�^�����L����ƁA�ق��̃��[�U�[���l�t�@�C�����Q�Ƃł�����A�����͎g��Ȃ��Q�[����ق��̃\�t�g�E�F�A���C���X�g�[���ł�����A�R���s���[�^�ݒ��ύX�ł����肵�܂����B";
	Agent_Speak(L_IdentitiesBenefits1_Text);
	
	var L_IdentitiesBenefits2_Text = "�������̂悤�ȐS�z�͂���܂���B";
	Agent_Speak(L_IdentitiesBenefits2_Text);
    
    var L_IdentitiesBenefits3_Text = "���[�U�[ �A�J�E���g�̃Z�b�g�A�b�v�����s����ƁA�e���[�U�[�͂ق��̃��[�U�[�ɉe�����y�ڂ����ƂȂ� Windows ���J�X�^�}�C�Y�ł��܂��B";
    Agent_Speak(L_IdentitiesBenefits3_Text);
    
    var L_IdentitiesBenefits4_Text = "���[�U�[ �A�J�E���g�ɂ��Ă̏ڍׂ́A[�X�^�[�g] ���j���[���� [�w���v�ƃT�|�[�g] ���N���b�N���Ď���ɑ΂���񓚂�ق��̗L�v�ȏ����������Ă��������B";
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
    
    var L_IdentitiesWhatToDoNext1_Text = "���̃R���s���[�^���g���ق��̃��[�U�[�̖��O����͂�����A[����] ���N���b�N���đ����Ă��������B";
    Agent_Speak(L_IdentitiesWhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_IdentitiesWhatToDoNext2_Text = "Windows �̃Z�b�g�A�b�v�I����A���O��ύX������A��Ń��[�U�[��ǉ����邱�Ƃ��ł��܂��B";
    Agent_Speak(L_IdentitiesWhatToDoNext2_Text);
        
    var L_IdentitiesWhatToDoNext3_Text = "[�X�^�[�g] ���j���[�� [�R���g���[�� �p�l��] ���N���b�N���� [���[�U�[ �A�J�E���g]  ��I�����Ă��������B";
    Agent_Speak(L_IdentitiesWhatToDoNext3_Text);
}



function Agent_KeybdAddCommands() 
{
	var L_KeybdMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_KeybdMenuCommand2_Text = "�����̒n���I��������@�ɂ��Ēm�肽��(&D)";
    var L_KeybdMenuCommand3_Text = "�����̌����I��������@�ɂ��Ēm�肽��(&O)";
    var L_KeybdMenuCommand4_Text = "�����̃L�[�{�[�h��I��������@�ɂ��Ēm�肽��(&S)";

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
    var L_KeybdAboutThisStep1_Text = "���ꂩ��A���[�U�[�̌���ݒ�A�n��A�^�C�� �]�[���ȂǂɊ�Â��ăe�L�X�g�A���t�A�����Ȃǂ�\��������@��I�����܂��B";
    Agent_Speak(L_KeybdAboutThisStep1_Text);
        
    var L_KeybdAboutThisStep2_Text = "���Ƃ��΂��̉�ʂł́A�Z��ł���ꏊ�ɍł��߂��n��A�R���s���[�^�ōł��悭�g�������L�[�{�[�h�Ȃǂ�I�����܂��B";
    Agent_Speak(L_KeybdAboutThisStep2_Text);
        
    var L_KeybdAboutThisStep3_Text = "���t�A�����A�ʉ݂Ȃǂ��������\������܂��B";
    Agent_Speak(L_KeybdAboutThisStep3_Text);
        
    var L_KeybdAboutThisStep4_Text = "���Ƃ��΁A�n��ɕč��A����ɉp���I�������ꍇ�A�ʉ݂͕č��h���ŕ\������܂��B";
    Agent_Speak(L_KeybdAboutThisStep4_Text);

    var L_KeybdAboutThisStep5_Text = "�������A�n��ɉp����I�������ꍇ�ɂ́A�p���|���h���\������܂��B";
    Agent_Speak(L_KeybdAboutThisStep5_Text);
}

function Agent_KeybdHowToSelectRegion() 
{     
    Agent_GestureAtElement(g.selRegion, "Left");
     
    var L_KeybdHowToSelectRegion1_Text = "�n��́A���̈ꗗ�ɒn�揇�ɕ\������܂��B";
    Agent_Speak(L_KeybdHowToSelectRegion1_Text);	
   
    var L_KeybdHowToSelectRegion2_Text = "���̈ꗗ�����N���b�N���邩�ATab �L�[�������Ă��������B";
    Agent_Speak(L_KeybdHowToSelectRegion2_Text);	
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selRegion, "Right");
        
    var L_KeybdHowToSelectRegion3_Text = "�����̏��������{�^�����N���b�N���邩�A�L�[�{�[�h�̏㉺�̕����L�[���g���Ĉꗗ���X�N���[�����Ă��������B";
    Agent_Speak(L_KeybdHowToSelectRegion3_Text);
        
    var L_KeybdHowToSelectRegion4_Text = "�Z��ł���ꏊ�ɍł��߂��n�悪����������A���̒n����N���b�N���邩�AEnter �L�[�������Ă��������B";
    Agent_Speak(L_KeybdHowToSelectRegion4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.RegionName, "Left");

    var L_KeybdHowToSelectRegion5_Text = "�I�������n�悪���̗��ɕ\������܂��B";
    Agent_Speak(L_KeybdHowToSelectRegion5_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectLanguage() 
{        		
    var L_KeybdHowToSelectLanguage1_Text = "�ʐM�ɍł��悭�g�������I�����Ă��������B";
    Agent_Speak(L_KeybdHowToSelectLanguage1_Text);
        
    var L_KeybdHowToSelectLanguage2_Text = "���Ƃ��΁A��b�ōł��悭�g�����ꂪ�X�y�C����ł��A�g���v���O������t�@�C�����p��ł���ꍇ�́A�p���I�����Ă��������B";
    Agent_Speak(L_KeybdHowToSelectLanguage2_Text);   
        
    Agent_GestureAtElement(g.selLang, "Left");  
        
    var L_KeybdHowToSelectLanguage3_Text = "����͂��̈ꗗ�Ɍ��ꏇ�ɕ\������܂��B";
    Agent_Speak(L_KeybdHowToSelectLanguage3_Text);

    var L_KeybdHowToSelectLanguage4_Text = "�������N���b�N���邩�ATab �L�[�������Ă��������B";
    Agent_Speak(L_KeybdHowToSelectLanguage4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selLang, "Right");

    var L_KeybdHowToSelectLanguage5_Text = "�����̏��������{�^�����N���b�N���邩�A�L�[�{�[�h�̏㉺�̕����L�[���g���Ĉꗗ���X�N���[�����Ă��������B";
    Agent_Speak(L_KeybdHowToSelectLanguage5_Text);

    var L_KeybdHowToSelectLanguage6_Text = "��]���錾�ꂪ����������A���̃^�C�� �]�[�����N���b�N���邩�AEnter �L�[�������Ă��������B";
    Agent_Speak(L_KeybdHowToSelectLanguage6_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.LangName, "Left");

    var L_KeybdHowToSelectLanguage7_Text = "�I���������ꂪ���̗��ɕ\������܂��B";
    Agent_Speak(L_KeybdHowToSelectLanguage7_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectKeyboard() 
{		
    var L_KeybdHowToSelectKeyboard1_Text = "�L�[�{�[�h�͂��̈ꗗ�ɃL�[�{�[�h���ɕ\������܂��B";
    Agent_Speak(L_KeybdHowToSelectKeyboard1_Text);
    
    Agent_GestureAtElement(g.selKeyboard, "Left");
        
    var L_KeybdHowToSelectKeyboard2_Text = "�������N���b�N���邩�ATab �L�[�������Ă��������B";
    Agent_Speak(L_KeybdHowToSelectKeyboard2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selKeyboard, "Right");
        
    var L_KeybdHowToSelectKeyboard3_Text = "�����̏��������{�^�����N���b�N���邩�A�L�[�{�[�h�̏㉺�̕����L�[���g���Ĉꗗ���X�N���[�����Ă��������B";
    Agent_Speak(L_KeybdHowToSelectKeyboard3_Text);
        
    var L_KeybdHowToSelectKeyboard4_Text = "��]����L�[�{�[�h������������A���̃^�C�� �]�[�����N���b�N���邩�AEnter �L�[�������Ă��������B";
    Agent_Speak(L_KeybdHowToSelectKeyboard4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.KeyboardName, "Left");

    var L_KeybdHowToSelectKeyboard5_Text = "�I�������L�[�{�[�h�����̗��ɕ\������܂��B";
    Agent_Speak(L_KeybdHowToSelectKeyboard5_Text);
    
    Agent_Play("RestPose");
}



function Agent_EulaAddCommands() 
{
    var L_EulaCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_EulaCommand2_Text = "�������������@���m�肽��(&O)";
    var L_EulaCommand3_Text = "�g�p�����_��Ƃ͉�����m�肽��(&A)";
    var L_EulaCommand4_Text = "�g�p�����_��̓��e��m�肽��(&D)";
    var L_EulaCommand5_Text = "[����] �𗘗p�ł��Ȃ����R��m�肽��(&I)";
    var L_EulaCommand6_Text = "���ɉ���������悢���m�肽��(&W)";

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
        var L_EulaMenuCommand5_Text = "[����] �𗘗p�ł��Ȃ����R��m�肽��(&I)";

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
    var L_EulaAboutThisStep1_Text = "����͕\�����ꂽ Microsoft Windows �g�p�����_��ɓ��ӂ��邩�ǂ��������߂��ʂł��B";
    Agent_Speak(L_EulaAboutThisStep1_Text);		
    
    Agent_GestureAtElement(g.txtEULA,"Left");
        
    var L_EulaAboutThisStep2_Text = "Windows ���g���ɂ́A���̌_��ɓ��ӂ���K�v������܂��B";
    Agent_Speak(L_EulaAboutThisStep2_Text);
    
    Agent_Play("RestPose");
}

function Agent_EulaHowToAnswer() 
{		
    Agent_GestureAtElement(g.radioAgree,"Left");
    
    var L_EulaHowToAnswer1_Text = "�����̍��ׂ̔����ۂɃ|�C���^�����킹�āA1 ��N���b�N���Ă��������B";
    Agent_Speak(L_EulaHowToAnswer1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaHowToAnswer2_Text = "[����] ���N���b�N���Ă��������B";
    Agent_Speak(L_EulaHowToAnswer2_Text);
}

function Agent_EulaWhatIsEula() 
{		
    var L_EulaWhatIsEula1_Text = "Microsoft ���i�̎g�p�́A�g�p�����_��ƒ��쌠�@�Ɋ�Â��Ă��܂��B";
    Agent_Speak(L_EulaWhatIsEula1_Text);
        
    var L_EulaWhatIsEula2_Text = "�g�p�����_��̓��C�Z���X����鐻�i�̖@�I�g�p�������_��ŁA���̐��i���R���s���[�^�Ŏg�p���邽�߂̓���̌�����t�^������̂ł��B";
    Agent_Speak(L_EulaWhatIsEula2_Text);
}

function Agent_EulaWhatDoesEulaSay() 
{		
    var L_EulaWhatDoesEulaSay1_Text = "�g�p�����_��ɓ��ӂ�����AWindows XP ���g�p���錠���Ƃ��̂ق��̌������t�^����܂��B";
    Agent_Speak(L_EulaWhatDoesEulaSay1_Text);
        
    var L_EulaWhatDoesEulaSay2_Text = "�܂��AWindows XP ���g�p�����ł̓���̐������K�p����܂��B";
    Agent_Speak(L_EulaWhatDoesEulaSay2_Text);	
    
    Agent_GestureAtElement(g.txtEULA,"Right");	
        
    var L_EulaWhatDoesEulaSay3_Text = "�ڍׂ�\������ɂ́A'���C�Z���X�̋���' �܂ŉ��ɃX�N���[�����Ă��������B";
    Agent_Speak(L_EulaWhatDoesEulaSay3_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatDoesEulaSay4_Text = "�g�p�����_��ɂ͂܂��A�ۏ؂�o�b�N�A�b�v�܂��̓A�[�J�C�u�Ɋւ�������ɂ��Ă��L�ڂ���Ă��܂��B";
    Agent_Speak(L_EulaWhatDoesEulaSay4_Text);
}

function Agent_EulaWhereIsNextButton() 
{		
    var L_EulaWhereIsNextButton1_Text = "�g�p�����_��ɓ��ӂ��邩�ǂ�����I�����Ă��Ȃ����߁A[����] �̃{�^���͎g�p�ł��܂���B";
    Agent_Speak(L_EulaWhereIsNextButton1_Text);
        
    var L_EulaWhereIsNextButton2_Text = "�ŏ��� [���ӂ��܂�] �܂��� [���ӂ��܂���] ���N���b�N���Ă��������B";
    Agent_Speak(L_EulaWhereIsNextButton2_Text);
}

function Agent_EulaWhatToDoNext() 
{			
    Agent_GestureAtElement(g.radioAgree,"Left");
    	
    var L_EulaWhatToDoNext1_Text = "�g�p�����_���ǂݏI������A���ӂ���ꍇ�� [�͂�] ���N���b�N���Ă��������B";
    Agent_Speak(L_EulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatToDoNext2_Text = "���ӂ��Ȃ��ꍇ�� [������] ���N���b�N���Ă��������B";
    Agent_Speak(L_EulaWhatToDoNext2_Text);
        
    var L_EulaWhatToDoNext3_Text = "Windows �̎g�p�𑱍s����ꍇ�́A���̋����_��ɓ��ӂ���K�v������܂��B";
    Agent_Speak(L_EulaWhatToDoNext3_Text);
    			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_EulaWhatToDoNext4_Text = "���̉�ʂɐi�ނɂ́A[����] ���N���b�N���Ă��������B";
    Agent_Speak(L_EulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_BadEulaAddCommands() {

    var L_BadEulaCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_BadEulaCommand2_Text = "�g�p�����_��̓��e��m�肽��(&A)";
    var L_BadEulaCommand3_Text = "�g�p�����_��ɓ��ӂ��Ȃ��ꍇ�ɂǂ����邩�m�肽��(&I)";
    var L_BadEulaCommand4_Text = "���ɉ���������悢���m�肽��(&W)";

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
    var L_BadEulaAboutThisStep1_Text = "�O�̉�ʂŁA���ӂ��Ȃ����Ƃ�I�������̂ŁA";
    Agent_Speak(L_BadEulaAboutThisStep1_Text);

    var L_BadEulaAboutThisStep2_Text = "Windows ���g�p���邱�Ƃ͂ł��܂���B";
    Agent_Speak(L_BadEulaAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadEulaAboutThisStep3_Text = "�������A[�߂�] ���N���b�N���đO�̉�ʂɖ߂��ċ����_��ɓ��ӂ��邱�Ƃ��ł��܂��B";
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
        
    var L_BadEulaAboutThisStep4_Text = "�܂��́AWindows �̎g�p���~���A�R���s���[�^�̓d����؂邱�Ƃ��m�F���܂��B";
    Agent_Speak(L_BadEulaAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_BadEulaWhatDoesEulaSay()
{
    var L_BadEulaWhatDoesEulaSay1_Text = "�g�p�����_��ɓ��ӂ�����AWindows XP ���g�p���錠���Ƃ��̂ق��̌������t�^����܂��B";
    Agent_Speak(L_BadEulaWhatDoesEulaSay1_Text);

    var L_BadEulaWhatDoesEulaSay2_Text = "�܂��AWindows XP ���g�p�����ł̓���̐������K�p����܂��B";
    Agent_Speak(L_BadEulaWhatDoesEulaSay2_Text);

    var L_BadEulaWhatDoesEulaSay3_Text = "�ڍׂɂ��ẮA[�߂�] ���N���b�N���Ďg�p�����_����J���A���փX�N���[�����āu���C�Z���X�̋����v�����ǂ݂��������B";
    Agent_Speak(L_BadEulaWhatDoesEulaSay3_Text);
        
    var L_BadEulaWhatDoesEulaSay4_Text = "�g�p�����_��ɂ͂܂��A�ۏ؂�o�b�N�A�b�v�܂��̓A�[�J�C�u�Ɋւ�������ɂ��Ă��L�ڂ���Ă��܂��B";
    Agent_Speak(L_BadEulaWhatDoesEulaSay4_Text);
}

function Agent_BadEulaWhatIfIDontAcceptEula()
{
    var L_BadEulaWhatIfIDontAcceptEula1_Text = "EULA �� Windows XP ���g��������t�^���邽�߂̂��̂ł��BWindows XP �̎g�p���J�n����O�ɁA����ɓ��ӂ���K�v������܂��B";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadEulaWhatIfIDontAcceptEula2_Text = "���ӂ��Ȃ��ꍇ�́A[�V���b�g�_�E��] ���N���b�N���ăR���s���[�^�̓d����؂��Ă��������B ";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula2_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatIfIDontAcceptEula3_Text = "�R���s���[�^���ċN������ƁA���̉�ʂɖ߂�܂��B";
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
    
    var L_BadEulaWhatToDoNext1_Text = "�g�p�����_��ɓ��ӂ���ꍇ�́A[�߂�] ���N���b�N���Ă��������B";
    Agent_Speak(L_BadEulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatToDoNext2_Text = "���̃v���Z�X�𑱍s�� Windows �̎g�p���J�n����ɂ͎g�p�����_��ɓ��ӂ���K�v������܂��B";
    Agent_Speak(L_BadEulaWhatToDoNext2_Text);

    var L_BadEulaWhatToDoNext3_Text = "���ӂ��Ȃ��ꍇ�́A[�V���b�g�_�E��] ���N���b�N���ăR���s���[�^�̓d����؂��Ă��������B ";
    Agent_Speak(L_BadEulaWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_BadEulaWhatToDoNext4_Text = "�R���s���[�^���ċN������ƁA���̉�ʂɖ߂�܂��B";
    Agent_Speak(L_BadEulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}




function Agent_ProductKeyAddCommands() 
{
    var L_ProductKeyAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_ProductKeyAddCommands2_Text = "�v���_�N�g �L�[�ɂ��Ēm�肽��(&A)";
    var L_ProductKeyAddCommands4_Text = "���ɉ���������悢���m�肽��(&W)";

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

        var L_ProductKeyAddCommands3_Text = "[����] �𗘗p�ł��Ȃ����R��m�肽��(&I)";

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
    var L_ProductKeyAboutThisStep1_Text = "����́A�R���s���[�^�̐���������񋟂���� 25 ��������Ȃ�v���_�N�g �L�[����͂����ʂł��B";
    Agent_Speak(L_ProductKeyAboutThisStep1_Text);

    var L_ProductKeyAboutThisStep2_Text = "�v���_�N�g �L�[�� CD �P�[�X�ɓ\���Ă��Ȃ��ꍇ�́A�R���s���[�^�܂��̓}�j���A���w�͂��߂Ɂx�̗����ɓ\���Ă� Certificate of Authenticity (COA) �̃X�e�b�J�[���m�F���Ă��������B";
    Agent_Speak(L_ProductKeyAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pid1,"Left");

    var L_ProductKeyAboutThisStep3_Text = "�����ɓ��͂���镶���͎����I�ɑ啶���ɂȂ�܂��B";
    Agent_Speak(L_ProductKeyAboutThisStep3_Text);
    
    Agent_Play("RestPose");
        
    var L_ProductKeyAboutThisStep4_Text = "���̃X�e�b�v�̌�ŁAMicrosoft �ւ̃��[�U�[�o�^�̉�ʂ��\������܂��B";
    Agent_Speak(L_ProductKeyAboutThisStep4_Text);
        
    var L_ProductKeyAboutThisStep5_Text = "�Z���A�����A�d�q���[���A�h���X����͂��܂��B";
    Agent_Speak(L_ProductKeyAboutThisStep5_Text);
}

function Agent_ProductKeyWhatIsProdKey()
{
    var L_ProductKeyWhatIsProdKey1_Text = "���ׂĂ� Windows ���i�ɂ͂��ꂼ��قȂ�v���_�N�g �L�[�����Ă��܂��B";
    Agent_Speak(L_ProductKeyWhatIsProdKey1_Text);

    var L_ProductKeyWhatIsProdKey2_Text = "�v���_�N�g �L�[�ɂ���āA";
    Agent_Speak(L_ProductKeyWhatIsProdKey2_Text);

    var L_ProductKeyWhatIsProdKey3_Text = "���K�� Microsoft ���i���ǂ��������ʂ��܂��B";
    Agent_Speak(L_ProductKeyWhatIsProdKey3_Text);
        
    var L_ProductKeyWhatIsProdKey4_Text = "����ɁA�v���_�N�g �L�[������΁AWindows �̃T�|�[�g�A���i�T�[�r�X�A�A�b�v�O���[�h�Ȃǂ̃T�[�r�X���󂯂邱�Ƃ��ł��܂��B";
    Agent_Speak(L_ProductKeyWhatIsProdKey4_Text);
}

function Agent_ProductKeyWhyNextNotAvailable()
{
    var L_ProductKeyWhyNextNotAvailable1_Text = "�L���ȃv���_�N�g �L�[�����͂���Ȃ������̂� [����] ���N���b�N���邱�Ƃ͂ł��܂���B";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable1_Text);

    var L_ProductKeyWhyNextNotAvailable2_Text = "�v���_�N�g �L�[�𐳂������͂��Ă��������B";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable2_Text);

    var L_ProductKeyWhyNextNotAvailable3_Text = "���̌�A[����] ���N���b�N���āA��ɐi��ł��������B";
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
    
    var L_ProductKeyWhatToDoNext1_Text = "�L���ȃv���_�N�g �L�[����͂�����A[����] ���N���b�N���Ă��������B";
    Agent_Speak(L_ProductKeyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}




function Agent_Reg1AddCommands() 
{
    var L_Reg1Command1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_Reg1Command2_Text = "���[�U�[�o�^�ɂ��Ēm�肽��(&E)";
    var L_Reg1Command3_Text = "���������[�U�[�o�^������@�ɂ��Ēm�肽��(&O)";
    var L_Reg1Command4_Text = "��Ń��[�U�[�o�^�ł��邩�m�肽��(&R)";
    var L_Reg1Command5_Text = "���[�U�[�o�^�̈Ӌ`�ɂ��Ēm�肽��(&A)";
    var L_Reg1Command6_Text = "���̋��L�ɂ��Ēm�肽��(&M)";

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
    var L_Reg1AboutThisStep1_Text = "�������A���[�U�[�o�^�̍ŏ��̉�ʂł��B";
    Agent_Speak(L_Reg1AboutThisStep1_Text);

    var L_Reg1AboutThisStep2_Text = "�����ł́AMicrosoft �ւ̃��[�U�[�o�^���s���܂��B";
    Agent_Speak(L_Reg1AboutThisStep2_Text);

    var L_Reg1AboutThisStep3_Text = "�o�^����ƁAMicrosoft �ڋq�T�[�r�X���󂯂邱�Ƃ��ł��܂��B";
    Agent_Speak(L_Reg1AboutThisStep3_Text);
        
    var L_Reg1AboutThisStep4_Text = "�ڋq�T�[�r�X�Ƃ́A���i�A�b�v�f�[�g�̒ʒm�A�����  Microsoft ���i�T�|�[�g �T�[�r�X�ւ̃A�N�Z�X�Ȃǂł��B";
    Agent_Speak(L_Reg1AboutThisStep4_Text);
        
    var L_Reg1AboutThisStep5_Text = "�����Ń��[�U�[�o�^���邩�ǂ�����I�����܂��B";
    Agent_Speak(L_Reg1AboutThisStep5_Text);
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");
        
    var L_Reg1AboutThisStep6_Text = "Microsoft �̃v���C�o�V�[ �|���V�[�̏ڍׂɂ��Ēm�肽���ꍇ�́A���̃����N���N���b�N���Ă��������B";
    Agent_Speak(L_Reg1AboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1AboutRegistration()
{    
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1AboutRegistration1_Text = "���[�U�[�o�^�̎葱�����J�n����ɂ͂������N���b�N���Ă���A[����] ���N���b�N���Ă��������B";
    Agent_Speak(L_Reg1AboutRegistration1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.rb_reg_ms_no,"Left");

    var L_Reg1AboutRegistration2_Text = "���[�U�[�o�^���Ȃ��ꍇ�́A2 �Ԗڂ̃I�v�V�������N���b�N���Ă��� [����] ���N���b�N���Ă��������B";
    Agent_Speak(L_Reg1AboutRegistration2_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1HowToRegister()
{      
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1HowToRegister1_Text = "Windows �����[�U�[�o�^����ɂ́A[�͂�] ���I������Ă��邱�Ƃ��m�F���Ă��������B";
    Agent_Speak(L_Reg1HowToRegister1_Text); 
    
    Agent_Play("RestPose");

    var L_Reg1HowToRegister2_Text = "[����] ���N���b�N���đ��s���Ă��������B";
    Agent_Speak(L_Reg1HowToRegister2_Text);
}

function Agent_Reg1RegisterLater()
{
    var L_Reg1RegisterLater1_Text = "�����[�U�[�o�^���Ȃ��ꍇ�́AWindows �̃Z�b�g�A�b�v������������� Windows �����[�U�[�o�^���邱�Ƃ��ł��܂��B";
    Agent_Speak(L_Reg1RegisterLater1_Text);

    var L_Reg1RegisterLater2_Text = "[�X�^�[�g] ���j���[�� [�t�@�C�������w�肵�Ď��s] ���N���b�N���Aregwiz /r �Ɠ��͂��Ă��������B";
    Agent_Speak(L_Reg1RegisterLater2_Text);

    var L_Reg1RegisterLater3_Text = "�����̃X�e�b�v��Y�ꂽ�ꍇ�́A[�X�^�[�g] ���j���[�� [�w���v�ƃT�|�[�g] ���N���b�N����Ƌ^��ɑ΂���񓚂�ق��̗L�v�ȏ��������邱�Ƃ��ł��܂��B";
    Agent_Speak(L_Reg1RegisterLater3_Text);
}

function Agent_Reg1WhyRegister()
{
    var L_Reg1WhyRegister1_Text = "Microsoft �փ��[�U�[�o�^����ƁAMicrosoft �̌ڋq�T�[�r�X���󂯂邱�Ƃ��ł��܂��B";
    Agent_Speak(L_Reg1WhyRegister1_Text);

    var L_Reg1WhyRegister2_Text = "�ڋq�T�[�r�X�Ƃ́A���i�A�b�v�f�[�g�̒ʒm�A����� Microsoft ���i�T�|�[�g �T�[�r�X�ւ̃A�N�Z�X�Ȃǂł��B";
    Agent_Speak(L_Reg1WhyRegister2_Text);
}

function Agent_Reg1AboutSharingInfo()
{
    
    if (!window.external.get_RetailOOBE()) 
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "���̃I�v�V�������I���ɂ���ƁA���[�U�[�o�^��� Microsoft ����уR���s���[�^�������ɑ��M����܂��B";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text); 
    
        Agent_Play("RestPose");
    }
    else
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "�����̃I�v�V�����̃`�F�b�N���I���ɂ���ƁA���[�U�[�o�^��� Microsoft �ɑ��M����܂��B";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");     
    }
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");

    var L_Reg1AboutSharingInfo2_Text = "Microsoft �̃v���C�o�V�[ �|���V�[�̏ڍׂɂ��ẮA���̃����N���N���b�N���Ă��������B";
    Agent_Speak(L_Reg1AboutSharingInfo2_Text);
    
    Agent_Play("RestPose");
    
    if (!window.external.get_RetailOOBE()) 
    {           
        Agent_GestureAtElement(g.reg1_spn3,"Left");
                
        var L_Reg1AboutSharingInfo3_Text = "%1 �̃v���C�o�V�[ �|���V�[�̏ڍׂɂ��ẮA���̃����N���N���b�N���Ă��������B";
        Agent_Speak(ApiObj.FormatMessage(L_Reg1AboutSharingInfo3_Text, g_OEMNameStr));
    
        Agent_Play("RestPose");
    }
}




function Agent_Reg3AddCommands() 
{
    var L_Reg3Command1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_Reg3Command2_Text = "���̕ύX���@�ɂ��Ēm�肽��(&O)";
    var L_Reg3Command3_Text = "���̋��L�ɂ��Ēm�肽��(&M)";

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
    var L_Reg3AboutThisStep1_Text = "Microsoft Windows �����[�U�[�o�^����ɂ́A���̉�ʂŕK�v�ȏ�����͂���K�v������܂��B";
    Agent_Speak(L_Reg3AboutThisStep1_Text);
    
    Agent_GestureAtElement(g.UserCity,"Left");

    var L_Reg3AboutThisStep2_Text = "'�ȗ��\' �ƂȂ��Ă��闓�����������̂��ׂĂɏ�����͂��Ă��������B";
    Agent_Speak(L_Reg3AboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_Reg3AboutThisStep3_Text = "'�ȗ��\' �ƂȂ��Ă��闓���\�Ȍ�����͂��Ă��������B";
    Agent_Speak(L_Reg3AboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_Reg3AboutThisStep4_Text = "���͂��I�������A[����] ���N���b�N���Ă��������B";
    Agent_Speak(L_Reg3AboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg3HowToChangeInfo()
{
    var L_Reg3HowToChangeInfo1_Text = "�e���ɂ͉������邩�������q���g������܂��B";
    Agent_Speak(L_Reg3HowToChangeInfo1_Text);
    
    Agent_GestureAtElement(g.UserLastName,"Left");

    var L_Reg3HowToChangeInfo2_Text = "���Ƃ��΁A[��] �̗����N���b�N���ē��͂��J�n���܂��B";
    Agent_Speak(L_Reg3HowToChangeInfo2_Text);

    var L_Reg3HowToChangeInfo3_Text = "�N���b�N����ƁA���̒��ɓ_�ł���c�����\������܂��B������J�[�\���ƌĂт܂��B";
    Agent_Speak(L_Reg3HowToChangeInfo3_Text);

    var L_Reg3HowToChangeInfo4_Text = "���̂܂ܓ��͂���ƁA�J�[�\���̈ʒu�ɕ������}������܂��B";
    Agent_Speak(L_Reg3HowToChangeInfo4_Text);
    
    Agent_Play("RestPose");

    var L_Reg3HowToChangeInfo5_Text = "�L�[�{�[�h�̍��E�̕����L�[�������ƁA�J�[�\���̈ʒu���ύX����܂��B";
    Agent_Speak(L_Reg3HowToChangeInfo5_Text);

    var L_Reg3HowToChangeInfo6_Text = "Delete �L�[���g���đ}���|�C���g�̌�̕������폜������ABackspace �L�[���g���đ}���|�C���g�̑O�̕������폜�����肷�邱�Ƃ��ł��܂��B";
    Agent_Speak(L_Reg3HowToChangeInfo6_Text);

    var L_Reg3HowToChangeInfo7_Text = "������}������ꍇ�́A���̒��̕�����ǉ�����ꏊ�Ƀ|�C���^��u���ăN���b�N���܂��B";
    Agent_Speak(L_Reg3HowToChangeInfo7_Text);

    var L_Reg3HowToChangeInfo8_Text = "���ꂩ��A�}�����镶������͂��܂��B";
    Agent_Speak(L_Reg3HowToChangeInfo8_Text);

    var L_Reg3HowToChangeInfo9_Text = "���ɓ��͂��Ȃ��Ńq���g���\�����ꂽ�܂܂ł��S�z����K�v�͂���܂���B";
    Agent_Speak(L_Reg3HowToChangeInfo9_Text);

    var L_Reg3HowToChangeInfo10_Text = "�q���g�̓w���v�̂��߂ɕ\������Ă��邾���ŁA���[�U�[�o�^���ɂ͂Ȃ�܂���B";
    Agent_Speak(L_Reg3HowToChangeInfo10_Text);
}

function Agent_Reg3AboutSharingInfo()
{    
    if (!window.external.get_RetailOOBE()) 
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
        
        var L_Reg3AboutSharingInfo1_Text = "���̃I�v�V�������I���ɂ���ƁA���[�U�[�o�^��� Microsoft ����уR���s���[�^�������ɑ��M����܂��B";
        Agent_Speak(L_Reg3AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");
    }
    else
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
         
        var L_Reg3AboutSharingInfo1_Text = "�����̃I�v�V�����̃`�F�b�N���I���ɂ���ƁA���[�U�[�o�^��� Microsoft �ɑ��M����܂��B";
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

        

        L_Register3PlayCheckBoxScript1_Text = "���̉�ʂ̃��[�U�[�o�^���́AMicrosoft �ƃR���s���[�^�̐������̗����ɑ��M����܂��B";
        L_Register3PlayCheckBoxScript2_Text = "���̉�ʂ̃��[�U�[�o�^���́AMicrosoft �݂̂ɑ��M����܂��B";
        L_Register3PlayCheckBoxScript3_Text = "���̉�ʂ̃��[�U�[�o�^���́A�R���s���[�^�̐������݂̂ɑ��M����܂��B";
        L_Register3PlayCheckBoxScript4_Text = "���̉�ʂ̃��[�U�[�o�^���́AMicrosoft �ƃR���s���[�^�̐������̂ǂ���ɂ����M����܂���B";

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

        var L_Register3PlayCheckBoxScript5_Text = "���i�̃A�b�v�f�[�g����o�^���[�U�[�̓��T�Ȃǂ̂��m�点�́A�����Ń��[�U�[�o�^���ꂽ����֑����܂��B";
        Agent_Speak(L_Register3PlayCheckBoxScript5_Text);

        var L_Register3PlayCheckBoxScript6_Text = "���̐ݒ��ύX����ꍇ�́A";
        Agent_Speak(L_Register3PlayCheckBoxScript6_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(elem, "TopCenterWidth");
		else
			Agent_GestureAtElement(elem, "Left");

        var L_Register3PlayCheckBoxScript7_Text = "���̃{�b�N�X���N���b�N���Ă��������B";
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

        var L_Register3EncourageTabKey1_Text = "�����Ɉړ�����ɂ́ATab �L�[�������Ă��������B";
        Agent_Speak(L_Register3EncourageTabKey1_Text);
}

function Agent_Register3EncourageMouseClick() {

        var L_Register3EncourageMouseClick1_Text = "���̗��Ƀ}�E�X �|�C���^���ړ����āA�}�E�X�̍��{�^�����N���b�N���Ă��������B";
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

                        var L_Register3PlayElementScript1_Text = "�����ɖ��O����͂��Ă��������B���Ƃ��΁A�u���Y�v �Ɠ��͂��܂��B";
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

                        var L_Register3PlayElementScript3_Text = "�����Ƀ~�h�� �l�[������͂��Ă��������B";
                        Agent_Speak(L_Register3PlayElementScript3_Text);

                        break;

                case "UserLastName":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript4_Text = "�����ɖ�������͂��Ă��������B���Ƃ��΁A�u�R�c�v �Ɠ��͂��܂��B";
                        Agent_Speak(L_Register3PlayElementScript4_Text);

                        break;

                case "UserAddress":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript5_Text = "�����ɔԒn����͂��Ă��������B���Ƃ��΁A�u���z���u 1-18-1�v �Ɠ��͂��܂��B";
                        Agent_Speak(L_Register3PlayElementScript5_Text);

                        break;

                case "UserAddress2":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        Agent_Play("Think");

                        var L_Register3PlayElementScript6_Text = "�}���V�����A�A�p�[�g���Ȃǂ́A�����ɓ��͂��Ă��������B�K�v�Ȃ���΁ATab �L�[�Ŏ��ֈړ����Ă��������B";
                        Agent_Speak(L_Register3PlayElementScript6_Text);

                        Agent_Play("RestPose");

                        break;

                case "UserCity":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript7_Text = "�����Ɏs�撬������͂��Ă��������B���Ƃ��΁A�u���z�s�v �Ɠ��͂��܂��B";
                        Agent_Speak(L_Register3PlayElementScript7_Text);

                        break;

                case "UserStateTextBox":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript8_Text = "�����ɓs���{������͂��Ă��������B���Ƃ��΁A�u�����s�v �Ɠ��͂��܂��B";
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
                                var L_Register3PlayElementScript91_Text = "�s���{����I�����Ă��������B";
                                Agent_Speak(L_Register3PlayElementScript91_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript92_Text = "�s���{���̈ꗗ��\������ɂ́A�}�E�X�ŉ����{�^�����N���b�N���Ă��������B";
                                Agent_Speak(L_Register3PlayElementScript92_Text);

                        }

                        else if (elem.id == "selCAProvince") {
                                var L_Register3PlayElementScript93_Text = "�s���{����I�����Ă��������B";
                                Agent_Speak(L_Register3PlayElementScript93_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript94_Text = "�s���{���̈ꗗ��\������ɂ́A�}�E�X �|�C���^�ŉ����{�^�����N���b�N���Ă��������B";
                                Agent_Speak(L_Register3PlayElementScript94_Text);

                        }

                        else {
                                var L_Register3PlayElementScript95_Text = "�}�E�X �|�C���^�ŉ����{�^�����N���b�N���āA���܂��͒n���I�����Ă��������B";
                                Agent_Speak(L_Register3PlayElementScript95_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript96_Text = "���܂��͒n��̈ꗗ��\������ɂ́A�}�E�X �|�C���^�ŉ����{�^�����N���b�N���Ă��������B";
                                Agent_Speak(L_Register3PlayElementScript96_Text);

                        }

                        Agent_Play("Explain");

                        var L_Register3PlayElementScript11_Text = "���ɁA�s���{�������N���b�N���đI�����Ă��������B";
                        var L_Register3PlayElementScript12_Text = "���ɁA�s���{�������N���b�N���đI�����Ă��������B";
                        var L_Register3PlayElementScript13_Text = "���ɁA���܂��͒n����N���b�N���đI�����Ă��������B";

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

                        var L_Register3PlayElementScript14_Text = "�����ɗX�֔ԍ�����͂��Ă��������B";
                        Agent_Speak(L_Register3PlayElementScript14_Text);

                        break;

                case "UserEmailAddress":

                        if (elem.value == "") {

							if (g.document.dir == "rtl") 
								Agent_GestureAtElement(elem, "Left");
		
							else
								Agent_GestureAtElement(elem, "Right");

                            var L_Register3PlayElementScript15_Text = "�d�q���[�� �A�h���X�̋L���͔C�ӂł����A�L�����Ă������������q�l�ɗD��I�ɂ��A���������グ�܂��B";
                            Agent_Speak(L_Register3PlayElementScript15_Text);
							
							g_bAgentRegister3ShortEmail = true;
							
							Agent_Play("Explain");
							
                            var L_Register3PlayElementScript16_Text = "�d�q���[�� �A�h���X���Ȃ��ꍇ�́A���̗�����ɂ��Ă��������B";
                            Agent_Speak(L_Register3PlayElementScript16_Text);
							
							Agent_Play("Blink");
							                             
                        }
                        
                        else if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) {

	                       if (g_strAgentLastFocusID == "UserEmailAddress") {

								Agent_Play("Decline");
								
								var L_Register3PlayElementScript17_Text = "�d�q���[�� �A�h���X������������܂���B";
								Agent_Speak(L_Register3PlayElementScript17_Text);

								Agent_ExplainEmailAddress();
								
								if (g.document.dir == "rtl")
									Agent_GestureAtElement(elem, "Left");
								
								else
									Agent_GestureAtElement(elem, "Right");
                                        
								Agent_Play("Alert");
                                        
								var L_Register3PlayElementScript18_Text = "�d�q���[�� �A�h���X���Ȃ��ꍇ�́A���̗�����ɂ��Ă��������B";
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
        var L_ExplainEmailAddress1_Text = "�d�q���[�� �A�h���X�͒ʏ� 2 �̕�������\������Ă��܂��B";
        Agent_Speak(L_ExplainEmailAddress1_Text);

        var L_ExplainEmailAddress2_Text = "�ŏ��ɃA�J�E���g���A@ �L���A�����ăh���C�����������܂��B";
        Agent_Speak(L_ExplainEmailAddress2_Text);

        var L_ExplainEmailAddress3_Text = "�d�q���[�� �A�h���X�̗� : %s";
        var re = /%s/i;
        var strEmail = "\\map=\"\"=\"greatcustomer@msn.com\"\\";

        Agent_Speak(L_ExplainEmailAddress3_Text.replace(re, strEmail) + "\\pau=2000\\");

        Agent_Play("RestPose");
}







function Agent_PrivacyMSAddCommands() 
{
    var L_PrivacyMSCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_PrivacyMSCommand2_Text = "�Z�L�����e�B�ŕی삳�ꂽ�T�[�o�[�ɂ��Ēm�肽��(&A)";
    var L_PrivacyMSCommand3_Text = "Cookie �ɂ��Ēm�肽��(&K)";
    var L_PrivacyMSCommand4_Text = "���ɉ���������悢���m�肽��(&W)";

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
    var L_PrivacyMSAboutThisStep1_Text = "�����́AMicrosoft �v���C�o�V�[ �|���V�[�̉�ʂł��B";
    Agent_Speak(L_PrivacyMSAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.privtext,"Left");

    var L_PrivacyMSAboutThisStep2_Text = "�v���C�o�V�[ �|���V�[���������������B�Ō�܂œǂނɂ́A�E�̉����{�^�����N���b�N���Ă��������B";
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

    var L_PrivacyMSAboutThisStep3_Text = "[�߂�] ���N���b�N���āA�O�̉�ʂɖ߂��Ă��������B";
    Agent_Speak(L_PrivacyMSAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PrivacyMSWhatIsSecureServer()
{
    var L_PrivacyMSWhatIsSecureServer1_Text = "�T�[�o�[�́A�l�b�g���[�N��̂ق��̃R���s���[�^�ɋ��L���\�[�X��񋟂���R���s���[�^�ł��B";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer1_Text);

    var L_PrivacyMSWhatIsSecureServer2_Text = "�Z�L�����e�B�ŕی삳�ꂽ�T�[�o�[�́A�Z�L�����e�B�ŕی삳�ꂽ�g�����U�N�V������񋟂���@�\������R���s���[�^�ŁA���F����Ă��Ȃ����[�U�[���ۊǂ���Ă�����ɃA�N�Z�X�ł��Ȃ��悤�ɂ��܂��B";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer2_Text);

    var L_PrivacyMSWhatIsSecureServer3_Text = "���Ƃ��΁A���[�U�[�� Microsoft �Ƀ��[�U�[�o�^����Ƃ��ɂ́A���[�U�[�̖��O�ƏZ���� Microsoft �̃Z�L�����e�B�ŕی삳�ꂽ���[�U�[�o�^�T�[�o�[�ɕۊǂ���܂��B";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer3_Text);
        
    var L_PrivacyMSWhatIsSecureServer4_Text = "���̂悤�ɂ��āA���[�U�[�̏��͈��S�ɕۊǂ���A���[�U�[�o�^�̌��ʃ��[�U�[�� Microsoft �ȊO�̑��肩��A�����󂯂邱�Ƃ͂���܂���B";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer4_Text);
}

function Agent_PrivacyMSWhatIsCookie()
{
    var L_PrivacyMSWhatIsCookie1_Text = "Cookie �͓���� Web �T�C�g���Q�Ƃ���Ƃ��ɃR���s���[�^�ɕۊǂ���鏬���ȃf�[�^ �t�@�C���ł��B";
    Agent_Speak(L_PrivacyMSWhatIsCookie1_Text);

    var L_PrivacyMSWhatIsCookie2_Text = "Cookie �ɂ͓d�q���[�� �A�h���X�Ȃǂ̃��[�U�[�Ɋւ����{�I�ȏ�񂪊܂܂�A����ɂ��A�T�C�g���Q�Ƃ��邲�Ƃɂ����̏����ē��͂���K�v���Ȃ��Ȃ�܂��B";
    Agent_Speak(L_PrivacyMSWhatIsCookie2_Text);

    var L_PrivacyMSWhatIsCookie3_Text = "���Ƃ��΁A���� Web �T�C�g�ŉ������w�������ꍇ�A���̃T�C�g���甭���Ɋւ����񂪃R���s���[�^�ɑ��M����܂��B";
    Agent_Speak(L_PrivacyMSWhatIsCookie3_Text);
        
    var L_PrivacyMSWhatIsCookie4_Text = "����ɂ��A���ɂ��� Web �T�C�g���Q�Ƃ���Ƃ��ɁA�����ēx���͂���K�v���Ȃ��Ȃ�܂��B";
    Agent_Speak(L_PrivacyMSWhatIsCookie4_Text);
        
    var L_PrivacyMSWhatIsCookie5_Text = "Microsoft �Ƀ��[�U�[�o�^����Ƃ��ɂ́A�v���_�N�g ID�A���O�A�Z���Ȃǂ��R���s���[�^�� Cookie �ɕۑ�����܂��B";
    Agent_Speak(L_PrivacyMSWhatIsCookie5_Text);
        
    var L_PrivacyMSWhatIsCookie6_Text = "����ɂ��A���� www.microsoft.com ���Q�Ƃ���Ƃ��ɁA���[�U�[�͓o�^���[�U�[�Ƃ��ĔF������܂��B";
    Agent_Speak(L_PrivacyMSWhatIsCookie6_Text);
}

function Agent_PrivacyMSWhatToDoNext()
{    
    Agent_GestureAtElement(g.privtext,"Left");
    
    var L_PrivacyMSWhatToDoNext1_Text = "�v���C�o�V�[ �|���V�[���Ō�܂œǂނɂ́A";
    Agent_Speak(L_PrivacyMSWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.privtext,"Right");

    var L_PrivacyMSWhatToDoNext2_Text = "�{�b�N�X�̉E���ɂ�����{�^�����N���b�N���Ă��������B";
    Agent_Speak(L_PrivacyMSWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_PrivacyMSWhatToDoNext3_Text = "�܂��́A�{�b�N�X�̒����N���b�N���āA�L�[�{�[�h�� Page Down �L�[�� Page Up �L�[���g���Ă��A�v���C�o�V�[ �|���V�[�̓��e��ǂނ��Ƃ��ł��܂��B";
    Agent_Speak(L_PrivacyMSWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
        
    var L_PrivacyMSWhatToDoNext4_Text = "�v���C�o�V�[ �|���V�[��ǂݏI������A[�߂�] ���N���b�N���đO�̃��[�U�[�o�^��ʂɖ߂��Ă��������B";
    Agent_Speak(L_PrivacyMSWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}





function Agent_RefDialAddCommands() 
{
    var L_RefDialAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_RefDialAddCommands2_Text = "���ɉ���������悢���m�肽��(&W)";

    g_AgentCharacter.Commands.Add("Agent_RefDialAboutThisStep", L_RefDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialWhatToDoNext", L_RefDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RefDialAboutThisStep()
{
    var L_RefDialAboutThisStep1_Text = "���̎��_�ŁA�t���[�_�C�����Őڑ�����K�v������܂��B";
    Agent_Speak(L_RefDialAboutThisStep1_Text);

    var L_RefDialAboutThisStep2_Text = "���̃R���s���[�^�̊����̃C���^�[�l�b�g �A�J�E���g���g�p�ł��܂��B";
    Agent_Speak(L_RefDialAboutThisStep2_Text);
}

function Agent_RefDialWhatToDoNext()
{    
    Agent_GestureAtElement(g.btnManual,"Left");
    
    var L_RefDialWhatToDoNext1_Text = "�C���^�[�l�b�g �T�[�r�X �v���o�C�_ (ISP) �����Ɏg���Ă��邩�A�g�� ISP ���킩���Ă���ꍇ�́A���� [�ݒ�̗p�ӂ��ł��Ă���] ���N���b�N���Ă��������B";
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

    var L_RefDialWhatToDoNext2_Text = "���Z�܂��̒n��ŗ��p�\�� ISP ���ꗗ����I������ꍇ�́A[����] ���N���b�N���đ����Ă��������B";
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

    var L_RefDialWhatToDoNext3_Text = "�܂��́A���̃R���s���[�^�ŃC���^�[�l�b�g �A�N�Z�X�̃Z�b�g�A�b�v���s��Ȃ��ő�����ɂ́A[�ȗ�] ���N���b�N���Ă��������B";
    Agent_Speak(L_RefDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RefDialingAddCommands() 
{
    var L_RefDialingAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_RefDialingAddCommands2_Text = "��ʂ̒����ɂ���o�[�ɂ��Ēm�肽��(&A)";
    var L_RefDialingAddCommands3_Text = "���ɉ���������悢���m�肽��(&W)";

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
    var L_RefDialingAboutThisStep1_Text = "Microsoft �Љ�T�[�r�X�֐ڑ����āA���p�ł���C���^�[�l�b�g �T�[�r�X �v���o�C�_�̈ꗗ���擾���Ă��܂��B";
    Agent_Speak(L_RefDialingAboutThisStep1_Text);

    var L_RefDialingAboutThisStep2_Text = "���΂炭���҂����������B";
    Agent_Speak(L_RefDialingAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingAboutThisStep3_Text = "���̍��ڂ͏ȗ��ł��܂��B�܂��A�O�̉�ʂɖ߂邱�Ƃ��ł��܂��B";
    Agent_Speak(L_RefDialingAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RefDialingWhatsThisBar()
{    
    Agent_GestureAtElement(g.tblProg,"Left");
    
    var L_RefDialingWhatsThisBar1_Text = "����͐i�s�󋵃o�[�ŁA���̏����̏󋵂������܂��B";
    Agent_Speak(L_RefDialingWhatsThisBar1_Text);

    var L_RefDialingWhatsThisBar2_Text = "��񂪏Љ�T�[�r�X����R���s���[�^�Ƀ_�E�����[�h�����ƁA�o�[���h��Ԃ���܂��B";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
    
    Agent_Play("RestPose");

    var L_RefDialingWhatsThisBar3_Text = "��񂪂��ׂă_�E�����[�h�����ƁA�o�[�͊��S�ɓh��Ԃ���A���̉�ʂɎ����I�Ɉڂ�܂��B";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
}

function Agent_RefDialingWhatToDoNext()
{
    var L_RefDialingWhatToDoNext1_Text = "���΂炭���҂����������BMicrosoft �Љ�T�[�r�X����R���s���[�^�� ISP �ɂ��Ă̏����_�E�����[�h���Ă��܂��B";
    Agent_Speak(L_RefDialingWhatToDoNext1_Text);

    var L_RefDialingWhatToDoNext2_Text = "�_�E�����[�h������������A���̉�ʂ������I�ɕ\������܂��B";
    Agent_Speak(L_RefDialingWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingWhatToDoNext3_Text = "���̍��ڂ��ȗ�����ꍇ�́A[�ȗ�] ���N���b�N���Ă��������B";
    Agent_Speak(L_RefDialingWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RegDialAddCommands()
{
    var L_RegDialAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_RegDialAddCommands2_Text = "���ɉ���������悢���m�肽��(&W)";

    g_AgentCharacter.Commands.Add("Agent_RegDialAboutThisStep", L_RegDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RegDialWhatToDoNext", L_RegDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RegDialAboutThisStep()
{
    var L_RegDialAboutThisStep1_Text = "���[�U�[�o�^�Z���^�[�ɐڑ����邽�߂ɁA�t���[�_�C�����Ń_�C�������܂��B";
    Agent_Speak(L_RegDialAboutThisStep1_Text);

    var L_RegDialAboutThisStep2_Text = "���΂炭���҂����������B";
    Agent_Speak(L_RegDialAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialAboutThisStep3_Text = "���̍��ڂ͏ȗ��ł��܂��B�܂��A�O�̉�ʂɖ߂邱�Ƃ��ł��܂��B";
    Agent_Speak(L_RegDialAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RegDialWhatToDoNext()
{
    var L_RegDialWhatToDoNext1_Text = "���[�U�[�o�^�Z���^�[�֐ڑ����܂��B���΂炭���҂����������B";
    Agent_Speak(L_RegDialWhatToDoNext1_Text);

    var L_RegDialWhatToDoNext2_Text = "�ڑ�����ƁA�����I�Ɏ��̉�ʂֈړ����܂��B";
    Agent_Speak(L_RegDialWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialWhatToDoNext3_Text = "���̍��ڂ��ȗ�����ꍇ�́A[�ȗ�] ���N���b�N���Ă��������B";
    Agent_Speak(L_RegDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigDialAddCommands()
{
    var L_MigDialAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_MigDialAddCommands2_Text = "���ɉ���������悢���m�肽��(&W)";

    g_AgentCharacter.Commands.Add("Agent_MigDialAboutThisStep", L_MigDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_MigDialWhatToDoNext", L_MigDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_MigDialAboutThisStep()
{
    var L_MigDialAboutThisStep1_Text = "���̎��_�ŁA�t���[�_�C�����Őڑ�����K�v������܂��B";
    Agent_Speak(L_MigDialAboutThisStep1_Text);

    var L_MigDialAboutThisStep2_Text = "���̃R���s���[�^�̊����̃C���^�[�l�b�g �A�J�E���g���g�p�ł��܂��B";
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
    
    var L_MigDialWhatToDoNext1_Text = "[����] ���N���b�N���āA�_�C�������J�n���Ă��������B";
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

    var L_MigDialWhatToDoNext2_Text = "���̍��ڂ��ȗ�����ꍇ�́A[�ȗ�] ���N���b�N���Ă��������B";
    Agent_Speak(L_MigDialWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}





function Agent_MigListAddCommands() 
{
    
    
    
	var L_MigListAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
	var L_MigListAddCommands2_Text = "���ɉ���������悢���m�肽��(&W)";
	
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
    var L_MigListAboutThisStep1_Text = "���̉�ʂł́A�g�p����C���^�[�l�b�g �T�[�r�X �v���o�C�_ (ISP) ��I�����܂��B";
    Agent_Speak(L_MigListAboutThisStep1_Text);

    var L_MigListAboutThisStep2_Text = "���̃R���s���[�^�̊����̃C���^�[�l�b�g �A�J�E���g���g�p�ł��܂��B";
    Agent_Speak(L_MigListAboutThisStep2_Text);
}

function Agent_MigListWhatToDoNext()
{
    Agent_GestureAtElement(g.selISPDropList,"Left");
    
    var L_MigListWhatToDoNext1_Text = "���̈ꗗ�ɂ���C���^�[�l�b�g �T�[�r�X �v���o�C�_���N���b�N���đI�����Ă��������B";
    Agent_Speak(L_MigListWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_MigListWhatToDoNext2_Text = "�ꗗ�Ɏ����� ISP ���Ȃ��ꍇ�́A�ꗗ�̉��� [���p���Ă���C���^�[�l�b�g �T�[�r�X �v���o�C�_�̖��O���ꗗ�ɂȂ�] ���N���b�N���Ă��������B";
    Agent_Speak(L_MigListWhatToDoNext2_Text);

    var L_MigListWhatToDoNext3_Text = "���̃R���s���[�^�ŃC���^�[�l�b�g �A�J�E���g���Ċm�����邽�߂̏ڍׂ́AISP �ɖ₢���킹�Ă��������B";
    Agent_Speak(L_MigListWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_MigListWhatToDoNext4_Text = "[����] ���N���b�N���đ��s���Ă��������B";
    Agent_Speak(L_MigListWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigPageAddCommands() 
{
	var L_MigPageAddCommands1_Text = "���ɉ���������悢���m�肽��(&N)";
	var L_MigPageAddCommands2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
	var L_MigPageAddCommands3_Text = "���̉�ʂֈړ�������(&M)";
	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_WhatToDoNext", L_MigPageAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_AboutThisStep", L_MigPageAddCommands2_Text);
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_HowToMoveOn", L_MigPageAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_MigPageCommand_WhatToDoNext() {
		
	var L_MigPageWhatToDoNext1_Text = "���̃y�[�W�̍�Ƃ��I��������A";
	Agent_Speak(L_MigPageWhatToDoNext1_Text);
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
			
	var L_MigPageWhatToDoNext2_Text = "[����] ���N���b�N���Ă��������B";
	Agent_Speak(L_MigPageWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}

function Agent_MigPageCommand_AboutThisStep() 
{
	var L_MigPageAboutThisStep1_Text = "�����ł́A�����̃T�[�r�X �v���o�C�_�ŃC���^�[�l�b�g �A�J�E���g�𗘗p�ł���悤�ɐݒ肵�܂��B";
	Agent_Speak(L_MigPageAboutThisStep1_Text);
	
	Agent_Play("Pleased");
	
	var L_MigPageAboutThisStep2_Text = "�C���^�[�l�b�g �T�[�r�X �v���o�C�_����̎w���ɏ]���Ă��������B";
	Agent_Speak(L_MigPageAboutThisStep2_Text);
}

function Agent_MigPageCommand_HowToMoveOn() 
{
	var L_MigPageHowToMoveOn1_Text = "�I��������A";
	Agent_Speak(L_MigPageHowToMoveOn1_Text);		
			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

	var L_MigPageHowToMoveOn2_Text = "[����] ���N���b�N���āA��ɐi��ł��������B";
	Agent_Speak(L_MigPageHowToMoveOn2_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPDialAddCommands() 
{
    var L_ISPDial1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_ISPDial2_Text = "���ɉ���������悢���m�肽��(&W)";

    g_AgentCharacter.Commands.Add("Agent_ISPDialAboutThisStep", L_ISPDial1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDialWhatToDoNext", L_ISPDial2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPDialAboutThisStep()
{
    var L_ISPDialAboutThisStep1_Text = "���̎��_�ŁA�t���[�_�C�����Őڑ�����K�v������܂��B";
    Agent_Speak(L_ISPDialAboutThisStep1_Text);

    var L_ISPDialAboutThisStep2_Text = "����ŐV�����C���^�[�l�b�g �A�J�E���g���T�C���A�b�v�ł��܂��B";
    Agent_Speak(L_ISPDialAboutThisStep2_Text);

    var L_ISPDialAboutThisStep3_Text = "[����] ���N���b�N���āA��ɐi��ł��������B";
    Agent_Speak(L_ISPDialAboutThisStep3_Text);
}

function Agent_ISPDialWhatToDoNext()
{
    var L_ISPDialWhatToDoNext1_Text = "[����] ���N���b�N���āA��ɐi��ł��������B";
    Agent_Speak(L_ISPDialWhatToDoNext1_Text);

    var L_ISPDialWhatToDoNext2_Text = "�܂��́A[�ȗ�] ���N���b�N���āA���̃R���s���[�^�ŃC���^�[�l�b�g �A�N�Z�X�����邽�߂̃Z�b�g�A�b�v�����Ȃ��ő����Ă��������B�Z�b�g�A�b�v�͌�ł��ł����s�ł��܂��B";
    Agent_Speak(L_ISPDialWhatToDoNext2_Text);
}




function Agent_DialToneAddCommands()
{
    var L_DialToneAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_DialToneAddCommands2_Text = "�R���s���[�^���ړ�����Ƃ��ɕK�v�Ȃ��Ƃ�m�肽��(&A)";
    var L_DialToneAddCommands3_Text = "���ɉ���������悢���m�肽��(&W)";

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
    var L_DialToneAboutThisStep1_Text = "���M�����m�F�ł��܂���ł����B";
    Agent_Speak(L_DialToneAboutThisStep1_Text);

    var L_DialToneAboutThisStep2_Text = "����ɂ͂������̗��R���l�����܂��B";
    Agent_Speak(L_DialToneAboutThisStep2_Text);

    var L_DialToneAboutThisStep3_Text = "�ŏ��ɁA�R���s���[�^�ƃ��W���� �W���b�N�ɉ�����������ڑ�����Ă��邱�Ƃ��m�F���Ă��������B";
    Agent_Speak(L_DialToneAboutThisStep3_Text);

    var L_DialToneAboutThisStep4_Text = "���ɁA�ق��̐l���d�b������g�p���Ă��Ȃ����m�F���Ă��������B";
    Agent_Speak(L_DialToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneAboutThisStep5_Text = "[���_�C����] ���N���b�N���āA�_�C�����������Ă��������B";
    Agent_Speak(L_DialToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_DialToneHowToMove()
{
    var L_DialToneHowToMove1_Text = "�d�b����ɐڑ����邽�߂ɃR���s���[�^���ړ�����K�v������ꍇ�́A�R���s���[�^�̓d�����؂�Ă��邱�Ƃ��m�F���Ă��������B";
    Agent_Speak(L_DialToneHowToMove1_Text);

    var L_DialToneHowToMove2_Text = "�R���s���[�^���ċN������ƁAWindows �͏I��������ʂ���ĊJ���܂��B";
    Agent_Speak(L_DialToneHowToMove2_Text);
}

function Agent_DialToneWhatToDoNext()
{
    var L_DialToneWhatToDoNext1_Text = "�n�߂ɁA�R���s���[�^�ƃ��W���� �W���b�N�ɉ�����ڑ�����Ă��邱�Ƃ��m�F���Ă��������B";
    Agent_Speak(L_DialToneWhatToDoNext1_Text);

    var L_DialToneWhatToDoNext2_Text = "���ɁA�d�b������g�p���łȂ����Ƃ��m�F���Ă��������B";
    Agent_Speak(L_DialToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneWhatToDoNext3_Text = "[���_�C����] ���N���b�N���āA�_�C�����������Ă��������B";
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

    var L_DialToneWhatToDoNext4_Text = "�܂��́AWindows XP �̃��[�U�[�o�^�܂��̓��C�Z���X�F�؂̎葱�����s��Ȃ��ő�����ɂ́A[�ȗ�] ���N���b�N���Ă��������B";
    Agent_Speak(L_DialToneWhatToDoNext4_Text);
    
    Agent_Play("RestPose");

    var L_DialToneWhatToDoNext5_Text = "��Ń��[�U�[�o�^���邱�Ƃ��ł��܂��B";
    Agent_Speak(L_DialToneWhatToDoNext5_Text);
}



function Agent_CnnctErrAddCommands() 
{
    var L_CnnctErrAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_CnnctErrAddCommands2_Text = "�L���b�`�z�����I�t�ɂ�����@�ɂ��Ēm�肽��(&O)";
    var L_CnnctErrAddCommands3_Text = "���ɉ���������悢���m�肽��(&W)";

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
    var L_CnnctErrAboutThisStep1_Text = "���[�U�[�o�^�Z���^�[�ւ̓d�b�Ăяo���͒��f����܂����B";
    Agent_Speak(L_CnnctErrAboutThisStep1_Text);

    var L_CnnctErrAboutThisStep2_Text = "����ɂ͂������̗��R���l�����܂��B";
    Agent_Speak(L_CnnctErrAboutThisStep2_Text);

    var L_CnnctErrAboutThisStep3_Text = "�n�߂ɁA������̎��ԁA�d�b������g�p���Ă��Ȃ��������߁A�����I�ɐڑ����ؒf���ꂽ�\��������܂��B";
    Agent_Speak(L_CnnctErrAboutThisStep3_Text);

    var L_CnnctErrAboutThisStep4_Text = "2 �ԖڂɁA�ڑ����ɂق��̐l���d�b������g�p���悤�Ƃ��Ă����\��������܂��B";
    Agent_Speak(L_CnnctErrAboutThisStep4_Text);

    var L_CnnctErrAboutThisStep5_Text = "3 �ԖڂɁA�L���b�`�z��������ꍇ�A�Ăяo���ɂ�銄�荞�݂��󂯂Ă���\��������܂��B";
    Agent_Speak(L_CnnctErrAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrAboutThisStep6_Text = "�L���b�`�z�����g�p���Ă��āA�L���b�`�z�����I�t�ɂł���ԍ�������ꍇ�A�����ɓ��͂��Ă��������B";
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

    var L_CnnctErrAboutThisStep7_Text = "���� [����] ���N���b�N���āA�Đڑ����Ă��������B";
    Agent_Speak(L_CnnctErrAboutThisStep7_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrTurnOffCallWaiting()
{
    var L_CnnctErrTurnOffCallWaiting1_Text = "�d�b��Ђ���L���b�`�z�����I�t�ɂ���R�[�h���󂯎�邱�Ƃ��ł��܂��B";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting1_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrTurnOffCallWaiting2_Text = "�ڑ����ɃL���b�`�z�����I�t�ɂ���ꍇ�́A�����ɔԍ�����͂��Ă��������B";
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

    var L_CnnctErrTurnOffCallWaiting3_Text = "���ꂩ��A[����] ���N���b�N���Ă��������B";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrWhatToDoNext()
{
    var L_CnnctErrWhatToDoNext1_Text = "�n�߂ɁAMicrosoft �ւ̘A���Ɏg���d�b������ق��̐l���g���Ă��Ȃ����Ƃ��m�F���Ă��������B";
    Agent_Speak(L_CnnctErrWhatToDoNext1_Text);

    var L_CnnctErrWhatToDoNext2_Text = "���ɁA�L���b�`�z��������ꍇ�́A�ꎞ�I�ɃI�t�ɂ��Ă��������B";
    Agent_Speak(L_CnnctErrWhatToDoNext2_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrWhatToDoNext3_Text = "�I�t�ɂ���ɂ́A���̗��ɃR�[�h����͂��Ă��������B";
    Agent_Speak(L_CnnctErrWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_CnnctErrWhatToDoNext4_Text = "�A�����I�������A�L���b�`�z���͎����I�ɃI���ɂȂ�܂��B";
    Agent_Speak(L_CnnctErrWhatToDoNext4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrWhatToDoNext5_Text = "�Ď��s����ꍇ�́A[����] ���N���b�N���Ă��������B";
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

    var L_CnnctErrWhatToDoNext6_Text = "���[�U�[�o�^�����Ȃ��Ő�ɐi�ނɂ́A[�ȗ�] ���N���b�N���Ă��������B";
    Agent_Speak(L_CnnctErrWhatToDoNext6_Text);
    
    Agent_Play("RestPose");
}



function Agent_HandShakeAddCommands() 
{
    var L_HandShakeAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_HandShakeAddCommands2_Text = "���ɉ���������悢���m�肽��(&W)";

    g_AgentCharacter.Commands.Add("Agent_HandShakeAboutThisStep", L_HandShakeAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_HandShakeWhatToDoNext", L_HandShakeAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_HandShakeAboutThisStep()
{
    var L_HandShakeAboutThisStep1_Text = "����� Microsoft �ɐڑ��ł��܂���ł����B";
    Agent_Speak(L_HandShakeAboutThisStep1_Text);

    var L_HandShakeAboutThisStep2_Text = "����́A�ʘb�����������A�܂��̓R���s���[�^���d�b�ł��Ȃ��������Ƃ������ƍl�����܂��B";
    Agent_Speak(L_HandShakeAboutThisStep2_Text);

    var L_HandShakeAboutThisStep3_Text = "������Ɏ����Ă��������B";
    Agent_Speak(L_HandShakeAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_HandShakeAboutThisStep4_Text = "[���_�C����] ���N���b�N���āA������x��蒼���Ă��������B";
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
    
    var L_HandShakeWhatToDoNext1_Text = "���΂炭�����Ă���A[���_�C����] ���N���b�N���Ă��������B";
    Agent_Speak(L_HandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_HandShakeWhatToDoNext2_Text = "��������ɐ��񎎂����ꍇ�́A�R���s���[�^�̐������ɖ₢���킹�Ă��������B";
    Agent_Speak(L_HandShakeWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_HandShakeWhatToDoNext3_Text = "�R���s���[�^�̃��[�U�[�o�^�����Ȃ��Ő�ɐi�ނɂ́A[�ȗ�] ���N���b�N���Ă��������B";
    Agent_Speak(L_HandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_NoAnswerAddCommands() 
{
    var L_NoAnswerAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_NoAnswerAddCommands2_Text = "�d�b�ԍ����������Ȃ��ꍇ�̑Ώ��@��m�肽��(&A)";
    var L_NoAnswerAddCommands3_Text = "���ɉ���������悢���m�肽��(&W)";

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
    var L_NoAnswerAboutThisStep1_Text = "�_�C���������d�b�ԍ����牞��������܂���ł����B";
    Agent_Speak(L_NoAnswerAboutThisStep1_Text);

    var L_NoAnswerAboutThisStep2_Text = "�ԍ������������Ƃ��m�F���Ă��������B";
    Agent_Speak(L_NoAnswerAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_NoAnswerAboutThisStep3_Text = "�������ꍇ�́A���΂炭�҂��Ă���A[���_�C����] ���N���b�N���čĎ��s���Ă��������B";
    Agent_Speak(L_NoAnswerAboutThisStep3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.edtPhoneNumber,"Left");

    var L_NoAnswerAboutThisStep4_Text = "�ԍ����������Ȃ��ꍇ�́A�������N���b�N���Ĕԍ��𒼂��Ă��������B";
    Agent_Speak(L_NoAnswerAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_NoAnswerAboutThisStep5_Text = "���ꂩ�� [���_�C����] ���N���b�N���Ă��������B ";
    Agent_Speak(L_NoAnswerAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.btnRestore,"Right");

    var L_NoAnswerAboutThisStep6_Text = "[���ɖ߂�] ���N���b�N����ƁA�_�C���������d�b�ԍ������ɖ߂����Ƃ��ł��܂��B";
    Agent_Speak(L_NoAnswerAboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_NoAnswerWhatIfWrongNumber()
{
    var L_NoAnswerWhatIfWrongNumber1_Text = "�d�b�ԍ����������Ȃ��ꍇ�́A�e�L�X�g �{�b�N�X���N���b�N���Ă��������B";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber1_Text);

    var L_NoAnswerWhatIfWrongNumber2_Text = "�N���b�N����ƁA���̒��ɓ_�ł���c�����\������܂��B������J�[�\���ƌĂт܂��B";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber2_Text);

    var L_NoAnswerWhatIfWrongNumber3_Text = "���̂܂ܓ��͂���ƁA�J�[�\���̈ʒu�ɕ������}������܂��B";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber3_Text);

    var L_NoAnswerWhatIfWrongNumber4_Text = "�L�[�{�[�h�̍��E�̕����L�[�������ƁA�J�[�\���̈ʒu���ύX����܂��B";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber4_Text);

    var L_NoAnswerWhatIfWrongNumber5_Text = "Delete �L�[�������ƁA�J�[�\���̌��̕������폜����܂��B";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber5_Text);

    var L_NoAnswerWhatIfWrongNumber6_Text = "BackSpace �L�[�������ƁA�J�[�\���̑O�̕������폜����܂��B";
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
    
    var L_NoAnswerWhatToDoNext1_Text = "�d�b�ԍ����m�F���Ĕԍ����������ꍇ�́A[���_�C����] ���N���b�N���čĐڑ����Ă��������B";
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

    var L_NoAnswerWhatToDoNext2_Text = "��ɐi�ނɂ́A�Đڑ����邩�A�R���s���[�^�̃��[�U�[�o�^���ȗ�����K�v������܂��B";
    Agent_Speak(L_NoAnswerWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}



function Agent_PulseAddCommands() 
{

    var L_PulseAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_PulseAddCommands2_Text = "���ɉ���������悢���m�肽��(&W)";

    g_AgentCharacter.Commands.Add("Agent_PulseAboutThisStep", L_PulseAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_PulseWhatToDoNext", L_PulseAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_PulseAboutThisStep()
{
    var L_PulseAboutThisStep1_Text = "�d�b�̉�����g�[���܂��̓p���X�̂ǂ��炩�Ɋm��ł��܂���ł����B";
    Agent_Speak(L_PulseAboutThisStep1_Text);

    var L_PulseAboutThisStep2_Text = "���s����O�ɉ�����ǂ��炩�m�肷��K�v������܂��B";
    Agent_Speak(L_PulseAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseAboutThisStep3_Text = "���̉�ʂł́A�d�b����̃_�C�������@���w�肵�܂��B";
    Agent_Speak(L_PulseAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PulseWhatToDoNext()
{
    var L_PulseWhatToDoNext1_Text = "�d�b����Ɏg���_�C�������@�ׂ̗̔����ۂ��N���b�N���Ă��������B";
    Agent_Speak(L_PulseWhatToDoNext1_Text);
    
    Agent_GestureAtElement(g.tone,"Left");

    var L_PulseWhatToDoNext2_Text = "�g�[�� �_�C���������g���̂����́A�������N���b�N���Ă��������B";
    Agent_Speak(L_PulseWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseWhatToDoNext3_Text = "�p���X �_�C���������g���̂����́A��������N���b�N���Ă��������B";
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

    var L_PulseWhatToDoNext4_Text = "[����] ���N���b�N���āA�_�C�����������Ă��������B";
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

    var L_PulseWhatToDoNext5_Text = "�R���s���[�^�̃��[�U�[�o�^�����Ȃ��Ő�ɐi�ނɂ́A[�ȗ�] ���N���b�N���Ă��������B";
    Agent_Speak(L_PulseWhatToDoNext5_Text);
    
    Agent_Play("RestPose");
}





function Agent_TooBusyAddCommands() 
{
        var L_TooBusyAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
        var L_TooBusyAddCommands2_Text = "�d�b�ԍ����������Ȃ��ꍇ�̑Ώ��@��m�肽��(&A)";
        var L_TooBusyAddCommands3_Text = "���ɉ���������悢���m�肽��(&W)";

        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_AboutThisStep", L_TooBusyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatIfIncorrect", L_TooBusyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatToDoNext", L_TooBusyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_TooBusyCommand_AboutThisStep() 
{
    var L_TooBusyAboutThisStep1_Text = "�_�C���������d�b�ԍ��͐������Ȃ����A�܂��͒ʘb���ł��B";
    Agent_Speak(L_TooBusyAboutThisStep1_Text);

    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyAboutThisStep2_Text = "���̔ԍ������������ǂ����m�F���Ă��������B";
    Agent_Speak(L_TooBusyAboutThisStep2_Text);
        
    Agent_Play("RestPose");

    var L_TooBusyAboutThisStep3_Text = "�������ꍇ�A�����҂��Ă���A";
    Agent_Speak(L_TooBusyAboutThisStep3_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyAboutThisStep4_Text = "[���_�C����] ���N���b�N���āA�_�C�����������Ă��������B";
    Agent_Speak(L_TooBusyAboutThisStep4_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatIfIncorrect() 
{        
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect1_Text = "�\������Ă���d�b�ԍ����������Ȃ��ꍇ�A";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("cb_altnumber"),"Left");
    
    var L_TooBusyPhoneNumberIncorrect2_Text = "���̃`�F�b�N�{�b�N�X���N���b�N���āA";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_altnumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect3_Text = "�����ɑ���̔ԍ�����͂��Ă��������B";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("cb_outsideline"),"Left");

    var L_TooBusyPhoneNumberIncorrect4_Text = "�O�����M�ԍ����_�C��������K�v������ꍇ�́A���̃`�F�b�N �{�b�N�X���I���ɂ��āA";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect4_Text);

    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("edt_outsideline"),"Right");

    var L_TooBusyPhoneNumberIncorrect5_Text = "�����ɔԍ�����͂��Ă��������B";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect5_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect6_Text = "�L���b�`�z��������ꍇ�A���M�Ăяo�������M�Ăяo���Ɋ��荞�܂�邱�Ƃ�����܂��B";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect6_Text);

    var L_TooBusyPhoneNumberIncorrect7_Text = "���̐ڑ����s���Ă���ԁA�L���b�`�z�����ȒP�ɃI�t�ɂ��邱�Ƃ��ł��܂��B";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect7_Text);
        
    Agent_GestureAtElement(g.document.all("cb_callwaiting"),"Left");

    var L_TooBusyPhoneNumberIncorrect8_Text = "���̃`�F�b�N �{�b�N�X���I���ɂ��āA";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect8_Text);

    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_callwaiting"),"Right");

    var L_TooBusyPhoneNumberIncorrect9_Text = "�����ɃR�[�h����͂��Ă��������B";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect9_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect10_Text = "�ʘb���I�������ŁA�L���b�`�z���̓I���̏�Ԃɖ߂�܂��B";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect10_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyPhoneNumberIncorrect11_Text = "�Ď��s�̏������ł�����A[���_�C����] ��Y�ꂸ�ɃN���b�N���Ă��������B";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect11_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatToDoNext() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyWhatToDoNext1_Text = "�d�b�ԍ������������Ƃ��m�F���A";
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
    
     var L_TooBusyWhatToDoNext2_Text = "�Đڑ�����ɂ́A[���_�C����] ���N���b�N���Ă��������B";
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

    var L_TooBusyWhatToDoNext3_Text = "�܂��́A[�ȗ�] ���N���b�N���Ă��̃X�e�b�v���ȗ����Ă��������BWindows �̃Z�b�g�A�b�v������������A���ł����[�U�[�o�^���邱�Ƃ��ł��܂��B";
    Agent_Speak(L_TooBusyWhatToDoNext3_Text);
        
    Agent_Play("RestPose");
}



function Agent_ISPDToneAddCommands() 
{
    var L_ISPDToneAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_ISPDToneAddCommands2_Text = "�R���s���[�^���ړ�����Ƃ��ɕK�v�Ȃ��Ƃ�m�肽��(&A)";
    var L_ISPDToneAddCommands3_Text = "���ɉ���������悢���m�肽��(&W)";

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
    var L_ISPDToneAboutThisStep1_Text = "���M�����m�F�ł��܂���ł����B";
    Agent_Speak(L_ISPDToneAboutThisStep1_Text);

    var L_ISPDToneAboutThisStep2_Text = "����ɂ͂������̗��R���l�����܂��B";
    Agent_Speak(L_ISPDToneAboutThisStep2_Text);

    var L_ISPDToneAboutThisStep3_Text = "�ŏ��ɁA�R���s���[�^�ƃ��W���� �W���b�N�ɉ�����������ڑ�����Ă��邱�Ƃ��m�F���Ă��������B";
    Agent_Speak(L_ISPDToneAboutThisStep3_Text);

    var L_ISPDToneAboutThisStep4_Text = "���ɁA�ق��̐l���d�b������g�p���Ă��Ȃ����m�F���Ă��������B";
    Agent_Speak(L_ISPDToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneAboutThisStep5_Text = "[���_�C����] ���N���b�N���āA�_�C�����������Ă��������B";
    Agent_Speak(L_ISPDToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPDToneHowToMove()
{
    var L_ISPDToneHowToMove1_Text = "�d�b����ɐڑ����邽�߂ɃR���s���[�^���ړ�����K�v������ꍇ�́A�R���s���[�^�̓d�����؂�Ă��邱�Ƃ��m�F���Ă��������B";
    Agent_Speak(L_ISPDToneHowToMove1_Text);

    var L_ISPDToneHowToMove2_Text = "�R���s���[�^���ċN������ƁAWindows �͏I��������ʂ���ĊJ���܂��B";
    Agent_Speak(L_ISPDToneHowToMove2_Text);
}

function Agent_ISPDToneWhatToDoNext()
{
    var L_ISPDToneWhatToDoNext1_Text = "�n�߂ɁA�R���s���[�^�ƃ��W���� �W���b�N�ɉ�����ڑ�����Ă��邱�Ƃ��m�F���Ă��������B";
    Agent_Speak(L_ISPDToneWhatToDoNext1_Text);

    var L_ISPDToneWhatToDoNext2_Text = "���ɁA�d�b������g�p���łȂ����Ƃ��m�F���Ă��������B";
    Agent_Speak(L_ISPDToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneWhatToDoNext3_Text = "[���_�C����] ���N���b�N���āA�_�C�����������Ă��������B";
    Agent_Speak(L_ISPDToneWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_ISPCnErrAddCommands() {

        var L_ISPCnErrAddCommands1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_ISPCnErrAddCommands2_Text = "�L���b�`�z�����I�t�ɂ�����(&T)";
        var L_ISPCnErrAddCommands3_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_ISPCnErrAddCommands4_Text = "���̉�ʂֈړ�������(&M)";

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
        var L_ISPCnErrIntro1_Text = "�d�b��������f���ꂽ���߃C���^�[�l�b�g��ݒ�ł��܂���ł����B";
        Agent_Speak(L_ISPCnErrIntro1_Text);

        Agent_MoveToElement(g.document.all("txtBullet1"),"Left");
        
        var L_ISPCnErrIntro2_Text = "����ɂ͂������̗��R���l�����܂��B";
        Agent_Speak(L_ISPCnErrIntro2_Text);

        var L_ISPCnErrIntro3_Text = "�n�߂ɁA������̎��ԁA�d�b������g�p���Ă��Ȃ��������߁A�����I�ɐڑ����ؒf���ꂽ�\��������܂��B";
        Agent_Speak(L_ISPCnErrIntro3_Text);

        var L_ISPCnErrIntro4_Text = "2 �ԖڂɁA�ڑ����ɂق��̐l���d�b������g�p���悤�Ƃ��Ă����\��������܂��B";
        Agent_Speak(L_ISPCnErrIntro4_Text);

        var L_ISPCnErrIntro5_Text = "3 �ԖڂɁA�L���b�`�z��������ꍇ�A�Ăяo���ɂ�銄�荞�݂��󂯂Ă���\��������܂��B";
        Agent_Speak(L_ISPCnErrIntro5_Text);

        Agent_GestureAtElement(g.document.all("Callwait"),"Left");

        var L_ISPCnErrIntro6_Text = "�L���b�`�z�����g�p���Ă��āA�L���b�`�z�� ���I�t�ɂł���ԍ�������ꍇ�A�����ɓ��͂��Ă��������B";
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

        var L_ISPCnErrIntro7_Text = "���� [���_�C����] ���N���b�N���āA�Đڑ����Ă��������B";
        Agent_Speak(L_ISPCnErrIntro7_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("txtBullet1"),"Left");

        var L_ISPCnErrWhatToDoNext1_Text = "�����̌��������ׂĉ������A";
        Agent_Speak(L_ISPCnErrWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPCnErrWhatToDoNext2_Text = "�Đڑ�����ꍇ�A";
        Agent_Speak(L_ISPCnErrWhatToDoNext2_Text);

        var L_ISPCnErrWhatToDoNext3_Text = "[���_�C����] ���N���b�N���āA������x��蒼���Ă��������B";
        Agent_Speak(L_ISPCnErrWhatToDoNext3_Text);
}

function Agent_ISPCnErrCommand_HowToTurnOffCallWaiting() 
{
        Agent_GestureAtElement(g.document.all("Callwait"),"Left");
        
        var L_ISPCnErrHowToTurnOffCallWaiting1_Text = "�ڑ����ɃL���b�`�z�����I�t�ɂ���ꍇ�́A";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting1_Text);

        var L_ISPCnErrHowToTurnOffCallWaiting2_Text = "�����ɔԍ�����͂��Ă��������B";
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

        var L_ISPCnErrHowToTurnOffCallWaiting3_Text = "���� [���_�C����] ���N���b�N���Ă��������B";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_HowToMoveOn() 
{
        var L_ISPCnErrHowToMoveOn1_Text = "��ɐi�ނɂ́A�Đڑ����邩�A���̎菇���ȗ�����K�v������܂��B";
        Agent_Speak(L_ISPCnErrHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrHowToMoveOn2_Text = "�Đڑ�����ɂ́A[���_�C����] ���N���b�N���Ă��������B";
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

        var L_ISPCnErrHowToMoveOn3_Text = "�Đڑ������Ȃ��Ő�ɐi�ނɂ́A[�ȗ�] ���N���b�N���Ă��������B";
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

        var L_ISPHandShakeAddCommands1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_ISPHandShakeAddCommands2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_ISPHandShakeAddCommands3_Text = "���̉�ʂֈړ�������(&M)";

        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_WhatToDoNext", L_ISPHandShakeAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_AboutThisScreen", L_ISPHandShakeAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_HowToMoveOn", L_ISPHandShakeAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPHandShakeIntro() {

}

function Agent_ISPHandShakeCommand_AboutThisScreen() 
{
        var L_ISPHandShakeIntro1_Text = "�I�������C���^�[�l�b�g �T�[�r�X �v���o�C�_�̐V�K�A�J�E���g �T�[�r�X�́A���ݗ��p�ł��܂���B";
        Agent_Speak(L_ISPHandShakeIntro1_Text);

        var L_ISPHandShakeIntro2_Text = "�����s���ł��B";
        Agent_Speak(L_ISPHandShakeIntro2_Text);

        var L_ISPHandShakeIntro3_Text = "���΂炭�����Ă���A���_�C�������Ă��������B";
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
        
        var L_ISPHandShakeIntro4_Text = "�܂��́A[�ȗ�] ���N���b�N���āA�C���^�[�l�b�g �T�[�r�X�̐ݒ���ȗ����邱�Ƃ��ł��܂��B";
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

        var L_ISPHandShakeWhatToDoNext1_Text = "���΂炭�����Ă���A[���_�C����] ���N���b�N���Ă��������B";
        Agent_Speak(L_ISPHandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeWhatToDoNext2_Text = "���x����Ă��ڑ��ł��Ȃ��ꍇ�́A";
        Agent_Speak(L_ISPHandShakeWhatToDoNext2_Text);
        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeWhatToDoNext3_Text = "�C���^�[�l�b�g �T�[�r�X�̐ݒ�����Ȃ��Ő�ɐi�ނɂ́A[�ȗ�] ���N���b�N���Ă��������B";
        Agent_Speak(L_ISPHandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPHandShakeCommand_HowToMoveOn() 
{
        var L_ISPHandShakeHowToMoveOn1_Text = "���΂炭�����Ă���A";
        Agent_Speak(L_ISPHandShakeHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPHandShakeHowToMoveOn2_Text = "[���_�C����] ���N���b�N���āA�ڑ�����蒼���Ă��������B";
        Agent_Speak(L_ISPHandShakeHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeHowToMoveOn3_Text = "���x����Ă��ڑ��ł��Ȃ��ꍇ�́A";
        Agent_Speak(L_ISPHandShakeHowToMoveOn3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeHowToMoveOn4_Text = "[�ȗ�] ���N���b�N����ƁA�C���^�[�l�b�g �T�[�r�X�̐ݒ���ȗ����āA��ɐi�ނ��Ƃ��ł��܂��B";
        Agent_Speak(L_ISPHandShakeHowToMoveOn4_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPInsAddCommands() {

        var L_ISPInsAddCommands1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_ISPInsAddCommands2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_ISPInsAddCommands3_Text = "���̉�ʂֈړ�������(&M)";

        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_WhatToDoNext", L_ISPInsAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_AboutThisScreen", L_ISPInsAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_HowToMoveOn", L_ISPInsAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPInsIntro() {

}

function Agent_ISPInsCommand_AboutThisScreen() 
{
        var L_ISPInsIntro1_Text = "�I�������T�[�r�X �v���o�C�_�ŃC���^�[�l�b�g�ɐڑ����邱�Ƃ͂ł��܂���ł����B";
        Agent_Speak(L_ISPInsIntro1_Text);

        var L_ISPInsIntro2_Text = "Web �u���E�U�܂��̓��[���̑���M�ł���肪����ꍇ�́A";
        Agent_Speak(L_ISPInsIntro2_Text);

        var L_ISPInsIntro3_Text = "�T�[�r�X �v���o�C�_�̃e�N�j�J�� �T�|�[�g�ɂ��₢���킹���������B";
        Agent_Speak(L_ISPInsIntro3_Text);
}

function Agent_ISPInsCommand_WhatToDoNext() 
{
        var L_ISPInsWhatToDoNext1_Text = "[����] ���N���b�N���āA��ɐi��ł��������B";
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

        var L_ISPInsHowToMoveOn1_Text = "[����] ���N���b�N���Ă��������B";
        Agent_Speak(L_ISPInsHowToMoveOn1_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPNoAnwAddCommands() {

        var L_ISPNoAnwAddCommands1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_ISPNoAnwAddCommands2_Text = "�d�b�ԍ����Ԉ���Ă���ꍇ�̑Ώ��@��m�肽��(&P)";
        var L_ISPNoAnwAddCommands3_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_ISPNoAnwAddCommands4_Text = "���̉�ʂֈړ�������(&M)";

        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoNext", L_ISPNoAnwAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect", L_ISPNoAnwAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_AboutThisScreen", L_ISPNoAnwAddCommands3_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_HowToMoveOn", L_ISPNoAnwAddCommands4_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPNoAnwCommand_AboutThisScreen() 
{
        var L_ISPNoAnwIntro1_Text = "�_�C���������d�b�ԍ����牞��������܂���ł����B";
        Agent_Speak(L_ISPNoAnwIntro1_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro2_Text = "�ԍ������������Ƃ��m�F���Ă��������B";
        Agent_Speak(L_ISPNoAnwIntro2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwIntro3_Text = "�������ꍇ�A�����҂��Ă���A";
        Agent_Speak(L_ISPNoAnwIntro3_Text);

        var L_ISPNoAnwIntro4_Text = "[���_�C����] ���N���b�N���āA������x��蒼���Ă��������B";
        Agent_Speak(L_ISPNoAnwIntro4_Text);

        var L_ISPNoAnwIntro5_Text = "�ԍ����Ԉ���Ă���ꍇ�A";
        Agent_Speak(L_ISPNoAnwIntro5_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro6_Text = "�������N���b�N���āA�C�����Ă��������B";
        Agent_Speak(L_ISPNoAnwIntro6_Text);

        Agent_Play("RestPose");

        var L_ISPNoAnwIntro7_Text = "���� [���_�C����] ���N���b�N���Ă��������B";
        Agent_Speak(L_ISPNoAnwIntro7_Text);
}

function Agent_ISPNoAnwCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwWhatToDoNext1_Text = "�d�b�ԍ������������Ƃ��m�F���A";
        Agent_Speak(L_ISPNoAnwWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwWhatToDoNext2_Text = "�Đڑ��̏������ł�����A";
        Agent_Speak(L_ISPNoAnwWhatToDoNext2_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwWhatToDoNext3_Text = "[���_�C����] ���N���b�N���Ă��������B";
        Agent_Speak(L_ISPNoAnwWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwPhoneNumberIncorrect1_Text = "�d�b�ԍ����������Ȃ��ꍇ�A";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect1_Text);

        var L_ISPNoAnwPhoneNumberIncorrect2_Text = "���̒����}�E�X�ŃN���b�N���Ă��������B";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwPhoneNumberIncorrect3_Text = "�N���b�N����ƁA���̒��ɓ_�ł���c�����\������܂��B������J�[�\���ƌĂт܂��B";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect3_Text);

        var L_ISPNoAnwPhoneNumberIncorrect4_Text = "���̂܂ܓ��͂���ƁA�J�[�\���̈ʒu�ɕ������}������܂��B";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect4_Text);

        var L_ISPNoAnwPhoneNumberIncorrect5_Text = "�L�[�{�[�h�̍��E�̕����L�[�������ƁA�J�[�\���̈ʒu���ύX����܂��B";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect5_Text);

        var L_ISPNoAnwPhoneNumberIncorrect6_Text = "Delete �L�[�������ƁA�J�[�\���̌��̕������폜����܂��B";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect6_Text);

        var L_ISPNoAnwPhoneNumberIncorrect7_Text = "BackSpace �L�[�������ƁA�J�[�\���̑O�̕������폜����܂��B";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect7_Text);
}

function Agent_ISPNoAnwCommand_HowToMoveOn() 
{
        var L_ISPNoAnwHowToMoveOn1_Text = "��ɐi�ނɂ́A�Đڑ����邩�A�C���^�[�l�b�g �T�[�r�X�̐ݒ���ȗ�����K�v������܂��B";
        Agent_Speak(L_ISPNoAnwHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwHowToMoveOn2_Text = "�Đڑ�����ɂ́A[���_�C����] ���N���b�N���Ă��������B";
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

        var L_ISPNoAnwHowToMoveOn3_Text = "�C���^�[�l�b�g �T�[�r�X��ݒ肵�Ȃ��Ő�ɐi�ނɂ́A[�ȗ�] ���N���b�N���Ă��������B";
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

        var L_ISPPhBsyAddCommands1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_ISPPhBsyAddCommands2_Text = "�d�b�ԍ����Ԉ���Ă���ꍇ�̑Ώ��@��m�肽��(&P)";
        var L_ISPPhBsyAddCommands3_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";

        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoNext", L_ISPPhBsyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect", L_ISPPhBsyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_AboutThisScreen", L_ISPPhBsyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPPhBsyIntro() {

}

function Agent_ISPPhBsyCommand_AboutThisScreen() 
{
        var L_ISPPhBsyIntro1_Text = "�I�����ꂽ�C���^�[�l�b�g �T�[�r�X �v���o�C�_�ɐڑ��ł��܂���ł����B";
        Agent_Speak(L_ISPPhBsyIntro1_Text);

        var L_ISPPhBsyIntro2_Text ="�ʘb�����A�v���o�C�_���ɋZ�p�I�Ȗ�肪����\��������܂��B";
        Agent_Speak(L_ISPPhBsyIntro2_Text);

        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyIntro3_Text = "�ԍ������������Ƃ��m�F���Ă��������B";
        Agent_Speak(L_ISPPhBsyIntro3_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro4_Text = "�������ꍇ�A�����҂��Ă���A";
        Agent_Speak(L_ISPPhBsyIntro4_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPPhBsyIntro5_Text = "[���_�C����] ���N���b�N���āA�_�C�����������Ă��������B";
        Agent_Speak(L_ISPPhBsyIntro5_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro6_Text = "�ԍ����Ԉ���Ă���ꍇ�A";
        Agent_Speak(L_ISPPhBsyIntro6_Text);

        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyIntro7_Text = "�������N���b�N���ēd�b���̂ق��̔ԍ��������Ă��������B";
        Agent_Speak(L_ISPPhBsyIntro7_Text);

        Agent_Play("RestPose");

        var L_ISPPhBsyIntro8_Text = "���� [���_�C����] ���N���b�N���Ă��������B";
        Agent_Speak(L_ISPPhBsyIntro8_Text);
}

function Agent_ISPPhBsyCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyWhatToDoNext1_Text = "�d�b�ԍ������������Ƃ��m�F������A";
        Agent_Speak(L_ISPPhBsyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");    
    
        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyWhatToDoNext2_Text = "�܂��́A�_�C�����������̔ԍ���I��������A";
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

        var L_ISPPhBsyWhatToDoNext4_Text = "�Đڑ�����ɂ́A[���_�C����] ���N���b�N���Ă��������B";
        Agent_Speak(L_ISPPhBsyWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_ISPPhBsyPhoneNumberIncorrect1_Text = "�d�b�ԍ����������Ȃ��ꍇ�A";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

    var L_ISPPhBsyPhoneNumberIncorrect2_Text = "���̃I�v�V���� �{�^�����N���b�N���āA�d�b���ɂ������̔ԍ��������Ă��������B";
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

    var L_ISPPhBsyPhoneNumberIncorrect3_Text = "�Đڑ��̏������ł�����I�v�V���� �{�^�����N���b�N���Ă��������B";
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

    var L_FinishAddCommands1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";  
    var L_FinishAddCommands2_Text = "�f�X�N�g�b�v���烆�[�U�[�o�^������@�ɂ��Ēm�肽��(&O)";    
    var L_FinishAddCommands3_Text = "�f�X�N�g�b�v���� Windows �̃��C�Z���X�F�؂̎葱�����s�����@�ɂ��Ēm�肽��(&D)";    
    var L_FinishAddCommands4_Text = "�C���^�[�l�b�g�ɃA�N�Z�X������@���m�肽��(&A)";    
    var L_FinishAddCommands5_Text = "���ɉ���������悢���m�肽��(&W)";

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
    var L_FinishAboutThisStep1_Text = "����ł��ׂĂ̐ݒ�͊������܂����B";
    Agent_Speak(L_FinishAboutThisStep1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishAboutThisStep2_Text = "������ Windows �̎g�p���J�n����ɂ́A[����] ���N���b�N���Ă��������B";
    Agent_Speak(L_FinishAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_FinishAboutThisStep3_Text = "Windows XP �̐V�����@�\�Ɋւ���c�A�[�����s����ɂ́A[�X�^�[�g] ���j���[�� [�w���v�ƃT�|�[�g] ���N���b�N���Ă��� [����] �{�b�N�X�Ɂu�c�A�[�v�Ɠ��͂��Ă��������B";
    Agent_Speak(L_FinishAboutThisStep3_Text);
}

function Agent_FinishHowToRegister() 
{
    var L_FinishHowToRegister1_Text = "���̏����̎n�߂Ƀ��[�U�[�o�^���ȗ������ꍇ�́A[�X�^�[�g] ���j���[�� [�t�@�C�������w�肵�Ď��s] ���N���b�N���Aregwiz /r �Ɠ��͂��Ă��������B���ł� Windows �����[�U�[�o�^���邱�Ƃ��ł��܂��B";
    Agent_Speak(L_FinishHowToRegister1_Text);
        
    var L_FinishHowToRegister2_Text = "�����̃X�e�b�v��Y�ꂽ�ꍇ�́A[�X�^�[�g] ���j���[�� [�w���v�ƃT�|�[�g] ���N���b�N����Ƌ^��ɑ΂���񓚂�ق��̗L�v�ȏ��������邱�Ƃ��ł��܂��B";
    Agent_Speak(L_FinishHowToRegister2_Text);
}

function Agent_FinishHowToActivate() 
{
    var L_FinishHowToActivate1_Text = "���̏����̎n�߂Ƀ��C�Z���X�F�؂��ȗ������ꍇ�́A�������ƂɃf�X�N�g�b�v�ɏ����Ȋm�F���b�Z�[�W���\������܂��B";
    Agent_Speak(L_FinishHowToActivate1_Text);
        
    var L_FinishHowToActivate2_Text = "Windows �̎g�p�𑱂���ɂ́A�w�肳�ꂽ���ԓ��� Windows �̃��C�Z���X�F�؂̎葱�����s���K�v������܂��B";
    Agent_Speak(L_FinishHowToActivate2_Text);

    var L_FinishHowToActivate3_Text = "�m�F���b�Z�[�W��҂��Ȃ��ꍇ�́A[�X�^�[�g] ���j���[�� [Windows �̃��C�Z���X�F��] ���N���b�N���āAWindows �̃��C�Z���X�F�؃E�B�U�[�h�����s���Ă��������B";
    Agent_Speak(L_FinishHowToActivate3_Text);

    var L_FinishHowToActivate4_Text = "�����̃X�e�b�v��Y�ꂽ�ꍇ�́A[�X�^�[�g] ���j���[�� [�w���v�ƃT�|�[�g] ���N���b�N����Ƌ^��ɑ΂���񓚂�ق��̗L�v�ȏ��������邱�Ƃ��ł��܂��B";
    Agent_Speak(L_FinishHowToActivate4_Text);
}

function Agent_FinishHowToAccessInternet() 
{
    var L_FinishHowToAccessInternet1_Text = "���̃R���s���[�^�ŃC���^�[�l�b�g�ɃA�N�Z�X�ł���悤�Ɋ��ɃZ�b�g�A�b�v�����ꍇ�́A[�X�^�[�g] ���j���[�ɂ��� [�C���^�[�l�b�g] ���N���b�N���邾���ł��B";
    Agent_Speak(L_FinishHowToAccessInternet1_Text);
        
    var L_FinishHowToAccessInternet2_Text = "���̃R���s���[�^�ŃC���^�[�l�b�g�ɃA�N�Z�X�ł���悤�ɃZ�b�g�A�b�v���Ă��Ȃ��ꍇ�A�C���^�[�l�b�g�ڑ��E�B�U�[�h���\������܂��B";
    Agent_Speak(L_FinishHowToAccessInternet2_Text);

    var L_FinishHowToAccessInternet3_Text = "���̃E�B�U�[�h�̃X�e�b�v�ɏ]���āA�C���^�[�l�b�g�ɐڑ����Ă��������B";
    Agent_Speak(L_FinishHowToAccessInternet3_Text);
}

function Agent_FinishWhatToDoNext() 
{
    var L_FinishWhatToDoNext1_Text = "�R���s���[�^�� Microsoft Windows XP �̃Z�b�g�A�b�v���������܂����B";
    Agent_Speak(L_FinishWhatToDoNext1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishWhatToDoNext2_Text = "[����] ���N���b�N���Ă��������B";
    Agent_Speak(L_FinishWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_FinishWhatToDoNext3_Text = "Windows XP �̐V�����@�\�Ɋւ���c�A�[�����s����ɂ́A[�X�^�[�g] ���j���[�� [�w���v�ƃT�|�[�g] ���N���b�N���Ă��� [����] �{�b�N�X�Ɂu�c�A�[�v�Ɠ��͂��Ă��������B";
    Agent_Speak(L_FinishWhatToDoNext3_Text);

    var L_FinishWhatToDoNext4_Text = "Windows XP ���y����ł��g�����������B";
    Agent_Speak(L_FinishWhatToDoNext4_Text);
}






function Agent_MouseTutAddCommands() {

        var L_MouseTutMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_MouseTutMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_MouseTutMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

        
        
        

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

        var L_MouseTutIntroTellMeWhatToDoNext1_Text = "�}�E�X�̗��K���J�n����ꍇ�́A[�J�n] ���N���b�N���Ă��������B";
        Agent_Speak(L_MouseTutIntroTellMeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutTellMeAboutThisScreen() 
{
        var L_MouseTutTellMeAboutThisScreen1_Text = "�����ł́A�}�E�X�̎g��������K���܂��B";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen1_Text);

        var L_MouseTutTellMeAboutThisScreen2_Text = "�}�E�X�̗��K���s�����ǂ����I���ł��܂��B";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen2_Text);

        var L_MouseTutTellMeAboutThisScreen3_Text = "�}�E�X���g������Ă��邩���́A�}�E�X�̗��K���ȗ��ł��܂��B";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen1_Text = "�}�E�X�̗��K���J�n����ꍇ�́A[�J�n] ���N���b�N���Ă��������B";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text = "�}�E�X�̗��K���ȗ�����ꍇ�́A[����] ���N���b�N���Ă��������B";
        Agent_Speak(L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_MouseTutAAddCommands() {

        var L_MouseTutAMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_MouseTutAMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_MouseTutAMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeWhatToDoNext", L_MouseTutAMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeAboutThisScreen", L_MouseTutAMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeHowToMoveToNextScreen", L_MouseTutAMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutATellMeWhatToDoNext() 
{
        var L_MouseTutAWhatToDoNext1_Text = "�}�E�X�𓮂����ƁA��ʏ�̃|�C���^�������܂��B";
        Agent_Speak(L_MouseTutAWhatToDoNext1_Text);

        var L_MouseTutAWhatToDoNext2_Text = "�}�E�X�͕���ȂƂ���œ������܂��傤�B";
        Agent_Speak(L_MouseTutAWhatToDoNext2_Text);
}

function Agent_OnMouseTutATellMeAboutThisScreen() 
{

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutATellMeAboutThisScreen1_Text = "�����ł́A�}�E�X���g���ĉ�ʏ�̃|�C���^�𓮂������K�����܂��B";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutATellMeAboutThisScreen2_Text = "�}�E�X�𓮂����ƁA��ʏ�̃|�C���^���ړ����܂��B";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen2_Text);

        var L_MouseTutATellMeAboutThisScreen3_Text = "�}�E�X���㉺���E�ɓ������Ă݂܂��傤�B";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen3_Text);
}

function Agent_OnMouseTutATellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutBAddCommands() {

        var L_MouseTutBMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_MouseTutBMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_MouseTutBMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeWhatToDoNext", L_MouseTutBMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeAboutThisScreen", L_MouseTutBMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeHowToMoveToNextScreen", L_MouseTutBMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutBTellMeWhatToDoNext() 
{
        var L_MouseTutBWhatToDoNext1_Text = "�}�E�X�������グ�āA�ʂ̏ꏊ�Ɉړ����Ă݂Ă��������B";
        Agent_Speak(L_MouseTutBWhatToDoNext1_Text);

        var L_MouseTutBWhatToDoNext2_Text = "�ړ�������A�܂����̏ꏊ�ɖ߂��āA�}�E�X�𓮂����Ă݂܂��傤�B";
        Agent_Speak(L_MouseTutBWhatToDoNext2_Text);
}

function Agent_OnMouseTutBTellMeAboutThisScreen() 
{
        var L_MouseTutBTellMeAboutThisScreen1_Text = "�}�E�X���������ɂ����ʒu�ɍs���Ă��܂�����A";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen1_Text);

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutBTellMeAboutThisScreen2_Text = "�}�E�X����x�����グ�āA�������₷���ʒu�Ɉړ������Ă��������B";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen2_Text);

        Agent_Play("RestPose");

        var L_MouseTutBTellMeAboutThisScreen3_Text = "�}�E�X�����ɖ߂��ƁA�|�C���^�����̓����ɍ��킹�Ĉړ����܂��B";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen3_Text);

        var L_MouseTutBTellMeAboutThisScreen4_Text = "�}�E�X�𓮂����Ƃ��͕���ȂƂ���œ������܂��傤�B";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutBTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutCAddCommands() {

        var L_MouseTutCMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_MouseTutCMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_MouseTutCMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeWhatToDoNext", L_MouseTutCMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeAboutThisScreen", L_MouseTutCMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeHowToMoveToNextScreen", L_MouseTutCMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_MouseTutCIntro() {
        
}

function Agent_OnMouseTutCTellMeWhatToDoNext() 
{
        var L_MouseTutCWhatToDoNext1_Text = "�}�E�X�𓮂����āA�G�̏�Ƀ|�C���^��u���Ă݂܂��傤�B";
        Agent_Speak(L_MouseTutCWhatToDoNext1_Text);
}

function Agent_OnMouseTutCTellMeAboutThisScreen() 
{
        var L_MouseTutCTellMeAboutThisScreen1_Text = "�����ł́A�}�E�X���g���ă|�C���^�𓮂������K�����܂��B";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutCTellMeAboutThisScreen2_Text = "�}�E�X���g���āA�G�̏�Ƀ|�C���^���ړ����Ă݂܂��傤�B";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutCTellMeAboutThisScreen3_Text = "�G�̏�Ƀ|�C���^��u���ƁA�{�^���ɕς��܂��B";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen3_Text);

        var L_MouseTutCTellMeAboutThisScreen4_Text = "�{�^���̏ォ��|�C���^���ړ�������ƁA���ɖ߂�܂��B";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutCTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutDAddCommands() {

        var L_MouseTutDMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_MouseTutDMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_MouseTutDMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeWhatToDoNext", L_MouseTutDMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeAboutThisScreen", L_MouseTutDMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeHowToMoveToNextScreen", L_MouseTutDMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutDTellMeWhatToDoNext() 
{
        var L_MouseTutDWhatToDoNext1_Text = "�}�E�X�̍��{�^�����N���b�N���Ă݂܂��傤�B";
        Agent_Speak(L_MouseTutDWhatToDoNext1_Text);
}

function Agent_OnMouseTutDTellMeAboutThisScreen() 
{
        var L_MouseTutDTellMeAboutThisScreen1_Text = "�����ł́A�}�E�X�̃N���b�N�ɂ��Đ������܂��B";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen1_Text);

        var elem = g.document.all("image");

        Agent_MoveToElement(elem, "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen2_Text = "���ڂ�I������ɂ́A�}�E�X���g���āA�|�C���^�����ڂ̏�Ɉړ������܂��B";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen2_Text);

        Agent_GestureAtElement(g.document.all("image"), "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen3_Text = "���Ƀ}�E�X�̍��{�^���������Ă��������B";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutDTellMeAboutThisScreen4_Text = "���̓�����N���b�N�Ƃ����܂��B";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutDTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutEAddCommands() {

        var L_MouseTutEMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_MouseTutEMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_MouseTutEMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeWhatToDoNext", L_MouseTutEMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeAboutThisScreen", L_MouseTutEMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeHowToMoveToNextScreen", L_MouseTutEMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutETellMeWhatToDoNext() 
{
        var L_MouseTutEWhatToDoNext1_Text = "��ʏ�̊G�Ƀ|�C���^��u���āA�}�E�X�̍��{�^�����N���b�N���Ă݂܂��傤�B";
        Agent_Speak(L_MouseTutEWhatToDoNext1_Text);
}

function Agent_OnMouseTutETellMeAboutThisScreen() 
{
        var L_MouseTutETellMeAboutThisScreen1_Text = "�����ł́A�}�E�X���g���ă{�^�����N���b�N������K�����܂��B";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutETellMeAboutThisScreen2_Text = "�ǂꂩ 1 �̊G�Ƀ|�C���^��u���āA";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutETellMeAboutThisScreen3_Text = "�}�E�X�̍��{�^�����N���b�N���Ă��������B";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen3_Text);

        var L_MouseTutETellMeAboutThisScreen4_Text = "���ׂĂ̊G���N���b�N���Ă݂܂��傤�B";
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

        var L_MouseTutFMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_MouseTutFMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_MouseTutFMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

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
        var L_MouseTutFTellMeAboutThisScreen1_Text = "�����܂ł́A�}�E�X���g���ă|�C���^���ړ����A";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen1_Text);

        var L_MouseTutFTellMeAboutThisScreen2_Text = "�N���b�N���邱�Ƃ��w�K���܂����B";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen2_Text);

        var L_MouseTutFTellMeAboutThisScreen3_Text = "��������́AWindows �� Web �y�[�W�ł悭�g����}�E�X�̑�����@����K���܂��B";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen3_Text);

        var L_MouseTutFTellMeAboutThisScreen4_Text = "�������ł�����A[����] ���N���b�N���Ă��������B";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutFTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutGAddCommands() {

        var L_MouseTutGMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_MouseTutGMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_MouseTutGMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeWhatToDoNext", L_MouseTutGMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeAboutThisScreen", L_MouseTutGMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeHowToMoveToNextScreen", L_MouseTutGMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutGPreDisplayMenu() {

        if (g.btnNext.disabled) {

                var L_MouseTutGMenuCommand4_Text = "[����] �{�^�����g�p�ł��Ȃ�������m�肽��(&W)";

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
        var L_MouseTutGWhyNextNotAvailable1_Text = "�X�̖��O���I������Ă��܂���B�I������ƁA[����] �̃{�^�����g�p�ł���悤�ɂȂ�܂��B";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable1_Text);

		Agent_GestureAtElement(g.document.all("selCity"),"LeftCenter");

        var L_MouseTutGWhyNextNotAvailable2_Text = "�ŏ��ɊX�̖��O�� 1 �N���b�N���Ă��������B";
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

        var L_MouseTutGWhyNextNotAvailable3_Text = "���̌�A[����] ���N���b�N���āA��ɐi��ł��������B";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeWhatToDoNext() {
		
		if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "RightCenter");

        var L_MouseTutGWhatToDoNext1_Text = "�X�̖��O�����ׂČ���Ƃ��́A�ꗗ�̉E�ɂ���㉺�̖��{�^�����N���b�N���Ă��������B";
        Agent_Speak(L_MouseTutGWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

		if (g.document.dir == "rtl")
			Agent_Play("RestPose");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGWhatToDoNext2_Text = "���O���N���b�N���āA�X��I�����Ă��������B";
        Agent_Speak(L_MouseTutGWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutGWhatToDoNext3_Text = "�ق��̊X�ɕύX�������Ƃ��́A�ʂ̖��O��������x�N���b�N���Ă��������B";
        Agent_Speak(L_MouseTutGWhatToDoNext3_Text);

        Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
}

function Agent_OnMouseTutGTellMeAboutThisScreen() {
        var L_MouseTutGTellMeAboutThisScreen1_Text = "�����ł́A�ꗗ���獀�ڂ��N���b�N���đI��������K�����܂��B";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGTellMeAboutThisScreen2_Text = "���̈ꗗ����X�̖��O���N���b�N����ƁA";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");
		
        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("imgTable"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("imgTable"), "RightCenter");

        var L_MouseTutGTellMeAboutThisScreen3_Text = "�����ɑI�������X�̉摜���\������܂��B";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeHowToMoveToNextScreen() {

        if (g.btnNext.disabled) {

                Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

                var L_MouseTutGHowToMoveToNextScreen1_Text = "�X�̖��O���N���b�N���Ă��������B";
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

                var L_MouseTutGHowToMoveToNextScreen2_Text = "[����] ���N���b�N���Ă��������B";
                Agent_Speak(L_MouseTutGHowToMoveToNextScreen2_Text);
    
                Agent_Play("RestPose");
        }

        else
                MouseTut_HowToMoveToNextScreen();

}




function Agent_MouseTutHAddCommands() {

        var L_MouseTutHMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_MouseTutHMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_MouseTutHMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeWhatToDoNext", L_MouseTutHMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeAboutThisScreen", L_MouseTutHMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeHowToMoveToNextScreen", L_MouseTutHMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutHTellMeWhatToDoNext() {

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHWhatToDoNext1_Text = "�ۂ��N���b�N���āA�I�v�V������ 1 �I�����Ă��������B";
        Agent_Speak(L_MouseTutHWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutHWhatToDoNext2_Text = "�摜�̕\�����ς��܂��B";
        Agent_Speak(L_MouseTutHWhatToDoNext2_Text);

        var L_MouseTutHWhatToDoNext3_Text = "���� 1 �̃I�v�V�������N���b�N���Ă݂܂��傤�B";
        Agent_Speak(L_MouseTutHWhatToDoNext3_Text);
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeAboutThisScreen() {
        var L_MouseTutHTellMeAboutThisScreen1_Text = "���̉�ʂł́A�I�v�V������ 1 �I��������K�����܂��B";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHTellMeAboutThisScreen2_Text = "���̊ۂ��N���b�N����ƁA";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("cityImg"), "LeftCenter");
        else
			Agent_GestureAtElement(g.document.all("cityImg"), "RightCenter");

        var L_MouseTutHTellMeAboutThisScreen3_Text = "�摜�̕\�����ς��܂��B";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutIAddCommands() {

        var L_MouseTutIMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_MouseTutIMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_MouseTutIMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeWhatToDoNext", L_MouseTutIMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeAboutThisScreen", L_MouseTutIMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeHowToMoveToNextScreen", L_MouseTutIMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutITellMeWhatToDoNext() {

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutIWhatToDoNext1_Text = "�l�p�`�𕡐��N���b�N���āA�摜�Ɍ��ʂ������Ă݂܂��傤�B";
        Agent_Speak(L_MouseTutIWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutIWhatToDoNext2_Text = "�I������������ɂ́A�`�F�b�N�}�[�N�̕t�����l�p�`��������x�N���b�N���Ă��������B";
        Agent_Speak(L_MouseTutIWhatToDoNext2_Text);

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeAboutThisScreen() {
        var L_MouseTutITellMeAboutThisScreen1_Text = "�����ł́A�I�v�V�����𕡐��I��������K���s���܂��B";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen1_Text);

        var L_MouseTutITellMeAboutThisScreen2_Text = "�I�v�V�����𕡐��I������ƁA�摜�ɂ��낢��Ȍ��ʂ��������܂��B";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen2_Text);

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutITellMeAboutThisScreen3_Text = "���ׂĂ̎l�p�`���N���b�N���Ă݂܂��傤�B";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutJAddCommands() {

        var L_MouseTutJMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_MouseTutJMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_MouseTutJMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

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

        var L_MouseTutJWhatToDoNext1_Text = "���̗����N���b�N���Ă��������B";
        Agent_Speak(L_MouseTutJWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutJWhatToDoNext2_Text = "���̉摜�Ƀ^�C�g����t���Ă݂܂��傤�B";
        Agent_Speak(L_MouseTutJWhatToDoNext2_Text);
}

function Agent_OnMouseTutJTellMeAboutThisScreen() {
        var L_MouseTutJTellMeAboutThisScreen1_Text = "�����ł́A��������͂�����K�����܂��B";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen1_Text);

        var L_MouseTutJTellMeAboutThisScreen2_Text = "��������͂��ĉ摜�Ƀ^�C�g����t���Ă݂܂��傤�B";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen2_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(g.document.all("caption"), "Left");
		else
			Agent_GestureAtElement(g.document.all("CaptionLabel"), "Left");

        var L_MouseTutJTellMeAboutThisScreen3_Text = "���̗����N���b�N���āA��������͂��Ă��������B";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutJTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutKAddCommands() {

        var L_MouseTutKMenuCommand1_Text = "���ɉ���������悢���m�肽��(&N)";
        var L_MouseTutKMenuCommand2_Text = "���̉�ʂ̏ڍׂ��m�肽��(&S)";
        var L_MouseTutKMenuCommand3_Text = "���̉�ʂֈړ�������(&M)";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeWhatToDoNext", L_MouseTutKMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeAboutThisScreen", L_MouseTutKMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeHowToMoveToNextScreen", L_MouseTutKMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutKTellMeWhatToDoNext() {
        var L_MouseTutKWhatToDoNext1_Text = "�摜���������܂����B����Ń}�E�X�̗��K�͏I���ł��B";
        Agent_Speak(L_MouseTutKWhatToDoNext1_Text);

        var L_MouseTutKWhatToDoNext2_Text = "[����] ���N���b�N���āA���̉�ʂɐi��ł��������B";
        Agent_Speak(L_MouseTutKWhatToDoNext2_Text);
}

function Agent_OnMouseTutKTellMeAboutThisScreen() {
        var L_MouseTutKTellMeAboutThisScreen1_Text = "�摜���������܂����B";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen1_Text);
        
        var L_MouseTutKTellMeAboutThisScreen2_Text = "����Ń}�E�X�̗��K�͏I���ł��B";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen2_Text);

        var L_MouseTutKTellMeAboutThisScreen3_Text = "�ڂ����}�E�X�̎g�����ɂ��ẮAWindows ���ŏ��ɋN�������Ƃ��ɕ\�������w���v���������������B";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutKTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function MouseTut_WhatToDoNext() 
{
        var L_MouseTutTellMeWhatToDoNext1_Text = "���̉�ʂɐi�ނɂ́A[����] ���N���b�N���Ă��������B";
        Agent_Speak(L_MouseTutTellMeWhatToDoNext1_Text);

        var L_MouseTutTellMeWhatToDoNext2_Text = "�}�E�X�̗��K���ȗ�����ꍇ�́A[�ȗ�] ���N���b�N���Ă��������B";
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

        var L_MouseTutTellMeHowToMoveToNextScreen1_Text = "���̉�ʂɈړ�����ɂ́A[����] ���N���b�N���Ă��������B";
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

        var L_MouseTutTellMeHowToMoveToNextScreen2_Text = "�}�E�X�̗��K���ȗ�����ɂ́A[�ȗ�] ���N���b�N���Ă��������B";
        Agent_Speak(L_MouseTutTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_2nicsAddCommands() 
{
    var L_2nicsMenuCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    
    g_AgentCharacter.Commands.Add("Agent_On2nicsAboutThisStep", L_2nicsMenuCommand1_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_On2nicsAboutThisStep() 
{
    var L_2nicsAboutThisScreen1_Text = "���̉�ʂł́A�R���s���[�^���C���^�[�l�b�g�ɐڑ�������@�ɂ��Đ������܂��B";
	Agent_Speak(L_2nicsAboutThisScreen1_Text);
	
    var L_2nicsAboutThisScreen2_Text = "Windows �̃Z�b�g�A�b�v������������ŁA�g���ڑ���I���ł��܂��B";
	Agent_Speak(L_2nicsAboutThisScreen2_Text);
}



function Agent_UserNameAddCommands() 
{
    var L_UserNameCommand1_Text = "���̃X�e�b�v�̏ڍׂ��m�肽��(&T)";
    var L_UserNameCommand2_Text = "���O���\�������ꏊ�ɂ��Ēm�肽��(&E)";
    var L_UserNameCommand3_Text = "��Ŗ��O��ύX������@�ɂ��Ēm�肽��(&O)";
    var L_UserNameCommand4_Text = "���ɉ���������悢���m�肽��(&W)";
    
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
    var L_UserNameAboutThisStep1_Text = "����́A���[�U�[�������Ŏ��ʂ���A���[�U�[�����O�I���������Ƃ� Windows ���F�������ʂł��B";
	Agent_Speak(L_UserNameAboutThisStep1_Text);
}

function Agent_OnUserNameWhereIsName() 
{
    var L_UserNameWhereIsName1_Text = "���[�U�[�̖��O�� Windows ���J�n�����Ƃ��ɕ\�������悤������ʂɕ\������܂��B";
	Agent_Speak(L_UserNameWhereIsName1_Text);
	
    var L_UserNameWhereIsName2_Text = "�܂��A���[�U�[���̓��[�U�[�����O�I�������Ƃ��� [�X�^�[�g] ���j���[�̈�ԏ�ɂ��\������܂��B";
	Agent_Speak(L_UserNameWhereIsName2_Text);
	
    var L_UserNameWhereIsName3_Text = "�ق��̂��ꂩ���R���s���[�^�Ƀ��O�I�����Ď����� [�}�C �h�L�������g] �t�H���_���J�����ꍇ�́A�����̖��O�̓t�H���_���ɕ\������܂��B";
	Agent_Speak(L_UserNameWhereIsName3_Text);
	
    var L_UserNameWhereIsName4_Text = "���Ƃ��΁A�t�H���_�� [David �̃h�L�������g] �̂悤�ɕ\�������̂ŁA�ق��̃��[�U�[�͂��̃t�H���_�����Ȃ��̃t�H���_�ł��邱�Ƃ��킩��܂��B";
	Agent_Speak(L_UserNameWhereIsName4_Text);
	
    var L_UserNameWhereIsName5_Text = "[�X�^�[�g] ���j���[�� [�R���g���[�� �p�l��] ���N���b�N���Ă��� [���[�U�[ �A�J�E���g] ���N���b�N����ƁA�����̖��O�����[�U�[�̈ꗗ�ɂ��\������܂��B";
	Agent_Speak(L_UserNameWhereIsName5_Text);
}

function Agent_OnUserNameHowToChangeName() 
{
    var L_UserNameHowToChangeName1_Text = "Windows �Ƀ��O�I�����Ă��玩���̖��O��ύX����ɂ́A[�X�^�[�g] ���j���[�� [�R���g���[�� �p�l��] ���N���b�N���Ă���A";
	Agent_Speak(L_UserNameHowToChangeName1_Text);
	
    var L_UserNameHowToChangeName2_Text = "[���[�U�[ �A�J�E���g] ���N���b�N���Ă��������B";
	Agent_Speak(L_UserNameHowToChangeName2_Text);
	
    var L_UserNameHowToChangeName3_Text = "�����̖��O�₱�̃R���s���[�^�̂ق��̃��[�U�[�̖��O��ύX���邱�Ƃ��ł��܂��B";
	Agent_Speak(L_UserNameHowToChangeName3_Text);
}

function Agent_OnUserNameWhatToDoNext() 
{
    var L_UserNameWhatToDoNext1_Text = "[����] ���N���b�N���āA�C���^�[�l�b�g�ɍĐڑ����Ă��������B";
	Agent_Speak(L_UserNameWhatToDoNext1_Text);
	
    var L_UserNameWhatToDoNext2_Text = "�܂��́A�C���^�[�l�b�g�ɐڑ����Ȃ��ő�����ɂ́A[�ȗ�] ���N���b�N���Ă��������B";
	Agent_Speak(L_UserNameWhatToDoNext2_Text);
}
