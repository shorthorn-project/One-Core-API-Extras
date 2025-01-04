



var L_PhoneNumberLegit_Text = "\\map=\"one \\pau=100\\ eight hundred R U le jit\"=\"1-800-R U LEGIT\"\\";


var g_strRegionSetting = "";
var g_strKeyboardSetting = "";
var g_strLangSetting = " ";



function Agent_AddCommonCommands() 
{
    g_AgentCharacter.Commands.RemoveAll();

    var L_AddCommonCommands1_Text = "&Men� bez�r�sa";

    g_AgentCharacter.Commands.Add("CloseMenu", L_AddCommonCommands1_Text);
        
    if (g_bAgentShowSpecialISPCommands) 
    {
        
		var L_AddCommonCommands2_Text = "Szeretn�k t�bbet megtudni az &internet-el�fizet�sr�l";
		var L_AddCommonCommands3_Text = "Az internet-el�fizet�s �j&raind�t�sa";
		var L_AddCommonCommands4_Text = "Az internet-el�fizet�s &kihagy�sa";

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
        var L_AddAssistantanceCommand1_Text = "Kit h�vjak, ha tov�bbi &seg�ts�gre van sz�ks�gem?";       

        g_AgentCharacter.Commands.Add("Agent_OnCommand_AboutAssistance", L_AddAssistantanceCommand1_Text);
    }
}

function Agent_OnCommand_AboutAssistance() 
{

    Agent_StopAll();

    var L_AboutAssistance1_Text = "L�pjen kapcsolatba a sz�m�t�g�p gy�rt�j�val (%s).";
    var re = /%s/i;
    var L_AboutAssistance2_Text = "L�pjen kapcsolatba a sz�m�t�g�p gy�rt�j�val.";

    
    

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
            Agent_Speak(L_AboutAssistance2_Text);
    else
            Agent_Speak(L_AboutAssistance1_Text.replace(re, strPhoneNumber));

    Agent_Play("ReadReturn");
}

function Agent_AddWhatToDoNextCommand() 
{
    var L_AddWhatToDoNextCommand1_Text = "Mi legyen a k�vetkez� &l�p�sem?";
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

        var L_WhatToDoNext1_Text = "A folytat�shoz kattintson a Tov�bb gombra.";
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

        var L_WhatToDoNext2_Text = "Ha vissza szeretne t�rni az el�z� l�p�sre, kattintson a Vissza gombra.";
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

        var L_WhatToDoNext3_Text = "Az eg�sz l�p�st is kihagyhatja: ehhez kattintson a Kihagy�s gombra.";
        Agent_Speak(L_WhatToDoNext3_Text);
        
        Agent_Play("RestPose");
    }       
}

