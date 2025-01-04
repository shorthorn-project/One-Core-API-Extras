



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
        
		var L_AddCommonCommands2_Text = "Podaj informacjê &o zapisywaniu do Internetu";
		var L_AddCommonCommands3_Text = "&Uruchom ponownie zapisywanie do Internetu";
		var L_AddCommonCommands4_Text = "&Pomiñ zapisywanie do Internetu";

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
        var L_AddAssistantanceCommand1_Text = "Do kogo mogê zadzwoniæ po &pomoc?";       

        g_AgentCharacter.Commands.Add("Agent_OnCommand_AboutAssistance", L_AddAssistantanceCommand1_Text);
    }
}

function Agent_OnCommand_AboutAssistance() 
{

    Agent_StopAll();

    var L_AboutAssistance1_Text = "Skontaktuj siê z producentem komputera pod adresem %s.";
    var re = /%s/i;
    var L_AboutAssistance2_Text = "Skontaktuj siê z producentem komputera.";

    
    

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
            Agent_Speak(L_AboutAssistance2_Text);
    else
            Agent_Speak(L_AboutAssistance1_Text.replace(re, strPhoneNumber));

    Agent_Play("ReadReturn");
}

function Agent_AddWhatToDoNextCommand() 
{
    var L_AddWhatToDoNextCommand1_Text = "&Co mam robiæ dalej?";
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

        var L_WhatToDoNext1_Text = "Aby kontynuowaæ, kliknij przycisk Dalej.";
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

        var L_WhatToDoNext2_Text = "Aby powróciæ do poprzedniego kroku, kliknij przycisk Wstecz.";
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

        var L_WhatToDoNext3_Text = "Mo¿esz tak¿e pomin¹æ ten krok, klikaj¹c przycisk Pomiñ.";
        Agent_Speak(L_WhatToDoNext3_Text);
        
        Agent_Play("RestPose");
    }       
}

