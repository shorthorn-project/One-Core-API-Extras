



var L_PhoneNumberLegit_Text = "\\map=\"one \\pau=100\\ eight hundred R U le jit\"=\"1-800-R U LEGIT\"\\";


var g_strRegionSetting = "";
var g_strKeyboardSetting = "";
var g_strLangSetting = " ";



function Agent_AddCommonCommands() 
{
    g_AgentCharacter.Commands.RemoveAll();

    var L_AddCommonCommands1_Text = "&Fechar menu";

    g_AgentCharacter.Commands.Add("CloseMenu", L_AddCommonCommands1_Text);
        
    if (g_bAgentShowSpecialISPCommands) 
    {
        
		var L_AddCommonCommands2_Text = "&Mais informa��es sobre inscri��o na Internet";
		var L_AddCommonCommands3_Text = "&Reiniciar inscri��o na Internet";
		var L_AddCommonCommands4_Text = "&Ignorar inscri��o na Internet";

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
        var L_AddAssistantanceCommand1_Text = "Para quem posso ligar para obter &mais assist�ncia?";       

        g_AgentCharacter.Commands.Add("Agent_OnCommand_AboutAssistance", L_AddAssistantanceCommand1_Text);
    }
}

function Agent_OnCommand_AboutAssistance() 
{

    Agent_StopAll();

    var L_AboutAssistance1_Text = "Contate o fabricante do computador em %s.";
    var re = /%s/i;
    var L_AboutAssistance2_Text = "Contate o fabricante do computador.";

    
    

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
            Agent_Speak(L_AboutAssistance2_Text);
    else
            Agent_Speak(L_AboutAssistance1_Text.replace(re, strPhoneNumber));

    Agent_Play("ReadReturn");
}

function Agent_AddWhatToDoNextCommand() 
{
    var L_AddWhatToDoNextCommand1_Text = "&Qual � o pr�ximo passo?";
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

        var L_WhatToDoNext1_Text = "Para continuar, clique no bot�o 'Avan�ar'.";
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

        var L_WhatToDoNext2_Text = "Para retornar � etapa anterior, clique no bot�o 'Voltar'.";
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

        var L_WhatToDoNext3_Text = "Voc� tamb�m pode ignorar toda esta etapa clicando no bot�o 'Ignorar'.";
        Agent_Speak(L_WhatToDoNext3_Text);
        
        Agent_Play("RestPose");
    }       
}