function Agent_DoSpecialISPCommand1() 
{
	
	
			
	Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
			
	var L_ISPSpecialTellMeAboutInternetSignup1_Text = "�n most az internet-el�fizet�shez sz�ks�ges be�ll�t�sokat v�gzi.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup1_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup2_Text = "Ha probl�m�i akadtak a folytat�ssal, kattintson r�m, vagy nyomja meg az F1 billenty�t,";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup2_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup3_Text = "�s olyan men�parancsokat jelen�tek meg, amelyekkel �jrakezdheti a folyamatot, illetve a k�vetkez� l�p�sre ugorhat.";
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

    var L_EncourageNextButton1_Text = "Kattintson a Tov�bb gombra. | Csup�n a Tov�bb gombra kell kattintania. | K�rem, kattintson a Tov�bb gombra. | A k�vetkez� l�p�sre a Tov�bb gombra kattintva ugorhat.";
    Agent_Speak(L_EncourageNextButton1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnF1() 
{
    var L_OnF1_Text = "Hogyan seg�thetek �nnek? | Miben lehetek a seg�ts�g�re?";
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

    var L_PreWelcomeScript1_Text = "�dv�zli a Windows XP!";
    Agent_Speak(L_PreWelcomeScript1_Text);

    var L_PreWelcomeScript2_Text = "A feladatom, hogy seg�tsek a sz�m�t�g�p telep�t�s�ben.";
    Agent_Speak(L_PreWelcomeScript2_Text);

    var L_PreWelcomeScript3_Text = "A folyamat sor�n t�lem k�rhet seg�ts�get.";
    Agent_Speak(L_PreWelcomeScript3_Text);
                
    Agent_MoveToElement(document.all("AssistImg"), "LeftCenter"); 
    
    

    var L_PreWelcomeScript4_Text = "Ha b�rmikor seg�ts�gre van sz�ks�ge, csak kattintson r�m, vagy nyomja meg az F1 billenty�t a billenty�zeten.";
    Agent_Speak(L_PreWelcomeScript4_Text);
    
    Agent_Play("PointLeft");

    var L_PreWelcomeScript5_Text = "Sz�ks�g eset�n azonnal itt leszek.";
    Agent_Speak(L_PreWelcomeScript5_Text);
    
    Agent_Play("RestPose");

    g_AgentRequestHideImage = g_AgentCharacter.Hide();
}



function Agent_WelcomeAddCommands() 
{
    
    
    

    var L_WelcomeAddCommands1_Text = "Szeretn�k t�&bbet megtudni err�l a folyamatr�l";
    var L_WelcomeAddCommands2_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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

    var L_WelcomeWhatToDoNext1_Text = "Ha k�szen �ll, kattintson a Tov�bb gombra.";
    Agent_Speak(L_WelcomeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnWelcomeCommand_AboutProcess() 
{
    Agent_StopAll();

    var L_AboutProcess1_Text = "M�g�ttem l�that� az els� k�perny� abb�l a sorozatb�l, melynek c�lja a sz�m�t�g�p be�ll�t�s�ban val� seg�ts�gny�jt�s.";
    Agent_Speak(L_AboutProcess1_Text);

    var L_AboutProcess2_Text = "Az egyes k�perny�k�n v�laszt�si lehet�s�gek jelennek meg, be kell �rnia valamilyen adatot, vagy felvil�gos�t�st kap a k�vetkez� l�p�sr�l.";
    Agent_Speak(L_AboutProcess2_Text);

    var L_AboutProcess3_Text = "R�vid �ttekint�s a k�vetkez� percekben elv�gzend� l�p�sekr�l:";
    Agent_Speak(L_AboutProcess3_Text);

    var L_AboutProcess4_Text = "El�sz�r meg kell vizsg�lni, hogy a sz�m�t�g�p minden hardvereszk�ze - p�ld�ul a hangsz�r�k, a billenty�zet, az �ra - rendben m�k�dnek-e.";
    Agent_Speak(L_AboutProcess4_Text);

    var L_AboutProcess5_Text = "Ha a h�l�zatra szeretne kapcsol�dni, a program azt is megvizsg�lja, hogy a sz�m�t�g�p megfelel�en csatlakozik-e.";
    Agent_Speak(L_AboutProcess5_Text);


    var L_AboutProcess6_Text = "A m�sodik l�p�sben elolvassuk a %1 haszn�lati felt�teleit szab�lyoz� licencszerz�d�st.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess6_Text, g_ProductName));
    
    if (!window.external.get_RetailOOBE()) 
    {
    var L_AboutProcess7_Text = "Ha a sz�m�t�g�pen m�k�d�k�pes modem vagy h�l�zati kapcsolat is van, lehet�s�ge ny�lik majd arra, hogy regisztr�lja mag�t a Microsoft �s a(z) %1 nyilv�ntart�s�ban, hogy elk�ldhess�k �nnek a term�kfriss�t�sekre �s az �rdekl�d�s�re sz�mot tart� aj�nlatainkra vonatkoz� inform�ci�kat.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess7_Text, g_OEMNameStr));
    } 
    else 
    {    
    var L_AboutProcess7_Text = "Ha a sz�m�t�g�pen m�k�d�k�pes modem vagy h�l�zati kapcsolat is van, lehet�s�ge ny�lik majd arra, hogy regisztr�lja mag�t a Microsoft nyilv�ntart�s�ban, hogy elk�ldhess�k �nnek a term�kfriss�t�sekre �s az �rdekl�d�s�re sz�mot tart� aj�nlatainkra vonatkoz� inform�ci�kat.";
    Agent_Speak(L_AboutProcess7_Text);
    }       

    var L_AboutProcess8_Text = "Ellen�rizheti  a %1 eredetis�g�t is, �s meggy�z�dhet arr�l, hogy jogtiszta p�ld�nyt haszn�l-e.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess8_Text, g_ProductName));

    var L_AboutProcess9_Text = "A harmadik szakaszban, ha k�ri, seg�tek az internetkapcsolat l�trehoz�s�ban is.";
    Agent_Speak(L_AboutProcess9_Text); 

    var L_AboutProcess10_Text = "Ha �gy d�nt, hogy kihagyja ezt a l�p�st, tetsz�se szerinti id�pontban �n�ll�an l�trehozhatja az internetkapcsolatot.";
    Agent_Speak(L_AboutProcess10_Text);

    var L_AboutProcess11_Text = "A negyedik szakaszban abban seg�tek majd, hogy lehet�v� tegye a sz�m�t�g�p minden felhaszn�l�j�nak, hogy ig�nyeikhez igaz�thass�k a g�pet.";
    Agent_Speak(L_AboutProcess11_Text);

    var L_AboutProcess12_Text = "Ennyi az eg�sz.  Nem t�l bonyolult, �gy neki is foghatunk!";
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

    var L_AboutProcess13_Text = "A kezd�shez kattintson a Tov�bb gombra.";
    Agent_Speak(L_AboutProcess13_Text);
    
    Agent_Play("RestPose");
}


                                                       

function Agent_TimeZoneAddCommands() 
{
    var L_TimeZoneCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_TimeZoneCommand2_Text = "H&ogyan v�lasztom ki az id�z�n�t?";

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
        var L_TimeZoneMenuCommand3_Text = "Mit is jelent a &ny�ri id�sz�m�t�s?";

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
    var L_ExplainTimeZoneStep1_Text = "Adja meg, hogy melyik id�z�n�ban fogja haszn�lni a sz�m�t�g�pet, a Windows pedig annak megfelel�en �ll�tja be a sz�m�t�g�p �r�j�t.";
    Agent_Speak(L_ExplainTimeZoneStep1_Text);

    var L_ExplainTimeZoneStep2_Text = "Ha k�v�nja, a Windows automatikusan �t fogja �ll�tani az �r�t a ny�ri id�sz�m�t�s elej�n �s v�g�n.";
    Agent_Speak(L_ExplainTimeZoneStep2_Text);

    var L_ExplainTimeZoneStep3_Text = "Ez az utols� l�p�s, amely a hardvert �rinti.";
    Agent_Speak(L_ExplainTimeZoneStep3_Text);

    var L_ExplainTimeZoneStep4_Text = "A k�vetkez� l�p�sben megjelenik a licencszerz�d�s.";
    Agent_Speak(L_ExplainTimeZoneStep4_Text);
    
}

function Agent_OnTimeZoneCommand_SelectZone() 
{
    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone1_Text = "A list�ban az id�z�n�k greenwichi k�z�pid�h�z (GMT) k�pest sz�m�tott form�tumban jelennek meg, ut�nuk az elt�r�st m�nusz vagy plusz �r�ban kifejezve.";
    Agent_Speak(L_TellUserHowToSelectTimeZone1_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone2_Text = "Kattintson ide, vagy a billenty�zet TAB billenty�je seg�ts�g�vel l�pegessen el id�ig. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone2_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Right");

    var L_TellUserHowToSelectTimeZone3_Text = "Ezekre a kis nyilakra kattintva, vagy a billenty�zet megfelel� ny�lbillenty�it lenyomva keresse meg a k�v�nt id�z�n�t a list�ban.";
    Agent_Speak(L_TellUserHowToSelectTimeZone3_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone4_Text = "Amikor megjelenik a keresett id�z�na, kattintson r�, vagy nyomja le az Enter billenty�t.";
    Agent_Speak(L_TellUserHowToSelectTimeZone4_Text);

    var L_TellUserHowToSelectTimeZone5_Text = "Ezut�n a kiv�lasztott id�z�na kiemelve jelenik meg.";
    Agent_Speak(L_TellUserHowToSelectTimeZone5_Text);

    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserHowToSelectTimeZone6_Text = "Ha olyan ter�leten �l, ahol ny�ri id�sz�m�t�st haszn�lnak, mutasson ide az eg�rrel, majd kattint�ssal 'jel�lje be' ezt a lehet�s�get.";
    Agent_Speak(L_TellUserHowToSelectTimeZone6_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone7_Text = "Ezut�n a Windows �vente k�tszer automatikusan �t fogja �ll�tani az �r�t.";
    Agent_Speak(L_TellUserHowToSelectTimeZone7_Text);
    
}

function Agent_OnTimeZoneCommand_DaylightSavings() 
{
    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserAboutDaylightOption1_Text = "Egyes id�z�n�kban az �r�t az �v adott id�pontjaiban el�re-, illetve vissza�ll�tj�k, �gy igaz�tva az id�t a nappali vil�goss�g id�tartam�hoz.";
    Agent_Speak(L_TellUserAboutDaylightOption1_Text);
    
    Agent_Play("RestPose");

    var L_TellUserAboutDaylightOption2_Text = "Ha azt szeretn�, hogy a Windows a megfelel� id�pontban automatikusan �t�ll�tsa a sz�m�t�g�p �r�j�t, jel�lje be ezt a be�ll�t�st: h�zza ide az eg�rmutat�t, majd kattintson egyet.";
    Agent_Speak(L_TellUserAboutDaylightOption2_Text);

}



function Agent_OEMHWAddCommands() 
{
    var L_OEMHWMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_OEMHWMenuCommand2_Text = "H&onnan tudom, hogy m�k�dik-e a sz�m�t�g�p hangrendszere?";
    var L_OEMHWMenuCommand3_Text = "Mi v&an akkor, ha nem m�k�dik a hang?";
    var L_OEMHWMenuCommand4_Text = "Hogyan a&dom meg a v�laszt?";

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
    var L_OEMHWAboutThisScreen1_Text = "Ezen a k�perny�n gy�z�dhet meg a sz�m�t�g�p hangrendszer�nek m�k�d�k�pess�g�r�l.";
	  Agent_Speak(L_OEMHWAboutThisScreen1_Text);

    var L_OEMHWAboutThisScreen2_Text = "A hangrendszer a hangsz�r�kb�l, a sz�m�t�g�pben l�v� hangk�rty�b�l �s a hanglej�tsz�st lehet�v� tev� %1 szoftverb�l �ll.";
	  Agent_Speak(ApiObj.formatMessage(L_OEMHWAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnOEMHWHowDoIKnow() 
{
    var L_OEMHWHowDoIKnow1_Text = "Ha most egy hangot hall, akkor a rendszer m�k�dik.";
	  Agent_Speak(L_OEMHWHowDoIKnow1_Text);

    var L_OEMHWHowDoIKnow2_Text = "Ha nem hall hangot, el�sz�r n�zze meg, nincs-e t�ls�gosan halkra �ll�tva a hangsz�r� hangereje.";
	  Agent_Speak(L_OEMHWHowDoIKnow2_Text);

    var L_OEMHWHowDoIKnow3_Text = "Ha ez nem oldja meg a probl�m�t, m�s lehet�s�geket is megvizsg�lunk.";
	  Agent_Speak(L_OEMHWHowDoIKnow3_Text);
}

function Agent_OnOEMHWIsNotWorking() 
{
    var L_OEMHWIsNotWorking1_Text = "El�sz�r ellen�rizze, hogy be van-e kapcsolva a hangsz�r�.";
	  Agent_Speak(L_OEMHWIsNotWorking1_Text);
	
    var L_OEMHWIsNotWorking2_Text = "Sok hangsz�r�n jelz�f�ny vil�g�t, ha be van kapcsolva.";
	  Agent_Speak(L_OEMHWIsNotWorking2_Text);

    var L_OEMHWIsNotWorking3_Text = "Ezut�n ellen�rizze, hogy hallhat� hanger�re van-e �ll�tva.";
	  Agent_Speak(L_OEMHWIsNotWorking3_Text);

    var L_OEMHWIsNotWorking4_Text = "Ha m�g ezek ut�n sem hallatszik bel�le hang...";
	  Agent_Speak(L_OEMHWIsNotWorking4_Text);

    var L_OEMHWIsNotWorking5_Text = "Ellen�rizze, hogy a hangsz�r�k csatlakoztatva vannak-e az elektromos h�l�zathoz, illetve hogy helyesen vannak-e csatlakoztatva a sz�m�t�g�phez.";
	  Agent_Speak(L_OEMHWIsNotWorking5_Text);
	
	  var L_OEMHWIsNotWorking6_Text = "A sz�m�t�g�pen k�nny� �sszet�veszteni a mikrofon �s a hangsz�r� csatlakoz�j�t.";
	  Agent_Speak(L_OEMHWIsNotWorking6_Text);

    var L_OEMHWIsNotWorking7_Text = "Ha sztere� hangsz�r�k�szletet haszn�l, ellen�rizze, hogy �ssze vannak-e kapcsolva egym�ssal a hangsz�r�k.";
	  Agent_Speak(L_OEMHWIsNotWorking7_Text);

    var L_OEMHWIsNotWorking8_Text = "V�g�l, ha m�g mindig nem hall hangot, vegyen k�lcs�n egy m�sik sz�m�t�g�pr�l egy hangsz�r�k�szletet.";
	  Agent_Speak(L_OEMHWIsNotWorking8_Text);

    var L_OEMHWIsNotWorking9_Text = "Ha a k�lcs�nz�tt hangsz�r�k m�k�dnek, a saj�tjai pedig nem, akkor meg kell �ket jav�ttatnia, vagy �jakat kell v�s�rolnia.";
	  Agent_Speak(L_OEMHWIsNotWorking9_Text);
}

function Agent_OnOEMHWIndicateAnswer() 
{
	  Agent_GestureAtElement(g.document.all("Sound_Yes"), "Left");
    
    var L_OEMHWIndicateAnswer1_Text = "Egyszer�en vigye az eg�rmutat�t a v�lasz�t�l balra l�v� feh�r k�rbe,";
	  Agent_Speak(L_OEMHWIndicateAnswer1_Text);
    
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("radioNoSound"), "Left");

    var L_OEMHWIndicateAnswer2_Text = "�s kattintson egyet.";
	  Agent_Speak(L_OEMHWIndicateAnswer2_Text);
    
    Agent_Play("RestPose");

    var L_OEMHWIndicateAnswer3_Text = "Ha a billenty�zet seg�ts�g�vel szeretn� megadni a v�laszt, a TAB billenty� ism�telt lenyom�s�val l�pegessen a lapon addig, am�g egy halv�ny t�glalap nem jelenik meg a bejel�lni k�v�nt k�r k�r�l, majd nyomja meg a sz�k�z billenty�t.";
	  Agent_Speak(L_OEMHWIndicateAnswer3_Text);
}




function Agent_CompNameAddCommands() 
{
    var L_CompNameMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_CompNameMenuCommand2_Text = "H&ogyan tudom k�s�bb �tnevezni a sz�m�t�g�pet?";

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
    var L_CompNameAboutThisScreen1_Text = "Ezen a k�perny�n adhat nevet a sz�m�t�g�pnek.";
	  Agent_Speak(L_CompNameAboutThisScreen1_Text);

    var L_CompNameAboutThisScreen2_Text = "M�s felhaszn�l�k ez alapj�n azonos�thatj�k ezt a sz�m�t�g�pet, ha az h�l�zaton kereszt�l m�s sz�m�t�g�pekkel is �ssze van k�tve.";
	  Agent_Speak(L_CompNameAboutThisScreen2_Text);
}

function Agent_OnCompNameHowToRename() 
{
    var L_CompNameHowToRename1_Text = "Miut�n befejezte a Windows telep�t�s�t, kattintson a Start men� Vez�rl�pult parancs�ra.";
	  Agent_Speak(L_CompNameHowToRename1_Text);

    var L_CompNameHowToRename2_Text = "Kattintson a Teljes�tm�ny �s karbantart�s, majd a Rendszer ikonra, azut�n k�vesse a Sz�m�t�g�pn�v lapon tal�lhat� utas�t�sokat.";
	  Agent_Speak(L_CompNameHowToRename2_Text);

    var L_CompNameHowToRename3_Text = "Ha elfelejten� ezeket a l�p�seket, kattintson a Start men� S�g� �s t�mogat�s parancs�ra. Ott v�laszt kap k�rd�seire, �s m�s hasznos inform�ci�kat is megtudhat.";
	  Agent_Speak(L_CompNameHowToRename3_Text);
}




function Agent_SECURITYPASSAddCommands() 
{
    var L_SECURITYPASSMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_SECURITYPASSMenuCommand2_Text = "Mi &a legjobb m�dja a jelsz� megalkot�s�nak?";

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
    var L_SECURITYPASSAboutThisScreen1_Text = "Ezen a k�perny�n egy jelsz�t adhat meg, ha meg szeretn� akad�lyozni, hogy illet�ktelenek is hozz�f�rjenek ehhez a sz�m�t�g�phez.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen1_Text);

    var L_SECURITYPASSAboutThisScreen2_Text = "J�, ha tudja: ha ez a sz�m�t�g�p h�l�zaton kereszt�l m�s sz�m�t�g�pekkel is �ssze van k�tve, a \"Rendszergazda\" felhaszn�l�n�vvel �s �rv�nyes jelsz�val bejelentkez� felhaszn�l� az eg�sz h�l�zatot el tudja �rni.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen2_Text);
    
    var L_SECURITYPASSAboutThisScreen3_Text = "Ez�rt kifejezetten azt tan�csoljuk, hogy a sz�m�t�g�pet (ha van h�l�zat, akkor azt is) rendszergazdai jelsz� megk�vetel�s�vel v�dje meg.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen3_Text);
}

function Agent_OnSECURITYPASSBestWay() 
{
    var L_SECURITYPASSBestWay1_Text = "A jelszavak ny�jtotta biztons�got fokozza, ha a k�vetkez� elemek k�z�l legal�bb k�tf�l�t tartalmaznak: nagybet�k, kisbet�k, sz�mok.";
	  Agent_Speak(L_SECURITYPASSBestWay1_Text);

    var L_SECURITYPASSBestWay2_Text = "Min�l v�letlenszer�bb sorrendben k�vetik egym�st a karakterek, ann�l biztons�gosabb a jelsz�.";
	  Agent_Speak(L_SECURITYPASSBestWay2_Text);

    var L_SECURITYPASSBestWay3_Text = "A jelsz� ak�r 127 karakter hossz� is lehet.";
	  Agent_Speak(L_SECURITYPASSBestWay3_Text);
    
    var L_SECURITYPASSBestWay4_Text = "De ha olyan h�l�zaton haszn�lja a Windows rendszert, amelyen Windows 95 vagy Windows 98 rendszerrel m�k�d� sz�m�t�g�pek is vannak, �s azokr�l a g�pekr�l is be szeretne majd jelentkezni, c�lszer�, ha nem haszn�l 14 karaktern�l hosszabb jelszavakat.";
	  Agent_Speak(L_SECURITYPASSBestWay4_Text);
}



function Agent_JOINDOMAINAddCommands() 
{
    var L_JOINDOMAINMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_JOINDOMAINMenuCommand2_Text = "Mit j&elent a 'tartom�ny' sz�?";
    var L_JOINDOMAINMenuCommand3_Text = "H&ogyan csatlakozom tartom�nyhoz?"; 
    var L_JOINDOMAINMenuCommand4_Text = "Mi legyen a k�vetkez� &l�p�sem?";


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
    var L_JOINDOMAINAboutThisScreen1_Text = "Ezen a k�perny�n d�ntheti el, hogy tartom�ny tagj�v� k�v�nja-e tenni ezt a sz�m�t�g�pet.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen1_Text);

    var L_JOINDOMAINAboutThisScreen2_Text = "Ha a tartom�nyhoz val� csatlakoztat�s mellett d�nt, akkor be kell �rnia a tartom�ny nev�t.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen2_Text);
}

function Agent_OnJOINDOMAINDifference() 
{
    var L_JOINDOMAINDifference1_Text = "A tartom�ny egyetlen egys�gk�nt fel�gyelt sz�m�t�g�pek csoportja.";
    Agent_Speak(L_JOINDOMAINDifference1_Text);
    
    var L_JOINDOMAINDifference2_Text = "Egy v�llalat megteheti p�ld�ul, hogy a szegedi irod�j�ban l�v� �sszes sz�m�t�g�pet egyetlen tartom�nyba foglalja, hogy ugyanazokkal a hozz�f�r�si jogokkal rendelkezzenek �s ugyanazokhoz a nyomtat�khoz csatlakozhassanak.";
    Agent_Speak(L_JOINDOMAINDifference2_Text);

    var L_JOINDOMAINDifference3_Text = "Ha nem tudja, hogy melyiket v�lassza, kattintson a Nem lehet�s�gre, majd a Tov�bb gombra.";
    Agent_Speak(L_JOINDOMAINDifference3_Text);
}

function Agent_OnJOINDOMAINHowToName() 
{
 	  Agent_GestureAtElement(g.document.all("radioYesDomain"), "Left");
 
    var L_JOINDOMAINHowToName1_Text = "Ha megadja, hogy tartom�nyhoz szeretne csatlakozni,";
    Agent_Speak(L_JOINDOMAINHowToName1_Text);
      
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("textboxDomain"), "Left");
  
    var L_JOINDOMAINHowToName2_Text = "annak nev�t be�rhatja a lehet�s�g alatti mez�be.";
    Agent_Speak(L_JOINDOMAINHowToName2_Text);
      
    Agent_Play("RestPose");
  
    var L_JOINDOMAINHowToName3_Text = "Ha nem a tartom�nyhoz val� csatlakoz�s lehet�s�g�t v�lasztotta, nem �rhat be nevet.";
    Agent_Speak(L_JOINDOMAINHowToName3_Text);
  
    var L_JOINDOMAINHowToName4_Text = "Ez�rt a mez� sz�rke marad, ami azt jelzi, hogy mindaddig nem lehet bele �rni, am�g a tartom�nyhoz val� csatlakoz�s lehet�s�g�t nem v�lasztja.";
    Agent_Speak(L_JOINDOMAINHowToName4_Text);
  
    var L_JOINDOMAINHowToName5_Text = "Ha a sz�m�t�g�pet tartom�nyhoz csatlakoztatja, a h�l�zati rendszergazd�t�l k�rdezheti meg a tartom�nynevet.";
    Agent_Speak(L_JOINDOMAINHowToName5_Text);
  
    var L_JOINDOMAINHowToName6_Text = "Ha nem csatlakozik tartom�nyhoz, nem kell nevet megadnia.";
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
    
    var L_JOINDOMAINWhatToDoNext1_Text = "Miut�n v�lasztott, kattintson a Tov�bb gombra.";
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
    
    var L_JOINDOMAINWhatToDoNext2_Text = "Az el�z� k�perny�re val� visszat�r�st is v�laszthatja, ehhez kattintson a Vissza gombra.";
    Agent_Speak(L_JOINDOMAINWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}




function Agent_JNDOM_AAddCommands() 
{
    var L_JNDOMAMenuCommand1_Text = "Szeretn�k t�bbet megtudni err�l a &l�p�sr�l";
    var L_JNDOMAMenuCommand2_Text = "Hogyan kell be�rni a felhaszn�l�nevet �s a &jelsz�t?";
    var L_JNDOMAMenuCommand3_Text = "Mit j&elent a 'tartom�ny' kifejez�s?";
    var L_JNDOMAMenuCommand4_Text = "Mi legyen a k�vetkez� &l�p�sem?";
    
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
    var L_JNDOM_A_AboutThisStep1_Text = "Ezen a k�perny�n azt a szem�lyt adja meg, akinek jog�ban �ll csatlakoztatnia ezt a sz�m�t�g�pet a tartom�nyhoz.";
  	Agent_Speak(L_JNDOM_A_AboutThisStep1_Text);
}

function Agent_OnJNDOM_AHowToEnter() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_HowToEnter1_Text = "Az itt be�rt n�vnek egyedinek kell lennie a tartom�ny t�bbi felhaszn�l�neve k�z�tt.";
    Agent_Speak(L_JNDOM_A_HowToEnter1_Text);
      
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_HowToEnter2_Text = "Az ide be�rt jelsz�nak meg kell felelnie az adott felhaszn�l�i fi�khoz tartoz� jelsz�nak.";
    Agent_Speak(L_JNDOM_A_HowToEnter2_Text);
      
    Agent_Play("RestPose");
    
    var L_JNDOM_A_HowToEnter3_Text = "Ha nem tudja, milyen felhaszn�l�nevet �s jelsz�t haszn�ljon, forduljon a h�l�zati rendszergazd�hoz.";
    Agent_Speak(L_JNDOM_A_HowToEnter3_Text);
}

function Agent_OnJNDOM_AWhatIsDomain() 
{
    var L_JNDOM_A_WhatIsDomain1_Text = "A tartom�ny egyetlen egys�gk�nt fel�gyelt sz�m�t�g�pek csoportja.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain1_Text);
  	
    var L_JNDOM_A_WhatIsDomain2_Text = "Egy v�llalat megteheti p�ld�ul, hogy a szegedi irod�j�ban l�v� �sszes sz�m�t�g�pet egyetlen tartom�nyba foglalja, hogy ugyanazokkal a hozz�f�r�si jogokkal rendelkezzenek �s ugyanazokhoz a nyomtat�khoz csatlakozhassanak.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain2_Text);
      
    Agent_Play("RestPose");		
}

function Agent_OnJNDOM_AWhatToDoNext() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_WhatToDoNext1_Text = "Miut�n be�rta ide a felhaszn�l�nevet,";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext1_Text);
      
    Agent_Play("RestPose");		
  	
    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_WhatToDoNext2_Text = "illetve ide a felhaszn�l� jelszav�t,";
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
    
    var L_JNDOM_A_WhatToDoNext3_Text = "kattintson a Tov�bb gombra.";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext3_Text);
      
    Agent_Play("RestPose");		
}



function Agent_ActivationAddCommands() 
{
    var L_ActivationMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_ActivationMenuCommand2_Text = "Szeretn�k t�&bbet megtudni az aktiv�l�sr�l";
    var L_ActivationMenuCommand3_Text = "Hogyan tudom &k�s�bb elv�gezni az aktiv�l�st?";
    var L_ActivationMenuCommand4_Text = "&Hogyan aktiv�ljam a term�ket, ha nincs internetkapcsolat?";
    var L_ActivationMenuCommand5_Text = "Mi t�rt�nik &akkor, ha nem v�gzem el az aktiv�l�st?";
    var L_ActivationMenuCommand6_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
    
    var L_ActivationAboutThisScreen1_Text = "Ezen a k�perny�n d�ntheti el, hogy most vagy k�s�bb aktiv�lja-e a %1 term�ket .";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutThisScreen1_Text, g_ProductName));
    
    var L_ActivationAboutThisScreen2_Text = "Ha k�s�bb szeretn� aktiv�lni, a Start men�b�l ind�thatja el a Term�kaktiv�l�s var�zsl�t.";
    Agent_Speak(L_ActivationAboutThisScreen2_Text);
    
    var L_ActivationAboutThisScreen3_Text = "N�h�ny naponta eml�keztetni fogjuk arra, hogy aktiv�lja a Windows rendszert, hogy folytathassa haszn�lat�t.";
    Agent_Speak(L_ActivationAboutThisScreen3_Text);
}

function Agent_OnActivationAboutActivation() 
{
    var L_ActivationAboutActivation1_Text = "Amikor �j bankk�rty�t vagy hitelk�rty�t kap a bankj�t�l, �ltal�ban megk�ri a bank, hogy 'aktiv�lja' a k�rty�t, miel�tt elkezdhetn� haszn�lni.";
    Agent_Speak(L_ActivationAboutActivation1_Text);
    
    var L_ActivationAboutActivation2_Text = "Az aktiv�l�s megv�di �nt �s a bankot a k�rtya illet�ktelen felhaszn�l�s�t�l.";
    Agent_Speak(L_ActivationAboutActivation2_Text);
    
    var L_ActivationAboutActivation3_Text = "A(z) %1 aktiv�l�sa ugyan�gy m�k�dik, azzal a k�l�nbs�ggel, hogy a(z) %2 term�ket haszn�lhatja a megadott aktiv�l�si id�szak lej�rat�ig, csak azut�n kell aktiv�lnia.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationHowToActivateLater() 
{
    var L_ActivationHowToActivateLater1_Text = "Ha most �gy d�nt, hogy nem v�gzi el az aktiv�l�st, n�h�ny naponta egy apr� eml�keztet� fog megjelenni a(z) %1 asztalon.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationHowToActivateLater1_Text, g_ProductName));
    
    var L_ActivationHowToActivateLater2_Text = "Ekkor a Start men� A Windows aktiv�l�sa parancs�val ind�thatja el a Term�kaktiv�l�s var�zsl�t.";
    Agent_Speak(L_ActivationHowToActivateLater2_Text);
    
    var L_ActivationHowToActivateLater3_Text = "Ha elfelejti ezeket a l�p�seket, nyissa meg a Start men�t, majd kattintson a S�g� �s t�mogat�s parancsra. Sok m�s �rt�kes inform�ci�n k�v�l a k�rd�seire is meg fogja tal�lni a v�laszt.";
    Agent_Speak(L_ActivationHowToActivateLater3_Text);
}

function Agent_OnActivationHowToActivateUnconnected() 
{
    Agent_GestureAtElement(g.rb_act_2, "Left");
    	
    var L_ActivationHowToActivateUnconnected1_Text = "Egyszer�en v�lassza a \"Nem\" v�laszt.";
    Agent_Speak(L_ActivationHowToActivateUnconnected1_Text);
    
    Agent_Play("RestPose");
    
    var L_ActivationHowToActivateUnconnected2_Text = "Ha befejezte a Windows telep�t�st, a Start men� A Windows aktiv�l�sa parancs�val ind�thatja el a Term�kaktiv�l�s var�zsl�t.";
    Agent_Speak(L_ActivationHowToActivateUnconnected2_Text);
    
    var L_ActivationHowToActivateUnconnected3_Text = "A var�zsl� megjelen�ti azt a telefonsz�mot, amelyen telefonon kereszt�l aktiv�lhatja a Windows rendszert.";
    Agent_Speak(L_ActivationHowToActivateUnconnected3_Text);
}

function Agent_OnActivationWhatHappensNoActivate() 
{
    var L_ActivationWhatHappensNoActivate1_Text = "Az aktiv�l�si id�szak lej�rt�ig tov�bb haszn�lhatja a %1 term�ket.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate1_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate2_Text = "�m ha eltelik ez az id�szak, csak akkor haszn�lhatja tov�bb a(z) %1 term�ket, ha aktiv�lja.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate2_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate3_Text = "Az aktiv�l�si id�szak lej�rta ut�n a %1 nem haszn�lhat� tov�bb.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate3_Text, g_ProductName));
}

function Agent_OnActivationWhatToDoNext() 
{
    Agent_GestureAtElement(g.act_spn1, "Left");
    
    var L_ActivationWhatToDoNext1_Text = "Miut�n kiv�lasztotta a v�laszt a k�rd�sre,";
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
            
    var L_ActivationWhatToDoNext2_Text = "kattintson a Tov�bb gombra.";
    Agent_Speak(L_ActivationWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");	
}



function Agent_ActivationErrorAddCommands() 
{
    var L_ActivationErrorMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_ActivationErrorMenuCommand2_Text = "Szeretn�k t�&bbet megtudni az aktiv�l�sr�l";
    var L_ActivationErrorMenuCommand3_Text = "Hogyan tudom &k�s�bb elv�gezni az aktiv�l�st?";
    var L_ActivationErrorMenuCommand4_Text = "&Hogyan aktiv�ljam a term�ket, ha nincs internetkapcsolat?";
    var L_ActivationErrorMenuCommand5_Text = "Mi t�rt�nik &akkor, ha nem v�gzem el az aktiv�l�st?";


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
    var L_ActivationErrorAboutThisScreen1_Text = "Ez a k�perny� az�rt jelent meg, mert nem siker�lt el�rnie az aktiv�l�si k�zpontunkat.";
	Agent_Speak(L_ActivationErrorAboutThisScreen1_Text);
	
    var L_ActivationErrorAboutThisScreen2_Text = "A Term�kaktiv�l�s var�zsl� futtat�s�hoz a %1 telep�t�se ut�n kattintson a Start men� A Windows aktiv�l�sa parancs�ra.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnActivationErrorAboutActivation() 
{
    var L_ActivationErrorAboutActivation1_Text = "Amikor �j bankk�rty�t vagy hitelk�rty�t kap a bankj�t�l, �ltal�ban megk�ri a bank, hogy 'aktiv�lja' a k�rty�t, miel�tt elkezdhetn� haszn�lni.";
	Agent_Speak(L_ActivationErrorAboutActivation1_Text);
	
    var L_ActivationErrorAboutActivation2_Text = "Az aktiv�l�s megv�di �nt �s a bankot a k�rtya illet�ktelen felhaszn�l�s�t�l.";
	Agent_Speak(L_ActivationErrorAboutActivation2_Text);
	
    var L_ActivationErrorAboutActivation3_Text = "A %1 aktiv�l�sa ugyan�gy t�rt�nik, azzal a k�l�nbs�ggel, hogy az aktiv�l�st megel�z�en meghat�rozott sz�m� napon kereszt�l haszn�lhatja a %2  term�ket.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationErrorHowToActivateLater() 
{
    var L_ActivationErrorHowToActivateLater1_Text = "Ha most �gy d�nt, hogy nem v�gzi el az aktiv�l�st, n�h�ny naponta egy apr� eml�keztet� fog megjelenni a(z) %1 asztalon.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationErrorHowToActivateLater2_Text = "Ekkor a Start men� A Windows aktiv�l�sa parancs�val ind�thatja el a Term�kaktiv�l�s var�zsl�t.";
	Agent_Speak(L_ActivationErrorHowToActivateLater2_Text);
	
    var L_ActivationErrorHowToActivateLater3_Text = "Ha elfelejti ezeket a l�p�seket, nyissa meg a Start men�t, majd kattintson a S�g� �s t�mogat�s parancsra. Sok m�s �rt�kes inform�ci�n k�v�l a k�rd�seire is meg fogja tal�lni a v�laszt.";
	Agent_Speak(L_ActivationErrorHowToActivateLater3_Text);
}

function Agent_OnActivationErrorHowToActivateUnconnected() 
{
    var L_ActivationErrorHowToActivateUnconnected1_Text = "Ha befejezte a Windows telep�t�st, a Start men� A Windows aktiv�l�sa parancs�val ind�thatja el a Term�kaktiv�l�s var�zsl�t.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected1_Text);
	
    var L_ActivationErrorHowToActivateUnconnected2_Text = "A var�zsl� megjelen�ti azt a telefonsz�mot, amelyen telefonon kereszt�l aktiv�lhatja a Windows rendszert.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected2_Text);
}

function Agent_OnActivationErrorWhatHappensNoActivate() 
{
    var L_ActivationErrorWhatHappensNoActivate1_Text = "Az aktiv�l�si id�szak lej�rt�ig tov�bb haszn�lhatja a %1 term�ket.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate2_Text = "�m ha eltelik ez az id�szak, csak akkor haszn�lhatja tov�bb a(z) %1 term�ket, ha aktiv�lja.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate3_Text = "Az aktiv�l�si id�szak lej�rta ut�n a %1 nem haszn�lhat� tov�bb.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_ActivationPrivacyPolicyAddCommands() 
{
    var L_ActivationPrivacyPolicyMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_ActivationPrivacyPolicyMenuCommand2_Text = "Szeretn�k t�&bbet megtudni az aktiv�l�sr�l";
    var L_ActivationPrivacyPolicyMenuCommand3_Text = "Hogyan tudom &k�s�bb elv�gezni az aktiv�l�st?";
    var L_ActivationPrivacyPolicyMenuCommand4_Text = "&Hogyan aktiv�ljam a term�ket, ha nincs internetkapcsolat?";
    var L_ActivationPrivacyPolicyMenuCommand5_Text = "Mi t�rt�nik &akkor, ha nem v�gzem el az aktiv�l�st?";


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
    var L_ActivationPrivacyPolicyAboutThisScreen1_Text = "Ezen a lapon t�j�koztatjuk arr�l, hogyan biztos�tjuk adatainak titkoss�g�t a %1 aktiv�l�sakor.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutThisScreen1_Text, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyAboutActivation() 
{
    var L_ActivationPrivacyPolicyAboutActivation1_Text = "Amikor �j bankk�rty�t vagy hitelk�rty�t kap a bankj�t�l, �ltal�ban megk�ri a bank, hogy 'aktiv�lja' a k�rty�t, miel�tt elkezdhetn� haszn�lni.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation1_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation2_Text = "Az aktiv�l�s megv�di �nt �s a bankot a k�rtya illet�ktelen felhaszn�l�s�t�l.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation2_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation3_Text = "A(z) %1 aktiv�l�sa ugyan�gy m�k�dik, azzal a k�l�nbs�ggel, hogy a(z) %2 term�ket haszn�lhatja a megadott aktiv�l�si id�szak lej�rat�ig, csak azut�n kell aktiv�lnia.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyHowToActivateLater() 
{
    var L_ActivationPrivacyPolicyHowToActivateLater1_Text = "Ha most �gy d�nt, hogy nem v�gzi el az aktiv�l�st, n�h�ny naponta egy apr� eml�keztet� fog megjelenni a(z) %1 asztalon.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyHowToActivateLater2_Text = "Ekkor a Start men� A Windows aktiv�l�sa parancs�val ind�thatja el a Term�kaktiv�l�s var�zsl�t.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater2_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateLater3_Text = "Ha elfelejti ezeket a l�p�seket, nyissa meg a Start men�t, majd kattintson a S�g� �s t�mogat�s parancsra. Sok m�s �rt�kes inform�ci�n k�v�l a k�rd�seire is meg fogja tal�lni a v�laszt.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater3_Text);
}

function Agent_OnActivationPrivacyPolicyHowToActivateUnconnected() 
{
    var L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text = "Ha befejezte a Windows telep�t�st, a Start men� A Windows aktiv�l�sa parancs�val ind�thatja el a Term�kaktiv�l�s var�zsl�t.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text = "A var�zsl� megjelen�ti azt a telefonsz�mot, amelyen telefonon kereszt�l aktiv�lhatja a Windows rendszert.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text);
}

function Agent_OnActivationPrivacyPolicyWhatHappensNoActivate() 
{
    var L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text = "A(z) ActivationPrivacyPolicy lej�rt�ig tov�bb haszn�lhatja a %1 term�ket.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text = "�m ha eltelik ez az id�szak, csak akkor haszn�lhatja tov�bb a(z) %1 term�ket, ha aktiv�lja.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text = "A(z) ActivationPrivacyPolicy id�szak lej�rta ut�n a %1 nem haszn�lhat� tov�bb.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_DSLMAINAddCommands() 
{
    var L_DSLMAINMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_DSLMAINMenuCommand2_Text = "&N�h�ny ok, ami�rt �rdemes felhaszn�l�nevet �s jelsz�t k�rni";
    var L_DSLMAINMenuCommand3_Text = "Mi legyen a k�vetkez� &l�p�sem?";
    
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
    var L_DSLMAINAboutThisScreen1_Text = "Ezen a k�perny�n d�ntheti el, hogy sz�ks�g lesz-e felhaszn�l�n�vre �s jelsz�ra ahhoz, hogy err�l a sz�m�t�g�pr�l el lehessen �rni az internetet.";
	Agent_Speak(L_DSLMAINAboutThisScreen1_Text);
}

function Agent_OnDSLMAINSomeReasons() 
{
    var L_DSLMAINHowToMoveOn1_Text = "Ha �n lesz a sz�m�t�g�p egyetlen felhaszn�l�ja, a legjobb, ha hagyja, hogy a %1 automatikusan t�rolja a felhaszn�l�nev�t �s a jelszav�t.";
	Agent_Speak(ApiObj.FormatMessage(L_DSLMAINHowToMoveOn1_Text, g_ProductName));
	
    var L_DSLMAINHowToMoveOn2_Text = "�gy nem kell mindig �jra be�rnia ezeket az adatokat, amikor csatlakozni k�v�n az internethez.";
	Agent_Speak(L_DSLMAINHowToMoveOn2_Text);
	
    var L_DSLMAINHowToMoveOn3_Text = "De ha m�sokkal k�z�sen haszn�lja ezt a sz�m�t�g�pet, �m nem szeretn� vel�k megosztani az internetfi�kj�t, felhaszn�l�n�vvel �s jelsz�val v�dheti meg a fi�kot.";
	Agent_Speak(L_DSLMAINHowToMoveOn3_Text);
	
    var L_DSLMAINHowToMoveOn4_Text = "El�fordulhat p�ld�ul, hogy a g�pet a gyermekeivel k�z�sen haszn�lja, akik j�tszanak rajta.";
	Agent_Speak(L_DSLMAINHowToMoveOn4_Text);
	
    var L_DSLMAINHowToMoveOn5_Text = "Viszont lehet, hogy meg szeretn� akad�lyozni, hogy az �n enged�lye n�lk�l internetezhessenek.";
	Agent_Speak(L_DSLMAINHowToMoveOn5_Text);		
}

function Agent_OnDSLMAINWhatToDoNext()
{	
	Agent_GestureAtElement(g.dslmain_TitleText, "Left");
	
    var L_DSLMAINWhatToDoNext1_Text = "Miut�n kiv�lasztotta a v�laszt a k�rd�sre,";
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
	
	var L_DSLMAINWhatToDoNext2_Text = "kattintson a Tov�bb gombra.";
	Agent_Speak(L_DSLMAINWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");
}



function Agent_DSL_AAddCommands() 
{
    var L_DSLAMenuCommand1_Text = "Szeretn�k t�bbet megtudni err�l a &l�p�sr�l";
    var L_DSLAMenuCommand2_Text = "Tulajdonk�ppen mi is az &internet?";
    var L_DSLAMenuCommand3_Text = "Mire van sz�ks�gem az internetre &csatlakoz�shoz?";
    var L_DSLAMenuCommand4_Text = "Tudnival�k az int&ernet-el�fizet�ssel kapcsolatban";

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
    var L_DSL_A_AboutThisStep1_Text = "Ezen a k�perny�n �ll�thatja be az internetszolg�ltat�n�l megl�v� fi�kja adatait az internetre val� csatlakoz�shoz.";
	Agent_Speak(L_DSL_A_AboutThisStep1_Text);
}

function Agent_DSL_AWhatIsInternet() 
{
    var L_DSL_A_WhatIsInternet1_Text = "Az internet sz�m�t�g�pek vil�gm�ret� h�l�zata.";
	Agent_Speak(L_DSL_A_WhatIsInternet1_Text);
	
    var L_DSL_A_WhatIsInternet2_Text = "Ha van internet-hozz�f�r�se, sokmilli� adatforr�s (p�ld�ul iskol�k, korm�nyzati szervek, v�llalatok �s mag�nszem�lyek) nyilv�nos inform�ci�ihoz f�rhet hozz�.";
	Agent_Speak(L_DSL_A_WhatIsInternet2_Text);
	
    var L_DSL_A_WhatIsInternet3_Text = "Webnek a hivatkoz�sok seg�ts�g�vel t�rt�n� internetb�ng�sz�sre szolg�l� rendszert nevezz�k.";
	Agent_Speak(L_DSL_A_WhatIsInternet3_Text);
	
    var L_DSL_A_WhatIsInternet4_Text = "A hivatkoz�sok olyan sz�vegr�szek vagy k�pek, amelyekre kattintva egy m�sik weblap vagy ugyanannak a lapnak m�s r�sze jelenik meg, vagy m�s m�velet hajt�dik v�gre, p�ld�ul elindul egy program.";
	Agent_Speak(L_DSL_A_WhatIsInternet4_Text);
	
    var L_DSL_A_WhatIsInternet5_Text = "A weben val� navig�l�shoz webb�ng�sz�re van sz�ks�g, amely az interneten tal�lhat� sz�veges, k�pes, hangos �s digit�lis mozg�k�pes inform�ci�k megjelen�t�s�re k�pes program.";
	Agent_Speak(L_DSL_A_WhatIsInternet5_Text);
	
    var L_DSL_A_WhatIsInternet6_Text = "A Microsoft k�tf�le webb�ng�sz�t k�n�l:";
	Agent_Speak(L_DSL_A_WhatIsInternet6_Text);
	
    var L_DSL_A_WhatIsInternet7_Text = "Az MSN Explorer, amely kezd� �s otthoni felhaszn�l�k sz�m�ra nagyszer�, valamint az Internet Explorer.";
	Agent_Speak(L_DSL_A_WhatIsInternet7_Text);
}

function Agent_DSL_ANeedToConnect() 
{	
    var L_DSL_A_NeedToConnect1_Text = "Az internetcsatlakoz�shoz csup�n h�rom dologra van sz�ks�ge.";
	Agent_Speak(L_DSL_A_NeedToConnect1_Text);	
	
    var L_DSL_A_NeedToConnect2_Text = "El�sz�r is kell egy sz�m�t�g�p, ami m�r megvan.";
	Agent_Speak(L_DSL_A_NeedToConnect2_Text);
	
    var L_DSL_A_NeedToConnect3_Text = "M�sodszor kell egy internetszolg�ltat�.";
	Agent_Speak(L_DSL_A_NeedToConnect3_Text);
	
    var L_DSL_A_NeedToConnect4_Text = "Az internetszolg�ltat� internetszolg�ltat�st, m�s n�ven hozz�f�r�st ny�jt, ugyan�gy, ahogyan a telefont�rsas�gok telefonszolg�ltat�st ny�jtanak.";
	Agent_Speak(L_DSL_A_NeedToConnect4_Text);
	
    var L_DSL_A_NeedToConnect5_Text = "Amikor ahhoz a r�szhez �r�nk, amely sor�n felk�sz�theti a sz�m�t�g�pet az internet el�r�s�re, seg�tek majd abban, hogy internetszolg�ltat�t tal�ljon mag�nak, ha eddig m�g nem tal�lt volna.";
	Agent_Speak(L_DSL_A_NeedToConnect5_Text);
	
    var L_DSL_A_NeedToConnect6_Text = "Harmadszor egy olyan eszk�zre van sz�ks�ge, amely l�trehozza az �n sz�m�t�g�pe �s az internetszolg�ltat� k�z�tti fizikai �sszek�ttet�st.";
	Agent_Speak(L_DSL_A_NeedToConnect6_Text);
	
    var L_DSL_A_NeedToConnect7_Text = "Ez ennek a k�perny�nek a c�lja.";
	Agent_Speak(L_DSL_A_NeedToConnect7_Text);
}

function Agent_DSL_AInternetSignup() 
{
    var L_DSL_A_AboutThisScreen1_Text = "Ha m�r van internetfi�kja, az internetszolg�ltat�t�l m�r megkapta ezeket az adatokat.";
	Agent_Speak(L_DSL_A_AboutThisScreen1_Text);
	
    var L_DSL_A_AboutThisScreen2_Text = "Nem kell �j internetfi�kot l�tes�tenie puszt�n az�rt, mert �j a sz�m�t�g�pe.";
	Agent_Speak(L_DSL_A_AboutThisScreen2_Text);
	
    var L_DSL_A_AboutThisScreen3_Text = "Haszn�lhatja pontosan ugyanazokat a fi�kadatokat, mint amelyeket a r�gi sz�m�t�g�p�n haszn�lt.";
	Agent_Speak(L_DSL_A_AboutThisScreen3_Text);
	
    var L_DSL_A_AboutThisScreen4_Text = "Ha m�g sosem kapcsol�dott saj�t sz�m�t�g�p�vel az internethez, lehet, hogy ennek a sz�m�t�g�pnek a megv�s�rl�sakor kapta meg az internetre vonatkoz� adatokat.";
	Agent_Speak(L_DSL_A_AboutThisScreen4_Text);
	
    var L_DSL_A_AboutThisScreen5_Text = "Ha a keresked�t�l kapott egy pap�rt, amelyen egy felhaszn�l�n�v, jelsz� �s az internetszolg�ltat� neve tal�lhat�, akkor azokat az adatokat �rja be ezen a k�perny�n.";
	Agent_Speak(L_DSL_A_AboutThisScreen5_Text);
}



function Agent_DSL_BAddCommands() 
{

    var L_DSL_B_MenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_DSL_B_MenuCommand2_Text = "Mit jelent &az IP?";
    var L_DSL_B_MenuCommand3_Text = "Mit is jelent a &DNS?";
    var L_DSL_B_MenuCommand4_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
    var L_DSL_B_AboutThisScreen1_Text = "Az utols� k�perny�n azt k�z�lte vel�nk, hogy az internetfi�kja adatainak megad�s�val fog kapcsol�dni az internethez.";
	Agent_Speak(L_DSL_B_AboutThisScreen1_Text);

    var L_DSL_B_AboutThisScreen2_Text = "Ezen a k�perny�n azt kell megadnia, hogy hogyan fog ez a sz�m�t�g�p fizikai kapcsolatot l�tes�teni az internettel.";
	Agent_Speak(L_DSL_B_AboutThisScreen2_Text);
}

function Agent_OnDSL_BWhatIsIP() 
{
    var L_DSL_B_WhatIsIP1_Text = "Az internethez kapcsol�d� mindegyik sz�m�t�g�nek van IP-c�me, amely egy egyedi sz�m, ezzel azonos�tj�k egym�st a sz�m�t�g�pek az interneten.";
	Agent_Speak(L_DSL_B_WhatIsIP1_Text);

    var L_DSL_B_WhatIsIP2_Text = "�ltal�ban az internetszolg�ltat� automatikusan kioszt egy IP-c�met a sz�m�t�g�p r�sz�re, amikor kapcsol�dik a szolg�ltat� rendszer�hez.";
	Agent_Speak(L_DSL_B_WhatIsIP2_Text);

    var L_DSL_B_WhatIsIP3_Text = "Ilyen esetben viszont be kell �rnia az IP-c�met.";
	Agent_Speak(L_DSL_B_WhatIsIP3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_staticip, "Left");
	
	var L_DSL_B_WhatIsIP4_Text = "Az ide be�rand� IP-c�met az internetszolg�ltat�j�t�l kaphatja meg.";
	Agent_Speak(L_DSL_B_WhatIsIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnDSL_BWhatIsDNS() 
{
    var L_DSL_B_WhatIsDNS1_Text = "Az internetc�mek felkutat�s�hoz a sz�m�t�g�pnek egy tartom�nyn�v-kiszolg�l�hoz (DNS) kell kapcsol�dnia, amely IP-c�meket rendel az interneten l�v� sz�m�t�g�pekhez.";
	Agent_Speak(L_DSL_B_WhatIsDNS1_Text);

    var L_DSL_B_WhatIsDNS2_Text = "A legt�bb esetben az internetszolg�ltat� automatikusan kiosztja a DNS-c�met.";
	Agent_Speak(L_DSL_B_WhatIsDNS2_Text);

    var L_DSL_B_WhatIsDNS3_Text = "Az internetszolg�ltat� megk�veteli, hogy be�ll�tsa a sz�m�t�g�p DNS-c�m�t.";
	Agent_Speak(L_DSL_B_WhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_prefdns, "Left");

    var L_DSL_B_WhatIsDNS4_Text = "Az ide be�rand� els�dleges DNS-kiszolg�l� adatait az internetszolg�ltat�j�t�l kaphatja meg,";
	Agent_Speak(L_DSL_B_WhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.dsl_lbl_altdns, "Left");

    var L_DSL_B_WhatIsDNS5_Text = "csak�gy, mint az els�dleges DNS-kiszolg�l� el�rhetetlens�ge eset�n haszn�lhat� m�sodlagos DNS-kiszolg�l��t.";
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
	
    var L_DSL_B_WhatToDoNext1_Text = "Kattintson a Tov�bb gombra a folytat�shoz.";
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

    var L_DSL_B_WhatToDoNext2_Text = "Azt is megteheti, hogy visszat�r az el�z� k�perny�re. Ehhez kattintson a Vissza gombra.";
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

    var L_DSL_B_WhatToDoNext3_Text = "Vagy ha meggondolta volna mag�t, a \"Kihagy�s\" gombra kattintva internet-hozz�f�r�s be�ll�t�sa n�lk�l l�phet tov�bb.";
	Agent_Speak(L_DSL_B_WhatToDoNext3_Text);
    
    Agent_Play("RestPose");	
}



function Agent_ICONNECTAddCommands() 
{

    var L_ICONNECTMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_ICONNECTMenuCommand2_Text = "Mit is jelent a statikus &IP-c�m?";
    var L_ICONNECTMenuCommand3_Text = "Mit is jelent a &DNS?";
    var L_ICONNECTMenuCommand4_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
    var L_ICONNECTAboutThisScreen1_Text = "Az utols� k�perny�n azt k�z�lte vel�nk, hogy az internetfi�kja adatainak megad�s�val fog kapcsol�dni az internethez.";
	Agent_Speak(L_ICONNECTAboutThisScreen1_Text);

    var L_ICONNECTAboutThisScreen2_Text = "Ezen a k�perny�n azt kell megadnia, hogy hogyan fog ez a sz�m�t�g�p fizikai kapcsolatot l�tes�teni az internettel.";
	Agent_Speak(L_ICONNECTAboutThisScreen2_Text);
}

function Agent_OnICONNECTWhatIsStaticIP() 
{
    var L_ICONNECTWhatIsStaticIP1_Text = "Az internethez kapcsol�d� mindegyik sz�m�t�g�nek van IP-c�me, amely egy egyedi sz�m, ezzel azonos�tj�k egym�st a sz�m�t�g�pek az interneten.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP1_Text);

    var L_ICONNECTWhatIsStaticIP2_Text = "�ltal�ban az internetszolg�ltat� automatikusan kioszt egy IP-c�met a sz�m�t�g�p r�sz�re, amikor kapcsol�dik a szolg�ltat� rendszer�hez.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP2_Text);

    var L_ICONNECTWhatIsStaticIP3_Text = "Ilyen esetben viszont be kell �rnia az IP-c�met.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_staticIP, "Left");
	
	var L_ICONNECTWhatIsStaticIP4_Text = "Az ide be�rand� IP-c�met az internetszolg�ltat�j�t�l kaphatja meg.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnICONNECTWhatIsDNS() 
{
    var L_ICONNECTWhatIsDNS1_Text = "Az internetc�mek felkutat�s�hoz a sz�m�t�g�pnek egy tartom�nyn�v-kiszolg�l�hoz (DNS) kell kapcsol�dnia, amely IP-c�meket rendel az interneten l�v� sz�m�t�g�pekhez.";
	Agent_Speak(L_ICONNECTWhatIsDNS1_Text);

    var L_ICONNECTWhatIsDNS2_Text = "A legt�bb esetben az internetszolg�ltat� automatikusan kiosztja a DNS-c�met.";
	Agent_Speak(L_ICONNECTWhatIsDNS2_Text);

    var L_ICONNECTWhatIsDNS3_Text = "Az internetszolg�ltat� megk�veteli, hogy be�ll�tsa a sz�m�t�g�p DNS-c�m�t.";
	Agent_Speak(L_ICONNECTWhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_prefrDNS, "Left");

    var L_ICONNECTWhatIsDNS4_Text = "Az ide be�rand� els�dleges DNS-kiszolg�l� adatait az internetszolg�ltat�j�t�l kaphatja meg,";
	Agent_Speak(L_ICONNECTWhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.iconnect_spn_alterDNS, "Left");

    var L_ICONNECTWhatIsDNS5_Text = "csak�gy, mint az els�dleges DNS-kiszolg�l� el�rhetetlens�ge eset�n haszn�lhat� m�sodlagos DNS-kiszolg�l��t.";
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
	
    var L_ICONNECTWhatToDoNext1_Text = "Kattintson a Tov�bb gombra a folytat�shoz.";
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

    var L_ICONNECTWhatToDoNext2_Text = "Vagy ha meggondolta volna mag�t, a \"Kihagy�s\" gombra kattintva internet-hozz�f�r�s be�ll�t�sa n�lk�l l�phet tov�bb.";
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

    var L_ICONNECTWhatToDoNext3_Text = "Azt is megteheti, hogy visszat�r az el�z� k�perny�re. Ehhez kattintson a Vissza gombra.";
	Agent_Speak(L_ICONNECTWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}





function Agent_ICNTLASTAddCommands() {

        var L_ICNTLASTMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_ICNTLASTMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_ICNTLASTMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        
        
        

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

        var L_SCONNECTMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_SCONNECTMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_SCONNECTMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        
        
        

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

        var L_SCNTLASTMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_SCNTLASTMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_SCNTLASTMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        
        
        

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
    var L_BadPIDMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_BadPIDMenuCommand2_Text = "Hogyan ad&hatom meg a term�kkulcsot?";
    var L_BadPIDMenuCommand3_Text = "Mit tegyek, ha &nem tudom a term�kkulcsot?";
    var L_BadPIDMenuCommand4_Text = "Mit te&gyek, ha nem m�k�dik a term�kkulcsom?";
    var L_BadPIDMenuCommand5_Text = "Kt�l k�rhetek tov�bbi &seg�ts�get?";
    var L_BadPIDMenuCommand6_Text = "Mi legyen a k�vetkez� &l�p�sem?";
        
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
    var L_BadPIDAboutThisStep1_Text = "Az el�z� k�perny�n be�rt term�kkulcs �rv�nytelen.";
    Agent_Speak(L_BadPIDAboutThisStep1_Text);
    
    var L_BadPIDAboutThisStep2_Text = "Ez azt jelenti, hogy nem felel meg a Windows XP egy val�di p�ld�nya term�kkulcs�nak.";
    Agent_Speak(L_BadPIDAboutThisStep2_Text);

    var L_BadPIDAboutThisStep3_Text = "A Windows �rv�nyes term�kkulcs n�lk�l nem m�k�dik.";
    Agent_Speak(L_BadPIDAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDAboutThisStep4_Text = "Ha �gy v�li, hogy rosszul �rta be, kattintson a Vissza gombra, �s �rja be a helyes term�kazonos�t� kulcsot.";
    Agent_Speak(L_BadPIDAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep5_Text = "De ha biztos benne, hogy j�l �rta be, vagy ha m�r t�bbsz�r pr�b�lkozott sikertelen�l, lehet, hogy nem jogtiszta a Windows-p�ld�nya.";
    Agent_Speak(L_BadPIDAboutThisStep5_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDAboutThisStep6_Text = "Ebben az esetben kattintson a Kikapcsol�s gombra, ami kikapcsolja a sz�m�t�g�pet.";
    Agent_Speak(L_BadPIDAboutThisStep6_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep7_Text = "Tov�bbi inform�ci��rt h�vja a Microsoft �gyf�lszolg�latot a 2-MSINFO (267-4636) telefonsz�mon.";
    Agent_Speak(L_BadPIDAboutThisStep7_Text);

    var L_BadPIDAboutThisStep8_Text = "Minden m�s orsz�gban vegye fel a kapcsolatot a Microsoft helyi le�nyv�llalat�val.";
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
	
    var L_BadPIDHowToEnter1_Text = "Az el�z� k�perny�re t�rt�n� visszat�r�shez kattintson a Vissza gombra.";
    Agent_Speak(L_BadPIDHowToEnter1_Text);
    
    Agent_Play("RestPose");
    
    var L_BadPIDHowToEnter2_Text = "A mutat�, amely egy villog� f�gg�leges vonal form�j�ban jelenik meg, m�r benne lesz az els� mez�ben, amelybe be kell �rnia a term�kkulcsot.";
    Agent_Speak(L_BadPIDHowToEnter2_Text);

    var L_BadPIDHowToEnter3_Text = "Miut�n be�rta az els� �t karaktert, a mutat� automatikusan tov�bbl�p a k�vetkez� mez�be, hogy �n be�rhassa a k�vetkez� �t karaktert.";
    Agent_Speak(L_BadPIDHowToEnter3_Text);

    var L_BadPIDHowToEnter4_Text = "A k�t�jeleket ne �rja be, a kis- �s nagybet�k megk�l�nb�ztet�s�re sem kell �gyelnie.";
    Agent_Speak(L_BadPIDHowToEnter4_Text);

    var L_BadPIDHowToEnter5_Text = "Ezut�n kattintson a Tov�bb gombra.";
    Agent_Speak(L_BadPIDHowToEnter5_Text);
}

function Agent_OnBadPIDWhatIfNotKnown() 
{
    var L_BadPIDWhatIfNotKnown1_Text = "Ha a term�kkulcs nincs rajta a CD tokj�n, n�zze meg a sz�m�t�g�p h�tlapj�n tal�lhat� eredetis�get igazol� tan�s�tv�ny matric�n, vagy pedig a CD-hez mell�kelt dokument�ci� h�ts� bor�t�j�n.";
    Agent_Speak(L_BadPIDWhatIfNotKnown1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
    
    var L_BadPIDWhatIfNotKnown2_Text = "Ha megtal�lta a term�kkulcsot, kattintson a Vissza gombra, majd �rja be a term�kkulcsot az el�z� k�perny�n l�that� mez�kbe.";
    Agent_Speak(L_BadPIDWhatIfNotKnown2_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotKnown3_Text = "Ha nem tal�lja a term�kkulcsot, h�vja a gy�rt�t a k�vetkez� sz�mon: %s.";
    var re = /%s/i;
    var L_BadPIDWhatIfNotKnown4_Text = "Ha nem tal�lja a term�kazonos�t� kulcsot, l�pjen kapcsolatba a sz�m�t�g�p gy�rt�j�val.";

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
        Agent_Speak(L_BadPIDWhatIfNotKnown4_Text);
    else
        Agent_Speak(L_BadPIDWhatIfNotKnown3_Text.replace(re, strPhoneNumber));
}

function Agent_OnBadPIDWhatIfNotWorking() 
{
    var L_BadPIDWhatIfNotWorking1_Text = "Elk�pzelhet�, hogy el�rta.";
    Agent_Speak(L_BadPIDWhatIfNotWorking1_Text);
    
    var L_BadPIDWhatIfNotWorking2_Text = "A term�kkulcs mind a 25 karakter�t meg kell adnia.";
    Agent_Speak(L_BadPIDWhatIfNotWorking2_Text);

    var L_BadPIDWhatIfNotWorking3_Text = "Mindegyik r�sznek 5 bet�b�l vagy sz�mb�l kell �llnia.";
    Agent_Speak(L_BadPIDWhatIfNotWorking3_Text);

    var L_BadPIDWhatIfNotWorking4_Text = "A Windows rendszert csak akkor haszn�lhatja, ha �rv�nyes term�kkulcsot �r be.";
    Agent_Speak(L_BadPIDWhatIfNotWorking4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDWhatIfNotWorking5_Text = "Ha �gy v�li, hogy rosszul �rta be, kattintson a Vissza gombra, �s �rja be a helyes term�kazonos�t� kulcsot.";
    Agent_Speak(L_BadPIDWhatIfNotWorking5_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking6_Text = "De ha biztos benne, hogy j�l �rta be, vagy ha m�r t�bbsz�r pr�b�lkozott sikertelen�l, lehet, hogy nem jogtiszta a Windows-p�ld�nya.";
    Agent_Speak(L_BadPIDWhatIfNotWorking6_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatIfNotWorking7_Text = "Ebben az esetben kattintson a Kikapcsol�s gombra, ami kikapcsolja a sz�m�t�g�pet.";
    Agent_Speak(L_BadPIDWhatIfNotWorking7_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking8_Text = "Tov�bbi inform�ci��rt h�vja a Microsoft �gyf�lszolg�latot a 2-MSINFO (267-4636) telefonsz�mon.";
    Agent_Speak(L_BadPIDWhatIfNotWorking8_Text);

    var L_BadPIDWhatIfNotWorking9_Text = "Minden m�s orsz�gban vegye fel a kapcsolatot a Microsoft helyi le�nyv�llalat�val.";
    Agent_Speak(L_BadPIDWhatIfNotWorking9_Text);
}

function Agent_OnBadPIDWhoCanICall() 
{
    var L_BadPIDWhoCanICall1_Text = "Ha a Telep�t� nem fogadja el a term�kkulcsot, h�vja a Microsoft �gyf�lszolg�latot a 2-MSINFO (267-4636) telefonsz�mon.";
    Agent_Speak(L_BadPIDWhoCanICall1_Text);
    
    var L_BadPIDWhoCanICall2_Text = "Minden m�s orsz�gban vegye fel a kapcsolatot a Microsoft helyi le�nyv�llalat�val.";
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
	
    var L_BadPIDWhatToDoNext1_Text = "Kattintson a Vissza gombra, majd �rja be a helyes kulcsot.";
    Agent_Speak(L_BadPIDWhatToDoNext1_Text);
    
    var L_BadPIDWhatToDoNext2_Text = "Ha a term�kkulcs nem �rv�nyes, el�fordulhat, hogy a Windows-p�ld�nya nem jogtiszta.";
    Agent_Speak(L_BadPIDWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatToDoNext3_Text = "Ebben az esetben kattintson a Kikapcsol�s gombra, ami kikapcsolja a sz�m�t�g�pet.";
    Agent_Speak(L_BadPIDWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatToDoNext4_Text = "Tov�bbi inform�ci��rt h�vja a Microsoft �gyf�lszolg�latot a 2-MSINFO (267-4636) telefonsz�mon.";
    Agent_Speak(L_BadPIDWhatToDoNext4_Text);

    var L_BadPIDWhatToDoNext5_Text = "Minden m�s orsz�gban vegye fel a kapcsolatot a Microsoft helyi le�nyv�llalat�val.";
    Agent_Speak(L_BadPIDWhatToDoNext5_Text);
}



function Agent_IconnAddCommands() 
{
    var L_IconnMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_IconnMenuCommand2_Text = "&Melyik be�ll�t�st v�lasszam?";
    var L_IconnMenuCommand3_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
    var L_IconnAboutThisStep1_Text = "Sikeresen telep�tette a sz�m�t�g�pre a Windows XP rendszert!";
    Agent_Speak(L_IconnAboutThisStep1_Text); 
      
    var L_IconnAboutThisStep2_Text = "Most pedig az internet-hozz�f�r�s be�ll�t�s�ban seg�thetek, ha sz�ks�ge van r�.";
    Agent_Speak(L_IconnAboutThisStep2_Text);
       
    var L_IconnAboutThisStep3_Text = "Ha erre nem �ll most k�szen, a Windows telep�t�se ut�n is elind�thatja a Start men�b�l az Internetcsatlakoz�s var�zsl�t.";
    Agent_Speak(L_IconnAboutThisStep3_Text);
}

function Agent_IconnWhichOption() 
{    
    var L_IconnWhichOption1_Text = "Ha olyan internetszolg�ltat�t k�sz�l haszn�lni, amely saj�t szoftver�nek telep�t�s�t k�veteli meg, v�lassza a Nem lehet�s�get.";
    Agent_Speak(L_IconnWhichOption1_Text); 
      
    var L_IconnWhichOption2_Text = "Ezt onnan tudhatja, hogy kapott egy CD-t az internetszolg�ltat�t�l.";
    Agent_Speak(L_IconnWhichOption2_Text);
       
    var L_IconnWhichOption3_Text = "Majd a Windows telep�t�s�t k�vet�en be�ll�thatja az internetkapcsolatot a sz�m�t�g�pen.";
    Agent_Speak(L_IconnWhichOption3_Text);
}

function Agent_OnIconnWhatToDoNext() 
{      
    Agent_GestureAtElement(g.radioYesIconn, "Left");  
    
    var L_IconnWhatToDoNext1_Text = "Ha seg�ts�gre van sz�ks�ge az internetkapcsolat l�tes�t�s�hez, kattintson az Igen lehet�s�gre.";
    Agent_Speak(L_IconnWhatToDoNext1_Text);
    
    Agent_Play("RestPose"); 
        
    Agent_GestureAtElement(g.radioNoIconn, "Left");  
    
    var L_IconnWhatToDoNext2_Text = "Ha viszont most nem k�v�n internetkapcsolatot l�tes�teni, v�lassza a \"Nem\" lehet�s�get.";
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

    var L_IconnWhatToDoNext3_Text = "Ezut�n kattintson a Tov�bb gombra.";
    Agent_Speak(L_IconnWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPAddCommands() 
{
    var L_ISPMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_ISPMenuCommand2_Text = "Mi &a helyzet akkor, ha a sz�m�t�g�p �rt�kes�t�je adott meg nekem fi�kinform�ci�t?";
    var L_ISPMenuCommand3_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
    var L_ISPAboutThisStep1_Text = "Ezen a k�perny�n az internet el�r�s�nek m�dj�t v�laszthatja ki.";
    Agent_Speak(L_ISPAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");

    var L_ISPAboutThisStep2_Text = "Haszn�lhatja az MSN-t";
    Agent_Speak(L_ISPAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");

        var L_ISPAboutThisStep3_Text = "vagy m�s internetszolg�ltat�t is.";
        Agent_Speak(L_ISPAboutThisStep3_Text);
        
        Agent_Play("RestPose");
    }
    
    Agent_GestureAtElement(g.radioSkip, "Left");

    var L_ISPAboutThisStep4_Text = "De an�lk�l is tov�bbl�phet, hogy most be�ll�tan� az internetkapcsolatot.";
    Agent_Speak(L_ISPAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPWhatIfGivenAccount() 
{
    var L_ISPWhatIfGivenAccount1_Text = "Lehet, hogy a sz�m�t�g�p megv�s�rl�sakor a keresked� pap�ron mell�kelte az internetfi�kra vonatkoz� adatokat.";
	Agent_Speak(L_ISPWhatIfGivenAccount1_Text);
	
    var L_ISPWhatIfGivenAccount2_Text = "A fi�kadatok k�z�tt egy felhaszn�l�n�vnek, egy jelsz�nak, valamint az internetszolg�ltat� nev�nek �s telefonsz�m�nak kell szerepelnie.";
	Agent_Speak(L_ISPWhatIfGivenAccount2_Text);
	
    var L_ISPWhatIfGivenAccount3_Text = "Ha megvannak ezek az adatai, akkor m�r rendelkezik internetfi�kkal.";
	Agent_Speak(L_ISPWhatIfGivenAccount3_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");
	
    var L_ISPWhatIfGivenAccount4_Text = "Ha a szolg�ltat� neve MSN, v�lassza az els� lehet�s�get.";
	Agent_Speak(L_ISPWhatIfGivenAccount4_Text);
    
    Agent_Play("RestPose");

    
    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");
    	
        var L_ISPWhatIfGivenAccount5_Text = "Ha az internetszolg�ltat�t nem MSN-nek h�vj�k, v�lassza ezt a m�sodik lehet�s�get.";
    	Agent_Speak(L_ISPWhatIfGivenAccount5_Text);
        
        Agent_Play("RestPose");
    }

    Agent_GestureAtElement(g.radioSkip, "Left");
    
    var L_ISPWhatIfGivenAccount6_Text = "Ha k�s�bb szeretn� be�ll�tani ezen a sz�m�t�g�pen az internetkapcsolatot, v�lassza ezt az utols� lehet�s�get.";
	Agent_Speak(L_ISPWhatIfGivenAccount6_Text);
			    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_ISPWhatIfGivenAccount7_Text = "Majd kattintson a Tov�bb gombra.";
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
    
    var L_ISPWhatToDoNext1_Text = "Miut�n v�lasztott, kattintson a Tov�bb gombra.";
	Agent_Speak(L_ISPWhatToDoNext1_Text);
	
	Agent_Play("RestPose");
}



function Agent_ICSAddCommands() 
{
	var L_ICSAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
	var L_ICSAddCommands2_Text = "Mit jelent &az internetkapcsolat t�zfala?";
	var L_ICSAddCommands3_Text = "M&i az Otthoni h�l�zat var�zsl�?";
	
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
	var L_ICSAboutThisStep1_Text = "Ezen a k�perny�n tudja megadni, hogyan �rje el a sz�m�t�g�p az internetet.";
	Agent_Speak(L_ICSAboutThisStep1_Text);
	
	var L_ICSAboutThisStep2_Text = "Ha ez a sz�m�t�g�p m�s sz�m�t�g�pekb�l �ll� h�l�zathoz csatlakozik, a h�l�zatot haszn�lhatja az internet el�r�s�re is.";
	Agent_Speak(L_ICSAboutThisStep2_Text);
	
	var L_ICSAboutThisStep3_Text = "M�sk�l�nben a sz�m�t�g�p be�ll�that� �gy, hogy k�zvetlen�l csatlakozzon az internetre.";
	Agent_Speak(L_ICSAboutThisStep3_Text);
	
	var L_ICSAboutThisStep4_Text = "Ak�rmelyik lehet�s�get v�lasztja is, a Windows XP t�zfallal v�di az internetkapcsolatot, megakad�lyozva, hogy m�s internethaszn�l�k illet�ktelen�l hozz�f�rjenek a sz�m�t�g�p�hez.";
	Agent_Speak(L_ICSAboutThisStep4_Text);
}
	
function Agent_ICSWhatIsFirewall() 
{
	var L_ICSWhatIsFirewall1_Text = "A t�zfal olyan biztons�gi rendszer, melynek az a c�lja, hogy megv�dje a sz�m�t�g�pet (vagy sz�m�t�g�p-h�l�zatot) a k�ls�, m�s h�l�zatokr�l (p�ld�ul az internetr�l) j�v� fenyeget�sekt�l, amilyenek a hackert�mad�sok is.";
	Agent_Speak(L_ICSWhatIsFirewall1_Text);
	
	var L_ICSWhatIsFirewall2_Text = "Ha h�l�zatot l�tes�t a Windows XP rendszerben, a Windows XP t�zfalszolg�ltat�sa automatikusan bekapcsol.";
	Agent_Speak(L_ICSWhatIsFirewall2_Text);
	
	var L_ICSWhatIsFirewall3_Text = "Ez a szolg�ltat�s akkor is bekapcsol, ha a sz�m�t�g�p nem h�l�zat r�sze, hanem k�zvetlen�l �ri el az internetet.";
	Agent_Speak(L_ICSWhatIsFirewall3_Text);
}
	
function Agent_ICSWhatIsNetworkWizard() 
{
	var L_ICSWhatIsNetworkWizard1_Text = "Ez a var�zsl� v�gigvezeti az otthoni vagy munkahelyi h�l�zat l�trehoz�s�nak l�p�sein.";
	Agent_Speak(L_ICSWhatIsNetworkWizard1_Text);
	
	var L_ICSWhatIsNetworkWizard2_Text = "Ha nem k�v�nja e folyamat keretei k�z�tt h�l�zathoz csatlakoztatni ezt a g�pet, k�s�bb is megteheti.";
	Agent_Speak(L_ICSWhatIsNetworkWizard2_Text);
	
	var L_ICSWhatIsNetworkWizard3_Text = "Egyszer�en nyissa meg a Start men�t, majd kattintson a Minden program parancsra.";
	Agent_Speak(L_ICSWhatIsNetworkWizard3_Text);
	
	var L_ICSWhatIsNetworkWizard4_Text = "Ezut�n mutasson a Kell�kek, majd a Kommunik�ci� pontra, v�g�l kattintson az Otthoni h�l�zat var�zsl� parancsra.";
	Agent_Speak(L_ICSWhatIsNetworkWizard4_Text);
	
	var L_ICSWhatIsNetworkWizard5_Text = "Ha elfelejti ezeket a l�p�seket, kattintson a Start men� S�g� �s t�mogat�s parancs�ra. Sok m�s �rt�kes inform�ci�n k�v�l a k�rd�seire is meg fogja tal�lni a v�laszt.";
	Agent_Speak(L_ICSWhatIsNetworkWizard5_Text);
}



function Agent_ICSDCAddCommands() 
{
	var L_ICSDCAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
	var L_ICSDCAddCommands2_Text = "Mi legyen a k�vetkez� &l�p�sem?";
	
	g_AgentCharacter.Commands.Add("Agent_ICSDCAboutThisStep", L_ICSDCAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_ICSDCWhatToDoNext", L_ICSDCAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_ICSDCAboutThisStep() 
{
	var L_ICSDCAboutThisStep1_Text = "Ez a k�perny� azt k�zli, hogy megsz�nt a sz�m�t�g�p �s az internet k�z�tti kapcsolat.";
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
    
	var L_ICSDCWhatToDoNext1_Text = "Ha �jra kapcsol�dni szeretne, kattintson az �jra gombra.";
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
    
	var L_ICSDCWhatToDoNext2_Text = "Vagy ha az internethez val� csatlakoz�s n�lk�l k�v�n tov�bbl�pni, kattintson a \"Kihagy�s\" gombra.";
	Agent_Speak(L_ICSDCWhatToDoNext2_Text);
	
	Agent_Play("RestPose");
}



function Agent_Ident1AddCommands() 
{
    var L_Ident1AddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_Ident1AddCommands2_Text = "Mi &az a felhaszn�l�i fi�k?";
    var L_Ident1AddCommands3_Text = "Milyen &el�ny�kkel j�r a felhaszn�l�i fi�kok l�trehoz�sa?";
    var L_Ident1AddCommands4_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
	var L_Ident1AboutThisStep1_Text = "Ezen a k�perny�n adhatja meg azokat a tov�bbi szem�lyeket, akik szint�n haszn�lni fogj�k ezt a sz�m�t�g�pet.";
	Agent_Speak(L_Ident1AboutThisStep1_Text);
	
	var L_Ident1AboutThisStep2_Text = "Ha m�sokkal k�z�sen haszn�lja ezt a sz�m�t�g�pet, minden felhaszn�l� szem�ly�re szabhatja a Windows XP rendszert, ha mindenkinek k�l�n fi�kot k�sz�t.";
	Agent_Speak(L_Ident1AboutThisStep2_Text);
    
    var L_Ident1AboutThisStep3_Text = "Ennek k�sz�nhet�en a sz�m�t�g�p minden felhaszn�l� saj�t be�ll�t�sait haszn�lhatja, egy�ni jogokkal rendelkezhet, k�l�n kezelheti f�jljait, webhelyekre mutat� hivatkoz�sait �s egy�b be�ll�t�sait, an�lk�l, hogy hat�ssal lenne arra, hogy �n hogyan alak�totta saj�t ig�nyeihez a rendszert.";
    Agent_Speak(L_Ident1AboutThisStep3_Text);
    
    var L_Ident1AboutThisStep4_Text = "Amikor elind�tja a rendszert, az �dv�zl�k�perny�n bet�rendben meg fog jelenni mindegyik n�v, amelyet ezen a k�perny�n megadott.";
    Agent_Speak(L_Ident1AboutThisStep4_Text);
    
    var L_Ident1AboutThisStep5_Text = "R�ad�sul m�g mindenkinek a f�nyk�pe �s l�that� lesz.";
    Agent_Speak(L_Ident1AboutThisStep5_Text);
    
    var L_Ident1AboutThisStep6_Text = "B�rmikor m�dos�thatja ezeket a neveket, ha r�kattint a Start men� Vez�rl�pult parancs�ra, majd r�kattint a Felhaszn�l�i fi�kok ikonra.";
    Agent_Speak(L_Ident1AboutThisStep6_Text);
}

function Agent_Ident1Command_WhatIsUserAccount() 
{	
	var L_Ident1WhatIsUserAccount1_Text = "Ha m�sokkal k�z�sen haszn�lja a sz�m�t�g�pet otthon vagy a munkahely�n, tetszeni fognak �nnek a felhaszn�l�i fi�kok.";
	Agent_Speak(L_Ident1WhatIsUserAccount1_Text);
	
	var L_Ident1WhatIsUserAccount2_Text = "A felhaszn�l�i fi�kok haszn�lat�val a k�vetkez�kre van lehet�s�g:";
	Agent_Speak(L_Ident1WhatIsUserAccount2_Text);
    
    var L_Ident1WhatIsUserAccount3_Text = "Saj�t ig�nyeihez igaz�thatja, hogy hogyan rendszerezze �s jelen�tse meg a Windows az inform�ci�kat, an�lk�l, hogy m�dos�tan� a t�bbi felhaszn�l� be�ll�t�sait;";
    Agent_Speak(L_Ident1WhatIsUserAccount3_Text);
    
    var L_Ident1WhatIsUserAccount4_Text = "Jelsz� el��r�sa a saj�t f�jljaihoz t�rt�n� hozz�f�r�shez,";
    Agent_Speak(L_Ident1WhatIsUserAccount4_Text);
    
    var L_Ident1WhatIsUserAccount5_Text = "Saj�t k�l�n list�n vezetheti a webes kedvenceit �s a k�zelm�ltban l�togatott webhelyeket;";
    Agent_Speak(L_Ident1WhatIsUserAccount5_Text);
    
    var L_Ident1WhatIsUserAccount6_Text = "Fontos sz�m�t�g�p-be�ll�t�sainak v�delme,";
    Agent_Speak(L_Ident1WhatIsUserAccount6_Text);
    
    var L_Ident1WhatIsUserAccount7_Text = "Az Asztal testreszab�sa mindegyik felhaszn�l� sz�m�ra, �s";
    Agent_Speak(L_Ident1WhatIsUserAccount7_Text);
    
    var L_Ident1WhatIsUserAccount8_Text = "Egyszer�bben jelentkezhet be, k�nnyebben lehet v�ltani a felhaszn�l�k k�z�tt.";
    Agent_Speak(L_Ident1WhatIsUserAccount8_Text);
}

function Agent_Ident1Command_Benefits() 
{	
	var L_Ident1Benefits1_Text = "A k�z�s sz�m�t�g�p-haszn�lat kor�bban azt jelentette, hogy a t�bbiek l�thatt�k a mag�njelleg� f�jljait, hogy olyan j�t�kokat vagy m�s programokat telep�tettek, amelyekre �nnek nem volt sz�ks�ge, vagy m�dos�tott�k a sz�m�t�g�p be�ll�t�sait.";
	Agent_Speak(L_Ident1Benefits1_Text);
	
	var L_Ident1Benefits2_Text = "Mostant�l mindez megv�ltozott!";
	Agent_Speak(L_Ident1Benefits2_Text);
    
    var L_Ident1Benefits3_Text = "Ha felhaszn�l�i fi�kokat k�sz�t, mindegyik felhaszn�l� �gy igaz�thatja saj�t ig�nyeihez a Windows rendszert, hogy annak semmif�le hat�sa sem lesz a sz�m�t�g�p t�bbi felhaszn�l�j�ra.";
    Agent_Speak(L_Ident1Benefits3_Text);
    
    var L_Ident1Benefits4_Text = "Ha t�bbet szeretne megtudni a felhaszn�l�i fi�kokr�l, kattintson a Start men� S�g� �s t�mogat�s parancs�ra. Sok m�s �rt�kes inform�ci�n k�v�l a k�rd�seire is meg fogja tal�lni a v�laszt.";
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
    
    var L_Ident1WhatToDoNext1_Text = "Miut�n be�rta a sz�m�t�g�pet haszn�l� t�bbi szem�ly nev�t, a folytat�shoz kattintson a Tov�bb gombra.";
    Agent_Speak(L_Ident1WhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_Ident1WhatToDoNext2_Text = "A Windows telep�t�se ut�n m�dos�thatja ezeket a neveket, �s tov�bbi felhaszn�l�kat is l�trehozhat.";
    Agent_Speak(L_Ident1WhatToDoNext2_Text);
        
    var L_Ident1WhatToDoNext3_Text = "Egyszer�en kattintson a Start men� Vez�rl�pult parancs�ra, majd v�lassza a Felhaszn�l�i fi�kok ikont.";
    Agent_Speak(L_Ident1WhatToDoNext3_Text);
}



function Agent_IdentitiesAddCommands() 
{
    var L_IdentitiesAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_IdentitiesAddCommands2_Text = "Mi &az a felhaszn�l�i fi�k?";
    var L_IdentitiesAddCommands3_Text = "Milyen &el�ny�kkel j�r a felhaszn�l�i fi�kok l�trehoz�sa?";
    var L_IdentitiesAddCommands4_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
	var L_IdentitiesAboutThisStep1_Text = "Ezen a k�perny�n adhatja meg azokat a tov�bbi szem�lyeket, akik szint�n haszn�lni fogj�k ezt a sz�m�t�g�pet.";
	Agent_Speak(L_IdentitiesAboutThisStep1_Text);
	
	var L_IdentitiesAboutThisStep2_Text = "Ha m�sokkal k�z�sen haszn�lja ezt a sz�m�t�g�pet, minden felhaszn�l� szem�ly�re szabhatja a Windows XP rendszert, ha mindenkinek k�l�n fi�kot k�sz�t.";
	Agent_Speak(L_IdentitiesAboutThisStep2_Text);
    
    var L_IdentitiesAboutThisStep3_Text = "Ennek k�sz�nhet�en a sz�m�t�g�p minden felhaszn�l� saj�t be�ll�t�sait haszn�lhatja, egy�ni jogokkal rendelkezhet, k�l�n kezelheti f�jljait, webhelyekre mutat� hivatkoz�sait �s egy�b be�ll�t�sait, an�lk�l, hogy hat�ssal lenne arra, hogy �n hogyan alak�totta saj�t ig�nyeihez a rendszert.";
    Agent_Speak(L_IdentitiesAboutThisStep3_Text);
    
    var L_IdentitiesAboutThisStep4_Text = "Amikor elind�tja a rendszert, az �dv�zl�k�perny�n bet�rendben meg fog jelenni mindegyik n�v, amelyet ezen a k�perny�n megadott.";
    Agent_Speak(L_IdentitiesAboutThisStep4_Text);
    
    var L_IdentitiesAboutThisStep5_Text = "R�ad�sul m�g mindenkinek a f�nyk�pe �s l�that� lesz.";
    Agent_Speak(L_IdentitiesAboutThisStep5_Text);
    
    var L_IdentitiesAboutThisStep6_Text = "B�rmikor m�dos�thatja ezeket a neveket, ha r�kattint a Start men� Vez�rl�pult parancs�ra, majd r�kattint a Felhaszn�l�i fi�kok ikonra.";
    Agent_Speak(L_IdentitiesAboutThisStep6_Text);
}

function Agent_IdentitiesCommand_WhatIsUserAccount() 
{	
	var L_IdentitiesWhatIsUserAccount1_Text = "Ha m�sokkal k�z�sen haszn�lja a sz�m�t�g�pet otthon vagy a munkahely�n, tetszeni fognak �nnek a felhaszn�l�i fi�kok.";
	Agent_Speak(L_IdentitiesWhatIsUserAccount1_Text);
	
	var L_IdentitiesWhatIsUserAccount2_Text = "A felhaszn�l�i fi�kok haszn�lat�val a k�vetkez�kre van lehet�s�g:";
	Agent_Speak(L_IdentitiesWhatIsUserAccount2_Text);
    
    var L_IdentitiesWhatIsUserAccount3_Text = "Saj�t ig�nyeihez igaz�thatja, hogy hogyan rendszerezze �s jelen�tse meg a Windows az inform�ci�kat, an�lk�l, hogy m�dos�tan� a t�bbi felhaszn�l� be�ll�t�sait;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount3_Text);
    
    var L_IdentitiesWhatIsUserAccount4_Text = "Jelsz� el��r�sa a saj�t f�jljaihoz t�rt�n� hozz�f�r�shez,";
    Agent_Speak(L_IdentitiesWhatIsUserAccount4_Text);
    
    var L_IdentitiesWhatIsUserAccount5_Text = "Saj�t k�l�n list�n vezetheti a webes kedvenceit �s a k�zelm�ltban l�togatott webhelyeket;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount5_Text);
    
    var L_IdentitiesWhatIsUserAccount6_Text = "Fontos sz�m�t�g�p-be�ll�t�sainak v�delme,";
    Agent_Speak(L_IdentitiesWhatIsUserAccount6_Text);
    
    var L_IdentitiesWhatIsUserAccount7_Text = "Az Asztal testreszab�sa mindegyik felhaszn�l� sz�m�ra, �s";
    Agent_Speak(L_IdentitiesWhatIsUserAccount7_Text);
    
    var L_IdentitiesWhatIsUserAccount8_Text = "Egyszer�bben jelentkezhet be, k�nnyebben lehet v�ltani a felhaszn�l�k k�z�tt.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount8_Text);
}

function Agent_IdentitiesCommand_Benefits() 
{	
	var L_IdentitiesBenefits1_Text = "A k�z�s sz�m�t�g�p-haszn�lat kor�bban azt jelentette, hogy a t�bbiek l�thatt�k a mag�njelleg� f�jljait, hogy olyan j�t�kokat vagy m�s programokat telep�tettek, amelyekre �nnek nem volt sz�ks�ge, vagy m�dos�tott�k a sz�m�t�g�p be�ll�t�sait.";
	Agent_Speak(L_IdentitiesBenefits1_Text);
	
	var L_IdentitiesBenefits2_Text = "Mostant�l mindez megv�ltozott!";
	Agent_Speak(L_IdentitiesBenefits2_Text);
    
    var L_IdentitiesBenefits3_Text = "Ha felhaszn�l�i fi�kokat k�sz�t, mindegyik felhaszn�l� �gy igaz�thatja saj�t ig�nyeihez a Windows rendszert, hogy annak semmif�le hat�sa sem lesz a sz�m�t�g�p t�bbi felhaszn�l�j�ra.";
    Agent_Speak(L_IdentitiesBenefits3_Text);
    
    var L_IdentitiesBenefits4_Text = "Ha t�bbet szeretne megtudni a felhaszn�l�i fi�kokr�l, kattintson a Start men� S�g� �s t�mogat�s parancs�ra. Sok m�s �rt�kes inform�ci�n k�v�l a k�rd�seire is meg fogja tal�lni a v�laszt.";
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
    
    var L_IdentitiesWhatToDoNext1_Text = "Miut�n be�rta a sz�m�t�g�pet haszn�l� t�bbi szem�ly nev�t, a folytat�shoz kattintson a Tov�bb gombra.";
    Agent_Speak(L_IdentitiesWhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_IdentitiesWhatToDoNext2_Text = "A Windows telep�t�se ut�n m�dos�thatja ezeket a neveket, �s tov�bbi felhaszn�l�kat is l�trehozhat.";
    Agent_Speak(L_IdentitiesWhatToDoNext2_Text);
        
    var L_IdentitiesWhatToDoNext3_Text = "Egyszer�en kattintson a Start men� Vez�rl�pult parancs�ra, majd v�lassza a Felhaszn�l�i fi�kok ikont.";
    Agent_Speak(L_IdentitiesWhatToDoNext3_Text);
}



function Agent_KeybdAddCommands() 
{
	var L_KeybdMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_KeybdMenuCommand2_Text = "H&ogyan v�laszthatom ki a ter�leti be�ll�t�st?";
    var L_KeybdMenuCommand3_Text = "Hogyan v�laszthatom ki a &nyelvet?";
    var L_KeybdMenuCommand4_Text = "Hogyan v�laszthatom ki a &billenty�zetet?";

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
    var L_KeybdAboutThisStep1_Text = "A k�vetkez� n�h�ny k�perny�n azt mondhatja meg a Windows rendszernek, hogy hogyan jelen�tse meg a sz�veget, d�tumokat �s a sz�mokat az �n �ltal megadott nyelvi, ter�leti �s az id�z�n�ra vonatkoz� be�ll�t�sok alapj�n.";
    Agent_Speak(L_KeybdAboutThisStep1_Text);
        
    var L_KeybdAboutThisStep2_Text = "Ezen a k�perny�n p�ld�ul v�lassza ki a lak�hely�nek megfelel� ter�letet, a sz�m�t�g�pen leggyakrabban haszn�lt nyelvet �s a billenty�zet t�pus�t.";
    Agent_Speak(L_KeybdAboutThisStep2_Text);
        
    var L_KeybdAboutThisStep3_Text = "A Windows ezut�n helyesen fogja megjelen�teni a d�tumokat, id�pontokat �s a p�nznemeket.";
    Agent_Speak(L_KeybdAboutThisStep3_Text);
        
    var L_KeybdAboutThisStep4_Text = "Ha p�ld�ul ter�letk�nt Magyarorsz�got, nyelvk�nt pedig a magyart v�lasztja, a p�nz�sszegek forintban fognak megjelenni.";
    Agent_Speak(L_KeybdAboutThisStep4_Text);

    var L_KeybdAboutThisStep5_Text = "�m ha ehelyett az Egyes�lt Kir�lys�got v�lasztja ter�letk�nt, a p�nz�sszegek angol fontban jelennek meg.";
    Agent_Speak(L_KeybdAboutThisStep5_Text);
}

function Agent_KeybdHowToSelectRegion() 
{     
    Agent_GestureAtElement(g.selRegion, "Left");
     
    var L_KeybdHowToSelectRegion1_Text = "Ezen a list�n a vil�g k�l�nb�z� ter�letei szerepelnek �b�c�rendben.";
    Agent_Speak(L_KeybdHowToSelectRegion1_Text);	
   
    var L_KeybdHowToSelectRegion2_Text = "Kattintson a list�n bel�lre, vagy nyomogassa a Tab billenty�t mindaddig, am�g el nem jut a list�hoz.";
    Agent_Speak(L_KeybdHowToSelectRegion2_Text);	
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selRegion, "Right");
        
    var L_KeybdHowToSelectRegion3_Text = "Ezut�n ezekre a kis nyilakra kattintva, vagy a billenty�zet fel �s le ny�lbillenty�it lenyomva keresse meg a k�v�nt r�gi�t a list�ban.";
    Agent_Speak(L_KeybdHowToSelectRegion3_Text);
        
    var L_KeybdHowToSelectRegion4_Text = "Amikor megjelenik a lak�hely�nek megfelel� ter�let, kattintson r�, vagy nyomja le az Enter billenty�t.";
    Agent_Speak(L_KeybdHowToSelectRegion4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.RegionName, "Left");

    var L_KeybdHowToSelectRegion5_Text = "A kiv�lasztott ter�let ebben a mez�ben jelenik meg.";
    Agent_Speak(L_KeybdHowToSelectRegion5_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectLanguage() 
{        		
    var L_KeybdHowToSelectLanguage1_Text = "V�lassza ki azt a nyelvet, amelyet a leggyakrabban haszn�l.";
    Agent_Speak(L_KeybdHowToSelectLanguage1_Text);
        
    var L_KeybdHowToSelectLanguage2_Text = "Ha p�ld�ul legt�bbsz�r magyarul besz�l, �m az �n �ltal haszn�lt sz�m�t�g�pes programok �s f�jlok �ltal�ban angol nyelv�ek, itt az angolt v�lassza.";
    Agent_Speak(L_KeybdHowToSelectLanguage2_Text);   
        
    Agent_GestureAtElement(g.selLang, "Left");  
        
    var L_KeybdHowToSelectLanguage3_Text = "Ezen a list�n a nyelvek szerepelnek �b�c�rendben.";
    Agent_Speak(L_KeybdHowToSelectLanguage3_Text);

    var L_KeybdHowToSelectLanguage4_Text = "Kattintson ide, vagy a billenty�zet tabul�torbillenty�j�nek nyomogat�s�val l�pjen ide.";
    Agent_Speak(L_KeybdHowToSelectLanguage4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selLang, "Right");

    var L_KeybdHowToSelectLanguage5_Text = "Ezut�n ezekre a kis nyilakra kattintva, vagy a billenty�zet fel �s le ny�lbillenty�it lenyomva keresse meg a k�v�nt r�gi�t a list�ban.";
    Agent_Speak(L_KeybdHowToSelectLanguage5_Text);

    var L_KeybdHowToSelectLanguage6_Text = "Amikor megjelenik a k�v�nt nyelv, kattintson r�, vagy nyomja le az Enter billenty�t.";
    Agent_Speak(L_KeybdHowToSelectLanguage6_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.LangName, "Left");

    var L_KeybdHowToSelectLanguage7_Text = "A kiv�lasztott nyelv ebben a mez�ben jelenik meg.";
    Agent_Speak(L_KeybdHowToSelectLanguage7_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectKeyboard() 
{		
    var L_KeybdHowToSelectKeyboard1_Text = "Ezen a list�n a billenty�zetek szerepelnek �b�c�rendben.";
    Agent_Speak(L_KeybdHowToSelectKeyboard1_Text);
    
    Agent_GestureAtElement(g.selKeyboard, "Left");
        
    var L_KeybdHowToSelectKeyboard2_Text = "Kattintson ide, vagy a billenty�zet tabul�torbillenty�j�nek nyomogat�s�val l�pjen ide.";
    Agent_Speak(L_KeybdHowToSelectKeyboard2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selKeyboard, "Right");
        
    var L_KeybdHowToSelectKeyboard3_Text = "A lista elemeit az apr� ny�lgombokra val� r�kattint�ssal, vagy a billenty�zeten l�v� fel �s le ny�l nyomogat�s�val n�zheti v�gig.";
    Agent_Speak(L_KeybdHowToSelectKeyboard3_Text);
        
    var L_KeybdHowToSelectKeyboard4_Text = "Ha az a billenty�zet l�tszik, amelyet ezen a sz�m�t�g�pen haszn�l, kattintson r�, vagy nyomja meg az Enter billenty�t.";
    Agent_Speak(L_KeybdHowToSelectKeyboard4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.KeyboardName, "Left");

    var L_KeybdHowToSelectKeyboard5_Text = "A kiv�lasztott billenty�zet-kioszt�s ebben a mez�ben jelenik meg.";
    Agent_Speak(L_KeybdHowToSelectKeyboard5_Text);
    
    Agent_Play("RestPose");
}



function Agent_EulaAddCommands() 
{
    var L_EulaCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_EulaCommand2_Text = "H&ogyan adom meg a v�laszt?";
    var L_EulaCommand3_Text = "Pontosan mi i&s az EULA?";
    var L_EulaCommand4_Text = "Mi v&an az EULA-ban?";
    var L_EulaCommand5_Text = "&Mi�rt nem haszn�lhat� a Tov�bb gomb?";
    var L_EulaCommand6_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
        var L_EulaMenuCommand5_Text = "Mi�rt nem hasz&n�lhat� a Tov�bb gomb?";

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
    var L_EulaAboutThisStep1_Text = "Ezen a k�perny�n a Microsoft Windows licencszerz�d�s�t olvashatja el, majd jelezheti, hogy elfogadja-e.";
    Agent_Speak(L_EulaAboutThisStep1_Text);		
    
    Agent_GestureAtElement(g.txtEULA,"Left");
        
    var L_EulaAboutThisStep2_Text = "Csak akkor haszn�lhatja a Windows rendszert, ha elfogadja ezt a szerz�d�st.";
    Agent_Speak(L_EulaAboutThisStep2_Text);
    
    Agent_Play("RestPose");
}

function Agent_EulaHowToAnswer() 
{		
    Agent_GestureAtElement(g.radioAgree,"Left");
    
    var L_EulaHowToAnswer1_Text = "Egyszer�en vigye a mutat�t a v�lasz�t�l balra l�v� feh�r k�r f�l�, majd kattintson egyszer.";
    Agent_Speak(L_EulaHowToAnswer1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaHowToAnswer2_Text = "Majd nyomja meg a Tov�bb gombot.";
    Agent_Speak(L_EulaHowToAnswer2_Text);
}

function Agent_EulaWhatIsEula() 
{		
    var L_EulaWhatIsEula1_Text = "A Microsoft term�kek haszn�lata a v�gfelhaszn�l�i licencszerz�d�s (EULA) felt�telei, valamint a szerz�i jog hat�lya al� esik.";
    Agent_Speak(L_EulaWhatIsEula1_Text);
        
    var L_EulaWhatIsEula2_Text = "Az EULA az a szerz�d�s, amely kijel�li a licencben foglalt term�k jogszer� haszn�lat�nak kereteit, �s kifejezett jogot ad annak a term�knek a sz�m�t�g�pen val� haszn�lat�ra.";
    Agent_Speak(L_EulaWhatIsEula2_Text);
}

function Agent_EulaWhatDoesEulaSay() 
{		
    var L_EulaWhatDoesEulaSay1_Text = "Amint elfogadja a felt�teleit, a v�gfelhaszn�l�i licencszerz�d�s enged�lyt ad a Windows XP haszn�lat�ra, s�t bizonyos tov�bbi jogokkal is felruh�zza.";
    Agent_Speak(L_EulaWhatDoesEulaSay1_Text);
        
    var L_EulaWhatDoesEulaSay2_Text = "Bizonyos korl�tokat is szab a Windows XP haszn�lata sz�m�ra.";
    Agent_Speak(L_EulaWhatDoesEulaSay2_Text);	
    
    Agent_GestureAtElement(g.txtEULA,"Right");	
        
    var L_EulaWhatDoesEulaSay3_Text = "A r�szletes felt�telek elolvas�s�hoz lapozzon a 'Hasznos�t�si jogok' szakaszhoz.";
    Agent_Speak(L_EulaWhatDoesEulaSay3_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatDoesEulaSay4_Text = "A v�gfelhaszn�l�i licencszerz�d�s (EULA) a korl�tozott garanci�t is ismerteti, valamint azt, hogy milyen felt�telek mellett k�sz�thet biztons�gi m�solatot vagy arch�v m�solatot a Windows XP-p�ld�ny�r�l.";
    Agent_Speak(L_EulaWhatDoesEulaSay4_Text);
}

function Agent_EulaWhereIsNextButton() 
{		
    var L_EulaWhereIsNextButton1_Text = "A Tov�bb gomb egyel�re nem �rhet� el, mivel m�g nem jelezte, hogy elfogadja-e ezt a licencszerz�d�st.";
    Agent_Speak(L_EulaWhereIsNextButton1_Text);
        
    var L_EulaWhereIsNextButton2_Text = "El�bb r� kell kattintania az Igen vagy a Nem v�laszra.";
    Agent_Speak(L_EulaWhereIsNextButton2_Text);
}

function Agent_EulaWhatToDoNext() 
{			
    Agent_GestureAtElement(g.radioAgree,"Left");
    	
    var L_EulaWhatToDoNext1_Text = "Miut�n elolvasta a licencszerz�d�st, az Igen kiv�laszt�s�val jelezze, hogy elfogadja.";
    Agent_Speak(L_EulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatToDoNext2_Text = "Ha nem akarja elfogadni, kattintson a Nem v�laszra.";
    Agent_Speak(L_EulaWhatToDoNext2_Text);
        
    var L_EulaWhatToDoNext3_Text = "Ha tov�bb k�v�nja haszn�lni a Windows rendszert, el kell fogadnia ezt a szerz�d�st.";
    Agent_Speak(L_EulaWhatToDoNext3_Text);
    			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_EulaWhatToDoNext4_Text = "Ezut�n a k�vetkez� k�perny�re val� tov�bbl�p�shez kattintson a Tov�bb gombra.";
    Agent_Speak(L_EulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_BadEulaAddCommands() {

    var L_BadEulaCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_BadEulaCommand2_Text = "M&it mond az EULA?";
    var L_BadEulaCommand3_Text = "Mi t�rt�nik akkor, &ha nem fogadom el az EULA-t?";
    var L_BadEulaCommand4_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
    var L_BadEulaAboutThisStep1_Text = "Az el�z� k�perny�n �gy d�nt�tt, hogy nem fogadja el a licencszerz�d�st.";
    Agent_Speak(L_BadEulaAboutThisStep1_Text);

    var L_BadEulaAboutThisStep2_Text = "Ebben az esetben nem fogja tudni haszn�lni a Windows rendszert.";
    Agent_Speak(L_BadEulaAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadEulaAboutThisStep3_Text = "De a Vissza gombra t�rt�n� r�kattint�ssal visszat�rhet az el�z� k�perny�h�z, �s elfogadhatja a szerz�d�st.";
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
        
    var L_BadEulaAboutThisStep4_Text = "Ellenkez� esetben meger�s�theti, hogy felhagy a Windows haszn�lat�val, majd kikapcsolhatja a sz�m�t�g�pet.";
    Agent_Speak(L_BadEulaAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_BadEulaWhatDoesEulaSay()
{
    var L_BadEulaWhatDoesEulaSay1_Text = "Amint elfogadja a felt�teleit, a v�gfelhaszn�l�i licencszerz�d�s enged�lyt ad a Windows XP haszn�lat�ra, s�t bizonyos tov�bbi jogokkal is felruh�zza.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay1_Text);

    var L_BadEulaWhatDoesEulaSay2_Text = "Bizonyos korl�tokat is szab a Windows XP haszn�lata sz�m�ra.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay2_Text);

    var L_BadEulaWhatDoesEulaSay3_Text = "A r�szletek elolvas�s�hoz kattintson a Vissza gombra, nyissa meg a licencszerz�d�st, majd lapozzon a 'Haszn�lati jogok' szakaszhoz.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay3_Text);
        
    var L_BadEulaWhatDoesEulaSay4_Text = "A v�gfelhaszn�l�i licencszerz�d�s (EULA) a korl�tozott garanci�t is ismerteti, valamint azt, hogy milyen felt�telek mellett k�sz�thet biztons�gi m�solatot vagy arch�v m�solatot a Windows XP-p�ld�ny�r�l.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay4_Text);
}

function Agent_BadEulaWhatIfIDontAcceptEula()
{
    var L_BadEulaWhatIfIDontAcceptEula1_Text = "Mivel a v�gfelhaszn�l�i licencszerz�d�s ruh�zza fel a Windows XP haszn�lati jog�val, csak akkor kezdheti el haszn�lni a Windows XP rendszert, ha elfogadja a szerz�d�st.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadEulaWhatIfIDontAcceptEula2_Text = "Ha �gy d�nt, hogy nem fogadja el, akkor a Kikapcsol�s gombra val� r�kattint�ssal kikapcsolhatja a sz�m�t�g�pet.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula2_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatIfIDontAcceptEula3_Text = "Ha �jra bekapcsolja a sz�m�t�g�pet, ugyanez a k�perny� fog megjelenni.";
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
    
    var L_BadEulaWhatToDoNext1_Text = "Ha �gy d�nt, hogy elfogadja a licencszerz�d�st, kattintson a Vissza gombra.";
    Agent_Speak(L_BadEulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatToDoNext2_Text = "A folyamat folytat�s�hoz �s a Windows haszn�lat�nak megkezd�s�hez el kell fogadnia a szerz�d�st.";
    Agent_Speak(L_BadEulaWhatToDoNext2_Text);

    var L_BadEulaWhatToDoNext3_Text = "Ha �gy d�nt, hogy nem fogadja el, a Kikapcsol�s gombra val� r�kattint�ssal kapcsolja ki a sz�m�t�g�pet.";
    Agent_Speak(L_BadEulaWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_BadEulaWhatToDoNext4_Text = "Ha �jra bekapcsolja a sz�m�t�g�pet, ugyanez a k�perny� fog megjelenni.";
    Agent_Speak(L_BadEulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}




function Agent_ProductKeyAddCommands() 
{
    var L_ProductKeyAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_ProductKeyAddCommands2_Text = "Szeretn�k t�&bbet megtudni a term�kkulcsr�l";
    var L_ProductKeyAddCommands4_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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

        var L_ProductKeyAddCommands3_Text = "Mi�rt nem hasz&n�lhat� a Tov�bb gomb?";

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
    var L_ProductKeyAboutThisStep1_Text = "Ezen a k�perny�n �rja be 25 karakterb�l �ll� term�kkulcsot, amelyet a sz�m�t�g�p gy�rt�j�t�l kellett megkapnia.";
    Agent_Speak(L_ProductKeyAboutThisStep1_Text);

    var L_ProductKeyAboutThisStep2_Text = "Ha a term�kkulcs nincs rajta a CD tokj�n, n�zze meg a sz�m�t�g�pen l�v� eredetis�get igazol� tan�s�tv�ny matric�t, vagy az 'Els� l�p�sek' �tmutat� h�toldal�t.";
    Agent_Speak(L_ProductKeyAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pid1,"Left");

    var L_ProductKeyAboutThisStep3_Text = "Az ide be�rt bet�k automatikusan nagybet�v� v�lnak.";
    Agent_Speak(L_ProductKeyAboutThisStep3_Text);
    
    Agent_Play("RestPose");
        
    var L_ProductKeyAboutThisStep4_Text = "A l�p�s ut�n regisztr�lhatja a sz�m�t�g�pet �s a Microsoft Windows-p�ld�ny�t.";
    Agent_Speak(L_ProductKeyAboutThisStep4_Text);
        
    var L_ProductKeyAboutThisStep5_Text = "Ez nagyon egyszer�, r�ad�sul sokf�le el�nyh�z juthat hozz�, ha regisztr�lja a Windows rendszert.";
    Agent_Speak(L_ProductKeyAboutThisStep5_Text);
}

function Agent_ProductKeyWhatIsProdKey()
{
    var L_ProductKeyWhatIsProdKey1_Text = "A Windows Microsoft �ltal el��ll�tott p�ld�nyai egyedi term�kkulccsal vannak k�dolva.";
    Agent_Speak(L_ProductKeyWhatIsProdKey1_Text);

    var L_ProductKeyWhatIsProdKey2_Text = "A term�kkulcs abban seg�t, hogy meggy�z�dhessen arr�l, hogy eredeti Microsoft-term�ket v�s�rolt.";
    Agent_Speak(L_ProductKeyWhatIsProdKey2_Text);

    var L_ProductKeyWhatIsProdKey3_Text = "Abban is seg�t, hogy megv�dje a Windows kal�zp�ld�nya haszn�lat�val j�r� vesz�lyekt�l.";
    Agent_Speak(L_ProductKeyWhatIsProdKey3_Text);
        
    var L_ProductKeyWhatIsProdKey4_Text = "A term�kkulcs bizonyos v�s�rl�i el�ny�kre is feljogos�tja, p�ld�ul tan�csad�s ig�nybev�tel�re, marketingszolg�ltat�sokra, friss�t�sekre �s webes akci�s aj�nlatokra.";
    Agent_Speak(L_ProductKeyWhatIsProdKey4_Text);
}

function Agent_ProductKeyWhyNextNotAvailable()
{
    var L_ProductKeyWhyNextNotAvailable1_Text = "A Tov�bb gomb nem �rhet� el, mivel nem �rt be �rv�nyes term�kkulcsot.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable1_Text);

    var L_ProductKeyWhyNextNotAvailable2_Text = "�rv�nyes term�kazonos�t�t kell be�rnia.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable2_Text);

    var L_ProductKeyWhyNextNotAvailable3_Text = "Ezut�n m�r folytathatja a Tov�bb gombra kattintva.";
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
    
    var L_ProductKeyWhatToDoNext1_Text = "Az �rv�nyes term�kazonos�t� be�r�sa ut�n kattintson a Tov�bb gombra.";
    Agent_Speak(L_ProductKeyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}




function Agent_Reg1AddCommands() 
{
    var L_Reg1Command1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_Reg1Command2_Text = "T&udnival�k a regisztr�ci�val kapcsolatban";
    var L_Reg1Command3_Text = "H&ogyan tudom most elv�gezni a regisztr�ci�t?";
    var L_Reg1Command4_Text = "Regisztr�l&hatom k�s�bb is a term�ket?";
    var L_Reg1Command5_Text = "Mi�rt �rd&emes regisztr�lni?";
    var L_Reg1Command6_Text = "Tu&dnival�k az adatok megoszt�s�val kapcsolatban";

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
    var L_Reg1AboutThisStep1_Text = "Ez a regisztr�l�sra szolg�l� szakasz kezdete.";
    Agent_Speak(L_Reg1AboutThisStep1_Text);

    var L_Reg1AboutThisStep2_Text = "Itt regisztr�lhatja a saj�t Windows-p�ld�ny�t.";
    Agent_Speak(L_Reg1AboutThisStep2_Text);

    var L_Reg1AboutThisStep3_Text = "Ha regisztr�lja a p�ld�nyt, kihaszn�lhatja a csak Microsoft-�gyfelek sz�m�ra el�rhet� el�ny�ket.";
    Agent_Speak(L_Reg1AboutThisStep3_Text);
        
    var L_Reg1AboutThisStep4_Text = "P�ld�ul �rtes�t�st kap a term�kfriss�t�sekr�l, illetve hozz�f�r�st szerez a Microsoft d�jnyertes term�kt�mogat�si szolg�ltat�saihoz.";
    Agent_Speak(L_Reg1AboutThisStep4_Text);
        
    var L_Reg1AboutThisStep5_Text = "Ezen a k�perny�n azt d�ntheti el, hogy hogyan szeretn� regisztr�lni a term�ket.";
    Agent_Speak(L_Reg1AboutThisStep5_Text);
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");
        
    var L_Reg1AboutThisStep6_Text = "Ha t�bbet szeretne megtudni a Microsoft adatv�delmi szab�lyzat�r�l, kattintson erre a hivatkoz�sra.";
    Agent_Speak(L_Reg1AboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1AboutRegistration()
{    
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1AboutRegistration1_Text = "A regisztr�l�si folyamat elind�t�s�hoz kattintson erre a hivatkoz�sra, majd kattintson a Tov�bb gombra.";
    Agent_Speak(L_Reg1AboutRegistration1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.rb_reg_ms_no,"Left");

    var L_Reg1AboutRegistration2_Text = "Vagy ha ink�bb nem regisztr�lja a rendszert, kattintson erre a m�sodik lehet�s�gre, majd a \"Tov�bb\" gombra.";
    Agent_Speak(L_Reg1AboutRegistration2_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1HowToRegister()
{      
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1HowToRegister1_Text = "Ha regisztr�lni k�v�nja a Windows-p�ld�ny�t, �gyeljen arra, hogy az Igen lehet�s�g legyen bejel�lve.";
    Agent_Speak(L_Reg1HowToRegister1_Text); 
    
    Agent_Play("RestPose");

    var L_Reg1HowToRegister2_Text = "Ezut�n kattintson a Tov�bb gombra.";
    Agent_Speak(L_Reg1HowToRegister2_Text);
}

function Agent_Reg1RegisterLater()
{
    var L_Reg1RegisterLater1_Text = "Ha most kihagyja a regisztr�l�st, a Windows telep�t�s�nek befejez�s�t k�vet�en is regisztr�lhatja Windows-p�ld�ny�t.";
    Agent_Speak(L_Reg1RegisterLater1_Text);

    var L_Reg1RegisterLater2_Text = "Egyszer�en kattintson a Start men� Futtat�s parancs�ra, majd �rja be a regwiz /r parancsot.";
    Agent_Speak(L_Reg1RegisterLater2_Text);

    var L_Reg1RegisterLater3_Text = "Ha elfelejti ezeket a l�p�seket, kattintson a Start men� S�g� �s t�mogat�s parancs�ra. Sok m�s �rt�kes inform�ci�n k�v�l a k�rd�seire is meg fogja tal�lni a v�laszt.";
    Agent_Speak(L_Reg1RegisterLater3_Text);
}

function Agent_Reg1WhyRegister()
{
    var L_Reg1WhyRegister1_Text = "Ha regisztr�lja Windows-p�ld�ny�t, kihaszn�lhatja a csak Microsoft-�gyfelek sz�m�ra el�rhet� el�ny�ket.";
    Agent_Speak(L_Reg1WhyRegister1_Text);

    var L_Reg1WhyRegister2_Text = "�gy p�ld�ul �rtes�t�st kap a term�kfriss�t�sekr�l, �s hozz�f�r�st szerez a Microsoft d�jnyertes term�kt�mogat�si szolg�ltat�saihoz is.";
    Agent_Speak(L_Reg1WhyRegister2_Text);
}

function Agent_Reg1AboutSharingInfo()
{
    
    if (!window.external.get_RetailOOBE()) 
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Ezeknek a lehet�s�geknek a bejel�l�s�vel azt jelzi, hogy a Microsoft �s a sz�m�t�g�p gy�rt�j�nak rendelkez�s�re bocs�tja a regisztr�ci�s adatait.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text); 
    
        Agent_Play("RestPose");
    }
    else
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Ezeknek a lehet�s�geknek a bejel�l�s�vel azt jelzi, hogy a Microsoft rendelkez�s�re bocs�tja a regisztr�ci�s adatait.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");     
    }
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");

    var L_Reg1AboutSharingInfo2_Text = "Ha t�bbet szeretne megtudni a Microsoft adatv�delmi szab�lyzat�r�l, kattintson erre a hivatkoz�sra.";
    Agent_Speak(L_Reg1AboutSharingInfo2_Text);
    
    Agent_Play("RestPose");
    
    if (!window.external.get_RetailOOBE()) 
    {           
        Agent_GestureAtElement(g.reg1_spn3,"Left");
                
        var L_Reg1AboutSharingInfo3_Text = "Ha t�bbet szeretne megtudni a(z) %1 adatv�delmi szab�lyzat�r�l, kattintson erre a hivatkoz�sra.";
        Agent_Speak(ApiObj.FormatMessage(L_Reg1AboutSharingInfo3_Text, g_OEMNameStr));
    
        Agent_Play("RestPose");
    }
}




function Agent_Reg3AddCommands() 
{
    var L_Reg3Command1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_Reg3Command2_Text = "H&ogyan tudom m�dos�tani az adatokat?";
    var L_Reg3Command3_Text = "Tu&dnival�k az adatok megoszt�s�val kapcsolatban";

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
    var L_Reg3AboutThisStep1_Text = "A Microsoft Windows regisztr�l�s�hoz meg kell adnia az ezen a k�perny�n k�rt adatokat.";
    Agent_Speak(L_Reg3AboutThisStep1_Text);
    
    Agent_GestureAtElement(g.UserCity,"Left");

    var L_Reg3AboutThisStep2_Text = "Mindegyik mez�ben fel kell t�ntetnie az adatokat, kiv�ve azokat, amelyek 'Nem k�telez�' c�mk�vel vannak megjel�lve.";
    Agent_Speak(L_Reg3AboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_Reg3AboutThisStep3_Text = "�m nagyszer� lenne, ha a nem k�telez� adatokat is megadn�.";
    Agent_Speak(L_Reg3AboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_Reg3AboutThisStep4_Text = "Amikor befejezte, kattintson a Tov�bb gombra.";
    Agent_Speak(L_Reg3AboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg3HowToChangeInfo()
{
    var L_Reg3HowToChangeInfo1_Text = "A mez�k belsej�ben n�h�ny tan�ccsal jelezt�k, hogy hogyan kell �ket kit�lteni.";
    Agent_Speak(L_Reg3HowToChangeInfo1_Text);
    
    Agent_GestureAtElement(g.UserLastName,"Left");

    var L_Reg3HowToChangeInfo2_Text = "Kattintson p�ld�ul a Vezet�kn�v mez�re, majd kezdje el be�rni a nev�t.";
    Agent_Speak(L_Reg3HowToChangeInfo2_Text);

    var L_Reg3HowToChangeInfo3_Text = "A mez�ben megjelenik egy villog� f�gg�leges vonal, m�s n�ven kurzor.";
    Agent_Speak(L_Reg3HowToChangeInfo3_Text);

    var L_Reg3HowToChangeInfo4_Text = "A be�rt karakterek a kurzorn�l jelennek meg.";
    Agent_Speak(L_Reg3HowToChangeInfo4_Text);
    
    Agent_Play("RestPose");

    var L_Reg3HowToChangeInfo5_Text = "A kurzort a billenty�zet jobbra �s balra nyil�nak megnyom�s�val mozgathatja a sz�vegen bel�l.";
    Agent_Speak(L_Reg3HowToChangeInfo5_Text);

    var L_Reg3HowToChangeInfo6_Text = "A kurzort k�vet� karaktereket a Delete billenty�vel t�r�lheti, a Vissza billenty�vel pedig a kurzor el�tti karaktereket t�vol�thatja el.";
    Agent_Speak(L_Reg3HowToChangeInfo6_Text);

    var L_Reg3HowToChangeInfo7_Text = "Ha be szeretne sz�rni egy karaktert, vigye a mutat�t a mez�n bel�l oda, ahova be szeretn� �rni a karaktert, majd kattintson egyet.";
    Agent_Speak(L_Reg3HowToChangeInfo7_Text);

    var L_Reg3HowToChangeInfo8_Text = "Majd �rja be a besz�rni k�v�nt karaktert.";
    Agent_Speak(L_Reg3HowToChangeInfo8_Text);

    var L_Reg3HowToChangeInfo9_Text = "Ne t�r�dj�n azzal, hogy ha nem �r semmit egy mez�be, m�g mindig l�tszik benne a tan�cs.";
    Agent_Speak(L_Reg3HowToChangeInfo9_Text);

    var L_Reg3HowToChangeInfo10_Text = "A tan�cs csak �nnek ny�jt seg�ts�get, nem r�sze a regisztr�ci�s adatoknak.";
    Agent_Speak(L_Reg3HowToChangeInfo10_Text);
}

function Agent_Reg3AboutSharingInfo()
{    
    if (!window.external.get_RetailOOBE()) 
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
        
        var L_Reg3AboutSharingInfo1_Text = "Ezeknek a lehet�s�geknek a bejel�l�s�vel azt jelzi, hogy a Microsoft �s a sz�m�t�g�p gy�rt�j�nak rendelkez�s�re bocs�tja a regisztr�ci�s adatait.";
        Agent_Speak(L_Reg3AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");
    }
    else
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
         
        var L_Reg3AboutSharingInfo1_Text = "Ezeknek a lehet�s�geknek a bejel�l�s�vel azt jelzi, hogy a Microsoft rendelkez�s�re bocs�tja a regisztr�ci�s adatait.";
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

        

        L_Register3PlayCheckBoxScript1_Text = "A jelenlegi be�ll�t�s szerint a regisztr�ci�s adatokat mind a Microsoft, mind a sz�m�t�g�p gy�rt�ja megkapja.";
        L_Register3PlayCheckBoxScript2_Text = "A jelenlegi be�ll�t�s szerint a regisztr�ci�s adatokat csak a Microsoft kapja meg, a sz�m�t�g�p gy�rt�ja nem.";
        L_Register3PlayCheckBoxScript3_Text = "A jelenlegi be�ll�t�s szerint a regisztr�ci�s adatokat csak a sz�m�t�g�p gy�rt�ja kapja meg, a Microsoft nem.";
        L_Register3PlayCheckBoxScript4_Text = "A jelenlegi be�ll�t�s szerint a regisztr�ci�s adatokat nem kapja meg sem a Microsoft, sem a sz�m�t�g�p gy�rt�ja.";

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

        var L_Register3PlayCheckBoxScript5_Text = "Ezek az adatok teszik lehet�v� sz�mukra, hogy t�j�koztat�st k�ldjenek a term�kfriss�t�sekr�l �s m�s, a regisztr�lt felhaszn�l�knak j�r� szolg�ltat�sokat ny�jthassanak.";
        Agent_Speak(L_Register3PlayCheckBoxScript5_Text);

        var L_Register3PlayCheckBoxScript6_Text = "Ha m�dos�tani k�v�nja az adatok elk�ld�s�nek be�ll�t�s�t,";
        Agent_Speak(L_Register3PlayCheckBoxScript6_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(elem, "TopCenterWidth");
		else
			Agent_GestureAtElement(elem, "Left");

        var L_Register3PlayCheckBoxScript7_Text = "kattintson az itt l�that� mez�kre.";
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

        var L_Register3EncourageTabKey1_Text = "L�pjen ide a TAB billenty� seg�ts�g�vel.";
        Agent_Speak(L_Register3EncourageTabKey1_Text);
}

function Agent_Register3EncourageMouseClick() {

        var L_Register3EncourageMouseClick1_Text = "Helyezze ide az eg�rmutat�t �s kattintson a bal gombbal.";
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

                        var L_Register3PlayElementScript1_Text = "Ebbe a mez�be �rja be az ut�nev�t.";
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

                        var L_Register3PlayElementScript3_Text = "Ide �rhatja be a m�sodik ut�nev�t.";
                        Agent_Speak(L_Register3PlayElementScript3_Text);

                        break;

                case "UserLastName":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript4_Text = "Ebbe a mez�be �rja be a vezet�knev�t.";
                        Agent_Speak(L_Register3PlayElementScript4_Text);

                        break;

                case "UserAddress":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript5_Text = "Itt adhatja meg, hogy melyik utc�ban lakik.";
                        Agent_Speak(L_Register3PlayElementScript5_Text);

                        break;

                case "UserAddress2":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        Agent_Play("Think");

                        var L_Register3PlayElementScript6_Text = "Ezt a mez�t haszn�lhatja fel, ha t�bb hely sz�ks�ges a c�m megad�s�hoz. Ellenkez� esetben a TAB billenty�vel l�phet tov�bb.";
                        Agent_Speak(L_Register3PlayElementScript6_Text);

                        Agent_Play("RestPose");

                        break;

                case "UserCity":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript7_Text = "Itt adja meg, hogy melyik v�rosban, illetve telep�l�sen lakik.";
                        Agent_Speak(L_Register3PlayElementScript7_Text);

                        break;

                case "UserStateTextBox":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript8_Text = "Ide �rhatja be a megfelel� �llamot, illetve megy�t.";
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
                                var L_Register3PlayElementScript91_Text = "Ki kell v�lasztania a megfelel� �llamot.";
                                Agent_Speak(L_Register3PlayElementScript91_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript92_Text = "Az �llamok list�j�nak megjelen�t�s�hez kattintson az eg�rrel a lefel� mutat� ny�lra.";
                                Agent_Speak(L_Register3PlayElementScript92_Text);

                        }

                        else if (elem.id == "selCAProvince") {
                                var L_Register3PlayElementScript93_Text = "Ki kell v�lasztania a megfelel� megy�t.";
                                Agent_Speak(L_Register3PlayElementScript93_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript94_Text = "Az megy�k list�j�nak megjelen�t�s�hez kattintson az eg�rrel a lefel� mutat� ny�lra.";
                                Agent_Speak(L_Register3PlayElementScript94_Text);

                        }

                        else {
                                var L_Register3PlayElementScript95_Text = "Ki kell v�lasztania a megfelel� orsz�got vagy ter�letet. Kattintson az eg�rrel a lefel� mutat� ny�lra.";
                                Agent_Speak(L_Register3PlayElementScript95_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript96_Text = "Az orsz�gok �s ter�letek list�j�nak megjelen�t�s�hez kattintson az eg�rrel a lefel� mutat� ny�lra.";
                                Agent_Speak(L_Register3PlayElementScript96_Text);

                        }

                        Agent_Play("Explain");

                        var L_Register3PlayElementScript11_Text = "Ezut�n kattintson a megfelel� �llamra.";
                        var L_Register3PlayElementScript12_Text = "Ezut�n kattintson a megfelel� megy�re.";
                        var L_Register3PlayElementScript13_Text = "Ezut�n kattintson a megfelel� orsz�gra vagy ter�letre.";

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

                        var L_Register3PlayElementScript14_Text = "Itt adhatja meg az ir�ny�t�sz�m�t.";
                        Agent_Speak(L_Register3PlayElementScript14_Text);

                        break;

                case "UserEmailAddress":

                        if (elem.value == "") {

							if (g.document.dir == "rtl") 
								Agent_GestureAtElement(elem, "Left");
		
							else
								Agent_GestureAtElement(elem, "Right");

                            var L_Register3PlayElementScript15_Text = "Az e-mail c�m megad�sa nem k�telez�, de �ltal�ban ezen a m�don vessz�k fel a kapcsolatot �gyfeleinkkel.";
                            Agent_Speak(L_Register3PlayElementScript15_Text);
							
							g_bAgentRegister3ShortEmail = true;
							
							Agent_Play("Explain");
							
                            var L_Register3PlayElementScript16_Text = "Ha nem rendelkezik e-mail c�mmel, hagyja a mez�t �resen.";
                            Agent_Speak(L_Register3PlayElementScript16_Text);
							
							Agent_Play("Blink");
							                             
                        }
                        
                        else if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) {

	                       if (g_strAgentLastFocusID == "UserEmailAddress") {

								Agent_Play("Decline");
								
								var L_Register3PlayElementScript17_Text = "A megadott e-mail  c�m nem �rv�nyes.";
								Agent_Speak(L_Register3PlayElementScript17_Text);

								Agent_ExplainEmailAddress();
								
								if (g.document.dir == "rtl")
									Agent_GestureAtElement(elem, "Left");
								
								else
									Agent_GestureAtElement(elem, "Right");
                                        
								Agent_Play("Alert");
                                        
								var L_Register3PlayElementScript18_Text = "Ha nem rendelkezik e-mail c�mmel, hagyja a mez�t �resen.";
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
        var L_ExplainEmailAddress1_Text = "Az e-mail c�mek k�t r�szb�l �llnak.";
        Agent_Speak(L_ExplainEmailAddress1_Text);

        var L_ExplainEmailAddress2_Text = "Az els� r�sz a fi�k neve, melyet a @ jel k�vet.  A m�sodik r�sz a tartom�nyn�v.";
        Agent_Speak(L_ExplainEmailAddress2_Text);

        var L_ExplainEmailAddress3_Text = "�gy n�z ki egy e-mail c�m: %s";
        var re = /%s/i;
        var strEmail = "\\map=\"\"=\"greatcustomer@msn.com\"\\";

        Agent_Speak(L_ExplainEmailAddress3_Text.replace(re, strEmail) + "\\pau=2000\\");

        Agent_Play("RestPose");
}







function Agent_PrivacyMSAddCommands() 
{
    var L_PrivacyMSCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_PrivacyMSCommand2_Text = "Mit jelent &a biztons�gos kiszolg�l�?";
    var L_PrivacyMSCommand3_Text = "Mi az a coo&kie?";
    var L_PrivacyMSCommand4_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
    var L_PrivacyMSAboutThisStep1_Text = "Ezen a k�perny�n a Microsoft adatv�delmi nyilatkozata l�that�.";
    Agent_Speak(L_PrivacyMSAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.privtext,"Left");

    var L_PrivacyMSAboutThisStep2_Text = "Itt �tolvashatja a sz�veget.";
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

    var L_PrivacyMSAboutThisStep3_Text = "Ezut�n az el�z� k�perny�re val� visszat�r�shez kattintson a Vissza gombra.";
    Agent_Speak(L_PrivacyMSAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PrivacyMSWhatIsSecureServer()
{
    var L_PrivacyMSWhatIsSecureServer1_Text = "Kiszolg�l�nak az olyan sz�m�t�g�pet nevezz�k, amely megosztott er�forr�sokat (p�ld�ul adatokat) szolg�ltat egy h�l�zat t�bbi sz�m�t�g�pe sz�m�ra.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer1_Text);

    var L_PrivacyMSWhatIsSecureServer2_Text = "A biztons�gos kiszolg�l� pedig ezen bel�l egy olyan kiszolg�l�, amely biztons�gos tranzakci�k ny�jt�s�ra is k�pes, vagyis garant�lja, hogy a rajta t�rolt inform�ci�k nem lesznek  el�rhet�k jogosulatlan felek r�sz�re.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer2_Text);

    var L_PrivacyMSWhatIsSecureServer3_Text = "Amikor p�ld�ul regisztr�lja a term�ket a Microsoftn�l, a nev�re �s a lakc�m�re vonatkoz� adatok a Microsoft biztons�gos regisztr�ci�s kiszolg�l�j�n t�rol�dnak.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer3_Text);
        
    var L_PrivacyMSWhatIsSecureServer4_Text = "Ez�ltal az adatai titokban �s biztons�gban maradnak, a regisztr�ci� k�vetkezm�nyek�nt a Microsofton k�v�l semmilyen v�llalat vagy szem�ly sem fogja �nt megkeresni.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer4_Text);
}

function Agent_PrivacyMSWhatIsCookie()
{
    var L_PrivacyMSWhatIsCookie1_Text = "A cookie egy apr� adatf�jl, amely akkor t�rol�dik a sz�m�t�g�p�n, amikor bizonyos webhelyeket megl�togat.";
    Agent_Speak(L_PrivacyMSWhatIsCookie1_Text);

    var L_PrivacyMSWhatIsCookie2_Text = "A cookie �nre vonatkoz� alapadatokat tartalmaz (p�ld�ul az e-mail c�m�t), hogy ne kelljen �ket mindig �jra megadnia, ha ell�togat a webhelyre.";
    Agent_Speak(L_PrivacyMSWhatIsCookie2_Text);

    var L_PrivacyMSWhatIsCookie3_Text = "Ha p�ld�ul v�s�rol valamit egy webhelyen, el�fordulhat, hogy a webhely elk�ld egy az �n sz�ll�t�si adatait tartalmaz� cookie-t a sz�m�t�g�p�re.";
    Agent_Speak(L_PrivacyMSWhatIsCookie3_Text);
        
    var L_PrivacyMSWhatIsCookie4_Text = "�gy amikor legk�zelebb l�togat el arra a webhelyre, nem kell �jra megadnia ugyanazokat az adatokat.";
    Agent_Speak(L_PrivacyMSWhatIsCookie4_Text);
        
    var L_PrivacyMSWhatIsCookie5_Text = "Amikor regisztr�lja a term�ket a Microsoftn�l, a term�kazonos�t�, az �n neve �s lakc�me egy cookie form�j�ban t�rol�dik a sz�m�t�g�p�n.";
    Agent_Speak(L_PrivacyMSWhatIsCookie5_Text);
        
    var L_PrivacyMSWhatIsCookie6_Text = "�gy amikor legk�zelebb ell�togat a  www.microsoft.com c�mre, a webhely regisztr�lt Windows-felhaszn�l�k�nt fogja �nt felismerni.";
    Agent_Speak(L_PrivacyMSWhatIsCookie6_Text);
}

function Agent_PrivacyMSWhatToDoNext()
{    
    Agent_GestureAtElement(g.privtext,"Left");
    
    var L_PrivacyMSWhatToDoNext1_Text = "Ha az adatv�delmi nyilatkozat tov�bbi r�szeit is l�tni szeretn�, kattintson ebbe a t�glalapba.";
    Agent_Speak(L_PrivacyMSWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.privtext,"Right");

    var L_PrivacyMSWhatToDoNext2_Text = "Azut�n a Fel �s a Le ny�llal lapozhat a titokv�delmi nyilatkozatban.";
    Agent_Speak(L_PrivacyMSWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_PrivacyMSWhatToDoNext3_Text = "A billenty�zeten l�v� Page Down �s Page Up billenty�vel is mozoghat a sz�vegen bel�l.";
    Agent_Speak(L_PrivacyMSWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
        
    var L_PrivacyMSWhatToDoNext4_Text = "Amikor befejezi a titokv�delmi nyilatkozat olvas�s�t, a Vissza gombra val� r�kattint�ssal t�rhet vissza az el�z� regisztr�ci�s k�perny�h�z.";
    Agent_Speak(L_PrivacyMSWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}





function Agent_RefDialAddCommands() 
{
    var L_RefDialAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_RefDialAddCommands2_Text = "Mi legyen a k�vetkez� &l�p�sem?";

    g_AgentCharacter.Commands.Add("Agent_RefDialAboutThisStep", L_RefDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialWhatToDoNext", L_RefDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RefDialAboutThisStep()
{
    var L_RefDialAboutThisStep1_Text = "A Windows most felh�v egy ingyenesen h�vhat� telefonsz�mot.";
    Agent_Speak(L_RefDialAboutThisStep1_Text);

    var L_RefDialAboutThisStep2_Text = "Ez teszi lehet�v�, hogy megl�v� internetfi�kj�t haszn�lja a sz�m�t�g�pen.";
    Agent_Speak(L_RefDialAboutThisStep2_Text);
}

function Agent_RefDialWhatToDoNext()
{    
    Agent_GestureAtElement(g.btnManual,"Left");
    
    var L_RefDialWhatToDoNext1_Text = "Ha m�r van internetszolg�ltat�ja, vagy tudja, hogy melyik szolg�ltat�t k�v�nja haszn�lni, kattintson a Be�ll�t�sok gombra.";
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

    var L_RefDialWhatToDoNext2_Text = "Ha v�lasztani szeretne a k�zel�ben m�k�d� internetszolg�ltat�k k�z�l, kattintson a folytat�shoz a Tov�bb gombra.";
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

    var L_RefDialWhatToDoNext3_Text = "Az internetel�r�s be�ll�t�sa n�lk�li folytat�shoz kattintson a Kihagy�s gombra.";
    Agent_Speak(L_RefDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RefDialingAddCommands() 
{
    var L_RefDialingAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_RefDialingAddCommands2_Text = "Mi ez &a s�v a k�perny� k�zep�n?";
    var L_RefDialingAddCommands3_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
    var L_RefDialingAboutThisStep1_Text = "A Windows most kapcsolatba l�p a Microsoft Referral Service szolg�ltat�ssal, �s lek�ri a k�rzetben el�rhet� internetszolg�ltat�k list�j�t.";
    Agent_Speak(L_RefDialingAboutThisStep1_Text);

    var L_RefDialingAboutThisStep2_Text = "Kis t�relmet...";
    Agent_Speak(L_RefDialingAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingAboutThisStep3_Text = "Ig�ny szerint ki is hagyhatja ezt a l�p�st, illetve visszat�rhet az el�z� k�perny�re.";
    Agent_Speak(L_RefDialingAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RefDialingWhatsThisBar()
{    
    Agent_GestureAtElement(g.tblProg,"Left");
    
    var L_RefDialingWhatsThisBar1_Text = "Ez az �llapotjelz�, amely jelzi, hogy hol tart a folyamaton bel�l.";
    Agent_Speak(L_RefDialingWhatsThisBar1_Text);

    var L_RefDialingWhatsThisBar2_Text = "A s�v folyamatosan kit�lti a t�glalapot, amint a rendszer let�lti a Referral Service �ltal szolg�ltatott adatokat.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
    
    Agent_Play("RestPose");

    var L_RefDialingWhatsThisBar3_Text = "Amikor az �sszes inform�ci� let�lt�d�tt, a t�glalap teljesen megtelik, a program pedig automatikusan tov�bbl�p a k�vetkez� k�perny�re.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
}

function Agent_RefDialingWhatToDoNext()
{
    var L_RefDialingWhatToDoNext1_Text = "V�rjon, am�g a Windows a Microsoft Referral Service szolg�ltat�st�l a sz�m�t�g�pre let�lti az adatokat.";
    Agent_Speak(L_RefDialingWhatToDoNext1_Text);

    var L_RefDialingWhatToDoNext2_Text = "A let�lt�s bejez�d�se ut�n automatikusan megjelenik a k�vetkez� k�perny�.";
    Agent_Speak(L_RefDialingWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingWhatToDoNext3_Text = "Ha ki szeretn� hagyni ezt a l�p�st, kattintson a Kihagy�s gombra.";
    Agent_Speak(L_RefDialingWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RegDialAddCommands()
{
    var L_RegDialAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_RegDialAddCommands2_Text = "Mi legyen a k�vetkez� &l�p�sem?";

    g_AgentCharacter.Commands.Add("Agent_RegDialAboutThisStep", L_RegDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RegDialWhatToDoNext", L_RegDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RegDialAboutThisStep()
{
    var L_RegDialAboutThisStep1_Text = "A Windows a sz�m�t�g�pen kereszt�l egy ingyenesen h�vhat� telefonsz�m t�rcs�z�s�val kapcsolatba l�p a regisztr�ci�s szolg�ltat�ssal.";
    Agent_Speak(L_RegDialAboutThisStep1_Text);

    var L_RegDialAboutThisStep2_Text = "Kis t�relmet...";
    Agent_Speak(L_RegDialAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialAboutThisStep3_Text = "Ig�ny szerint ki is hagyhatja ezt a l�p�st, illetve visszat�rhet az el�z� k�perny�re.";
    Agent_Speak(L_RegDialAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RegDialWhatToDoNext()
{
    var L_RegDialWhatToDoNext1_Text = "V�rjon, am�g a Windows csatlakozik a regisztr�ci�s szolg�ltat�shoz.";
    Agent_Speak(L_RegDialWhatToDoNext1_Text);

    var L_RegDialWhatToDoNext2_Text = "Miut�n a Windows csatlakozott, automatikusan tov�bbl�p a k�vetkez� k�perny�re.";
    Agent_Speak(L_RegDialWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialWhatToDoNext3_Text = "Ha ki szeretn� hagyni ezt a l�p�st, kattintson a Kihagy�s gombra.";
    Agent_Speak(L_RegDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigDialAddCommands()
{
    var L_MigDialAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_MigDialAddCommands2_Text = "Mi legyen a k�vetkez� &l�p�sem?";

    g_AgentCharacter.Commands.Add("Agent_MigDialAboutThisStep", L_MigDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_MigDialWhatToDoNext", L_MigDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_MigDialAboutThisStep()
{
    var L_MigDialAboutThisStep1_Text = "A Windows most felh�v egy ingyenesen h�vhat� telefonsz�mot.";
    Agent_Speak(L_MigDialAboutThisStep1_Text);

    var L_MigDialAboutThisStep2_Text = "Ez teszi lehet�v�, hogy megl�v� internetfi�kj�t haszn�lja a sz�m�t�g�pen.";
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
    
    var L_MigDialWhatToDoNext1_Text = "A t�rcs�z�s megkezd�s�hez kattintson a Tov�bb gombra.";
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

    var L_MigDialWhatToDoNext2_Text = "Ha ki akarja hagyni ezt a l�p�st, kattintson a Kihagy�s gombra.";
    Agent_Speak(L_MigDialWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}





function Agent_MigListAddCommands() 
{
    
    
    
	var L_MigListAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
	var L_MigListAddCommands2_Text = "Mi legyen a k�vetkez� &l�p�sem?";
	
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
    var L_MigListAboutThisStep1_Text = "Ezen a k�perny�n jel�lheti ki a haszn�lni k�v�nt internetszolg�ltat�t (r�vid�tve: ISZ-t).";
    Agent_Speak(L_MigListAboutThisStep1_Text);

    var L_MigListAboutThisStep2_Text = "Ez teszi lehet�v�, hogy megl�v� internetfi�kj�t haszn�lja a sz�m�t�g�pen.";
    Agent_Speak(L_MigListAboutThisStep2_Text);
}

function Agent_MigListWhatToDoNext()
{
    Agent_GestureAtElement(g.selISPDropList,"Left");
    
    var L_MigListWhatToDoNext1_Text = "A list�ban kattintson a v�lasztott internetszolg�ltat�ra.";
    Agent_Speak(L_MigListWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_MigListWhatToDoNext2_Text = "Ha a lista nem tartalmazza a megfelel� szolg�ltat�t, kattintson a lista alj�n l�v� \"Az internetszolg�ltat�m nincs a list�n\" elemre.";
    Agent_Speak(L_MigListWhatToDoNext2_Text);

    var L_MigListWhatToDoNext3_Text = "Ezut�n l�pjen kapcsolatba az internetszolg�ltat�val, hogy ezen a sz�m�t�g�pen ism�t l�tre tudja hozni az internetfi�kot.";
    Agent_Speak(L_MigListWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_MigListWhatToDoNext4_Text = "Ezut�n kattintson a Tov�bb gombra.";
    Agent_Speak(L_MigListWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigPageAddCommands() 
{
	var L_MigPageAddCommands1_Text = "Mi a k�vetkez� &l�p�s?";
	var L_MigPageAddCommands2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
	var L_MigPageAddCommands3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";
	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_WhatToDoNext", L_MigPageAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_AboutThisStep", L_MigPageAddCommands2_Text);
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_HowToMoveOn", L_MigPageAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_MigPageCommand_WhatToDoNext() {
		
	var L_MigPageWhatToDoNext1_Text = "Ha ezzel a lappal elk�sz�lt.";
	Agent_Speak(L_MigPageWhatToDoNext1_Text);
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
			
	var L_MigPageWhatToDoNext2_Text = "Kattintson a Tov�bb gombra.";
	Agent_Speak(L_MigPageWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}

function Agent_MigPageCommand_AboutThisStep() 
{
	var L_MigPageAboutThisStep1_Text = "Ezen a k�perny�n megk�s�relj�k internetfi�kj�t a megl�v� szolg�ltat�j�n�l enged�lyezni.";
	Agent_Speak(L_MigPageAboutThisStep1_Text);
	
	Agent_Play("Pleased");
	
	var L_MigPageAboutThisStep2_Text = "K�vesse az internetszolg�ltat� k�perny�n megjelen� utas�t�sait.";
	Agent_Speak(L_MigPageAboutThisStep2_Text);
}

function Agent_MigPageCommand_HowToMoveOn() 
{
	var L_MigPageHowToMoveOn1_Text = "Miut�n v�grehajtotta a k�perny�n megjelen� utas�t�sokat,";
	Agent_Speak(L_MigPageHowToMoveOn1_Text);		
			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

	var L_MigPageHowToMoveOn2_Text = "Kattintson a Tov�bb gombra a folytat�shoz.";
	Agent_Speak(L_MigPageHowToMoveOn2_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPDialAddCommands() 
{
    var L_ISPDial1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_ISPDial2_Text = "Mi legyen a k�vetkez� &l�p�sem?";

    g_AgentCharacter.Commands.Add("Agent_ISPDialAboutThisStep", L_ISPDial1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDialWhatToDoNext", L_ISPDial2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPDialAboutThisStep()
{
    var L_ISPDialAboutThisStep1_Text = "A Windows most felh�v egy ingyenesen h�vhat� telefonsz�mot.";
    Agent_Speak(L_ISPDialAboutThisStep1_Text);

    var L_ISPDialAboutThisStep2_Text = "Ez az �j internetfi�k el�fizet�s�hez sz�ks�ges.";
    Agent_Speak(L_ISPDialAboutThisStep2_Text);

    var L_ISPDialAboutThisStep3_Text = "Kattintson a Tov�bb gombra.";
    Agent_Speak(L_ISPDialAboutThisStep3_Text);
}

function Agent_ISPDialWhatToDoNext()
{
    var L_ISPDialWhatToDoNext1_Text = "Kattintson a Tov�bb gombra a folytat�shoz.";
    Agent_Speak(L_ISPDialWhatToDoNext1_Text);

    var L_ISPDialWhatToDoNext2_Text = "Az internetel�r�s be�ll�t�sa n�lk�li folytat�shoz kattintson a Kihagy�s gombra. Ezt a l�p�s k�s�bb is b�rmikor elv�gezheti...";
    Agent_Speak(L_ISPDialWhatToDoNext2_Text);
}




function Agent_DialToneAddCommands()
{
    var L_DialToneAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_DialToneAddCommands2_Text = "Mi a teend�, ha �t &kell helyeznem a sz�m�t�g�pet?";
    var L_DialToneAddCommands3_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
    var L_DialToneAboutThisStep1_Text = "A Windows nem �rz�kelt t�rcsahangot.";
    Agent_Speak(L_DialToneAboutThisStep1_Text);

    var L_DialToneAboutThisStep2_Text = "Ennek sz�mos oka lehet.";
    Agent_Speak(L_DialToneAboutThisStep2_Text);

    var L_DialToneAboutThisStep3_Text = "El�sz�r ellen�rizze, hogy mindk�t v�g�n j�l van-e csatlakoztatva a sz�m�t�g�p telefonk�bele.";
    Agent_Speak(L_DialToneAboutThisStep3_Text);

    var L_DialToneAboutThisStep4_Text = "Azut�n gy�z�dj�n meg arr�l, hogy pillanatnyilag senki sem pr�b�lja haszn�lni a telefonvonalat.";
    Agent_Speak(L_DialToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneAboutThisStep5_Text = "majd kattintson az �jrat�rcs�z�s gombra a t�rcs�z�s megism�tl�s�hez.";
    Agent_Speak(L_DialToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_DialToneHowToMove()
{
    var L_DialToneHowToMove1_Text = "Ha �t kell helyeznie a sz�m�t�g�pet ahhoz, hogy csatlakoztatni lehessen a telefonvonalhoz, ne felejtse el kikapcsolni.";
    Agent_Speak(L_DialToneHowToMove1_Text);

    var L_DialToneHowToMove2_Text = "Amikor �jraind�tja a sz�m�t�g�pet, a Windows onnan folytatja ezt az elj�r�st, ahol abbahagyta.";
    Agent_Speak(L_DialToneHowToMove2_Text);
}

function Agent_DialToneWhatToDoNext()
{
    var L_DialToneWhatToDoNext1_Text = "Els� l�p�sk�nt ellen�rizze, hogy a sz�m�t�g�p megfelel�en van-e csatlakoztatva a telefonvonalra.";
    Agent_Speak(L_DialToneWhatToDoNext1_Text);

    var L_DialToneWhatToDoNext2_Text = "Ezut�n gy�z�dj�n meg arr�l, hogy senki m�s nem haszn�lja a telefonvonalat.";
    Agent_Speak(L_DialToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneWhatToDoNext3_Text = "Majd kattintson az �jrat�rcs�z�s gombra a t�rcs�z�s megism�tl�s�hez.";
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

    var L_DialToneWhatToDoNext4_Text = "Ha an�lk�l szeretne tov�bbl�pni, hogy regisztr�ln� vagy aktiv�ln� a Windows XP ezen p�ld�ny�t, kattintson a Kihagy�s gombra.";
    Agent_Speak(L_DialToneWhatToDoNext4_Text);
    
    Agent_Play("RestPose");

    var L_DialToneWhatToDoNext5_Text = "A regisztr�l�st k�s�bb is b�rmikor elv�gezheti.";
    Agent_Speak(L_DialToneWhatToDoNext5_Text);
}



function Agent_CnnctErrAddCommands() 
{
    var L_CnnctErrAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_CnnctErrAddCommands2_Text = "Hogyan kapcsolhatom ki &a h�v�sv�rakoztat�st?";
    var L_CnnctErrAddCommands3_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
    var L_CnnctErrAboutThisStep1_Text = "A regisztr�ci�s k�zpontba ir�nyul� telefonh�v�s megszakadt.";
    Agent_Speak(L_CnnctErrAboutThisStep1_Text);

    var L_CnnctErrAboutThisStep2_Text = "Ennek sz�mos oka lehet.";
    Agent_Speak(L_CnnctErrAboutThisStep2_Text);

    var L_CnnctErrAboutThisStep3_Text = "Lehet, hogy hosszabb ideig nem haszn�lta akt�van a kapcsolatot, ez�rt a vonalat automatikusan bontotta a rendszer.";
    Agent_Speak(L_CnnctErrAboutThisStep3_Text);

    var L_CnnctErrAboutThisStep4_Text = "Az is el�fordulhat, hogy a kapcsolat fenn�ll�sa k�zben valaki megk�s�relte haszn�lni a telefonvonalat.";
    Agent_Speak(L_CnnctErrAboutThisStep4_Text);

    var L_CnnctErrAboutThisStep5_Text = "Ha rendelkezik h�v�sv�rakoztat�ssal, akkor lehet, hogy egy bej�v� h�v�s szak�totta meg a kapcsolatot.";
    Agent_Speak(L_CnnctErrAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrAboutThisStep6_Text = "Ha a telefonvonalon h�v�sv�rakoztat�s m�k�dik, �s tudja, hogy milyen sz�mmal lehet kikapcsolni, �rja be ide a sz�mot.";
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

    var L_CnnctErrAboutThisStep7_Text = "A kapcsol�d�s ism�telt megk�s�rl�s�hez kattintson a Tov�bb gombra.";
    Agent_Speak(L_CnnctErrAboutThisStep7_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrTurnOffCallWaiting()
{
    var L_CnnctErrTurnOffCallWaiting1_Text = "A telefont�rsas�gt�l megtudhatja a h�v�sv�rakoztat�s kikapcsol�s�ra szolg�l� sz�mot.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting1_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrTurnOffCallWaiting2_Text = "Ha ki szeretn� kapcsolni a telefon h�v�sv�rakoztat�si szolg�ltat�s�t a csatlakoz�s idej�re, �rja be ide azt a sz�mot.";
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

    var L_CnnctErrTurnOffCallWaiting3_Text = "Ezut�n kattintson a Tov�bb gombra.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrWhatToDoNext()
{
    var L_CnnctErrWhatToDoNext1_Text = "Els� l�p�sk�nt gy�z�dj�n meg arr�l, hogy senki m�s nem haszn�lja a telefonvonalat, amelyen kereszt�l kapcsolatba akar l�pni a Microsofttal.";
    Agent_Speak(L_CnnctErrWhatToDoNext1_Text);

    var L_CnnctErrWhatToDoNext2_Text = "Ezut�n ideiglenesen kapcsolja ki a h�v�sv�rakoztat�st, ha haszn�l ilyen szolg�ltat�st.";
    Agent_Speak(L_CnnctErrWhatToDoNext2_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrWhatToDoNext3_Text = "A kikapcsol�shoz �rja be ebbe a mez�be a k�dot.";
    Agent_Speak(L_CnnctErrWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_CnnctErrWhatToDoNext4_Text = "Ha befejez�d�tt a h�v�s, automatikusan vissza fogjuk kapcsolni a h�v�sv�rakoztat�st.";
    Agent_Speak(L_CnnctErrWhatToDoNext4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrWhatToDoNext5_Text = "Ha k�szen �ll az �jrakezd�sre, kattintson a Tov�bb gombra.";
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

    var L_CnnctErrWhatToDoNext6_Text = "A regisztr�l�s n�lk�li tov�bbl�p�shez kattintson a Kihagy�s gombra.";
    Agent_Speak(L_CnnctErrWhatToDoNext6_Text);
    
    Agent_Play("RestPose");
}



function Agent_HandShakeAddCommands() 
{
    var L_HandShakeAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_HandShakeAddCommands2_Text = "Mi legyen a k�vetkez� &l�p�sem?";

    g_AgentCharacter.Commands.Add("Agent_HandShakeAboutThisStep", L_HandShakeAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_HandShakeWhatToDoNext", L_HandShakeAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_HandShakeAboutThisStep()
{
    var L_HandShakeAboutThisStep1_Text = "A Windows most nem tudott �sszek�ttet�st teremteni a Microsofttal.";
    Agent_Speak(L_HandShakeAboutThisStep1_Text);

    var L_HandShakeAboutThisStep2_Text = "Ez lehetett az�rt, mert minden telefonvonal foglalt volt, vagy az�rt, mert a sz�m�t�g�p nem tudott telefonh�v�st kezdem�nyezni.";
    Agent_Speak(L_HandShakeAboutThisStep2_Text);

    var L_HandShakeAboutThisStep3_Text = "Pr�b�ljon meg v�rni n�h�ny percet.";
    Agent_Speak(L_HandShakeAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_HandShakeAboutThisStep4_Text = "majd az �jrat�rcs�z�s gombra kattintva pr�b�lja �jra.";
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
    
    var L_HandShakeWhatToDoNext1_Text = "V�rjon n�h�ny percet, majd kattintson az �jrat�rcs�z�s gombra.";
    Agent_Speak(L_HandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_HandShakeWhatToDoNext2_Text = "Ha m�r t�bbsz�r megk�s�relte, l�pjen kapcsolatba sz�m�t�g�pe gy�rt�j�val.";
    Agent_Speak(L_HandShakeWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_HandShakeWhatToDoNext3_Text = "A Kihagy�s gombra kattintva a sz�m�t�g�p regisztr�l�sa n�lk�l folytathatja.";
    Agent_Speak(L_HandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_NoAnswerAddCommands() 
{
    var L_NoAnswerAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_NoAnswerAddCommands2_Text = "M&it tegyek, ha nem j� telefonsz�mot kaptam?";
    var L_NoAnswerAddCommands3_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
    var L_NoAnswerAboutThisStep1_Text = "A t�rcs�zott telefonsz�m nem v�laszol.";
    Agent_Speak(L_NoAnswerAboutThisStep1_Text);

    var L_NoAnswerAboutThisStep2_Text = "Ellen�rizze, hogy a telefonsz�m formailag helyes-e.";
    Agent_Speak(L_NoAnswerAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_NoAnswerAboutThisStep3_Text = "Ha �gy t�nik, a sz�m helyes, v�rjon n�h�ny percet, majd pr�b�lja �jra az �jrat�rcs�z�s gombbal.";
    Agent_Speak(L_NoAnswerAboutThisStep3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.edtPhoneNumber,"Left");

    var L_NoAnswerAboutThisStep4_Text = "Ha viszont hib�s a sz�m, kattintson ide, �s �rja �t.";
    Agent_Speak(L_NoAnswerAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_NoAnswerAboutThisStep5_Text = "Ezut�n kattintson az �jrat�rcs�z�s gombra.";
    Agent_Speak(L_NoAnswerAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.btnRestore,"Right");

    var L_NoAnswerAboutThisStep6_Text = "A Vissza�ll�t�s gombra val� r�kattint�ssal b�rmikor vissza�ll�thatja a Windows �ltal eredetileg h�vni pr�b�lt sz�mot.";
    Agent_Speak(L_NoAnswerAboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_NoAnswerWhatIfWrongNumber()
{
    var L_NoAnswerWhatIfWrongNumber1_Text = "Ha az itt l�v� telefonsz�m helytelen, kattintson a mez�re.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber1_Text);

    var L_NoAnswerWhatIfWrongNumber2_Text = "A mez�ben megjelenik egy villog� f�gg�leges vonal, m�s n�ven kurzor.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber2_Text);

    var L_NoAnswerWhatIfWrongNumber3_Text = "A be�rt karakterek a kurzorn�l jelennek meg.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber3_Text);

    var L_NoAnswerWhatIfWrongNumber4_Text = "A kurzort a billenty�zet jobbra �s balra nyil�nak megnyom�s�val mozgathatja a sz�vegen bel�l.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber4_Text);

    var L_NoAnswerWhatIfWrongNumber5_Text = "Azut�n a Delete gombbal t�r�lheti a kurzor ut�n �ll� karaktereket.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber5_Text);

    var L_NoAnswerWhatIfWrongNumber6_Text = "A VISSZA billenty�vel pedig a kurzor el�tt l�v�ket t�r�lheti.";
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
    
    var L_NoAnswerWhatToDoNext1_Text = "Ha az ellen�rz�tt telefonsz�m j�nak t�nik, az �jracsatlakoz�shoz kattintson az �jrat�rcs�z�s gombra.";
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

    var L_NoAnswerWhatToDoNext2_Text = "A folytat�shoz meg kell adnia, hogy k�v�n-e ism�t csatlakozni, vagy ez alkalommal ink�bb kihagyja a sz�m�t�g�p regisztr�l�s�t.";
    Agent_Speak(L_NoAnswerWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}



function Agent_PulseAddCommands() 
{

    var L_PulseAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_PulseAddCommands2_Text = "Mi legyen a k�vetkez� &l�p�sem?";

    g_AgentCharacter.Commands.Add("Agent_PulseAboutThisStep", L_PulseAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_PulseWhatToDoNext", L_PulseAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_PulseAboutThisStep()
{
    var L_PulseAboutThisStep1_Text = "A Windows nem tudta meg�llap�tani, hogy a telefon hangfrekvenci�s vagy impulzusos �zemm�dban m�k�dik.";
    Agent_Speak(L_PulseAboutThisStep1_Text);

    var L_PulseAboutThisStep2_Text = "A folytat�s el�tt meg kell adni ezt az inform�ci�t.";
    Agent_Speak(L_PulseAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseAboutThisStep3_Text = "Ezen a k�perny�n a telefonvonalon m�k�d� t�rcs�z�si m�dot hat�rozhatja meg.";
    Agent_Speak(L_PulseAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PulseWhatToDoNext()
{
    var L_PulseWhatToDoNext1_Text = "A kiv�lasztott lehet�s�g bal oldal�n tal�lhat� feh�r k�rbe kattintva adja meg, hogy milyen t�rcs�z�si m�dot haszn�l a telefonvonala.";
    Agent_Speak(L_PulseWhatToDoNext1_Text);
    
    Agent_GestureAtElement(g.tone,"Left");

    var L_PulseWhatToDoNext2_Text = "Ha a telefonvonal hangfrekvenci�s t�rcs�z�st haszn�l, kattintson ide.";
    Agent_Speak(L_PulseWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseWhatToDoNext3_Text = "Ha impulzusos t�rcs�z�st, akkor pedig ide.";
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

    var L_PulseWhatToDoNext4_Text = "Ezut�n a t�rcs�z�s megism�tl�s�hez kattintson a Tov�bb gombra.";
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

    var L_PulseWhatToDoNext5_Text = "Vagy a Kihagy�s gombra val� kattint�ssal a sz�m�t�g�p regisztr�l�sa n�lk�l l�phet tov�bb.";
    Agent_Speak(L_PulseWhatToDoNext5_Text);
    
    Agent_Play("RestPose");
}





function Agent_TooBusyAddCommands() 
{
        var L_TooBusyAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
        var L_TooBusyAddCommands2_Text = "M&it tegyek, ha nem j� telefonsz�mot kaptam?";
        var L_TooBusyAddCommands3_Text = "Mi legyen a k�vetkez� &l�p�sem?";

        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_AboutThisStep", L_TooBusyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatIfIncorrect", L_TooBusyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatToDoNext", L_TooBusyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_TooBusyCommand_AboutThisStep() 
{
    var L_TooBusyAboutThisStep1_Text = "A h�vott sz�m t�ves vagy foglalt.";
    Agent_Speak(L_TooBusyAboutThisStep1_Text);

    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyAboutThisStep2_Text = "N�zze meg, hogy a sz�m helyesnek l�tszik-e.";
    Agent_Speak(L_TooBusyAboutThisStep2_Text);
        
    Agent_Play("RestPose");

    var L_TooBusyAboutThisStep3_Text = "Ha a sz�m megfelel�, v�rjon n�h�ny percet,";
    Agent_Speak(L_TooBusyAboutThisStep3_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyAboutThisStep4_Text = "majd kattintson az �jrat�rcs�z�s gombra a t�rcs�z�s megism�tl�s�hez.";
    Agent_Speak(L_TooBusyAboutThisStep4_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatIfIncorrect() 
{        
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect1_Text = "Ha az itt l�that� telefonsz�m nem helyes,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("cb_altnumber"),"Left");
    
    var L_TooBusyPhoneNumberIncorrect2_Text = " kattintson erre a jel�l�n�gyzetre,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_altnumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect3_Text = "�s �rjon be ide egy m�sik sz�mot.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("cb_outsideline"),"Left");

    var L_TooBusyPhoneNumberIncorrect4_Text = "Ha k�ls� vonal h�v�s�hoz k�l�n sz�mot kell t�rcs�znia, tegyen jelet ebbe a jel�l�n�gyzetbe,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect4_Text);

    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("edt_outsideline"),"Right");

    var L_TooBusyPhoneNumberIncorrect5_Text = "�s ide �rja be a sz�mot.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect5_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect6_Text = "Ha a vonal h�v�sv�rakoztat�st haszn�l, a kimen� h�v�st megszak�thatta egy bej�v� h�v�s.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect6_Text);

    var L_TooBusyPhoneNumberIncorrect7_Text = "A vonalon a kapcsolat l�trehoz�sa idej�re k�nnyen ki tudja kapcsolni a h�v�sv�rakoztat�si szolg�ltat�st.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect7_Text);
        
    Agent_GestureAtElement(g.document.all("cb_callwaiting"),"Left");

    var L_TooBusyPhoneNumberIncorrect8_Text = "Csak be kell jel�lnie ezt a jel�l�n�gyzetet,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect8_Text);

    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_callwaiting"),"Right");

    var L_TooBusyPhoneNumberIncorrect9_Text = "�s ide be kell �rnia a k�dot.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect9_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect10_Text = "A h�v�s befejez�se ut�n vissza fogjuk �ll�tani a h�v�sv�rakozat�st.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect10_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyPhoneNumberIncorrect11_Text = "Ne felejtsen r�kattintani az �jrat�rcs�z�s gombra, amikor k�szen �ll az ism�telt pr�b�lkoz�sra.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect11_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatToDoNext() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyWhatToDoNext1_Text = "Ha az ellen�rz�tt telefonsz�m j�nak t�nik,";
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
    
     var L_TooBusyWhatToDoNext2_Text = "Az �jracsatlakoz�s megk�s�rl�s�hez kattintson az �jrat�rcs�z�s gombra.";
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

    var L_TooBusyWhatToDoNext3_Text = "A l�p�s kihagy�s�hoz kattintson a Kihagy�s gombra. A regisztr�ci�t a Windows telep�t�se ut�n is megteheti.";
    Agent_Speak(L_TooBusyWhatToDoNext3_Text);
        
    Agent_Play("RestPose");
}



function Agent_ISPDToneAddCommands() 
{
    var L_ISPDToneAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_ISPDToneAddCommands2_Text = "Mi a teend�, ha �t &kell helyeznem a sz�m�t�g�pet";
    var L_ISPDToneAddCommands3_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
    var L_ISPDToneAboutThisStep1_Text = "A Windows nem �rz�kelt t�rcsahangot.";
    Agent_Speak(L_ISPDToneAboutThisStep1_Text);

    var L_ISPDToneAboutThisStep2_Text = "Ennek sz�mos oka lehet.";
    Agent_Speak(L_ISPDToneAboutThisStep2_Text);

    var L_ISPDToneAboutThisStep3_Text = "El�sz�r ellen�rizze, hogy mindk�t v�g�n j�l van-e csatlakoztatva a sz�m�t�g�p telefonk�bele.";
    Agent_Speak(L_ISPDToneAboutThisStep3_Text);

    var L_ISPDToneAboutThisStep4_Text = "Azut�n gy�z�dj�n meg arr�l, hogy pillanatnyilag senki sem pr�b�lja haszn�lni a telefonvonalat.";
    Agent_Speak(L_ISPDToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneAboutThisStep5_Text = "majd kattintson az �jrat�rcs�z�s gombra a t�rcs�z�s megism�tl�s�hez.";
    Agent_Speak(L_ISPDToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPDToneHowToMove()
{
    var L_ISPDToneHowToMove1_Text = "Ha �t kell helyeznie a sz�m�t�g�pet ahhoz, hogy csatlakoztatni lehessen a telefonvonalhoz, ne felejtse el kikapcsolni.";
    Agent_Speak(L_ISPDToneHowToMove1_Text);

    var L_ISPDToneHowToMove2_Text = "Amikor �jraind�tja a sz�m�t�g�pet, a Windows onnan folytatja ezt az elj�r�st, ahol abbahagyta.";
    Agent_Speak(L_ISPDToneHowToMove2_Text);
}

function Agent_ISPDToneWhatToDoNext()
{
    var L_ISPDToneWhatToDoNext1_Text = "Els� l�p�sk�nt ellen�rizze, hogy a sz�m�t�g�p megfelel�en van-e csatlakoztatva a telefonvonalra.";
    Agent_Speak(L_ISPDToneWhatToDoNext1_Text);

    var L_ISPDToneWhatToDoNext2_Text = "Ezut�n gy�z�dj�n meg arr�l, hogy senki m�s nem haszn�lja a telefonvonalat.";
    Agent_Speak(L_ISPDToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneWhatToDoNext3_Text = "Majd kattintson az �jrat�rcs�z�s gombra a t�rcs�z�s megism�tl�s�hez.";
    Agent_Speak(L_ISPDToneWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_ISPCnErrAddCommands() {

        var L_ISPCnErrAddCommands1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_ISPCnErrAddCommands2_Text = "Hogyan kapcsolhatom ki &a h�v�sv�rakoztat�st";
        var L_ISPCnErrAddCommands3_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_ISPCnErrAddCommands4_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

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
        var L_ISPCnErrIntro1_Text = "Az internetszolg�ltat�s be�ll�t�s�ra haszn�lt telefonkapcsolat megszakadt.";
        Agent_Speak(L_ISPCnErrIntro1_Text);

        Agent_MoveToElement(g.document.all("txtBullet1"),"Left");
        
        var L_ISPCnErrIntro2_Text = "Ennek sz�mos oka lehet.";
        Agent_Speak(L_ISPCnErrIntro2_Text);

        var L_ISPCnErrIntro3_Text = "Lehet, hogy hosszabb ideig nem haszn�lta akt�van a kapcsolatot, ez�rt a vonalat automatikusan bontotta a rendszer.";
        Agent_Speak(L_ISPCnErrIntro3_Text);

        var L_ISPCnErrIntro4_Text = "Az is el�fordulhat, hogy a kapcsolat fenn�ll�sa k�zben valaki megk�s�relte haszn�lni a telefonvonalat.";
        Agent_Speak(L_ISPCnErrIntro4_Text);

        var L_ISPCnErrIntro5_Text = "Ha rendelkezik h�v�sv�rakoztat�ssal, akkor lehet, hogy egy bej�v� h�v�s szak�totta meg a kapcsolatot.";
        Agent_Speak(L_ISPCnErrIntro5_Text);

        Agent_GestureAtElement(g.document.all("Callwait"),"Left");

        var L_ISPCnErrIntro6_Text = "Ha rendelkezik h�v�sv�rakoztat�ssal �s ismeri a kikapcsol�s�hoz sz�ks�ges sz�mot, �rja be ide.";
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

        var L_ISPCnErrIntro7_Text = "Ezut�n kattintson az �jrat�rcs�z�s gombra a kapcsolat ism�telt felv�tel�hez.";
        Agent_Speak(L_ISPCnErrIntro7_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("txtBullet1"),"Left");

        var L_ISPCnErrWhatToDoNext1_Text = "Ha minden lehets�ges okot megvizsg�lt,";
        Agent_Speak(L_ISPCnErrWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPCnErrWhatToDoNext2_Text = "�s �jra k�v�n csatlakozni,";
        Agent_Speak(L_ISPCnErrWhatToDoNext2_Text);

        var L_ISPCnErrWhatToDoNext3_Text = "kattintson az �jrat�rcs�z�s gombra.";
        Agent_Speak(L_ISPCnErrWhatToDoNext3_Text);
}

function Agent_ISPCnErrCommand_HowToTurnOffCallWaiting() 
{
        Agent_GestureAtElement(g.document.all("Callwait"),"Left");
        
        var L_ISPCnErrHowToTurnOffCallWaiting1_Text = "Ha a kapcsolat l�trehoz�sa k�zben ki szeretn� kapcsolni a telefon h�v�sv�rakoztat�si szolg�ltat�s�t,";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting1_Text);

        var L_ISPCnErrHowToTurnOffCallWaiting2_Text = "adja meg itt az ehhez sz�ks�ges sz�mot.";
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

        var L_ISPCnErrHowToTurnOffCallWaiting3_Text = "Ezut�n kattintson az �jrat�rcs�z�s gombra.";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_HowToMoveOn() 
{
        var L_ISPCnErrHowToMoveOn1_Text = "A folytat�shoz �jra kell csatlakoznia, vagy ki kell hagynia ezt a l�p�st.";
        Agent_Speak(L_ISPCnErrHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrHowToMoveOn2_Text = "Az �jracsatlakoz�s megk�s�rl�s�hez kattintson az �jrat�rcs�z�s gombra,";
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

        var L_ISPCnErrHowToMoveOn3_Text = "illetve ha �jrat�rcs�z�s n�lk�l k�v�nja folytatni, kattintson a Kihagy�s gombra.";
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

        var L_ISPHandShakeAddCommands1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_ISPHandShakeAddCommands2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_ISPHandShakeAddCommands3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_WhatToDoNext", L_ISPHandShakeAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_AboutThisScreen", L_ISPHandShakeAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_HowToMoveOn", L_ISPHandShakeAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPHandShakeIntro() {

}

function Agent_ISPHandShakeCommand_AboutThisScreen() 
{
        var L_ISPHandShakeIntro1_Text = "A kiv�lasztott internetszolg�ltat�n�l pillanatnyilag nem hozhat�k l�tre �j fi�kok.";
        Agent_Speak(L_ISPHandShakeIntro1_Text);

        var L_ISPHandShakeIntro2_Text = "Nem tudom pontosan, mi�rt.";
        Agent_Speak(L_ISPHandShakeIntro2_Text);

        var L_ISPHandShakeIntro3_Text = "N�h�ny perc m�lva megpr�b�lhat �jra t�rcs�zni.";
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
        
        var L_ISPHandShakeIntro4_Text = "Vagy ig�ny szerint ki is hagyhatja az internetszolg�ltat�s be�ll�t�s�t.";
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

        var L_ISPHandShakeWhatToDoNext1_Text = "V�rjon n�h�ny percet, majd kattintson az �jrat�rcs�z�s gombra.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeWhatToDoNext2_Text = "Ha m�r t�bbsz�r megk�s�relte az �jrat�rcs�z�st,";
        Agent_Speak(L_ISPHandShakeWhatToDoNext2_Text);
        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeWhatToDoNext3_Text = "a Kihagy�s gombra kattintva tov�bbl�phet az internetszolg�ltat�s be�ll�t�sa n�lk�l.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPHandShakeCommand_HowToMoveOn() 
{
        var L_ISPHandShakeHowToMoveOn1_Text = "V�rjon n�h�ny percet,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPHandShakeHowToMoveOn2_Text = "majd az �jrat�rcs�z�s gombra kattintva pr�b�ljon ism�t csatlakozni.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeHowToMoveOn3_Text = "Ha m�r pr�b�lkozott ezzel,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeHowToMoveOn4_Text = "a Kihagy�s gombra kattintva tov�bbl�phet az internetszolg�ltat�s be�ll�t�sa n�lk�l.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn4_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPInsAddCommands() {

        var L_ISPInsAddCommands1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_ISPInsAddCommands2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_ISPInsAddCommands3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_WhatToDoNext", L_ISPInsAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_AboutThisScreen", L_ISPInsAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_HowToMoveOn", L_ISPInsAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPInsIntro() {

}

function Agent_ISPInsCommand_AboutThisScreen() 
{
        var L_ISPInsIntro1_Text = "A Windows nem tud az internetre csatlakozni a megadott internetszolg�ltat�n kereszt�l.";
        Agent_Speak(L_ISPInsIntro1_Text);

        var L_ISPInsIntro2_Text = "Ha webb�ng�sz� haszn�latakor, illetve elektronikus levelek k�ld�sekor �s fogad�skor probl�m�k mer�lnek fel az internetre val� csatlakoz�ssal kapcsolatban,";
        Agent_Speak(L_ISPInsIntro2_Text);

        var L_ISPInsIntro3_Text = "k�rjen seg�ts�get a szolg�ltat� technikai tan�csad�s�t�l.";
        Agent_Speak(L_ISPInsIntro3_Text);
}

function Agent_ISPInsCommand_WhatToDoNext() 
{
        var L_ISPInsWhatToDoNext1_Text = "Kattintson a Tov�bb gombra a folytat�shoz.";
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

        var L_ISPInsHowToMoveOn1_Text = "Kattintson a Tov�bb gombra.";
        Agent_Speak(L_ISPInsHowToMoveOn1_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPNoAnwAddCommands() {

        var L_ISPNoAnwAddCommands1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_ISPNoAnwAddCommands2_Text = "M&it tegyek, ha nem j� telefonsz�mot kaptam";
        var L_ISPNoAnwAddCommands3_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_ISPNoAnwAddCommands4_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoNext", L_ISPNoAnwAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect", L_ISPNoAnwAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_AboutThisScreen", L_ISPNoAnwAddCommands3_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_HowToMoveOn", L_ISPNoAnwAddCommands4_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPNoAnwCommand_AboutThisScreen() 
{
        var L_ISPNoAnwIntro1_Text = "A t�rcs�zott telefonsz�m nem v�laszol.";
        Agent_Speak(L_ISPNoAnwIntro1_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro2_Text = "Ellen�rizze, hogy a telefonsz�m formailag helyes-e.";
        Agent_Speak(L_ISPNoAnwIntro2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwIntro3_Text = "Ha a sz�m megfelel�, v�rjon n�h�ny percet,";
        Agent_Speak(L_ISPNoAnwIntro3_Text);

        var L_ISPNoAnwIntro4_Text = "majd az �jrat�rcs�z�s gombra kattintva pr�b�lja �jra.";
        Agent_Speak(L_ISPNoAnwIntro4_Text);

        var L_ISPNoAnwIntro5_Text = "Ha a telefonsz�m helytelen,";
        Agent_Speak(L_ISPNoAnwIntro5_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro6_Text = "kattintson ide �s �rja �t.";
        Agent_Speak(L_ISPNoAnwIntro6_Text);

        Agent_Play("RestPose");

        var L_ISPNoAnwIntro7_Text = "Ezut�n kattintson az �jrat�rcs�z�s gombra.";
        Agent_Speak(L_ISPNoAnwIntro7_Text);
}

function Agent_ISPNoAnwCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwWhatToDoNext1_Text = "Ha az ellen�rz�tt telefonsz�m j�nak t�nik,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwWhatToDoNext2_Text = "�s �n k�szen �ll az �jracsatlakoz�sra,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext2_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwWhatToDoNext3_Text = "kattintson az �jrat�rcs�z�s gombra.";
        Agent_Speak(L_ISPNoAnwWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwPhoneNumberIncorrect1_Text = "Ha a telefonsz�m nem megfelel�,";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect1_Text);

        var L_ISPNoAnwPhoneNumberIncorrect2_Text = "kattintson a sz�vegmez�re.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwPhoneNumberIncorrect3_Text = "A mez�ben megjelenik egy villog� f�gg�leges vonal, m�s n�ven kurzor.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect3_Text);

        var L_ISPNoAnwPhoneNumberIncorrect4_Text = "A be�rt karakterek a kurzorn�l jelennek meg.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect4_Text);

        var L_ISPNoAnwPhoneNumberIncorrect5_Text = "A kurzort a BAL vagy JOBB billenty�kkel mozgathatja a mez�ben.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect5_Text);

        var L_ISPNoAnwPhoneNumberIncorrect6_Text = "A Delete billenty�vel t�r�lheti a kurzor m�g�tt l�v� karaktereket.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect6_Text);

        var L_ISPNoAnwPhoneNumberIncorrect7_Text = "A VISSZA billenty�vel pedig a kurzor el�tt l�v�ket t�r�lheti.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect7_Text);
}

function Agent_ISPNoAnwCommand_HowToMoveOn() 
{
        var L_ISPNoAnwHowToMoveOn1_Text = "A folytat�shoz v�lasztania kell, hogy k�v�n-e ism�t csatlakozni, vagy ink�bb kihagyja az internetszolg�ltat�s be�ll�t�s�t.";
        Agent_Speak(L_ISPNoAnwHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwHowToMoveOn2_Text = "Az �jracsatlakoz�s megk�s�rl�s�hez kattintson az �jrat�rcs�z�s gombra.";
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

        var L_ISPNoAnwHowToMoveOn3_Text = "illetve ha az internetszolg�ltat�s be�ll�t�sa n�lk�l k�v�nja folytatni, kattintson a Kihagy�s gombra.";
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

        var L_ISPPhBsyAddCommands1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_ISPPhBsyAddCommands2_Text = "M&it tegyek, ha nem j� telefonsz�mot kaptam";
        var L_ISPPhBsyAddCommands3_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";

        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoNext", L_ISPPhBsyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect", L_ISPPhBsyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_AboutThisScreen", L_ISPPhBsyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPPhBsyIntro() {

}

function Agent_ISPPhBsyCommand_AboutThisScreen() 
{
        var L_ISPPhBsyIntro1_Text = "A Windows nem tud csatlakozni a megadott internetszolg�ltat�hoz.";
        Agent_Speak(L_ISPPhBsyIntro1_Text);

        var L_ISPPhBsyIntro2_Text ="Lehet, hogy a vonal foglalt, vagy technika probl�m�k l�ptek fel az internetszolg�ltat�n�l.";
        Agent_Speak(L_ISPPhBsyIntro2_Text);

        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyIntro3_Text = "Ellen�rizze, hogy a telefonsz�m formailag helyes-e.";
        Agent_Speak(L_ISPPhBsyIntro3_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro4_Text = "Ha a sz�m megfelel�, v�rjon n�h�ny percet,";
        Agent_Speak(L_ISPPhBsyIntro4_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPPhBsyIntro5_Text = "majd kattintson az �jrat�rcs�z�s gombra a t�rcs�z�s megism�tl�s�hez.";
        Agent_Speak(L_ISPPhBsyIntro5_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro6_Text = "Ha a telefonsz�m helytelen,";
        Agent_Speak(L_ISPPhBsyIntro6_Text);

        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyIntro7_Text = "Kattintson ide, ha a telefonk�nyvb�l akar m�sik sz�mot v�lasztani, �s azzal pr�b�lkozni.";
        Agent_Speak(L_ISPPhBsyIntro7_Text);

        Agent_Play("RestPose");

        var L_ISPPhBsyIntro8_Text = "Ezut�n kattintson az �jrat�rcs�z�s gombra.";
        Agent_Speak(L_ISPPhBsyIntro8_Text);
}

function Agent_ISPPhBsyCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyWhatToDoNext1_Text = "Ha ellen�rizte a telefonsz�mot, �s �gy l�tszik, rendben van,";
        Agent_Speak(L_ISPPhBsyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");    
    
        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyWhatToDoNext2_Text = "vagy ha m�sik sz�mot akar h�vni,";
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

        var L_ISPPhBsyWhatToDoNext4_Text = "Az �jracsatlakoz�s megk�s�rl�s�hez kattintson az �jrat�rcs�z�s gombra.";
        Agent_Speak(L_ISPPhBsyWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_ISPPhBsyPhoneNumberIncorrect1_Text = "Ha a telefonsz�m nem megfelel�,";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

    var L_ISPPhBsyPhoneNumberIncorrect2_Text = "Kattintson erre a r�di�gombra, ha a telefonk�nyvb�l akar m�sik sz�mot v�lasztani, �s azzal pr�b�lkozni.";
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

    var L_ISPPhBsyPhoneNumberIncorrect3_Text = "Kattintson az �jrat�rcs�z�s gombra, amikor k�szen �ll, hogy �jra megpr�b�lja a kapcsol�d�st.";
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

    var L_FinishAddCommands1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";  
    var L_FinishAddCommands2_Text = "H&ogyan tudom elv�gezni a regisztr�l�st az Asztalr�l?";    
    var L_FinishAddCommands3_Text = "Hogyan tu&dom elv�gezni a Windows aktiv�l�s�t az Asztalr�l?";    
    var L_FinishAddCommands4_Text = "Hogy&an tudom el�rni az internetet?";    
    var L_FinishAddCommands5_Text = "Mi legyen a k�vetkez� &l�p�sem?";

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
    var L_FinishAboutThisStep1_Text = "Gratul�lunk! Befejezte a folyamatot!";
    Agent_Speak(L_FinishAboutThisStep1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishAboutThisStep2_Text = "A Windows haszn�lat�nak elkezd�s�hez kattintson a Befejez�s gombra.";
    Agent_Speak(L_FinishAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_FinishAboutThisStep3_Text = "Ha meg szeretne ismerkedni a Windows XP �rdekes �j szolg�ltat�saival, kattintson a Start men� S�g� �s t�mogat�s parancs�ra, majd �rja be a Keres�s  mez�be a \"bevezet�s\" sz�t.";
    Agent_Speak(L_FinishAboutThisStep3_Text);
}

function Agent_FinishHowToRegister() 
{
    var L_FinishHowToRegister1_Text = "Ha a folyamat egy kor�bbi l�p�s�ben kihagyta a regisztr�l�st, b�rmikor regisztr�lhatja Windows-p�ld�ny�t �gy, hogy a Start men� Futtat�s parancs�ra kattint, majd be�rja a regwiz /r parancsot.";
    Agent_Speak(L_FinishHowToRegister1_Text);
        
    var L_FinishHowToRegister2_Text = "Ha elfelejti ezeket a l�p�seket, kattintson a Start men� S�g� �s t�mogat�s parancs�ra. Sok m�s �rt�kes inform�ci�n k�v�l a k�rd�seire is meg fogja tal�lni a v�laszt.";
    Agent_Speak(L_FinishHowToRegister2_Text);
}

function Agent_FinishHowToActivate() 
{
    var L_FinishHowToActivate1_Text = "Ha a folyamat egy kor�bbi l�p�s�ben kihagyta a regisztr�l�st, n�h�ny naponk�nt megjelenik a Windows Asztalon egy apr� eml�keztet�.";
    Agent_Speak(L_FinishHowToActivate1_Text);
        
    var L_FinishHowToActivate2_Text = "Csak akkor folytathatja a Windows haszn�lat�t, ha a megadott aktiv�l�si id�szakon bel�l aktiv�ltatja.";
    Agent_Speak(L_FinishHowToActivate2_Text);

    var L_FinishHowToActivate3_Text = "Ha nem k�v�nja kiv�rni az eml�keztet�t, a Start men�ben tal�lhat� A Windows aktiv�l�sa parancsra kattintva elind�thatja a Term�kaktiv�l�s var�zsl�t.";
    Agent_Speak(L_FinishHowToActivate3_Text);

    var L_FinishHowToActivate4_Text = "Ha elfelejti ezeket a l�p�seket, kattintson a Start men� S�g� �s t�mogat�s parancs�ra. Sok m�s �rt�kes inform�ci�n k�v�l a k�rd�seire is meg fogja tal�lni a v�laszt.";
    Agent_Speak(L_FinishHowToActivate4_Text);
}

function Agent_FinishHowToAccessInternet() 
{
    var L_FinishHowToAccessInternet1_Text = "Ha m�r be�ll�totta ezen a sz�m�t�g�pen az internetkapcsolatot, egyszer�en kattintson a Windows asztalon el�rhet� Start men� tetej�n l�v� Internet parancsra.";
    Agent_Speak(L_FinishHowToAccessInternet1_Text);
        
    var L_FinishHowToAccessInternet2_Text = "Ha nincs be�ll�tva a sz�m�t�g�pen az internetkapcsolat, az Internetcsatlakoz�s var�zsl� jelenik meg.";
    Agent_Speak(L_FinishHowToAccessInternet2_Text);

    var L_FinishHowToAccessInternet3_Text = "A var�zsl� l�p�seit k�vetve csatlakozhat az internethez.";
    Agent_Speak(L_FinishHowToAccessInternet3_Text);
}

function Agent_FinishWhatToDoNext() 
{
    var L_FinishWhatToDoNext1_Text = "Befejezte Microsoft Windows XP telep�t�s�t!";
    Agent_Speak(L_FinishWhatToDoNext1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishWhatToDoNext2_Text = "Kattintson a Befejez�s gombra";
    Agent_Speak(L_FinishWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_FinishWhatToDoNext3_Text = "Ha meg szeretne ismerkedni a Windows XP �rdekes �j szolg�ltat�saival, kattintson a Start men� S�g� �s t�mogat�s parancs�ra, majd �rja be a Keres�s  mez�be a \"bevezet�s\" sz�t.";
    Agent_Speak(L_FinishWhatToDoNext3_Text);

    var L_FinishWhatToDoNext4_Text = "Rem�lj�k, hogy sok �r�m�t fog lelni a Windows XP haszn�lat�ban!";
    Agent_Speak(L_FinishWhatToDoNext4_Text);
}






function Agent_MouseTutAddCommands() {

        var L_MouseTutMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_MouseTutMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_MouseTutMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        
        
        

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

        var L_MouseTutIntroTellMeWhatToDoNext1_Text = "A kezd�shez kattintson az Oktat�program gombra.";
        Agent_Speak(L_MouseTutIntroTellMeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutTellMeAboutThisScreen() 
{
        var L_MouseTutTellMeAboutThisScreen1_Text = "Ez az els� k�perny�je annak a sorozatnak, mely seg�t az eg�r haszn�lat�nak elsaj�t�t�s�ban.";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen1_Text);

        var L_MouseTutTellMeAboutThisScreen2_Text = "Ha szeretn�, elv�gezheti az oktat�programot,";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen2_Text);

        var L_MouseTutTellMeAboutThisScreen3_Text = "vagy �tugorhatja azt, ha m�r tapasztalt az eg�r haszn�lat�ban.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen1_Text = "A kezd�shez kattintson az Oktat�program gombra.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text = "Az oktat�program �tugr�s�hoz kattintson a Tov�bb gombra.";
        Agent_Speak(L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_MouseTutAAddCommands() {

        var L_MouseTutAMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_MouseTutAMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_MouseTutAMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeWhatToDoNext", L_MouseTutAMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeAboutThisScreen", L_MouseTutAMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeHowToMoveToNextScreen", L_MouseTutAMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutATellMeWhatToDoNext() 
{
        var L_MouseTutAWhatToDoNext1_Text = "Mozgassa ide-oda az egeret, �s figyelje meg, hogy az eg�rmutat� hogyan mozog a k�perny�n.";
        Agent_Speak(L_MouseTutAWhatToDoNext1_Text);

        var L_MouseTutAWhatToDoNext2_Text = "Ellen�rizze, hogy az eg�r s�k fel�leten mozog-e.";
        Agent_Speak(L_MouseTutAWhatToDoNext2_Text);
}

function Agent_OnMouseTutATellMeAboutThisScreen() 
{

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutATellMeAboutThisScreen1_Text = "Ez a k�perny� bemutatja, hogyan mozgathatja az eg�rmutat�t a k�perny�n az eg�rrel.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutATellMeAboutThisScreen2_Text = "Egyszer�en mozgassa az egeret balra vagy jobbra, illetve el�re vagy h�tra.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen2_Text);

        var L_MouseTutATellMeAboutThisScreen3_Text = "Pr�b�lja ki!";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen3_Text);
}

function Agent_OnMouseTutATellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutBAddCommands() {

        var L_MouseTutBMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_MouseTutBMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_MouseTutBMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeWhatToDoNext", L_MouseTutBMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeAboutThisScreen", L_MouseTutBMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeHowToMoveToNextScreen", L_MouseTutBMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutBTellMeWhatToDoNext() 
{
        var L_MouseTutBWhatToDoNext1_Text = "Emelje fel az egeret �s tegye m�shov�.";
        Agent_Speak(L_MouseTutBWhatToDoNext1_Text);

        var L_MouseTutBWhatToDoNext2_Text = "Ezut�n tegye le, majd mozgassa ism�t jobbra-balra.";
        Agent_Speak(L_MouseTutBWhatToDoNext2_Text);
}

function Agent_OnMouseTutBTellMeAboutThisScreen() 
{
        var L_MouseTutBTellMeAboutThisScreen1_Text = "Ez a k�perny� bemutatja, hogy mit kell tennie, ha nincs el�g hely az eg�r mozgat�s�hoz.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen1_Text);

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutBTellMeAboutThisScreen2_Text = "Egyszer�en emelje fel az egeret �s helyezze egy k�nyelmesebben el�rhet� poz�ci�ba.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen2_Text);

        Agent_Play("RestPose");

        var L_MouseTutBTellMeAboutThisScreen3_Text = "Miut�n az egeret  visszateszi a fel�letre �s megmozd�tja, az eg�rmutat� k�veti a mozg�st.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen3_Text);

        var L_MouseTutBTellMeAboutThisScreen4_Text = "Ne feledje, hogy az eg�rmutat� csak akkor mozog, ha az egeret s�k fel�leten mozgatja.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutBTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutCAddCommands() {

        var L_MouseTutCMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_MouseTutCMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_MouseTutCMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeWhatToDoNext", L_MouseTutCMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeAboutThisScreen", L_MouseTutCMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeHowToMoveToNextScreen", L_MouseTutCMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_MouseTutCIntro() {
        
}

function Agent_OnMouseTutCTellMeWhatToDoNext() 
{
        var L_MouseTutCWhatToDoNext1_Text = "Az eg�r mozgat�s�val h�zza �t az eg�rmutat�t a k�perny�n l�that� grafikus gombok felett.";
        Agent_Speak(L_MouseTutCWhatToDoNext1_Text);
}

function Agent_OnMouseTutCTellMeAboutThisScreen() 
{
        var L_MouseTutCTellMeAboutThisScreen1_Text = "Ezen a k�perny�n gyakorolhatja az eg�rmutat� mozgat�s�t.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutCTellMeAboutThisScreen2_Text = "Az eg�r seg�ts�g�vel h�zza �t az eg�rmutat�t az itt l�v� grafikus gombok felett.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutCTellMeAboutThisScreen3_Text = "L�that�, hogy a gomb m�s alakot vesz fel, amikor az eg�rmutat� elhalad felette.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen3_Text);

        var L_MouseTutCTellMeAboutThisScreen4_Text = "Ha az eg�rmutat�t elmozd�tja a gombr�l, a gomb visszanyeri eredeti k�p�t.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutCTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutDAddCommands() {

        var L_MouseTutDMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_MouseTutDMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_MouseTutDMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeWhatToDoNext", L_MouseTutDMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeAboutThisScreen", L_MouseTutDMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeHowToMoveToNextScreen", L_MouseTutDMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutDTellMeWhatToDoNext() 
{
        var L_MouseTutDWhatToDoNext1_Text = "Kattintson az eg�r bal gombj�val.";
        Agent_Speak(L_MouseTutDWhatToDoNext1_Text);
}

function Agent_OnMouseTutDTellMeAboutThisScreen() 
{
        var L_MouseTutDTellMeAboutThisScreen1_Text = "Az eg�rhez k�sz�lt oktat�program ezen r�sze a kattint�s elsaj�t�t�shoz ny�jt seg�ts�get.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen1_Text);

        var elem = g.document.all("image");

        Agent_MoveToElement(elem, "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen2_Text = "Ha ki szeretn� v�lasztani a k�perny� egyik elem�t az eg�rrel, helyezze az eg�rmutat�t az elem f�l�,";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen2_Text);

        Agent_GestureAtElement(g.document.all("image"), "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen3_Text = "majd az itt l�that� m�don nyomja meg �s engedje el az eg�r gombj�t.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutDTellMeAboutThisScreen4_Text = "Ezt nevezik kattint�snak.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutDTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutEAddCommands() {

        var L_MouseTutEMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_MouseTutEMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_MouseTutEMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeWhatToDoNext", L_MouseTutEMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeAboutThisScreen", L_MouseTutEMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeHowToMoveToNextScreen", L_MouseTutEMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutETellMeWhatToDoNext() 
{
        var L_MouseTutEWhatToDoNext1_Text = "Gyakorolja az eg�r bal gombj�val val� kattint�st a k�perny�n l�v� grafikus gombokon.";
        Agent_Speak(L_MouseTutEWhatToDoNext1_Text);
}

function Agent_OnMouseTutETellMeAboutThisScreen() 
{
        var L_MouseTutETellMeAboutThisScreen1_Text = "Ez a k�perny� lehet�v� teszi a kattint�s gyakorl�s�t.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutETellMeAboutThisScreen2_Text = "Az eg�r seg�ts�g�vel mutasson az itt l�that� grafikus gombok valamelyik�re.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutETellMeAboutThisScreen3_Text = "Ezut�n kattintson az eg�r bal gombj�val.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen3_Text);

        var L_MouseTutETellMeAboutThisScreen4_Text = "Pr�b�lja ki a t�bbi grafikus gombot is.";
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

        var L_MouseTutFMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_MouseTutFMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_MouseTutFMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

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
        var L_MouseTutFTellMeAboutThisScreen1_Text = "Kit�n�!";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen1_Text);

        var L_MouseTutFTellMeAboutThisScreen2_Text = "Eddig azzal ismerkedett meg, hogyan mutathat �s kattinthat az eg�rrel.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen2_Text);

        var L_MouseTutFTellMeAboutThisScreen3_Text = "Most gyakorolja azt, hogyan v�gezhet m�veleteket a Windows rendszerben vagy a weblapokon tal�lhat� elemekkel.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen3_Text);

        var L_MouseTutFTellMeAboutThisScreen4_Text = "Ha k�szen �ll a folytat�sra, kattintson a Tov�bb gombra.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutFTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutGAddCommands() {

        var L_MouseTutGMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_MouseTutGMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_MouseTutGMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeWhatToDoNext", L_MouseTutGMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeAboutThisScreen", L_MouseTutGMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeHowToMoveToNextScreen", L_MouseTutGMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutGPreDisplayMenu() {

        if (g.btnNext.disabled) {

                var L_MouseTutGMenuCommand4_Text = "Mi�rt nem hasz&n�lhat� a Tov�bb gomb?";

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
        var L_MouseTutGWhyNextNotAvailable1_Text = "A Tov�bb gomb az�rt nem jelenik meg, mert m�g nem v�lasztott  v�rost.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable1_Text);

		Agent_GestureAtElement(g.document.all("selCity"),"LeftCenter");

        var L_MouseTutGWhyNextNotAvailable2_Text = "El�sz�r r� kell kattintania valamelyik v�rosra.";
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

        var L_MouseTutGWhyNextNotAvailable3_Text = "Ezut�n m�r folytathatja a Tov�bb gombra kattintva.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeWhatToDoNext() {
		
		if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "RightCenter");

        var L_MouseTutGWhatToDoNext1_Text = "A v�rosok list�j�t a fel- �s lefel� mutat� nyilakra kattintva g�rgetheti.";
        Agent_Speak(L_MouseTutGWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

		if (g.document.dir == "rtl")
			Agent_Play("RestPose");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGWhatToDoNext2_Text = "A k�v�nt v�rost annak nev�re kattintva v�laszthatja ki.";
        Agent_Speak(L_MouseTutGWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutGWhatToDoNext3_Text = "Pr�b�ljon r�kattintani a list�ban szerepl� t�bbi v�rosra is.";
        Agent_Speak(L_MouseTutGWhatToDoNext3_Text);

        Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
}

function Agent_OnMouseTutGTellMeAboutThisScreen() {
        var L_MouseTutGTellMeAboutThisScreen1_Text = "Ezen a k�perny�n a lista elemeinek kattint�ssal val� kijel�l�s�t gyakorolhatja.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGTellMeAboutThisScreen2_Text = "Ha a list�ban szerepl� valamelyik v�rosra kattint,";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");
		
        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("imgTable"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("imgTable"), "RightCenter");

        var L_MouseTutGTellMeAboutThisScreen3_Text = "annak k�pe itt jelenik meg.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeHowToMoveToNextScreen() {

        if (g.btnNext.disabled) {

                Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

                var L_MouseTutGHowToMoveToNextScreen1_Text = "Itt kattintson r� egy v�rosra,";
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

                var L_MouseTutGHowToMoveToNextScreen2_Text = "majd kattintson a Tov�bb gombra.";
                Agent_Speak(L_MouseTutGHowToMoveToNextScreen2_Text);
    
                Agent_Play("RestPose");
        }

        else
                MouseTut_HowToMoveToNextScreen();

}




function Agent_MouseTutHAddCommands() {

        var L_MouseTutHMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_MouseTutHMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_MouseTutHMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeWhatToDoNext", L_MouseTutHMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeAboutThisScreen", L_MouseTutHMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeHowToMoveToNextScreen", L_MouseTutHMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutHTellMeWhatToDoNext() {

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHWhatToDoNext1_Text = "V�lassza ki valamelyik lehet�s�get �gy, hogy a mellette l�v� k�rre kattint.";
        Agent_Speak(L_MouseTutHWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutHWhatToDoNext2_Text = "Ez megv�ltoztatja a k�p megjelen�s�t.";
        Agent_Speak(L_MouseTutHWhatToDoNext2_Text);

        var L_MouseTutHWhatToDoNext3_Text = "Pr�b�ljon r�kattintani a m�sik be�ll�t�sra is.";
        Agent_Speak(L_MouseTutHWhatToDoNext3_Text);
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeAboutThisScreen() {
        var L_MouseTutHTellMeAboutThisScreen1_Text = "Ezen a k�perny�n azt gyakorolhatja, hogyan v�laszthat� ki egyetlen be�ll�t�s olyan esetben, amikor egyszerre csak egy be�ll�t�s adhat� meg.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHTellMeAboutThisScreen2_Text = "Ha az itt l�v� k�r�kre kattint,";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("cityImg"), "LeftCenter");
        else
			Agent_GestureAtElement(g.document.all("cityImg"), "RightCenter");

        var L_MouseTutHTellMeAboutThisScreen3_Text = "megv�ltozik a k�p megjelen�se.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutIAddCommands() {

        var L_MouseTutIMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_MouseTutIMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_MouseTutIMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeWhatToDoNext", L_MouseTutIMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeAboutThisScreen", L_MouseTutIMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeHowToMoveToNextScreen", L_MouseTutIMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutITellMeWhatToDoNext() {

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutIWhatToDoNext1_Text = "Kattintson egy vagy t�bb be�ll�t�sra �s figyelje meg, hogy milyen hat�ssal vannak a k�pre.";
        Agent_Speak(L_MouseTutIWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutIWhatToDoNext2_Text = "A be�ll�t�s �rv�nytelen�t�s�hez kattintson ism�t a be�ll�t�sra.";
        Agent_Speak(L_MouseTutIWhatToDoNext2_Text);

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeAboutThisScreen() {
        var L_MouseTutITellMeAboutThisScreen1_Text = "N�ha t�bb be�ll�t�s k�z�l nem csak egyet, hanem t�bbet is ki lehet jel�lni.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen1_Text);

        var L_MouseTutITellMeAboutThisScreen2_Text = "Ezen a k�perny�n k�l�nb�z� megjelen�t�si st�lusokat v�laszthat a k�phez.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen2_Text);

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutITellMeAboutThisScreen3_Text = "Mind�ssze a be�ll�t�sok mellett l�v� n�gyzetekre kell kattintania.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutJAddCommands() {

        var L_MouseTutJMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_MouseTutJMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_MouseTutJMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

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

        var L_MouseTutJWhatToDoNext1_Text = "Kattintson erre a mez�re,";
        Agent_Speak(L_MouseTutJWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutJWhatToDoNext2_Text = "majd �rja be a k�pal��r�sk�nt megjelen�teni k�v�nt sz�veget.";
        Agent_Speak(L_MouseTutJWhatToDoNext2_Text);
}

function Agent_OnMouseTutJTellMeAboutThisScreen() {
        var L_MouseTutJTellMeAboutThisScreen1_Text = "El�fordul, hogy egy be�ll�t�sban sz�veget is megadhat.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen1_Text);

        var L_MouseTutJTellMeAboutThisScreen2_Text = "Ezen a k�perny�n k�pal��r�st adhat meg a k�phez.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen2_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(g.document.all("caption"), "Left");
		else
			Agent_GestureAtElement(g.document.all("CaptionLabel"), "Left");

        var L_MouseTutJTellMeAboutThisScreen3_Text = "Egyszer�en kattintson a mez�re �s �rja be a k�pal��r�st.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutJTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutKAddCommands() {

        var L_MouseTutKMenuCommand1_Text = "Mi a k�vetkez� &l�p�s?";
        var L_MouseTutKMenuCommand2_Text = "Szeretn�k t�&bbet megtudni err�l a k�perny�r�l";
        var L_MouseTutKMenuCommand3_Text = "Hogyan &ugorhatok a k�vetkez� k�perny�re?";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeWhatToDoNext", L_MouseTutKMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeAboutThisScreen", L_MouseTutKMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeHowToMoveToNextScreen", L_MouseTutKMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutKTellMeWhatToDoNext() {
        var L_MouseTutKWhatToDoNext1_Text = "Gratul�lunk! Az eg�rhez k�sz�lt oktat�program v�g�re �rt.";
        Agent_Speak(L_MouseTutKWhatToDoNext1_Text);

        var L_MouseTutKWhatToDoNext2_Text = "A Tov�bb gombra kattintva ugorjon a k�vetkez� k�perny�re.";
        Agent_Speak(L_MouseTutKWhatToDoNext2_Text);
}

function Agent_OnMouseTutKTellMeAboutThisScreen() {
        var L_MouseTutKTellMeAboutThisScreen1_Text = "Sz�p munka! A vak�ci�s f�nyk�p elk�sz�lt.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen1_Text);
        
        var L_MouseTutKTellMeAboutThisScreen2_Text = "Az eg�rhez k�sz�lt oktat�program v�g�re �rt.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen2_Text);

        var L_MouseTutKTellMeAboutThisScreen3_Text = "Ha r�szletesebb ismertet�sre van sz�ks�ge az eg�r haszn�lat�r�l, amely tartalmazza p�ld�ul a h�z�ssal, �tm�retez�ssel �s a jobb gomb haszn�lat�val kapcsolatos tudnival�kat, a Windows els� ind�t�sakor olvassa el a s�g�t.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutKTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function MouseTut_WhatToDoNext() 
{
        var L_MouseTutTellMeWhatToDoNext1_Text = "A Tov�bb gombra kattintva l�pjen a k�vetkez� k�perny�re,";
        Agent_Speak(L_MouseTutTellMeWhatToDoNext1_Text);

        var L_MouseTutTellMeWhatToDoNext2_Text = "Vagy kattintson a Kihagy�s gombra az oktat�program tov�bbi r�szeinek �tl�p�s�hez.";
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

        var L_MouseTutTellMeHowToMoveToNextScreen1_Text = "A Tov�bb gombra kattintva l�pjen a k�vetkez� k�perny�re,";
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

        var L_MouseTutTellMeHowToMoveToNextScreen2_Text = "vagy kattintson a Kihagy�s gombra az oktat�program �tl�p�s�hez.";
        Agent_Speak(L_MouseTutTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_2nicsAddCommands() 
{
    var L_2nicsMenuCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    
    g_AgentCharacter.Commands.Add("Agent_On2nicsAboutThisStep", L_2nicsMenuCommand1_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_On2nicsAboutThisStep() 
{
    var L_2nicsAboutThisScreen1_Text = "Ez a k�perny� azt magyar�zza el, hogy t�bbf�lek�ppen is csatlakoztathatja sz�m�t�g�p�t az internethez.";
	Agent_Speak(L_2nicsAboutThisScreen1_Text);
	
    var L_2nicsAboutThisScreen2_Text = "A Windows telep�t�s�nek befejez�se ut�n kiv�laszthatja a csatlakoz�s m�dj�t.";
	Agent_Speak(L_2nicsAboutThisScreen2_Text);
}



function Agent_UserNameAddCommands() 
{
    var L_UserNameCommand1_Text = "Sze&retn�k t�bbet megtudni err�l a l�p�sr�l";
    var L_UserNameCommand2_Text = "Hol j&elenik meg a nevem?";
    var L_UserNameCommand3_Text = "H&ogyan tudom k�s�bb megv�ltoztatni a nevemet?";
    var L_UserNameCommand4_Text = "Mi legyen a k�vetkez� &l�p�sem?";
    
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
    var L_UserNameAboutThisStep1_Text = "Ezen a k�perny�n megadhatja vezet�knev�t �s ut�nev�t, hogy a Windows felismerje �nt, amikor legk�zelebb bejelentkezik.";
	Agent_Speak(L_UserNameAboutThisStep1_Text);
}

function Agent_OnUserNameWhereIsName() 
{
    var L_UserNameWhereIsName1_Text = "Az ut�neve meg fog jelenni az �dv�zl�k�perny�n a Windows elind�t�sakor.";
	Agent_Speak(L_UserNameWhereIsName1_Text);
	
    var L_UserNameWhereIsName2_Text = "Ha �n jelentkezik be a rendszerbe, a neve a Start men� tetej�n is l�that� lesz.";
	Agent_Speak(L_UserNameWhereIsName2_Text);
	
    var L_UserNameWhereIsName3_Text = "Ha m�svalaki jelentkezik be a sz�m�t�g�pre, �s megnyitja az �n Dokumentumok mapp�j�t, az �n neve meg fog jelenni a mappa nev�ben.";
	Agent_Speak(L_UserNameWhereIsName3_Text);
	
    var L_UserNameWhereIsName4_Text = "A mappa p�ld�ul \"Dorka dokumentumai\" n�vvel jelenik meg, �gy m�sok is l�thatj�k, hogy ez az �n mapp�ja.";
	Agent_Speak(L_UserNameWhereIsName4_Text);
	
    var L_UserNameWhereIsName5_Text = "�s meg fog jelenni a neve a felhaszn�l�k list�j�n is, ha a Start men� Vez�rl�pult parancs�ra, majd a Felhaszn�l�i fi�kok ikonra kattint.";
	Agent_Speak(L_UserNameWhereIsName5_Text);
}

function Agent_OnUserNameHowToChangeName() 
{
    var L_UserNameHowToChangeName1_Text = "Ha m�dos�tani szeretn� a nev�t, miut�n bejelentkezett a Windows rendszerbe, kattintson a Start men� Vez�rl�pult parancs�ra.";
	Agent_Speak(L_UserNameHowToChangeName1_Text);
	
    var L_UserNameHowToChangeName2_Text = "Ezut�n kattintson a Felhaszn�l�i fi�kok elemre.";
	Agent_Speak(L_UserNameHowToChangeName2_Text);
	
    var L_UserNameHowToChangeName3_Text = "Saj�t nev�t �s a sz�m�t�g�p t�bbi felhaszn�l�j�nak nev�t egyar�nt m�dos�thatja.";
	Agent_Speak(L_UserNameHowToChangeName3_Text);
}

function Agent_OnUserNameWhatToDoNext() 
{
    var L_UserNameWhatToDoNext1_Text = "Ha �jb�l meg csatlakozni szeretne az internetre, kattintson a Tov�bb gombra.";
	Agent_Speak(L_UserNameWhatToDoNext1_Text);
	
    var L_UserNameWhatToDoNext2_Text = "Vagy ha az internetre val� csatlakoz�s n�lk�l szeretne tov�bbl�pni, kattintson a Kihagy�s gombra.";
	Agent_Speak(L_UserNameWhatToDoNext2_Text);
}