function Agent_DoSpecialISPCommand1() 
{
	
	
			
	Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
			
	var L_ISPSpecialTellMeAboutInternetSignup1_Text = "W tej chwili trwa proces zapisywania siê w celu uzyskania dostêpu do Internetu.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup1_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup2_Text = "Jeœli masz problemy z kontynuacj¹, kliknij mnie lub naciœnij klawisz F1.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup2_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup3_Text = "Wyœwietlê polecenia mojego menu, które mo¿esz wybraæ, aby rozpocz¹æ ponownie lub przejœæ do nastêpnej sekcji.";
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

    var L_EncourageNextButton1_Text = "Kliknij przycisk Dalej. | Po prostu kliknij przycisk Dalej! | Proszê, kliknij przycisk Dalej. | Kliknij przycisk Dalej, aby przenieœæ siê do nastêpnego kroku.";
    Agent_Speak(L_EncourageNextButton1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnF1() 
{
    var L_OnF1_Text = "Jak mogê pomóc? | W jaki sposób mogê pomóc?";
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

    var L_PreWelcomeScript2_Text = "Jestem tutaj, aby pomóc w skonfigurowaniu nowego komputera.";
    Agent_Speak(L_PreWelcomeScript2_Text);

    var L_PreWelcomeScript3_Text = "Mogê udzielaæ wyjaœnieñ podczas wykonywania czynnoœci.";
    Agent_Speak(L_PreWelcomeScript3_Text);
                
    Agent_MoveToElement(document.all("AssistImg"), "LeftCenter"); 
    
    

    var L_PreWelcomeScript4_Text = "Za ka¿dym razem, gdy bêdziesz potrzebowaæ pomocy, po prostu kliknij mnie mysz¹ lub naciœnij klawisz F1.";
    Agent_Speak(L_PreWelcomeScript4_Text);
    
    Agent_Play("PointLeft");

    var L_PreWelcomeScript5_Text = "Bêdê tutaj, aby s³u¿yæ Ci pomoc¹.";
    Agent_Speak(L_PreWelcomeScript5_Text);
    
    Agent_Play("RestPose");

    g_AgentRequestHideImage = g_AgentCharacter.Hide();
}



function Agent_WelcomeAddCommands() 
{
    
    
    

    var L_WelcomeAddCommands1_Text = "&Powiedz mi coœ o tym procesie";
    var L_WelcomeAddCommands2_Text = "&Co mam robiæ dalej?";

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

    var L_WelcomeWhatToDoNext1_Text = "Jeœli mo¿esz ju¿ zacz¹æ, kliknij przycisk Dalej.";
    Agent_Speak(L_WelcomeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnWelcomeCommand_AboutProcess() 
{
    Agent_StopAll();

    var L_AboutProcess1_Text = "Za mn¹ widoczny jest pierwszy z serii ekranów, zaprojektowanych w celu u³atwienia Ci skonfigurowania komputera zgodnie z upodobaniami.";
    Agent_Speak(L_AboutProcess1_Text);

    var L_AboutProcess2_Text = "Ka¿dy ekran wymaga dokonania wyboru lub wpisania pewnych informacji, albo radzi, co robiæ dalej.";
    Agent_Speak(L_AboutProcess2_Text);

    var L_AboutProcess3_Text = "Oto krótki przegl¹d kroków, które zostan¹ wykonane w ci¹gu najbli¿szych kilku minut:";
    Agent_Speak(L_AboutProcess3_Text);

    var L_AboutProcess4_Text = "Po pierwsze, musimy sprawdziæ, czy sprzêt komputerowy, taki jak g³oœniki, klawiatura i zegar, dzia³a w³aœciwie.";
    Agent_Speak(L_AboutProcess4_Text);

    var L_AboutProcess5_Text = "Musimy tak¿e upewniæ siê, ¿e komputer jest do³¹czony do sieci, jeœli tak ma byæ.";
    Agent_Speak(L_AboutProcess5_Text);


    var L_AboutProcess6_Text = "Po drugie, przejrzymy umowê licencyjn¹ okreœlaj¹c¹ warunki u¿ytkowania systemu %1.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess6_Text, g_ProductName));
    
    if (!window.external.get_RetailOOBE()) 
    {
    var L_AboutProcess7_Text = "Jeœli komputer ma dzia³aj¹cy modem lub po³¹czenie sieciowe, uzyskasz mo¿liwoœæ zarejestrowania siê w firmie Microsoft i %1, aby móc otrzymywaæ od nas informacje na temat aktualizacji produktów i potencjalnie interesuj¹cych Ciê ofert.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess7_Text, g_OEMNameStr));
    } 
    else 
    {    
    var L_AboutProcess7_Text = "Jeœli komputer ma dzia³aj¹cy modem lub po³¹czenie sieciowe, uzyskasz mo¿liwoœæ zarejestrowania siê w firmie Microsoft, aby móc otrzymywaæ informacje na temat aktualizacji produktów i potencjalnie interesuj¹cych Ciê ofert.";
    Agent_Speak(L_AboutProcess7_Text);
    }       

    var L_AboutProcess8_Text = "Uzyskasz te¿ mo¿liwoœæ zweryfikowania autentycznoœci posiadanej kopii systemu %1 w celu zyskania pewnoœci, ¿e korzystasz z legalnej kopii.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess8_Text, g_ProductName));

    var L_AboutProcess9_Text = "Po trzecie, jeœli zechcesz, mogê pomóc Ci po³¹czyæ siê z Internetem.";
    Agent_Speak(L_AboutProcess9_Text); 

    var L_AboutProcess10_Text = "Jeœli zdecydujesz siê na pominiêcie tego kroku, mo¿esz zawsze samodzielnie po³¹czyæ siê póŸniej.";
    Agent_Speak(L_AboutProcess10_Text);

    var L_AboutProcess11_Text = "Po czwarte, pomogê Ci dostosowaæ ten komputer dla ka¿dej osoby, która bêdzie z niego korzystaæ. ";
    Agent_Speak(L_AboutProcess11_Text);

    var L_AboutProcess12_Text = "To tyle. Niewiele pozosta³o do zrobienia, wiêc zaczynajmy!";
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

    var L_AboutProcess13_Text = "Aby rozpocz¹æ, kliknij przycisk Dalej.";
    Agent_Speak(L_AboutProcess13_Text);
    
    Agent_Play("RestPose");
}


                                                       

function Agent_TimeZoneAddCommands() 
{
    var L_TimeZoneCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_TimeZoneCommand2_Text = "&Jak mam wybraæ swoj¹ strefê czasow¹?";

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
        var L_TimeZoneMenuCommand3_Text = "Co to jest &automatyczne uwzglêdnianie zmian czasu?";

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
    var L_ExplainTimeZoneStep1_Text = "Podaj strefê czasow¹, której bêdzie u¿ywa³ ten komputer, aby system Windows móg³ odpowiednio ustawiæ zegar komputera.";
    Agent_Speak(L_ExplainTimeZoneStep1_Text);

    var L_ExplainTimeZoneStep2_Text = "Jeœli chcesz, system Windows mo¿e u¿ywaæ funkcji automatycznego uwzglêdniania zmian czasu, aby automatycznie aktualizowaæ zegar po zmianie czasu.";
    Agent_Speak(L_ExplainTimeZoneStep2_Text);

    var L_ExplainTimeZoneStep3_Text = "To jest ostatni krok dotycz¹cy sprzêtu.";
    Agent_Speak(L_ExplainTimeZoneStep3_Text);

    var L_ExplainTimeZoneStep4_Text = "Nastêpnie przejdziemy do umowy licencyjnej.";
    Agent_Speak(L_ExplainTimeZoneStep4_Text);
    
}

function Agent_OnTimeZoneCommand_SelectZone() 
{
    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone1_Text = "Strefy czasowe na tej liœcie wyœwietlane s¹ jako Czas Uniwersalny Greenwich, czyli GMT, skorygowany o pewn¹ liczbê godzin.";
    Agent_Speak(L_TellUserHowToSelectTimeZone1_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone2_Text = "Kliknij tutaj lub naciskaj klawisz Tab na klawiaturze, a¿ do osi¹gniêcia tego miejsca. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone2_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Right");

    var L_TellUserHowToSelectTimeZone3_Text = "Nastêpnie, w celu przewiniêcia stref czasowych, kliknij te przyciski ma³ych strza³ek lub u¿yj klawiszy strza³ki w górê i strza³ki w dó³ na klawiaturze. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone3_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone4_Text = "Jeœli zobaczysz potrzebn¹ strefê czasow¹, kliknij j¹ lub naciœnij klawisz Enter na klawiaturze.";
    Agent_Speak(L_TellUserHowToSelectTimeZone4_Text);

    var L_TellUserHowToSelectTimeZone5_Text = "Wybrana strefa czasowa zostanie podœwietlona.";
    Agent_Speak(L_TellUserHowToSelectTimeZone5_Text);

    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserHowToSelectTimeZone6_Text = "Jeœli mieszkasz w regionie, gdzie stosowane s¹ okresowe zmiany czasu, umieœæ wskaŸnik tutaj i kliknij jeden raz, aby zaznaczyæ tê opcjê.";
    Agent_Speak(L_TellUserHowToSelectTimeZone6_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone7_Text = "Dwa razy w roku system Windows automatycznie dopasuje zegar komputera.";
    Agent_Speak(L_TellUserHowToSelectTimeZone7_Text);
    
}

function Agent_OnTimeZoneCommand_DaylightSavings() 
{
    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserAboutDaylightOption1_Text = "W niektórych strefach czasowych zegary s¹ w pewnych porach roku przestawiane do przodu lub do ty³u w celu dopasowania ich do ró¿nic w d³ugoœci dnia.";
    Agent_Speak(L_TellUserAboutDaylightOption1_Text);
    
    Agent_Play("RestPose");

    var L_TellUserAboutDaylightOption2_Text = "Jeœli chcesz, aby w takich przypadkach system Windows automatycznie dopasowywa³ zegar komputera, zaznacz tê opcjê, umieszczaj¹c tutaj wskaŸnik i klikaj¹c raz.";
    Agent_Speak(L_TellUserAboutDaylightOption2_Text);

}



function Agent_OEMHWAddCommands() 
{
    var L_OEMHWMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_OEMHWMenuCommand2_Text = "Ja&k mogê sprawdziæ, czy system dŸwiêkowy dzia³a?";
    var L_OEMHWMenuCommand3_Text = "&Co robiæ, jeœli dŸwiêk nie dzia³a?";
    var L_OEMHWMenuCommand4_Text = "Jak &mogê wskazaæ odpowiedŸ?";

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
    var L_OEMHWAboutThisScreen1_Text = "Na tym ekranie mo¿esz sprawdziæ, czy dzia³a system dŸwiêkowy tego komputera dzia³a.";
	  Agent_Speak(L_OEMHWAboutThisScreen1_Text);

    var L_OEMHWAboutThisScreen2_Text = "System dŸwiêkowy sk³ada siê z g³oœników, karty dŸwiêkowej znajduj¹cej siê wewn¹trz komputera i oprogramowania systemu Windows, które umo¿liwia odtwarzanie dŸwiêku.";
	  Agent_Speak(ApiObj.formatMessage(L_OEMHWAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnOEMHWHowDoIKnow() 
{
    var L_OEMHWHowDoIKnow1_Text = "Jeœli s³yszysz teraz dŸwiêk, oznacza to, ¿e system dŸwiêkowy dzia³a.";
	  Agent_Speak(L_OEMHWHowDoIKnow1_Text);

    var L_OEMHWHowDoIKnow2_Text = "Jeœli nie s³yszysz dŸwiêku, najpierw sprawdŸ si³ê g³osu g³oœnika, aby upewniæ siê, ¿e nie jest ustawiona zbyt nisko.";
	  Agent_Speak(L_OEMHWHowDoIKnow2_Text);

    var L_OEMHWHowDoIKnow3_Text = "Jeœli problem nie jest rozwi¹zany, przyjrzymy siê innym mo¿liwoœciom.";
	  Agent_Speak(L_OEMHWHowDoIKnow3_Text);
}

function Agent_OnOEMHWIsNotWorking() 
{
    var L_OEMHWIsNotWorking1_Text = "Po pierwsze, upewnij siê, ¿e g³oœniki s¹ w³¹czone.";
	  Agent_Speak(L_OEMHWIsNotWorking1_Text);
	
    var L_OEMHWIsNotWorking2_Text = "Niektóre g³oœniki maj¹ lampkê wskazuj¹c¹, ¿e s¹ w³¹czone.";
	  Agent_Speak(L_OEMHWIsNotWorking2_Text);

    var L_OEMHWIsNotWorking3_Text = "Po drugie, upewnij siê, ¿e s¹ ustawione na s³yszalny poziom g³oœnoœci.";
	  Agent_Speak(L_OEMHWIsNotWorking3_Text);

    var L_OEMHWIsNotWorking4_Text = "Jeœli wci¹¿ nie s³yszysz dŸwiêku pochodz¹cego z g³oœników...";
	  Agent_Speak(L_OEMHWIsNotWorking4_Text);

    var L_OEMHWIsNotWorking5_Text = "Po trzecie, upewnij siê, ¿e g³oœniki s¹ pod³¹czone do gniazdka elektrycznego, i ¿e s¹ tak¿e w³aœciwie pod³¹czone do komputera.";
	  Agent_Speak(L_OEMHWIsNotWorking5_Text);
	
	  var L_OEMHWIsNotWorking6_Text = "£atwo jest pomyliæ gniazdko mikrofonu komputera z jego gniazdkiem g³oœników.";
	  Agent_Speak(L_OEMHWIsNotWorking6_Text);

    var L_OEMHWIsNotWorking7_Text = "Po czwarte, jeœli masz zestaw g³oœników stereo, upewnij siê, ¿e s¹ one po³¹czone ze sob¹.";
	  Agent_Speak(L_OEMHWIsNotWorking7_Text);

    var L_OEMHWIsNotWorking8_Text = "Na koniec, jeœli wci¹¿ nie s³yszysz dŸwiêku, spróbuj po¿yczyæ zestaw g³oœników z innego komputera.";
	  Agent_Speak(L_OEMHWIsNotWorking8_Text);

    var L_OEMHWIsNotWorking9_Text = "Jeœli po¿yczone g³oœniki dzia³aj¹, a Twoje w³asne nie, musisz wymieniæ lub naprawiæ swoje g³oœniki.";
	  Agent_Speak(L_OEMHWIsNotWorking9_Text);
}

function Agent_OnOEMHWIndicateAnswer() 
{
	  Agent_GestureAtElement(g.document.all("Sound_Yes"), "Left");
    
    var L_OEMHWIndicateAnswer1_Text = "Po prostu umieœæ wskaŸnik myszy w bia³ym kó³ku z lewej strony odpowiedzi i";
	  Agent_Speak(L_OEMHWIndicateAnswer1_Text);
    
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("radioNoSound"), "Left");

    var L_OEMHWIndicateAnswer2_Text = "kliknij jeden raz.";
	  Agent_Speak(L_OEMHWIndicateAnswer2_Text);
    
    Agent_Play("RestPose");

    var L_OEMHWIndicateAnswer3_Text = "Jeœli chcesz u¿yæ klawiatury, aby wskazaæ odpowiedŸ, naciskaj klawisz Tab dopóki nie zobaczysz prostok¹ta wokó³ bia³ego kó³ka, które chcesz wype³niæ, a nastêpnie naciœnij klawisz spacji.";
	  Agent_Speak(L_OEMHWIndicateAnswer3_Text);
}




function Agent_CompNameAddCommands() 
{
    var L_CompNameMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_CompNameMenuCommand2_Text = "Jak mogê &zmieniæ nazwê komputera póŸniej?";

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
    var L_CompNameAboutThisScreen1_Text = "Na tym ekranie mo¿esz nazwaæ ten komputer.";
	  Agent_Speak(L_CompNameAboutThisScreen1_Text);

    var L_CompNameAboutThisScreen2_Text = "Ta nazwa pozwala innym u¿ytkownikom na zidentyfikowanie Twojego komputera, jeœli jest on po³¹czony z innymi komputerami w sieci.";
	  Agent_Speak(L_CompNameAboutThisScreen2_Text);
}

function Agent_OnCompNameHowToRename() 
{
    var L_CompNameHowToRename1_Text = "Po zakoñczeniu konfigurowania systemu Windows, kliknij polecenie Panel sterowania w menu Start.";
	  Agent_Speak(L_CompNameHowToRename1_Text);

    var L_CompNameHowToRename2_Text = "Kliknij ikonê System w kategorii Wydajnoœæ i konserwacja, a nastêpnie wykonaj instrukcje na karcie Nazwa komputera.";
	  Agent_Speak(L_CompNameHowToRename2_Text);

    var L_CompNameHowToRename3_Text = "Jeœli zapomnisz te kroki, kliknij polecenie Pomoc i obs³uga techniczna w menu Start, aby znaleŸæ odpowiedzi na pytania i inne wartoœciowe informacje.";
	  Agent_Speak(L_CompNameHowToRename3_Text);
}




function Agent_SECURITYPASSAddCommands() 
{
    var L_SECURITYPASSMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_SECURITYPASSMenuCommand2_Text = "&Jaki jest najlepszy sposób na utworzenie has³a?";

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
    var L_SECURITYPASSAboutThisScreen1_Text = "Na tym ekranie mo¿esz utworzyæ has³o, jeœli chcesz zabezpieczyæ ten komputer przed nieautoryzowanym dostêpem.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen1_Text);

    var L_SECURITYPASSAboutThisScreen2_Text = "Jedna uwaga: jeœli ten komputer jest po³¹czony z innymi komputerami w sieci, osoby loguj¹ce siê przy u¿yciu nazwy u¿ytkownika \"Administrator\" i prawid³owego has³a bêd¹ mog³y uzyskiwaæ dostêp do ca³ej sieci.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen2_Text);
    
    var L_SECURITYPASSAboutThisScreen3_Text = "Stanowczo zaleca siê, aby wymagaæ has³a administratora w celu ochrony komputera -- i sieci, jeœli istnieje.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen3_Text);
}

function Agent_OnSECURITYPASSBestWay() 
{
    var L_SECURITYPASSBestWay1_Text = "W celu zwiêkszenia bezpieczeñstwa has³a powinno ono zawieraæ co najmniej dwa z nastêpuj¹cych elementów: wielkie litery, ma³e litery i cyfry.";
	  Agent_Speak(L_SECURITYPASSBestWay1_Text);

    var L_SECURITYPASSBestWay2_Text = "Tak¿e bardziej przypadkowe sekwencje znaków zwiêksz¹ bezpieczeñstwo has³a.";
	  Agent_Speak(L_SECURITYPASSBestWay2_Text);

    var L_SECURITYPASSBestWay3_Text = "Has³a mog¹ mieæ d³ugoœæ do 127 znaków.";
	  Agent_Speak(L_SECURITYPASSBestWay3_Text);
    
    var L_SECURITYPASSBestWay4_Text = "Jeœli natomiast u¿ywasz systemu Windows w sieci, w której s¹ tak¿e komputery z systemem Windows 95 lub Windows 98 i chcesz mieæ mo¿liwoœæ logowania siê do sieci z tych komputerów, uwzglêdnij u¿ywanie hase³ nie d³u¿szych ni¿ 14 znaków.";
	  Agent_Speak(L_SECURITYPASSBestWay4_Text);
}



function Agent_JOINDOMAINAddCommands() 
{
    var L_JOINDOMAINMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_JOINDOMAINMenuCommand2_Text = "Co to jest &domena?";
    var L_JOINDOMAINMenuCommand3_Text = "Jak &mogê przy³¹czyæ siê do domeny?"; 
    var L_JOINDOMAINMenuCommand4_Text = "&Co mam robiæ dalej?";


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
    var L_JOINDOMAINAboutThisScreen1_Text = "Na tym ekranie mo¿esz zdecydowaæ, czy chcesz, aby ten komputer zosta³ do³¹czony do domeny lub nie.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen1_Text);

    var L_JOINDOMAINAboutThisScreen2_Text = "Jeœli wybierzesz przy³¹czenie do domeny, musisz wpisaæ nazwê domeny, do której ten komputer jest do³¹czany.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen2_Text);
}

function Agent_OnJOINDOMAINDifference() 
{
    var L_JOINDOMAINDifference1_Text = "Domena jest grup¹ komputerów, które s¹ administrowane jako jednostka.";
    Agent_Speak(L_JOINDOMAINDifference1_Text);
    
    var L_JOINDOMAINDifference2_Text = "Na przyk³ad, firma mo¿e dodaæ do domeny wszystkie komputery nale¿¹ce do jej biura w Szczecinie, aby mog³y one wspó³u¿ytkowaæ te same uprawnienia dostêpu i ³¹czyæ siê z tymi samymi drukarkami.";
    Agent_Speak(L_JOINDOMAINDifference2_Text);

    var L_JOINDOMAINDifference3_Text = "Jeœli nie masz pewnoœci, któr¹ opcjê chcesz wybraæ, wybierz Nie i kliknij przycisk Dalej.";
    Agent_Speak(L_JOINDOMAINDifference3_Text);
}

function Agent_OnJOINDOMAINHowToName() 
{
 	  Agent_GestureAtElement(g.document.all("radioYesDomain"), "Left");
 
    var L_JOINDOMAINHowToName1_Text = "Po zaznaczeniu opcji przy³¹czenia do domeny,";
    Agent_Speak(L_JOINDOMAINHowToName1_Text);
      
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("textboxDomain"), "Left");
  
    var L_JOINDOMAINHowToName2_Text = "mo¿esz wpisaæ nazwê w polu poni¿ej tej opcji.";
    Agent_Speak(L_JOINDOMAINHowToName2_Text);
      
    Agent_Play("RestPose");
  
    var L_JOINDOMAINHowToName3_Text = "Nie mo¿esz wpisaæ nazwy, jeœli dana opcja nie zosta³a wybrana.";
    Agent_Speak(L_JOINDOMAINHowToName3_Text);
  
    var L_JOINDOMAINHowToName4_Text = "Pole pozostanie szare, aby wskazaæ, ¿e nie mo¿na nic w nim wpisaæ dopóki nie zostanie wybrana opcja, do której nale¿y to pole.";
    Agent_Speak(L_JOINDOMAINHowToName4_Text);
  
    var L_JOINDOMAINHowToName5_Text = "Jeœli do³¹czasz ten komputer do domeny, zapytaj administratora sieci o prawid³ow¹ nazwê domeny.";
    Agent_Speak(L_JOINDOMAINHowToName5_Text);
  
    var L_JOINDOMAINHowToName6_Text = "Jeœli nie przy³¹czasz siê do domeny, nie musisz okreœlaæ nazwy.";
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
    
    var L_JOINDOMAINWhatToDoNext2_Text = "Mo¿esz równie¿ powróciæ do poprzedniego ekranu, klikaj¹c przycisk Wstecz.";
    Agent_Speak(L_JOINDOMAINWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}




function Agent_JNDOM_AAddCommands() 
{
    var L_JNDOMAMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_JNDOMAMenuCommand2_Text = "Jak wprowadziæ nazwê u¿ytkownika i &has³o?";
    var L_JNDOMAMenuCommand3_Text = "Co to jest &domena?";
    var L_JNDOMAMenuCommand4_Text = "&Co mam robiæ dalej?";
    
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
    var L_JNDOM_A_AboutThisStep1_Text = "Na tym ekranie identyfikujesz osobê autoryzowan¹ do przy³¹czenia tego komputera do domeny.";
  	Agent_Speak(L_JNDOM_A_AboutThisStep1_Text);
}

function Agent_OnJNDOM_AHowToEnter() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_HowToEnter1_Text = "Wpisywana nazwa musi byæ unikatowa wœród innych nazw u¿ytkowników w domenie.";
    Agent_Speak(L_JNDOM_A_HowToEnter1_Text);
      
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_HowToEnter2_Text = "Wpisywane has³o musi pasowaæ do has³a dla tego konta u¿ytkownika.";
    Agent_Speak(L_JNDOM_A_HowToEnter2_Text);
      
    Agent_Play("RestPose");
    
    var L_JNDOM_A_HowToEnter3_Text = "Jeœli nie wiesz jakiej nazwy u¿ytkownika i has³a u¿yæ, skontaktuj siê z administratorem sieci.";
    Agent_Speak(L_JNDOM_A_HowToEnter3_Text);
}

function Agent_OnJNDOM_AWhatIsDomain() 
{
    var L_JNDOM_A_WhatIsDomain1_Text = "Domena jest grup¹ komputerów, które s¹ administrowane jako jednostka.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain1_Text);
  	
    var L_JNDOM_A_WhatIsDomain2_Text = "Na przyk³ad, firma mo¿e dodaæ do domeny wszystkie komputery nale¿¹ce do jej biura w Szczecinie, aby mog³y one wspó³u¿ytkowaæ te same uprawnienia dostêpu i ³¹czyæ siê z tymi samymi drukarkami.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain2_Text);
      
    Agent_Play("RestPose");		
}

function Agent_OnJNDOM_AWhatToDoNext() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_WhatToDoNext1_Text = "Po wpisaniu nazwy u¿ytkownika tutaj";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext1_Text);
      
    Agent_Play("RestPose");		
  	
    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_WhatToDoNext2_Text = "i has³a u¿ytkownika tutaj";
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
    var L_ActivationMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_ActivationMenuCommand2_Text = "Powiedz mi coœ o &aktywacji";
    var L_ActivationMenuCommand3_Text = "Jak &wykonaæ aktywacjê póŸniej?";
    var L_ActivationMenuCommand4_Text = "Ja&k wykonaæ aktywacjê, jeœli nie mam po³¹czenia z Internetem?";
    var L_ActivationMenuCommand5_Text = "&Co siê stanie, jeœli nie wykonam aktywacji?";
    var L_ActivationMenuCommand6_Text = "&Co mam robiæ dalej?";

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
    
    var L_ActivationAboutThisScreen1_Text = "Na tym ekranie zadecydujesz, czy wykonaæ aktywacjê systemu %1 teraz czy póŸniej.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutThisScreen1_Text, g_ProductName));
    
    var L_ActivationAboutThisScreen2_Text = "Jeœli zechcesz zaczekaæ z aktywacj¹, mo¿esz póŸniej uruchomiæ Kreatora aktywacji produktu z menu Start.";
    Agent_Speak(L_ActivationAboutThisScreen2_Text);
    
    var L_ActivationAboutThisScreen3_Text = "Co kilka dni bêdziemy przypominaæ Ci o wykonaniu aktywacji systemu Windows, aby mo¿na by³o z niego dalej korzystaæ.";
    Agent_Speak(L_ActivationAboutThisScreen3_Text);
}

function Agent_OnActivationAboutActivation() 
{
    var L_ActivationAboutActivation1_Text = "Gdy dostajesz z banku now¹ kartê debetow¹ lub kredytow¹, bank zwykle prosi o aktywacjê karty przed rozpoczêciem jej u¿ywania.";
    Agent_Speak(L_ActivationAboutActivation1_Text);
    
    var L_ActivationAboutActivation2_Text = "Aktywacja chroni Ciebie i bank przed nieautoryzowanym u¿yciem karty.";
    Agent_Speak(L_ActivationAboutActivation2_Text);
    
    var L_ActivationAboutActivation3_Text = "Aktywacja %1 dzia³a w ten sam sposób, z t¹ ró¿nic¹, ¿e mo¿esz korzystaæ z %2 przez okreœlony czas, zanim aktywacja stanie siê konieczna.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationHowToActivateLater() 
{
    var L_ActivationHowToActivateLater1_Text = "Jeœli pominiesz aktywacjê teraz, co kilka dni na pulpicie %1 bêdzie siê pojawiaæ ma³e przypomnienie.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationHowToActivateLater1_Text, g_ProductName));
    
    var L_ActivationHowToActivateLater2_Text = "Mo¿esz wtedy uruchomiæ Kreatora aktywacji produktu przechodz¹c do menu Start i klikaj¹c polecenie Aktywacja systemu Windows.";
    Agent_Speak(L_ActivationHowToActivateLater2_Text);
    
    var L_ActivationHowToActivateLater3_Text = "Jeœli zapomnisz te kroki, przejdŸ do menu Start i kliknij polecenie Pomoc i obs³uga techniczna, aby znaleŸæ odpowiedzi na pytania i inne wartoœciowe informacje.";
    Agent_Speak(L_ActivationHowToActivateLater3_Text);
}

function Agent_OnActivationHowToActivateUnconnected() 
{
    Agent_GestureAtElement(g.rb_act_2, "Left");
    	
    var L_ActivationHowToActivateUnconnected1_Text = "Po prostu wybierz \"Nie\".";
    Agent_Speak(L_ActivationHowToActivateUnconnected1_Text);
    
    Agent_Play("RestPose");
    
    var L_ActivationHowToActivateUnconnected2_Text = "Po zakoñczeniu konfigurowania systemu Windows mo¿esz uruchomiæ Kreatora aktywacji produktu, klikaj¹c polecenie Aktywacja systemu Windows w menu Start.";
    Agent_Speak(L_ActivationHowToActivateUnconnected2_Text);
    
    var L_ActivationHowToActivateUnconnected3_Text = "Kreator poka¿e Ci numer telefonu, którego mo¿esz u¿yæ, aby wykonaæ aktywacjê systemu Windows przez telefon.";
    Agent_Speak(L_ActivationHowToActivateUnconnected3_Text);
}

function Agent_OnActivationWhatHappensNoActivate() 
{
    var L_ActivationWhatHappensNoActivate1_Text = "Mo¿esz kontynuowaæ korzystanie z systemu %1 do wygaœniêcia okresu aktywacji.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate1_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate2_Text = "Ale pod koniec tego okresu musisz wykonaæ aktywacjê systemu %1, aby móc z niego dalej korzystaæ.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate2_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate3_Text = "Po wygaœniêciu okresu aktywacji korzystanie z systemu %1 nie bêdzie mo¿liwe.";
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
    var L_ActivationErrorMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_ActivationErrorMenuCommand2_Text = "Powiedz mi coœ o &aktywacji";
    var L_ActivationErrorMenuCommand3_Text = "Jak &wykonaæ aktywacjê póŸniej?";
    var L_ActivationErrorMenuCommand4_Text = "Ja&k wykonaæ aktywacjê, jeœli nie mam po³¹czenia z Internetem?";
    var L_ActivationErrorMenuCommand5_Text = "&Co siê stanie, jeœli nie wykonam aktywacji?";


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
    var L_ActivationErrorAboutThisScreen1_Text = "Ten ekran pojawia siê, jeœli nie mo¿na skontaktowaæ siê z naszym centrum aktywacji.";
	Agent_Speak(L_ActivationErrorAboutThisScreen1_Text);
	
    var L_ActivationErrorAboutThisScreen2_Text = "Po zakoñczeniu konfigurowania systemu %1 mo¿esz uruchomiæ Kreatora aktywacji produktu, klikaj¹c polecenie Aktywacja systemu Windows w menu Start.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnActivationErrorAboutActivation() 
{
    var L_ActivationErrorAboutActivation1_Text = "Gdy dostajesz z banku now¹ kartê debetow¹ lub kredytow¹, bank zwykle prosi o aktywacjê karty przed rozpoczêciem jej u¿ywania.";
	Agent_Speak(L_ActivationErrorAboutActivation1_Text);
	
    var L_ActivationErrorAboutActivation2_Text = "Aktywacja chroni Ciebie i bank przed nieautoryzowanym u¿yciem karty.";
	Agent_Speak(L_ActivationErrorAboutActivation2_Text);
	
    var L_ActivationErrorAboutActivation3_Text = "Aktywacja %1 dzia³a w ten sam sposób, z t¹ ró¿nic¹, ¿e mo¿esz korzystaæ z %2 przez okreœlon¹ liczbê dni zanim jego aktywacja stanie siê konieczna.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationErrorHowToActivateLater() 
{
    var L_ActivationErrorHowToActivateLater1_Text = "Jeœli pominiesz aktywacjê teraz, co kilka dni na pulpicie %1 bêdzie siê pojawiaæ ma³e przypomnienie.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationErrorHowToActivateLater2_Text = "Mo¿esz wtedy uruchomiæ Kreatora aktywacji produktu przechodz¹c do menu Start i klikaj¹c polecenie Aktywacja systemu Windows.";
	Agent_Speak(L_ActivationErrorHowToActivateLater2_Text);
	
    var L_ActivationErrorHowToActivateLater3_Text = "Jeœli zapomnisz te kroki, przejdŸ do menu Start i kliknij polecenie Pomoc i obs³uga techniczna, aby znaleŸæ odpowiedzi na pytania i inne wartoœciowe informacje.";
	Agent_Speak(L_ActivationErrorHowToActivateLater3_Text);
}

function Agent_OnActivationErrorHowToActivateUnconnected() 
{
    var L_ActivationErrorHowToActivateUnconnected1_Text = "Po zakoñczeniu konfigurowania systemu Windows mo¿esz uruchomiæ Kreatora aktywacji produktu, klikaj¹c polecenie Aktywacja systemu Windows w menu Start.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected1_Text);
	
    var L_ActivationErrorHowToActivateUnconnected2_Text = "Kreator poka¿e Ci numer telefonu, którego mo¿esz u¿yæ, aby wykonaæ aktywacjê systemu Windows przez telefon.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected2_Text);
}

function Agent_OnActivationErrorWhatHappensNoActivate() 
{
    var L_ActivationErrorWhatHappensNoActivate1_Text = "Mo¿esz kontynuowaæ korzystanie z systemu %1 do wygaœniêcia okresu aktywacji.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate2_Text = "Ale pod koniec tego okresu musisz wykonaæ aktywacjê systemu %1, aby móc z niego dalej korzystaæ.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate3_Text = "Po wygaœniêciu okresu aktywacji korzystanie z systemu %1 nie bêdzie mo¿liwe.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_ActivationPrivacyPolicyAddCommands() 
{
    var L_ActivationPrivacyPolicyMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_ActivationPrivacyPolicyMenuCommand2_Text = "Powiedz mi coœ o &aktywacji";
    var L_ActivationPrivacyPolicyMenuCommand3_Text = "Jak &wykonaæ aktywacjê póŸniej?";
    var L_ActivationPrivacyPolicyMenuCommand4_Text = "Ja&k wykonaæ aktywacjê, jeœli nie mam po³¹czenia z Internetem?";
    var L_ActivationPrivacyPolicyMenuCommand5_Text = "&Co siê stanie, jeœli nie wykonam aktywacji?";


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
    var L_ActivationPrivacyPolicyAboutThisScreen1_Text = "Ten ekran wyjaœnia, w jaki sposób chroniona jest prywatnoœæ u¿ytkownika podczas wykonywania aktywacji systemu %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutThisScreen1_Text, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyAboutActivation() 
{
    var L_ActivationPrivacyPolicyAboutActivation1_Text = "Gdy dostajesz z banku now¹ kartê debetow¹ lub kredytow¹, bank zwykle prosi o aktywacjê karty przed rozpoczêciem jej u¿ywania.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation1_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation2_Text = "Aktywacja chroni Ciebie i bank przed nieautoryzowanym u¿yciem karty.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation2_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation3_Text = "Aktywacja %1 dzia³a w ten sam sposób, z t¹ ró¿nic¹, ¿e mo¿esz korzystaæ z %2 przez okreœlony czas, zanim aktywacja stanie siê konieczna.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyHowToActivateLater() 
{
    var L_ActivationPrivacyPolicyHowToActivateLater1_Text = "Jeœli pominiesz aktywacjê teraz, co kilka dni na pulpicie %1 bêdzie siê pojawiaæ ma³e przypomnienie.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyHowToActivateLater2_Text = "Mo¿esz wtedy uruchomiæ Kreatora aktywacji produktu przechodz¹c do menu Start i klikaj¹c polecenie Aktywacja systemu Windows.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater2_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateLater3_Text = "Jeœli zapomnisz te kroki, przejdŸ do menu Start i kliknij polecenie Pomoc i obs³uga techniczna, aby znaleŸæ odpowiedzi na pytania i inne wartoœciowe informacje.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater3_Text);
}

function Agent_OnActivationPrivacyPolicyHowToActivateUnconnected() 
{
    var L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text = "Po zakoñczeniu konfigurowania systemu Windows mo¿esz uruchomiæ Kreatora aktywacji produktu, klikaj¹c polecenie Aktywacja systemu Windows w menu Start.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text = "Kreator poka¿e Ci numer telefonu, którego mo¿esz u¿yæ, aby wykonaæ aktywacjê systemu Windows przez telefon.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text);
}

function Agent_OnActivationPrivacyPolicyWhatHappensNoActivate() 
{
    var L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text = "Mo¿esz kontynuowaæ korzystanie z systemu %1 do czasu wygaœniêcia okresu wykonywania aktywacji.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text = "Ale pod koniec tego okresu musisz wykonaæ aktywacjê systemu %1, aby móc z niego dalej korzystaæ.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text = "Po wygaœniêciu okresu wykonywania aktywacji ju¿ nie bêdzie mo¿na korzystaæ z systemu %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_DSLMAINAddCommands() 
{
    var L_DSLMAINMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_DSLMAINMenuCommand2_Text = "&S¹ powody, aby wymagaæ nazwy u¿ytkownika i has³a";
    var L_DSLMAINMenuCommand3_Text = "&Co mam robiæ dalej?";
    
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
    var L_DSLMAINAboutThisScreen1_Text = "Na tym ekranie zadecydujesz, czy nazwa u¿ytkownika i has³o bêd¹ wymagane do uzyskiwania dostêpu do Internetu z tego komputera.";
	Agent_Speak(L_DSLMAINAboutThisScreen1_Text);
}

function Agent_OnDSLMAINSomeReasons() 
{
    var L_DSLMAINHowToMoveOn1_Text = "Jeœli jesteœ jedyn¹ osob¹ u¿ywaj¹c¹ tego komputera, mo¿esz pozwoliæ systemowi %1 na automatyczne przechowywanie nazwy u¿ytkownika i has³a.";
	Agent_Speak(ApiObj.FormatMessage(L_DSLMAINHowToMoveOn1_Text, g_ProductName));
	
    var L_DSLMAINHowToMoveOn2_Text = "Dziêki temu nie musisz wpisywaæ informacji za ka¿dym razem, gdy ³¹czysz siê z Internetem.";
	Agent_Speak(L_DSLMAINHowToMoveOn2_Text);
	
    var L_DSLMAINHowToMoveOn3_Text = "W wypadku, gdy wspó³u¿ytkujesz ten komputer i nie chcesz udostêpniaæ innym osobom po³¹czenia Internetowego mo¿esz zabezpieczyæ swoje konto za pomoc¹ nazwy u¿ytkownika i has³a.";
	Agent_Speak(L_DSLMAINHowToMoveOn3_Text);
	
    var L_DSLMAINHowToMoveOn4_Text = "Mo¿esz, na przyk³ad, udostêpniæ ten komputer swoim dzieciom dla gier.";
	Agent_Speak(L_DSLMAINHowToMoveOn4_Text);
	
    var L_DSLMAINHowToMoveOn5_Text = "Ale uniemo¿liwiæ im ¿eglowanie po Internecie bez pozwolenia.";
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
    var L_DSLAMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_DSLAMenuCommand2_Text = "&Czym dok³adnie jest Internet?";
    var L_DSLAMenuCommand3_Text = "C&zego potrzebujê, aby po³¹czyæ siê z Internetem?";
    var L_DSLAMenuCommand4_Text = "Podaj informacje &o zapisywaniu siê do Internetu";

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
    var L_DSL_A_AboutThisStep1_Text = "Na tym ekranie mo¿esz skonfigurowaæ konto u us³ugodawcy internetowego, inaczej \"ISP\", aby móc ³¹czyæ siê z Internetem z tego komputera.";
	Agent_Speak(L_DSL_A_AboutThisStep1_Text);
}

function Agent_DSL_AWhatIsInternet() 
{
    var L_DSL_A_WhatIsInternet1_Text = "Internet jest sieci¹ komputerów obejmuj¹c¹ ca³y œwiat.";
	Agent_Speak(L_DSL_A_WhatIsInternet1_Text);
	
    var L_DSL_A_WhatIsInternet2_Text = "Jeœli masz dostêp do Internetu, mo¿esz pobieraæ dostêpne publicznie informacje z milionów Ÿróde³, w tym szkó³, agencji rz¹dowych, firm i osób prywatnych.";
	Agent_Speak(L_DSL_A_WhatIsInternet2_Text);
	
    var L_DSL_A_WhatIsInternet3_Text = "Sieæ World Wide Web, w skrócie \"sieæ Web\", to system pozwalaj¹cy na eksploracjê Internetu przy u¿yciu hiper³¹czy.";
	Agent_Speak(L_DSL_A_WhatIsInternet3_Text);
	
    var L_DSL_A_WhatIsInternet4_Text = "Hiper³¹cza to tekst lub obrazy, które w wyniku klikniêcia przenosz¹ u¿ytkownika na inn¹ stronê sieci Web lub do innej czêœci tej samej strony albo wykonuj¹ konkretn¹ czynnoœæ, tak¹ jak otwarcie programu.";
	Agent_Speak(L_DSL_A_WhatIsInternet4_Text);
	
    var L_DSL_A_WhatIsInternet5_Text = "Do nawigacji w sieci Web s³u¿y przegl¹darka sieci Web, czyli program, który wyœwietla informacje dostêpne w Internecie w postaci tekstu, obrazów, dŸwiêków i filmów cyfrowych.";
	Agent_Speak(L_DSL_A_WhatIsInternet5_Text);
	
    var L_DSL_A_WhatIsInternet6_Text = "Firma Microsoft oferuje dwie przegl¹darki sieci Web:";
	Agent_Speak(L_DSL_A_WhatIsInternet6_Text);
	
    var L_DSL_A_WhatIsInternet7_Text = "Program MSN Explorer, doskona³y dla osób pocz¹tkuj¹cych i pracuj¹cych z komputerem w domu, oraz program Internet Explorer.";
	Agent_Speak(L_DSL_A_WhatIsInternet7_Text);
}

function Agent_DSL_ANeedToConnect() 
{	
    var L_DSL_A_NeedToConnect1_Text = "Do po³¹czenia siê z Internetem potrzebne s¹ tylko trzy rzeczy.";
	Agent_Speak(L_DSL_A_NeedToConnect1_Text);	
	
    var L_DSL_A_NeedToConnect2_Text = "Po pierwsze potrzebny jest komputer, który ju¿ masz.";
	Agent_Speak(L_DSL_A_NeedToConnect2_Text);
	
    var L_DSL_A_NeedToConnect3_Text = "Po drugie potrzebny jest us³ugodawca internetowy, inaczej \"ISP\".";
	Agent_Speak(L_DSL_A_NeedToConnect3_Text);
	
    var L_DSL_A_NeedToConnect4_Text = "Us³ugodawca ISP zapewnia us³ugi lub dostêp do Internetu w ten sam sposób, w jaki operator sieci telefonicznej zapewnia po³¹czenia telefoniczne.";
	Agent_Speak(L_DSL_A_NeedToConnect4_Text);
	
    var L_DSL_A_NeedToConnect5_Text = "Gdy dojdziemy do czêœci dotycz¹cej konfigurowania tego komputera do dostêpu do Internetu, pomogê Ci znaleŸæ us³ugodawcê ISP, jeœli jeszcze go nie masz.";
	Agent_Speak(L_DSL_A_NeedToConnect5_Text);
	
    var L_DSL_A_NeedToConnect6_Text = "Po trzecie potrzebne jest urz¹dzenie, które umo¿liwia fizyczne po³¹czenie tego komputera z us³ugodawc¹ ISP.";
	Agent_Speak(L_DSL_A_NeedToConnect6_Text);
	
    var L_DSL_A_NeedToConnect7_Text = "Taki jest cel tego ekranu.";
	Agent_Speak(L_DSL_A_NeedToConnect7_Text);
}

function Agent_DSL_AInternetSignup() 
{
    var L_DSL_A_AboutThisScreen1_Text = "Jeœli masz ju¿ konto internetowe, us³ugodawca internetowy ju¿ dostarczy³ te informacje.";
	Agent_Speak(L_DSL_A_AboutThisScreen1_Text);
	
    var L_DSL_A_AboutThisScreen2_Text = "Nie musisz konfigurowaæ nowego konta internetowego tylko dlatego, ¿e masz nowy komputer.";
	Agent_Speak(L_DSL_A_AboutThisScreen2_Text);
	
    var L_DSL_A_AboutThisScreen3_Text = "Mo¿esz u¿ywaæ tych samych informacji o koncie, co na starym komputerze.";
	Agent_Speak(L_DSL_A_AboutThisScreen3_Text);
	
    var L_DSL_A_AboutThisScreen4_Text = "Jeœli nigdy nie zdarzy³o Ci siê ³¹czyæ z Intenetem z w³asnego komputera, byæ mo¿e przekazano Ci informacje o koncie internetowym podczas zakupu tego komputera.";
	Agent_Speak(L_DSL_A_AboutThisScreen4_Text);
	
    var L_DSL_A_AboutThisScreen5_Text = "Jeœli sprzedawca da³ Ci kartkê z nazw¹ u¿ytkownika, has³em i nazw¹ us³ugodawcy ISP, wpisz te informacje na tym ekranie.";
	Agent_Speak(L_DSL_A_AboutThisScreen5_Text);
}



function Agent_DSL_BAddCommands() 
{

    var L_DSL_B_MenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_DSL_B_MenuCommand2_Text = "Co o&znacza skrót IP?";
    var L_DSL_B_MenuCommand3_Text = "Co o&znacza skrót DNS?";
    var L_DSL_B_MenuCommand4_Text = "&Co mam robiæ dalej?";

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
    var L_DSL_B_AboutThisScreen1_Text = "Informacje o koncie internetowym podane na ostatnim ekranie okreœla³y, w jaki sposób bêdziesz ³¹czyæ siê z Internetem.";
	Agent_Speak(L_DSL_B_AboutThisScreen1_Text);

    var L_DSL_B_AboutThisScreen2_Text = "Na tym ekranie musisz powiedzieæ nam, jak ten komputer bêdzie ustanawia³ fizyczne po³¹czenie z Internetem.";
	Agent_Speak(L_DSL_B_AboutThisScreen2_Text);
}

function Agent_OnDSL_BWhatIsIP() 
{
    var L_DSL_B_WhatIsIP1_Text = "Ka¿dy komputer po³¹czony z Internetem ma adres protoko³u internetowego, czyli \"adres IP\", który jest unikatowym numerem identyfikuj¹cym komputer w Internecie.";
	Agent_Speak(L_DSL_B_WhatIsIP1_Text);

    var L_DSL_B_WhatIsIP2_Text = "Po po³¹czeniu us³ugodawca ISP zwykle przydziela komputerowi adres IP automatycznie.";
	Agent_Speak(L_DSL_B_WhatIsIP2_Text);

    var L_DSL_B_WhatIsIP3_Text = "W tym wypadku musisz rêcznie wprowadziæ adres IP.";
	Agent_Speak(L_DSL_B_WhatIsIP3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_staticip, "Left");
	
	var L_DSL_B_WhatIsIP4_Text = "Twój us³ugodawca ISP powinien podaæ Ci adres IP do wpisania tutaj.";
	Agent_Speak(L_DSL_B_WhatIsIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnDSL_BWhatIsDNS() 
{
    var L_DSL_B_WhatIsDNS1_Text = "Aby odnaleŸæ adresy w Internecie, ten komputer musi po³¹czyæ siê z serwerem DNS (Domain Name Server), który przypisuje adresy IP komputerom w Internecie.";
	Agent_Speak(L_DSL_B_WhatIsDNS1_Text);

    var L_DSL_B_WhatIsDNS2_Text = "W wiêkszoœci wypadków adres DNS jest automatycznie przypisywany przez us³ugodawcê ISP.";
	Agent_Speak(L_DSL_B_WhatIsDNS2_Text);

    var L_DSL_B_WhatIsDNS3_Text = "Twój us³ugodawca ISP wymaga ustawienia adresu serwera DNS na tym komputerze.";
	Agent_Speak(L_DSL_B_WhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_prefdns, "Left");

    var L_DSL_B_WhatIsDNS4_Text = "Twój us³ugodawca ISP powinien podaæ Ci preferowany serwer DNS do wpisania tutaj";
	Agent_Speak(L_DSL_B_WhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.dsl_lbl_altdns, "Left");

    var L_DSL_B_WhatIsDNS5_Text = "i alternatywny serwer DNS u¿ywany, jeœli preferowany serwer DNS jest niedostêpny.";
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
	
    var L_DSL_B_WhatToDoNext1_Text = "Kliknij przycisk Dalej, aby kontynuowaæ.";
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

    var L_DSL_B_WhatToDoNext2_Text = "Mo¿esz tak¿e klikn¹æ przycisk Wstecz, aby powróciæ do poprzedniego kroku.";
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

    var L_DSL_B_WhatToDoNext3_Text = "Jeœli zmienisz zdanie, kliknij przycisk \"Pomiñ\", aby kontynuowaæ bez konfigurowania tego komputera do dostêpu do Internetu.";
	Agent_Speak(L_DSL_B_WhatToDoNext3_Text);
    
    Agent_Play("RestPose");	
}



function Agent_ICONNECTAddCommands() 
{

    var L_ICONNECTMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_ICONNECTMenuCommand2_Text = "C&o to jest statyczny adres IP?";
    var L_ICONNECTMenuCommand3_Text = "Co o&znacza skrót DNS?";
    var L_ICONNECTMenuCommand4_Text = "&Co mam robiæ dalej?";

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
    var L_ICONNECTAboutThisScreen1_Text = "Informacje o koncie internetowym podane na ostatnim ekranie okreœla³y, w jaki sposób bêdziesz ³¹czyæ siê z Internetem.";
	Agent_Speak(L_ICONNECTAboutThisScreen1_Text);

    var L_ICONNECTAboutThisScreen2_Text = "Na tym ekranie musisz powiedzieæ nam, jak ten komputer bêdzie ustanawia³ fizyczne po³¹czenie z Internetem.";
	Agent_Speak(L_ICONNECTAboutThisScreen2_Text);
}

function Agent_OnICONNECTWhatIsStaticIP() 
{
    var L_ICONNECTWhatIsStaticIP1_Text = "Ka¿dy komputer po³¹czony z Internetem ma adres protoko³u internetowego, czyli \"adres IP\", który jest unikatowym numerem identyfikuj¹cym komputer w Internecie.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP1_Text);

    var L_ICONNECTWhatIsStaticIP2_Text = "Po po³¹czeniu us³ugodawca ISP zwykle przydziela komputerowi adres IP automatycznie.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP2_Text);

    var L_ICONNECTWhatIsStaticIP3_Text = "W tym wypadku musisz rêcznie wprowadziæ adres IP.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_staticIP, "Left");
	
	var L_ICONNECTWhatIsStaticIP4_Text = "Twój us³ugodawca ISP powinien podaæ Ci adres IP do wpisania tutaj.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnICONNECTWhatIsDNS() 
{
    var L_ICONNECTWhatIsDNS1_Text = "Aby odnaleŸæ adresy w Internecie, ten komputer musi po³¹czyæ siê z serwerem DNS (Domain Name Server), który przypisuje adresy IP komputerom w Internecie.";
	Agent_Speak(L_ICONNECTWhatIsDNS1_Text);

    var L_ICONNECTWhatIsDNS2_Text = "W wiêkszoœci wypadków adres DNS jest automatycznie przypisywany przez us³ugodawcê ISP.";
	Agent_Speak(L_ICONNECTWhatIsDNS2_Text);

    var L_ICONNECTWhatIsDNS3_Text = "Twój us³ugodawca ISP wymaga ustawienia adresu serwera DNS na tym komputerze.";
	Agent_Speak(L_ICONNECTWhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_prefrDNS, "Left");

    var L_ICONNECTWhatIsDNS4_Text = "Twój us³ugodawca ISP powinien podaæ Ci preferowany serwer DNS do wpisania tutaj";
	Agent_Speak(L_ICONNECTWhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.iconnect_spn_alterDNS, "Left");

    var L_ICONNECTWhatIsDNS5_Text = "i alternatywny serwer DNS u¿ywany, jeœli preferowany serwer DNS jest niedostêpny.";
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
	
    var L_ICONNECTWhatToDoNext1_Text = "Kliknij przycisk Dalej, aby kontynuowaæ.";
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

    var L_ICONNECTWhatToDoNext2_Text = "Jeœli zmienisz zdanie, kliknij przycisk \"Pomiñ\", aby kontynuowaæ bez konfigurowania tego komputera do dostêpu do Internetu.";
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

    var L_ICONNECTWhatToDoNext3_Text = "Mo¿esz tak¿e powróciæ do poprzedniego ekranu, klikaj¹c przycisk Wstecz.";
	Agent_Speak(L_ICONNECTWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}





function Agent_ICNTLASTAddCommands() {

        var L_ICNTLASTMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_ICNTLASTMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_ICNTLASTMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        
        
        

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

        var L_SCONNECTMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_SCONNECTMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_SCONNECTMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        
        
        

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

        var L_SCNTLASTMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_SCNTLASTMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_SCNTLASTMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        
        
        

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
    var L_BadPIDMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_BadPIDMenuCommand2_Text = "Jak wprowadziæ &klucz produktu?";
    var L_BadPIDMenuCommand3_Text = "C&o zrobiæ, jeœli nie znam mojego klucza produktu?";
    var L_BadPIDMenuCommand4_Text = "Co zrobiæ, jeœli mój &klucz produktu nie dzia³a?";
    var L_BadPIDMenuCommand5_Text = "Z &kim mogê siê skontaktowaæ, aby uzyskaæ pomoc?";
    var L_BadPIDMenuCommand6_Text = "&Co mam robiæ dalej?";
        
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
    var L_BadPIDAboutThisStep1_Text = "Klucz produktu wpisany na poprzednim ekranie jest nieprawid³owy.";
    Agent_Speak(L_BadPIDAboutThisStep1_Text);
    
    var L_BadPIDAboutThisStep2_Text = "Oznacza to, ¿e nie jest zgodny z kluczem produktu dla autentycznej kopii systemu Windows XP.";
    Agent_Speak(L_BadPIDAboutThisStep2_Text);

    var L_BadPIDAboutThisStep3_Text = "System Windows nie bêdzie dzia³a³ bez prawid³owego klucza produktu.";
    Agent_Speak(L_BadPIDAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDAboutThisStep4_Text = "Jeœli podejrzewasz, ¿e klucz zosta³ wpisany z b³êdem, kliknij przycisk Wstecz i wpisz poprawny klucz.";
    Agent_Speak(L_BadPIDAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep5_Text = "Natomiast jeœli masz pewnoœæ, ¿e klucz zosta³ wpisany poprawnie lub kolejne próby nie przynosz¹ rezultatu, mo¿e to oznaczaæ, ¿e masz nielegaln¹ kopiê systemu Windows.";
    Agent_Speak(L_BadPIDAboutThisStep5_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDAboutThisStep6_Text = "W tym wypadku kliknij przycisk Zamknij, aby wy³¹czyæ komputer.";
    Agent_Speak(L_BadPIDAboutThisStep6_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep7_Text = "Zadzwoñ pod numer linii antypirackiej BSA (22) 434 34 34.";
    Agent_Speak(L_BadPIDAboutThisStep7_Text);

    var L_BadPIDAboutThisStep8_Text = "W pozosta³ych krajach skontaktuj siê z lokalnym przedstawicielstwem firmy Microsoft.";
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
	
    var L_BadPIDHowToEnter1_Text = "Kliknij przycisk Wstecz, aby powróciæ do poprzedniego ekranu.";
    Agent_Speak(L_BadPIDHowToEnter1_Text);
    
    Agent_Play("RestPose");
    
    var L_BadPIDHowToEnter2_Text = "WskaŸnik w postaci migaj¹cej pionowej kreski bêdzie ju¿ ustawiony w pierwszym polu, w którym nale¿y wpisywaæ.";
    Agent_Speak(L_BadPIDHowToEnter2_Text);

    var L_BadPIDHowToEnter3_Text = "Po wpisaniu pierwszych 5 znaków wskaŸnik automatycznie przemieœci siê do nastêpnego pola i bêdzie mo¿na wpisaæ nastêpne 5 znaków.";
    Agent_Speak(L_BadPIDHowToEnter3_Text);

    var L_BadPIDHowToEnter4_Text = "Nie wpisuj myœlników i nie zwracaj uwagi na wielkoœæ liter.";
    Agent_Speak(L_BadPIDHowToEnter4_Text);

    var L_BadPIDHowToEnter5_Text = "Nastêpnie kliknij przycisk Dalej, aby kontynuowaæ.";
    Agent_Speak(L_BadPIDHowToEnter5_Text);
}

function Agent_OnBadPIDWhatIfNotKnown() 
{
    var L_BadPIDWhatIfNotKnown1_Text = "W przypadku braku klucza produktu (Product Key) na opakowaniu dysku CD sprawdŸ nalepkê Certyfikatu Autentycznoœci (Certificate of Authenticity) na tym komputerze PC lub z ty³u podrêcznika \"Wprowadzenie\".";
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

    var L_BadPIDWhatIfNotKnown3_Text = "Jeœli nie mo¿esz znaleŸæ klucza produktu, zadzwoñ do producenta komputera pod numer telefonu %s.";
    var re = /%s/i;
    var L_BadPIDWhatIfNotKnown4_Text = "Jeœli nie mo¿esz znaleŸæ klucza produktu, skontaktuj siê z producentem komputera.";

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
        Agent_Speak(L_BadPIDWhatIfNotKnown4_Text);
    else
        Agent_Speak(L_BadPIDWhatIfNotKnown3_Text.replace(re, strPhoneNumber));
}

function Agent_OnBadPIDWhatIfNotWorking() 
{
    var L_BadPIDWhatIfNotWorking1_Text = "Byæ mo¿e nast¹pi³a pomy³ka przy wpisywaniu.";
    Agent_Speak(L_BadPIDWhatIfNotWorking1_Text);
    
    var L_BadPIDWhatIfNotWorking2_Text = "Musisz wprowadziæ wszystkie 25 znaków klucza produktu.";
    Agent_Speak(L_BadPIDWhatIfNotWorking2_Text);

    var L_BadPIDWhatIfNotWorking3_Text = "Ka¿da czêœæ powinna zawieraæ 5 liter lub cyfr.";
    Agent_Speak(L_BadPIDWhatIfNotWorking3_Text);

    var L_BadPIDWhatIfNotWorking4_Text = "Musisz wprowadziæ legalny klucz produktu, zanim zaczniesz u¿ywaæ systemu Windows.";
    Agent_Speak(L_BadPIDWhatIfNotWorking4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDWhatIfNotWorking5_Text = "Jeœli podejrzewasz, ¿e klucz zosta³ wpisany z b³êdem, kliknij przycisk Wstecz i wpisz poprawny klucz.";
    Agent_Speak(L_BadPIDWhatIfNotWorking5_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking6_Text = "Natomiast jeœli masz pewnoœæ, ¿e klucz zosta³ wpisany poprawnie lub kolejne próby nie przynosz¹ rezultatu, mo¿e to oznaczaæ, ¿e masz nielegaln¹ kopiê systemu Windows.";
    Agent_Speak(L_BadPIDWhatIfNotWorking6_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatIfNotWorking7_Text = "W tym wypadku kliknij przycisk Zamknij, aby wy³¹czyæ komputer.";
    Agent_Speak(L_BadPIDWhatIfNotWorking7_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking8_Text = "Zadzwoñ pod numer linii antypirackiej BSA (22) 434 34 34.";
    Agent_Speak(L_BadPIDWhatIfNotWorking8_Text);

    var L_BadPIDWhatIfNotWorking9_Text = "W pozosta³ych krajach skontaktuj siê z lokalnym przedstawicielstwem firmy Microsoft.";
    Agent_Speak(L_BadPIDWhatIfNotWorking9_Text);
}

function Agent_OnBadPIDWhoCanICall() 
{
    var L_BadPIDWhoCanICall1_Text = "Jeœli klucz produktu nie jest akceptowany, zadzwoñ pod numer linii antypirackiej BSA (22) 434 34 34.";
    Agent_Speak(L_BadPIDWhoCanICall1_Text);
    
    var L_BadPIDWhoCanICall2_Text = "W pozosta³ych krajach skontaktuj siê z lokalnym przedstawicielstwem firmy Microsoft.";
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
    
    var L_BadPIDWhatToDoNext2_Text = "Jeœli klucz produktu nie jest akceptowany, mo¿e oznaczaæ to, ¿e masz nielegaln¹ kopiê systemu Windows.";
    Agent_Speak(L_BadPIDWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatToDoNext3_Text = "W tym wypadku kliknij przycisk Zamknij, aby wy³¹czyæ komputer. ";
    Agent_Speak(L_BadPIDWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatToDoNext4_Text = "Zadzwoñ pod numer linii antypirackiej BSA (22) 434 34 34.";
    Agent_Speak(L_BadPIDWhatToDoNext4_Text);

    var L_BadPIDWhatToDoNext5_Text = "W pozosta³ych krajach skontaktuj siê z lokalnym przedstawicielstwem firmy Microsoft.";
    Agent_Speak(L_BadPIDWhatToDoNext5_Text);
}



function Agent_IconnAddCommands() 
{
    var L_IconnMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_IconnMenuCommand2_Text = "&Któr¹ opcjê nale¿y wybraæ?";
    var L_IconnMenuCommand3_Text = "&Co mam robiæ dalej?";

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
    var L_IconnAboutThisStep1_Text = "Instalacja systemu Windows XP na tym komputerze zosta³a pomyœlnie ukoñczona!";
    Agent_Speak(L_IconnAboutThisStep1_Text); 
      
    var L_IconnAboutThisStep2_Text = "W tym momencie mogê pomóc Ci skonfigurowaæ ten komputer do dostêpu do Internetu.";
    Agent_Speak(L_IconnAboutThisStep2_Text);
       
    var L_IconnAboutThisStep3_Text = "Jeœli nie chcesz zrobiæ tego teraz, mo¿esz uruchomiæ Kreatora po³¹czeñ internetowych z menu Start po skonfigurowaniu systemu Windows.";
    Agent_Speak(L_IconnAboutThisStep3_Text);
}

function Agent_IconnWhichOption() 
{    
    var L_IconnWhichOption1_Text = "Wybierz Nie, jeœli zamierzasz u¿yæ us³ugodawcy internetowego, inaczej \"ISP\", który wymaga zainstalowania w³asnego oprogramowania.";
    Agent_Speak(L_IconnWhichOption1_Text); 
      
    var L_IconnWhichOption2_Text = "Stanie siê tak, jeœli ju¿ masz dysk CD od tego us³ugodawcy ISP.";
    Agent_Speak(L_IconnWhichOption2_Text);
       
    var L_IconnWhichOption3_Text = "Nastêpnie skonfiguruj ten komputer do dostêpu do Internetu po zakoñczeniu konfigurowania systemu Windows.";
    Agent_Speak(L_IconnWhichOption3_Text);
}

function Agent_OnIconnWhatToDoNext() 
{      
    Agent_GestureAtElement(g.radioYesIconn, "Left");  
    
    var L_IconnWhatToDoNext1_Text = "Jeœli potrzebujesz pomocy przy konfigurowaniu po³¹czenia z Internetem, kliknij opcjê Tak.";
    Agent_Speak(L_IconnWhatToDoNext1_Text);
    
    Agent_Play("RestPose"); 
        
    Agent_GestureAtElement(g.radioNoIconn, "Left");  
    
    var L_IconnWhatToDoNext2_Text = "Jeœli nie chcesz teraz ustanowiæ po³¹czenia internetowego, wybierz opcjê \"Nie\"";
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

    var L_IconnWhatToDoNext3_Text = "Nastêpnie kliknij przycisk Dalej, aby kontynuowaæ.";
    Agent_Speak(L_IconnWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPAddCommands() 
{
    var L_ISPMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_ISPMenuCommand2_Text = "Co &zrobiæ, jeœli sprzedawca mojego komputera da³ mi informacje o koncie?";
    var L_ISPMenuCommand3_Text = "&Co mam robiæ dalej?";

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
    var L_ISPAboutThisStep1_Text = "Na tym ekranie mo¿esz wybraæ sposób dostêpu do Internetu.";
    Agent_Speak(L_ISPAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");

    var L_ISPAboutThisStep2_Text = "Sieæ MSN";
    Agent_Speak(L_ISPAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");

        var L_ISPAboutThisStep3_Text = "lub inny us³ugodawca internetowy.";
        Agent_Speak(L_ISPAboutThisStep3_Text);
        
        Agent_Play("RestPose");
    }
    
    Agent_GestureAtElement(g.radioSkip, "Left");

    var L_ISPAboutThisStep4_Text = "Mo¿esz tak¿e kontynuowaæ bez konfigurowania po³¹czenia internetowego tym razem.";
    Agent_Speak(L_ISPAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPWhatIfGivenAccount() 
{
    var L_ISPWhatIfGivenAccount1_Text = "Podczas zakupu komputera sprzedawca móg³ daæ Ci kartkê z informacjami o koncie internetowym.";
	Agent_Speak(L_ISPWhatIfGivenAccount1_Text);
	
    var L_ISPWhatIfGivenAccount2_Text = "Te informacje o koncie zawieraj¹ nazwê u¿ytkownika, has³o, nazwê us³ugodawcy internetowego i numer telefonu.";
	Agent_Speak(L_ISPWhatIfGivenAccount2_Text);
	
    var L_ISPWhatIfGivenAccount3_Text = "Jeœli masz te informacje, oznacza to, ¿e ju¿ masz konto internetowe.";
	Agent_Speak(L_ISPWhatIfGivenAccount3_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");
	
    var L_ISPWhatIfGivenAccount4_Text = "Jeœli nazw¹ us³ugodawcy internetowego jest MSN, zaznacz pierwsz¹ opcjê (us³uga dostêpna jedynie w USA).";
	Agent_Speak(L_ISPWhatIfGivenAccount4_Text);
    
    Agent_Play("RestPose");

    
    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");
    	
        var L_ISPWhatIfGivenAccount5_Text = "Jeœli nazw¹ us³ugodawcy internetowego nie jest MSN, zaznacz drug¹ opcjê (us³uga dostêpna jedynie w USA).";
    	Agent_Speak(L_ISPWhatIfGivenAccount5_Text);
        
        Agent_Play("RestPose");
    }

    Agent_GestureAtElement(g.radioSkip, "Left");
    
    var L_ISPWhatIfGivenAccount6_Text = "Jeœli chcesz póŸniej skonfigurowaæ po³¹czenie internetowe na tym komputerze, zaznacz ostatni¹ opcjê.";
	Agent_Speak(L_ISPWhatIfGivenAccount6_Text);
			    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_ISPWhatIfGivenAccount7_Text = "Nastêpnie kliknij przycisk Dalej.";
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
	var L_ICSAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
	var L_ICSAddCommands2_Text = "Co to j&est zapora po³¹czenia internetowego?";
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
	var L_ICSAboutThisStep1_Text = "Na tym ekranie mo¿esz wybraæ, jak ten komputer ma uzyskiwaæ dostêp do Internetu.";
	Agent_Speak(L_ICSAboutThisStep1_Text);
	
	var L_ICSAboutThisStep2_Text = "Jeœli ten komputer jest po³¹czony z innymi komputerami w sieci, mo¿esz u¿yæ sieci do uzyskiwania dostêpu do Internetu.";
	Agent_Speak(L_ICSAboutThisStep2_Text);
	
	var L_ICSAboutThisStep3_Text = "W przeciwnym wypadku komputer mo¿na skonfigurowaæ do bezpoœredniego ³¹czenia siê z Internetem.";
	Agent_Speak(L_ICSAboutThisStep3_Text);
	
	var L_ICSAboutThisStep4_Text = "Niezale¿nie od wybranej opcji, system Windows XP chroni Ciê za pomoc¹ zapory po³¹czenia internetowego, zabezpieczaj¹c komputer przed nieautoryzowanym dostêpem innych u¿ytkowników Internetu.";
	Agent_Speak(L_ICSAboutThisStep4_Text);
}
	
function Agent_ICSWhatIsFirewall() 
{
	var L_ICSWhatIsFirewall1_Text = "Zapora to system zabezpieczaj¹cy, zaprojektowany w celu ochrony komputera - lub sieci komputerowej - przed zagro¿eniami z zewn¹trz, na przyk³ad hakerami, przychodz¹cymi z innych sieci, na przyk³ad z Internetu.";
	Agent_Speak(L_ICSWhatIsFirewall1_Text);
	
	var L_ICSWhatIsFirewall2_Text = "Podczas konfigurowania sieci w systemie Windows XP funkcja Zapory po³¹czenia internetowego systemu Windows XP jest automatycznie w³¹czana.";
	Agent_Speak(L_ICSWhatIsFirewall2_Text);
	
	var L_ICSWhatIsFirewall3_Text = "Jest ona tak¿e w³¹czana w przypadku, gdy komputer nie jest czêœci¹ sieci, a uzyskuje dostêp do Internetu bezpoœrednio.";
	Agent_Speak(L_ICSWhatIsFirewall3_Text);
}
	
function Agent_ICSWhatIsNetworkWizard() 
{
	var L_ICSWhatIsNetworkWizard1_Text = "Ten kreator poprowadzi Ciê krok po kroku przez proces konfigurowania sieci w domu lub miejscu pracy.";
	Agent_Speak(L_ICSWhatIsNetworkWizard1_Text);
	
	var L_ICSWhatIsNetworkWizard2_Text = "Jeœli nie chcesz pod³¹czaæ tego komputera do sieci podczas tego procesu, mo¿esz wykonaæ to póŸniej.";
	Agent_Speak(L_ICSWhatIsNetworkWizard2_Text);
	
	var L_ICSWhatIsNetworkWizard3_Text = "Po prostu przejdŸ do menu Start i kliknij polecenie Wiêcej programów.";
	Agent_Speak(L_ICSWhatIsNetworkWizard3_Text);
	
	var L_ICSWhatIsNetworkWizard4_Text = "Nastêpnie kliknij polecenia Akcesoria, Komunikacja i Kreator sieci domowej.";
	Agent_Speak(L_ICSWhatIsNetworkWizard4_Text);
	
	var L_ICSWhatIsNetworkWizard5_Text = "Jeœli zapomnisz te kroki, kliknij polecenie Pomoc i obs³uga techniczna w menu Start, aby znaleŸæ odpowiedzi na pytania i inne wartoœciowe informacje.";
	Agent_Speak(L_ICSWhatIsNetworkWizard5_Text);
}



function Agent_ICSDCAddCommands() 
{
	var L_ICSDCAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
	var L_ICSDCAddCommands2_Text = "&Co mam robiæ dalej?";
	
	g_AgentCharacter.Commands.Add("Agent_ICSDCAboutThisStep", L_ICSDCAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_ICSDCWhatToDoNext", L_ICSDCAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_ICSDCAboutThisStep() 
{
	var L_ICSDCAboutThisStep1_Text = "Ten ekran wyjaœnia, ¿e ten komputer zosta³ roz³¹czony z Internetem.";
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
    
	var L_ICSDCWhatToDoNext1_Text = "Kliknij przycisk Ponów próbê, aby spróbowaæ po³¹czyæ siê ponownie z Internetem.";
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
    
	var L_ICSDCWhatToDoNext2_Text = "Mo¿esz te¿ klikn¹æ przycisk \"Pomiñ\", aby kontynuowaæ bez ³¹czenia siê z Internetem.";
	Agent_Speak(L_ICSDCWhatToDoNext2_Text);
	
	Agent_Play("RestPose");
}



function Agent_Ident1AddCommands() 
{
    var L_Ident1AddCommands1_Text = "&Powiedz mi coœ o tym kroku";
    var L_Ident1AddCommands2_Text = "Co to jest &konto u¿ytkownika?";
    var L_Ident1AddCommands3_Text = "Jakie s¹ korzyœci ze &skonfigurowania kont u¿ytkowników?";
    var L_Ident1AddCommands4_Text = "&Co mam robiæ dalej?";

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
	var L_Ident1AboutThisStep1_Text = "Na tym ekranie mo¿esz okreœliæ osoby, które bêd¹ u¿ywaæ tego komputera.";
	Agent_Speak(L_Ident1AboutThisStep1_Text);
	
	var L_Ident1AboutThisStep2_Text = "Jeœli wspó³u¿ytkujesz ten komputer z innymi osobami, ka¿dy u¿ytkownik mo¿e spersonalizowaæ system Windows XP poprzez skonfigurowanie konta dla ka¿dej osoby.";
	Agent_Speak(L_Ident1AboutThisStep2_Text);
    
    var L_Ident1AboutThisStep3_Text = "Dziêki temu ka¿dy u¿ytkownik mo¿e mieæ w³asne ustawienia komputera, uprawnienia, pliki prywatne, ³¹cza sieci Web i inne opcje bez wp³ywu na Twój sposób spersonalizowania systemu.";
    Agent_Speak(L_Ident1AboutThisStep3_Text);
    
    var L_Ident1AboutThisStep4_Text = "Wszystkie nazwy wpisane na tym ekranie bêd¹ wyœwietlane na ekranie powitalnym po uruchomieniu komputera.";
    Agent_Speak(L_Ident1AboutThisStep4_Text);
    
    var L_Ident1AboutThisStep5_Text = "Dodatkowo, dla ka¿dej osoby bêdzie wyœwietlany obraz.";
    Agent_Speak(L_Ident1AboutThisStep5_Text);
    
    var L_Ident1AboutThisStep6_Text = "Mo¿esz zawsze zmieniæ te nazwy póŸniej, klikaj¹c w menu Start polecenie Panel sterowania, a nastêpnie klikaj¹c ikonê Konta u¿ytkowników.";
    Agent_Speak(L_Ident1AboutThisStep6_Text);
}

function Agent_Ident1Command_WhatIsUserAccount() 
{	
	var L_Ident1WhatIsUserAccount1_Text = "Jeœli wspó³u¿ytkujesz komputer z innymi osobami w domu lub w biurze, spodoba Ci siê funkcja kont u¿ytkowników.";
	Agent_Speak(L_Ident1WhatIsUserAccount1_Text);
	
	var L_Ident1WhatIsUserAccount2_Text = "Za pomoc¹ kont u¿ytkowników mo¿esz:";
	Agent_Speak(L_Ident1WhatIsUserAccount2_Text);
    
    var L_Ident1WhatIsUserAccount3_Text = "Personalizowaæ sposób, w jaki system Windows bêdzie organizowaæ i wyœwietlaæ informacje bez wp³ywu na preferencje innych u¿ytkowników;";
    Agent_Speak(L_Ident1WhatIsUserAccount3_Text);
    
    var L_Ident1WhatIsUserAccount4_Text = "¯¹daæ has³a w celu dostêpu do plików;";
    Agent_Speak(L_Ident1WhatIsUserAccount4_Text);
    
    var L_Ident1WhatIsUserAccount5_Text = "Zapamiêtaæ osobist¹ listê ulubionych w sieci Web i ostatnio odwiedzonych witryn;";
    Agent_Speak(L_Ident1WhatIsUserAccount5_Text);
    
    var L_Ident1WhatIsUserAccount6_Text = "Chroniæ wa¿ne ustawienia komputera;";
    Agent_Speak(L_Ident1WhatIsUserAccount6_Text);
    
    var L_Ident1WhatIsUserAccount7_Text = "Dostosowaæ pulpit dla ka¿dego u¿ytkownika i";
    Agent_Speak(L_Ident1WhatIsUserAccount7_Text);
    
    var L_Ident1WhatIsUserAccount8_Text = "U³atwiæ logowanie i prze³¹czanie siê miêdzy u¿ytkownikami komputera.";
    Agent_Speak(L_Ident1WhatIsUserAccount8_Text);
}

function Agent_Ident1Command_Benefits() 
{	
	var L_Ident1Benefits1_Text = "Wspó³u¿ytkowanie komputera zwykle oznacza, ¿e inni u¿ytkownicy mog¹ ogl¹daæ Twoje prywatne pliki, instalowaæ gry lub inne niepo¿¹dane oprogramowanie lub zmieniaæ ustawienia komputera.";
	Agent_Speak(L_Ident1Benefits1_Text);
	
	var L_Ident1Benefits2_Text = "Teraz wszystko siê zmieni!";
	Agent_Speak(L_Ident1Benefits2_Text);
    
    var L_Ident1Benefits3_Text = "Po ustawieniu kont u¿ytkowników ka¿dy u¿ytkownik mo¿e personalizowaæ system Windows bez wp³ywu na innych u¿ytkowników tego komputera.";
    Agent_Speak(L_Ident1Benefits3_Text);
    
    var L_Ident1Benefits4_Text = "Jeœli chcesz wiedzieæ wiêcej o kontach u¿ytkowników, kliknij polecenie Pomoc i obs³uga techniczna w menu Start, aby znaleŸæ odpowiedzi na pytania i inne wartoœciowe informacje.";
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
    
    var L_Ident1WhatToDoNext1_Text = "Po wpisaniu nazw innych osób, które bêd¹ u¿ywaæ tego komputera, kliknij przycisk Dalej, aby kontynuowaæ.";
    Agent_Speak(L_Ident1WhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_Ident1WhatToDoNext2_Text = "Mo¿esz póŸniej zmieniæ te nazwy i dodaæ wiêcej u¿ytkowników po skonfigurowaniu systemu Windows.";
    Agent_Speak(L_Ident1WhatToDoNext2_Text);
        
    var L_Ident1WhatToDoNext3_Text = "Po prostu kliknij polecenie Panel sterowania w menu Start i wybierz ikonê Konta u¿ytkowników.";
    Agent_Speak(L_Ident1WhatToDoNext3_Text);
}



function Agent_IdentitiesAddCommands() 
{
    var L_IdentitiesAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
    var L_IdentitiesAddCommands2_Text = "Co to jest &konto u¿ytkownika?";
    var L_IdentitiesAddCommands3_Text = "Jakie s¹ korzyœci ze &skonfigurowania kont u¿ytkowników?";
    var L_IdentitiesAddCommands4_Text = "&Co mam robiæ dalej?";

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
	var L_IdentitiesAboutThisStep1_Text = "Na tym ekranie mo¿esz okreœliæ osoby, które bêd¹ u¿ywaæ tego komputera.";
	Agent_Speak(L_IdentitiesAboutThisStep1_Text);
	
	var L_IdentitiesAboutThisStep2_Text = "Jeœli wspó³u¿ytkujesz ten komputer z innymi osobami, ka¿dy u¿ytkownik mo¿e spersonalizowaæ system Windows XP poprzez skonfigurowanie konta dla ka¿dej osoby.";
	Agent_Speak(L_IdentitiesAboutThisStep2_Text);
    
    var L_IdentitiesAboutThisStep3_Text = "Dziêki temu ka¿dy u¿ytkownik mo¿e mieæ w³asne ustawienia komputera, uprawnienia, pliki prywatne, ³¹cza sieci Web i inne opcje bez wp³ywu na Twój sposób spersonalizowania systemu.";
    Agent_Speak(L_IdentitiesAboutThisStep3_Text);
    
    var L_IdentitiesAboutThisStep4_Text = "Wszystkie nazwy wpisane na tym ekranie bêd¹ wyœwietlane na ekranie powitalnym po uruchomieniu komputera.";
    Agent_Speak(L_IdentitiesAboutThisStep4_Text);
    
    var L_IdentitiesAboutThisStep5_Text = "Dodatkowo, dla ka¿dej osoby bêdzie wyœwietlany obraz.";
    Agent_Speak(L_IdentitiesAboutThisStep5_Text);
    
    var L_IdentitiesAboutThisStep6_Text = "Mo¿esz zawsze zmieniæ te nazwy póŸniej, klikaj¹c w menu Start polecenie Panel sterowania, a nastêpnie klikaj¹c ikonê Konta u¿ytkowników.";
    Agent_Speak(L_IdentitiesAboutThisStep6_Text);
}

function Agent_IdentitiesCommand_WhatIsUserAccount() 
{	
	var L_IdentitiesWhatIsUserAccount1_Text = "Jeœli wspó³u¿ytkujesz komputer z innymi osobami w domu lub w biurze, spodoba Ci siê funkcja kont u¿ytkowników.";
	Agent_Speak(L_IdentitiesWhatIsUserAccount1_Text);
	
	var L_IdentitiesWhatIsUserAccount2_Text = "Za pomoc¹ kont u¿ytkowników mo¿esz:";
	Agent_Speak(L_IdentitiesWhatIsUserAccount2_Text);
    
    var L_IdentitiesWhatIsUserAccount3_Text = "Personalizowaæ sposób, w jaki system Windows bêdzie organizowaæ i wyœwietlaæ informacje bez wp³ywu na preferencje innych u¿ytkowników;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount3_Text);
    
    var L_IdentitiesWhatIsUserAccount4_Text = "¯¹daæ has³a w celu dostêpu do plików;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount4_Text);
    
    var L_IdentitiesWhatIsUserAccount5_Text = "Zapamiêtaæ osobist¹ listê ulubionych w sieci Web i ostatnio odwiedzonych witryn;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount5_Text);
    
    var L_IdentitiesWhatIsUserAccount6_Text = "Chroniæ wa¿ne ustawienia komputera;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount6_Text);
    
    var L_IdentitiesWhatIsUserAccount7_Text = "Dostosowaæ pulpit dla ka¿dego u¿ytkownika i";
    Agent_Speak(L_IdentitiesWhatIsUserAccount7_Text);
    
    var L_IdentitiesWhatIsUserAccount8_Text = "U³atwiæ logowanie i prze³¹czanie siê miêdzy u¿ytkownikami komputera.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount8_Text);
}

function Agent_IdentitiesCommand_Benefits() 
{	
	var L_IdentitiesBenefits1_Text = "Wspó³u¿ytkowanie komputera zwykle oznacza, ¿e inni u¿ytkownicy mog¹ ogl¹daæ Twoje prywatne pliki, instalowaæ gry lub inne niepo¿¹dane oprogramowanie lub zmieniaæ ustawienia komputera.";
	Agent_Speak(L_IdentitiesBenefits1_Text);
	
	var L_IdentitiesBenefits2_Text = "Teraz wszystko siê zmieni!";
	Agent_Speak(L_IdentitiesBenefits2_Text);
    
    var L_IdentitiesBenefits3_Text = "Po ustawieniu kont u¿ytkowników ka¿dy u¿ytkownik mo¿e personalizowaæ system Windows bez wp³ywu na innych u¿ytkowników tego komputera.";
    Agent_Speak(L_IdentitiesBenefits3_Text);
    
    var L_IdentitiesBenefits4_Text = "Jeœli chcesz wiedzieæ wiêcej o kontach u¿ytkowników, kliknij polecenie Pomoc i obs³uga techniczna w menu Start, aby znaleŸæ odpowiedzi na pytania i inne wartoœciowe informacje.";
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
    
    var L_IdentitiesWhatToDoNext1_Text = "Po wpisaniu nazw innych osób, które bêd¹ u¿ywaæ tego komputera, kliknij przycisk Dalej, aby kontynuowaæ.";
    Agent_Speak(L_IdentitiesWhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_IdentitiesWhatToDoNext2_Text = "Mo¿esz póŸniej zmieniæ te nazwy i dodaæ wiêcej u¿ytkowników po skonfigurowaniu systemu Windows.";
    Agent_Speak(L_IdentitiesWhatToDoNext2_Text);
        
    var L_IdentitiesWhatToDoNext3_Text = "Po prostu kliknij polecenie Panel sterowania w menu Start i wybierz ikonê Konta u¿ytkowników.";
    Agent_Speak(L_IdentitiesWhatToDoNext3_Text);
}



function Agent_KeybdAddCommands() 
{
	var L_KeybdMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_KeybdMenuCommand2_Text = "Jak mam wybraæ mój &region?";
    var L_KeybdMenuCommand3_Text = "Jak mam wybraæ mój &jêzyk?";
    var L_KeybdMenuCommand4_Text = "Jak mam wybraæ moj¹ &klawiaturê?";

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
    var L_KeybdAboutThisStep1_Text = "Na kilku nastêpnych ekranach mo¿esz powiedzieæ systemowi Windows, jak ma wyœwietlaæ tekst, daty i liczby w oparciu o Twoje preferencje dotycz¹ce jêzyka, regionu i strefy czasowej.";
    Agent_Speak(L_KeybdAboutThisStep1_Text);
        
    var L_KeybdAboutThisStep2_Text = "Na tym ekranie na przyk³ad mo¿esz wybraæ region œwiata najbli¿szy Twojego miejsca zamieszkania, jêzyk, którego najczêœciej bêdziesz u¿ywaæ na tym komputerze, a tak¿e u¿ywan¹ klawiaturê.";
    Agent_Speak(L_KeybdAboutThisStep2_Text);
        
    var L_KeybdAboutThisStep3_Text = "System Windows zapewni Ci poprawne wyœwietlanie daty, godziny i waluty.";
    Agent_Speak(L_KeybdAboutThisStep3_Text);
        
    var L_KeybdAboutThisStep4_Text = "Jeœli na przyk³ad wybierzesz jako swój region Stany Zjednoczone, a jako swój jêzyk - jêzyk angielski, kwoty walut bêd¹ wyœwietlane w dolarach USA.";
    Agent_Speak(L_KeybdAboutThisStep4_Text);

    var L_KeybdAboutThisStep5_Text = "Jeœli jednak jako swój region wybierzesz Wielk¹ Brytaniê, kwoty walut bêd¹ wyœwietlane w funtach brytyjskich.";
    Agent_Speak(L_KeybdAboutThisStep5_Text);
}

function Agent_KeybdHowToSelectRegion() 
{     
    Agent_GestureAtElement(g.selRegion, "Left");
     
    var L_KeybdHowToSelectRegion1_Text = "Kraje i regiony œwiata wystêpuj¹ na tej liœcie w porz¹dku alfabetycznym.";
    Agent_Speak(L_KeybdHowToSelectRegion1_Text);	
   
    var L_KeybdHowToSelectRegion2_Text = "Kliknij wewn¹trz listy lub naciskaj klawisz Tab na klawiaturze, a¿ do osi¹gniêcia tego miejsca.";
    Agent_Speak(L_KeybdHowToSelectRegion2_Text);	
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selRegion, "Right");
        
    var L_KeybdHowToSelectRegion3_Text = "Nastêpnie, w celu przewiniêcia regionów, kliknij te przyciski ma³ych strza³ek lub u¿yj klawiszy strza³ki w górê i strza³ki w dó³ na klawiaturze.";
    Agent_Speak(L_KeybdHowToSelectRegion3_Text);
        
    var L_KeybdHowToSelectRegion4_Text = "Kiedy zobaczysz region najbli¿szy Twojego miejsca zamieszkania, kliknij go lub naciœnij klawisz Enter na klawiaturze.";
    Agent_Speak(L_KeybdHowToSelectRegion4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.RegionName, "Left");

    var L_KeybdHowToSelectRegion5_Text = "Wybrany region pojawi siê w tym polu.";
    Agent_Speak(L_KeybdHowToSelectRegion5_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectLanguage() 
{        		
    var L_KeybdHowToSelectLanguage1_Text = "Wybierz jêzyk, w którym porozumiewasz siê najczêœciej.";
    Agent_Speak(L_KeybdHowToSelectLanguage1_Text);
        
    var L_KeybdHowToSelectLanguage2_Text = "Na przyk³ad, jeœli najczêœciej mówisz po angielsku, ale programy komputerowe i pliki, z którymi pracujesz, s¹ zazwyczaj w jêzyku polskim, wybierz tutaj jêzyk polski.";
    Agent_Speak(L_KeybdHowToSelectLanguage2_Text);   
        
    Agent_GestureAtElement(g.selLang, "Left");  
        
    var L_KeybdHowToSelectLanguage3_Text = "Jêzyki wystêpuj¹ na tej liœcie w kolejnoœci alfabetycznej.";
    Agent_Speak(L_KeybdHowToSelectLanguage3_Text);

    var L_KeybdHowToSelectLanguage4_Text = "Kliknij tutaj lub naciskaj klawisz Tab na klawiaturze, a¿ do osi¹gniêcia tego miejsca.";
    Agent_Speak(L_KeybdHowToSelectLanguage4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selLang, "Right");

    var L_KeybdHowToSelectLanguage5_Text = "Nastêpnie, w celu przewiniêcia regionów, kliknij te przyciski ma³ych strza³ek lub u¿yj klawiszy strza³ki w górê i strza³ki w dó³ na klawiaturze.";
    Agent_Speak(L_KeybdHowToSelectLanguage5_Text);

    var L_KeybdHowToSelectLanguage6_Text = "Kiedy zobaczysz ¿¹dany jêzyk, kliknij go lub naciœnij klawisz Enter na klawiaturze.";
    Agent_Speak(L_KeybdHowToSelectLanguage6_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.LangName, "Left");

    var L_KeybdHowToSelectLanguage7_Text = "Wybrany jêzyk pojawi siê w tym polu.";
    Agent_Speak(L_KeybdHowToSelectLanguage7_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectKeyboard() 
{		
    var L_KeybdHowToSelectKeyboard1_Text = "Klawiatury wystêpuj¹ na tej liœcie w kolejnoœci alfabetycznej.";
    Agent_Speak(L_KeybdHowToSelectKeyboard1_Text);
    
    Agent_GestureAtElement(g.selKeyboard, "Left");
        
    var L_KeybdHowToSelectKeyboard2_Text = "Kliknij tutaj lub naciskaj klawisz Tab na klawiaturze, a¿ do osi¹gniêcia tego miejsca.";
    Agent_Speak(L_KeybdHowToSelectKeyboard2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selKeyboard, "Right");
        
    var L_KeybdHowToSelectKeyboard3_Text = "Nastêpnie kliknij te przyciski ma³ych strza³ek lub u¿yj klawiszy strza³ki w górê i strza³ki w dó³ na klawiaturze, aby przewin¹æ listê.";
    Agent_Speak(L_KeybdHowToSelectKeyboard3_Text);
        
    var L_KeybdHowToSelectKeyboard4_Text = "Kiedy zobaczysz klawiaturê, której u¿ywasz do pracy z tym komputerem, kliknij j¹ lub naciœnij klawisz Enter na klawiaturze.";
    Agent_Speak(L_KeybdHowToSelectKeyboard4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.KeyboardName, "Left");

    var L_KeybdHowToSelectKeyboard5_Text = "Wybrana klawiatura pojawi siê w tym polu.";
    Agent_Speak(L_KeybdHowToSelectKeyboard5_Text);
    
    Agent_Play("RestPose");
}



function Agent_EulaAddCommands() 
{
    var L_EulaCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_EulaCommand2_Text = "Jak &mogê wskazaæ odpowiedŸ?";
    var L_EulaCommand3_Text = "&Czym w³aœciwie jest Umowa Licencyjna U¿ytkownika Oprogramowania?";
    var L_EulaCommand4_Text = "Co mówi Umowa Licencyjna U¿ytkownika Oprogramowania (&EULA)?";
    var L_EulaCommand5_Text = "Dl&aczego przycisk Dalej jest niedostêpny?";
    var L_EulaCommand6_Text = "&Co mam robiæ dalej?";

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
        var L_EulaMenuCommand5_Text = "Dl&aczego przycisk Dalej jest niedostêpny?";

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
    var L_EulaAboutThisStep1_Text = "Na tym ekranie mo¿esz przeczytaæ umowê licencyjn¹ systemu Microsoft Windows, a nastêpnie wskazaæ, czy j¹ akceptujesz.";
    Agent_Speak(L_EulaAboutThisStep1_Text);		
    
    Agent_GestureAtElement(g.txtEULA,"Left");
        
    var L_EulaAboutThisStep2_Text = "Aby u¿ywaæ systemu Windows, musisz zaakceptowaæ tê umowê.";
    Agent_Speak(L_EulaAboutThisStep2_Text);
    
    Agent_Play("RestPose");
}

function Agent_EulaHowToAnswer() 
{		
    Agent_GestureAtElement(g.radioAgree,"Left");
    
    var L_EulaHowToAnswer1_Text = "Po prostu umieœæ wskaŸnik myszy w bia³ym kó³ku z lewej strony odpowiedzi i kliknij jeden raz.";
    Agent_Speak(L_EulaHowToAnswer1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaHowToAnswer2_Text = "Nastêpnie kliknij przycisk Dalej.";
    Agent_Speak(L_EulaHowToAnswer2_Text);
}

function Agent_EulaWhatIsEula() 
{		
    var L_EulaWhatIsEula1_Text = "U¿ytkowanie produktów firmy Microsoft podlega warunkom umowy licencyjnej u¿ytkownika oprogramowania (EULA), a tak¿e prawu autorskiemu.";
    Agent_Speak(L_EulaWhatIsEula1_Text);
        
    var L_EulaWhatIsEula2_Text = "EULA to umowa, która wyznacza zasady legalnego u¿ytkowania licencjonowanego produktu, a tak¿e udziela Ci konkretnego prawa do u¿ywania tego produktu na swoim komputerze.";
    Agent_Speak(L_EulaWhatIsEula2_Text);
}

function Agent_EulaWhatDoesEulaSay() 
{		
    var L_EulaWhatDoesEulaSay1_Text = "Po zaakceptowaniu jej warunków Umowa Licencyjna U¿ytkownika Oprogramowania daje Ci uprawnienia do korzystania z systemu Windows XP i udziela dodatkowych praw.";
    Agent_Speak(L_EulaWhatDoesEulaSay1_Text);
        
    var L_EulaWhatDoesEulaSay2_Text = "Nak³ada ona równie¿ pewne ograniczenia na korzystanie z systemu Windows XP.";
    Agent_Speak(L_EulaWhatDoesEulaSay2_Text);	
    
    Agent_GestureAtElement(g.txtEULA,"Right");	
        
    var L_EulaWhatDoesEulaSay3_Text = "Aby przeczytaæ szczegó³y, przewiñ umowê w dó³ do sekcji Udzielenie licencji.";
    Agent_Speak(L_EulaWhatDoesEulaSay3_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatDoesEulaSay4_Text = "Umowa Licencyjna U¿ytkownika Oprogramowania opisuje tak¿e ograniczenie gwarancji oraz warunki, na jakich mo¿esz wykonywaæ kopiê zapasow¹ lub kopiê archiwaln¹ systemu Windows XP.";
    Agent_Speak(L_EulaWhatDoesEulaSay4_Text);
}

function Agent_EulaWhereIsNextButton() 
{		
    var L_EulaWhereIsNextButton1_Text = "Przycisk Dalej nie jest jeszcze dostêpny, poniewa¿ nie wybrano opcji zwi¹zanej z akceptowaniem umowy licencyjnej.";
    Agent_Speak(L_EulaWhereIsNextButton1_Text);
        
    var L_EulaWhereIsNextButton2_Text = "Musisz najpierw klikn¹æ opcjê Tak lub Nie.";
    Agent_Speak(L_EulaWhereIsNextButton2_Text);
}

function Agent_EulaWhatToDoNext() 
{			
    Agent_GestureAtElement(g.radioAgree,"Left");
    	
    var L_EulaWhatToDoNext1_Text = "Po przeczytaniu umowy licencyjnej kliknij przycisk Tak, aby j¹ zaakceptowaæ.";
    Agent_Speak(L_EulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatToDoNext2_Text = "Mo¿esz te¿ klikn¹æ przycisk Nie, jeœli nie chcesz zaakceptowaæ licencji.";
    Agent_Speak(L_EulaWhatToDoNext2_Text);
        
    var L_EulaWhatToDoNext3_Text = "Jeœli chcesz dalej u¿ywaæ systemu Windows, musisz zaakceptowaæ tê umowê.";
    Agent_Speak(L_EulaWhatToDoNext3_Text);
    			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_EulaWhatToDoNext4_Text = "Nastêpnie kliknij przycisk Dalej, aby przejœæ do nastêpnego ekranu.";
    Agent_Speak(L_EulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_BadEulaAddCommands() {

    var L_BadEulaCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_BadEulaCommand2_Text = "Co mówi Umowa Licencyjna U¿ytkownika Oprogramowania (&EULA)?";
    var L_BadEulaCommand3_Text = "Co bêdzie, jeœli nie zaakceptujê Umowy Licencyjnej U¿ytkownika Oprogramowania (EULA)?";
    var L_BadEulaCommand4_Text = "&Co mam robiæ dalej?";

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
    var L_BadEulaAboutThisStep1_Text = "Na poprzednim ekranie zosta³a wybrana opcja nieakceptowania warunków umowy licencyjnej.";
    Agent_Speak(L_BadEulaAboutThisStep1_Text);

    var L_BadEulaAboutThisStep2_Text = "Wskutek tego nie bêdzie mo¿na w przysz³oœci u¿ywaæ systemu Windows.";
    Agent_Speak(L_BadEulaAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadEulaAboutThisStep3_Text = "Mo¿esz jednak powróciæ do poprzedniego ekranu, klikaj¹c przycisk Wstecz, aby zaakceptowaæ umowê.";
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
        
    var L_BadEulaAboutThisStep4_Text = "Mo¿esz te¿ potwierdziæ, ¿e chcesz przestaæ u¿ywaæ systemu Windows i wy³¹czyæ komputer.";
    Agent_Speak(L_BadEulaAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_BadEulaWhatDoesEulaSay()
{
    var L_BadEulaWhatDoesEulaSay1_Text = "Po zaakceptowaniu jej warunków Umowa Licencyjna U¿ytkownika Oprogramowania daje Ci uprawnienia do korzystania z systemu Windows XP i udziela dodatkowych praw.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay1_Text);

    var L_BadEulaWhatDoesEulaSay2_Text = "Nak³ada ona równie¿ pewne ograniczenia na korzystanie z systemu Windows XP.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay2_Text);

    var L_BadEulaWhatDoesEulaSay3_Text = "Aby przeczytaæ szczegó³owe informacje, kliknij przycisk Wstecz, otwórz Umowê Licencyjn¹ U¿ytkownika Oprogramowania i przewiñ j¹ w dó³ do sekcji Udzielenie licencji.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay3_Text);
        
    var L_BadEulaWhatDoesEulaSay4_Text = "Umowa Licencyjna U¿ytkownika Oprogramowania opisuje tak¿e ograniczenie gwarancji oraz warunki, na jakich mo¿esz wykonywaæ kopiê zapasow¹ lub kopiê archiwaln¹ systemu Windows XP.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay4_Text);
}

function Agent_BadEulaWhatIfIDontAcceptEula()
{
    var L_BadEulaWhatIfIDontAcceptEula1_Text = "Poniewa¿ Umowa Licencyjna U¿ytkownika Oprogramowania udziela uprawnieñ do korzystania z systemu Windows XP, musisz zaakceptowaæ tê umowê, aby móc rozpocz¹æ korzystanie z systemu Windows XP.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadEulaWhatIfIDontAcceptEula2_Text = "Jeœli zdecydujesz siê, aby nie akceptowaæ umowy, mo¿esz wy³¹czyæ komputer, klikaj¹c przycisk Zamknij.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula2_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatIfIDontAcceptEula3_Text = "Po ponownym uruchomieniu komputera powrócisz do tego ekranu.";
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
    
    var L_BadEulaWhatToDoNext1_Text = "Jeœli decydujesz siê na zaakceptowanie umowy licencyjnej, kliknij przycisk Wstecz.";
    Agent_Speak(L_BadEulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatToDoNext2_Text = "Musisz zaakceptowaæ umowê, aby kontynuowaæ ten proces i rozpocz¹æ u¿ywanie systemu Windows.";
    Agent_Speak(L_BadEulaWhatToDoNext2_Text);

    var L_BadEulaWhatToDoNext3_Text = "Jeœli nie zdecydujesz siê na zaakceptowanie umowy, kliknij przycisk Zamknij, aby wy³¹czyæ komputer.";
    Agent_Speak(L_BadEulaWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_BadEulaWhatToDoNext4_Text = "Po ponownym uruchomieniu komputera powrócisz do tego ekranu.";
    Agent_Speak(L_BadEulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}




function Agent_ProductKeyAddCommands() 
{
    var L_ProductKeyAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
    var L_ProductKeyAddCommands2_Text = "Co to jest &klucz produktu?";
    var L_ProductKeyAddCommands4_Text = "&Co mam robiæ dalej?";

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

        var L_ProductKeyAddCommands3_Text = "Dl&aczego przycisk Dalej jest niedostêpny?";

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
    var L_ProductKeyAboutThisStep1_Text = "Na tym ekranie wprowadŸ 25-znakowy klucz produktu (Product Key), który powinien byæ dostarczony przez producenta komputera.";
    Agent_Speak(L_ProductKeyAboutThisStep1_Text);

    var L_ProductKeyAboutThisStep2_Text = "W przypadku braku klucza produktu (Product Key) na opakowaniu dysku CD sprawdŸ nalepkê Certyfikatu Autentycznoœci (Certificate of Authenticity) na tym komputerze PC lub z ty³u podrêcznika \"Wprowadzenie\".";
    Agent_Speak(L_ProductKeyAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pid1,"Left");

    var L_ProductKeyAboutThisStep3_Text = "Wszelkie wpisane tutaj litery zostan¹ automatycznie wyœwietlone jako wielkie litery.";
    Agent_Speak(L_ProductKeyAboutThisStep3_Text);
    
    Agent_Play("RestPose");
        
    var L_ProductKeyAboutThisStep4_Text = "Teraz mo¿esz zarejestrowaæ swój komputer i kopiê systemu Microsoft Windows.";
    Agent_Speak(L_ProductKeyAboutThisStep4_Text);
        
    var L_ProductKeyAboutThisStep5_Text = "Rejestracja systemu Windows jest prosta i niesie ze sob¹ wiele korzyœci.";
    Agent_Speak(L_ProductKeyAboutThisStep5_Text);
}

function Agent_ProductKeyWhatIsProdKey()
{
    var L_ProductKeyWhatIsProdKey1_Text = "Ka¿da kopia systemu Windows produkowana przez firmê Microsoft jest kodowana za pomoc¹ unikatowego klucza produktu.";
    Agent_Speak(L_ProductKeyWhatIsProdKey1_Text);

    var L_ProductKeyWhatIsProdKey2_Text = "Klucz produktu pomaga Ci upewniæ siê, ¿e zakupiony przez Ciebie produkt jest oryginalnym produktem firmy Microsoft.";
    Agent_Speak(L_ProductKeyWhatIsProdKey2_Text);

    var L_ProductKeyWhatIsProdKey3_Text = "Pomaga to tak¿e ochroniæ Ciê przed pirack¹ kopi¹ systemu Windows.";
    Agent_Speak(L_ProductKeyWhatIsProdKey3_Text);
        
    var L_ProductKeyWhatIsProdKey4_Text = "Klucz produktu uprawnia tak¿e do pewnych korzyœci, takich jak pomoc techniczna, us³ugi reklamowe, uaktualnienia i oferty w sieci Web.";
    Agent_Speak(L_ProductKeyWhatIsProdKey4_Text);
}

function Agent_ProductKeyWhyNextNotAvailable()
{
    var L_ProductKeyWhyNextNotAvailable1_Text = "Przycisk Dalej jest niedostêpny, poniewa¿ nie zosta³ wprowadzony prawid³owy klucz produktu.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable1_Text);

    var L_ProductKeyWhyNextNotAvailable2_Text = "Musisz wprowadziæ prawid³owy klucz produktu.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable2_Text);

    var L_ProductKeyWhyNextNotAvailable3_Text = "Nastêpnie mo¿esz klikn¹æ przycisk Dalej, aby kontynuowaæ.";
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
    
    var L_ProductKeyWhatToDoNext1_Text = "Po wpisaniu prawid³owego klucza produktu kliknij przycisk Dalej.";
    Agent_Speak(L_ProductKeyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}




function Agent_Reg1AddCommands() 
{
    var L_Reg1Command1_Text = "&Powiedz mi coœ o tym kroku";
    var L_Reg1Command2_Text = "&Powiedz mi o rejestracji";
    var L_Reg1Command3_Text = "&Jak zarejestrowaæ siê teraz?";
    var L_Reg1Command4_Text = "Czy &mo¿na zarejestrowaæ siê póŸniej?";
    var L_Reg1Command5_Text = "&Czy warto siê zarejestrowaæ?";
    var L_Reg1Command6_Text = "Powiedz mi, jak &udostêpniaæ informacje";

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
    var L_Reg1AboutThisStep1_Text = "To jest pocz¹tek sekcji rejestracji.";
    Agent_Speak(L_Reg1AboutThisStep1_Text);

    var L_Reg1AboutThisStep2_Text = "Tutaj mo¿esz zarejestrowaæ swoj¹ kopiê systemu Windows.";
    Agent_Speak(L_Reg1AboutThisStep2_Text);

    var L_Reg1AboutThisStep3_Text = "Gdy to zrobisz, bêdziesz mieæ prawa do wielu korzyœci przypadaj¹cych klientom firmy Microsoft.";
    Agent_Speak(L_Reg1AboutThisStep3_Text);
        
    var L_Reg1AboutThisStep4_Text = "Korzyœci te obejmuj¹ powiadamianie o aktualizacjach produktów oraz dostêp do cenionych us³ug pomocy technicznej firmy Microsoft.";
    Agent_Speak(L_Reg1AboutThisStep4_Text);
        
    var L_Reg1AboutThisStep5_Text = "Na tym ekranie mo¿esz zdecydowaæ, w jaki sposób chcesz siê zarejestrowaæ.";
    Agent_Speak(L_Reg1AboutThisStep5_Text);
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");
        
    var L_Reg1AboutThisStep6_Text = "Jeœli chcesz znaleŸæ wiêcej danych na temat zasad zachowania poufnoœci informacji firmy Microsoft, kliknij to ³¹cze.";
    Agent_Speak(L_Reg1AboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1AboutRegistration()
{    
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1AboutRegistration1_Text = "Kliknij tutaj, aby rozpocz¹æ proces rejestracji, a nastêpnie kliknij przycisk Dalej.";
    Agent_Speak(L_Reg1AboutRegistration1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.rb_reg_ms_no,"Left");

    var L_Reg1AboutRegistration2_Text = "Jeœli nie chcesz siê zarejestrowaæ, kliknij tê drug¹ opcjê, a nastêpnie kliknij przycisk \"Dalej\".";
    Agent_Speak(L_Reg1AboutRegistration2_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1HowToRegister()
{      
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1HowToRegister1_Text = "W celu zarejestrowania kopii systemu Windows upewnij siê, ¿e zosta³a zaznaczona opcja Tak.";
    Agent_Speak(L_Reg1HowToRegister1_Text); 
    
    Agent_Play("RestPose");

    var L_Reg1HowToRegister2_Text = "Nastêpnie kliknij przycisk Dalej, aby kontynuowaæ.";
    Agent_Speak(L_Reg1HowToRegister2_Text);
}

function Agent_Reg1RegisterLater()
{
    var L_Reg1RegisterLater1_Text = "Jeœli teraz pominiesz rejestracjê, mo¿esz zarejestrowaæ swoj¹ kopiê systemu Windows po zakoñczonym konfigurowaniu systemu Windows.";
    Agent_Speak(L_Reg1RegisterLater1_Text);

    var L_Reg1RegisterLater2_Text = "Po prostu kliknij w menu Start polecenie Uruchom i wpisz regwiz /r.";
    Agent_Speak(L_Reg1RegisterLater2_Text);

    var L_Reg1RegisterLater3_Text = "Jeœli zapomnisz te kroki, kliknij polecenie Pomoc i obs³uga techniczna w menu Start, aby znaleŸæ odpowiedzi na pytania i inne wartoœciowe informacje.";
    Agent_Speak(L_Reg1RegisterLater3_Text);
}

function Agent_Reg1WhyRegister()
{
    var L_Reg1WhyRegister1_Text = "Gdy zarejestrujesz swoj¹ kopiê systemu Windows, bêdziesz mieæ uprawnienia do wielu korzyœci przypadaj¹cych klientom firmy Microsoft.";
    Agent_Speak(L_Reg1WhyRegister1_Text);

    var L_Reg1WhyRegister2_Text = "Korzyœci te obejmuj¹ powiadamianie o aktualizacjach produktów oraz dostêp do cenionych us³ug pomocy technicznej firmy Microsoft.";
    Agent_Speak(L_Reg1WhyRegister2_Text);
}

function Agent_Reg1AboutSharingInfo()
{
    
    if (!window.external.get_RetailOOBE()) 
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Przez zaznaczenie tych opcji zgadzasz siê na udostêpnienie swoich informacji rejestracyjnych firmie Microsoft i producentowi komputera.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text); 
    
        Agent_Play("RestPose");
    }
    else
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Przez zaznaczenie tych opcji zgadzasz siê na udostêpnienie swoich informacji rejestracyjnych firmie Microsoft i producentowi komputera.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");     
    }
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");

    var L_Reg1AboutSharingInfo2_Text = "Aby dowiedzieæ siê wiêcej o zasadach zachowania poufnoœci informacji firmy Microsoft, kliknij to ³¹cze.";
    Agent_Speak(L_Reg1AboutSharingInfo2_Text);
    
    Agent_Play("RestPose");
    
    if (!window.external.get_RetailOOBE()) 
    {           
        Agent_GestureAtElement(g.reg1_spn3,"Left");
                
        var L_Reg1AboutSharingInfo3_Text = "Aby dowiedzieæ siê wiêcej o zasadach zachowania poufnoœci informacji firmy %1, kliknij to ³¹cze.";
        Agent_Speak(ApiObj.FormatMessage(L_Reg1AboutSharingInfo3_Text, g_OEMNameStr));
    
        Agent_Play("RestPose");
    }
}




function Agent_Reg3AddCommands() 
{
    var L_Reg3Command1_Text = "&Powiedz mi coœ o tym kroku";
    var L_Reg3Command2_Text = "&Jak mogê zmieniaæ informacje?";
    var L_Reg3Command3_Text = "Powiedz mi, jak &udostêpniaæ informacje";

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
    var L_Reg3AboutThisStep1_Text = "Aby zarejestrowaæ tê kopiê systemu Microsoft Windows, musisz wype³niæ informacje na tym ekranie.";
    Agent_Speak(L_Reg3AboutThisStep1_Text);
    
    Agent_GestureAtElement(g.UserCity,"Left");

    var L_Reg3AboutThisStep2_Text = "Informacje s¹ wymagane we wszystkich polach z wyj¹tkiem tych, które oznaczono napisem Opcjonalne.";
    Agent_Speak(L_Reg3AboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_Reg3AboutThisStep3_Text = "Jeœli mo¿esz, wype³nij tak¿e informacje opcjonalne.";
    Agent_Speak(L_Reg3AboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_Reg3AboutThisStep4_Text = "Po zakoñczeniu kliknij po prostu przycisk Dalej.";
    Agent_Speak(L_Reg3AboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg3HowToChangeInfo()
{
    var L_Reg3HowToChangeInfo1_Text = "W polach dodane zosta³y wskazówki pokazuj¹ce, co nale¿y zrobiæ.";
    Agent_Speak(L_Reg3HowToChangeInfo1_Text);
    
    Agent_GestureAtElement(g.UserLastName,"Left");

    var L_Reg3HowToChangeInfo2_Text = "Na przyk³ad, wystarczy klikn¹æ w polu Nazwisko, aby zacz¹æ wpisywaæ dane.";
    Agent_Speak(L_Reg3HowToChangeInfo2_Text);

    var L_Reg3HowToChangeInfo3_Text = "W polu powinna pojawiæ siê migaj¹ca pionowa linia, znana jako punkt wstawiania.";
    Agent_Speak(L_Reg3HowToChangeInfo3_Text);

    var L_Reg3HowToChangeInfo4_Text = "Wszystko, co napiszesz, bêdzie wprowadzane w punkcie wstawiania.";
    Agent_Speak(L_Reg3HowToChangeInfo4_Text);
    
    Agent_Play("RestPose");

    var L_Reg3HowToChangeInfo5_Text = "W polu tekstowym mo¿esz przenieœæ punkt wstawiania, naciskaj¹c na klawiaturze klawisz strza³ki w lewo lub strza³ki w prawo.";
    Agent_Speak(L_Reg3HowToChangeInfo5_Text);

    var L_Reg3HowToChangeInfo6_Text = "Mo¿esz te¿ u¿yæ klawisza Delete do usuwania znaków po punkcie wstawiania, a klawisza Backspace do usuwania znaków przed punktem wstawiania.";
    Agent_Speak(L_Reg3HowToChangeInfo6_Text);

    var L_Reg3HowToChangeInfo7_Text = "Jeœli chcesz wstawiæ znak, umieœæ wskaŸnik w polu w miejscu, w którym chcesz dodaæ znak, i kliknij.";
    Agent_Speak(L_Reg3HowToChangeInfo7_Text);

    var L_Reg3HowToChangeInfo8_Text = "Nastêpnie wpisz znak, który chcesz wstawiæ.";
    Agent_Speak(L_Reg3HowToChangeInfo8_Text);

    var L_Reg3HowToChangeInfo9_Text = "Nie martw siê, jeœli nie wpiszesz czegoœ w którymœ polu i pozostanie w nim wyœwietlona wskazówka.";
    Agent_Speak(L_Reg3HowToChangeInfo9_Text);

    var L_Reg3HowToChangeInfo10_Text = "Wskazówki maj¹ jedynie s³u¿yæ Ci pomoc¹. Nie wchodz¹ one w sk³ad informacji rejestracyjnych.";
    Agent_Speak(L_Reg3HowToChangeInfo10_Text);
}

function Agent_Reg3AboutSharingInfo()
{    
    if (!window.external.get_RetailOOBE()) 
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
        
        var L_Reg3AboutSharingInfo1_Text = "Przez zaznaczenie tych opcji zgadzasz siê na udostêpnienie swoich informacji rejestracyjnych firmie Microsoft i producentowi komputera.";
        Agent_Speak(L_Reg3AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");
    }
    else
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
         
        var L_Reg3AboutSharingInfo1_Text = "Przez zaznaczenie tych opcji zgadzasz siê na udostêpnienie swoich informacji rejestracyjnych firmie Microsoft i producentowi komputera.";
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

        

        L_Register3PlayCheckBoxScript1_Text = "Obecnie informacje o rejestracji na tym ekranie s¹ tak ustawione, ¿e bêd¹ wys³ane zarówno do firmy Microsoft, jak i do producenta komputera.";
        L_Register3PlayCheckBoxScript2_Text = "Obecnie informacje o rejestracji na tym ekranie s¹ tak ustawione, ¿e bêd¹ wys³ane do firmy Microsoft, ale nie do producenta komputera.";
        L_Register3PlayCheckBoxScript3_Text = "Obecnie informacje o rejestracji na tym ekranie s¹ tak ustawione, ¿e bêd¹ wys³ane do producenta komputera, ale nie do firmy Microsoft.";
        L_Register3PlayCheckBoxScript4_Text = "Obecnie informacje o rejestracji na tym ekranie s¹ tak ustawione, ¿e nie bêd¹ wys³ane ani do firmy Microsoft, ani do producenta komputera.";

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

        var L_Register3PlayCheckBoxScript5_Text = "Te informacje pomog¹ w informowaniu o aktualizacjach programów i innych korzyœciach przypadaj¹cych zarejestrowanym klientom.";
        Agent_Speak(L_Register3PlayCheckBoxScript5_Text);

        var L_Register3PlayCheckBoxScript6_Text = "Jeœli chcesz zmieniæ decyzjê o wys³aniu tych informacji,";
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

        var L_Register3EncourageTabKey1_Text = "Naciœnij klawisz Tab, aby przenieœæ siê tutaj.";
        Agent_Speak(L_Register3EncourageTabKey1_Text);
}

function Agent_Register3EncourageMouseClick() {

        var L_Register3EncourageMouseClick1_Text = "Przenieœ tutaj wskaŸnik myszy i kliknij lewym przyciskiem myszy.";
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

                        var L_Register3PlayElementScript1_Text = "W tym polu wpisz swoje imiê.";
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

                        var L_Register3PlayElementScript3_Text = "Tutaj wpisujesz swoje drugie imiê.";
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

                        var L_Register3PlayElementScript5_Text = "Wpisz tutaj ulicê, na której mieszkasz.";
                        Agent_Speak(L_Register3PlayElementScript5_Text);

                        break;

                case "UserAddress2":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        Agent_Play("Think");

                        var L_Register3PlayElementScript6_Text = "Jeœli potrzebujesz wiêcej miejsca na wpisanie swojego adresu, wprowadŸ go tutaj. W innym przypadku naciœnij klawisz Tab, aby przenieœæ siê dalej.";
                        Agent_Speak(L_Register3PlayElementScript6_Text);

                        Agent_Play("RestPose");

                        break;

                case "UserCity":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript7_Text = "Wpisz tutaj nazwê miasta lub miejscowoœci, w której mieszkasz.";
                        Agent_Speak(L_Register3PlayElementScript7_Text);

                        break;

                case "UserStateTextBox":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript8_Text = "Wpisz tutaj województwo.";
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
                                var L_Register3PlayElementScript91_Text = "Musisz wybraæ województwo.";
                                Agent_Speak(L_Register3PlayElementScript91_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript92_Text = "Aby wyœwietliæ listê województw, kliknij mysz¹ przycisk strza³ki w dó³.";
                                Agent_Speak(L_Register3PlayElementScript92_Text);

                        }

                        else if (elem.id == "selCAProvince") {
                                var L_Register3PlayElementScript93_Text = "Musisz wybraæ województwo.";
                                Agent_Speak(L_Register3PlayElementScript93_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript94_Text = "Aby wyœwietliæ listê województw, kliknij mysz¹ przycisk strza³ki w dó³.";
                                Agent_Speak(L_Register3PlayElementScript94_Text);

                        }

                        else {
                                var L_Register3PlayElementScript95_Text = "Musisz wybraæ kraj lub region, kliknij mysz¹ przycisk strza³ki w dó³.";
                                Agent_Speak(L_Register3PlayElementScript95_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript96_Text = "Aby wyœwietliæ listê krajów i regionów, kliknij mysz¹ przycisk strza³ki w dó³.";
                                Agent_Speak(L_Register3PlayElementScript96_Text);

                        }

                        Agent_Play("Explain");

                        var L_Register3PlayElementScript11_Text = "Nastêpnie dokonaj wyboru, klikaj¹c województwo, w którym mieszkasz.";
                        var L_Register3PlayElementScript12_Text = "Nastêpnie dokonaj wyboru, klikaj¹c województwo, w którym mieszkasz.";
                        var L_Register3PlayElementScript13_Text = "Nastêpnie dokonaj wyboru, klikaj¹c kraj lub region, w którym mieszkasz.";

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

                        var L_Register3PlayElementScript14_Text = "WprowadŸ tutaj swój kod pocztowy.";
                        Agent_Speak(L_Register3PlayElementScript14_Text);

                        break;

                case "UserEmailAddress":

                        if (elem.value == "") {

							if (g.document.dir == "rtl") 
								Agent_GestureAtElement(elem, "Left");
		
							else
								Agent_GestureAtElement(elem, "Right");

                            var L_Register3PlayElementScript15_Text = "Adres e-mail jest opcjonalny, ale jest to preferowana metoda kontaktu z u¿ytkownikiem.";
                            Agent_Speak(L_Register3PlayElementScript15_Text);
							
							g_bAgentRegister3ShortEmail = true;
							
							Agent_Play("Explain");
							
                            var L_Register3PlayElementScript16_Text = "Jeœli nie masz adresu e-mail, pozostaw to pole puste.";
                            Agent_Speak(L_Register3PlayElementScript16_Text);
							
							Agent_Play("Blink");
							                             
                        }
                        
                        else if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) {

	                       if (g_strAgentLastFocusID == "UserEmailAddress") {

								Agent_Play("Decline");
								
								var L_Register3PlayElementScript17_Text = "Niestety, wpis nie przypomina prawid³owego adresu e-mail.";
								Agent_Speak(L_Register3PlayElementScript17_Text);

								Agent_ExplainEmailAddress();
								
								if (g.document.dir == "rtl")
									Agent_GestureAtElement(elem, "Left");
								
								else
									Agent_GestureAtElement(elem, "Right");
                                        
								Agent_Play("Alert");
                                        
								var L_Register3PlayElementScript18_Text = "Jeœli nie masz adresu e-mail, pozostaw to pole puste.";
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
        var L_ExplainEmailAddress1_Text = "Adres e-mail zazwyczaj sk³ada siê z dwóch czêœci.";
        Agent_Speak(L_ExplainEmailAddress1_Text);

        var L_ExplainEmailAddress2_Text = "Pierwsza czêœæ to nazwa konta, po której nastêpuje symbol @. Nastêpna czeœæ to nazwa domeny.";
        Agent_Speak(L_ExplainEmailAddress2_Text);

        var L_ExplainEmailAddress3_Text = "Adres e-mail mo¿e na przyk³ad wygl¹daæ tak: %s";
        var re = /%s/i;
        var strEmail = "\\map=\"\"=\"greatcustomer@msn.com\"\\";

        Agent_Speak(L_ExplainEmailAddress3_Text.replace(re, strEmail) + "\\pau=2000\\");

        Agent_Play("RestPose");
}







function Agent_PrivacyMSAddCommands() 
{
    var L_PrivacyMSCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_PrivacyMSCommand2_Text = "Co to jest serwer bezpieczny?";
    var L_PrivacyMSCommand3_Text = "Co to jest plik coo&kie?";
    var L_PrivacyMSCommand4_Text = "&Co mam robiæ dalej?";

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
    var L_PrivacyMSAboutThisStep1_Text = "Na tym ekranie wyœwietlono zasady zachowania poufnoœci informacji firmy Microsoft.";
    Agent_Speak(L_PrivacyMSAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.privtext,"Left");

    var L_PrivacyMSAboutThisStep2_Text = "Mo¿esz przeczytaæ ca³y tekst tutaj.";
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

    var L_PrivacyMSAboutThisStep3_Text = "Kliknij przycisk Wstecz, aby powróciæ do poprzedniego ekranu.";
    Agent_Speak(L_PrivacyMSAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PrivacyMSWhatIsSecureServer()
{
    var L_PrivacyMSWhatIsSecureServer1_Text = "Serwer to komputer, który zapewnia zasoby udostêpnione, na przyk³ad informacje, innym komputerom w sieci.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer1_Text);

    var L_PrivacyMSWhatIsSecureServer2_Text = "Serwer bezpieczny to komputer tego typu z mo¿liwoœciami zapewniania transakcji bezpiecznych, gwarantuj¹cych, ¿e przechowywane na serwerze informacje nie bêd¹ dostêpne dla osób niepowo³anych.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer2_Text);

    var L_PrivacyMSWhatIsSecureServer3_Text = "Na przyk³ad, kiedy dokonujesz rejestracji w firmie Microsoft, informacje o Twoim imieniu, nazwisku i adresie s¹ przechowywane na bezpiecznym serwerze rejestracyjnym firmy Microsoft.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer3_Text);
        
    var L_PrivacyMSWhatIsSecureServer4_Text = "Dziêki temu informacje te pozostaj¹ poufne i bezpieczne, a w wyniku rejestracji nie bêd¹ kontaktowaæ siê z Tob¹ inne firmy poza firm¹ Microsoft.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer4_Text);
}

function Agent_PrivacyMSWhatIsCookie()
{
    var L_PrivacyMSWhatIsCookie1_Text = "Pliki cookie to ma³e pliki danych, przechowywane na Twoim komputerze w wyniku odwiedzania niektóych witryn sieci Web.";
    Agent_Speak(L_PrivacyMSWhatIsCookie1_Text);

    var L_PrivacyMSWhatIsCookie2_Text = "Plik cookie zawiera podstawowe informacje o Tobie, takie jak Twój adres e-mail, dziêki czemu nie musisz wprowadzaæ go ponownie podczas ka¿dorazowego odwiedzania danej witryny.";
    Agent_Speak(L_PrivacyMSWhatIsCookie2_Text);

    var L_PrivacyMSWhatIsCookie3_Text = "Jeœli na przyk³ad dokonasz zakupu w witrynie sieci Web, witryna ta mo¿e przes³aæ do Twojego komputera plik cookie zawieraj¹cy informacje o Twoim adresie wysy³kowym.";
    Agent_Speak(L_PrivacyMSWhatIsCookie3_Text);
        
    var L_PrivacyMSWhatIsCookie4_Text = "W ten sposób podczas nastêpnej wizyty w tej witrynie sieci Web nie bêdziesz potrzebowaæ ponownie wprowadzaæ tych informacji.";
    Agent_Speak(L_PrivacyMSWhatIsCookie4_Text);
        
    var L_PrivacyMSWhatIsCookie5_Text = "Kiedy rejestrujesz siê w firmie Microsoft, Twój identyfikator produktu, imiê i nazwisko oraz adres s¹ zapisywane w pliku cookie na Twoim komputerze.";
    Agent_Speak(L_PrivacyMSWhatIsCookie5_Text);
        
    var L_PrivacyMSWhatIsCookie6_Text = "Dziêki temu przy Twojej nastêpnej wizycie w witrynie sieci Web www.microsoft.com witryna rozpozna Ciê jako zarejestrowanego u¿ytkownika systemu Windows.";
    Agent_Speak(L_PrivacyMSWhatIsCookie6_Text);
}

function Agent_PrivacyMSWhatToDoNext()
{    
    Agent_GestureAtElement(g.privtext,"Left");
    
    var L_PrivacyMSWhatToDoNext1_Text = "Aby dowiedzieæ siê wiêcej na temat zasad zachowania poufnoœci informacji, kliknij w tym polu.";
    Agent_Speak(L_PrivacyMSWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.privtext,"Right");

    var L_PrivacyMSWhatToDoNext2_Text = "Nastêpnie przewiñ tekst zasad zachowania poufnoœci informacji, u¿ywaj¹c przycisków strza³ek w górê i w dó³, które znajduj¹ siê tutaj.";
    Agent_Speak(L_PrivacyMSWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_PrivacyMSWhatToDoNext3_Text = "Do przenoszenia siê w tekœcie mo¿esz tak¿e u¿ywaæ klawiszy Page Down i Page Up na klawiaturze.";
    Agent_Speak(L_PrivacyMSWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
        
    var L_PrivacyMSWhatToDoNext4_Text = "Gdy przeczytasz informacje na temat zasad zachowania poufnoœci informacji, kliknij przycisk Wstecz, aby powróciæ do poprzedniego ekranu rejestracji.";
    Agent_Speak(L_PrivacyMSWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}





function Agent_RefDialAddCommands() 
{
    var L_RefDialAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
    var L_RefDialAddCommands2_Text = "&Co mam robiæ dalej?";

    g_AgentCharacter.Commands.Add("Agent_RefDialAboutThisStep", L_RefDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialWhatToDoNext", L_RefDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RefDialAboutThisStep()
{
    var L_RefDialAboutThisStep1_Text = "W tym momencie system Windows powinien zacz¹æ wybieraæ bezp³atny numer telefonu.";
    Agent_Speak(L_RefDialAboutThisStep1_Text);

    var L_RefDialAboutThisStep2_Text = "Umo¿liwi to u¿ywanie istniej¹cego konta internetowego na tym komputerze.";
    Agent_Speak(L_RefDialAboutThisStep2_Text);
}

function Agent_RefDialWhatToDoNext()
{    
    Agent_GestureAtElement(g.btnManual,"Left");
    
    var L_RefDialWhatToDoNext1_Text = "Jeœli masz ju¿ swojego us³ugodawcê internetowego, inaczej 'ISP', lub wiesz, z us³ug którego us³ugodawcy ISP chcesz korzystaæ, kliknij ten przycisk Mam ustawienia.";
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

    var L_RefDialWhatToDoNext2_Text = "Jeœli chcesz wybraæ us³ugodawcê z listy us³ugodawców ISP dostêpnych w Twoim regionie, kliknij przycisk Dalej, aby kontynuowaæ.";
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

    var L_RefDialWhatToDoNext3_Text = "Mo¿esz te¿ klikn¹æ przycisk Pomiñ, aby kontynuowaæ bez konfigurowania dostêpu do Internetu dla tego komputera.";
    Agent_Speak(L_RefDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RefDialingAddCommands() 
{
    var L_RefDialingAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
    var L_RefDialingAddCommands2_Text = "Co to za pasek poœrodku &ekranu?";
    var L_RefDialingAddCommands3_Text = "&Co mam robiæ dalej?";

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
    var L_RefDialingAboutThisStep1_Text = "System Windows ³¹czy ten komputer z us³ug¹ referencyjn¹ Microsoft, aby pobraæ listê dostawców internetowych dostêpnych w danym regionie.";
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

    var L_RefDialingAboutThisStep3_Text = "Lub, jeœli wolisz, mo¿esz pomin¹æ ten krok lub przejœæ do poprzedniego ekranu.";
    Agent_Speak(L_RefDialingAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RefDialingWhatsThisBar()
{    
    Agent_GestureAtElement(g.tblProg,"Left");
    
    var L_RefDialingWhatsThisBar1_Text = "Pasek postêpu pokazuje, w którym miejscu procesu znajduje siê komputer.";
    Agent_Speak(L_RefDialingWhatsThisBar1_Text);

    var L_RefDialingWhatsThisBar2_Text = "Pasek wype³nia siê w miarê pobierania informacji z us³ugi referencyjnej do tego komputera.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
    
    Agent_Play("RestPose");

    var L_RefDialingWhatsThisBar3_Text = "Kiedy wszystkie informacje zostan¹ pobrane, pasek wype³ni siê ca³kowicie i automatycznie przeniesiesz siê do nastêpnego ekranu.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
}

function Agent_RefDialingWhatToDoNext()
{
    var L_RefDialingWhatToDoNext1_Text = "Czekaj, a¿ system Windows pobierze informacje o us³ugodawcach ISP z us³ugi referencyjnej Microsoft.";
    Agent_Speak(L_RefDialingWhatToDoNext1_Text);

    var L_RefDialingWhatToDoNext2_Text = "Po zakoñczeniu pobierania zostanie automatycznie wyœwietlony nastêpny ekran.";
    Agent_Speak(L_RefDialingWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingWhatToDoNext3_Text = "Jeœli chcesz pomin¹æ ten krok, kliknij przycisk Pomiñ.";
    Agent_Speak(L_RefDialingWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RegDialAddCommands()
{
    var L_RegDialAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
    var L_RegDialAddCommands2_Text = "&Co mam robiæ dalej?";

    g_AgentCharacter.Commands.Add("Agent_RegDialAboutThisStep", L_RegDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RegDialWhatToDoNext", L_RegDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RegDialAboutThisStep()
{
    var L_RegDialAboutThisStep1_Text = "System Windows u¿ywa tego komputera do wybrania bezp³atnego numeru telefonu, aby po³¹czyæ siê z us³ug¹ rejestracji.";
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

    var L_RegDialAboutThisStep3_Text = "Lub, jeœli wolisz, mo¿esz pomin¹æ ten krok lub przejœæ do poprzedniego ekranu.";
    Agent_Speak(L_RegDialAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RegDialWhatToDoNext()
{
    var L_RegDialWhatToDoNext1_Text = "Czekaj, a¿ system Windows po³¹czy siê z us³ug¹ rejestracji.";
    Agent_Speak(L_RegDialWhatToDoNext1_Text);

    var L_RegDialWhatToDoNext2_Text = "Gdy system Windows po³¹czy siê, nast¹pi automatyczne przeniesienie na nastêpny ekran.";
    Agent_Speak(L_RegDialWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialWhatToDoNext3_Text = "Jeœli chcesz pomin¹æ ten krok, kliknij przycisk Pomiñ.";
    Agent_Speak(L_RegDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigDialAddCommands()
{
    var L_MigDialAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
    var L_MigDialAddCommands2_Text = "&Co mam robiæ dalej?";

    g_AgentCharacter.Commands.Add("Agent_MigDialAboutThisStep", L_MigDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_MigDialWhatToDoNext", L_MigDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_MigDialAboutThisStep()
{
    var L_MigDialAboutThisStep1_Text = "W tym momencie system Windows powinien zacz¹æ wybieraæ bezp³atny numer telefonu.";
    Agent_Speak(L_MigDialAboutThisStep1_Text);

    var L_MigDialAboutThisStep2_Text = "Umo¿liwi to u¿ywanie istniej¹cego konta internetowego na tym komputerze.";
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
    
    var L_MigDialWhatToDoNext1_Text = "Kliknij przycisk Dalej, aby rozpocz¹æ wybieranie numeru.";
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

    var L_MigDialWhatToDoNext2_Text = "Jeœli jednak chcesz pomin¹æ ten krok, kliknij przycisk Pomiñ.";
    Agent_Speak(L_MigDialWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}





function Agent_MigListAddCommands() 
{
    
    
    
	var L_MigListAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
	var L_MigListAddCommands2_Text = "&Co mam robiæ dalej?";
	
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
    var L_MigListAboutThisStep1_Text = "Na tym ekranie mo¿esz okreœliæ us³ugodawcê internetowego, z którego us³ug chcesz skorzystaæ.";
    Agent_Speak(L_MigListAboutThisStep1_Text);

    var L_MigListAboutThisStep2_Text = "Umo¿liwi to u¿ywanie istniej¹cego konta internetowego na tym komputerze.";
    Agent_Speak(L_MigListAboutThisStep2_Text);
}

function Agent_MigListWhatToDoNext()
{
    Agent_GestureAtElement(g.selISPDropList,"Left");
    
    var L_MigListWhatToDoNext1_Text = "Wybierz swojego us³ugodawcê internetowego, klikaj¹c go na tej liœcie.";
    Agent_Speak(L_MigListWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_MigListWhatToDoNext2_Text = "Jeœli nie widzisz na tej liœcie swojego us³ugodawcy ISP, kliknij pozycjê \"Us³ugodawcy internetowego nie ma na liœcie\" u do³u listy.";
    Agent_Speak(L_MigListWhatToDoNext2_Text);

    var L_MigListWhatToDoNext3_Text = "Poproœ us³ugodawcê ISP o pomoc przy ustanowieniu ponownie konta internetowego na tym komputerze.";
    Agent_Speak(L_MigListWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_MigListWhatToDoNext4_Text = "Nastêpnie kliknij przycisk Dalej, aby kontynuowaæ.";
    Agent_Speak(L_MigListWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigPageAddCommands() 
{
	var L_MigPageAddCommands1_Text = "Powiedz mi, co robiæ &dalej";
	var L_MigPageAddCommands2_Text = "Powiedz mi coœ o tym &ekranie";
	var L_MigPageAddCommands3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";
	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_WhatToDoNext", L_MigPageAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_AboutThisStep", L_MigPageAddCommands2_Text);
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_HowToMoveOn", L_MigPageAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_MigPageCommand_WhatToDoNext() {
		
	var L_MigPageWhatToDoNext1_Text = "Po wykonaniu wszystkich czynnoœci na tej stronie.";
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
	var L_MigPageAboutThisStep1_Text = "Na tym ekranie bêdziemy próbowaæ w³¹czyæ konto internetowe u istniej¹cego us³ugodawcy internetowego.";
	Agent_Speak(L_MigPageAboutThisStep1_Text);
	
	Agent_Play("Pleased");
	
	var L_MigPageAboutThisStep2_Text = "Postêpuj zgodnie z instrukcjami na ekranie dostarczonymi przez us³ugodawcê internetowego.";
	Agent_Speak(L_MigPageAboutThisStep2_Text);
}

function Agent_MigPageCommand_HowToMoveOn() 
{
	var L_MigPageHowToMoveOn1_Text = "Po wykonaniu wszystkich czynnoœci na tym ekranie,";
	Agent_Speak(L_MigPageHowToMoveOn1_Text);		
			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

	var L_MigPageHowToMoveOn2_Text = "Kliknij przycisk Dalej, aby kontynuowaæ.";
	Agent_Speak(L_MigPageHowToMoveOn2_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPDialAddCommands() 
{
    var L_ISPDial1_Text = "&Powiedz mi coœ o tym kroku";
    var L_ISPDial2_Text = "&Co mam robiæ dalej?";

    g_AgentCharacter.Commands.Add("Agent_ISPDialAboutThisStep", L_ISPDial1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDialWhatToDoNext", L_ISPDial2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPDialAboutThisStep()
{
    var L_ISPDialAboutThisStep1_Text = "W tym momencie system Windows powinien zacz¹æ wybieraæ bezp³atny numer telefonu.";
    Agent_Speak(L_ISPDialAboutThisStep1_Text);

    var L_ISPDialAboutThisStep2_Text = "Umo¿liwi to zapisanie siê w celu uzyskania nowego konta internetowego.";
    Agent_Speak(L_ISPDialAboutThisStep2_Text);

    var L_ISPDialAboutThisStep3_Text = "Po prostu kliknij przycisk Dalej, aby kontynuowaæ.";
    Agent_Speak(L_ISPDialAboutThisStep3_Text);
}

function Agent_ISPDialWhatToDoNext()
{
    var L_ISPDialWhatToDoNext1_Text = "Kliknij przycisk Dalej, aby kontynuowaæ.";
    Agent_Speak(L_ISPDialWhatToDoNext1_Text);

    var L_ISPDialWhatToDoNext2_Text = "Mo¿esz te¿ klikn¹æ przycisk Pomiñ, aby kontynuowaæ bez konfigurowania dostêpu do Internetu dla tego komputera. Zawsze mo¿esz zrobiæ to póŸniej...";
    Agent_Speak(L_ISPDialWhatToDoNext2_Text);
}




function Agent_DialToneAddCommands()
{
    var L_DialToneAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
    var L_DialToneAddCommands2_Text = "Co zrobiæ, &jeœli chcê przenieœæ swój komputer?";
    var L_DialToneAddCommands3_Text = "&Co mam robiæ dalej?";

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
    var L_DialToneAboutThisStep1_Text = "System Windows nie mo¿e wykryæ sygna³u wybierania numeru.";
    Agent_Speak(L_DialToneAboutThisStep1_Text);

    var L_DialToneAboutThisStep2_Text = "Istnieje kilka powodów, dla których mo¿e siê tak dziaæ.";
    Agent_Speak(L_DialToneAboutThisStep2_Text);

    var L_DialToneAboutThisStep3_Text = "Po pierwsze, upewnij siê, ¿e kabel telefoniczny jest prawid³owo pod³¹czony do komputera.";
    Agent_Speak(L_DialToneAboutThisStep3_Text);

    var L_DialToneAboutThisStep4_Text = "Po drugie, upewnij siê, ¿e nikt nie próbuje w tym momencie korzystaæ z tej samej linii telefonicznej.";
    Agent_Speak(L_DialToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneAboutThisStep5_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê wybrania numeru.";
    Agent_Speak(L_DialToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_DialToneHowToMove()
{
    var L_DialToneHowToMove1_Text = "Jeœli w celu pod³¹czenia komputera do linii telefonicznej musisz go przenieœæ, upewnij siê, ¿e zasilanie jest wy³¹czone.";
    Agent_Speak(L_DialToneHowToMove1_Text);

    var L_DialToneHowToMove2_Text = "Po ponownym uruchomieniu komputera system Windows wznowi pracê w tym samym miejscu.";
    Agent_Speak(L_DialToneHowToMove2_Text);
}

function Agent_DialToneWhatToDoNext()
{
    var L_DialToneWhatToDoNext1_Text = "Najpierw sprawdŸ pod³¹czenie komputera do linii telefonicznej.";
    Agent_Speak(L_DialToneWhatToDoNext1_Text);

    var L_DialToneWhatToDoNext2_Text = "Nastêpnie sprawdŸ, czy linia telefoniczna nie jest u¿ywana.";
    Agent_Speak(L_DialToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneWhatToDoNext3_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê wybrania numeru.";
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

    var L_DialToneWhatToDoNext4_Text = "Mo¿esz te¿ klikn¹æ przycisk Pomiñ, aby kontynuowaæ bez rejestrowania lub aktywowania tej kopii systemu Windows XP.";
    Agent_Speak(L_DialToneWhatToDoNext4_Text);
    
    Agent_Play("RestPose");

    var L_DialToneWhatToDoNext5_Text = "Mo¿esz zawsze zarejestrowaæ siê póŸniej.";
    Agent_Speak(L_DialToneWhatToDoNext5_Text);
}



function Agent_CnnctErrAddCommands() 
{
    var L_CnnctErrAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
    var L_CnnctErrAddCommands2_Text = "Jak &wy³¹czyæ powiadamianie o po³¹czeniu oczekuj¹cym?";
    var L_CnnctErrAddCommands3_Text = "&Co mam robiæ dalej?";

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
    var L_CnnctErrAboutThisStep1_Text = "Twoja rozmowa telefoniczna z centrum rejestracji zosta³a przerwana.";
    Agent_Speak(L_CnnctErrAboutThisStep1_Text);

    var L_CnnctErrAboutThisStep2_Text = "Istnieje kilka powodów, dla których mo¿e siê tak dziaæ.";
    Agent_Speak(L_CnnctErrAboutThisStep2_Text);

    var L_CnnctErrAboutThisStep3_Text = "Po pierwsze, po³¹czenie mog³o nie byæ aktywnie u¿ywane przez d³u¿szy czas i dlatego zosta³o automatycznie roz³¹czone.";
    Agent_Speak(L_CnnctErrAboutThisStep3_Text);

    var L_CnnctErrAboutThisStep4_Text = "Po drugie, ktoœ móg³ próbowaæ korzystaæ z linii telefonicznej w czasie po³¹czenia.";
    Agent_Speak(L_CnnctErrAboutThisStep4_Text);

    var L_CnnctErrAboutThisStep5_Text = "Po trzecie, jeœli korzystasz z us³ugi powiadamiania o po³¹czeniu oczekuj¹cym, po³¹czenie mog³o zostaæ przerwane przez wywo³anie przychodz¹ce.";
    Agent_Speak(L_CnnctErrAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrAboutThisStep6_Text = "Jeœli us³uga telefoniczna obejmuje powiadamianie o po³¹czeniu oczekuj¹cym i znasz numer s³u¿¹cy do wy³¹czenia tej funkcji, wprowadŸ go tutaj.";
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

    var L_CnnctErrAboutThisStep7_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie, aby spróbowaæ po³¹czyæ siê ponownie.";
    Agent_Speak(L_CnnctErrAboutThisStep7_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrTurnOffCallWaiting()
{
    var L_CnnctErrTurnOffCallWaiting1_Text = "Twój dostawca us³ug telefonicznych mo¿e podaæ Ci kod s³u¿¹cy do wy³¹czania powiadamiania o po³¹czeniu oczekuj¹cym.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting1_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrTurnOffCallWaiting2_Text = "Jeœli podczas nawi¹zywania tego po³¹czenia chcesz wy³¹czyæ us³ugê powiadamiania o po³¹czeniu oczekuj¹cym, wpisz ten numer tutaj.";
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

    var L_CnnctErrTurnOffCallWaiting3_Text = "Nastêpnie kliknij przycisk Dalej.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrWhatToDoNext()
{
    var L_CnnctErrWhatToDoNext1_Text = "Po pierwsze upewnij siê, ¿e nikt inny nie korzysta z linii telefonicznej, której próbujesz u¿yæ do skontaktowania siê z firm¹ Microsoft.";
    Agent_Speak(L_CnnctErrWhatToDoNext1_Text);

    var L_CnnctErrWhatToDoNext2_Text = "Po drugie, jeœli korzystasz z funkcji powiadamiania o po³¹czeniu oczekuj¹cym, wy³¹cz j¹ tymczasowo.";
    Agent_Speak(L_CnnctErrWhatToDoNext2_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrWhatToDoNext3_Text = "W celu wy³¹czenia tej funkcji wpisz w tym polu odpowiedni kod.";
    Agent_Speak(L_CnnctErrWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_CnnctErrWhatToDoNext4_Text = "Po zakoñczonym po³¹czeniu powiadamianie o po³¹czeniu oczekuj¹cym zostanie automatycznie w³¹czone ponownie.";
    Agent_Speak(L_CnnctErrWhatToDoNext4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrWhatToDoNext5_Text = "Kiedy zechcesz spróbowaæ ponownie, kliknij przycisk Dalej.";
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

    var L_CnnctErrWhatToDoNext6_Text = "Mo¿esz te¿ klikn¹æ przycisk Pomiñ, aby kontynuowaæ bez rejestracji.";
    Agent_Speak(L_CnnctErrWhatToDoNext6_Text);
    
    Agent_Play("RestPose");
}



function Agent_HandShakeAddCommands() 
{
    var L_HandShakeAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
    var L_HandShakeAddCommands2_Text = "&Co mam robiæ dalej?";

    g_AgentCharacter.Commands.Add("Agent_HandShakeAboutThisStep", L_HandShakeAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_HandShakeWhatToDoNext", L_HandShakeAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_HandShakeAboutThisStep()
{
    var L_HandShakeAboutThisStep1_Text = "System Windows nie mo¿e akurat po³¹czyæ siê z firm¹ Microsoft.";
    Agent_Speak(L_HandShakeAboutThisStep1_Text);

    var L_HandShakeAboutThisStep2_Text = "Mo¿e to byæ spowodowane tym, ¿e linie telefoniczne s¹ zajête, lub tym, ¿e komputer nie jest w stanie ustanowiæ po³¹czenia telefonicznego.";
    Agent_Speak(L_HandShakeAboutThisStep2_Text);

    var L_HandShakeAboutThisStep3_Text = "Spróbuj poczekaæ kilka minut.";
    Agent_Speak(L_HandShakeAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_HandShakeAboutThisStep4_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê.";
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
    
    var L_HandShakeWhatToDoNext1_Text = "Poczekaj kilka minut, a nastêpnie kliknij przycisk Wybierz numer ponownie.";
    Agent_Speak(L_HandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_HandShakeWhatToDoNext2_Text = "Po kilku próbach zastosowania tego rozwi¹zania, skontaktuj siê z producentem komputera";
    Agent_Speak(L_HandShakeWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_HandShakeWhatToDoNext3_Text = "Kliknij przycisk Pomiñ, aby kontynuowaæ bez rejestracji komputera.";
    Agent_Speak(L_HandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_NoAnswerAddCommands() 
{
    var L_NoAnswerAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
    var L_NoAnswerAddCommands2_Text = "Co zrobiæ, jeœli numer &telefonu jest niepoprawny?";
    var L_NoAnswerAddCommands3_Text = "&Co mam robiæ dalej?";

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
    var L_NoAnswerAboutThisStep1_Text = "Numer telefonu, który próbujemy wybraæ, nie odpowiada.";
    Agent_Speak(L_NoAnswerAboutThisStep1_Text);

    var L_NoAnswerAboutThisStep2_Text = "SprawdŸ, czy numer wygl¹da poprawnie.";
    Agent_Speak(L_NoAnswerAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_NoAnswerAboutThisStep3_Text = "Jeœli numer wygl¹da dobrze, poczekaj kilka minut, a potem kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê.";
    Agent_Speak(L_NoAnswerAboutThisStep3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.edtPhoneNumber,"Left");

    var L_NoAnswerAboutThisStep4_Text = "Jeœli jednak numer jest niepoprawny, kliknij tutaj i popraw go.";
    Agent_Speak(L_NoAnswerAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_NoAnswerAboutThisStep5_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie.";
    Agent_Speak(L_NoAnswerAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.btnRestore,"Right");

    var L_NoAnswerAboutThisStep6_Text = "Mo¿esz zawsze przywróciæ oryginalny numer wybierany przez system Windows, klikaj¹c przycisk Przywróæ.";
    Agent_Speak(L_NoAnswerAboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_NoAnswerWhatIfWrongNumber()
{
    var L_NoAnswerWhatIfWrongNumber1_Text = "Jeœli wyœwietlony tutaj numer telefonu jest niepoprawny, kliknij pole tekstowe.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber1_Text);

    var L_NoAnswerWhatIfWrongNumber2_Text = "W polu powinna pojawiæ siê migaj¹ca pionowa linia, znana jako punkt wstawiania.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber2_Text);

    var L_NoAnswerWhatIfWrongNumber3_Text = "Wszystko, co napiszesz, bêdzie wprowadzane w punkcie wstawiania.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber3_Text);

    var L_NoAnswerWhatIfWrongNumber4_Text = "W polu tekstowym mo¿esz przenieœæ punkt wstawiania, naciskaj¹c na klawiaturze klawisz strza³ki w lewo lub strza³ki w prawo.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber4_Text);

    var L_NoAnswerWhatIfWrongNumber5_Text = "Mo¿esz u¿yæ klawisza Delete do usuwania znaków po punkcie wstawiania.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber5_Text);

    var L_NoAnswerWhatIfWrongNumber6_Text = "Mo¿esz te¿ u¿yæ klawisza Backspace do usuwania znaków przed punktem wstawiania.";
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
    
    var L_NoAnswerWhatToDoNext1_Text = "Jeœli numer telefonu zosta³ sprawdzony i wygl¹da poprawnie, kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê po³¹czenia.";
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

    var L_NoAnswerWhatToDoNext2_Text = "Aby kontynuowaæ, musisz wybraæ ponowne po³¹czenie lub pomin¹æ rejestracjê komputera w tym momencie.";
    Agent_Speak(L_NoAnswerWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}



function Agent_PulseAddCommands() 
{

    var L_PulseAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
    var L_PulseAddCommands2_Text = "&Co mam robiæ dalej?";

    g_AgentCharacter.Commands.Add("Agent_PulseAboutThisStep", L_PulseAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_PulseWhatToDoNext", L_PulseAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_PulseAboutThisStep()
{
    var L_PulseAboutThisStep1_Text = "System Windows nie mo¿e okreœliæ, czy linia telefoniczna wymaga wybierania numeru tonowego, czy impulsowego.";
    Agent_Speak(L_PulseAboutThisStep1_Text);

    var L_PulseAboutThisStep2_Text = "System Windows musi to wiedzieæ, aby mo¿na by³o kontynuowaæ.";
    Agent_Speak(L_PulseAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseAboutThisStep3_Text = "Na tym ekranie mo¿esz okreœliæ metodê wybierania numeru przez Twoj¹ liniê telefoniczn¹.";
    Agent_Speak(L_PulseAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PulseWhatToDoNext()
{
    var L_PulseWhatToDoNext1_Text = "Kliknij wewn¹trz bia³ego kó³ka z lewej strony metody wybierania numeru stosowanej przez liniê telefoniczn¹.";
    Agent_Speak(L_PulseWhatToDoNext1_Text);
    
    Agent_GestureAtElement(g.tone,"Left");

    var L_PulseWhatToDoNext2_Text = "Kliknij tutaj, jeœli linia telefoniczna korzysta z wybierania tonowego.";
    Agent_Speak(L_PulseWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseWhatToDoNext3_Text = "Lub tutaj, jeœli korzysta z wybierania impulsowego.";
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

    var L_PulseWhatToDoNext4_Text = "Nastêpnie kliknij przycisk Dalej, aby wybraæ numer ponownie.";
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

    var L_PulseWhatToDoNext5_Text = "Kliknij przycisk Pomiñ, aby kontynuowaæ bez rejestracji komputera.";
    Agent_Speak(L_PulseWhatToDoNext5_Text);
    
    Agent_Play("RestPose");
}





function Agent_TooBusyAddCommands() 
{
        var L_TooBusyAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
        var L_TooBusyAddCommands2_Text = "Co zrobiæ, jeœli numer &telefonu jest niepoprawny?";
        var L_TooBusyAddCommands3_Text = "&Co mam robiæ dalej?";

        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_AboutThisStep", L_TooBusyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatIfIncorrect", L_TooBusyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatToDoNext", L_TooBusyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_TooBusyCommand_AboutThisStep() 
{
    var L_TooBusyAboutThisStep1_Text = "Numer telefonu, który próbowaliœmy wybraæ, jest albo zajêty, albo niepoprawny.";
    Agent_Speak(L_TooBusyAboutThisStep1_Text);

    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyAboutThisStep2_Text = "SprawdŸ, czy ten numer wygl¹da poprawnie.";
    Agent_Speak(L_TooBusyAboutThisStep2_Text);
        
    Agent_Play("RestPose");

    var L_TooBusyAboutThisStep3_Text = "Jeœli wygl¹da dobrze, poczekaj kilka minut.";
    Agent_Speak(L_TooBusyAboutThisStep3_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyAboutThisStep4_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê wybrania numeru.";
    Agent_Speak(L_TooBusyAboutThisStep4_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatIfIncorrect() 
{        
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect1_Text = "Jeœli numer telefonu jest niepoprawny,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("cb_altnumber"),"Left");
    
    var L_TooBusyPhoneNumberIncorrect2_Text = " kliknij to pole wyboru";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_altnumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect3_Text = "i wprowadŸ tutaj alternatywny numer.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("cb_outsideline"),"Left");

    var L_TooBusyPhoneNumberIncorrect4_Text = "Jeœli w celu osi¹gniêcia linii zewnêtrznej potrzebujesz wybraæ jakiœ numer, kliknij to pole wyboru";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect4_Text);

    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("edt_outsideline"),"Right");

    var L_TooBusyPhoneNumberIncorrect5_Text = "i wpisz ten numer tutaj.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect5_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect6_Text = "Jeœli korzystasz z powiadamiania o po³¹czeniu oczekuj¹cym, Twoje po³¹czenie wychodz¹ce mo¿e zostaæ przerwane przez wywo³anie przychodz¹ce.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect6_Text);

    var L_TooBusyPhoneNumberIncorrect7_Text = "Mo¿esz ³atwo wy³¹czyæ us³ugê powiadamiania o po³¹czeniu oczekuj¹cym podczas nawi¹zywania tego po³¹czenia.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect7_Text);
        
    Agent_GestureAtElement(g.document.all("cb_callwaiting"),"Left");

    var L_TooBusyPhoneNumberIncorrect8_Text = "Po prostu kliknij to pole wyboru";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect8_Text);

    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_callwaiting"),"Right");

    var L_TooBusyPhoneNumberIncorrect9_Text = "i wpisz tutaj odpowiedni kod.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect9_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect10_Text = "Powiadamianie o po³¹czeniu oczekuj¹cym zostanie ponownie w³¹czone po zakoñczeniu tego po³¹czenia.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect10_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyPhoneNumberIncorrect11_Text = "Pamiêtaj, aby klikn¹æ przycisk Wybierz numer ponownie, kiedy zechcesz ponowiæ próbê.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect11_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatToDoNext() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyWhatToDoNext1_Text = "Jeœli numer telefonu zosta³ sprawdzony i wygl¹da poprawnie,";
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
    
     var L_TooBusyWhatToDoNext2_Text = "kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê po³¹czenia.";
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

    var L_TooBusyWhatToDoNext3_Text = "Mo¿esz te¿ klikn¹æ przycisk Pomiñ w celu pominiêcia tego kroku. Zawsze mo¿esz zarejestrowaæ siê po zakoñczonej konfiguracji systemu Windows.";
    Agent_Speak(L_TooBusyWhatToDoNext3_Text);
        
    Agent_Play("RestPose");
}



function Agent_ISPDToneAddCommands() 
{
    var L_ISPDToneAddCommands1_Text = "&Powiedz mi coœ o tym kroku";
    var L_ISPDToneAddCommands2_Text = "Co zrobiæ, &jeœli chcê przenieœæ swój komputer";
    var L_ISPDToneAddCommands3_Text = "&Co mam robiæ dalej?";

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
    var L_ISPDToneAboutThisStep1_Text = "System Windows nie mo¿e wykryæ sygna³u wybierania numeru.";
    Agent_Speak(L_ISPDToneAboutThisStep1_Text);

    var L_ISPDToneAboutThisStep2_Text = "Istnieje kilka powodów, dla których mo¿e siê tak dziaæ.";
    Agent_Speak(L_ISPDToneAboutThisStep2_Text);

    var L_ISPDToneAboutThisStep3_Text = "Po pierwsze, upewnij siê, ¿e kabel telefoniczny jest prawid³owo pod³¹czony do komputera.";
    Agent_Speak(L_ISPDToneAboutThisStep3_Text);

    var L_ISPDToneAboutThisStep4_Text = "Po drugie, upewnij siê, ¿e nikt nie próbuje w tym momencie korzystaæ z tej samej linii telefonicznej.";
    Agent_Speak(L_ISPDToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneAboutThisStep5_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê wybrania numeru.";
    Agent_Speak(L_ISPDToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPDToneHowToMove()
{
    var L_ISPDToneHowToMove1_Text = "Jeœli w celu pod³¹czenia komputera do linii telefonicznej musisz go przenieœæ, upewnij siê, ¿e zasilanie jest wy³¹czone.";
    Agent_Speak(L_ISPDToneHowToMove1_Text);

    var L_ISPDToneHowToMove2_Text = "Po ponownym uruchomieniu komputera system Windows wznowi pracê w tym samym miejscu.";
    Agent_Speak(L_ISPDToneHowToMove2_Text);
}

function Agent_ISPDToneWhatToDoNext()
{
    var L_ISPDToneWhatToDoNext1_Text = "Najpierw sprawdŸ pod³¹czenie komputera do linii telefonicznej.";
    Agent_Speak(L_ISPDToneWhatToDoNext1_Text);

    var L_ISPDToneWhatToDoNext2_Text = "Nastêpnie sprawdŸ, czy linia telefoniczna nie jest u¿ywana.";
    Agent_Speak(L_ISPDToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneWhatToDoNext3_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê wybrania numeru.";
    Agent_Speak(L_ISPDToneWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_ISPCnErrAddCommands() {

        var L_ISPCnErrAddCommands1_Text = "Powiedz mi, co robiæ &dalej";
        var L_ISPCnErrAddCommands2_Text = "Powiedz mi, jak &wy³¹czyæ powiadamianie o po³¹czeniu oczekuj¹cym";
        var L_ISPCnErrAddCommands3_Text = "Powiedz mi coœ o tym &ekranie";
        var L_ISPCnErrAddCommands4_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

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
        var L_ISPCnErrIntro1_Text = "Po³¹czenie telefoniczne, nawi¹zane w celu konfiguracji us³ugi internetowej, zosta³o przerwane.";
        Agent_Speak(L_ISPCnErrIntro1_Text);

        Agent_MoveToElement(g.document.all("txtBullet1"),"Left");
        
        var L_ISPCnErrIntro2_Text = "Istnieje kilka powodów, dla których mo¿e siê tak dziaæ.";
        Agent_Speak(L_ISPCnErrIntro2_Text);

        var L_ISPCnErrIntro3_Text = "Po pierwsze, po³¹czenie mog³o nie byæ aktywnie u¿ywane przez d³u¿szy czas i dlatego zosta³o automatycznie roz³¹czone.";
        Agent_Speak(L_ISPCnErrIntro3_Text);

        var L_ISPCnErrIntro4_Text = "Po drugie, ktoœ móg³ próbowaæ korzystaæ z linii telefonicznej w czasie po³¹czenia.";
        Agent_Speak(L_ISPCnErrIntro4_Text);

        var L_ISPCnErrIntro5_Text = "Po trzecie, jeœli korzystasz z us³ugi powiadamiania o po³¹czeniu oczekuj¹cym, po³¹czenie mog³o zostaæ przerwane przez wywo³anie przychodz¹ce.";
        Agent_Speak(L_ISPCnErrIntro5_Text);

        Agent_GestureAtElement(g.document.all("Callwait"),"Left");

        var L_ISPCnErrIntro6_Text = "Jeœli us³uga telefoniczna obejmuje powiadamianie o po³¹czeniu oczekuj¹cym i znasz numer wy³¹czenia tej funkcji, wprowadŸ go tutaj.";
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

        var L_ISPCnErrIntro7_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê po³¹czenia.";
        Agent_Speak(L_ISPCnErrIntro7_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("txtBullet1"),"Left");

        var L_ISPCnErrWhatToDoNext1_Text = "Jeœli wszystkie potencjalne przyczyny zosta³y ju¿ usuniête,";
        Agent_Speak(L_ISPCnErrWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPCnErrWhatToDoNext2_Text = "A chcesz spróbowaæ po³¹czyæ siê ponownie,";
        Agent_Speak(L_ISPCnErrWhatToDoNext2_Text);

        var L_ISPCnErrWhatToDoNext3_Text = "Kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê.";
        Agent_Speak(L_ISPCnErrWhatToDoNext3_Text);
}

function Agent_ISPCnErrCommand_HowToTurnOffCallWaiting() 
{
        Agent_GestureAtElement(g.document.all("Callwait"),"Left");
        
        var L_ISPCnErrHowToTurnOffCallWaiting1_Text = "Jeœli chcesz wy³¹czyæ us³ugê powiadamiania o po³¹czeniu oczekuj¹cym podczas nawi¹zywania tego po³¹czenia,";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting1_Text);

        var L_ISPCnErrHowToTurnOffCallWaiting2_Text = "WprowadŸ ten numer tutaj.";
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

        var L_ISPCnErrHowToTurnOffCallWaiting3_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie.";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_HowToMoveOn() 
{
        var L_ISPCnErrHowToMoveOn1_Text = "Aby kontynuowaæ, musisz wybraæ ponowne po³¹czenie lub pomin¹æ ten krok.";
        Agent_Speak(L_ISPCnErrHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrHowToMoveOn2_Text = "Kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê po³¹czenia.";
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

        var L_ISPCnErrHowToMoveOn3_Text = "Mo¿esz te¿ klikn¹æ przycisk Pomiñ, aby kontynuowaæ bez ponawiania próby.";
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

        var L_ISPHandShakeAddCommands1_Text = "Powiedz mi, co robiæ &dalej";
        var L_ISPHandShakeAddCommands2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_ISPHandShakeAddCommands3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_WhatToDoNext", L_ISPHandShakeAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_AboutThisScreen", L_ISPHandShakeAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_HowToMoveOn", L_ISPHandShakeAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPHandShakeIntro() {

}

function Agent_ISPHandShakeCommand_AboutThisScreen() 
{
        var L_ISPHandShakeIntro1_Text = "Nowe us³ugi kont dla wybranego us³ugodawcy internetowego s¹ aktualnie niedostêpne.";
        Agent_Speak(L_ISPHandShakeIntro1_Text);

        var L_ISPHandShakeIntro2_Text = "Nie mam pewnoœci dlaczego.";
        Agent_Speak(L_ISPHandShakeIntro2_Text);

        var L_ISPHandShakeIntro3_Text = "Mo¿esz jednak poczekaæ kilka minut i wybraæ numer ponownie";
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
        
        var L_ISPHandShakeIntro4_Text = "lub mo¿esz pomin¹æ konfiguracjê us³ugi internetowej w tym momencie.";
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

        var L_ISPHandShakeWhatToDoNext1_Text = "Poczekaj kilka minut, a nastêpnie kliknij przycisk Wybierz numer ponownie.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeWhatToDoNext2_Text = "Po kilku próbach zastosowania tego rozwi¹zania";
        Agent_Speak(L_ISPHandShakeWhatToDoNext2_Text);
        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeWhatToDoNext3_Text = "mo¿esz klikn¹æ przycisk Pomiñ, aby kontynuowaæ bez konfiguracji us³ugi internetowej w tym momencie.";
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

        var L_ISPHandShakeHowToMoveOn2_Text = "a nastêpnie kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê po³¹czenia.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeHowToMoveOn3_Text = "Jeœli te rozwi¹zania zawodz¹,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeHowToMoveOn4_Text = "Mo¿esz kontynuowaæ bez konfiguracji us³ugi internetowej w tym momencie, klikaj¹c przycisk Pomiñ.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn4_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPInsAddCommands() {

        var L_ISPInsAddCommands1_Text = "Powiedz mi, co robiæ &dalej";
        var L_ISPInsAddCommands2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_ISPInsAddCommands3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_WhatToDoNext", L_ISPInsAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_AboutThisScreen", L_ISPInsAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_HowToMoveOn", L_ISPInsAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPInsIntro() {

}

function Agent_ISPInsCommand_AboutThisScreen() 
{
        var L_ISPInsIntro1_Text = "Niestety, system Windows nie móg³ po³¹czyæ siê z Internetem za pomoc¹ us³ugi wybranego us³ugodawcy.";
        Agent_Speak(L_ISPInsIntro1_Text);

        var L_ISPInsIntro2_Text = "Jeœli masz problemy z po³¹czeniem siê z Internetem podczas u¿ywania przegl¹darki sieci Web lub przy wysy³aniu i otrzymywaniu poczty elektronicznej,";
        Agent_Speak(L_ISPInsIntro2_Text);

        var L_ISPInsIntro3_Text = "zadzwoñ po pomoc do biura obs³ugi technicznej us³ugodawcy.";
        Agent_Speak(L_ISPInsIntro3_Text);
}

function Agent_ISPInsCommand_WhatToDoNext() 
{
        var L_ISPInsWhatToDoNext1_Text = "Kliknij przycisk Dalej, aby kontynuowaæ.";
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

        var L_ISPNoAnwAddCommands1_Text = "Powiedz mi, co robiæ &dalej";
        var L_ISPNoAnwAddCommands2_Text = "Powiedz mi, co zrobiæ, jeœli numer &telefonu jest niepoprawny";
        var L_ISPNoAnwAddCommands3_Text = "Powiedz mi coœ o tym &ekranie";
        var L_ISPNoAnwAddCommands4_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoNext", L_ISPNoAnwAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect", L_ISPNoAnwAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_AboutThisScreen", L_ISPNoAnwAddCommands3_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_HowToMoveOn", L_ISPNoAnwAddCommands4_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPNoAnwCommand_AboutThisScreen() 
{
        var L_ISPNoAnwIntro1_Text = "Numer telefonu, który próbujemy wybraæ, nie odpowiada.";
        Agent_Speak(L_ISPNoAnwIntro1_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro2_Text = "SprawdŸ, czy numer wygl¹da poprawnie.";
        Agent_Speak(L_ISPNoAnwIntro2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwIntro3_Text = "Jeœli wygl¹da dobrze, poczekaj kilka minut,";
        Agent_Speak(L_ISPNoAnwIntro3_Text);

        var L_ISPNoAnwIntro4_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê.";
        Agent_Speak(L_ISPNoAnwIntro4_Text);

        var L_ISPNoAnwIntro5_Text = "Jeœli jednak numer jest niepoprawny,";
        Agent_Speak(L_ISPNoAnwIntro5_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro6_Text = "Kliknij tutaj, aby go poprawiæ.";
        Agent_Speak(L_ISPNoAnwIntro6_Text);

        Agent_Play("RestPose");

        var L_ISPNoAnwIntro7_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie.";
        Agent_Speak(L_ISPNoAnwIntro7_Text);
}

function Agent_ISPNoAnwCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwWhatToDoNext1_Text = "Jeœli numer telefonu zosta³ sprawdzony i wygl¹da poprawnie,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwWhatToDoNext2_Text = "A chcesz ponowiæ próbê po³¹czenia,";
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

        var L_ISPNoAnwPhoneNumberIncorrect1_Text = "Jeœli numer telefonu jest niepoprawny,";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect1_Text);

        var L_ISPNoAnwPhoneNumberIncorrect2_Text = "Kliknij pole tekstowe.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwPhoneNumberIncorrect3_Text = "W polu powinna pojawiæ siê migaj¹ca pionowa linia, znana jako punkt wstawiania.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect3_Text);

        var L_ISPNoAnwPhoneNumberIncorrect4_Text = "Wszystko, co napiszesz, bêdzie wprowadzane w punkcie wstawiania.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect4_Text);

        var L_ISPNoAnwPhoneNumberIncorrect5_Text = "W polu tekstowym mo¿esz przenieœæ punkt wstawiania, naciskaj¹c na klawiaturze klawisz strza³ki w lewo lub strza³ki w prawo.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect5_Text);

        var L_ISPNoAnwPhoneNumberIncorrect6_Text = "Mo¿esz u¿yæ klawisza Delete do usuwania znaków po punkcie wstawiania.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect6_Text);

        var L_ISPNoAnwPhoneNumberIncorrect7_Text = "Mo¿esz te¿ u¿yæ klawisza Backspace do usuwania znaków przed punktem wstawiania.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect7_Text);
}

function Agent_ISPNoAnwCommand_HowToMoveOn() 
{
        var L_ISPNoAnwHowToMoveOn1_Text = "Aby kontynuowaæ, musisz wybraæ ponowne po³¹czenie lub pomin¹æ konfiguracjê us³ugi internetowej.";
        Agent_Speak(L_ISPNoAnwHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwHowToMoveOn2_Text = "Kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê po³¹czenia.";
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

        var L_ISPNoAnwHowToMoveOn3_Text = "Mo¿esz te¿ klikn¹æ przycisk Pomiñ, aby kontynuowaæ bez konfiguracji us³ugi internetowej.";
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

        var L_ISPPhBsyAddCommands1_Text = "Powiedz mi, co robiæ &dalej";
        var L_ISPPhBsyAddCommands2_Text = "Powiedz mi, co zrobiæ, jeœli numer &telefonu jest niepoprawny";
        var L_ISPPhBsyAddCommands3_Text = "&Powiedz mi coœ o tym kroku";

        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoNext", L_ISPPhBsyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect", L_ISPPhBsyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_AboutThisScreen", L_ISPPhBsyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPPhBsyIntro() {

}

function Agent_ISPPhBsyCommand_AboutThisScreen() 
{
        var L_ISPPhBsyIntro1_Text = "System Windows nie mo¿e po³¹czyæ siê z wybranym us³ugodawc¹ internetowym.";
        Agent_Speak(L_ISPPhBsyIntro1_Text);

        var L_ISPPhBsyIntro2_Text ="Linia telefoniczna mo¿e byæ zajêta lub us³ugodawca internetowy ma problemy techniczne.";
        Agent_Speak(L_ISPPhBsyIntro2_Text);

        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyIntro3_Text = "SprawdŸ, czy numer wygl¹da poprawnie.";
        Agent_Speak(L_ISPPhBsyIntro3_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro4_Text = "Jeœli wygl¹da dobrze, poczekaj kilka minut.";
        Agent_Speak(L_ISPPhBsyIntro4_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPPhBsyIntro5_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê wybrania numeru.";
        Agent_Speak(L_ISPPhBsyIntro5_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro6_Text = "Jeœli jednak numer jest niepoprawny,";
        Agent_Speak(L_ISPPhBsyIntro6_Text);

        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyIntro7_Text = "Kliknij tutaj, aby wypróbowaæ alternatywny numer w ksi¹¿ce telefonicznej.";
        Agent_Speak(L_ISPPhBsyIntro7_Text);

        Agent_Play("RestPose");

        var L_ISPPhBsyIntro8_Text = "Nastêpnie kliknij przycisk Wybierz numer ponownie.";
        Agent_Speak(L_ISPPhBsyIntro8_Text);
}

function Agent_ISPPhBsyCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyWhatToDoNext1_Text = "Jeœli numer telefonu zosta³ sprawdzony i wygl¹da poprawnie,";
        Agent_Speak(L_ISPPhBsyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");    
    
        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyWhatToDoNext2_Text = "lub jeœli chcesz wybraæ numer alternatywny,";
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

        var L_ISPPhBsyWhatToDoNext4_Text = "Kliknij przycisk Wybierz numer ponownie, aby ponowiæ próbê po³¹czenia.";
        Agent_Speak(L_ISPPhBsyWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_ISPPhBsyPhoneNumberIncorrect1_Text = "Jeœli numer telefonu jest niepoprawny,";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

    var L_ISPPhBsyPhoneNumberIncorrect2_Text = "Kliknij ten przycisk opcji, aby wypróbowaæ alternatywny numer w ksi¹¿ce telefonicznej.";
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

    var L_ISPPhBsyPhoneNumberIncorrect3_Text = "Kliknij przycisk Wybierz numer ponownie, kiedy zechcesz ponowiæ próbê po³¹czenia.";
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

    var L_FinishAddCommands1_Text = "&Powiedz mi coœ o tym kroku";  
    var L_FinishAddCommands2_Text = "Ja&k wykonaæ rejestracjê z pulpitu?";    
    var L_FinishAddCommands3_Text = "Jak &wykonaæ aktywacjê systemu Windows z pulpitu?";    
    var L_FinishAddCommands4_Text = "Jak uzyskam dostêp do &Internetu?";    
    var L_FinishAddCommands5_Text = "&Co mam robiæ dalej?";

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
    var L_FinishAboutThisStep1_Text = "Gratulacje! Wszystkie czynnoœci zosta³y wykonane!";
    Agent_Speak(L_FinishAboutThisStep1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishAboutThisStep2_Text = "Aby teraz zacz¹æ u¿ywaæ systemu Windows, po prostu kliknij przycisk Zakoñcz.";
    Agent_Speak(L_FinishAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_FinishAboutThisStep3_Text = "Aby odbyæ fascynuj¹c¹ podró¿ i odkryæ nowe funkcje systemu Windows XP, kliknij polecenie Pomoc i obs³uga techniczna w menu Start, a nastêpnie wpisz \"samouczek\" w polu Wyszukaj.";
    Agent_Speak(L_FinishAboutThisStep3_Text);
}

function Agent_FinishHowToRegister() 
{
    var L_FinishHowToRegister1_Text = "Jeœli wczeœniej w tym procesie zosta³a pominiêta rejestracja, mo¿esz zarejestrowaæ tê kopiê systemu Windows w dowolnym czasie, klikaj¹c w menu Start polecenie Uruchom i wpisuj¹c regwiz /r.";
    Agent_Speak(L_FinishHowToRegister1_Text);
        
    var L_FinishHowToRegister2_Text = "Jeœli zapomnisz te kroki, kliknij polecenie Pomoc i obs³uga techniczna w menu Start, aby znaleŸæ odpowiedzi na pytania i inne wartoœciowe informacje.";
    Agent_Speak(L_FinishHowToRegister2_Text);
}

function Agent_FinishHowToActivate() 
{
    var L_FinishHowToActivate1_Text = "Jeœli wczeœniej w tym procesie zosta³a pominiêta aktywacja, co kilka dni na pulpicie systemu Windows bêdzie siê pojawiaæ ma³e przypomnienie.";
    Agent_Speak(L_FinishHowToActivate1_Text);
        
    var L_FinishHowToActivate2_Text = "Aby móc dalej u¿ywaæ systemu Windows, musisz wykonaæ jego aktywacjê w ci¹gu wyznaczonego okresu aktywacji.";
    Agent_Speak(L_FinishHowToActivate2_Text);

    var L_FinishHowToActivate3_Text = "Jeœli nie chcesz czekaæ na przypomnienie, mo¿esz uruchomiæ Kreatora aktywacji produktu, klikaj¹c w menu Start polecenie Aktywacja systemu Windows.";
    Agent_Speak(L_FinishHowToActivate3_Text);

    var L_FinishHowToActivate4_Text = "Jeœli zapomnisz te kroki, kliknij polecenie Pomoc i obs³uga techniczna w menu Start, aby znaleŸæ odpowiedzi na pytania i inne wartoœciowe informacje.";
    Agent_Speak(L_FinishHowToActivate4_Text);
}

function Agent_FinishHowToAccessInternet() 
{
    var L_FinishHowToAccessInternet1_Text = "Jeœli ten komputer ma ju¿ skonfigurowany dostêp do Internetu, po prostu kliknij polecenie Internet u góry menu Start na pulpicie systemu Windows.";
    Agent_Speak(L_FinishHowToAccessInternet1_Text);
        
    var L_FinishHowToAccessInternet2_Text = "Jeœli ten komputer nie jest skonfigurowany do dostêpu do Internetu, zostanie wyœwietlony Kreator po³¹czeñ internetowych.";
    Agent_Speak(L_FinishHowToAccessInternet2_Text);

    var L_FinishHowToAccessInternet3_Text = "Wykonaj instrukcje tego kreatora w celu po³¹czenia siê z Internetem.";
    Agent_Speak(L_FinishHowToAccessInternet3_Text);
}

function Agent_FinishWhatToDoNext() 
{
    var L_FinishWhatToDoNext1_Text = "Konfigurowanie systemu Microsoft Windows XP na tym komputerze dobieg³o koñca!";
    Agent_Speak(L_FinishWhatToDoNext1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishWhatToDoNext2_Text = "Po prostu kliknij przycisk Zakoñcz.";
    Agent_Speak(L_FinishWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_FinishWhatToDoNext3_Text = "Aby odbyæ fascynuj¹c¹ podró¿ i odkryæ nowe funkcje systemu Windows XP, kliknij polecenie Pomoc i obs³uga techniczna w menu Start, a nastêpnie wpisz \"samouczek\" w polu Wyszukaj.";
    Agent_Speak(L_FinishWhatToDoNext3_Text);

    var L_FinishWhatToDoNext4_Text = "¯yczymy Ci mi³ego korzystania z systemu Windows XP!";
    Agent_Speak(L_FinishWhatToDoNext4_Text);
}






function Agent_MouseTutAddCommands() {

        var L_MouseTutMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_MouseTutMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_MouseTutMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        
        
        

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

        var L_MouseTutIntroTellMeWhatToDoNext1_Text = "Aby rozpocz¹æ, kliknij przycisk Samouczek.";
        Agent_Speak(L_MouseTutIntroTellMeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutTellMeAboutThisScreen() 
{
        var L_MouseTutTellMeAboutThisScreen1_Text = "To jest pocz¹tek zestawu ekranów, u³atwiaj¹cych naukê korzystania z myszy.";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen1_Text);

        var L_MouseTutTellMeAboutThisScreen2_Text = "Mo¿esz wybraæ opcjê skorzystania z tego samouczka";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen2_Text);

        var L_MouseTutTellMeAboutThisScreen3_Text = "lub mo¿esz j¹ pomin¹æ, jeœli umiesz ju¿ pos³ugiwaæ siê mysz¹ .";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen1_Text = "Aby rozpocz¹æ, kliknij przycisk Samouczek.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text = "Mo¿esz te¿ klikn¹æ przycisk Dalej, aby pomin¹æ samouczek.";
        Agent_Speak(L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_MouseTutAAddCommands() {

        var L_MouseTutAMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_MouseTutAMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_MouseTutAMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeWhatToDoNext", L_MouseTutAMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeAboutThisScreen", L_MouseTutAMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeHowToMoveToNextScreen", L_MouseTutAMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutATellMeWhatToDoNext() 
{
        var L_MouseTutAWhatToDoNext1_Text = "Spróbuj przesuwaæ mysz i zobacz, jak wskaŸnik przenosi siê na ekranie.";
        Agent_Speak(L_MouseTutAWhatToDoNext1_Text);

        var L_MouseTutAWhatToDoNext2_Text = "Upewnij siê, ¿e przesuwasz mysz po p³askiej powierzchni.";
        Agent_Speak(L_MouseTutAWhatToDoNext2_Text);
}

function Agent_OnMouseTutATellMeAboutThisScreen() 
{

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutATellMeAboutThisScreen1_Text = "Ten ekran pokazuje, jak u¿ywaæ myszy do przenoszenia wskaŸnika po ekranie.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutATellMeAboutThisScreen2_Text = "Po prostu przesuwaj mysz w lewo i w prawo oraz w kierunku do i od komputera.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen2_Text);

        var L_MouseTutATellMeAboutThisScreen3_Text = "Spróbuj to zrobiæ samodzielnie!";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen3_Text);
}

function Agent_OnMouseTutATellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutBAddCommands() {

        var L_MouseTutBMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_MouseTutBMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_MouseTutBMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeWhatToDoNext", L_MouseTutBMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeAboutThisScreen", L_MouseTutBMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeHowToMoveToNextScreen", L_MouseTutBMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutBTellMeWhatToDoNext() 
{
        var L_MouseTutBWhatToDoNext1_Text = "Spróbuj podnieœæ mysz i przenieœ j¹ w inne po³o¿enie.";
        Agent_Speak(L_MouseTutBWhatToDoNext1_Text);

        var L_MouseTutBWhatToDoNext2_Text = "Nastêpnie po³ó¿ j¹ z powrotem i przesuñ j¹ koliœcie.";
        Agent_Speak(L_MouseTutBWhatToDoNext2_Text);
}

function Agent_OnMouseTutBTellMeAboutThisScreen() 
{
        var L_MouseTutBTellMeAboutThisScreen1_Text = "Ten ekran pokazuje, jak dopasowaæ po³o¿enie myszy, gdy nie ma ju¿ miejsca .";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen1_Text);

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutBTellMeAboutThisScreen2_Text = "Po prostu podnieœ mysz i przenieœ j¹ w wygodniejsze miejsce.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen2_Text);

        Agent_Play("RestPose");

        var L_MouseTutBTellMeAboutThisScreen3_Text = "Gdy po³o¿ysz mysz z powrotem i przesuniesz j¹, wskaŸnik bêdzie porusza³ siê zgodnie z tymi ruchami.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen3_Text);

        var L_MouseTutBTellMeAboutThisScreen4_Text = "Zauwa¿, ¿e wskaŸnik przenosi siê tylko wtedy, gdy przesuwasz mysz po p³askiej powierzchni!";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutBTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutCAddCommands() {

        var L_MouseTutCMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_MouseTutCMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_MouseTutCMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeWhatToDoNext", L_MouseTutCMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeAboutThisScreen", L_MouseTutCMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeHowToMoveToNextScreen", L_MouseTutCMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_MouseTutCIntro() {
        
}

function Agent_OnMouseTutCTellMeWhatToDoNext() 
{
        var L_MouseTutCWhatToDoNext1_Text = "Spróbuj przesuwaæ mysz, aby przenosiæ wskaŸnik nad przyciskami graficznymi na ekranie.";
        Agent_Speak(L_MouseTutCWhatToDoNext1_Text);
}

function Agent_OnMouseTutCTellMeAboutThisScreen() 
{
        var L_MouseTutCTellMeAboutThisScreen1_Text = "Ten ekran umo¿liwia æwiczenie poruszania wskaŸnikiem za pomoc¹ myszy.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutCTellMeAboutThisScreen2_Text = "U¿yj myszy, aby przenosiæ wskaŸnik nad tymi przyciskami graficznymi.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutCTellMeAboutThisScreen3_Text = "Zauwa¿, ¿e gdy przenosisz wskaŸnik nad przyciskiem, zmienia on swój wygl¹d!";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen3_Text);

        var L_MouseTutCTellMeAboutThisScreen4_Text = "Przycisk powraca do oryginalnego wygl¹du po przeniesieniu wskaŸnika poza obraz.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutCTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutDAddCommands() {

        var L_MouseTutDMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_MouseTutDMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_MouseTutDMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeWhatToDoNext", L_MouseTutDMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeAboutThisScreen", L_MouseTutDMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeHowToMoveToNextScreen", L_MouseTutDMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutDTellMeWhatToDoNext() 
{
        var L_MouseTutDWhatToDoNext1_Text = "Wypróbuj klikanie lewym przyciskiem myszy.";
        Agent_Speak(L_MouseTutDWhatToDoNext1_Text);
}

function Agent_OnMouseTutDTellMeAboutThisScreen() 
{
        var L_MouseTutDTellMeAboutThisScreen1_Text = "Ta czêœæ samouczka myszy jest poœwiêcona nauce klikania.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen1_Text);

        var elem = g.document.all("image");

        Agent_MoveToElement(elem, "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen2_Text = "Aby wybraæ element na ekranie, u¿yj myszy do przeniesienia wskaŸnika nad element,";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen2_Text);

        Agent_GestureAtElement(g.document.all("image"), "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen3_Text = "nastêpnie naciœnij i zwolnij przycisk myszy, tak jak to tutaj pokazano.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutDTellMeAboutThisScreen4_Text = "To jest w³aœnie klikanie!";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutDTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutEAddCommands() {

        var L_MouseTutEMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_MouseTutEMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_MouseTutEMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeWhatToDoNext", L_MouseTutEMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeAboutThisScreen", L_MouseTutEMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeHowToMoveToNextScreen", L_MouseTutEMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutETellMeWhatToDoNext() 
{
        var L_MouseTutEWhatToDoNext1_Text = "Æwicz klikanie lewym przyciskiem myszy na przyciskach graficznych na ekranie.";
        Agent_Speak(L_MouseTutEWhatToDoNext1_Text);
}

function Agent_OnMouseTutETellMeAboutThisScreen() 
{
        var L_MouseTutETellMeAboutThisScreen1_Text = "Ten ekran umo¿liwi æwiczenie klikania mysz¹.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutETellMeAboutThisScreen2_Text = "U¿yj myszy do wskazania tych przycisków graficznych.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutETellMeAboutThisScreen3_Text = "Nastêpnie kliknij lewym przyciskiem myszy.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen3_Text);

        var L_MouseTutETellMeAboutThisScreen4_Text = "Nastêpnie wypróbuj inne przyciski graficzne.";
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

        var L_MouseTutFMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_MouseTutFMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_MouseTutFMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

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

        var L_MouseTutFTellMeAboutThisScreen2_Text = "Jak dotychczas u¿ytkownik nauczy³ siê, jak wskazywaæ i klikaæ mysz¹.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen2_Text);

        var L_MouseTutFTellMeAboutThisScreen3_Text = "Teraz poæwiczysz te umiejêtnoœci, wykonuj¹c czynnoœci na innych elementach, które znajdziesz w systemie Windows lub na stronach sieci Web.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen3_Text);

        var L_MouseTutFTellMeAboutThisScreen4_Text = "Jeœli mo¿esz siê ju¿ przenieœæ, kliknij przycisk Dalej.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutFTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutGAddCommands() {

        var L_MouseTutGMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_MouseTutGMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_MouseTutGMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeWhatToDoNext", L_MouseTutGMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeAboutThisScreen", L_MouseTutGMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeHowToMoveToNextScreen", L_MouseTutGMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutGPreDisplayMenu() {

        if (g.btnNext.disabled) {

                var L_MouseTutGMenuCommand4_Text = "Powiedz mi, dl&aczego przycisk Dalej jest niedostêpny";

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
        var L_MouseTutGWhyNextNotAvailable1_Text = "Przycisk Dalej jest niedostêpny, poniewa¿ nie wybrano jeszcze miasta.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable1_Text);

		Agent_GestureAtElement(g.document.all("selCity"),"LeftCenter");

        var L_MouseTutGWhyNextNotAvailable2_Text = "Najpierw musisz klikn¹æ jedno z tych miast.";
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

        var L_MouseTutGWhyNextNotAvailable3_Text = "Nastêpnie mo¿esz klikn¹æ przycisk Dalej, aby kontynuowaæ.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeWhatToDoNext() {
		
		if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "RightCenter");

        var L_MouseTutGWhatToDoNext1_Text = "Klikaj strza³ki w górê i w dó³, aby przewijaæ listê miast.";
        Agent_Speak(L_MouseTutGWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

		if (g.document.dir == "rtl")
			Agent_Play("RestPose");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGWhatToDoNext2_Text = "Nastêpnie wybierz miasto, klikaj¹c jego nazwê.";
        Agent_Speak(L_MouseTutGWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutGWhatToDoNext3_Text = "Nastêpnie spróbuj klikaæ inne miasta na liœcie!";
        Agent_Speak(L_MouseTutGWhatToDoNext3_Text);

        Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
}

function Agent_OnMouseTutGTellMeAboutThisScreen() {
        var L_MouseTutGTellMeAboutThisScreen1_Text = "Na tym ekranie mo¿esz poæwiczyæ klikanie, s³u¿¹ce do wybierania elementu z listy.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGTellMeAboutThisScreen2_Text = "Gdy klikniesz miasto na liœcie,";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");
		
        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("imgTable"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("imgTable"), "RightCenter");

        var L_MouseTutGTellMeAboutThisScreen3_Text = "Jego obraz pojawi siê tutaj.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeHowToMoveToNextScreen() {

        if (g.btnNext.disabled) {

                Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

                var L_MouseTutGHowToMoveToNextScreen1_Text = "Musisz klikn¹æ miasto tutaj.";
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

                var L_MouseTutGHowToMoveToNextScreen2_Text = "Nastêpnie kliknij przycisk Dalej.";
                Agent_Speak(L_MouseTutGHowToMoveToNextScreen2_Text);
    
                Agent_Play("RestPose");
        }

        else
                MouseTut_HowToMoveToNextScreen();

}




function Agent_MouseTutHAddCommands() {

        var L_MouseTutHMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_MouseTutHMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_MouseTutHMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeWhatToDoNext", L_MouseTutHMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeAboutThisScreen", L_MouseTutHMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeHowToMoveToNextScreen", L_MouseTutHMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutHTellMeWhatToDoNext() {

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHWhatToDoNext1_Text = "Wybierz jedn¹ z opcji, klikaj¹c kó³ko obok niej.";
        Agent_Speak(L_MouseTutHWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutHWhatToDoNext2_Text = "Zmieni to wygl¹d obrazu.";
        Agent_Speak(L_MouseTutHWhatToDoNext2_Text);

        var L_MouseTutHWhatToDoNext3_Text = "Nastêpnie wypróbuj klikanie innej opcji!";
        Agent_Speak(L_MouseTutHWhatToDoNext3_Text);
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeAboutThisScreen() {
        var L_MouseTutHTellMeAboutThisScreen1_Text = "Na tym ekranie mo¿esz poæwiczyæ, jak wybraæ opcjê, gdy mo¿na dokonaæ tylko jednego wyboru na raz.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHTellMeAboutThisScreen2_Text = "Gdy klikniesz kó³ka tutaj,";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("cityImg"), "LeftCenter");
        else
			Agent_GestureAtElement(g.document.all("cityImg"), "RightCenter");

        var L_MouseTutHTellMeAboutThisScreen3_Text = "zmieni siê sposób wygl¹du obrazów.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutIAddCommands() {

        var L_MouseTutIMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_MouseTutIMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_MouseTutIMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeWhatToDoNext", L_MouseTutIMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeAboutThisScreen", L_MouseTutIMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeHowToMoveToNextScreen", L_MouseTutIMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutITellMeWhatToDoNext() {

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutIWhatToDoNext1_Text = "Kliknij jedn¹ lub kilka opcji tutaj i zobacz na obrazie, jakie s¹ tego wyniki.";
        Agent_Speak(L_MouseTutIWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutIWhatToDoNext2_Text = "Kliknij opcjê ponownie, aby j¹ wyczyœciæ.";
        Agent_Speak(L_MouseTutIWhatToDoNext2_Text);

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeAboutThisScreen() {
        var L_MouseTutITellMeAboutThisScreen1_Text = "Czasami mo¿esz wybraæ wiele opcji w zestawie wyborów.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen1_Text);

        var L_MouseTutITellMeAboutThisScreen2_Text = "Na tym ekranie mo¿esz wybraæ ró¿ne style wyœwietlania dla obrazu.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen2_Text);

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutITellMeAboutThisScreen3_Text = "Po prostu kliknij pola obok opcji znajduj¹cych siê tutaj.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutJAddCommands() {

        var L_MouseTutJMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_MouseTutJMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_MouseTutJMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

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

        var L_MouseTutJWhatToDoNext2_Text = "i wpisz tekst, który ma pojawiaæ siê jako podpis.";
        Agent_Speak(L_MouseTutJWhatToDoNext2_Text);
}

function Agent_OnMouseTutJTellMeAboutThisScreen() {
        var L_MouseTutJTellMeAboutThisScreen1_Text = "Czasami mo¿esz dostosowaæ wybór, u¿ywaj¹c w³asnych s³ów.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen1_Text);

        var L_MouseTutJTellMeAboutThisScreen2_Text = "Na tym ekranie mo¿esz wpisaæ podpis do obrazu.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen2_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(g.document.all("caption"), "Left");
		else
			Agent_GestureAtElement(g.document.all("CaptionLabel"), "Left");

        var L_MouseTutJTellMeAboutThisScreen3_Text = "Po prostu kliknij pole tutaj i wpisz swój podpis.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutJTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutKAddCommands() {

        var L_MouseTutKMenuCommand1_Text = "Powiedz mi, co robiæ &dalej";
        var L_MouseTutKMenuCommand2_Text = "Powiedz mi coœ o tym &ekranie";
        var L_MouseTutKMenuCommand3_Text = "Powiedz mi, jak przenieœæ siê na &nastêpny ekran";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeWhatToDoNext", L_MouseTutKMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeAboutThisScreen", L_MouseTutKMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeHowToMoveToNextScreen", L_MouseTutKMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutKTellMeWhatToDoNext() {
        var L_MouseTutKWhatToDoNext1_Text = "Gratulacje! Samouczek myszy zosta³ zakoñczony!";
        Agent_Speak(L_MouseTutKWhatToDoNext1_Text);

        var L_MouseTutKWhatToDoNext2_Text = "kliknij przycisk Dalej, aby przejœæ do nastêpnego ekranu.";
        Agent_Speak(L_MouseTutKWhatToDoNext2_Text);
}

function Agent_OnMouseTutKTellMeAboutThisScreen() {
        var L_MouseTutKTellMeAboutThisScreen1_Text = "Wspaniale! Obraz z wakacji jest gotowy!";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen1_Text);
        
        var L_MouseTutKTellMeAboutThisScreen2_Text = "Samouczek myszy zosta³ zakoñczony.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen2_Text);

        var L_MouseTutKTellMeAboutThisScreen3_Text = "Aby uzyskaæ wiêcej informacji na temat takich umiejêtnoœci, jak przeci¹ganie, zmiana rozmiaru i u¿ywanie prawego przycisku myszy, zapoznaj siê z treœci¹ Pomocy, gdy system Windows zostanie uruchomiony po raz pierwszy.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutKTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function MouseTut_WhatToDoNext() 
{
        var L_MouseTutTellMeWhatToDoNext1_Text = "Po prostu kliknij przycisk Dalej, aby przejœæ do nastêpnego ekranu";
        Agent_Speak(L_MouseTutTellMeWhatToDoNext1_Text);

        var L_MouseTutTellMeWhatToDoNext2_Text = "Mo¿esz te¿ klikn¹æ przycisk Pomiñ, aby pomin¹æ resztê samouczka.";
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

        var L_MouseTutTellMeHowToMoveToNextScreen1_Text = "Kliknij przycisk Dalej, aby przenieœæ siê na nastêpny ekran.";
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

        var L_MouseTutTellMeHowToMoveToNextScreen2_Text = "Mo¿esz te¿ klikn¹æ przycisk Pomiñ, aby pomin¹æ samouczek.";
        Agent_Speak(L_MouseTutTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_2nicsAddCommands() 
{
    var L_2nicsMenuCommand1_Text = "&Powiedz mi coœ o tym kroku";
    
    g_AgentCharacter.Commands.Add("Agent_On2nicsAboutThisStep", L_2nicsMenuCommand1_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_On2nicsAboutThisStep() 
{
    var L_2nicsAboutThisScreen1_Text = "Ten ekran wyjaœnia, ¿e Twój komputer mo¿e ³¹czyæ siê z Internetem na wiêcej sposobów ni¿ jeden.";
	Agent_Speak(L_2nicsAboutThisScreen1_Text);
	
    var L_2nicsAboutThisScreen2_Text = "Mo¿esz wybraæ, którego po³¹czenia zechcesz u¿ywaæ, po zakoñczonej konfiguracji systemu Windows.";
	Agent_Speak(L_2nicsAboutThisScreen2_Text);
}



function Agent_UserNameAddCommands() 
{
    var L_UserNameCommand1_Text = "&Powiedz mi coœ o tym kroku";
    var L_UserNameCommand2_Text = "&Gdzie pojawia siê moje imiê?";
    var L_UserNameCommand3_Text = "&Jak mogê zmieniæ moje imiê póŸniej?";
    var L_UserNameCommand4_Text = "&Co mam robiæ dalej?";
    
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
    var L_UserNameAboutThisStep1_Text = "Na tym ekranie podajesz swoj¹ to¿samoœæ w postaci imienia i nazwiska, dziêki czemu system Windows bêdzie rozpoznawa³ Ciê po zalogowaniu.";
	Agent_Speak(L_UserNameAboutThisStep1_Text);
}

function Agent_OnUserNameWhereIsName() 
{
    var L_UserNameWhereIsName1_Text = "Twoje imiê bêdzie wyœwietlane na ekranie powitalnym, który pojawia siê podczas uruchamiania systemu Windows.";
	Agent_Speak(L_UserNameWhereIsName1_Text);
	
    var L_UserNameWhereIsName2_Text = "Bêdzie ono tak¿e wyœwietlane u góry menu Start, kiedy siê zalogujesz.";
	Agent_Speak(L_UserNameWhereIsName2_Text);
	
    var L_UserNameWhereIsName3_Text = "Jeœli ktoœ inny zaloguje siê na Twoim komputerze i otworzy folder Moje dokumenty, Twoje imiê pojawi siê w nazwie folderu.";
	Agent_Speak(L_UserNameWhereIsName3_Text);
	
    var L_UserNameWhereIsName4_Text = "Nazwa folderu zostanie na przyk³ad wyœwietlona jako \"Adam - dokumenty\", tak aby inni u¿ytkownicy wiedzieli, ¿e dany folder nale¿y do Adama.";
	Agent_Speak(L_UserNameWhereIsName4_Text);
	
    var L_UserNameWhereIsName5_Text = "Twoje imiê bêdzie równie¿ pojawia³o siê na liœcie u¿ytkowników, któr¹ mo¿esz wyœwietliæ, klikaj¹c w menu Start polecenie Panel sterowania, a nastêpnie klikaj¹c aplet Konta u¿ytkowników.";
	Agent_Speak(L_UserNameWhereIsName5_Text);
}

function Agent_OnUserNameHowToChangeName() 
{
    var L_UserNameHowToChangeName1_Text = "Aby zmieniæ swoje imiê po zalogowaniu siê w systemie Windows, kliknij w menu Start polecenie Panel sterowania.";
	Agent_Speak(L_UserNameHowToChangeName1_Text);
	
    var L_UserNameHowToChangeName2_Text = "Nastêpnie kliknij aplet Konta u¿ytkowników.";
	Agent_Speak(L_UserNameHowToChangeName2_Text);
	
    var L_UserNameHowToChangeName3_Text = "Uzyskasz mo¿liwoœæ zmiany swojego imienia, a tak¿e imion innych u¿ytkowników tego komputera.";
	Agent_Speak(L_UserNameHowToChangeName3_Text);
}

function Agent_OnUserNameWhatToDoNext() 
{
    var L_UserNameWhatToDoNext1_Text = "Kliknij przycisk Dalej, aby spróbowaæ ponownie po³¹czyæ siê z Internetem.";
	Agent_Speak(L_UserNameWhatToDoNext1_Text);
	
    var L_UserNameWhatToDoNext2_Text = "Mo¿esz te¿ klikn¹æ przycisk Pomiñ, aby kontynuowaæ bez ³¹czenia siê z Internetem.";
	Agent_Speak(L_UserNameWhatToDoNext2_Text);
}