function Agent_DoSpecialISPCommand1() 
{
	
	
			
	Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
			
	var L_ISPSpecialTellMeAboutInternetSignup1_Text = "Agora voc� est� trabalhando no processo de inscri��o para o acesso � Internet.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup1_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup2_Text = "Se voc� tiver problemas para continuar, clique em mim ou pressione F1";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup2_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup3_Text = "para escolher comandos do meu menu e come�ar tudo de novo ou passar para a pr�xima se��o.";
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

    var L_EncourageNextButton1_Text = "Clique no bot�o 'Avan�ar'. | Basta clicar no bot�o 'Avan�ar'! | Clique no bot�o 'Avan�ar'. | Clique no bot�o 'Avan�ar' para passar para a pr�xima etapa.";
    Agent_Speak(L_EncourageNextButton1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnF1() 
{
    var L_OnF1_Text = "Como posso ajud�-lo? | Como posso ajudar voc�?";
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

    var L_PreWelcomeScript1_Text = "Bem-vindo ao Windows XP!";
    Agent_Speak(L_PreWelcomeScript1_Text);

    var L_PreWelcomeScript2_Text = "Estou aqui para ajudar com a configura��o do computador.";
    Agent_Speak(L_PreWelcomeScript2_Text);

    var L_PreWelcomeScript3_Text = "Posso fornecer explica��es � medida que prosseguirmos.";
    Agent_Speak(L_PreWelcomeScript3_Text);
                
    Agent_MoveToElement(document.all("AssistImg"), "LeftCenter"); 
    
    

    var L_PreWelcomeScript4_Text = "Sempre que precisar de ajuda, basta clicar em mim com o mouse ou pressionar a tecla F1.";
    Agent_Speak(L_PreWelcomeScript4_Text);
    
    Agent_Play("PointLeft");

    var L_PreWelcomeScript5_Text = "Estou aqui se precisar.";
    Agent_Speak(L_PreWelcomeScript5_Text);
    
    Agent_Play("RestPose");

    g_AgentRequestHideImage = g_AgentCharacter.Hide();
}



function Agent_WelcomeAddCommands() 
{
    
    
    

    var L_WelcomeAddCommands1_Text = "&Mais informa��es sobre este processo";
    var L_WelcomeAddCommands2_Text = "&Qual � o pr�ximo passo?";

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

    var L_WelcomeWhatToDoNext1_Text = "Se voc� estiver pronto para come�ar, clique no bot�o 'Avan�ar'.";
    Agent_Speak(L_WelcomeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnWelcomeCommand_AboutProcess() 
{
    Agent_StopAll();

    var L_AboutProcess1_Text = "As telas que aparecem atr�s de mim servem para voc� verificar se o computador est� configurado da maneira que voc� quer.";
    Agent_Speak(L_AboutProcess1_Text);

    var L_AboutProcess2_Text = "Em cada tela, voc� dever� selecionar uma op��o ou digitar informa��es, ou receber� instru��es sobre o pr�ximo passo.";
    Agent_Speak(L_AboutProcess2_Text);

    var L_AboutProcess3_Text = "Aqui est� uma pr�via das etapas que ser�o executadas nos pr�ximos minutos:";
    Agent_Speak(L_AboutProcess3_Text);

    var L_AboutProcess4_Text = "Primeiro, vamos nos certificar de que os itens de hardware do computador, como os alto-falantes, o teclado e o rel�gio, est�o funcionando corretamente.";
    Agent_Speak(L_AboutProcess4_Text);

    var L_AboutProcess5_Text = "Tamb�m vamos verificar se o computador foi corretamente adicionado a uma rede, se voc� tiver selecionado essa op��o.";
    Agent_Speak(L_AboutProcess5_Text);


    var L_AboutProcess6_Text = "Em segundo lugar, vamos examinar o contrato de licen�a que descreve os termos de uso de %1.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess6_Text, g_ProductName));
    
    if (!window.external.get_RetailOOBE()) 
    {
    var L_AboutProcess7_Text = "Se o computador tiver um modem ou conex�o de rede em funcionamento, voc� ter� a op��o de se registrar na Microsoft e %1 para que possamos lhe enviar informa��es sobre atualiza��es do produto e ofertas que possam lhe interessar.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess7_Text, g_OEMNameStr));
    } 
    else 
    {    
    var L_AboutProcess7_Text = "Se o computador tiver um modem ou conex�o de rede em funcionamento, voc� ter� a op��o de se registrar na Microsoft para que possamos lhe enviar informa��es sobre atualiza��es do produto e ofertas que possam lhe interessar.";
    Agent_Speak(L_AboutProcess7_Text);
    }       

    var L_AboutProcess8_Text = "Voc� tamb�m ter� a op��o de verificar a autenticidade de %1 para certificar-se de que est� usando uma c�pia legal.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess8_Text, g_ProductName));

    var L_AboutProcess9_Text = "Em terceiro lugar, posso ajud�-lo a se conectar � Internet.";
    Agent_Speak(L_AboutProcess9_Text); 

    var L_AboutProcess10_Text = "Se decidir ignorar esta etapa, voc� poder� ainda se conectar por sua conta mais tarde.";
    Agent_Speak(L_AboutProcess10_Text);

    var L_AboutProcess11_Text = "Em quarto lugar, vou ajud�-lo a tornar este computador personaliz�vel para cada pessoa que for utiliz�-lo. ";
    Agent_Speak(L_AboutProcess11_Text);

    var L_AboutProcess12_Text = "� s�.  N�o vai levar muito tempo. Vamos come�ar!";
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

    var L_AboutProcess13_Text = "Para come�ar, clique no bot�o 'Avan�ar'.";
    Agent_Speak(L_AboutProcess13_Text);
    
    Agent_Play("RestPose");
}


                                                       

function Agent_TimeZoneAddCommands() 
{
    var L_TimeZoneCommand1_Text = "Informa��es sobre esta &etapa";
    var L_TimeZoneCommand2_Text = "C&omo seleciono o fuso hor�rio?";

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
        var L_TimeZoneMenuCommand3_Text = "O que � o &hor�rio de ver�o?";

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
    var L_ExplainTimeZoneStep1_Text = "Indique o fuso hor�rio em que voc� usar� o computador e o Windows acertar� o rel�gio do computador de acordo com o fuso indicado.";
    Agent_Speak(L_ExplainTimeZoneStep1_Text);

    var L_ExplainTimeZoneStep2_Text = "Se voc� desejar,  o Windows pode atualizar automaticamente o rel�gio para o hor�rio de ver�o.";
    Agent_Speak(L_ExplainTimeZoneStep2_Text);

    var L_ExplainTimeZoneStep3_Text = "Esta � a �ltima etapa que envolve o hardware.";
    Agent_Speak(L_ExplainTimeZoneStep3_Text);

    var L_ExplainTimeZoneStep4_Text = "Em seguida, vamos examinar o contrato de licen�a.";
    Agent_Speak(L_ExplainTimeZoneStep4_Text);
    
}

function Agent_OnTimeZoneCommand_SelectZone() 
{
    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone1_Text = "Os fusos hor�rios da lista s�o dados como a Hora de Greenwich (GMT) mais ou menos um determinado n�mero de horas.";
    Agent_Speak(L_TellUserHowToSelectTimeZone1_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone2_Text = "Clique aqui ou pressione a tecla Tab no teclado at� atingi-lo ";
    Agent_Speak(L_TellUserHowToSelectTimeZone2_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Right");

    var L_TellUserHowToSelectTimeZone3_Text = "Clique nestes pequenos bot�es de seta ou use as teclas de seta para cima ou para baixo no teclado para rolar pelos fusos hor�rios. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone3_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone4_Text = "Clique no fuso hor�rio desejado ou pressione Enter no teclado.";
    Agent_Speak(L_TellUserHowToSelectTimeZone4_Text);

    var L_TellUserHowToSelectTimeZone5_Text = "O fuso hor�rio que voc� selecionou aparecer� em realce.";
    Agent_Speak(L_TellUserHowToSelectTimeZone5_Text);

    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserHowToSelectTimeZone6_Text = "Se voc� morar em uma �rea em que seja adotado o hor�rio de ver�o, posicione o ponteiro aqui e clique uma vez para marcar esta op��o.";
    Agent_Speak(L_TellUserHowToSelectTimeZone6_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone7_Text = "O Windows vai ajustar automaticamente o rel�gio do computador duas vezes por ano.";
    Agent_Speak(L_TellUserHowToSelectTimeZone7_Text);
    
}

function Agent_OnTimeZoneCommand_DaylightSavings() 
{
    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserAboutDaylightOption1_Text = "Em alguns fusos hor�rios, os rel�gios s�o adiantados ou atrasados em certas �pocas do ano para compensar diferen�as na dura��o do dia.";
    Agent_Speak(L_TellUserAboutDaylightOption1_Text);
    
    Agent_Play("RestPose");

    var L_TellUserAboutDaylightOption2_Text = "Se quiser que o rel�gio do computador seja ajustado automaticamente quando isso acontecer, marque esta op��o posicionando o ponteiro aqui e clicando uma vez.";
    Agent_Speak(L_TellUserAboutDaylightOption2_Text);

}



function Agent_OEMHWAddCommands() 
{
    var L_OEMHWMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_OEMHWMenuCommand2_Text = "C&omo saber se o sistema de som est� fimcionando?";
    var L_OEMHWMenuCommand3_Text = "O que fa&zer se o som n�o estiver funcionando?";
    var L_OEMHWMenuCommand4_Text = "Como in&dicar minha resposta?";

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
    var L_OEMHWAboutThisScreen1_Text = "Esta � a tela em que voc� se certifica de que o sistema de som do computador est� funcionando.";
	  Agent_Speak(L_OEMHWAboutThisScreen1_Text);

    var L_OEMHWAboutThisScreen2_Text = "O sistema de som � composto de alto-falantes, uma placa de som que fica dentro do computador e o software %1 que permite a reprodu��o de som.";
	  Agent_Speak(ApiObj.formatMessage(L_OEMHWAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnOEMHWHowDoIKnow() 
{
    var L_OEMHWHowDoIKnow1_Text = "Se voc� estiver ouvindo um som agora, ele est� funcionando.";
	  Agent_Speak(L_OEMHWHowDoIKnow1_Text);

    var L_OEMHWHowDoIKnow2_Text = "Se voc� n�o ouvir um som, primeiro verifique o volume do alto-falante para certificar-se de que ele n�o est� muito baixo.";
	  Agent_Speak(L_OEMHWHowDoIKnow2_Text);

    var L_OEMHWHowDoIKnow3_Text = "Se isso n�o resolver o problema, vamos verificar outras possibilidades.";
	  Agent_Speak(L_OEMHWHowDoIKnow3_Text);
}

function Agent_OnOEMHWIsNotWorking() 
{
    var L_OEMHWIsNotWorking1_Text = "Em primeiro lugar, certifique-se de que os alto-falantes est�o ligados.";
	  Agent_Speak(L_OEMHWIsNotWorking1_Text);
	
    var L_OEMHWIsNotWorking2_Text = "Alguns alto-falantes t�m um indicador luminoso para mostrar que est�o ligados.";
	  Agent_Speak(L_OEMHWIsNotWorking2_Text);

    var L_OEMHWIsNotWorking3_Text = "Em segundo lugar, certifique-se de que o volume dos alto-falantes est� aud�vel.";
	  Agent_Speak(L_OEMHWIsNotWorking3_Text);

    var L_OEMHWIsNotWorking4_Text = "Se voc� ainda n�o estiver ouvindo um som dos seus alto-falantes...";
	  Agent_Speak(L_OEMHWIsNotWorking4_Text);

    var L_OEMHWIsNotWorking5_Text = "Em terceiro lugar, certifique-se de que os alto-falantes est�o ligados a uma tomada e que est�o conectados corretamente ao computador.";
	  Agent_Speak(L_OEMHWIsNotWorking5_Text);
	
	  var L_OEMHWIsNotWorking6_Text = "� f�cil confundir o plugue do microfone do computador com o plugue do alto-falante.";
	  Agent_Speak(L_OEMHWIsNotWorking6_Text);

    var L_OEMHWIsNotWorking7_Text = "Em quarto lugar, se voc� tiver alto-falantes est�reo, certifique-se de que eles est�o conectados um ao outro.";
	  Agent_Speak(L_OEMHWIsNotWorking7_Text);

    var L_OEMHWIsNotWorking8_Text = "Finalmente, se voc� ainda n�o estiver ouvindo um som, tente usar alto-falantes de outro computador.";
	  Agent_Speak(L_OEMHWIsNotWorking8_Text);

    var L_OEMHWIsNotWorking9_Text = "Se os alto-falantes do outro computador funcionarem, mas os seus alto-falantes n�o funcionarem, voc� precisa substitu�-los ou repar�-los.";
	  Agent_Speak(L_OEMHWIsNotWorking9_Text);
}

function Agent_OnOEMHWIndicateAnswer() 
{
	  Agent_GestureAtElement(g.document.all("Sound_Yes"), "Left");
    
    var L_OEMHWIndicateAnswer1_Text = "Basta posicionar o ponteiro do mouse sobre o c�rculo branco � esquerda da resposta";
	  Agent_Speak(L_OEMHWIndicateAnswer1_Text);
    
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("radioNoSound"), "Left");

    var L_OEMHWIndicateAnswer2_Text = "e clicar uma vez.";
	  Agent_Speak(L_OEMHWIndicateAnswer2_Text);
    
    Agent_Play("RestPose");

    var L_OEMHWIndicateAnswer3_Text = "Se voc� usar o teclado para indicar sua resposta, pressione a tecla Tab at� ver um ret�ngulo esmaecido ao redor do c�rculo branco que voc� deseja preencher e pressione a barra de espa�os.";
	  Agent_Speak(L_OEMHWIndicateAnswer3_Text);
}




function Agent_CompNameAddCommands() 
{
    var L_CompNameMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_CompNameMenuCommand2_Text = "Como fa�o para mudar o nome do &computador mais tarde?";

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
    var L_CompNameAboutThisScreen1_Text = "Esta � a tela em que voc� d� um nome ao computador.";
	  Agent_Speak(L_CompNameAboutThisScreen1_Text);

    var L_CompNameAboutThisScreen2_Text = "Este nome identifica seu computador para outros usu�rios caso este computador esteja conectado a outros computadores em uma rede.";
	  Agent_Speak(L_CompNameAboutThisScreen2_Text);
}

function Agent_OnCompNameHowToRename() 
{
    var L_CompNameHowToRename1_Text = "Depois que voc� terminar de configurar o Windows, clique em 'Painel de controle' no menu 'Iniciar'.";
	  Agent_Speak(L_CompNameHowToRename1_Text);

    var L_CompNameHowToRename2_Text = "Clique no �cone 'Sistema' em 'Desempenho e manuten��o' e siga as instru��es na guia 'Nome do computador'.";
	  Agent_Speak(L_CompNameHowToRename2_Text);

    var L_CompNameHowToRename3_Text = "Se voc� se esquecer destas etapas, clique em 'Ajuda e suporte' no menu 'Iniciar' para encontrar a resposta �s suas perguntas, assim como outras informa��es valiosas.";
	  Agent_Speak(L_CompNameHowToRename3_Text);
}




function Agent_SECURITYPASSAddCommands() 
{
    var L_SECURITYPASSMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_SECURITYPASSMenuCommand2_Text = "Qual � a melhor maneira de criar uma &senha?";

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
    var L_SECURITYPASSAboutThisScreen1_Text = "Esta � a tela em que voc� cria uma senha se desejar proteger o computador contra acesso n�o autorizado.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen1_Text);

    var L_SECURITYPASSAboutThisScreen2_Text = "Observa��o: se o computador estiver conectado a outros computadores em uma rede, a pessoa que fizer logon com o nome de usu�rio \"Administrador\" e a senha v�lida poder� acessar toda a rede.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen2_Text);
    
    var L_SECURITYPASSAboutThisScreen3_Text = "Portanto, � altamente recomend�vel que voc� exija uma senha de administrador para proteger o computador -- e a rede, se seu computador estiver em rede.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen3_Text);
}

function Agent_OnSECURITYPASSBestWay() 
{
    var L_SECURITYPASSBestWay1_Text = "Para aumentar a seguran�a de uma senha, ela deve conter pelo menos dois destes elementos: letras mai�sculas, letras min�sculas e n�meros.";
	  Agent_Speak(L_SECURITYPASSBestWay1_Text);

    var L_SECURITYPASSBestWay2_Text = "Al�m disso, quanto mais aleat�ria for a seq��ncia de caracteres, mais segura ser� a senha.";
	  Agent_Speak(L_SECURITYPASSBestWay2_Text);

    var L_SECURITYPASSBestWay3_Text = "As senhas podem ter at� 127 caracteres.";
	  Agent_Speak(L_SECURITYPASSBestWay3_Text);
    
    var L_SECURITYPASSBestWay4_Text = "Mas, se voc� estiver usando o Windows em uma rede que tamb�m possui computadores usando o Windows 95 ou Windows 98, e deseja fazer logon na rede a partir desses computadores, considere usar senhas n�o maiores que 14 caracteres.";
	  Agent_Speak(L_SECURITYPASSBestWay4_Text);
}



function Agent_JOINDOMAINAddCommands() 
{
    var L_JOINDOMAINMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_JOINDOMAINMenuCommand2_Text = "O q&ue � um dom�nio?";
    var L_JOINDOMAINMenuCommand3_Text = "Como &fa�o para ingressar em um dom�nio?"; 
    var L_JOINDOMAINMenuCommand4_Text = "&Qual � o pr�ximo passo?";


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
    var L_JOINDOMAINAboutThisScreen1_Text = "Esta � a tela em que voc� decide se deseja tornar este computador membro de um dom�nio.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen1_Text);

    var L_JOINDOMAINAboutThisScreen2_Text = "Se voc� optar por ingressar em um dom�nio, deve digitar o nome do dom�nio em que o computador est� ingressando.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen2_Text);
}

function Agent_OnJOINDOMAINDifference() 
{
    var L_JOINDOMAINDifference1_Text = "Dom�nio � um grupo de computadores administrados como uma unidade.";
    Agent_Speak(L_JOINDOMAINDifference1_Text);
    
    var L_JOINDOMAINDifference2_Text = "Por exemplo, uma empresa pode adicionar todos os computadores de sua filial em Campinas a um dom�nio, para que eles compartilhem dos mesmos privil�gios de acesso e se conectem �s mesmas impressoras.";
    Agent_Speak(L_JOINDOMAINDifference2_Text);

    var L_JOINDOMAINDifference3_Text = "Se voc� n�o tiver certeza quanto � op��o que deseja escolher, selecione 'N�o' e clique no bot�o 'Avan�ar'.";
    Agent_Speak(L_JOINDOMAINDifference3_Text);
}

function Agent_OnJOINDOMAINHowToName() 
{
 	  Agent_GestureAtElement(g.document.all("radioYesDomain"), "Left");
 
    var L_JOINDOMAINHowToName1_Text = "Se voc� marcar uma op��o para ingressar em um dom�nio,";
    Agent_Speak(L_JOINDOMAINHowToName1_Text);
      
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("textboxDomain"), "Left");
  
    var L_JOINDOMAINHowToName2_Text = "pode digitar o nome na caixa abaixo dessa op��o.";
    Agent_Speak(L_JOINDOMAINHowToName2_Text);
      
    Agent_Play("RestPose");
  
    var L_JOINDOMAINHowToName3_Text = "Voc� n�o pode digitar um nome se n�o tiver escolhido a op��o de ingresso no dom�nio.";
    Agent_Speak(L_JOINDOMAINHowToName3_Text);
  
    var L_JOINDOMAINHowToName4_Text = "Portanto, a caixa permanece cinza para indicar que essa op��o n�o est� acess�vel at� que voc� escolha a op��o de ingresso no dom�nio.";
    Agent_Speak(L_JOINDOMAINHowToName4_Text);
  
    var L_JOINDOMAINHowToName5_Text = "Se voc� estiver incluindo o computador em um dom�nio, pe�a ao administrador de rede um nome de dom�nio v�lido.";
    Agent_Speak(L_JOINDOMAINHowToName5_Text);
  
    var L_JOINDOMAINHowToName6_Text = "Se voc� n�o estiver ingressando em um dom�nio, n�o ter� de especificar um nome.";
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
    
    var L_JOINDOMAINWhatToDoNext1_Text = "Depois que voc� fizer a sele��o, clique no bot�o 'Avan�ar'.";
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
    
    var L_JOINDOMAINWhatToDoNext2_Text = "Voc� tamb�m pode optar por voltar � tela anterior clicando no bot�o 'Voltar'.";
    Agent_Speak(L_JOINDOMAINWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}




function Agent_JNDOM_AAddCommands() 
{
    var L_JNDOMAMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_JNDOMAMenuCommand2_Text = "Como digitar o nome de usu�rio e &senha?";
    var L_JNDOMAMenuCommand3_Text = "O q&ue � um dom�nio?";
    var L_JNDOMAMenuCommand4_Text = "&Qual � o pr�ximo passo?";
    
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
    var L_JNDOM_A_AboutThisStep1_Text = "Esta � a tela em que voc� identifica a pessoa que est� autorizada a incluir o computador em um dom�nio.";
  	Agent_Speak(L_JNDOM_A_AboutThisStep1_Text);
}

function Agent_OnJNDOM_AHowToEnter() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_HowToEnter1_Text = "O nome que voc� digitar aqui deve ser exclusivo em rela��o ao outros nomes de usu�rio do dom�nio.";
    Agent_Speak(L_JNDOM_A_HowToEnter1_Text);
      
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_HowToEnter2_Text = "A senha que voc� digitar aqui deve corresponder � senha da daquela conta de usu�rio.";
    Agent_Speak(L_JNDOM_A_HowToEnter2_Text);
      
    Agent_Play("RestPose");
    
    var L_JNDOM_A_HowToEnter3_Text = "Se voc� n�o souber o nome de usu�rio e senha a serem usados, contate o administrador de rede.";
    Agent_Speak(L_JNDOM_A_HowToEnter3_Text);
}

function Agent_OnJNDOM_AWhatIsDomain() 
{
    var L_JNDOM_A_WhatIsDomain1_Text = "Dom�nio � um grupo de computadores administrados como uma unidade.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain1_Text);
  	
    var L_JNDOM_A_WhatIsDomain2_Text = "Por exemplo, uma empresa pode adicionar todos os computadores de sua filial em Campinas a um dom�nio, para que eles compartilhem dos mesmos privil�gios de acesso e se conectem �s mesmas impressoras.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain2_Text);
      
    Agent_Play("RestPose");		
}

function Agent_OnJNDOM_AWhatToDoNext() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_WhatToDoNext1_Text = "Depois de digitar o nome de usu�rio";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext1_Text);
      
    Agent_Play("RestPose");		
  	
    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_WhatToDoNext2_Text = "e a senha do usu�rio aqui,";
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
    
    var L_JNDOM_A_WhatToDoNext3_Text = "clique no bot�o 'Avan�ar'.";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext3_Text);
      
    Agent_Play("RestPose");		
}



function Agent_ActivationAddCommands() 
{
    var L_ActivationMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_ActivationMenuCommand2_Text = "Infor&ma��es sobre ativa��o";
    var L_ActivationMenuCommand3_Text = "C&omo posso fazer a ativa��o mais tarde?";
    var L_ActivationMenuCommand4_Text = "Como posso &fazer a ativa��o se eu n�o estiver conectado � Internet?";
    var L_ActivationMenuCommand5_Text = "O &que acontece se eu n�o fizer a ativa��o?";
    var L_ActivationMenuCommand6_Text = "&Qual � o pr�ximo passo?";

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
    
    var L_ActivationAboutThisScreen1_Text = "Esta � a tela em que voc� decide se deseja ativar %1 agora ou mais tarde.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutThisScreen1_Text, g_ProductName));
    
    var L_ActivationAboutThisScreen2_Text = "Se voc� desejar aguardar at� mais tarde, pode executar o 'Assistente de ativa��o do produto' pelo menu 'Iniciar'.";
    Agent_Speak(L_ActivationAboutThisScreen2_Text);
    
    var L_ActivationAboutThisScreen3_Text = "Voc� ser� lembrado periodicamente para ativar o Windows para que voc� possa continuar a us�-lo.";
    Agent_Speak(L_ActivationAboutThisScreen3_Text);
}

function Agent_OnActivationAboutActivation() 
{
    var L_ActivationAboutActivation1_Text = "Quando voc� recebe um novo cart�o de banco ou cart�o de cr�dito, geralmente o banco pede para voc� 'ativar' o cart�o antes de come�ar a us�-lo.";
    Agent_Speak(L_ActivationAboutActivation1_Text);
    
    var L_ActivationAboutActivation2_Text = "A ativa��o protege voc� e seu banco contra o uso n�o autorizado de seu cart�o.";
    Agent_Speak(L_ActivationAboutActivation2_Text);
    
    var L_ActivationAboutActivation3_Text = "A ativa��o do %1 funciona da mesma maneira, com a diferen�a de que voc� pode usar o %2 durante o per�odo de ativa��o especificado antes de ser solicitado a ativ�-lo.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationHowToActivateLater() 
{
    var L_ActivationHowToActivateLater1_Text = "Se voc� ignorar a ativa��o agora, um lembrete ser� exibido na �rea de trabalho de %1 de tempos em tempos.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationHowToActivateLater1_Text, g_ProductName));
    
    var L_ActivationHowToActivateLater2_Text = "Voc� poder� ent�o executar o 'Assistente para ativa��o do Windows' clicando em 'Ativa��o do Windows' no no menu 'Iniciar'.";
    Agent_Speak(L_ActivationHowToActivateLater2_Text);
    
    var L_ActivationHowToActivateLater3_Text = "Se voc� se esquecer destas etapas, clique em 'Ajuda e suporte' no menu 'Iniciar' para obter respostas �s suas perguntas, assim como outras informa��es relevantes.";
    Agent_Speak(L_ActivationHowToActivateLater3_Text);
}

function Agent_OnActivationHowToActivateUnconnected() 
{
    Agent_GestureAtElement(g.rb_act_2, "Left");
    	
    var L_ActivationHowToActivateUnconnected1_Text = "Basta escolher \"N�o\" aqui.";
    Agent_Speak(L_ActivationHowToActivateUnconnected1_Text);
    
    Agent_Play("RestPose");
    
    var L_ActivationHowToActivateUnconnected2_Text = "Depois de concluir a configura��o do Windows, voc� pode executar o 'Assistente para ativa��o do Windows' clicando em 'Ativa��o do Windows' no menu 'Iniciar'.";
    Agent_Speak(L_ActivationHowToActivateUnconnected2_Text);
    
    var L_ActivationHowToActivateUnconnected3_Text = "O assistente fornecer� um n�mero de telefone que voc� poder� usar para ativar o Windows por telefone.";
    Agent_Speak(L_ActivationHowToActivateUnconnected3_Text);
}

function Agent_OnActivationWhatHappensNoActivate() 
{
    var L_ActivationWhatHappensNoActivate1_Text = "Voc� pode continuar a usar o %1 at� que o per�odo de ativa��o expire.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate1_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate2_Text = "No entanto, ao final do per�odo, voc� precisar� ativar %1 para poder continuar a us�-lo.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate2_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate3_Text = "Se voc� deixar expirar o per�odo de ativa��o, n�o poder� mais usar o %1.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate3_Text, g_ProductName));
}

function Agent_OnActivationWhatToDoNext() 
{
    Agent_GestureAtElement(g.act_spn1, "Left");
    
    var L_ActivationWhatToDoNext1_Text = "Ap�s selecionar a resposta a esta pergunta,";
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
            
    var L_ActivationWhatToDoNext2_Text = "clique no bot�o 'Avan�ar'.";
    Agent_Speak(L_ActivationWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");	
}



function Agent_ActivationErrorAddCommands() 
{
    var L_ActivationErrorMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_ActivationErrorMenuCommand2_Text = "Infor&ma��es sobre ativa��o";
    var L_ActivationErrorMenuCommand3_Text = "C&omo posso fazer a ativa��o mais tarde?";
    var L_ActivationErrorMenuCommand4_Text = "Como posso &fazer a ativa��o se eu n�o estiver conectado � Internet?";
    var L_ActivationErrorMenuCommand5_Text = "O &que acontece se eu n�o fizer a ativa��o?";


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
    var L_ActivationErrorAboutThisScreen1_Text = "Esta tela foi exibida porque voc� n�o p�de acessar o centro de ativa��o.";
	Agent_Speak(L_ActivationErrorAboutThisScreen1_Text);
	
    var L_ActivationErrorAboutThisScreen2_Text = "Depois de configurar %1, voc� pode executar o 'Assistente para ativa��o de produto' clicando em 'Ativa��o do Windows' no menu 'Iniciar'.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnActivationErrorAboutActivation() 
{
    var L_ActivationErrorAboutActivation1_Text = "Quando voc� recebe um novo cart�o de banco ou cart�o de cr�dito, geralmente o banco pede para voc� 'ativar' o cart�o antes de come�ar a us�-lo.";
	Agent_Speak(L_ActivationErrorAboutActivation1_Text);
	
    var L_ActivationErrorAboutActivation2_Text = "A ativa��o protege voc� e seu banco contra o uso n�o autorizado de seu cart�o.";
	Agent_Speak(L_ActivationErrorAboutActivation2_Text);
	
    var L_ActivationErrorAboutActivation3_Text = "A ativa��o de %1 funciona da mesma maneira, mas voc� pode usar %2 por um determinado n�mero de dias at� ser solicitado a ativar o produto.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationErrorHowToActivateLater() 
{
    var L_ActivationErrorHowToActivateLater1_Text = "Se voc� ignorar a ativa��o agora, um lembrete ser� exibido na �rea de trabalho de %1 de tempos em tempos.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationErrorHowToActivateLater2_Text = "Voc� poder� ent�o executar o 'Assistente para ativa��o do Windows' clicando em 'Ativa��o do Windows' no no menu 'Iniciar'.";
	Agent_Speak(L_ActivationErrorHowToActivateLater2_Text);
	
    var L_ActivationErrorHowToActivateLater3_Text = "Se voc� se esquecer destas etapas, clique em 'Ajuda e suporte' no menu 'Iniciar' para obter respostas �s suas perguntas, assim como outras informa��es relevantes.";
	Agent_Speak(L_ActivationErrorHowToActivateLater3_Text);
}

function Agent_OnActivationErrorHowToActivateUnconnected() 
{
    var L_ActivationErrorHowToActivateUnconnected1_Text = "Depois de concluir a configura��o do Windows, voc� pode executar o 'Assistente para ativa��o do Windows' clicando em 'Ativa��o do Windows' no menu 'Iniciar'.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected1_Text);
	
    var L_ActivationErrorHowToActivateUnconnected2_Text = "O assistente fornecer� um n�mero de telefone que voc� poder� usar para ativar o Windows por telefone.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected2_Text);
}

function Agent_OnActivationErrorWhatHappensNoActivate() 
{
    var L_ActivationErrorWhatHappensNoActivate1_Text = "Voc� pode continuar a usar o %1 at� que o per�odo de ativa��o expire.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate2_Text = "No entanto, ao final do per�odo, voc� precisar� ativar %1 para poder continuar a us�-lo.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate3_Text = "Se voc� deixar expirar o per�odo de ativa��o, n�o poder� mais usar o %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_ActivationPrivacyPolicyAddCommands() 
{
    var L_ActivationPrivacyPolicyMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_ActivationPrivacyPolicyMenuCommand2_Text = "Infor&ma��es sobre ativa��o";
    var L_ActivationPrivacyPolicyMenuCommand3_Text = "C&omo posso fazer a ativa��o mais tarde?";
    var L_ActivationPrivacyPolicyMenuCommand4_Text = "Como posso &fazer a ativa��o se eu n�o estiver conectado � Internet?";
    var L_ActivationPrivacyPolicyMenuCommand5_Text = "O &que acontece se eu n�o fizer a ativa��o?";


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
    var L_ActivationPrivacyPolicyAboutThisScreen1_Text = "Esta tela explica como a sua privacidade � protegida quando voc� ativa o %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutThisScreen1_Text, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyAboutActivation() 
{
    var L_ActivationPrivacyPolicyAboutActivation1_Text = "Quando voc� recebe um novo cart�o de banco ou cart�o de cr�dito, geralmente o banco pede para voc� 'ativar' o cart�o antes de come�ar a us�-lo.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation1_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation2_Text = "A ativa��o protege voc� e seu banco contra o uso n�o autorizado de seu cart�o.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation2_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation3_Text = "A ativa��o do %1 funciona da mesma maneira, com a diferen�a de que voc� pode usar o %2 durante o per�odo de ativa��o especificado antes de ser solicitado a ativ�-lo.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyHowToActivateLater() 
{
    var L_ActivationPrivacyPolicyHowToActivateLater1_Text = "Se voc� ignorar a ativa��o agora, um lembrete ser� exibido na �rea de trabalho de %1 de tempos em tempos.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyHowToActivateLater2_Text = "Voc� poder� ent�o executar o 'Assistente para ativa��o do Windows' clicando em 'Ativa��o do Windows' no no menu 'Iniciar'.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater2_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateLater3_Text = "Se voc� se esquecer destas etapas, clique em 'Ajuda e suporte' no menu 'Iniciar' para obter respostas �s suas perguntas, assim como outras informa��es relevantes.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater3_Text);
}

function Agent_OnActivationPrivacyPolicyHowToActivateUnconnected() 
{
    var L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text = "Depois de concluir a configura��o do Windows, voc� pode executar o 'Assistente para ativa��o do Windows' clicando em 'Ativa��o do Windows' no menu 'Iniciar'.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text = "O assistente fornecer� um n�mero de telefone que voc� poder� usar para ativar o Windows por telefone.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text);
}

function Agent_OnActivationPrivacyPolicyWhatHappensNoActivate() 
{
    var L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text = "Voc� pode continuar usando o %1 at� que o per�odo da diretiva de privacidade de ativa��o expire.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text = "No entanto, ao final do per�odo, voc� precisar� ativar %1 para poder continuar a us�-lo.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text = "Se voc� deixar que o per�odo da diretiva de privacidade de ativa��o expire, n�o poder� mais usar o %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_DSLMAINAddCommands() 
{
    var L_DSLMAINMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_DSLMAINMenuCommand2_Text = "Raz�e&s para exigir o nome de usu�rio e a senha";
    var L_DSLMAINMenuCommand3_Text = "&Qual � o pr�ximo passo?";
    
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
    var L_DSLMAINAboutThisScreen1_Text = "Esta � a tela onde voc� decide se um nome de usu�rio e uma senha ser�o necess�rios para acessar a Internet deste computador.";
	Agent_Speak(L_DSLMAINAboutThisScreen1_Text);
}

function Agent_OnDSLMAINSomeReasons() 
{
    var L_DSLMAINHowToMoveOn1_Text = "Se voc� for a �nica pessoa que usar� este computador, ser� conveniente permitir que %1 armazene automaticamente o seu nome de usu�rio e senha.";
	Agent_Speak(ApiObj.FormatMessage(L_DSLMAINHowToMoveOn1_Text, g_ProductName));
	
    var L_DSLMAINHowToMoveOn2_Text = "Desta forma, voc� n�o precisar� digitar essas informa��es todas as vezes que desejar conectar-se � Internet.";
	Agent_Speak(L_DSLMAINHowToMoveOn2_Text);
	
    var L_DSLMAINHowToMoveOn3_Text = "Por�m, se voc� compartilhar este computador com outros usu�rios e n�o quiser compartilhar com eles a sua conta na Internet, voc� pode proteg�-la com um nome de usu�rio e senha.";
	Agent_Speak(L_DSLMAINHowToMoveOn3_Text);
	
    var L_DSLMAINHowToMoveOn4_Text = "Por exemplo, voc� pode compartilhar este computador com seus filhos para que eles possam jogar.";
	Agent_Speak(L_DSLMAINHowToMoveOn4_Text);
	
    var L_DSLMAINHowToMoveOn5_Text = "Mas pode ser que voc� n�o queira que eles naveguem pela Internet sem a sua permiss�o.";
	Agent_Speak(L_DSLMAINHowToMoveOn5_Text);		
}

function Agent_OnDSLMAINWhatToDoNext()
{	
	Agent_GestureAtElement(g.dslmain_TitleText, "Left");
	
    var L_DSLMAINWhatToDoNext1_Text = "Ap�s selecionar a resposta a esta pergunta,";
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
	
	var L_DSLMAINWhatToDoNext2_Text = "clique no bot�o 'Avan�ar'.";
	Agent_Speak(L_DSLMAINWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");
}



function Agent_DSL_AAddCommands() 
{
    var L_DSLAMenuCommand1_Text = "Informa��es sobre esta e&tapa";
    var L_DSLAMenuCommand2_Text = "O &que � a Internet?";
    var L_DSLAMenuCommand3_Text = "&O que � necess�rio para se estabelecer uma conex�o com a Internet?";
    var L_DSLAMenuCommand4_Text = "Obt&er mais informa��es sobre inscri��o na Internet";

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
    var L_DSL_A_AboutThisStep1_Text = "Esta � a tela em que voc� configura sua conta em um provedor de servi�os de Internet, abreviado como \"ISP\", para que possa se conectar � Internet deste computador.";
	Agent_Speak(L_DSL_A_AboutThisStep1_Text);
}

function Agent_DSL_AWhatIsInternet() 
{
    var L_DSL_A_WhatIsInternet1_Text = "A Internet � uma rede mundial de computadores.";
	Agent_Speak(L_DSL_A_WhatIsInternet1_Text);
	
    var L_DSL_A_WhatIsInternet2_Text = "Se voc� tiver acesso � Internet, pode recuperar informa��es que est�o publicamente dispon�veis de milh�es de fontes, como escolas, entidades governamentais, empresas e p�ginas individuais.";
	Agent_Speak(L_DSL_A_WhatIsInternet2_Text);
	
    var L_DSL_A_WhatIsInternet3_Text = "A World Wide Web, ou \"WWW\" para abreviar, � um sistema de navega��o da Internet por meio de hiperlinks.";
	Agent_Speak(L_DSL_A_WhatIsInternet3_Text);
	
    var L_DSL_A_WhatIsInternet4_Text = "Hiperlinks s�o textos ou imagens que, ao serem clicados, levam a outra p�gina da Web ou a outra parte da mesma p�gina, ou ainda executam uma determinada a��o, como abrir um programa.";
	Agent_Speak(L_DSL_A_WhatIsInternet4_Text);
	
    var L_DSL_A_WhatIsInternet5_Text = "Para navegar pela Web, voc� precisa usar um navegador da Web, que � um programa que exibe informa��es da Internet na forma de texto, imagens, sons e filmes digitais.";
	Agent_Speak(L_DSL_A_WhatIsInternet5_Text);
	
    var L_DSL_A_WhatIsInternet6_Text = "A Microsoft oferece dois navegadores da Web:";
	Agent_Speak(L_DSL_A_WhatIsInternet6_Text);
	
    var L_DSL_A_WhatIsInternet7_Text = "O MSN Explorer, que � �timo para principiantes e pessoas que usam o computador em casa, e o Internet Explorer.";
	Agent_Speak(L_DSL_A_WhatIsInternet7_Text);
}

function Agent_DSL_ANeedToConnect() 
{	
    var L_DSL_A_NeedToConnect1_Text = "Voc� precisa apenas de tr�s itens para se conectar � Internet.";
	Agent_Speak(L_DSL_A_NeedToConnect1_Text);	
	
    var L_DSL_A_NeedToConnect2_Text = "Primeiro, � necess�rio um computador, que voc� j� possui.";
	Agent_Speak(L_DSL_A_NeedToConnect2_Text);
	
    var L_DSL_A_NeedToConnect3_Text = "Segundo, � necess�rio um provedor de servi�os de Internet, ou \"ISP\".";
	Agent_Speak(L_DSL_A_NeedToConnect3_Text);
	
    var L_DSL_A_NeedToConnect4_Text = "Um provedor de servi�os de Internet fornece acesso � Internet, da mesma maneira como uma companhia telef�nica fornece servi�os telef�nicos.";
	Agent_Speak(L_DSL_A_NeedToConnect4_Text);
	
    var L_DSL_A_NeedToConnect5_Text = "Quando chegarmos � parte sobre a configura��o do computador para acesso � Internet, vou ajud�-lo a encontrar um provedor de servi�os de Internet, se voc� ainda n�o tiver um.";
	Agent_Speak(L_DSL_A_NeedToConnect5_Text);
	
    var L_DSL_A_NeedToConnect6_Text = "Terceiro, voc� precisa de um dispositivo que faz a conex�o f�sica entre o computador e o provedor de servi�os de Internet.";
	Agent_Speak(L_DSL_A_NeedToConnect6_Text);
	
    var L_DSL_A_NeedToConnect7_Text = "Essa � a finalidade desta tela.";
	Agent_Speak(L_DSL_A_NeedToConnect7_Text);
}

function Agent_DSL_AInternetSignup() 
{
    var L_DSL_A_AboutThisScreen1_Text = "Se voc� j� tiver uma conta de Internet, o provedor de servi�os de Internet j� ter� fornecido essas informa��es para voc�.";
	Agent_Speak(L_DSL_A_AboutThisScreen1_Text);
	
    var L_DSL_A_AboutThisScreen2_Text = "Voc� n�o precisa configurar uma nova conta de Internet s� porque tem um novo computador.";
	Agent_Speak(L_DSL_A_AboutThisScreen2_Text);
	
    var L_DSL_A_AboutThisScreen3_Text = "Voc� pode usar exatamente as mesmas informa��es de conta que usava no computador antigo.";
	Agent_Speak(L_DSL_A_AboutThisScreen3_Text);
	
    var L_DSL_A_AboutThisScreen4_Text = "Se voc� nunca se conectou � Internet do seu pr�prio computador, pode ser que voc� tenha recebido informa��es sobre a conta da Internet quando adquiriu esse computador.";
	Agent_Speak(L_DSL_A_AboutThisScreen4_Text);
	
    var L_DSL_A_AboutThisScreen5_Text = "Se o fornecedor tiver lhe dado um papel com informa��es sobre seu nome de usu�rio, senha e  nome do provedor de servi�os de Internet, digite esses dados nessa tela.";
	Agent_Speak(L_DSL_A_AboutThisScreen5_Text);
}



function Agent_DSL_BAddCommands() 
{

    var L_DSL_B_MenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_DSL_B_MenuCommand2_Text = "O &que significa IP?";
    var L_DSL_B_MenuCommand3_Text = "O que &significa DNS?";
    var L_DSL_B_MenuCommand4_Text = "&Qual � o pr�ximo passo?";

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
    var L_DSL_B_AboutThisScreen1_Text = "Na tela anterior, voc� determinou como vai se conectar � Internet e forneceu as informa��es da sua conta na Internet.";
	Agent_Speak(L_DSL_B_AboutThisScreen1_Text);

    var L_DSL_B_AboutThisScreen2_Text = "Nesta tela, voc� precisa determinar como ser� estabelecida a conex�o f�sica do computador com a Internet.";
	Agent_Speak(L_DSL_B_AboutThisScreen2_Text);
}

function Agent_OnDSL_BWhatIsIP() 
{
    var L_DSL_B_WhatIsIP1_Text = "Todos os computadores conectados � Internet t�m um endere�o \"IP\", um n�mero exclusivo que identifica um computador entre os demais computadores na Internet.";
	Agent_Speak(L_DSL_B_WhatIsIP1_Text);

    var L_DSL_B_WhatIsIP2_Text = "Quando voc� se conecta, o provedor geralmente concede um endere�o IP ao seu computador automaticamente.";
	Agent_Speak(L_DSL_B_WhatIsIP2_Text);

    var L_DSL_B_WhatIsIP3_Text = "Mas, neste caso, voc� precisa digitar o endere�o IP manualmente.";
	Agent_Speak(L_DSL_B_WhatIsIP3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_staticip, "Left");
	
	var L_DSL_B_WhatIsIP4_Text = "Seu provedor deve lhe fornecer o endere�o IP que precisa ser digitado aqui.";
	Agent_Speak(L_DSL_B_WhatIsIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnDSL_BWhatIsDNS() 
{
    var L_DSL_B_WhatIsDNS1_Text = "Para localizar endere�os na Internet, o computador precisa se conectar a um servidor DNS, o qual atribui endere�os IP aos computadores na Internet.";
	Agent_Speak(L_DSL_B_WhatIsDNS1_Text);

    var L_DSL_B_WhatIsDNS2_Text = "Na maioria dos casos, o endere�o DNS � atribu�do automaticamente pelo provedor de servi�os de Internet.";
	Agent_Speak(L_DSL_B_WhatIsDNS2_Text);

    var L_DSL_B_WhatIsDNS3_Text = "Seu provedor de servi�os de Internet requer que voc� defina o endere�o DNS no computador.";
	Agent_Speak(L_DSL_B_WhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_prefdns, "Left");

    var L_DSL_B_WhatIsDNS4_Text = "Seu provedor deve lhe fornecer o nome do DNS preferencial que precisa ser digitado aqui";
	Agent_Speak(L_DSL_B_WhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.dsl_lbl_altdns, "Left");

    var L_DSL_B_WhatIsDNS5_Text = "e, possivelmente, um DNS alternativo caso o DNS preferencial n�o esteja dispon�vel.";
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
	
    var L_DSL_B_WhatToDoNext1_Text = "Clique no bot�o 'Avan�ar' para continuar.";
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

    var L_DSL_B_WhatToDoNext2_Text = "Voc� tamb�m pode clicar no bot�o 'Voltar' para voltar � etapa anterior.";
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

    var L_DSL_B_WhatToDoNext3_Text = "Ou ent�o, se voc� mudar de id�ia, clique em \"Ignorar\" para continuar sem configurar este computador para o acesso � Internet.";
	Agent_Speak(L_DSL_B_WhatToDoNext3_Text);
    
    Agent_Play("RestPose");	
}



function Agent_ICONNECTAddCommands() 
{

    var L_ICONNECTMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_ICONNECTMenuCommand2_Text = "O q&ue � um endere�o IP est�tico?";
    var L_ICONNECTMenuCommand3_Text = "O que &significa DNS?";
    var L_ICONNECTMenuCommand4_Text = "&Qual � o pr�ximo passo?";

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
    var L_ICONNECTAboutThisScreen1_Text = "Na tela anterior, voc� determinou como vai se conectar � Internet e forneceu as informa��es da sua conta na Internet.";
	Agent_Speak(L_ICONNECTAboutThisScreen1_Text);

    var L_ICONNECTAboutThisScreen2_Text = "Nesta tela, voc� precisa determinar como ser� estabelecida a conex�o f�sica do computador com a Internet.";
	Agent_Speak(L_ICONNECTAboutThisScreen2_Text);
}

function Agent_OnICONNECTWhatIsStaticIP() 
{
    var L_ICONNECTWhatIsStaticIP1_Text = "Todos os computadores conectados � Internet t�m um endere�o \"IP\", um n�mero exclusivo que identifica um computador entre os demais computadores na Internet.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP1_Text);

    var L_ICONNECTWhatIsStaticIP2_Text = "Quando voc� se conecta, o provedor geralmente concede um endere�o IP ao seu computador automaticamente.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP2_Text);

    var L_ICONNECTWhatIsStaticIP3_Text = "Mas, neste caso, voc� precisa digitar o endere�o IP manualmente.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_staticIP, "Left");
	
	var L_ICONNECTWhatIsStaticIP4_Text = "Seu provedor deve lhe fornecer o endere�o IP que precisa ser digitado aqui.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnICONNECTWhatIsDNS() 
{
    var L_ICONNECTWhatIsDNS1_Text = "Para localizar endere�os na Internet, o computador precisa se conectar a um servidor DNS, o qual atribui endere�os IP aos computadores na Internet.";
	Agent_Speak(L_ICONNECTWhatIsDNS1_Text);

    var L_ICONNECTWhatIsDNS2_Text = "Na maioria dos casos, o endere�o DNS � atribu�do automaticamente pelo provedor de servi�os de Internet.";
	Agent_Speak(L_ICONNECTWhatIsDNS2_Text);

    var L_ICONNECTWhatIsDNS3_Text = "Seu provedor de servi�os de Internet requer que voc� defina o endere�o DNS no computador.";
	Agent_Speak(L_ICONNECTWhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_prefrDNS, "Left");

    var L_ICONNECTWhatIsDNS4_Text = "Seu provedor deve lhe fornecer o nome do DNS preferencial que precisa ser digitado aqui";
	Agent_Speak(L_ICONNECTWhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.iconnect_spn_alterDNS, "Left");

    var L_ICONNECTWhatIsDNS5_Text = "e, possivelmente, um DNS alternativo caso o DNS preferencial n�o esteja dispon�vel.";
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
	
    var L_ICONNECTWhatToDoNext1_Text = "Clique no bot�o 'Avan�ar' para continuar.";
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

    var L_ICONNECTWhatToDoNext2_Text = "Ou ent�o, se voc� mudar de id�ia, clique em \"Ignorar\" para continuar sem configurar este computador para o acesso � Internet.";
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

    var L_ICONNECTWhatToDoNext3_Text = "Voc� tamb�m pode voltar � tela anterior clicando no bot�o 'Voltar'.";
	Agent_Speak(L_ICONNECTWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}





function Agent_ICNTLASTAddCommands() {

        var L_ICNTLASTMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_ICNTLASTMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_ICNTLASTMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        
        
        

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

        var L_SCONNECTMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_SCONNECTMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_SCONNECTMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        
        
        

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

        var L_SCNTLASTMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_SCNTLASTMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_SCNTLASTMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        
        
        

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
    var L_BadPIDMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_BadPIDMenuCommand2_Text = "C&omo eu digito a chave do produto?";
    var L_BadPIDMenuCommand3_Text = "O que eu &fa�o se n�o souber qual � a chave do produto?";
    var L_BadPIDMenuCommand4_Text = "O que eu fa�o se a chave do produto n�o estiver func&ionando?";
    var L_BadPIDMenuCommand5_Text = "Para quem devo liga&r para obter mais ajuda?";
    var L_BadPIDMenuCommand6_Text = "&Qual � o pr�ximo passo?";
        
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
    var L_BadPIDAboutThisStep1_Text = "A chave de produto que voc� digitou na tela anterior � inv�lida.";
    Agent_Speak(L_BadPIDAboutThisStep1_Text);
    
    var L_BadPIDAboutThisStep2_Text = "Isso significa que esta chave n�o corresponde a uma chave de produto de uma c�pia aut�ntica do Windows XP.";
    Agent_Speak(L_BadPIDAboutThisStep2_Text);

    var L_BadPIDAboutThisStep3_Text = "O Windows n�o funciona sem uma chave de produto v�lida.";
    Agent_Speak(L_BadPIDAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDAboutThisStep4_Text = "Se voc� acha que n�o digitou a chave corretamente, clique no bot�o 'Voltar' e digite-a novamente.";
    Agent_Speak(L_BadPIDAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep5_Text = "No entanto, se voc� tiver certeza de que a digitou corretamente ou se tiver tentado v�rias vezes sem sucesso, talvez a sua c�pia do Windows seja ilegal.";
    Agent_Speak(L_BadPIDAboutThisStep5_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDAboutThisStep6_Text = "Se for o caso, clique no bot�o 'Desligar' para desligar o computador.";
    Agent_Speak(L_BadPIDAboutThisStep6_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep7_Text = "Ligue para 0800-110034.";
    Agent_Speak(L_BadPIDAboutThisStep7_Text);

    var L_BadPIDAboutThisStep8_Text = "Em todos os outros pa�ses/regi�es, contate a subsidi�ria local da Microsoft.";
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
	
    var L_BadPIDHowToEnter1_Text = "Clique no bot�o 'Voltar' para retornar � tela anterior.";
    Agent_Speak(L_BadPIDHowToEnter1_Text);
    
    Agent_Play("RestPose");
    
    var L_BadPIDHowToEnter2_Text = "O cursor, que parece uma linha vertical piscando, j� estar� posicionado na primeira caixa em que voc� tem de inserir dados.";
    Agent_Speak(L_BadPIDHowToEnter2_Text);

    var L_BadPIDHowToEnter3_Text = "Depois que voc� digitar os cinco primeiros caracteres, o ponteiro se mover� automaticamente para a caixa seguinte, para que voc� possa digitar os pr�ximos cinco caracteres.";
    Agent_Speak(L_BadPIDHowToEnter3_Text);

    var L_BadPIDHowToEnter4_Text = "N�o digite hifens nem se preocupe com o uso de mai�sculas e min�sculas.";
    Agent_Speak(L_BadPIDHowToEnter4_Text);

    var L_BadPIDHowToEnter5_Text = "Em seguida, clique no bot�o 'Avan�ar' para continuar.";
    Agent_Speak(L_BadPIDHowToEnter5_Text);
}

function Agent_OnBadPIDWhatIfNotKnown() 
{
    var L_BadPIDWhatIfNotKnown1_Text = "Se a chave do produto n�o estiver na capa do CD, veja o selo do certificado de autenticidade (Certificate of Authenticity) colado no seu computador ou na parte posterior do \Guia de Introdu��o\.";
    Agent_Speak(L_BadPIDWhatIfNotKnown1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
    
    var L_BadPIDWhatIfNotKnown2_Text = "Depois que voc� encontrar a chave do produto, clique no bot�o 'Voltar' e digite a chave do produto nas caixas da tela anterior.";
    Agent_Speak(L_BadPIDWhatIfNotKnown2_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotKnown3_Text = "Se voc� n�o encontrar a chave do produto, ligue para o fabricante do computador em %s.";
    var re = /%s/i;
    var L_BadPIDWhatIfNotKnown4_Text = "Se voc� n�o encontrar a chave do produto, ligue para o fabricante do computador.";

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
        Agent_Speak(L_BadPIDWhatIfNotKnown4_Text);
    else
        Agent_Speak(L_BadPIDWhatIfNotKnown3_Text.replace(re, strPhoneNumber));
}

function Agent_OnBadPIDWhatIfNotWorking() 
{
    var L_BadPIDWhatIfNotWorking1_Text = "Talvez voc� a tenha digitado incorretamente.";
    Agent_Speak(L_BadPIDWhatIfNotWorking1_Text);
    
    var L_BadPIDWhatIfNotWorking2_Text = "Voc� precisa incluir os 25 caracteres da chave do produto.";
    Agent_Speak(L_BadPIDWhatIfNotWorking2_Text);

    var L_BadPIDWhatIfNotWorking3_Text = "Cada parte deve conter cinco letras ou n�meros.";
    Agent_Speak(L_BadPIDWhatIfNotWorking3_Text);

    var L_BadPIDWhatIfNotWorking4_Text = "Voc� deve digitar uma chave de produto v�lida para poder continuar a usar o Windows.";
    Agent_Speak(L_BadPIDWhatIfNotWorking4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDWhatIfNotWorking5_Text = "Se voc� acha que n�o digitou a chave corretamente, clique no bot�o 'Voltar' e digite-a novamente.";
    Agent_Speak(L_BadPIDWhatIfNotWorking5_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking6_Text = "No entanto, se voc� tiver certeza de que a digitou corretamente ou se tiver tentado v�rias vezes sem sucesso, talvez a sua c�pia do Windows seja ilegal.";
    Agent_Speak(L_BadPIDWhatIfNotWorking6_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatIfNotWorking7_Text = "Se for o caso, clique no bot�o 'Desligar' para desligar o computador.";
    Agent_Speak(L_BadPIDWhatIfNotWorking7_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking8_Text = "Ligue para 1-800-RU-LEGIT nos EUA ou Canad�.";
    Agent_Speak(L_BadPIDWhatIfNotWorking8_Text);

    var L_BadPIDWhatIfNotWorking9_Text = "Em todos os outros pa�ses/regi�es, contate a subsidi�ria local da Microsoft.";
    Agent_Speak(L_BadPIDWhatIfNotWorking9_Text);
}

function Agent_OnBadPIDWhoCanICall() 
{
    var L_BadPIDWhoCanICall1_Text = "Se a chave do produto n�o for aceita, ligue para 0800-110034.";
    Agent_Speak(L_BadPIDWhoCanICall1_Text);
    
    var L_BadPIDWhoCanICall2_Text = "Em todos os outros pa�ses/regi�es, contate a subsidi�ria local da Microsoft.";
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
	
    var L_BadPIDWhatToDoNext1_Text = "Clique no bot�o 'Voltar' e digite a chave correta.";
    Agent_Speak(L_BadPIDWhatToDoNext1_Text);
    
    var L_BadPIDWhatToDoNext2_Text = "Se a chave do produto n�o for aceita, talvez voc� tenha uma c�pia ilegal do Windows.";
    Agent_Speak(L_BadPIDWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatToDoNext3_Text = "Se for esse o caso, clique no bot�o 'Desligar' para desligar o computador. ";
    Agent_Speak(L_BadPIDWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatToDoNext4_Text = "Ligue para 1-800-RU-LEGIT nos EUA ou Canad�.";
    Agent_Speak(L_BadPIDWhatToDoNext4_Text);

    var L_BadPIDWhatToDoNext5_Text = "Em todos os outros pa�ses/regi�es, contate a subsidi�ria local da Microsoft.";
    Agent_Speak(L_BadPIDWhatToDoNext5_Text);
}



function Agent_IconnAddCommands() 
{
    var L_IconnMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_IconnMenuCommand2_Text = "Que o&p��o devo escolher?";
    var L_IconnMenuCommand3_Text = "&Qual � o pr�ximo passo?";

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
    var L_IconnAboutThisStep1_Text = "Voc� instalou com �xito o Windows Windows XP no seu computador!";
    Agent_Speak(L_IconnAboutThisStep1_Text); 
      
    var L_IconnAboutThisStep2_Text = "Agora posso ajud�-lo a configurar o acesso � Internet em seu computador.";
    Agent_Speak(L_IconnAboutThisStep2_Text);
       
    var L_IconnAboutThisStep3_Text = "Se n�o estiver pronto para fazer isso agora, voc� poder� executar o 'Assistente para conex�o com a Internet' do menu 'Iniciar' depois que terminar de configurar o Windows.";
    Agent_Speak(L_IconnAboutThisStep3_Text);
}

function Agent_IconnWhichOption() 
{    
    var L_IconnWhichOption1_Text = "Selecione 'N�o' se voc� pretender usar um provedor de servi�os de Internet, ou \"ISP\", que exija a instala��o de seu pr�prio software.";
    Agent_Speak(L_IconnWhichOption1_Text); 
      
    var L_IconnWhichOption2_Text = "Voc� saber� se � esse o caso se j� tiver um CD do provedor de servi�os de Intenet.";
    Agent_Speak(L_IconnWhichOption2_Text);
       
    var L_IconnWhichOption3_Text = "Configure o acesso � Internet no seu computador ap�s configurar o Windows.";
    Agent_Speak(L_IconnWhichOption3_Text);
}

function Agent_OnIconnWhatToDoNext() 
{      
    Agent_GestureAtElement(g.radioYesIconn, "Left");  
    
    var L_IconnWhatToDoNext1_Text = "Se voc� precisar de assist�ncia para configurar uma conex�o com a Internet, clique na op��o 'Sim'.";
    Agent_Speak(L_IconnWhatToDoNext1_Text);
    
    Agent_Play("RestPose"); 
        
    Agent_GestureAtElement(g.radioNoIconn, "Left");  
    
    var L_IconnWhatToDoNext2_Text = "Se n�o desejar estabelecer uma conex�o com a Internet no momento, escolha \"N�o\"";
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

    var L_IconnWhatToDoNext3_Text = "Em seguida, clique no bot�o 'Avan�ar' para continuar.";
    Agent_Speak(L_IconnWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPAddCommands() 
{
    var L_ISPMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_ISPMenuCommand2_Text = "E se o revendedor do computador tiver me dado in&forma��es sobre a conta?";
    var L_ISPMenuCommand3_Text = "&Qual � o pr�ximo passo?";

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
    var L_ISPAboutThisStep1_Text = "Nesta tela, selecione como voc� deseja acessar a Internet.";
    Agent_Speak(L_ISPAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");

    var L_ISPAboutThisStep2_Text = "Voc� pode usar a MSN,";
    Agent_Speak(L_ISPAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");

        var L_ISPAboutThisStep3_Text = "ou outro provedor de servi�os de Internet.";
        Agent_Speak(L_ISPAboutThisStep3_Text);
        
        Agent_Play("RestPose");
    }
    
    Agent_GestureAtElement(g.radioSkip, "Left");

    var L_ISPAboutThisStep4_Text = "Ou ent�o, voc� pode continuar sem configurar uma conex�o com a Internet no momento.";
    Agent_Speak(L_ISPAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPWhatIfGivenAccount() 
{
    var L_ISPWhatIfGivenAccount1_Text = "Quando voc� adquiriu o computador, o fornecedor pode ter lhe dado um papel com informa��es sobre a conta de Internet.";
	Agent_Speak(L_ISPWhatIfGivenAccount1_Text);
	
    var L_ISPWhatIfGivenAccount2_Text = "As informa��es de conta incluem um nome de usu�rio, senha e o nome e n�mero de telefone do provedor de servi�os de Internet.";
	Agent_Speak(L_ISPWhatIfGivenAccount2_Text);
	
    var L_ISPWhatIfGivenAccount3_Text = "Se voc� tiver essas informa��es, isso significa que j� tem uma conta de Internet.";
	Agent_Speak(L_ISPWhatIfGivenAccount3_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");
	
    var L_ISPWhatIfGivenAccount4_Text = "Se o nome do provedor de servi�os de Internet for MSN, selecione a primeira op��o.";
	Agent_Speak(L_ISPWhatIfGivenAccount4_Text);
    
    Agent_Play("RestPose");

    
    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");
    	
        var L_ISPWhatIfGivenAccount5_Text = "Se o nome do provedor de servi�os de Internet n�o for MSN, selecione a segunda op��o.";
    	Agent_Speak(L_ISPWhatIfGivenAccount5_Text);
        
        Agent_Play("RestPose");
    }

    Agent_GestureAtElement(g.radioSkip, "Left");
    
    var L_ISPWhatIfGivenAccount6_Text = "Ou ent�o, se voc� desejar aguardar at� mais tarde para configurar a conex�o com a Internet no computador, selecione a �ltima op��o.";
	Agent_Speak(L_ISPWhatIfGivenAccount6_Text);
			    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_ISPWhatIfGivenAccount7_Text = "Ent�o, clique no obt�o 'Avan�ar'.";
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
    
    var L_ISPWhatToDoNext1_Text = "Depois que escolher uma op��o, clique no bot�o 'Avan�ar'.";
	Agent_Speak(L_ISPWhatToDoNext1_Text);
	
	Agent_Play("RestPose");
}



function Agent_ICSAddCommands() 
{
	var L_ICSAddCommands1_Text = "Informa��es sobre esta &etapa";
	var L_ICSAddCommands2_Text = "O que � a &firewall de conex�o com a Internet?";
	var L_ICSAddCommands3_Text = "O q&ue � o 'Assistente de rede dom�stica'?";
	
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
	var L_ICSAboutThisStep1_Text = "Nesta tela, voc� pode escolher a forma como quer que o computador acesse a Internet.";
	Agent_Speak(L_ICSAboutThisStep1_Text);
	
	var L_ICSAboutThisStep2_Text = "Se este computador estiver conectado a uma rede com outros computadores, voc� pode acessar a Internet atrav�s da rede.";
	Agent_Speak(L_ICSAboutThisStep2_Text);
	
	var L_ICSAboutThisStep3_Text = "Caso contr�rio, o computador pode ser configurado para fazer uma conex�o direta com a Internet.";
	Agent_Speak(L_ICSAboutThisStep3_Text);
	
	var L_ICSAboutThisStep4_Text = "Independentemente da op��o que voc� escolher, o Windows XP o proteger� com um firewall de conex�o com a Internet para garantir que seu computador n�o ser� acessado por outros usu�rios da Internet.";
	Agent_Speak(L_ICSAboutThisStep4_Text);
}
	
function Agent_ICSWhatIsFirewall() 
{
	var L_ICSWhatIsFirewall1_Text = "Um firewall � um sistema de seguran�a para proteger seu computador - ou sua rede de computadores - de amea�as externas, tais como hackers, origin�rios de outra rede, como a Internet.";
	Agent_Speak(L_ICSWhatIsFirewall1_Text);
	
	var L_ICSWhatIsFirewall2_Text = "Quando voc� configura uma rede no Windows XP, o recurso de firewall de conex�o com a Internet do Windows XP � automaticamente ativado.";
	Agent_Speak(L_ICSWhatIsFirewall2_Text);
	
	var L_ICSWhatIsFirewall3_Text = "E ele tamb�m � ativado se este computador n�o fizer parte de uma rede mas acessar a Internet diretamente.";
	Agent_Speak(L_ICSWhatIsFirewall3_Text);
}
	
function Agent_ICSWhatIsNetworkWizard() 
{
	var L_ICSWhatIsNetworkWizard1_Text = "Esse assistente o orienta ao longo de cada etapa para a configura��o de uma rede em casa ou no seu local de trabalho.";
	Agent_Speak(L_ICSWhatIsNetworkWizard1_Text);
	
	var L_ICSWhatIsNetworkWizard2_Text = "Se voc� n�o desejar conectar o computador a uma rede durante este processo, pode faz�-lo mais tarde.";
	Agent_Speak(L_ICSWhatIsNetworkWizard2_Text);
	
	var L_ICSWhatIsNetworkWizard3_Text = "V� ao menu 'Iniciar' e clique em 'Mais programas'.";
	Agent_Speak(L_ICSWhatIsNetworkWizard3_Text);
	
	var L_ICSWhatIsNetworkWizard4_Text = "Em seguida clique em 'Acess�rios' e 'Comunica��es' para encontrar o 'Assistente de rede dom�stica'.";
	Agent_Speak(L_ICSWhatIsNetworkWizard4_Text);
	
	var L_ICSWhatIsNetworkWizard5_Text = "Se voc� se esquecer destas etapas, clique em 'Ajuda e suporte' no menu 'Iniciar' para obter respostas �s suas perguntas, assim como outras informa��es relevantes.";
	Agent_Speak(L_ICSWhatIsNetworkWizard5_Text);
}



function Agent_ICSDCAddCommands() 
{
	var L_ICSDCAddCommands1_Text = "Informa��es sobre esta &etapa";
	var L_ICSDCAddCommands2_Text = "&Qual � o pr�ximo passo?";
	
	g_AgentCharacter.Commands.Add("Agent_ICSDCAboutThisStep", L_ICSDCAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_ICSDCWhatToDoNext", L_ICSDCAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_ICSDCAboutThisStep() 
{
	var L_ICSDCAboutThisStep1_Text = "Esta tela explica que o computador foi desconectado da Internet.";
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
    
	var L_ICSDCWhatToDoNext1_Text = "Clique no bot�o 'Repetir' para tentar se reconectar � Internet.";
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
    
	var L_ICSDCWhatToDoNext2_Text = "Clique em \"Ignorar\" para continuar sem se conectar � Internet.";
	Agent_Speak(L_ICSDCWhatToDoNext2_Text);
	
	Agent_Play("RestPose");
}



function Agent_Ident1AddCommands() 
{
    var L_Ident1AddCommands1_Text = "Informa��es sobre esta &etapa";
    var L_Ident1AddCommands2_Text = "O &que � uma conta de usu�rio?";
    var L_Ident1AddCommands3_Text = "Quais s�o as vantagens de &se configurar contas de usu�rio?";
    var L_Ident1AddCommands4_Text = "&Qual � o pr�ximo passo?";

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
	var L_Ident1AboutThisStep1_Text = "Nesta tela, voc� precisa identificar quem s�o as outras pessoas que v�o usar o computador.";
	Agent_Speak(L_Ident1AboutThisStep1_Text);
	
	var L_Ident1AboutThisStep2_Text = "Se esse computador � compartilhado por v�rias pessoas, cada usu�rio pode personalizar o Windows XP configurando sua pr�pria conta.";
	Agent_Speak(L_Ident1AboutThisStep2_Text);
    
    var L_Ident1AboutThisStep3_Text = "Assim, cada usu�rio pode ter seus pr�prios privil�gios, configura��es, arquivos particulares, links para sites na Internet e outras op��es, sem afetar a maneira como os outros usu�rios personalizam o computador para si mesmos.";
    Agent_Speak(L_Ident1AboutThisStep3_Text);
    
    var L_Ident1AboutThisStep4_Text = "Quando voc� iniciar o computador, a tela de boas-vindas lhe mostrar� todos os nomes que voc� digitou nesta tela em ordem alfab�tica.";
    Agent_Speak(L_Ident1AboutThisStep4_Text);
    
    var L_Ident1AboutThisStep5_Text = "Ser� at� mostrada at� uma foto de cada pessoa.";
    Agent_Speak(L_Ident1AboutThisStep5_Text);
    
    var L_Ident1AboutThisStep6_Text = "Voc� pode alterar esses nomes mais tarde clicando em 'Painel de controle', no menu 'Iniciar', e selecionando o �cone 'Contas de usu�rio'.";
    Agent_Speak(L_Ident1AboutThisStep6_Text);
}

function Agent_Ident1Command_WhatIsUserAccount() 
{	
	var L_Ident1WhatIsUserAccount1_Text = "Se voc� tem que compartilhar o seu computador com outras pessoas em casa ou no escrit�rio, voc� vai gostar das contas de usu�rio.";
	Agent_Speak(L_Ident1WhatIsUserAccount1_Text);
	
	var L_Ident1WhatIsUserAccount2_Text = "Com contas de usu�rio, voc� pode:";
	Agent_Speak(L_Ident1WhatIsUserAccount2_Text);
    
    var L_Ident1WhatIsUserAccount3_Text = "Personalize a maneira como o Windows organiza e exibe as informa��es para voc�, sem afetar as prefer�ncias de outros usu�rios;";
    Agent_Speak(L_Ident1WhatIsUserAccount3_Text);
    
    var L_Ident1WhatIsUserAccount4_Text = "Exigir uma senha para o acesso aos seus arquivos;";
    Agent_Speak(L_Ident1WhatIsUserAccount4_Text);
    
    var L_Ident1WhatIsUserAccount5_Text = "Lembrar da sua lista pessoal de favoritos da Web e sites visitados recentemente;";
    Agent_Speak(L_Ident1WhatIsUserAccount5_Text);
    
    var L_Ident1WhatIsUserAccount6_Text = "Proteger as configura��es importantes do computador;";
    Agent_Speak(L_Ident1WhatIsUserAccount6_Text);
    
    var L_Ident1WhatIsUserAccount7_Text = "Personalizar a �rea de trabalho para cada usu�rio; e";
    Agent_Speak(L_Ident1WhatIsUserAccount7_Text);
    
    var L_Ident1WhatIsUserAccount8_Text = "Simplificar o logon e a troca r�pida de usu�rios do computador.";
    Agent_Speak(L_Ident1WhatIsUserAccount8_Text);
}

function Agent_Ident1Command_Benefits() 
{	
	var L_Ident1Benefits1_Text = "Compartilhando um computador usado com o objetivo de que outros usu�rios pudessem ver os seus arquivos privados, instalar jogos ou outros software que voc� n�o queria, ou alterar as configura��es do computador.";
	Agent_Speak(L_Ident1Benefits1_Text);
	
	var L_Ident1Benefits2_Text = "Agora tudo mudou!";
	Agent_Speak(L_Ident1Benefits2_Text);
    
    var L_Ident1Benefits3_Text = "Se forem configuradas contas de usu�rio, cada usu�rio pode personalizar o Windows sem afetar os outros usu�rios do computador.";
    Agent_Speak(L_Ident1Benefits3_Text);
    
    var L_Ident1Benefits4_Text = "Clique em 'Ajuda e suporte' no menu 'Iniciar' para obter mais informa��es sobre contas de usu�rio, respostas �s suas perguntas e outras informa��es importantes.";
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
    
    var L_Ident1WhatToDoNext1_Text = "Depois que voc� digitar os nomes das outras pessoas que forem usar este computador, clique no bot�o 'Avan�ar' para continuar.";
    Agent_Speak(L_Ident1WhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_Ident1WhatToDoNext2_Text = "Voc� pode alterar esses nomes e adicionar mais usu�rios depois que concluir a instala��o do Windows.";
    Agent_Speak(L_Ident1WhatToDoNext2_Text);
        
    var L_Ident1WhatToDoNext3_Text = "Basta clicar no 'Painel de controle' no menu 'Iniciar' e escolher 'Contas de usu�rio'.";
    Agent_Speak(L_Ident1WhatToDoNext3_Text);
}



function Agent_IdentitiesAddCommands() 
{
    var L_IdentitiesAddCommands1_Text = "Informa��es sobre esta &etapa";
    var L_IdentitiesAddCommands2_Text = "O &que � uma conta de usu�rio?";
    var L_IdentitiesAddCommands3_Text = "Quais s�o as vantagens da &configura��o de contas de usu�rio?";
    var L_IdentitiesAddCommands4_Text = "&Qual � o pr�ximo passo?";

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
	var L_IdentitiesAboutThisStep1_Text = "Nesta tela, voc� precisa identificar quem s�o as outras pessoas que v�o usar o computador.";
	Agent_Speak(L_IdentitiesAboutThisStep1_Text);
	
	var L_IdentitiesAboutThisStep2_Text = "Se esse computador � compartilhado por v�rias pessoas, cada usu�rio pode personalizar o Windows XP configurando sua pr�pria conta.";
	Agent_Speak(L_IdentitiesAboutThisStep2_Text);
    
    var L_IdentitiesAboutThisStep3_Text = "Assim, cada usu�rio pode ter seus pr�prios privil�gios, configura��es, arquivos particulares, links para sites na Internet e outras op��es, sem afetar a maneira como os outros usu�rios personalizam o computador para si mesmos.";
    Agent_Speak(L_IdentitiesAboutThisStep3_Text);
    
    var L_IdentitiesAboutThisStep4_Text = "Quando voc� iniciar o computador, a tela de boas-vindas lhe mostrar� todos os nomes que voc� digitou nesta tela em ordem alfab�tica.";
    Agent_Speak(L_IdentitiesAboutThisStep4_Text);
    
    var L_IdentitiesAboutThisStep5_Text = "Ser� at� mostrada uma foto de cada pessoa.";
    Agent_Speak(L_IdentitiesAboutThisStep5_Text);
    
    var L_IdentitiesAboutThisStep6_Text = "Voc� pode alterar esses nomes mais tarde clicando em 'Painel de controle', no menu 'Iniciar', e selecionando o �cone 'Contas de usu�rio'.";
    Agent_Speak(L_IdentitiesAboutThisStep6_Text);
}

function Agent_IdentitiesCommand_WhatIsUserAccount() 
{	
	var L_IdentitiesWhatIsUserAccount1_Text = "Se voc� tem que compartilhar o seu computador com outras pessoas em casa ou no escrit�rio, voc� vai gostar das contas de usu�rio.";
	Agent_Speak(L_IdentitiesWhatIsUserAccount1_Text);
	
	var L_IdentitiesWhatIsUserAccount2_Text = "Com contas de usu�rio, voc� pode:";
	Agent_Speak(L_IdentitiesWhatIsUserAccount2_Text);
    
    var L_IdentitiesWhatIsUserAccount3_Text = "Personalize a maneira como o Windows organiza e exibe as informa��es para voc�, sem afetar as prefer�ncias de outros usu�rios;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount3_Text);
    
    var L_IdentitiesWhatIsUserAccount4_Text = "Exigir uma senha para o acesso aos seus arquivos;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount4_Text);
    
    var L_IdentitiesWhatIsUserAccount5_Text = "Lembrar da sua lista pessoal de favoritos da Web e sites visitados recentemente;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount5_Text);
    
    var L_IdentitiesWhatIsUserAccount6_Text = "Proteger as configura��es importantes do computador;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount6_Text);
    
    var L_IdentitiesWhatIsUserAccount7_Text = "Personalizar a �rea de trabalho para cada usu�rio; e";
    Agent_Speak(L_IdentitiesWhatIsUserAccount7_Text);
    
    var L_IdentitiesWhatIsUserAccount8_Text = "Simplificar o logon e a troca r�pida de usu�rios do computador.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount8_Text);
}

function Agent_IdentitiesCommand_Benefits() 
{	
	var L_IdentitiesBenefits1_Text = "Compartilhando um computador usado com o objetivo de que outros usu�rios pudessem ver os seus arquivos privados, instalar jogos ou outros software que voc� n�o queria, ou alterar as configura��es do computador.";
	Agent_Speak(L_IdentitiesBenefits1_Text);
	
	var L_IdentitiesBenefits2_Text = "Agora tudo mudou!";
	Agent_Speak(L_IdentitiesBenefits2_Text);
    
    var L_IdentitiesBenefits3_Text = "Se forem configuradas contas de usu�rio, cada usu�rio pode personalizar o Windows sem afetar os outros usu�rios do computador.";
    Agent_Speak(L_IdentitiesBenefits3_Text);
    
    var L_IdentitiesBenefits4_Text = "Clique em 'Ajuda e suporte' no menu 'Iniciar' para obter mais informa��es sobre contas de usu�rio, respostas �s suas perguntas e outras informa��es importantes.";
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
    
    var L_IdentitiesWhatToDoNext1_Text = "Depois que voc� digitar os nomes das outras pessoas que forem usar este computador, clique no bot�o 'Avan�ar' para continuar.";
    Agent_Speak(L_IdentitiesWhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_IdentitiesWhatToDoNext2_Text = "Voc� pode alterar esses nomes e adicionar mais usu�rios depois que concluir a instala��o do Windows.";
    Agent_Speak(L_IdentitiesWhatToDoNext2_Text);
        
    var L_IdentitiesWhatToDoNext3_Text = "Basta clicar no 'Painel de controle' no menu 'Iniciar' e escolher 'Contas de usu�rio'.";
    Agent_Speak(L_IdentitiesWhatToDoNext3_Text);
}



function Agent_KeybdAddCommands() 
{
	var L_KeybdMenuCommand1_Text = "Informa��es sobre esta &etapa";
    var L_KeybdMenuCommand2_Text = "Como seleciono minha &regi�o?";
    var L_KeybdMenuCommand3_Text = "Como seleciono meu &idioma?";
    var L_KeybdMenuCommand4_Text = "&Como seleciono meu teclado?";

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
    var L_KeybdAboutThisStep1_Text = "Nas pr�ximas telas, voc� poder� informar ao Windows como exibir o texto, datas e n�meros baseados nas suas prefer�ncias de idioma, regi�o e fuso hor�rio.";
    Agent_Speak(L_KeybdAboutThisStep1_Text);
        
    var L_KeybdAboutThisStep2_Text = "Por exemplo, nesta tela, selecione a regi�o do mundo mais pr�xima de onde voc� mora, o idioma que voc� usar� com mais freq��ncia no computador e o teclado que voc� est� usando.";
    Agent_Speak(L_KeybdAboutThisStep2_Text);
        
    var L_KeybdAboutThisStep3_Text = "O Windows vai certificar-se de exibir a data, hora e moeda corretamente.";
    Agent_Speak(L_KeybdAboutThisStep3_Text);
        
    var L_KeybdAboutThisStep4_Text = "Por exemplo, se voc� selecionar os Estados Unidos como regi�o e ingl�s como idioma, as quantias monet�rias ser�o exibidas em d�lar norte-americano.";
    Agent_Speak(L_KeybdAboutThisStep4_Text);

    var L_KeybdAboutThisStep5_Text = "Se voc� selecionar o Reino Unido como regi�o, as quantias monet�rias ser�o exibidas em libra esterlina.";
    Agent_Speak(L_KeybdAboutThisStep5_Text);
}

function Agent_KeybdHowToSelectRegion() 
{     
    Agent_GestureAtElement(g.selRegion, "Left");
     
    var L_KeybdHowToSelectRegion1_Text = "As regi�es do mundo aparecem nesta lista em ordem alfab�tica.";
    Agent_Speak(L_KeybdHowToSelectRegion1_Text);	
   
    var L_KeybdHowToSelectRegion2_Text = "Clique na lista ou pressione a tecla Tab no teclado at� chegar � op��o.";
    Agent_Speak(L_KeybdHowToSelectRegion2_Text);	
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selRegion, "Right");
        
    var L_KeybdHowToSelectRegion3_Text = "Clique nesses pequenos bot�es de seta ou use as teclas de seta para cima e de seta para baixo no teclado para passar de uma regi�o para outra.";
    Agent_Speak(L_KeybdHowToSelectRegion3_Text);
        
    var L_KeybdHowToSelectRegion4_Text = "Clique na regi�o mais pr�xima da sua casa ou pressione a tecla Enter no teclado.";
    Agent_Speak(L_KeybdHowToSelectRegion4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.RegionName, "Left");

    var L_KeybdHowToSelectRegion5_Text = "A regi�o que voc� selecionar aparecer� nesta caixa.";
    Agent_Speak(L_KeybdHowToSelectRegion5_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectLanguage() 
{        		
    var L_KeybdHowToSelectLanguage1_Text = "Escolha o idioma em que voc� se comunica com mais freq��ncia.";
    Agent_Speak(L_KeybdHowToSelectLanguage1_Text);
        
    var L_KeybdHowToSelectLanguage2_Text = "Por exemplo, se o idioma que voc� fala com mais freq��ncia � o espanhol, mas os programas e arquivos do computador em que voc� trabalha est�o ingl�s, escolha 'Ingl�s' aqui.";
    Agent_Speak(L_KeybdHowToSelectLanguage2_Text);   
        
    Agent_GestureAtElement(g.selLang, "Left");  
        
    var L_KeybdHowToSelectLanguage3_Text = "Os idiomas aparecem nesta lista em ordem alfab�tica.";
    Agent_Speak(L_KeybdHowToSelectLanguage3_Text);

    var L_KeybdHowToSelectLanguage4_Text = "Clique aqui ou pressione a tecla Tab no teclado para chegar at� aqui.";
    Agent_Speak(L_KeybdHowToSelectLanguage4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selLang, "Right");

    var L_KeybdHowToSelectLanguage5_Text = "Clique nesses pequenos bot�es de seta ou use as teclas de seta para cima e de seta para baixo no teclado para passar de uma regi�o para outra.";
    Agent_Speak(L_KeybdHowToSelectLanguage5_Text);

    var L_KeybdHowToSelectLanguage6_Text = "Clique no idioma desejado ou pressione a tecla Enter no teclado.";
    Agent_Speak(L_KeybdHowToSelectLanguage6_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.LangName, "Left");

    var L_KeybdHowToSelectLanguage7_Text = "O idioma que voc� selecionar aparecer� nesta caixa.";
    Agent_Speak(L_KeybdHowToSelectLanguage7_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectKeyboard() 
{		
    var L_KeybdHowToSelectKeyboard1_Text = "Os teclados aparecem nesta lista em ordem alfab�tica.";
    Agent_Speak(L_KeybdHowToSelectKeyboard1_Text);
    
    Agent_GestureAtElement(g.selKeyboard, "Left");
        
    var L_KeybdHowToSelectKeyboard2_Text = "Clique aqui ou pressione a tecla Tab no teclado para chegar at� aqui.";
    Agent_Speak(L_KeybdHowToSelectKeyboard2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selKeyboard, "Right");
        
    var L_KeybdHowToSelectKeyboard3_Text = "Em seguida clique nesses bot�es de seta pequenos ou use as teclas de setas para cima e para baixo no seu teclado para rolar pela lista.";
    Agent_Speak(L_KeybdHowToSelectKeyboard3_Text);
        
    var L_KeybdHowToSelectKeyboard4_Text = "Clique no teclado que est� usando com esse computador ou pressione a tecla Enter no teclado.";
    Agent_Speak(L_KeybdHowToSelectKeyboard4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.KeyboardName, "Left");

    var L_KeybdHowToSelectKeyboard5_Text = "O teclado que voc� selecionar aparecer� nesta caixa.";
    Agent_Speak(L_KeybdHowToSelectKeyboard5_Text);
    
    Agent_Play("RestPose");
}



function Agent_EulaAddCommands() 
{
    var L_EulaCommand1_Text = "Informa��es sobre esta &etapa";
    var L_EulaCommand2_Text = "C&omo indicar minha resposta";
    var L_EulaCommand3_Text = "O que � o EULA e&xatamente ?";
    var L_EulaCommand4_Text = "O que &diz o EULA?";
    var L_EulaCommand5_Text = "&Por que o bot�o 'Avan�ar' n�o est� dispon�vel?";
    var L_EulaCommand6_Text = "&Qual � o pr�ximo passo?";

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
        var L_EulaMenuCommand5_Text = "Por que o bot�o 'Avan�ar' n�o est� d&ispon�vel?";

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
    var L_EulaAboutThisStep1_Text = "Esta � a tela em que voc� pode ver o contrato de licen�a do Microsoft Windows e indicar se o aceita.";
    Agent_Speak(L_EulaAboutThisStep1_Text);		
    
    Agent_GestureAtElement(g.txtEULA,"Left");
        
    var L_EulaAboutThisStep2_Text = "Para poder usar o Windows, voc� deve aceitar este contrato.";
    Agent_Speak(L_EulaAboutThisStep2_Text);
    
    Agent_Play("RestPose");
}

function Agent_EulaHowToAnswer() 
{		
    Agent_GestureAtElement(g.radioAgree,"Left");
    
    var L_EulaHowToAnswer1_Text = "Basta posicionar o ponteiro no c�rculo branco � esquerda de sua resposta e clicar uma vez.";
    Agent_Speak(L_EulaHowToAnswer1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaHowToAnswer2_Text = "Em seguida pressione o bot�o Pr�ximo.";
    Agent_Speak(L_EulaHowToAnswer2_Text);
}

function Agent_EulaWhatIsEula() 
{		
    var L_EulaWhatIsEula1_Text = "O uso dos produtos Microsoft � regido pelos termos do Contrato de Licen�a de Usu�rio Final (EULA) e por leis de direitos autorais.";
    Agent_Speak(L_EulaWhatIsEula1_Text);
        
    var L_EulaWhatIsEula2_Text = "O EULA � o contrato que descreve o uso legal do produto licenciado e lhe concede um direito espec�fico de usar esse produto no seu computador.";
    Agent_Speak(L_EulaWhatIsEula2_Text);
}

function Agent_EulaWhatDoesEulaSay() 
{		
    var L_EulaWhatDoesEulaSay1_Text = "Se voc� aceitar os termos do EULA, ter� permiss�o para usar o Windows XP e obter� outros direitos adicionais.";
    Agent_Speak(L_EulaWhatDoesEulaSay1_Text);
        
    var L_EulaWhatDoesEulaSay2_Text = "Ele tamb�m imp�e certas restri��es quanto ao uso do Windows XP.";
    Agent_Speak(L_EulaWhatDoesEulaSay2_Text);	
    
    Agent_GestureAtElement(g.txtEULA,"Right");	
        
    var L_EulaWhatDoesEulaSay3_Text = "Para ler os detalhes, role para baixo at� a se��o 'Concess�o da licen�a'.";
    Agent_Speak(L_EulaWhatDoesEulaSay3_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatDoesEulaSay4_Text = "O EULA tamb�m descreve a garantia limitada e os termos sob os quais voc� pode fazer um backup ou c�pia de arquivamento do Windows XP.";
    Agent_Speak(L_EulaWhatDoesEulaSay4_Text);
}

function Agent_EulaWhereIsNextButton() 
{		
    var L_EulaWhereIsNextButton1_Text = "O bot�o 'Avan�ar' ainda n�o est� dispon�vel porque voc� n�o escolheu se aceita ou n�o este contrato de licen�a.";
    Agent_Speak(L_EulaWhereIsNextButton1_Text);
        
    var L_EulaWhereIsNextButton2_Text = "Clique primeiro na op��o 'Sim' ou 'N�o'.";
    Agent_Speak(L_EulaWhereIsNextButton2_Text);
}

function Agent_EulaWhatToDoNext() 
{			
    Agent_GestureAtElement(g.radioAgree,"Left");
    	
    var L_EulaWhatToDoNext1_Text = "Depois que voc� tiver lido o contrato de licen�a, clique em 'Sim' para aceit�-lo.";
    Agent_Speak(L_EulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatToDoNext2_Text = "Se voc� n�o quiser aceit�-lo, clique em 'N�o'.";
    Agent_Speak(L_EulaWhatToDoNext2_Text);
        
    var L_EulaWhatToDoNext3_Text = "Voc� deve aceitar este contrato se desejar continuar usando o Windows.";
    Agent_Speak(L_EulaWhatToDoNext3_Text);
    			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_EulaWhatToDoNext4_Text = "Clique no bot�o Pr�ximo para mover para a pr�xima tela.";
    Agent_Speak(L_EulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_BadEulaAddCommands() {

    var L_BadEulaCommand1_Text = "Informa��es sobre esta &etapa";
    var L_BadEulaCommand2_Text = "O que &diz o EULA?";
    var L_BadEulaCommand3_Text = "O que a&contece se eu n�o aceitar o EULA?";
    var L_BadEulaCommand4_Text = "&Qual � o pr�ximo passo?";

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
    var L_BadEulaAboutThisStep1_Text = "Na tela anterior, voc� n�o aceitou o contrato de licen�a.";
    Agent_Speak(L_BadEulaAboutThisStep1_Text);

    var L_BadEulaAboutThisStep2_Text = "Por isso, voc� n�o poder� usar o Windows.";
    Agent_Speak(L_BadEulaAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadEulaAboutThisStep3_Text = "Mas voc� pode retornar � tela anterior clicando no bot�o 'Voltar' e aceitar o contrato.";
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
        
    var L_BadEulaAboutThisStep4_Text = "Ou confirme que deseja parar de usar o Windows e desligar o computador.";
    Agent_Speak(L_BadEulaAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_BadEulaWhatDoesEulaSay()
{
    var L_BadEulaWhatDoesEulaSay1_Text = "Se voc� aceitar os termos do EULA, ter� permiss�o para usar o Windows XP e obter� outros direitos adicionais.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay1_Text);

    var L_BadEulaWhatDoesEulaSay2_Text = "Ele tamb�m imp�e certas restri��es quanto ao uso do Windows XP.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay2_Text);

    var L_BadEulaWhatDoesEulaSay3_Text = "Para ler os detalhes, clique no bot�o 'Voltar', abra o EULA e role at� a se��o 'Concess�o da licen�a'.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay3_Text);
        
    var L_BadEulaWhatDoesEulaSay4_Text = "O EULA tamb�m descreve a garantia limitada e os termos sob os quais voc� pode fazer um backup ou c�pia de arquivamento do Windows XP.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay4_Text);
}

function Agent_BadEulaWhatIfIDontAcceptEula()
{
    var L_BadEulaWhatIfIDontAcceptEula1_Text = "Como o EULA lhe concede permiss�o para usar o Windows XP, voc� deve aceitar este contrato para poder come�ar a usar o Windows XP.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadEulaWhatIfIDontAcceptEula2_Text = "Caso decida n�o aceitar o contrato, desligue o computador clicando no bot�o 'Desligar'.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula2_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatIfIDontAcceptEula3_Text = "Quando o computador for reiniciado, voc� voltar� para esta tela.";
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
    
    var L_BadEulaWhatToDoNext1_Text = "Se voc� resolver aceitar o contrato de licen�a, clique no bot�o 'Voltar'.";
    Agent_Speak(L_BadEulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatToDoNext2_Text = "Voc� precisa aceitar o contrato para continuar este processo e come�ar a usar o Windows.";
    Agent_Speak(L_BadEulaWhatToDoNext2_Text);

    var L_BadEulaWhatToDoNext3_Text = "Caso decida n�o aceitar o contrato, clique no bot�o 'Desligar' para desligar o computador.";
    Agent_Speak(L_BadEulaWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_BadEulaWhatToDoNext4_Text = "Quando o computador for reiniciado, voc� voltar� para esta tela.";
    Agent_Speak(L_BadEulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}




function Agent_ProductKeyAddCommands() 
{
    var L_ProductKeyAddCommands1_Text = "Informa��es sobre esta &etapa";
    var L_ProductKeyAddCommands2_Text = "O q&ue � a chave do produto?";
    var L_ProductKeyAddCommands4_Text = "&Qual � o pr�ximo passo?";

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

        var L_ProductKeyAddCommands3_Text = "Por que o bot�o 'Avan�ar' n�o est� d&ispon�vel?";

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
    var L_ProductKeyAboutThisStep1_Text = "Esta � a tela em que voc� digita sua chave do produto (product key) de 25 caracteres, que deve ter sido fornecida pelo fabricante do computador.";
    Agent_Speak(L_ProductKeyAboutThisStep1_Text);

    var L_ProductKeyAboutThisStep2_Text = "Esta � a tela em que voc� digita sua chave do produto de 25 caracteres, que deve ter sido fornecida pelo fabricante do computador.";
    Agent_Speak(L_ProductKeyAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pid1,"Left");

    var L_ProductKeyAboutThisStep3_Text = "Quaisquer letras que voc� digitar aqui ser�o colocadas em mai�sculas automaticamente para voc�.";
    Agent_Speak(L_ProductKeyAboutThisStep3_Text);
    
    Agent_Play("RestPose");
        
    var L_ProductKeyAboutThisStep4_Text = "Depois desta etapa, voc� pode registrar o seu computador e a sua c�pia do Microsoft Windows.";
    Agent_Speak(L_ProductKeyAboutThisStep4_Text);
        
    var L_ProductKeyAboutThisStep5_Text = "� f�cil. E, ao registrar o Windows, voc� ter� acesso a v�rios benef�cios.";
    Agent_Speak(L_ProductKeyAboutThisStep5_Text);
}

function Agent_ProductKeyWhatIsProdKey()
{
    var L_ProductKeyWhatIsProdKey1_Text = "Todas as c�pias do Windows produzidas pela Microsoft s�o codificadas com uma chave de produto exclusiva.";
    Agent_Speak(L_ProductKeyWhatIsProdKey1_Text);

    var L_ProductKeyWhatIsProdKey2_Text = "A chave do produto ajuda a garantir a autenticidade do produto Microsoft que voc� adquiriu.";
    Agent_Speak(L_ProductKeyWhatIsProdKey2_Text);

    var L_ProductKeyWhatIsProdKey3_Text = "Ela tamb�m o proteje contra c�pias piratas do Windows.";
    Agent_Speak(L_ProductKeyWhatIsProdKey3_Text);
        
    var L_ProductKeyWhatIsProdKey4_Text = "Atrav�s da chave do produto, voc� fica qualificado a obter certos benef�cios, como suporte t�cnico, servi�os de marketing, atualiza��es e ofertas na Web.";
    Agent_Speak(L_ProductKeyWhatIsProdKey4_Text);
}

function Agent_ProductKeyWhyNextNotAvailable()
{
    var L_ProductKeyWhyNextNotAvailable1_Text = "O bot�o Pr�ximo n�o est� dispon�vel porque voc� n�o digitou uma chave de produto (product key) v�lida.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable1_Text);

    var L_ProductKeyWhyNextNotAvailable2_Text = "Voc� deve digitar uma chave de produto v�lida.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable2_Text);

    var L_ProductKeyWhyNextNotAvailable3_Text = "Em seguida, voc� poder� clicar no bot�o 'Avan�ar' para continuar.";
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
    
    var L_ProductKeyWhatToDoNext1_Text = "Ap�s digitar uma chave de produto v�lida, clique no bot�o 'Avan�ar'.";
    Agent_Speak(L_ProductKeyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}




function Agent_Reg1AddCommands() 
{
    var L_Reg1Command1_Text = "Informa��es sobre esta e&tapa";
    var L_Reg1Command2_Text = "Obt&er mais informa��es sobre o registro";
    var L_Reg1Command3_Text = "C&omo fa�o para registrar agora?";
    var L_Reg1Command4_Text = "Posso me &registrar mais tarde?";
    var L_Reg1Command5_Text = "&Qual � a vantagem de se registrar?";
    var L_Reg1Command6_Text = "Detalhes sobre o co&mpartilhamento de informa��es";

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
    var L_Reg1AboutThisStep1_Text = "Este � o in�cio da se��o de registro.";
    Agent_Speak(L_Reg1AboutThisStep1_Text);

    var L_Reg1AboutThisStep2_Text = "Aqui voc� poder� registrar sua c�pia do Windows.";
    Agent_Speak(L_Reg1AboutThisStep2_Text);

    var L_Reg1AboutThisStep3_Text = "Quando terminar, voc� estar� qualificado para obter alguns benef�cios que a Microsoft oferece a seus clientes.";
    Agent_Speak(L_Reg1AboutThisStep3_Text);
        
    var L_Reg1AboutThisStep4_Text = "Isso inclui notifica��es sobre atualiza��es do produto e o acesso aos premiados servi�os de suporte ao produto Microsoft.";
    Agent_Speak(L_Reg1AboutThisStep4_Text);
        
    var L_Reg1AboutThisStep5_Text = "Nesta tela, voc� pode decidir como prefere se registrar.";
    Agent_Speak(L_Reg1AboutThisStep5_Text);
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");
        
    var L_Reg1AboutThisStep6_Text = "Se voc� desejar obter mais informa��es sobre a diretiva de privacidade da Microsoft, clique neste link.";
    Agent_Speak(L_Reg1AboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1AboutRegistration()
{    
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1AboutRegistration1_Text = "Clique aqui para iniciar o processo de registro e, em seguida,  clique no bot�o 'Avan�ar'.";
    Agent_Speak(L_Reg1AboutRegistration1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.rb_reg_ms_no,"Left");

    var L_Reg1AboutRegistration2_Text = "Se voc� preferir n�o se registrar, clique na segunda op��o e clique em \"Avan�ar\".";
    Agent_Speak(L_Reg1AboutRegistration2_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1HowToRegister()
{      
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1HowToRegister1_Text = "Para registrar sua c�pia do Windows, certifique-se de que a op��o 'Sim' est� selecionada.";
    Agent_Speak(L_Reg1HowToRegister1_Text); 
    
    Agent_Play("RestPose");

    var L_Reg1HowToRegister2_Text = "Em seguida, clique no bot�o 'Avan�ar' para continuar.";
    Agent_Speak(L_Reg1HowToRegister2_Text);
}

function Agent_Reg1RegisterLater()
{
    var L_Reg1RegisterLater1_Text = "Se voc� ignorar o registro agora, poder� registrar sua c�pia do Windows depois que terminar de configurar o Windows.";
    Agent_Speak(L_Reg1RegisterLater1_Text);

    var L_Reg1RegisterLater2_Text = "Basta clicar em 'Executar' no menu 'Iniciar' e digitar regwiz /r.";
    Agent_Speak(L_Reg1RegisterLater2_Text);

    var L_Reg1RegisterLater3_Text = "Se voc� se esquecer destas etapas, clique em 'Ajuda e suporte' no menu 'Iniciar' para obter respostas �s suas perguntas, assim como outras informa��es relevantes.";
    Agent_Speak(L_Reg1RegisterLater3_Text);
}

function Agent_Reg1WhyRegister()
{
    var L_Reg1WhyRegister1_Text = "Ao registrar sua c�pia do Windows, voc� estar� qualificado para obter alguns benef�cios que a Microsoft oferece a seus clientes.";
    Agent_Speak(L_Reg1WhyRegister1_Text);

    var L_Reg1WhyRegister2_Text = "Isso inclui notifica��es sobre atualiza��es do produto e o acesso aos premiados servi�os de suporte ao produto Microsoft.";
    Agent_Speak(L_Reg1WhyRegister2_Text);
}

function Agent_Reg1AboutSharingInfo()
{
    
    if (!window.external.get_RetailOOBE()) 
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Se voc� selecionar estas op��es, estar� optando por compartilhar as informa��es de registro com a Microsoft e com o fabricante do computador.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text); 
    
        Agent_Play("RestPose");
    }
    else
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Se voc� selecionar estas op��es, estar� optando por compartilhar as informa��es de registro com a Microsoft.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");     
    }
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");

    var L_Reg1AboutSharingInfo2_Text = "Para obter mais informa��es sobre a diretiva de privacidade da Microsoft, clique neste link.";
    Agent_Speak(L_Reg1AboutSharingInfo2_Text);
    
    Agent_Play("RestPose");
    
    if (!window.external.get_RetailOOBE()) 
    {           
        Agent_GestureAtElement(g.reg1_spn3,"Left");
                
        var L_Reg1AboutSharingInfo3_Text = "Para obter mais informa��es sobre a diretiva de privacidade de %1, clique neste link.";
        Agent_Speak(ApiObj.FormatMessage(L_Reg1AboutSharingInfo3_Text, g_OEMNameStr));
    
        Agent_Play("RestPose");
    }
}




function Agent_Reg3AddCommands() 
{
    var L_Reg3Command1_Text = "Informa��es sobre esta &etapa";
    var L_Reg3Command2_Text = "C&omo alterar as informa��es?";
    var L_Reg3Command3_Text = "Detalhes sobre o co&mpartilhamento de informa��es";

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
    var L_Reg3AboutThisStep1_Text = "Para registrar sua c�pia do Microsoft Windows, voc� precisar� preencher as informa��es necess�rias nesta tela.";
    Agent_Speak(L_Reg3AboutThisStep1_Text);
    
    Agent_GestureAtElement(g.UserCity,"Left");

    var L_Reg3AboutThisStep2_Text = "Precisamos das informa��es para todas as caixas, exceto aquelas marcadas como 'Opcional'.";
    Agent_Speak(L_Reg3AboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_Reg3AboutThisStep3_Text = "Se puder, preencha tamb�m as informa��es opcionais.";
    Agent_Speak(L_Reg3AboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_Reg3AboutThisStep4_Text = "Quando tiver terminado, basta clicar no bot�o 'Avan�ar'.";
    Agent_Speak(L_Reg3AboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg3HowToChangeInfo()
{
    var L_Reg3HowToChangeInfo1_Text = "Acrescentamos algumas dicas nas caixas para lhe mostrar o que fazer.";
    Agent_Speak(L_Reg3HowToChangeInfo1_Text);
    
    Agent_GestureAtElement(g.UserLastName,"Left");

    var L_Reg3HowToChangeInfo2_Text = "Por exemplo, basta clicar na caixa 'Sobrenome' para come�ar a digitar.";
    Agent_Speak(L_Reg3HowToChangeInfo2_Text);

    var L_Reg3HowToChangeInfo3_Text = "Uma linha vertical intermitente, conhecida como ponto de inser��o, dever� aparecer na caixa.";
    Agent_Speak(L_Reg3HowToChangeInfo3_Text);

    var L_Reg3HowToChangeInfo4_Text = "O que voc� digitar ser� inserido no ponto de inser��o.";
    Agent_Speak(L_Reg3HowToChangeInfo4_Text);
    
    Agent_Play("RestPose");

    var L_Reg3HowToChangeInfo5_Text = "Voc� pode mover o ponto de inser��o na caixa de texto se pressionar a seta para a esquerda ou a seta para a direita no teclado.";
    Agent_Speak(L_Reg3HowToChangeInfo5_Text);

    var L_Reg3HowToChangeInfo6_Text = "Voc� pode usar a tecla Delete para remover caracteres depois do ponto de inser��o ou usar a tecla Backspace para remover caracteres antes do ponto de inser��o.";
    Agent_Speak(L_Reg3HowToChangeInfo6_Text);

    var L_Reg3HowToChangeInfo7_Text = "Se voc� desejar inserir um caractere, posicione o ponteiro dentro da caixa no local em que deseja adicionar o caractere e clique.";
    Agent_Speak(L_Reg3HowToChangeInfo7_Text);

    var L_Reg3HowToChangeInfo8_Text = "Em seguida digite o caractere que deseja inserir.";
    Agent_Speak(L_Reg3HowToChangeInfo8_Text);

    var L_Reg3HowToChangeInfo9_Text = "N�o se preocupe se voc� n�o digitar em uma caixa e a dica continuar a ser exibida.";
    Agent_Speak(L_Reg3HowToChangeInfo9_Text);

    var L_Reg3HowToChangeInfo10_Text = "A dica � somente para ajud�-lo. N�o � parte das informa��es de registro.";
    Agent_Speak(L_Reg3HowToChangeInfo10_Text);
}

function Agent_Reg3AboutSharingInfo()
{    
    if (!window.external.get_RetailOOBE()) 
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
        
        var L_Reg3AboutSharingInfo1_Text = "Se voc� selecionar estas op��es, estar� optando por compartilhar as informa��es de registro com a Microsoft e com o fabricante do computador.";
        Agent_Speak(L_Reg3AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");
    }
    else
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
         
        var L_Reg3AboutSharingInfo1_Text = "Se voc� selecionar estas op��es, estar� optando por compartilhar as informa��es de registro com a Microsoft.";
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

        

        L_Register3PlayCheckBoxScript1_Text = "As informa��es de registro que aparecem na tela foram configuradas para serem enviadas tanto para a Microsoft quanto para o fabricante do computador.";
        L_Register3PlayCheckBoxScript2_Text = "As informa��es de registro que aparecem na tela foram configuradas para serem enviadas para a Microsoft, mas n�o para o fabricante do computador.";
        L_Register3PlayCheckBoxScript3_Text = "As informa��es de registro que aparecem na tela foram configuradas para serem enviadas para o fabricante do computador, mas n�o para a Microsoft.";
        L_Register3PlayCheckBoxScript4_Text = "As informa��es de registro que aparecem na tela n�o ser�o enviadas para a Microsoft nem para o fabricante do computador.";

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

        var L_Register3PlayCheckBoxScript5_Text = "Estas informa��es ajudar�o essas empresas a mant�-lo qualificado a receber os benef�cios de um cliente registrado.";
        Agent_Speak(L_Register3PlayCheckBoxScript5_Text);

        var L_Register3PlayCheckBoxScript6_Text = "Para alterar a configura��o de envio das informa��es,";
        Agent_Speak(L_Register3PlayCheckBoxScript6_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(elem, "TopCenterWidth");
		else
			Agent_GestureAtElement(elem, "Left");

        var L_Register3PlayCheckBoxScript7_Text = "Basta clicar nestas caixas aqui.";
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

        var L_Register3EncourageTabKey1_Text = "Pressione a tecla Tab para vir para c�.";
        Agent_Speak(L_Register3EncourageTabKey1_Text);
}

function Agent_Register3EncourageMouseClick() {

        var L_Register3EncourageMouseClick1_Text = "Mova o ponteiro do mouse para c� e clique com o bot�o esquerdo.";
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

                        var L_Register3PlayElementScript1_Text = "Digite seu nome nesta caixa.";
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

                        var L_Register3PlayElementScript3_Text = "Digite seu segundo nome aqui.";
                        Agent_Speak(L_Register3PlayElementScript3_Text);

                        break;

                case "UserLastName":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript4_Text = "Digite seu sobrenome nesta caixa.";
                        Agent_Speak(L_Register3PlayElementScript4_Text);

                        break;

                case "UserAddress":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript5_Text = "Digite seu endere�o aqui.";
                        Agent_Speak(L_Register3PlayElementScript5_Text);

                        break;

                case "UserAddress2":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        Agent_Play("Think");

                        var L_Register3PlayElementScript6_Text = "Se voc� precisar de espa�o adicional para seu endere�o, digite-o aqui. Caso contr�rio, pressione a tecla Tab para continuar.";
                        Agent_Speak(L_Register3PlayElementScript6_Text);

                        Agent_Play("RestPose");

                        break;

                case "UserCity":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript7_Text = "Digite aqui o nome da cidade onde voc� mora.";
                        Agent_Speak(L_Register3PlayElementScript7_Text);

                        break;

                case "UserStateTextBox":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript8_Text = "Digite aqui o seu estado ou prov�ncia.";
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
                                var L_Register3PlayElementScript91_Text = "Selecione o estado.";
                                Agent_Speak(L_Register3PlayElementScript91_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript92_Text = "Para exibir a lista de estados, clique no bot�o de seta para baixo.";
                                Agent_Speak(L_Register3PlayElementScript92_Text);

                        }

                        else if (elem.id == "selCAProvince") {
                                var L_Register3PlayElementScript93_Text = "Selecione sua prov�ncia.";
                                Agent_Speak(L_Register3PlayElementScript93_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript94_Text = "Para exibir a lista de prov�ncias, clique no bot�o de seta para baixo.";
                                Agent_Speak(L_Register3PlayElementScript94_Text);

                        }

                        else {
                                var L_Register3PlayElementScript95_Text = "Selecione seu pa�s ou regi�o clicando com o mouse no bot�o de seta para baixo.";
                                Agent_Speak(L_Register3PlayElementScript95_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript96_Text = "Para exibir a lista de pa�ses e regi�es, clique no bot�o de seta para baixo.";
                                Agent_Speak(L_Register3PlayElementScript96_Text);

                        }

                        Agent_Play("Explain");

                        var L_Register3PlayElementScript11_Text = "Em seguida, clique no seu estado para selecion�-lo.";
                        var L_Register3PlayElementScript12_Text = "Em seguida, clique na sua prov�ncia para selecion�-la.";
                        var L_Register3PlayElementScript13_Text = "Em seguida, clique no seu pa�s ou regi�o para selecion�-la.";

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

                        var L_Register3PlayElementScript14_Text = "Digite seu CEP aqui.";
                        Agent_Speak(L_Register3PlayElementScript14_Text);

                        break;

                case "UserEmailAddress":

                        if (elem.value == "") {

							if (g.document.dir == "rtl") 
								Agent_GestureAtElement(elem, "Left");
		
							else
								Agent_GestureAtElement(elem, "Right");

                            var L_Register3PlayElementScript15_Text = "O endere�o de email � opcional, mas � o nosso m�todo preferido para contat�-lo.";
                            Agent_Speak(L_Register3PlayElementScript15_Text);
							
							g_bAgentRegister3ShortEmail = true;
							
							Agent_Play("Explain");
							
                            var L_Register3PlayElementScript16_Text = "Se voc� n�o tiver um endere�o de email, deixe esta caixa em branco.";
                            Agent_Speak(L_Register3PlayElementScript16_Text);
							
							Agent_Play("Blink");
							                             
                        }
                        
                        else if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) {

	                       if (g_strAgentLastFocusID == "UserEmailAddress") {

								Agent_Play("Decline");
								
								var L_Register3PlayElementScript17_Text = "Este endere�o de email n�o parece ser v�lido.";
								Agent_Speak(L_Register3PlayElementScript17_Text);

								Agent_ExplainEmailAddress();
								
								if (g.document.dir == "rtl")
									Agent_GestureAtElement(elem, "Left");
								
								else
									Agent_GestureAtElement(elem, "Right");
                                        
								Agent_Play("Alert");
                                        
								var L_Register3PlayElementScript18_Text = "Se voc� n�o tiver um endere�o de email, deixe este campo em branco.";
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
        var L_ExplainEmailAddress1_Text = "Um endere�o de email geralmente possui duas partes.";
        Agent_Speak(L_ExplainEmailAddress1_Text);

        var L_ExplainEmailAddress2_Text = "A primeira parte � o nome da conta, seguido pelo s�mbolo @. A segunda parte � o nome do dom�nio.";
        Agent_Speak(L_ExplainEmailAddress2_Text);

        var L_ExplainEmailAddress3_Text = "Por exemplo, um endere�o de email pode ser parecido com: %s";
        var re = /%s/i;
        var strEmail = "\\map=\"\"=\"greatcustomer@msn.com\"\\";

        Agent_Speak(L_ExplainEmailAddress3_Text.replace(re, strEmail) + "\\pau=2000\\");

        Agent_Play("RestPose");
}







function Agent_PrivacyMSAddCommands() 
{
    var L_PrivacyMSCommand1_Text = "Informa��es sobre esta &etapa";
    var L_PrivacyMSCommand2_Text = "O q&ue � um servidor seguro?";
    var L_PrivacyMSCommand3_Text = "O que � um coo&kie?";
    var L_PrivacyMSCommand4_Text = "&Qual � o pr�ximo passo?";

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
    var L_PrivacyMSAboutThisStep1_Text = "Esta tela exibe a declara��o de privacidade da Microsoft.";
    Agent_Speak(L_PrivacyMSAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.privtext,"Left");

    var L_PrivacyMSAboutThisStep2_Text = "Voc� pode ler o texto aqui.";
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

    var L_PrivacyMSAboutThisStep3_Text = "Em seguida clique no bot�o Voltar para retornar � tela anterior.";
    Agent_Speak(L_PrivacyMSAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PrivacyMSWhatIsSecureServer()
{
    var L_PrivacyMSWhatIsSecureServer1_Text = "Um servidor � um computador que fornece recursos compartilhados, como informa��es, a outros computadores em um rede.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer1_Text);

    var L_PrivacyMSWhatIsSecureServer2_Text = "Um servidor seguro � aquele computador com a capacidade de fornecer transa��es seguras, garantindo que as informa��es nele armazenadas n�o ser�o acess�veis a terceiros n�o autorizados.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer2_Text);

    var L_PrivacyMSWhatIsSecureServer3_Text = "Por exemplo, quando voc� se registrar na Microsoft, suas informa��es de nome e endere�o ser�o armazenadas no servidor de registro seguro da Microsoft.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer3_Text);
        
    var L_PrivacyMSWhatIsSecureServer4_Text = "Assim, suas informa��es permanecer�o privadas e seguras e n�o poder�o ser usadas por terceiros fora da Microsoft.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer4_Text);
}

function Agent_PrivacyMSWhatIsCookie()
{
    var L_PrivacyMSWhatIsCookie1_Text = "Um cookie � um arquivo de dados pequeno que � armazenado no seu computador quando voc� visita certos sites da Web.";
    Agent_Speak(L_PrivacyMSWhatIsCookie1_Text);

    var L_PrivacyMSWhatIsCookie2_Text = "O cookie cont�m informa��es b�sicas sobre voc�, como seu endere�o de email, para que voc� n�o tenha que digitar essas informa��es sempre que visitar o site.";
    Agent_Speak(L_PrivacyMSWhatIsCookie2_Text);

    var L_PrivacyMSWhatIsCookie3_Text = "Por exemplo, se voc� fizer uma compra em um site da Web, esse site pode enviar ao computador um cookie que conter� suas informa��es de compra.";
    Agent_Speak(L_PrivacyMSWhatIsCookie3_Text);
        
    var L_PrivacyMSWhatIsCookie4_Text = "Assim, na pr�xima vez em que voc� visitar esse site da Web, n�o ter� de digitar essas informa��es novamente.";
    Agent_Speak(L_PrivacyMSWhatIsCookie4_Text);
        
    var L_PrivacyMSWhatIsCookie5_Text = "Quando voc� se registrar na Microsoft, sua identifica��o do produto, seu nome e endere�o ser�o salvos em um cookie no computador.";
    Agent_Speak(L_PrivacyMSWhatIsCookie5_Text);
        
    var L_PrivacyMSWhatIsCookie6_Text = "Assim, na pr�xima vez em que voc� visitar www.microsoft.com, o site da Web o reconhecer� como um usu�rio registrado do Windows.";
    Agent_Speak(L_PrivacyMSWhatIsCookie6_Text);
}

function Agent_PrivacyMSWhatToDoNext()
{    
    Agent_GestureAtElement(g.privtext,"Left");
    
    var L_PrivacyMSWhatToDoNext1_Text = "Clique nesta caixa.para obter mais informa��es sobre a declara��o de privacidade.";
    Agent_Speak(L_PrivacyMSWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.privtext,"Right");

    var L_PrivacyMSWhatToDoNext2_Text = "Em seguida, use os bot�es de seta para cima e de seta para baixo para rolar pela declara��o de privacidade.";
    Agent_Speak(L_PrivacyMSWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_PrivacyMSWhatToDoNext3_Text = "Voc� tamb�m pode usar as teclas Page Down e Page Up no teclado para fazer a rolagem do texto.";
    Agent_Speak(L_PrivacyMSWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
        
    var L_PrivacyMSWhatToDoNext4_Text = "Depois de ler a declara��o de privacidade, clique no bot�o 'Voltar' para voltar � tela de registro anterior.";
    Agent_Speak(L_PrivacyMSWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}





function Agent_RefDialAddCommands() 
{
    var L_RefDialAddCommands1_Text = "Informa��es sobre esta &etapa";
    var L_RefDialAddCommands2_Text = "&Qual � o pr�ximo passo?";

    g_AgentCharacter.Commands.Add("Agent_RefDialAboutThisStep", L_RefDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialWhatToDoNext", L_RefDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RefDialAboutThisStep()
{
    var L_RefDialAboutThisStep1_Text = "Neste est�gio, o Windows precisa fazer uma chamada telef�nica gratuita.";
    Agent_Speak(L_RefDialAboutThisStep1_Text);

    var L_RefDialAboutThisStep2_Text = "Isso permitir� que voc� use sua conta de Internet existente neste computador.";
    Agent_Speak(L_RefDialAboutThisStep2_Text);
}

function Agent_RefDialWhatToDoNext()
{    
    Agent_GestureAtElement(g.btnManual,"Left");
    
    var L_RefDialWhatToDoNext1_Text = "Se voc� j� tiver um provedor de servi�os de Internet ou souber que provedor deseja usar, clique no bot�o 'Com configura��es'.";
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

    var L_RefDialWhatToDoNext2_Text = "Para selecionar um provedor em uma lista de provedores dispon�veis na sua �rea, clique em 'Avan�ar'.";
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

    var L_RefDialWhatToDoNext3_Text = "Clique em 'Ignorar' para continuar sem configurar o acesso � Internet no computador.";
    Agent_Speak(L_RefDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RefDialingAddCommands() 
{
    var L_RefDialingAddCommands1_Text = "Informa��es sobre esta &etapa";
    var L_RefDialingAddCommands2_Text = "O que � a &barra no meio da tela?";
    var L_RefDialingAddCommands3_Text = "&Qual � o pr�ximo passo?";

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
    var L_RefDialingAboutThisStep1_Text = "Voc� est� sendo conectado ao servi�o de refer�ncia da Microsoft para que voc� possa obter uma lista de provedores de servi�os de Internet dispon�veis na sua �rea.";
    Agent_Speak(L_RefDialingAboutThisStep1_Text);

    var L_RefDialingAboutThisStep2_Text = "Aguarde...";
    Agent_Speak(L_RefDialingAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingAboutThisStep3_Text = "Se preferir, voc� pode ignorar esta etapa ou voltar para a tela anterior.";
    Agent_Speak(L_RefDialingAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RefDialingWhatsThisBar()
{    
    Agent_GestureAtElement(g.tblProg,"Left");
    
    var L_RefDialingWhatsThisBar1_Text = "Esta � a barra de progresso, que mostra em que ponto voc� est� no processo.";
    Agent_Speak(L_RefDialingWhatsThisBar1_Text);

    var L_RefDialingWhatsThisBar2_Text = "� medida que o download das informa��es  � feito a partir do servi�o de refer�ncia para o seu computador, a barra � preenchida.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
    
    Agent_Play("RestPose");

    var L_RefDialingWhatsThisBar3_Text = "Quando tiver sido feito o download de todas as informa��es, a barra ser� totalmente preenchida e voc� passar� para a tela seguinte automaticamente.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
}

function Agent_RefDialingWhatToDoNext()
{
    var L_RefDialingWhatToDoNext1_Text = "Aguarde enquanto o Windows faz o download das informa��es sobre os provedores de servi�os de Internet do servi�o de refer�ncia da Microsoft para o seu computador.";
    Agent_Speak(L_RefDialingWhatToDoNext1_Text);

    var L_RefDialingWhatToDoNext2_Text = "Uma vez que o download for conclu�do, a pr�xima tela aparecer� automaticamente.";
    Agent_Speak(L_RefDialingWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingWhatToDoNext3_Text = "Para ignorar esta etapa, clique no bot�o 'Ignorar'.";
    Agent_Speak(L_RefDialingWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RegDialAddCommands()
{
    var L_RegDialAddCommands1_Text = "Informa��es sobre esta &etapa";
    var L_RegDialAddCommands2_Text = "&Qual � o pr�ximo passo?";

    g_AgentCharacter.Commands.Add("Agent_RegDialAboutThisStep", L_RegDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RegDialWhatToDoNext", L_RegDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RegDialAboutThisStep()
{
    var L_RegDialAboutThisStep1_Text = "O Windows est� usando seu computador para fazer uma chamada telef�nica gratuita e conectar-se � central de registro.";
    Agent_Speak(L_RegDialAboutThisStep1_Text);

    var L_RegDialAboutThisStep2_Text = "Aguarde...";
    Agent_Speak(L_RegDialAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialAboutThisStep3_Text = "Se preferir, voc� pode ignorar esta etapa ou voltar � tela anterior.";
    Agent_Speak(L_RegDialAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RegDialWhatToDoNext()
{
    var L_RegDialWhatToDoNext1_Text = "Aguarde enquanto o Windows se conecta � central de registro.";
    Agent_Speak(L_RegDialWhatToDoNext1_Text);

    var L_RegDialWhatToDoNext2_Text = "Depois que o Windows se conectar, ele ir� automaticamente para a pr�xima tela.";
    Agent_Speak(L_RegDialWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialWhatToDoNext3_Text = "Para ignorar esta etapa, clique no bot�o 'Ignorar'.";
    Agent_Speak(L_RegDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigDialAddCommands()
{
    var L_MigDialAddCommands1_Text = "Informa��es sobre esta &etapa";
    var L_MigDialAddCommands2_Text = "&Qual � o pr�ximo passo?";

    g_AgentCharacter.Commands.Add("Agent_MigDialAboutThisStep", L_MigDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_MigDialWhatToDoNext", L_MigDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_MigDialAboutThisStep()
{
    var L_MigDialAboutThisStep1_Text = "Neste est�gio, o Windows precisa fazer uma chamada telef�nica gratuita.";
    Agent_Speak(L_MigDialAboutThisStep1_Text);

    var L_MigDialAboutThisStep2_Text = "Isso permitir� que voc� use sua conta de Internet existente neste computador.";
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
    
    var L_MigDialWhatToDoNext1_Text = "Clique no bot�o 'Avan�ar' para come�ar a discar.";
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

    var L_MigDialWhatToDoNext2_Text = "Para pular esta etapa, clique no bot�o 'Ignorar'.";
    Agent_Speak(L_MigDialWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}





function Agent_MigListAddCommands() 
{
    
    
    
	var L_MigListAddCommands1_Text = "Informa��es sobre esta &etapa";
	var L_MigListAddCommands2_Text = "&Qual � o pr�ximo passo?";
	
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
    var L_MigListAboutThisStep1_Text = "Nesta tela, escolha o provedor de servi�os de Internet que deseja usar.";
    Agent_Speak(L_MigListAboutThisStep1_Text);

    var L_MigListAboutThisStep2_Text = "Isso permitir� que voc� use sua conta de Internet existente neste computador.";
    Agent_Speak(L_MigListAboutThisStep2_Text);
}

function Agent_MigListWhatToDoNext()
{
    Agent_GestureAtElement(g.selISPDropList,"Left");
    
    var L_MigListWhatToDoNext1_Text = "Clique no seu provedor de servi�os de Internet para selecion�-lo na lista.";
    Agent_Speak(L_MigListWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_MigListWhatToDoNext2_Text = "Se o seu provedor n�o estiver listado, clique em \"Meu provedor n�o est� na lista\" no final da lista.";
    Agent_Speak(L_MigListWhatToDoNext2_Text);

    var L_MigListWhatToDoNext3_Text = "Contate seu provedor para obter assist�ncia para restabelecer sua conta de Internet no computador.";
    Agent_Speak(L_MigListWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_MigListWhatToDoNext4_Text = "Em seguida, clique no bot�o 'Avan�ar' para continuar.";
    Agent_Speak(L_MigListWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigPageAddCommands() 
{
	var L_MigPageAddCommands1_Text = "Informa��es sobre o pr�ximo pa&sso";
	var L_MigPageAddCommands2_Text = "Informa��es sobre esta &tela";
	var L_MigPageAddCommands3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";
	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_WhatToDoNext", L_MigPageAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_AboutThisStep", L_MigPageAddCommands2_Text);
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_HowToMoveOn", L_MigPageAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_MigPageCommand_WhatToDoNext() {
		
	var L_MigPageWhatToDoNext1_Text = "Quando tiver conclu�do esta p�gina.";
	Agent_Speak(L_MigPageWhatToDoNext1_Text);
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
			
	var L_MigPageWhatToDoNext2_Text = "clique no bot�o 'Avan�ar'.";
	Agent_Speak(L_MigPageWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}

function Agent_MigPageCommand_AboutThisStep() 
{
	var L_MigPageAboutThisStep1_Text = "Nesta tela, tentaremos ativar sua conta de Internet com seu provedor de servi�os existente.";
	Agent_Speak(L_MigPageAboutThisStep1_Text);
	
	Agent_Play("Pleased");
	
	var L_MigPageAboutThisStep2_Text = "Basta seguir as instru��es na tela fornecidas pelo provedor de servi�os de Internet.";
	Agent_Speak(L_MigPageAboutThisStep2_Text);
}

function Agent_MigPageCommand_HowToMoveOn() 
{
	var L_MigPageHowToMoveOn1_Text = "Quando voc� tiver conclu�do esta tela,";
	Agent_Speak(L_MigPageHowToMoveOn1_Text);		
			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

	var L_MigPageHowToMoveOn2_Text = "Clique no bot�o 'Avan�ar' para continuar.";
	Agent_Speak(L_MigPageHowToMoveOn2_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPDialAddCommands() 
{
    var L_ISPDial1_Text = "Informa��es sobre esta &etapa";
    var L_ISPDial2_Text = "&Qual � o pr�ximo passo?";

    g_AgentCharacter.Commands.Add("Agent_ISPDialAboutThisStep", L_ISPDial1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDialWhatToDoNext", L_ISPDial2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPDialAboutThisStep()
{
    var L_ISPDialAboutThisStep1_Text = "Neste est�gio, o Windows precisa fazer uma chamada telef�nica gratuita.";
    Agent_Speak(L_ISPDialAboutThisStep1_Text);

    var L_ISPDialAboutThisStep2_Text = "Isso serve para inscrev�-lo na sua nova conta na Internet.";
    Agent_Speak(L_ISPDialAboutThisStep2_Text);

    var L_ISPDialAboutThisStep3_Text = "Basta clicar no bot�o 'Avan�ar' para continuar.";
    Agent_Speak(L_ISPDialAboutThisStep3_Text);
}

function Agent_ISPDialWhatToDoNext()
{
    var L_ISPDialWhatToDoNext1_Text = "Clique no bot�o 'Avan�ar' para continuar.";
    Agent_Speak(L_ISPDialWhatToDoNext1_Text);

    var L_ISPDialWhatToDoNext2_Text = "Clique em 'Ignorar' para continuar sem configurar o computador para acesso � Internet. Voc� poder� faz�-lo mais tarde.";
    Agent_Speak(L_ISPDialWhatToDoNext2_Text);
}




function Agent_DialToneAddCommands()
{
    var L_DialToneAddCommands1_Text = "Informa��es sobre esta &etapa";
    var L_DialToneAddCommands2_Text = "E se eu preci&sar mover meu computador?";
    var L_DialToneAddCommands3_Text = "&Qual � o pr�ximo passo?";

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
    var L_DialToneAboutThisStep1_Text = "N�o foi detectado um sinal de linha.";
    Agent_Speak(L_DialToneAboutThisStep1_Text);

    var L_DialToneAboutThisStep2_Text = "Pode haver v�rias raz�es para isso.";
    Agent_Speak(L_DialToneAboutThisStep2_Text);

    var L_DialToneAboutThisStep3_Text = "Primeiro, certifique-se de que ambas as extremidades do fio de telefone do computador est�o conectadas corretamente.";
    Agent_Speak(L_DialToneAboutThisStep3_Text);

    var L_DialToneAboutThisStep4_Text = "Depois, veja se ningu�m est� tentando usar a linha telef�nica.";
    Agent_Speak(L_DialToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneAboutThisStep5_Text = "Clique no bot�o 'Rediscar' para tentar discar novamente.";
    Agent_Speak(L_DialToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_DialToneHowToMove()
{
    var L_DialToneHowToMove1_Text = "Se voc� precisar mudar o computador de lugar para poder conect�-lo � linha telef�nica, certifique-se de que ele est� desligado.";
    Agent_Speak(L_DialToneHowToMove1_Text);

    var L_DialToneHowToMove2_Text = "Quando voc� reiniciar o computador, o Windows continuar� o processo a partir do ponto em que parou.";
    Agent_Speak(L_DialToneHowToMove2_Text);
}

function Agent_DialToneWhatToDoNext()
{
    var L_DialToneWhatToDoNext1_Text = "Primeiro verifique a conex�o entre o computador e a linha telef�nica.";
    Agent_Speak(L_DialToneWhatToDoNext1_Text);

    var L_DialToneWhatToDoNext2_Text = "Em seguida, verifique se a linha telef�nica n�o est� sendo usada.";
    Agent_Speak(L_DialToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneWhatToDoNext3_Text = "Clique no bot�o 'Rediscar' para tentar discar novamente.";
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

    var L_DialToneWhatToDoNext4_Text = "Ou ent�o, clique no bot�o 'Ignorar' para continuar sem fazer o registro nem ativar sua c�pia do Windows XP.";
    Agent_Speak(L_DialToneWhatToDoNext4_Text);
    
    Agent_Play("RestPose");

    var L_DialToneWhatToDoNext5_Text = "Voc� sempre poder� se registrar mais tarde.";
    Agent_Speak(L_DialToneWhatToDoNext5_Text);
}



function Agent_CnnctErrAddCommands() 
{
    var L_CnnctErrAddCommands1_Text = "&Informa��es sobre esta etapa";
    var L_CnnctErrAddCommands2_Text = "Como eu desativo a chamada &em espera?";
    var L_CnnctErrAddCommands3_Text = "&Qual � o pr�ximo passo?";

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
    var L_CnnctErrAboutThisStep1_Text = "A chamada telef�nica ao centro de registro foi interrompida.";
    Agent_Speak(L_CnnctErrAboutThisStep1_Text);

    var L_CnnctErrAboutThisStep2_Text = "Pode haver v�rias raz�es para isso.";
    Agent_Speak(L_CnnctErrAboutThisStep2_Text);

    var L_CnnctErrAboutThisStep3_Text = "Em primeiro lugar, pode ser que voc� n�o estivesse usando ativamente a sua conex�o por um bom tempo e tenha sido desconectado automaticamente.";
    Agent_Speak(L_CnnctErrAboutThisStep3_Text);

    var L_CnnctErrAboutThisStep4_Text = "Segundo, algu�m pode ter tentado usar a linha telef�nica enquanto voc� estava conectado.";
    Agent_Speak(L_CnnctErrAboutThisStep4_Text);

    var L_CnnctErrAboutThisStep5_Text = "Em terceiro lugar, se voc� tiver o recurso de chamada em espera, talvez voc� tenha sido interrompido por uma chamada de entrada.";
    Agent_Speak(L_CnnctErrAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrAboutThisStep6_Text = "Se o servi�o telef�nico incluir a op��o de chamada em espera e voc� souber o n�mero para desativ�-la, digite-o aqui.";
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

    var L_CnnctErrAboutThisStep7_Text = "Em seguida clique no bot�o Pr�ximo para tentar reconectar-se.";
    Agent_Speak(L_CnnctErrAboutThisStep7_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrTurnOffCallWaiting()
{
    var L_CnnctErrTurnOffCallWaiting1_Text = "O provedor de servi�os telef�nicos pode lhe fornecer o c�digo para desativar a chamada em espera.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting1_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrTurnOffCallWaiting2_Text = "Se voc� desejar desativar o servi�o de chamada em espera do telefone enquanto faz esta conex�o, digite o n�mero aqui.";
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

    var L_CnnctErrTurnOffCallWaiting3_Text = "Ent�o, clique no obt�o 'Avan�ar'.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrWhatToDoNext()
{
    var L_CnnctErrWhatToDoNext1_Text = "Em primeiro lugar, certifique-se de que mais ningu�m est� usando a linha telef�nica que voc� est� tentando usar para entrar em contato com a Microsoft.";
    Agent_Speak(L_CnnctErrWhatToDoNext1_Text);

    var L_CnnctErrWhatToDoNext2_Text = "Em segundo lugar, se voc� tiver a op��o de chamada em espera, desative-a temporariamente.";
    Agent_Speak(L_CnnctErrWhatToDoNext2_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrWhatToDoNext3_Text = "Para desativ�-la, digite o c�digo nesta caixa.";
    Agent_Speak(L_CnnctErrWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_CnnctErrWhatToDoNext4_Text = "Ap�s a sua chamada ser conclu�da, a chamada em espera ser� ativada novamente.";
    Agent_Speak(L_CnnctErrWhatToDoNext4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrWhatToDoNext5_Text = "Quando voc� estiver pronto para tentar novamente, clique no bot�o 'Avan�ar'.";
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

    var L_CnnctErrWhatToDoNext6_Text = "Ou ent�o, clique no bot�o 'Ignorar' para continuar sem fazer o registro.";
    Agent_Speak(L_CnnctErrWhatToDoNext6_Text);
    
    Agent_Play("RestPose");
}



function Agent_HandShakeAddCommands() 
{
    var L_HandShakeAddCommands1_Text = "Informa��es sobre esta &etapa";
    var L_HandShakeAddCommands2_Text = "&Qual � o pr�ximo passo?";

    g_AgentCharacter.Commands.Add("Agent_HandShakeAboutThisStep", L_HandShakeAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_HandShakeWhatToDoNext", L_HandShakeAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_HandShakeAboutThisStep()
{
    var L_HandShakeAboutThisStep1_Text = "O Windows n�o p�de se conectar � Microsoft neste momento.";
    Agent_Speak(L_HandShakeAboutThisStep1_Text);

    var L_HandShakeAboutThisStep2_Text = "Isso pode ter ocorrido porque as linhas telef�nicas est�o ocupadas ou porque o computador n�o p�de completar a chamada telef�nica.";
    Agent_Speak(L_HandShakeAboutThisStep2_Text);

    var L_HandShakeAboutThisStep3_Text = "Aguarde alguns minutos.";
    Agent_Speak(L_HandShakeAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_HandShakeAboutThisStep4_Text = "Clique no bot�o 'Rediscar' para tentar novamente.";
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
    
    var L_HandShakeWhatToDoNext1_Text = "Espere alguns minutos e clique no bot�o 'Rediscar'.";
    Agent_Speak(L_HandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_HandShakeWhatToDoNext2_Text = "Se voc� j� tiver tentado isso algumas vezes, entre em contato com o fabricante do computador.";
    Agent_Speak(L_HandShakeWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_HandShakeWhatToDoNext3_Text = "Ou ent�o, clique no bot�o 'Ignorar' para continuar sem registrar o computador.";
    Agent_Speak(L_HandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_NoAnswerAddCommands() 
{
    var L_NoAnswerAddCommands1_Text = "Informa��es sobre esta &etapa";
    var L_NoAnswerAddCommands2_Text = "E se o n�mero de &telefone n�o estiver correto?";
    var L_NoAnswerAddCommands3_Text = "&Qual � o pr�ximo passo?";

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
    var L_NoAnswerAboutThisStep1_Text = "O n�mero do telefone que tentamos discar n�o respondeu.";
    Agent_Speak(L_NoAnswerAboutThisStep1_Text);

    var L_NoAnswerAboutThisStep2_Text = "Verifique se o n�mero est� correto.";
    Agent_Speak(L_NoAnswerAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_NoAnswerAboutThisStep3_Text = "Se tudo estiver correto, aguarde alguns minutos e clique no bot�o 'Rediscar' para tentar novamente.";
    Agent_Speak(L_NoAnswerAboutThisStep3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.edtPhoneNumber,"Left");

    var L_NoAnswerAboutThisStep4_Text = "No entanto, se o n�mero estiver incorreto, clique aqui e edite-o.";
    Agent_Speak(L_NoAnswerAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_NoAnswerAboutThisStep5_Text = "E, em seguida, clique no bot�o 'Rediscar'.";
    Agent_Speak(L_NoAnswerAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.btnRestore,"Right");

    var L_NoAnswerAboutThisStep6_Text = "Voc� sempre poder� restaurar o n�mero original que o Windows tentou discar clicando no bot�o 'Restaurar'.";
    Agent_Speak(L_NoAnswerAboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_NoAnswerWhatIfWrongNumber()
{
    var L_NoAnswerWhatIfWrongNumber1_Text = "Se o n�mero de telefone n�o estiver correto, clique na caixa de texto.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber1_Text);

    var L_NoAnswerWhatIfWrongNumber2_Text = "Uma linha vertical intermitente, conhecida como ponto de inser��o, dever� aparecer na caixa.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber2_Text);

    var L_NoAnswerWhatIfWrongNumber3_Text = "O que voc� digitar ser� inserido no ponto de inser��o.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber3_Text);

    var L_NoAnswerWhatIfWrongNumber4_Text = "Voc� pode mover o ponto de inser��o na caixa de texto se pressionar a seta para a esquerda ou a seta para a direita no teclado.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber4_Text);

    var L_NoAnswerWhatIfWrongNumber5_Text = "E voc� pode usar a tecla Delete para remover os caracteres que aparecerem depois do ponto de inser��o.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber5_Text);

    var L_NoAnswerWhatIfWrongNumber6_Text = "Ou use a tecla Backspace para remover os caracteres que est�o antes do ponto de inser��o.";
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
    
    var L_NoAnswerWhatToDoNext1_Text = "Caso voc� tenha verificado o n�mero do telefone aqui e ele pare�a correto, clique no bot�o 'Rediscar' para tentar reconectar-se.";
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

    var L_NoAnswerWhatToDoNext2_Text = "Para prosseguir, voc� precisa optar entre reconectar-se ou n�o registrar o computador agora.";
    Agent_Speak(L_NoAnswerWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}



function Agent_PulseAddCommands() 
{

    var L_PulseAddCommands1_Text = "Informa��es sobre esta &etapa";
    var L_PulseAddCommands2_Text = "&Qual � o pr�ximo passo?";

    g_AgentCharacter.Commands.Add("Agent_PulseAboutThisStep", L_PulseAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_PulseWhatToDoNext", L_PulseAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_PulseAboutThisStep()
{
    var L_PulseAboutThisStep1_Text = "O Windows n�o p�de determinar se o seu telefone usa discagem de tom ou de pulso.";
    Agent_Speak(L_PulseAboutThisStep1_Text);

    var L_PulseAboutThisStep2_Text = "O Windows precisa dessa informa��o antes de prosseguir.";
    Agent_Speak(L_PulseAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseAboutThisStep3_Text = "Nesta tela, voc� especifica o m�todo de discagem da linha telef�nica.";
    Agent_Speak(L_PulseAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PulseWhatToDoNext()
{
    var L_PulseWhatToDoNext1_Text = "Clique no c�rculo branco � esquerda do m�todo de discagem usado pelo sua linha telef�nica.";
    Agent_Speak(L_PulseWhatToDoNext1_Text);
    
    Agent_GestureAtElement(g.tone,"Left");

    var L_PulseWhatToDoNext2_Text = "Clique aqui se a linha telef�nica usar discagem por tom.";
    Agent_Speak(L_PulseWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseWhatToDoNext3_Text = "Ou aqui se usar discagem de pulso.";
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

    var L_PulseWhatToDoNext4_Text = "Clique no bot�o 'Avan�ar' para tentar discar novamente.";
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

    var L_PulseWhatToDoNext5_Text = "Ou clique no bot�o 'Ignorar' para continuar sem registrar seu computador.";
    Agent_Speak(L_PulseWhatToDoNext5_Text);
    
    Agent_Play("RestPose");
}





function Agent_TooBusyAddCommands() 
{
        var L_TooBusyAddCommands1_Text = "Informa��es sobre esta &etapa";
        var L_TooBusyAddCommands2_Text = "E se o n�mero de &telefone n�o estiver correto?";
        var L_TooBusyAddCommands3_Text = "&Qual � o pr�ximo passo?";

        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_AboutThisStep", L_TooBusyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatIfIncorrect", L_TooBusyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatToDoNext", L_TooBusyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_TooBusyCommand_AboutThisStep() 
{
    var L_TooBusyAboutThisStep1_Text = "O n�mero do telefone que tentamos discar est� incorreto ou ocupado.";
    Agent_Speak(L_TooBusyAboutThisStep1_Text);

    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyAboutThisStep2_Text = "Verifique se este n�mero parece correto.";
    Agent_Speak(L_TooBusyAboutThisStep2_Text);
        
    Agent_Play("RestPose");

    var L_TooBusyAboutThisStep3_Text = "Se estiver correto, aguarde alguns minutos,";
    Agent_Speak(L_TooBusyAboutThisStep3_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyAboutThisStep4_Text = "Clique no bot�o 'Rediscar' para tentar discar novamente.";
    Agent_Speak(L_TooBusyAboutThisStep4_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatIfIncorrect() 
{        
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect1_Text = "Se este n�mero de telefone n�o estiver correto,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("cb_altnumber"),"Left");
    
    var L_TooBusyPhoneNumberIncorrect2_Text = " clique nesta caixa de sele��o";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_altnumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect3_Text = "e digite um n�mero alternativo aqui.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("cb_outsideline"),"Left");

    var L_TooBusyPhoneNumberIncorrect4_Text = "Se voc� precisar discar um n�mero para obter uma linha externa, clique nesta caixa de sele��o";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect4_Text);

    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("edt_outsideline"),"Right");

    var L_TooBusyPhoneNumberIncorrect5_Text = "e digite o n�mero aqui.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect5_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect6_Text = "Se voc� tiver a op��o de chamada em espera, a chamada que est� fazendo pode ser interrompida por uma chamada recebida.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect6_Text);

    var L_TooBusyPhoneNumberIncorrect7_Text = "� f�cil desativar o servi�o de chamada em espera do telefone enquanto voc� faz esta conex�o.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect7_Text);
        
    Agent_GestureAtElement(g.document.all("cb_callwaiting"),"Left");

    var L_TooBusyPhoneNumberIncorrect8_Text = "Basta clicar nesta caixa de sele��o,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect8_Text);

    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_callwaiting"),"Right");

    var L_TooBusyPhoneNumberIncorrect9_Text = "e digite o c�digo aqui.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect9_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect10_Text = "A chamada em espera ser� reativada depois que a chamada for conclu�da.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect10_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyPhoneNumberIncorrect11_Text = "Lembre-se de clicar no bot�o 'Rediscar' quando estiver pronto para tentar novamente.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect11_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatToDoNext() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyWhatToDoNext1_Text = "Se voc� tiver verificado o n�mero do telefone aqui e ele parecer correto,";
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
    
     var L_TooBusyWhatToDoNext2_Text = "clique no bot�o 'Rediscar' para tentar reconectar-se.";
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

    var L_TooBusyWhatToDoNext3_Text = "Ou ent�o, clique no bot�o 'Ignorar' para ignorar esta etapa. Voc� poder� registrar-se ap�s concluir a configura��o do Windows.";
    Agent_Speak(L_TooBusyWhatToDoNext3_Text);
        
    Agent_Play("RestPose");
}



function Agent_ISPDToneAddCommands() 
{
    var L_ISPDToneAddCommands1_Text = "Informa��es sobre esta &etapa";
    var L_ISPDToneAddCommands2_Text = "E se eu precisar &mover o computador";
    var L_ISPDToneAddCommands3_Text = "&Qual � o pr�ximo passo?";

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
    var L_ISPDToneAboutThisStep1_Text = "N�o foi detectado um sinal de linha.";
    Agent_Speak(L_ISPDToneAboutThisStep1_Text);

    var L_ISPDToneAboutThisStep2_Text = "Pode haver v�rias raz�es para isso.";
    Agent_Speak(L_ISPDToneAboutThisStep2_Text);

    var L_ISPDToneAboutThisStep3_Text = "Primeiro, certifique-se de que ambas as extremidades do fio de telefone do computador est�o conectadas corretamente.";
    Agent_Speak(L_ISPDToneAboutThisStep3_Text);

    var L_ISPDToneAboutThisStep4_Text = "Depois, veja se ningu�m est� tentando usar a linha telef�nica.";
    Agent_Speak(L_ISPDToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneAboutThisStep5_Text = "Clique no bot�o 'Rediscar' para tentar discar novamente.";
    Agent_Speak(L_ISPDToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPDToneHowToMove()
{
    var L_ISPDToneHowToMove1_Text = "Se voc� precisar mudar o computador de lugar para poder conect�-lo � linha telef�nica, certifique-se de que ele est� desligado.";
    Agent_Speak(L_ISPDToneHowToMove1_Text);

    var L_ISPDToneHowToMove2_Text = "Quando voc� reiniciar o computador, o Windows continuar� o processo a partir do ponto em que parou.";
    Agent_Speak(L_ISPDToneHowToMove2_Text);
}

function Agent_ISPDToneWhatToDoNext()
{
    var L_ISPDToneWhatToDoNext1_Text = "Primeiro verifique a conex�o entre o computador e a linha telef�nica.";
    Agent_Speak(L_ISPDToneWhatToDoNext1_Text);

    var L_ISPDToneWhatToDoNext2_Text = "Em seguida, verifique se a linha telef�nica n�o est� sendo usada.";
    Agent_Speak(L_ISPDToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneWhatToDoNext3_Text = "Clique no bot�o 'Rediscar' para tentar discar novamente.";
    Agent_Speak(L_ISPDToneWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_ISPCnErrAddCommands() {

        var L_ISPCnErrAddCommands1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_ISPCnErrAddCommands2_Text = "Diga-me como desativar a chamada &em espera";
        var L_ISPCnErrAddCommands3_Text = "Informa��es sobre esta &tela";
        var L_ISPCnErrAddCommands4_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

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
        var L_ISPCnErrIntro1_Text = "Sua conex�o telef�nica para configurar o servi�o de Internet foi interrompida.";
        Agent_Speak(L_ISPCnErrIntro1_Text);

        Agent_MoveToElement(g.document.all("txtBullet1"),"Left");
        
        var L_ISPCnErrIntro2_Text = "Pode haver v�rias raz�es para isso.";
        Agent_Speak(L_ISPCnErrIntro2_Text);

        var L_ISPCnErrIntro3_Text = "Em primeiro lugar, pode ser que voc� n�o estivesse usando ativamente a sua conex�o por um bom tempo e tenha sido desconectado automaticamente.";
        Agent_Speak(L_ISPCnErrIntro3_Text);

        var L_ISPCnErrIntro4_Text = "Em segundo lugar, algu�m pode ter tentado usar a linha telef�nica enquanto voc� estava conectado.";
        Agent_Speak(L_ISPCnErrIntro4_Text);

        var L_ISPCnErrIntro5_Text = "Em terceiro lugar, se voc� tiver o recurso de chamada em espera, talvez voc� tenha sido interrompido por uma chamada de entrada.";
        Agent_Speak(L_ISPCnErrIntro5_Text);

        Agent_GestureAtElement(g.document.all("Callwait"),"Left");

        var L_ISPCnErrIntro6_Text = "Se o seu servi�o telef�nico incluir chamada em espera e voc� souber o n�mero para desativ�-la, digite-o aqui.";
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

        var L_ISPCnErrIntro7_Text = "Em seguida, clique no bot�o 'Rediscar' para tentar se reconectar.";
        Agent_Speak(L_ISPCnErrIntro7_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("txtBullet1"),"Left");

        var L_ISPCnErrWhatToDoNext1_Text = "Se voc� tiver resolvido todos os poss�veis problemas,";
        Agent_Speak(L_ISPCnErrWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPCnErrWhatToDoNext2_Text = "e quiser tentar se conectar de novo,";
        Agent_Speak(L_ISPCnErrWhatToDoNext2_Text);

        var L_ISPCnErrWhatToDoNext3_Text = "clique no bot�o 'Rediscar' para tentar novamente.";
        Agent_Speak(L_ISPCnErrWhatToDoNext3_Text);
}

function Agent_ISPCnErrCommand_HowToTurnOffCallWaiting() 
{
        Agent_GestureAtElement(g.document.all("Callwait"),"Left");
        
        var L_ISPCnErrHowToTurnOffCallWaiting1_Text = "Se voc� quiser desativar o servi�o de chamada em espera enquanto estiver fazendo esta conex�o,";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting1_Text);

        var L_ISPCnErrHowToTurnOffCallWaiting2_Text = "digite o n�mero aqui.";
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

        var L_ISPCnErrHowToTurnOffCallWaiting3_Text = "Em seguida, clique no bot�o 'Rediscar'.";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_HowToMoveOn() 
{
        var L_ISPCnErrHowToMoveOn1_Text = "Para continuar, escolha se deseja reconectar ou ignorar esta etapa.";
        Agent_Speak(L_ISPCnErrHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrHowToMoveOn2_Text = "Clique no bot�o 'Rediscar' para tentar reconectar-se,";
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

        var L_ISPCnErrHowToMoveOn3_Text = "ou clique no bot�o 'Ignorar' para continuar sem tentar novamente.";
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

        var L_ISPHandShakeAddCommands1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_ISPHandShakeAddCommands2_Text = "Informa��es sobre esta &tela";
        var L_ISPHandShakeAddCommands3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_WhatToDoNext", L_ISPHandShakeAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_AboutThisScreen", L_ISPHandShakeAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_HowToMoveOn", L_ISPHandShakeAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPHandShakeIntro() {

}

function Agent_ISPHandShakeCommand_AboutThisScreen() 
{
        var L_ISPHandShakeIntro1_Text = "Os servi�os para uma nova conta com o provedor de servi�os de Internet selecionado n�o est�o dispon�veis no momento.";
        Agent_Speak(L_ISPHandShakeIntro1_Text);

        var L_ISPHandShakeIntro2_Text = "N�o tenho certeza do motivo.";
        Agent_Speak(L_ISPHandShakeIntro2_Text);

        var L_ISPHandShakeIntro3_Text = "No entanto, voc� pode aguardar alguns minutos e depois rediscar.";
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
        
        var L_ISPHandShakeIntro4_Text = "Ou voc� pode ignorar a configura��o do seu servi�o de Internet no momento.";
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

        var L_ISPHandShakeWhatToDoNext1_Text = "Espere alguns minutos e clique no bot�o 'Rediscar'.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeWhatToDoNext2_Text = "Se voc� j� tiver tentado isso algumas vezes,";
        Agent_Speak(L_ISPHandShakeWhatToDoNext2_Text);
        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeWhatToDoNext3_Text = "voc� pode clicar no bot�o 'Ignorar' para continuar sem configurar o servi�o de Internet no momento.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPHandShakeCommand_HowToMoveOn() 
{
        var L_ISPHandShakeHowToMoveOn1_Text = "Aguarde alguns minutos,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPHandShakeHowToMoveOn2_Text = "e clique no bot�o 'Rediscar' para tentar conectar-se novamente.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeHowToMoveOn3_Text = "Ou, se j� tiver tentado isso,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeHowToMoveOn4_Text = "voc� pode continuar sem estabelecer o servi�o de Internet clicando no bot�o 'Ignorar'.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn4_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPInsAddCommands() {

        var L_ISPInsAddCommands1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_ISPInsAddCommands2_Text = "Informa��es sobre esta &tela";
        var L_ISPInsAddCommands3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_WhatToDoNext", L_ISPInsAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_AboutThisScreen", L_ISPInsAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_HowToMoveOn", L_ISPInsAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPInsIntro() {

}

function Agent_ISPInsCommand_AboutThisScreen() 
{
        var L_ISPInsIntro1_Text = "O Windows n�o conseguiu conectar-se � Internet atrav�s do provedor de servi�os selecionado.";
        Agent_Speak(L_ISPInsIntro1_Text);

        var L_ISPInsIntro2_Text = "Se voc� tiver problemas para conectar-se � Internet com seu navegador ou para enviar e receber mensagens eletr�nicas,";
        Agent_Speak(L_ISPInsIntro2_Text);

        var L_ISPInsIntro3_Text = "contate o suporte t�cnico do provedor de servi�os para obter assist�ncia.";
        Agent_Speak(L_ISPInsIntro3_Text);
}

function Agent_ISPInsCommand_WhatToDoNext() 
{
        var L_ISPInsWhatToDoNext1_Text = "Clique no bot�o 'Avan�ar' para continuar.";
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

        var L_ISPInsHowToMoveOn1_Text = "Basta clicar no bot�o 'Avan�ar'.";
        Agent_Speak(L_ISPInsHowToMoveOn1_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPNoAnwAddCommands() {

        var L_ISPNoAnwAddCommands1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_ISPNoAnwAddCommands2_Text = "&O que fazer se o n�mero do telefone estiver errado";
        var L_ISPNoAnwAddCommands3_Text = "Informa��es sobre esta &tela";
        var L_ISPNoAnwAddCommands4_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoNext", L_ISPNoAnwAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect", L_ISPNoAnwAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_AboutThisScreen", L_ISPNoAnwAddCommands3_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_HowToMoveOn", L_ISPNoAnwAddCommands4_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPNoAnwCommand_AboutThisScreen() 
{
        var L_ISPNoAnwIntro1_Text = "O n�mero do telefone que tentamos discar n�o respondeu.";
        Agent_Speak(L_ISPNoAnwIntro1_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro2_Text = "Verifique se o n�mero est� correto.";
        Agent_Speak(L_ISPNoAnwIntro2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwIntro3_Text = "Se estiver correto, aguarde alguns minutos,";
        Agent_Speak(L_ISPNoAnwIntro3_Text);

        var L_ISPNoAnwIntro4_Text = "Clique no bot�o 'Rediscar' para tentar novamente.";
        Agent_Speak(L_ISPNoAnwIntro4_Text);

        var L_ISPNoAnwIntro5_Text = "No entanto, se o n�mero estiver incorreto,";
        Agent_Speak(L_ISPNoAnwIntro5_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro6_Text = "Clique aqui para fazer corre��es.";
        Agent_Speak(L_ISPNoAnwIntro6_Text);

        Agent_Play("RestPose");

        var L_ISPNoAnwIntro7_Text = "E, em seguida, clique no bot�o 'Rediscar'.";
        Agent_Speak(L_ISPNoAnwIntro7_Text);
}

function Agent_ISPNoAnwCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwWhatToDoNext1_Text = "Caso voc� tenha verificado o n�mero do telefone aqui e ele pare�a correto,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwWhatToDoNext2_Text = "e estiver pronto para reconectar-se,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext2_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwWhatToDoNext3_Text = "clique no bot�o 'Rediscar'.";
        Agent_Speak(L_ISPNoAnwWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwPhoneNumberIncorrect1_Text = "Se o n�mero do telefone aqui n�o estiver correto,";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect1_Text);

        var L_ISPNoAnwPhoneNumberIncorrect2_Text = "clique na caixa de texto.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwPhoneNumberIncorrect3_Text = "Uma linha vertical intermitente, conhecida como ponto de inser��o, dever� aparecer na caixa.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect3_Text);

        var L_ISPNoAnwPhoneNumberIncorrect4_Text = "O que voc� digitar ser� inserido no ponto de inser��o.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect4_Text);

        var L_ISPNoAnwPhoneNumberIncorrect5_Text = "Voc� pode mover o ponto de inser��o na caixa de texto se pressionar a seta para a esquerda ou a seta para a direita no teclado.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect5_Text);

        var L_ISPNoAnwPhoneNumberIncorrect6_Text = "E voc� pode usar a tecla Delete para remover os caracteres que aparecerem depois do ponto de inser��o.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect6_Text);

        var L_ISPNoAnwPhoneNumberIncorrect7_Text = "Ou use a tecla Backspace para remover os caracteres que est�o antes do ponto de inser��o.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect7_Text);
}

function Agent_ISPNoAnwCommand_HowToMoveOn() 
{
        var L_ISPNoAnwHowToMoveOn1_Text = "Para continuar, escolha entre se reconectar ou ignorar a configura��o do seu servi�o de Internet.";
        Agent_Speak(L_ISPNoAnwHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwHowToMoveOn2_Text = "Clique no bot�o 'Rediscar' para tentar reconectar-se.";
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

        var L_ISPNoAnwHowToMoveOn3_Text = "ou clique no bot�o 'Ignorar' para continuar sem estabelecer o servi�o de Internet.";
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

        var L_ISPPhBsyAddCommands1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_ISPPhBsyAddCommands2_Text = "O que fazer se o n�mero do &telefone estiver errado";
        var L_ISPPhBsyAddCommands3_Text = "Informa��es sobre esta &etapa";

        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoNext", L_ISPPhBsyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect", L_ISPPhBsyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_AboutThisScreen", L_ISPPhBsyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPPhBsyIntro() {

}

function Agent_ISPPhBsyCommand_AboutThisScreen() 
{
        var L_ISPPhBsyIntro1_Text = "O Windows n�o conseguiu conectar-se ao provedor de servi�os de Internet selecionado.";
        Agent_Speak(L_ISPPhBsyIntro1_Text);

        var L_ISPPhBsyIntro2_Text ="Talvez a linha telef�nica esteja ocupada ou o provedor de servi�os de Internet esteja com problemas t�cnicos.";
        Agent_Speak(L_ISPPhBsyIntro2_Text);

        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyIntro3_Text = "Verifique se o n�mero est� correto.";
        Agent_Speak(L_ISPPhBsyIntro3_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro4_Text = "Se estiver correto, aguarde alguns minutos,";
        Agent_Speak(L_ISPPhBsyIntro4_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPPhBsyIntro5_Text = "Clique no bot�o 'Rediscar' para tentar discar novamente.";
        Agent_Speak(L_ISPPhBsyIntro5_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro6_Text = "No entanto, se o n�mero estiver incorreto,";
        Agent_Speak(L_ISPPhBsyIntro6_Text);

        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyIntro7_Text = "Clique aqui para tentar discar um outro n�mero no cat�logo telef�nico.";
        Agent_Speak(L_ISPPhBsyIntro7_Text);

        Agent_Play("RestPose");

        var L_ISPPhBsyIntro8_Text = "E, em seguida, clique no bot�o 'Rediscar'.";
        Agent_Speak(L_ISPPhBsyIntro8_Text);
}

function Agent_ISPPhBsyCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyWhatToDoNext1_Text = "Se voc� tiver verificado o n�mero do telefone e ele parecer correto,";
        Agent_Speak(L_ISPPhBsyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");    
    
        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyWhatToDoNext2_Text = "ou se tiver optado por discar um outro n�mero,";
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

        var L_ISPPhBsyWhatToDoNext4_Text = "clique no bot�o 'Rediscar' para tentar reconectar-se.";
        Agent_Speak(L_ISPPhBsyWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_ISPPhBsyPhoneNumberIncorrect1_Text = "Se o n�mero do telefone aqui n�o estiver correto,";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

    var L_ISPPhBsyPhoneNumberIncorrect2_Text = "Clique neste bot�o de op��o para tentar discar um outro n�mero no cat�logo telef�nico.";
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

    var L_ISPPhBsyPhoneNumberIncorrect3_Text = "Clique no bot�o 'Rediscar' quando voc� estiver pronto para tentar se reconectar.";
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

    var L_FinishAddCommands1_Text = "Informa��es sobre esta &etapa";  
    var L_FinishAddCommands2_Text = "C&omo registrar-me da �rea de trabalho?";    
    var L_FinishAddCommands3_Text = "Co&mo ativar o Windows da �rea de trabalho?";    
    var L_FinishAddCommands4_Text = "&Como acessar a Internet?";    
    var L_FinishAddCommands5_Text = "&Qual � o pr�ximo passo?";

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
    var L_FinishAboutThisStep1_Text = "Parab�ns! Voc� concluiu o processo!";
    Agent_Speak(L_FinishAboutThisStep1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishAboutThisStep2_Text = "Para come�ar a usar o Windows agora, clique no bot�o 'Concluir',";
    Agent_Speak(L_FinishAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_FinishAboutThisStep3_Text = "Para fazer um tour pelos novos e emocionantes recursos do Windows XP, clique em 'Ajuda e suporte' no menu 'Iniciar' e digite \"tour\" na caixa 'Pesquisar'.";
    Agent_Speak(L_FinishAboutThisStep3_Text);
}

function Agent_FinishHowToRegister() 
{
    var L_FinishHowToRegister1_Text = "Se voc� tiver ignorado o registro anteriormente durante o processo, pode registrar sua c�pia do Windows a qualquer momento clicando em 'Executar' no menu 'Iniciar' e digitando regwiz /r.";
    Agent_Speak(L_FinishHowToRegister1_Text);
        
    var L_FinishHowToRegister2_Text = "Se voc� se esquecer destas etapas, clique em 'Ajuda e suporte' no menu 'Iniciar' para obter respostas �s suas perguntas, assim como outras informa��es relevantes.";
    Agent_Speak(L_FinishHowToRegister2_Text);
}

function Agent_FinishHowToActivate() 
{
    var L_FinishHowToActivate1_Text = "Se voc� tiver ignorado a ativa��o anteriormente durante o processo, um lembrete ser� exibido na �rea de trabalho do Windows periodicamente.";
    Agent_Speak(L_FinishHowToActivate1_Text);
        
    var L_FinishHowToActivate2_Text = "Voc� deve ativar o Windows dentro do per�odo de ativa��o especificado para continuar a us�-lo.";
    Agent_Speak(L_FinishHowToActivate2_Text);

    var L_FinishHowToActivate3_Text = "Se n�o desejar aguardar o lembrete, voc� pode executar o 'Assistente de ativa��o do produto' clicando em 'Ativar o Windows' no menu 'Iniciar'.";
    Agent_Speak(L_FinishHowToActivate3_Text);

    var L_FinishHowToActivate4_Text = "Se voc� se esquecer destas etapas, clique em 'Ajuda e suporte' no menu 'Iniciar' para obter respostas �s suas perguntas, assim como outras informa��es relevantes.";
    Agent_Speak(L_FinishHowToActivate4_Text);
}

function Agent_FinishHowToAccessInternet() 
{
    var L_FinishHowToAccessInternet1_Text = "Se voc� j� tiver configurado o computador para acessar a Internet, basta clicar em Internet na parte superior do menu 'Iniciar' na �rea de trabalho do Windows.";
    Agent_Speak(L_FinishHowToAccessInternet1_Text);
        
    var L_FinishHowToAccessInternet2_Text = "Se o computador n�o estiver configurado para acessar a Internet, o 'Assistente para conex�o com a Internet' ser� exibido.";
    Agent_Speak(L_FinishHowToAccessInternet2_Text);

    var L_FinishHowToAccessInternet3_Text = "Siga as etapas do assistente para se conectar � Internet.";
    Agent_Speak(L_FinishHowToAccessInternet3_Text);
}

function Agent_FinishWhatToDoNext() 
{
    var L_FinishWhatToDoNext1_Text = "Voc� terminou de configurar o computador com o Microsoft Windows XP!";
    Agent_Speak(L_FinishWhatToDoNext1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishWhatToDoNext2_Text = "Basta clicar no bot�o 'Concluir'.";
    Agent_Speak(L_FinishWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_FinishWhatToDoNext3_Text = "Para fazer um tour pelos novos e emocionantes recursos do Windows XP, clique em 'Ajuda e suporte' no menu 'Iniciar' e digite \"tour\" na caixa 'Pesquisar'.";
    Agent_Speak(L_FinishWhatToDoNext3_Text);

    var L_FinishWhatToDoNext4_Text = "E aproveite o Windows XP!";
    Agent_Speak(L_FinishWhatToDoNext4_Text);
}






function Agent_MouseTutAddCommands() {

        var L_MouseTutMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_MouseTutMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_MouseTutMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        
        
        

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

        var L_MouseTutIntroTellMeWhatToDoNext1_Text = "Para iniciar, clique no bot�o 'Tutorial'.";
        Agent_Speak(L_MouseTutIntroTellMeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutTellMeAboutThisScreen() 
{
        var L_MouseTutTellMeAboutThisScreen1_Text = "Este � o in�cio de um conjunto de telas para ensin�-lo a usar o mouse do seu computador.";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen1_Text);

        var L_MouseTutTellMeAboutThisScreen2_Text = "Voc� pode seguir este tutorial";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen2_Text);

        var L_MouseTutTellMeAboutThisScreen3_Text = "ou ignor�-lo se j� se sentir confort�vel usando o mouse.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen1_Text = "Para iniciar, clique no bot�o 'Tutorial'.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text = "Ou clique em 'Avan�ar' para ignorar o tutorial.";
        Agent_Speak(L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_MouseTutAAddCommands() {

        var L_MouseTutAMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_MouseTutAMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_MouseTutAMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeWhatToDoNext", L_MouseTutAMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeAboutThisScreen", L_MouseTutAMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeHowToMoveToNextScreen", L_MouseTutAMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutATellMeWhatToDoNext() 
{
        var L_MouseTutAWhatToDoNext1_Text = "Tente mover o mouse para ver como ele move o ponteiro na tela.";
        Agent_Speak(L_MouseTutAWhatToDoNext1_Text);

        var L_MouseTutAWhatToDoNext2_Text = "Mova-o em uma superf�cie plana.";
        Agent_Speak(L_MouseTutAWhatToDoNext2_Text);
}

function Agent_OnMouseTutATellMeAboutThisScreen() 
{

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutATellMeAboutThisScreen1_Text = "Esta tela mostra como usar o mouse para movimentar o ponteiro na tela.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutATellMeAboutThisScreen2_Text = "Basta movimentar o mouse para a direita, para a esquerda, para a frente ou para tr�s.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen2_Text);

        var L_MouseTutATellMeAboutThisScreen3_Text = "Tente!";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen3_Text);
}

function Agent_OnMouseTutATellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutBAddCommands() {

        var L_MouseTutBMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_MouseTutBMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_MouseTutBMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeWhatToDoNext", L_MouseTutBMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeAboutThisScreen", L_MouseTutBMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeHowToMoveToNextScreen", L_MouseTutBMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutBTellMeWhatToDoNext() 
{
        var L_MouseTutBWhatToDoNext1_Text = "Tente levantar o mouse e mov�-lo para outro local.";
        Agent_Speak(L_MouseTutBWhatToDoNext1_Text);

        var L_MouseTutBWhatToDoNext2_Text = "Em seguida, coloque-o outra vez na superf�cie e mova-o novamente.";
        Agent_Speak(L_MouseTutBWhatToDoNext2_Text);
}

function Agent_OnMouseTutBTellMeAboutThisScreen() 
{
        var L_MouseTutBTellMeAboutThisScreen1_Text = "Esta tela mostra como ajustar o mouse se voc� ficar sem espa�o.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen1_Text);

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutBTellMeAboutThisScreen2_Text = "Basta levantar o mouse e mov�-lo para uma posi��o mais confort�vel.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen2_Text);

        Agent_Play("RestPose");

        var L_MouseTutBTellMeAboutThisScreen3_Text = "Quando voc� o colocar de volta na superf�cie e moviment�-lo, o ponteiro seguir� seus movimentos.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen3_Text);

        var L_MouseTutBTellMeAboutThisScreen4_Text = "Observe que o ponteiro se mover� apenas quando voc� movimentar o mouse em uma superf�cie plana!";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutBTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutCAddCommands() {

        var L_MouseTutCMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_MouseTutCMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_MouseTutCMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeWhatToDoNext", L_MouseTutCMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeAboutThisScreen", L_MouseTutCMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeHowToMoveToNextScreen", L_MouseTutCMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_MouseTutCIntro() {
        
}

function Agent_OnMouseTutCTellMeWhatToDoNext() 
{
        var L_MouseTutCWhatToDoNext1_Text = "Tente mover o mouse para mover o ponteiro por cima dos bot�es gr�ficos na tela.";
        Agent_Speak(L_MouseTutCWhatToDoNext1_Text);
}

function Agent_OnMouseTutCTellMeAboutThisScreen() 
{
        var L_MouseTutCTellMeAboutThisScreen1_Text = "Esta tela permite que voc� pratique o movimento do ponteiro com o mouse.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutCTellMeAboutThisScreen2_Text = "Use o mouse para mover o ponteiro sobre os bot�es gr�ficos.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutCTellMeAboutThisScreen3_Text = "Observe que, ao mover o ponteiro sobre o bot�o, a sua apar�ncia muda.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen3_Text);

        var L_MouseTutCTellMeAboutThisScreen4_Text = "O bot�o volta � sua apar�ncia original quando voc� tira o ponteiro de cima da imagem.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutCTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutDAddCommands() {

        var L_MouseTutDMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_MouseTutDMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_MouseTutDMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeWhatToDoNext", L_MouseTutDMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeAboutThisScreen", L_MouseTutDMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeHowToMoveToNextScreen", L_MouseTutDMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutDTellMeWhatToDoNext() 
{
        var L_MouseTutDWhatToDoNext1_Text = "Tente clicar com o bot�o esquerdo do mouse.";
        Agent_Speak(L_MouseTutDWhatToDoNext1_Text);
}

function Agent_OnMouseTutDTellMeAboutThisScreen() 
{
        var L_MouseTutDTellMeAboutThisScreen1_Text = "Esta parte do tutorial do mouse ensina a clicar com o mouse.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen1_Text);

        var elem = g.document.all("image");

        Agent_MoveToElement(elem, "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen2_Text = "Para selecionar um item na tela, use o mouse para passar o ponteiro sobre o item,";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen2_Text);

        Agent_GestureAtElement(g.document.all("image"), "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen3_Text = "e, ent�o, pressione e solte o bot�o do mouse como voc� v� aqui.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutDTellMeAboutThisScreen4_Text = "Isso se  chama clicar!";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutDTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutEAddCommands() {

        var L_MouseTutEMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_MouseTutEMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_MouseTutEMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeWhatToDoNext", L_MouseTutEMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeAboutThisScreen", L_MouseTutEMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeHowToMoveToNextScreen", L_MouseTutEMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutETellMeWhatToDoNext() 
{
        var L_MouseTutEWhatToDoNext1_Text = "Pratique cliques com o bot�o esquerdo do mouse nos bot�es gr�ficos na tela.";
        Agent_Speak(L_MouseTutEWhatToDoNext1_Text);
}

function Agent_OnMouseTutETellMeAboutThisScreen() 
{
        var L_MouseTutETellMeAboutThisScreen1_Text = "Esta tela permite que voc� pratique cliques com o mouse.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutETellMeAboutThisScreen2_Text = "Use o mouse para apontar para um dos bot�es gr�ficos.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutETellMeAboutThisScreen3_Text = "E clique com o bot�o esquerdo do mouse.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen3_Text);

        var L_MouseTutETellMeAboutThisScreen4_Text = "Repita essa a��o com os outros bot�es gr�ficos.";
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

        var L_MouseTutFMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_MouseTutFMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_MouseTutFMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

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
        var L_MouseTutFTellMeAboutThisScreen1_Text = "Muito bem!";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen1_Text);

        var L_MouseTutFTellMeAboutThisScreen2_Text = "At� agora voc� aprendeu a apontar e clicar com o mouse.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen2_Text);

        var L_MouseTutFTellMeAboutThisScreen3_Text = "Agora voc� vai praticar essas habilidades e interagir com outros elementos existentes no Windows ou em p�ginas da Web.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen3_Text);

        var L_MouseTutFTellMeAboutThisScreen4_Text = "Clique no bot�o 'Avan�ar' quando estiver pronto para continuar.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutFTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutGAddCommands() {

        var L_MouseTutGMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_MouseTutGMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_MouseTutGMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeWhatToDoNext", L_MouseTutGMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeAboutThisScreen", L_MouseTutGMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeHowToMoveToNextScreen", L_MouseTutGMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutGPreDisplayMenu() {

        if (g.btnNext.disabled) {

                var L_MouseTutGMenuCommand4_Text = "&Por que o bot�o 'Avan�ar' n�o est� dispon�vel?";

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
        var L_MouseTutGWhyNextNotAvailable1_Text = "O bot�o 'Avan�ar' n�o est� dispon�vel porque voc� ainda n�o escolheu uma cidade.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable1_Text);

		Agent_GestureAtElement(g.document.all("selCity"),"LeftCenter");

        var L_MouseTutGWhyNextNotAvailable2_Text = "Clique primeiro em uma destas cidades.";
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

        var L_MouseTutGWhyNextNotAvailable3_Text = "Em seguida, voc� poder� clicar no bot�o 'Avan�ar' para continuar.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeWhatToDoNext() {
		
		if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "RightCenter");

        var L_MouseTutGWhatToDoNext1_Text = "Clique nas setas para cima e para baixo para rolar pela lista de cidades.";
        Agent_Speak(L_MouseTutGWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

		if (g.document.dir == "rtl")
			Agent_Play("RestPose");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGWhatToDoNext2_Text = "Em seguida, selecione uma cidade clicando em seu nome.";
        Agent_Speak(L_MouseTutGWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutGWhatToDoNext3_Text = "Depois, tente clicar em outras cidades na lista!";
        Agent_Speak(L_MouseTutGWhatToDoNext3_Text);

        Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
}

function Agent_OnMouseTutGTellMeAboutThisScreen() {
        var L_MouseTutGTellMeAboutThisScreen1_Text = "Nesta tela, clique para selecionar um item em uma lista.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGTellMeAboutThisScreen2_Text = "Quando voc� clica em uma cidade nesta lista,";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");
		
        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("imgTable"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("imgTable"), "RightCenter");

        var L_MouseTutGTellMeAboutThisScreen3_Text = "a imagem correspondente aparece aqui.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeHowToMoveToNextScreen() {

        if (g.btnNext.disabled) {

                Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

                var L_MouseTutGHowToMoveToNextScreen1_Text = "Clique em uma cidade aqui,";
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

                var L_MouseTutGHowToMoveToNextScreen2_Text = "Ent�o, clique no obt�o 'Avan�ar'.";
                Agent_Speak(L_MouseTutGHowToMoveToNextScreen2_Text);
    
                Agent_Play("RestPose");
        }

        else
                MouseTut_HowToMoveToNextScreen();

}




function Agent_MouseTutHAddCommands() {

        var L_MouseTutHMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_MouseTutHMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_MouseTutHMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeWhatToDoNext", L_MouseTutHMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeAboutThisScreen", L_MouseTutHMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeHowToMoveToNextScreen", L_MouseTutHMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutHTellMeWhatToDoNext() {

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHWhatToDoNext1_Text = "Selecione uma das op��es clicando no c�rculo ao seu  lado.";
        Agent_Speak(L_MouseTutHWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutHWhatToDoNext2_Text = "Isso vai modificar a exibi��o da imagem.";
        Agent_Speak(L_MouseTutHWhatToDoNext2_Text);

        var L_MouseTutHWhatToDoNext3_Text = "Agora tente clicar em outra op��o!";
        Agent_Speak(L_MouseTutHWhatToDoNext3_Text);
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeAboutThisScreen() {
        var L_MouseTutHTellMeAboutThisScreen1_Text = "Nesta tela, voc� vai selecionar uma op��o quando uma �nica escolha pode ser feita por vez.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHTellMeAboutThisScreen2_Text = "Quando voc� clica nestes c�rculos aqui,";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("cityImg"), "LeftCenter");
        else
			Agent_GestureAtElement(g.document.all("cityImg"), "RightCenter");

        var L_MouseTutHTellMeAboutThisScreen3_Text = "a imagem da fotografia muda.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutIAddCommands() {

        var L_MouseTutIMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_MouseTutIMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_MouseTutIMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeWhatToDoNext", L_MouseTutIMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeAboutThisScreen", L_MouseTutIMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeHowToMoveToNextScreen", L_MouseTutIMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutITellMeWhatToDoNext() {

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutIWhatToDoNext1_Text = "Clique em uma ou mais op��es e veja o efeito na foto.";
        Agent_Speak(L_MouseTutIWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutIWhatToDoNext2_Text = "Clique em uma op��o novamente para desmarc�-la.";
        Agent_Speak(L_MouseTutIWhatToDoNext2_Text);

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeAboutThisScreen() {
        var L_MouseTutITellMeAboutThisScreen1_Text = "Em certos casos, voc� pode selecionar v�rios itens em um conjunto de op��es.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen1_Text);

        var L_MouseTutITellMeAboutThisScreen2_Text = "Nesta tela, voc� pode escolher estilos de exibi��o diferentes para sua imagem.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen2_Text);

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutITellMeAboutThisScreen3_Text = "Basta clicar nas caixas localizadas ao lado destas op��es.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutJAddCommands() {

        var L_MouseTutJMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_MouseTutJMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_MouseTutJMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

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

        var L_MouseTutJWhatToDoNext1_Text = "Clique nesta caixa";
        Agent_Speak(L_MouseTutJWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutJWhatToDoNext2_Text = "e digite o texto que dever� aparecer como legenda.";
        Agent_Speak(L_MouseTutJWhatToDoNext2_Text);
}

function Agent_OnMouseTutJTellMeAboutThisScreen() {
        var L_MouseTutJTellMeAboutThisScreen1_Text = "Voc� tamb�m pode personalizar uma op��o com suas pr�prias palavras.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen1_Text);

        var L_MouseTutJTellMeAboutThisScreen2_Text = "Nesta tela voc� pode digitar uma legenda para a imagem.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen2_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(g.document.all("caption"), "Left");
		else
			Agent_GestureAtElement(g.document.all("CaptionLabel"), "Left");

        var L_MouseTutJTellMeAboutThisScreen3_Text = "Basta clicar nesta caixa e digitar a legenda.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutJTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutKAddCommands() {

        var L_MouseTutKMenuCommand1_Text = "Informa��es sobre o pr�ximo pa&sso";
        var L_MouseTutKMenuCommand2_Text = "Informa��es sobre esta &tela";
        var L_MouseTutKMenuCommand3_Text = "Informa��es sobre co&mo passar para a pr�xima tela";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeWhatToDoNext", L_MouseTutKMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeAboutThisScreen", L_MouseTutKMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeHowToMoveToNextScreen", L_MouseTutKMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutKTellMeWhatToDoNext() {
        var L_MouseTutKWhatToDoNext1_Text = "Parab�ns! Voc� concluiu o tutorial do mouse!";
        Agent_Speak(L_MouseTutKWhatToDoNext1_Text);

        var L_MouseTutKWhatToDoNext2_Text = "Clique no bot�o 'Avan�ar' para passar para a pr�xima tela.";
        Agent_Speak(L_MouseTutKWhatToDoNext2_Text);
}

function Agent_OnMouseTutKTellMeAboutThisScreen() {
        var L_MouseTutKTellMeAboutThisScreen1_Text = "Bom trabalho! A foto das suas f�rias est� pronta!";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen1_Text);
        
        var L_MouseTutKTellMeAboutThisScreen2_Text = "Voc� concluiu o tutorial do mouse.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen2_Text);

        var L_MouseTutKTellMeAboutThisScreen3_Text = "Para obter um tutorial do mouse mais completo, abordando a��es como arrastar, redimensionar e usar o bot�o direito do mouse, consulte a 'Ajuda' ao iniciar o Windows pela primeira vez.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutKTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function MouseTut_WhatToDoNext() 
{
        var L_MouseTutTellMeWhatToDoNext1_Text = "Basta clicar no bot�o 'Avan�ar' para passar para a pr�xima tela,";
        Agent_Speak(L_MouseTutTellMeWhatToDoNext1_Text);

        var L_MouseTutTellMeWhatToDoNext2_Text = "ou clicar no bot�o 'Ignorar' para ignorar o restante deste tutorial.";
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

        var L_MouseTutTellMeHowToMoveToNextScreen1_Text = "Clique em 'Avan�ar' para mover para a pr�xima tela,";
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

        var L_MouseTutTellMeHowToMoveToNextScreen2_Text = "ou clique em 'Ignorar' para ignorar este tutorial.";
        Agent_Speak(L_MouseTutTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_2nicsAddCommands() 
{
    var L_2nicsMenuCommand1_Text = "Informa��es sobre esta &etapa";
    
    g_AgentCharacter.Commands.Add("Agent_On2nicsAboutThisStep", L_2nicsMenuCommand1_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_On2nicsAboutThisStep() 
{
    var L_2nicsAboutThisScreen1_Text = "Esta tela explica que h� mais de uma maneira poss�vel de conectar o computador � Internet.";
	Agent_Speak(L_2nicsAboutThisScreen1_Text);
	
    var L_2nicsAboutThisScreen2_Text = "Voc� pode escolher a conex�o que deseja usar depois que terminar de configurar o Windows.";
	Agent_Speak(L_2nicsAboutThisScreen2_Text);
}



function Agent_UserNameAddCommands() 
{
    var L_UserNameCommand1_Text = "&Informa��es sobre esta etapa";
    var L_UserNameCommand2_Text = "Ond&e aparece o meu nome?";
    var L_UserNameCommand3_Text = "C&omo alterar meu nome mais tarde?";
    var L_UserNameCommand4_Text = "&Qual � o pr�ximo passo?";
    
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
    var L_UserNameAboutThisStep1_Text = "Esta � a tela em que voc� se identifica pelo nome e sobrenome para que o Windows o reconhe�a quando voc� fizer logon.";
	Agent_Speak(L_UserNameAboutThisStep1_Text);
}

function Agent_OnUserNameWhereIsName() 
{
    var L_UserNameWhereIsName1_Text = "Seu nome aparecer� na tela de boas-vindas, que � exibida quando voc� inicia o Windows.";
	Agent_Speak(L_UserNameWhereIsName1_Text);
	
    var L_UserNameWhereIsName2_Text = "Tamb�m aparecer� na parte superior do menu 'Iniciar' quando voc� tiver conectado.";
	Agent_Speak(L_UserNameWhereIsName2_Text);
	
    var L_UserNameWhereIsName3_Text = "Se outra pessoa fizer logon no computador e abrir a pasta 'Meus documentos', seu nome aparecer� no nome da pasta.";
	Agent_Speak(L_UserNameWhereIsName3_Text);
	
    var L_UserNameWhereIsName4_Text = "Por exemplo, a pasta ser� mostrada como \"Documentos do Paulo\" para que os outros usu�rios saibam que essa pasta pertence a voc�.";
	Agent_Speak(L_UserNameWhereIsName4_Text);
	
    var L_UserNameWhereIsName5_Text = "Seu nome tamb�m aparecer� na lista de usu�rios quando voc� clicar em 'Painel de controle' no menu 'Iniciar' e clicar em 'Contas de usu�rio'.";
	Agent_Speak(L_UserNameWhereIsName5_Text);
}

function Agent_OnUserNameHowToChangeName() 
{
    var L_UserNameHowToChangeName1_Text = "Para alterar o seu nome uma vez que tenha feito o logon no Windows, clique em 'Painel de controle' no menu 'Iniciar'.";
	Agent_Speak(L_UserNameHowToChangeName1_Text);
	
    var L_UserNameHowToChangeName2_Text = "Clique em 'Contas de usu�rio'.";
	Agent_Speak(L_UserNameHowToChangeName2_Text);
	
    var L_UserNameHowToChangeName3_Text = "Voc� poder� alterar seu nome, assim como os nomes de outros usu�rios do computador.";
	Agent_Speak(L_UserNameHowToChangeName3_Text);
}

function Agent_OnUserNameWhatToDoNext() 
{
    var L_UserNameWhatToDoNext1_Text = "Clique no bot�o 'Avan�ar' para tentar se reconectar � Internet.";
	Agent_Speak(L_UserNameWhatToDoNext1_Text);
	
    var L_UserNameWhatToDoNext2_Text = "Voc� pode tamb�m clicar em 'Ignorar' para continuar sem se conectar � Internet.";
	Agent_Speak(L_UserNameWhatToDoNext2_Text);
}
