



var L_PhoneNumberLegit_Text = "\\map=\"one \\pau=100\\ eight hundred R U le jit\"=\"1-800-R U LEGIT\"\\";


var g_strRegionSetting = "";
var g_strKeyboardSetting = "";
var g_strLangSetting = " ";



function Agent_AddCommonCommands() 
{
    g_AgentCharacter.Commands.RemoveAll();

    var L_AddCommonCommands1_Text = "Z&avrie� ponuku";

    g_AgentCharacter.Commands.Add("CloseMenu", L_AddCommonCommands1_Text);
        
    if (g_bAgentShowSpecialISPCommands) 
    {
        
		var L_AddCommonCommands2_Text = "Chcem inform�cie o z�pise &do siete Internet.";
		var L_AddCommonCommands3_Text = "Znovu &spusti� z�pis do siete Internet";
		var L_AddCommonCommands4_Text = "&Vynecha� z�pis do siete Internet";

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
        var L_AddAssistantanceCommand1_Text = "Koho &m�m zavola� na �al�iu pomoc?";       

        g_AgentCharacter.Commands.Add("Agent_OnCommand_AboutAssistance", L_AddAssistantanceCommand1_Text);
    }
}

function Agent_OnCommand_AboutAssistance() 
{

    Agent_StopAll();

    var L_AboutAssistance1_Text = "Obr�te sa na v�robcu po��ta�a na adrese %s.";
    var re = /%s/i;
    var L_AboutAssistance2_Text = "Obr�te sa na v�robcu po��ta�a.";

    
    

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
            Agent_Speak(L_AboutAssistance2_Text);
    else
            Agent_Speak(L_AboutAssistance1_Text.replace(re, strPhoneNumber));

    Agent_Play("ReadReturn");
}

function Agent_AddWhatToDoNextCommand() 
{
    var L_AddWhatToDoNextCommand1_Text = "Ako m�m p&okra�ova� �alej?";
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

        var L_WhatToDoNext1_Text = "Ak chcete pokra�ova�, kliknite na tla�idlo �alej.";
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

        var L_WhatToDoNext2_Text = "Ak sa chcete vr�ti� k predch�dzaj�cemu kroku, kliknite na tla�idlo Nasp�.";
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

        var L_WhatToDoNext3_Text = "Ak chcete tento krok vynecha�, kliknite na tla�idlo Presko�i�.";
        Agent_Speak(L_WhatToDoNext3_Text);
        
        Agent_Play("RestPose");
    }       
}

