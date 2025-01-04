



var L_PhoneNumberLegit_Text = "\\map=\"nolla \\pau=800\\ yksiyksikahdeksan kolmeviisikahdeksan\"=\"0800 118 358\"\\";


var g_strRegionSetting = "";
var g_strKeyboardSetting = "";
var g_strLangSetting = " ";



function Agent_AddCommonCommands() 
{
    g_AgentCharacter.Commands.RemoveAll();

    var L_AddCommonCommands1_Text = "&Sulje valikko";

    g_AgentCharacter.Commands.Add("CloseMenu", L_AddCommonCommands1_Text);
        
    if (g_bAgentShowSpecialISPCommands) 
    {
        
		var L_AddCommonCommands2_Text = "Haluan tietoja &Internetiin kirjautumisesta";
		var L_AddCommonCommands3_Text = "&K�ynnist� uudelleen Internet-kirjautuminen";
		var L_AddCommonCommands4_Text = "O&hita Internet-kirjautuminen";

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
        var L_AddAssistantanceCommand1_Text = "Kenelt� voin pyyt�� &apua?";       

        g_AgentCharacter.Commands.Add("Agent_OnCommand_AboutAssistance", L_AddAssistantanceCommand1_Text);
    }
}

function Agent_OnCommand_AboutAssistance() 
{

    Agent_StopAll();

    var L_AboutAssistance1_Text = "Ota yhteytt� tietokoneen valmistajaan: %s.";
    var re = /%s/i;
    var L_AboutAssistance2_Text = "ota yhteytt� tietokoneen valmistajaan.";

    
    

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
            Agent_Speak(L_AboutAssistance2_Text);
    else
            Agent_Speak(L_AboutAssistance1_Text.replace(re, strPhoneNumber));

    Agent_Play("ReadReturn");
}

function Agent_AddWhatToDoNextCommand() 
{
    var L_AddWhatToDoNextCommand1_Text = "Haluan tietoja seuraavasta &vaiheesta";
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

        var L_WhatToDoNext1_Text = "Jatka valitsemalla Seuraava.";
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

        var L_WhatToDoNext2_Text = "Voit palata edelliseen vaiheeseen valitsemalla Edellinen.";
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

        var L_WhatToDoNext3_Text = "Voit my�s ohittaa kokonaisen vaiheen valitsemalla Ohita.";
        Agent_Speak(L_WhatToDoNext3_Text);
        
        Agent_Play("RestPose");
    }       
}

