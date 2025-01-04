



var L_PhoneNumberLegit_Text = "\\map=\"one \\pau=100\\ eight hundred R U le jit\"=\"1-800-R U LEGIT\"\\";


var g_strRegionSetting = "";
var g_strKeyboardSetting = "";
var g_strLangSetting = " ";



function Agent_AddCommonCommands() 
{
    g_AgentCharacter.Commands.RemoveAll();

    var L_AddCommonCommands1_Text = "&Zamknij menu";

    g_AgentCharacter.Commands.Add("CloseMenu", L_AddCommonCommands1_Text);
        
    if (g_bAgentShowSpecialISPCommands) 
    {
        
		var L_AddCommonCommands2_Text = "Podaj informacj� &o zapisywaniu do Internetu";
		var L_AddCommonCommands3_Text = "&Uruchom ponownie zapisywanie do Internetu";
		var L_AddCommonCommands4_Text = "&Pomi� zapisywanie do Internetu";

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
        var L_AddAssistantanceCommand1_Text = "Do kogo mog� zadzwoni� po &pomoc?";       

        g_AgentCharacter.Commands.Add("Agent_OnCommand_AboutAssistance", L_AddAssistantanceCommand1_Text);
    }
}

function Agent_OnCommand_AboutAssistance() 
{

    Agent_StopAll();

    var L_AboutAssistance1_Text = "Skontaktuj si� z producentem komputera pod adresem %s.";
    var re = /%s/i;
    var L_AboutAssistance2_Text = "Skontaktuj si� z producentem komputera.";

    
    

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
            Agent_Speak(L_AboutAssistance2_Text);
    else
            Agent_Speak(L_AboutAssistance1_Text.replace(re, strPhoneNumber));

    Agent_Play("ReadReturn");
}

function Agent_AddWhatToDoNextCommand() 
{
    var L_AddWhatToDoNextCommand1_Text = "&Co mam robi� dalej?";
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

        var L_WhatToDoNext1_Text = "Aby kontynuowa�, kliknij przycisk Dalej.";
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

        var L_WhatToDoNext2_Text = "Aby powr�ci� do poprzedniego kroku, kliknij przycisk Wstecz.";
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

        var L_WhatToDoNext3_Text = "Mo�esz tak�e pomin�� ten krok, klikaj�c przycisk Pomi�.";
        Agent_Speak(L_WhatToDoNext3_Text);
        
        Agent_Play("RestPose");
    }       
}