function Agent_DoSpecialISPCommand1() 
{
	
	
			
	Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
			
	var L_ISPSpecialTellMeAboutInternetSignup1_Text = "Moment�lne vykon�vate z�pis pre pr�stup na Internet.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup1_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup2_Text = "Ak m�te probl�m pokra�ova� v pr�ci, kliknite na m�a, alebo stla�te kl�ves F1";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup2_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup3_Text = "a ja zobraz�m vo svojej ponuke pr�kazy, ktor� v�m umo�nia znovu za�a� alebo prejs� na �al�iu �as�.";
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

    var L_EncourageNextButton1_Text = "Kliknite na tla�idlo �alej. | Sta�� klikn�� na tla�idlo �alej! | Kliknite, pros�m, na tla�idlo �alej. | Kliknut�m na tla�idlo �alej prejdite na �al�� krok.";
    Agent_Speak(L_EncourageNextButton1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnF1() 
{
    var L_OnF1_Text = "Ako v�m m��em pom�c�? | ��m v�m posl��im?";
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

    var L_PreWelcomeScript1_Text = "V�ta v�s syst�m Windows XP!";
    Agent_Speak(L_PreWelcomeScript1_Text);

    var L_PreWelcomeScript2_Text = "Mojou �lohou je pom�c� pri in�tal�cii po��ta�a.";
    Agent_Speak(L_PreWelcomeScript2_Text);

    var L_PreWelcomeScript3_Text = "M��em priebe�ne vysvet�ova� postup.";
    Agent_Speak(L_PreWelcomeScript3_Text);
                
    Agent_MoveToElement(document.all("AssistImg"), "LeftCenter"); 
    
    

    var L_PreWelcomeScript4_Text = "Kedyko�vek potrebujete pomoc, jednoducho na m�a kliknite my�ou alebo stla�te kl�ves F1.";
    Agent_Speak(L_PreWelcomeScript4_Text);
    
    Agent_Play("PointLeft");

    var L_PreWelcomeScript5_Text = "Budem tu, ke� ma budete potrebova�.";
    Agent_Speak(L_PreWelcomeScript5_Text);
    
    Agent_Play("RestPose");

    g_AgentRequestHideImage = g_AgentCharacter.Hide();
}



function Agent_WelcomeAddCommands() 
{
    
    
    

    var L_WelcomeAddCommands1_Text = "&Chcem inform�cie o tomto postupe.";
    var L_WelcomeAddCommands2_Text = "Ako m�m p&okra�ova� �alej?";

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

    var L_WelcomeWhatToDoNext1_Text = "Ak ste pripraven� za�a�, kliknite na tla�idlo �alej.";
    Agent_Speak(L_WelcomeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnWelcomeCommand_AboutProcess() 
{
    Agent_StopAll();

    var L_AboutProcess1_Text = "Za mnou m��ete vidie� prv� zo s�rie obrazoviek, ktor� v�m bud� pom�ha� pri nastaven� po��ta�a pod�a vlastn�ch po�iadaviek.";
    Agent_Speak(L_AboutProcess1_Text);

    var L_AboutProcess2_Text = "Jednotliv� obrazovky sl��ia na zadanie vo�by alebo ur�it�ch inform�ci� alebo informuj� o �al�om postupe.";
    Agent_Speak(L_AboutProcess2_Text);

    var L_AboutProcess3_Text = "Tu je kr�tky preh�ad postupu, ktor� vykon�te v najbli���ch min�tach:";
    Agent_Speak(L_AboutProcess3_Text);

    var L_AboutProcess4_Text = "Teraz je potrebn� skontrolova�, �i hardv�r po��ta�a, napr�klad reproduktory, kl�vesnica alebo hodiny, pracuj� spr�vne.";
    Agent_Speak(L_AboutProcess4_Text);

    var L_AboutProcess5_Text = "Ak potrebujete pripojenie po��ta�a na sie�, skontroluje sa aj toto pripojenie.";
    Agent_Speak(L_AboutProcess5_Text);


    var L_AboutProcess6_Text = "�alej, pre��tajte si Licen�n� zmluvu, ktor� poskytuje preh�ad o podmienkach pre pou��vanie %1.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess6_Text, g_ProductName));
    
    if (!window.external.get_RetailOOBE()) 
    {
    var L_AboutProcess7_Text = "Ak m�te v po��ta�i funguj�ci modem alebo sie�ov� pripojenie, budete ma� mo�nos� zaregistrova� sa v spolo�nosti Microsoft a %1, aby sme v�m mohli posiela� inform�cie o aktualiz�ci�ch produktov a zauj�mav�ch ponuk�ch.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess7_Text, g_OEMNameStr));
    } 
    else 
    {    
    var L_AboutProcess7_Text = "Ak m�te v po��ta�i funguj�ci modem alebo sie�ov� pripojenie, budete ma� mo�nos� zaregistrova� sa v spolo�nosti Microsoft, aby sme v�m mohli posiela� inform�cie o aktualiz�ci�ch produktov a zauj�mav�ch ponuk�ch.";
    Agent_Speak(L_AboutProcess7_Text);
    }       

    var L_AboutProcess8_Text = "Budete ma� mo�nos� overi� pravos� %1 a uisti� sa, �e pou��vate leg�lnu k�piu.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess8_Text, g_ProductName));

    var L_AboutProcess9_Text = "Ak chcete, pom��em v�m pripoji� sa na Internet.";
    Agent_Speak(L_AboutProcess9_Text); 

    var L_AboutProcess10_Text = "Ak sa rozhodnete vynecha� tento krok, m��ete sa pripoji� nesk�r.";
    Agent_Speak(L_AboutProcess10_Text);

    var L_AboutProcess11_Text = "Nakoniec v�m pom��em prisp�sobi� po��ta� pre ka�d�ho pou��vate�a. ";
    Agent_Speak(L_AboutProcess11_Text);

    var L_AboutProcess12_Text = "Hotovo. M��eme za�a�!";
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

    var L_AboutProcess13_Text = "Ak chcete za�a�, kliknite na tla�idlo �alej.";
    Agent_Speak(L_AboutProcess13_Text);
    
    Agent_Play("RestPose");
}


                                                       

function Agent_TimeZoneAddCommands() 
{
    var L_TimeZoneCommand1_Text = "Potrebujem in&form�cie o tomto kroku";
    var L_TimeZoneCommand2_Text = "Ako &vyberiem �asov� p�smo?";

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
        var L_TimeZoneMenuCommand3_Text = "�o je let&n� �as?";

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
    var L_ExplainTimeZoneStep1_Text = "Zadajte �asov� p�smo, v ktorom budete po��ta� pou��va�. Syst�m Windows pod�a neho nastav� hodiny po��ta�a.";
    Agent_Speak(L_ExplainTimeZoneStep1_Text);

    var L_ExplainTimeZoneStep2_Text = "Ak chcete, syst�m Windows automaticky aktualizuje hodiny na letn� �as.";
    Agent_Speak(L_ExplainTimeZoneStep2_Text);

    var L_ExplainTimeZoneStep3_Text = "Toto je posledn� krok, ktor� sa t�ka hardv�ru.";
    Agent_Speak(L_ExplainTimeZoneStep3_Text);

    var L_ExplainTimeZoneStep4_Text = "�alej prejdeme k Licen�nej zmluve.";
    Agent_Speak(L_ExplainTimeZoneStep4_Text);
    
}

function Agent_OnTimeZoneCommand_SelectZone() 
{
    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone1_Text = "�asov� p�sma v tomto zozname vych�dzaj� z greenwichsk�ho �asu (GMT), ktor� je zn�en� alebo zv��en� o ur�it� po�et hod�n.";
    Agent_Speak(L_TellUserHowToSelectTimeZone1_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone2_Text = "Ak chcete vybra� ur�it� polo�ku, kliknite sem alebo stl��ajte opakovane kl�ves Tab. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone2_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Right");

    var L_TellUserHowToSelectTimeZone3_Text = "V zozname �asov�ch p�siem sa pos�vajte kliknut�m na mal� tla�idl� so ��pkami alebo pou�ite kl�vesy so ��pkami nahor a nadol. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone3_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone4_Text = "Ke� sa zobraz� po�adovan� �asov� p�smo, kliknite na� alebo stla�te kl�ves Enter.";
    Agent_Speak(L_TellUserHowToSelectTimeZone4_Text);

    var L_TellUserHowToSelectTimeZone5_Text = "Vybrat� �asov� p�smo sa zobraz� zv�raznen�.";
    Agent_Speak(L_TellUserHowToSelectTimeZone5_Text);

    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserHowToSelectTimeZone6_Text = "Ak �ijete v oblasti, v ktorej sa pou��va letn� �as, umiestnite ukazovate� sem a za�iarknite toto pol��ko.";
    Agent_Speak(L_TellUserHowToSelectTimeZone6_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone7_Text = "Syst�m Windows automaticky posunie hodiny v po��ta�i dvakr�t za rok.";
    Agent_Speak(L_TellUserHowToSelectTimeZone7_Text);
    
}

function Agent_OnTimeZoneCommand_DaylightSavings() 
{
    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserAboutDaylightOption1_Text = "V niektor�ch �asov�ch p�smach sa hodiny v ur�itom obdob� roka posun� dopredu alebo dozadu, aby sa �as prisp�sobil r�znej d�ke doby slne�n�ho svitu.";
    Agent_Speak(L_TellUserAboutDaylightOption1_Text);
    
    Agent_Play("RestPose");

    var L_TellUserAboutDaylightOption2_Text = "Ak chcete, aby syst�m Windows v tomto pr�pade automaticky nastavil hodiny po��ta�a, vyberte t�to mo�nos� presunut�m ukazovate�a my�i a kliknut�m na pol��ko.";
    Agent_Speak(L_TellUserAboutDaylightOption2_Text);

}



function Agent_OEMHWAddCommands() 
{
    var L_OEMHWMenuCommand1_Text = "Chcem in&form�cie o tomto kroku.";
    var L_OEMHWMenuCommand2_Text = "Ako zist�m, �i &zvukov� syst�m funguje?";
    var L_OEMHWMenuCommand3_Text = "�o urobi�, &ak zvuk nefunguje?";
    var L_OEMHWMenuCommand4_Text = "Ako &ozna��m odpove�?";

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
    var L_OEMHWAboutThisScreen1_Text = "Na tejto obrazovke m��ete skontrolova�, �i zvukov� syst�m po��ta�a pracuje.";
	  Agent_Speak(L_OEMHWAboutThisScreen1_Text);

    var L_OEMHWAboutThisScreen2_Text = "Zvukov� syst�m pozost�va z reproduktorov, zvukovej karty v po��ta�i a softv�ru %1, ktor� umo��uje prehr�vanie zvuku.";
	  Agent_Speak(ApiObj.formatMessage(L_OEMHWAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnOEMHWHowDoIKnow() 
{
    var L_OEMHWHowDoIKnow1_Text = "Ak teraz po�ujete zvuk, zvukov� syst�m pracuje.";
	  Agent_Speak(L_OEMHWHowDoIKnow1_Text);

    var L_OEMHWHowDoIKnow2_Text = "Ak nepo�ujete zvuk, najsk�r skontrolujte, �i hlasitos� reproduktora nie je nastaven� na n�zku �rove�.";
	  Agent_Speak(L_OEMHWHowDoIKnow2_Text);

    var L_OEMHWHowDoIKnow3_Text = "Ak sa probl�m neodstr�nil, skontrolujte �al�ie mo�nosti.";
	  Agent_Speak(L_OEMHWHowDoIKnow3_Text);
}

function Agent_OnOEMHWIsNotWorking() 
{
    var L_OEMHWIsNotWorking1_Text = "Najsk�r skontrolujte, �i s� zapnut� reproduktory.";
	  Agent_Speak(L_OEMHWIsNotWorking1_Text);
	
    var L_OEMHWIsNotWorking2_Text = "Niektor� reproduktory pou��vaj� na ozna�enie zapnutia sveteln� signaliz�ciu.";
	  Agent_Speak(L_OEMHWIsNotWorking2_Text);

    var L_OEMHWIsNotWorking3_Text = "�alej skontrolujte, �i je hlasitos� nastaven� na po�ute�n� �rove�.";
	  Agent_Speak(L_OEMHWIsNotWorking3_Text);

    var L_OEMHWIsNotWorking4_Text = "Ak z reproduktorov st�le nepo�ujete zvuk...";
	  Agent_Speak(L_OEMHWIsNotWorking4_Text);

    var L_OEMHWIsNotWorking5_Text = "Skontrolujte, �i s� reproduktory spr�vne pripojen� k elektrickej z�str�ke a k po��ta�u.";
	  Agent_Speak(L_OEMHWIsNotWorking5_Text);
	
	  var L_OEMHWIsNotWorking6_Text = "V po��ta�i sa d� �ahko pom�li� konektor pre mikrof�n s konektorom pre reproduktory.";
	  Agent_Speak(L_OEMHWIsNotWorking6_Text);

    var L_OEMHWIsNotWorking7_Text = "Ak m�te stereo reproduktory, uistite sa, �e s� navz�jom pripojen�.";
	  Agent_Speak(L_OEMHWIsNotWorking7_Text);

    var L_OEMHWIsNotWorking8_Text = "Ak st�le nepo�ujete z reproduktorov zvuk, po�i�ajte si reproduktory z in�ho po��ta�a.";
	  Agent_Speak(L_OEMHWIsNotWorking8_Text);

    var L_OEMHWIsNotWorking9_Text = "Ak po�i�an� reproduktory funguj� a va�e reproduktory nefunguj�, treba ich vymeni� alebo opravi�.";
	  Agent_Speak(L_OEMHWIsNotWorking9_Text);
}

function Agent_OnOEMHWIndicateAnswer() 
{
	  Agent_GestureAtElement(g.document.all("Sound_Yes"), "Left");
    
    var L_OEMHWIndicateAnswer1_Text = "Umiestnite ukazovate� my�i do prep�na�a na�avo od vybratej odpovede";
	  Agent_Speak(L_OEMHWIndicateAnswer1_Text);
    
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("radioNoSound"), "Left");

    var L_OEMHWIndicateAnswer2_Text = "a kliknite.";
	  Agent_Speak(L_OEMHWIndicateAnswer2_Text);
    
    Agent_Play("RestPose");

    var L_OEMHWIndicateAnswer3_Text = "Ak chcete na ozna�enie odpovede pou�i� kl�vesnicu, stl��ajte opakovane kl�ves Tab, k�m sa okolo vybrat�ho prep�na�a nezobraz� slab� obd�nik. Potom stla�te kl�ves Medzern�k.";
	  Agent_Speak(L_OEMHWIndicateAnswer3_Text);
}




function Agent_CompNameAddCommands() 
{
    var L_CompNameMenuCommand1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_CompNameMenuCommand2_Text = "Ako nesk�r &premenujem po��ta�?";

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
    var L_CompNameAboutThisScreen1_Text = "Na tejto obrazovke zadajte n�zov po��ta�a.";
	  Agent_Speak(L_CompNameAboutThisScreen1_Text);

    var L_CompNameAboutThisScreen2_Text = "Ak je po��ta� pripojen� na sieti, pod�a tohto n�zvu ho rozpozn�vaj� pou��vatelia ostatn�ch po��ta�ov v sieti.";
	  Agent_Speak(L_CompNameAboutThisScreen2_Text);
}

function Agent_OnCompNameHowToRename() 
{
    var L_CompNameHowToRename1_Text = "Po in�tal�cii syst�mu Windows kliknite na polo�ku Ovl�dac� panel v ponuke �tart.";
	  Agent_Speak(L_CompNameHowToRename1_Text);

    var L_CompNameHowToRename2_Text = "Kliknite na ikonu Syst�m v kateg�rii V�kon a �dr�ba a potom postupujte pod�a in�trukci� na karte N�zov po��ta�a.";
	  Agent_Speak(L_CompNameHowToRename2_Text);

    var L_CompNameHowToRename3_Text = "Popis t�chto krokov, odpovede na ot�zky a �al�ie cenn� inform�cie n�jdete po kliknut� na polo�ku Pomoc a technick� podpora v ponuke �tart.";
	  Agent_Speak(L_CompNameHowToRename3_Text);
}




function Agent_SECURITYPASSAddCommands() 
{
    var L_SECURITYPASSMenuCommand1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_SECURITYPASSMenuCommand2_Text = "Najlep�� sp�sob na &vytvorenie hesla";

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
    var L_SECURITYPASSAboutThisScreen1_Text = "Ak chcete chr�ni� po��ta� pred neopr�vnen�m pr�stupom, na tejto obrazovke m��ete vytvori� heslo.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen1_Text);

    var L_SECURITYPASSAboutThisScreen2_Text = "Pozn�mka: Ak je po��ta� pripojen� k in�m po��ta�om v sieti, pou��vate�, ktor� sa prihl�si s menom pou��vate�a \"Administrator\" a platn�m heslom, z�ska pr�stup ku v�etk�m po��ta�om v sieti.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen2_Text);
    
    var L_SECURITYPASSAboutThisScreen3_Text = "Odpor��a sa preto z�ska� heslo konta Administrator na ochranu po��ta�a a siete, ak existuje.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen3_Text);
}

function Agent_OnSECURITYPASSBestWay() 
{
    var L_SECURITYPASSBestWay1_Text = "Ak chcete zv��i� zabezpe�enie hesla, malo by obsahova� aspo� dva z t�chto prvkov: ve�k� p�smen�, mal� p�smen� a ��sla.";
	  Agent_Speak(L_SECURITYPASSBestWay1_Text);

    var L_SECURITYPASSBestWay2_Text = "��m n�hodnej�ia je postupnos� znakov, t�m je heslo bezpe�nej�ie.";
	  Agent_Speak(L_SECURITYPASSBestWay2_Text);

    var L_SECURITYPASSBestWay3_Text = "Maxim�lna d�ka hesla je 127 znakov.";
	  Agent_Speak(L_SECURITYPASSBestWay3_Text);
    
    var L_SECURITYPASSBestWay4_Text = "Ak pou��vate syst�m Windows v sieti s po��ta�mi, ktor� pou��vaj� syst�m Windows 95 alebo Windows 98, a chcete sa k sieti prip�ja� aj z t�chto po��ta�ov, heslo by nemalo by� dlh�ie ako 14 znakov.";
	  Agent_Speak(L_SECURITYPASSBestWay4_Text);
}



function Agent_JOINDOMAINAddCommands() 
{
    var L_JOINDOMAINMenuCommand1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_JOINDOMAINMenuCommand2_Text = "�o je &dom�na?";
    var L_JOINDOMAINMenuCommand3_Text = "Ako sa p&ripoj�m na dom�nu?"; 
    var L_JOINDOMAINMenuCommand4_Text = "Ako m�m p&okra�ova� �alej?";


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
    var L_JOINDOMAINAboutThisScreen1_Text = "Na tejto obrazovke m��ete ur�i�, �i m� by� po��ta� �lenom dom�ny, alebo nem�.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen1_Text);

    var L_JOINDOMAINAboutThisScreen2_Text = "Ak sa rozhodnete pripoji� po��ta� na dom�nu, mus�te zada� meno dom�ny, na ktor� sa m� po��ta� pripoji�.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen2_Text);
}

function Agent_OnJOINDOMAINDifference() 
{
    var L_JOINDOMAINDifference1_Text = "Dom�na je skupina po��ta�ov, ktor� sa spravuj� ako celok.";
    Agent_Speak(L_JOINDOMAINDifference1_Text);
    
    var L_JOINDOMAINDifference2_Text = "Spolo�nos� m��e napr�klad pripoji� v�etky svoje po��ta�e vo zvolenskej pobo�ke na dom�nu. Tieto po��ta�e bud� zdie�a� rovnak� pr�stupov� opr�vnenia a bud� pripojen� k t�m ist�m tla�iar�am.";
    Agent_Speak(L_JOINDOMAINDifference2_Text);

    var L_JOINDOMAINDifference3_Text = "Ak sa neviete rozhodn�� pre niektor� mo�nos�, vyberte mo�nos� Nie a kliknite na tla�idlo �alej.";
    Agent_Speak(L_JOINDOMAINDifference3_Text);
}

function Agent_OnJOINDOMAINHowToName() 
{
 	  Agent_GestureAtElement(g.document.all("radioYesDomain"), "Left");
 
    var L_JOINDOMAINHowToName1_Text = "Ak za�iarknete mo�nos� pripoji� po��ta� na dom�nu,";
    Agent_Speak(L_JOINDOMAINHowToName1_Text);
      
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("textboxDomain"), "Left");
  
    var L_JOINDOMAINHowToName2_Text = "n�zov dom�ny m��ete zada� do po�a dolu.";
    Agent_Speak(L_JOINDOMAINHowToName2_Text);
      
    Agent_Play("RestPose");
  
    var L_JOINDOMAINHowToName3_Text = "Ak nevyberiete mo�nos� pripoji� po��ta� na dom�nu, nem��ete zada� n�zov dom�ny.";
    Agent_Speak(L_JOINDOMAINHowToName3_Text);
  
    var L_JOINDOMAINHowToName4_Text = "Pole zostane siv� a nebude mo�n� do neho ni� zad�va�, k�m nevyberiete mo�nos� pripoji� po��ta� na dom�nu.";
    Agent_Speak(L_JOINDOMAINHowToName4_Text);
  
    var L_JOINDOMAINHowToName5_Text = "Ak chcete pripoji� po��ta� na dom�nu, po�iadajte spr�vcu siete o platn� n�zov dom�ny.";
    Agent_Speak(L_JOINDOMAINHowToName5_Text);
  
    var L_JOINDOMAINHowToName6_Text = "Ak nechcete pripoji� po��ta� na dom�nu, nemus�te n�zov zada�.";
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
    
    var L_JOINDOMAINWhatToDoNext1_Text = "Po v�bere kliknite na tla�idlo �alej.";
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
    
    var L_JOINDOMAINWhatToDoNext2_Text = "Kliknut�m na tla�idlo Nasp� sa m��ete vr�ti� na predch�dzaj�cu obrazovku.";
    Agent_Speak(L_JOINDOMAINWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}




function Agent_JNDOM_AAddCommands() 
{
    var L_JNDOMAMenuCommand1_Text = "Chcem in&form�cie o tomto kroku.";
    var L_JNDOMAMenuCommand2_Text = "Ako zad�m meno pou��vate�a a &heslo?";
    var L_JNDOMAMenuCommand3_Text = "�o je &dom�na?";
    var L_JNDOMAMenuCommand4_Text = "Ako m�m p&okra�ova� �alej?";
    
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
    var L_JNDOM_A_AboutThisStep1_Text = "Na tejto obrazovke m��ete ur�i� pou��vate�a, ktor� je opr�vnen� pripoji� po��ta� na dom�nu.";
  	Agent_Speak(L_JNDOM_A_AboutThisStep1_Text);
}

function Agent_OnJNDOM_AHowToEnter() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_HowToEnter1_Text = "Meno, ktor� zad�te, mus� by� medzi ostatn�mi menami pou��vate�ov v dom�ne jedine�n�.";
    Agent_Speak(L_JNDOM_A_HowToEnter1_Text);
      
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_HowToEnter2_Text = "Heslo, ktor� zad�te, sa mus� zhodova� s heslom konta dan�ho pou��vate�a.";
    Agent_Speak(L_JNDOM_A_HowToEnter2_Text);
      
    Agent_Play("RestPose");
    
    var L_JNDOM_A_HowToEnter3_Text = "Ak neviete, ak� meno pou��vate�a a heslo m�te pou�i�, obr�te sa na spr�vcu siete.";
    Agent_Speak(L_JNDOM_A_HowToEnter3_Text);
}

function Agent_OnJNDOM_AWhatIsDomain() 
{
    var L_JNDOM_A_WhatIsDomain1_Text = "Dom�na je skupina po��ta�ov, ktor� sa spravuj� ako celok.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain1_Text);
  	
    var L_JNDOM_A_WhatIsDomain2_Text = "Spolo�nos� m��e napr�klad pripoji� v�etky svoje po��ta�e vo zvolenskej pobo�ke na dom�nu. Tieto po��ta�e bud� zdie�a� rovnak� pr�stupov� opr�vnenia a bud� pripojen� k t�m ist�m tla�iar�am.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain2_Text);
      
    Agent_Play("RestPose");		
}

function Agent_OnJNDOM_AWhatToDoNext() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_WhatToDoNext1_Text = "Po zadan� mena pou��vate�a";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext1_Text);
      
    Agent_Play("RestPose");		
  	
    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_WhatToDoNext2_Text = "a hesla pou��vate�a,";
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
    
    var L_JNDOM_A_WhatToDoNext3_Text = "kliknite na tla�idlo �alej.";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext3_Text);
      
    Agent_Play("RestPose");		
}



function Agent_ActivationAddCommands() 
{
    var L_ActivationMenuCommand1_Text = "&Chcem inform�cie o tomto kroku.";
    var L_ActivationMenuCommand2_Text = "I&nform�cie o aktiv�cii";
    var L_ActivationMenuCommand3_Text = "Ako m��em syst�m &aktivova� nesk�r?";
    var L_ActivationMenuCommand4_Text = "Ako m��em syst�m ak&tivova� bez pripojenia na Internet?";
    var L_ActivationMenuCommand5_Text = "�o sa &stane, ak sa syst�m neaktivuje?";
    var L_ActivationMenuCommand6_Text = "Ako m�m p&okra�ova� �alej?";

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
    
    var L_ActivationAboutThisScreen1_Text = "Na tejto obrazovke m��ete ur�i�, �i chcete aktivova� %1 teraz, alebo nesk�r.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutThisScreen1_Text, g_ProductName));
    
    var L_ActivationAboutThisScreen2_Text = "Ak sa rozhodnete aktiv�ciu odlo�i�, Sprievodcu aktiv�ciou produktu Windows m��ete nesk�r spusti� z ponuky �tart.";
    Agent_Speak(L_ActivationAboutThisScreen2_Text);
    
    var L_ActivationAboutThisScreen3_Text = "Aktiv�ciu v�m budeme pravidelne pripom�na�. Umo�n� v�m �alej pou��va� syst�m Windows.";
    Agent_Speak(L_ActivationAboutThisScreen3_Text);
}

function Agent_OnActivationAboutActivation() 
{
    var L_ActivationAboutActivation1_Text = "Banka v�s po vydan� debetnej alebo kreditnej karty oby�ajne po�iada, aby ste ju pred prv�m pou�it�m �aktivovali�.";
    Agent_Speak(L_ActivationAboutActivation1_Text);
    
    var L_ActivationAboutActivation2_Text = "Aktiv�cia chr�ni v�s aj banku pred neopr�vnen�m pou�it�m karty.";
    Agent_Speak(L_ActivationAboutActivation2_Text);
    
    var L_ActivationAboutActivation3_Text = "Aktiv�cia %1 funguje rovnako s t�m rozdielom, �e %2 m��ete pred aktiv�ciou ur�it� �as pou��va�.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationHowToActivateLater() 
{
    var L_ActivationHowToActivateLater1_Text = "Ak teraz aktiv�ciu vynech�te, na pracovnej ploche %1 sa bude pravidelne zobrazova� mal� pripomenutie.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationHowToActivateLater1_Text, g_ProductName));
    
    var L_ActivationHowToActivateLater2_Text = "Sprievodcu aktiv�ciou produktu Windows m��ete potom spusti� z ponuky �tart kliknut�m na polo�ku Aktiv�cia syst�mu Windows.";
    Agent_Speak(L_ActivationHowToActivateLater2_Text);
    
    var L_ActivationHowToActivateLater3_Text = "Ak ste zabudli postup, kliknite na polo�ku Pomoc a technick� podpora v ponuke �tart, kde n�jdete odpovede na ot�zky a �al�ie cenn� inform�cie.";
    Agent_Speak(L_ActivationHowToActivateLater3_Text);
}

function Agent_OnActivationHowToActivateUnconnected() 
{
    Agent_GestureAtElement(g.rb_act_2, "Left");
    	
    var L_ActivationHowToActivateUnconnected1_Text = "Vyberte \"Nie\".";
    Agent_Speak(L_ActivationHowToActivateUnconnected1_Text);
    
    Agent_Play("RestPose");
    
    var L_ActivationHowToActivateUnconnected2_Text = "Po in�tal�cii syst�mu Windows m��ete Sprievodcu aktiv�ciou produktu Windows spusti� kliknut�m na polo�ku Aktiv�cia syst�mu Windows v ponuke �tart.";
    Agent_Speak(L_ActivationHowToActivateUnconnected2_Text);
    
    var L_ActivationHowToActivateUnconnected3_Text = "Sprievodca zobraz� telef�nne ��slo, na ktor� m��ete zavola� a aktivova� syst�m Windows telefonicky.";
    Agent_Speak(L_ActivationHowToActivateUnconnected3_Text);
}

function Agent_OnActivationWhatHappensNoActivate() 
{
    var L_ActivationWhatHappensNoActivate1_Text = "%1 m��ete �alej pou��va�, k�m neskon�� obdobie na aktiv�ciu.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate1_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate2_Text = "Na konci tohto obdobia mus�te %1 aktivova�, ak ho chcete �alej pou��va�.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate2_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate3_Text = "Po skon�en� obdobia na aktiv�ciu nebudete m�c� %1 �alej pou��va�.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate3_Text, g_ProductName));
}

function Agent_OnActivationWhatToDoNext() 
{
    Agent_GestureAtElement(g.act_spn1, "Left");
    
    var L_ActivationWhatToDoNext1_Text = "Po v�bere odpovede na ot�zku";
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
            
    var L_ActivationWhatToDoNext2_Text = "kliknite na tla�idlo �alej.";
    Agent_Speak(L_ActivationWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");	
}



function Agent_ActivationErrorAddCommands() 
{
    var L_ActivationErrorMenuCommand1_Text = "Chcem in&form�cie o tomto kroku.";
    var L_ActivationErrorMenuCommand2_Text = "I&nform�cie o aktiv�cii";
    var L_ActivationErrorMenuCommand3_Text = "Ako m��em syst�m &aktivova� nesk�r?";
    var L_ActivationErrorMenuCommand4_Text = "Ako m��em syst�m ak&tivova� bez pripojenia na Internet?";
    var L_ActivationErrorMenuCommand5_Text = "�o sa &stane, ak sa syst�m neaktivuje?";


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
    var L_ActivationErrorAboutThisScreen1_Text = "T�to obrazovka sa zobrazila, preto�e sa v�m nepodarilo pripoji� k aktiva�n�mu centru.";
	Agent_Speak(L_ActivationErrorAboutThisScreen1_Text);
	
    var L_ActivationErrorAboutThisScreen2_Text = "Po in�tal�cii %1 m��ete Sprievodcu aktiv�ciou produktu Windows spusti� kliknut�m na polo�ku Aktivov�cia syst�mu Windows v ponuke �tart.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnActivationErrorAboutActivation() 
{
    var L_ActivationErrorAboutActivation1_Text = "Banka v�s po vydan� debetnej alebo kreditnej karty oby�ajne po�iada, aby ste ju pred prv�m pou�it�m �aktivovali�.";
	Agent_Speak(L_ActivationErrorAboutActivation1_Text);
	
    var L_ActivationErrorAboutActivation2_Text = "Aktiv�cia chr�ni v�s aj banku pred neopr�vnen�m pou�it�m karty.";
	Agent_Speak(L_ActivationErrorAboutActivation2_Text);
	
    var L_ActivationErrorAboutActivation3_Text = "Aktiv�cia %1 funguje rovnako s t�m rozdielom, �e %2 m��ete pred aktiv�ciou ur�it� po�et dn� pou��va�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationErrorHowToActivateLater() 
{
    var L_ActivationErrorHowToActivateLater1_Text = "Ak teraz aktiv�ciu vynech�te, na pracovnej ploche %1 sa bude pravidelne zobrazova� mal� pripomenutie.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationErrorHowToActivateLater2_Text = "Sprievodcu aktiv�ciou produktu Windows m��ete potom spusti� z ponuky �tart kliknut�m na polo�ku Aktiv�cia syst�mu Windows.";
	Agent_Speak(L_ActivationErrorHowToActivateLater2_Text);
	
    var L_ActivationErrorHowToActivateLater3_Text = "Ak ste zabudli postup, kliknite na polo�ku Pomoc a technick� podpora v ponuke �tart, kde n�jdete odpovede na ot�zky a �al�ie cenn� inform�cie.";
	Agent_Speak(L_ActivationErrorHowToActivateLater3_Text);
}

function Agent_OnActivationErrorHowToActivateUnconnected() 
{
    var L_ActivationErrorHowToActivateUnconnected1_Text = "Po in�tal�cii syst�mu Windows m��ete Sprievodcu aktiv�ciou produktu Windows spusti� kliknut�m na polo�ku Aktiv�cia syst�mu Windows v ponuke �tart.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected1_Text);
	
    var L_ActivationErrorHowToActivateUnconnected2_Text = "Sprievodca zobraz� telef�nne ��slo, na ktor� m��ete zavola� a aktivova� syst�m Windows telefonicky.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected2_Text);
}

function Agent_OnActivationErrorWhatHappensNoActivate() 
{
    var L_ActivationErrorWhatHappensNoActivate1_Text = "%1 m��ete �alej pou��va�, k�m neskon�� obdobie na aktiv�ciu.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate2_Text = "Na konci tohto obdobia mus�te %1 aktivova�, ak ho chcete �alej pou��va�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate3_Text = "Po skon�en� obdobia na aktiv�ciu nebudete m�c� %1 �alej pou��va�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_ActivationPrivacyPolicyAddCommands() 
{
    var L_ActivationPrivacyPolicyMenuCommand1_Text = "Chcem in&form�cie o tomto kroku.";
    var L_ActivationPrivacyPolicyMenuCommand2_Text = "I&nform�cie o aktiv�cii";
    var L_ActivationPrivacyPolicyMenuCommand3_Text = "Ako m��em syst�m &aktivova� nesk�r?";
    var L_ActivationPrivacyPolicyMenuCommand4_Text = "Ako m��em syst�m ak&tivova� bez pripojenia na Internet?";
    var L_ActivationPrivacyPolicyMenuCommand5_Text = "�o sa &stane, ak sa syst�m neaktivuje?";


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
    var L_ActivationPrivacyPolicyAboutThisScreen1_Text = "T�to obrazovka vysvet�uje sp�sob ochrany osobn�ch �dajov pri aktiv�cii %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutThisScreen1_Text, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyAboutActivation() 
{
    var L_ActivationPrivacyPolicyAboutActivation1_Text = "Banka v�s po vydan� debetnej alebo kreditnej karty oby�ajne po�iada, aby ste ju pred prv�m pou�it�m �aktivovali�.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation1_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation2_Text = "Aktiv�cia chr�ni v�s aj banku pred neopr�vnen�m pou�it�m karty.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation2_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation3_Text = "Aktiv�cia %1 funguje rovnako s t�m rozdielom, �e %2 m��ete pred aktiv�ciou ur�it� �as pou��va�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyHowToActivateLater() 
{
    var L_ActivationPrivacyPolicyHowToActivateLater1_Text = "Ak teraz aktiv�ciu vynech�te, na pracovnej ploche %1 sa bude pravidelne zobrazova� mal� pripomenutie.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyHowToActivateLater2_Text = "Sprievodcu aktiv�ciou produktu Windows m��ete potom spusti� z ponuky �tart kliknut�m na polo�ku Aktiv�cia syst�mu Windows.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater2_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateLater3_Text = "Ak ste zabudli postup, kliknite na polo�ku Pomoc a technick� podpora v ponuke �tart, kde n�jdete odpovede na ot�zky a �al�ie cenn� inform�cie.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater3_Text);
}

function Agent_OnActivationPrivacyPolicyHowToActivateUnconnected() 
{
    var L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text = "Po in�tal�cii syst�mu Windows m��ete Sprievodcu aktiv�ciou produktu Windows spusti� kliknut�m na polo�ku Aktiv�cia syst�mu Windows v ponuke �tart.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text = "Sprievodca zobraz� telef�nne ��slo, na ktor� m��ete zavola� a aktivova� syst�m Windows telefonicky.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text);
}

function Agent_OnActivationPrivacyPolicyWhatHappensNoActivate() 
{
    var L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text = "%1 m��ete �alej pou��va�, k�m neskon�� obdobie na aktiv�ciu.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text = "Na konci tohto obdobia mus�te %1 aktivova�, ak ho chcete �alej pou��va�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text = "Po uplynut� �asov�ho limitu pre aktiv�ciu nebudete m�c� %1 �alej pou��va�.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_DSLMAINAddCommands() 
{
    var L_DSLMAINMenuCommand1_Text = "Chcem in&form�cie o tomto kroku.";
    var L_DSLMAINMenuCommand2_Text = "&Niektor� d�vody na po�adovanie mena a hesla pou��vate�a";
    var L_DSLMAINMenuCommand3_Text = "Ako m�m p&okra�ova� �alej?";
    
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
    var L_DSLMAINAboutThisScreen1_Text = "Na tejto obrazovke m��ete ur�i�, �i sa pri pr�stupe na Internet prostredn�ctvom tohto po��ta�a bude po�adova� meno pou��vate�a a heslo.";
	Agent_Speak(L_DSLMAINAboutThisScreen1_Text);
}

function Agent_OnDSLMAINSomeReasons() 
{
    var L_DSLMAINHowToMoveOn1_Text = "Ak ste jedin�m pou��vate�om tohto po��ta�a, je vhodn� umo�ni�, aby %1 sa automaticky ulo�ilo meno pou��vate�a a heslo.";
	Agent_Speak(ApiObj.FormatMessage(L_DSLMAINHowToMoveOn1_Text, g_ProductName));
	
    var L_DSLMAINHowToMoveOn2_Text = "V tom pr�pade sa inform�cie nebud� musie� zad�va� pri ka�dom pripojen� na Internet.";
	Agent_Speak(L_DSLMAINHowToMoveOn2_Text);
	
    var L_DSLMAINHowToMoveOn3_Text = "Ak zdie�ate po��ta� s in�mi pou��vate�mi a nechcete s nimi zdie�a� internetov� konto, m��ete ho zabezpe�i� menom pou��vate�a a heslom.";
	Agent_Speak(L_DSLMAINHowToMoveOn3_Text);
	
    var L_DSLMAINHowToMoveOn4_Text = "M��ete napr�klad zdie�a� po��ta� s de�mi a umo�ni� im hra� po��ta�ov� hry.";
	Agent_Speak(L_DSLMAINHowToMoveOn4_Text);
	
    var L_DSLMAINHowToMoveOn5_Text = "Nechcete im v�ak dovoli� surfovanie na Internete bez povolenia.";
	Agent_Speak(L_DSLMAINHowToMoveOn5_Text);		
}

function Agent_OnDSLMAINWhatToDoNext()
{	
	Agent_GestureAtElement(g.dslmain_TitleText, "Left");
	
    var L_DSLMAINWhatToDoNext1_Text = "Po v�bere odpovede na ot�zku";
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
	
	var L_DSLMAINWhatToDoNext2_Text = "kliknite na tla�idlo �alej.";
	Agent_Speak(L_DSLMAINWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");
}



function Agent_DSL_AAddCommands() 
{
    var L_DSLAMenuCommand1_Text = "Chcem in&form�cie o tomto kroku.";
    var L_DSLAMenuCommand2_Text = "�o je &Internet?";
    var L_DSLAMenuCommand3_Text = "�o &treba na pripojenie na Internet?";
    var L_DSLAMenuCommand4_Text = "Inform�cie o z�pise &na Internet";

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
    var L_DSL_A_AboutThisStep1_Text = "Na tejto obrazovke m��ete nastavi� konto od poskytovate�a internetov�ch slu�ieb \"(ISP)\", pomocou ktor�ho sa z po��ta�a prip�jate na Internet.";
	Agent_Speak(L_DSL_A_AboutThisStep1_Text);
}

function Agent_DSL_AWhatIsInternet() 
{
    var L_DSL_A_WhatIsInternet1_Text = "Internet je celosvetov� sie� po��ta�ov.";
	Agent_Speak(L_DSL_A_WhatIsInternet1_Text);
	
    var L_DSL_A_WhatIsInternet2_Text = "Pr�stup na Internet v�m umo��uje vyu��va� verejne dostupn� inform�cie z mili�nov zdrojov, ako s� �koly, �t�tne in�tit�cie, podniky a jednotlivci.";
	Agent_Speak(L_DSL_A_WhatIsInternet2_Text);
	
    var L_DSL_A_WhatIsInternet3_Text = "\"Web\" je syst�m na prezeranie Internetu pomocou hypertextov�ch prepojen�.";
	Agent_Speak(L_DSL_A_WhatIsInternet3_Text);
	
    var L_DSL_A_WhatIsInternet4_Text = "Hypertextov� prepojenie je text alebo obr�zok, na ktor� je mo�n� klikn��, pri�om sa zobraz� �al�ia webov� str�nka alebo in� �as� tej istej str�nky alebo sa vykon� ur�it� �innos�, ako je spustenie programu.";
	Agent_Speak(L_DSL_A_WhatIsInternet4_Text);
	
    var L_DSL_A_WhatIsInternet5_Text = "Na preh�ad�vanie webu sl��i webov� preh�ad�va�, ktor� zobrazuje inform�cie z Internetu vo forme textu, obr�zkov, zvukov a digit�lnych videonahr�vok.";
	Agent_Speak(L_DSL_A_WhatIsInternet5_Text);
	
    var L_DSL_A_WhatIsInternet6_Text = "Spolo�nos� Microsoft pon�ka dva webov� preh�ad�va�e:";
	Agent_Speak(L_DSL_A_WhatIsInternet6_Text);
	
    var L_DSL_A_WhatIsInternet7_Text = "MSN Explorer, ktor� je vhodn� pre za�iato�n�kov, a t�ch, ktor� pou��vaj� po��ta� doma, a Internet Explorer.";
	Agent_Speak(L_DSL_A_WhatIsInternet7_Text);
}

function Agent_DSL_ANeedToConnect() 
{	
    var L_DSL_A_NeedToConnect1_Text = "Na pripojenie na Internet potrebujete iba tri veci.";
	Agent_Speak(L_DSL_A_NeedToConnect1_Text);	
	
    var L_DSL_A_NeedToConnect2_Text = "Po��ta� � ten u� m�te.";
	Agent_Speak(L_DSL_A_NeedToConnect2_Text);
	
    var L_DSL_A_NeedToConnect3_Text = "�alej potrebujete poskytovate�a internetov�ch slu�ieb \"(ISP)\".";
	Agent_Speak(L_DSL_A_NeedToConnect3_Text);
	
    var L_DSL_A_NeedToConnect4_Text = "Poskytovate� internetov�ch slu�ieb poskytuje slu�by alebo pr�stup na Internetu rovnako, ako telekomunika�n� spolo�nos� poskytuje telef�nne slu�by.";
	Agent_Speak(L_DSL_A_NeedToConnect4_Text);
	
    var L_DSL_A_NeedToConnect5_Text = "Ak e�te nem�te poskytovate�a internetov�ch slu�ieb, m��ete ho z�ska� v �asti, v ktorej budete nastavova� pr�stup po��ta�a na Internet.";
	Agent_Speak(L_DSL_A_NeedToConnect5_Text);
	
    var L_DSL_A_NeedToConnect6_Text = "A nakoniec potrebujete zariadenie, ktor� vytv�ra fyzick� pripojenie po��ta�a na poskytovate�a internetov�ch slu�ieb.";
	Agent_Speak(L_DSL_A_NeedToConnect6_Text);
	
    var L_DSL_A_NeedToConnect7_Text = "To je ��elom tejto obrazovky.";
	Agent_Speak(L_DSL_A_NeedToConnect7_Text);
}

function Agent_DSL_AInternetSignup() 
{
    var L_DSL_A_AboutThisScreen1_Text = "Ak m�te internetov� konto, tieto inform�cie v�m u� poskytovate� internetov�ch slu�ieb odovzdal.";
	Agent_Speak(L_DSL_A_AboutThisScreen1_Text);
	
    var L_DSL_A_AboutThisScreen2_Text = "S nov�m po��ta�om sa nemus�te stara� o nov� internetov� konto.";
	Agent_Speak(L_DSL_A_AboutThisScreen2_Text);
	
    var L_DSL_A_AboutThisScreen3_Text = "M��ete pou��va� internetov� konto, ktor� ste pou��vali so star�m po��ta�om.";
	Agent_Speak(L_DSL_A_AboutThisScreen3_Text);
	
    var L_DSL_A_AboutThisScreen4_Text = "Ak ste sa z vlastn�ho po��ta�a nikdy neprip�jali na Internet, mo�no ste dostali inform�cie o internetovom konte pri k�pe po��ta�a.";
	Agent_Speak(L_DSL_A_AboutThisScreen4_Text);
	
    var L_DSL_A_AboutThisScreen5_Text = "Ak v�m predajca poskytol meno pou��vate�a, heslo a n�zov poskytovate�a internetov�ch slu�ieb, zadajte tieto inform�cie na obrazovke.";
	Agent_Speak(L_DSL_A_AboutThisScreen5_Text);
}



function Agent_DSL_BAddCommands() 
{

    var L_DSL_B_MenuCommand1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_DSL_B_MenuCommand2_Text = "�o je a&dresa IP?";
    var L_DSL_B_MenuCommand3_Text = "�o je &server DNS?";
    var L_DSL_B_MenuCommand4_Text = "Ako m�m p&okra�ova� �alej?";

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
    var L_DSL_B_AboutThisScreen1_Text = "Na predch�dzaj�cej obrazovke ste zadali inform�cie o internetovom konte, ktor� budete pou��va� na pripojenie na Internet.";
	Agent_Speak(L_DSL_B_AboutThisScreen1_Text);

    var L_DSL_B_AboutThisScreen2_Text = "Na tejto obrazovke poskytnete inform�cie o sp�sobe fyzick�ho pripojenia po��ta�a na Internet.";
	Agent_Speak(L_DSL_B_AboutThisScreen2_Text);
}

function Agent_OnDSL_BWhatIsIP() 
{
    var L_DSL_B_WhatIsIP1_Text = "Ka�d� po��ta� pripojen� na Internet m� adresu \"IP\" (Internet Protocol), ktor� predstavuje jedine�n� ��slo ur�uj�ce po��ta� medzi ostatn�mi po��ta�mi na Internete.";
	Agent_Speak(L_DSL_B_WhatIsIP1_Text);

    var L_DSL_B_WhatIsIP2_Text = "Po pripojen� poskytovate� internetov�ch slu�ieb automaticky pridel� po��ta�u adresu IP.";
	Agent_Speak(L_DSL_B_WhatIsIP2_Text);

    var L_DSL_B_WhatIsIP3_Text = "V tomto pr�pade v�ak mus�te zada� adresu IP ru�ne.";
	Agent_Speak(L_DSL_B_WhatIsIP3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_staticip, "Left");
	
	var L_DSL_B_WhatIsIP4_Text = "Sem zadajte adresu IP dodan� poskytovate�om internetov�ch slu�ieb.";
	Agent_Speak(L_DSL_B_WhatIsIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnDSL_BWhatIsDNS() 
{
    var L_DSL_B_WhatIsDNS1_Text = "Po��ta� m��e vyh�ada� adresy na Internete a� po pripojen� na server DNS (Domain Name Server), ktor� prira�uje po��ta�om na Internete adresy IP.";
	Agent_Speak(L_DSL_B_WhatIsDNS1_Text);

    var L_DSL_B_WhatIsDNS2_Text = "Vo v��ine pr�padov adresu DNS automaticky prira�uje poskytovate� internetov�ch slu�ieb.";
	Agent_Speak(L_DSL_B_WhatIsDNS2_Text);

    var L_DSL_B_WhatIsDNS3_Text = "Poskytovate� internetov�ch slu�ieb po�aduje nastavenie adresy DNS v po��ta�i.";
	Agent_Speak(L_DSL_B_WhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_prefdns, "Left");

    var L_DSL_B_WhatIsDNS4_Text = "Sem zadajte n�zov preferovan�ho servera DNS dodan� poskytovate�om internetov�ch slu�ieb";
	Agent_Speak(L_DSL_B_WhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.dsl_lbl_altdns, "Left");

    var L_DSL_B_WhatIsDNS5_Text = "a adresu alternat�vneho servera DNS, ktor� sa m� pou�i� v pr�pade, ke� preferovan� server DNS nie je k dispoz�cii.";
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
	
    var L_DSL_B_WhatToDoNext1_Text = "Pokra�ujte kliknut�m na tla�idlo �alej.";
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

    var L_DSL_B_WhatToDoNext2_Text = "Kliknut�m na tla�idlo Nasp� sa vr�tite na predch�dzaj�cu obrazovku.";
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

    var L_DSL_B_WhatToDoNext3_Text = "M��ete klikn�� aj na tla�idlo \"Presko�i�\" a pokra�ova� bez nastavenia pr�stupu po��ta�a na Internet.";
	Agent_Speak(L_DSL_B_WhatToDoNext3_Text);
    
    Agent_Play("RestPose");	
}



function Agent_ICONNECTAddCommands() 
{

    var L_ICONNECTMenuCommand1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_ICONNECTMenuCommand2_Text = "�o je s&tatick� adresa IP?";
    var L_ICONNECTMenuCommand3_Text = "�o je &server DNS?";
    var L_ICONNECTMenuCommand4_Text = "Ako m�m p&okra�ova� �alej?";

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
    var L_ICONNECTAboutThisScreen1_Text = "Na predch�dzaj�cej obrazovke ste zadali inform�cie o internetovom konte, ktor� budete pou��va� na pripojenie na Internet.";
	Agent_Speak(L_ICONNECTAboutThisScreen1_Text);

    var L_ICONNECTAboutThisScreen2_Text = "Na tejto obrazovke poskytnete inform�cie o sp�sobe fyzick�ho pripojenia po��ta�a na Internet.";
	Agent_Speak(L_ICONNECTAboutThisScreen2_Text);
}

function Agent_OnICONNECTWhatIsStaticIP() 
{
    var L_ICONNECTWhatIsStaticIP1_Text = "Ka�d� po��ta� pripojen� na Internet m� adresu \"IP\" (Internet Protocol), ktor� predstavuje jedine�n� ��slo ur�uj�ce po��ta� medzi ostatn�mi po��ta�mi na Internete.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP1_Text);

    var L_ICONNECTWhatIsStaticIP2_Text = "Po pripojen� poskytovate� internetov�ch slu�ieb automaticky pridel� po��ta�u adresu IP.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP2_Text);

    var L_ICONNECTWhatIsStaticIP3_Text = "V tomto pr�pade v�ak mus�te zada� adresu IP ru�ne.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_staticIP, "Left");
	
	var L_ICONNECTWhatIsStaticIP4_Text = "Sem zadajte adresu IP dodan� poskytovate�om internetov�ch slu�ieb.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnICONNECTWhatIsDNS() 
{
    var L_ICONNECTWhatIsDNS1_Text = "Po��ta� m��e vyh�ada� adresy na Internete a� po pripojen� na server DNS (Domain Name Server), ktor� prira�uje po��ta�om na Internete adresy IP.";
	Agent_Speak(L_ICONNECTWhatIsDNS1_Text);

    var L_ICONNECTWhatIsDNS2_Text = "Vo v��ine pr�padov adresu DNS automaticky prira�uje poskytovate� internetov�ch slu�ieb.";
	Agent_Speak(L_ICONNECTWhatIsDNS2_Text);

    var L_ICONNECTWhatIsDNS3_Text = "Poskytovate� internetov�ch slu�ieb po�aduje nastavenie adresy DNS v po��ta�i.";
	Agent_Speak(L_ICONNECTWhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_prefrDNS, "Left");

    var L_ICONNECTWhatIsDNS4_Text = "Sem zadajte n�zov preferovan�ho servera DNS dodan� poskytovate�om internetov�ch slu�ieb";
	Agent_Speak(L_ICONNECTWhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.iconnect_spn_alterDNS, "Left");

    var L_ICONNECTWhatIsDNS5_Text = "a adresu alternat�vneho servera DNS, ktor� sa m� pou�i� v pr�pade, ke� preferovan� server DNS nie je k dispoz�cii.";
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
	
    var L_ICONNECTWhatToDoNext1_Text = "Pokra�ujte kliknut�m na tla�idlo �alej.";
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

    var L_ICONNECTWhatToDoNext2_Text = "Alebo kliknite na tla�idlo \"Presko�i�\" a pokra�ujte bez nastavenia pr�stupu po��ta�a na Internet.";
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

    var L_ICONNECTWhatToDoNext3_Text = "Kliknut�m na tla�idlo Nasp� sa m��ete vr�ti� na predch�dzaj�cu obrazovku.";
	Agent_Speak(L_ICONNECTWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}





function Agent_ICNTLASTAddCommands() {

        var L_ICNTLASTMenuCommand1_Text = "�o m�m teraz &urobi�";
        var L_ICNTLASTMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke";
        var L_ICNTLASTMenuCommand3_Text = "Ako prejdem &na �al�iu obrazovku";

        
        
        

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

        var L_SCONNECTMenuCommand1_Text = "�o m�m teraz &urobi�";
        var L_SCONNECTMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke";
        var L_SCONNECTMenuCommand3_Text = "Ako prejdem &na �al�iu obrazovku";

        
        
        

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

        var L_SCNTLASTMenuCommand1_Text = "�o m�m teraz &urobi�";
        var L_SCNTLASTMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke";
        var L_SCNTLASTMenuCommand3_Text = "Ako prejdem &na �al�iu obrazovku";

        
        
        

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
    var L_BadPIDMenuCommand1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_BadPIDMenuCommand2_Text = "Ako m�m zada� &k�d Product Key?";
    var L_BadPIDMenuCommand3_Text = "�o ak nepozn�m k�d &Product Key?";
    var L_BadPIDMenuCommand4_Text = "�o ak k�d Product Key nie je &funk�n�?";
    var L_BadPIDMenuCommand5_Text = "Koho &m��em po�iada� o pomoc?";
    var L_BadPIDMenuCommand6_Text = "Ako m�m p&okra�ova� �alej?";
        
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
    var L_BadPIDAboutThisStep1_Text = "K�d Product Key zadan� na predch�dzaj�cej obrazovke nie je platn�.";
    Agent_Speak(L_BadPIDAboutThisStep1_Text);
    
    var L_BadPIDAboutThisStep2_Text = "To znamen�, �e sa nezhoduje s k�dom Product Key origin�lnej k�pie syst�mu Windows XP.";
    Agent_Speak(L_BadPIDAboutThisStep2_Text);

    var L_BadPIDAboutThisStep3_Text = "Syst�m Windows bez platn�ho k�du Product Key nebude pracova�.";
    Agent_Speak(L_BadPIDAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDAboutThisStep4_Text = "Ak si mysl�te, �e ste k�d zadali nespr�vne, kliknite na tla�idlo Nasp� a zadajte spr�vny k�d.";
    Agent_Speak(L_BadPIDAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep5_Text = "Ak ste si ist�, �e ste k�d zadali spr�vne, alebo ak ste sa o to viackr�t ne�spe�ne pok�sili, mo�no m�te nez�konn� k�piu syst�mu Windows.";
    Agent_Speak(L_BadPIDAboutThisStep5_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDAboutThisStep6_Text = "V takom pr�pade vypnite po��ta� kliknut�m na tla�idlo Vypn��.";
    Agent_Speak(L_BadPIDAboutThisStep6_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep7_Text = "V Spojen�ch �t�toch a v Kanade volajte na ��slo 1-800-R-U-LEGIT.";
    Agent_Speak(L_BadPIDAboutThisStep7_Text);

    var L_BadPIDAboutThisStep8_Text = "V ostatn�ch krajin�ch alebo na in�ch �zemiach sa spojte s miestnou pobo�kou spolo�nosti Microsoft.";
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
	
    var L_BadPIDHowToEnter1_Text = "Kliknut�m na tla�idlo Nasp� sa vr�tite na predch�dzaj�cu obrazovku.";
    Agent_Speak(L_BadPIDHowToEnter1_Text);
    
    Agent_Play("RestPose");
    
    var L_BadPIDHowToEnter2_Text = "V prvom poli, do ktor�ho sa maj� zada� �daje, sa zobraz� ukazovate� v tvare blikaj�cej zvislej �iary.";
    Agent_Speak(L_BadPIDHowToEnter2_Text);

    var L_BadPIDHowToEnter3_Text = "Po zadan� prv�ch piatich znakov sa ukazovate� automaticky presunie do �al�ieho po�a, kde sa m��e zada� �al��ch 5 znakov.";
    Agent_Speak(L_BadPIDHowToEnter3_Text);

    var L_BadPIDHowToEnter4_Text = "Nezad�vajte spojovn�ky. Mal� a ve�k� p�smen� sa nerozli�uj�.";
    Agent_Speak(L_BadPIDHowToEnter4_Text);

    var L_BadPIDHowToEnter5_Text = "Potom pokra�ujte kliknut�m na tla�idlo �alej.";
    Agent_Speak(L_BadPIDHowToEnter5_Text);
}

function Agent_OnBadPIDWhatIfNotKnown() 
{
    var L_BadPIDWhatIfNotKnown1_Text = "Ak k�d Product Key nie je uveden� na obale disku CD, skontrolujte �t�tok s Certifik�tom pravosti na po��ta�i alebo na zadnej strane pr�ru�ky �Za��name pracova��.";
    Agent_Speak(L_BadPIDWhatIfNotKnown1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
    
    var L_BadPIDWhatIfNotKnown2_Text = "Po vyh�adan� k�du Product Key kliknite na tla�idlo Nasp� a zadajte k�d Product Key do pol� na predch�dzaj�cej obrazovke.";
    Agent_Speak(L_BadPIDWhatIfNotKnown2_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotKnown3_Text = "Ak nem��ete n�js� k�d Product Key, obr�te sa na v�robcu po��ta�a na %s.";
    var re = /%s/i;
    var L_BadPIDWhatIfNotKnown4_Text = "Ak nem��ete n�js� k�d Product Key, obr�te sa na v�robcu po��ta�a.";

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
        Agent_Speak(L_BadPIDWhatIfNotKnown4_Text);
    else
        Agent_Speak(L_BadPIDWhatIfNotKnown3_Text.replace(re, strPhoneNumber));
}

function Agent_OnBadPIDWhatIfNotWorking() 
{
    var L_BadPIDWhatIfNotWorking1_Text = "Mo�no ste ho nezadali spr�vne.";
    Agent_Speak(L_BadPIDWhatIfNotWorking1_Text);
    
    var L_BadPIDWhatIfNotWorking2_Text = "Je potrebn� zada� v�etk�ch 25 znakov k�du Product Key.";
    Agent_Speak(L_BadPIDWhatIfNotWorking2_Text);

    var L_BadPIDWhatIfNotWorking3_Text = "Ka�d� �as� by mala pozost�va� z 5 p�smen alebo ��slic.";
    Agent_Speak(L_BadPIDWhatIfNotWorking3_Text);

    var L_BadPIDWhatIfNotWorking4_Text = "Syst�m Windows m��ete pou��va� a� po zadan� platn�ho k�du Product Key.";
    Agent_Speak(L_BadPIDWhatIfNotWorking4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDWhatIfNotWorking5_Text = "Ak si mysl�te, �e ste k�d zadali nespr�vne, kliknite na tla�idlo Nasp� a zadajte spr�vny k�d.";
    Agent_Speak(L_BadPIDWhatIfNotWorking5_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking6_Text = "Ak ste si ist�, �e ste k�d zadali spr�vne, alebo ak ste sa o to viackr�t ne�spe�ne pok�sili, mo�no m�te nez�konn� k�piu syst�mu Windows.";
    Agent_Speak(L_BadPIDWhatIfNotWorking6_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatIfNotWorking7_Text = "V takom pr�pade vypnite po��ta� kliknut�m na tla�idlo Vypn��.";
    Agent_Speak(L_BadPIDWhatIfNotWorking7_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking8_Text = "V Spojen�ch �t�toch a v Kanade volajte na ��slo 1-800-R-U-LEGIT.";
    Agent_Speak(L_BadPIDWhatIfNotWorking8_Text);

    var L_BadPIDWhatIfNotWorking9_Text = "V ostatn�ch krajin�ch alebo na in�ch �zemiach sa spojte s miestnou pobo�kou spolo�nosti Microsoft.";
    Agent_Speak(L_BadPIDWhatIfNotWorking9_Text);
}

function Agent_OnBadPIDWhoCanICall() 
{
    var L_BadPIDWhoCanICall1_Text = "Ak k�d Product Key nebol prijat�, v Spojen�ch �t�toch a v Kanade volajte na ��slo 1-800-RU-LEGIT.";
    Agent_Speak(L_BadPIDWhoCanICall1_Text);
    
    var L_BadPIDWhoCanICall2_Text = "V ostatn�ch krajin�ch alebo na in�ch �zemiach sa spojte s miestnou pobo�kou spolo�nosti Microsoft.";
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
	
    var L_BadPIDWhatToDoNext1_Text = "Kliknite na tla�idlo Nasp� a zadajte spr�vny k�d.";
    Agent_Speak(L_BadPIDWhatToDoNext1_Text);
    
    var L_BadPIDWhatToDoNext2_Text = "Ak k�d Product Key nebol prijat�, mo�no m�te nez�konn� k�piu syst�mu Windows.";
    Agent_Speak(L_BadPIDWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatToDoNext3_Text = "V tom pr�pade vypnite po��ta� kliknut�m na tla�idlo Vypn��. ";
    Agent_Speak(L_BadPIDWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatToDoNext4_Text = "V Spojen�ch �t�toch a v Kanade volajte na ��slo 1-800-R-U-LEGIT.";
    Agent_Speak(L_BadPIDWhatToDoNext4_Text);

    var L_BadPIDWhatToDoNext5_Text = "V ostatn�ch krajin�ch alebo na in�ch �zemiach sa spojte s miestnou pobo�kou spolo�nosti Microsoft.";
    Agent_Speak(L_BadPIDWhatToDoNext5_Text);
}



function Agent_IconnAddCommands() 
{
    var L_IconnMenuCommand1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_IconnMenuCommand2_Text = "Ktor� &mo�nos� m�m vybra�?";
    var L_IconnMenuCommand3_Text = "Ako m�m p&okra�ova� �alej?";

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
    var L_IconnAboutThisStep1_Text = "�spe�ne ste nain�talovali syst�m Windows XP!";
    Agent_Speak(L_IconnAboutThisStep1_Text); 
      
    var L_IconnAboutThisStep2_Text = "Teraz m��ete nastavi� pr�stup po��ta�a na Internet.";
    Agent_Speak(L_IconnAboutThisStep2_Text);
       
    var L_IconnAboutThisStep3_Text = "Ak to nechcete urobi� teraz, Sprievodcu pripojen�m na Internet m��ete spusti� z ponuky �tart po in�tal�cii syst�mu Windows.";
    Agent_Speak(L_IconnAboutThisStep3_Text);
}

function Agent_IconnWhichOption() 
{    
    var L_IconnWhichOption1_Text = "Ak chcete pou�i� poskytovate�a internetov�ch slu�ieb (\"ISP\"), ktor� vy�aduje in�tal�ciu vlastn�ho softv�ru, vyberte mo�nos� Nie.";
    Agent_Speak(L_IconnWhichOption1_Text); 
      
    var L_IconnWhichOption2_Text = "V takom pr�pade v�m poskytovate�a internetov�ch slu�ieb dodal disk CD.";
    Agent_Speak(L_IconnWhichOption2_Text);
       
    var L_IconnWhichOption3_Text = "Po in�tal�cii syst�mu Windows nastavte pr�stup po��ta�a na Internet.";
    Agent_Speak(L_IconnWhichOption3_Text);
}

function Agent_OnIconnWhatToDoNext() 
{      
    Agent_GestureAtElement(g.radioYesIconn, "Left");  
    
    var L_IconnWhatToDoNext1_Text = "Ak pri nastaven� pripojenia na Internet potrebujete pomoc, kliknite na mo�nos� �no.";
    Agent_Speak(L_IconnWhatToDoNext1_Text);
    
    Agent_Play("RestPose"); 
        
    Agent_GestureAtElement(g.radioNoIconn, "Left");  
    
    var L_IconnWhatToDoNext2_Text = "Ak teraz nechcete vytvori� internetov� pripojenie, vyberte mo�nos� \"Nie\".";
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

    var L_IconnWhatToDoNext3_Text = "Potom pokra�ujte kliknut�m na tla�idlo �alej.";
    Agent_Speak(L_IconnWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPAddCommands() 
{
    var L_ISPMenuCommand1_Text = "Chcem in&form�cie o tomto kroku.";
    var L_ISPMenuCommand2_Text = "�o &ak mi predajca po��ta�a poskytol inform�cie o konte?";
    var L_ISPMenuCommand3_Text = "Ako m�m p&okra�ova� �alej?";

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
    var L_ISPAboutThisStep1_Text = "Na tejto obrazovke m��ete vybra� sp�sob pr�stupu na Internet.";
    Agent_Speak(L_ISPAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");

    var L_ISPAboutThisStep2_Text = "M��ete pou�i� slu�bu MSN";
    Agent_Speak(L_ISPAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");

        var L_ISPAboutThisStep3_Text = "alebo in�ho poskytovate�a internetov�ch slu�ieb.";
        Agent_Speak(L_ISPAboutThisStep3_Text);
        
        Agent_Play("RestPose");
    }
    
    Agent_GestureAtElement(g.radioSkip, "Left");

    var L_ISPAboutThisStep4_Text = "M��ete pokra�ova� aj bez nastavenia internetov�ho pripojenia.";
    Agent_Speak(L_ISPAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPWhatIfGivenAccount() 
{
    var L_ISPWhatIfGivenAccount1_Text = "Pri k�pe po��ta�a v�m mo�no predajca poskytol inform�cie o internetovom konte.";
	Agent_Speak(L_ISPWhatIfGivenAccount1_Text);
	
    var L_ISPWhatIfGivenAccount2_Text = "Inform�cie o konte obsahuj� meno pou��vate�a, heslo, n�zov poskytovate�a internetov�ch slu�ieb a telef�nne ��slo.";
	Agent_Speak(L_ISPWhatIfGivenAccount2_Text);
	
    var L_ISPWhatIfGivenAccount3_Text = "Ak m�te tieto inform�cie, potom u� m�te internetov� konto.";
	Agent_Speak(L_ISPWhatIfGivenAccount3_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");
	
    var L_ISPWhatIfGivenAccount4_Text = "Ak m� poskytovate� internetov�ch slu�ieb n�zov MSN, vyberte prv� mo�nos�.";
	Agent_Speak(L_ISPWhatIfGivenAccount4_Text);
    
    Agent_Play("RestPose");

    
    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");
    	
        var L_ISPWhatIfGivenAccount5_Text = "Ak poskytovate� internetov�ch slu�ieb nem� n�zov, vyberte druh� mo�nos�.";
    	Agent_Speak(L_ISPWhatIfGivenAccount5_Text);
        
        Agent_Play("RestPose");
    }

    Agent_GestureAtElement(g.radioSkip, "Left");
    
    var L_ISPWhatIfGivenAccount6_Text = "Ak chcete nastavi� internetov� pripojenie nesk�r, vyberte posledn� mo�nos�.";
	Agent_Speak(L_ISPWhatIfGivenAccount6_Text);
			    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_ISPWhatIfGivenAccount7_Text = "Potom kliknite na tla�idlo �alej.";
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
    
    var L_ISPWhatToDoNext1_Text = "Po v�bere mo�nosti kliknite na tla�idlo �alej.";
	Agent_Speak(L_ISPWhatToDoNext1_Text);
	
	Agent_Play("RestPose");
}



function Agent_ICSAddCommands() 
{
	var L_ICSAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
	var L_ICSAddCommands2_Text = "�o je &br�na firewall na pripojenie na Internet?";
	var L_ICSAddCommands3_Text = "�o je Sprievodca &dom�cou sie�ou?";
	
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
	var L_ICSAboutThisStep1_Text = "Na tejto obrazovke m��ete zvoli� sp�sob, ktor�m bude tento po��ta� pristupova� na Internet.";
	Agent_Speak(L_ICSAboutThisStep1_Text);
	
	var L_ICSAboutThisStep2_Text = "Ak je tento po��ta� pripojen� do siete ostatn�ch po��ta�ov, m��ete t�to sie� pou�i� na pr�stup na Internet.";
	Agent_Speak(L_ICSAboutThisStep2_Text);
	
	var L_ICSAboutThisStep3_Text = "V opa�nom pr�pade mo�no nastavi� priame pripojenie po��ta�a na Internet.";
	Agent_Speak(L_ICSAboutThisStep3_Text);
	
	var L_ICSAboutThisStep4_Text = "Bez oh�adu na vybrat� mo�nos� syst�m Windows XP chr�ni po��ta� pomocou br�ny firewall pre pripojenie na Internet. T�to br�na zais�uje ochranu po��ta�a pred neopr�vnen�m pr�stupom pou��vate�ov Internetu.";
	Agent_Speak(L_ICSAboutThisStep4_Text);
}
	
function Agent_ICSWhatIsFirewall() 
{
	var L_ICSWhatIsFirewall1_Text = "Firewall je syst�m zabezpe�enia ur�en� na ochranu po��ta�a alebo po��ta�ovej siete pred vonkaj��mi hrozbami, ako s� �toky hackerov prich�dzaj�ce inej siete, napr�klad z Internetu.";
	Agent_Speak(L_ICSWhatIsFirewall1_Text);
	
	var L_ICSWhatIsFirewall2_Text = "Po nastaven� siete v syst�me Windows XP sa automaticky zapne funkcia Br�na firewall pre pripojenie na Internet.";
	Agent_Speak(L_ICSWhatIsFirewall2_Text);
	
	var L_ICSWhatIsFirewall3_Text = "Zapne sa aj v pr�pade, ak po��ta� nepatr� k sieti, ale prip�ja sa na Internet priamo.";
	Agent_Speak(L_ICSWhatIsFirewall3_Text);
}
	
function Agent_ICSWhatIsNetworkWizard() 
{
	var L_ICSWhatIsNetworkWizard1_Text = "Sprievodca v�s prevedie v�etk�mi krokmi nastavenia siete doma alebo v pr�ci.";
	Agent_Speak(L_ICSWhatIsNetworkWizard1_Text);
	
	var L_ICSWhatIsNetworkWizard2_Text = "Ak nechcete pripoji� po��ta� na sie� v tomto procesu, m��ete to urobi� nesk�r.";
	Agent_Speak(L_ICSWhatIsNetworkWizard2_Text);
	
	var L_ICSWhatIsNetworkWizard3_Text = "V ponuke �tart kliknite na polo�ku �al�ie programy.";
	Agent_Speak(L_ICSWhatIsNetworkWizard3_Text);
	
	var L_ICSWhatIsNetworkWizard4_Text = "Potom kliknite na polo�ku Pr�slu�enstvo, polo�ku Komunik�cia a vyh�adajte polo�ku Sprievodca dom�cou sie�ou.";
	Agent_Speak(L_ICSWhatIsNetworkWizard4_Text);
	
	var L_ICSWhatIsNetworkWizard5_Text = "Ak ste zabudli postup, kliknite na polo�ku Pomoc a technick� podpora v ponuke �tart, kde n�jdete odpovede na ot�zky a �al�ie cenn� inform�cie.";
	Agent_Speak(L_ICSWhatIsNetworkWizard5_Text);
}



function Agent_ICSDCAddCommands() 
{
	var L_ICSDCAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
	var L_ICSDCAddCommands2_Text = "Ako m�m p&okra�ova� �alej?";
	
	g_AgentCharacter.Commands.Add("Agent_ICSDCAboutThisStep", L_ICSDCAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_ICSDCWhatToDoNext", L_ICSDCAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_ICSDCAboutThisStep() 
{
	var L_ICSDCAboutThisStep1_Text = "T�to obrazovka informuje, �e po��ta� sa odpojil od Internetu.";
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
    
	var L_ICSDCWhatToDoNext1_Text = "Sk�ste sa znovu pripoji� na Internet kliknut�m na tla�idlo Znova.";
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
    
	var L_ICSDCWhatToDoNext2_Text = "Ak chcete pokra�ova� bez pripojenia na Internet, kliknite na tla�idlo \"Presko�i�\".";
	Agent_Speak(L_ICSDCWhatToDoNext2_Text);
	
	Agent_Play("RestPose");
}



function Agent_Ident1AddCommands() 
{
    var L_Ident1AddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_Ident1AddCommands2_Text = "�o je &pou��vate�sk� konto?";
    var L_Ident1AddCommands3_Text = "Ak� s� &v�hody nastavenia pou��vate�sk�ch kont?";
    var L_Ident1AddCommands4_Text = "Ako m�m p&okra�ova� �alej?";

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
	var L_Ident1AboutThisStep1_Text = "Na tejto obrazovke m��ete ur�i� �al��ch pou��vate�ov po��ta�a.";
	Agent_Speak(L_Ident1AboutThisStep1_Text);
	
	var L_Ident1AboutThisStep2_Text = "V pr�pade zdie�ania po��ta�a ka�d� pou��vate� m��e prisp�sobi� syst�m Windows XP nastaven�m osobn�ho konta.";
	Agent_Speak(L_Ident1AboutThisStep2_Text);
    
    var L_Ident1AboutThisStep3_Text = "Takto m��e ma� ka�d� pou��vate� vlastn� nastavenie po��ta�a, vlastn� opr�vnenia, osobn� s�bory, prepojenia na webov� lokality a �al�ie mo�nosti bez toho, aby ovplyvnil nastavenie in�ho pou��vate�a.";
    Agent_Speak(L_Ident1AboutThisStep3_Text);
    
    var L_Ident1AboutThisStep4_Text = "Po spusten� po��ta�a sa na �vodnej obrazovke zobrazia v abecednom porad� v�etky men�, ktor� sem zad�te.";
    Agent_Speak(L_Ident1AboutThisStep4_Text);
    
    var L_Ident1AboutThisStep5_Text = "Zobraz� sa aj obr�zok ka�d�ho pou��vate�a.";
    Agent_Speak(L_Ident1AboutThisStep5_Text);
    
    var L_Ident1AboutThisStep6_Text = "Tieto men� m��ete nesk�r zmeni�, ak v ponuke �tart kliknete na polo�ku Ovl�dac� panel a potom na ikonu Pou��vate�sk� kont�.";
    Agent_Speak(L_Ident1AboutThisStep6_Text);
}

function Agent_Ident1Command_WhatIsUserAccount() 
{	
	var L_Ident1WhatIsUserAccount1_Text = "Pou��vate�sk� kont� s� u�ito�n�, ak zdie�ate po��ta� s in�mi pou��vate�mi doma alebo v pr�ci.";
	Agent_Speak(L_Ident1WhatIsUserAccount1_Text);
	
	var L_Ident1WhatIsUserAccount2_Text = "Pou��vate�sk� kont� umo��uj�:";
	Agent_Speak(L_Ident1WhatIsUserAccount2_Text);
    
    var L_Ident1WhatIsUserAccount3_Text = "nastavi� sp�sob organizovania a zobrazovania inform�ci� v syst�me Windows bez zmeny predvolen�ch nastaven� in�ch pou��vate�ov,";
    Agent_Speak(L_Ident1WhatIsUserAccount3_Text);
    
    var L_Ident1WhatIsUserAccount4_Text = "vy�adova� heslo na pr�stup k va�im s�borom,";
    Agent_Speak(L_Ident1WhatIsUserAccount4_Text);
    
    var L_Ident1WhatIsUserAccount5_Text = "ulo�i� osobn� zoznam ob��ben�ch webov�ch polo�iek a naposledy nav�t�ven�ch str�nok,";
    Agent_Speak(L_Ident1WhatIsUserAccount5_Text);
    
    var L_Ident1WhatIsUserAccount6_Text = "chr�ni� d�le�it� nastavenia po��ta�a,";
    Agent_Speak(L_Ident1WhatIsUserAccount6_Text);
    
    var L_Ident1WhatIsUserAccount7_Text = "prisp�sobi� pracovn� plochu pre ka�d�ho pou��vate�a a";
    Agent_Speak(L_Ident1WhatIsUserAccount7_Text);
    
    var L_Ident1WhatIsUserAccount8_Text = "zjednodu�i� prihlasovanie pou��vate�ov po��ta�a a r�chle prep�nanie medzi pou��vate�mi.";
    Agent_Speak(L_Ident1WhatIsUserAccount8_Text);
}

function Agent_Ident1Command_Benefits() 
{	
	var L_Ident1Benefits1_Text = "Zdie�anie po��ta�a v minulosti znamenalo, �e in� pou��vatelia mohli prezera� va�e osobn� s�bory, in�talova� hry alebo in� softv�r, alebo meni� nastavenie po��ta�a.";
	Agent_Speak(L_Ident1Benefits1_Text);
	
	var L_Ident1Benefits2_Text = "Teraz to u� neplat�!";
	Agent_Speak(L_Ident1Benefits2_Text);
    
    var L_Ident1Benefits3_Text = "Ka�d� pou��vate� s pou��vate�sk�m kontom m��e prisp�sobi� syst�m Windows bez toho, aby ovplyvnil nastavenie ostatn�ch pou��vate�ov.";
    Agent_Speak(L_Ident1Benefits3_Text);
    
    var L_Ident1Benefits4_Text = "�al�ie inform�cie o pou��vate�sk�ch kont�ch, odpovede na ot�zky a �al�ie cenn� inform�cie n�jdete po kliknut� na polo�ku Pomoc a technick� podpora v ponuke �tart.";
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
    
    var L_Ident1WhatToDoNext1_Text = "Po zadan� mien ostatn�ch pou��vate�ov po��ta�a pokra�ujte kliknut�m na tla�idlo �alej.";
    Agent_Speak(L_Ident1WhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_Ident1WhatToDoNext2_Text = "Po in�tal�cii syst�mu Windows m��ete men� zmeni� a prida� �al��ch pou��vate�ov.";
    Agent_Speak(L_Ident1WhatToDoNext2_Text);
        
    var L_Ident1WhatToDoNext3_Text = "Kliknite na polo�ku Ovl�dac� panel v ponuke �tart a potom na polo�ku Pou��vate�sk� kont�.";
    Agent_Speak(L_Ident1WhatToDoNext3_Text);
}



function Agent_IdentitiesAddCommands() 
{
    var L_IdentitiesAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_IdentitiesAddCommands2_Text = "�o je &pou��vate�sk� konto?";
    var L_IdentitiesAddCommands3_Text = "Ak� s� &v�hody nastavenia pou��vate�sk�ch kont?";
    var L_IdentitiesAddCommands4_Text = "Ako m�m p&okra�ova� �alej?";

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
	var L_IdentitiesAboutThisStep1_Text = "Na tejto obrazovke m��ete ur�i� �al��ch pou��vate�ov po��ta�a.";
	Agent_Speak(L_IdentitiesAboutThisStep1_Text);
	
	var L_IdentitiesAboutThisStep2_Text = "V pr�pade zdie�ania po��ta�a ka�d� pou��vate� m��e prisp�sobi� syst�m Windows XP nastaven�m osobn�ho konta.";
	Agent_Speak(L_IdentitiesAboutThisStep2_Text);
    
    var L_IdentitiesAboutThisStep3_Text = "Takto m��e ma� ka�d� pou��vate� vlastn� nastavenie po��ta�a, vlastn� opr�vnenia, osobn� s�bory, prepojenia na webov� lokality a �al�ie mo�nosti bez toho, aby ovplyvnil nastavenie in�ho pou��vate�a.";
    Agent_Speak(L_IdentitiesAboutThisStep3_Text);
    
    var L_IdentitiesAboutThisStep4_Text = "Po spusten� po��ta�a sa na �vodnej obrazovke zobrazia v abecednom porad� v�etky men�, ktor� sem zad�te.";
    Agent_Speak(L_IdentitiesAboutThisStep4_Text);
    
    var L_IdentitiesAboutThisStep5_Text = "Zobraz� sa aj obr�zok ka�d�ho pou��vate�a.";
    Agent_Speak(L_IdentitiesAboutThisStep5_Text);
    
    var L_IdentitiesAboutThisStep6_Text = "Tieto men� m��ete nesk�r zmeni�, ak v ponuke �tart kliknete na polo�ku Ovl�dac� panel a potom na ikonu Pou��vate�sk� kont�.";
    Agent_Speak(L_IdentitiesAboutThisStep6_Text);
}

function Agent_IdentitiesCommand_WhatIsUserAccount() 
{	
	var L_IdentitiesWhatIsUserAccount1_Text = "Pou��vate�sk� kont� s� u�ito�n�, ak zdie�ate po��ta� s in�mi pou��vate�mi doma alebo v pr�ci.";
	Agent_Speak(L_IdentitiesWhatIsUserAccount1_Text);
	
	var L_IdentitiesWhatIsUserAccount2_Text = "Pou��vate�sk� kont� umo��uj�:";
	Agent_Speak(L_IdentitiesWhatIsUserAccount2_Text);
    
    var L_IdentitiesWhatIsUserAccount3_Text = "nastavi� sp�sob organizovania a zobrazovania inform�ci� v syst�me Windows bez zmeny predvolen�ch nastaven� in�ch pou��vate�ov,";
    Agent_Speak(L_IdentitiesWhatIsUserAccount3_Text);
    
    var L_IdentitiesWhatIsUserAccount4_Text = "vy�adova� heslo na pr�stup k va�im s�borom,";
    Agent_Speak(L_IdentitiesWhatIsUserAccount4_Text);
    
    var L_IdentitiesWhatIsUserAccount5_Text = "ulo�i� osobn� zoznam ob��ben�ch webov�ch polo�iek a naposledy nav�t�ven�ch str�nok,";
    Agent_Speak(L_IdentitiesWhatIsUserAccount5_Text);
    
    var L_IdentitiesWhatIsUserAccount6_Text = "chr�ni� d�le�it� nastavenia po��ta�a,";
    Agent_Speak(L_IdentitiesWhatIsUserAccount6_Text);
    
    var L_IdentitiesWhatIsUserAccount7_Text = "prisp�sobi� pracovn� plochu pre ka�d�ho pou��vate�a a";
    Agent_Speak(L_IdentitiesWhatIsUserAccount7_Text);
    
    var L_IdentitiesWhatIsUserAccount8_Text = "zjednodu�i� prihlasovanie pou��vate�ov po��ta�a a r�chle prep�nanie medzi pou��vate�mi.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount8_Text);
}

function Agent_IdentitiesCommand_Benefits() 
{	
	var L_IdentitiesBenefits1_Text = "Zdie�anie po��ta�a v minulosti znamenalo, �e in� pou��vatelia mohli prezera� va�e osobn� s�bory, in�talova� hry alebo in� softv�r, alebo meni� nastavenie po��ta�a.";
	Agent_Speak(L_IdentitiesBenefits1_Text);
	
	var L_IdentitiesBenefits2_Text = "Teraz to u� neplat�!";
	Agent_Speak(L_IdentitiesBenefits2_Text);
    
    var L_IdentitiesBenefits3_Text = "Ka�d� pou��vate� s pou��vate�sk�m kontom m��e prisp�sobi� syst�m Windows bez toho, aby ovplyvnil nastavenie ostatn�ch pou��vate�ov.";
    Agent_Speak(L_IdentitiesBenefits3_Text);
    
    var L_IdentitiesBenefits4_Text = "�al�ie inform�cie o pou��vate�sk�ch kont�ch, odpovede na ot�zky a �al�ie cenn� inform�cie n�jdete po kliknut� na polo�ku Pomoc a technick� podpora v ponuke �tart.";
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
    
    var L_IdentitiesWhatToDoNext1_Text = "Po zadan� mien ostatn�ch pou��vate�ov po��ta�a pokra�ujte kliknut�m na tla�idlo �alej.";
    Agent_Speak(L_IdentitiesWhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_IdentitiesWhatToDoNext2_Text = "Po in�tal�cii syst�mu Windows m��ete men� zmeni� a prida� �al��ch pou��vate�ov.";
    Agent_Speak(L_IdentitiesWhatToDoNext2_Text);
        
    var L_IdentitiesWhatToDoNext3_Text = "Kliknite na polo�ku Ovl�dac� panel v ponuke �tart a potom na polo�ku Pou��vate�sk� kont�.";
    Agent_Speak(L_IdentitiesWhatToDoNext3_Text);
}



function Agent_KeybdAddCommands() 
{
	var L_KeybdMenuCommand1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_KeybdMenuCommand2_Text = "Ako vyberiem nastavenie k&rajiny?";
    var L_KeybdMenuCommand3_Text = "&Ako vyberiem nastavenie jazyka?";
    var L_KeybdMenuCommand4_Text = "Ako vyberiem nastavenie &kl�vesnice?";

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
    var L_KeybdAboutThisStep1_Text = "Na �al��ch obrazovk�ch m��ete vybra� sp�sob zobrazovania textu, d�tumu a ��sel v syst�me Windows pod�a jazyka, �zemia a �asov�ho p�sma.";
    Agent_Speak(L_KeybdAboutThisStep1_Text);
        
    var L_KeybdAboutThisStep2_Text = "Na tejto obrazovke napr�klad m��ete vybra� �zemie, ktor� je najbli��ie k miestu, kde �ijete, jazyk, ktor� budete pri pr�ci s po��ta�om naj�astej�ie pou��va�, a kl�vesnicu.";
    Agent_Speak(L_KeybdAboutThisStep2_Text);
        
    var L_KeybdAboutThisStep3_Text = "Syst�m Windows zaist� spr�vne zobrazenie d�tumu, �asu a meny.";
    Agent_Speak(L_KeybdAboutThisStep3_Text);
        
    var L_KeybdAboutThisStep4_Text = "Ak ste napr�klad ako �zemie vybrali Spojen� �t�ty a ako jazyk ste nastavili angli�tinu, pe�a�n� �iastky sa zobrazia v americk�ch dol�roch.";
    Agent_Speak(L_KeybdAboutThisStep4_Text);

    var L_KeybdAboutThisStep5_Text = "Ak v�ak namiesto toho ako �zemie vyberiete Ve�k� Brit�niu, pe�a�n� �iastky sa zobrazia v libr�ch.";
    Agent_Speak(L_KeybdAboutThisStep5_Text);
}

function Agent_KeybdHowToSelectRegion() 
{     
    Agent_GestureAtElement(g.selRegion, "Left");
     
    var L_KeybdHowToSelectRegion1_Text = "�zemia s� v zozname uveden� v abecednom porad�.";
    Agent_Speak(L_KeybdHowToSelectRegion1_Text);	
   
    var L_KeybdHowToSelectRegion2_Text = "Polo�ku vyh�adajte klikan�m v zozname alebo opakovan�m stl��an�m kl�vesu Tab.";
    Agent_Speak(L_KeybdHowToSelectRegion2_Text);	
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selRegion, "Right");
        
    var L_KeybdHowToSelectRegion3_Text = "V zozname �zem� sa pos�vajte kliknut�m na mal� tla�idl� so ��pkami alebo pou�ite kl�vesy so ��pkami nahor a nadol.";
    Agent_Speak(L_KeybdHowToSelectRegion3_Text);
        
    var L_KeybdHowToSelectRegion4_Text = "Ke� sa zobraz� �zemie, ktor� je k v�m najbli��ie, kliknite na polo�ku alebo stla�te kl�ves Enter.";
    Agent_Speak(L_KeybdHowToSelectRegion4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.RegionName, "Left");

    var L_KeybdHowToSelectRegion5_Text = "Vybrat� �zemie sa zobraz� v tomto poli.";
    Agent_Speak(L_KeybdHowToSelectRegion5_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectLanguage() 
{        		
    var L_KeybdHowToSelectLanguage1_Text = "Vyberte jazyk, ktor� naj�astej�ie pou��vate na komunik�ciu.";
    Agent_Speak(L_KeybdHowToSelectLanguage1_Text);
        
    var L_KeybdHowToSelectLanguage2_Text = "Ak napr�klad hovor�te naj�astej�ie po slovensky, ale po��ta�ov� programy a s�bory, s ktor�mi pracujete, s� zvy�ajne v angli�tine, vyberte angli�tinu.";
    Agent_Speak(L_KeybdHowToSelectLanguage2_Text);   
        
    Agent_GestureAtElement(g.selLang, "Left");  
        
    var L_KeybdHowToSelectLanguage3_Text = "Jazyky s� v zozname uveden� v abecednom porad�.";
    Agent_Speak(L_KeybdHowToSelectLanguage3_Text);

    var L_KeybdHowToSelectLanguage4_Text = "Polo�ku vyh�adajte klikan�m sem alebo opakovan�m stl��an�m kl�vesu Tab.";
    Agent_Speak(L_KeybdHowToSelectLanguage4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selLang, "Right");

    var L_KeybdHowToSelectLanguage5_Text = "V zozname �zem� sa pos�vajte kliknut�m na mal� tla�idl� so ��pkami alebo pou�ite kl�vesy so ��pkami nahor a nadol.";
    Agent_Speak(L_KeybdHowToSelectLanguage5_Text);

    var L_KeybdHowToSelectLanguage6_Text = "Ke� sa zobraz� po�adovan� jazyk, kliknite na� alebo stla�te kl�ves Enter.";
    Agent_Speak(L_KeybdHowToSelectLanguage6_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.LangName, "Left");

    var L_KeybdHowToSelectLanguage7_Text = "Vybrat� jazyk sa zobraz� v tomto poli.";
    Agent_Speak(L_KeybdHowToSelectLanguage7_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectKeyboard() 
{		
    var L_KeybdHowToSelectKeyboard1_Text = "Kl�vesnice s� v zozname uveden� v abecednom porad�.";
    Agent_Speak(L_KeybdHowToSelectKeyboard1_Text);
    
    Agent_GestureAtElement(g.selKeyboard, "Left");
        
    var L_KeybdHowToSelectKeyboard2_Text = "Polo�ku vyh�adajte klikan�m sem alebo opakovan�m stl��an�m kl�vesu Tab.";
    Agent_Speak(L_KeybdHowToSelectKeyboard2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selKeyboard, "Right");
        
    var L_KeybdHowToSelectKeyboard3_Text = "V zozname sa pos�vajte kliknut�m na mal� tla�idl� so ��pkami alebo pou�ite kl�vesy so ��pkami nahor a nadol.";
    Agent_Speak(L_KeybdHowToSelectKeyboard3_Text);
        
    var L_KeybdHowToSelectKeyboard4_Text = "Ke� sa zobraz� kl�vesnica, ktor� pou��vate, kliknite na �u alebo stla�te kl�ves Enter.";
    Agent_Speak(L_KeybdHowToSelectKeyboard4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.KeyboardName, "Left");

    var L_KeybdHowToSelectKeyboard5_Text = "Vybrat� kl�vesnica sa zobraz� v tomto poli.";
    Agent_Speak(L_KeybdHowToSelectKeyboard5_Text);
    
    Agent_Play("RestPose");
}



function Agent_EulaAddCommands() 
{
    var L_EulaCommand1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_EulaCommand2_Text = "O&zna�enie odpovede";
    var L_EulaCommand3_Text = "�o je &Licen�n� zmluva koncov�ho pou��vate�a?";
    var L_EulaCommand4_Text = "�o je v Li&cen�nej zmluve koncov�ho pou��vate�a?";
    var L_EulaCommand5_Text = "&Pre�o nie je k dispoz�cii tla�idlo �alej?";
    var L_EulaCommand6_Text = "Ako m�m p&okra�ova� �alej?";

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
        var L_EulaMenuCommand5_Text = "Pre�o nie je k &dispoz�cii tla�idlo �alej?";

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
    var L_EulaAboutThisStep1_Text = "Na tejto obrazovke si m��ete pre��ta� Licen�n� zmluvu na syst�m Microsoft Windows a vyjadri�, �i s �ou s�hlas�te.";
    Agent_Speak(L_EulaAboutThisStep1_Text);		
    
    Agent_GestureAtElement(g.txtEULA,"Left");
        
    var L_EulaAboutThisStep2_Text = "Ak chcete pou��va� syst�m Windows, mus�te s�hlasi� s touto zmluvou.";
    Agent_Speak(L_EulaAboutThisStep2_Text);
    
    Agent_Play("RestPose");
}

function Agent_EulaHowToAnswer() 
{		
    Agent_GestureAtElement(g.radioAgree,"Left");
    
    var L_EulaHowToAnswer1_Text = "Umiestnite ukazovate� my�i do prep�na�a na�avo od vybratej odpovede a kliknite.";
    Agent_Speak(L_EulaHowToAnswer1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaHowToAnswer2_Text = "Potom kliknite na tla�idlo �alej.";
    Agent_Speak(L_EulaHowToAnswer2_Text);
}

function Agent_EulaWhatIsEula() 
{		
    var L_EulaWhatIsEula1_Text = "Pou��vanie produktov spolo�nosti Microsoft sa riadi podmienkami Licen�nej zmluvy koncov�ho pou��vate�a a z�konom o ochrane autorsk�ch pr�v.";
    Agent_Speak(L_EulaWhatIsEula1_Text);
        
    var L_EulaWhatIsEula2_Text = "Licen�n� zmluva koncov�ho pou��vate�a je zmluva, ktor� uv�dza podmienky opr�vnen�ho pou��vania produktu s licenciou a ude�uje v�m pr�vo pou��va� produkt vo va�om po��ta�i.";
    Agent_Speak(L_EulaWhatIsEula2_Text);
}

function Agent_EulaWhatDoesEulaSay() 
{		
    var L_EulaWhatDoesEulaSay1_Text = "Po vyjadren� s�hlasu s podmienkami Licen�nej zmluvy koncov�ho pou��vate�a z�skate opr�vnenie pou��va� syst�m Windows XP a �al�ie pr�va.";
    Agent_Speak(L_EulaWhatDoesEulaSay1_Text);
        
    var L_EulaWhatDoesEulaSay2_Text = "Vypl�vaj� z toho aj ur�it� obmedzenia pou��vania syst�mu Windows XP.";
    Agent_Speak(L_EulaWhatDoesEulaSay2_Text);	
    
    Agent_GestureAtElement(g.txtEULA,"Right");	
        
    var L_EulaWhatDoesEulaSay3_Text = "Podrobnosti n�jdete v �asti �Udelenie licencie�.";
    Agent_Speak(L_EulaWhatDoesEulaSay3_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatDoesEulaSay4_Text = "Licen�n� zmluva koncov�ho pou��vate�a popisuje aj obmedzen� z�ruku a podmienky, za ktor�ch m��ete vytvori� k�piu syst�mu Windows XP na ��ely z�lohovanie alebo archiv�cie.";
    Agent_Speak(L_EulaWhatDoesEulaSay4_Text);
}

function Agent_EulaWhereIsNextButton() 
{		
    var L_EulaWhereIsNextButton1_Text = "Tla�idlo �alej nie je k dispoz�cii, preto�e ste neuviedli, �i s�hlas�te s touto Licen�nou zmluvou.";
    Agent_Speak(L_EulaWhereIsNextButton1_Text);
        
    var L_EulaWhereIsNextButton2_Text = "Najprv mus�te klikn�� na tla�idlo �no alebo Nie.";
    Agent_Speak(L_EulaWhereIsNextButton2_Text);
}

function Agent_EulaWhatToDoNext() 
{			
    Agent_GestureAtElement(g.radioAgree,"Left");
    	
    var L_EulaWhatToDoNext1_Text = "Po pre��tan� Licen�nej zmluvy m��ete vyjadri� svoj s�hlas kliknut�m na tla�idlo �no.";
    Agent_Speak(L_EulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatToDoNext2_Text = "Ak so zmluvou nes�hlas�te, kliknite na tla�idlo Nie.";
    Agent_Speak(L_EulaWhatToDoNext2_Text);
        
    var L_EulaWhatToDoNext3_Text = "Ak chcete �alej pou��va� syst�m Windows, mus�te s�hlasi� s touto zmluvou.";
    Agent_Speak(L_EulaWhatToDoNext3_Text);
    			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_EulaWhatToDoNext4_Text = "Potom prejdite na �al�iu obrazovku kliknut�m na tla�idlo �alej.";
    Agent_Speak(L_EulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_BadEulaAddCommands() {

    var L_BadEulaCommand1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_BadEulaCommand2_Text = "�o je v &Licen�nej zmluve koncov�ho pou��vate�a?";
    var L_BadEulaCommand3_Text = "�o sa s&tane, ak nebudem s�hlasi� s Licen�nou zmluvou koncov�ho pou��vate�a?";
    var L_BadEulaCommand4_Text = "Ako m�m p&okra�ova� �alej?";

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
    var L_BadEulaAboutThisStep1_Text = "Na predch�dzaj�cej obrazovke ste sa rozhodli nes�hlasi� s Licen�nou zmluvou.";
    Agent_Speak(L_BadEulaAboutThisStep1_Text);

    var L_BadEulaAboutThisStep2_Text = "Z tohto d�vodu nebudete m�c� pou��va� syst�m Microsoft Windows.";
    Agent_Speak(L_BadEulaAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadEulaAboutThisStep3_Text = "Kliknut�m na tla�idlo Nasp� sa m��ete vr�ti� na predch�dzaj�cu obrazovku a vyjadri� s�hlas so zmluvou.";
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
        
    var L_BadEulaAboutThisStep4_Text = "Pr�padne potvr�te, �e nechcete pou��va� syst�m Windows, a vypnite po��ta�.";
    Agent_Speak(L_BadEulaAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_BadEulaWhatDoesEulaSay()
{
    var L_BadEulaWhatDoesEulaSay1_Text = "Po vyjadren� s�hlasu s podmienkami Licen�nej zmluvy koncov�ho pou��vate�a z�skate opr�vnenie pou��va� syst�m Windows XP a �al�ie pr�va.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay1_Text);

    var L_BadEulaWhatDoesEulaSay2_Text = "Vypl�vaj� z toho aj ur�it� obmedzenia pou��vania syst�mu Windows XP.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay2_Text);

    var L_BadEulaWhatDoesEulaSay3_Text = "Podrobnosti n�jdete po kliknut� na tla�idlo Nasp� a otvoren� Licen�nej zmluvy koncov�ho pou��vate�a v �asti �Udelenie licencie�.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay3_Text);
        
    var L_BadEulaWhatDoesEulaSay4_Text = "Licen�n� zmluva koncov�ho pou��vate�a popisuje aj obmedzen� z�ruku a podmienky, za ktor�ch m��ete vytvori� k�piu syst�mu Windows XP na ��ely z�lohovanie alebo archiv�cie.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay4_Text);
}

function Agent_BadEulaWhatIfIDontAcceptEula()
{
    var L_BadEulaWhatIfIDontAcceptEula1_Text = "Preto�e Licen�n� zmluva koncov�ho pou��vate�a ude�uje opr�vnenie na pou��vanie syst�mu Windows XP, mus�te s�hlasi� s jej podmienkami sk�r, ako za�nete pou��va� syst�m Windows XP.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadEulaWhatIfIDontAcceptEula2_Text = "Ak sa rozhodnete nes�hlasi� so zmluvou, m��ete vypn�� po��ta� kliknut�m na tla�idlo Vypn��.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula2_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatIfIDontAcceptEula3_Text = "Po re�tartovan� po��ta�a sa vr�tite na t�to obrazovku.";
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
    
    var L_BadEulaWhatToDoNext1_Text = "Ak s�hlas�te s Licen�nou zmluvou, kliknite na tla�idlo Nasp�.";
    Agent_Speak(L_BadEulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatToDoNext2_Text = "Ak chcete pokra�ova� v tomto postupe a pou��va� syst�m Windows, mus�te s�hlasi� s Licen�nou zmluvou.";
    Agent_Speak(L_BadEulaWhatToDoNext2_Text);

    var L_BadEulaWhatToDoNext3_Text = "Ak sa rozhodnete nes�hlasi� so zmluvou, vypnite po��ta� kliknut�m na tla�idlo Vypn��.";
    Agent_Speak(L_BadEulaWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_BadEulaWhatToDoNext4_Text = "Po re�tartovan� po��ta�a sa vr�tite na t�to obrazovku.";
    Agent_Speak(L_BadEulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}




function Agent_ProductKeyAddCommands() 
{
    var L_ProductKeyAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_ProductKeyAddCommands2_Text = "�o je k�d &Product Key?";
    var L_ProductKeyAddCommands4_Text = "Ako m�m p&okra�ova� �alej?";

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

        var L_ProductKeyAddCommands3_Text = "Pre�o nie je k &dispoz�cii tla�idlo �alej?";

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
    var L_ProductKeyAboutThisStep1_Text = "Na tejto obrazovke zad�te dvadsa�p�miestny k�d Product Key, ktor� v�m mal poskytn�� v�robca po��ta�a.";
    Agent_Speak(L_ProductKeyAboutThisStep1_Text);

    var L_ProductKeyAboutThisStep2_Text = "Ak k�d Product Key nie je uveden� na obale disku CD, skontrolujte �t�tok s Certifik�tom pravosti na po��ta�i alebo na zadnej strane pr�ru�ky �Za��name pracova��.";
    Agent_Speak(L_ProductKeyAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pid1,"Left");

    var L_ProductKeyAboutThisStep3_Text = "V�etky zadan� p�smen� sa automaticky zadaj� ako ve�k�.";
    Agent_Speak(L_ProductKeyAboutThisStep3_Text);
    
    Agent_Play("RestPose");
        
    var L_ProductKeyAboutThisStep4_Text = "V �al�om kroku m��ete zaregistrova� svoj po��ta� a k�piu syst�mu Microsoft Windows.";
    Agent_Speak(L_ProductKeyAboutThisStep4_Text);
        
    var L_ProductKeyAboutThisStep5_Text = "Je to jednoduch� a registr�cia syst�mu Windows v�m prinesie mno�stvo skvel�ch v�hod.";
    Agent_Speak(L_ProductKeyAboutThisStep5_Text);
}

function Agent_ProductKeyWhatIsProdKey()
{
    var L_ProductKeyWhatIsProdKey1_Text = "Ka�d� k�pia syst�mu Windows vyroben� spolo�nos�ou Microsoft je k�dovan� jedine�n�m k�dom Product Key.";
    Agent_Speak(L_ProductKeyWhatIsProdKey1_Text);

    var L_ProductKeyWhatIsProdKey2_Text = "K�d Product Key zaru�uje, �e ste k�pili p�vodn� produkt spolo�nosti Microsoft.";
    Agent_Speak(L_ProductKeyWhatIsProdKey2_Text);

    var L_ProductKeyWhatIsProdKey3_Text = "Pom�ha v�s chr�ni� aj pred pir�tskymi k�piami syst�mu Windows.";
    Agent_Speak(L_ProductKeyWhatIsProdKey3_Text);
        
    var L_ProductKeyWhatIsProdKey4_Text = "K�d Product Key v�s opr�v�uje vyu��va� ur�it� z�kazn�cke v�hody, ako je napr�klad podpora, marketingov� slu�by, inov�cie a ponuky na webov�ch str�nkach.";
    Agent_Speak(L_ProductKeyWhatIsProdKey4_Text);
}

function Agent_ProductKeyWhyNextNotAvailable()
{
    var L_ProductKeyWhyNextNotAvailable1_Text = "Tla�idlo �alej nie je k dispoz�cii, preto�e ste nezadali platn� k�d Product Key.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable1_Text);

    var L_ProductKeyWhyNextNotAvailable2_Text = "Mus�te zada� platn� k�d Product Key.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable2_Text);

    var L_ProductKeyWhyNextNotAvailable3_Text = "Potom budete m�c� pokra�ova� kliknut�m na tla�idlo �alej.";
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
    
    var L_ProductKeyWhatToDoNext1_Text = "Po zadan� platn�ho k�du Product Key kliknite na tla�idlo �alej.";
    Agent_Speak(L_ProductKeyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}




function Agent_Reg1AddCommands() 
{
    var L_Reg1Command1_Text = "Chcem in&form�cie o tomto kroku.";
    var L_Reg1Command2_Text = "I&nform�cie o registr�cii";
    var L_Reg1Command3_Text = "A&ko sa zaregistrujem ihne�?";
    var L_Reg1Command4_Text = "M��em sa &zaregistrova� nesk�r?";
    var L_Reg1Command5_Text = "Ak� s� v�&hody registr�cie?";
    var L_Reg1Command6_Text = "Info&rm�cie o zdie�an� �dajov";

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
    var L_Reg1AboutThisStep1_Text = "Toto je za�iatok registra�nej �asti.";
    Agent_Speak(L_Reg1AboutThisStep1_Text);

    var L_Reg1AboutThisStep2_Text = "V tejto �asti budete ma� mo�nos� zaregistrova� k�piu syst�mu Windows.";
    Agent_Speak(L_Reg1AboutThisStep2_Text);

    var L_Reg1AboutThisStep3_Text = "Po registr�cii budete m�c� vyu�i� mno�stvo v�hod z�kazn�ka spolo�nosti Microsoft.";
    Agent_Speak(L_Reg1AboutThisStep3_Text);
        
    var L_Reg1AboutThisStep4_Text = "K t�mto v�hod�m patria upozornenia na aktualiz�cie produktov a pr�stup k prvotriednym slu�b�m technickej podpory spolo�nosti Microsoft.";
    Agent_Speak(L_Reg1AboutThisStep4_Text);
        
    var L_Reg1AboutThisStep5_Text = "Na tejto obrazovke si m��ete vybra� sp�sob registr�cie.";
    Agent_Speak(L_Reg1AboutThisStep5_Text);
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");
        
    var L_Reg1AboutThisStep6_Text = "Ak chcete z�ska� �al�ie inform�cie o z�sad�ch spolo�nosti Microsoft pre pou��vanie osobn�ch �dajov, kliknite na toto prepojenie.";
    Agent_Speak(L_Reg1AboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1AboutRegistration()
{    
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1AboutRegistration1_Text = "Ak chcete za�a� registr�ciu, kliknite sem a potom na tla�idlo �alej.";
    Agent_Speak(L_Reg1AboutRegistration1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.rb_reg_ms_no,"Left");

    var L_Reg1AboutRegistration2_Text = "Ak sa v�ak rad�ej nechcete zaregistrova�, kliknite na druh� mo�nos� a potom na tla�idlo \"�alej\".";
    Agent_Speak(L_Reg1AboutRegistration2_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1HowToRegister()
{      
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1HowToRegister1_Text = "Ak chcete zaregistrova� k�piu syst�mu Windows, skontrolujte, �i je vybrat� mo�nos� �no.";
    Agent_Speak(L_Reg1HowToRegister1_Text); 
    
    Agent_Play("RestPose");

    var L_Reg1HowToRegister2_Text = "Potom pokra�ujte kliknut�m na tla�idlo �alej.";
    Agent_Speak(L_Reg1HowToRegister2_Text);
}

function Agent_Reg1RegisterLater()
{
    var L_Reg1RegisterLater1_Text = "Ak teraz vynech�te registr�ciu, m��ete k�piu syst�mu Windows zaregistrova� po ukon�en� in�tal�cie syst�mu Windows.";
    Agent_Speak(L_Reg1RegisterLater1_Text);

    var L_Reg1RegisterLater2_Text = "Kliknite na polo�ku Spustenie v ponuke �tart a zadajte regwiz /r.";
    Agent_Speak(L_Reg1RegisterLater2_Text);

    var L_Reg1RegisterLater3_Text = "Ak ste zabudli postup, kliknite na polo�ku Pomoc a technick� podpora v ponuke �tart, kde n�jdete odpovede na ot�zky a �al�ie cenn� inform�cie.";
    Agent_Speak(L_Reg1RegisterLater3_Text);
}

function Agent_Reg1WhyRegister()
{
    var L_Reg1WhyRegister1_Text = "Po registr�cii k�pie syst�mu Windows m��ete vyu��va� mno�stvo v�hod z�kazn�ka spolo�nosti Microsoft.";
    Agent_Speak(L_Reg1WhyRegister1_Text);

    var L_Reg1WhyRegister2_Text = "K t�mto v�hod�m patria upozornenia na aktualiz�cie produktov a pr�stup k prvotriednym slu�b�m technickej podpory spolo�nosti Microsoft.";
    Agent_Speak(L_Reg1WhyRegister2_Text);
}

function Agent_Reg1AboutSharingInfo()
{
    
    if (!window.external.get_RetailOOBE()) 
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Za�iarknut�m t�chto mo�nost� vyberiete zdie�anie registra�n�ch �dajov so spolo�nos�ou Microsoft a v�robcom po��ta�a.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text); 
    
        Agent_Play("RestPose");
    }
    else
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Za�iarknut�m t�chto mo�nost� vyberiete zdie�anie registra�n�ch �dajov so spolo�nos�ou Microsoft a v�robcom po��ta�a.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");     
    }
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");

    var L_Reg1AboutSharingInfo2_Text = "�al�ie inform�cie o z�sad�ch spolo�nosti Microsoft pre pou��vanie osobn�ch �dajov n�jdete po kliknut� na toto prepojenie.";
    Agent_Speak(L_Reg1AboutSharingInfo2_Text);
    
    Agent_Play("RestPose");
    
    if (!window.external.get_RetailOOBE()) 
    {           
        Agent_GestureAtElement(g.reg1_spn3,"Left");
                
        var L_Reg1AboutSharingInfo3_Text = "�al�ie inform�cie o z�sad�ch spolo�nosti %1 pre pou��vanie osobn�ch �dajov n�jdete po kliknut�m na toto prepojenie.";
        Agent_Speak(ApiObj.FormatMessage(L_Reg1AboutSharingInfo3_Text, g_OEMNameStr));
    
        Agent_Play("RestPose");
    }
}




function Agent_Reg3AddCommands() 
{
    var L_Reg3Command1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_Reg3Command2_Text = "Ako &zmen�m inform�cie?";
    var L_Reg3Command3_Text = "Info&rm�cie o zdie�an� �dajov";

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
    var L_Reg3AboutThisStep1_Text = "Ak chcete zaregistrova� k�piu syst�mu Microsoft Windows, mus�te zada� po�adovan� �daje do pol� na tejto obrazovke.";
    Agent_Speak(L_Reg3AboutThisStep1_Text);
    
    Agent_GestureAtElement(g.UserCity,"Left");

    var L_Reg3AboutThisStep2_Text = "Inform�cie sa musia zada� do v�etk�ch pol� okrem pol�, ktor� s� ozna�en� ako �Nepovinn�.";
    Agent_Speak(L_Reg3AboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_Reg3AboutThisStep3_Text = "Uv�tame, ak zad�te aj nepovinn� inform�cie.";
    Agent_Speak(L_Reg3AboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_Reg3AboutThisStep4_Text = "Po skon�en� kliknite na tla�idlo �alej.";
    Agent_Speak(L_Reg3AboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg3HowToChangeInfo()
{
    var L_Reg3HowToChangeInfo1_Text = "V poliach s� n�vody, ktor� vysvet�uj� sp�sob zad�vania inform�ci�.";
    Agent_Speak(L_Reg3HowToChangeInfo1_Text);
    
    Agent_GestureAtElement(g.UserLastName,"Left");

    var L_Reg3HowToChangeInfo2_Text = "Kliknite napr�klad do po�a Priezvisko a za�nite p�sa�.";
    Agent_Speak(L_Reg3HowToChangeInfo2_Text);

    var L_Reg3HowToChangeInfo3_Text = "V poli by sa mala zobrazi� blikaj�ca zvisl� �iara naz�van� kurzor.";
    Agent_Speak(L_Reg3HowToChangeInfo3_Text);

    var L_Reg3HowToChangeInfo4_Text = "V�etko, �o nap�ete, sa zad� na miesto kurzora.";
    Agent_Speak(L_Reg3HowToChangeInfo4_Text);
    
    Agent_Play("RestPose");

    var L_Reg3HowToChangeInfo5_Text = "V textovom poli m��ete kurzor pos�va� stl��an�m kl�vesov ��pka do�ava alebo ��pka doprava na kl�vesnici.";
    Agent_Speak(L_Reg3HowToChangeInfo5_Text);

    var L_Reg3HowToChangeInfo6_Text = "Pomocou kl�vesu Delete m��ete odstr�ni� znak za kurzorom a pomocou kl�vesu Backspace odstr�nite znak pred kurzorom.";
    Agent_Speak(L_Reg3HowToChangeInfo6_Text);

    var L_Reg3HowToChangeInfo7_Text = "Ak chcete vlo�i� znak, umiestnite ukazovate� do po�a na miesto, kde chcete znak prida�, a kliknite.";
    Agent_Speak(L_Reg3HowToChangeInfo7_Text);

    var L_Reg3HowToChangeInfo8_Text = "Potom zadajte po�adovan� znak.";
    Agent_Speak(L_Reg3HowToChangeInfo8_Text);

    var L_Reg3HowToChangeInfo9_Text = "Ak do niektor�ho po�a nezad�te inform�cie a n�vod tam zostane, nie je to chyba.";
    Agent_Speak(L_Reg3HowToChangeInfo9_Text);

    var L_Reg3HowToChangeInfo10_Text = "N�vod sl��i iba na u�ah�enie zad�vania. Nie je s��as�ou registra�n�ch inform�ci�.";
    Agent_Speak(L_Reg3HowToChangeInfo10_Text);
}

function Agent_Reg3AboutSharingInfo()
{    
    if (!window.external.get_RetailOOBE()) 
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
        
        var L_Reg3AboutSharingInfo1_Text = "Za�iarknut�m t�chto mo�nost� vyberiete zdie�anie registra�n�ch �dajov so spolo�nos�ou Microsoft a v�robcom po��ta�a.";
        Agent_Speak(L_Reg3AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");
    }
    else
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
         
        var L_Reg3AboutSharingInfo1_Text = "Za�iarknut�m t�chto mo�nost� vyberiete zdie�anie registra�n�ch �dajov so spolo�nos�ou Microsoft a v�robcom po��ta�a.";
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

        

        L_Register3PlayCheckBoxScript1_Text = "Pod�a s��asn�ho nastavenia sa registra�n� inform�cie odo�l� spolo�nosti Microsoft a v�robcovi po��ta�a.";
        L_Register3PlayCheckBoxScript2_Text = "Pod�a s��asn�ho nastavenia sa registra�n� inform�cie odo�l� spolo�nosti Microsoft a v�robcovi po��ta�a.";
        L_Register3PlayCheckBoxScript3_Text = "Pod�a s��asn�ho nastavenia sa registra�n� inform�cie odo�l� spolo�nosti Microsoft a v�robcovi po��ta�a.";
        L_Register3PlayCheckBoxScript4_Text = "Registra�n� �daje na tejto obrazovke sa moment�lne neodo�l� ani spolo�nosti Microsoft, ani v�robcovi po��ta�a.";

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

        var L_Register3PlayCheckBoxScript5_Text = "Tieto �daje im umo��uj� informova� v�s o aktualiz�ci�ch produktov a �al��ch v�hod�ch pre registrovan�ch z�kazn�kov.";
        Agent_Speak(L_Register3PlayCheckBoxScript5_Text);

        var L_Register3PlayCheckBoxScript6_Text = "Ak chcete zmeni� sp�sob odoslania t�chto inform�ci�,";
        Agent_Speak(L_Register3PlayCheckBoxScript6_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(elem, "TopCenterWidth");
		else
			Agent_GestureAtElement(elem, "Left");

        var L_Register3PlayCheckBoxScript7_Text = "Kliknite na tieto polia.";
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

        var L_Register3EncourageTabKey1_Text = "Prejdite sem stla�en�m kl�vesu Tab.";
        Agent_Speak(L_Register3EncourageTabKey1_Text);
}

function Agent_Register3EncourageMouseClick() {

        var L_Register3EncourageMouseClick1_Text = "Posu�te sem ukazovate� my�i a kliknite �av�m tla�idlom.";
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

                        var L_Register3PlayElementScript1_Text = "Do tohto po�a zadajte svoje krstn� meno.";
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

                        var L_Register3PlayElementScript3_Text = "Sem zadajte �al�ie meno.";
                        Agent_Speak(L_Register3PlayElementScript3_Text);

                        break;

                case "UserLastName":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript4_Text = "Do tohto po�a zadajte priezvisko.";
                        Agent_Speak(L_Register3PlayElementScript4_Text);

                        break;

                case "UserAddress":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript5_Text = "Sem zadajte ulicu.";
                        Agent_Speak(L_Register3PlayElementScript5_Text);

                        break;

                case "UserAddress2":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        Agent_Play("Think");

                        var L_Register3PlayElementScript6_Text = "Ak potrebujete viac miesta na zadanie adresy, zadajte ju sem. Ak nie, prejdite �alej stla�en�m kl�vesu Tab.";
                        Agent_Speak(L_Register3PlayElementScript6_Text);

                        Agent_Play("RestPose");

                        break;

                case "UserCity":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript7_Text = "Sem zadajte n�zov mesta, v ktorom �ijete.";
                        Agent_Speak(L_Register3PlayElementScript7_Text);

                        break;

                case "UserStateTextBox":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript8_Text = "Sem zadajte kraj alebo okres.";
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
                                var L_Register3PlayElementScript91_Text = "Je potrebn� vybra� kraj.";
                                Agent_Speak(L_Register3PlayElementScript91_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript92_Text = "Ak chcete zobrazi� zoznam krajov, kliknite na tla�idlo ozna�en� ��pkou smeruj�cou nadol.";
                                Agent_Speak(L_Register3PlayElementScript92_Text);

                        }

                        else if (elem.id == "selCAProvince") {
                                var L_Register3PlayElementScript93_Text = "Je potrebn� vybra� okres.";
                                Agent_Speak(L_Register3PlayElementScript93_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript94_Text = "Ak chcete zobrazi� zoznam okresov, kliknite na tla�idlo ozna�en� ��pkou smeruj�cou nadol.";
                                Agent_Speak(L_Register3PlayElementScript94_Text);

                        }

                        else {
                                var L_Register3PlayElementScript95_Text = "Je potrebn� vybra� krajinu. Kliknite na tla�idlo ozna�en� ��pkou smeruj�cou nadol.";
                                Agent_Speak(L_Register3PlayElementScript95_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript96_Text = "Ak chcete zobrazi� zoznam kraj�n, kliknite na tla�idlo ozna�en� ��pkou smeruj�cou nadol.";
                                Agent_Speak(L_Register3PlayElementScript96_Text);

                        }

                        Agent_Play("Explain");

                        var L_Register3PlayElementScript11_Text = "Potom kliknut�m vyberte kraj.";
                        var L_Register3PlayElementScript12_Text = "Potom kliknut�m vyberte okres.";
                        var L_Register3PlayElementScript13_Text = "Potom kliknut�m vyberte krajinu.";

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

                        var L_Register3PlayElementScript14_Text = "Sem zadajte PS�.";
                        Agent_Speak(L_Register3PlayElementScript14_Text);

                        break;

                case "UserEmailAddress":

                        if (elem.value == "") {

							if (g.document.dir == "rtl") 
								Agent_GestureAtElement(elem, "Left");
		
							else
								Agent_GestureAtElement(elem, "Right");

                            var L_Register3PlayElementScript15_Text = "Zadanie e-mailovej adresy je volite�n�, ale pri kontakte s vami uprednost�ujeme tento sp�sob.";
                            Agent_Speak(L_Register3PlayElementScript15_Text);
							
							g_bAgentRegister3ShortEmail = true;
							
							Agent_Play("Explain");
							
                            var L_Register3PlayElementScript16_Text = "Ak nem�te e-mailov� adresu, ponechajte toto pole pr�zdne.";
                            Agent_Speak(L_Register3PlayElementScript16_Text);
							
							Agent_Play("Blink");
							                             
                        }
                        
                        else if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) {

	                       if (g_strAgentLastFocusID == "UserEmailAddress") {

								Agent_Play("Decline");
								
								var L_Register3PlayElementScript17_Text = "�utujem, ale zadan� adresa nevyzer� ako platn� e-mailov� adresa.";
								Agent_Speak(L_Register3PlayElementScript17_Text);

								Agent_ExplainEmailAddress();
								
								if (g.document.dir == "rtl")
									Agent_GestureAtElement(elem, "Left");
								
								else
									Agent_GestureAtElement(elem, "Right");
                                        
								Agent_Play("Alert");
                                        
								var L_Register3PlayElementScript18_Text = "Ak nem�te e-mailov� adresu, ponechajte toto pole pr�zdne.";
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
        var L_ExplainEmailAddress1_Text = "E-mailov� adresa zvy�ajne pozost�va z dvoch �ast�.";
        Agent_Speak(L_ExplainEmailAddress1_Text);

        var L_ExplainEmailAddress2_Text = "Prv� �as� predstavuje n�zov konta, za ktor�m nasleduje znak @. Druh� �as� predstavuje n�zov dom�ny.";
        Agent_Speak(L_ExplainEmailAddress2_Text);

        var L_ExplainEmailAddress3_Text = "E-mailov� adresa by mala vyzera� napr�klad takto: %s";
        var re = /%s/i;
        var strEmail = "\\map=\"\"=\"greatcustomer@msn.com\"\\";

        Agent_Speak(L_ExplainEmailAddress3_Text.replace(re, strEmail) + "\\pau=2000\\");

        Agent_Play("RestPose");
}







function Agent_PrivacyMSAddCommands() 
{
    var L_PrivacyMSCommand1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_PrivacyMSCommand2_Text = "�o je z&abezpe�en� server?";
    var L_PrivacyMSCommand3_Text = "�o je &s�bor �cookie�?";
    var L_PrivacyMSCommand4_Text = "Ako m�m p&okra�ova� �alej?";

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
    var L_PrivacyMSAboutThisStep1_Text = "Na tejto obrazovke sa zobraz� prehl�senie spolo�nosti Microsoft o pou��van� osobn�ch �dajov.";
    Agent_Speak(L_PrivacyMSAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.privtext,"Left");

    var L_PrivacyMSAboutThisStep2_Text = "Pre��tajte si text.";
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

    var L_PrivacyMSAboutThisStep3_Text = "Kliknut�m na tla�idlo Nasp� sa potom vr�tite na predch�dzaj�cu obrazovku.";
    Agent_Speak(L_PrivacyMSAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PrivacyMSWhatIsSecureServer()
{
    var L_PrivacyMSWhatIsSecureServer1_Text = "Server je po��ta� poskytuj�ci in�m po��ta�om v sieti zdie�an� prostriedky napr. inform�cie.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer1_Text);

    var L_PrivacyMSWhatIsSecureServer2_Text = "Zabezpe�en� server je tak�to po��ta� so schopnos�ou poskytova� zabezpe�en� transakcie. Zaru�uje, �e k ulo�en�m inform�ci�m nebud� ma� pr�stup neopr�vnen� osoby.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer2_Text);

    var L_PrivacyMSWhatIsSecureServer3_Text = "Ke� sa napr�klad zaregistrujete v spolo�nosti Microsoft, inform�cie o va�om mene a adrese bud� ulo�en� na zabezpe�enom registra�nom serveri spolo�nosti Microsoft.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer3_Text);
        
    var L_PrivacyMSWhatIsSecureServer4_Text = "Takto zostan� inform�cie s�kromn� a �iadna in� osoba alebo organiz�cia sa na v�s neobr�ti na z�klade inform�ci�, ktor� ste poskytli spolo�nosti Microsoft pri registr�cii.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer4_Text);
}

function Agent_PrivacyMSWhatIsCookie()
{
    var L_PrivacyMSWhatIsCookie1_Text = "S�bor �cookie� je mal� s�bor s �dajmi, ktor� sa ulo�� do po��ta�a, ke� nav�t�vite ur�it� webov� lokality.";
    Agent_Speak(L_PrivacyMSWhatIsCookie1_Text);

    var L_PrivacyMSWhatIsCookie2_Text = "S�bor �cookie� obsahuje va�e z�kladn� inform�cie napr. e-mailov� adresu, tak�e ju nebudete musie� znova zad�va� pri n�v�teve danej lokality.";
    Agent_Speak(L_PrivacyMSWhatIsCookie2_Text);

    var L_PrivacyMSWhatIsCookie3_Text = "Ak napr�klad na webovej lokalite nie�o k�pite, lokalita m��e posla� na v� po��ta� s�bor �cookie� s inform�ciami o dodan� n�kupu.";
    Agent_Speak(L_PrivacyMSWhatIsCookie3_Text);
        
    var L_PrivacyMSWhatIsCookie4_Text = "Pri �al�ej n�v�teve danej webovej lokality nebudete musie� tieto inform�cie znova zada�.";
    Agent_Speak(L_PrivacyMSWhatIsCookie4_Text);
        
    var L_PrivacyMSWhatIsCookie5_Text = "Pri registr�cii v spolo�nosti Microsoft sa v po��ta�i ulo�� s�bor �cookie� s identifik�ciou produktu, va��m menom a adresou.";
    Agent_Speak(L_PrivacyMSWhatIsCookie5_Text);
        
    var L_PrivacyMSWhatIsCookie6_Text = "Pri nasleduj�cej n�v�teve v�s lokalita www.microsoft.com rozpozn� ako registrovan�ho pou��vate�a syst�mu Windows.";
    Agent_Speak(L_PrivacyMSWhatIsCookie6_Text);
}

function Agent_PrivacyMSWhatToDoNext()
{    
    Agent_GestureAtElement(g.privtext,"Left");
    
    var L_PrivacyMSWhatToDoNext1_Text = "Ak chcete ��ta� �al�iu �as� prehl�senia o pou��van� osobn�ch �dajov, kliknite na toto pole.";
    Agent_Speak(L_PrivacyMSWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.privtext,"Right");

    var L_PrivacyMSWhatToDoNext2_Text = "Pomocou tla�idiel so ��pkou nahor a nadol sa potom m��ete pos�va� v texte prehl�senia.";
    Agent_Speak(L_PrivacyMSWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_PrivacyMSWhatToDoNext3_Text = "Na pos�vanie v texte m��ete pou�i� aj kl�vesy Page Down a Page Up.";
    Agent_Speak(L_PrivacyMSWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
        
    var L_PrivacyMSWhatToDoNext4_Text = "Po do��tan� prehl�senia o pou��van� osobn�ch �dajov sa kliknut�m na tla�idlo Nasp� vr�tite na predch�dzaj�cu obrazovku registr�cie.";
    Agent_Speak(L_PrivacyMSWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}





function Agent_RefDialAddCommands() 
{
    var L_RefDialAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_RefDialAddCommands2_Text = "Ako m�m p&okra�ova� �alej?";

    g_AgentCharacter.Commands.Add("Agent_RefDialAboutThisStep", L_RefDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialWhatToDoNext", L_RefDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RefDialAboutThisStep()
{
    var L_RefDialAboutThisStep1_Text = "Syst�m Windows teraz potrebuje uskuto�ni� bezplatn� telef�nne volanie.";
    Agent_Speak(L_RefDialAboutThisStep1_Text);

    var L_RefDialAboutThisStep2_Text = "To v�m umo�n� pou��va� na po��ta�i existuj�ce internetov� konto.";
    Agent_Speak(L_RefDialAboutThisStep2_Text);
}

function Agent_RefDialWhatToDoNext()
{    
    Agent_GestureAtElement(g.btnManual,"Left");
    
    var L_RefDialWhatToDoNext1_Text = "Ak u� m�te poskytovate�a internetov�ch slu�ieb alebo viete, ktor�ho chcete pou�i�, kliknite na tla�idlo Nastaven�.";
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

    var L_RefDialWhatToDoNext2_Text = "Ak chcete vybra� zo zoznamu poskytovate�ov internetov�ch slu�ieb, ktor� s� k dispoz�cii vo va�ej oblasti, kliknite na tla�idlo �alej.";
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

    var L_RefDialWhatToDoNext3_Text = "Ak chcete pokra�ova� bez nastavenia pr�stupu po��ta�a na Internet, kliknite na tla�idlo Vynecha�.";
    Agent_Speak(L_RefDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RefDialingAddCommands() 
{
    var L_RefDialingAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_RefDialingAddCommands2_Text = "�o je tento pr&uh v strede obrazovky?";
    var L_RefDialingAddCommands3_Text = "Ako m�m p&okra�ova� �alej?";

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
    var L_RefDialingAboutThisStep1_Text = "Syst�m Windows v�s prip�ja na slu�bu Microsoft Referral Service, aby z�skal zoznam poskytovate�ov internetov�ch slu�ieb vo va�ej oblasti.";
    Agent_Speak(L_RefDialingAboutThisStep1_Text);

    var L_RefDialingAboutThisStep2_Text = "Po�kajte, pros�m...";
    Agent_Speak(L_RefDialingAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingAboutThisStep3_Text = "Ak chcete, m��ete tento krok vynecha�, alebo m��ete prejs� na predch�dzaj�cu obrazovku.";
    Agent_Speak(L_RefDialingAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RefDialingWhatsThisBar()
{    
    Agent_GestureAtElement(g.tblProg,"Left");
    
    var L_RefDialingWhatsThisBar1_Text = "Je to indik�tor priebehu, ktor� ukazuje, v ktorej f�ze procesu sa nach�dzate.";
    Agent_Speak(L_RefDialingWhatsThisBar1_Text);

    var L_RefDialingWhatsThisBar2_Text = "Pri preberan� inform�ci� z odkazovej slu�by do po��ta�a sa indik�tor bude postupne vyp��a�.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
    
    Agent_Play("RestPose");

    var L_RefDialingWhatsThisBar3_Text = "Po prevzat� v�etk�ch inform�ci� sa indik�tor �plne vypln� a automaticky sa zobraz� �al�ia obrazovka.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
}

function Agent_RefDialingWhatToDoNext()
{
    var L_RefDialingWhatToDoNext1_Text = "Po�kajte, k�m syst�m Windows preberie inform�cie o poskytovate�och internetov�ch slu�ieb zo slu�by Microsoft Referral Service.";
    Agent_Speak(L_RefDialingWhatToDoNext1_Text);

    var L_RefDialingWhatToDoNext2_Text = "Po ukon�en� preberania sa automaticky zobraz� �al�ia obrazovka.";
    Agent_Speak(L_RefDialingWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingWhatToDoNext3_Text = "Ak chcete tento krok vynecha�, kliknite na tla�idlo Presko�i�.";
    Agent_Speak(L_RefDialingWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RegDialAddCommands()
{
    var L_RegDialAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_RegDialAddCommands2_Text = "Ako m�m p&okra�ova� �alej?";

    g_AgentCharacter.Commands.Add("Agent_RegDialAboutThisStep", L_RegDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RegDialWhatToDoNext", L_RegDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RegDialAboutThisStep()
{
    var L_RegDialAboutThisStep1_Text = "Syst�m Windows pou�ije tento po��ta� na uskuto�nenie bezplatn�ho pripojenia do registra�n�ho centra.";
    Agent_Speak(L_RegDialAboutThisStep1_Text);

    var L_RegDialAboutThisStep2_Text = "Po�kajte, pros�m...";
    Agent_Speak(L_RegDialAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialAboutThisStep3_Text = "Ak chcete, m��ete tento krok vynecha� alebo sa m��ete vr�ti� k predch�dzaj�cej obrazovke.";
    Agent_Speak(L_RegDialAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RegDialWhatToDoNext()
{
    var L_RegDialWhatToDoNext1_Text = "Po�kajte, k�m sa syst�m Windows pripoj� na registra�n� centrum.";
    Agent_Speak(L_RegDialWhatToDoNext1_Text);

    var L_RegDialWhatToDoNext2_Text = "Po pripojen� syst�mu Windows sa automaticky presuniete na �al�iu obrazovku.";
    Agent_Speak(L_RegDialWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialWhatToDoNext3_Text = "Ak chcete tento krok vynecha�, kliknite na tla�idlo Presko�i�.";
    Agent_Speak(L_RegDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigDialAddCommands()
{
    var L_MigDialAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_MigDialAddCommands2_Text = "Ako m�m p&okra�ova� �alej?";

    g_AgentCharacter.Commands.Add("Agent_MigDialAboutThisStep", L_MigDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_MigDialWhatToDoNext", L_MigDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_MigDialAboutThisStep()
{
    var L_MigDialAboutThisStep1_Text = "Syst�m Windows teraz potrebuje uskuto�ni� bezplatn� telef�nne volanie.";
    Agent_Speak(L_MigDialAboutThisStep1_Text);

    var L_MigDialAboutThisStep2_Text = "To v�m umo�n� pou��va� na po��ta�i existuj�ce internetov� konto.";
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
    
    var L_MigDialWhatToDoNext1_Text = "Ak chcete za�a� vyt��a�, kliknite na tla�idlo �alej.";
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

    var L_MigDialWhatToDoNext2_Text = "Ak chcete tento krok vynecha�, kliknite na tla�idlo Vynecha�.";
    Agent_Speak(L_MigDialWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}





function Agent_MigListAddCommands() 
{
    
    
    
	var L_MigListAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
	var L_MigListAddCommands2_Text = "Ako m�m p&okra�ova� �alej?";
	
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
    var L_MigListAboutThisStep1_Text = "Na tejto obrazovke m��ete zvoli� poskytovate�a internetov�ch slu�ieb, ktor�ho slu�by chcete pou��va�.";
    Agent_Speak(L_MigListAboutThisStep1_Text);

    var L_MigListAboutThisStep2_Text = "To v�m umo�n� pou��va� na po��ta�i existuj�ce internetov� konto.";
    Agent_Speak(L_MigListAboutThisStep2_Text);
}

function Agent_MigListWhatToDoNext()
{
    Agent_GestureAtElement(g.selISPDropList,"Left");
    
    var L_MigListWhatToDoNext1_Text = "Poskytovate�a internetov�ch slu�ieb vyberiete kliknut�m v tomto zozname.";
    Agent_Speak(L_MigListWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_MigListWhatToDoNext2_Text = "Ak poskytovate� nie je uveden� v zozname, kliknite na polo�ku \�Poskytovate� nie je uveden� v zozname\�, ktor� je na konci zoznamu.";
    Agent_Speak(L_MigListWhatToDoNext2_Text);

    var L_MigListWhatToDoNext3_Text = "Obr�te sa na svojho poskytovate�a internetov�ch slu�ieb, ktor� v�m pom��e znovu zriadi� internetov� konto na tomto po��ta�i.";
    Agent_Speak(L_MigListWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_MigListWhatToDoNext4_Text = "Potom pokra�ujte kliknut�m na tla�idlo �alej.";
    Agent_Speak(L_MigListWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigPageAddCommands() 
{
	var L_MigPageAddCommands1_Text = "�o m�m teraz &urobi�?";
	var L_MigPageAddCommands2_Text = "Chcem inform�cie o tejto &obrazovke.";
	var L_MigPageAddCommands3_Text = "Ako prejdem &na �al�iu obrazovku?";
	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_WhatToDoNext", L_MigPageAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_AboutThisStep", L_MigPageAddCommands2_Text);
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_HowToMoveOn", L_MigPageAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_MigPageCommand_WhatToDoNext() {
		
	var L_MigPageWhatToDoNext1_Text = "Po dokon�en� pr�ce na tejto strane.";
	Agent_Speak(L_MigPageWhatToDoNext1_Text);
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
			
	var L_MigPageWhatToDoNext2_Text = "Kliknite na tla�idlo �alej.";
	Agent_Speak(L_MigPageWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}

function Agent_MigPageCommand_AboutThisStep() 
{
	var L_MigPageAboutThisStep1_Text = "Na tejto obrazovke sa pok�sime aktivova� va�e internetov� konto u moment�lneho poskytovate�a slu�ieb.";
	Agent_Speak(L_MigPageAboutThisStep1_Text);
	
	Agent_Play("Pleased");
	
	var L_MigPageAboutThisStep2_Text = "Postupujte pod�a pokynov poskytovate�a internetov�ch slu�ieb, ktor� sa zobrazia na obrazovke.";
	Agent_Speak(L_MigPageAboutThisStep2_Text);
}

function Agent_MigPageCommand_HowToMoveOn() 
{
	var L_MigPageHowToMoveOn1_Text = "Po dokon�en� pr�ce na tejto obrazovke";
	Agent_Speak(L_MigPageHowToMoveOn1_Text);		
			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

	var L_MigPageHowToMoveOn2_Text = "pokra�ujte kliknut�m na tla�idlo �alej.";
	Agent_Speak(L_MigPageHowToMoveOn2_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPDialAddCommands() 
{
    var L_ISPDial1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_ISPDial2_Text = "Ako m�m p&okra�ova� �alej?";

    g_AgentCharacter.Commands.Add("Agent_ISPDialAboutThisStep", L_ISPDial1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDialWhatToDoNext", L_ISPDial2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPDialAboutThisStep()
{
    var L_ISPDialAboutThisStep1_Text = "Syst�m Windows teraz potrebuje uskuto�ni� bezplatn� telef�nne volanie.";
    Agent_Speak(L_ISPDialAboutThisStep1_Text);

    var L_ISPDialAboutThisStep2_Text = "Ten v�m umo�n� zap�sa� sa na pou��vanie nov�ho internetov�ho konta.";
    Agent_Speak(L_ISPDialAboutThisStep2_Text);

    var L_ISPDialAboutThisStep3_Text = "Ak chcete pokra�ova�, iba kliknite na tla�idlo �alej.";
    Agent_Speak(L_ISPDialAboutThisStep3_Text);
}

function Agent_ISPDialWhatToDoNext()
{
    var L_ISPDialWhatToDoNext1_Text = "Pokra�ujte kliknut�m na tla�idlo �alej.";
    Agent_Speak(L_ISPDialWhatToDoNext1_Text);

    var L_ISPDialWhatToDoNext2_Text = "Ak chcete pokra�ova� bez nastavenia po��ta�a na pr�stup na Internet, kliknite na tla�idlo Vynecha�. T�to �innos� m��ete vykona� aj nesk�r...";
    Agent_Speak(L_ISPDialWhatToDoNext2_Text);
}




function Agent_DialToneAddCommands()
{
    var L_DialToneAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_DialToneAddCommands2_Text = "�o ak &potrebujem premiestni� tento po��ta�?";
    var L_DialToneAddCommands3_Text = "Ako m�m p&okra�ova� �alej?";

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
    var L_DialToneAboutThisStep1_Text = "Syst�mu Windows sa nepodarilo zisti� oznamovac� t�n.";
    Agent_Speak(L_DialToneAboutThisStep1_Text);

    var L_DialToneAboutThisStep2_Text = "Mohlo sa to sta� z viacer�ch pr��in.";
    Agent_Speak(L_DialToneAboutThisStep2_Text);

    var L_DialToneAboutThisStep3_Text = "Najprv skontrolujte, �i je telef�nny k�bel po��ta�a na oboch koncoch spr�vne zasunut�.";
    Agent_Speak(L_DialToneAboutThisStep3_Text);

    var L_DialToneAboutThisStep4_Text = "�alej skontrolujte, �i sa moment�lne niekto nepok��a pou�i� va�u telef�nnu linku.";
    Agent_Speak(L_DialToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneAboutThisStep5_Text = "Potom sk�ste ��slo znova vyto�i� kliknut�m na tla�idlo Vyto�i� znova.";
    Agent_Speak(L_DialToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_DialToneHowToMove()
{
    var L_DialToneHowToMove1_Text = "Ak potrebujete premiestni� po��ta�, aby ste ho mohli pripoji� k telef�nnej linke, skontrolujte, �i je nap�janie vypnut�.";
    Agent_Speak(L_DialToneHowToMove1_Text);

    var L_DialToneHowToMove2_Text = "Po re�tarte po��ta�a bude syst�m Windows pokra�ova� v procese od nedokon�en�ho kroku.";
    Agent_Speak(L_DialToneHowToMove2_Text);
}

function Agent_DialToneWhatToDoNext()
{
    var L_DialToneWhatToDoNext1_Text = "Najprv skontrolujte pripojenie po��ta�a k telef�nnej linke.";
    Agent_Speak(L_DialToneWhatToDoNext1_Text);

    var L_DialToneWhatToDoNext2_Text = "Potom skontrolujte, �i sa telef�nna linka pr�ve nepou��va.";
    Agent_Speak(L_DialToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneWhatToDoNext3_Text = "Potom znova sk�ste vyto�i� ��slo kliknut�m na tla�idlo Vyto�i� znova.";
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

    var L_DialToneWhatToDoNext4_Text = "Alebo kliknite na tla�idlo Presko�i� a pokra�ujte bez registr�cie �i aktiv�cie k�pie syst�mu Windows XP.";
    Agent_Speak(L_DialToneWhatToDoNext4_Text);
    
    Agent_Play("RestPose");

    var L_DialToneWhatToDoNext5_Text = "M��ete sa zaregistrova� nesk�r.";
    Agent_Speak(L_DialToneWhatToDoNext5_Text);
}



function Agent_CnnctErrAddCommands() 
{
    var L_CnnctErrAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_CnnctErrAddCommands2_Text = "Ako &vypnem re�im �akanie na hovor?";
    var L_CnnctErrAddCommands3_Text = "Ako m�m p&okra�ova� �alej?";

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
    var L_CnnctErrAboutThisStep1_Text = "Telefonick� spojenie s registra�n�m centrom sa preru�ilo.";
    Agent_Speak(L_CnnctErrAboutThisStep1_Text);

    var L_CnnctErrAboutThisStep2_Text = "Mohlo sa to sta� z viacer�ch pr��in.";
    Agent_Speak(L_CnnctErrAboutThisStep2_Text);

    var L_CnnctErrAboutThisStep3_Text = "Spojenie ste dlh�iu dobu akt�vne nepou��vali a boli ste odpojen� automaticky.";
    Agent_Speak(L_CnnctErrAboutThisStep3_Text);

    var L_CnnctErrAboutThisStep4_Text = "V �ase, kedy ste boli pripojen�, sa niekto mohol pok�si� pou�i� va�u telef�nnu linku.";
    Agent_Speak(L_CnnctErrAboutThisStep4_Text);

    var L_CnnctErrAboutThisStep5_Text = "Ak m�te zapnut� �akanie na hovor, mohol preru�enie sp�sobi� prich�dzaj�ci hovor.";
    Agent_Speak(L_CnnctErrAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrAboutThisStep6_Text = "Ak je s��as�ou telef�nnych slu�ieb aj �akanie na hovor a pozn�te ��slo potrebn� na jeho vypnutie, zadajte ho na tomto mieste.";
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

    var L_CnnctErrAboutThisStep7_Text = "Potom sa pok�ste znova pripoji� kliknut�m na tla�idlo �alej.";
    Agent_Speak(L_CnnctErrAboutThisStep7_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrTurnOffCallWaiting()
{
    var L_CnnctErrTurnOffCallWaiting1_Text = "��slo na vypnutie �akania na hovor z�skate od poskytovate�a telef�nnych slu�ieb.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting1_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrTurnOffCallWaiting2_Text = "Ak chcete vypn�� slu�bu �akania na hovor po�as tohto pripojenia, zadajte ��slo na toto miesto.";
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

    var L_CnnctErrTurnOffCallWaiting3_Text = "Potom kliknite na tla�idlo �alej.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrWhatToDoNext()
{
    var L_CnnctErrWhatToDoNext1_Text = "Najprv skontrolujte, �i niekto in� nepou��va telef�nnu linku, prostredn�ctvom ktorej sa chcete obr�ti� na spolo�nos� Microsoft.";
    Agent_Speak(L_CnnctErrWhatToDoNext1_Text);

    var L_CnnctErrWhatToDoNext2_Text = "Potom do�asne vypnite re�im �akanie na hovor, ak ho m�te zapnut�.";
    Agent_Speak(L_CnnctErrWhatToDoNext2_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrWhatToDoNext3_Text = "Ak chcete tento re�im vypn��, zadajte k�d uveden� v tomto poli.";
    Agent_Speak(L_CnnctErrWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_CnnctErrWhatToDoNext4_Text = "Po ukon�en� hovoru sa �akanie na hovor automaticky zapne.";
    Agent_Speak(L_CnnctErrWhatToDoNext4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrWhatToDoNext5_Text = "Ak ste pripraven� sk�si� to znova, kliknite na tla�idlo �alej.";
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

    var L_CnnctErrWhatToDoNext6_Text = "Ak chcete pokra�ova� bez registr�cie, kliknite na tla�idlo Presko�i�.";
    Agent_Speak(L_CnnctErrWhatToDoNext6_Text);
    
    Agent_Play("RestPose");
}



function Agent_HandShakeAddCommands() 
{
    var L_HandShakeAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_HandShakeAddCommands2_Text = "Ako m�m p&okra�ova� �alej?";

    g_AgentCharacter.Commands.Add("Agent_HandShakeAboutThisStep", L_HandShakeAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_HandShakeWhatToDoNext", L_HandShakeAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_HandShakeAboutThisStep()
{
    var L_HandShakeAboutThisStep1_Text = "Syst�m Windows sa teraz nemohol pripoji� k spolo�nosti Microsoft.";
    Agent_Speak(L_HandShakeAboutThisStep1_Text);

    var L_HandShakeAboutThisStep2_Text = "Telef�nne linky s� mo�no obsaden� alebo po��ta� nemohol uskuto�ni� hovor.";
    Agent_Speak(L_HandShakeAboutThisStep2_Text);

    var L_HandShakeAboutThisStep3_Text = "Sk�ste po�ka� nieko�ko min�t.";
    Agent_Speak(L_HandShakeAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_HandShakeAboutThisStep4_Text = "Potom sa pok�ste znova pripoji� kliknut�m na tla�idlo Vyto�i�.";
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
    
    var L_HandShakeWhatToDoNext1_Text = "Po�kajte nieko�ko min�t a potom kliknite tla�idlo Vyto�i� znova.";
    Agent_Speak(L_HandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_HandShakeWhatToDoNext2_Text = "Ak ste u� tento postup nieko�kokr�t vysk��ali, obr�te sa na v�robcu po��ta�a.";
    Agent_Speak(L_HandShakeWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_HandShakeWhatToDoNext3_Text = "Ak chcete pokra�ova� bez registr�cie tohto po��ta�a, kliknite na tla�idlo Vynecha�.";
    Agent_Speak(L_HandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_NoAnswerAddCommands() 
{
    var L_NoAnswerAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_NoAnswerAddCommands2_Text = "�o ak je t&elef�nne ��slo nespr�vne?";
    var L_NoAnswerAddCommands3_Text = "Ako m�m p&okra�ova� �alej?";

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
    var L_NoAnswerAboutThisStep1_Text = "Vyto�en� telef�nne ��slo nereaguje.";
    Agent_Speak(L_NoAnswerAboutThisStep1_Text);

    var L_NoAnswerAboutThisStep2_Text = "Skontrolujte, �i je ��slo spr�vne.";
    Agent_Speak(L_NoAnswerAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_NoAnswerAboutThisStep3_Text = "Ak sa zd�, �e je v�etko v poriadku, po�kajte nieko�ko min�t a potom to sk�ste znova kliknut�m na tla�idlo Vyto�i� znova.";
    Agent_Speak(L_NoAnswerAboutThisStep3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.edtPhoneNumber,"Left");

    var L_NoAnswerAboutThisStep4_Text = "Ak v�ak ��slo nie je spr�vne, kliknite sem a upravte ho.";
    Agent_Speak(L_NoAnswerAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_NoAnswerAboutThisStep5_Text = "Potom kliknite na tla�idlo Vyto�i� znova.";
    Agent_Speak(L_NoAnswerAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.btnRestore,"Right");

    var L_NoAnswerAboutThisStep6_Text = "P�vodn� ��slo, ktor� sa syst�m Windows pok�sil vyto�i�, m��ete kedyko�vek obnovi� kliknut�m na tla�idlo Obnovi�.";
    Agent_Speak(L_NoAnswerAboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_NoAnswerWhatIfWrongNumber()
{
    var L_NoAnswerWhatIfWrongNumber1_Text = "Ak uveden� telef�nne ��slo nie je spr�vne, kliknite do textov�ho po�a.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber1_Text);

    var L_NoAnswerWhatIfWrongNumber2_Text = "V poli by sa mala zobrazi� blikaj�ca zvisl� �iara naz�van� kurzor.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber2_Text);

    var L_NoAnswerWhatIfWrongNumber3_Text = "V�etko, �o nap�ete, sa zad� na miesto kurzora.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber3_Text);

    var L_NoAnswerWhatIfWrongNumber4_Text = "V textovom poli m��ete kurzor pos�va� stl��an�m kl�vesov ��pka do�ava alebo ��pka doprava na kl�vesnici.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber4_Text);

    var L_NoAnswerWhatIfWrongNumber5_Text = "Pomocou kl�vesu Delete m��ete odstr�ni� znak za kurzorom.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber5_Text);

    var L_NoAnswerWhatIfWrongNumber6_Text = "Pomocou kl�vesu Backspace odstr�nite znak pred kurzorom.";
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
    
    var L_NoAnswerWhatToDoNext1_Text = "Ak ste skontrolovali uveden� telef�nne ��slo a zd� sa, �e je spr�vne, zopakujte pokus o op�tovn� pripojenie kliknut�m na tla�idlo Vyto�i� znova.";
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

    var L_NoAnswerWhatToDoNext2_Text = "Ak chcete pokra�ova�, je potrebn� znova sa pripoji� alebo teraz vynecha� registr�ciu po��ta�a.";
    Agent_Speak(L_NoAnswerWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}



function Agent_PulseAddCommands() 
{

    var L_PulseAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_PulseAddCommands2_Text = "Ako m�m p&okra�ova� �alej?";

    g_AgentCharacter.Commands.Add("Agent_PulseAboutThisStep", L_PulseAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_PulseWhatToDoNext", L_PulseAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_PulseAboutThisStep()
{
    var L_PulseAboutThisStep1_Text = "Syst�m Windows nemohol ur�i�, �i telef�n pou��va t�nov� alebo pulzn� vo�bu.";
    Agent_Speak(L_PulseAboutThisStep1_Text);

    var L_PulseAboutThisStep2_Text = "Pred �al��m postupom syst�m Windows potrebuje tieto inform�cie.";
    Agent_Speak(L_PulseAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseAboutThisStep3_Text = "Na tejto obrazovke ur��te sp�sob vyt��ania, ktor� pou��va va�a telef�nna linka.";
    Agent_Speak(L_PulseAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PulseWhatToDoNext()
{
    var L_PulseWhatToDoNext1_Text = "Kliknite do bieleho kr��ku na�avo od re�imu vyt��ania, ktor� pou��va va�a telef�nna linka.";
    Agent_Speak(L_PulseWhatToDoNext1_Text);
    
    Agent_GestureAtElement(g.tone,"Left");

    var L_PulseWhatToDoNext2_Text = "Ak telef�n pou��va t�nov� vo�bu, kliknite sem.";
    Agent_Speak(L_PulseWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseWhatToDoNext3_Text = "Ak pou��va pulzn� vo�bu, kliknite sem.";
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

    var L_PulseWhatToDoNext4_Text = "Potom sk�ste ��slo vyto�i� znova kliknut�m na tla�idlo �alej.";
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

    var L_PulseWhatToDoNext5_Text = "Ak chcete pokra�ova� bez registr�cie tohto po��ta�a, kliknite na tla�idlo Vynecha�.";
    Agent_Speak(L_PulseWhatToDoNext5_Text);
    
    Agent_Play("RestPose");
}





function Agent_TooBusyAddCommands() 
{
        var L_TooBusyAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
        var L_TooBusyAddCommands2_Text = "�o ak je t&elef�nne ��slo nespr�vne?";
        var L_TooBusyAddCommands3_Text = "Ako m�m p&okra�ova� �alej?";

        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_AboutThisStep", L_TooBusyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatIfIncorrect", L_TooBusyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatToDoNext", L_TooBusyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_TooBusyCommand_AboutThisStep() 
{
    var L_TooBusyAboutThisStep1_Text = "Vyto�en� telef�nne ��slo je bu� nespr�vne, alebo obsaden�.";
    Agent_Speak(L_TooBusyAboutThisStep1_Text);

    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyAboutThisStep2_Text = "Skontrolujte, �i je ��slo spr�vne.";
    Agent_Speak(L_TooBusyAboutThisStep2_Text);
        
    Agent_Play("RestPose");

    var L_TooBusyAboutThisStep3_Text = "Ak sa zd�, �e ��slo je spr�vne, po�kajte nieko�ko min�t,";
    Agent_Speak(L_TooBusyAboutThisStep3_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyAboutThisStep4_Text = "Potom sk�ste ��slo znova vyto�i� kliknut�m na tla�idlo Vyto�i� znova.";
    Agent_Speak(L_TooBusyAboutThisStep4_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatIfIncorrect() 
{        
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect1_Text = "Ak tu zobrazen� telef�nne ��slo nie je spr�vne,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("cb_altnumber"),"Left");
    
    var L_TooBusyPhoneNumberIncorrect2_Text = " kliknite na toto za�iarkavacie pol��ko";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_altnumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect3_Text = "a zadajte n�hradn� ��slo.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("cb_outsideline"),"Left");

    var L_TooBusyPhoneNumberIncorrect4_Text = "Ak pristupujete k vonkaj�ej linke prostredn�ctvom vyto�enia ur�it�ho ��sla, za�iarknite toto pol��ko";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect4_Text);

    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("edt_outsideline"),"Right");

    var L_TooBusyPhoneNumberIncorrect5_Text = "a zadajte pr�slu�n� ��slo.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect5_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect6_Text = "Ak pou��vate re�im �akania na hovor, m��e prich�dzaj�ci hovor preru�i� spojenie.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect6_Text);

    var L_TooBusyPhoneNumberIncorrect7_Text = "Re�im �akania na hovor m��ete po�as trvania tohto pripojenia �ahko vypn��.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect7_Text);
        
    Agent_GestureAtElement(g.document.all("cb_callwaiting"),"Left");

    var L_TooBusyPhoneNumberIncorrect8_Text = "Kliknite do textov�ho po�a";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect8_Text);

    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_callwaiting"),"Right");

    var L_TooBusyPhoneNumberIncorrect9_Text = "a zadajte k�d.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect9_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect10_Text = "Po ukon�en� hovoru sa �akanie na hovor automaticky zapne.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect10_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyPhoneNumberIncorrect11_Text = "Ke� budete pripraven� pokra�ova�, kliknut�m na tla�idlo Vyto�i� znova sa pok�ste op� pripoji�.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect11_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatToDoNext() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyWhatToDoNext1_Text = "Ak ste telef�nne ��slo skontrolovali a je spr�vne,";
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
    
     var L_TooBusyWhatToDoNext2_Text = "kliknut�m na tla�idlo Vyto�i� znova zopakujte pokus o pripojenie.";
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

    var L_TooBusyWhatToDoNext3_Text = "Ak chcete tento krok vynecha�, kliknite na tla�idlo Vynecha�. Registrova� sa m��ete kedyko�vek po dokon�en� in�tal�cie syst�mu Windows.";
    Agent_Speak(L_TooBusyWhatToDoNext3_Text);
        
    Agent_Play("RestPose");
}



function Agent_ISPDToneAddCommands() 
{
    var L_ISPDToneAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_ISPDToneAddCommands2_Text = "�o ak &potrebujem premiestni� tento po��ta�?";
    var L_ISPDToneAddCommands3_Text = "Ako m�m p&okra�ova� �alej?";

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
    var L_ISPDToneAboutThisStep1_Text = "Syst�mu Windows sa nepodarilo zisti� oznamovac� t�n.";
    Agent_Speak(L_ISPDToneAboutThisStep1_Text);

    var L_ISPDToneAboutThisStep2_Text = "Mohlo sa to sta� z viacer�ch pr��in.";
    Agent_Speak(L_ISPDToneAboutThisStep2_Text);

    var L_ISPDToneAboutThisStep3_Text = "Najprv skontrolujte, �i je telef�nny k�bel po��ta�a na oboch koncoch spr�vne zasunut�.";
    Agent_Speak(L_ISPDToneAboutThisStep3_Text);

    var L_ISPDToneAboutThisStep4_Text = "�alej skontrolujte, �i sa moment�lne niekto nepok��a pou�i� va�u telef�nnu linku.";
    Agent_Speak(L_ISPDToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneAboutThisStep5_Text = "Potom sk�ste ��slo znova vyto�i� kliknut�m na tla�idlo Vyto�i� znova.";
    Agent_Speak(L_ISPDToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPDToneHowToMove()
{
    var L_ISPDToneHowToMove1_Text = "Ak potrebujete premiestni� po��ta�, aby ste ho mohli pripoji� k telef�nnej linke, skontrolujte, �i je nap�janie vypnut�.";
    Agent_Speak(L_ISPDToneHowToMove1_Text);

    var L_ISPDToneHowToMove2_Text = "Po re�tarte po��ta�a bude syst�m Windows pokra�ova� v procese od nedokon�en�ho kroku.";
    Agent_Speak(L_ISPDToneHowToMove2_Text);
}

function Agent_ISPDToneWhatToDoNext()
{
    var L_ISPDToneWhatToDoNext1_Text = "Najprv skontrolujte pripojenie po��ta�a k telef�nnej linke.";
    Agent_Speak(L_ISPDToneWhatToDoNext1_Text);

    var L_ISPDToneWhatToDoNext2_Text = "Potom skontrolujte, �i sa telef�nna linka pr�ve nepou��va.";
    Agent_Speak(L_ISPDToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneWhatToDoNext3_Text = "Potom sk�ste ��slo znova vyto�i� kliknut�m na tla�idlo Vyto�i� znova.";
    Agent_Speak(L_ISPDToneWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_ISPCnErrAddCommands() {

        var L_ISPCnErrAddCommands1_Text = "�o m�m teraz &urobi�?";
        var L_ISPCnErrAddCommands2_Text = "Ako &vypnem �akanie na hovor?";
        var L_ISPCnErrAddCommands3_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_ISPCnErrAddCommands4_Text = "Ako prejs� &na �al�iu obrazovku?";

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
        var L_ISPCnErrIntro1_Text = "Telefonick� pripojenie na nastavenie internetov�ch slu�ieb sa preru�ilo.";
        Agent_Speak(L_ISPCnErrIntro1_Text);

        Agent_MoveToElement(g.document.all("txtBullet1"),"Left");
        
        var L_ISPCnErrIntro2_Text = "Mohlo sa to sta� z viacer�ch pr��in.";
        Agent_Speak(L_ISPCnErrIntro2_Text);

        var L_ISPCnErrIntro3_Text = "Spojenie ste dlh�iu dobu akt�vne nepou��vali a boli ste odpojen� automaticky.";
        Agent_Speak(L_ISPCnErrIntro3_Text);

        var L_ISPCnErrIntro4_Text = "V �ase, kedy ste boli pripojen�, sa niekto mohol pok�si� pou�i� va�u telef�nnu linku.";
        Agent_Speak(L_ISPCnErrIntro4_Text);

        var L_ISPCnErrIntro5_Text = "Ak m�te zapnut� �akanie na hovor, mohol preru�enie sp�sobi� prich�dzaj�ci hovor.";
        Agent_Speak(L_ISPCnErrIntro5_Text);

        Agent_GestureAtElement(g.document.all("Callwait"),"Left");

        var L_ISPCnErrIntro6_Text = "Ak je s��as�ou telefonick�ch slu�ieb aj �akanie na hovor a pozn�te ��slo potrebn� na jeho vypnutie, zadajte ho sem.";
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

        var L_ISPCnErrIntro7_Text = "Potom sa sk�ste znova pripoji� kliknut�m na tla�idlo Vyto�i� znova.";
        Agent_Speak(L_ISPCnErrIntro7_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("txtBullet1"),"Left");

        var L_ISPCnErrWhatToDoNext1_Text = "Ak ste odstr�nili v�etky pr�padn� pr��iny";
        Agent_Speak(L_ISPCnErrWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPCnErrWhatToDoNext2_Text = "a chcete sa znovu pok�si� o pripojenie,";
        Agent_Speak(L_ISPCnErrWhatToDoNext2_Text);

        var L_ISPCnErrWhatToDoNext3_Text = "sk�ste to znova kliknut�m na tla�idlo Vyto�i� znova.";
        Agent_Speak(L_ISPCnErrWhatToDoNext3_Text);
}

function Agent_ISPCnErrCommand_HowToTurnOffCallWaiting() 
{
        Agent_GestureAtElement(g.document.all("Callwait"),"Left");
        
        var L_ISPCnErrHowToTurnOffCallWaiting1_Text = "Ak chcete vypn�� slu�bu �akania na hovor po�as tohto pripojenia,";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting1_Text);

        var L_ISPCnErrHowToTurnOffCallWaiting2_Text = "zadajte to ��slo sem.";
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

        var L_ISPCnErrHowToTurnOffCallWaiting3_Text = "Potom kliknite na tla�idlo Vyto�i� znova.";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_HowToMoveOn() 
{
        var L_ISPCnErrHowToMoveOn1_Text = "Ak chcete pokra�ova�, je nutn� sa znovu pripoji� alebo tento krok vynecha�.";
        Agent_Speak(L_ISPCnErrHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrHowToMoveOn2_Text = "Sk�ste sa znovu pripoji� kliknut�m na tla�idlo Vyto�i� znova,";
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

        var L_ISPCnErrHowToMoveOn3_Text = "alebo pokra�ujte kliknut�m na tla�idlo Presko�i�.";
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

        var L_ISPHandShakeAddCommands1_Text = "�o m�m teraz &urobi�?";
        var L_ISPHandShakeAddCommands2_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_ISPHandShakeAddCommands3_Text = "Ako prejdem &na �al�iu obrazovku?";

        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_WhatToDoNext", L_ISPHandShakeAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_AboutThisScreen", L_ISPHandShakeAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_HowToMoveOn", L_ISPHandShakeAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPHandShakeIntro() {

}

function Agent_ISPHandShakeCommand_AboutThisScreen() 
{
        var L_ISPHandShakeIntro1_Text = "Nov� slu�by konta poskytovate�a internetov�ch slu�ieb, ktor�ho ste vybrali, nie s� moment�lne k dispoz�cii.";
        Agent_Speak(L_ISPHandShakeIntro1_Text);

        var L_ISPHandShakeIntro2_Text = "Nepozn�m pr��inu.";
        Agent_Speak(L_ISPHandShakeIntro2_Text);

        var L_ISPHandShakeIntro3_Text = "M��ete v�ak po�ka� nieko�ko min�t a potom znovu vyto�i� ��slo.";
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
        
        var L_ISPHandShakeIntro4_Text = "alebo m��ete v tejto chv�li nastavenie slu�ieb siete Internet vynecha�.";
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

        var L_ISPHandShakeWhatToDoNext1_Text = "Po�kajte nieko�ko min�t, a potom stla�te tla�idlo Vyto�i� znova.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeWhatToDoNext2_Text = "Ak ste u� tento postup nieko�kokr�t vysk��ali,";
        Agent_Speak(L_ISPHandShakeWhatToDoNext2_Text);
        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeWhatToDoNext3_Text = "M��ete klikn�� na tla�idlo Vynecha� a pokra�ova� bez nastavenia internetovej slu�by.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPHandShakeCommand_HowToMoveOn() 
{
        var L_ISPHandShakeHowToMoveOn1_Text = "Chv�u po�kajte,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPHandShakeHowToMoveOn2_Text = "a potom sa znovu pok�ste pripoji� kliknut�m na tla�idlo Vyto�i� znova.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeHowToMoveOn3_Text = "Ak ste u� tento postup sk��ali,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeHowToMoveOn4_Text = "m��ete klikn�� na tla�idlo Presko�i� a pokra�ova� bez nastavenia internetov�ch slu�ieb.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn4_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPInsAddCommands() {

        var L_ISPInsAddCommands1_Text = "�o m�m teraz &urobi�?";
        var L_ISPInsAddCommands2_Text = "Chcem inform�cie o tejto &obrazovke?";
        var L_ISPInsAddCommands3_Text = "Ako prejs� &na �al�iu obrazovku?";

        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_WhatToDoNext", L_ISPInsAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_AboutThisScreen", L_ISPInsAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_HowToMoveOn", L_ISPInsAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPInsIntro() {

}

function Agent_ISPInsCommand_AboutThisScreen() 
{
        var L_ISPInsIntro1_Text = "�utujem. Syst�m Windows sa nemohol pripoji� na Internet prostredn�ctvom vybran�ho poskytovate�a slu�ieb.";
        Agent_Speak(L_ISPInsIntro1_Text);

        var L_ISPInsIntro2_Text = "Ak m�te probl�my s pripojen�m na Internet pomocou webov�ho preh�ad�va�a alebo s odosielan�m a prij�man�m e-mailov�ch spr�v,";
        Agent_Speak(L_ISPInsIntro2_Text);

        var L_ISPInsIntro3_Text = "obr�te sa na technick� podporu poskytovate�a slu�ieb.";
        Agent_Speak(L_ISPInsIntro3_Text);
}

function Agent_ISPInsCommand_WhatToDoNext() 
{
        var L_ISPInsWhatToDoNext1_Text = "Pokra�ujte kliknut�m na tla�idlo �alej.";
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

        var L_ISPInsHowToMoveOn1_Text = "Kliknite na tla�idlo �alej.";
        Agent_Speak(L_ISPInsHowToMoveOn1_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPNoAnwAddCommands() {

        var L_ISPNoAnwAddCommands1_Text = "�o m�m teraz &urobi�?";
        var L_ISPNoAnwAddCommands2_Text = "�o m�m urobi�, ak &telef�nne ��slo nie je spr�vne?";
        var L_ISPNoAnwAddCommands3_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_ISPNoAnwAddCommands4_Text = "Ako prejdem &na �al�iu obrazovku?";

        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoNext", L_ISPNoAnwAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect", L_ISPNoAnwAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_AboutThisScreen", L_ISPNoAnwAddCommands3_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_HowToMoveOn", L_ISPNoAnwAddCommands4_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPNoAnwCommand_AboutThisScreen() 
{
        var L_ISPNoAnwIntro1_Text = "Vyto�en� telef�nne ��slo nereaguje.";
        Agent_Speak(L_ISPNoAnwIntro1_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro2_Text = "Skontrolujte, �i je ��slo spr�vne.";
        Agent_Speak(L_ISPNoAnwIntro2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwIntro3_Text = "Ak sa zd�, �e je, po�kajte nieko�ko min�t,";
        Agent_Speak(L_ISPNoAnwIntro3_Text);

        var L_ISPNoAnwIntro4_Text = "a potom sa pok�ste kliknut�m na tla�idlo Vyto�i� znova op�tovne pripoji�.";
        Agent_Speak(L_ISPNoAnwIntro4_Text);

        var L_ISPNoAnwIntro5_Text = "Ak v�ak ��slo nie je spr�vne,";
        Agent_Speak(L_ISPNoAnwIntro5_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro6_Text = "kliknite sem a upravte ho.";
        Agent_Speak(L_ISPNoAnwIntro6_Text);

        Agent_Play("RestPose");

        var L_ISPNoAnwIntro7_Text = "Potom kliknite na tla�idlo Vyto�i� znova.";
        Agent_Speak(L_ISPNoAnwIntro7_Text);
}

function Agent_ISPNoAnwCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwWhatToDoNext1_Text = "Ak ste telef�nne ��slo skontrolovali a je spr�vne,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwWhatToDoNext2_Text = "a ste pripraven� pok�si� sa o op�tovn� pripojenie,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext2_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwWhatToDoNext3_Text = "kliknite na tla�idlo Vyto�i� znova.";
        Agent_Speak(L_ISPNoAnwWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwPhoneNumberIncorrect1_Text = "Ak uveden� telef�nne ��slo nie je spr�vne,";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect1_Text);

        var L_ISPNoAnwPhoneNumberIncorrect2_Text = "kliknite na textov� pole.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwPhoneNumberIncorrect3_Text = "V poli by sa mala zobrazi� blikaj�ca zvisl� �iara, naz�van� kurzor.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect3_Text);

        var L_ISPNoAnwPhoneNumberIncorrect4_Text = "V�etko, �o nap�ete, sa zad� na miesto kurzora.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect4_Text);

        var L_ISPNoAnwPhoneNumberIncorrect5_Text = "V textovom poli m��ete kurzor pos�va� stl��an�m kl�vesov ��pka do�ava alebo ��pka doprava na kl�vesnici.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect5_Text);

        var L_ISPNoAnwPhoneNumberIncorrect6_Text = "Pomocou kl�vesu Delete m��ete odstr�ni� znak za kurzorom.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect6_Text);

        var L_ISPNoAnwPhoneNumberIncorrect7_Text = "Pomocou kl�vesu Backspace odstr�nite znak pred kurzorom.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect7_Text);
}

function Agent_ISPNoAnwCommand_HowToMoveOn() 
{
        var L_ISPNoAnwHowToMoveOn1_Text = "Ak chcete pokra�ova�, je nutn� sa znovu pripoji� alebo nastavenie internetov�ch slu�ieb v tejto chv�li vynecha�.";
        Agent_Speak(L_ISPNoAnwHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwHowToMoveOn2_Text = "Ak chcete zopakova� pokus o pripojenie, kliknite na tla�idlo Vyto�i� znova.";
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

        var L_ISPNoAnwHowToMoveOn3_Text = "alebo kliknut�m na tla�idlo Presko�i� pokra�ujte bez nastavenia slu�ieb siete Internet.";
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

        var L_ISPPhBsyAddCommands1_Text = "�o m�m teraz &urobi�?";
        var L_ISPPhBsyAddCommands2_Text = "�o m�m urobi�, ak &telef�nne ��slo nie je spr�vne?";
        var L_ISPPhBsyAddCommands3_Text = "Chcem i&nform�cie o tomto kroku.";

        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoNext", L_ISPPhBsyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect", L_ISPPhBsyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_AboutThisScreen", L_ISPPhBsyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPPhBsyIntro() {

}

function Agent_ISPPhBsyCommand_AboutThisScreen() 
{
        var L_ISPPhBsyIntro1_Text = "Syst�m Windows sa nemohol pripoji� na vybrat�ho poskytovate�a internetov�ch slu�ieb.";
        Agent_Speak(L_ISPPhBsyIntro1_Text);

        var L_ISPPhBsyIntro2_Text ="Telef�nna linka je pravdepodobne obsaden�, alebo sa na strane poskytovate�a internetov�ch slu�ieb vyskytli technick� probl�my.";
        Agent_Speak(L_ISPPhBsyIntro2_Text);

        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyIntro3_Text = "Skontrolujte, �i je ��slo spr�vne.";
        Agent_Speak(L_ISPPhBsyIntro3_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro4_Text = "Ak sa zd�, �e je, po�kajte nieko�ko min�t,";
        Agent_Speak(L_ISPPhBsyIntro4_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPPhBsyIntro5_Text = "potom sk�ste ��slo znova vyto�i� kliknut�m na tla�idlo Vyto�i� znova.";
        Agent_Speak(L_ISPPhBsyIntro5_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro6_Text = "Ak v�ak ��slo nie je spr�vne,";
        Agent_Speak(L_ISPPhBsyIntro6_Text);

        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyIntro7_Text = "Ak chcete sk�si� n�hradn� ��slo z telef�nneho zoznamu, kliknite sem.";
        Agent_Speak(L_ISPPhBsyIntro7_Text);

        Agent_Play("RestPose");

        var L_ISPPhBsyIntro8_Text = "Potom kliknite na tla�idlo Vyto�i� znova.";
        Agent_Speak(L_ISPPhBsyIntro8_Text);
}

function Agent_ISPPhBsyCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyWhatToDoNext1_Text = "Ak ste skontrolovali telef�nne ��slo a zd� sa, �e je spr�vne,";
        Agent_Speak(L_ISPPhBsyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");    
    
        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyWhatToDoNext2_Text = "alebo chcete vyto�i� n�hradn� ��slo,";
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

        var L_ISPPhBsyWhatToDoNext4_Text = "Ak chcete zopakova� pokus o pripojenie, kliknite na tla�idlo Vyto�i� znova.";
        Agent_Speak(L_ISPPhBsyWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_ISPPhBsyPhoneNumberIncorrect1_Text = "Ak uveden� telef�nne ��slo nie je spr�vne,";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

    var L_ISPPhBsyPhoneNumberIncorrect2_Text = "Ak chcete sk�si� n�hradn� ��slo z telef�nneho zoznamu, kliknite na tento prep�na�.";
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

    var L_ISPPhBsyPhoneNumberIncorrect3_Text = "Ak ste pripraven� zopakova� pokus o pripojenie, kliknite na tla�idlo Vyto�i� znova.";
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

    var L_FinishAddCommands1_Text = "Chcem i&nform�cie o tomto kroku.";  
    var L_FinishAddCommands2_Text = "Ako sa m��em &registrova� priamo z po��ta�a?";    
    var L_FinishAddCommands3_Text = "Ako sa syst�m Windows a&ktivuje z pracovnej plochy?";    
    var L_FinishAddCommands4_Text = "Ako z�skam pr�stup na &Internet?";    
    var L_FinishAddCommands5_Text = "Ako m�m p&okra�ova� �alej?";

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
    var L_FinishAboutThisStep1_Text = "Blaho�el�me! Tento postup ste dokon�ili !";
    Agent_Speak(L_FinishAboutThisStep1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishAboutThisStep2_Text = "Ak chcete hne� za�a� pou��va� syst�m Windows, kliknite na tla�idlo Dokon�i�.";
    Agent_Speak(L_FinishAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_FinishAboutThisStep3_Text = "Ak sa chcete dozvedie� viac o nov�ch zauj�mav�ch funkci�ch syst�mu Windows XP, kliknite na polo�ku Pomoc a technick� podpora v ponuke �tart a do po�a H�ada� zadajte slovo \"prehliadka\".";
    Agent_Speak(L_FinishAboutThisStep3_Text);
}

function Agent_FinishHowToRegister() 
{
    var L_FinishHowToRegister1_Text = "Ak ste registr�ciu vynechali, m��ete k�piu syst�mu Windows kedyko�vek zaregistrova� kliknut�m na polo�ku Spustenie v ponuke �tart a zadan�m regwiz /r.";
    Agent_Speak(L_FinishHowToRegister1_Text);
        
    var L_FinishHowToRegister2_Text = "Ak ste zabudli postup, kliknite na polo�ku Pomoc a technick� podpora v ponuke �tart, kde n�jdete odpovede na ot�zky a �al�ie cenn� inform�cie.";
    Agent_Speak(L_FinishHowToRegister2_Text);
}

function Agent_FinishHowToActivate() 
{
    var L_FinishHowToActivate1_Text = "Ak ste aktiv�ciu vynechali, na pracovnej ploche syst�mu Windows sa bude pravidelne zobrazova� mal� pripomenutie.";
    Agent_Speak(L_FinishHowToActivate1_Text);
        
    var L_FinishHowToActivate2_Text = "Ak chcete �alej pou��va� syst�m Windows aj po skon�en� obdobia na aktiv�ciu, mus�te ho po�as tejto doby aktivova�.";
    Agent_Speak(L_FinishHowToActivate2_Text);

    var L_FinishHowToActivate3_Text = "Ak nechcete �aka� na upozornenie, m��ete spusti� Sprievodcu aktiv�ciou produktu Windows z ponuky �tart kliknut�m na polo�ku Aktiv�cia syst�mu Windows.";
    Agent_Speak(L_FinishHowToActivate3_Text);

    var L_FinishHowToActivate4_Text = "Ak ste zabudli postup, kliknite na polo�ku Pomoc a technick� podpora v ponuke �tart, kde n�jdete odpovede na ot�zky a �al�ie cenn� inform�cie.";
    Agent_Speak(L_FinishHowToActivate4_Text);
}

function Agent_FinishHowToAccessInternet() 
{
    var L_FinishHowToAccessInternet1_Text = "Ak ste u� nastavili pr�stup po��ta�a na Internet, kliknite na polo�ku Internet v hornej �asti ponuky �tart na pracovnej ploche syst�mu Windows.";
    Agent_Speak(L_FinishHowToAccessInternet1_Text);
        
    var L_FinishHowToAccessInternet2_Text = "Ak pr�stup po��ta�a na Internet nie je nastaven�, zobraz� sa Sprievodca pripojen�m na Internet.";
    Agent_Speak(L_FinishHowToAccessInternet2_Text);

    var L_FinishHowToAccessInternet3_Text = "Pod�a krokov v Sprievodcovi m��ete pripoji� po��ta� na Internet.";
    Agent_Speak(L_FinishHowToAccessInternet3_Text);
}

function Agent_FinishWhatToDoNext() 
{
    var L_FinishWhatToDoNext1_Text = "Ukon�ili ste in�tal�ciu syst�mu Microsoft Windows XP!";
    Agent_Speak(L_FinishWhatToDoNext1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishWhatToDoNext2_Text = "Kliknite na tla�idlo Dokon�i�.";
    Agent_Speak(L_FinishWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_FinishWhatToDoNext3_Text = "Ak sa chcete dozvedie� viac o nov�ch zauj�mav�ch funkci�ch syst�mu Windows XP, kliknite na polo�ku Pomoc a technick� podpora v ponuke �tart a do po�a H�ada� zadajte slovo \"prehliadka\".";
    Agent_Speak(L_FinishWhatToDoNext3_Text);

    var L_FinishWhatToDoNext4_Text = "Pr�jemn� pou��vanie syst�mu Windows XP!";
    Agent_Speak(L_FinishWhatToDoNext4_Text);
}






function Agent_MouseTutAddCommands() {

        var L_MouseTutMenuCommand1_Text = "�o m�m teraz &urobi�?";
        var L_MouseTutMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_MouseTutMenuCommand3_Text = "Ako prejs� &na �al�iu obrazovku?";

        
        
        

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

        var L_MouseTutIntroTellMeWhatToDoNext1_Text = "Ak chcete za�a�, kliknite na tla�idlo Kurz.";
        Agent_Speak(L_MouseTutIntroTellMeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutTellMeAboutThisScreen() 
{
        var L_MouseTutTellMeAboutThisScreen1_Text = "Toto je za�iatok skupiny obrazoviek, ktor� v�m pom��u osvoji� si pr�cu s my�ou po��ta�a.";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen1_Text);

        var L_MouseTutTellMeAboutThisScreen2_Text = "M��ete sa rozhodn�� tento kurz absolvova�,";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen2_Text);

        var L_MouseTutTellMeAboutThisScreen3_Text = "pr�padne ho presko�i�, ak s my�ou nar�bate bez probl�mov.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen1_Text = "Ak chcete za�a�, kliknite na tla�idlo Kurz.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text = "Ak ho chcete presko�i�, kliknite na tla�idlo �alej.";
        Agent_Speak(L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_MouseTutAAddCommands() {

        var L_MouseTutAMenuCommand1_Text = "�o m�m teraz &urobi�?";
        var L_MouseTutAMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_MouseTutAMenuCommand3_Text = "Ako prejs� &na �al�iu obrazovku?";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeWhatToDoNext", L_MouseTutAMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeAboutThisScreen", L_MouseTutAMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeHowToMoveToNextScreen", L_MouseTutAMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutATellMeWhatToDoNext() 
{
        var L_MouseTutAWhatToDoNext1_Text = "Sk�ste pos�va� my� a sledujte, ako sa pos�va ukazovate� na obrazovke.";
        Agent_Speak(L_MouseTutAWhatToDoNext1_Text);

        var L_MouseTutAWhatToDoNext2_Text = "My� pos�vajte po rovnom povrchu.";
        Agent_Speak(L_MouseTutAWhatToDoNext2_Text);
}

function Agent_OnMouseTutATellMeAboutThisScreen() 
{

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutATellMeAboutThisScreen1_Text = "T�to obrazovka ilustruje, ako m�te pomocou my�i pos�va� ukazovate� na obrazovke.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutATellMeAboutThisScreen2_Text = "Pos�vajte my� do�ava a doprava alebo od po��ta�a a k po��ta�u.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen2_Text);

        var L_MouseTutATellMeAboutThisScreen3_Text = "Vysk��ajte si to!";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen3_Text);
}

function Agent_OnMouseTutATellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutBAddCommands() {

        var L_MouseTutBMenuCommand1_Text = "�o m�m teraz &urobi�?";
        var L_MouseTutBMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_MouseTutBMenuCommand3_Text = "Ako prejs� &na �al�iu obrazovku?";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeWhatToDoNext", L_MouseTutBMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeAboutThisScreen", L_MouseTutBMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeHowToMoveToNextScreen", L_MouseTutBMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutBTellMeWhatToDoNext() 
{
        var L_MouseTutBWhatToDoNext1_Text = "Zodvihnite my� a premiestnite ju na in� miesto.";
        Agent_Speak(L_MouseTutBWhatToDoNext1_Text);

        var L_MouseTutBWhatToDoNext2_Text = "Polo�te ju a znovu �ou za�nite pohybova�.";
        Agent_Speak(L_MouseTutBWhatToDoNext2_Text);
}

function Agent_OnMouseTutBTellMeAboutThisScreen() 
{
        var L_MouseTutBTellMeAboutThisScreen1_Text = "T�to obrazovka ukazuje, ako m��ete vyrie�i� nedostatok miesta pre pohyb my�i.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen1_Text);

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutBTellMeAboutThisScreen2_Text = "Zodvihnite my� a polo�te ju na pohodlnej�ie miesto.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen2_Text);

        Agent_Play("RestPose");

        var L_MouseTutBTellMeAboutThisScreen3_Text = "Ke� my� polo��te a pos�vate ju, ukazovate� opisuje t� ist� dr�hu.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen3_Text);

        var L_MouseTutBTellMeAboutThisScreen4_Text = "V�imnite si, �e ukazovate� sa pos�va len v pr�pade, �e pos�vate my� po rovnom povrchu.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutBTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutCAddCommands() {

        var L_MouseTutCMenuCommand1_Text = "�o m�m teraz &urobi�?";
        var L_MouseTutCMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_MouseTutCMenuCommand3_Text = "Ako prejs� &na �al�iu obrazovku?";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeWhatToDoNext", L_MouseTutCMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeAboutThisScreen", L_MouseTutCMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeHowToMoveToNextScreen", L_MouseTutCMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_MouseTutCIntro() {
        
}

function Agent_OnMouseTutCTellMeWhatToDoNext() 
{
        var L_MouseTutCWhatToDoNext1_Text = "Sk�ste posun�� my� tak, aby sa ukazovate� presunul na tla�idl� na tejto obrazovke.";
        Agent_Speak(L_MouseTutCWhatToDoNext1_Text);
}

function Agent_OnMouseTutCTellMeAboutThisScreen() 
{
        var L_MouseTutCTellMeAboutThisScreen1_Text = "T�to obrazovka v�m umo�n� precvi�ovanie pos�vania ukazovate�a pomocou my�i.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutCTellMeAboutThisScreen2_Text = "Pomocou my�i posu�te ukazovate� na tieto tla�idl�.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutCTellMeAboutThisScreen3_Text = "V�imnite si, �e po posunut� ukazovate�a na tla�idlo sa zmen� jeho vzh�ad.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen3_Text);

        var L_MouseTutCTellMeAboutThisScreen4_Text = "Po odsunut� ukazovate�a z tla�idla sa obnov� jeho p�vodn� vzh�ad.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutCTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutDAddCommands() {

        var L_MouseTutDMenuCommand1_Text = "�o m�m teraz &urobi�?";
        var L_MouseTutDMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_MouseTutDMenuCommand3_Text = "Ako prejs� &na �al�iu obrazovku?";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeWhatToDoNext", L_MouseTutDMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeAboutThisScreen", L_MouseTutDMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeHowToMoveToNextScreen", L_MouseTutDMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutDTellMeWhatToDoNext() 
{
        var L_MouseTutDWhatToDoNext1_Text = "Sk�ste klikn�� �av�m tla�idlom my�i.";
        Agent_Speak(L_MouseTutDWhatToDoNext1_Text);
}

function Agent_OnMouseTutDTellMeAboutThisScreen() 
{
        var L_MouseTutDTellMeAboutThisScreen1_Text = "T�to lekcia kurzu sa zaober� klikan�m.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen1_Text);

        var elem = g.document.all("image");

        Agent_MoveToElement(elem, "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen2_Text = "Ak chcete vybra� polo�ku na obrazovke, pomocou my�i posu�te ukazovate� na polo�ku,";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen2_Text);

        Agent_GestureAtElement(g.document.all("image"), "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen3_Text = "potom stla�te tla�idlo my�i a uvo�nite ho, ako je tu zn�zornen�.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutDTellMeAboutThisScreen4_Text = "T�to �innos� sa naz�va kliknutie.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutDTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutEAddCommands() {

        var L_MouseTutEMenuCommand1_Text = "�o m�m teraz &urobi�?";
        var L_MouseTutEMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_MouseTutEMenuCommand3_Text = "Ako prejs� &na �al�iu obrazovku?";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeWhatToDoNext", L_MouseTutEMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeAboutThisScreen", L_MouseTutEMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeHowToMoveToNextScreen", L_MouseTutEMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutETellMeWhatToDoNext() 
{
        var L_MouseTutEWhatToDoNext1_Text = "Precvi�te si klikanie �av�m tla�idlom my�i na grafick�ch tla�idl�ch na tejto obrazovke.";
        Agent_Speak(L_MouseTutEWhatToDoNext1_Text);
}

function Agent_OnMouseTutETellMeAboutThisScreen() 
{
        var L_MouseTutETellMeAboutThisScreen1_Text = "T�to obrazovka v�m umo��uje precvi�i� si klikanie.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutETellMeAboutThisScreen2_Text = "Pomocou my�i uk�te na jedno z tla�idiel.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutETellMeAboutThisScreen3_Text = "a kliknite �av�m tla�idlom my�i.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen3_Text);

        var L_MouseTutETellMeAboutThisScreen4_Text = "Potom si to vysk��ajte aj na ostatn�ch tla�idl�ch.";
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

        var L_MouseTutFMenuCommand1_Text = "�o m�m teraz &urobi�?";
        var L_MouseTutFMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_MouseTutFMenuCommand3_Text = "Ako prejs� &na �al�iu obrazovku?";

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
        var L_MouseTutFTellMeAboutThisScreen1_Text = "V�borne!";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen1_Text);

        var L_MouseTutFTellMeAboutThisScreen2_Text = "Zatia� ste sa nau�ili ako ukazova� a klika� my�ou.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen2_Text);

        var L_MouseTutFTellMeAboutThisScreen3_Text = "Teraz si tieto zru�nosti precvi��te pri pr�ci s �al��mi prvkami, ktor� n�jdete v syst�me Windows a na webov�ch str�nkach.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen3_Text);

        var L_MouseTutFTellMeAboutThisScreen4_Text = "Ke� budete pripraven� pokra�ova�, kliknite na tla�idlo �alej.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutFTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutGAddCommands() {

        var L_MouseTutGMenuCommand1_Text = "�o m�m teraz &urobi�?";
        var L_MouseTutGMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_MouseTutGMenuCommand3_Text = "Ako prejs� &na �al�iu obrazovku?";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeWhatToDoNext", L_MouseTutGMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeAboutThisScreen", L_MouseTutGMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeHowToMoveToNextScreen", L_MouseTutGMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutGPreDisplayMenu() {

        if (g.btnNext.disabled) {

                var L_MouseTutGMenuCommand4_Text = "Pre�o nie je k &dispoz�cii tla�idlo �alej?";

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
        var L_MouseTutGWhyNextNotAvailable1_Text = "Tla�idlo �alej nie je k dispoz�cii, preto�e ste e�te nezvolili mesto.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable1_Text);

		Agent_GestureAtElement(g.document.all("selCity"),"LeftCenter");

        var L_MouseTutGWhyNextNotAvailable2_Text = "Najprv mus�te klikn�� na niektor� z t�chto miest.";
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

        var L_MouseTutGWhyNextNotAvailable3_Text = "Potom budete m�c� pokra�ova� kliknut�m na tla�idlo �alej.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeWhatToDoNext() {
		
		if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "RightCenter");

        var L_MouseTutGWhatToDoNext1_Text = "V zozname miest sa m��ete pos�va� kliknut�m na ��pky nahor a nadol.";
        Agent_Speak(L_MouseTutGWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

		if (g.document.dir == "rtl")
			Agent_Play("RestPose");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGWhatToDoNext2_Text = "Mesto potom m��ete vybra� kliknut�m na jeho n�zov.";
        Agent_Speak(L_MouseTutGWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutGWhatToDoNext3_Text = "Potom si vysk��ajte kliknutie na ostatn� mest� v zozname.";
        Agent_Speak(L_MouseTutGWhatToDoNext3_Text);

        Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
}

function Agent_OnMouseTutGTellMeAboutThisScreen() {
        var L_MouseTutGTellMeAboutThisScreen1_Text = "Na tejto obrazovke si m��ete precvi�i� v�ber polo�ky v zozname kliknut�m.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGTellMeAboutThisScreen2_Text = "Len �o kliknete na mesto v tomto zozname,";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");
		
        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("imgTable"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("imgTable"), "RightCenter");

        var L_MouseTutGTellMeAboutThisScreen3_Text = "zobraz� sa tu jeho fotografia.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeHowToMoveToNextScreen() {

        if (g.btnNext.disabled) {

                Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

                var L_MouseTutGHowToMoveToNextScreen1_Text = "Tu je potrebn� klikn�� na mesto,";
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

                var L_MouseTutGHowToMoveToNextScreen2_Text = "a potom kliknite na tla�idlo �alej.";
                Agent_Speak(L_MouseTutGHowToMoveToNextScreen2_Text);
    
                Agent_Play("RestPose");
        }

        else
                MouseTut_HowToMoveToNextScreen();

}




function Agent_MouseTutHAddCommands() {

        var L_MouseTutHMenuCommand1_Text = "�o m�m teraz &urobi�?";
        var L_MouseTutHMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_MouseTutHMenuCommand3_Text = "Ako prejs� &na �al�iu obrazovku?";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeWhatToDoNext", L_MouseTutHMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeAboutThisScreen", L_MouseTutHMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeHowToMoveToNextScreen", L_MouseTutHMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutHTellMeWhatToDoNext() {

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHWhatToDoNext1_Text = "Vyberte jednu z mo�nost� kliknut�m na kr��ok ved�a nej.";
        Agent_Speak(L_MouseTutHWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutHWhatToDoNext2_Text = "Zmen� sa tak vzh�ad fotografie.";
        Agent_Speak(L_MouseTutHWhatToDoNext2_Text);

        var L_MouseTutHWhatToDoNext3_Text = "Potom sk�ste klikn�� na druh� mo�nos�.";
        Agent_Speak(L_MouseTutHWhatToDoNext3_Text);
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeAboutThisScreen() {
        var L_MouseTutHTellMeAboutThisScreen1_Text = "Na tejto obrazovke si m��ete precvi�i� v�ber mo�nosti v pr�pade, �e je naraz mo�n� vybra� len jednu z mo�nost�.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHTellMeAboutThisScreen2_Text = "Ak kliknete tu na tieto kr��ky,";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("cityImg"), "LeftCenter");
        else
			Agent_GestureAtElement(g.document.all("cityImg"), "RightCenter");

        var L_MouseTutHTellMeAboutThisScreen3_Text = "zmen� sa sp�sob zobrazenia fotografie.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutIAddCommands() {

        var L_MouseTutIMenuCommand1_Text = "�o m�m teraz &urobi�?";
        var L_MouseTutIMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_MouseTutIMenuCommand3_Text = "Ako prejs� &na �al�iu obrazovku?";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeWhatToDoNext", L_MouseTutIMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeAboutThisScreen", L_MouseTutIMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeHowToMoveToNextScreen", L_MouseTutIMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutITellMeWhatToDoNext() {

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutIWhatToDoNext1_Text = "Kliknite na uveden� mo�nosti a v�imnite si ich vplyv na fotografiu.";
        Agent_Speak(L_MouseTutIWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutIWhatToDoNext2_Text = "V�ber mo�nosti zru��te op�tovn�m kliknut�m na mo�nos�.";
        Agent_Speak(L_MouseTutIWhatToDoNext2_Text);

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeAboutThisScreen() {
        var L_MouseTutITellMeAboutThisScreen1_Text = "V niektor�ch pr�padoch je v r�mci jednej skupiny mo�n� vybra� viacero mo�nost�.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen1_Text);

        var L_MouseTutITellMeAboutThisScreen2_Text = "Na tejto obrazovke m��ete zvoli� r�zne �t�ly zobrazenia fotografie.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen2_Text);

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutITellMeAboutThisScreen3_Text = "Kliknite na pol��ka ved�a uveden�ch mo�nost�.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutJAddCommands() {

        var L_MouseTutJMenuCommand1_Text = "�o m�m teraz &urobi�?";
        var L_MouseTutJMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_MouseTutJMenuCommand3_Text = "Ako prejs� &na �al�iu obrazovku?";

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

        var L_MouseTutJWhatToDoNext1_Text = "Kliknite na toto pol��ko,";
        Agent_Speak(L_MouseTutJWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutJWhatToDoNext2_Text = "a potom zadajte text, ktor� sa m� zobrazi� ako popis.";
        Agent_Speak(L_MouseTutJWhatToDoNext2_Text);
}

function Agent_OnMouseTutJTellMeAboutThisScreen() {
        var L_MouseTutJTellMeAboutThisScreen1_Text = "V niektor�ch pr�padoch si vo�bu m��ete prisp�sobi� zadan�m vlastn�ch slov.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen1_Text);

        var L_MouseTutJTellMeAboutThisScreen2_Text = "Na tejto obrazovke m��ete zada� popis fotografie.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen2_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(g.document.all("caption"), "Left");
		else
			Agent_GestureAtElement(g.document.all("CaptionLabel"), "Left");

        var L_MouseTutJTellMeAboutThisScreen3_Text = "Kliknite na toto pole a zadajte popis.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutJTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutKAddCommands() {

        var L_MouseTutKMenuCommand1_Text = "�o m�m teraz &urobi�?";
        var L_MouseTutKMenuCommand2_Text = "Chcem inform�cie o tejto &obrazovke.";
        var L_MouseTutKMenuCommand3_Text = "Ako prejs� &na �al�iu obrazovku?";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeWhatToDoNext", L_MouseTutKMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeAboutThisScreen", L_MouseTutKMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeHowToMoveToNextScreen", L_MouseTutKMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutKTellMeWhatToDoNext() {
        var L_MouseTutKWhatToDoNext1_Text = "Blaho�el�me! Dokon�ili ste kurz pr�ce s my�ou.";
        Agent_Speak(L_MouseTutKWhatToDoNext1_Text);

        var L_MouseTutKWhatToDoNext2_Text = "Kliknut�m na tla�idlo �alej prejdite na �al�iu obrazovku.";
        Agent_Speak(L_MouseTutKWhatToDoNext2_Text);
}

function Agent_OnMouseTutKTellMeAboutThisScreen() {
        var L_MouseTutKTellMeAboutThisScreen1_Text = "V�borne! Fotografia z pr�zdnin je hotov�.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen1_Text);
        
        var L_MouseTutKTellMeAboutThisScreen2_Text = "Dokon�ili ste kurz pr�ce s my�ou.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen2_Text);

        var L_MouseTutKTellMeAboutThisScreen3_Text = "Podrobnej�� kurz pr�ce s my�ou, ktor� sa zaober� �innos�ami, ako je pres�vanie, �prava ve�kosti a pou��vanie prav�ho tla�idla my�i, n�jdete v Pomocn�kovi po prvom spusten� syst�mu Windows.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutKTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function MouseTut_WhatToDoNext() 
{
        var L_MouseTutTellMeWhatToDoNext1_Text = "Ak chcete prejs� na �al�iu obrazovku, kliknite na tla�idlo �alej.";
        Agent_Speak(L_MouseTutTellMeWhatToDoNext1_Text);

        var L_MouseTutTellMeWhatToDoNext2_Text = "Ak chcete presko�i� zvy�n� �asti tohto kurzu, kliknite na tla�idlo Presko�i�.";
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

        var L_MouseTutTellMeHowToMoveToNextScreen1_Text = "Ak chcete prejs� na �al�iu obrazovku, kliknite na tla�idlo �alej.";
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

        var L_MouseTutTellMeHowToMoveToNextScreen2_Text = "Ak chcete presko�i� tento kurz, kliknite na tla�idlo Presko�i�.";
        Agent_Speak(L_MouseTutTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_2nicsAddCommands() 
{
    var L_2nicsMenuCommand1_Text = "Chcem i&nform�cie o tomto kroku.";
    
    g_AgentCharacter.Commands.Add("Agent_On2nicsAboutThisStep", L_2nicsMenuCommand1_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_On2nicsAboutThisStep() 
{
    var L_2nicsAboutThisScreen1_Text = "T�to obrazovka vysvet�uje, �e existuje nieko�ko sp�sobov pripojenia na Internet.";
	Agent_Speak(L_2nicsAboutThisScreen1_Text);
	
    var L_2nicsAboutThisScreen2_Text = "Po in�tal�cii syst�mu Windows si m��ete vybra� sp�sob pripojenia, ktor� chcete pou��va�.";
	Agent_Speak(L_2nicsAboutThisScreen2_Text);
}



function Agent_UserNameAddCommands() 
{
    var L_UserNameCommand1_Text = "Chcem i&nform�cie o tomto kroku.";
    var L_UserNameCommand2_Text = "K&de sa objav� moje meno?";
    var L_UserNameCommand3_Text = "A&ko m��em nesk�r zmeni� svoje meno?";
    var L_UserNameCommand4_Text = "Ako m�m p&okra�ova� �alej?";
    
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
    var L_UserNameAboutThisStep1_Text = "Na tejto obrazovke m��ete zada� svoje krstn� meno a priezvisko. Syst�m Windows v�s po prihl�sen� spozn�.";
	Agent_Speak(L_UserNameAboutThisStep1_Text);
}

function Agent_OnUserNameWhereIsName() 
{
    var L_UserNameWhereIsName1_Text = "Va�e krstn� meno bude uveden� na �vodnej obrazovke, ktor� sa zobraz� po spusten� syst�mu Windows.";
	Agent_Speak(L_UserNameWhereIsName1_Text);
	
    var L_UserNameWhereIsName2_Text = "Po prihl�sen� sa zobraz� aj vo vrchnej �asti ponuky �tart.";
	Agent_Speak(L_UserNameWhereIsName2_Text);
	
    var L_UserNameWhereIsName3_Text = "Ke� sa prihl�si in� pou��vate� a otvor� v� prie�inok Moje Dokumenty, va�e meno sa zobraz� v n�zve prie�inka.";
	Agent_Speak(L_UserNameWhereIsName3_Text);
	
    var L_UserNameWhereIsName4_Text = "N�zov prie�inka sa zobraz� napr�klad ako \"Martin\", tak�e ostatn� pou��vatelia bud� vedie�, �e patr� v�m.";
	Agent_Speak(L_UserNameWhereIsName4_Text);
	
    var L_UserNameWhereIsName5_Text = "Va�e meno bude uveden� aj v zozname pou��vate�ov, ktor� sa zobraz� kliknut�m na polo�ku Ovl�dac� panel v ponuke �tart a potom na polo�ku Pou��vate�sk� kont�.";
	Agent_Speak(L_UserNameWhereIsName5_Text);
}

function Agent_OnUserNameHowToChangeName() 
{
    var L_UserNameHowToChangeName1_Text = "Ak chcete po prihl�sen� do syst�mu Windows zmeni� svoje meno, kliknite na polo�ku Ovl�dac� panel v ponuke �tart.";
	Agent_Speak(L_UserNameHowToChangeName1_Text);
	
    var L_UserNameHowToChangeName2_Text = "Potom kliknite na polo�ku Pou��vate�sk� kont�.";
	Agent_Speak(L_UserNameHowToChangeName2_Text);
	
    var L_UserNameHowToChangeName3_Text = "M��ete zmeni� svoje meno aj men� ostatn�ch pou��vate�ov po��ta�a.";
	Agent_Speak(L_UserNameHowToChangeName3_Text);
}

function Agent_OnUserNameWhatToDoNext() 
{
    var L_UserNameWhatToDoNext1_Text = "Sk�ste sa znovu pripoji� na Internet kliknut�m na tla�idlo �alej.";
	Agent_Speak(L_UserNameWhatToDoNext1_Text);
	
    var L_UserNameWhatToDoNext2_Text = "Ak chcete pokra�ova� bez pripojenia na Internet, kliknite na tla�idlo Presko�i�.";
	Agent_Speak(L_UserNameWhatToDoNext2_Text);
}