function Agent_DoSpecialISPCommand1() 
{
	
	
			
	Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
			
	var L_ISPSpecialTellMeAboutInternetSignup1_Text = "Olet m��ritt�m�ss� Internetin kirjautumisasetuksia.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup1_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup2_Text = "Jos et pysty jatkamaan, napsauta minua tai paina F1-n�pp�int�.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup2_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup3_Text = "T�ll�in n�ytt��n tulee valikko, jonka komennoilla voit k�ynnist�� toiminnon uudelleen tai siirty� seuraavaan osaan.";
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

    var L_EncourageNextButton1_Text = "Valitse Seuraava. | Sinun on valittava Seuraava. | Napsauta Seuraava-painiketta. | Siirry seuraavaan vaiheeseen valitsemalla Seuraava.";
    Agent_Speak(L_EncourageNextButton1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnF1() 
{
    var L_OnF1_Text = "Kuinka voin auttaa sinua? | Miten voin olla avuksi?";
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

    var L_PreWelcomeScript1_Text = "Tervetuloa Windows XP:hen";
    Agent_Speak(L_PreWelcomeScript1_Text);

    var L_PreWelcomeScript2_Text = "Autan sinua uuden tietokoneesi asetusten m��ritt�misess�.";
    Agent_Speak(L_PreWelcomeScript2_Text);

    var L_PreWelcomeScript3_Text = "Voin selitt�� uusia asioita.";
    Agent_Speak(L_PreWelcomeScript3_Text);
                
    Agent_MoveToElement(document.all("AssistImg"), "LeftCenter"); 
    
    

    var L_PreWelcomeScript4_Text = "Aina kun tarvitset apua, napsauta hiirell� minua tai paina F1-n�pp�int�.";
    Agent_Speak(L_PreWelcomeScript4_Text);
    
    Agent_Play("PointLeft");

    var L_PreWelcomeScript5_Text = "Olen paikalla tarvittaessa.";
    Agent_Speak(L_PreWelcomeScript5_Text);
    
    Agent_Play("RestPose");

    g_AgentRequestHideImage = g_AgentCharacter.Hide();
}



function Agent_WelcomeAddCommands() 
{
    
    
    

    var L_WelcomeAddCommands1_Text = "Haluan tietoja t&�st� toiminnosta";
    var L_WelcomeAddCommands2_Text = "Haluan tietoja seuraavasta &vaiheesta";

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

    var L_WelcomeWhatToDoNext1_Text = "Kun olet valmiina aloittamaan, valitse Seuraava.";
    Agent_Speak(L_WelcomeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnWelcomeCommand_AboutProcess() 
{
    Agent_StopAll();

    var L_AboutProcess1_Text = "Takanani n�et ensimm�isen ikkunan siit� sarjasta ikkunoita, jonka avulla voit helposti varmistaa, ett� tietokoneesi on m��ritetty haluamallasi tavalla.";
    Agent_Speak(L_AboutProcess1_Text);

    var L_AboutProcess2_Text = "Taustalla on ensimm�inen niist� n�yt�ist�, joiden avulla voit m��ritt�� tietokoneen asetukset.";
    Agent_Speak(L_AboutProcess2_Text);

    var L_AboutProcess3_Text = "T�ss� lyhyesti ne vaiheet, jotka k�ymme l�pi seuraavaksi:";
    Agent_Speak(L_AboutProcess3_Text);

    var L_AboutProcess4_Text = "Ensin varmistamme, ett� laitteet, kuten kaiuttimet, n�pp�imist� ja kello, toimivat oikein.";
    Agent_Speak(L_AboutProcess4_Text);

    var L_AboutProcess5_Text = "Voimme my�s varmistaa, ett� tietokone on liitetty verkkoon oikein.";
    Agent_Speak(L_AboutProcess5_Text);


    var L_AboutProcess6_Text = "Seuraavaksi tutkimme k�ytt�oikeussopimusta, joka m��ritt�� k�ytt�ehdot tuotteelle %1. ";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess6_Text, g_ProductName));
    
    if (!window.external.get_RetailOOBE()) 
    {
    var L_AboutProcess7_Text = "Jos koneessa on toimiva modeemi tai verkkoyhteys, voit rekister�id� tuotteen Microsoftille ja %1:lle, jolloin saat tietoja tuotep�ivityksist� ja mahdollisista tarjouksista.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess7_Text, g_OEMNameStr));
    } 
    else 
    {    
    var L_AboutProcess7_Text = "Jos koneessa on toimiva modeemi tai verkkoyhteys, voit rekister�id� tuotteen Microsoftille, jolloin saat tietoja tuotep�ivityksist� ja mahdollisista tarjouksista.";
    Agent_Speak(L_AboutProcess7_Text);
    }       

    var L_AboutProcess8_Text = "Voit my�s halutessasi varmistaa, ett� k�yt�ss� on laillinen kopio tuotteesta %1.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess8_Text, g_ProductName));

    var L_AboutProcess9_Text = "Kolmas vaihe on Internetiin yhdist�minen.";
    Agent_Speak(L_AboutProcess9_Text); 

    var L_AboutProcess10_Text = "Jos p��t�t ohittaa t�m�n vaiheen nyt, voit tehd� sen my�hemminkin.";
    Agent_Speak(L_AboutProcess10_Text);

    var L_AboutProcess11_Text = "Ja lopuksi autan muokkaamaan koneen asetuksia sopiviksi kaikille sen k�ytt�jille. ";
    Agent_Speak(L_AboutProcess11_Text);

    var L_AboutProcess12_Text = "Siin� kaikki. T�m� ei kest� kauan, joten eik�h�n aloiteta!";
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

    var L_AboutProcess13_Text = "Aloita valitsemalla Seuraava.";
    Agent_Speak(L_AboutProcess13_Text);
    
    Agent_Play("RestPose");
}


                                                       

function Agent_TimeZoneAddCommands() 
{
    var L_TimeZoneCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_TimeZoneCommand2_Text = "K&uinka valitsen aikavy�hykkeen?";

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
        var L_TimeZoneMenuCommand3_Text = "Haluan tietoja &kes�- ja talviajan vaihtumisesta";

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
    var L_ExplainTimeZoneStep1_Text = "M��rit� aikavy�hyke, jossa t�m� tietokone sijaitsee, niin Windows asettaa tietokoneen kellon oikeaan aikaan.";
    Agent_Speak(L_ExplainTimeZoneStep1_Text);

    var L_ExplainTimeZoneStep2_Text = "Jos niin haluat, Windows voi siirt�� kellon automaattisesti kes�aikaan.";
    Agent_Speak(L_ExplainTimeZoneStep2_Text);

    var L_ExplainTimeZoneStep3_Text = "T�m� on viimeinen laitteistoon liittyv� vaihe.";
    Agent_Speak(L_ExplainTimeZoneStep3_Text);

    var L_ExplainTimeZoneStep4_Text = "Seuraavaksi on vuorossa k�ytt�oikeussopimus.";
    Agent_Speak(L_ExplainTimeZoneStep4_Text);
    
}

function Agent_OnTimeZoneCommand_SelectZone() 
{
    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone1_Text = "Aikavy�hykkeet ilmoitetaan suhteessa Greenwichin normaaliaikaan (GMT +/-)";
    Agent_Speak(L_TellUserHowToSelectTimeZone1_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone2_Text = "Voit siirty� luetteloruutuun my�s sarkaimella.";
    Agent_Speak(L_TellUserHowToSelectTimeZone2_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Right");

    var L_TellUserHowToSelectTimeZone3_Text = "Voit valita haluamasi aikavy�hykkeen alla olevien nuolipainikkeiden tai n�pp�imist�n yl�- ja alanuolin�pp�inten avulla. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone3_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone4_Text = "Napsauta haluamaasi aikavy�hykett� tai valitse se painamalla n�pp�imist�n Enter-n�pp�int�.";
    Agent_Speak(L_TellUserHowToSelectTimeZone4_Text);

    var L_TellUserHowToSelectTimeZone5_Text = "Valittu aikavy�hyke esiintyy korostettuna.";
    Agent_Speak(L_TellUserHowToSelectTimeZone5_Text);

    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserHowToSelectTimeZone6_Text = "Jos asut maassa, jossa k�ytet��n kes�aikaa, valitse t�m� vaihtoehto napsauttamalla sit� hiirell�.";
    Agent_Speak(L_TellUserHowToSelectTimeZone6_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone7_Text = "Windows asettaa tietokoneen kellonajan automaattisesti.";
    Agent_Speak(L_TellUserHowToSelectTimeZone7_Text);
    
}

function Agent_OnTimeZoneCommand_DaylightSavings() 
{
    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserAboutDaylightOption1_Text = "Joissakin aikavy�hykkeiss� kellonaikaa siirret��n tiettyin� vuodenaikoina eteen- tai taaksep�in, jotta p�iv�nvalo voitaisiin k�ytt�� mahdollisimman hyvin hy�dyksi.";
    Agent_Speak(L_TellUserAboutDaylightOption1_Text);
    
    Agent_Play("RestPose");

    var L_TellUserAboutDaylightOption2_Text = "Valitse t�m� vaihtoehto, jos haluat Windowsin siirt�v�n tietokoneen kellonaikaa automaattisesti kes�- ja talviajan vaihtuessa.";
    Agent_Speak(L_TellUserAboutDaylightOption2_Text);

}



function Agent_OEMHWAddCommands() 
{
    var L_OEMHWMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_OEMHWMenuCommand2_Text = "Mist� &tiet�� toimiiko ��nilaitteisto?";
    var L_OEMHWMenuCommand3_Text = "Mit� jos &��nilaitteisto ei toimi?";
    var L_OEMHWMenuCommand4_Text = "Miten oso&itan vastaukseni?";

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
    var L_OEMHWAboutThisScreen1_Text = "T�ss� ikkunassa varmistetaan tietokoneesi ��nilaitteiston toiminta.";
	  Agent_Speak(L_OEMHWAboutThisScreen1_Text);

    var L_OEMHWAboutThisScreen2_Text = "��nilaitteisto muodostuu kaiuttimista, tietokoneen sis�ll� olevasta ��nikortista ja %1-sovelluksesta, joka toistaa ��ni�.";
	  Agent_Speak(ApiObj.formatMessage(L_OEMHWAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnOEMHWHowDoIKnow() 
{
    var L_OEMHWHowDoIKnow1_Text = "Jos kuulet ��nt� juuri nyt, laitteisto toimii.";
	  Agent_Speak(L_OEMHWHowDoIKnow1_Text);

    var L_OEMHWHowDoIKnow2_Text = "Jos et kuule ��nt�, tarkista ensin ettei kaiuttimien ��nenvoimakkuus ole liian hiljainen.";
	  Agent_Speak(L_OEMHWHowDoIKnow2_Text);

    var L_OEMHWHowDoIKnow3_Text = "Jos se ei auta, tehd��n lis�tarkistuksia.";
	  Agent_Speak(L_OEMHWHowDoIKnow3_Text);
}

function Agent_OnOEMHWIsNotWorking() 
{
    var L_OEMHWIsNotWorking1_Text = "Tarkista, ett� kaiuttimet ovat p��ll�.";
	  Agent_Speak(L_OEMHWIsNotWorking1_Text);
	
    var L_OEMHWIsNotWorking2_Text = "Joissakin malleissa on merkkivalo, joka osoittaa, onko virta kytketty.";
	  Agent_Speak(L_OEMHWIsNotWorking2_Text);

    var L_OEMHWIsNotWorking3_Text = "Tarkista, ett� ��nenvoimakkuus on kuultavalla tasolla.";
	  Agent_Speak(L_OEMHWIsNotWorking3_Text);

    var L_OEMHWIsNotWorking4_Text = "Jos ��nt� ei viel�k��n kuulu...";
	  Agent_Speak(L_OEMHWIsNotWorking4_Text);

    var L_OEMHWIsNotWorking5_Text = "Tarkista, ett� kaiuttimet on kytketty virtal�hteeseen, ja ett� ne on liitetty oikein tietokoneeseen.";
	  Agent_Speak(L_OEMHWIsNotWorking5_Text);
	
	  var L_OEMHWIsNotWorking6_Text = "Mikrofoni, kaiutin ja linjatuloliit�nn�t ovat hankalasti erotettavissa toisistaan.";
	  Agent_Speak(L_OEMHWIsNotWorking6_Text);

    var L_OEMHWIsNotWorking7_Text = "Tarkista, jos kyseess� ovat stereokaiuttimet, ett� ne on kytketty toisiinsa.";
	  Agent_Speak(L_OEMHWIsNotWorking7_Text);

    var L_OEMHWIsNotWorking8_Text = "Lopuksi, jos ��nt� ei viel�k��n kuulu, koeta k�ytt�� toisia kaiuttimia, jos mahdollista.";
	  Agent_Speak(L_OEMHWIsNotWorking8_Text);

    var L_OEMHWIsNotWorking9_Text = "Jos lainakaiuttimet toimivat mutta omat eiv�t, t�ytyy omat kaiuttimet korjata tai vaihtaa.";
	  Agent_Speak(L_OEMHWIsNotWorking9_Text);
}

function Agent_OnOEMHWIndicateAnswer() 
{
	  Agent_GestureAtElement(g.document.all("Sound_Yes"), "Left");
    
    var L_OEMHWIndicateAnswer1_Text = "Vie hiiren osoitin vastauksesi vasemmalla puolella olevan valkoisen ympyr�n p��lle";
	  Agent_Speak(L_OEMHWIndicateAnswer1_Text);
    
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("radioNoSound"), "Left");

    var L_OEMHWIndicateAnswer2_Text = "ja paina hiiren ykk�spainiketta.";
	  Agent_Speak(L_OEMHWIndicateAnswer2_Text);
    
    Agent_Play("RestPose");

    var L_OEMHWIndicateAnswer3_Text = "Jos haluat k�ytt�� n�pp�imist�� vastauksesi osoittamiseen painele Sarkain-n�pp�int� kunnes n�et himme�n neli�n haluamasi valkoisen pallon ymp�rill� ja paina v�lily�nti�.";
	  Agent_Speak(L_OEMHWIndicateAnswer3_Text);
}




function Agent_CompNameAddCommands() 
{
    var L_CompNameMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_CompNameMenuCommand2_Text = "Kuinka tietokone nimet��n &uudelleen my�hemmin?";

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
    var L_CompNameAboutThisScreen1_Text = "T�ss� n�yt�ss� annetaan tietokoneelle nimi.";
	  Agent_Speak(L_CompNameAboutThisScreen1_Text);

    var L_CompNameAboutThisScreen2_Text = "T�m� nimi erottaa tietokoneen muista, jos se on kytketty verkkoon.";
	  Agent_Speak(L_CompNameAboutThisScreen2_Text);
}

function Agent_OnCompNameHowToRename() 
{
    var L_CompNameHowToRename1_Text = "Kun Windowsin m��ritt�minen on valmis, valitse Ohjauspaneeli K�ynnist�-valikossa.";
	  Agent_Speak(L_CompNameHowToRename1_Text);

    var L_CompNameHowToRename2_Text = "Napsauta Suorituskyky ja yll�pito -kohdan alla olevaa J�rjestelm�-kuvaketta ja seuraa Tietokoneen nimi -v�lilehden ohjeita.";
	  Agent_Speak(L_CompNameHowToRename2_Text);

    var L_CompNameHowToRename3_Text = "Mik�li tarvitset n�it� tietoja uudelleen, saat lis�tietoja valitsemalla Ohje ja tuki K�ynnist�-valikosta.";
	  Agent_Speak(L_CompNameHowToRename3_Text);
}




function Agent_SECURITYPASSAddCommands() 
{
    var L_SECURITYPASSMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_SECURITYPASSMenuCommand2_Text = "Mik� on paras tapa &luoda salasana?";

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
    var L_SECURITYPASSAboutThisScreen1_Text = "T�ss� n�yt�ss� voit luoda salasanan, jos haluat suojata tietokoneen luvattomalta k�yt�lt�.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen1_Text);

    var L_SECURITYPASSAboutThisScreen2_Text = "Huomautus: Jos t�m� tietokone on verkossa muiden tietokoneiden kanssa, \"J�rjestelm�nvalvoja\"-k�ytt�j�tunnuksella ja salasanalla tietokoneeseen kirjautuva k�ytt�j� voi k�ytt�� koko verkkoa.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen2_Text);
    
    var L_SECURITYPASSAboutThisScreen3_Text = "T�m�n vuoksi on suositeltavaa, ett� suojaat tietokoneesi ja verkkosi asettamalla J�rjestelm�nvalvoja-tunnukselle salasanan.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen3_Text);
}

function Agent_OnSECURITYPASSBestWay() 
{
    var L_SECURITYPASSBestWay1_Text = "Tietoturvasyist� salasanan on syyt� sis�lt�� pienten kirjainten lis�ksi joko isoja kirjaimia tai numeroita tai molempia.";
	  Agent_Speak(L_SECURITYPASSBestWay1_Text);

    var L_SECURITYPASSBestWay2_Text = "Salasana on my�s sit� turvallisempi, mit� v�hemm�n siin� on tunnistettavia sanoja tai vastaavia merkkijonoja.";
	  Agent_Speak(L_SECURITYPASSBestWay2_Text);

    var L_SECURITYPASSBestWay3_Text = "Salasana voi olla 127 merkin pituinen.";
	  Agent_Speak(L_SECURITYPASSBestWay3_Text);
    
    var L_SECURITYPASSBestWay4_Text = "Jos k�yt�t Windowsia verkossa, jossa on my�s Windows 95-  Windows 98 -tietokoneita ja haluat kirjautua verkkoon n�ist� tietokoneista, �l� k�yt� yli 14 merkin pituisia salasanoja.";
	  Agent_Speak(L_SECURITYPASSBestWay4_Text);
}



function Agent_JOINDOMAINAddCommands() 
{
    var L_JOINDOMAINMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_JOINDOMAINMenuCommand2_Text = "Mi&k� on toimialue?";
    var L_JOINDOMAINMenuCommand3_Text = "Ku&inka toimialueeseen liityt��n?"; 
    var L_JOINDOMAINMenuCommand4_Text = "Haluan tietoja seuraavasta &vaiheesta";


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
    var L_JOINDOMAINAboutThisScreen1_Text = "T�ss� n�yt�ss� valitaan, tehd��nk� tietokoneesta toimialueen j�sen.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen1_Text);

    var L_JOINDOMAINAboutThisScreen2_Text = "Mik�li haluat liitt�� tietokoneen toimialueeseen, t�ytyy toimialueen nimi m��ritt��.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen2_Text);
}

function Agent_OnJOINDOMAINDifference() 
{
    var L_JOINDOMAINDifference1_Text = "Toimialue on ryhm� tietokoneita, joita voidaan hallita yksikk�n�.";
    Agent_Speak(L_JOINDOMAINDifference1_Text);
    
    var L_JOINDOMAINDifference2_Text = "Esimerkiksi yrityksen kaikki markkinointiosaston tietokoneet saattavat olla samassa toimialueessa, jotta ne voivat jakaa ja k�ytt�� samoja tietoja ja osaston yhteist� tulostinta.";
    Agent_Speak(L_JOINDOMAINDifference2_Text);

    var L_JOINDOMAINDifference3_Text = "Jos et ole varma haluamastasi vaihtoehdosta, valitse Ei ja valitse sitten Seuraava.";
    Agent_Speak(L_JOINDOMAINDifference3_Text);
}

function Agent_OnJOINDOMAINHowToName() 
{
 	  Agent_GestureAtElement(g.document.all("radioYesDomain"), "Left");
 
    var L_JOINDOMAINHowToName1_Text = "Jos valitset toimialueelle liittymisen,";
    Agent_Speak(L_JOINDOMAINHowToName1_Text);
      
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("textboxDomain"), "Left");
  
    var L_JOINDOMAINHowToName2_Text = "voit kirjoittaa nimen vaihtoehdon alla olevaan ruutuun.";
    Agent_Speak(L_JOINDOMAINHowToName2_Text);
      
    Agent_Play("RestPose");
  
    var L_JOINDOMAINHowToName3_Text = "Et voi kirjoittaa nime�, jos et valinnut toimialueelle liittymist�.";
    Agent_Speak(L_JOINDOMAINHowToName3_Text);
  
    var L_JOINDOMAINHowToName4_Text = "T�ss� tapauksessa ruutu on harmaa, mik� ilmaisee, ett� et voi kirjoittaa nime� ennen toimialueelle liittymist�.";
    Agent_Speak(L_JOINDOMAINHowToName4_Text);
  
    var L_JOINDOMAINHowToName5_Text = "Mik�li haluat liitt�� tietokoneen toimialueeseen, voit kysy� toimialueen nimen j�rjestelm�nvalvojalta tai tukihenkil�lt�.";
    Agent_Speak(L_JOINDOMAINHowToName5_Text);
  
    var L_JOINDOMAINHowToName6_Text = "Mik�li tietokonetta ei liitet� toimialueeseen, nime� ei tarvitse m��ritt��.";
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
    
    var L_JOINDOMAINWhatToDoNext1_Text = "Kun valinta on tehty, valitse Seuraava.";
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
    
    var L_JOINDOMAINWhatToDoNext2_Text = "Voit my�s palata edelliseen n�ytt��n valitsemalla Edellinen-painikkeen.";
    Agent_Speak(L_JOINDOMAINWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}




function Agent_JNDOM_AAddCommands() 
{
    var L_JNDOMAMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_JNDOMAMenuCommand2_Text = "Kuinka salasana ja &k�ytt�j�tunnus annetaan?";
    var L_JNDOMAMenuCommand3_Text = "Mi&k� on toimialue?";
    var L_JNDOMAMenuCommand4_Text = "Haluan tietoja seuraavasta &vaiheesta";
    
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
    var L_JNDOM_A_AboutThisStep1_Text = "T�ss� n�yt�ss� m��ritet��n k�ytt�j�, joka voi liitt�� tietokoneen toimialueelle.";
  	Agent_Speak(L_JNDOM_A_AboutThisStep1_Text);
}

function Agent_OnJNDOM_AHowToEnter() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_HowToEnter1_Text = "Antamasi nimen on oltava yksil�llinen toimialueen sis�ll�.";
    Agent_Speak(L_JNDOM_A_HowToEnter1_Text);
      
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_HowToEnter2_Text = "T�ss� antamasi salasanan on vastattava k�ytt�j�n tilin salasanaa.";
    Agent_Speak(L_JNDOM_A_HowToEnter2_Text);
      
    Agent_Play("RestPose");
    
    var L_JNDOM_A_HowToEnter3_Text = "Jos et tied� k�ytett�v�� k�ytt�j�tunnusta ja salasanaa, ota yhteytt� verkonvalvojaan.";
    Agent_Speak(L_JNDOM_A_HowToEnter3_Text);
}

function Agent_OnJNDOM_AWhatIsDomain() 
{
    var L_JNDOM_A_WhatIsDomain1_Text = "Toimialue on ryhm� tietokoneita, joita voidaan hallita yksikk�n�.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain1_Text);
  	
    var L_JNDOM_A_WhatIsDomain2_Text = "Esimerkiksi yrityksen kaikki markkinointiosaston tietokoneet saattavat olla samassa toimialueessa, jotta ne voivat jakaa ja k�ytt�� samoja tietoja ja osaston yhteist� tulostinta.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain2_Text);
      
    Agent_Play("RestPose");		
}

function Agent_OnJNDOM_AWhatToDoNext() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_WhatToDoNext1_Text = "Kun olet kirjoittanut k�ytt�j�nimen t�h�n";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext1_Text);
      
    Agent_Play("RestPose");		
  	
    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_WhatToDoNext2_Text = "ja k�ytt�j�n salasana t�h�n,";
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
    
    var L_JNDOM_A_WhatToDoNext3_Text = "valitse Seuraava.";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext3_Text);
      
    Agent_Play("RestPose");		
}



function Agent_ActivationAddCommands() 
{
    var L_ActivationMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_ActivationMenuCommand2_Text = "Lis�tietoja &aktivoinnista";
    var L_ActivationMenuCommand3_Text = "K&uinka aktivoidaan my�hemmin?";
    var L_ActivationMenuCommand4_Text = "Kuinka &aktivoida, kun Internet-yhteytt� ei ole k�ytett�viss�?";
    var L_ActivationMenuCommand5_Text = "Mit&� tapahtuu, jos en aktivoi tuotetta?";
    var L_ActivationMenuCommand6_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
    
    var L_ActivationAboutThisScreen1_Text = "T�ss� n�yt�ss� valitaan, aktivoidaanko %1 nyt vai my�hemmin.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutThisScreen1_Text, g_ProductName));
    
    var L_ActivationAboutThisScreen2_Text = "Jos p��t�t aktivoida my�hemmin, voit suorittaa K�ynnist�-valikosta ohjatun tuoteaktivoinnin.";
    Agent_Speak(L_ActivationAboutThisScreen2_Text);
    
    var L_ActivationAboutThisScreen3_Text = "Sinua muistutetaan muutaman p�iv�n v�lein Windowsin aktivoimisesta, jotta voit jatkaa sen k�ytt�mist�.";
    Agent_Speak(L_ActivationAboutThisScreen3_Text);
}

function Agent_OnActivationAboutActivation() 
{
    var L_ActivationAboutActivation1_Text = "Aktivointi on turvatoimenpide, joka auttaa takaamaan tuotteen aitouden.";
    Agent_Speak(L_ActivationAboutActivation1_Text);
    
    var L_ActivationAboutActivation2_Text = "Aktivointi suojaa sinua ja Microsoftia tuotteen luvattomalta k�yt�lt�.";
    Agent_Speak(L_ActivationAboutActivation2_Text);
    
    var L_ActivationAboutActivation3_Text = "%1 -aktivoinnissa voit k�ytt�� tuotetta %2 ennalta m��ritetyn ajan, ennen kuin aktivointi vaaditaan.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationHowToActivateLater() 
{
    var L_ActivationHowToActivateLater1_Text = "Jos aktivointi ohitetaan nyt, lyhyt huomautus ilmestyy %1 -ty�p�yd�lle muutaman p�iv�n v�lein.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationHowToActivateLater1_Text, g_ProductName));
    
    var L_ActivationHowToActivateLater2_Text = "Voit k�ynnist�� ohjatun tuoteaktivoinnin valitsemalla K�ynnist�-valikosta Aktivoi Windows.";
    Agent_Speak(L_ActivationHowToActivateLater2_Text);
    
    var L_ActivationHowToActivateLater3_Text = "Mik�li tarvitset n�it� tietoja uudelleen, saat lis�tietoja valitsemalla Ohje ja tuki K�ynnist�-valikosta.";
    Agent_Speak(L_ActivationHowToActivateLater3_Text);
}

function Agent_OnActivationHowToActivateUnconnected() 
{
    Agent_GestureAtElement(g.rb_act_2, "Left");
    	
    var L_ActivationHowToActivateUnconnected1_Text = "Valitse \"Ei\" t�ss�.";
    Agent_Speak(L_ActivationHowToActivateUnconnected1_Text);
    
    Agent_Play("RestPose");
    
    var L_ActivationHowToActivateUnconnected2_Text = "Windowsin asentamisen j�lkeen voit k�ynnist�� ohjatun tuoteaktivoinnin valitsemalla K�ynnist�-valikosta Aktivoi Windows.";
    Agent_Speak(L_ActivationHowToActivateUnconnected2_Text);
    
    var L_ActivationHowToActivateUnconnected3_Text = "Ohjattu toiminto n�ytt�� puhelinnumeron, johon voi soittaa ja Windowsin aktivoimiseksi puhelimitse.";
    Agent_Speak(L_ActivationHowToActivateUnconnected3_Text);
}

function Agent_OnActivationWhatHappensNoActivate() 
{
    var L_ActivationWhatHappensNoActivate1_Text = "Voit k�ytt�� tuotetta %1 kunnes aktivointiaika on umpeutunut.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate1_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate2_Text = "M��ritetyn ajan kuluttua tulee %1 aktivoida, jotta sit� voidaan k�ytt��.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate2_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate3_Text = "Jos aktivointiaika umpeutuu, tuotetta %1 ei voi en�� k�ytt��.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate3_Text, g_ProductName));
}

function Agent_OnActivationWhatToDoNext() 
{
    Agent_GestureAtElement(g.act_spn1, "Left");
    
    var L_ActivationWhatToDoNext1_Text = "Kun olet valinnut vastauksen t�h�n kysymykseen,";
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
            
    var L_ActivationWhatToDoNext2_Text = "valitse Seuraava.";
    Agent_Speak(L_ActivationWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");	
}



function Agent_ActivationErrorAddCommands() 
{
    var L_ActivationErrorMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_ActivationErrorMenuCommand2_Text = "Lis�tietoja &aktivoinnista";
    var L_ActivationErrorMenuCommand3_Text = "K&uinka aktivoidaan my�hemmin?";
    var L_ActivationErrorMenuCommand4_Text = "Kuinka &aktivoida, kun Internet-yhteytt� ei ole k�ytett�viss�?";
    var L_ActivationErrorMenuCommand5_Text = "Mit&� tapahtuu, jos en aktivoi tuotetta?";


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
    var L_ActivationErrorAboutThisScreen1_Text = "T�m� n�ytt� n�ytet��n, koska aktivointikeskukseen ei voitu muodostaa yhteytt�.";
	Agent_Speak(L_ActivationErrorAboutThisScreen1_Text);
	
    var L_ActivationErrorAboutThisScreen2_Text = "Tuotteen %1 asentamisen j�lkeen voit k�ynnist�� ohjatun tuoteaktivoinnin valitsemalla K�ynnist�-valikosta Aktivoi Windows.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnActivationErrorAboutActivation() 
{
    var L_ActivationErrorAboutActivation1_Text = "Aktivointi on turvatoimenpide, joka auttaa takaamaan tuotteen aitouden.";
	Agent_Speak(L_ActivationErrorAboutActivation1_Text);
	
    var L_ActivationErrorAboutActivation2_Text = "Aktivointi suojaa sinua ja Microsoftia tuotteen luvattomalta k�yt�lt�.";
	Agent_Speak(L_ActivationErrorAboutActivation2_Text);
	
    var L_ActivationErrorAboutActivation3_Text = "%1 -aktivoinnissa voit k�ytt�� tuotetta %2 ennalta m��ritetyn ajan, ennen kuin aktivointi vaaditaan.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationErrorHowToActivateLater() 
{
    var L_ActivationErrorHowToActivateLater1_Text = "Jos aktivointi ohitetaan nyt, lyhyt huomautus ilmestyy %1 -ty�p�yd�lle muutaman p�iv�n v�lein.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationErrorHowToActivateLater2_Text = "Voit k�ynnist�� ohjatun tuoteaktivoinnin valitsemalla K�ynnist�-valikosta Aktivoi Windows.";
	Agent_Speak(L_ActivationErrorHowToActivateLater2_Text);
	
    var L_ActivationErrorHowToActivateLater3_Text = "Mik�li tarvitset n�it� tietoja uudelleen, saat lis�tietoja valitsemalla Ohje ja tuki K�ynnist�-valikosta.";
	Agent_Speak(L_ActivationErrorHowToActivateLater3_Text);
}

function Agent_OnActivationErrorHowToActivateUnconnected() 
{
    var L_ActivationErrorHowToActivateUnconnected1_Text = "Windowsin asentamisen j�lkeen voit k�ynnist�� ohjatun tuoteaktivoinnin valitsemalla K�ynnist�-valikosta Aktivoi Windows.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected1_Text);
	
    var L_ActivationErrorHowToActivateUnconnected2_Text = "Ohjattu toiminto n�ytt�� puhelinnumeron, johon voi soittaa ja Windowsin aktivoimiseksi puhelimitse.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected2_Text);
}

function Agent_OnActivationErrorWhatHappensNoActivate() 
{
    var L_ActivationErrorWhatHappensNoActivate1_Text = "Voit k�ytt�� tuotetta %1 kunnes aktivointiaika on umpeutunut.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate2_Text = "M��ritetyn ajan kuluttua tulee %1 aktivoida, jotta sit� voidaan k�ytt��.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate3_Text = "Jos aktivointiaika umpeutuu, tuotetta %1 ei voi en�� k�ytt��.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_ActivationPrivacyPolicyAddCommands() 
{
    var L_ActivationPrivacyPolicyMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_ActivationPrivacyPolicyMenuCommand2_Text = "Lis�tietoja &aktivoinnista";
    var L_ActivationPrivacyPolicyMenuCommand3_Text = "K&uinka aktivoidaan my�hemmin?";
    var L_ActivationPrivacyPolicyMenuCommand4_Text = "Kuinka &aktivoida, kun Internet-yhteytt� ei ole k�ytett�viss�?";
    var L_ActivationPrivacyPolicyMenuCommand5_Text = "Mit&� tapahtuu, jos en aktivoi tuotetta?";


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
    var L_ActivationPrivacyPolicyAboutThisScreen1_Text = "T�ss� n�yt�ss� kerrotaan, kuinka tuotteen %1 aktivoiminen parantaa tietosuojaasi.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutThisScreen1_Text, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyAboutActivation() 
{
    var L_ActivationPrivacyPolicyAboutActivation1_Text = "Aktivointi on turvatoimenpide, joka auttaa takaamaan tuotteen aitouden.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation1_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation2_Text = "Aktivointi suojaa sinua ja Microsoftia tuotteen luvattomalta k�yt�lt�.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation2_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation3_Text = "%1 -aktivoinnissa voit k�ytt�� tuotetta %2 ennalta m��ritetyn ajan, ennen kuin aktivointi vaaditaan.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyHowToActivateLater() 
{
    var L_ActivationPrivacyPolicyHowToActivateLater1_Text = "Jos aktivointi ohitetaan nyt, lyhyt huomautus ilmestyy %1 -ty�p�yd�lle muutaman p�iv�n v�lein.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyHowToActivateLater2_Text = "Voit k�ynnist�� ohjatun tuoteaktivoinnin valitsemalla K�ynnist�-valikosta Aktivoi Windows.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater2_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateLater3_Text = "Mik�li tarvitset n�it� tietoja uudelleen, saat lis�tietoja valitsemalla Ohje ja tuki K�ynnist�-valikosta.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater3_Text);
}

function Agent_OnActivationPrivacyPolicyHowToActivateUnconnected() 
{
    var L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text = "Windowsin asentamisen j�lkeen voit k�ynnist�� ohjatun tuoteaktivoinnin valitsemalla K�ynnist�-valikosta Aktivoi Windows.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text = "Ohjattu toiminto n�ytt�� puhelinnumeron, johon voi soittaa ja Windowsin aktivoimiseksi puhelimitse.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text);
}

function Agent_OnActivationPrivacyPolicyWhatHappensNoActivate() 
{
    var L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text = "Voit jatkaa tuotteen %1 k�ytt�mist�, kunnes ActivationPrivacyPolicy-ominaisuudessa m��ritetty arvo ylitet��n.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text = "M��ritetyn ajan kuluttua tulee %1 aktivoida, jotta sit� voidaan k�ytt��.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text = "Jos ActivationPrivacyPolicy-ominaisuudessa m��ritetty arvo ylitet��n, tuotteen %1 k�ytt�minen ei onnistu.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_DSLMAINAddCommands() 
{
    var L_DSLMAINMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_DSLMAINMenuCommand2_Text = "&Joitakin syit� k�ytt�� salasanaa ja k�ytt�j�tunnusta.";
    var L_DSLMAINMenuCommand3_Text = "Haluan tietoja seuraavasta &vaiheesta";
    
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
    var L_DSLMAINAboutThisScreen1_Text = "T�ss� n�yt�ss� valitaan, tarvitaanko Internetin k�ytt�miseen t�st� tietokoneesta k�ytt�j�nimi ja salasana.";
	Agent_Speak(L_DSLMAINAboutThisScreen1_Text);
}

function Agent_OnDSLMAINSomeReasons() 
{
    var L_DSLMAINHowToMoveOn1_Text = "Jos olet t�m�n tietokoneen ainoa k�ytt�j�, on k�yt�nn�llist� antaa tuotteen %1 tallentaa automaattisesti k�ytt�j�nimesi ja salasanasi.";
	Agent_Speak(ApiObj.FormatMessage(L_DSLMAINHowToMoveOn1_Text, g_ProductName));
	
    var L_DSLMAINHowToMoveOn2_Text = "T�ll�in sinun ei tarvitse kirjoittaa n�it� tietoja jokaisen Internet-yhteyden muodostamisen yhteydess�.";
	Agent_Speak(L_DSLMAINHowToMoveOn2_Text);
	
    var L_DSLMAINHowToMoveOn3_Text = "Jos t�ll� tietokoneella on muitakin k�ytt�ji� etk� halua jakaa Internet-tili� heid�n kanssaan, voit suojata tilisi k�ytt�j�nimell� ja salasanalla.";
	Agent_Speak(L_DSLMAINHowToMoveOn3_Text);
	
    var L_DSLMAINHowToMoveOn4_Text = "Voit esimerkiksi jakaa tietokoneen lastesi kanssa, jotta he voivat pelata tietokoneella.";
	Agent_Speak(L_DSLMAINHowToMoveOn4_Text);
	
    var L_DSLMAINHowToMoveOn5_Text = "Haluat t�ll�in ehk� est�� heit� k�ytt�m�st� Interneti� ilman lupaasi.";
	Agent_Speak(L_DSLMAINHowToMoveOn5_Text);		
}

function Agent_OnDSLMAINWhatToDoNext()
{	
	Agent_GestureAtElement(g.dslmain_TitleText, "Left");
	
    var L_DSLMAINWhatToDoNext1_Text = "Kun olet valinnut vastauksen t�h�n kysymykseen,";
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
	
	var L_DSLMAINWhatToDoNext2_Text = "valitse Seuraava.";
	Agent_Speak(L_DSLMAINWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");
}



function Agent_DSL_AAddCommands() 
{
    var L_DSLAMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_DSLAMenuCommand2_Text = "Mi&k� Internet tarkemmin ottaen on?";
    var L_DSLAMenuCommand3_Text = "Mit� &tarvitaan Internetin k�ytt�miseen?";
    var L_DSLAMenuCommand4_Text = "Lis�tietoja &Internetiin kirjautumisesta";

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
    var L_DSL_A_AboutThisStep1_Text = "T�ss� n�yt�ss� m��ritet��n tilisi Internet-palveluntarjoajan asetukset, jotta voit muodostaa Internet-yhteyden t�st� tietokoneesta.";
	Agent_Speak(L_DSL_A_AboutThisStep1_Text);
}

function Agent_DSL_AWhatIsInternet() 
{
    var L_DSL_A_WhatIsInternet1_Text = "Internet on maailmanlaajuinen tietokoneverkko.";
	Agent_Speak(L_DSL_A_WhatIsInternet1_Text);
	
    var L_DSL_A_WhatIsInternet2_Text = "Jos k�yt�ss�si on Internet-yhteys, voit hakea julkisesti saatavissa olevaa tietoa miljoonista l�hteist� (esimerkiksi koulujen, organisaatioiden, yritysten ja muiden k�ytt�jien sivustoista).";
	Agent_Speak(L_DSL_A_WhatIsInternet2_Text);
	
    var L_DSL_A_WhatIsInternet3_Text = "World Wide Web eli \"Web\" on hyperlinkkej� hy�dynt�v� tapa selata Interneti�.";
	Agent_Speak(L_DSL_A_WhatIsInternet3_Text);
	
    var L_DSL_A_WhatIsInternet4_Text = "Hyperlinkit ovat teksti� tai kuvia, jotka napsautettaessa vaihtavat tarkastelun kohteena olevaa Web-sivua, siirt�v�t toiseen kohtaan samalla sivulla tai suorittavat yksinkertaisen toiminnon, kuten ohjelman k�ynnist�misen.";
	Agent_Speak(L_DSL_A_WhatIsInternet4_Text);
	
    var L_DSL_A_WhatIsInternet5_Text = "Webin selaamiseen k�ytet��n Web-selainta. T�ll� ohjelmalla voi k�ytt�� Internetin sis�lt�mi� tietoja, jotka voivat olla teksti�, kuviea, ��nt� tai elokuvia.";
	Agent_Speak(L_DSL_A_WhatIsInternet5_Text);
	
    var L_DSL_A_WhatIsInternet6_Text = "Microsoft tarjoaa kaksi Web-selainta:";
	Agent_Speak(L_DSL_A_WhatIsInternet6_Text);
	
    var L_DSL_A_WhatIsInternet7_Text = "MSN Explorer, joka on erinomainen aloittelijoille ja kotik�ytt�jille, sek� Internet Explorer.";
	Agent_Speak(L_DSL_A_WhatIsInternet7_Text);
}

function Agent_DSL_ANeedToConnect() 
{	
    var L_DSL_A_NeedToConnect1_Text = "Internet-yhteyden muodostamiseen tarvitaan kolme asiaa.";
	Agent_Speak(L_DSL_A_NeedToConnect1_Text);	
	
    var L_DSL_A_NeedToConnect2_Text = "Ensinn�kin tarvitset tietokoneen. T�m� sinulla jo on.";
	Agent_Speak(L_DSL_A_NeedToConnect2_Text);
	
    var L_DSL_A_NeedToConnect3_Text = "Toiseksi tarvitset Internet-palveluntarjoajan (ISP).";
	Agent_Speak(L_DSL_A_NeedToConnect3_Text);
	
    var L_DSL_A_NeedToConnect4_Text = "ISP tarjoaa Internet-palvelun tai liittym�n, samaan tapaan kuin puhelinyhti� tarjoaa puhelinliittym�n.";
	Agent_Speak(L_DSL_A_NeedToConnect4_Text);
	
    var L_DSL_A_NeedToConnect5_Text = "Saat ohjeita ISP:n valitsemisessa, kun m��rit�t tietokoneen Internet-asetuksia.";
	Agent_Speak(L_DSL_A_NeedToConnect5_Text);
	
    var L_DSL_A_NeedToConnect6_Text = "Kolmanneksi tarvitset laitteen, joka mahdollistaa tietokoneesi ja ISP:n v�lisen fyysisen yhteyden.";
	Agent_Speak(L_DSL_A_NeedToConnect6_Text);
	
    var L_DSL_A_NeedToConnect7_Text = "T�m� on t�m�n n�yt�n tarkoitus.";
	Agent_Speak(L_DSL_A_NeedToConnect7_Text);
}

function Agent_DSL_AInternetSignup() 
{
    var L_DSL_A_AboutThisScreen1_Text = "Jos sinulla on jo Internet-yhteys, Internet-palveluntarjoajasi on toimittanut sinulle n�m� tiedot.";
	Agent_Speak(L_DSL_A_AboutThisScreen1_Text);
	
    var L_DSL_A_AboutThisScreen2_Text = "Uusi tietokone ei tarkoita, ett� tarvitset uuden Internet-tilin.";
	Agent_Speak(L_DSL_A_AboutThisScreen2_Text);
	
    var L_DSL_A_AboutThisScreen3_Text = "Voit k�ytt�� samoja tiliasetuksia kuin vanhassa tietokoneessasi.";
	Agent_Speak(L_DSL_A_AboutThisScreen3_Text);
	
    var L_DSL_A_AboutThisScreen4_Text = "Jos et ole aiemmin muodostanut tietokoneestasi Internet-yhteytt�, saatoit saada tietokoneesi mukana Internet-tilitietoja.";
	Agent_Speak(L_DSL_A_AboutThisScreen4_Text);
	
    var L_DSL_A_AboutThisScreen5_Text = "Jos k�ytt�m�si myyj� antoi sinulle paperin, jossa kerrotaan k�ytt�j�nimi, salasana ja Internet-palveluntarjoajan nimi, kirjoita ne t�ss� n�yt�ss�.";
	Agent_Speak(L_DSL_A_AboutThisScreen5_Text);
}



function Agent_DSL_BAddCommands() 
{

    var L_DSL_B_MenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_DSL_B_MenuCommand2_Text = "Mit� &IP tarkoittaa?";
    var L_DSL_B_MenuCommand3_Text = "Mit� &DNS tarkoittaa?";
    var L_DSL_B_MenuCommand4_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
    var L_DSL_B_AboutThisScreen1_Text = "Edellisess� n�yt�ss� m��ritettiin kuinka yhteys muodostetaan Internetiin palveluntarjoajatietoja k�ytt�en.";
	Agent_Speak(L_DSL_B_AboutThisScreen1_Text);

    var L_DSL_B_AboutThisScreen2_Text = "T�ss� n�yt�ss� m��ritet��n fyysinen tietokoneen Internet-yhteys.";
	Agent_Speak(L_DSL_B_AboutThisScreen2_Text);
}

function Agent_OnDSL_BWhatIsIP() 
{
    var L_DSL_B_WhatIsIP1_Text = "Jokaisella Internetiin kytketyll� tietokoneella on Internet-protokollaosoite eli \"IP\"-osoite. Se on yksil�llinen numero, joka mahdollistaa tietokoneiden tunnistamisen Internetiss�.";
	Agent_Speak(L_DSL_B_WhatIsIP1_Text);

    var L_DSL_B_WhatIsIP2_Text = "Normaalisti yhteytt� muodostettaessa palveluntarjoaja m��ritt�� tietokoneelle IP-osoitteen automaattisesti.";
	Agent_Speak(L_DSL_B_WhatIsIP2_Text);

    var L_DSL_B_WhatIsIP3_Text = "T�ss� tapauksessa IP-osoite t�ytyy m��ritt�� manuaalisesti.";
	Agent_Speak(L_DSL_B_WhatIsIP3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_staticip, "Left");
	
	var L_DSL_B_WhatIsIP4_Text = "Palveluntarjoajan tulisi toimittaa t�h�n kirjoitettava IP-osoite.";
	Agent_Speak(L_DSL_B_WhatIsIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnDSL_BWhatIsDNS() 
{
    var L_DSL_B_WhatIsDNS1_Text = "Jotta tietokone voisi l�yt�� Internet-osoitteita, t�ytyy tietokoneen muodostaa yhteys DNS-palvelimeen (toimialuenimipalvelimeen). DNS-palvelin m��ritt�� Internet-osoitteita Internetiss� oleville tietokoneille.";
	Agent_Speak(L_DSL_B_WhatIsDNS1_Text);

    var L_DSL_B_WhatIsDNS2_Text = "Yleens� palveluntarjoaja m��ritt�� DNS-osoitteen automaattisesti.";
	Agent_Speak(L_DSL_B_WhatIsDNS2_Text);

    var L_DSL_B_WhatIsDNS3_Text = "Palveluntarjoaja vaatii, ett� DNS-osoite m��ritet��n tietokoneessa.";
	Agent_Speak(L_DSL_B_WhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_prefdns, "Left");

    var L_DSL_B_WhatIsDNS4_Text = "Palveluntarjoajan tulisi toimittaa t�h�n kirjoitettava ensisijainen DNS-palvelin.";
	Agent_Speak(L_DSL_B_WhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.dsl_lbl_altdns, "Left");

    var L_DSL_B_WhatIsDNS5_Text = "ja mahdollisesti vaihtoehtoinen DNS-osoite, jos ensisijainen ei ole k�ytett�viss�.";
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
	
    var L_DSL_B_WhatToDoNext1_Text = "Jatka valitsemalla Seuraava.";
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

    var L_DSL_B_WhatToDoNext2_Text = "Voit my�s valita Edellinen-painikkeen, jos haluat palata edelliseen vaiheeseen.";
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

    var L_DSL_B_WhatToDoNext3_Text = "Jos et haluakaan m��ritt�� Internet-yhteytt�, valitse \"Ohita\" ja toimintoa jatketaan ilman yhteyden m��ritt�mist�.";
	Agent_Speak(L_DSL_B_WhatToDoNext3_Text);
    
    Agent_Play("RestPose");	
}



function Agent_ICONNECTAddCommands() 
{

    var L_ICONNECTMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_ICONNECTMenuCommand2_Text = "Mi&k� on kiinte� IP-osoite?";
    var L_ICONNECTMenuCommand3_Text = "Mit� &DNS tarkoittaa?";
    var L_ICONNECTMenuCommand4_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
    var L_ICONNECTAboutThisScreen1_Text = "Edellisess� n�yt�ss� m��ritettiin kuinka yhteys muodostetaan Internetiin palveluntarjoajatietoja k�ytt�en.";
	Agent_Speak(L_ICONNECTAboutThisScreen1_Text);

    var L_ICONNECTAboutThisScreen2_Text = "T�ss� n�yt�ss� m��ritet��n fyysinen tietokoneen Internet-yhteys.";
	Agent_Speak(L_ICONNECTAboutThisScreen2_Text);
}

function Agent_OnICONNECTWhatIsStaticIP() 
{
    var L_ICONNECTWhatIsStaticIP1_Text = "Jokaisella Internetiin kytketyll� tietokoneella on Internet-protokollaosoite eli \"IP\"-osoite. Se on yksil�llinen numero, joka mahdollistaa tietokoneiden tunnistamisen Internetiss�.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP1_Text);

    var L_ICONNECTWhatIsStaticIP2_Text = "Normaalisti yhteytt� muodostettaessa palveluntarjoaja m��ritt�� tietokoneelle IP-osoitteen automaattisesti.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP2_Text);

    var L_ICONNECTWhatIsStaticIP3_Text = "T�ss� tapauksessa IP-osoite t�ytyy m��ritt�� manuaalisesti.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_staticIP, "Left");
	
	var L_ICONNECTWhatIsStaticIP4_Text = "Palveluntarjoajan tulisi toimittaa t�h�n kirjoitettava IP-osoite.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnICONNECTWhatIsDNS() 
{
    var L_ICONNECTWhatIsDNS1_Text = "Jotta tietokone voisi l�yt�� Internet-osoitteita, t�ytyy tietokoneen muodostaa yhteys DNS-palvelimeen (toimialuenimipalvelimeen). DNS-palvelin m��ritt�� Internet-osoitteita Internetiss� oleville tietokoneille.";
	Agent_Speak(L_ICONNECTWhatIsDNS1_Text);

    var L_ICONNECTWhatIsDNS2_Text = "Yleens� palveluntarjoaja m��ritt�� DNS-osoitteen automaattisesti.";
	Agent_Speak(L_ICONNECTWhatIsDNS2_Text);

    var L_ICONNECTWhatIsDNS3_Text = "Palveluntarjoaja vaatii, ett� DNS-osoite m��ritet��n tietokoneessa.";
	Agent_Speak(L_ICONNECTWhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_prefrDNS, "Left");

    var L_ICONNECTWhatIsDNS4_Text = "Palveluntarjoajan tulisi toimittaa t�h�n kirjoitettava ensisijainen DNS-palvelin.";
	Agent_Speak(L_ICONNECTWhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.iconnect_spn_alterDNS, "Left");

    var L_ICONNECTWhatIsDNS5_Text = "ja mahdollisesti vaihtoehtoinen DNS-osoite, jos ensisijainen ei ole k�ytett�viss�.";
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
	
    var L_ICONNECTWhatToDoNext1_Text = "Jatka valitsemalla Seuraava.";
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

    var L_ICONNECTWhatToDoNext2_Text = "Jos et haluakaan m��ritt�� Internet-yhteytt�, valitse \"Ohita\" ja toimintoa jatketaan ilman yhteyden m��ritt�mist�.";
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

    var L_ICONNECTWhatToDoNext3_Text = "Voit my�s palata edelliseen n�ytt��n valitsemalla Edellinen-painikkeen.";
	Agent_Speak(L_ICONNECTWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}





function Agent_ICNTLASTAddCommands() {

        var L_ICNTLASTMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_ICNTLASTMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_ICNTLASTMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        
        
        

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

        var L_SCONNECTMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_SCONNECTMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_SCONNECTMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        
        
        

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

        var L_SCNTLASTMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_SCNTLASTMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_SCNTLASTMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        
        
        

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
    var L_BadPIDMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_BadPIDMenuCommand2_Text = "Haluan tietoja Produ&ct Key -tunnuksen kirjoittamisesta";
    var L_BadPIDMenuCommand3_Text = "Mit� teen, jos en tied� &omaa Product Key -tunnustani";
    var L_BadPIDMenuCommand4_Text = "Haluan tietoja siit�, mit� teen, jos Product Key -tunnukseni &ei toimi";
    var L_BadPIDMenuCommand5_Text = "Mist� saadaan l&is�tietoja";
    var L_BadPIDMenuCommand6_Text = "Haluan tietoja seuraavasta &vaiheesta";
        
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
    var L_BadPIDAboutThisStep1_Text = "Edellisess� n�yt�ss� m��ritetty Product Key -tunnus ei kelpaa.";
    Agent_Speak(L_BadPIDAboutThisStep1_Text);
    
    var L_BadPIDAboutThisStep2_Text = "T�m� tarkoittaa, ett� antamasi Product Key -tunnus ei vastaa laillisen Windows XP -version tunnusta.";
    Agent_Speak(L_BadPIDAboutThisStep2_Text);

    var L_BadPIDAboutThisStep3_Text = "Windowsia ei voi k�ytt�� ilman hyv�ksytty� Product Key -tunnusta.";
    Agent_Speak(L_BadPIDAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDAboutThisStep4_Text = "Mik�li et ole varma kirjoititko sen oikein, valitse Edellinen ja kirjoita tunnus uudelleen.";
    Agent_Speak(L_BadPIDAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep5_Text = "Mutta jos olet varma, ett� kirjoitit sen oikein tai jos olet yritt�nyt useasti onnistumatta, t�m� saattaa olla laiton Windows-kopio.";
    Agent_Speak(L_BadPIDAboutThisStep5_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDAboutThisStep6_Text = "T�ss� tapauksessa sammuta tietokone valitsemalla Sammuta.";
    Agent_Speak(L_BadPIDAboutThisStep6_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep7_Text = "Ja soita ilmaisnumeroon 0800 118 358, jos olet Suomessa.";
    Agent_Speak(L_BadPIDAboutThisStep7_Text);

    var L_BadPIDAboutThisStep8_Text = "Jos et ole Suomessa, ota yhteytt� paikalliseen Microsoftin tyt�ryhti��n.";
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
	
    var L_BadPIDHowToEnter1_Text = "Palaa edelliseen n�ytt��n valitsemalla Edellinen.";
    Agent_Speak(L_BadPIDHowToEnter1_Text);
    
    Agent_Play("RestPose");
    
    var L_BadPIDHowToEnter2_Text = "Vilkkuvana pystysuorana viivana n�kyv� kohdistin on valmiiksi ensimm�isess� t�ytett�v�ss� ruudussa.";
    Agent_Speak(L_BadPIDHowToEnter2_Text);

    var L_BadPIDHowToEnter3_Text = "Ensimm�isen viiden merkin j�lkeen kohdistin siirtyy automaattisesti seuraavaan ruutuun, jolloin voit kirjoittaa seuraavat viisi merkki�.";
    Agent_Speak(L_BadPIDHowToEnter3_Text);

    var L_BadPIDHowToEnter4_Text = "V�liviivoja ei tarvitse kirjoittaa eik� merkkikoolla ole merkityst�.";
    Agent_Speak(L_BadPIDHowToEnter4_Text);

    var L_BadPIDHowToEnter5_Text = "Jatka sen j�lkeen valitsemalla Seuraava.";
    Agent_Speak(L_BadPIDHowToEnter5_Text);
}

function Agent_OnBadPIDWhatIfNotKnown() 
{
    var L_BadPIDWhatIfNotKnown1_Text = "Jos CD-levyn kotelossa ei ole Product Key -tunnusta, etsi Certificate of Authenticity -tarra tietokoneesta tai aloitusoppaasta.";
    Agent_Speak(L_BadPIDWhatIfNotKnown1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
    
    var L_BadPIDWhatIfNotKnown2_Text = "L�ydetty�si Product Key -tunnuksen valitse Edellinen-painike ja kirjoita tunnus edellisen n�yt�n ruutuihin.";
    Agent_Speak(L_BadPIDWhatIfNotKnown2_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotKnown3_Text = "Jos et l�yd� Product Key -tunnusta, ota yhteytt� tietokoneesi valmistajaan (puhelinnumero %s).";
    var re = /%s/i;
    var L_BadPIDWhatIfNotKnown4_Text = "Jos et l�yd� Product Key -tunnusta, ota yhteytt� tietokoneen toimittajaan.";

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
        Agent_Speak(L_BadPIDWhatIfNotKnown4_Text);
    else
        Agent_Speak(L_BadPIDWhatIfNotKnown3_Text.replace(re, strPhoneNumber));
}

function Agent_OnBadPIDWhatIfNotWorking() 
{
    var L_BadPIDWhatIfNotWorking1_Text = "Tunnuksessa saattaa olla kirjoitusvirhe.";
    Agent_Speak(L_BadPIDWhatIfNotWorking1_Text);
    
    var L_BadPIDWhatIfNotWorking2_Text = "Product Key -tunnuksen kaikki 25 merkki� on kirjoitettava.";
    Agent_Speak(L_BadPIDWhatIfNotWorking2_Text);

    var L_BadPIDWhatIfNotWorking3_Text = "Jokaisen osan tulisi olla viiden merkin pituinen.";
    Agent_Speak(L_BadPIDWhatIfNotWorking3_Text);

    var L_BadPIDWhatIfNotWorking4_Text = "Sinun on kirjoitettava oikea Product Key -tunnus, ennen kuin voit aloittaa Windowsin k�yt�n.";
    Agent_Speak(L_BadPIDWhatIfNotWorking4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDWhatIfNotWorking5_Text = "Mik�li et ole varma kirjoititko sen oikein, valitse Edellinen ja kirjoita tunnus uudelleen.";
    Agent_Speak(L_BadPIDWhatIfNotWorking5_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking6_Text = "Mutta jos olet varma, ett� kirjoitit sen oikein tai jos olet yritt�nyt useasti onnistumatta, t�m� saattaa olla laiton Windows-kopio.";
    Agent_Speak(L_BadPIDWhatIfNotWorking6_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatIfNotWorking7_Text = "T�ss� tapauksessa sammuta tietokone valitsemalla Sammuta.";
    Agent_Speak(L_BadPIDWhatIfNotWorking7_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking8_Text = "Ja soita ilmaisnumeroon 0800 118 358, jos olet Suomessa.";
    Agent_Speak(L_BadPIDWhatIfNotWorking8_Text);

    var L_BadPIDWhatIfNotWorking9_Text = "Jos et ole Suomessa, ota yhteytt� paikalliseen Microsoftin tyt�ryhti��n.";
    Agent_Speak(L_BadPIDWhatIfNotWorking9_Text);
}

function Agent_OnBadPIDWhoCanICall() 
{
    var L_BadPIDWhoCanICall1_Text = "Jos Product Key -tunnustasi ei hyv�ksyt�, soita ilmaisnumeroon 0800 118 358, jos olet Suomessa.";
    Agent_Speak(L_BadPIDWhoCanICall1_Text);
    
    var L_BadPIDWhoCanICall2_Text = "Jos et ole Suomessa, ota yhteytt� paikalliseen Microsoftin tyt�ryhti��n.";
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
	
    var L_BadPIDWhatToDoNext1_Text = "Valitse Edellinen-painike ja kirjoita oikea tunnus.";
    Agent_Speak(L_BadPIDWhatToDoNext1_Text);
    
    var L_BadPIDWhatToDoNext2_Text = "Jos tunnuksesi ei kelpaa, sinulla saattaa olla laiton Windows-kopio.";
    Agent_Speak(L_BadPIDWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatToDoNext3_Text = "T�ss� tapauksessa sammuta tietokone valitsemalla Sammuta.";
    Agent_Speak(L_BadPIDWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatToDoNext4_Text = "Ja soita ilmaisnumeroon 0800 118 358, jos olet Suomessa.";
    Agent_Speak(L_BadPIDWhatToDoNext4_Text);

    var L_BadPIDWhatToDoNext5_Text = "Jos et ole Suomessa, ota yhteytt� paikalliseen Microsoftin tyt�ryhti��n.";
    Agent_Speak(L_BadPIDWhatToDoNext5_Text);
}



function Agent_IconnAddCommands() 
{
    var L_IconnMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_IconnMenuCommand2_Text = "Mik� &vaihtoehto kannattaa valita?";
    var L_IconnMenuCommand3_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
    var L_IconnAboutThisStep1_Text = "Windows XP -asennus onnistui.";
    Agent_Speak(L_IconnAboutThisStep1_Text); 
      
    var L_IconnAboutThisStep2_Text = "T�ss� vaiheessa asennustoiminto voi auttaa sinua Internet-yhteyden asentamisessa.";
    Agent_Speak(L_IconnAboutThisStep2_Text);
       
    var L_IconnAboutThisStep3_Text = "Jos et halua nyt asentaa yhteytt�, voit k�ynnist�� ohjatun Internet-yhteyden muodostamisen K�ynnist�-valikosta Windowsin asentamisen j�lkeen.";
    Agent_Speak(L_IconnAboutThisStep3_Text);
}

function Agent_IconnWhichOption() 
{    
    var L_IconnWhichOption1_Text = "Valitse Ei, jos k�ytt�m�si Internet-palveluntarjoaja (ISP) vaatii omien ohjelmistojensa asentamista.";
    Agent_Speak(L_IconnWhichOption1_Text); 
      
    var L_IconnWhichOption2_Text = "Jos olet saanut Internet-palveluntarjoajalta CD-levyn, valitse Ei.";
    Agent_Speak(L_IconnWhichOption2_Text);
       
    var L_IconnWhichOption3_Text = "Asenna t�ss� tapauksessa Internet-yhteytesi Windowsin asentamisen j�lkeen.";
    Agent_Speak(L_IconnWhichOption3_Text);
}

function Agent_OnIconnWhatToDoNext() 
{      
    Agent_GestureAtElement(g.radioYesIconn, "Left");  
    
    var L_IconnWhatToDoNext1_Text = "Jos haluat apua Internet-yhteyden asentamisessa, valitse Kyll�.";
    Agent_Speak(L_IconnWhatToDoNext1_Text);
    
    Agent_Play("RestPose"); 
        
    Agent_GestureAtElement(g.radioNoIconn, "Left");  
    
    var L_IconnWhatToDoNext2_Text = "Jos et halua muodostaa Internet-yhteytt� t�ss� vaiheessa, valitse Ei";
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

    var L_IconnWhatToDoNext3_Text = "Jatka sen j�lkeen valitsemalla Soita uudelleen.";
    Agent_Speak(L_IconnWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPAddCommands() 
{
    var L_ISPMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_ISPMenuCommand2_Text = "Mit� jos tietokoneen toimitta&ja antoi tilitiedot?";
    var L_ISPMenuCommand3_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
    var L_ISPAboutThisStep1_Text = "T�ss� n�yt�ss� voit valita Internetin yhteysm��ritykset.";
    Agent_Speak(L_ISPAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");

    var L_ISPAboutThisStep2_Text = "Voit k�ytt�� MSN:��";
    Agent_Speak(L_ISPAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");

        var L_ISPAboutThisStep3_Text = "tai jotain muuta palveluntarjoajaa.";
        Agent_Speak(L_ISPAboutThisStep3_Text);
        
        Agent_Play("RestPose");
    }
    
    Agent_GestureAtElement(g.radioSkip, "Left");

    var L_ISPAboutThisStep4_Text = "Voit my�s jatkaa asentamatta Internet-yhteytt� t�ss� vaiheessa.";
    Agent_Speak(L_ISPAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPWhatIfGivenAccount() 
{
    var L_ISPWhatIfGivenAccount1_Text = "Tietokonekauppiaasi on voinut antaa sinulle Internet-tilin tiedot paperilla oston yhteydess�.";
	Agent_Speak(L_ISPWhatIfGivenAccount1_Text);
	
    var L_ISPWhatIfGivenAccount2_Text = "Tilitietoihin kuuluu k�ytt�j�nimi, salasana sek� Internet-palveluntarjoajan nimi ja puhelinnumero.";
	Agent_Speak(L_ISPWhatIfGivenAccount2_Text);
	
    var L_ISPWhatIfGivenAccount3_Text = "Jos sinulla on n�m� tiedot, sinulla on Internet-tili.";
	Agent_Speak(L_ISPWhatIfGivenAccount3_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");
	
    var L_ISPWhatIfGivenAccount4_Text = "Jos palveluntarjoajan nimi on MSN, valitse t�m� vaihtoehto.";
	Agent_Speak(L_ISPWhatIfGivenAccount4_Text);
    
    Agent_Play("RestPose");

    
    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");
    	
        var L_ISPWhatIfGivenAccount5_Text = "Jos palveluntarjoajan nimi ei ole MSN, valitse t�m� vaihtoehto.";
    	Agent_Speak(L_ISPWhatIfGivenAccount5_Text);
        
        Agent_Play("RestPose");
    }

    Agent_GestureAtElement(g.radioSkip, "Left");
    
    var L_ISPWhatIfGivenAccount6_Text = "Jos haluat asentaa Internet-yhteyden my�hemmin, valitse t�m� vaihtoehto.";
	Agent_Speak(L_ISPWhatIfGivenAccount6_Text);
			    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_ISPWhatIfGivenAccount7_Text = "Valitse sen j�lkeen Seuraava.";
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
    
    var L_ISPWhatToDoNext1_Text = "Valitse haluamasi vaihtoehto ja valitse Seuraava-painike.";
	Agent_Speak(L_ISPWhatToDoNext1_Text);
	
	Agent_Play("RestPose");
}



function Agent_ICSAddCommands() 
{
	var L_ICSAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
	var L_ICSAddCommands2_Text = "Lis�&tietoja Internet-yhteyden palomuurista.";
	var L_ICSAddCommands3_Text = "Lis&�tietoja t�st� ohjatusta toiminnosta.";
	
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
	var L_ICSAboutThisStep1_Text = "T�ss� n�yt�ss� voidaan valita, kuinka tietokone yhdistet��n Internetiin.";
	Agent_Speak(L_ICSAboutThisStep1_Text);
	
	var L_ICSAboutThisStep2_Text = "Jos tietokone on yhdistetty verkkoon, voidaan Internet-yhteys luoda verkon kautta.";
	Agent_Speak(L_ICSAboutThisStep2_Text);
	
	var L_ICSAboutThisStep3_Text = "Muussa tapauksessa tietokoneestasi ei voi muodostaa suoraa Internet-yhteytt�.";
	Agent_Speak(L_ICSAboutThisStep3_Text);
	
	var L_ICSAboutThisStep4_Text = "Riippumatta valitsemastasi vaihtoehdosta, Windows XP suojaa tietokoneesi muiden Internet-k�ytt�jien luvattomalta k�yt�lt� palomuurilla.";
	Agent_Speak(L_ICSAboutThisStep4_Text);
}
	
function Agent_ICSWhatIsFirewall() 
{
	var L_ICSWhatIsFirewall1_Text = "Palomuuri on suojausj�rjestelm�, joka suojaa tietokoneesi tai verkkosi ulkoisilta uhkilta, kuten luvattomalta k�yt�lt�.";
	Agent_Speak(L_ICSWhatIsFirewall1_Text);
	
	var L_ICSWhatIsFirewall2_Text = "Kun asennat Windows XP:n verkko-ominaisuudet, Windows XP:n Internet-yhteyden palomuuri otetaan automaattisesti k�ytt��n.";
	Agent_Speak(L_ICSWhatIsFirewall2_Text);
	
	var L_ICSWhatIsFirewall3_Text = "Palomuuri otetaan k�ytt��n my�s silloin, kun t�m� tietokone ei kuulu verkkoon, mutta k�ytt�� Interneti� suoraan.";
	Agent_Speak(L_ICSWhatIsFirewall3_Text);
}
	
function Agent_ICSWhatIsNetworkWizard() 
{
	var L_ICSWhatIsNetworkWizard1_Text = "T�m�n ohjatun toiminnon avulla voit asentaa verkon kotonasi tai ty�paikallasi.";
	Agent_Speak(L_ICSWhatIsNetworkWizard1_Text);
	
	var L_ICSWhatIsNetworkWizard2_Text = "Jos et halua yhdist�� t�t� tietokonetta verkkoon t�m�n toiminnon aikana, voit yhdist�� tietokoneen my�hemmin.";
	Agent_Speak(L_ICSWhatIsNetworkWizard2_Text);
	
	var L_ICSWhatIsNetworkWizard3_Text = "Valitse K�ynnist�-valikosta Lis�� ohjelmia.";
	Agent_Speak(L_ICSWhatIsNetworkWizard3_Text);
	
	var L_ICSWhatIsNetworkWizard4_Text = "Valitse Apuohjelmat ja valitse sitten Tietoliikenneyhteydet. Ohjatun kotiverkkotoiminnon pit�isi olla valikossa.";
	Agent_Speak(L_ICSWhatIsNetworkWizard4_Text);
	
	var L_ICSWhatIsNetworkWizard5_Text = "Mik�li tarvitset n�it� tietoja uudelleen, saat lis�tietoja valitsemalla Ohje ja tuki K�ynnist�-valikosta.";
	Agent_Speak(L_ICSWhatIsNetworkWizard5_Text);
}



function Agent_ICSDCAddCommands() 
{
	var L_ICSDCAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
	var L_ICSDCAddCommands2_Text = "Haluan tietoja seuraavasta &vaiheesta";
	
	g_AgentCharacter.Commands.Add("Agent_ICSDCAboutThisStep", L_ICSDCAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_ICSDCWhatToDoNext", L_ICSDCAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_ICSDCAboutThisStep() 
{
	var L_ICSDCAboutThisStep1_Text = "T�ss� n�yt�ss� kerrotaan tietokoneen ja Internetin v�lisen yhteyden katkeamisesta.";
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
    
	var L_ICSDCWhatToDoNext1_Text = "Valitse Yrit� uudelleen, jos haluat yritt�� Internet-yhteyden muodostamista uudelleen.";
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
    
	var L_ICSDCWhatToDoNext2_Text = "Valitse Ohita, jos haluat jatkaa ilman Internet-yhteyden muodostamista.";
	Agent_Speak(L_ICSDCWhatToDoNext2_Text);
	
	Agent_Play("RestPose");
}



function Agent_Ident1AddCommands() 
{
    var L_Ident1AddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_Ident1AddCommands2_Text = "Mi&k� on k�ytt�j�tili?";
    var L_Ident1AddCommands3_Text = "Mit� etuja on k�ytt�j�tilien k�yt�st�?";
    var L_Ident1AddCommands4_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
	var L_Ident1AboutThisStep1_Text = "T�ss� ikkunassa m��ritet��n muut tietokonetta k�ytt�v�t henkil�t.";
	Agent_Speak(L_Ident1AboutThisStep1_Text);
	
	var L_Ident1AboutThisStep2_Text = "Mik�li tietokoneella on useita k�ytt�ji�, voi kukin Windows XP:n k�ytt�j� m��ritt�� yksil�lliset asetukset, jos jokaisella k�ytt�j�ll� on oma tili.";
	Agent_Speak(L_Ident1AboutThisStep2_Text);
    
    var L_Ident1AboutThisStep3_Text = "N�in jokainen k�ytt�j� voi k�ytt�� omia asetuksiaan, salasanoja, yksityisi� tiedostoja ja muita vaihtoehtoja ilman, ett� ne vaikuttavat sinun asetuksiisi.";
    Agent_Speak(L_Ident1AboutThisStep3_Text);
    
    var L_Ident1AboutThisStep4_Text = "K�ynnistett�ess� tietokone Tervetuloa-n�yt�ss� n�ytet��n kaikki t�ss� kirjoitetut nimet aakkosj�rjestyksess�.";
    Agent_Speak(L_Ident1AboutThisStep4_Text);
    
    var L_Ident1AboutThisStep5_Text = "Jokaiseen tiliin voidaan liitt�� kuva.";
    Agent_Speak(L_Ident1AboutThisStep5_Text);
    
    var L_Ident1AboutThisStep6_Text = "N�it� nimi� voidaan muokata valitsemalla Ohjauspaneelista K�ytt�j�tilit.";
    Agent_Speak(L_Ident1AboutThisStep6_Text);
}

function Agent_Ident1Command_WhatIsUserAccount() 
{	
	var L_Ident1WhatIsUserAccount1_Text = "K�ytt�j�tilit ovat k�yt�nn�llisi�, mik�li tietokoneella on useita k�ytt�ji�.";
	Agent_Speak(L_Ident1WhatIsUserAccount1_Text);
	
	var L_Ident1WhatIsUserAccount2_Text = "K�ytt�j�tilien ominaisuuksia:";
	Agent_Speak(L_Ident1WhatIsUserAccount2_Text);
    
    var L_Ident1WhatIsUserAccount3_Text = "Kukin k�ytt�j� voi m��ritt�� omat asetukset kuinka Windows n�ytt�� ja k�sittelee tietoja.";
    Agent_Speak(L_Ident1WhatIsUserAccount3_Text);
    
    var L_Ident1WhatIsUserAccount4_Text = "Tiedostoille voidaan m��ritt�� k�ytt�j�kohtaiset salasanat.";
    Agent_Speak(L_Ident1WhatIsUserAccount4_Text);
    
    var L_Ident1WhatIsUserAccount5_Text = "Jokaisella k�ytt�j�ll� voi olla omat suosikkisivustot ja viimeisimm�t avatut Web-sivustot.";
    Agent_Speak(L_Ident1WhatIsUserAccount5_Text);
    
    var L_Ident1WhatIsUserAccount6_Text = "T�rke�t tietokoneen asetukset ovat turvassa muilta k�ytt�jilt�.";
    Agent_Speak(L_Ident1WhatIsUserAccount6_Text);
    
    var L_Ident1WhatIsUserAccount7_Text = "Kunkin k�ytt�j�n ty�p�yt� voi olla omien mieltymysten mukainen.";
    Agent_Speak(L_Ident1WhatIsUserAccount7_Text);
    
    var L_Ident1WhatIsUserAccount8_Text = "Tietokoneeseen kirjautuminen on helppoa sek� k�ytt�j�n vaihtaminen nopeaa.";
    Agent_Speak(L_Ident1WhatIsUserAccount8_Text);
}

function Agent_Ident1Command_Benefits() 
{	
	var L_Ident1Benefits1_Text = "Ennen tietokoneen jakaminen tarkoitti, ett� muut k�ytt�j�t voivat n�hd� yksityisi� tiedostojasi, asentaa ohjelmia ja pelej� tietokoneeseesi ilman lupaasi sek� muuttaa tietokoneesi asetuksia.";
	Agent_Speak(L_Ident1Benefits1_Text);
	
	var L_Ident1Benefits2_Text = "Nyt kaikki on toisin.";
	Agent_Speak(L_Ident1Benefits2_Text);
    
    var L_Ident1Benefits3_Text = "K�ytt�j�tilien avulla jokainen k�ytt�j� voi mukauttaa Windowsia ilman, ett� valinnat vaikuttavat muihin tietokoneen k�ytt�jiin.";
    Agent_Speak(L_Ident1Benefits3_Text);
    
    var L_Ident1Benefits4_Text = "Lis�tietoja k�ytt�j�tileist� l�yd�t valitsemalla Ohje ja tuki -kuvakkeen K�ynnist�-valikossa.";
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
    
    var L_Ident1WhatToDoNext1_Text = "Kun muiden k�ytt�jien nimet on kirjoitettu, valitse Seuraava.";
    Agent_Speak(L_Ident1WhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_Ident1WhatToDoNext2_Text = "N�it� nimi� voidaan muuttaa my�hemmin Windowsin asennuksen j�lkeen, voit my�s lis�t� uusia k�ytt�ji� my�hemmin.";
    Agent_Speak(L_Ident1WhatToDoNext2_Text);
        
    var L_Ident1WhatToDoNext3_Text = "Avaa Ohjauspaneeli K�ynnist�-valikosta ja valitse sitten K�ytt�j�tilit.";
    Agent_Speak(L_Ident1WhatToDoNext3_Text);
}



function Agent_IdentitiesAddCommands() 
{
    var L_IdentitiesAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_IdentitiesAddCommands2_Text = "Mi&k� on k�ytt�j�tili?";
    var L_IdentitiesAddCommands3_Text = "Mit� etuja on k�ytt�j�tilien k�yt�st�?";
    var L_IdentitiesAddCommands4_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
	var L_IdentitiesAboutThisStep1_Text = "T�ss� ikkunassa m��ritet��n muut tietokonetta k�ytt�v�t henkil�t.";
	Agent_Speak(L_IdentitiesAboutThisStep1_Text);
	
	var L_IdentitiesAboutThisStep2_Text = "Mik�li tietokoneella on useita k�ytt�ji�, voi kukin Windows XP:n k�ytt�j� m��ritt�� yksil�lliset asetukset, jos jokaisella k�ytt�j�ll� on oma tili.";
	Agent_Speak(L_IdentitiesAboutThisStep2_Text);
    
    var L_IdentitiesAboutThisStep3_Text = "N�in jokainen k�ytt�j� voi k�ytt�� omia asetuksiaan, salasanoja, yksityisi� tiedostoja ja muita vaihtoehtoja ilman, ett� ne vaikuttavat sinun asetuksiisi.";
    Agent_Speak(L_IdentitiesAboutThisStep3_Text);
    
    var L_IdentitiesAboutThisStep4_Text = "K�ynnistett�ess� tietokone Tervetuloa-n�yt�ss� n�ytet��n kaikki t�ss� kirjoitetut nimet aakkosj�rjestyksess�.";
    Agent_Speak(L_IdentitiesAboutThisStep4_Text);
    
    var L_IdentitiesAboutThisStep5_Text = "Jokaiseen tiliin voidaan liitt�� kuva.";
    Agent_Speak(L_IdentitiesAboutThisStep5_Text);
    
    var L_IdentitiesAboutThisStep6_Text = "N�it� nimi� voidaan muokata valitsemalla Ohjauspaneelista K�ytt�j�tilit.";
    Agent_Speak(L_IdentitiesAboutThisStep6_Text);
}

function Agent_IdentitiesCommand_WhatIsUserAccount() 
{	
	var L_IdentitiesWhatIsUserAccount1_Text = "K�ytt�j�tilit ovat k�yt�nn�llisi�, mik�li tietokoneella on useita k�ytt�ji�.";
	Agent_Speak(L_IdentitiesWhatIsUserAccount1_Text);
	
	var L_IdentitiesWhatIsUserAccount2_Text = "K�ytt�j�tilien ominaisuuksia:";
	Agent_Speak(L_IdentitiesWhatIsUserAccount2_Text);
    
    var L_IdentitiesWhatIsUserAccount3_Text = "Kukin k�ytt�j� voi m��ritt�� omat asetukset kuinka Windows n�ytt�� ja k�sittelee tietoja.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount3_Text);
    
    var L_IdentitiesWhatIsUserAccount4_Text = "Tiedostoille voidaan m��ritt�� k�ytt�j�kohtaiset salasanat.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount4_Text);
    
    var L_IdentitiesWhatIsUserAccount5_Text = "Jokaisella k�ytt�j�ll� voi olla omat suosikkisivustot ja viimeisimm�t avatut Web-sivustot.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount5_Text);
    
    var L_IdentitiesWhatIsUserAccount6_Text = "T�rke�t tietokoneen asetukset ovat turvassa muilta k�ytt�jilt�.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount6_Text);
    
    var L_IdentitiesWhatIsUserAccount7_Text = "Kunkin k�ytt�j�n ty�p�yt� voi olla omien mieltymysten mukainen.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount7_Text);
    
    var L_IdentitiesWhatIsUserAccount8_Text = "Tietokoneeseen kirjautuminen on helppoa sek� k�ytt�j�n vaihtaminen nopeaa.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount8_Text);
}

function Agent_IdentitiesCommand_Benefits() 
{	
	var L_IdentitiesBenefits1_Text = "Ennen tietokoneen jakaminen tarkoitti, ett� muut k�ytt�j�t voivat n�hd� yksityisi� tiedostojasi, asentaa ohjelmia ja pelej� tietokoneeseesi ilman lupaasi sek� muuttaa tietokoneesi asetuksia.";
	Agent_Speak(L_IdentitiesBenefits1_Text);
	
	var L_IdentitiesBenefits2_Text = "Nyt kaikki on toisin.";
	Agent_Speak(L_IdentitiesBenefits2_Text);
    
    var L_IdentitiesBenefits3_Text = "K�ytt�j�tilien avulla jokainen k�ytt�j� voi mukauttaa Windowsia ilman, ett� valinnat vaikuttavat muihin tietokoneen k�ytt�jiin.";
    Agent_Speak(L_IdentitiesBenefits3_Text);
    
    var L_IdentitiesBenefits4_Text = "Lis�tietoja k�ytt�j�tileist� l�yd�t valitsemalla Ohje ja tuki -kuvakkeen K�ynnist�-valikossa.";
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
    
    var L_IdentitiesWhatToDoNext1_Text = "Kun muiden k�ytt�jien nimet on kirjoitettu, valitse Seuraava.";
    Agent_Speak(L_IdentitiesWhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_IdentitiesWhatToDoNext2_Text = "N�it� nimi� voidaan muuttaa my�hemmin Windowsin asennuksen j�lkeen, voit my�s lis�t� uusia k�ytt�ji� my�hemmin.";
    Agent_Speak(L_IdentitiesWhatToDoNext2_Text);
        
    var L_IdentitiesWhatToDoNext3_Text = "Avaa Ohjauspaneeli K�ynnist�-valikosta ja valitse sitten K�ytt�j�tilit.";
    Agent_Speak(L_IdentitiesWhatToDoNext3_Text);
}



function Agent_KeybdAddCommands() 
{
	var L_KeybdMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_KeybdMenuCommand2_Text = "Lis�tietoja &aluekohtaisten asetusten valitsemisesta";
    var L_KeybdMenuCommand3_Text = "Lis�tietoja &kieliasetusten valitsemisesta";
    var L_KeybdMenuCommand4_Text = "Lis�tietoja &n�pp�imist�asetusten valitsemisesta";

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
    var L_KeybdAboutThisStep1_Text = "Seuraavissa n�yt�iss� voit m��ritt�� kielesi, asuinpaikkasi ja aikavy�hykkeesi mukaiset tekstin, p�iv�m��rien ja lukujen esitysmuotoja koskevat Windowsin asetukset.";
    Agent_Speak(L_KeybdAboutThisStep1_Text);
        
    var L_KeybdAboutThisStep2_Text = "Valitse esimerkiksi t�ss� n�yt�ss� maa, joka on l�hinn� asuinpaikkaasi, kieli, jota k�yt�t useimmiten tietokoneessasi, ja k�ytt�m�si n�pp�imist�.";
    Agent_Speak(L_KeybdAboutThisStep2_Text);
        
    var L_KeybdAboutThisStep3_Text = "Windows n�ytt�� p�iv�m��r�n, kellonajan ja valuutan antamiesi tietojen mukaisesti.";
    Agent_Speak(L_KeybdAboutThisStep3_Text);
        
    var L_KeybdAboutThisStep4_Text = "Jos esimerkiksi valitset maaksi Suomen ja kieleksi suomen, valuutan yksikk�n� k�ytet��n euroa.";
    Agent_Speak(L_KeybdAboutThisStep4_Text);

    var L_KeybdAboutThisStep5_Text = "Jos sen sijaan valitsit maaksi Ison-Britannian, valuutat n�ytet��n puntina.";
    Agent_Speak(L_KeybdAboutThisStep5_Text);
}

function Agent_KeybdHowToSelectRegion() 
{     
    Agent_GestureAtElement(g.selRegion, "Left");
     
    var L_KeybdHowToSelectRegion1_Text = "Maailman maat on lueteltu alla aakkosj�rjestyksess�.";
    Agent_Speak(L_KeybdHowToSelectRegion1_Text);	
   
    var L_KeybdHowToSelectRegion2_Text = "Napsauta luetteloruutua tai siirry siihen sarkaimella.";
    Agent_Speak(L_KeybdHowToSelectRegion2_Text);	
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selRegion, "Right");
        
    var L_KeybdHowToSelectRegion3_Text = "Voit selata luetteloa pieni� nuolipainikkeita tai n�pp�imist�n nuolin�pp�imi� k�ytt�m�ll�.";
    Agent_Speak(L_KeybdHowToSelectRegion3_Text);
        
    var L_KeybdHowToSelectRegion4_Text = "Kun olet l�yt�nyt asuinpaikkaasi l�himp�n� olevan maan, napsauta sit� tai paina Enter-n�pp�int�.";
    Agent_Speak(L_KeybdHowToSelectRegion4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.RegionName, "Left");

    var L_KeybdHowToSelectRegion5_Text = "Valitsemasi maa n�kyy t�ss� ruudussa.";
    Agent_Speak(L_KeybdHowToSelectRegion5_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectLanguage() 
{        		
    var L_KeybdHowToSelectLanguage1_Text = "Valitse useimmin k�ytt�m�si kieli.";
    Agent_Speak(L_KeybdHowToSelectLanguage1_Text);
        
    var L_KeybdHowToSelectLanguage2_Text = "Jos esimerkiksi puhut useimmiten espanjaa, mutta k�ytt�m�si tietokoneohjelmat ovat useimmiten englanninkielisi�, valitse englanti.";
    Agent_Speak(L_KeybdHowToSelectLanguage2_Text);   
        
    Agent_GestureAtElement(g.selLang, "Left");  
        
    var L_KeybdHowToSelectLanguage3_Text = "Kielet on lueteltu aakkosj�rjestyksess�.";
    Agent_Speak(L_KeybdHowToSelectLanguage3_Text);

    var L_KeybdHowToSelectLanguage4_Text = "Voit siirty� luetteloruutuun my�s sarkaimella.";
    Agent_Speak(L_KeybdHowToSelectLanguage4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selLang, "Right");

    var L_KeybdHowToSelectLanguage5_Text = "Voit selata luetteloa pieni� nuolipainikkeita tai n�pp�imist�n nuolin�pp�imi� k�ytt�m�ll�.";
    Agent_Speak(L_KeybdHowToSelectLanguage5_Text);

    var L_KeybdHowToSelectLanguage6_Text = "Kun olet l�yt�nyt haluamasi kielen, napsauta sit� tai paina Enter-n�pp�int�.";
    Agent_Speak(L_KeybdHowToSelectLanguage6_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.LangName, "Left");

    var L_KeybdHowToSelectLanguage7_Text = "Valitsemasi kieli n�kyy t�ss� ruudussa.";
    Agent_Speak(L_KeybdHowToSelectLanguage7_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectKeyboard() 
{		
    var L_KeybdHowToSelectKeyboard1_Text = "N�pp�imist�t on lueteltu aakkosj�rjestyksess�.";
    Agent_Speak(L_KeybdHowToSelectKeyboard1_Text);
    
    Agent_GestureAtElement(g.selKeyboard, "Left");
        
    var L_KeybdHowToSelectKeyboard2_Text = "Voit siirty� luetteloruutuun my�s sarkaimella.";
    Agent_Speak(L_KeybdHowToSelectKeyboard2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selKeyboard, "Right");
        
    var L_KeybdHowToSelectKeyboard3_Text = "Voit selata luetteloa pieni� nuolipainikkeita tai n�pp�imist�n nuolin�pp�imi� k�ytt�m�ll�.";
    Agent_Speak(L_KeybdHowToSelectKeyboard3_Text);
        
    var L_KeybdHowToSelectKeyboard4_Text = "Kun olet l�yt�nyt tietokoneessa k�ytt�m�si n�pp�imist�n, napsauta sit� tai paina Enter-n�pp�int�.";
    Agent_Speak(L_KeybdHowToSelectKeyboard4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.KeyboardName, "Left");

    var L_KeybdHowToSelectKeyboard5_Text = "Valitsemasi n�pp�imist� n�kyy t�ss� ruudussa.";
    Agent_Speak(L_KeybdHowToSelectKeyboard5_Text);
    
    Agent_Play("RestPose");
}



function Agent_EulaAddCommands() 
{
    var L_EulaCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_EulaCommand2_Text = "Miten oso&itan vastaukseni?";
    var L_EulaCommand3_Text = "&Mik� on k�ytt�oikeussopimus (EULA)?";
    var L_EulaCommand4_Text = "Mit� &k�ytt�oikeussopimuksessa (EULA) sanotaan?";
    var L_EulaCommand5_Text = "Miksi &Seuraava-painike ei n�y?";
    var L_EulaCommand6_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
        var L_EulaMenuCommand5_Text = "Haluan tiet��, miksi Seuraava-painike &ei ole k�ytett�viss�";

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
    var L_EulaAboutThisStep1_Text = "T�ss� n�yt�ss� voit tarkastella Windowsin k�ytt�oikeussopimusta ja valita, hyv�ksytk� sen.";
    Agent_Speak(L_EulaAboutThisStep1_Text);		
    
    Agent_GestureAtElement(g.txtEULA,"Left");
        
    var L_EulaAboutThisStep2_Text = "Sopimus on hyv�ksytt�v�, jos haluat k�ytt�� Windowsia.";
    Agent_Speak(L_EulaAboutThisStep2_Text);
    
    Agent_Play("RestPose");
}

function Agent_EulaHowToAnswer() 
{		
    Agent_GestureAtElement(g.radioAgree,"Left");
    
    var L_EulaHowToAnswer1_Text = "Vie hiiren osoitin vastauksesi vasemmalla puolella olevan valkoisen ympyr�n p��lle";
    Agent_Speak(L_EulaHowToAnswer1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaHowToAnswer2_Text = "Valitse sitten Seuraava.";
    Agent_Speak(L_EulaHowToAnswer2_Text);
}

function Agent_EulaWhatIsEula() 
{		
    var L_EulaWhatIsEula1_Text = "Microsoft-tuotteiden k�ytt�oikeus m��r�ytyy k�ytt�oikeussopimuksen ehtojen ja tekij�noikeuslakien mukaan.";
    Agent_Speak(L_EulaWhatIsEula1_Text);
        
    var L_EulaWhatIsEula2_Text = "K�ytt�oikeussopimus m��ritt�� tuotteen lailliset k�ytt�oikeudet ja my�nt�� sinulle oikeuden k�ytt�� tuotetta tietokoneessasi.";
    Agent_Speak(L_EulaWhatIsEula2_Text);
}

function Agent_EulaWhatDoesEulaSay() 
{		
    var L_EulaWhatDoesEulaSay1_Text = "K�ytt�oikeussopimuksen hyv�ksyminen antaa luvan Windows XP:n k�ytt�miseen sek� my�nt�� muutamia oikeuksia.";
    Agent_Speak(L_EulaWhatDoesEulaSay1_Text);
        
    var L_EulaWhatDoesEulaSay2_Text = "Se asettaa my�s tiettyj� rajoituksia Windows XP:n k�yt�lle.";
    Agent_Speak(L_EulaWhatDoesEulaSay2_Text);	
    
    Agent_GestureAtElement(g.txtEULA,"Right");	
        
    var L_EulaWhatDoesEulaSay3_Text = "Lis�tietoja on kohdassa K�ytt�oikeuden my�nt�minen.";
    Agent_Speak(L_EulaWhatDoesEulaSay3_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatDoesEulaSay4_Text = "K�ytt�oikeussopimuksessa on my�s rajoitettu takuu ja Windows XP:n varmuuskopion tekemiseen oikeuttavat ehdot.";
    Agent_Speak(L_EulaWhatDoesEulaSay4_Text);
}

function Agent_EulaWhereIsNextButton() 
{		
    var L_EulaWhereIsNextButton1_Text = "Seuraava-painike ei ole viel� k�ytett�viss�, koska et ole hyv�ksynyt tai hyl�nnyt k�ytt�oikeussopimusta.";
    Agent_Speak(L_EulaWhereIsNextButton1_Text);
        
    var L_EulaWhereIsNextButton2_Text = "Sinun on ensin valittava vaihtoehto Kyll� tai Ei.";
    Agent_Speak(L_EulaWhereIsNextButton2_Text);
}

function Agent_EulaWhatToDoNext() 
{			
    Agent_GestureAtElement(g.radioAgree,"Left");
    	
    var L_EulaWhatToDoNext1_Text = "Kun olet lukenut k�ytt�oikeussopimuksen, voit hyv�ksy� sen valitsemalla Kyll�-vaihtoehdon.";
    Agent_Speak(L_EulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatToDoNext2_Text = "Jos et hyv�ksy sopimusta, valitse Ei.";
    Agent_Speak(L_EulaWhatToDoNext2_Text);
        
    var L_EulaWhatToDoNext3_Text = "Windows k�ytt�minen edellytt�� sopimuksen hyv�ksymist�.";
    Agent_Speak(L_EulaWhatToDoNext3_Text);
    			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_EulaWhatToDoNext4_Text = "Siirry seuraavaan n�ytt��n valitsemalla Seuraava";
    Agent_Speak(L_EulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_BadEulaAddCommands() {

    var L_BadEulaCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_BadEulaCommand2_Text = "Mi&t� k�ytt�oikeussopimuksessa (EULA) sanotaan?";
    var L_BadEulaCommand3_Text = "Mit� jos &en hyv�ksyk��n k�ytt�oikeussopimusta!";
    var L_BadEulaCommand4_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
    var L_BadEulaAboutThisStep1_Text = "Edellisess� n�yt�ss� et halunnut hyv�ksy� k�ytt�oikeussopimusta.";
    Agent_Speak(L_BadEulaAboutThisStep1_Text);

    var L_BadEulaAboutThisStep2_Text = "Se aiheuttaa sen, ettet voi k�ytt�� Windowsia.";
    Agent_Speak(L_BadEulaAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadEulaAboutThisStep3_Text = "Voit hyv�ksy� sopimuksen siirtym�ll� edelliseen n�ytt��n valitsemalla Edellinen-painikkeen.";
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
        
    var L_BadEulaAboutThisStep4_Text = "Voit my�s vahvistaa, ett� et halua jatkaa Windowsin k�ytt�mist� ja sulkea tietokoneesi.";
    Agent_Speak(L_BadEulaAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_BadEulaWhatDoesEulaSay()
{
    var L_BadEulaWhatDoesEulaSay1_Text = "K�ytt�oikeussopimuksen hyv�ksyminen antaa luvan Windows XP:n k�ytt�miseen sek� my�nt�� muutamia oikeuksia.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay1_Text);

    var L_BadEulaWhatDoesEulaSay2_Text = "Se asettaa my�s tiettyj� rajoituksia Windows XP:n k�yt�lle.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay2_Text);

    var L_BadEulaWhatDoesEulaSay3_Text = "Saat lis�tietoja valitsemalla Edellinen-painikkeen, avaamalla k�ytt�oikeussopimuksen ja siirtym�ll� kohtaan K�ytt�oikeuden my�nt�minen.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay3_Text);
        
    var L_BadEulaWhatDoesEulaSay4_Text = "K�ytt�oikeussopimuksessa on my�s rajoitettu takuu ja Windows XP:n varmuuskopion tekemiseen oikeuttavat ehdot.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay4_Text);
}

function Agent_BadEulaWhatIfIDontAcceptEula()
{
    var L_BadEulaWhatIfIDontAcceptEula1_Text = "Koska k�ytt�oikeussopimus my�nt�� sinulle Windows XP:n k�ytt�oikeuden, sopimus on hyv�ksytt�v� ennen Windows XP:n k�ytt�mist�.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadEulaWhatIfIDontAcceptEula2_Text = "Jos et halua hyv�ksy� sopimusta, voit sammuttaa tietokoneen valitsemalla Sammuta.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula2_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatIfIDontAcceptEula3_Text = "Tietokoneen uudelleenk�ynnist�misen j�lkeen palataan t�h�n n�ytt��n.";
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
    
    var L_BadEulaWhatToDoNext1_Text = "Jos p��t�t hyv�ksy� k�ytt�oikeussopimuksen voit palata edelliseen n�ytt��n valitsemalla Edellinen-painikkeen.";
    Agent_Speak(L_BadEulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatToDoNext2_Text = "T�m� sopimus t�ytyy hyv�ksy� ennen t�m�n toiminnon jatkamista ja Windowsin k�yt�n aloittamista.";
    Agent_Speak(L_BadEulaWhatToDoNext2_Text);

    var L_BadEulaWhatToDoNext3_Text = "Jos et hyv�ksy sopimusta, sammuta tietokone valitsemalla Sammuta.";
    Agent_Speak(L_BadEulaWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_BadEulaWhatToDoNext4_Text = "Tietokoneen uudelleenk�ynnist�misen j�lkeen palataan t�h�n n�ytt��n.";
    Agent_Speak(L_BadEulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}




function Agent_ProductKeyAddCommands() 
{
    var L_ProductKeyAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_ProductKeyAddCommands2_Text = "Haluan tietoja Product &Key -tunnuksesta";
    var L_ProductKeyAddCommands4_Text = "Haluan tietoja seuraavasta &vaiheesta";

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

        var L_ProductKeyAddCommands3_Text = "&Mit� pit�� tehd� seuraavaksi?";

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
    var L_ProductKeyAboutThisStep1_Text = "Kirjoita t�ss� n�yt�ss� 25-merkkinen Product Key -tunnus, jonka olet saanut tietokoneen mukana.";
    Agent_Speak(L_ProductKeyAboutThisStep1_Text);

    var L_ProductKeyAboutThisStep2_Text = "Jos CD-levyn kotelossa ei ole Product Key -tunnusta, etsi Certificate of Authenticity -tarra tietokoneesta tai aloitusoppaasta.";
    Agent_Speak(L_ProductKeyAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pid1,"Left");

    var L_ProductKeyAboutThisStep3_Text = "Kirjoittamasi kirjaimet muutetaan automaattisesti isoiksi kirjaimiksi.";
    Agent_Speak(L_ProductKeyAboutThisStep3_Text);
    
    Agent_Play("RestPose");
        
    var L_ProductKeyAboutThisStep4_Text = "Sen j�lkeen voit rekister�id� tietokoneesi ja k�ytt�m�si Microsoft Windows -ohjelman.";
    Agent_Speak(L_ProductKeyAboutThisStep4_Text);
        
    var L_ProductKeyAboutThisStep5_Text = "Windowsin rekister�iminen on helppoa, ja se tarjoaa sinulle monia etuja.";
    Agent_Speak(L_ProductKeyAboutThisStep5_Text);
}

function Agent_ProductKeyWhatIsProdKey()
{
    var L_ProductKeyWhatIsProdKey1_Text = "Jokaisella Microsoftin valmistamalla Windows-ohjelmalla on yksil�llinen Product Key -tunnus.";
    Agent_Speak(L_ProductKeyWhatIsProdKey1_Text);

    var L_ProductKeyWhatIsProdKey2_Text = "Product Key -tunnuksen avulla voit varmistua hankkimasi Microsoft-tuotteen aitoudesta.";
    Agent_Speak(L_ProductKeyWhatIsProdKey2_Text);

    var L_ProductKeyWhatIsProdKey3_Text = "Se toimii my�s suojana laittomia Windows-kopioita vastaan.";
    Agent_Speak(L_ProductKeyWhatIsProdKey3_Text);
        
    var L_ProductKeyWhatIsProdKey4_Text = "Product Key -tunnus oikeuttaa k�ytt�j�n my�s tiettyihin etuihin, kuten tuotetukeen, markkinointipalveluihin, p�ivityksiin ja Web-tarjouksiin.";
    Agent_Speak(L_ProductKeyWhatIsProdKey4_Text);
}

function Agent_ProductKeyWhyNextNotAvailable()
{
    var L_ProductKeyWhyNextNotAvailable1_Text = "Seuraava-painike ei ole k�ytett�viss�, koska antamasi Product Key -tunnus ei kelpaa.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable1_Text);

    var L_ProductKeyWhyNextNotAvailable2_Text = "Sinun on kirjoitettava kelvollinen Product Key -tunnus.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable2_Text);

    var L_ProductKeyWhyNextNotAvailable3_Text = "Sen j�lkeen voit jatkaa valitsemalla Seuraava.";
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
    
    var L_ProductKeyWhatToDoNext1_Text = "Kun olet kirjoittanut kelvollisen Product Key -tunnuksen, valitse Seuraava.";
    Agent_Speak(L_ProductKeyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}




function Agent_Reg1AddCommands() 
{
    var L_Reg1Command1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_Reg1Command2_Text = "&Haluan tietoja rekister�imisest�";
    var L_Reg1Command3_Text = "&Kuinka voin rekister�ity� nyt?";
    var L_Reg1Command4_Text = "&Voinko rekister�ity� my�hemmin?";
    var L_Reg1Command5_Text = "&Mit� hy�ty� rekister�itymisest� on?";
    var L_Reg1Command6_Text = "Haluan tietoja &yhteisk�yt�st�";

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
    var L_Reg1AboutThisStep1_Text = "T�st� alkaa rekister�intiosa.";
    Agent_Speak(L_Reg1AboutThisStep1_Text);

    var L_Reg1AboutThisStep2_Text = "T�ss� voit rekister�id� k�ytt�m�si Windows-ohjelman.";
    Agent_Speak(L_Reg1AboutThisStep2_Text);

    var L_Reg1AboutThisStep3_Text = "T�ll�in p��set osalliseksi lukuisista Microsoft-asiakkaille kuuluvista eduista.";
    Agent_Speak(L_Reg1AboutThisStep3_Text);
        
    var L_Reg1AboutThisStep4_Text = "Saat esimerkiksi ilmoituksen tuotep�ivityksist� ja voit k�ytt�� Microsoftin tukipalveluja.";
    Agent_Speak(L_Reg1AboutThisStep4_Text);
        
    var L_Reg1AboutThisStep5_Text = "T�ss� n�yt�ss� voit valita rekister�intitavan.";
    Agent_Speak(L_Reg1AboutThisStep5_Text);
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");
        
    var L_Reg1AboutThisStep6_Text = "Jos haluat tietoja Microsoftin tietosuojak�yt�nn�ist�, napsauta t�t� linkki�.";
    Agent_Speak(L_Reg1AboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1AboutRegistration()
{    
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1AboutRegistration1_Text = "Voit aloittaa rekister�itymisen valitsemalla Seuraava.";
    Agent_Speak(L_Reg1AboutRegistration1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.rb_reg_ms_no,"Left");

    var L_Reg1AboutRegistration2_Text = "Jos et halua rekister�ity�, valitse t�m� vaihtoehto ja valitse sitten Seuraava.";
    Agent_Speak(L_Reg1AboutRegistration2_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1HowToRegister()
{      
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1HowToRegister1_Text = "Jos haluat rekister�id� k�ytt�m�si Windowsin kopion, valitse Kyll�.";
    Agent_Speak(L_Reg1HowToRegister1_Text); 
    
    Agent_Play("RestPose");

    var L_Reg1HowToRegister2_Text = "Jatka sen j�lkeen valitsemalla Seuraava.";
    Agent_Speak(L_Reg1HowToRegister2_Text);
}

function Agent_Reg1RegisterLater()
{
    var L_Reg1RegisterLater1_Text = "Jos ohitat rekister�itymisen nyt, voit rekister�id� Windowsin sen asennuksen j�lkeen.";
    Agent_Speak(L_Reg1RegisterLater1_Text);

    var L_Reg1RegisterLater2_Text = "Valitse K�ynnist� ja valitse sitten Suorita. Kirjoita t�m�n j�lkeen regwiz /r.";
    Agent_Speak(L_Reg1RegisterLater2_Text);

    var L_Reg1RegisterLater3_Text = "Mik�li tarvitset n�it� tietoja uudelleen, saat lis�tietoja valitsemalla Ohje ja tuki K�ynnist�-valikosta.";
    Agent_Speak(L_Reg1RegisterLater3_Text);
}

function Agent_Reg1WhyRegister()
{
    var L_Reg1WhyRegister1_Text = "Rekister�im�ll� k�ytt�m�si Windows-ohjelman p��set osalliseksi lukuisista Microsoft-asiakkaille kuuluvista eduista.";
    Agent_Speak(L_Reg1WhyRegister1_Text);

    var L_Reg1WhyRegister2_Text = "Saat esimerkiksi ilmoituksen tuotep�ivityksist� ja voit k�ytt�� Microsoftin laadukkaita tukipalveluita.";
    Agent_Speak(L_Reg1WhyRegister2_Text);
}

function Agent_Reg1AboutSharingInfo()
{
    
    if (!window.external.get_RetailOOBE()) 
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "N�iden vaihtoehtojen valitseminen tarkoittaa sit�, ett� annat rekister�intitietosi Microsoftille ja tietokoneen valmistajalle.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text); 
    
        Agent_Play("RestPose");
    }
    else
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Kun valitset n�m� vaihtoehdot, ilmoitat rekister�intitiedot Microsoftille.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");     
    }
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");

    var L_Reg1AboutSharingInfo2_Text = "Jos haluat tietoja Microsoftin tietosuojak�yt�nn�ist�, napsauta t�t� linkki�.";
    Agent_Speak(L_Reg1AboutSharingInfo2_Text);
    
    Agent_Play("RestPose");
    
    if (!window.external.get_RetailOOBE()) 
    {           
        Agent_GestureAtElement(g.reg1_spn3,"Left");
                
        var L_Reg1AboutSharingInfo3_Text = "Jos haluat tietoja tuotteen %1 tietosuojak�yt�nn�ist�, napsauta t�t� linkki�.";
        Agent_Speak(ApiObj.FormatMessage(L_Reg1AboutSharingInfo3_Text, g_OEMNameStr));
    
        Agent_Play("RestPose");
    }
}




function Agent_Reg3AddCommands() 
{
    var L_Reg3Command1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_Reg3Command2_Text = "&Kuinka voin muuttaa tietoja?";
    var L_Reg3Command3_Text = "Haluan tietoja &yhteisk�yt�st�";

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
    var L_Reg3AboutThisStep1_Text = "Voit rekister�id� Microsoft Windowsin kirjoittamalla tiedot t�h�n n�ytt��n.";
    Agent_Speak(L_Reg3AboutThisStep1_Text);
    
    Agent_GestureAtElement(g.UserCity,"Left");

    var L_Reg3AboutThisStep2_Text = "Valinnaisiksi merkittyj� ruutuja lukuun ottamatta kaikkien ruutujen tiedot on t�ytett�v�.";
    Agent_Speak(L_Reg3AboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_Reg3AboutThisStep3_Text = "My�s valinnaisista tiedoista on hy�ty�.";
    Agent_Speak(L_Reg3AboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_Reg3AboutThisStep4_Text = "Kun olet valmis, valitse Seuraava.";
    Agent_Speak(L_Reg3AboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg3HowToChangeInfo()
{
    var L_Reg3HowToChangeInfo1_Text = "Ruudut sis�lt�v�t t�ytt�misess� auttavia vihjeit�.";
    Agent_Speak(L_Reg3HowToChangeInfo1_Text);
    
    Agent_GestureAtElement(g.UserLastName,"Left");

    var L_Reg3HowToChangeInfo2_Text = "Voit aloittaa kirjoittamisen esimerkiksi napsauttamalla t�t� Sukunimi-ruutua.";
    Agent_Speak(L_Reg3HowToChangeInfo2_Text);

    var L_Reg3HowToChangeInfo3_Text = "Ruudussa n�kyy vilkkuva pystyviiva eli kohdistin.";
    Agent_Speak(L_Reg3HowToChangeInfo3_Text);

    var L_Reg3HowToChangeInfo4_Text = "Kohdistin osoittaa paikan, johon kirjoitettava merkki tulee.";
    Agent_Speak(L_Reg3HowToChangeInfo4_Text);
    
    Agent_Play("RestPose");

    var L_Reg3HowToChangeInfo5_Text = "Voit siirt�� kohdistinta muokkausruudussa k�ytt�m�ll� n�pp�imist�n vasenta ja oikeaa nuolin�pp�int�.";
    Agent_Speak(L_Reg3HowToChangeInfo5_Text);

    var L_Reg3HowToChangeInfo6_Text = "Voit poistaa kohdistimen oikealla puolella olevia merkkej� Delete-n�pp�imell� ja osoittimen vasemmalla puolella olevia merkkej� askelpalautinn�pp�imell�.";
    Agent_Speak(L_Reg3HowToChangeInfo6_Text);

    var L_Reg3HowToChangeInfo7_Text = "Jos haluat lis�t� merkin, siirr� kohdistin ruudussa lis�tt�v�� merkki� seuraavan merkin edelle ja napsauta.";
    Agent_Speak(L_Reg3HowToChangeInfo7_Text);

    var L_Reg3HowToChangeInfo8_Text = "Kirjoita sitten lis�tt�v� merkki.";
    Agent_Speak(L_Reg3HowToChangeInfo8_Text);

    var L_Reg3HowToChangeInfo9_Text = "Jos et kirjoita ruutuun, vihje j�� n�kyviin. T�m� ei aiheuta ongelmia.";
    Agent_Speak(L_Reg3HowToChangeInfo9_Text);

    var L_Reg3HowToChangeInfo10_Text = "Vihjeet ovat ruudussa vain neuvoina, ne eiv�t kuulu rekister�intitietoihisi.";
    Agent_Speak(L_Reg3HowToChangeInfo10_Text);
}

function Agent_Reg3AboutSharingInfo()
{    
    if (!window.external.get_RetailOOBE()) 
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
        
        var L_Reg3AboutSharingInfo1_Text = "N�iden vaihtoehtojen valitseminen tarkoittaa sit�, ett� annat rekister�intitietosi Microsoftille ja tietokoneen valmistajalle.";
        Agent_Speak(L_Reg3AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");
    }
    else
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
         
        var L_Reg3AboutSharingInfo1_Text = "Kun valitset n�m� vaihtoehdot, ilmoitat rekister�intitiedot Microsoftille.";
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

        

        L_Register3PlayCheckBoxScript1_Text = "K�yt�ss� olevien asetusten mukaisesti t�m�n n�yt�n rekister�intitiedot l�hetet��n sek� Microsoftille ett� tietokoneen valmistajalle.";
        L_Register3PlayCheckBoxScript2_Text = "K�yt�ss� olevien asetusten mukaisesti t�m�n n�yt�n rekister�intitiedot l�hetet��n Microsoftille, mutta ei tietokoneen valmistajalle.";
        L_Register3PlayCheckBoxScript3_Text = "K�yt�ss� olevien asetusten mukaisesti t�m�n n�yt�n rekister�intitiedot l�hetet��n tietokoneen valmistajalle, mutta ei Microsoftille.";
        L_Register3PlayCheckBoxScript4_Text = "K�yt�ss� olevien asetusten mukaisesti t�m�n n�yt�n rekister�intitietoja ei l�hetet� Microsoftille eik� tietokoneen valmistajalle.";

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

        var L_Register3PlayCheckBoxScript5_Text = "N�iden tietojen avulla he voivat tiedottaa sinulle tuotep�ivityksist� ja muista rekister�idyille k�ytt�jille tarkoitetuista palveluista.";
        Agent_Speak(L_Register3PlayCheckBoxScript5_Text);

        var L_Register3PlayCheckBoxScript6_Text = "Jos haluat muuttaa n�iden tietojen l�hetysasetuksia,";
        Agent_Speak(L_Register3PlayCheckBoxScript6_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(elem, "TopCenterWidth");
		else
			Agent_GestureAtElement(elem, "Left");

        var L_Register3PlayCheckBoxScript7_Text = "napsauta alla olevia ruutuja.";
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

        var L_Register3EncourageTabKey1_Text = "Siirry t�h�n kohtaan sarkaimella.";
        Agent_Speak(L_Register3EncourageTabKey1_Text);
}

function Agent_Register3EncourageMouseClick() {

        var L_Register3EncourageMouseClick1_Text = "Siirr�  hiiriosoitin t�h�n ja napsauta t�t� kohtaa hiiren ykk�spainikkeella.";
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

                        var L_Register3PlayElementScript1_Text = "Kirjoita t�h�n ruutuun etunimesi.";
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

                        var L_Register3PlayElementScript3_Text = "Kirjoita t�h�n toinen nimesi.";
                        Agent_Speak(L_Register3PlayElementScript3_Text);

                        break;

                case "UserLastName":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript4_Text = "Kirjoita t�h�n ruutuun sukunimesi.";
                        Agent_Speak(L_Register3PlayElementScript4_Text);

                        break;

                case "UserAddress":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript5_Text = "Kirjoita katuosoitteesi.";
                        Agent_Speak(L_Register3PlayElementScript5_Text);

                        break;

                case "UserAddress2":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        Agent_Play("Think");

                        var L_Register3PlayElementScript6_Text = "Jos tarvitset osoitetietojasi varten lis�tilaa, kirjoita lis�tiedot t�h�n. Muussa tapauksessa jatka painamalla sarkainta.";
                        Agent_Speak(L_Register3PlayElementScript6_Text);

                        Agent_Play("RestPose");

                        break;

                case "UserCity":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript7_Text = "Kirjoita t�h�n asuinpaikkakuntasi nimi.";
                        Agent_Speak(L_Register3PlayElementScript7_Text);

                        break;

                case "UserStateTextBox":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript8_Text = "Kirjoita t�h�n osavaltio tai provinssi.";
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
                                var L_Register3PlayElementScript91_Text = "Sinun on valittava osavaltio.";
                                Agent_Speak(L_Register3PlayElementScript91_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript92_Text = "Saat osavaltioluettelon n�kyviin napsauttamalla alasp�in osoittavaa nuolipainiketta.";
                                Agent_Speak(L_Register3PlayElementScript92_Text);

                        }

                        else if (elem.id == "selCAProvince") {
                                var L_Register3PlayElementScript93_Text = "Sinun on valittava provinssi.";
                                Agent_Speak(L_Register3PlayElementScript93_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript94_Text = "Saat provinssiluettelon n�kyviin napsauttamalla alasp�in osoittavaa nuolipainiketta.";
                                Agent_Speak(L_Register3PlayElementScript94_Text);

                        }

                        else {
                                var L_Register3PlayElementScript95_Text = "Valitse maa tai alue. Napsauta alasp�in osoittavaa nuolipainiketta.";
                                Agent_Speak(L_Register3PlayElementScript95_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript96_Text = "Saat maa- ja aluevaltioluettelon n�kyviin napsauttamalla alasp�in osoittavaa nuolipainiketta.";
                                Agent_Speak(L_Register3PlayElementScript96_Text);

                        }

                        Agent_Play("Explain");

                        var L_Register3PlayElementScript11_Text = "Valitse sen j�lkeen osavaltio napsauttamalla sit�.";
                        var L_Register3PlayElementScript12_Text = "Valitse sen j�lkeen provinssi napsauttamalla sit�.";
                        var L_Register3PlayElementScript13_Text = "Valitse sen j�lkeen maa tai alue napsauttamalla sit�.";

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

                        var L_Register3PlayElementScript14_Text = "Kirjoita t�h�n postinumero.";
                        Agent_Speak(L_Register3PlayElementScript14_Text);

                        break;

                case "UserEmailAddress":

                        if (elem.value == "") {

							if (g.document.dir == "rtl") 
								Agent_GestureAtElement(elem, "Left");
		
							else
								Agent_GestureAtElement(elem, "Right");

                            var L_Register3PlayElementScript15_Text = "S�hk�postiosoite on valinnainen tieto, mutta se on eniten k�ytt�m�mme yhteydenottotapa.";
                            Agent_Speak(L_Register3PlayElementScript15_Text);
							
							g_bAgentRegister3ShortEmail = true;
							
							Agent_Play("Explain");
							
                            var L_Register3PlayElementScript16_Text = "Jos sinulla ei ole s�hk�postiosoitetta, j�t� t�m� ruutu tyhj�ksi.";
                            Agent_Speak(L_Register3PlayElementScript16_Text);
							
							Agent_Play("Blink");
							                             
                        }
                        
                        else if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) {

	                       if (g_strAgentLastFocusID == "UserEmailAddress") {

								Agent_Play("Decline");
								
								var L_Register3PlayElementScript17_Text = "T�m� ei n�yt� kelvolliselta s�hk�postiosoitteelta.";
								Agent_Speak(L_Register3PlayElementScript17_Text);

								Agent_ExplainEmailAddress();
								
								if (g.document.dir == "rtl")
									Agent_GestureAtElement(elem, "Left");
								
								else
									Agent_GestureAtElement(elem, "Right");
                                        
								Agent_Play("Alert");
                                        
								var L_Register3PlayElementScript18_Text = "Jos sinulla ei ole s�hk�postiosoitetta, j�t� t�m� kentt� tyhj�ksi.";
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
        var L_ExplainEmailAddress1_Text = "S�hk�postiosoite koostuu yleens� kahdesta osasta.";
        Agent_Speak(L_ExplainEmailAddress1_Text);

        var L_ExplainEmailAddress2_Text = "Ensimm�inen osa on tilin nimi, ja sen per�ss� on merkki @. J�lkimm�inen osa on toimialueen nimi.";
        Agent_Speak(L_ExplainEmailAddress2_Text);

        var L_ExplainEmailAddress3_Text = "S�hk�postiosoite voi olla esimerkiksi seuraavanlainen: %s";
        var re = /%s/i;
        var strEmail = "\\map=\"\"=\"greatcustomer@msn.com\"\\";

        Agent_Speak(L_ExplainEmailAddress3_Text.replace(re, strEmail) + "\\pau=2000\\");

        Agent_Play("RestPose");
}







function Agent_PrivacyMSAddCommands() 
{
    var L_PrivacyMSCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_PrivacyMSCommand2_Text = "Mik� on &suojattu palvelin?";
    var L_PrivacyMSCommand3_Text = "Mik� on &ev�ste?";
    var L_PrivacyMSCommand4_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
    var L_PrivacyMSAboutThisStep1_Text = "T�ss� n�yt�ss� ovat Microsoftin tietosuojatiedot.";
    Agent_Speak(L_PrivacyMSAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.privtext,"Left");

    var L_PrivacyMSAboutThisStep2_Text = "Voit lukea tekstin t�ss�.";
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

    var L_PrivacyMSAboutThisStep3_Text = "Palaa edelliseen n�ytt��n valitsemalla Edellinen.";
    Agent_Speak(L_PrivacyMSAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PrivacyMSWhatIsSecureServer()
{
    var L_PrivacyMSWhatIsSecureServer1_Text = "Palvelin on tietokone, jonka tietoja ja palveluita verkon tietokoneet k�ytt�v�t.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer1_Text);

    var L_PrivacyMSWhatIsSecureServer2_Text = "Suojattu palvelin on t�llainen tietokone, joka voi tarjota suojattuja tapahtumia. T�m� tarkoittaa, ett� palvelimelle tallennetut tiedot eiv�t ole k�ytett�viss� ilman lupaa.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer2_Text);

    var L_PrivacyMSWhatIsSecureServer3_Text = "Esimerkiksi rekister�ityess�si Microsoftille nimesi ja osoitetietosi tallennetaan Microsoftin suojattuun rekister�intipalvelimeen.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer3_Text);
        
    var L_PrivacyMSWhatIsSecureServer4_Text = "T�m�n johdosta tietosi ovat turvassa etk� saa rekister�innin seurauksena yhteydenottoja kolmansilta osapuolilta.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer4_Text);
}

function Agent_PrivacyMSWhatIsCookie()
{
    var L_PrivacyMSWhatIsCookie1_Text = "Ev�ste on pieni tiedosto, joka tallennetaan tietokoneeseen tietyill� Web-sivuilla k�ymisen yhteydess�.";
    Agent_Speak(L_PrivacyMSWhatIsCookie1_Text);

    var L_PrivacyMSWhatIsCookie2_Text = "Ev�ste sis�lt�� perustietojasi, kuten s�hk�postiosoitteen, jotta niit� ei tarvitse antaa jokaisen Web-sivulla k�ynnin yhteydess� uudelleen.";
    Agent_Speak(L_PrivacyMSWhatIsCookie2_Text);

    var L_PrivacyMSWhatIsCookie3_Text = "Esimerkiksi tehdess�si ostoksia Web-sivulla palvelin saattaa l�hett�� tietokoneeseesi l�hetystietoja sis�lt�v�n ev�steen.";
    Agent_Speak(L_PrivacyMSWhatIsCookie3_Text);
        
    var L_PrivacyMSWhatIsCookie4_Text = "Seuraavan kerran, kun ostat t�lt� sivulta jotain, sinun ei tarvitse antaa tietoja uudelleen.";
    Agent_Speak(L_PrivacyMSWhatIsCookie4_Text);
        
    var L_PrivacyMSWhatIsCookie5_Text = "Kun l�het�t rekister�innin Microsoftille, antamasi tuotetunnus, nimesi ja osoitteesi tallennetaan ev�steeseen tietokoneeseesi.";
    Agent_Speak(L_PrivacyMSWhatIsCookie5_Text);
        
    var L_PrivacyMSWhatIsCookie6_Text = "Kun seuraavan kerran k�yt osoitteessa www.microsoft.com, Web-sivusto tunnistaa sinut rekister�ityneeksi Windows-k�ytt�j�ksi.";
    Agent_Speak(L_PrivacyMSWhatIsCookie6_Text);
}

function Agent_PrivacyMSWhatToDoNext()
{    
    Agent_GestureAtElement(g.privtext,"Left");
    
    var L_PrivacyMSWhatToDoNext1_Text = "Saat lis�tietoja tietosuojatiedoista napsauttamalla t�t� ruutua.";
    Agent_Speak(L_PrivacyMSWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.privtext,"Right");

    var L_PrivacyMSWhatToDoNext2_Text = "Sen j�lkeen voit vieritt�� tietosuojatietoja yl�s- ja alasp�in osoittavilla nuolipainikkeilla.";
    Agent_Speak(L_PrivacyMSWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_PrivacyMSWhatToDoNext3_Text = "Voit vieritt�� teksti� my�s n�pp�imist�n Page Down- ja Page Up -n�pp�imill�.";
    Agent_Speak(L_PrivacyMSWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
        
    var L_PrivacyMSWhatToDoNext4_Text = "Kun olet lukenut tietosuojatiedot, palaa edelliseen rekister�intin�ytt��n valitsemalla Edellinen.";
    Agent_Speak(L_PrivacyMSWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}





function Agent_RefDialAddCommands() 
{
    var L_RefDialAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_RefDialAddCommands2_Text = "Haluan tietoja seuraavasta &vaiheesta";

    g_AgentCharacter.Commands.Add("Agent_RefDialAboutThisStep", L_RefDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialWhatToDoNext", L_RefDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RefDialAboutThisStep()
{
    var L_RefDialAboutThisStep1_Text = "T�ss� vaiheessa soitetaan ilmaispuhelu.";
    Agent_Speak(L_RefDialAboutThisStep1_Text);

    var L_RefDialAboutThisStep2_Text = "N�in voit k�ytt�� aiemmin luotua Internet-tili�si t�ss� tietokoneessa.";
    Agent_Speak(L_RefDialAboutThisStep2_Text);
}

function Agent_RefDialWhatToDoNext()
{    
    Agent_GestureAtElement(g.btnManual,"Left");
    
    var L_RefDialWhatToDoNext1_Text = "Jos sinulla on jo sopimus palveluntarjoajan kanssa tai tied�t mit� palveluntarjoajaa haluat k�ytt��, valitse Omat asetukset.";
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

    var L_RefDialWhatToDoNext2_Text = "Saat luettelon mahdollisista palvelutarjoajista valitsemalla Seuraava.";
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

    var L_RefDialWhatToDoNext3_Text = "Tai jatka m��ritt�m�tt� Internet-yhteytt� valitsemalla Ohita. ";
    Agent_Speak(L_RefDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RefDialingAddCommands() 
{
    var L_RefDialingAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_RefDialingAddCommands2_Text = "Mik� t�m� palkki keskell� &n�ytt�� on?";
    var L_RefDialingAddCommands3_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
    var L_RefDialingAboutThisStep1_Text = "Windows muodostaa yhteytt� Microsoftin viitepalveluun hakeakseen luettelon t�ll� alueella k�ytett�viss� olevista Internet-palveluntarjoajista.";
    Agent_Speak(L_RefDialingAboutThisStep1_Text);

    var L_RefDialingAboutThisStep2_Text = "Odota...";
    Agent_Speak(L_RefDialingAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingAboutThisStep3_Text = "Voi halutessasi my�s ohittaa t�m�n vaiheen tai palata takaisin edelliseen n�ytt��n.";
    Agent_Speak(L_RefDialingAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RefDialingWhatsThisBar()
{    
    Agent_GestureAtElement(g.tblProg,"Left");
    
    var L_RefDialingWhatsThisBar1_Text = "T�m� tilanneilmaisin n�ytt��, miss� vaiheessa toiminto on.";
    Agent_Speak(L_RefDialingWhatsThisBar1_Text);

    var L_RefDialingWhatsThisBar2_Text = "Ilmaisimen palkki t�yttyy sit� mukaan kuin tietoja ladataan viitepalvelusta.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
    
    Agent_Play("RestPose");

    var L_RefDialingWhatsThisBar3_Text = "Kun kaikki tiedot on ladattu, t�m� palkki on t�ynn� ja toiminto siirtyy seuraavaan n�ytt��n automaattisesti.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
}

function Agent_RefDialingWhatToDoNext()
{
    var L_RefDialingWhatToDoNext1_Text = "Odota. Windows muodostaa yhteyden Microsoftin viitepalveluun palveluntarjoajien etsimiseksi.";
    Agent_Speak(L_RefDialingWhatToDoNext1_Text);

    var L_RefDialingWhatToDoNext2_Text = "Kun tiedot on ladattu, seuraavaan n�ytt��n siirryt��n automaattisesti.";
    Agent_Speak(L_RefDialingWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingWhatToDoNext3_Text = "Jos haluat kuitenkin ohittaa t�m�n vaiheen, valitse Ohita.";
    Agent_Speak(L_RefDialingWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RegDialAddCommands()
{
    var L_RegDialAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_RegDialAddCommands2_Text = "Haluan tietoja seuraavasta &vaiheesta";

    g_AgentCharacter.Commands.Add("Agent_RegDialAboutThisStep", L_RegDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RegDialWhatToDoNext", L_RegDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RegDialAboutThisStep()
{
    var L_RegDialAboutThisStep1_Text = "Windows k�ytt�� tietokoneesi puhelinverkkoyhteytt� muodostaakseen yhteyden rekister�intipalveluun.";
    Agent_Speak(L_RegDialAboutThisStep1_Text);

    var L_RegDialAboutThisStep2_Text = "Odota...";
    Agent_Speak(L_RegDialAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialAboutThisStep3_Text = "Voi halutessasi my�s ohittaa t�m�n vaiheen tai palata takaisin edelliseen n�ytt��n.";
    Agent_Speak(L_RegDialAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RegDialWhatToDoNext()
{
    var L_RegDialWhatToDoNext1_Text = "Odota. Windows muodostaa yhteyden rekister�intipalveluun.";
    Agent_Speak(L_RegDialWhatToDoNext1_Text);

    var L_RegDialWhatToDoNext2_Text = "Kun Windows on muodostanut yhteyden, ohjelma siirtyy automaattisesti seuraavaan n�ytt��n.";
    Agent_Speak(L_RegDialWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialWhatToDoNext3_Text = "Jos haluat kuitenkin ohittaa t�m�n vaiheen, valitse Ohita.";
    Agent_Speak(L_RegDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigDialAddCommands()
{
    var L_MigDialAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_MigDialAddCommands2_Text = "Haluan tietoja seuraavasta &vaiheesta";

    g_AgentCharacter.Commands.Add("Agent_MigDialAboutThisStep", L_MigDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_MigDialWhatToDoNext", L_MigDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_MigDialAboutThisStep()
{
    var L_MigDialAboutThisStep1_Text = "T�ss� vaiheessa soitetaan ilmaispuhelu.";
    Agent_Speak(L_MigDialAboutThisStep1_Text);

    var L_MigDialAboutThisStep2_Text = "N�in voit k�ytt�� aiemmin luotua Internet-tili�si t�ss� tietokoneessa.";
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
    
    var L_MigDialWhatToDoNext1_Text = "aloita numeron valitseminen napsauttamalla Seuraava-painiketta.";
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

    var L_MigDialWhatToDoNext2_Text = "Jos haluat kuitenkin ohittaa t�m�n vaiheen, valitse Ohita.";
    Agent_Speak(L_MigDialWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}





function Agent_MigListAddCommands() 
{
    
    
    
	var L_MigListAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
	var L_MigListAddCommands2_Text = "Haluan tietoja seuraavasta &vaiheesta";
	
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
    var L_MigListAboutThisStep1_Text = "T�ss� n�yt�ss� m��rit�t Internet-palveluntarjoajan, jota haluat k�ytt��.";
    Agent_Speak(L_MigListAboutThisStep1_Text);

    var L_MigListAboutThisStep2_Text = "N�in voit k�ytt�� aiemmin luotua Internet-tili�si t�ss� tietokoneessa.";
    Agent_Speak(L_MigListAboutThisStep2_Text);
}

function Agent_MigListWhatToDoNext()
{
    Agent_GestureAtElement(g.selISPDropList,"Left");
    
    var L_MigListWhatToDoNext1_Text = "Valitse Internet-palveluntarjoajasi napsauttamalla sen nime� luettelossa.";
    Agent_Speak(L_MigListWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_MigListWhatToDoNext2_Text = "Jos Internet-palveluntarjoajaasi ei ole luettelossa, valitse \"Ei mik��n n�ist�\".";
    Agent_Speak(L_MigListWhatToDoNext2_Text);

    var L_MigListWhatToDoNext3_Text = "Ota yhteytt� palveluntarjoajaan ja pyyd� apua Internet-tilisi avaamiseksi t�ss� tietokoneessa.";
    Agent_Speak(L_MigListWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_MigListWhatToDoNext4_Text = "Jatka sen j�lkeen valitsemalla Seuraava.";
    Agent_Speak(L_MigListWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigPageAddCommands() 
{
	var L_MigPageAddCommands1_Text = "&Mit� pit�� tehd� seuraavaksi?";
	var L_MigPageAddCommands2_Text = "Haluan tietoja t�st� &n�yt�st�";
	var L_MigPageAddCommands3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";
	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_WhatToDoNext", L_MigPageAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_AboutThisStep", L_MigPageAddCommands2_Text);
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_HowToMoveOn", L_MigPageAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_MigPageCommand_WhatToDoNext() {
		
	var L_MigPageWhatToDoNext1_Text = "Kun t�m� sivu on valmis,";
	Agent_Speak(L_MigPageWhatToDoNext1_Text);
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
			
	var L_MigPageWhatToDoNext2_Text = "valitse Seuraava.";
	Agent_Speak(L_MigPageWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}

function Agent_MigPageCommand_AboutThisStep() 
{
	var L_MigPageAboutThisStep1_Text = "T�ss� n�yt�ss� yritet��n ottaa k�ytt��n nykyisen palveluntarjoajasi palvelimessa olevaa Internet-tili�si.";
	Agent_Speak(L_MigPageAboutThisStep1_Text);
	
	Agent_Play("Pleased");
	
	var L_MigPageAboutThisStep2_Text = "Noudata t�ss� n�yt�ss� olevia Internet-palveluntarjoajan ohjeita.";
	Agent_Speak(L_MigPageAboutThisStep2_Text);
}

function Agent_MigPageCommand_HowToMoveOn() 
{
	var L_MigPageHowToMoveOn1_Text = "Kun olet kirjoittanut t�m�n n�yt�n tiedot,";
	Agent_Speak(L_MigPageHowToMoveOn1_Text);		
			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

	var L_MigPageHowToMoveOn2_Text = "jatka valitsemalla Seuraava.";
	Agent_Speak(L_MigPageHowToMoveOn2_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPDialAddCommands() 
{
    var L_ISPDial1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_ISPDial2_Text = "Haluan tietoja seuraavasta &vaiheesta";

    g_AgentCharacter.Commands.Add("Agent_ISPDialAboutThisStep", L_ISPDial1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDialWhatToDoNext", L_ISPDial2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPDialAboutThisStep()
{
    var L_ISPDialAboutThisStep1_Text = "T�ss� vaiheessa soitetaan ilmaispuhelu.";
    Agent_Speak(L_ISPDialAboutThisStep1_Text);

    var L_ISPDialAboutThisStep2_Text = "T�ss� voit kirjautua uudelle Internet-tilillesi.";
    Agent_Speak(L_ISPDialAboutThisStep2_Text);

    var L_ISPDialAboutThisStep3_Text = "Jatka valitsemalla Seuraava.";
    Agent_Speak(L_ISPDialAboutThisStep3_Text);
}

function Agent_ISPDialWhatToDoNext()
{
    var L_ISPDialWhatToDoNext1_Text = "jatka valitsemalla Seuraava.";
    Agent_Speak(L_ISPDialWhatToDoNext1_Text);

    var L_ISPDialWhatToDoNext2_Text = "Tai jatka m��ritt�m�tt� Internet-yhteytt� valitsemalla Ohita. Voit m��ritt�� yhteyden my�hemminkin... ";
    Agent_Speak(L_ISPDialWhatToDoNext2_Text);
}




function Agent_DialToneAddCommands()
{
    var L_DialToneAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_DialToneAddCommands2_Text = "Haluan tietoja siit�, mit� &teen, jos joudun siirt�m��n tietokonettani";
    var L_DialToneAddCommands3_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
    var L_DialToneAboutThisStep1_Text = "Windows ei havainnut valinta��nt�.";
    Agent_Speak(L_DialToneAboutThisStep1_Text);

    var L_DialToneAboutThisStep2_Text = "Se saattaa johtua monesta seikasta.";
    Agent_Speak(L_DialToneAboutThisStep2_Text);

    var L_DialToneAboutThisStep3_Text = "Tarkista ensimm�iseksi, ett� puhelinjohdot on oikein kytketty.";
    Agent_Speak(L_DialToneAboutThisStep3_Text);

    var L_DialToneAboutThisStep4_Text = "Tarkista sen j�lkeen, ettei kukaan muu k�yt� puhelinlinjaa samanaikaisesti.";
    Agent_Speak(L_DialToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneAboutThisStep5_Text = "ja yrit� valita numero uudelleen Soita uudelleen -painikkeella.";
    Agent_Speak(L_DialToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_DialToneHowToMove()
{
    var L_DialToneHowToMove1_Text = "Jos tietokonetta t�ytyy siirt�� puhelinlinjaan kytkemisen vuoksi, varmista ett� tietokone on sammutettu.";
    Agent_Speak(L_DialToneHowToMove1_Text);

    var L_DialToneHowToMove2_Text = "Kun k�ynnist�t tietokoneen uudelleen, Windows jatkaa toimintoa keskeytymiskohdasta.";
    Agent_Speak(L_DialToneHowToMove2_Text);
}

function Agent_DialToneWhatToDoNext()
{
    var L_DialToneWhatToDoNext1_Text = "Tarkista tietokoneen yhteys puhelinlinjaan.";
    Agent_Speak(L_DialToneWhatToDoNext1_Text);

    var L_DialToneWhatToDoNext2_Text = "Tarkista sen j�lkeen, ettei puhelinlinja ole k�yt�ss�.";
    Agent_Speak(L_DialToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneWhatToDoNext3_Text = "Ja yrit� valita numero uudelleen Soita uudelleen -painikkeella.";
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

    var L_DialToneWhatToDoNext4_Text = "Voit jatkaa ilman Windows XP:n rekister�inti� tai aktivointia valitsemalla Ohita.";
    Agent_Speak(L_DialToneWhatToDoNext4_Text);
    
    Agent_Play("RestPose");

    var L_DialToneWhatToDoNext5_Text = "Voit rekister�ity� my�s my�hemmin.";
    Agent_Speak(L_DialToneWhatToDoNext5_Text);
}



function Agent_CnnctErrAddCommands() 
{
    var L_CnnctErrAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_CnnctErrAddCommands2_Text = "Haluan tiet��, miten &koputustoiminto poistetaan k�yt�st�.";
    var L_CnnctErrAddCommands3_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
    var L_CnnctErrAboutThisStep1_Text = "Puhelu rekister�intikeskukseen katkesi.";
    Agent_Speak(L_CnnctErrAboutThisStep1_Text);

    var L_CnnctErrAboutThisStep2_Text = "Se saattaa johtua monesta seikasta.";
    Agent_Speak(L_CnnctErrAboutThisStep2_Text);

    var L_CnnctErrAboutThisStep3_Text = "Olet ehk� ollut pitk��n k�ytt�m�tt� yhteytt�, joten se on katkennut automaattisesti.";
    Agent_Speak(L_CnnctErrAboutThisStep3_Text);

    var L_CnnctErrAboutThisStep4_Text = "Joku on saattanut yritt�� k�ytt�� puhelinlinjaa yhteyden aikana.";
    Agent_Speak(L_CnnctErrAboutThisStep4_Text);

    var L_CnnctErrAboutThisStep5_Text = "Jos koputustoiminto on k�yt�ss�, tuleva puhelu on saattanut katkaista yhteyden.";
    Agent_Speak(L_CnnctErrAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrAboutThisStep6_Text = "Jos puhelinliittym�ss� on k�yt�ss� koputustoiminto ja tied�t numeron, jolla se poistetaan k�yt�st�, kirjoita numero t�h�n.";
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

    var L_CnnctErrAboutThisStep7_Text = "Yrit� sen j�lkeen valita numero uudelleen Soita uudelleen -painikkeella.";
    Agent_Speak(L_CnnctErrAboutThisStep7_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrTurnOffCallWaiting()
{
    var L_CnnctErrTurnOffCallWaiting1_Text = "K�ytt�m�si puhelinyhti� voi kertoa sinulle koputustoiminnon poistamiseen k�ytett�v�n koodin.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting1_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrTurnOffCallWaiting2_Text = "Jos haluat poistaa koputustoiminnon k�yt�st� t�m�n puhelun ajaksi, kirjoita koodi t�h�n.";
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

    var L_CnnctErrTurnOffCallWaiting3_Text = "Valitse sen j�lkeen Seuraava.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrWhatToDoNext()
{
    var L_CnnctErrWhatToDoNext1_Text = "Varmista ensin, ettei kukaan muu k�yt� puhelinlinjaa parhaillaan.";
    Agent_Speak(L_CnnctErrWhatToDoNext1_Text);

    var L_CnnctErrWhatToDoNext2_Text = "Seuraavaksi, poista mahdollinen koputustoiminto k�yt�st�.";
    Agent_Speak(L_CnnctErrWhatToDoNext2_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrWhatToDoNext3_Text = "Kirjoita koputuksen poistokoodi t�h�n laatikkoon. ";
    Agent_Speak(L_CnnctErrWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_CnnctErrWhatToDoNext4_Text = "Kun t�m� puhelu on ohitse, toiminto palautetaan automaattisesti k�ytt��n.";
    Agent_Speak(L_CnnctErrWhatToDoNext4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrWhatToDoNext5_Text = "Kun olet valmis soittamaan uudelleen, valitse Seuraava.";
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

    var L_CnnctErrWhatToDoNext6_Text = "Voit jatkaa ilman rekister�inti� valitsemalla Ohita-painikkeen.";
    Agent_Speak(L_CnnctErrWhatToDoNext6_Text);
    
    Agent_Play("RestPose");
}



function Agent_HandShakeAddCommands() 
{
    var L_HandShakeAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_HandShakeAddCommands2_Text = "Haluan tietoja seuraavasta &vaiheesta";

    g_AgentCharacter.Commands.Add("Agent_HandShakeAboutThisStep", L_HandShakeAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_HandShakeWhatToDoNext", L_HandShakeAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_HandShakeAboutThisStep()
{
    var L_HandShakeAboutThisStep1_Text = "Windows ei voinut muodostaa yhteytt� Microsoftiin.";
    Agent_Speak(L_HandShakeAboutThisStep1_Text);

    var L_HandShakeAboutThisStep2_Text = "Kaikki puhelinlinjat saattavat olla varattuna, tai tietokoneesi ei ehk� voi muodostaa puhelinyhteytt�.";
    Agent_Speak(L_HandShakeAboutThisStep2_Text);

    var L_HandShakeAboutThisStep3_Text = "Odota muutama minuutti";
    Agent_Speak(L_HandShakeAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_HandShakeAboutThisStep4_Text = "ja yrit� uudelleen valitsemalla Soita uudelleen.";
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
    
    var L_HandShakeWhatToDoNext1_Text = "Odota muutama minuutti ja valitse Soita uudelleen.";
    Agent_Speak(L_HandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_HandShakeWhatToDoNext2_Text = "Jos olet jo yritt�nyt t�t� muutaman kerran, ota yhteytt� tietokoneesi toimittajaan.";
    Agent_Speak(L_HandShakeWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_HandShakeWhatToDoNext3_Text = "Jos haluat jatkaa rekister�im�tt� tietokonetta, valitse Ohita.";
    Agent_Speak(L_HandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_NoAnswerAddCommands() 
{
    var L_NoAnswerAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_NoAnswerAddCommands2_Text = "Haluan tiet�� mit� tehd�, jos &puhelinnumero on v��r�.";
    var L_NoAnswerAddCommands3_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
    var L_NoAnswerAboutThisStep1_Text = "Valittu numero ei vastannut.";
    Agent_Speak(L_NoAnswerAboutThisStep1_Text);

    var L_NoAnswerAboutThisStep2_Text = "Tarkista, ett� numero n�ytt�� oikealta.";
    Agent_Speak(L_NoAnswerAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_NoAnswerAboutThisStep3_Text = "Jos virheit� ei ilmene, odota muutama minuutti ja valitse Soita uudelleen.";
    Agent_Speak(L_NoAnswerAboutThisStep3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.edtPhoneNumber,"Left");

    var L_NoAnswerAboutThisStep4_Text = "Jos numero on m��ritetty v��rin, napsauta t�t� ruutua ja muokkaa numeroa.";
    Agent_Speak(L_NoAnswerAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_NoAnswerAboutThisStep5_Text = "Valitse sen j�lkeen Soita uudelleen.";
    Agent_Speak(L_NoAnswerAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.btnRestore,"Right");

    var L_NoAnswerAboutThisStep6_Text = "Voit palauttaa Windowsin alun perin k�ytt�m�n numeron valitsemalla Palauta.";
    Agent_Speak(L_NoAnswerAboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_NoAnswerWhatIfWrongNumber()
{
    var L_NoAnswerWhatIfWrongNumber1_Text = "Jos t�h�n on kirjoitettu v��r� puhelinnumero, napsauta tekstiruutua.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber1_Text);

    var L_NoAnswerWhatIfWrongNumber2_Text = "Ruudussa n�kyy vilkkuva pystyviiva eli kohdistin.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber2_Text);

    var L_NoAnswerWhatIfWrongNumber3_Text = "Kohdistin osoittaa paikan, johon kirjoitettava merkki tulee.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber3_Text);

    var L_NoAnswerWhatIfWrongNumber4_Text = "Voit siirt�� kohdistinta muokkausruudussa k�ytt�m�ll� n�pp�imist�n vasenta ja oikeaa nuolin�pp�int�.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber4_Text);

    var L_NoAnswerWhatIfWrongNumber5_Text = "Del-n�pp�imell� voit poistaa kohdistimen j�ljess� olevan merkin.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber5_Text);

    var L_NoAnswerWhatIfWrongNumber6_Text = "Askelpalauttimella voit poistaa kohdistimen edell� olevan merkin.";
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
    
    var L_NoAnswerWhatToDoNext1_Text = "Jos puhelinnumero n�ytt�� oikealta, yrit� yhteyden muodostamista uudelleen valitsemalla Soita uudelleen.";
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

    var L_NoAnswerWhatToDoNext2_Text = "Yrit� muodostaa yhteys uudelleen tai ohita tietokoneen rekister�inti.";
    Agent_Speak(L_NoAnswerWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}



function Agent_PulseAddCommands() 
{

    var L_PulseAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_PulseAddCommands2_Text = "Haluan tietoja seuraavasta &vaiheesta";

    g_AgentCharacter.Commands.Add("Agent_PulseAboutThisStep", L_PulseAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_PulseWhatToDoNext", L_PulseAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_PulseAboutThisStep()
{
    var L_PulseAboutThisStep1_Text = "Windows ei voinut m��ritt��, k�ytt��k� puhelin ��ni- vai pulssivalintaa.";
    Agent_Speak(L_PulseAboutThisStep1_Text);

    var L_PulseAboutThisStep2_Text = "Windows tarvitsee t�m�n tiedon ennen jatkamista.";
    Agent_Speak(L_PulseAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseAboutThisStep3_Text = "T�ss� n�yt�ss� m��ritet��n puhelinlinjan soittomenetelm�.";
    Agent_Speak(L_PulseAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PulseWhatToDoNext()
{
    var L_PulseWhatToDoNext1_Text = "M��rit� puhelinlinjasi k�ytt�m� numeronvalintatapa.";
    Agent_Speak(L_PulseWhatToDoNext1_Text);
    
    Agent_GestureAtElement(g.tone,"Left");

    var L_PulseWhatToDoNext2_Text = "Valitse t�m�, jos puhelinlinja k�ytt�� ��nivalintaa.";
    Agent_Speak(L_PulseWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseWhatToDoNext3_Text = "Valitse t�m�, jos puhelinlinja k�ytt�� pulssivalintaa.";
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

    var L_PulseWhatToDoNext4_Text = "Valitse numero uudelleen valitsemalla Seuraava.";
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

    var L_PulseWhatToDoNext5_Text = "Jos haluat jatkaa rekister�im�tt� tietokonetta, valitse Ohita.";
    Agent_Speak(L_PulseWhatToDoNext5_Text);
    
    Agent_Play("RestPose");
}





function Agent_TooBusyAddCommands() 
{
        var L_TooBusyAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
        var L_TooBusyAddCommands2_Text = "Haluan tiet�� mit� tehd�, jos &puhelinnumero on v��r�.";
        var L_TooBusyAddCommands3_Text = "Haluan tietoja seuraavasta &vaiheesta";

        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_AboutThisStep", L_TooBusyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatIfIncorrect", L_TooBusyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatToDoNext", L_TooBusyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_TooBusyCommand_AboutThisStep() 
{
    var L_TooBusyAboutThisStep1_Text = "Valittu numero ei vastannut.";
    Agent_Speak(L_TooBusyAboutThisStep1_Text);

    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyAboutThisStep2_Text = "Tarkista, onko t�m� numero oikea.";
    Agent_Speak(L_TooBusyAboutThisStep2_Text);
        
    Agent_Play("RestPose");

    var L_TooBusyAboutThisStep3_Text = "Jos se n�ytt�� oikealta numerolta, odota muutama minuutti";
    Agent_Speak(L_TooBusyAboutThisStep3_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyAboutThisStep4_Text = "ja yrit� valita numero uudelleen Soita uudelleen -painikkeella.";
    Agent_Speak(L_TooBusyAboutThisStep4_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatIfIncorrect() 
{        
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect1_Text = "Jos puhelinnumero ei ole oikea,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("cb_altnumber"),"Left");
    
    var L_TooBusyPhoneNumberIncorrect2_Text = " valitse t�m� valintaruutu,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_altnumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect3_Text = "ja kirjoita vaihtoehtoinen numero t�h�n.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("cb_outsideline"),"Left");

    var L_TooBusyPhoneNumberIncorrect4_Text = "Jos tarvitaan ulkolinjan valintanumero, valitse t�m�";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect4_Text);

    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("edt_outsideline"),"Right");

    var L_TooBusyPhoneNumberIncorrect5_Text = "ja kirjoita numero t�h�n.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect5_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect6_Text = "Jos puhelinlinjalla on k�yt�ss� koputustoiminto, saapuva puhelu voi katkaista yhteyden.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect6_Text);

    var L_TooBusyPhoneNumberIncorrect7_Text = "Palvelun v�liaikainen k�yt�st� poistaminen on helppoa.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect7_Text);
        
    Agent_GestureAtElement(g.document.all("cb_callwaiting"),"Left");

    var L_TooBusyPhoneNumberIncorrect8_Text = "Valitse t�m� valintaruutu,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect8_Text);

    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_callwaiting"),"Right");

    var L_TooBusyPhoneNumberIncorrect9_Text = "ja kirjoita t�h�n koodi.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect9_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect10_Text = "Koputus kytket��n takaisin p��lle kun toiminto on valmis.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect10_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyPhoneNumberIncorrect11_Text = "Valitse Soita uudelleen, kun olet valmis uuteen yritykseen.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect11_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatToDoNext() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyWhatToDoNext1_Text = "Jos puhelinnumero n�ytt�� oikealta";
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
    
     var L_TooBusyWhatToDoNext2_Text = "Yrit� yhteyden muodostamista uudelleen valitsemalla Soita uudelleen.";
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

    var L_TooBusyWhatToDoNext3_Text = "Tai valitse Ohita, jos haluat rekister�id� Windowsin asennuksen j�lkeen.";
    Agent_Speak(L_TooBusyWhatToDoNext3_Text);
        
    Agent_Play("RestPose");
}



function Agent_ISPDToneAddCommands() 
{
    var L_ISPDToneAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_ISPDToneAddCommands2_Text = "Haluan tietoja siit�, mit� &teen, jos joudun siirt�m��n tietokonettani";
    var L_ISPDToneAddCommands3_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
    var L_ISPDToneAboutThisStep1_Text = "Windows ei havainnut valinta��nt�.";
    Agent_Speak(L_ISPDToneAboutThisStep1_Text);

    var L_ISPDToneAboutThisStep2_Text = "Se saattaa johtua monesta seikasta.";
    Agent_Speak(L_ISPDToneAboutThisStep2_Text);

    var L_ISPDToneAboutThisStep3_Text = "Tarkista ensimm�iseksi, ett� puhelinjohdot on oikein kytketty.";
    Agent_Speak(L_ISPDToneAboutThisStep3_Text);

    var L_ISPDToneAboutThisStep4_Text = "Tarkista sen j�lkeen, ettei kukaan muu k�yt� puhelinlinjaa samanaikaisesti.";
    Agent_Speak(L_ISPDToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneAboutThisStep5_Text = "Ja yrit� valita numero uudelleen Soita uudelleen -painikkeella.";
    Agent_Speak(L_ISPDToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPDToneHowToMove()
{
    var L_ISPDToneHowToMove1_Text = "Jos tietokonetta t�ytyy siirt�� puhelinlinjaan kytkemisen vuoksi, varmista ett� tietokone on sammutettu.";
    Agent_Speak(L_ISPDToneHowToMove1_Text);

    var L_ISPDToneHowToMove2_Text = "Kun k�ynnist�t tietokoneen uudelleen, Windows jatkaa toimintoa keskeytymiskohdasta.";
    Agent_Speak(L_ISPDToneHowToMove2_Text);
}

function Agent_ISPDToneWhatToDoNext()
{
    var L_ISPDToneWhatToDoNext1_Text = "Tarkista tietokoneen yhteys puhelinlinjaan.";
    Agent_Speak(L_ISPDToneWhatToDoNext1_Text);

    var L_ISPDToneWhatToDoNext2_Text = "Tarkista sen j�lkeen, ettei puhelinlinja ole k�yt�ss�.";
    Agent_Speak(L_ISPDToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneWhatToDoNext3_Text = "Ja yrit� valita numero uudelleen Soita uudelleen -painikkeella.";
    Agent_Speak(L_ISPDToneWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_ISPCnErrAddCommands() {

        var L_ISPCnErrAddCommands1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_ISPCnErrAddCommands2_Text = "Haluan tiet��, miten &koputustoiminto poistetaan k�yt�st�.";
        var L_ISPCnErrAddCommands3_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_ISPCnErrAddCommands4_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

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
        var L_ISPCnErrIntro1_Text = "Internet-palvelun asennuksen k�ytt�m� puhelinyhteys katkesi.";
        Agent_Speak(L_ISPCnErrIntro1_Text);

        Agent_MoveToElement(g.document.all("txtBullet1"),"Left");
        
        var L_ISPCnErrIntro2_Text = "Se saattaa johtua monesta seikasta.";
        Agent_Speak(L_ISPCnErrIntro2_Text);

        var L_ISPCnErrIntro3_Text = "Olet ehk� ollut pitk��n k�ytt�m�tt� yhteytt�, joten se on katkennut automaattisesti.";
        Agent_Speak(L_ISPCnErrIntro3_Text);

        var L_ISPCnErrIntro4_Text = "Joku on saattanut yritt�� k�ytt�� puhelinlinjaa yhteyden aikana.";
        Agent_Speak(L_ISPCnErrIntro4_Text);

        var L_ISPCnErrIntro5_Text = "Jos koputustoiminto on k�yt�ss�, tuleva puhelu on saattanut katkaista yhteyden.";
        Agent_Speak(L_ISPCnErrIntro5_Text);

        Agent_GestureAtElement(g.document.all("Callwait"),"Left");

        var L_ISPCnErrIntro6_Text = "Jos puhelinliittym�ss� on k�yt�ss� koputustoiminto ja tied�t numeron, jolla se poistetaan k�yt�st�, kirjoita numero t�h�n.";
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

        var L_ISPCnErrIntro7_Text = "Yrit� sen j�lkeen valita numero uudelleen Soita uudelleen -painikkeella.";
        Agent_Speak(L_ISPCnErrIntro7_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("txtBullet1"),"Left");

        var L_ISPCnErrWhatToDoNext1_Text = "Jos olet korjannut kaikki t�ss� kuvatut mahdolliset syyt";
        Agent_Speak(L_ISPCnErrWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPCnErrWhatToDoNext2_Text = "ja haluat yritt�� yhteyden muodostamista uudelleen,";
        Agent_Speak(L_ISPCnErrWhatToDoNext2_Text);

        var L_ISPCnErrWhatToDoNext3_Text = "valitse Soita uudelleen.";
        Agent_Speak(L_ISPCnErrWhatToDoNext3_Text);
}

function Agent_ISPCnErrCommand_HowToTurnOffCallWaiting() 
{
        Agent_GestureAtElement(g.document.all("Callwait"),"Left");
        
        var L_ISPCnErrHowToTurnOffCallWaiting1_Text = "Jos haluat poistaa k�yt�st� puhelinliittym�n koputustoiminnon yhteyden muodostamisen ajaksi,";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting1_Text);

        var L_ISPCnErrHowToTurnOffCallWaiting2_Text = "kirjoita numero t�h�n.";
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

        var L_ISPCnErrHowToTurnOffCallWaiting3_Text = "Valitse sen j�lkeen Soita uudelleen.";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_HowToMoveOn() 
{
        var L_ISPCnErrHowToMoveOn1_Text = "Yrit� muodostaa yhteys uudelleen tai ohita t�m� vaihe.";
        Agent_Speak(L_ISPCnErrHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrHowToMoveOn2_Text = "Yrit� yhteyden muodostamista uudelleen valitsemalla Soita uudelleen.";
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

        var L_ISPCnErrHowToMoveOn3_Text = "Jos haluat jatkaa muodostamatta yhteytt� uudelleen, valitse Ohita.";
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

        var L_ISPHandShakeAddCommands1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_ISPHandShakeAddCommands2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_ISPHandShakeAddCommands3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_WhatToDoNext", L_ISPHandShakeAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_AboutThisScreen", L_ISPHandShakeAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_HowToMoveOn", L_ISPHandShakeAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPHandShakeIntro() {

}

function Agent_ISPHandShakeCommand_AboutThisScreen() 
{
        var L_ISPHandShakeIntro1_Text = "Valitun Internet-palveluntarjoajan palveluun ei voi toistaiseksi lis�t� uusia tilej�.";
        Agent_Speak(L_ISPHandShakeIntro1_Text);

        var L_ISPHandShakeIntro2_Text = "Syy ei ole selvill�.";
        Agent_Speak(L_ISPHandShakeIntro2_Text);

        var L_ISPHandShakeIntro3_Text = "Voit kuitenkin odottaa muutaman minuutin ja soittaa sen j�lkeen uudelleen.";
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
        
        var L_ISPHandShakeIntro4_Text = "Voit my�s ohittaa Internet-palvelun m��ritt�misen t�ll� kertaa.";
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

        var L_ISPHandShakeWhatToDoNext1_Text = "Odota muutama minuutti ja valitse Soita uudelleen.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeWhatToDoNext2_Text = "Jos olet jo yritt�nyt t�t� muutaman kerran,";
        Agent_Speak(L_ISPHandShakeWhatToDoNext2_Text);
        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeWhatToDoNext3_Text = "Valitsemalla Ohita voit jatkaa m��ritt�m�tt� Internet-palvelua.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPHandShakeCommand_HowToMoveOn() 
{
        var L_ISPHandShakeHowToMoveOn1_Text = "Odota muutama minuutti ja";
        Agent_Speak(L_ISPHandShakeHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPHandShakeHowToMoveOn2_Text = "yrit� yhteyden muodostamista uudelleen valitsemalla Soita uudelleen.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeHowToMoveOn3_Text = "Jos olet jo yritt�nyt t�t�,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeHowToMoveOn4_Text = "Jos haluat jatkaa m��ritt�m�tt� Internet-pavelua, valitse Ohita.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn4_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPInsAddCommands() {

        var L_ISPInsAddCommands1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_ISPInsAddCommands2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_ISPInsAddCommands3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_WhatToDoNext", L_ISPInsAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_AboutThisScreen", L_ISPInsAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_HowToMoveOn", L_ISPInsAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPInsIntro() {

}

function Agent_ISPInsCommand_AboutThisScreen() 
{
        var L_ISPInsIntro1_Text = "Valitettavasti Windows ei pystynyt muodostamaan Internet-yhteytt� valitsemasi palveluntarjoajan kautta.";
        Agent_Speak(L_ISPInsIntro1_Text);

        var L_ISPInsIntro2_Text = "Jos Internet-yhteyden muodostaminen Web-selaimella tai s�hk�postin l�hett�minen ja vastaanottaminen tuottavat ongelmia,";
        Agent_Speak(L_ISPInsIntro2_Text);

        var L_ISPInsIntro3_Text = "ota yhteytt� palveluntarjoajan tuotetukeen ja pyyd� apua.";
        Agent_Speak(L_ISPInsIntro3_Text);
}

function Agent_ISPInsCommand_WhatToDoNext() 
{
        var L_ISPInsWhatToDoNext1_Text = "jatka valitsemalla Seuraava.";
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

        var L_ISPInsHowToMoveOn1_Text = "valitse Seuraava.";
        Agent_Speak(L_ISPInsHowToMoveOn1_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPNoAnwAddCommands() {

        var L_ISPNoAnwAddCommands1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_ISPNoAnwAddCommands2_Text = "Haluan tiet�� mit� tehd�, jos &puhelinnumero on v��r�.";
        var L_ISPNoAnwAddCommands3_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_ISPNoAnwAddCommands4_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoNext", L_ISPNoAnwAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect", L_ISPNoAnwAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_AboutThisScreen", L_ISPNoAnwAddCommands3_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_HowToMoveOn", L_ISPNoAnwAddCommands4_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPNoAnwCommand_AboutThisScreen() 
{
        var L_ISPNoAnwIntro1_Text = "Valittu numero ei vastannut.";
        Agent_Speak(L_ISPNoAnwIntro1_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro2_Text = "Tarkista, ett� numero n�ytt�� oikealta.";
        Agent_Speak(L_ISPNoAnwIntro2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwIntro3_Text = "Jos se n�ytt�� oikealta numerolta, odota muutama minuutti";
        Agent_Speak(L_ISPNoAnwIntro3_Text);

        var L_ISPNoAnwIntro4_Text = "ja yrit� uudelleen valitsemalla Soita uudelleen.";
        Agent_Speak(L_ISPNoAnwIntro4_Text);

        var L_ISPNoAnwIntro5_Text = "Jos numero on v��r�,";
        Agent_Speak(L_ISPNoAnwIntro5_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro6_Text = "muuta sit� napsauttamalla t�t� kohtaa.";
        Agent_Speak(L_ISPNoAnwIntro6_Text);

        Agent_Play("RestPose");

        var L_ISPNoAnwIntro7_Text = "Valitse sen j�lkeen Soita uudelleen.";
        Agent_Speak(L_ISPNoAnwIntro7_Text);
}

function Agent_ISPNoAnwCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwWhatToDoNext1_Text = "Jos puhelinnumero n�ytt�� oikealta";
        Agent_Speak(L_ISPNoAnwWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwWhatToDoNext2_Text = "ja olet valmis yritt�m��n yhteyden muodostamista uudelleen,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext2_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwWhatToDoNext3_Text = "valitse Soita uudelleen.";
        Agent_Speak(L_ISPNoAnwWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwPhoneNumberIncorrect1_Text = "Jos puhelinnumero ei ole oikea,";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect1_Text);

        var L_ISPNoAnwPhoneNumberIncorrect2_Text = "napsauta muokkausruutua.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwPhoneNumberIncorrect3_Text = "Ruudussa n�kyy vilkkuva pystyviiva eli kohdistin.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect3_Text);

        var L_ISPNoAnwPhoneNumberIncorrect4_Text = "Kohdistin osoittaa paikan, johon kirjoitettava merkki tulee.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect4_Text);

        var L_ISPNoAnwPhoneNumberIncorrect5_Text = "Voit siirt�� kohdistinta muokkausruudussa n�pp�imist�n vasemmalla ja oikealla nuolin�pp�imell�.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect5_Text);

        var L_ISPNoAnwPhoneNumberIncorrect6_Text = "Del-n�pp�imell� voit poistaa kohdistimen j�ljess� olevan merkin.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect6_Text);

        var L_ISPNoAnwPhoneNumberIncorrect7_Text = "Askelpalauttimella voit poistaa kohdistimen edell� olevan merkin.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect7_Text);
}

function Agent_ISPNoAnwCommand_HowToMoveOn() 
{
        var L_ISPNoAnwHowToMoveOn1_Text = "Yrit� muodostaa yhteys uudelleen tai ohita Internet-palvelun m��ritt�minen.";
        Agent_Speak(L_ISPNoAnwHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwHowToMoveOn2_Text = "Yrit� yhteyden muodostamista uudelleen valitsemalla Soita uudelleen.";
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

        var L_ISPNoAnwHowToMoveOn3_Text = "Jos haluat jatkaa ilman Internet-palvelun asentamista, valitse Ohita.";
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

        var L_ISPPhBsyAddCommands1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_ISPPhBsyAddCommands2_Text = "Haluan tiet�� mit� tehd�, jos &puhelinnumero on v��r�.";
        var L_ISPPhBsyAddCommands3_Text = "&Lis�tietoja t�st� vaiheesta";

        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoNext", L_ISPPhBsyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect", L_ISPPhBsyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_AboutThisScreen", L_ISPPhBsyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPPhBsyIntro() {

}

function Agent_ISPPhBsyCommand_AboutThisScreen() 
{
        var L_ISPPhBsyIntro1_Text = "Windows ei pystynyt muodostamaan yhteytt� valitsemaasi Internet-palveluntarjoajaan.";
        Agent_Speak(L_ISPPhBsyIntro1_Text);

        var L_ISPPhBsyIntro2_Text ="Puhelinlinja voi olla varattu tai Internet-palveluntarjoajalla voi olla teknisi� ongelmia.";
        Agent_Speak(L_ISPPhBsyIntro2_Text);

        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyIntro3_Text = "Tarkista, ett� numero n�ytt�� oikealta.";
        Agent_Speak(L_ISPPhBsyIntro3_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro4_Text = "Jos se n�ytt�� oikealta numerolta, odota muutama minuutti";
        Agent_Speak(L_ISPPhBsyIntro4_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPPhBsyIntro5_Text = "ja yrit� valita numero uudelleen Soita uudelleen -painikkeella.";
        Agent_Speak(L_ISPPhBsyIntro5_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro6_Text = "Jos numero on v��r�,";
        Agent_Speak(L_ISPPhBsyIntro6_Text);

        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyIntro7_Text = "Valitse t�m�, jos haluat kokeilla toista puhelinluettelon numeroa. ";
        Agent_Speak(L_ISPPhBsyIntro7_Text);

        Agent_Play("RestPose");

        var L_ISPPhBsyIntro8_Text = "Valitse sen j�lkeen Soita uudelleen.";
        Agent_Speak(L_ISPPhBsyIntro8_Text);
}

function Agent_ISPPhBsyCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyWhatToDoNext1_Text = "Jos olet tarkistanut puhelinnumeron ja se n�ytt�isi oikealta,";
        Agent_Speak(L_ISPPhBsyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");    
    
        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyWhatToDoNext2_Text = "tai olet valinnut toisen numeron,";
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

        var L_ISPPhBsyWhatToDoNext4_Text = "Yrit� yhteyden muodostamista uudelleen valitsemalla Soita uudelleen.";
        Agent_Speak(L_ISPPhBsyWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_ISPPhBsyPhoneNumberIncorrect1_Text = "Jos puhelinnumero ei ole oikea,";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

    var L_ISPPhBsyPhoneNumberIncorrect2_Text = "Valitse t�m� valintaruutu vaihtoehtoisen puhelinnumeron kokeilemiseksi.";
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

    var L_ISPPhBsyPhoneNumberIncorrect3_Text = "Valitse Soita uudelleen, kun olet valmis.";
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

    var L_FinishAddCommands1_Text = "&Lis�tietoja t�st� vaiheesta";  
    var L_FinishAddCommands2_Text = "&Miten ty�p�yd�lt� rekister�id��n?";    
    var L_FinishAddCommands3_Text = "&Kuinka voin aktivoida Windowsin ty�p�yd�lt�?";    
    var L_FinishAddCommands4_Text = "Kuinka &voin k�ytt�� Interneti�?";    
    var L_FinishAddCommands5_Text = "Haluan tietoja seuraavasta &vaiheesta";

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
    var L_FinishAboutThisStep1_Text = "Onnittelut. Toiminto on viety onnistuneesti loppuun.";
    Agent_Speak(L_FinishAboutThisStep1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishAboutThisStep2_Text = "Voit aloittaa Windowsin k�yt�n nyt valitsemalla Valmis.";
    Agent_Speak(L_FinishAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_FinishAboutThisStep3_Text = "Jos haluat n�hd� esittelyn Windows XP:n uusita ominaisuuksista, valitse Ohje ja tuki K�ynnist�-valikosta ja kirjoita etsitt�v�ksi sanaksi \"esittely\".";
    Agent_Speak(L_FinishAboutThisStep3_Text);
}

function Agent_FinishHowToRegister() 
{
    var L_FinishHowToRegister1_Text = "Jos et rekister�itynyt aiemmin t�m�n toiminnon aikana, voit rekister�id� Windowsisi valitsemalla K�ynnist�-valikosta Suorita ja kirjoittamalla regwiz /r.";
    Agent_Speak(L_FinishHowToRegister1_Text);
        
    var L_FinishHowToRegister2_Text = "Mik�li tarvitset n�it� tietoja uudelleen, saat lis�tietoja valitsemalla Ohje ja tuki K�ynnist�-valikosta.";
    Agent_Speak(L_FinishHowToRegister2_Text);
}

function Agent_FinishHowToActivate() 
{
    var L_FinishHowToActivate1_Text = "Jos et aktivoinut Windowsia aiemmin t�m�n toiminnon aikana, saat t�st� muistutuksen ty�p�yd�llesi muutaman p�iv�n v�lein.";
    Agent_Speak(L_FinishHowToActivate1_Text);
        
    var L_FinishHowToActivate2_Text = "Windows on aktivoitava m��ritetyn aktivointikauden aikana, jotta sen k�ytt�� voi jatkaa.";
    Agent_Speak(L_FinishHowToActivate2_Text);

    var L_FinishHowToActivate3_Text = "Jos et halua odottaa muistutusta, voit suorittaa ohjatun tuoteaktivoinnin valitsemalla K�ynnist�-valikon Aktivoi Windows -vaihtoehdon.";
    Agent_Speak(L_FinishHowToActivate3_Text);

    var L_FinishHowToActivate4_Text = "Mik�li tarvitset n�it� tietoja uudelleen, saat lis�tietoja valitsemalla Ohje ja tuki K�ynnist�-valikosta.";
    Agent_Speak(L_FinishHowToActivate4_Text);
}

function Agent_FinishHowToAccessInternet() 
{
    var L_FinishHowToAccessInternet1_Text = "Jos olet jo asentanut tietokoneeseesi Internet-yhteyden, valitse ty�p�yd�n K�ynnist�-valikon yl�laidasta Internet.";
    Agent_Speak(L_FinishHowToAccessInternet1_Text);
        
    var L_FinishHowToAccessInternet2_Text = "Jos tietokoneen Internet-yhteytt� ei ole m��ritetty, ohjattu Internet-yhteyden muodostaminen k�ynnistyy.";
    Agent_Speak(L_FinishHowToAccessInternet2_Text);

    var L_FinishHowToAccessInternet3_Text = "Seuraa toiminnon antamia ohjeita Internet-yhteyden muodostamiseksi.";
    Agent_Speak(L_FinishHowToAccessInternet3_Text);
}

function Agent_FinishWhatToDoNext() 
{
    var L_FinishWhatToDoNext1_Text = "Tietokoneesi Microsoft Windows XP -asennus on valmis.";
    Agent_Speak(L_FinishWhatToDoNext1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishWhatToDoNext2_Text = "Valitsemalla Valmis.";
    Agent_Speak(L_FinishWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_FinishWhatToDoNext3_Text = "Jos haluat n�hd� esittelyn Windows XP:n uusita ominaisuuksista, valitse Ohje ja tuki K�ynnist�-valikosta ja kirjoita etsitt�v�ksi sanaksi \"esittely\".";
    Agent_Speak(L_FinishWhatToDoNext3_Text);

    var L_FinishWhatToDoNext4_Text = "Tervetuloa k�ytt�m��n Windows XP -k�ytt�j�rjestelm��.";
    Agent_Speak(L_FinishWhatToDoNext4_Text);
}






function Agent_MouseTutAddCommands() {

        var L_MouseTutMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_MouseTutMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_MouseTutMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        
        
        

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

        var L_MouseTutIntroTellMeWhatToDoNext1_Text = "Aloita valitsemalla Opetusohjelma";
        Agent_Speak(L_MouseTutIntroTellMeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutTellMeAboutThisScreen() 
{
        var L_MouseTutTellMeAboutThisScreen1_Text = "T�st� alkaa n�ytt�sarja, jossa on ohjeita tietokoneen hiiren k�yt�st�.";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen1_Text);

        var L_MouseTutTellMeAboutThisScreen2_Text = "Voit k�yd� l�pi opetusohjelman";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen2_Text);

        var L_MouseTutTellMeAboutThisScreen3_Text = "tai voit ohittaa sen, jos hallitset hiiren k�yt�n ennest��n.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen1_Text = "Aloita valitsemalla Opetusohjelma";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text = "tai ohita opetusohjelma valitsemalla Seuraava.";
        Agent_Speak(L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_MouseTutAAddCommands() {

        var L_MouseTutAMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_MouseTutAMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_MouseTutAMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeWhatToDoNext", L_MouseTutAMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeAboutThisScreen", L_MouseTutAMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeHowToMoveToNextScreen", L_MouseTutAMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutATellMeWhatToDoNext() 
{
        var L_MouseTutAWhatToDoNext1_Text = "Siirtele hiirt� alustalla ja tarkastele samalla osoittimen liikkumista n�yt�ss�.";
        Agent_Speak(L_MouseTutAWhatToDoNext1_Text);

        var L_MouseTutAWhatToDoNext2_Text = "Varmista, ett� hiiren alusta on tasainen.";
        Agent_Speak(L_MouseTutAWhatToDoNext2_Text);
}

function Agent_OnMouseTutATellMeAboutThisScreen() 
{

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutATellMeAboutThisScreen1_Text = "T�ss� n�yt�ss� on ohjeita siit�, miten hiiren avulla siirret��n osoitinta n�yt�ss�.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutATellMeAboutThisScreen2_Text = "Siirr� hiirt� vasemmalle ja oikealle sek� itse�si kohti ja itsest�si poisp�in.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen2_Text);

        var L_MouseTutATellMeAboutThisScreen3_Text = "Yrit� itse.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen3_Text);
}

function Agent_OnMouseTutATellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutBAddCommands() {

        var L_MouseTutBMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_MouseTutBMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_MouseTutBMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeWhatToDoNext", L_MouseTutBMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeAboutThisScreen", L_MouseTutBMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeHowToMoveToNextScreen", L_MouseTutBMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutBTellMeWhatToDoNext() 
{
        var L_MouseTutBWhatToDoNext1_Text = "Nosta hiiri yl�s ja siirr� se toiseen paikkaan.";
        Agent_Speak(L_MouseTutBWhatToDoNext1_Text);

        var L_MouseTutBWhatToDoNext2_Text = "Aseta hiiri sen j�lkeen takaisin alustalle ja siirtele hiirt�.";
        Agent_Speak(L_MouseTutBWhatToDoNext2_Text);
}

function Agent_OnMouseTutBTellMeAboutThisScreen() 
{
        var L_MouseTutBTellMeAboutThisScreen1_Text = "T�ss� n�yt�ss� esitet��n tarvittavat toimet hiiren k�ytt�tilan loppuessa.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen1_Text);

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutBTellMeAboutThisScreen2_Text = "Nosta hiiri yl�s alustaltaan ja siirr� se parempaan paikkaan.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen2_Text);

        Agent_Play("RestPose");

        var L_MouseTutBTellMeAboutThisScreen3_Text = "Kun asetat hiiren takaisin alustalle ja siirr�t hiirt�, osoitin siirtyy vastaavasti n�yt�ss�.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen3_Text);

        var L_MouseTutBTellMeAboutThisScreen4_Text = "Muista, ett� osoitin liikkuu vain, kun siirr�t hiirt� tasaisella alustalla.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutBTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutCAddCommands() {

        var L_MouseTutCMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_MouseTutCMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_MouseTutCMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeWhatToDoNext", L_MouseTutCMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeAboutThisScreen", L_MouseTutCMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeHowToMoveToNextScreen", L_MouseTutCMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_MouseTutCIntro() {
        
}

function Agent_OnMouseTutCTellMeWhatToDoNext() 
{
        var L_MouseTutCWhatToDoNext1_Text = "Siirr� hiirt� niin, ett� osoitin siirtyy n�yt�ss� olevien painikekuvien kohdalle.";
        Agent_Speak(L_MouseTutCWhatToDoNext1_Text);
}

function Agent_OnMouseTutCTellMeAboutThisScreen() 
{
        var L_MouseTutCTellMeAboutThisScreen1_Text = "T�ss� n�yt�ss� voit harjoitella osoittimen siirt�mist� hiiren avulla.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutCTellMeAboutThisScreen2_Text = "Siirr� osoitin hiirell� n�iden painikekuvien kohdalle.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutCTellMeAboutThisScreen3_Text = "Huomaa, ett� osoittimen siirtyess� painikkeen kohdalle painikkeen ulkoasu muuttuu.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen3_Text);

        var L_MouseTutCTellMeAboutThisScreen4_Text = "Painikkeen alkuper�inen ulkoasu palautuu, kun siirr�t osoittimen pois kuvan kohdalta.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutCTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutDAddCommands() {

        var L_MouseTutDMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_MouseTutDMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_MouseTutDMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeWhatToDoNext", L_MouseTutDMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeAboutThisScreen", L_MouseTutDMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeHowToMoveToNextScreen", L_MouseTutDMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutDTellMeWhatToDoNext() 
{
        var L_MouseTutDWhatToDoNext1_Text = "Napsauta hiiren ykk�spainiketta.";
        Agent_Speak(L_MouseTutDWhatToDoNext1_Text);
}

function Agent_OnMouseTutDTellMeAboutThisScreen() 
{
        var L_MouseTutDTellMeAboutThisScreen1_Text = "T�ss� opetusohjelman osassa harjoitellaan hiiren painikkeiden napsauttamista.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen1_Text);

        var elem = g.document.all("image");

        Agent_MoveToElement(elem, "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen2_Text = "Valitse n�yt�st� jokin kohde siirt�m�ll� osoitin sen kohdalle hiiren avulla.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen2_Text);

        Agent_GestureAtElement(g.document.all("image"), "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen3_Text = "Paina sitten hiiren painike alas ja vapauta se kuvan osoittamalla tavalla.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutDTellMeAboutThisScreen4_Text = "T�t� sanotaan napsauttamiseksi.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutDTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutEAddCommands() {

        var L_MouseTutEMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_MouseTutEMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_MouseTutEMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeWhatToDoNext", L_MouseTutEMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeAboutThisScreen", L_MouseTutEMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeHowToMoveToNextScreen", L_MouseTutEMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutETellMeWhatToDoNext() 
{
        var L_MouseTutEWhatToDoNext1_Text = "Harjoittele n�yt�ss� olevien painikekuvien napsauttamista hiiren ykk�spainikkeella.";
        Agent_Speak(L_MouseTutEWhatToDoNext1_Text);
}

function Agent_OnMouseTutETellMeAboutThisScreen() 
{
        var L_MouseTutETellMeAboutThisScreen1_Text = "T�ss� n�yt�ss� voit harjoitella painikkeiden napsauttamista hiirell�.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutETellMeAboutThisScreen2_Text = "Vie hiiriosoitin jonkin painikekuvan kohdalle.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutETellMeAboutThisScreen3_Text = "Napsauta sitten painiketta hiiren ykk�spainikkeella.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen3_Text);

        var L_MouseTutETellMeAboutThisScreen4_Text = "Tee sama muiden painikekuvien kohdalla.";
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

        var L_MouseTutFMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_MouseTutFMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_MouseTutFMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

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
        var L_MouseTutFTellMeAboutThisScreen1_Text = "Hienoa.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen1_Text);

        var L_MouseTutFTellMeAboutThisScreen2_Text = "Olet nyt oppinut viem��n hiiriosoittimen painikkeiden kohdalle ja napsauttamaan niit�.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen2_Text);

        var L_MouseTutFTellMeAboutThisScreen3_Text = "Seuraavaksi harjoitellaan n�iden toimintojen k�ytt�mist� muiden Windows- ja Web-objektien k�sittelyss�.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen3_Text);

        var L_MouseTutFTellMeAboutThisScreen4_Text = "Kun olet valmis jatkamaan, valitse Seuraava.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutFTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutGAddCommands() {

        var L_MouseTutGMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_MouseTutGMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_MouseTutGMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeWhatToDoNext", L_MouseTutGMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeAboutThisScreen", L_MouseTutGMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeHowToMoveToNextScreen", L_MouseTutGMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutGPreDisplayMenu() {

        if (g.btnNext.disabled) {

                var L_MouseTutGMenuCommand4_Text = "Haluan tiet��, miksi Seuraava-painike &ei ole k�ytett�viss�";

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
        var L_MouseTutGWhyNextNotAvailable1_Text = "Seuraava-painike ei ole k�ytett�viss�, koska et ole viel� valinnut kaupunkia.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable1_Text);

		Agent_GestureAtElement(g.document.all("selCity"),"LeftCenter");

        var L_MouseTutGWhyNextNotAvailable2_Text = "Sinun on ensin valittava jokin seuraavista kaupungeista.";
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

        var L_MouseTutGWhyNextNotAvailable3_Text = "Sen j�lkeen voit jatkaa valitsemalla Seuraava.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeWhatToDoNext() {
		
		if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "RightCenter");

        var L_MouseTutGWhatToDoNext1_Text = "Vierit� kaupunkiluetteloa yl�- ja alanuolien avulla.";
        Agent_Speak(L_MouseTutGWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

		if (g.document.dir == "rtl")
			Agent_Play("RestPose");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGWhatToDoNext2_Text = "Valitse sitten kaupunki napsauttamalla sen nime�.";
        Agent_Speak(L_MouseTutGWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutGWhatToDoNext3_Text = "Valitse sen j�lkeen muita luettelossa olevia kaupunkeja.";
        Agent_Speak(L_MouseTutGWhatToDoNext3_Text);

        Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
}

function Agent_OnMouseTutGTellMeAboutThisScreen() {
        var L_MouseTutGTellMeAboutThisScreen1_Text = "T�ss� n�yt�ss� voit harjoitella luettelon kohteen valitsemista hiiren avulla.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGTellMeAboutThisScreen2_Text = "Kun napsautat luettelossa olevaa kaupunkia,";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");
		
        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("imgTable"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("imgTable"), "RightCenter");

        var L_MouseTutGTellMeAboutThisScreen3_Text = "sen kuva tulee t�h�n.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeHowToMoveToNextScreen() {

        if (g.btnNext.disabled) {

                Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

                var L_MouseTutGHowToMoveToNextScreen1_Text = "Napsauta t�ss� olevaa kaupunkia.";
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

                var L_MouseTutGHowToMoveToNextScreen2_Text = "Valitse sen j�lkeen Seuraava.";
                Agent_Speak(L_MouseTutGHowToMoveToNextScreen2_Text);
    
                Agent_Play("RestPose");
        }

        else
                MouseTut_HowToMoveToNextScreen();

}




function Agent_MouseTutHAddCommands() {

        var L_MouseTutHMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_MouseTutHMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_MouseTutHMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeWhatToDoNext", L_MouseTutHMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeAboutThisScreen", L_MouseTutHMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeHowToMoveToNextScreen", L_MouseTutHMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutHTellMeWhatToDoNext() {

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHWhatToDoNext1_Text = "Valitse jokin vaihtoehdoista napsauttamalla sen vieress� olevaa valintanappia.";
        Agent_Speak(L_MouseTutHWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutHWhatToDoNext2_Text = "N�in voit muuttaa kuvan ulkoasua.";
        Agent_Speak(L_MouseTutHWhatToDoNext2_Text);

        var L_MouseTutHWhatToDoNext3_Text = "Napsauta sen j�lkeen muitakin vaihtoehtoja.";
        Agent_Speak(L_MouseTutHWhatToDoNext3_Text);
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeAboutThisScreen() {
        var L_MouseTutHTellMeAboutThisScreen1_Text = "T�ss� n�yt�ss� harjoitellaan vaihtoehdon valintaa tilanteessa, jossa vain yksi vaihtoehdoista voi olla k�yt�ss� kerrallaan.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHTellMeAboutThisScreen2_Text = "Valitsemalla t�st� jonkin valintanapin";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("cityImg"), "LeftCenter");
        else
			Agent_GestureAtElement(g.document.all("cityImg"), "RightCenter");

        var L_MouseTutHTellMeAboutThisScreen3_Text = "voit muuttaa kuvan ulkoasua.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutIAddCommands() {

        var L_MouseTutIMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_MouseTutIMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_MouseTutIMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeWhatToDoNext", L_MouseTutIMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeAboutThisScreen", L_MouseTutIMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeHowToMoveToNextScreen", L_MouseTutIMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutITellMeWhatToDoNext() {

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutIWhatToDoNext1_Text = "Napsauta jotakin vaihtoehtoa tai useita vaihtoehtoja ja tarkastele valintojen vaikutusta kuvaan.";
        Agent_Speak(L_MouseTutIWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutIWhatToDoNext2_Text = "Kun napsautat valittua vaihtoehtoa uudelleen, valinta poistuu.";
        Agent_Speak(L_MouseTutIWhatToDoNext2_Text);

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeAboutThisScreen() {
        var L_MouseTutITellMeAboutThisScreen1_Text = "Joskus vaihtoehtoluettelosta voidaan valita useita vaihtoehtoja.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen1_Text);

        var L_MouseTutITellMeAboutThisScreen2_Text = "T�ss� n�yt�ss� voit valita kuvalle useita n�ytt�tyylej�.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen2_Text);

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutITellMeAboutThisScreen3_Text = "Napsauta vaihtoehtojen vieress� olevia valintaruutuja.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutJAddCommands() {

        var L_MouseTutJMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_MouseTutJMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_MouseTutJMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

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

        var L_MouseTutJWhatToDoNext1_Text = "Napsauta t�t� ruutua";
        Agent_Speak(L_MouseTutJWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutJWhatToDoNext2_Text = "ja kirjoita kuvatekstiksi haluamasi teksti.";
        Agent_Speak(L_MouseTutJWhatToDoNext2_Text);
}

function Agent_OnMouseTutJTellMeAboutThisScreen() {
        var L_MouseTutJTellMeAboutThisScreen1_Text = "Joskus voit mukauttaa valintaa omin sanoin.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen1_Text);

        var L_MouseTutJTellMeAboutThisScreen2_Text = "T�ss� n�yt�ss� voit kirjoittaa kuvalle kuvatekstin.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen2_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(g.document.all("caption"), "Left");
		else
			Agent_GestureAtElement(g.document.all("CaptionLabel"), "Left");

        var L_MouseTutJTellMeAboutThisScreen3_Text = "Napsauta t�t� ruutua ja kirjoita kuvateksti.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutJTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutKAddCommands() {

        var L_MouseTutKMenuCommand1_Text = "&Mit� pit�� tehd� seuraavaksi?";
        var L_MouseTutKMenuCommand2_Text = "Haluan tietoja t�st� &n�yt�st�";
        var L_MouseTutKMenuCommand3_Text = "Hal&uan tietoja seuraavaan n�ytt��n siirtymisest�";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeWhatToDoNext", L_MouseTutKMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeAboutThisScreen", L_MouseTutKMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeHowToMoveToNextScreen", L_MouseTutKMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutKTellMeWhatToDoNext() {
        var L_MouseTutKWhatToDoNext1_Text = "Onnittelut. Olet suorittanut hiiren k�yt�n opetusohjelman.";
        Agent_Speak(L_MouseTutKWhatToDoNext1_Text);

        var L_MouseTutKWhatToDoNext2_Text = "Siirry seuraavaan n�ytt��n valitsemalla Seuraava.";
        Agent_Speak(L_MouseTutKWhatToDoNext2_Text);
}

function Agent_OnMouseTutKTellMeAboutThisScreen() {
        var L_MouseTutKTellMeAboutThisScreen1_Text = "Hienoa. Lomakuvasi on valmis.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen1_Text);
        
        var L_MouseTutKTellMeAboutThisScreen2_Text = "Olet suorittanut hiiren k�yt�n opetusohjelman loppuun.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen2_Text);

        var L_MouseTutKTellMeAboutThisScreen3_Text = "Windowsin ohjeessa on lis�tietoja hiiren k�yt�st� (esimerkiksi kohteiden vet�misest�, koon muuttamisesta ja hiiren kakkospainikkeen k�yt�st�).";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutKTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function MouseTut_WhatToDoNext() 
{
        var L_MouseTutTellMeWhatToDoNext1_Text = "Siirry seuraavaan n�ytt��n valitsemalla Seuraava";
        Agent_Speak(L_MouseTutTellMeWhatToDoNext1_Text);

        var L_MouseTutTellMeWhatToDoNext2_Text = "tai ohita opetusohjelman loppuosa valitsemalla Ohita.";
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

        var L_MouseTutTellMeHowToMoveToNextScreen1_Text = "Siirry seuraavaan n�ytt��n valitsemalla Seuraava";
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

        var L_MouseTutTellMeHowToMoveToNextScreen2_Text = "tai ohita opetusohjelma valitsemalla Ohita.";
        Agent_Speak(L_MouseTutTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_2nicsAddCommands() 
{
    var L_2nicsMenuCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    
    g_AgentCharacter.Commands.Add("Agent_On2nicsAboutThisStep", L_2nicsMenuCommand1_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_On2nicsAboutThisStep() 
{
    var L_2nicsAboutThisScreen1_Text = "T�ss� n�yt�ss� kerrotaan erilaisista Internet-yhteyden muodostamismenetelmist�.";
	Agent_Speak(L_2nicsAboutThisScreen1_Text);
	
    var L_2nicsAboutThisScreen2_Text = "Voit valita haluamasi yhteyden Windowsin asentamisen j�lkeen.";
	Agent_Speak(L_2nicsAboutThisScreen2_Text);
}



function Agent_UserNameAddCommands() 
{
    var L_UserNameCommand1_Text = "&Lis�tietoja t�st� vaiheesta";
    var L_UserNameCommand2_Text = "Miss� &nimeni n�kyy?";
    var L_UserNameCommand3_Text = "&Kuinka voin muuttaa nime�ni my�hemmin?";
    var L_UserNameCommand4_Text = "Haluan tietoja seuraavasta &vaiheesta";
    
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
    var L_UserNameAboutThisStep1_Text = "T�ss� n�yt�ss� voit m��ritt�� etu- ja sukunimesi, jotta Windows tunnistaa sinut sis��nkirjautumisen yhteydess�.";
	Agent_Speak(L_UserNameAboutThisStep1_Text);
}

function Agent_OnUserNameWhereIsName() 
{
    var L_UserNameWhereIsName1_Text = "Etunimesi n�kyy tervetulotoivotusikkunassa, joka n�kyy Windowsin k�ynnistymisen yhteydess�.";
	Agent_Speak(L_UserNameWhereIsName1_Text);
	
    var L_UserNameWhereIsName2_Text = "Se n�kyy my�s K�ynnist�-valikon yl�laidassa, kun olet kirjautuneena sis��n.";
	Agent_Speak(L_UserNameWhereIsName2_Text);
	
    var L_UserNameWhereIsName3_Text = "Jos toinen k�ytt�j� kirjautuu tietokoneeseesi ja avaa Omat tiedostot -kansion, sinun nimesi n�kyy kansion nimess�.";
	Agent_Speak(L_UserNameWhereIsName3_Text);
	
    var L_UserNameWhereIsName4_Text = "Kansio voi n�ky� esimerkiksi muodossa \"Tiedostot - Riku\", jolloin muut k�ytt�j�t tiet�v�t t�m�n olevan sinun kansiosi.";
	Agent_Speak(L_UserNameWhereIsName4_Text);
	
    var L_UserNameWhereIsName5_Text = "Nimesi n�kyy my�s K�ynnist�-valikon Ohjauspaneelista valittavassa K�ytt�j�tilit-luettelossa.";
	Agent_Speak(L_UserNameWhereIsName5_Text);
}

function Agent_OnUserNameHowToChangeName() 
{
    var L_UserNameHowToChangeName1_Text = "Voit muuttaa nime�si Windowsiin kirjautumisen j�lkeen valitsemalla K�ynnist� ja valitsemalla sitten Ohjauspaneeli.";
	Agent_Speak(L_UserNameHowToChangeName1_Text);
	
    var L_UserNameHowToChangeName2_Text = "Valitse t�m�n j�lkeen K�ytt�j�tilit.";
	Agent_Speak(L_UserNameHowToChangeName2_Text);
	
    var L_UserNameHowToChangeName3_Text = "Voit muuttaa omaa nime�si ja tietokoneen muiden k�ytt�jien nimi�.";
	Agent_Speak(L_UserNameHowToChangeName3_Text);
}

function Agent_OnUserNameWhatToDoNext() 
{
    var L_UserNameWhatToDoNext1_Text = "Voit yritt�� Internet-yhteyden muodostamista uudelleen valitsemalla Seuraava.";
	Agent_Speak(L_UserNameWhatToDoNext1_Text);
	
    var L_UserNameWhatToDoNext2_Text = "Valitse Ohita, jos haluat jatkaa ilman Internet-yhteyden muodostamista.";
	Agent_Speak(L_UserNameWhatToDoNext2_Text);
}