function Agent_DoSpecialISPCommand1() 
{
	
	
			
	Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
			
	var L_ISPSpecialTellMeAboutInternetSignup1_Text = "W tej chwili trwa proces zapisywania si� w celu uzyskania dost�pu do Internetu.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup1_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup2_Text = "Je�li masz problemy z kontynuacj�, kliknij mnie lub naci�nij klawisz F1.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup2_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup3_Text = "Wy�wietl� polecenia mojego menu, kt�re mo�esz wybra�, aby rozpocz�� ponownie lub przej�� do nast�pnej sekcji.";
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

    var L_EncourageNextButton1_Text = "Kliknij przycisk Dalej. | Po prostu kliknij przycisk Dalej! | Prosz�, kliknij przycisk Dalej. | Kliknij przycisk Dalej, aby przenie�� si� do nast�pnego kroku.";
    Agent_Speak(L_EncourageNextButton1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnF1() 
{
    var L_OnF1_Text = "Jak mog� pom�c? | W jaki spos�b mog� pom�c?";
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

    var L_PreWelcomeScript1_Text = "System Windows XP - Zapraszamy!";
    Agent_Speak(L_PreWelcomeScript1_Text);

    var L_PreWelcomeScript2_Text = "Jestem tutaj, aby pom�c w skonfigurowaniu nowego komputera.";
    Agent_Speak(L_PreWelcomeScript2_Text);

    var L_PreWelcomeScript3_Text = "Mog� udziela� wyja�nie� podczas wykonywania czynno�ci.";
    Agent_Speak(L_PreWelcomeScript3_Text);
                
    Agent_MoveToElement(document.all("AssistImg"), "LeftCenter"); 
    
    

    var L_PreWelcomeScript4_Text = "Za ka�dym razem, gdy b�dziesz potrzebowa� pomocy, po prostu kliknij mnie mysz� lub naci�nij klawisz F1.";
    Agent_Speak(L_PreWelcomeScript4_Text);
    
    Agent_Play("PointLeft");

    var L_PreWelcomeScript5_Text = "B�d� tutaj, aby s�u�y� Ci pomoc�.";
    Agent_Speak(L_PreWelcomeScript5_Text);
    
    Agent_Play("RestPose");

    g_AgentRequestHideImage = g_AgentCharacter.Hide();
}



function Agent_WelcomeAddCommands() 
{
    
    
    

    var L_WelcomeAddCommands1_Text = "&Powiedz mi co� o tym procesie";
    var L_WelcomeAddCommands2_Text = "&Co mam robi� dalej?";

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

    var L_WelcomeWhatToDoNext1_Text = "Je�li mo�esz ju� zacz��, kliknij przycisk Dalej.";
    Agent_Speak(L_WelcomeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnWelcomeCommand_AboutProcess() 
{
    Agent_StopAll();

    var L_AboutProcess1_Text = "Za mn� widoczny jest pierwszy z serii ekran�w, zaprojektowanych w celu u�atwienia Ci skonfigurowania komputera zgodnie z upodobaniami.";
    Agent_Speak(L_AboutProcess1_Text);

    var L_AboutProcess2_Text = "Ka�dy ekran wymaga dokonania wyboru lub wpisania pewnych informacji, albo radzi, co robi� dalej.";
    Agent_Speak(L_AboutProcess2_Text);

    var L_AboutProcess3_Text = "Oto kr�tki przegl�d krok�w, kt�re zostan� wykonane w ci�gu najbli�szych kilku minut:";
    Agent_Speak(L_AboutProcess3_Text);

    var L_AboutProcess4_Text = "Po pierwsze, musimy sprawdzi�, czy sprz�t komputerowy, taki jak g�o�niki, klawiatura i zegar, dzia�a w�a�ciwie.";
    Agent_Speak(L_AboutProcess4_Text);

    var L_AboutProcess5_Text = "Musimy tak�e upewni� si�, �e komputer jest do��czony do sieci, je�li tak ma by�.";
    Agent_Speak(L_AboutProcess5_Text);


    var L_AboutProcess6_Text = "Po drugie, przejrzymy umow� licencyjn� okre�laj�c� warunki u�ytkowania systemu %1.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess6_Text, g_ProductName));
    
    if (!window.external.get_RetailOOBE()) 
    {
    var L_AboutProcess7_Text = "Je�li komputer ma dzia�aj�cy modem lub po��czenie sieciowe, uzyskasz mo�liwo�� zarejestrowania si� w firmie Microsoft i %1, aby m�c otrzymywa� od nas informacje na temat aktualizacji produkt�w i potencjalnie interesuj�cych Ci� ofert.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess7_Text, g_OEMNameStr));
    } 
    else 
    {    
    var L_AboutProcess7_Text = "Je�li komputer ma dzia�aj�cy modem lub po��czenie sieciowe, uzyskasz mo�liwo�� zarejestrowania si� w firmie Microsoft, aby m�c otrzymywa� informacje na temat aktualizacji produkt�w i potencjalnie interesuj�cych Ci� ofert.";
    Agent_Speak(L_AboutProcess7_Text);
    }       

    var L_AboutProcess8_Text = "Uzyskasz te� mo�liwo�� zweryfikowania autentyczno�ci posiadanej kopii systemu %1 w celu zyskania pewno�ci, �e korzystasz z legalnej kopii.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess8_Text, g_ProductName));

    var L_AboutProcess9_Text = "Po trzecie, je�li zechcesz, mog� pom�c Ci po��czy� si� z Internetem.";
    Agent_Speak(L_AboutProcess9_Text); 

    var L_AboutProcess10_Text = "Je�li zdecydujesz si� na pomini�cie tego kroku, mo�esz zawsze samodzielnie po��czy� si� p�niej.";
    Agent_Speak(L_AboutProcess10_Text);

    var L_AboutProcess11_Text = "Po czwarte, pomog� Ci dostosowa� ten komputer dla ka�dej osoby, kt�ra b�dzie z niego korzysta�. ";
    Agent_Speak(L_AboutProcess11_Text);

    var L_AboutProcess12_Text = "To tyle. Niewiele pozosta�o do zrobienia, wi�c zaczynajmy!";
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

    var L_AboutProcess13_Text = "Aby rozpocz��, kliknij przycisk Dalej.";
    Agent_Speak(L_AboutProcess13_Text);
    
    Agent_Play("RestPose");
}


                                                       

function Agent_TimeZoneAddCommands() 
{
    var L_TimeZoneCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_TimeZoneCommand2_Text = "&Jak mam wybra� swoj� stref� czasow�?";

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
        var L_TimeZoneMenuCommand3_Text = "Co to jest &automatyczne uwzgl�dnianie zmian czasu?";

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
    var L_ExplainTimeZoneStep1_Text = "Podaj stref� czasow�, kt�rej b�dzie u�ywa� ten komputer, aby system Windows m�g� odpowiednio ustawi� zegar komputera.";
    Agent_Speak(L_ExplainTimeZoneStep1_Text);

    var L_ExplainTimeZoneStep2_Text = "Je�li chcesz, system Windows mo�e u�ywa� funkcji automatycznego uwzgl�dniania zmian czasu, aby automatycznie aktualizowa� zegar po zmianie czasu.";
    Agent_Speak(L_ExplainTimeZoneStep2_Text);

    var L_ExplainTimeZoneStep3_Text = "To jest ostatni krok dotycz�cy sprz�tu.";
    Agent_Speak(L_ExplainTimeZoneStep3_Text);

    var L_ExplainTimeZoneStep4_Text = "Nast�pnie przejdziemy do umowy licencyjnej.";
    Agent_Speak(L_ExplainTimeZoneStep4_Text);
    
}

function Agent_OnTimeZoneCommand_SelectZone() 
{
    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone1_Text = "Strefy czasowe na tej li�cie wy�wietlane s� jako Czas Uniwersalny Greenwich, czyli GMT, skorygowany o pewn� liczb� godzin.";
    Agent_Speak(L_TellUserHowToSelectTimeZone1_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone2_Text = "Kliknij tutaj lub naciskaj klawisz Tab na klawiaturze, a� do osi�gni�cia tego miejsca. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone2_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Right");

    var L_TellUserHowToSelectTimeZone3_Text = "Nast�pnie, w celu przewini�cia stref czasowych, kliknij te przyciski ma�ych strza�ek lub u�yj klawiszy strza�ki w g�r� i strza�ki w d� na klawiaturze. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone3_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone4_Text = "Je�li zobaczysz potrzebn� stref� czasow�, kliknij j� lub naci�nij klawisz Enter na klawiaturze.";
    Agent_Speak(L_TellUserHowToSelectTimeZone4_Text);

    var L_TellUserHowToSelectTimeZone5_Text = "Wybrana strefa czasowa zostanie pod�wietlona.";
    Agent_Speak(L_TellUserHowToSelectTimeZone5_Text);

    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserHowToSelectTimeZone6_Text = "Je�li mieszkasz w regionie, gdzie stosowane s� okresowe zmiany czasu, umie�� wska�nik tutaj i kliknij jeden raz, aby zaznaczy� t� opcj�.";
    Agent_Speak(L_TellUserHowToSelectTimeZone6_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone7_Text = "Dwa razy w roku system Windows automatycznie dopasuje zegar komputera.";
    Agent_Speak(L_TellUserHowToSelectTimeZone7_Text);
    
}

function Agent_OnTimeZoneCommand_DaylightSavings() 
{
    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserAboutDaylightOption1_Text = "W niekt�rych strefach czasowych zegary s� w pewnych porach roku przestawiane do przodu lub do ty�u w celu dopasowania ich do r�nic w d�ugo�ci dnia.";
    Agent_Speak(L_TellUserAboutDaylightOption1_Text);
    
    Agent_Play("RestPose");

    var L_TellUserAboutDaylightOption2_Text = "Je�li chcesz, aby w takich przypadkach system Windows automatycznie dopasowywa� zegar komputera, zaznacz t� opcj�, umieszczaj�c tutaj wska�nik i klikaj�c raz.";
    Agent_Speak(L_TellUserAboutDaylightOption2_Text);

}



function Agent_OEMHWAddCommands() 
{
    var L_OEMHWMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_OEMHWMenuCommand2_Text = "Ja&k mog� sprawdzi�, czy system d�wi�kowy dzia�a?";
    var L_OEMHWMenuCommand3_Text = "&Co robi�, je�li d�wi�k nie dzia�a?";
    var L_OEMHWMenuCommand4_Text = "Jak &mog� wskaza� odpowied�?";

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
    var L_OEMHWAboutThisScreen1_Text = "Na tym ekranie mo�esz sprawdzi�, czy dzia�a system d�wi�kowy tego komputera dzia�a.";
	  Agent_Speak(L_OEMHWAboutThisScreen1_Text);

    var L_OEMHWAboutThisScreen2_Text = "System d�wi�kowy sk�ada si� z g�o�nik�w, karty d�wi�kowej znajduj�cej si� wewn�trz komputera i oprogramowania systemu Windows, kt�re umo�liwia odtwarzanie d�wi�ku.";
	  Agent_Speak(ApiObj.formatMessage(L_OEMHWAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnOEMHWHowDoIKnow() 
{
    var L_OEMHWHowDoIKnow1_Text = "Je�li s�yszysz teraz d�wi�k, oznacza to, �e system d�wi�kowy dzia�a.";
	  Agent_Speak(L_OEMHWHowDoIKnow1_Text);

    var L_OEMHWHowDoIKnow2_Text = "Je�li nie s�yszysz d�wi�ku, najpierw sprawd� si�� g�osu g�o�nika, aby upewni� si�, �e nie jest ustawiona zbyt nisko.";
	  Agent_Speak(L_OEMHWHowDoIKnow2_Text);

    var L_OEMHWHowDoIKnow3_Text = "Je�li problem nie jest rozwi�zany, przyjrzymy si� innym mo�liwo�ciom.";
	  Agent_Speak(L_OEMHWHowDoIKnow3_Text);
}

function Agent_OnOEMHWIsNotWorking() 
{
    var L_OEMHWIsNotWorking1_Text = "Po pierwsze, upewnij si�, �e g�o�niki s� w��czone.";
	  Agent_Speak(L_OEMHWIsNotWorking1_Text);
	
    var L_OEMHWIsNotWorking2_Text = "Niekt�re g�o�niki maj� lampk� wskazuj�c�, �e s� w��czone.";
	  Agent_Speak(L_OEMHWIsNotWorking2_Text);

    var L_OEMHWIsNotWorking3_Text = "Po drugie, upewnij si�, �e s� ustawione na s�yszalny poziom g�o�no�ci.";
	  Agent_Speak(L_OEMHWIsNotWorking3_Text);

    var L_OEMHWIsNotWorking4_Text = "Je�li wci�� nie s�yszysz d�wi�ku pochodz�cego z g�o�nik�w...";
	  Agent_Speak(L_OEMHWIsNotWorking4_Text);

    var L_OEMHWIsNotWorking5_Text = "Po trzecie, upewnij si�, �e g�o�niki s� pod��czone do gniazdka elektrycznego, i �e s� tak�e w�a�ciwie pod��czone do komputera.";
	  Agent_Speak(L_OEMHWIsNotWorking5_Text);
	
	  var L_OEMHWIsNotWorking6_Text = "�atwo jest pomyli� gniazdko mikrofonu komputera z jego gniazdkiem g�o�nik�w.";
	  Agent_Speak(L_OEMHWIsNotWorking6_Text);

    var L_OEMHWIsNotWorking7_Text = "Po czwarte, je�li masz zestaw g�o�nik�w stereo, upewnij si�, �e s� one po��czone ze sob�.";
	  Agent_Speak(L_OEMHWIsNotWorking7_Text);

    var L_OEMHWIsNotWorking8_Text = "Na koniec, je�li wci�� nie s�yszysz d�wi�ku, spr�buj po�yczy� zestaw g�o�nik�w z innego komputera.";
	  Agent_Speak(L_OEMHWIsNotWorking8_Text);

    var L_OEMHWIsNotWorking9_Text = "Je�li po�yczone g�o�niki dzia�aj�, a Twoje w�asne nie, musisz wymieni� lub naprawi� swoje g�o�niki.";
	  Agent_Speak(L_OEMHWIsNotWorking9_Text);
}

function Agent_OnOEMHWIndicateAnswer() 
{
	  Agent_GestureAtElement(g.document.all("Sound_Yes"), "Left");
    
    var L_OEMHWIndicateAnswer1_Text = "Po prostu umie�� wska�nik myszy w bia�ym k�ku z lewej strony odpowiedzi i";
	  Agent_Speak(L_OEMHWIndicateAnswer1_Text);
    
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("radioNoSound"), "Left");

    var L_OEMHWIndicateAnswer2_Text = "kliknij jeden raz.";
	  Agent_Speak(L_OEMHWIndicateAnswer2_Text);
    
    Agent_Play("RestPose");

    var L_OEMHWIndicateAnswer3_Text = "Je�li chcesz u�y� klawiatury, aby wskaza� odpowied�, naciskaj klawisz Tab dop�ki nie zobaczysz prostok�ta wok� bia�ego k�ka, kt�re chcesz wype�ni�, a nast�pnie naci�nij klawisz spacji.";
	  Agent_Speak(L_OEMHWIndicateAnswer3_Text);
}




function Agent_CompNameAddCommands() 
{
    var L_CompNameMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_CompNameMenuCommand2_Text = "Jak mog� &zmieni� nazw� komputera p�niej?";

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
    var L_CompNameAboutThisScreen1_Text = "Na tym ekranie mo�esz nazwa� ten komputer.";
	  Agent_Speak(L_CompNameAboutThisScreen1_Text);

    var L_CompNameAboutThisScreen2_Text = "Ta nazwa pozwala innym u�ytkownikom na zidentyfikowanie Twojego komputera, je�li jest on po��czony z innymi komputerami w sieci.";
	  Agent_Speak(L_CompNameAboutThisScreen2_Text);
}

function Agent_OnCompNameHowToRename() 
{
    var L_CompNameHowToRename1_Text = "Po zako�czeniu konfigurowania systemu Windows, kliknij polecenie Panel sterowania w menu Start.";
	  Agent_Speak(L_CompNameHowToRename1_Text);

    var L_CompNameHowToRename2_Text = "Kliknij ikon� System w kategorii Wydajno�� i konserwacja, a nast�pnie wykonaj instrukcje na karcie Nazwa komputera.";
	  Agent_Speak(L_CompNameHowToRename2_Text);

    var L_CompNameHowToRename3_Text = "Je�li zapomnisz te kroki, kliknij polecenie Pomoc i obs�uga techniczna w menu Start, aby znale�� odpowiedzi na pytania i inne warto�ciowe informacje.";
	  Agent_Speak(L_CompNameHowToRename3_Text);
}




function Agent_SECURITYPASSAddCommands() 
{
    var L_SECURITYPASSMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_SECURITYPASSMenuCommand2_Text = "&Jaki jest najlepszy spos�b na utworzenie has�a?";

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
    var L_SECURITYPASSAboutThisScreen1_Text = "Na tym ekranie mo�esz utworzy� has�o, je�li chcesz zabezpieczy� ten komputer przed nieautoryzowanym dost�pem.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen1_Text);

    var L_SECURITYPASSAboutThisScreen2_Text = "Jedna uwaga: je�li ten komputer jest po��czony z innymi komputerami w sieci, osoby loguj�ce si� przy u�yciu nazwy u�ytkownika \"Administrator\" i prawid�owego has�a b�d� mog�y uzyskiwa� dost�p do ca�ej sieci.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen2_Text);
    
    var L_SECURITYPASSAboutThisScreen3_Text = "Stanowczo zaleca si�, aby wymaga� has�a administratora w celu ochrony komputera -- i sieci, je�li istnieje.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen3_Text);
}

function Agent_OnSECURITYPASSBestWay() 
{
    var L_SECURITYPASSBestWay1_Text = "W celu zwi�kszenia bezpiecze�stwa has�a powinno ono zawiera� co najmniej dwa z nast�puj�cych element�w: wielkie litery, ma�e litery i cyfry.";
	  Agent_Speak(L_SECURITYPASSBestWay1_Text);

    var L_SECURITYPASSBestWay2_Text = "Tak�e bardziej przypadkowe sekwencje znak�w zwi�ksz� bezpiecze�stwo has�a.";
	  Agent_Speak(L_SECURITYPASSBestWay2_Text);

    var L_SECURITYPASSBestWay3_Text = "Has�a mog� mie� d�ugo�� do 127 znak�w.";
	  Agent_Speak(L_SECURITYPASSBestWay3_Text);
    
    var L_SECURITYPASSBestWay4_Text = "Je�li natomiast u�ywasz systemu Windows w sieci, w kt�rej s� tak�e komputery z systemem Windows 95 lub Windows 98 i chcesz mie� mo�liwo�� logowania si� do sieci z tych komputer�w, uwzgl�dnij u�ywanie hase� nie d�u�szych ni� 14 znak�w.";
	  Agent_Speak(L_SECURITYPASSBestWay4_Text);
}



function Agent_JOINDOMAINAddCommands() 
{
    var L_JOINDOMAINMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_JOINDOMAINMenuCommand2_Text = "Co to jest &domena?";
    var L_JOINDOMAINMenuCommand3_Text = "Jak &mog� przy��czy� si� do domeny?"; 
    var L_JOINDOMAINMenuCommand4_Text = "&Co mam robi� dalej?";


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
    var L_JOINDOMAINAboutThisScreen1_Text = "Na tym ekranie mo�esz zdecydowa�, czy chcesz, aby ten komputer zosta� do��czony do domeny lub nie.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen1_Text);

    var L_JOINDOMAINAboutThisScreen2_Text = "Je�li wybierzesz przy��czenie do domeny, musisz wpisa� nazw� domeny, do kt�rej ten komputer jest do��czany.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen2_Text);
}

function Agent_OnJOINDOMAINDifference() 
{
    var L_JOINDOMAINDifference1_Text = "Domena jest grup� komputer�w, kt�re s� administrowane jako jednostka.";
    Agent_Speak(L_JOINDOMAINDifference1_Text);
    
    var L_JOINDOMAINDifference2_Text = "Na przyk�ad, firma mo�e doda� do domeny wszystkie komputery nale��ce do jej biura w Szczecinie, aby mog�y one wsp�u�ytkowa� te same uprawnienia dost�pu i ��czy� si� z tymi samymi drukarkami.";
    Agent_Speak(L_JOINDOMAINDifference2_Text);

    var L_JOINDOMAINDifference3_Text = "Je�li nie masz pewno�ci, kt�r� opcj� chcesz wybra�, wybierz Nie i kliknij przycisk Dalej.";
    Agent_Speak(L_JOINDOMAINDifference3_Text);
}

function Agent_OnJOINDOMAINHowToName() 
{
 	  Agent_GestureAtElement(g.document.all("radioYesDomain"), "Left");
 
    var L_JOINDOMAINHowToName1_Text = "Po zaznaczeniu opcji przy��czenia do domeny,";
    Agent_Speak(L_JOINDOMAINHowToName1_Text);
      
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("textboxDomain"), "Left");
  
    var L_JOINDOMAINHowToName2_Text = "mo�esz wpisa� nazw� w polu poni�ej tej opcji.";
    Agent_Speak(L_JOINDOMAINHowToName2_Text);
      
    Agent_Play("RestPose");
  
    var L_JOINDOMAINHowToName3_Text = "Nie mo�esz wpisa� nazwy, je�li dana opcja nie zosta�a wybrana.";
    Agent_Speak(L_JOINDOMAINHowToName3_Text);
  
    var L_JOINDOMAINHowToName4_Text = "Pole pozostanie szare, aby wskaza�, �e nie mo�na nic w nim wpisa� dop�ki nie zostanie wybrana opcja, do kt�rej nale�y to pole.";
    Agent_Speak(L_JOINDOMAINHowToName4_Text);
  
    var L_JOINDOMAINHowToName5_Text = "Je�li do��czasz ten komputer do domeny, zapytaj administratora sieci o prawid�ow� nazw� domeny.";
    Agent_Speak(L_JOINDOMAINHowToName5_Text);
  
    var L_JOINDOMAINHowToName6_Text = "Je�li nie przy��czasz si� do domeny, nie musisz okre�la� nazwy.";
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
    
    var L_JOINDOMAINWhatToDoNext1_Text = "Po dokonaniu wyboru, kliknij przycisk Dalej.";
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
    
    var L_JOINDOMAINWhatToDoNext2_Text = "Mo�esz r�wnie� powr�ci� do poprzedniego ekranu, klikaj�c przycisk Wstecz.";
    Agent_Speak(L_JOINDOMAINWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}




function Agent_JNDOM_AAddCommands() 
{
    var L_JNDOMAMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_JNDOMAMenuCommand2_Text = "Jak wprowadzi� nazw� u�ytkownika i &has�o?";
    var L_JNDOMAMenuCommand3_Text = "Co to jest &domena?";
    var L_JNDOMAMenuCommand4_Text = "&Co mam robi� dalej?";
    
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
    var L_JNDOM_A_AboutThisStep1_Text = "Na tym ekranie identyfikujesz osob� autoryzowan� do przy��czenia tego komputera do domeny.";
  	Agent_Speak(L_JNDOM_A_AboutThisStep1_Text);
}

function Agent_OnJNDOM_AHowToEnter() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_HowToEnter1_Text = "Wpisywana nazwa musi by� unikatowa w�r�d innych nazw u�ytkownik�w w domenie.";
    Agent_Speak(L_JNDOM_A_HowToEnter1_Text);
      
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_HowToEnter2_Text = "Wpisywane has�o musi pasowa� do has�a dla tego konta u�ytkownika.";
    Agent_Speak(L_JNDOM_A_HowToEnter2_Text);
      
    Agent_Play("RestPose");
    
    var L_JNDOM_A_HowToEnter3_Text = "Je�li nie wiesz jakiej nazwy u�ytkownika i has�a u�y�, skontaktuj si� z administratorem sieci.";
    Agent_Speak(L_JNDOM_A_HowToEnter3_Text);
}

function Agent_OnJNDOM_AWhatIsDomain() 
{
    var L_JNDOM_A_WhatIsDomain1_Text = "Domena jest grup� komputer�w, kt�re s� administrowane jako jednostka.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain1_Text);
  	
    var L_JNDOM_A_WhatIsDomain2_Text = "Na przyk�ad, firma mo�e doda� do domeny wszystkie komputery nale��ce do jej biura w Szczecinie, aby mog�y one wsp�u�ytkowa� te same uprawnienia dost�pu i ��czy� si� z tymi samymi drukarkami.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain2_Text);
      
    Agent_Play("RestPose");		
}

function Agent_OnJNDOM_AWhatToDoNext() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_WhatToDoNext1_Text = "Po wpisaniu nazwy u�ytkownika tutaj";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext1_Text);
      
    Agent_Play("RestPose");		
  	
    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_WhatToDoNext2_Text = "i has�a u�ytkownika tutaj";
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
    
    var L_JNDOM_A_WhatToDoNext3_Text = "kliknij przycisk Dalej.";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext3_Text);
      
    Agent_Play("RestPose");		
}



function Agent_ActivationAddCommands() 
{
    var L_ActivationMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_ActivationMenuCommand2_Text = "Powiedz mi co� o &aktywacji";
    var L_ActivationMenuCommand3_Text = "Jak &wykona� aktywacj� p�niej?";
    var L_ActivationMenuCommand4_Text = "Ja&k wykona� aktywacj�, je�li nie mam po��czenia z Internetem?";
    var L_ActivationMenuCommand5_Text = "&Co si� stanie, je�li nie wykonam aktywacji?";
    var L_ActivationMenuCommand6_Text = "&Co mam robi� dalej?";

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
    
    var L_ActivationAboutThisScreen1_Text = "Na tym ekranie zadecydujesz, czy wykona� aktywacj� systemu %1 teraz czy p�niej.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutThisScreen1_Text, g_ProductName));
    
    var L_ActivationAboutThisScreen2_Text = "Je�li zechcesz zaczeka� z aktywacj�, mo�esz p�niej uruchomi� Kreatora aktywacji produktu z menu Start.";
    Agent_Speak(L_ActivationAboutThisScreen2_Text);
    
    var L_ActivationAboutThisScreen3_Text = "Co kilka dni b�dziemy przypomina� Ci o wykonaniu aktywacji systemu Windows, aby mo�na by�o z niego dalej korzysta�.";
    Agent_Speak(L_ActivationAboutThisScreen3_Text);
}

function Agent_OnActivationAboutActivation() 
{
    var L_ActivationAboutActivation1_Text = "Gdy dostajesz z banku now� kart� debetow� lub kredytow�, bank zwykle prosi o aktywacj� karty przed rozpocz�ciem jej u�ywania.";
    Agent_Speak(L_ActivationAboutActivation1_Text);
    
    var L_ActivationAboutActivation2_Text = "Aktywacja chroni Ciebie i bank przed nieautoryzowanym u�yciem karty.";
    Agent_Speak(L_ActivationAboutActivation2_Text);
    
    var L_ActivationAboutActivation3_Text = "Aktywacja %1 dzia�a w ten sam spos�b, z t� r�nic�, �e mo�esz korzysta� z %2 przez okre�lony czas, zanim aktywacja stanie si� konieczna.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationHowToActivateLater() 
{
    var L_ActivationHowToActivateLater1_Text = "Je�li pominiesz aktywacj� teraz, co kilka dni na pulpicie %1 b�dzie si� pojawia� ma�e przypomnienie.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationHowToActivateLater1_Text, g_ProductName));
    
    var L_ActivationHowToActivateLater2_Text = "Mo�esz wtedy uruchomi� Kreatora aktywacji produktu przechodz�c do menu Start i klikaj�c polecenie Aktywacja systemu Windows.";
    Agent_Speak(L_ActivationHowToActivateLater2_Text);
    
    var L_ActivationHowToActivateLater3_Text = "Je�li zapomnisz te kroki, przejd� do menu Start i kliknij polecenie Pomoc i obs�uga techniczna, aby znale�� odpowiedzi na pytania i inne warto�ciowe informacje.";
    Agent_Speak(L_ActivationHowToActivateLater3_Text);
}

function Agent_OnActivationHowToActivateUnconnected() 
{
    Agent_GestureAtElement(g.rb_act_2, "Left");
    	
    var L_ActivationHowToActivateUnconnected1_Text = "Po prostu wybierz \"Nie\".";
    Agent_Speak(L_ActivationHowToActivateUnconnected1_Text);
    
    Agent_Play("RestPose");
    
    var L_ActivationHowToActivateUnconnected2_Text = "Po zako�czeniu konfigurowania systemu Windows mo�esz uruchomi� Kreatora aktywacji produktu, klikaj�c polecenie Aktywacja systemu Windows w menu Start.";
    Agent_Speak(L_ActivationHowToActivateUnconnected2_Text);
    
    var L_ActivationHowToActivateUnconnected3_Text = "Kreator poka�e Ci numer telefonu, kt�rego mo�esz u�y�, aby wykona� aktywacj� systemu Windows przez telefon.";
    Agent_Speak(L_ActivationHowToActivateUnconnected3_Text);
}

function Agent_OnActivationWhatHappensNoActivate() 
{
    var L_ActivationWhatHappensNoActivate1_Text = "Mo�esz kontynuowa� korzystanie z systemu %1 do wyga�ni�cia okresu aktywacji.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate1_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate2_Text = "Ale pod koniec tego okresu musisz wykona� aktywacj� systemu %1, aby m�c z niego dalej korzysta�.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate2_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate3_Text = "Po wyga�ni�ciu okresu aktywacji korzystanie z systemu %1 nie b�dzie mo�liwe.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate3_Text, g_ProductName));
}

function Agent_OnActivationWhatToDoNext() 
{
    Agent_GestureAtElement(g.act_spn1, "Left");
    
    var L_ActivationWhatToDoNext1_Text = "Po wybraniu odpowiedzi na to pytanie";
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
            
    var L_ActivationWhatToDoNext2_Text = "kliknij przycisk Dalej.";
    Agent_Speak(L_ActivationWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");	
}



function Agent_ActivationErrorAddCommands() 
{
    var L_ActivationErrorMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_ActivationErrorMenuCommand2_Text = "Powiedz mi co� o &aktywacji";
    var L_ActivationErrorMenuCommand3_Text = "Jak &wykona� aktywacj� p�niej?";
    var L_ActivationErrorMenuCommand4_Text = "Ja&k wykona� aktywacj�, je�li nie mam po��czenia z Internetem?";
    var L_ActivationErrorMenuCommand5_Text = "&Co si� stanie, je�li nie wykonam aktywacji?";


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
    var L_ActivationErrorAboutThisScreen1_Text = "Ten ekran pojawia si�, je�li nie mo�na skontaktowa� si� z naszym centrum aktywacji.";
	Agent_Speak(L_ActivationErrorAboutThisScreen1_Text);
	
    var L_ActivationErrorAboutThisScreen2_Text = "Po zako�czeniu konfigurowania systemu %1 mo�esz uruchomi� Kreatora aktywacji produktu, klikaj�c polecenie Aktywacja systemu Windows w menu Start.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnActivationErrorAboutActivation() 
{
    var L_ActivationErrorAboutActivation1_Text = "Gdy dostajesz z banku now� kart� debetow� lub kredytow�, bank zwykle prosi o aktywacj� karty przed rozpocz�ciem jej u�ywania.";
	Agent_Speak(L_ActivationErrorAboutActivation1_Text);
	
    var L_ActivationErrorAboutActivation2_Text = "Aktywacja chroni Ciebie i bank przed nieautoryzowanym u�yciem karty.";
	Agent_Speak(L_ActivationErrorAboutActivation2_Text);
	
    var L_ActivationErrorAboutActivation3_Text = "Aktywacja %1 dzia�a w ten sam spos�b, z t� r�nic�, �e mo�esz korzysta� z %2 przez okre�lon� liczb� dni zanim jego aktywacja stanie si� konieczna.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationErrorHowToActivateLater() 
{
    var L_ActivationErrorHowToActivateLater1_Text = "Je�li pominiesz aktywacj� teraz, co kilka dni na pulpicie %1 b�dzie si� pojawia� ma�e przypomnienie.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationErrorHowToActivateLater2_Text = "Mo�esz wtedy uruchomi� Kreatora aktywacji produktu przechodz�c do menu Start i klikaj�c polecenie Aktywacja systemu Windows.";
	Agent_Speak(L_ActivationErrorHowToActivateLater2_Text);
	
    var L_ActivationErrorHowToActivateLater3_Text = "Je�li zapomnisz te kroki, przejd� do menu Start i kliknij polecenie Pomoc i obs�uga techniczna, aby znale�� odpowiedzi na pytania i inne warto�ciowe informacje.";
	Agent_Speak(L_ActivationErrorHowToActivateLater3_Text);
}

function Agent_OnActivationErrorHowToActivateUnconnected() 
{
    var L_ActivationErrorHowToActivateUnconnected1_Text = "Po zako�czeniu konfigurowania systemu Windows mo�esz uruchomi� Kreatora aktywacji produktu, klikaj�c polecenie Aktywacja systemu Windows w menu Start.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected1_Text);
	
    var L_ActivationErrorHowToActivateUnconnected2_Text = "Kreator poka�e Ci numer telefonu, kt�rego mo�esz u�y�, aby wykona� aktywacj� systemu Windows przez telefon.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected2_Text);
}

function Agent_OnActivationErrorWhatHappensNoActivate() 
{
    var L_ActivationErrorWhatHappensNoActivate1_Text = "Mo�esz kontynuowa� korzystanie z systemu %1 do wyga�ni�cia okresu aktywacji.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate2_Text = "Ale pod koniec tego okresu musisz wykona� aktywacj� systemu %1, aby m�c z niego dalej korzysta�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate3_Text = "Po wyga�ni�ciu okresu aktywacji korzystanie z systemu %1 nie b�dzie mo�liwe.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_ActivationPrivacyPolicyAddCommands() 
{
    var L_ActivationPrivacyPolicyMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_ActivationPrivacyPolicyMenuCommand2_Text = "Powiedz mi co� o &aktywacji";
    var L_ActivationPrivacyPolicyMenuCommand3_Text = "Jak &wykona� aktywacj� p�niej?";
    var L_ActivationPrivacyPolicyMenuCommand4_Text = "Ja&k wykona� aktywacj�, je�li nie mam po��czenia z Internetem?";
    var L_ActivationPrivacyPolicyMenuCommand5_Text = "&Co si� stanie, je�li nie wykonam aktywacji?";


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
    var L_ActivationPrivacyPolicyAboutThisScreen1_Text = "Ten ekran wyja�nia, w jaki spos�b chroniona jest prywatno�� u�ytkownika podczas wykonywania aktywacji systemu %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutThisScreen1_Text, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyAboutActivation() 
{
    var L_ActivationPrivacyPolicyAboutActivation1_Text = "Gdy dostajesz z banku now� kart� debetow� lub kredytow�, bank zwykle prosi o aktywacj� karty przed rozpocz�ciem jej u�ywania.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation1_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation2_Text = "Aktywacja chroni Ciebie i bank przed nieautoryzowanym u�yciem karty.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation2_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation3_Text = "Aktywacja %1 dzia�a w ten sam spos�b, z t� r�nic�, �e mo�esz korzysta� z %2 przez okre�lony czas, zanim aktywacja stanie si� konieczna.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyHowToActivateLater() 
{
    var L_ActivationPrivacyPolicyHowToActivateLater1_Text = "Je�li pominiesz aktywacj� teraz, co kilka dni na pulpicie %1 b�dzie si� pojawia� ma�e przypomnienie.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyHowToActivateLater2_Text = "Mo�esz wtedy uruchomi� Kreatora aktywacji produktu przechodz�c do menu Start i klikaj�c polecenie Aktywacja systemu Windows.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater2_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateLater3_Text = "Je�li zapomnisz te kroki, przejd� do menu Start i kliknij polecenie Pomoc i obs�uga techniczna, aby znale�� odpowiedzi na pytania i inne warto�ciowe informacje.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater3_Text);
}

function Agent_OnActivationPrivacyPolicyHowToActivateUnconnected() 
{
    var L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text = "Po zako�czeniu konfigurowania systemu Windows mo�esz uruchomi� Kreatora aktywacji produktu, klikaj�c polecenie Aktywacja systemu Windows w menu Start.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text = "Kreator poka�e Ci numer telefonu, kt�rego mo�esz u�y�, aby wykona� aktywacj� systemu Windows przez telefon.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text);
}

function Agent_OnActivationPrivacyPolicyWhatHappensNoActivate() 
{
    var L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text = "Mo�esz kontynuowa� korzystanie z systemu %1 do czasu wyga�ni�cia okresu wykonywania aktywacji.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text = "Ale pod koniec tego okresu musisz wykona� aktywacj� systemu %1, aby m�c z niego dalej korzysta�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text = "Po wyga�ni�ciu okresu wykonywania aktywacji ju� nie b�dzie mo�na korzysta� z systemu %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_DSLMAINAddCommands() 
{
    var L_DSLMAINMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_DSLMAINMenuCommand2_Text = "&S� powody, aby wymaga� nazwy u�ytkownika i has�a";
    var L_DSLMAINMenuCommand3_Text = "&Co mam robi� dalej?";
    
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
    var L_DSLMAINAboutThisScreen1_Text = "Na tym ekranie zadecydujesz, czy nazwa u�ytkownika i has�o b�d� wymagane do uzyskiwania dost�pu do Internetu z tego komputera.";
	Agent_Speak(L_DSLMAINAboutThisScreen1_Text);
}

function Agent_OnDSLMAINSomeReasons() 
{
    var L_DSLMAINHowToMoveOn1_Text = "Je�li jeste� jedyn� osob� u�ywaj�c� tego komputera, mo�esz pozwoli� systemowi %1 na automatyczne przechowywanie nazwy u�ytkownika i has�a.";
	Agent_Speak(ApiObj.FormatMessage(L_DSLMAINHowToMoveOn1_Text, g_ProductName));
	
    var L_DSLMAINHowToMoveOn2_Text = "Dzi�ki temu nie musisz wpisywa� informacji za ka�dym razem, gdy ��czysz si� z Internetem.";
	Agent_Speak(L_DSLMAINHowToMoveOn2_Text);
	
    var L_DSLMAINHowToMoveOn3_Text = "W wypadku, gdy wsp�u�ytkujesz ten komputer i nie chcesz udost�pnia� innym osobom po��czenia Internetowego mo�esz zabezpieczy� swoje konto za pomoc� nazwy u�ytkownika i has�a.";
	Agent_Speak(L_DSLMAINHowToMoveOn3_Text);
	
    var L_DSLMAINHowToMoveOn4_Text = "Mo�esz, na przyk�ad, udost�pni� ten komputer swoim dzieciom dla gier.";
	Agent_Speak(L_DSLMAINHowToMoveOn4_Text);
	
    var L_DSLMAINHowToMoveOn5_Text = "Ale uniemo�liwi� im �eglowanie po Internecie bez pozwolenia.";
	Agent_Speak(L_DSLMAINHowToMoveOn5_Text);		
}

function Agent_OnDSLMAINWhatToDoNext()
{	
	Agent_GestureAtElement(g.dslmain_TitleText, "Left");
	
    var L_DSLMAINWhatToDoNext1_Text = "Po wybraniu odpowiedzi na to pytanie";
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
	
	var L_DSLMAINWhatToDoNext2_Text = "kliknij przycisk Dalej.";
	Agent_Speak(L_DSLMAINWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");
}



function Agent_DSL_AAddCommands() 
{
    var L_DSLAMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_DSLAMenuCommand2_Text = "&Czym dok�adnie jest Internet?";
    var L_DSLAMenuCommand3_Text = "C&zego potrzebuj�, aby po��czy� si� z Internetem?";
    var L_DSLAMenuCommand4_Text = "Podaj informacje &o zapisywaniu si� do Internetu";

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
    var L_DSL_A_AboutThisStep1_Text = "Na tym ekranie mo�esz skonfigurowa� konto u us�ugodawcy internetowego, inaczej \"ISP\", aby m�c ��czy� si� z Internetem z tego komputera.";
	Agent_Speak(L_DSL_A_AboutThisStep1_Text);
}

function Agent_DSL_AWhatIsInternet() 
{
    var L_DSL_A_WhatIsInternet1_Text = "Internet jest sieci� komputer�w obejmuj�c� ca�y �wiat.";
	Agent_Speak(L_DSL_A_WhatIsInternet1_Text);
	
    var L_DSL_A_WhatIsInternet2_Text = "Je�li masz dost�p do Internetu, mo�esz pobiera� dost�pne publicznie informacje z milion�w �r�de�, w tym szk�, agencji rz�dowych, firm i os�b prywatnych.";
	Agent_Speak(L_DSL_A_WhatIsInternet2_Text);
	
    var L_DSL_A_WhatIsInternet3_Text = "Sie� World Wide Web, w skr�cie \"sie� Web\", to system pozwalaj�cy na eksploracj� Internetu przy u�yciu hiper��czy.";
	Agent_Speak(L_DSL_A_WhatIsInternet3_Text);
	
    var L_DSL_A_WhatIsInternet4_Text = "Hiper��cza to tekst lub obrazy, kt�re w wyniku klikni�cia przenosz� u�ytkownika na inn� stron� sieci Web lub do innej cz�ci tej samej strony albo wykonuj� konkretn� czynno��, tak� jak otwarcie programu.";
	Agent_Speak(L_DSL_A_WhatIsInternet4_Text);
	
    var L_DSL_A_WhatIsInternet5_Text = "Do nawigacji w sieci Web s�u�y przegl�darka sieci Web, czyli program, kt�ry wy�wietla informacje dost�pne w Internecie w postaci tekstu, obraz�w, d�wi�k�w i film�w cyfrowych.";
	Agent_Speak(L_DSL_A_WhatIsInternet5_Text);
	
    var L_DSL_A_WhatIsInternet6_Text = "Firma Microsoft oferuje dwie przegl�darki sieci Web:";
	Agent_Speak(L_DSL_A_WhatIsInternet6_Text);
	
    var L_DSL_A_WhatIsInternet7_Text = "Program MSN Explorer, doskona�y dla os�b pocz�tkuj�cych i pracuj�cych z komputerem w domu, oraz program Internet Explorer.";
	Agent_Speak(L_DSL_A_WhatIsInternet7_Text);
}

function Agent_DSL_ANeedToConnect() 
{	
    var L_DSL_A_NeedToConnect1_Text = "Do po��czenia si� z Internetem potrzebne s� tylko trzy rzeczy.";
	Agent_Speak(L_DSL_A_NeedToConnect1_Text);	
	
    var L_DSL_A_NeedToConnect2_Text = "Po pierwsze potrzebny jest komputer, kt�ry ju� masz.";
	Agent_Speak(L_DSL_A_NeedToConnect2_Text);
	
    var L_DSL_A_NeedToConnect3_Text = "Po drugie potrzebny jest us�ugodawca internetowy, inaczej \"ISP\".";
	Agent_Speak(L_DSL_A_NeedToConnect3_Text);
	
    var L_DSL_A_NeedToConnect4_Text = "Us�ugodawca ISP zapewnia us�ugi lub dost�p do Internetu w ten sam spos�b, w jaki operator sieci telefonicznej zapewnia po��czenia telefoniczne.";
	Agent_Speak(L_DSL_A_NeedToConnect4_Text);
	
    var L_DSL_A_NeedToConnect5_Text = "Gdy dojdziemy do cz�ci dotycz�cej konfigurowania tego komputera do dost�pu do Internetu, pomog� Ci znale�� us�ugodawc� ISP, je�li jeszcze go nie masz.";
	Agent_Speak(L_DSL_A_NeedToConnect5_Text);
	
    var L_DSL_A_NeedToConnect6_Text = "Po trzecie potrzebne jest urz�dzenie, kt�re umo�liwia fizyczne po��czenie tego komputera z us�ugodawc� ISP.";
	Agent_Speak(L_DSL_A_NeedToConnect6_Text);
	
    var L_DSL_A_NeedToConnect7_Text = "Taki jest cel tego ekranu.";
	Agent_Speak(L_DSL_A_NeedToConnect7_Text);
}

function Agent_DSL_AInternetSignup() 
{
    var L_DSL_A_AboutThisScreen1_Text = "Je�li masz ju� konto internetowe, us�ugodawca internetowy ju� dostarczy� te informacje.";
	Agent_Speak(L_DSL_A_AboutThisScreen1_Text);
	
    var L_DSL_A_AboutThisScreen2_Text = "Nie musisz konfigurowa� nowego konta internetowego tylko dlatego, �e masz nowy komputer.";
	Agent_Speak(L_DSL_A_AboutThisScreen2_Text);
	
    var L_DSL_A_AboutThisScreen3_Text = "Mo�esz u�ywa� tych samych informacji o koncie, co na starym komputerze.";
	Agent_Speak(L_DSL_A_AboutThisScreen3_Text);
	
    var L_DSL_A_AboutThisScreen4_Text = "Je�li nigdy nie zdarzy�o Ci si� ��czy� z Intenetem z w�asnego komputera, by� mo�e przekazano Ci informacje o koncie internetowym podczas zakupu tego komputera.";
	Agent_Speak(L_DSL_A_AboutThisScreen4_Text);
	
    var L_DSL_A_AboutThisScreen5_Text = "Je�li sprzedawca da� Ci kartk� z nazw� u�ytkownika, has�em i nazw� us�ugodawcy ISP, wpisz te informacje na tym ekranie.";
	Agent_Speak(L_DSL_A_AboutThisScreen5_Text);
}



function Agent_DSL_BAddCommands() 
{

    var L_DSL_B_MenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_DSL_B_MenuCommand2_Text = "Co o&znacza skr�t IP?";
    var L_DSL_B_MenuCommand3_Text = "Co o&znacza skr�t DNS?";
    var L_DSL_B_MenuCommand4_Text = "&Co mam robi� dalej?";

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
    var L_DSL_B_AboutThisScreen1_Text = "Informacje o koncie internetowym podane na ostatnim ekranie okre�la�y, w jaki spos�b b�dziesz ��czy� si� z Internetem.";
	Agent_Speak(L_DSL_B_AboutThisScreen1_Text);

    var L_DSL_B_AboutThisScreen2_Text = "Na tym ekranie musisz powiedzie� nam, jak ten komputer b�dzie ustanawia� fizyczne po��czenie z Internetem.";
	Agent_Speak(L_DSL_B_AboutThisScreen2_Text);
}

function Agent_OnDSL_BWhatIsIP() 
{
    var L_DSL_B_WhatIsIP1_Text = "Ka�dy komputer po��czony z Internetem ma adres protoko�u internetowego, czyli \"adres IP\", kt�ry jest unikatowym numerem identyfikuj�cym komputer w Internecie.";
	Agent_Speak(L_DSL_B_WhatIsIP1_Text);

    var L_DSL_B_WhatIsIP2_Text = "Po po��czeniu us�ugodawca ISP zwykle przydziela komputerowi adres IP automatycznie.";
	Agent_Speak(L_DSL_B_WhatIsIP2_Text);

    var L_DSL_B_WhatIsIP3_Text = "W tym wypadku musisz r�cznie wprowadzi� adres IP.";
	Agent_Speak(L_DSL_B_WhatIsIP3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_staticip, "Left");
	
	var L_DSL_B_WhatIsIP4_Text = "Tw�j us�ugodawca ISP powinien poda� Ci adres IP do wpisania tutaj.";
	Agent_Speak(L_DSL_B_WhatIsIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnDSL_BWhatIsDNS() 
{
    var L_DSL_B_WhatIsDNS1_Text = "Aby odnale�� adresy w Internecie, ten komputer musi po��czy� si� z serwerem DNS (Domain Name Server), kt�ry przypisuje adresy IP komputerom w Internecie.";
	Agent_Speak(L_DSL_B_WhatIsDNS1_Text);

    var L_DSL_B_WhatIsDNS2_Text = "W wi�kszo�ci wypadk�w adres DNS jest automatycznie przypisywany przez us�ugodawc� ISP.";
	Agent_Speak(L_DSL_B_WhatIsDNS2_Text);

    var L_DSL_B_WhatIsDNS3_Text = "Tw�j us�ugodawca ISP wymaga ustawienia adresu serwera DNS na tym komputerze.";
	Agent_Speak(L_DSL_B_WhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_prefdns, "Left");

    var L_DSL_B_WhatIsDNS4_Text = "Tw�j us�ugodawca ISP powinien poda� Ci preferowany serwer DNS do wpisania tutaj";
	Agent_Speak(L_DSL_B_WhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.dsl_lbl_altdns, "Left");

    var L_DSL_B_WhatIsDNS5_Text = "i alternatywny serwer DNS u�ywany, je�li preferowany serwer DNS jest niedost�pny.";
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
	
    var L_DSL_B_WhatToDoNext1_Text = "Kliknij przycisk Dalej, aby kontynuowa�.";
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

    var L_DSL_B_WhatToDoNext2_Text = "Mo�esz tak�e klikn�� przycisk Wstecz, aby powr�ci� do poprzedniego kroku.";
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

    var L_DSL_B_WhatToDoNext3_Text = "Je�li zmienisz zdanie, kliknij przycisk \"Pomi�\", aby kontynuowa� bez konfigurowania tego komputera do dost�pu do Internetu.";
	Agent_Speak(L_DSL_B_WhatToDoNext3_Text);
    
    Agent_Play("RestPose");	
}



function Agent_ICONNECTAddCommands() 
{

    var L_ICONNECTMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_ICONNECTMenuCommand2_Text = "C&o to jest statyczny adres IP?";
    var L_ICONNECTMenuCommand3_Text = "Co o&znacza skr�t DNS?";
    var L_ICONNECTMenuCommand4_Text = "&Co mam robi� dalej?";

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
    var L_ICONNECTAboutThisScreen1_Text = "Informacje o koncie internetowym podane na ostatnim ekranie okre�la�y, w jaki spos�b b�dziesz ��czy� si� z Internetem.";
	Agent_Speak(L_ICONNECTAboutThisScreen1_Text);

    var L_ICONNECTAboutThisScreen2_Text = "Na tym ekranie musisz powiedzie� nam, jak ten komputer b�dzie ustanawia� fizyczne po��czenie z Internetem.";
	Agent_Speak(L_ICONNECTAboutThisScreen2_Text);
}

function Agent_OnICONNECTWhatIsStaticIP() 
{
    var L_ICONNECTWhatIsStaticIP1_Text = "Ka�dy komputer po��czony z Internetem ma adres protoko�u internetowego, czyli \"adres IP\", kt�ry jest unikatowym numerem identyfikuj�cym komputer w Internecie.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP1_Text);

    var L_ICONNECTWhatIsStaticIP2_Text = "Po po��czeniu us�ugodawca ISP zwykle przydziela komputerowi adres IP automatycznie.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP2_Text);

    var L_ICONNECTWhatIsStaticIP3_Text = "W tym wypadku musisz r�cznie wprowadzi� adres IP.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_staticIP, "Left");
	
	var L_ICONNECTWhatIsStaticIP4_Text = "Tw�j us�ugodawca ISP powinien poda� Ci adres IP do wpisania tutaj.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnICONNECTWhatIsDNS() 
{
    var L_ICONNECTWhatIsDNS1_Text = "Aby odnale�� adresy w Internecie, ten komputer musi po��czy� si� z serwerem DNS (Domain Name Server), kt�ry przypisuje adresy IP komputerom w Internecie.";
	Agent_Speak(L_ICONNECTWhatIsDNS1_Text);

    var L_ICONNECTWhatIsDNS2_Text = "W wi�kszo�ci wypadk�w adres DNS jest automatycznie przypisywany przez us�ugodawc� ISP.";
	Agent_Speak(L_ICONNECTWhatIsDNS2_Text);

    var L_ICONNECTWhatIsDNS3_Text = "Tw�j us�ugodawca ISP wymaga ustawienia adresu serwera DNS na tym komputerze.";
	Agent_Speak(L_ICONNECTWhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_prefrDNS, "Left");

    var L_ICONNECTWhatIsDNS4_Text = "Tw�j us�ugodawca ISP powinien poda� Ci preferowany serwer DNS do wpisania tutaj";
	Agent_Speak(L_ICONNECTWhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.iconnect_spn_alterDNS, "Left");

    var L_ICONNECTWhatIsDNS5_Text = "i alternatywny serwer DNS u�ywany, je�li preferowany serwer DNS jest niedost�pny.";
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
	
    var L_ICONNECTWhatToDoNext1_Text = "Kliknij przycisk Dalej, aby kontynuowa�.";
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

    var L_ICONNECTWhatToDoNext2_Text = "Je�li zmienisz zdanie, kliknij przycisk \"Pomi�\", aby kontynuowa� bez konfigurowania tego komputera do dost�pu do Internetu.";
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

    var L_ICONNECTWhatToDoNext3_Text = "Mo�esz tak�e powr�ci� do poprzedniego ekranu, klikaj�c przycisk Wstecz.";
	Agent_Speak(L_ICONNECTWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}





function Agent_ICNTLASTAddCommands() {

        var L_ICNTLASTMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_ICNTLASTMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_ICNTLASTMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        
        
        

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

        var L_SCONNECTMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_SCONNECTMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_SCONNECTMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        
        
        

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

        var L_SCNTLASTMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_SCNTLASTMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_SCNTLASTMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        
        
        

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
    var L_BadPIDMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_BadPIDMenuCommand2_Text = "Jak wprowadzi� &klucz produktu?";
    var L_BadPIDMenuCommand3_Text = "C&o zrobi�, je�li nie znam mojego klucza produktu?";
    var L_BadPIDMenuCommand4_Text = "Co zrobi�, je�li m�j &klucz produktu nie dzia�a?";
    var L_BadPIDMenuCommand5_Text = "Z &kim mog� si� skontaktowa�, aby uzyska� pomoc?";
    var L_BadPIDMenuCommand6_Text = "&Co mam robi� dalej?";
        
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
    var L_BadPIDAboutThisStep1_Text = "Klucz produktu wpisany na poprzednim ekranie jest nieprawid�owy.";
    Agent_Speak(L_BadPIDAboutThisStep1_Text);
    
    var L_BadPIDAboutThisStep2_Text = "Oznacza to, �e nie jest zgodny z kluczem produktu dla autentycznej kopii systemu Windows XP.";
    Agent_Speak(L_BadPIDAboutThisStep2_Text);

    var L_BadPIDAboutThisStep3_Text = "System Windows nie b�dzie dzia�a� bez prawid�owego klucza produktu.";
    Agent_Speak(L_BadPIDAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDAboutThisStep4_Text = "Je�li podejrzewasz, �e klucz zosta� wpisany z b��dem, kliknij przycisk Wstecz i wpisz poprawny klucz.";
    Agent_Speak(L_BadPIDAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep5_Text = "Natomiast je�li masz pewno��, �e klucz zosta� wpisany poprawnie lub kolejne pr�by nie przynosz� rezultatu, mo�e to oznacza�, �e masz nielegaln� kopi� systemu Windows.";
    Agent_Speak(L_BadPIDAboutThisStep5_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDAboutThisStep6_Text = "W tym wypadku kliknij przycisk Zamknij, aby wy��czy� komputer.";
    Agent_Speak(L_BadPIDAboutThisStep6_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep7_Text = "Zadzwo� pod numer linii antypirackiej BSA (22) 434 34 34.";
    Agent_Speak(L_BadPIDAboutThisStep7_Text);

    var L_BadPIDAboutThisStep8_Text = "W pozosta�ych krajach skontaktuj si� z lokalnym przedstawicielstwem firmy Microsoft.";
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
	
    var L_BadPIDHowToEnter1_Text = "Kliknij przycisk Wstecz, aby powr�ci� do poprzedniego ekranu.";
    Agent_Speak(L_BadPIDHowToEnter1_Text);
    
    Agent_Play("RestPose");
    
    var L_BadPIDHowToEnter2_Text = "Wska�nik w postaci migaj�cej pionowej kreski b�dzie ju� ustawiony w pierwszym polu, w kt�rym nale�y wpisywa�.";
    Agent_Speak(L_BadPIDHowToEnter2_Text);

    var L_BadPIDHowToEnter3_Text = "Po wpisaniu pierwszych 5 znak�w wska�nik automatycznie przemie�ci si� do nast�pnego pola i b�dzie mo�na wpisa� nast�pne 5 znak�w.";
    Agent_Speak(L_BadPIDHowToEnter3_Text);

    var L_BadPIDHowToEnter4_Text = "Nie wpisuj my�lnik�w i nie zwracaj uwagi na wielko�� liter.";
    Agent_Speak(L_BadPIDHowToEnter4_Text);

    var L_BadPIDHowToEnter5_Text = "Nast�pnie kliknij przycisk Dalej, aby kontynuowa�.";
    Agent_Speak(L_BadPIDHowToEnter5_Text);
}

function Agent_OnBadPIDWhatIfNotKnown() 
{
    var L_BadPIDWhatIfNotKnown1_Text = "W przypadku braku klucza produktu (Product Key) na opakowaniu dysku CD sprawd� nalepk� Certyfikatu Autentyczno�ci (Certificate of Authenticity) na tym komputerze PC lub z ty�u podr�cznika \"Wprowadzenie\".";
    Agent_Speak(L_BadPIDWhatIfNotKnown1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
    
    var L_BadPIDWhatIfNotKnown2_Text = "Po znalezieniu klucza produktu kliknij przycisk Wstecz i wpisz klucz produktu w polach na poprzednim ekranie.";
    Agent_Speak(L_BadPIDWhatIfNotKnown2_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotKnown3_Text = "Je�li nie mo�esz znale�� klucza produktu, zadzwo� do producenta komputera pod numer telefonu %s.";
    var re = /%s/i;
    var L_BadPIDWhatIfNotKnown4_Text = "Je�li nie mo�esz znale�� klucza produktu, skontaktuj si� z producentem komputera.";

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
        Agent_Speak(L_BadPIDWhatIfNotKnown4_Text);
    else
        Agent_Speak(L_BadPIDWhatIfNotKnown3_Text.replace(re, strPhoneNumber));
}

function Agent_OnBadPIDWhatIfNotWorking() 
{
    var L_BadPIDWhatIfNotWorking1_Text = "By� mo�e nast�pi�a pomy�ka przy wpisywaniu.";
    Agent_Speak(L_BadPIDWhatIfNotWorking1_Text);
    
    var L_BadPIDWhatIfNotWorking2_Text = "Musisz wprowadzi� wszystkie 25 znak�w klucza produktu.";
    Agent_Speak(L_BadPIDWhatIfNotWorking2_Text);

    var L_BadPIDWhatIfNotWorking3_Text = "Ka�da cz�� powinna zawiera� 5 liter lub cyfr.";
    Agent_Speak(L_BadPIDWhatIfNotWorking3_Text);

    var L_BadPIDWhatIfNotWorking4_Text = "Musisz wprowadzi� legalny klucz produktu, zanim zaczniesz u�ywa� systemu Windows.";
    Agent_Speak(L_BadPIDWhatIfNotWorking4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDWhatIfNotWorking5_Text = "Je�li podejrzewasz, �e klucz zosta� wpisany z b��dem, kliknij przycisk Wstecz i wpisz poprawny klucz.";
    Agent_Speak(L_BadPIDWhatIfNotWorking5_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking6_Text = "Natomiast je�li masz pewno��, �e klucz zosta� wpisany poprawnie lub kolejne pr�by nie przynosz� rezultatu, mo�e to oznacza�, �e masz nielegaln� kopi� systemu Windows.";
    Agent_Speak(L_BadPIDWhatIfNotWorking6_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatIfNotWorking7_Text = "W tym wypadku kliknij przycisk Zamknij, aby wy��czy� komputer.";
    Agent_Speak(L_BadPIDWhatIfNotWorking7_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking8_Text = "Zadzwo� pod numer linii antypirackiej BSA (22) 434 34 34.";
    Agent_Speak(L_BadPIDWhatIfNotWorking8_Text);

    var L_BadPIDWhatIfNotWorking9_Text = "W pozosta�ych krajach skontaktuj si� z lokalnym przedstawicielstwem firmy Microsoft.";
    Agent_Speak(L_BadPIDWhatIfNotWorking9_Text);
}

function Agent_OnBadPIDWhoCanICall() 
{
    var L_BadPIDWhoCanICall1_Text = "Je�li klucz produktu nie jest akceptowany, zadzwo� pod numer linii antypirackiej BSA (22) 434 34 34.";
    Agent_Speak(L_BadPIDWhoCanICall1_Text);
    
    var L_BadPIDWhoCanICall2_Text = "W pozosta�ych krajach skontaktuj si� z lokalnym przedstawicielstwem firmy Microsoft.";
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
	
    var L_BadPIDWhatToDoNext1_Text = "Kliknij przycisk Wstecz i wpisz poprawny klucz produktu.";
    Agent_Speak(L_BadPIDWhatToDoNext1_Text);
    
    var L_BadPIDWhatToDoNext2_Text = "Je�li klucz produktu nie jest akceptowany, mo�e oznacza� to, �e masz nielegaln� kopi� systemu Windows.";
    Agent_Speak(L_BadPIDWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatToDoNext3_Text = "W tym wypadku kliknij przycisk Zamknij, aby wy��czy� komputer. ";
    Agent_Speak(L_BadPIDWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatToDoNext4_Text = "Zadzwo� pod numer linii antypirackiej BSA (22) 434 34 34.";
    Agent_Speak(L_BadPIDWhatToDoNext4_Text);

    var L_BadPIDWhatToDoNext5_Text = "W pozosta�ych krajach skontaktuj si� z lokalnym przedstawicielstwem firmy Microsoft.";
    Agent_Speak(L_BadPIDWhatToDoNext5_Text);
}



function Agent_IconnAddCommands() 
{
    var L_IconnMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_IconnMenuCommand2_Text = "&Kt�r� opcj� nale�y wybra�?";
    var L_IconnMenuCommand3_Text = "&Co mam robi� dalej?";

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
    var L_IconnAboutThisStep1_Text = "Instalacja systemu Windows XP na tym komputerze zosta�a pomy�lnie uko�czona!";
    Agent_Speak(L_IconnAboutThisStep1_Text); 
      
    var L_IconnAboutThisStep2_Text = "W tym momencie mog� pom�c Ci skonfigurowa� ten komputer do dost�pu do Internetu.";
    Agent_Speak(L_IconnAboutThisStep2_Text);
       
    var L_IconnAboutThisStep3_Text = "Je�li nie chcesz zrobi� tego teraz, mo�esz uruchomi� Kreatora po��cze� internetowych z menu Start po skonfigurowaniu systemu Windows.";
    Agent_Speak(L_IconnAboutThisStep3_Text);
}

function Agent_IconnWhichOption() 
{    
    var L_IconnWhichOption1_Text = "Wybierz Nie, je�li zamierzasz u�y� us�ugodawcy internetowego, inaczej \"ISP\", kt�ry wymaga zainstalowania w�asnego oprogramowania.";
    Agent_Speak(L_IconnWhichOption1_Text); 
      
    var L_IconnWhichOption2_Text = "Stanie si� tak, je�li ju� masz dysk CD od tego us�ugodawcy ISP.";
    Agent_Speak(L_IconnWhichOption2_Text);
       
    var L_IconnWhichOption3_Text = "Nast�pnie skonfiguruj ten komputer do dost�pu do Internetu po zako�czeniu konfigurowania systemu Windows.";
    Agent_Speak(L_IconnWhichOption3_Text);
}

function Agent_OnIconnWhatToDoNext() 
{      
    Agent_GestureAtElement(g.radioYesIconn, "Left");  
    
    var L_IconnWhatToDoNext1_Text = "Je�li potrzebujesz pomocy przy konfigurowaniu po��czenia z Internetem, kliknij opcj� Tak.";
    Agent_Speak(L_IconnWhatToDoNext1_Text);
    
    Agent_Play("RestPose"); 
        
    Agent_GestureAtElement(g.radioNoIconn, "Left");  
    
    var L_IconnWhatToDoNext2_Text = "Je�li nie chcesz teraz ustanowi� po��czenia internetowego, wybierz opcj� \"Nie\"";
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

    var L_IconnWhatToDoNext3_Text = "Nast�pnie kliknij przycisk Dalej, aby kontynuowa�.";
    Agent_Speak(L_IconnWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPAddCommands() 
{
    var L_ISPMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_ISPMenuCommand2_Text = "Co &zrobi�, je�li sprzedawca mojego komputera da� mi informacje o koncie?";
    var L_ISPMenuCommand3_Text = "&Co mam robi� dalej?";

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
    var L_ISPAboutThisStep1_Text = "Na tym ekranie mo�esz wybra� spos�b dost�pu do Internetu.";
    Agent_Speak(L_ISPAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");

    var L_ISPAboutThisStep2_Text = "Sie� MSN";
    Agent_Speak(L_ISPAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");

        var L_ISPAboutThisStep3_Text = "lub inny us�ugodawca internetowy.";
        Agent_Speak(L_ISPAboutThisStep3_Text);
        
        Agent_Play("RestPose");
    }
    
    Agent_GestureAtElement(g.radioSkip, "Left");

    var L_ISPAboutThisStep4_Text = "Mo�esz tak�e kontynuowa� bez konfigurowania po��czenia internetowego tym razem.";
    Agent_Speak(L_ISPAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPWhatIfGivenAccount() 
{
    var L_ISPWhatIfGivenAccount1_Text = "Podczas zakupu komputera sprzedawca m�g� da� Ci kartk� z informacjami o koncie internetowym.";
	Agent_Speak(L_ISPWhatIfGivenAccount1_Text);
	
    var L_ISPWhatIfGivenAccount2_Text = "Te informacje o koncie zawieraj� nazw� u�ytkownika, has�o, nazw� us�ugodawcy internetowego i numer telefonu.";
	Agent_Speak(L_ISPWhatIfGivenAccount2_Text);
	
    var L_ISPWhatIfGivenAccount3_Text = "Je�li masz te informacje, oznacza to, �e ju� masz konto internetowe.";
	Agent_Speak(L_ISPWhatIfGivenAccount3_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");
	
    var L_ISPWhatIfGivenAccount4_Text = "Je�li nazw� us�ugodawcy internetowego jest MSN, zaznacz pierwsz� opcj� (us�uga dost�pna jedynie w USA).";
	Agent_Speak(L_ISPWhatIfGivenAccount4_Text);
    
    Agent_Play("RestPose");

    
    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");
    	
        var L_ISPWhatIfGivenAccount5_Text = "Je�li nazw� us�ugodawcy internetowego nie jest MSN, zaznacz drug� opcj� (us�uga dost�pna jedynie w USA).";
    	Agent_Speak(L_ISPWhatIfGivenAccount5_Text);
        
        Agent_Play("RestPose");
    }

    Agent_GestureAtElement(g.radioSkip, "Left");
    
    var L_ISPWhatIfGivenAccount6_Text = "Je�li chcesz p�niej skonfigurowa� po��czenie internetowe na tym komputerze, zaznacz ostatni� opcj�.";
	Agent_Speak(L_ISPWhatIfGivenAccount6_Text);
			    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_ISPWhatIfGivenAccount7_Text = "Nast�pnie kliknij przycisk Dalej.";
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
    
    var L_ISPWhatToDoNext1_Text = "Po wybraniu opcji, kliknij przycisk Dalej.";
	Agent_Speak(L_ISPWhatToDoNext1_Text);
	
	Agent_Play("RestPose");
}



function Agent_ICSAddCommands() 
{
	var L_ICSAddCommands1_Text = "&Powiedz mi co� o tym kroku";
	var L_ICSAddCommands2_Text = "Co to j&est zapora po��czenia internetowego?";
	var L_ICSAddCommands3_Text = "C&o to jest Kreator sieci domowej?";
	
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
	var L_ICSAboutThisStep1_Text = "Na tym ekranie mo�esz wybra�, jak ten komputer ma uzyskiwa� dost�p do Internetu.";
	Agent_Speak(L_ICSAboutThisStep1_Text);
	
	var L_ICSAboutThisStep2_Text = "Je�li ten komputer jest po��czony z innymi komputerami w sieci, mo�esz u�y� sieci do uzyskiwania dost�pu do Internetu.";
	Agent_Speak(L_ICSAboutThisStep2_Text);
	
	var L_ICSAboutThisStep3_Text = "W przeciwnym wypadku komputer mo�na skonfigurowa� do bezpo�redniego ��czenia si� z Internetem.";
	Agent_Speak(L_ICSAboutThisStep3_Text);
	
	var L_ICSAboutThisStep4_Text = "Niezale�nie od wybranej opcji, system Windows XP chroni Ci� za pomoc� zapory po��czenia internetowego, zabezpieczaj�c komputer przed nieautoryzowanym dost�pem innych u�ytkownik�w Internetu.";
	Agent_Speak(L_ICSAboutThisStep4_Text);
}
	
function Agent_ICSWhatIsFirewall() 
{
	var L_ICSWhatIsFirewall1_Text = "Zapora to system zabezpieczaj�cy, zaprojektowany w celu ochrony komputera - lub sieci komputerowej - przed zagro�eniami z zewn�trz, na przyk�ad hakerami, przychodz�cymi z innych sieci, na przyk�ad z Internetu.";
	Agent_Speak(L_ICSWhatIsFirewall1_Text);
	
	var L_ICSWhatIsFirewall2_Text = "Podczas konfigurowania sieci w systemie Windows XP funkcja Zapory po��czenia internetowego systemu Windows XP jest automatycznie w��czana.";
	Agent_Speak(L_ICSWhatIsFirewall2_Text);
	
	var L_ICSWhatIsFirewall3_Text = "Jest ona tak�e w��czana w przypadku, gdy komputer nie jest cz�ci� sieci, a uzyskuje dost�p do Internetu bezpo�rednio.";
	Agent_Speak(L_ICSWhatIsFirewall3_Text);
}
	
function Agent_ICSWhatIsNetworkWizard() 
{
	var L_ICSWhatIsNetworkWizard1_Text = "Ten kreator poprowadzi Ci� krok po kroku przez proces konfigurowania sieci w domu lub miejscu pracy.";
	Agent_Speak(L_ICSWhatIsNetworkWizard1_Text);
	
	var L_ICSWhatIsNetworkWizard2_Text = "Je�li nie chcesz pod��cza� tego komputera do sieci podczas tego procesu, mo�esz wykona� to p�niej.";
	Agent_Speak(L_ICSWhatIsNetworkWizard2_Text);
	
	var L_ICSWhatIsNetworkWizard3_Text = "Po prostu przejd� do menu Start i kliknij polecenie Wi�cej program�w.";
	Agent_Speak(L_ICSWhatIsNetworkWizard3_Text);
	
	var L_ICSWhatIsNetworkWizard4_Text = "Nast�pnie kliknij polecenia Akcesoria, Komunikacja i Kreator sieci domowej.";
	Agent_Speak(L_ICSWhatIsNetworkWizard4_Text);
	
	var L_ICSWhatIsNetworkWizard5_Text = "Je�li zapomnisz te kroki, kliknij polecenie Pomoc i obs�uga techniczna w menu Start, aby znale�� odpowiedzi na pytania i inne warto�ciowe informacje.";
	Agent_Speak(L_ICSWhatIsNetworkWizard5_Text);
}



function Agent_ICSDCAddCommands() 
{
	var L_ICSDCAddCommands1_Text = "&Powiedz mi co� o tym kroku";
	var L_ICSDCAddCommands2_Text = "&Co mam robi� dalej?";
	
	g_AgentCharacter.Commands.Add("Agent_ICSDCAboutThisStep", L_ICSDCAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_ICSDCWhatToDoNext", L_ICSDCAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_ICSDCAboutThisStep() 
{
	var L_ICSDCAboutThisStep1_Text = "Ten ekran wyja�nia, �e ten komputer zosta� roz��czony z Internetem.";
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
    
	var L_ICSDCWhatToDoNext1_Text = "Kliknij przycisk Pon�w pr�b�, aby spr�bowa� po��czy� si� ponownie z Internetem.";
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
    
	var L_ICSDCWhatToDoNext2_Text = "Mo�esz te� klikn�� przycisk \"Pomi�\", aby kontynuowa� bez ��czenia si� z Internetem.";
	Agent_Speak(L_ICSDCWhatToDoNext2_Text);
	
	Agent_Play("RestPose");
}



function Agent_Ident1AddCommands() 
{
    var L_Ident1AddCommands1_Text = "&Powiedz mi co� o tym kroku";
    var L_Ident1AddCommands2_Text = "Co to jest &konto u�ytkownika?";
    var L_Ident1AddCommands3_Text = "Jakie s� korzy�ci ze &skonfigurowania kont u�ytkownik�w?";
    var L_Ident1AddCommands4_Text = "&Co mam robi� dalej?";

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
	var L_Ident1AboutThisStep1_Text = "Na tym ekranie mo�esz okre�li� osoby, kt�re b�d� u�ywa� tego komputera.";
	Agent_Speak(L_Ident1AboutThisStep1_Text);
	
	var L_Ident1AboutThisStep2_Text = "Je�li wsp�u�ytkujesz ten komputer z innymi osobami, ka�dy u�ytkownik mo�e spersonalizowa� system Windows XP poprzez skonfigurowanie konta dla ka�dej osoby.";
	Agent_Speak(L_Ident1AboutThisStep2_Text);
    
    var L_Ident1AboutThisStep3_Text = "Dzi�ki temu ka�dy u�ytkownik mo�e mie� w�asne ustawienia komputera, uprawnienia, pliki prywatne, ��cza sieci Web i inne opcje bez wp�ywu na Tw�j spos�b spersonalizowania systemu.";
    Agent_Speak(L_Ident1AboutThisStep3_Text);
    
    var L_Ident1AboutThisStep4_Text = "Wszystkie nazwy wpisane na tym ekranie b�d� wy�wietlane na ekranie powitalnym po uruchomieniu komputera.";
    Agent_Speak(L_Ident1AboutThisStep4_Text);
    
    var L_Ident1AboutThisStep5_Text = "Dodatkowo, dla ka�dej osoby b�dzie wy�wietlany obraz.";
    Agent_Speak(L_Ident1AboutThisStep5_Text);
    
    var L_Ident1AboutThisStep6_Text = "Mo�esz zawsze zmieni� te nazwy p�niej, klikaj�c w menu Start polecenie Panel sterowania, a nast�pnie klikaj�c ikon� Konta u�ytkownik�w.";
    Agent_Speak(L_Ident1AboutThisStep6_Text);
}

function Agent_Ident1Command_WhatIsUserAccount() 
{	
	var L_Ident1WhatIsUserAccount1_Text = "Je�li wsp�u�ytkujesz komputer z innymi osobami w domu lub w biurze, spodoba Ci si� funkcja kont u�ytkownik�w.";
	Agent_Speak(L_Ident1WhatIsUserAccount1_Text);
	
	var L_Ident1WhatIsUserAccount2_Text = "Za pomoc� kont u�ytkownik�w mo�esz:";
	Agent_Speak(L_Ident1WhatIsUserAccount2_Text);
    
    var L_Ident1WhatIsUserAccount3_Text = "Personalizowa� spos�b, w jaki system Windows b�dzie organizowa� i wy�wietla� informacje bez wp�ywu na preferencje innych u�ytkownik�w;";
    Agent_Speak(L_Ident1WhatIsUserAccount3_Text);
    
    var L_Ident1WhatIsUserAccount4_Text = "��da� has�a w celu dost�pu do plik�w;";
    Agent_Speak(L_Ident1WhatIsUserAccount4_Text);
    
    var L_Ident1WhatIsUserAccount5_Text = "Zapami�ta� osobist� list� ulubionych w sieci Web i ostatnio odwiedzonych witryn;";
    Agent_Speak(L_Ident1WhatIsUserAccount5_Text);
    
    var L_Ident1WhatIsUserAccount6_Text = "Chroni� wa�ne ustawienia komputera;";
    Agent_Speak(L_Ident1WhatIsUserAccount6_Text);
    
    var L_Ident1WhatIsUserAccount7_Text = "Dostosowa� pulpit dla ka�dego u�ytkownika i";
    Agent_Speak(L_Ident1WhatIsUserAccount7_Text);
    
    var L_Ident1WhatIsUserAccount8_Text = "U�atwi� logowanie i prze��czanie si� mi�dzy u�ytkownikami komputera.";
    Agent_Speak(L_Ident1WhatIsUserAccount8_Text);
}

function Agent_Ident1Command_Benefits() 
{	
	var L_Ident1Benefits1_Text = "Wsp�u�ytkowanie komputera zwykle oznacza, �e inni u�ytkownicy mog� ogl�da� Twoje prywatne pliki, instalowa� gry lub inne niepo��dane oprogramowanie lub zmienia� ustawienia komputera.";
	Agent_Speak(L_Ident1Benefits1_Text);
	
	var L_Ident1Benefits2_Text = "Teraz wszystko si� zmieni!";
	Agent_Speak(L_Ident1Benefits2_Text);
    
    var L_Ident1Benefits3_Text = "Po ustawieniu kont u�ytkownik�w ka�dy u�ytkownik mo�e personalizowa� system Windows bez wp�ywu na innych u�ytkownik�w tego komputera.";
    Agent_Speak(L_Ident1Benefits3_Text);
    
    var L_Ident1Benefits4_Text = "Je�li chcesz wiedzie� wi�cej o kontach u�ytkownik�w, kliknij polecenie Pomoc i obs�uga techniczna w menu Start, aby znale�� odpowiedzi na pytania i inne warto�ciowe informacje.";
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
    
    var L_Ident1WhatToDoNext1_Text = "Po wpisaniu nazw innych os�b, kt�re b�d� u�ywa� tego komputera, kliknij przycisk Dalej, aby kontynuowa�.";
    Agent_Speak(L_Ident1WhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_Ident1WhatToDoNext2_Text = "Mo�esz p�niej zmieni� te nazwy i doda� wi�cej u�ytkownik�w po skonfigurowaniu systemu Windows.";
    Agent_Speak(L_Ident1WhatToDoNext2_Text);
        
    var L_Ident1WhatToDoNext3_Text = "Po prostu kliknij polecenie Panel sterowania w menu Start i wybierz ikon� Konta u�ytkownik�w.";
    Agent_Speak(L_Ident1WhatToDoNext3_Text);
}



function Agent_IdentitiesAddCommands() 
{
    var L_IdentitiesAddCommands1_Text = "&Powiedz mi co� o tym kroku";
    var L_IdentitiesAddCommands2_Text = "Co to jest &konto u�ytkownika?";
    var L_IdentitiesAddCommands3_Text = "Jakie s� korzy�ci ze &skonfigurowania kont u�ytkownik�w?";
    var L_IdentitiesAddCommands4_Text = "&Co mam robi� dalej?";

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
	var L_IdentitiesAboutThisStep1_Text = "Na tym ekranie mo�esz okre�li� osoby, kt�re b�d� u�ywa� tego komputera.";
	Agent_Speak(L_IdentitiesAboutThisStep1_Text);
	
	var L_IdentitiesAboutThisStep2_Text = "Je�li wsp�u�ytkujesz ten komputer z innymi osobami, ka�dy u�ytkownik mo�e spersonalizowa� system Windows XP poprzez skonfigurowanie konta dla ka�dej osoby.";
	Agent_Speak(L_IdentitiesAboutThisStep2_Text);
    
    var L_IdentitiesAboutThisStep3_Text = "Dzi�ki temu ka�dy u�ytkownik mo�e mie� w�asne ustawienia komputera, uprawnienia, pliki prywatne, ��cza sieci Web i inne opcje bez wp�ywu na Tw�j spos�b spersonalizowania systemu.";
    Agent_Speak(L_IdentitiesAboutThisStep3_Text);
    
    var L_IdentitiesAboutThisStep4_Text = "Wszystkie nazwy wpisane na tym ekranie b�d� wy�wietlane na ekranie powitalnym po uruchomieniu komputera.";
    Agent_Speak(L_IdentitiesAboutThisStep4_Text);
    
    var L_IdentitiesAboutThisStep5_Text = "Dodatkowo, dla ka�dej osoby b�dzie wy�wietlany obraz.";
    Agent_Speak(L_IdentitiesAboutThisStep5_Text);
    
    var L_IdentitiesAboutThisStep6_Text = "Mo�esz zawsze zmieni� te nazwy p�niej, klikaj�c w menu Start polecenie Panel sterowania, a nast�pnie klikaj�c ikon� Konta u�ytkownik�w.";
    Agent_Speak(L_IdentitiesAboutThisStep6_Text);
}

function Agent_IdentitiesCommand_WhatIsUserAccount() 
{	
	var L_IdentitiesWhatIsUserAccount1_Text = "Je�li wsp�u�ytkujesz komputer z innymi osobami w domu lub w biurze, spodoba Ci si� funkcja kont u�ytkownik�w.";
	Agent_Speak(L_IdentitiesWhatIsUserAccount1_Text);
	
	var L_IdentitiesWhatIsUserAccount2_Text = "Za pomoc� kont u�ytkownik�w mo�esz:";
	Agent_Speak(L_IdentitiesWhatIsUserAccount2_Text);
    
    var L_IdentitiesWhatIsUserAccount3_Text = "Personalizowa� spos�b, w jaki system Windows b�dzie organizowa� i wy�wietla� informacje bez wp�ywu na preferencje innych u�ytkownik�w;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount3_Text);
    
    var L_IdentitiesWhatIsUserAccount4_Text = "��da� has�a w celu dost�pu do plik�w;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount4_Text);
    
    var L_IdentitiesWhatIsUserAccount5_Text = "Zapami�ta� osobist� list� ulubionych w sieci Web i ostatnio odwiedzonych witryn;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount5_Text);
    
    var L_IdentitiesWhatIsUserAccount6_Text = "Chroni� wa�ne ustawienia komputera;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount6_Text);
    
    var L_IdentitiesWhatIsUserAccount7_Text = "Dostosowa� pulpit dla ka�dego u�ytkownika i";
    Agent_Speak(L_IdentitiesWhatIsUserAccount7_Text);
    
    var L_IdentitiesWhatIsUserAccount8_Text = "U�atwi� logowanie i prze��czanie si� mi�dzy u�ytkownikami komputera.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount8_Text);
}

function Agent_IdentitiesCommand_Benefits() 
{	
	var L_IdentitiesBenefits1_Text = "Wsp�u�ytkowanie komputera zwykle oznacza, �e inni u�ytkownicy mog� ogl�da� Twoje prywatne pliki, instalowa� gry lub inne niepo��dane oprogramowanie lub zmienia� ustawienia komputera.";
	Agent_Speak(L_IdentitiesBenefits1_Text);
	
	var L_IdentitiesBenefits2_Text = "Teraz wszystko si� zmieni!";
	Agent_Speak(L_IdentitiesBenefits2_Text);
    
    var L_IdentitiesBenefits3_Text = "Po ustawieniu kont u�ytkownik�w ka�dy u�ytkownik mo�e personalizowa� system Windows bez wp�ywu na innych u�ytkownik�w tego komputera.";
    Agent_Speak(L_IdentitiesBenefits3_Text);
    
    var L_IdentitiesBenefits4_Text = "Je�li chcesz wiedzie� wi�cej o kontach u�ytkownik�w, kliknij polecenie Pomoc i obs�uga techniczna w menu Start, aby znale�� odpowiedzi na pytania i inne warto�ciowe informacje.";
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
    
    var L_IdentitiesWhatToDoNext1_Text = "Po wpisaniu nazw innych os�b, kt�re b�d� u�ywa� tego komputera, kliknij przycisk Dalej, aby kontynuowa�.";
    Agent_Speak(L_IdentitiesWhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_IdentitiesWhatToDoNext2_Text = "Mo�esz p�niej zmieni� te nazwy i doda� wi�cej u�ytkownik�w po skonfigurowaniu systemu Windows.";
    Agent_Speak(L_IdentitiesWhatToDoNext2_Text);
        
    var L_IdentitiesWhatToDoNext3_Text = "Po prostu kliknij polecenie Panel sterowania w menu Start i wybierz ikon� Konta u�ytkownik�w.";
    Agent_Speak(L_IdentitiesWhatToDoNext3_Text);
}



function Agent_KeybdAddCommands() 
{
	var L_KeybdMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_KeybdMenuCommand2_Text = "Jak mam wybra� m�j &region?";
    var L_KeybdMenuCommand3_Text = "Jak mam wybra� m�j &j�zyk?";
    var L_KeybdMenuCommand4_Text = "Jak mam wybra� moj� &klawiatur�?";

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
    var L_KeybdAboutThisStep1_Text = "Na kilku nast�pnych ekranach mo�esz powiedzie� systemowi Windows, jak ma wy�wietla� tekst, daty i liczby w oparciu o Twoje preferencje dotycz�ce j�zyka, regionu i strefy czasowej.";
    Agent_Speak(L_KeybdAboutThisStep1_Text);
        
    var L_KeybdAboutThisStep2_Text = "Na tym ekranie na przyk�ad mo�esz wybra� region �wiata najbli�szy Twojego miejsca zamieszkania, j�zyk, kt�rego najcz�ciej b�dziesz u�ywa� na tym komputerze, a tak�e u�ywan� klawiatur�.";
    Agent_Speak(L_KeybdAboutThisStep2_Text);
        
    var L_KeybdAboutThisStep3_Text = "System Windows zapewni Ci poprawne wy�wietlanie daty, godziny i waluty.";
    Agent_Speak(L_KeybdAboutThisStep3_Text);
        
    var L_KeybdAboutThisStep4_Text = "Je�li na przyk�ad wybierzesz jako sw�j region Stany Zjednoczone, a jako sw�j j�zyk - j�zyk angielski, kwoty walut b�d� wy�wietlane w dolarach USA.";
    Agent_Speak(L_KeybdAboutThisStep4_Text);

    var L_KeybdAboutThisStep5_Text = "Je�li jednak jako sw�j region wybierzesz Wielk� Brytani�, kwoty walut b�d� wy�wietlane w funtach brytyjskich.";
    Agent_Speak(L_KeybdAboutThisStep5_Text);
}

function Agent_KeybdHowToSelectRegion() 
{     
    Agent_GestureAtElement(g.selRegion, "Left");
     
    var L_KeybdHowToSelectRegion1_Text = "Kraje i regiony �wiata wyst�puj� na tej li�cie w porz�dku alfabetycznym.";
    Agent_Speak(L_KeybdHowToSelectRegion1_Text);	
   
    var L_KeybdHowToSelectRegion2_Text = "Kliknij wewn�trz listy lub naciskaj klawisz Tab na klawiaturze, a� do osi�gni�cia tego miejsca.";
    Agent_Speak(L_KeybdHowToSelectRegion2_Text);	
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selRegion, "Right");
        
    var L_KeybdHowToSelectRegion3_Text = "Nast�pnie, w celu przewini�cia region�w, kliknij te przyciski ma�ych strza�ek lub u�yj klawiszy strza�ki w g�r� i strza�ki w d� na klawiaturze.";
    Agent_Speak(L_KeybdHowToSelectRegion3_Text);
        
    var L_KeybdHowToSelectRegion4_Text = "Kiedy zobaczysz region najbli�szy Twojego miejsca zamieszkania, kliknij go lub naci�nij klawisz Enter na klawiaturze.";
    Agent_Speak(L_KeybdHowToSelectRegion4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.RegionName, "Left");

    var L_KeybdHowToSelectRegion5_Text = "Wybrany region pojawi si� w tym polu.";
    Agent_Speak(L_KeybdHowToSelectRegion5_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectLanguage() 
{        		
    var L_KeybdHowToSelectLanguage1_Text = "Wybierz j�zyk, w kt�rym porozumiewasz si� najcz�ciej.";
    Agent_Speak(L_KeybdHowToSelectLanguage1_Text);
        
    var L_KeybdHowToSelectLanguage2_Text = "Na przyk�ad, je�li najcz�ciej m�wisz po angielsku, ale programy komputerowe i pliki, z kt�rymi pracujesz, s� zazwyczaj w j�zyku polskim, wybierz tutaj j�zyk polski.";
    Agent_Speak(L_KeybdHowToSelectLanguage2_Text);   
        
    Agent_GestureAtElement(g.selLang, "Left");  
        
    var L_KeybdHowToSelectLanguage3_Text = "J�zyki wyst�puj� na tej li�cie w kolejno�ci alfabetycznej.";
    Agent_Speak(L_KeybdHowToSelectLanguage3_Text);

    var L_KeybdHowToSelectLanguage4_Text = "Kliknij tutaj lub naciskaj klawisz Tab na klawiaturze, a� do osi�gni�cia tego miejsca.";
    Agent_Speak(L_KeybdHowToSelectLanguage4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selLang, "Right");

    var L_KeybdHowToSelectLanguage5_Text = "Nast�pnie, w celu przewini�cia region�w, kliknij te przyciski ma�ych strza�ek lub u�yj klawiszy strza�ki w g�r� i strza�ki w d� na klawiaturze.";
    Agent_Speak(L_KeybdHowToSelectLanguage5_Text);

    var L_KeybdHowToSelectLanguage6_Text = "Kiedy zobaczysz ��dany j�zyk, kliknij go lub naci�nij klawisz Enter na klawiaturze.";
    Agent_Speak(L_KeybdHowToSelectLanguage6_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.LangName, "Left");

    var L_KeybdHowToSelectLanguage7_Text = "Wybrany j�zyk pojawi si� w tym polu.";
    Agent_Speak(L_KeybdHowToSelectLanguage7_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectKeyboard() 
{		
    var L_KeybdHowToSelectKeyboard1_Text = "Klawiatury wyst�puj� na tej li�cie w kolejno�ci alfabetycznej.";
    Agent_Speak(L_KeybdHowToSelectKeyboard1_Text);
    
    Agent_GestureAtElement(g.selKeyboard, "Left");
        
    var L_KeybdHowToSelectKeyboard2_Text = "Kliknij tutaj lub naciskaj klawisz Tab na klawiaturze, a� do osi�gni�cia tego miejsca.";
    Agent_Speak(L_KeybdHowToSelectKeyboard2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selKeyboard, "Right");
        
    var L_KeybdHowToSelectKeyboard3_Text = "Nast�pnie kliknij te przyciski ma�ych strza�ek lub u�yj klawiszy strza�ki w g�r� i strza�ki w d� na klawiaturze, aby przewin�� list�.";
    Agent_Speak(L_KeybdHowToSelectKeyboard3_Text);
        
    var L_KeybdHowToSelectKeyboard4_Text = "Kiedy zobaczysz klawiatur�, kt�rej u�ywasz do pracy z tym komputerem, kliknij j� lub naci�nij klawisz Enter na klawiaturze.";
    Agent_Speak(L_KeybdHowToSelectKeyboard4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.KeyboardName, "Left");

    var L_KeybdHowToSelectKeyboard5_Text = "Wybrana klawiatura pojawi si� w tym polu.";
    Agent_Speak(L_KeybdHowToSelectKeyboard5_Text);
    
    Agent_Play("RestPose");
}



function Agent_EulaAddCommands() 
{
    var L_EulaCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_EulaCommand2_Text = "Jak &mog� wskaza� odpowied�?";
    var L_EulaCommand3_Text = "&Czym w�a�ciwie jest Umowa Licencyjna U�ytkownika Oprogramowania?";
    var L_EulaCommand4_Text = "Co m�wi Umowa Licencyjna U�ytkownika Oprogramowania (&EULA)?";
    var L_EulaCommand5_Text = "Dl&aczego przycisk Dalej jest niedost�pny?";
    var L_EulaCommand6_Text = "&Co mam robi� dalej?";

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
        var L_EulaMenuCommand5_Text = "Dl&aczego przycisk Dalej jest niedost�pny?";

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
    var L_EulaAboutThisStep1_Text = "Na tym ekranie mo�esz przeczyta� umow� licencyjn� systemu Microsoft Windows, a nast�pnie wskaza�, czy j� akceptujesz.";
    Agent_Speak(L_EulaAboutThisStep1_Text);		
    
    Agent_GestureAtElement(g.txtEULA,"Left");
        
    var L_EulaAboutThisStep2_Text = "Aby u�ywa� systemu Windows, musisz zaakceptowa� t� umow�.";
    Agent_Speak(L_EulaAboutThisStep2_Text);
    
    Agent_Play("RestPose");
}

function Agent_EulaHowToAnswer() 
{		
    Agent_GestureAtElement(g.radioAgree,"Left");
    
    var L_EulaHowToAnswer1_Text = "Po prostu umie�� wska�nik myszy w bia�ym k�ku z lewej strony odpowiedzi i kliknij jeden raz.";
    Agent_Speak(L_EulaHowToAnswer1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaHowToAnswer2_Text = "Nast�pnie kliknij przycisk Dalej.";
    Agent_Speak(L_EulaHowToAnswer2_Text);
}

function Agent_EulaWhatIsEula() 
{		
    var L_EulaWhatIsEula1_Text = "U�ytkowanie produkt�w firmy Microsoft podlega warunkom umowy licencyjnej u�ytkownika oprogramowania (EULA), a tak�e prawu autorskiemu.";
    Agent_Speak(L_EulaWhatIsEula1_Text);
        
    var L_EulaWhatIsEula2_Text = "EULA to umowa, kt�ra wyznacza zasady legalnego u�ytkowania licencjonowanego produktu, a tak�e udziela Ci konkretnego prawa do u�ywania tego produktu na swoim komputerze.";
    Agent_Speak(L_EulaWhatIsEula2_Text);
}

function Agent_EulaWhatDoesEulaSay() 
{		
    var L_EulaWhatDoesEulaSay1_Text = "Po zaakceptowaniu jej warunk�w Umowa Licencyjna U�ytkownika Oprogramowania daje Ci uprawnienia do korzystania z systemu Windows XP i udziela dodatkowych praw.";
    Agent_Speak(L_EulaWhatDoesEulaSay1_Text);
        
    var L_EulaWhatDoesEulaSay2_Text = "Nak�ada ona r�wnie� pewne ograniczenia na korzystanie z systemu Windows XP.";
    Agent_Speak(L_EulaWhatDoesEulaSay2_Text);	
    
    Agent_GestureAtElement(g.txtEULA,"Right");	
        
    var L_EulaWhatDoesEulaSay3_Text = "Aby przeczyta� szczeg�y, przewi� umow� w d� do sekcji Udzielenie licencji.";
    Agent_Speak(L_EulaWhatDoesEulaSay3_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatDoesEulaSay4_Text = "Umowa Licencyjna U�ytkownika Oprogramowania opisuje tak�e ograniczenie gwarancji oraz warunki, na jakich mo�esz wykonywa� kopi� zapasow� lub kopi� archiwaln� systemu Windows XP.";
    Agent_Speak(L_EulaWhatDoesEulaSay4_Text);
}

function Agent_EulaWhereIsNextButton() 
{		
    var L_EulaWhereIsNextButton1_Text = "Przycisk Dalej nie jest jeszcze dost�pny, poniewa� nie wybrano opcji zwi�zanej z akceptowaniem umowy licencyjnej.";
    Agent_Speak(L_EulaWhereIsNextButton1_Text);
        
    var L_EulaWhereIsNextButton2_Text = "Musisz najpierw klikn�� opcj� Tak lub Nie.";
    Agent_Speak(L_EulaWhereIsNextButton2_Text);
}

function Agent_EulaWhatToDoNext() 
{			
    Agent_GestureAtElement(g.radioAgree,"Left");
    	
    var L_EulaWhatToDoNext1_Text = "Po przeczytaniu umowy licencyjnej kliknij przycisk Tak, aby j� zaakceptowa�.";
    Agent_Speak(L_EulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatToDoNext2_Text = "Mo�esz te� klikn�� przycisk Nie, je�li nie chcesz zaakceptowa� licencji.";
    Agent_Speak(L_EulaWhatToDoNext2_Text);
        
    var L_EulaWhatToDoNext3_Text = "Je�li chcesz dalej u�ywa� systemu Windows, musisz zaakceptowa� t� umow�.";
    Agent_Speak(L_EulaWhatToDoNext3_Text);
    			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_EulaWhatToDoNext4_Text = "Nast�pnie kliknij przycisk Dalej, aby przej�� do nast�pnego ekranu.";
    Agent_Speak(L_EulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_BadEulaAddCommands() {

    var L_BadEulaCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_BadEulaCommand2_Text = "Co m�wi Umowa Licencyjna U�ytkownika Oprogramowania (&EULA)?";
    var L_BadEulaCommand3_Text = "Co b�dzie, je�li nie zaakceptuj� Umowy Licencyjnej U�ytkownika Oprogramowania (EULA)?";
    var L_BadEulaCommand4_Text = "&Co mam robi� dalej?";

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
    var L_BadEulaAboutThisStep1_Text = "Na poprzednim ekranie zosta�a wybrana opcja nieakceptowania warunk�w umowy licencyjnej.";
    Agent_Speak(L_BadEulaAboutThisStep1_Text);

    var L_BadEulaAboutThisStep2_Text = "Wskutek tego nie b�dzie mo�na w przysz�o�ci u�ywa� systemu Windows.";
    Agent_Speak(L_BadEulaAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadEulaAboutThisStep3_Text = "Mo�esz jednak powr�ci� do poprzedniego ekranu, klikaj�c przycisk Wstecz, aby zaakceptowa� umow�.";
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
        
    var L_BadEulaAboutThisStep4_Text = "Mo�esz te� potwierdzi�, �e chcesz przesta� u�ywa� systemu Windows i wy��czy� komputer.";
    Agent_Speak(L_BadEulaAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_BadEulaWhatDoesEulaSay()
{
    var L_BadEulaWhatDoesEulaSay1_Text = "Po zaakceptowaniu jej warunk�w Umowa Licencyjna U�ytkownika Oprogramowania daje Ci uprawnienia do korzystania z systemu Windows XP i udziela dodatkowych praw.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay1_Text);

    var L_BadEulaWhatDoesEulaSay2_Text = "Nak�ada ona r�wnie� pewne ograniczenia na korzystanie z systemu Windows XP.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay2_Text);

    var L_BadEulaWhatDoesEulaSay3_Text = "Aby przeczyta� szczeg�owe informacje, kliknij przycisk Wstecz, otw�rz Umow� Licencyjn� U�ytkownika Oprogramowania i przewi� j� w d� do sekcji Udzielenie licencji.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay3_Text);
        
    var L_BadEulaWhatDoesEulaSay4_Text = "Umowa Licencyjna U�ytkownika Oprogramowania opisuje tak�e ograniczenie gwarancji oraz warunki, na jakich mo�esz wykonywa� kopi� zapasow� lub kopi� archiwaln� systemu Windows XP.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay4_Text);
}

function Agent_BadEulaWhatIfIDontAcceptEula()
{
    var L_BadEulaWhatIfIDontAcceptEula1_Text = "Poniewa� Umowa Licencyjna U�ytkownika Oprogramowania udziela uprawnie� do korzystania z systemu Windows XP, musisz zaakceptowa� t� umow�, aby m�c rozpocz�� korzystanie z systemu Windows XP.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadEulaWhatIfIDontAcceptEula2_Text = "Je�li zdecydujesz si�, aby nie akceptowa� umowy, mo�esz wy��czy� komputer, klikaj�c przycisk Zamknij.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula2_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatIfIDontAcceptEula3_Text = "Po ponownym uruchomieniu komputera powr�cisz do tego ekranu.";
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
    
    var L_BadEulaWhatToDoNext1_Text = "Je�li decydujesz si� na zaakceptowanie umowy licencyjnej, kliknij przycisk Wstecz.";
    Agent_Speak(L_BadEulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatToDoNext2_Text = "Musisz zaakceptowa� umow�, aby kontynuowa� ten proces i rozpocz�� u�ywanie systemu Windows.";
    Agent_Speak(L_BadEulaWhatToDoNext2_Text);

    var L_BadEulaWhatToDoNext3_Text = "Je�li nie zdecydujesz si� na zaakceptowanie umowy, kliknij przycisk Zamknij, aby wy��czy� komputer.";
    Agent_Speak(L_BadEulaWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_BadEulaWhatToDoNext4_Text = "Po ponownym uruchomieniu komputera powr�cisz do tego ekranu.";
    Agent_Speak(L_BadEulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}




function Agent_ProductKeyAddCommands() 
{
    var L_ProductKeyAddCommands1_Text = "&Powiedz mi co� o tym kroku";
    var L_ProductKeyAddCommands2_Text = "Co to jest &klucz produktu?";
    var L_ProductKeyAddCommands4_Text = "&Co mam robi� dalej?";

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

        var L_ProductKeyAddCommands3_Text = "Dl&aczego przycisk Dalej jest niedost�pny?";

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
    var L_ProductKeyAboutThisStep1_Text = "Na tym ekranie wprowad� 25-znakowy klucz produktu (Product Key), kt�ry powinien by� dostarczony przez producenta komputera.";
    Agent_Speak(L_ProductKeyAboutThisStep1_Text);

    var L_ProductKeyAboutThisStep2_Text = "W przypadku braku klucza produktu (Product Key) na opakowaniu dysku CD sprawd� nalepk� Certyfikatu Autentyczno�ci (Certificate of Authenticity) na tym komputerze PC lub z ty�u podr�cznika \"Wprowadzenie\".";
    Agent_Speak(L_ProductKeyAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pid1,"Left");

    var L_ProductKeyAboutThisStep3_Text = "Wszelkie wpisane tutaj litery zostan� automatycznie wy�wietlone jako wielkie litery.";
    Agent_Speak(L_ProductKeyAboutThisStep3_Text);
    
    Agent_Play("RestPose");
        
    var L_ProductKeyAboutThisStep4_Text = "Teraz mo�esz zarejestrowa� sw�j komputer i kopi� systemu Microsoft Windows.";
    Agent_Speak(L_ProductKeyAboutThisStep4_Text);
        
    var L_ProductKeyAboutThisStep5_Text = "Rejestracja systemu Windows jest prosta i niesie ze sob� wiele korzy�ci.";
    Agent_Speak(L_ProductKeyAboutThisStep5_Text);
}

function Agent_ProductKeyWhatIsProdKey()
{
    var L_ProductKeyWhatIsProdKey1_Text = "Ka�da kopia systemu Windows produkowana przez firm� Microsoft jest kodowana za pomoc� unikatowego klucza produktu.";
    Agent_Speak(L_ProductKeyWhatIsProdKey1_Text);

    var L_ProductKeyWhatIsProdKey2_Text = "Klucz produktu pomaga Ci upewni� si�, �e zakupiony przez Ciebie produkt jest oryginalnym produktem firmy Microsoft.";
    Agent_Speak(L_ProductKeyWhatIsProdKey2_Text);

    var L_ProductKeyWhatIsProdKey3_Text = "Pomaga to tak�e ochroni� Ci� przed pirack� kopi� systemu Windows.";
    Agent_Speak(L_ProductKeyWhatIsProdKey3_Text);
        
    var L_ProductKeyWhatIsProdKey4_Text = "Klucz produktu uprawnia tak�e do pewnych korzy�ci, takich jak pomoc techniczna, us�ugi reklamowe, uaktualnienia i oferty w sieci Web.";
    Agent_Speak(L_ProductKeyWhatIsProdKey4_Text);
}

function Agent_ProductKeyWhyNextNotAvailable()
{
    var L_ProductKeyWhyNextNotAvailable1_Text = "Przycisk Dalej jest niedost�pny, poniewa� nie zosta� wprowadzony prawid�owy klucz produktu.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable1_Text);

    var L_ProductKeyWhyNextNotAvailable2_Text = "Musisz wprowadzi� prawid�owy klucz produktu.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable2_Text);

    var L_ProductKeyWhyNextNotAvailable3_Text = "Nast�pnie mo�esz klikn�� przycisk Dalej, aby kontynuowa�.";
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
    
    var L_ProductKeyWhatToDoNext1_Text = "Po wpisaniu prawid�owego klucza produktu kliknij przycisk Dalej.";
    Agent_Speak(L_ProductKeyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}




function Agent_Reg1AddCommands() 
{
    var L_Reg1Command1_Text = "&Powiedz mi co� o tym kroku";
    var L_Reg1Command2_Text = "&Powiedz mi o rejestracji";
    var L_Reg1Command3_Text = "&Jak zarejestrowa� si� teraz?";
    var L_Reg1Command4_Text = "Czy &mo�na zarejestrowa� si� p�niej?";
    var L_Reg1Command5_Text = "&Czy warto si� zarejestrowa�?";
    var L_Reg1Command6_Text = "Powiedz mi, jak &udost�pnia� informacje";

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
    var L_Reg1AboutThisStep1_Text = "To jest pocz�tek sekcji rejestracji.";
    Agent_Speak(L_Reg1AboutThisStep1_Text);

    var L_Reg1AboutThisStep2_Text = "Tutaj mo�esz zarejestrowa� swoj� kopi� systemu Windows.";
    Agent_Speak(L_Reg1AboutThisStep2_Text);

    var L_Reg1AboutThisStep3_Text = "Gdy to zrobisz, b�dziesz mie� prawa do wielu korzy�ci przypadaj�cych klientom firmy Microsoft.";
    Agent_Speak(L_Reg1AboutThisStep3_Text);
        
    var L_Reg1AboutThisStep4_Text = "Korzy�ci te obejmuj� powiadamianie o aktualizacjach produkt�w oraz dost�p do cenionych us�ug pomocy technicznej firmy Microsoft.";
    Agent_Speak(L_Reg1AboutThisStep4_Text);
        
    var L_Reg1AboutThisStep5_Text = "Na tym ekranie mo�esz zdecydowa�, w jaki spos�b chcesz si� zarejestrowa�.";
    Agent_Speak(L_Reg1AboutThisStep5_Text);
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");
        
    var L_Reg1AboutThisStep6_Text = "Je�li chcesz znale�� wi�cej danych na temat zasad zachowania poufno�ci informacji firmy Microsoft, kliknij to ��cze.";
    Agent_Speak(L_Reg1AboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1AboutRegistration()
{    
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1AboutRegistration1_Text = "Kliknij tutaj, aby rozpocz�� proces rejestracji, a nast�pnie kliknij przycisk Dalej.";
    Agent_Speak(L_Reg1AboutRegistration1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.rb_reg_ms_no,"Left");

    var L_Reg1AboutRegistration2_Text = "Je�li nie chcesz si� zarejestrowa�, kliknij t� drug� opcj�, a nast�pnie kliknij przycisk \"Dalej\".";
    Agent_Speak(L_Reg1AboutRegistration2_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1HowToRegister()
{      
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1HowToRegister1_Text = "W celu zarejestrowania kopii systemu Windows upewnij si�, �e zosta�a zaznaczona opcja Tak.";
    Agent_Speak(L_Reg1HowToRegister1_Text); 
    
    Agent_Play("RestPose");

    var L_Reg1HowToRegister2_Text = "Nast�pnie kliknij przycisk Dalej, aby kontynuowa�.";
    Agent_Speak(L_Reg1HowToRegister2_Text);
}

function Agent_Reg1RegisterLater()
{
    var L_Reg1RegisterLater1_Text = "Je�li teraz pominiesz rejestracj�, mo�esz zarejestrowa� swoj� kopi� systemu Windows po zako�czonym konfigurowaniu systemu Windows.";
    Agent_Speak(L_Reg1RegisterLater1_Text);

    var L_Reg1RegisterLater2_Text = "Po prostu kliknij w menu Start polecenie Uruchom i wpisz regwiz /r.";
    Agent_Speak(L_Reg1RegisterLater2_Text);

    var L_Reg1RegisterLater3_Text = "Je�li zapomnisz te kroki, kliknij polecenie Pomoc i obs�uga techniczna w menu Start, aby znale�� odpowiedzi na pytania i inne warto�ciowe informacje.";
    Agent_Speak(L_Reg1RegisterLater3_Text);
}

function Agent_Reg1WhyRegister()
{
    var L_Reg1WhyRegister1_Text = "Gdy zarejestrujesz swoj� kopi� systemu Windows, b�dziesz mie� uprawnienia do wielu korzy�ci przypadaj�cych klientom firmy Microsoft.";
    Agent_Speak(L_Reg1WhyRegister1_Text);

    var L_Reg1WhyRegister2_Text = "Korzy�ci te obejmuj� powiadamianie o aktualizacjach produkt�w oraz dost�p do cenionych us�ug pomocy technicznej firmy Microsoft.";
    Agent_Speak(L_Reg1WhyRegister2_Text);
}

function Agent_Reg1AboutSharingInfo()
{
    
    if (!window.external.get_RetailOOBE()) 
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Przez zaznaczenie tych opcji zgadzasz si� na udost�pnienie swoich informacji rejestracyjnych firmie Microsoft i producentowi komputera.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text); 
    
        Agent_Play("RestPose");
    }
    else
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Przez zaznaczenie tych opcji zgadzasz si� na udost�pnienie swoich informacji rejestracyjnych firmie Microsoft i producentowi komputera.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");     
    }
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");

    var L_Reg1AboutSharingInfo2_Text = "Aby dowiedzie� si� wi�cej o zasadach zachowania poufno�ci informacji firmy Microsoft, kliknij to ��cze.";
    Agent_Speak(L_Reg1AboutSharingInfo2_Text);
    
    Agent_Play("RestPose");
    
    if (!window.external.get_RetailOOBE()) 
    {           
        Agent_GestureAtElement(g.reg1_spn3,"Left");
                
        var L_Reg1AboutSharingInfo3_Text = "Aby dowiedzie� si� wi�cej o zasadach zachowania poufno�ci informacji firmy %1, kliknij to ��cze.";
        Agent_Speak(ApiObj.FormatMessage(L_Reg1AboutSharingInfo3_Text, g_OEMNameStr));
    
        Agent_Play("RestPose");
    }
}




function Agent_Reg3AddCommands() 
{
    var L_Reg3Command1_Text = "&Powiedz mi co� o tym kroku";
    var L_Reg3Command2_Text = "&Jak mog� zmienia� informacje?";
    var L_Reg3Command3_Text = "Powiedz mi, jak &udost�pnia� informacje";

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
    var L_Reg3AboutThisStep1_Text = "Aby zarejestrowa� t� kopi� systemu Microsoft Windows, musisz wype�ni� informacje na tym ekranie.";
    Agent_Speak(L_Reg3AboutThisStep1_Text);
    
    Agent_GestureAtElement(g.UserCity,"Left");

    var L_Reg3AboutThisStep2_Text = "Informacje s� wymagane we wszystkich polach z wyj�tkiem tych, kt�re oznaczono napisem Opcjonalne.";
    Agent_Speak(L_Reg3AboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_Reg3AboutThisStep3_Text = "Je�li mo�esz, wype�nij tak�e informacje opcjonalne.";
    Agent_Speak(L_Reg3AboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_Reg3AboutThisStep4_Text = "Po zako�czeniu kliknij po prostu przycisk Dalej.";
    Agent_Speak(L_Reg3AboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg3HowToChangeInfo()
{
    var L_Reg3HowToChangeInfo1_Text = "W polach dodane zosta�y wskaz�wki pokazuj�ce, co nale�y zrobi�.";
    Agent_Speak(L_Reg3HowToChangeInfo1_Text);
    
    Agent_GestureAtElement(g.UserLastName,"Left");

    var L_Reg3HowToChangeInfo2_Text = "Na przyk�ad, wystarczy klikn�� w polu Nazwisko, aby zacz�� wpisywa� dane.";
    Agent_Speak(L_Reg3HowToChangeInfo2_Text);

    var L_Reg3HowToChangeInfo3_Text = "W polu powinna pojawi� si� migaj�ca pionowa linia, znana jako punkt wstawiania.";
    Agent_Speak(L_Reg3HowToChangeInfo3_Text);

    var L_Reg3HowToChangeInfo4_Text = "Wszystko, co napiszesz, b�dzie wprowadzane w punkcie wstawiania.";
    Agent_Speak(L_Reg3HowToChangeInfo4_Text);
    
    Agent_Play("RestPose");

    var L_Reg3HowToChangeInfo5_Text = "W polu tekstowym mo�esz przenie�� punkt wstawiania, naciskaj�c na klawiaturze klawisz strza�ki w lewo lub strza�ki w prawo.";
    Agent_Speak(L_Reg3HowToChangeInfo5_Text);

    var L_Reg3HowToChangeInfo6_Text = "Mo�esz te� u�y� klawisza Delete do usuwania znak�w po punkcie wstawiania, a klawisza Backspace do usuwania znak�w przed punktem wstawiania.";
    Agent_Speak(L_Reg3HowToChangeInfo6_Text);

    var L_Reg3HowToChangeInfo7_Text = "Je�li chcesz wstawi� znak, umie�� wska�nik w polu w miejscu, w kt�rym chcesz doda� znak, i kliknij.";
    Agent_Speak(L_Reg3HowToChangeInfo7_Text);

    var L_Reg3HowToChangeInfo8_Text = "Nast�pnie wpisz znak, kt�ry chcesz wstawi�.";
    Agent_Speak(L_Reg3HowToChangeInfo8_Text);

    var L_Reg3HowToChangeInfo9_Text = "Nie martw si�, je�li nie wpiszesz czego� w kt�rym� polu i pozostanie w nim wy�wietlona wskaz�wka.";
    Agent_Speak(L_Reg3HowToChangeInfo9_Text);

    var L_Reg3HowToChangeInfo10_Text = "Wskaz�wki maj� jedynie s�u�y� Ci pomoc�. Nie wchodz� one w sk�ad informacji rejestracyjnych.";
    Agent_Speak(L_Reg3HowToChangeInfo10_Text);
}

function Agent_Reg3AboutSharingInfo()
{    
    if (!window.external.get_RetailOOBE()) 
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
        
        var L_Reg3AboutSharingInfo1_Text = "Przez zaznaczenie tych opcji zgadzasz si� na udost�pnienie swoich informacji rejestracyjnych firmie Microsoft i producentowi komputera.";
        Agent_Speak(L_Reg3AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");
    }
    else
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
         
        var L_Reg3AboutSharingInfo1_Text = "Przez zaznaczenie tych opcji zgadzasz si� na udost�pnienie swoich informacji rejestracyjnych firmie Microsoft i producentowi komputera.";
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

        

        L_Register3PlayCheckBoxScript1_Text = "Obecnie informacje o rejestracji na tym ekranie s� tak ustawione, �e b�d� wys�ane zar�wno do firmy Microsoft, jak i do producenta komputera.";
        L_Register3PlayCheckBoxScript2_Text = "Obecnie informacje o rejestracji na tym ekranie s� tak ustawione, �e b�d� wys�ane do firmy Microsoft, ale nie do producenta komputera.";
        L_Register3PlayCheckBoxScript3_Text = "Obecnie informacje o rejestracji na tym ekranie s� tak ustawione, �e b�d� wys�ane do producenta komputera, ale nie do firmy Microsoft.";
        L_Register3PlayCheckBoxScript4_Text = "Obecnie informacje o rejestracji na tym ekranie s� tak ustawione, �e nie b�d� wys�ane ani do firmy Microsoft, ani do producenta komputera.";

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

        var L_Register3PlayCheckBoxScript5_Text = "Te informacje pomog� w informowaniu o aktualizacjach program�w i innych korzy�ciach przypadaj�cych zarejestrowanym klientom.";
        Agent_Speak(L_Register3PlayCheckBoxScript5_Text);

        var L_Register3PlayCheckBoxScript6_Text = "Je�li chcesz zmieni� decyzj� o wys�aniu tych informacji,";
        Agent_Speak(L_Register3PlayCheckBoxScript6_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(elem, "TopCenterWidth");
		else
			Agent_GestureAtElement(elem, "Left");

        var L_Register3PlayCheckBoxScript7_Text = "po prostu kliknij pola tutaj.";
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

        var L_Register3EncourageTabKey1_Text = "Naci�nij klawisz Tab, aby przenie�� si� tutaj.";
        Agent_Speak(L_Register3EncourageTabKey1_Text);
}

function Agent_Register3EncourageMouseClick() {

        var L_Register3EncourageMouseClick1_Text = "Przenie� tutaj wska�nik myszy i kliknij lewym przyciskiem myszy.";
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

                        var L_Register3PlayElementScript1_Text = "W tym polu wpisz swoje imi�.";
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

                        var L_Register3PlayElementScript3_Text = "Tutaj wpisujesz swoje drugie imi�.";
                        Agent_Speak(L_Register3PlayElementScript3_Text);

                        break;

                case "UserLastName":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript4_Text = "W tym polu wpisz swoje nazwisko.";
                        Agent_Speak(L_Register3PlayElementScript4_Text);

                        break;

                case "UserAddress":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript5_Text = "Wpisz tutaj ulic�, na kt�rej mieszkasz.";
                        Agent_Speak(L_Register3PlayElementScript5_Text);

                        break;

                case "UserAddress2":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        Agent_Play("Think");

                        var L_Register3PlayElementScript6_Text = "Je�li potrzebujesz wi�cej miejsca na wpisanie swojego adresu, wprowad� go tutaj. W innym przypadku naci�nij klawisz Tab, aby przenie�� si� dalej.";
                        Agent_Speak(L_Register3PlayElementScript6_Text);

                        Agent_Play("RestPose");

                        break;

                case "UserCity":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript7_Text = "Wpisz tutaj nazw� miasta lub miejscowo�ci, w kt�rej mieszkasz.";
                        Agent_Speak(L_Register3PlayElementScript7_Text);

                        break;

                case "UserStateTextBox":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript8_Text = "Wpisz tutaj wojew�dztwo.";
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
                                var L_Register3PlayElementScript91_Text = "Musisz wybra� wojew�dztwo.";
                                Agent_Speak(L_Register3PlayElementScript91_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript92_Text = "Aby wy�wietli� list� wojew�dztw, kliknij mysz� przycisk strza�ki w d�.";
                                Agent_Speak(L_Register3PlayElementScript92_Text);

                        }

                        else if (elem.id == "selCAProvince") {
                                var L_Register3PlayElementScript93_Text = "Musisz wybra� wojew�dztwo.";
                                Agent_Speak(L_Register3PlayElementScript93_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript94_Text = "Aby wy�wietli� list� wojew�dztw, kliknij mysz� przycisk strza�ki w d�.";
                                Agent_Speak(L_Register3PlayElementScript94_Text);

                        }

                        else {
                                var L_Register3PlayElementScript95_Text = "Musisz wybra� kraj lub region, kliknij mysz� przycisk strza�ki w d�.";
                                Agent_Speak(L_Register3PlayElementScript95_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript96_Text = "Aby wy�wietli� list� kraj�w i region�w, kliknij mysz� przycisk strza�ki w d�.";
                                Agent_Speak(L_Register3PlayElementScript96_Text);

                        }

                        Agent_Play("Explain");

                        var L_Register3PlayElementScript11_Text = "Nast�pnie dokonaj wyboru, klikaj�c wojew�dztwo, w kt�rym mieszkasz.";
                        var L_Register3PlayElementScript12_Text = "Nast�pnie dokonaj wyboru, klikaj�c wojew�dztwo, w kt�rym mieszkasz.";
                        var L_Register3PlayElementScript13_Text = "Nast�pnie dokonaj wyboru, klikaj�c kraj lub region, w kt�rym mieszkasz.";

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

                        var L_Register3PlayElementScript14_Text = "Wprowad� tutaj sw�j kod pocztowy.";
                        Agent_Speak(L_Register3PlayElementScript14_Text);

                        break;

                case "UserEmailAddress":

                        if (elem.value == "") {

							if (g.document.dir == "rtl") 
								Agent_GestureAtElement(elem, "Left");
		
							else
								Agent_GestureAtElement(elem, "Right");

                            var L_Register3PlayElementScript15_Text = "Adres e-mail jest opcjonalny, ale jest to preferowana metoda kontaktu z u�ytkownikiem.";
                            Agent_Speak(L_Register3PlayElementScript15_Text);
							
							g_bAgentRegister3ShortEmail = true;
							
							Agent_Play("Explain");
							
                            var L_Register3PlayElementScript16_Text = "Je�li nie masz adresu e-mail, pozostaw to pole puste.";
                            Agent_Speak(L_Register3PlayElementScript16_Text);
							
							Agent_Play("Blink");
							                             
                        }
                        
                        else if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) {

	                       if (g_strAgentLastFocusID == "UserEmailAddress") {

								Agent_Play("Decline");
								
								var L_Register3PlayElementScript17_Text = "Niestety, wpis nie przypomina prawid�owego adresu e-mail.";
								Agent_Speak(L_Register3PlayElementScript17_Text);

								Agent_ExplainEmailAddress();
								
								if (g.document.dir == "rtl")
									Agent_GestureAtElement(elem, "Left");
								
								else
									Agent_GestureAtElement(elem, "Right");
                                        
								Agent_Play("Alert");
                                        
								var L_Register3PlayElementScript18_Text = "Je�li nie masz adresu e-mail, pozostaw to pole puste.";
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
        var L_ExplainEmailAddress1_Text = "Adres e-mail zazwyczaj sk�ada si� z dw�ch cz�ci.";
        Agent_Speak(L_ExplainEmailAddress1_Text);

        var L_ExplainEmailAddress2_Text = "Pierwsza cz�� to nazwa konta, po kt�rej nast�puje symbol @. Nast�pna cze�� to nazwa domeny.";
        Agent_Speak(L_ExplainEmailAddress2_Text);

        var L_ExplainEmailAddress3_Text = "Adres e-mail mo�e na przyk�ad wygl�da� tak: %s";
        var re = /%s/i;
        var strEmail = "\\map=\"\"=\"greatcustomer@msn.com\"\\";

        Agent_Speak(L_ExplainEmailAddress3_Text.replace(re, strEmail) + "\\pau=2000\\");

        Agent_Play("RestPose");
}







function Agent_PrivacyMSAddCommands() 
{
    var L_PrivacyMSCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_PrivacyMSCommand2_Text = "Co to jest serwer bezpieczny?";
    var L_PrivacyMSCommand3_Text = "Co to jest plik coo&kie?";
    var L_PrivacyMSCommand4_Text = "&Co mam robi� dalej?";

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
    var L_PrivacyMSAboutThisStep1_Text = "Na tym ekranie wy�wietlono zasady zachowania poufno�ci informacji firmy Microsoft.";
    Agent_Speak(L_PrivacyMSAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.privtext,"Left");

    var L_PrivacyMSAboutThisStep2_Text = "Mo�esz przeczyta� ca�y tekst tutaj.";
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

    var L_PrivacyMSAboutThisStep3_Text = "Kliknij przycisk Wstecz, aby powr�ci� do poprzedniego ekranu.";
    Agent_Speak(L_PrivacyMSAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PrivacyMSWhatIsSecureServer()
{
    var L_PrivacyMSWhatIsSecureServer1_Text = "Serwer to komputer, kt�ry zapewnia zasoby udost�pnione, na przyk�ad informacje, innym komputerom w sieci.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer1_Text);

    var L_PrivacyMSWhatIsSecureServer2_Text = "Serwer bezpieczny to komputer tego typu z mo�liwo�ciami zapewniania transakcji bezpiecznych, gwarantuj�cych, �e przechowywane na serwerze informacje nie b�d� dost�pne dla os�b niepowo�anych.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer2_Text);

    var L_PrivacyMSWhatIsSecureServer3_Text = "Na przyk�ad, kiedy dokonujesz rejestracji w firmie Microsoft, informacje o Twoim imieniu, nazwisku i adresie s� przechowywane na bezpiecznym serwerze rejestracyjnym firmy Microsoft.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer3_Text);
        
    var L_PrivacyMSWhatIsSecureServer4_Text = "Dzi�ki temu informacje te pozostaj� poufne i bezpieczne, a w wyniku rejestracji nie b�d� kontaktowa� si� z Tob� inne firmy poza firm� Microsoft.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer4_Text);
}

function Agent_PrivacyMSWhatIsCookie()
{
    var L_PrivacyMSWhatIsCookie1_Text = "Pliki cookie to ma�e pliki danych, przechowywane na Twoim komputerze w wyniku odwiedzania niekt�ych witryn sieci Web.";
    Agent_Speak(L_PrivacyMSWhatIsCookie1_Text);

    var L_PrivacyMSWhatIsCookie2_Text = "Plik cookie zawiera podstawowe informacje o Tobie, takie jak Tw�j adres e-mail, dzi�ki czemu nie musisz wprowadza� go ponownie podczas ka�dorazowego odwiedzania danej witryny.";
    Agent_Speak(L_PrivacyMSWhatIsCookie2_Text);

    var L_PrivacyMSWhatIsCookie3_Text = "Je�li na przyk�ad dokonasz zakupu w witrynie sieci Web, witryna ta mo�e przes�a� do Twojego komputera plik cookie zawieraj�cy informacje o Twoim adresie wysy�kowym.";
    Agent_Speak(L_PrivacyMSWhatIsCookie3_Text);
        
    var L_PrivacyMSWhatIsCookie4_Text = "W ten spos�b podczas nast�pnej wizyty w tej witrynie sieci Web nie b�dziesz potrzebowa� ponownie wprowadza� tych informacji.";
    Agent_Speak(L_PrivacyMSWhatIsCookie4_Text);
        
    var L_PrivacyMSWhatIsCookie5_Text = "Kiedy rejestrujesz si� w firmie Microsoft, Tw�j identyfikator produktu, imi� i nazwisko oraz adres s� zapisywane w pliku cookie na Twoim komputerze.";
    Agent_Speak(L_PrivacyMSWhatIsCookie5_Text);
        
    var L_PrivacyMSWhatIsCookie6_Text = "Dzi�ki temu przy Twojej nast�pnej wizycie w witrynie sieci Web www.microsoft.com witryna rozpozna Ci� jako zarejestrowanego u�ytkownika systemu Windows.";
    Agent_Speak(L_PrivacyMSWhatIsCookie6_Text);
}

function Agent_PrivacyMSWhatToDoNext()
{    
    Agent_GestureAtElement(g.privtext,"Left");
    
    var L_PrivacyMSWhatToDoNext1_Text = "Aby dowiedzie� si� wi�cej na temat zasad zachowania poufno�ci informacji, kliknij w tym polu.";
    Agent_Speak(L_PrivacyMSWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.privtext,"Right");

    var L_PrivacyMSWhatToDoNext2_Text = "Nast�pnie przewi� tekst zasad zachowania poufno�ci informacji, u�ywaj�c przycisk�w strza�ek w g�r� i w d�, kt�re znajduj� si� tutaj.";
    Agent_Speak(L_PrivacyMSWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_PrivacyMSWhatToDoNext3_Text = "Do przenoszenia si� w tek�cie mo�esz tak�e u�ywa� klawiszy Page Down i Page Up na klawiaturze.";
    Agent_Speak(L_PrivacyMSWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
        
    var L_PrivacyMSWhatToDoNext4_Text = "Gdy przeczytasz informacje na temat zasad zachowania poufno�ci informacji, kliknij przycisk Wstecz, aby powr�ci� do poprzedniego ekranu rejestracji.";
    Agent_Speak(L_PrivacyMSWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}





function Agent_RefDialAddCommands() 
{
    var L_RefDialAddCommands1_Text = "&Powiedz mi co� o tym kroku";
    var L_RefDialAddCommands2_Text = "&Co mam robi� dalej?";

    g_AgentCharacter.Commands.Add("Agent_RefDialAboutThisStep", L_RefDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialWhatToDoNext", L_RefDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RefDialAboutThisStep()
{
    var L_RefDialAboutThisStep1_Text = "W tym momencie system Windows powinien zacz�� wybiera� bezp�atny numer telefonu.";
    Agent_Speak(L_RefDialAboutThisStep1_Text);

    var L_RefDialAboutThisStep2_Text = "Umo�liwi to u�ywanie istniej�cego konta internetowego na tym komputerze.";
    Agent_Speak(L_RefDialAboutThisStep2_Text);
}

function Agent_RefDialWhatToDoNext()
{    
    Agent_GestureAtElement(g.btnManual,"Left");
    
    var L_RefDialWhatToDoNext1_Text = "Je�li masz ju� swojego us�ugodawc� internetowego, inaczej 'ISP', lub wiesz, z us�ug kt�rego us�ugodawcy ISP chcesz korzysta�, kliknij ten przycisk Mam ustawienia.";
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

    var L_RefDialWhatToDoNext2_Text = "Je�li chcesz wybra� us�ugodawc� z listy us�ugodawc�w ISP dost�pnych w Twoim regionie, kliknij przycisk Dalej, aby kontynuowa�.";
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

    var L_RefDialWhatToDoNext3_Text = "Mo�esz te� klikn�� przycisk Pomi�, aby kontynuowa� bez konfigurowania dost�pu do Internetu dla tego komputera.";
    Agent_Speak(L_RefDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RefDialingAddCommands() 
{
    var L_RefDialingAddCommands1_Text = "&Powiedz mi co� o tym kroku";
    var L_RefDialingAddCommands2_Text = "Co to za pasek po�rodku &ekranu?";
    var L_RefDialingAddCommands3_Text = "&Co mam robi� dalej?";

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
    var L_RefDialingAboutThisStep1_Text = "System Windows ��czy ten komputer z us�ug� referencyjn� Microsoft, aby pobra� list� dostawc�w internetowych dost�pnych w danym regionie.";
    Agent_Speak(L_RefDialingAboutThisStep1_Text);

    var L_RefDialingAboutThisStep2_Text = "Czekaj...";
    Agent_Speak(L_RefDialingAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingAboutThisStep3_Text = "Lub, je�li wolisz, mo�esz pomin�� ten krok lub przej�� do poprzedniego ekranu.";
    Agent_Speak(L_RefDialingAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RefDialingWhatsThisBar()
{    
    Agent_GestureAtElement(g.tblProg,"Left");
    
    var L_RefDialingWhatsThisBar1_Text = "Pasek post�pu pokazuje, w kt�rym miejscu procesu znajduje si� komputer.";
    Agent_Speak(L_RefDialingWhatsThisBar1_Text);

    var L_RefDialingWhatsThisBar2_Text = "Pasek wype�nia si� w miar� pobierania informacji z us�ugi referencyjnej do tego komputera.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
    
    Agent_Play("RestPose");

    var L_RefDialingWhatsThisBar3_Text = "Kiedy wszystkie informacje zostan� pobrane, pasek wype�ni si� ca�kowicie i automatycznie przeniesiesz si� do nast�pnego ekranu.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
}

function Agent_RefDialingWhatToDoNext()
{
    var L_RefDialingWhatToDoNext1_Text = "Czekaj, a� system Windows pobierze informacje o us�ugodawcach ISP z us�ugi referencyjnej Microsoft.";
    Agent_Speak(L_RefDialingWhatToDoNext1_Text);

    var L_RefDialingWhatToDoNext2_Text = "Po zako�czeniu pobierania zostanie automatycznie wy�wietlony nast�pny ekran.";
    Agent_Speak(L_RefDialingWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingWhatToDoNext3_Text = "Je�li chcesz pomin�� ten krok, kliknij przycisk Pomi�.";
    Agent_Speak(L_RefDialingWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RegDialAddCommands()
{
    var L_RegDialAddCommands1_Text = "&Powiedz mi co� o tym kroku";
    var L_RegDialAddCommands2_Text = "&Co mam robi� dalej?";

    g_AgentCharacter.Commands.Add("Agent_RegDialAboutThisStep", L_RegDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RegDialWhatToDoNext", L_RegDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RegDialAboutThisStep()
{
    var L_RegDialAboutThisStep1_Text = "System Windows u�ywa tego komputera do wybrania bezp�atnego numeru telefonu, aby po��czy� si� z us�ug� rejestracji.";
    Agent_Speak(L_RegDialAboutThisStep1_Text);

    var L_RegDialAboutThisStep2_Text = "Czekaj...";
    Agent_Speak(L_RegDialAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialAboutThisStep3_Text = "Lub, je�li wolisz, mo�esz pomin�� ten krok lub przej�� do poprzedniego ekranu.";
    Agent_Speak(L_RegDialAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RegDialWhatToDoNext()
{
    var L_RegDialWhatToDoNext1_Text = "Czekaj, a� system Windows po��czy si� z us�ug� rejestracji.";
    Agent_Speak(L_RegDialWhatToDoNext1_Text);

    var L_RegDialWhatToDoNext2_Text = "Gdy system Windows po��czy si�, nast�pi automatyczne przeniesienie na nast�pny ekran.";
    Agent_Speak(L_RegDialWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialWhatToDoNext3_Text = "Je�li chcesz pomin�� ten krok, kliknij przycisk Pomi�.";
    Agent_Speak(L_RegDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigDialAddCommands()
{
    var L_MigDialAddCommands1_Text = "&Powiedz mi co� o tym kroku";
    var L_MigDialAddCommands2_Text = "&Co mam robi� dalej?";

    g_AgentCharacter.Commands.Add("Agent_MigDialAboutThisStep", L_MigDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_MigDialWhatToDoNext", L_MigDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_MigDialAboutThisStep()
{
    var L_MigDialAboutThisStep1_Text = "W tym momencie system Windows powinien zacz�� wybiera� bezp�atny numer telefonu.";
    Agent_Speak(L_MigDialAboutThisStep1_Text);

    var L_MigDialAboutThisStep2_Text = "Umo�liwi to u�ywanie istniej�cego konta internetowego na tym komputerze.";
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
    
    var L_MigDialWhatToDoNext1_Text = "Kliknij przycisk Dalej, aby rozpocz�� wybieranie numeru.";
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

    var L_MigDialWhatToDoNext2_Text = "Je�li jednak chcesz pomin�� ten krok, kliknij przycisk Pomi�.";
    Agent_Speak(L_MigDialWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}





function Agent_MigListAddCommands() 
{
    
    
    
	var L_MigListAddCommands1_Text = "&Powiedz mi co� o tym kroku";
	var L_MigListAddCommands2_Text = "&Co mam robi� dalej?";
	
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
    var L_MigListAboutThisStep1_Text = "Na tym ekranie mo�esz okre�li� us�ugodawc� internetowego, z kt�rego us�ug chcesz skorzysta�.";
    Agent_Speak(L_MigListAboutThisStep1_Text);

    var L_MigListAboutThisStep2_Text = "Umo�liwi to u�ywanie istniej�cego konta internetowego na tym komputerze.";
    Agent_Speak(L_MigListAboutThisStep2_Text);
}

function Agent_MigListWhatToDoNext()
{
    Agent_GestureAtElement(g.selISPDropList,"Left");
    
    var L_MigListWhatToDoNext1_Text = "Wybierz swojego us�ugodawc� internetowego, klikaj�c go na tej li�cie.";
    Agent_Speak(L_MigListWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_MigListWhatToDoNext2_Text = "Je�li nie widzisz na tej li�cie swojego us�ugodawcy ISP, kliknij pozycj� \"Us�ugodawcy internetowego nie ma na li�cie\" u do�u listy.";
    Agent_Speak(L_MigListWhatToDoNext2_Text);

    var L_MigListWhatToDoNext3_Text = "Popro� us�ugodawc� ISP o pomoc przy ustanowieniu ponownie konta internetowego na tym komputerze.";
    Agent_Speak(L_MigListWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_MigListWhatToDoNext4_Text = "Nast�pnie kliknij przycisk Dalej, aby kontynuowa�.";
    Agent_Speak(L_MigListWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigPageAddCommands() 
{
	var L_MigPageAddCommands1_Text = "Powiedz mi, co robi� &dalej";
	var L_MigPageAddCommands2_Text = "Powiedz mi co� o tym &ekranie";
	var L_MigPageAddCommands3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";
	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_WhatToDoNext", L_MigPageAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_AboutThisStep", L_MigPageAddCommands2_Text);
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_HowToMoveOn", L_MigPageAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_MigPageCommand_WhatToDoNext() {
		
	var L_MigPageWhatToDoNext1_Text = "Po wykonaniu wszystkich czynno�ci na tej stronie.";
	Agent_Speak(L_MigPageWhatToDoNext1_Text);
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
			
	var L_MigPageWhatToDoNext2_Text = "Kliknij przycisk Dalej.";
	Agent_Speak(L_MigPageWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}

function Agent_MigPageCommand_AboutThisStep() 
{
	var L_MigPageAboutThisStep1_Text = "Na tym ekranie b�dziemy pr�bowa� w��czy� konto internetowe u istniej�cego us�ugodawcy internetowego.";
	Agent_Speak(L_MigPageAboutThisStep1_Text);
	
	Agent_Play("Pleased");
	
	var L_MigPageAboutThisStep2_Text = "Post�puj zgodnie z instrukcjami na ekranie dostarczonymi przez us�ugodawc� internetowego.";
	Agent_Speak(L_MigPageAboutThisStep2_Text);
}

function Agent_MigPageCommand_HowToMoveOn() 
{
	var L_MigPageHowToMoveOn1_Text = "Po wykonaniu wszystkich czynno�ci na tym ekranie,";
	Agent_Speak(L_MigPageHowToMoveOn1_Text);		
			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

	var L_MigPageHowToMoveOn2_Text = "Kliknij przycisk Dalej, aby kontynuowa�.";
	Agent_Speak(L_MigPageHowToMoveOn2_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPDialAddCommands() 
{
    var L_ISPDial1_Text = "&Powiedz mi co� o tym kroku";
    var L_ISPDial2_Text = "&Co mam robi� dalej?";

    g_AgentCharacter.Commands.Add("Agent_ISPDialAboutThisStep", L_ISPDial1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDialWhatToDoNext", L_ISPDial2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPDialAboutThisStep()
{
    var L_ISPDialAboutThisStep1_Text = "W tym momencie system Windows powinien zacz�� wybiera� bezp�atny numer telefonu.";
    Agent_Speak(L_ISPDialAboutThisStep1_Text);

    var L_ISPDialAboutThisStep2_Text = "Umo�liwi to zapisanie si� w celu uzyskania nowego konta internetowego.";
    Agent_Speak(L_ISPDialAboutThisStep2_Text);

    var L_ISPDialAboutThisStep3_Text = "Po prostu kliknij przycisk Dalej, aby kontynuowa�.";
    Agent_Speak(L_ISPDialAboutThisStep3_Text);
}

function Agent_ISPDialWhatToDoNext()
{
    var L_ISPDialWhatToDoNext1_Text = "Kliknij przycisk Dalej, aby kontynuowa�.";
    Agent_Speak(L_ISPDialWhatToDoNext1_Text);

    var L_ISPDialWhatToDoNext2_Text = "Mo�esz te� klikn�� przycisk Pomi�, aby kontynuowa� bez konfigurowania dost�pu do Internetu dla tego komputera. Zawsze mo�esz zrobi� to p�niej...";
    Agent_Speak(L_ISPDialWhatToDoNext2_Text);
}




function Agent_DialToneAddCommands()
{
    var L_DialToneAddCommands1_Text = "&Powiedz mi co� o tym kroku";
    var L_DialToneAddCommands2_Text = "Co zrobi�, &je�li chc� przenie�� sw�j komputer?";
    var L_DialToneAddCommands3_Text = "&Co mam robi� dalej?";

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
    var L_DialToneAboutThisStep1_Text = "System Windows nie mo�e wykry� sygna�u wybierania numeru.";
    Agent_Speak(L_DialToneAboutThisStep1_Text);

    var L_DialToneAboutThisStep2_Text = "Istnieje kilka powod�w, dla kt�rych mo�e si� tak dzia�.";
    Agent_Speak(L_DialToneAboutThisStep2_Text);

    var L_DialToneAboutThisStep3_Text = "Po pierwsze, upewnij si�, �e kabel telefoniczny jest prawid�owo pod��czony do komputera.";
    Agent_Speak(L_DialToneAboutThisStep3_Text);

    var L_DialToneAboutThisStep4_Text = "Po drugie, upewnij si�, �e nikt nie pr�buje w tym momencie korzysta� z tej samej linii telefonicznej.";
    Agent_Speak(L_DialToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneAboutThisStep5_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b� wybrania numeru.";
    Agent_Speak(L_DialToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_DialToneHowToMove()
{
    var L_DialToneHowToMove1_Text = "Je�li w celu pod��czenia komputera do linii telefonicznej musisz go przenie��, upewnij si�, �e zasilanie jest wy��czone.";
    Agent_Speak(L_DialToneHowToMove1_Text);

    var L_DialToneHowToMove2_Text = "Po ponownym uruchomieniu komputera system Windows wznowi prac� w tym samym miejscu.";
    Agent_Speak(L_DialToneHowToMove2_Text);
}

function Agent_DialToneWhatToDoNext()
{
    var L_DialToneWhatToDoNext1_Text = "Najpierw sprawd� pod��czenie komputera do linii telefonicznej.";
    Agent_Speak(L_DialToneWhatToDoNext1_Text);

    var L_DialToneWhatToDoNext2_Text = "Nast�pnie sprawd�, czy linia telefoniczna nie jest u�ywana.";
    Agent_Speak(L_DialToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneWhatToDoNext3_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b� wybrania numeru.";
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

    var L_DialToneWhatToDoNext4_Text = "Mo�esz te� klikn�� przycisk Pomi�, aby kontynuowa� bez rejestrowania lub aktywowania tej kopii systemu Windows XP.";
    Agent_Speak(L_DialToneWhatToDoNext4_Text);
    
    Agent_Play("RestPose");

    var L_DialToneWhatToDoNext5_Text = "Mo�esz zawsze zarejestrowa� si� p�niej.";
    Agent_Speak(L_DialToneWhatToDoNext5_Text);
}



function Agent_CnnctErrAddCommands() 
{
    var L_CnnctErrAddCommands1_Text = "&Powiedz mi co� o tym kroku";
    var L_CnnctErrAddCommands2_Text = "Jak &wy��czy� powiadamianie o po��czeniu oczekuj�cym?";
    var L_CnnctErrAddCommands3_Text = "&Co mam robi� dalej?";

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
    var L_CnnctErrAboutThisStep1_Text = "Twoja rozmowa telefoniczna z centrum rejestracji zosta�a przerwana.";
    Agent_Speak(L_CnnctErrAboutThisStep1_Text);

    var L_CnnctErrAboutThisStep2_Text = "Istnieje kilka powod�w, dla kt�rych mo�e si� tak dzia�.";
    Agent_Speak(L_CnnctErrAboutThisStep2_Text);

    var L_CnnctErrAboutThisStep3_Text = "Po pierwsze, po��czenie mog�o nie by� aktywnie u�ywane przez d�u�szy czas i dlatego zosta�o automatycznie roz��czone.";
    Agent_Speak(L_CnnctErrAboutThisStep3_Text);

    var L_CnnctErrAboutThisStep4_Text = "Po drugie, kto� m�g� pr�bowa� korzysta� z linii telefonicznej w czasie po��czenia.";
    Agent_Speak(L_CnnctErrAboutThisStep4_Text);

    var L_CnnctErrAboutThisStep5_Text = "Po trzecie, je�li korzystasz z us�ugi powiadamiania o po��czeniu oczekuj�cym, po��czenie mog�o zosta� przerwane przez wywo�anie przychodz�ce.";
    Agent_Speak(L_CnnctErrAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrAboutThisStep6_Text = "Je�li us�uga telefoniczna obejmuje powiadamianie o po��czeniu oczekuj�cym i znasz numer s�u��cy do wy��czenia tej funkcji, wprowad� go tutaj.";
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

    var L_CnnctErrAboutThisStep7_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie, aby spr�bowa� po��czy� si� ponownie.";
    Agent_Speak(L_CnnctErrAboutThisStep7_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrTurnOffCallWaiting()
{
    var L_CnnctErrTurnOffCallWaiting1_Text = "Tw�j dostawca us�ug telefonicznych mo�e poda� Ci kod s�u��cy do wy��czania powiadamiania o po��czeniu oczekuj�cym.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting1_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrTurnOffCallWaiting2_Text = "Je�li podczas nawi�zywania tego po��czenia chcesz wy��czy� us�ug� powiadamiania o po��czeniu oczekuj�cym, wpisz ten numer tutaj.";
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

    var L_CnnctErrTurnOffCallWaiting3_Text = "Nast�pnie kliknij przycisk Dalej.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrWhatToDoNext()
{
    var L_CnnctErrWhatToDoNext1_Text = "Po pierwsze upewnij si�, �e nikt inny nie korzysta z linii telefonicznej, kt�rej pr�bujesz u�y� do skontaktowania si� z firm� Microsoft.";
    Agent_Speak(L_CnnctErrWhatToDoNext1_Text);

    var L_CnnctErrWhatToDoNext2_Text = "Po drugie, je�li korzystasz z funkcji powiadamiania o po��czeniu oczekuj�cym, wy��cz j� tymczasowo.";
    Agent_Speak(L_CnnctErrWhatToDoNext2_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrWhatToDoNext3_Text = "W celu wy��czenia tej funkcji wpisz w tym polu odpowiedni kod.";
    Agent_Speak(L_CnnctErrWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_CnnctErrWhatToDoNext4_Text = "Po zako�czonym po��czeniu powiadamianie o po��czeniu oczekuj�cym zostanie automatycznie w��czone ponownie.";
    Agent_Speak(L_CnnctErrWhatToDoNext4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrWhatToDoNext5_Text = "Kiedy zechcesz spr�bowa� ponownie, kliknij przycisk Dalej.";
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

    var L_CnnctErrWhatToDoNext6_Text = "Mo�esz te� klikn�� przycisk Pomi�, aby kontynuowa� bez rejestracji.";
    Agent_Speak(L_CnnctErrWhatToDoNext6_Text);
    
    Agent_Play("RestPose");
}



function Agent_HandShakeAddCommands() 
{
    var L_HandShakeAddCommands1_Text = "&Powiedz mi co� o tym kroku";
    var L_HandShakeAddCommands2_Text = "&Co mam robi� dalej?";

    g_AgentCharacter.Commands.Add("Agent_HandShakeAboutThisStep", L_HandShakeAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_HandShakeWhatToDoNext", L_HandShakeAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_HandShakeAboutThisStep()
{
    var L_HandShakeAboutThisStep1_Text = "System Windows nie mo�e akurat po��czy� si� z firm� Microsoft.";
    Agent_Speak(L_HandShakeAboutThisStep1_Text);

    var L_HandShakeAboutThisStep2_Text = "Mo�e to by� spowodowane tym, �e linie telefoniczne s� zaj�te, lub tym, �e komputer nie jest w stanie ustanowi� po��czenia telefonicznego.";
    Agent_Speak(L_HandShakeAboutThisStep2_Text);

    var L_HandShakeAboutThisStep3_Text = "Spr�buj poczeka� kilka minut.";
    Agent_Speak(L_HandShakeAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_HandShakeAboutThisStep4_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b�.";
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
    
    var L_HandShakeWhatToDoNext1_Text = "Poczekaj kilka minut, a nast�pnie kliknij przycisk Wybierz numer ponownie.";
    Agent_Speak(L_HandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_HandShakeWhatToDoNext2_Text = "Po kilku pr�bach zastosowania tego rozwi�zania, skontaktuj si� z producentem komputera";
    Agent_Speak(L_HandShakeWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_HandShakeWhatToDoNext3_Text = "Kliknij przycisk Pomi�, aby kontynuowa� bez rejestracji komputera.";
    Agent_Speak(L_HandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_NoAnswerAddCommands() 
{
    var L_NoAnswerAddCommands1_Text = "&Powiedz mi co� o tym kroku";
    var L_NoAnswerAddCommands2_Text = "Co zrobi�, je�li numer &telefonu jest niepoprawny?";
    var L_NoAnswerAddCommands3_Text = "&Co mam robi� dalej?";

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
    var L_NoAnswerAboutThisStep1_Text = "Numer telefonu, kt�ry pr�bujemy wybra�, nie odpowiada.";
    Agent_Speak(L_NoAnswerAboutThisStep1_Text);

    var L_NoAnswerAboutThisStep2_Text = "Sprawd�, czy numer wygl�da poprawnie.";
    Agent_Speak(L_NoAnswerAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_NoAnswerAboutThisStep3_Text = "Je�li numer wygl�da dobrze, poczekaj kilka minut, a potem kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b�.";
    Agent_Speak(L_NoAnswerAboutThisStep3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.edtPhoneNumber,"Left");

    var L_NoAnswerAboutThisStep4_Text = "Je�li jednak numer jest niepoprawny, kliknij tutaj i popraw go.";
    Agent_Speak(L_NoAnswerAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_NoAnswerAboutThisStep5_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie.";
    Agent_Speak(L_NoAnswerAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.btnRestore,"Right");

    var L_NoAnswerAboutThisStep6_Text = "Mo�esz zawsze przywr�ci� oryginalny numer wybierany przez system Windows, klikaj�c przycisk Przywr��.";
    Agent_Speak(L_NoAnswerAboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_NoAnswerWhatIfWrongNumber()
{
    var L_NoAnswerWhatIfWrongNumber1_Text = "Je�li wy�wietlony tutaj numer telefonu jest niepoprawny, kliknij pole tekstowe.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber1_Text);

    var L_NoAnswerWhatIfWrongNumber2_Text = "W polu powinna pojawi� si� migaj�ca pionowa linia, znana jako punkt wstawiania.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber2_Text);

    var L_NoAnswerWhatIfWrongNumber3_Text = "Wszystko, co napiszesz, b�dzie wprowadzane w punkcie wstawiania.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber3_Text);

    var L_NoAnswerWhatIfWrongNumber4_Text = "W polu tekstowym mo�esz przenie�� punkt wstawiania, naciskaj�c na klawiaturze klawisz strza�ki w lewo lub strza�ki w prawo.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber4_Text);

    var L_NoAnswerWhatIfWrongNumber5_Text = "Mo�esz u�y� klawisza Delete do usuwania znak�w po punkcie wstawiania.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber5_Text);

    var L_NoAnswerWhatIfWrongNumber6_Text = "Mo�esz te� u�y� klawisza Backspace do usuwania znak�w przed punktem wstawiania.";
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
    
    var L_NoAnswerWhatToDoNext1_Text = "Je�li numer telefonu zosta� sprawdzony i wygl�da poprawnie, kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b� po��czenia.";
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

    var L_NoAnswerWhatToDoNext2_Text = "Aby kontynuowa�, musisz wybra� ponowne po��czenie lub pomin�� rejestracj� komputera w tym momencie.";
    Agent_Speak(L_NoAnswerWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}



function Agent_PulseAddCommands() 
{

    var L_PulseAddCommands1_Text = "&Powiedz mi co� o tym kroku";
    var L_PulseAddCommands2_Text = "&Co mam robi� dalej?";

    g_AgentCharacter.Commands.Add("Agent_PulseAboutThisStep", L_PulseAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_PulseWhatToDoNext", L_PulseAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_PulseAboutThisStep()
{
    var L_PulseAboutThisStep1_Text = "System Windows nie mo�e okre�li�, czy linia telefoniczna wymaga wybierania numeru tonowego, czy impulsowego.";
    Agent_Speak(L_PulseAboutThisStep1_Text);

    var L_PulseAboutThisStep2_Text = "System Windows musi to wiedzie�, aby mo�na by�o kontynuowa�.";
    Agent_Speak(L_PulseAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseAboutThisStep3_Text = "Na tym ekranie mo�esz okre�li� metod� wybierania numeru przez Twoj� lini� telefoniczn�.";
    Agent_Speak(L_PulseAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PulseWhatToDoNext()
{
    var L_PulseWhatToDoNext1_Text = "Kliknij wewn�trz bia�ego k�ka z lewej strony metody wybierania numeru stosowanej przez lini� telefoniczn�.";
    Agent_Speak(L_PulseWhatToDoNext1_Text);
    
    Agent_GestureAtElement(g.tone,"Left");

    var L_PulseWhatToDoNext2_Text = "Kliknij tutaj, je�li linia telefoniczna korzysta z wybierania tonowego.";
    Agent_Speak(L_PulseWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseWhatToDoNext3_Text = "Lub tutaj, je�li korzysta z wybierania impulsowego.";
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

    var L_PulseWhatToDoNext4_Text = "Nast�pnie kliknij przycisk Dalej, aby wybra� numer ponownie.";
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

    var L_PulseWhatToDoNext5_Text = "Kliknij przycisk Pomi�, aby kontynuowa� bez rejestracji komputera.";
    Agent_Speak(L_PulseWhatToDoNext5_Text);
    
    Agent_Play("RestPose");
}





function Agent_TooBusyAddCommands() 
{
        var L_TooBusyAddCommands1_Text = "&Powiedz mi co� o tym kroku";
        var L_TooBusyAddCommands2_Text = "Co zrobi�, je�li numer &telefonu jest niepoprawny?";
        var L_TooBusyAddCommands3_Text = "&Co mam robi� dalej?";

        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_AboutThisStep", L_TooBusyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatIfIncorrect", L_TooBusyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatToDoNext", L_TooBusyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_TooBusyCommand_AboutThisStep() 
{
    var L_TooBusyAboutThisStep1_Text = "Numer telefonu, kt�ry pr�bowali�my wybra�, jest albo zaj�ty, albo niepoprawny.";
    Agent_Speak(L_TooBusyAboutThisStep1_Text);

    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyAboutThisStep2_Text = "Sprawd�, czy ten numer wygl�da poprawnie.";
    Agent_Speak(L_TooBusyAboutThisStep2_Text);
        
    Agent_Play("RestPose");

    var L_TooBusyAboutThisStep3_Text = "Je�li wygl�da dobrze, poczekaj kilka minut.";
    Agent_Speak(L_TooBusyAboutThisStep3_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyAboutThisStep4_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b� wybrania numeru.";
    Agent_Speak(L_TooBusyAboutThisStep4_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatIfIncorrect() 
{        
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect1_Text = "Je�li numer telefonu jest niepoprawny,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("cb_altnumber"),"Left");
    
    var L_TooBusyPhoneNumberIncorrect2_Text = " kliknij to pole wyboru";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_altnumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect3_Text = "i wprowad� tutaj alternatywny numer.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("cb_outsideline"),"Left");

    var L_TooBusyPhoneNumberIncorrect4_Text = "Je�li w celu osi�gni�cia linii zewn�trznej potrzebujesz wybra� jaki� numer, kliknij to pole wyboru";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect4_Text);

    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("edt_outsideline"),"Right");

    var L_TooBusyPhoneNumberIncorrect5_Text = "i wpisz ten numer tutaj.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect5_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect6_Text = "Je�li korzystasz z powiadamiania o po��czeniu oczekuj�cym, Twoje po��czenie wychodz�ce mo�e zosta� przerwane przez wywo�anie przychodz�ce.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect6_Text);

    var L_TooBusyPhoneNumberIncorrect7_Text = "Mo�esz �atwo wy��czy� us�ug� powiadamiania o po��czeniu oczekuj�cym podczas nawi�zywania tego po��czenia.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect7_Text);
        
    Agent_GestureAtElement(g.document.all("cb_callwaiting"),"Left");

    var L_TooBusyPhoneNumberIncorrect8_Text = "Po prostu kliknij to pole wyboru";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect8_Text);

    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_callwaiting"),"Right");

    var L_TooBusyPhoneNumberIncorrect9_Text = "i wpisz tutaj odpowiedni kod.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect9_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect10_Text = "Powiadamianie o po��czeniu oczekuj�cym zostanie ponownie w��czone po zako�czeniu tego po��czenia.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect10_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyPhoneNumberIncorrect11_Text = "Pami�taj, aby klikn�� przycisk Wybierz numer ponownie, kiedy zechcesz ponowi� pr�b�.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect11_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatToDoNext() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyWhatToDoNext1_Text = "Je�li numer telefonu zosta� sprawdzony i wygl�da poprawnie,";
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
    
     var L_TooBusyWhatToDoNext2_Text = "kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b� po��czenia.";
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

    var L_TooBusyWhatToDoNext3_Text = "Mo�esz te� klikn�� przycisk Pomi� w celu pomini�cia tego kroku. Zawsze mo�esz zarejestrowa� si� po zako�czonej konfiguracji systemu Windows.";
    Agent_Speak(L_TooBusyWhatToDoNext3_Text);
        
    Agent_Play("RestPose");
}



function Agent_ISPDToneAddCommands() 
{
    var L_ISPDToneAddCommands1_Text = "&Powiedz mi co� o tym kroku";
    var L_ISPDToneAddCommands2_Text = "Co zrobi�, &je�li chc� przenie�� sw�j komputer";
    var L_ISPDToneAddCommands3_Text = "&Co mam robi� dalej?";

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
    var L_ISPDToneAboutThisStep1_Text = "System Windows nie mo�e wykry� sygna�u wybierania numeru.";
    Agent_Speak(L_ISPDToneAboutThisStep1_Text);

    var L_ISPDToneAboutThisStep2_Text = "Istnieje kilka powod�w, dla kt�rych mo�e si� tak dzia�.";
    Agent_Speak(L_ISPDToneAboutThisStep2_Text);

    var L_ISPDToneAboutThisStep3_Text = "Po pierwsze, upewnij si�, �e kabel telefoniczny jest prawid�owo pod��czony do komputera.";
    Agent_Speak(L_ISPDToneAboutThisStep3_Text);

    var L_ISPDToneAboutThisStep4_Text = "Po drugie, upewnij si�, �e nikt nie pr�buje w tym momencie korzysta� z tej samej linii telefonicznej.";
    Agent_Speak(L_ISPDToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneAboutThisStep5_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b� wybrania numeru.";
    Agent_Speak(L_ISPDToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPDToneHowToMove()
{
    var L_ISPDToneHowToMove1_Text = "Je�li w celu pod��czenia komputera do linii telefonicznej musisz go przenie��, upewnij si�, �e zasilanie jest wy��czone.";
    Agent_Speak(L_ISPDToneHowToMove1_Text);

    var L_ISPDToneHowToMove2_Text = "Po ponownym uruchomieniu komputera system Windows wznowi prac� w tym samym miejscu.";
    Agent_Speak(L_ISPDToneHowToMove2_Text);
}

function Agent_ISPDToneWhatToDoNext()
{
    var L_ISPDToneWhatToDoNext1_Text = "Najpierw sprawd� pod��czenie komputera do linii telefonicznej.";
    Agent_Speak(L_ISPDToneWhatToDoNext1_Text);

    var L_ISPDToneWhatToDoNext2_Text = "Nast�pnie sprawd�, czy linia telefoniczna nie jest u�ywana.";
    Agent_Speak(L_ISPDToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneWhatToDoNext3_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b� wybrania numeru.";
    Agent_Speak(L_ISPDToneWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_ISPCnErrAddCommands() {

        var L_ISPCnErrAddCommands1_Text = "Powiedz mi, co robi� &dalej";
        var L_ISPCnErrAddCommands2_Text = "Powiedz mi, jak &wy��czy� powiadamianie o po��czeniu oczekuj�cym";
        var L_ISPCnErrAddCommands3_Text = "Powiedz mi co� o tym &ekranie";
        var L_ISPCnErrAddCommands4_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

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
        var L_ISPCnErrIntro1_Text = "Po��czenie telefoniczne, nawi�zane w celu konfiguracji us�ugi internetowej, zosta�o przerwane.";
        Agent_Speak(L_ISPCnErrIntro1_Text);

        Agent_MoveToElement(g.document.all("txtBullet1"),"Left");
        
        var L_ISPCnErrIntro2_Text = "Istnieje kilka powod�w, dla kt�rych mo�e si� tak dzia�.";
        Agent_Speak(L_ISPCnErrIntro2_Text);

        var L_ISPCnErrIntro3_Text = "Po pierwsze, po��czenie mog�o nie by� aktywnie u�ywane przez d�u�szy czas i dlatego zosta�o automatycznie roz��czone.";
        Agent_Speak(L_ISPCnErrIntro3_Text);

        var L_ISPCnErrIntro4_Text = "Po drugie, kto� m�g� pr�bowa� korzysta� z linii telefonicznej w czasie po��czenia.";
        Agent_Speak(L_ISPCnErrIntro4_Text);

        var L_ISPCnErrIntro5_Text = "Po trzecie, je�li korzystasz z us�ugi powiadamiania o po��czeniu oczekuj�cym, po��czenie mog�o zosta� przerwane przez wywo�anie przychodz�ce.";
        Agent_Speak(L_ISPCnErrIntro5_Text);

        Agent_GestureAtElement(g.document.all("Callwait"),"Left");

        var L_ISPCnErrIntro6_Text = "Je�li us�uga telefoniczna obejmuje powiadamianie o po��czeniu oczekuj�cym i znasz numer wy��czenia tej funkcji, wprowad� go tutaj.";
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

        var L_ISPCnErrIntro7_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b� po��czenia.";
        Agent_Speak(L_ISPCnErrIntro7_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("txtBullet1"),"Left");

        var L_ISPCnErrWhatToDoNext1_Text = "Je�li wszystkie potencjalne przyczyny zosta�y ju� usuni�te,";
        Agent_Speak(L_ISPCnErrWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPCnErrWhatToDoNext2_Text = "A chcesz spr�bowa� po��czy� si� ponownie,";
        Agent_Speak(L_ISPCnErrWhatToDoNext2_Text);

        var L_ISPCnErrWhatToDoNext3_Text = "Kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b�.";
        Agent_Speak(L_ISPCnErrWhatToDoNext3_Text);
}

function Agent_ISPCnErrCommand_HowToTurnOffCallWaiting() 
{
        Agent_GestureAtElement(g.document.all("Callwait"),"Left");
        
        var L_ISPCnErrHowToTurnOffCallWaiting1_Text = "Je�li chcesz wy��czy� us�ug� powiadamiania o po��czeniu oczekuj�cym podczas nawi�zywania tego po��czenia,";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting1_Text);

        var L_ISPCnErrHowToTurnOffCallWaiting2_Text = "Wprowad� ten numer tutaj.";
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

        var L_ISPCnErrHowToTurnOffCallWaiting3_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie.";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_HowToMoveOn() 
{
        var L_ISPCnErrHowToMoveOn1_Text = "Aby kontynuowa�, musisz wybra� ponowne po��czenie lub pomin�� ten krok.";
        Agent_Speak(L_ISPCnErrHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrHowToMoveOn2_Text = "Kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b� po��czenia.";
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

        var L_ISPCnErrHowToMoveOn3_Text = "Mo�esz te� klikn�� przycisk Pomi�, aby kontynuowa� bez ponawiania pr�by.";
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

        var L_ISPHandShakeAddCommands1_Text = "Powiedz mi, co robi� &dalej";
        var L_ISPHandShakeAddCommands2_Text = "Powiedz mi co� o tym &ekranie";
        var L_ISPHandShakeAddCommands3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_WhatToDoNext", L_ISPHandShakeAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_AboutThisScreen", L_ISPHandShakeAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_HowToMoveOn", L_ISPHandShakeAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPHandShakeIntro() {

}

function Agent_ISPHandShakeCommand_AboutThisScreen() 
{
        var L_ISPHandShakeIntro1_Text = "Nowe us�ugi kont dla wybranego us�ugodawcy internetowego s� aktualnie niedost�pne.";
        Agent_Speak(L_ISPHandShakeIntro1_Text);

        var L_ISPHandShakeIntro2_Text = "Nie mam pewno�ci dlaczego.";
        Agent_Speak(L_ISPHandShakeIntro2_Text);

        var L_ISPHandShakeIntro3_Text = "Mo�esz jednak poczeka� kilka minut i wybra� numer ponownie";
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
        
        var L_ISPHandShakeIntro4_Text = "lub mo�esz pomin�� konfiguracj� us�ugi internetowej w tym momencie.";
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

        var L_ISPHandShakeWhatToDoNext1_Text = "Poczekaj kilka minut, a nast�pnie kliknij przycisk Wybierz numer ponownie.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeWhatToDoNext2_Text = "Po kilku pr�bach zastosowania tego rozwi�zania";
        Agent_Speak(L_ISPHandShakeWhatToDoNext2_Text);
        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeWhatToDoNext3_Text = "mo�esz klikn�� przycisk Pomi�, aby kontynuowa� bez konfiguracji us�ugi internetowej w tym momencie.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPHandShakeCommand_HowToMoveOn() 
{
        var L_ISPHandShakeHowToMoveOn1_Text = "Poczekaj kilka minut,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPHandShakeHowToMoveOn2_Text = "a nast�pnie kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b� po��czenia.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeHowToMoveOn3_Text = "Je�li te rozwi�zania zawodz�,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeHowToMoveOn4_Text = "Mo�esz kontynuowa� bez konfiguracji us�ugi internetowej w tym momencie, klikaj�c przycisk Pomi�.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn4_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPInsAddCommands() {

        var L_ISPInsAddCommands1_Text = "Powiedz mi, co robi� &dalej";
        var L_ISPInsAddCommands2_Text = "Powiedz mi co� o tym &ekranie";
        var L_ISPInsAddCommands3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_WhatToDoNext", L_ISPInsAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_AboutThisScreen", L_ISPInsAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_HowToMoveOn", L_ISPInsAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPInsIntro() {

}

function Agent_ISPInsCommand_AboutThisScreen() 
{
        var L_ISPInsIntro1_Text = "Niestety, system Windows nie m�g� po��czy� si� z Internetem za pomoc� us�ugi wybranego us�ugodawcy.";
        Agent_Speak(L_ISPInsIntro1_Text);

        var L_ISPInsIntro2_Text = "Je�li masz problemy z po��czeniem si� z Internetem podczas u�ywania przegl�darki sieci Web lub przy wysy�aniu i otrzymywaniu poczty elektronicznej,";
        Agent_Speak(L_ISPInsIntro2_Text);

        var L_ISPInsIntro3_Text = "zadzwo� po pomoc do biura obs�ugi technicznej us�ugodawcy.";
        Agent_Speak(L_ISPInsIntro3_Text);
}

function Agent_ISPInsCommand_WhatToDoNext() 
{
        var L_ISPInsWhatToDoNext1_Text = "Kliknij przycisk Dalej, aby kontynuowa�.";
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

        var L_ISPInsHowToMoveOn1_Text = "po prostu kliknij przycisk Dalej.";
        Agent_Speak(L_ISPInsHowToMoveOn1_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPNoAnwAddCommands() {

        var L_ISPNoAnwAddCommands1_Text = "Powiedz mi, co robi� &dalej";
        var L_ISPNoAnwAddCommands2_Text = "Powiedz mi, co zrobi�, je�li numer &telefonu jest niepoprawny";
        var L_ISPNoAnwAddCommands3_Text = "Powiedz mi co� o tym &ekranie";
        var L_ISPNoAnwAddCommands4_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoNext", L_ISPNoAnwAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect", L_ISPNoAnwAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_AboutThisScreen", L_ISPNoAnwAddCommands3_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_HowToMoveOn", L_ISPNoAnwAddCommands4_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPNoAnwCommand_AboutThisScreen() 
{
        var L_ISPNoAnwIntro1_Text = "Numer telefonu, kt�ry pr�bujemy wybra�, nie odpowiada.";
        Agent_Speak(L_ISPNoAnwIntro1_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro2_Text = "Sprawd�, czy numer wygl�da poprawnie.";
        Agent_Speak(L_ISPNoAnwIntro2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwIntro3_Text = "Je�li wygl�da dobrze, poczekaj kilka minut,";
        Agent_Speak(L_ISPNoAnwIntro3_Text);

        var L_ISPNoAnwIntro4_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b�.";
        Agent_Speak(L_ISPNoAnwIntro4_Text);

        var L_ISPNoAnwIntro5_Text = "Je�li jednak numer jest niepoprawny,";
        Agent_Speak(L_ISPNoAnwIntro5_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro6_Text = "Kliknij tutaj, aby go poprawi�.";
        Agent_Speak(L_ISPNoAnwIntro6_Text);

        Agent_Play("RestPose");

        var L_ISPNoAnwIntro7_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie.";
        Agent_Speak(L_ISPNoAnwIntro7_Text);
}

function Agent_ISPNoAnwCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwWhatToDoNext1_Text = "Je�li numer telefonu zosta� sprawdzony i wygl�da poprawnie,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwWhatToDoNext2_Text = "A chcesz ponowi� pr�b� po��czenia,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext2_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwWhatToDoNext3_Text = "Kliknij przycisk Wybierz numer ponownie.";
        Agent_Speak(L_ISPNoAnwWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwPhoneNumberIncorrect1_Text = "Je�li numer telefonu jest niepoprawny,";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect1_Text);

        var L_ISPNoAnwPhoneNumberIncorrect2_Text = "Kliknij pole tekstowe.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwPhoneNumberIncorrect3_Text = "W polu powinna pojawi� si� migaj�ca pionowa linia, znana jako punkt wstawiania.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect3_Text);

        var L_ISPNoAnwPhoneNumberIncorrect4_Text = "Wszystko, co napiszesz, b�dzie wprowadzane w punkcie wstawiania.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect4_Text);

        var L_ISPNoAnwPhoneNumberIncorrect5_Text = "W polu tekstowym mo�esz przenie�� punkt wstawiania, naciskaj�c na klawiaturze klawisz strza�ki w lewo lub strza�ki w prawo.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect5_Text);

        var L_ISPNoAnwPhoneNumberIncorrect6_Text = "Mo�esz u�y� klawisza Delete do usuwania znak�w po punkcie wstawiania.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect6_Text);

        var L_ISPNoAnwPhoneNumberIncorrect7_Text = "Mo�esz te� u�y� klawisza Backspace do usuwania znak�w przed punktem wstawiania.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect7_Text);
}

function Agent_ISPNoAnwCommand_HowToMoveOn() 
{
        var L_ISPNoAnwHowToMoveOn1_Text = "Aby kontynuowa�, musisz wybra� ponowne po��czenie lub pomin�� konfiguracj� us�ugi internetowej.";
        Agent_Speak(L_ISPNoAnwHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwHowToMoveOn2_Text = "Kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b� po��czenia.";
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

        var L_ISPNoAnwHowToMoveOn3_Text = "Mo�esz te� klikn�� przycisk Pomi�, aby kontynuowa� bez konfiguracji us�ugi internetowej.";
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

        var L_ISPPhBsyAddCommands1_Text = "Powiedz mi, co robi� &dalej";
        var L_ISPPhBsyAddCommands2_Text = "Powiedz mi, co zrobi�, je�li numer &telefonu jest niepoprawny";
        var L_ISPPhBsyAddCommands3_Text = "&Powiedz mi co� o tym kroku";

        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoNext", L_ISPPhBsyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect", L_ISPPhBsyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_AboutThisScreen", L_ISPPhBsyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPPhBsyIntro() {

}

function Agent_ISPPhBsyCommand_AboutThisScreen() 
{
        var L_ISPPhBsyIntro1_Text = "System Windows nie mo�e po��czy� si� z wybranym us�ugodawc� internetowym.";
        Agent_Speak(L_ISPPhBsyIntro1_Text);

        var L_ISPPhBsyIntro2_Text ="Linia telefoniczna mo�e by� zaj�ta lub us�ugodawca internetowy ma problemy techniczne.";
        Agent_Speak(L_ISPPhBsyIntro2_Text);

        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyIntro3_Text = "Sprawd�, czy numer wygl�da poprawnie.";
        Agent_Speak(L_ISPPhBsyIntro3_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro4_Text = "Je�li wygl�da dobrze, poczekaj kilka minut.";
        Agent_Speak(L_ISPPhBsyIntro4_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPPhBsyIntro5_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b� wybrania numeru.";
        Agent_Speak(L_ISPPhBsyIntro5_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro6_Text = "Je�li jednak numer jest niepoprawny,";
        Agent_Speak(L_ISPPhBsyIntro6_Text);

        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyIntro7_Text = "Kliknij tutaj, aby wypr�bowa� alternatywny numer w ksi��ce telefonicznej.";
        Agent_Speak(L_ISPPhBsyIntro7_Text);

        Agent_Play("RestPose");

        var L_ISPPhBsyIntro8_Text = "Nast�pnie kliknij przycisk Wybierz numer ponownie.";
        Agent_Speak(L_ISPPhBsyIntro8_Text);
}

function Agent_ISPPhBsyCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyWhatToDoNext1_Text = "Je�li numer telefonu zosta� sprawdzony i wygl�da poprawnie,";
        Agent_Speak(L_ISPPhBsyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");    
    
        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyWhatToDoNext2_Text = "lub je�li chcesz wybra� numer alternatywny,";
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

        var L_ISPPhBsyWhatToDoNext4_Text = "Kliknij przycisk Wybierz numer ponownie, aby ponowi� pr�b� po��czenia.";
        Agent_Speak(L_ISPPhBsyWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_ISPPhBsyPhoneNumberIncorrect1_Text = "Je�li numer telefonu jest niepoprawny,";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

    var L_ISPPhBsyPhoneNumberIncorrect2_Text = "Kliknij ten przycisk opcji, aby wypr�bowa� alternatywny numer w ksi��ce telefonicznej.";
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

    var L_ISPPhBsyPhoneNumberIncorrect3_Text = "Kliknij przycisk Wybierz numer ponownie, kiedy zechcesz ponowi� pr�b� po��czenia.";
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

    var L_FinishAddCommands1_Text = "&Powiedz mi co� o tym kroku";  
    var L_FinishAddCommands2_Text = "Ja&k wykona� rejestracj� z pulpitu?";    
    var L_FinishAddCommands3_Text = "Jak &wykona� aktywacj� systemu Windows z pulpitu?";    
    var L_FinishAddCommands4_Text = "Jak uzyskam dost�p do &Internetu?";    
    var L_FinishAddCommands5_Text = "&Co mam robi� dalej?";

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
    var L_FinishAboutThisStep1_Text = "Gratulacje! Wszystkie czynno�ci zosta�y wykonane!";
    Agent_Speak(L_FinishAboutThisStep1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishAboutThisStep2_Text = "Aby teraz zacz�� u�ywa� systemu Windows, po prostu kliknij przycisk Zako�cz.";
    Agent_Speak(L_FinishAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_FinishAboutThisStep3_Text = "Aby odby� fascynuj�c� podr� i odkry� nowe funkcje systemu Windows XP, kliknij polecenie Pomoc i obs�uga techniczna w menu Start, a nast�pnie wpisz \"samouczek\" w polu Wyszukaj.";
    Agent_Speak(L_FinishAboutThisStep3_Text);
}

function Agent_FinishHowToRegister() 
{
    var L_FinishHowToRegister1_Text = "Je�li wcze�niej w tym procesie zosta�a pomini�ta rejestracja, mo�esz zarejestrowa� t� kopi� systemu Windows w dowolnym czasie, klikaj�c w menu Start polecenie Uruchom i wpisuj�c regwiz /r.";
    Agent_Speak(L_FinishHowToRegister1_Text);
        
    var L_FinishHowToRegister2_Text = "Je�li zapomnisz te kroki, kliknij polecenie Pomoc i obs�uga techniczna w menu Start, aby znale�� odpowiedzi na pytania i inne warto�ciowe informacje.";
    Agent_Speak(L_FinishHowToRegister2_Text);
}

function Agent_FinishHowToActivate() 
{
    var L_FinishHowToActivate1_Text = "Je�li wcze�niej w tym procesie zosta�a pomini�ta aktywacja, co kilka dni na pulpicie systemu Windows b�dzie si� pojawia� ma�e przypomnienie.";
    Agent_Speak(L_FinishHowToActivate1_Text);
        
    var L_FinishHowToActivate2_Text = "Aby m�c dalej u�ywa� systemu Windows, musisz wykona� jego aktywacj� w ci�gu wyznaczonego okresu aktywacji.";
    Agent_Speak(L_FinishHowToActivate2_Text);

    var L_FinishHowToActivate3_Text = "Je�li nie chcesz czeka� na przypomnienie, mo�esz uruchomi� Kreatora aktywacji produktu, klikaj�c w menu Start polecenie Aktywacja systemu Windows.";
    Agent_Speak(L_FinishHowToActivate3_Text);

    var L_FinishHowToActivate4_Text = "Je�li zapomnisz te kroki, kliknij polecenie Pomoc i obs�uga techniczna w menu Start, aby znale�� odpowiedzi na pytania i inne warto�ciowe informacje.";
    Agent_Speak(L_FinishHowToActivate4_Text);
}

function Agent_FinishHowToAccessInternet() 
{
    var L_FinishHowToAccessInternet1_Text = "Je�li ten komputer ma ju� skonfigurowany dost�p do Internetu, po prostu kliknij polecenie Internet u g�ry menu Start na pulpicie systemu Windows.";
    Agent_Speak(L_FinishHowToAccessInternet1_Text);
        
    var L_FinishHowToAccessInternet2_Text = "Je�li ten komputer nie jest skonfigurowany do dost�pu do Internetu, zostanie wy�wietlony Kreator po��cze� internetowych.";
    Agent_Speak(L_FinishHowToAccessInternet2_Text);

    var L_FinishHowToAccessInternet3_Text = "Wykonaj instrukcje tego kreatora w celu po��czenia si� z Internetem.";
    Agent_Speak(L_FinishHowToAccessInternet3_Text);
}

function Agent_FinishWhatToDoNext() 
{
    var L_FinishWhatToDoNext1_Text = "Konfigurowanie systemu Microsoft Windows XP na tym komputerze dobieg�o ko�ca!";
    Agent_Speak(L_FinishWhatToDoNext1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishWhatToDoNext2_Text = "Po prostu kliknij przycisk Zako�cz.";
    Agent_Speak(L_FinishWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_FinishWhatToDoNext3_Text = "Aby odby� fascynuj�c� podr� i odkry� nowe funkcje systemu Windows XP, kliknij polecenie Pomoc i obs�uga techniczna w menu Start, a nast�pnie wpisz \"samouczek\" w polu Wyszukaj.";
    Agent_Speak(L_FinishWhatToDoNext3_Text);

    var L_FinishWhatToDoNext4_Text = "�yczymy Ci mi�ego korzystania z systemu Windows XP!";
    Agent_Speak(L_FinishWhatToDoNext4_Text);
}






function Agent_MouseTutAddCommands() {

        var L_MouseTutMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_MouseTutMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_MouseTutMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        
        
        

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

        var L_MouseTutIntroTellMeWhatToDoNext1_Text = "Aby rozpocz��, kliknij przycisk Samouczek.";
        Agent_Speak(L_MouseTutIntroTellMeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutTellMeAboutThisScreen() 
{
        var L_MouseTutTellMeAboutThisScreen1_Text = "To jest pocz�tek zestawu ekran�w, u�atwiaj�cych nauk� korzystania z myszy.";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen1_Text);

        var L_MouseTutTellMeAboutThisScreen2_Text = "Mo�esz wybra� opcj� skorzystania z tego samouczka";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen2_Text);

        var L_MouseTutTellMeAboutThisScreen3_Text = "lub mo�esz j� pomin��, je�li umiesz ju� pos�ugiwa� si� mysz� .";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen1_Text = "Aby rozpocz��, kliknij przycisk Samouczek.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text = "Mo�esz te� klikn�� przycisk Dalej, aby pomin�� samouczek.";
        Agent_Speak(L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_MouseTutAAddCommands() {

        var L_MouseTutAMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_MouseTutAMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_MouseTutAMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeWhatToDoNext", L_MouseTutAMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeAboutThisScreen", L_MouseTutAMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeHowToMoveToNextScreen", L_MouseTutAMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutATellMeWhatToDoNext() 
{
        var L_MouseTutAWhatToDoNext1_Text = "Spr�buj przesuwa� mysz i zobacz, jak wska�nik przenosi si� na ekranie.";
        Agent_Speak(L_MouseTutAWhatToDoNext1_Text);

        var L_MouseTutAWhatToDoNext2_Text = "Upewnij si�, �e przesuwasz mysz po p�askiej powierzchni.";
        Agent_Speak(L_MouseTutAWhatToDoNext2_Text);
}

function Agent_OnMouseTutATellMeAboutThisScreen() 
{

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutATellMeAboutThisScreen1_Text = "Ten ekran pokazuje, jak u�ywa� myszy do przenoszenia wska�nika po ekranie.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutATellMeAboutThisScreen2_Text = "Po prostu przesuwaj mysz w lewo i w prawo oraz w kierunku do i od komputera.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen2_Text);

        var L_MouseTutATellMeAboutThisScreen3_Text = "Spr�buj to zrobi� samodzielnie!";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen3_Text);
}

function Agent_OnMouseTutATellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutBAddCommands() {

        var L_MouseTutBMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_MouseTutBMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_MouseTutBMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeWhatToDoNext", L_MouseTutBMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeAboutThisScreen", L_MouseTutBMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeHowToMoveToNextScreen", L_MouseTutBMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutBTellMeWhatToDoNext() 
{
        var L_MouseTutBWhatToDoNext1_Text = "Spr�buj podnie�� mysz i przenie� j� w inne po�o�enie.";
        Agent_Speak(L_MouseTutBWhatToDoNext1_Text);

        var L_MouseTutBWhatToDoNext2_Text = "Nast�pnie po�� j� z powrotem i przesu� j� koli�cie.";
        Agent_Speak(L_MouseTutBWhatToDoNext2_Text);
}

function Agent_OnMouseTutBTellMeAboutThisScreen() 
{
        var L_MouseTutBTellMeAboutThisScreen1_Text = "Ten ekran pokazuje, jak dopasowa� po�o�enie myszy, gdy nie ma ju� miejsca .";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen1_Text);

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutBTellMeAboutThisScreen2_Text = "Po prostu podnie� mysz i przenie� j� w wygodniejsze miejsce.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen2_Text);

        Agent_Play("RestPose");

        var L_MouseTutBTellMeAboutThisScreen3_Text = "Gdy po�o�ysz mysz z powrotem i przesuniesz j�, wska�nik b�dzie porusza� si� zgodnie z tymi ruchami.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen3_Text);

        var L_MouseTutBTellMeAboutThisScreen4_Text = "Zauwa�, �e wska�nik przenosi si� tylko wtedy, gdy przesuwasz mysz po p�askiej powierzchni!";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutBTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutCAddCommands() {

        var L_MouseTutCMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_MouseTutCMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_MouseTutCMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeWhatToDoNext", L_MouseTutCMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeAboutThisScreen", L_MouseTutCMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeHowToMoveToNextScreen", L_MouseTutCMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_MouseTutCIntro() {
        
}

function Agent_OnMouseTutCTellMeWhatToDoNext() 
{
        var L_MouseTutCWhatToDoNext1_Text = "Spr�buj przesuwa� mysz, aby przenosi� wska�nik nad przyciskami graficznymi na ekranie.";
        Agent_Speak(L_MouseTutCWhatToDoNext1_Text);
}

function Agent_OnMouseTutCTellMeAboutThisScreen() 
{
        var L_MouseTutCTellMeAboutThisScreen1_Text = "Ten ekran umo�liwia �wiczenie poruszania wska�nikiem za pomoc� myszy.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutCTellMeAboutThisScreen2_Text = "U�yj myszy, aby przenosi� wska�nik nad tymi przyciskami graficznymi.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutCTellMeAboutThisScreen3_Text = "Zauwa�, �e gdy przenosisz wska�nik nad przyciskiem, zmienia on sw�j wygl�d!";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen3_Text);

        var L_MouseTutCTellMeAboutThisScreen4_Text = "Przycisk powraca do oryginalnego wygl�du po przeniesieniu wska�nika poza obraz.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutCTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutDAddCommands() {

        var L_MouseTutDMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_MouseTutDMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_MouseTutDMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeWhatToDoNext", L_MouseTutDMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeAboutThisScreen", L_MouseTutDMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeHowToMoveToNextScreen", L_MouseTutDMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutDTellMeWhatToDoNext() 
{
        var L_MouseTutDWhatToDoNext1_Text = "Wypr�buj klikanie lewym przyciskiem myszy.";
        Agent_Speak(L_MouseTutDWhatToDoNext1_Text);
}

function Agent_OnMouseTutDTellMeAboutThisScreen() 
{
        var L_MouseTutDTellMeAboutThisScreen1_Text = "Ta cz�� samouczka myszy jest po�wi�cona nauce klikania.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen1_Text);

        var elem = g.document.all("image");

        Agent_MoveToElement(elem, "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen2_Text = "Aby wybra� element na ekranie, u�yj myszy do przeniesienia wska�nika nad element,";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen2_Text);

        Agent_GestureAtElement(g.document.all("image"), "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen3_Text = "nast�pnie naci�nij i zwolnij przycisk myszy, tak jak to tutaj pokazano.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutDTellMeAboutThisScreen4_Text = "To jest w�a�nie klikanie!";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutDTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutEAddCommands() {

        var L_MouseTutEMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_MouseTutEMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_MouseTutEMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeWhatToDoNext", L_MouseTutEMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeAboutThisScreen", L_MouseTutEMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeHowToMoveToNextScreen", L_MouseTutEMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutETellMeWhatToDoNext() 
{
        var L_MouseTutEWhatToDoNext1_Text = "�wicz klikanie lewym przyciskiem myszy na przyciskach graficznych na ekranie.";
        Agent_Speak(L_MouseTutEWhatToDoNext1_Text);
}

function Agent_OnMouseTutETellMeAboutThisScreen() 
{
        var L_MouseTutETellMeAboutThisScreen1_Text = "Ten ekran umo�liwi �wiczenie klikania mysz�.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutETellMeAboutThisScreen2_Text = "U�yj myszy do wskazania tych przycisk�w graficznych.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutETellMeAboutThisScreen3_Text = "Nast�pnie kliknij lewym przyciskiem myszy.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen3_Text);

        var L_MouseTutETellMeAboutThisScreen4_Text = "Nast�pnie wypr�buj inne przyciski graficzne.";
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

        var L_MouseTutFMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_MouseTutFMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_MouseTutFMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

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
        var L_MouseTutFTellMeAboutThisScreen1_Text = "Wspaniale!";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen1_Text);

        var L_MouseTutFTellMeAboutThisScreen2_Text = "Jak dotychczas u�ytkownik nauczy� si�, jak wskazywa� i klika� mysz�.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen2_Text);

        var L_MouseTutFTellMeAboutThisScreen3_Text = "Teraz po�wiczysz te umiej�tno�ci, wykonuj�c czynno�ci na innych elementach, kt�re znajdziesz w systemie Windows lub na stronach sieci Web.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen3_Text);

        var L_MouseTutFTellMeAboutThisScreen4_Text = "Je�li mo�esz si� ju� przenie��, kliknij przycisk Dalej.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutFTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutGAddCommands() {

        var L_MouseTutGMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_MouseTutGMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_MouseTutGMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeWhatToDoNext", L_MouseTutGMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeAboutThisScreen", L_MouseTutGMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeHowToMoveToNextScreen", L_MouseTutGMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutGPreDisplayMenu() {

        if (g.btnNext.disabled) {

                var L_MouseTutGMenuCommand4_Text = "Powiedz mi, dl&aczego przycisk Dalej jest niedost�pny";

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
        var L_MouseTutGWhyNextNotAvailable1_Text = "Przycisk Dalej jest niedost�pny, poniewa� nie wybrano jeszcze miasta.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable1_Text);

		Agent_GestureAtElement(g.document.all("selCity"),"LeftCenter");

        var L_MouseTutGWhyNextNotAvailable2_Text = "Najpierw musisz klikn�� jedno z tych miast.";
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

        var L_MouseTutGWhyNextNotAvailable3_Text = "Nast�pnie mo�esz klikn�� przycisk Dalej, aby kontynuowa�.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeWhatToDoNext() {
		
		if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "RightCenter");

        var L_MouseTutGWhatToDoNext1_Text = "Klikaj strza�ki w g�r� i w d�, aby przewija� list� miast.";
        Agent_Speak(L_MouseTutGWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

		if (g.document.dir == "rtl")
			Agent_Play("RestPose");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGWhatToDoNext2_Text = "Nast�pnie wybierz miasto, klikaj�c jego nazw�.";
        Agent_Speak(L_MouseTutGWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutGWhatToDoNext3_Text = "Nast�pnie spr�buj klika� inne miasta na li�cie!";
        Agent_Speak(L_MouseTutGWhatToDoNext3_Text);

        Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
}

function Agent_OnMouseTutGTellMeAboutThisScreen() {
        var L_MouseTutGTellMeAboutThisScreen1_Text = "Na tym ekranie mo�esz po�wiczy� klikanie, s�u��ce do wybierania elementu z listy.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGTellMeAboutThisScreen2_Text = "Gdy klikniesz miasto na li�cie,";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");
		
        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("imgTable"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("imgTable"), "RightCenter");

        var L_MouseTutGTellMeAboutThisScreen3_Text = "Jego obraz pojawi si� tutaj.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeHowToMoveToNextScreen() {

        if (g.btnNext.disabled) {

                Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

                var L_MouseTutGHowToMoveToNextScreen1_Text = "Musisz klikn�� miasto tutaj.";
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

                var L_MouseTutGHowToMoveToNextScreen2_Text = "Nast�pnie kliknij przycisk Dalej.";
                Agent_Speak(L_MouseTutGHowToMoveToNextScreen2_Text);
    
                Agent_Play("RestPose");
        }

        else
                MouseTut_HowToMoveToNextScreen();

}




function Agent_MouseTutHAddCommands() {

        var L_MouseTutHMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_MouseTutHMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_MouseTutHMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeWhatToDoNext", L_MouseTutHMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeAboutThisScreen", L_MouseTutHMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeHowToMoveToNextScreen", L_MouseTutHMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutHTellMeWhatToDoNext() {

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHWhatToDoNext1_Text = "Wybierz jedn� z opcji, klikaj�c k�ko obok niej.";
        Agent_Speak(L_MouseTutHWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutHWhatToDoNext2_Text = "Zmieni to wygl�d obrazu.";
        Agent_Speak(L_MouseTutHWhatToDoNext2_Text);

        var L_MouseTutHWhatToDoNext3_Text = "Nast�pnie wypr�buj klikanie innej opcji!";
        Agent_Speak(L_MouseTutHWhatToDoNext3_Text);
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeAboutThisScreen() {
        var L_MouseTutHTellMeAboutThisScreen1_Text = "Na tym ekranie mo�esz po�wiczy�, jak wybra� opcj�, gdy mo�na dokona� tylko jednego wyboru na raz.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHTellMeAboutThisScreen2_Text = "Gdy klikniesz k�ka tutaj,";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("cityImg"), "LeftCenter");
        else
			Agent_GestureAtElement(g.document.all("cityImg"), "RightCenter");

        var L_MouseTutHTellMeAboutThisScreen3_Text = "zmieni si� spos�b wygl�du obraz�w.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutIAddCommands() {

        var L_MouseTutIMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_MouseTutIMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_MouseTutIMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeWhatToDoNext", L_MouseTutIMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeAboutThisScreen", L_MouseTutIMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeHowToMoveToNextScreen", L_MouseTutIMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutITellMeWhatToDoNext() {

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutIWhatToDoNext1_Text = "Kliknij jedn� lub kilka opcji tutaj i zobacz na obrazie, jakie s� tego wyniki.";
        Agent_Speak(L_MouseTutIWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutIWhatToDoNext2_Text = "Kliknij opcj� ponownie, aby j� wyczy�ci�.";
        Agent_Speak(L_MouseTutIWhatToDoNext2_Text);

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeAboutThisScreen() {
        var L_MouseTutITellMeAboutThisScreen1_Text = "Czasami mo�esz wybra� wiele opcji w zestawie wybor�w.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen1_Text);

        var L_MouseTutITellMeAboutThisScreen2_Text = "Na tym ekranie mo�esz wybra� r�ne style wy�wietlania dla obrazu.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen2_Text);

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutITellMeAboutThisScreen3_Text = "Po prostu kliknij pola obok opcji znajduj�cych si� tutaj.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutJAddCommands() {

        var L_MouseTutJMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_MouseTutJMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_MouseTutJMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

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

        var L_MouseTutJWhatToDoNext1_Text = "Kliknij pole tutaj,";
        Agent_Speak(L_MouseTutJWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutJWhatToDoNext2_Text = "i wpisz tekst, kt�ry ma pojawia� si� jako podpis.";
        Agent_Speak(L_MouseTutJWhatToDoNext2_Text);
}

function Agent_OnMouseTutJTellMeAboutThisScreen() {
        var L_MouseTutJTellMeAboutThisScreen1_Text = "Czasami mo�esz dostosowa� wyb�r, u�ywaj�c w�asnych s��w.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen1_Text);

        var L_MouseTutJTellMeAboutThisScreen2_Text = "Na tym ekranie mo�esz wpisa� podpis do obrazu.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen2_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(g.document.all("caption"), "Left");
		else
			Agent_GestureAtElement(g.document.all("CaptionLabel"), "Left");

        var L_MouseTutJTellMeAboutThisScreen3_Text = "Po prostu kliknij pole tutaj i wpisz sw�j podpis.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutJTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutKAddCommands() {

        var L_MouseTutKMenuCommand1_Text = "Powiedz mi, co robi� &dalej";
        var L_MouseTutKMenuCommand2_Text = "Powiedz mi co� o tym &ekranie";
        var L_MouseTutKMenuCommand3_Text = "Powiedz mi, jak przenie�� si� na &nast�pny ekran";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeWhatToDoNext", L_MouseTutKMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeAboutThisScreen", L_MouseTutKMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeHowToMoveToNextScreen", L_MouseTutKMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutKTellMeWhatToDoNext() {
        var L_MouseTutKWhatToDoNext1_Text = "Gratulacje! Samouczek myszy zosta� zako�czony!";
        Agent_Speak(L_MouseTutKWhatToDoNext1_Text);

        var L_MouseTutKWhatToDoNext2_Text = "kliknij przycisk Dalej, aby przej�� do nast�pnego ekranu.";
        Agent_Speak(L_MouseTutKWhatToDoNext2_Text);
}

function Agent_OnMouseTutKTellMeAboutThisScreen() {
        var L_MouseTutKTellMeAboutThisScreen1_Text = "Wspaniale! Obraz z wakacji jest gotowy!";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen1_Text);
        
        var L_MouseTutKTellMeAboutThisScreen2_Text = "Samouczek myszy zosta� zako�czony.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen2_Text);

        var L_MouseTutKTellMeAboutThisScreen3_Text = "Aby uzyska� wi�cej informacji na temat takich umiej�tno�ci, jak przeci�ganie, zmiana rozmiaru i u�ywanie prawego przycisku myszy, zapoznaj si� z tre�ci� Pomocy, gdy system Windows zostanie uruchomiony po raz pierwszy.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutKTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function MouseTut_WhatToDoNext() 
{
        var L_MouseTutTellMeWhatToDoNext1_Text = "Po prostu kliknij przycisk Dalej, aby przej�� do nast�pnego ekranu";
        Agent_Speak(L_MouseTutTellMeWhatToDoNext1_Text);

        var L_MouseTutTellMeWhatToDoNext2_Text = "Mo�esz te� klikn�� przycisk Pomi�, aby pomin�� reszt� samouczka.";
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

        var L_MouseTutTellMeHowToMoveToNextScreen1_Text = "Kliknij przycisk Dalej, aby przenie�� si� na nast�pny ekran.";
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

        var L_MouseTutTellMeHowToMoveToNextScreen2_Text = "Mo�esz te� klikn�� przycisk Pomi�, aby pomin�� samouczek.";
        Agent_Speak(L_MouseTutTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_2nicsAddCommands() 
{
    var L_2nicsMenuCommand1_Text = "&Powiedz mi co� o tym kroku";
    
    g_AgentCharacter.Commands.Add("Agent_On2nicsAboutThisStep", L_2nicsMenuCommand1_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_On2nicsAboutThisStep() 
{
    var L_2nicsAboutThisScreen1_Text = "Ten ekran wyja�nia, �e Tw�j komputer mo�e ��czy� si� z Internetem na wi�cej sposob�w ni� jeden.";
	Agent_Speak(L_2nicsAboutThisScreen1_Text);
	
    var L_2nicsAboutThisScreen2_Text = "Mo�esz wybra�, kt�rego po��czenia zechcesz u�ywa�, po zako�czonej konfiguracji systemu Windows.";
	Agent_Speak(L_2nicsAboutThisScreen2_Text);
}



function Agent_UserNameAddCommands() 
{
    var L_UserNameCommand1_Text = "&Powiedz mi co� o tym kroku";
    var L_UserNameCommand2_Text = "&Gdzie pojawia si� moje imi�?";
    var L_UserNameCommand3_Text = "&Jak mog� zmieni� moje imi� p�niej?";
    var L_UserNameCommand4_Text = "&Co mam robi� dalej?";
    
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
    var L_UserNameAboutThisStep1_Text = "Na tym ekranie podajesz swoj� to�samo�� w postaci imienia i nazwiska, dzi�ki czemu system Windows b�dzie rozpoznawa� Ci� po zalogowaniu.";
	Agent_Speak(L_UserNameAboutThisStep1_Text);
}

function Agent_OnUserNameWhereIsName() 
{
    var L_UserNameWhereIsName1_Text = "Twoje imi� b�dzie wy�wietlane na ekranie powitalnym, kt�ry pojawia si� podczas uruchamiania systemu Windows.";
	Agent_Speak(L_UserNameWhereIsName1_Text);
	
    var L_UserNameWhereIsName2_Text = "B�dzie ono tak�e wy�wietlane u g�ry menu Start, kiedy si� zalogujesz.";
	Agent_Speak(L_UserNameWhereIsName2_Text);
	
    var L_UserNameWhereIsName3_Text = "Je�li kto� inny zaloguje si� na Twoim komputerze i otworzy folder Moje dokumenty, Twoje imi� pojawi si� w nazwie folderu.";
	Agent_Speak(L_UserNameWhereIsName3_Text);
	
    var L_UserNameWhereIsName4_Text = "Nazwa folderu zostanie na przyk�ad wy�wietlona jako \"Adam - dokumenty\", tak aby inni u�ytkownicy wiedzieli, �e dany folder nale�y do Adama.";
	Agent_Speak(L_UserNameWhereIsName4_Text);
	
    var L_UserNameWhereIsName5_Text = "Twoje imi� b�dzie r�wnie� pojawia�o si� na li�cie u�ytkownik�w, kt�r� mo�esz wy�wietli�, klikaj�c w menu Start polecenie Panel sterowania, a nast�pnie klikaj�c aplet Konta u�ytkownik�w.";
	Agent_Speak(L_UserNameWhereIsName5_Text);
}

function Agent_OnUserNameHowToChangeName() 
{
    var L_UserNameHowToChangeName1_Text = "Aby zmieni� swoje imi� po zalogowaniu si� w systemie Windows, kliknij w menu Start polecenie Panel sterowania.";
	Agent_Speak(L_UserNameHowToChangeName1_Text);
	
    var L_UserNameHowToChangeName2_Text = "Nast�pnie kliknij aplet Konta u�ytkownik�w.";
	Agent_Speak(L_UserNameHowToChangeName2_Text);
	
    var L_UserNameHowToChangeName3_Text = "Uzyskasz mo�liwo�� zmiany swojego imienia, a tak�e imion innych u�ytkownik�w tego komputera.";
	Agent_Speak(L_UserNameHowToChangeName3_Text);
}

function Agent_OnUserNameWhatToDoNext() 
{
    var L_UserNameWhatToDoNext1_Text = "Kliknij przycisk Dalej, aby spr�bowa� ponownie po��czy� si� z Internetem.";
	Agent_Speak(L_UserNameWhatToDoNext1_Text);
	
    var L_UserNameWhatToDoNext2_Text = "Mo�esz te� klikn�� przycisk Pomi�, aby kontynuowa� bez ��czenia si� z Internetem.";
	Agent_Speak(L_UserNameWhatToDoNext2_Text);
}
