



var L_PhoneNumberLegit_Text = "\\map=\"one \\pau=100\\ sekiz y�z R U le jit\"=\"1-800-R U LEGIT\"\\";


var g_strRegionSetting = "";
var g_strKeyboardSetting = "";
var g_strLangSetting = " ";



function Agent_AddCommonCommands() 
{
    g_AgentCharacter.Commands.RemoveAll();

    var L_AddCommonCommands1_Text = "&Men�y� Kapat";

    g_AgentCharacter.Commands.Add("CloseMenu", L_AddCommonCommands1_Text);
        
    if (g_bAgentShowSpecialISPCommands) 
    {
        
		var L_AddCommonCommands2_Text = "Internet'te &kay�t olma hakk�nda bilgi ver";
		var L_AddCommonCommands3_Text = "Internet'&te kay�t olmay� yeniden ba�lat";
		var L_AddCommonCommands4_Text = "I&nternet'te kay�t olmay� atla";

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
        var L_AddAssistantanceCommand1_Text = "Ek &yard�m i�in kimi arayabilirim?";       

        g_AgentCharacter.Commands.Add("Agent_OnCommand_AboutAssistance", L_AddAssistantanceCommand1_Text);
    }
}

function Agent_OnCommand_AboutAssistance() 
{

    Agent_StopAll();

    var L_AboutAssistance1_Text = "�u adresteki bilgisayar �reticinizle temasa ge�in: %s.";
    var re = /%s/i;
    var L_AboutAssistance2_Text = "Bilgisayar �reticinize ba�vurun.";

    
    

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
            Agent_Speak(L_AboutAssistance2_Text);
    else
            Agent_Speak(L_AboutAssistance1_Text.replace(re, strPhoneNumber));

    Agent_Play("ReadReturn");
}

function Agent_AddWhatToDoNextCommand() 
{
    var L_AddWhatToDoNextCommand1_Text = "S&onra ne yapmal�y�m?";
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

        var L_WhatToDoNext1_Text = "Devam etmek i�in �leri d��mesini t�klat�n.";
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

        var L_WhatToDoNext2_Text = "�nceki ad�ma d�nmek i�in geri d��mesini t�klat�n.";
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

        var L_WhatToDoNext3_Text = "Ayr�ca, Atla d��mesini t�klatarak bu ad�m�n tamam�n� atlayabilirsiniz.";
        Agent_Speak(L_WhatToDoNext3_Text);
        
        Agent_Play("RestPose");
    }       
}

function Agent_DoSpecialISPCommand1() 
{
	
	
			
	Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
			
	var L_ISPSpecialTellMeAboutInternetSignup1_Text = "�u anda Internet eri�imi i�in kaydolma s�reci i�lemlerini yap�yorsunuz.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup1_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup2_Text = "Devam etmekte g��l�kle kar��la��yorsan�z beni t�klat�n ya da F1'e bas�n,";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup2_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup3_Text = "Ben de men�mde yeniden ba�lamak veya bir sonraki b�l�me atlamak i�in se�ebilece�iniz komutlar� g�r�nt�leyece�im.";
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

    var L_EncourageNextButton1_Text = "�leri d��mesini t�klat�n. | Sadece �leri d��mesini t�klat�n! | �leri d��mesini t�klat�n. | Sonraki ad�ma ge�mek i�in, �leri d��mesini t�klat�n.";
    Agent_Speak(L_EncourageNextButton1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnF1() 
{
    var L_OnF1_Text = "Size nas�l yard�m edebilirim? | Size ne yard�m�m olabilir?";
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

    var L_PreWelcomeScript1_Text = "Windows XP'ye Ho� Geldiniz!";
    Agent_Speak(L_PreWelcomeScript1_Text);

    var L_PreWelcomeScript2_Text = "Bilgisayar�n�z� ayarlaman�za yard�m etmek i�in buraday�m.";
    Agent_Speak(L_PreWelcomeScript2_Text);

    var L_PreWelcomeScript3_Text = "Siz ilerlerken bilgi verebilirim.";
    Agent_Speak(L_PreWelcomeScript3_Text);
                
    Agent_MoveToElement(document.all("AssistImg"), "LeftCenter"); 
    
    

    var L_PreWelcomeScript4_Text = "Yard�ma gereksinim duydu�unuzda, yaln�zca fare ile t�klat�n veya F1 tu�una bas�n.";
    Agent_Speak(L_PreWelcomeScript4_Text);
    
    Agent_Play("PointLeft");

    var L_PreWelcomeScript5_Text = "�htiyac�n olursa, burada olaca��m.";
    Agent_Speak(L_PreWelcomeScript5_Text);
    
    Agent_Play("RestPose");

    g_AgentRequestHideImage = g_AgentCharacter.Hide();
}



function Agent_WelcomeAddCommands() 
{
    
    
    

    var L_WelcomeAddCommands1_Text = "&Bu i�lem hakk�nda bilgi ver";
    var L_WelcomeAddCommands2_Text = "&Sonra ne yapmal�y�m?";

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

    var L_WelcomeWhatToDoNext1_Text = "Ba�lamaya haz�rsan�z, �leri d��mesini t�klat�n.";
    Agent_Speak(L_WelcomeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnWelcomeCommand_AboutProcess() 
{
    Agent_StopAll();

    var L_AboutProcess1_Text = "Arkamda, bilgisayar�n�z�n kurulumunu istedi�iniz gibi yapman�zda size yard�mc� olmas� i�in tasarlanan ekranlar�n ilkini g�r�yorsunuz.";
    Agent_Speak(L_AboutProcess1_Text);

    var L_AboutProcess2_Text = "Her ekranda se�im yapman�z ya da bilgi girmeniz istenir yahut sonraki ad�mda yapacaklar�n�z bildirilir.";
    Agent_Speak(L_AboutProcess2_Text);

    var L_AboutProcess3_Text = "��te size �n�m�zdeki birka� dakika i�inde at�lacak ad�mlarla ilgili �n bilgi:";
    Agent_Speak(L_AboutProcess3_Text);

    var L_AboutProcess4_Text = "�ncelikle, hoparl�r, klavye ve saat gibi bilgisayar donan�m�n�z�n do�ru �al��mas� sa�lan�r.";
    Agent_Speak(L_AboutProcess4_Text);

    var L_AboutProcess5_Text = "Ayr�ca, isterseniz bilgisayar�n�z�n bir etki alan�na do�ru �ekilde kat�lmas� da sa�lan�r.";
    Agent_Speak(L_AboutProcess5_Text);


    var L_AboutProcess6_Text = "�kinci olarak, %1 kullan�m ko�ullar�n� anahatlar�yla belirten lisans s�zle�mesini g�zden ge�irece�iz.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess6_Text, g_ProductName));
    
    if (!window.external.get_RetailOOBE()) 
    {
    var L_AboutProcess7_Text = "Bilgisayar�n�z �al��an bir modem veya a� ba�lant�s�na sahipse, Microsoft ve %1 ile kay�t yapt�rma se�ene�iniz vard�r. B�ylece size �r�n g�ncelle�tirmeleri hakk�nda bilgiler ve ilginizi �ekebilecek �zel teklifler g�nderebiliriz.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess7_Text, g_OEMNameStr));
    } 
    else 
    {    
    var L_AboutProcess7_Text = "Bilgisayar�n�z �al��an bir modem veya a� ba�lant�na sahipse, Microsoft ile kay�t yapt�rma se�ene�iniz vard�r. B�ylece size �r�n g�ncelle�tirmeleri hakk�nda bilgiler ve ilginizi �ekebilecek �zel teklifler g�nderebiliriz.";
    Agent_Speak(L_AboutProcess7_Text);
    }       

    var L_AboutProcess8_Text = "Ayr�ca, yasal bir kopya kulland���n�zdan emin olmak i�in %1 �r�n�n�n �zg�nl���n� do�rulama se�ene�ine sahip olacaks�n�z.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess8_Text, g_ProductName));

    var L_AboutProcess9_Text = "���nc�s�, e�er isterseniz Internet'e ba�lanman�za yard�m edece�im.";
    Agent_Speak(L_AboutProcess9_Text); 

    var L_AboutProcess10_Text = "Bu ad�m� atlamaya karar verirseniz, her zaman daha sonra kendiniz ba�lanabilirsiniz.";
    Agent_Speak(L_AboutProcess10_Text);

    var L_AboutProcess11_Text = "Ve d�rd�nc� olarak, bu bilgisayar� kullanacak herkes i�in �zelle�tirmenize yard�m edece�im. ";
    Agent_Speak(L_AboutProcess11_Text);

    var L_AboutProcess12_Text = "��te bu kadar. Madem yolumuz �ok uzun de�il, ba�layal�m o zaman!";
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

    var L_AboutProcess13_Text = "Ba�lamak i�in �leri d��mesini t�klat�n.";
    Agent_Speak(L_AboutProcess13_Text);
    
    Agent_Play("RestPose");
}


                                                       

function Agent_TimeZoneAddCommands() 
{
    var L_TimeZoneCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_TimeZoneCommand2_Text = "Bulundu�um &saat dilimini nas�l se�erim?";

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
        var L_TimeZoneMenuCommand3_Text = "G�n�����nd&an yararlanma saati uygulamas� nedir?";

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
    var L_ExplainTimeZoneStep1_Text = "Bilgisayar�n�z� kullanaca��n�z saat dilimini belirtin. Windows, bilgisayar�n�z�n saatini bu saat dilimine g�re ayarlayacak.";
    Agent_Speak(L_ExplainTimeZoneStep1_Text);

    var L_ExplainTimeZoneStep2_Text = "Ve isterseniz, Windows saati yaz saati uygulamas�na g�re otomatik olarak g�ncelle�tirebilir.";
    Agent_Speak(L_ExplainTimeZoneStep2_Text);

    var L_ExplainTimeZoneStep3_Text = "Bu donan�m�n�zla ilgili son ad�m.";
    Agent_Speak(L_ExplainTimeZoneStep3_Text);

    var L_ExplainTimeZoneStep4_Text = "Sonra, lisans s�zle�mesine ge�ece�iz.";
    Agent_Speak(L_ExplainTimeZoneStep4_Text);
    
}

function Agent_OnTimeZoneCommand_SelectZone() 
{
    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone1_Text = "Bu listedeki saat dilimleri Greenwich Mean Time ya da GMT �eklinde art� ya da eksi saat olarak g�r�n�r.";
    Agent_Speak(L_TellUserHowToSelectTimeZone1_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone2_Text = "Buray� t�klat�n ya da klavyenizin Sekme tu�una buraya gelene dek bas�n. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone2_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Right");

    var L_TellUserHowToSelectTimeZone3_Text = "Ard�ndan, saat dilimleri listesinde ilerlemek i�in bu k���k ok d��melerini t�klat�n veya klavyenizdeki yukar� ve a�a�� ok tu�lar�n� kullan�n. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone3_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone4_Text = "�stedi�iniz saat dilimini g�rd���n�zde, saat dilimini t�klat�n veya klavyenizde Enter tu�una bas�n.";
    Agent_Speak(L_TellUserHowToSelectTimeZone4_Text);

    var L_TellUserHowToSelectTimeZone5_Text = "Se�ti�iniz saat dilimi vurgulanm�� olarak g�r�n�r.";
    Agent_Speak(L_TellUserHowToSelectTimeZone5_Text);

    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserHowToSelectTimeZone6_Text = "Yaz saati uygulamas� yap�lan bir b�lgede ya��yorsan�z, imlecinizi buraya ta��y�n ve bu se�ene�i �i�aretlemek' i�in bir kez t�klat�n.";
    Agent_Speak(L_TellUserHowToSelectTimeZone6_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone7_Text = "Windows, bilgisayar�n�z�n saatini y�lda iki kere otomatik olarak d�zeltir.";
    Agent_Speak(L_TellUserHowToSelectTimeZone7_Text);
    
}

function Agent_OnTimeZoneCommand_DaylightSavings() 
{
    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserAboutDaylightOption1_Text = "Baz� saat dilimlerinde, g�n�����na g�re ayarlamak i�in saatler y�l�n belirli d�nemlerinde ileri ve geri al�n�r.";
    Agent_Speak(L_TellUserAboutDaylightOption1_Text);
    
    Agent_Play("RestPose");

    var L_TellUserAboutDaylightOption2_Text = "Bu oldu�unda, Windows'un otomatik olarak  saatinizi ayarlamas�n� istiyorsan�z bu imleci buraya getirip bir kere t�klatarak se�ene�i i�aretleyin.";
    Agent_Speak(L_TellUserAboutDaylightOption2_Text);

}



function Agent_OEMHWAddCommands() 
{
    var L_OEMHWMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_OEMHWMenuCommand2_Text = "Ses sistemimin �al��t���n� nas�l anla&r�m?";
    var L_OEMHWMenuCommand3_Text = "Ses sistemim �al��m�yorsa n&e yapmam gerekir?";
    var L_OEMHWMenuCommand4_Text = "Nas�l &yan�t veririm?";

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
    var L_OEMHWAboutThisScreen1_Text = "Bu ekranda, bilgisayar�n�z�n ses sisteminin �al���p �al��mad���n� denetleyebilirsiniz.";
	  Agent_Speak(L_OEMHWAboutThisScreen1_Text);

    var L_OEMHWAboutThisScreen2_Text = "Ses sistemi hoparl�rleriniz, bilgisayar�n�z�n i�indeki ses kart� ve �alman�za olanak sa�layan %1 yaz�l�m�ndan olu�maktad�r.";
	  Agent_Speak(ApiObj.formatMessage(L_OEMHWAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnOEMHWHowDoIKnow() 
{
    var L_OEMHWHowDoIKnow1_Text = "�u anda bir ses duyuyorsan�z, ses sisteminiz �al���yor demektir.";
	  Agent_Speak(L_OEMHWHowDoIKnow1_Text);

    var L_OEMHWHowDoIKnow2_Text = "Ses duymuyorsan�z, �nce hoparl�r�n�z�n ses ayar�n� denetleyerek �ok k�s�k �ekilde ayarlanmad���ndan emin olun.";
	  Agent_Speak(L_OEMHWHowDoIKnow2_Text);

    var L_OEMHWHowDoIKnow3_Text = "Bu da sorunu ��zm�yorsa, di�er olas�l�klara bakmak gerekecektir.";
	  Agent_Speak(L_OEMHWHowDoIKnow3_Text);
}

function Agent_OnOEMHWIsNotWorking() 
{
    var L_OEMHWIsNotWorking1_Text = "�nce, hoparl�rlerinizin a��k oldu�undan emin olun.";
	  Agent_Speak(L_OEMHWIsNotWorking1_Text);
	
    var L_OEMHWIsNotWorking2_Text = "Baz� hoparl�rlerde, a��k olduklar�n� g�steren bir ���k bulunur.";
	  Agent_Speak(L_OEMHWIsNotWorking2_Text);

    var L_OEMHWIsNotWorking3_Text = "�kincisi, ses y�ksekli�ini duyabilece�iniz bir bi�imde ayarlad���n�zdan emin olun.";
	  Agent_Speak(L_OEMHWIsNotWorking3_Text);

    var L_OEMHWIsNotWorking4_Text = "Hoparl�rlerinizden hala ses gelmiyorsa...";
	  Agent_Speak(L_OEMHWIsNotWorking4_Text);

    var L_OEMHWIsNotWorking5_Text = "���nc� olarak, hoparl�rlerinizin bir elektrik prizine tak�l� oldu�undan ve ayr�ca bilgisayar�n�za d�zg�n bir bi�imde ba�l� oldu�undan emin olun.";
	  Agent_Speak(L_OEMHWIsNotWorking5_Text);
	
	  var L_OEMHWIsNotWorking6_Text = "Bilgisayar�n�z�n, mikrofon ucu kolayl�kla hoparl�r ucuyla kar��t�r�labilir.";
	  Agent_Speak(L_OEMHWIsNotWorking6_Text);

    var L_OEMHWIsNotWorking7_Text = "D�rd�nc�s�, bir �ift stereo hoparl�r�n�z varsa bunlar�n birbirine ba�l� oldu�undan emin olun.";
	  Agent_Speak(L_OEMHWIsNotWorking7_Text);

    var L_OEMHWIsNotWorking8_Text = "Son olarak, hala hi�bir ses duymuyorsan�z, ba�ka bir bilgisayardan bir �ift hoparl�r alarak yeniden deneyin.";
	  Agent_Speak(L_OEMHWIsNotWorking8_Text);

    var L_OEMHWIsNotWorking9_Text = "Di�er bilgisayardan ald���n�z hoparl�rler �al��t��� halde sizinkiler �al��m�yorsa, hoparl�rlerinizi de�i�tirmeniz veya tamir etmeniz gerekir.";
	  Agent_Speak(L_OEMHWIsNotWorking9_Text);
}

function Agent_OnOEMHWIndicateAnswer() 
{
	  Agent_GestureAtElement(g.document.all("Sound_Yes"), "Left");
    
    var L_OEMHWIndicateAnswer1_Text = "Sadece, fare i�aret�isini yan�t�n�z�n solundaki beyaz dairenin i�ine getirin,";
	  Agent_Speak(L_OEMHWIndicateAnswer1_Text);
    
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("radioNoSound"), "Left");

    var L_OEMHWIndicateAnswer2_Text = "ve bir kere t�klat�n.";
	  Agent_Speak(L_OEMHWIndicateAnswer2_Text);
    
    Agent_Play("RestPose");

    var L_OEMHWIndicateAnswer3_Text = "Yan�t�n�z� belirtmek i�in klavyenizi kullanmak istiyorsan�z, doldurmak istedi�iniz beyaz dairenin etraf�nda soluk bir dikd�rtgen g�rene kadar Sekme tu�una bas�p ard�ndan ara �ubu�una bas�n.";
	  Agent_Speak(L_OEMHWIndicateAnswer3_Text);
}




function Agent_CompNameAddCommands() 
{
    var L_CompNameMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_CompNameMenuCommand2_Text = "Bilgisa&yar�m� daha sonra nas�l yeniden adland�r�r�m?";

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
    var L_CompNameAboutThisScreen1_Text = "Bu, bilgisayar�n�za bir ad verdi�iniz ekrand�r.";
	  Agent_Speak(L_CompNameAboutThisScreen1_Text);

    var L_CompNameAboutThisScreen2_Text = "Bu ad, bilgisayar�n�z bir a�da di�er bilgisayarlara ba�l�ysa di�er kullan�c�lara bilgisayar�n�z� tan�t�r.";
	  Agent_Speak(L_CompNameAboutThisScreen2_Text);
}

function Agent_OnCompNameHowToRename() 
{
    var L_CompNameHowToRename1_Text = "Windows kurulu�unu bitirdikten sonra, Ba�lat men�s�nde Denetim Masas�'n� t�klat�n.";
	  Agent_Speak(L_CompNameHowToRename1_Text);

    var L_CompNameHowToRename2_Text = "Performans ve Bak�m'�n alt�nda Sistem simgesini t�klat�n, ard�ndan Bilgisayar Ad� sekmesinin alt�ndaki y�nergeleri izleyin.";
	  Agent_Speak(L_CompNameHowToRename2_Text);

    var L_CompNameHowToRename3_Text = "Bu ad�mlar� unutursan�z, sorular�n�za yan�t bulmak ve di�er yararl� bilgiler i�in Ba�lat men�s�nde Yard�m ve Destek'i t�klat�n.";
	  Agent_Speak(L_CompNameHowToRename3_Text);
}




function Agent_SECURITYPASSAddCommands() 
{
    var L_SECURITYPASSMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_SECURITYPASSMenuCommand2_Text = "Parola olu�turman�n &en iyi yolu nedir?";

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
    var L_SECURITYPASSAboutThisScreen1_Text = "Buras�, bu bilgisayar� yetkisiz eri�imden korumak istiyorsan�z parola olu�turdu�unuz ekrand�r.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen1_Text);

    var L_SECURITYPASSAboutThisScreen2_Text = "Unutmay�n: Bu bilgisayar, bir a�daki di�er bilgisayarlara ba�l�ysa \"Administrator\" kullan�c� ad� ve ge�erli parolas�yla oturum a�an ki�i t�m a�a eri�ebilir.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen2_Text);
    
    var L_SECURITYPASSAboutThisScreen3_Text = "Bu nedenle, bilgisayar�n�z� (ve varsa a��n�z�) korumak i�in bir Administrator parolas� istemeniz �nerilir.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen3_Text);
}

function Agent_OnSECURITYPASSBestWay() 
{
    var L_SECURITYPASSBestWay1_Text = "Parolan�z�n g�venli�ini art�rmak i�in, parolan�z bu ��elerden en az iki tanesini i�ermelidir: b�y�k harfler, k���k harfler ve say�lar.";
	  Agent_Speak(L_SECURITYPASSBestWay1_Text);

    var L_SECURITYPASSBestWay2_Text = "Ayr�ca, say�lar�n s�ras� ne kadar rasgele olursa parola da o kadar g�venli olacakt�r.";
	  Agent_Speak(L_SECURITYPASSBestWay2_Text);

    var L_SECURITYPASSBestWay3_Text = "Parolalar en fazla 127 karakter uzunlu�unda olabilir.";
	  Agent_Speak(L_SECURITYPASSBestWay3_Text);
    
    var L_SECURITYPASSBestWay4_Text = "Ancak, Windows'u ayr�ca Windows 95 veya Windows 98 kullanan bilgisayarlar�n bulundu�u bir a�da kullan�yorsan�z ve a�da bu bilgisayarlardan oturum a�abilmek istiyorsan�z, 14 karakterden uzun olmayan parolalar kullanmay� d���n�n.";
	  Agent_Speak(L_SECURITYPASSBestWay4_Text);
}



function Agent_JOINDOMAINAddCommands() 
{
    var L_JOINDOMAINMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_JOINDOMAINMenuCommand2_Text = "Etki alan� ne&dir?";
    var L_JOINDOMAINMenuCommand3_Text = "Bir &etki alan�na nas�l kat�labilirim?"; 
    var L_JOINDOMAINMenuCommand4_Text = "&Sonra ne yapmal�y�m?";


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
    var L_JOINDOMAINAboutThisScreen1_Text = "Buras�, bu bilgisayar� bir etki alan� �yesi yapmak isteyip istemedi�inize karar verdi�iniz ekran.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen1_Text);

    var L_JOINDOMAINAboutThisScreen2_Text = "Bir etki alan�na kat�lmay� se�erseniz, bu bilgisayar�n kat�lmakta oldu�u etki alan�n�n ad�n� yazman�z gerekir.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen2_Text);
}

function Agent_OnJOINDOMAINDifference() 
{
    var L_JOINDOMAINDifference1_Text = "Etki alan�, bir birim olarak y�netilen bilgisayarlar grubudur.";
    Agent_Speak(L_JOINDOMAINDifference1_Text);
    
    var L_JOINDOMAINDifference2_Text = "�rne�in; bir �irket �stanbul �ubesindeki t�m bilgisayarlar� ayn� eri�im haklar�n� payla��p ayn� yaz�c�lara ba�lanacak �ekilde ayn� etki alan�na ekleyebilir.";
    Agent_Speak(L_JOINDOMAINDifference2_Text);

    var L_JOINDOMAINDifference3_Text = "Hangi se�ene�i se�mek istedi�inizden emin de�ilseniz, Hay�r'� se�in ve �leri d��mesini t�klat�n.";
    Agent_Speak(L_JOINDOMAINDifference3_Text);
}

function Agent_OnJOINDOMAINHowToName() 
{
 	  Agent_GestureAtElement(g.document.all("radioYesDomain"), "Left");
 
    var L_JOINDOMAINHowToName1_Text = "Bir etki alan�na kat�lma se�ene�ini i�aretlerseniz,";
    Agent_Speak(L_JOINDOMAINHowToName1_Text);
      
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("textboxDomain"), "Left");
  
    var L_JOINDOMAINHowToName2_Text = "se�ene�in alt�ndaki kutuya bir ad yazabilirsiniz.";
    Agent_Speak(L_JOINDOMAINHowToName2_Text);
      
    Agent_Play("RestPose");
  
    var L_JOINDOMAINHowToName3_Text = "Etki alan�na kat�lma se�ene�ini se�mediyseniz, bir ad yazamazs�n�z.";
    Agent_Speak(L_JOINDOMAINHowToName3_Text);
  
    var L_JOINDOMAINHowToName4_Text = "Bu nedenle, kutu etki alan�na kat�lmay� se�ene kadar i�ine hi�bir �ey yazamayaca��n�z� belirtmek �zere gri renkli kal�r.";
    Agent_Speak(L_JOINDOMAINHowToName4_Text);
  
    var L_JOINDOMAINHowToName5_Text = "Bu bilgisayar� bir etki alan�na kat�yorsan�z, a� y�neticinizden ge�erli bir etki alan� ad� isteyin.";
    Agent_Speak(L_JOINDOMAINHowToName5_Text);
  
    var L_JOINDOMAINHowToName6_Text = "Etki alan�na katm�yorsan�z, bir ad belirtmeniz gerekmez.";
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
    
    var L_JOINDOMAINWhatToDoNext1_Text = "Bir se�im yapt�ktan sonra, �leri d��mesini t�klat�n.";
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
    
    var L_JOINDOMAINWhatToDoNext2_Text = "Ayr�ca, Geri d��mesini t�klatarak �nceki ekrana geri d�nmeyi se�ebilirsiniz.";
    Agent_Speak(L_JOINDOMAINWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}




function Agent_JNDOM_AAddCommands() 
{
    var L_JNDOMAMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_JNDOMAMenuCommand2_Text = "Kullan�c� ad� ve &parolas�n� nas�l girerim?";
    var L_JNDOMAMenuCommand3_Text = "Etki alan� ne&dir?";
    var L_JNDOMAMenuCommand4_Text = "&Sonra ne yapmal�y�m?";
    
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
    var L_JNDOM_A_AboutThisStep1_Text = "Buras�, bu bilgisayar� etki alan�na katmaya yetkili olan ki�iyi tan�mlad���n�z ekrand�r.";
  	Agent_Speak(L_JNDOM_A_AboutThisStep1_Text);
}

function Agent_OnJNDOM_AHowToEnter() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_HowToEnter1_Text = "Buraya yazd���n�z ad, etki alan�ndaki di�er kullan�c� adlar� aras�nda benzersiz olmal�d�r.";
    Agent_Speak(L_JNDOM_A_HowToEnter1_Text);
      
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_HowToEnter2_Text = "Buraya yazd���n�z parola, kullan�c�n�n hesab�ndaki parolayla e�le�melidir.";
    Agent_Speak(L_JNDOM_A_HowToEnter2_Text);
      
    Agent_Play("RestPose");
    
    var L_JNDOM_A_HowToEnter3_Text = "Hangi kullan�c� ad� veya parolan�n kullan�laca��n� bilmiyorsan�z, a� y�neticinize ba�vurun.";
    Agent_Speak(L_JNDOM_A_HowToEnter3_Text);
}

function Agent_OnJNDOM_AWhatIsDomain() 
{
    var L_JNDOM_A_WhatIsDomain1_Text = "Etki alan�, bir birim olarak y�netilen bilgisayarlar grubudur.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain1_Text);
  	
    var L_JNDOM_A_WhatIsDomain2_Text = "�rne�in; bir �irket �stanbul �ubesindeki t�m bilgisayarlar� ayn� eri�im haklar�n� payla��p ayn� yaz�c�lara ba�lanacak �ekilde ayn� etki alan�na ekleyebilir.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain2_Text);
      
    Agent_Play("RestPose");		
}

function Agent_OnJNDOM_AWhatToDoNext() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_WhatToDoNext1_Text = "Kullan�c� ad�n� buraya";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext1_Text);
      
    Agent_Play("RestPose");		
  	
    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_WhatToDoNext2_Text = "kullan�c� parolas�n� da buraya";
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
    
    var L_JNDOM_A_WhatToDoNext3_Text = "girdikten sonra �leri'yi t�klat�n.";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext3_Text);
      
    Agent_Play("RestPose");		
}



function Agent_ActivationAddCommands() 
{
    var L_ActivationMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_ActivationMenuCommand2_Text = "Etki&nle�tirmeyle ilgili bilgi ver";
    var L_ActivationMenuCommand3_Text = "Daha sonra nas�l e&tkinle�tiririm?";
    var L_ActivationMenuCommand4_Text = "Internet'e ba�l� &de�ilsem, nas�l etkinle�tiririm?";
    var L_ActivationMenuCommand5_Text = "Etkinle�tirmezsem ne ol&ur?";
    var L_ActivationMenuCommand6_Text = "&Sonra ne yapmal�y�m?";

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
    
    var L_ActivationAboutThisScreen1_Text = "Buras�, %1 ��esini �imdi ya da daha sonra etkinle�tirme karar�n� verece�iniz ekrand�r.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutThisScreen1_Text, g_ProductName));
    
    var L_ActivationAboutThisScreen2_Text = "Daha sonra etkinle�tirilmesine karar verirseniz, Ba�lat men�s�nden �r�n Etkinle�tirme Sihirbaz�'n� �al��t�rabilirsiniz.";
    Agent_Speak(L_ActivationAboutThisScreen2_Text);
    
    var L_ActivationAboutThisScreen3_Text = "Ayr�ca birka� g�nde bir, kullanmaya devam edebilmeniz i�in Windows'u etkinle�tirmeniz hat�rlat�lacakt�r.";
    Agent_Speak(L_ActivationAboutThisScreen3_Text);
}

function Agent_OnActivationAboutActivation() 
{
    var L_ActivationAboutActivation1_Text = "Bankan�zdan yeni bir bor�lanma kart� veya kredi kart� ald���n�zda, bankan�z kullanmaya ba�lamadan �nce kart� �etkinle�tirmenizi' ister.";
    Agent_Speak(L_ActivationAboutActivation1_Text);
    
    var L_ActivationAboutActivation2_Text = "Etkinle�tirme sizi ve bankan�z� yetkisiz kart kullan�m�ndan korur.";
    Agent_Speak(L_ActivationAboutActivation2_Text);
    
    var L_ActivationAboutActivation3_Text = "%1 etkinle�tirmesi ayn� �ekilde �al���r; tek farkl� yan� etkinle�tirmeniz gerekmeden �nce %2 belirtilen etkinle�tirme s�resince kullan�labilir.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationHowToActivateLater() 
{
    var L_ActivationHowToActivateLater1_Text = "Etkinle�tirmeyi �imdilik atlarsan�z, birka� g�nde bir %1 masa�st�nde bir an�msama g�r�nt�lenir.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationHowToActivateLater1_Text, g_ProductName));
    
    var L_ActivationHowToActivateLater2_Text = "Ba�lat men�s�nden Windows'u Etkinle�tir'i t�klatarak �r�n Etkinle�tirme Sihirbaz�n� �al��t�rabilirsiniz.";
    Agent_Speak(L_ActivationHowToActivateLater2_Text);
    
    var L_ActivationHowToActivateLater3_Text = "Bu ad�mlar� unutursan�z, sorular�n�za yan�t bulmak, benzeri �nemli bilgiyi edinmek i�in Ba�lat men�s�ndeki Yard�m ve Destek'� t�klat�n.";
    Agent_Speak(L_ActivationHowToActivateLater3_Text);
}

function Agent_OnActivationHowToActivateUnconnected() 
{
    Agent_GestureAtElement(g.rb_act_2, "Left");
    	
    var L_ActivationHowToActivateUnconnected1_Text = "Burada yaln�zca \"Hay�r\" deyin.";
    Agent_Speak(L_ActivationHowToActivateUnconnected1_Text);
    
    Agent_Play("RestPose");
    
    var L_ActivationHowToActivateUnconnected2_Text = "Windows kurulumunu bitirdikten sonra Ba�lat men�s�ndeki Windows'u Etkinle�tir'i t�klatarak �r�n Etkinle�tirme Sihirbaz�'n� �al��t�rabilirsiniz.";
    Agent_Speak(L_ActivationHowToActivateUnconnected2_Text);
    
    var L_ActivationHowToActivateUnconnected3_Text = "Sihirbaz Windows'u etkinle�tirmek i�in arayabilece�iniz telefon numaras�n� g�sterecek.";
    Agent_Speak(L_ActivationHowToActivateUnconnected3_Text);
}

function Agent_OnActivationWhatHappensNoActivate() 
{
    var L_ActivationWhatHappensNoActivate1_Text = "%1, etkinle�tirme s�resi sona erene kadar kullan�labilir.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate1_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate2_Text = "Ancak bu s�renin sonunda kullanmaya devam etmek i�in %1 etkinle�tirilmeli.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate2_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate3_Text = "Etkinle�tirme s�resinin dolmas�n� beklerseniz, %1 art�k kullan�lamaz duruma gelir.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate3_Text, g_ProductName));
}

function Agent_OnActivationWhatToDoNext() 
{
    Agent_GestureAtElement(g.act_spn1, "Left");
    
    var L_ActivationWhatToDoNext1_Text = "Bu sorunun cevab�n� se�tikten sonra,";
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
            
    var L_ActivationWhatToDoNext2_Text = "�leri'yi t�klat�n.";
    Agent_Speak(L_ActivationWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");	
}



function Agent_ActivationErrorAddCommands() 
{
    var L_ActivationErrorMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_ActivationErrorMenuCommand2_Text = "Etki&nle�tirmeyle ilgili bilgi ver";
    var L_ActivationErrorMenuCommand3_Text = "Daha sonra nas�l et&kinle�tiririm?";
    var L_ActivationErrorMenuCommand4_Text = "Internet'e ba�l� de�ilsem, nas�l &&etkinle�tiririm?";
    var L_ActivationErrorMenuCommand5_Text = "Etkinle�tirmezsem ne ol&ur?";


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
    var L_ActivationErrorAboutThisScreen1_Text = "Etkinle�tirme merkezimize ula�amad���n�z i�in bu ekran g�r�n�r.";
	Agent_Speak(L_ActivationErrorAboutThisScreen1_Text);
	
    var L_ActivationErrorAboutThisScreen2_Text = "%1 kurulumunu tamamlad�ktan sonra, Ba�lat men�s�nde Windows'u Etkinle�tir'i t�klatarak �r�n Etkinle�tirme Sihirbaz�'n� �al��t�rabilirsiniz.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnActivationErrorAboutActivation() 
{
    var L_ActivationErrorAboutActivation1_Text = "Bankan�zdan yeni bir bor�lanma kart� veya kredi kart� ald���n�zda, bankan�z kullanmaya ba�lamadan �nce kart� �etkinle�tirmenizi' ister.";
	Agent_Speak(L_ActivationErrorAboutActivation1_Text);
	
    var L_ActivationErrorAboutActivation2_Text = "Etkinle�tirme sizi ve bankan�z� yetkisiz kart kullan�m�ndan korur.";
	Agent_Speak(L_ActivationErrorAboutActivation2_Text);
	
    var L_ActivationErrorAboutActivation3_Text = "%1 etkinle�tirmesi ayn� �ekilde �al���r, ancak etkinle�tirmeniz istenmeden �nce belirli bir g�n say�s� i�in %2 de�erini kullanabilirsiniz.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationErrorHowToActivateLater() 
{
    var L_ActivationErrorHowToActivateLater1_Text = "Etkinle�tirmeyi �imdilik atlarsan�z, birka� g�nde bir %1 masa�st�nde bir an�msama g�r�nt�lenir.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationErrorHowToActivateLater2_Text = "Ba�lat men�s�nden Windows'u Etkinle�tir'i t�klatarak �r�n Etkinle�tirme Sihirbaz�n� �al��t�rabilirsiniz.";
	Agent_Speak(L_ActivationErrorHowToActivateLater2_Text);
	
    var L_ActivationErrorHowToActivateLater3_Text = "Bu ad�mlar� unutursan�z, sorular�n�za yan�t bulmak, benzeri �nemli bilgiyi edinmek i�in Ba�lat men�s�ndeki Yard�m ve Destek'� t�klat�n.";
	Agent_Speak(L_ActivationErrorHowToActivateLater3_Text);
}

function Agent_OnActivationErrorHowToActivateUnconnected() 
{
    var L_ActivationErrorHowToActivateUnconnected1_Text = "Windows kurulumunu bitirdikten sonra Ba�lat men�s�ndeki Windows'u Etkinle�tir'i t�klatarak �r�n Etkinle�tirme Sihirbaz�'n� �al��t�rabilirsiniz.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected1_Text);
	
    var L_ActivationErrorHowToActivateUnconnected2_Text = "Sihirbaz Windows'u etkinle�tirmek i�in arayabilece�iniz telefon numaras�n� g�sterecek.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected2_Text);
}

function Agent_OnActivationErrorWhatHappensNoActivate() 
{
    var L_ActivationErrorWhatHappensNoActivate1_Text = "%1, etkinle�tirme s�resi sona erene kadar kullan�labilir.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate2_Text = "Ancak bu s�renin sonunda kullanmaya devam etmek i�in %1 etkinle�tirilmeli.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate3_Text = "Etkinle�tirme s�resinin dolmas�n� beklerseniz, %1 art�k kullan�lamaz duruma gelir.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_ActivationPrivacyPolicyAddCommands() 
{
    var L_ActivationPrivacyPolicyMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_ActivationPrivacyPolicyMenuCommand2_Text = "Etki&nle�tirmeyle ilgili bilgi ver";
    var L_ActivationPrivacyPolicyMenuCommand3_Text = "Daha sonra nas�l etkinle�tiriri&m?";
    var L_ActivationPrivacyPolicyMenuCommand4_Text = "Internet'e ba�l� de�ilsem, nas�l &&etkinle�tiririm?";
    var L_ActivationPrivacyPolicyMenuCommand5_Text = "Etkinle�tirmezsem ne ol&ur?";


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
    var L_ActivationPrivacyPolicyAboutThisScreen1_Text = "Bu ekranda, %1 etkinle�tirildi�inde gizlili�inizin nas�l korunaca�� a��klanmaktad�r.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutThisScreen1_Text, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyAboutActivation() 
{
    var L_ActivationPrivacyPolicyAboutActivation1_Text = "Bankan�zdan yeni bir bor�lanma kart� veya kredi kart� ald���n�zda, bankan�z kullanmaya ba�lamadan �nce kart� �etkinle�tirmenizi' ister.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation1_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation2_Text = "Etkinle�tirme sizi ve bankan�z� yetkisiz kart kullan�m�ndan korur.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation2_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation3_Text = "%1 etkinle�tirmesi ayn� �ekilde �al���r; tek farkl� yan� etkinle�tirmeniz gerekmeden �nce %2 belirtilen etkinle�tirme s�resince kullan�labilir.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyHowToActivateLater() 
{
    var L_ActivationPrivacyPolicyHowToActivateLater1_Text = "Etkinle�tirmeyi �imdilik atlarsan�z, birka� g�nde bir %1 masa�st�nde bir an�msama g�r�nt�lenir.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyHowToActivateLater2_Text = "Ba�lat men�s�nden Windows'u Etkinle�tir'i t�klatarak �r�n Etkinle�tirme Sihirbaz�n� �al��t�rabilirsiniz.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater2_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateLater3_Text = "Bu ad�mlar� unutursan�z, sorular�n�za yan�t bulmak, benzeri �nemli bilgiyi edinmek i�in Ba�lat men�s�ndeki Yard�m ve Destek'� t�klat�n.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater3_Text);
}

function Agent_OnActivationPrivacyPolicyHowToActivateUnconnected() 
{
    var L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text = "Windows kurulumunu bitirdikten sonra Ba�lat men�s�ndeki Windows'u Etkinle�tir'i t�klatarak �r�n Etkinle�tirme Sihirbaz�'n� �al��t�rabilirsiniz.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text = "Sihirbaz Windows'u etkinle�tirmek i�in arayabilece�iniz telefon numaras�n� g�sterecek.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text);
}

function Agent_OnActivationPrivacyPolicyWhatHappensNoActivate() 
{
    var L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text = "ActivationPrivacyPolicy s�resi sona erinceye kadar %1 kullanmaya devam edebilirsiniz.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text = "Ancak bu s�renin sonunda kullanmaya devam etmek i�in %1 etkinle�tirilmeli.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text = "Ancak ActivationPrivacyPolicy s�resi sona erdi�inde, art�k %1 kullanamazs�n�z.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_DSLMAINAddCommands() 
{
    var L_DSLMAINMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_DSLMAINMenuCommand2_Text = "Kullan�c� a&d� ve parolas� gerektiren baz� nedenler";
    var L_DSLMAINMenuCommand3_Text = "&Sonra ne yapmal�y�m?";
    
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
    var L_DSLMAINAboutThisScreen1_Text = "Buras�, bu bilgisayarda Internet'e eri�mek i�in kullan�c� ad� ve parola gerekip gerekmeyece�ine karar verdi�iniz ekrand�r.";
	Agent_Speak(L_DSLMAINAboutThisScreen1_Text);
}

function Agent_OnDSLMAINSomeReasons() 
{
    var L_DSLMAINHowToMoveOn1_Text = "Bu bilgisayar� kullanacak tek ki�iyseniz, kullan�c� ad� ve parolan�z�n %1 taraf�ndan otomatik olarak saklanmas�na izin vermeniz uygun olacakt�r.";
	Agent_Speak(ApiObj.FormatMessage(L_DSLMAINHowToMoveOn1_Text, g_ProductName));
	
    var L_DSLMAINHowToMoveOn2_Text = "B�ylece, Internet'e her ba�lanmak istedi�inizde bu bilgileri yazman�z gerekmeyecektir.";
	Agent_Speak(L_DSLMAINHowToMoveOn2_Text);
	
    var L_DSLMAINHowToMoveOn3_Text = "Ancak, bu bilgisayar� ba�kalar�yla payla��yor ve Internet hesab�n�z� bu ki�ilerle payla�mak istemiyorsan�z, hesab�n�z� bir kullan�c� ad� ve parolayla koruyabilirsiniz.";
	Agent_Speak(L_DSLMAINHowToMoveOn3_Text);
	
    var L_DSLMAINHowToMoveOn4_Text = "�rne�in, bu bilgisayar� �ocuklar�n�zla payla�mak isteyebilirsiniz. B�ylece �ocuklar�n�z bilgisayarda oyun oynayabilir.";
	Agent_Speak(L_DSLMAINHowToMoveOn4_Text);
	
    var L_DSLMAINHowToMoveOn5_Text = "Ancak Internet'te sizin izniniz olmadan gezinmelerini istemiyor olabilirsiniz.";
	Agent_Speak(L_DSLMAINHowToMoveOn5_Text);		
}

function Agent_OnDSLMAINWhatToDoNext()
{	
	Agent_GestureAtElement(g.dslmain_TitleText, "Left");
	
    var L_DSLMAINWhatToDoNext1_Text = "Bu sorunun cevab�n� se�tikten sonra,";
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
	
	var L_DSLMAINWhatToDoNext2_Text = "�leri'yi t�klat�n.";
	Agent_Speak(L_DSLMAINWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");
}



function Agent_DSL_AAddCommands() 
{
    var L_DSLAMenuCommand1_Text = "Bu& a�amayla ilgili bilgi ver";
    var L_DSLAMenuCommand2_Text = "Internet tam &olarak nedir?";
    var L_DSLAMenuCommand3_Text = "Internet'e &ba�lanmak i�in neler gerekli?";
    var L_DSLAMenuCommand4_Text = "In&ternet'te kay�t olma hakk�nda bilgi ver";

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
    var L_DSL_A_AboutThisStep1_Text = "Buras�, bu bilgisayardan Internet'e ba�lanabilmeniz i�in Internet servis sa�lay�c�n�zdaki (k�saca \"ISS\") hesab�n�z� ayarlad���n�z ekrand�r.";
	Agent_Speak(L_DSL_A_AboutThisStep1_Text);
}

function Agent_DSL_AWhatIsInternet() 
{
    var L_DSL_A_WhatIsInternet1_Text = "Internet d�nya �ap�nda bir bilgisayar a��d�r.";
	Agent_Speak(L_DSL_A_WhatIsInternet1_Text);
	
    var L_DSL_A_WhatIsInternet2_Text = "Internet eri�iminiz varsa; okullar, devletler, i�letmeler ve ki�ileri de i�eren milyonlarca de�i�ik kaynaktan gelen ve herkes taraf�ndan kullan�labilen bilgilere eri�ebilirsiniz.";
	Agent_Speak(L_DSL_A_WhatIsInternet2_Text);
	
    var L_DSL_A_WhatIsInternet3_Text = "World Wide Web (veya k�saca \"Web\"), k�pr�ler kullanarak Internet'de dola�may� sa�layan bir sistemdir.";
	Agent_Speak(L_DSL_A_WhatIsInternet3_Text);
	
    var L_DSL_A_WhatIsInternet4_Text = "K�pr�ler, t�klat�ld���nda sizi ba�ka bir Web sayfas�na veya ayn� sayfan�n ba�ka bir b�l�m�ne g�t�ren ya da bir program� a�mak gibi belirli bir eylemi ger�ekle�tiren metin veya resimlerdir.";
	Agent_Speak(L_DSL_A_WhatIsInternet4_Text);
	
    var L_DSL_A_WhatIsInternet5_Text = "Web'de gezinmek i�in, Internet'deki bilgileri metin, resimler, sesler veya dijital filmler bi�iminde g�r�nt�leyen bir program olan bir Web taray�c� kullan�rs�n�z.";
	Agent_Speak(L_DSL_A_WhatIsInternet5_Text);
	
    var L_DSL_A_WhatIsInternet6_Text = "Microsoft iki Web taray�c� sunmaktad�r:";
	Agent_Speak(L_DSL_A_WhatIsInternet6_Text);
	
    var L_DSL_A_WhatIsInternet7_Text = "Yeni ba�layanlar ve bilgisayarlar�n� evde kullananlar i�in m�kemmel olan MSN Explorer ve Internet Explorer.";
	Agent_Speak(L_DSL_A_WhatIsInternet7_Text);
}

function Agent_DSL_ANeedToConnect() 
{	
    var L_DSL_A_NeedToConnect1_Text = "Internet'e ba�lanmak i�in yaln�zca �� �eye gereksiniminiz var.";
	Agent_Speak(L_DSL_A_NeedToConnect1_Text);	
	
    var L_DSL_A_NeedToConnect2_Text = "�ncelikle, bir bilgisayar�n�z olmal�, zaten var.";
	Agent_Speak(L_DSL_A_NeedToConnect2_Text);
	
    var L_DSL_A_NeedToConnect3_Text = "�kincisi, bir Internet Servis Sa�lay�c�'n�z (veya k�saca \"ISS\" ) olmal�.";
	Agent_Speak(L_DSL_A_NeedToConnect3_Text);
	
    var L_DSL_A_NeedToConnect4_Text = "Telefon �irketiniz size nas�l telefon hizmeti sa�l�yorsa, ISS de size ayn� bi�imde Internet hizmeti veya eri�imi sa�lar.";
	Agent_Speak(L_DSL_A_NeedToConnect4_Text);
	
    var L_DSL_A_NeedToConnect5_Text = "Bilgisayar�n�z�n Internet eri�imi i�in ayarlanmas�na s�ra geldi�inde, ISS'niz yoksa bir tane bulman�za yard�mc� olunacakt�r.";
	Agent_Speak(L_DSL_A_NeedToConnect5_Text);
	
    var L_DSL_A_NeedToConnect6_Text = "���nc�s�, bilgisayar�n�z ve ISS'niz aras�nda fiziksel ba�lant�y� sa�layan bir ayg�ta gereksiniminiz var.";
	Agent_Speak(L_DSL_A_NeedToConnect6_Text);
	
    var L_DSL_A_NeedToConnect7_Text = "Bu ekran�n amac� budur.";
	Agent_Speak(L_DSL_A_NeedToConnect7_Text);
}

function Agent_DSL_AInternetSignup() 
{
    var L_DSL_A_AboutThisScreen1_Text = "Bir Internet hesab�n�z zaten varsa, Internet hizmet sa�lay�c�n�z size bu bilgileri zaten vermi� olmal�d�r.";
	Agent_Speak(L_DSL_A_AboutThisScreen1_Text);
	
    var L_DSL_A_AboutThisScreen2_Text = "Yeni bir bilgisayar�n�z oldu�unda, yeni bir Internet hesab� ayarlaman�z gerekmez.";
	Agent_Speak(L_DSL_A_AboutThisScreen2_Text);
	
    var L_DSL_A_AboutThisScreen3_Text = "Eski bilgisayar�n�zda kulland���n�z hesap bilgilerini aynen kullanabilirsiniz.";
	Agent_Speak(L_DSL_A_AboutThisScreen3_Text);
	
    var L_DSL_A_AboutThisScreen4_Text = "Internet'e kendi bilgisayar�n�zdan hi� ba�lanmad�ysan�z, Internet hesab� bilgilerini bu bilgisayar� sat�n al�rken alm�� olabilirsiniz.";
	Agent_Speak(L_DSL_A_AboutThisScreen4_Text);
	
    var L_DSL_A_AboutThisScreen5_Text = "Sat�c�n�z size kullan�c� ad�, parola ve ISS ad� olan bir ka��t par�as� verdiyse bu bilgileri bu ekranda girin.";
	Agent_Speak(L_DSL_A_AboutThisScreen5_Text);
}



function Agent_DSL_BAddCommands() 
{

    var L_DSL_B_MenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_DSL_B_MenuCommand2_Text = "IP &ne demektir?";
    var L_DSL_B_MenuCommand3_Text = "DNS ne de&mek?";
    var L_DSL_B_MenuCommand4_Text = "&Sonra ne yapmal�y�m?";

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
    var L_DSL_B_AboutThisScreen1_Text = "Son ekranda, Internet hesab� bilgilerinizi sa�layarak Internete nas�l ba�lanaca��n�z� s�ylediniz.";
	Agent_Speak(L_DSL_B_AboutThisScreen1_Text);

    var L_DSL_B_AboutThisScreen2_Text = "Bu ekranda, bilgisayar�n Internete fiziksel ba�lant�s�n�n nas�l olaca��n� s�ylemeniz gerekiyor.";
	Agent_Speak(L_DSL_B_AboutThisScreen2_Text);
}

function Agent_OnDSL_BWhatIsIP() 
{
    var L_DSL_B_WhatIsIP1_Text = "Internet'e ba�l� her bilgisayar�n benzersiz bir Internet �leti�im Kural� ya da  \"IP\" adresi vard�r. Bu adres, Internet'te bir bilgisayar� di�erinden ay�r�r.";
	Agent_Speak(L_DSL_B_WhatIsIP1_Text);

    var L_DSL_B_WhatIsIP2_Text = "Ba�lant� kuruldu�unda, genellikle ISS'niz bilgisayar�n�za otomatik olarak bir IP adresi verir.";
	Agent_Speak(L_DSL_B_WhatIsIP2_Text);

    var L_DSL_B_WhatIsIP3_Text = "Bu durumda, yine de IP adresini kendiniz girmelisiniz.";
	Agent_Speak(L_DSL_B_WhatIsIP3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_staticip, "Left");
	
	var L_DSL_B_WhatIsIP4_Text = "ISS'niz buraya yazman�z i�in IP adresi sa�lamal�d�r.";
	Agent_Speak(L_DSL_B_WhatIsIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnDSL_BWhatIsDNS() 
{
    var L_DSL_B_WhatIsDNS1_Text = "Internette adresleri bulmak i�in,  (DNS), which assigns IP addresses to the computers on the Internet.";
	Agent_Speak(L_DSL_B_WhatIsDNS1_Text);

    var L_DSL_B_WhatIsDNS2_Text = "�o�u durumda, DNS adresi ISS'niz taraf�ndan kendili�inden atan�r.";
	Agent_Speak(L_DSL_B_WhatIsDNS2_Text);

    var L_DSL_B_WhatIsDNS3_Text = "ISS'niz, bilgisayar�n�zda DNS ayarlar�n� yapman�z� gerektiriyor.";
	Agent_Speak(L_DSL_B_WhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_prefdns, "Left");

    var L_DSL_B_WhatIsDNS4_Text = "ISS'niz tercih edilen DNS'yi buraya yazman�z i�in sa�lamal�d�r";
	Agent_Speak(L_DSL_B_WhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.dsl_lbl_altdns, "Left");

    var L_DSL_B_WhatIsDNS5_Text = "ve tercih edilen DNS kullan�labilir de�ilse, di�er bir DNS.";
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
	
    var L_DSL_B_WhatToDoNext1_Text = "Devam etmek i�in �leri'yi t�klat�n.";
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

    var L_DSL_B_WhatToDoNext2_Text = "Ayr�ca, Geri d��mesini t�klatarak �nceki ad�ma geri d�nebilirsiniz.";
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

    var L_DSL_B_WhatToDoNext3_Text = "Veya, fikrinizi de�i�tirirseniz, bu bilgisayarda Internet eri�imini kurmadan devam etmek i�in \"Atla\"y� t�klat�n.";
	Agent_Speak(L_DSL_B_WhatToDoNext3_Text);
    
    Agent_Play("RestPose");	
}



function Agent_ICONNECTAddCommands() 
{

    var L_ICONNECTMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_ICONNECTMenuCommand2_Text = "Sabit I&P adresi nedir?";
    var L_ICONNECTMenuCommand3_Text = "DNS ne de&mek?";
    var L_ICONNECTMenuCommand4_Text = "&Sonra ne yapmal�y�m?";

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
    var L_ICONNECTAboutThisScreen1_Text = "Son ekranda, Internet hesab� bilgilerinizi sa�layarak Internete nas�l ba�lanaca��n�z� s�ylediniz.";
	Agent_Speak(L_ICONNECTAboutThisScreen1_Text);

    var L_ICONNECTAboutThisScreen2_Text = "Bu ekranda, bilgisayar�n Internete fiziksel ba�lant�s�n�n nas�l olaca��n� s�ylemeniz gerekiyor.";
	Agent_Speak(L_ICONNECTAboutThisScreen2_Text);
}

function Agent_OnICONNECTWhatIsStaticIP() 
{
    var L_ICONNECTWhatIsStaticIP1_Text = "Internet'e ba�l� her bilgisayar�n benzersiz bir Internet �leti�im Kural� ya da  \"IP\" adresi vard�r. Bu adres, Internet'te bir bilgisayar� di�erinden ay�r�r.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP1_Text);

    var L_ICONNECTWhatIsStaticIP2_Text = "Ba�lant� kuruldu�unda, genellikle ISS'niz bilgisayar�n�za otomatik olarak bir IP adresi verir.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP2_Text);

    var L_ICONNECTWhatIsStaticIP3_Text = "Bu durumda, yine de IP adresini kendiniz girmelisiniz.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_staticIP, "Left");
	
	var L_ICONNECTWhatIsStaticIP4_Text = "ISS'niz buraya yazman�z i�in IP adresi sa�lamal�d�r.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnICONNECTWhatIsDNS() 
{
    var L_ICONNECTWhatIsDNS1_Text = "Internette adresleri bulmak i�in,  (DNS), which assigns IP addresses to the computers on the Internet.";
	Agent_Speak(L_ICONNECTWhatIsDNS1_Text);

    var L_ICONNECTWhatIsDNS2_Text = "�o�u durumda, DNS adresi ISS'niz taraf�ndan kendili�inden atan�r.";
	Agent_Speak(L_ICONNECTWhatIsDNS2_Text);

    var L_ICONNECTWhatIsDNS3_Text = "ISS'niz, bilgisayar�n�zda DNS ayarlar�n� yapman�z� gerektiriyor.";
	Agent_Speak(L_ICONNECTWhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_prefrDNS, "Left");

    var L_ICONNECTWhatIsDNS4_Text = "ISS'niz tercih edilen DNS'yi buraya yazman�z i�in sa�lamal�d�r";
	Agent_Speak(L_ICONNECTWhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.iconnect_spn_alterDNS, "Left");

    var L_ICONNECTWhatIsDNS5_Text = "ve tercih edilen DNS kullan�labilir de�ilse, di�er bir DNS.";
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
	
    var L_ICONNECTWhatToDoNext1_Text = "Devam etmek i�in �leri'yi t�klat�n.";
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

    var L_ICONNECTWhatToDoNext2_Text = "Veya, fikrinizi de�i�tirirseniz, bu bilgisayarda Internet eri�imini kurmadan devam etmek i�in \"Atla\"y� t�klat�n.";
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

    var L_ICONNECTWhatToDoNext3_Text = "Ayr�ca, Geri d��mesini t�klatarak �nceki ekrana geri d�nebilirsiniz.";
	Agent_Speak(L_ICONNECTWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}





function Agent_ICNTLASTAddCommands() {

        var L_ICNTLASTMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_ICNTLASTMenuCommand2_Text = "Bu ekran hakk�nda bilgi ve&r";
        var L_ICNTLASTMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnICNTLASTWhatToDoNext", L_ICNTLASTMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnICNTLASTAboutThisScreen", L_ICNTLASTMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnICNTLASTHowToMoveOn", L_ICNTLASTMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnICNTLASTWhatToDoNext() 
{

	Agent_GestureAtElement(g.btnNext, "TopCenterWidth");

        var L_ICNTLASTWhatToDoNext1_Text = "Baz� ge�ici dizeler burada ...";
	Agent_Speak(L_ICNTLASTWhatToDoNext1_Text);
}

function Agent_OnICNTLASTAboutThisScreen() 
{		
        var L_ICNTLASTAboutThisScreen_Text = "Baz� ge�ici dizeler burada ...";
	Agent_Speak(L_ICNTLASTAboutThisScreen_Text);
}

function Agent_OnICNTLASTHowToMoveOn() 
{
        var L_ICNTLASTHowToMoveOn_Text = "Burada biraz daha ge�ici dize ...";
	Agent_Speak(L_ICNTLASTHowToMoveOn_Text);
}



function Agent_SCONNECTAddCommands() {

        var L_SCONNECTMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_SCONNECTMenuCommand2_Text = "Bu ekran ha&kk�nda bilgi ver";
        var L_SCONNECTMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnSCONNECTWhatToDoNext", L_SCONNECTMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCONNECTAboutThisScreen", L_SCONNECTMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCONNECTHowToMoveOn", L_SCONNECTMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnSCONNECTWhatToDoNext() 
{
	Agent_GestureAtElement(g.btnNext, "TopCenterWidth");

        var L_SCONNECTWhatToDoNext1_Text = "Baz� ge�ici dizeler burada ...";
	Agent_Speak(L_SCONNECTWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnSCONNECTAboutThisScreen() 
{
        var L_SCONNECTAboutThisScreen_Text = "Baz� ge�ici dizeler burada ...";
	Agent_Speak(L_SCONNECTAboutThisScreen_Text);
}

function Agent_OnSCONNECTHowToMoveOn() 
{
        var L_SCONNECTHowToMoveOn_Text = "Burada biraz daha ge�ici dize ...";
	Agent_Speak(L_SCONNECTHowToMoveOn_Text);	
}



function Agent_SCNTLASTAddCommands() {

        var L_SCNTLASTMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_SCNTLASTMenuCommand2_Text = "Bu ekran hakk�nda bilgi &ver";
        var L_SCNTLASTMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnSCNTLASTWhatToDoNext", L_SCNTLASTMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCNTLASTAboutThisScreen", L_SCNTLASTMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnSCNTLASTHowToMoveOn", L_SCNTLASTMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnSCNTLASTWhatToDoNext() 
{
	Agent_GestureAtElement(g.btnNext, "TopCenterWidth");

        var L_SCNTLASTWhatToDoNext1_Text = "Baz� ge�ici dizeler burada ...";
	Agent_Speak(L_SCNTLASTWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnSCNTLASTAboutThisScreen() 
{
     var L_SCNTLASTAboutThisScreen_Text = "Baz� ge�ici dizeler burada ...";
	Agent_Speak(L_SCNTLASTAboutThisScreen_Text);
}

function Agent_OnSCNTLASTHowToMoveOn() 
{
        var L_SCNTLASTHowToMoveOn_Text = "Burada biraz daha ge�ici dize ...";
	Agent_Speak(L_SCNTLASTHowToMoveOn_Text);		
}






function Agent_BadPIDAddCommands() 
{
    var L_BadPIDMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_BadPIDMenuCommand2_Text = "�&r�n anahtar�m� nas�l girerim?";
    var L_BadPIDMenuCommand3_Text = "�r�&n anahtar�m� bilmiyorsam ne yapmam gerekir?";
    var L_BadPIDMenuCommand4_Text = "�r�n &anahtar�m �al��m�yorsa ne yapmam gerekir?";
    var L_BadPIDMenuCommand5_Text = "Kimden &yard�m isteyebilirim?";
    var L_BadPIDMenuCommand6_Text = "&Sonra ne yapmal�y�m?";
        
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
    var L_BadPIDAboutThisStep1_Text = "�nceki ekranda yazd���n�z �r�n anahtar� ge�erli de�il.";
    Agent_Speak(L_BadPIDAboutThisStep1_Text);
    
    var L_BadPIDAboutThisStep2_Text = "Bu, girdi�iniz �r�n anahtar�n�n Windows XP'nin ger�ek bir kopyas�na ait bir �r�n anahtar� olmad��� anlam�na geliyor.";
    Agent_Speak(L_BadPIDAboutThisStep2_Text);

    var L_BadPIDAboutThisStep3_Text = "Ve Windows, ge�erli bir �r�n anahtar� olmadan �al��maz.";
    Agent_Speak(L_BadPIDAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDAboutThisStep4_Text = "Yanl�� yazd���n�z� d���n�yorsan�z, Geri d��mesini t�klat�p do�ru anahtar� girin.";
    Agent_Speak(L_BadPIDAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep5_Text = "Ancak do�ru �ekilde girdi�inizden eminseniz ya da birka� defa deneyip sonu� alamad�ysan�z, Windows kopyan�z yasal olmayabilir.";
    Agent_Speak(L_BadPIDAboutThisStep5_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDAboutThisStep6_Text = "Durum buysa, bilgisayar�n�z� kapatmak i�in Kapat d��mesini t�klat�n.";
    Agent_Speak(L_BadPIDAboutThisStep6_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep7_Text = "Sonra T�rkiye'de 00 800 449 40 964 no'lu telefonu aray�n.";
    Agent_Speak(L_BadPIDAboutThisStep7_Text);

    var L_BadPIDAboutThisStep8_Text = "Di�er t�m �lke/b�lgelerde, yerel Microsoft b�rosuyla temasa ge�in.";
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
	
    var L_BadPIDHowToEnter1_Text = "�nceki ekrana d�nmek i�in Geri d��mesini t�klat�n.";
    Agent_Speak(L_BadPIDHowToEnter1_Text);
    
    Agent_Play("RestPose");
    
    var L_BadPIDHowToEnter2_Text = "Yan�p s�nen dikey bir �izgi gibi g�r�nen i�aret�i, zaten yazman�z gereken ilk kutuda yer alacakt�r.";
    Agent_Speak(L_BadPIDHowToEnter2_Text);

    var L_BadPIDHowToEnter3_Text = "�lk 5 karakteri yazd�ktan sonra, sonraki 5 karakteri yazabilmeniz i�in i�aret�i otomatik olarak sonraki kutuya gider.";
    Agent_Speak(L_BadPIDHowToEnter3_Text);

    var L_BadPIDHowToEnter4_Text = "K�sa �izgi kullanmay�n; b�y�k harf yazmak i�in u�ra�may�n.";
    Agent_Speak(L_BadPIDHowToEnter4_Text);

    var L_BadPIDHowToEnter5_Text = "Devam etmek i�in �leri'yi t�klat�n.";
    Agent_Speak(L_BadPIDHowToEnter5_Text);
}

function Agent_OnBadPIDWhatIfNotKnown() 
{
    var L_BadPIDWhatIfNotKnown1_Text = "�r�n anahtar� CD kapa��n�n �zerinde yoksa, PC'nizin �zerinde veya \"ba�larken\" kitab�n�n arkas�nda bulunan �zg�nl�k Belgesi etiketine bak�n.";
    Agent_Speak(L_BadPIDWhatIfNotKnown1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
    
    var L_BadPIDWhatIfNotKnown2_Text = "�r�n anahtar�n� bulduktan sonra, Geri d��mesini t�klat�n ve �r�n anahtar�n� �nceki ekrandaki kutular�n i�ine yaz�n.";
    Agent_Speak(L_BadPIDWhatIfNotKnown2_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotKnown3_Text = "�r�n anahtar�n�z� bulamazsan�z, buradan bilgisayar �reticisini aray�n: %s.";
    var re = /%s/i;
    var L_BadPIDWhatIfNotKnown4_Text = "�r�n anahtar�n�z� bulamazsan�z, bilgisayar �reticisine ba�vurun.";

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
        Agent_Speak(L_BadPIDWhatIfNotKnown4_Text);
    else
        Agent_Speak(L_BadPIDWhatIfNotKnown3_Text.replace(re, strPhoneNumber));
}

function Agent_OnBadPIDWhatIfNotWorking() 
{
    var L_BadPIDWhatIfNotWorking1_Text = "�r�n anahtar�n�z� yanl�� yazm�� olabilirsiniz.";
    Agent_Speak(L_BadPIDWhatIfNotWorking1_Text);
    
    var L_BadPIDWhatIfNotWorking2_Text = "�r�n anahtar�n�n 25 karakterinin tamam�n� yazman�z gerekir.";
    Agent_Speak(L_BadPIDWhatIfNotWorking2_Text);

    var L_BadPIDWhatIfNotWorking3_Text = "Her b�l�m 5 harf veya say�dan olu�mal�d�r.";
    Agent_Speak(L_BadPIDWhatIfNotWorking3_Text);

    var L_BadPIDWhatIfNotWorking4_Text = "Windows'u kullanabilmeniz i�in, �nce ge�erli bir �r�n anahtar� yazman�z gerekir.";
    Agent_Speak(L_BadPIDWhatIfNotWorking4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDWhatIfNotWorking5_Text = "Yanl�� yazd���n�z� d���n�yorsan�z, Geri d��mesini t�klat�p do�ru anahtar� girin.";
    Agent_Speak(L_BadPIDWhatIfNotWorking5_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking6_Text = "Ancak do�ru �ekilde girdi�inizden eminseniz ya da birka� defa deneyip sonu� alamad�ysan�z, Windows kopyan�z yasal olmayabilir.";
    Agent_Speak(L_BadPIDWhatIfNotWorking6_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatIfNotWorking7_Text = "Durum buysa, bilgisayar�n�z� kapatmak i�in  Kapat d��mesini t�klat�n.";
    Agent_Speak(L_BadPIDWhatIfNotWorking7_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking8_Text = "Sonra T�rkiye'de 00 800 449 40 964 no'lu telefonu aray�n.";
    Agent_Speak(L_BadPIDWhatIfNotWorking8_Text);

    var L_BadPIDWhatIfNotWorking9_Text = "Di�er t�m �lke/b�lgelerde, yerel Microsoft b�rosuyla temasa ge�in.";
    Agent_Speak(L_BadPIDWhatIfNotWorking9_Text);
}

function Agent_OnBadPIDWhoCanICall() 
{
    var L_BadPIDWhoCanICall1_Text = "�r�n anahtar�n�z kabul edilmezse, T�rkiye'de 00 800 449 40 964 no'lu telefonu aray�n.";
    Agent_Speak(L_BadPIDWhoCanICall1_Text);
    
    var L_BadPIDWhoCanICall2_Text = "Di�er t�m �lke/b�lgelerde, yerel Microsoft b�rosuyla temasa ge�in.";
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
	
    var L_BadPIDWhatToDoNext1_Text = "Geri d��mesini t�klat�n ver do�ru anahtar� yaz�n.";
    Agent_Speak(L_BadPIDWhatToDoNext1_Text);
    
    var L_BadPIDWhatToDoNext2_Text = "�r�n anahtar�n�z kabul edilmiyorsa, Windows kopyan�z yasal bir kopya olmayabilir.";
    Agent_Speak(L_BadPIDWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatToDoNext3_Text = "Bu durumda, bilgisayar�n�z� kapatmak i�in Kapat d��mesini t�klat�n. ";
    Agent_Speak(L_BadPIDWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatToDoNext4_Text = "Sonra T�rkiye'de 00 800 449 40 964 no'lu telefonu aray�n.";
    Agent_Speak(L_BadPIDWhatToDoNext4_Text);

    var L_BadPIDWhatToDoNext5_Text = "Di�er t�m �lke/b�lgelerde, yerel Microsoft b�rosuyla temasa ge�in.";
    Agent_Speak(L_BadPIDWhatToDoNext5_Text);
}



function Agent_IconnAddCommands() 
{
    var L_IconnMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_IconnMenuCommand2_Text = "Hangi se�ene�i i�aretlemeli&yim?";
    var L_IconnMenuCommand3_Text = "&Sonra ne yapmal�y�m?";

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
    var L_IconnAboutThisStep1_Text = "Windows XP'yi bilgisayar�n�za ba�ar�yla y�klediniz!";
    Agent_Speak(L_IconnAboutThisStep1_Text); 
      
    var L_IconnAboutThisStep2_Text = "Bu noktada, bilgisayar�n�z� Internet eri�imi i�in ayarlaman�za yard�m edebilirim.";
    Agent_Speak(L_IconnAboutThisStep2_Text);
       
    var L_IconnAboutThisStep3_Text = "�u anda bunu yapmaya haz�r de�ilseniz, Windows kurulumunu tamamlad�ktan sonra Ba�lat men�s�nden Internet Ba�lant� Sihirbaz�'n� �al��t�rabilirsiniz.";
    Agent_Speak(L_IconnAboutThisStep3_Text);
}

function Agent_IconnWhichOption() 
{    
    var L_IconnWhichOption1_Text = "Kendi yaz�l�m�n� y�klemenizi gerektiren bir Internet hizmet sa�lay�c� (veya k�saca \"ISS\") kullanmay� planl�yorsan�z, Hay�r'� se�in.";
    Agent_Speak(L_IconnWhichOption1_Text); 
      
    var L_IconnWhichOption2_Text = "ISS'den gelen bir CD'niz varsa, bunu biliyor olabilirsiniz";
    Agent_Speak(L_IconnWhichOption2_Text);
       
    var L_IconnWhichOption3_Text = "Windows kurulumunu tamamlad�ktan sonra, bilgisayar�n�z� Internet eri�imi i�in ayarlay�n.";
    Agent_Speak(L_IconnWhichOption3_Text);
}

function Agent_OnIconnWhatToDoNext() 
{      
    Agent_GestureAtElement(g.radioYesIconn, "Left");  
    
    var L_IconnWhatToDoNext1_Text = "Internet ba�lant�s�n� ayarlama konusunda yard�m istiyorsan�z, Evet se�ene�ini t�klat�n.";
    Agent_Speak(L_IconnWhatToDoNext1_Text);
    
    Agent_Play("RestPose"); 
        
    Agent_GestureAtElement(g.radioNoIconn, "Left");  
    
    var L_IconnWhatToDoNext2_Text = "Ya da �u anda Internet ba�lant�s� kurmak istemiyorsan�z, \"Hay�r\" se�ene�ini t�klat�n";
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

    var L_IconnWhatToDoNext3_Text = "Devam etmek i�in �leri'yi t�klat�n.";
    Agent_Speak(L_IconnWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPAddCommands() 
{
    var L_ISPMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_ISPMenuCommand2_Text = "Bilgisayar sat�c�mdan &hesap bilgisi ald�ysam ne olur?";
    var L_ISPMenuCommand3_Text = "&Sonra ne yapmal�y�m?";

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
    var L_ISPAboutThisStep1_Text = "Bu ekranda, Internet'e nas�l eri�mek istedi�inizi se�ersiniz.";
    Agent_Speak(L_ISPAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");

    var L_ISPAboutThisStep2_Text = "MSN veya";
    Agent_Speak(L_ISPAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");

        var L_ISPAboutThisStep3_Text = "farkl� bir Internet servis sa�lay�c�s�n� kullanabilirsiniz.";
        Agent_Speak(L_ISPAboutThisStep3_Text);
        
        Agent_Play("RestPose");
    }
    
    Agent_GestureAtElement(g.radioSkip, "Left");

    var L_ISPAboutThisStep4_Text = "Ya da �u anda bir Internet ba�lant�s� kurmadan devam edebilirsiniz.";
    Agent_Speak(L_ISPAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPWhatIfGivenAccount() 
{
    var L_ISPWhatIfGivenAccount1_Text = "Bilgisayar�n�z� sat�n ald���n�zda, sat�c�n�z size Internet hesap bilgilerinin yaz�l� oldu�u bir ka��t vermi� olabilir.";
	Agent_Speak(L_ISPWhatIfGivenAccount1_Text);
	
    var L_ISPWhatIfGivenAccount2_Text = "Bu hesap bilgileri aras�nda kullan�c� ad�, parola ile Internet servis sa�lay�c�s�n�n ad� ve telefon numaras� bulunmaktad�r.";
	Agent_Speak(L_ISPWhatIfGivenAccount2_Text);
	
    var L_ISPWhatIfGivenAccount3_Text = "Bu bilgilere sahipseniz, Internet hesab�n�z zaten var demektir.";
	Agent_Speak(L_ISPWhatIfGivenAccount3_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");
	
    var L_ISPWhatIfGivenAccount4_Text = "ISS ad� MSN ise, bu ilk se�ene�i se�in.";
	Agent_Speak(L_ISPWhatIfGivenAccount4_Text);
    
    Agent_Play("RestPose");

    
    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");
    	
        var L_ISPWhatIfGivenAccount5_Text = "ISS ad� MSN de�ilse, yerine bu ikinci se�ene�i se�in.";
    	Agent_Speak(L_ISPWhatIfGivenAccount5_Text);
        
        Agent_Play("RestPose");
    }

    Agent_GestureAtElement(g.radioSkip, "Left");
    
    var L_ISPWhatIfGivenAccount6_Text = "Ya da, bu bilgisayarda Internet ba�lant�n�z� daha sonra kurmay� se�ebilirsiniz; bu ���nc� se�ene�i se�in.";
	Agent_Speak(L_ISPWhatIfGivenAccount6_Text);
			    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_ISPWhatIfGivenAccount7_Text = "Sonra �leri'yi t�klat�n.";
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
    
    var L_ISPWhatToDoNext1_Text = "Bir se�ene�i se�tikten sonra, �leri d��mesini t�klat�n.";
	Agent_Speak(L_ISPWhatToDoNext1_Text);
	
	Agent_Play("RestPose");
}



function Agent_ICSAddCommands() 
{
	var L_ICSAddCommands1_Text = "Bu &a�amayla ilgili bilgi ver";
	var L_ICSAddCommands2_Text = "Internet &Ba�lant� G�venlik Duvar� nedir?";
	var L_ICSAddCommands3_Text = "&Ev A�� Sihirbaz� nedir?";
	
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
	var L_ICSAboutThisStep1_Text = "Bu ekranda bilgisayar�n Internet'e eri�im y�ntemini se�ersiniz.";
	Agent_Speak(L_ICSAboutThisStep1_Text);
	
	var L_ICSAboutThisStep2_Text = "Bu bilgisayar ba�ka bilgisayarlar�n a��na ba�l�ysa, bu a�� Internet'e ba�lanmak i�in kullanabilirsiniz.";
	Agent_Speak(L_ICSAboutThisStep2_Text);
	
	var L_ICSAboutThisStep3_Text = "Di�er taraftan, bilgisayar Internet'e do�rudan ba�lanacak bi�imde ayarlanabilir.";
	Agent_Speak(L_ICSAboutThisStep3_Text);
	
	var L_ICSAboutThisStep4_Text = "Hangi se�ene�i se�mi� olursan�z olun, Windows XP, Internet ba�lant�s� g�venlik duvar� ile bilgisayar�n�z�n di�er Internet kullan�c�lar�n�n yetkisiz eri�imine kar�� g�venli�ini sa�layarak sizi korur.";
	Agent_Speak(L_ICSAboutThisStep4_Text);
}
	
function Agent_ICSWhatIsFirewall() 
{
	var L_ICSWhatIsFirewall1_Text = "G�venlik duvar�, bilgisayar�n�z� veya bilgisayar a��n�z� Internet gibi ba�ka bir a�dan gelen d�� tehlikelerden (yetkisiz kullan�c�lar) korumak �zere tasarlanm�� bir g�venlik sistemidir.";
	Agent_Speak(L_ICSWhatIsFirewall1_Text);
	
	var L_ICSWhatIsFirewall2_Text = "Windows XP'de a� olu�turdu�unuzda, Windows XP'nin Internet Ba�lant�s� G�venlik Duvar� �zelli�i otomatik olarak a��l�r.";
	Agent_Speak(L_ICSWhatIsFirewall2_Text);
	
	var L_ICSWhatIsFirewall3_Text = "Bu �zellik, ayr�ca bu bilgisayar bir a�a ba�l� de�ilse ancak Internet'e do�rudan eri�iyorsa da a��l�r.";
	Agent_Speak(L_ICSWhatIsFirewall3_Text);
}
	
function Agent_ICSWhatIsNetworkWizard() 
{
	var L_ICSWhatIsNetworkWizard1_Text = "Bu sihirbaz, evinizde veya i�yerinizde a� kurarken her ad�mda size k�lavuzluk eder.";
	Agent_Speak(L_ICSWhatIsNetworkWizard1_Text);
	
	var L_ICSWhatIsNetworkWizard2_Text = "Bu i�lem s�ras�nda bilgisayar� a�a ba�lamak istemiyorsan�z, daha sonra da yapabilirsiniz.";
	Agent_Speak(L_ICSWhatIsNetworkWizard2_Text);
	
	var L_ICSWhatIsNetworkWizard3_Text = "Yaln�zca, Ba�lat men�s�ne gidin ve Di�er Programlar'� t�klat�n.";
	Agent_Speak(L_ICSWhatIsNetworkWizard3_Text);
	
	var L_ICSWhatIsNetworkWizard4_Text = "Ard�ndan, Ev A�� Sihirbaz�'n� bulmak i�in Donat�lar ve �leti�im'i t�klat�n.";
	Agent_Speak(L_ICSWhatIsNetworkWizard4_Text);
	
	var L_ICSWhatIsNetworkWizard5_Text = "Bu ad�mlar� unutursan�z, sorular�n�za yan�t bulmak, benzeri �nemli bilgiyi edinmek i�in Ba�lat men�s�ndeki Yard�m ve Destek'� t�klat�n.";
	Agent_Speak(L_ICSWhatIsNetworkWizard5_Text);
}



function Agent_ICSDCAddCommands() 
{
	var L_ICSDCAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
	var L_ICSDCAddCommands2_Text = "&Sonra ne yapmal�y�m?";
	
	g_AgentCharacter.Commands.Add("Agent_ICSDCAboutThisStep", L_ICSDCAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_ICSDCWhatToDoNext", L_ICSDCAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_ICSDCAboutThisStep() 
{
	var L_ICSDCAboutThisStep1_Text = "Bu ekranda, bilgisayar�n�z�n Internet ba�lant�s�n�n kesildi�i a��klan�r.";
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
    
	var L_ICSDCWhatToDoNext1_Text = "Internet'e yeniden ba�lanmay� denemek i�in, Yeniden Dene d��mesini t�klat�n.";
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
    
	var L_ICSDCWhatToDoNext2_Text = "Ya da Internet'e ba�lanmadan devam etmek i�in \"Atla\" d��mesini t�klat�n.";
	Agent_Speak(L_ICSDCWhatToDoNext2_Text);
	
	Agent_Play("RestPose");
}



function Agent_Ident1AddCommands() 
{
    var L_Ident1AddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_Ident1AddCommands2_Text = "Kullan�c� hesab� ne&dir?";
    var L_Ident1AddCommands3_Text = "Kullan�c� &hesab� olu�turman�n yararlar� nelerdir?";
    var L_Ident1AddCommands4_Text = "&Sonra ne yapmal�y�m?";

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
	var L_Ident1AboutThisStep1_Text = "Bu ekranda bu bilgisayar� kullanacak di�er kullan�c�lar� tan�mlayacaks�n�z.";
	Agent_Speak(L_Ident1AboutThisStep1_Text);
	
	var L_Ident1AboutThisStep2_Text = "Bu bilgisayar� ba�kalar�yla payla��yorsan�z, her ki�i kendisi i�in bir kullan�c� hesab� olu�turarak Windows XP'yi ki�iselle�tirebilir.";
	Agent_Speak(L_Ident1AboutThisStep2_Text);
    
    var L_Ident1AboutThisStep3_Text = "Bu yolla her kullan�c� kendi bilgisayar ayarlar�na, ayr�cal�klar�na, ve �zel dosyalar�na, web sitesi ba�lant�lar�na, ve di�er se�eneklere, kendisi i�in ki�iselle�tirme �eklini etkilemeden sahip sahip olur.";
    Agent_Speak(L_Ident1AboutThisStep3_Text);
    
    var L_Ident1AboutThisStep4_Text = "Bilgisayar�n�z� ba�latt���n�zda, bu ekrana yazd���n�z b�t�n adlar, Kar��lama ekran�nda alfabetik olarak g�sterilir.";
    Agent_Speak(L_Ident1AboutThisStep4_Text);
    
    var L_Ident1AboutThisStep5_Text = "Her ki�i i�in bir resim bile g�sterir.";
    Agent_Speak(L_Ident1AboutThisStep5_Text);
    
    var L_Ident1AboutThisStep6_Text = "Daha sonra Ba�lat men�s�nden Denetim Masas�'n� t�klat�p Kullan�c� Hesaplar� ��esini se�erek bu adlar� de�i�tirebilirsiniz.";
    Agent_Speak(L_Ident1AboutThisStep6_Text);
}

function Agent_Ident1Command_WhatIsUserAccount() 
{	
	var L_Ident1WhatIsUserAccount1_Text = "Ev ya da i�yerinizdeki ki�ilerle bir bilgisayar� payla��yorsan�z, kullan�c� hesaplar� ho�unuza gidecektir.";
	Agent_Speak(L_Ident1WhatIsUserAccount1_Text);
	
	var L_Ident1WhatIsUserAccount2_Text = "Kullan�c� hesaplar�yla yapabilecekleriniz:";
	Agent_Speak(L_Ident1WhatIsUserAccount2_Text);
    
    var L_Ident1WhatIsUserAccount3_Text = "Di�er kullan�c� tercihlerini etkilemeden Windows'un bilgileri organize etme ve g�sterme �eklini ki�iselle�tirin;";
    Agent_Speak(L_Ident1WhatIsUserAccount3_Text);
    
    var L_Ident1WhatIsUserAccount4_Text = "Dosyalar�n�za eri�im i�in parola gerekli olsun;";
    Agent_Speak(L_Ident1WhatIsUserAccount4_Text);
    
    var L_Ident1WhatIsUserAccount5_Text = "Ki�isel S�k Kullan�lan Web sitelerini ve son ziyaret edilen siteleri hat�rla;";
    Agent_Speak(L_Ident1WhatIsUserAccount5_Text);
    
    var L_Ident1WhatIsUserAccount6_Text = "�nemli bilgisayar ayarlar�n�z� koruyun;";
    Agent_Speak(L_Ident1WhatIsUserAccount6_Text);
    
    var L_Ident1WhatIsUserAccount7_Text = "Her kullan�c� i�in masa�st�n� �zelle�tirin ve";
    Agent_Speak(L_Ident1WhatIsUserAccount7_Text);
    
    var L_Ident1WhatIsUserAccount8_Text = "Oturum a�may� ve kullan�c�lar� �abuk de�i�tirmeyi kolayla�t�r.";
    Agent_Speak(L_Ident1WhatIsUserAccount8_Text);
}

function Agent_Ident1Command_Benefits() 
{	
	var L_Ident1Benefits1_Text = "Bilgisayar payla�mak, ba�ka kullan�c�lar�n sizin �zel dosyalar�n�z� g�rebilmesi, oyun ya da istemedi�iniz ba�ka yaz�l�mlar� y�klemesi ya da bilgisayar�n�z�n ayarlar�n� de�i�tirebilmesi demektir.";
	Agent_Speak(L_Ident1Benefits1_Text);
	
	var L_Ident1Benefits2_Text = "Art�k hepsi de�i�ti!";
	Agent_Speak(L_Ident1Benefits2_Text);
    
    var L_Ident1Benefits3_Text = "Kullan�c� hesaplar�n� olu�turdu�unuzda her kullan�c� bu bilgisayar�n di�er kullan�c�lar� etkilemeden Windows'u ki�iselle�tirebilir.";
    Agent_Speak(L_Ident1Benefits3_Text);
    
    var L_Ident1Benefits4_Text = "Kullan�c� hesaplar�yla ilgili ek bilgi edinmek, sorular�n�za yan�t bulmak ve ba�ka �nemli bilgi edinmek i�in Ba�lat men�s�nden Yard�m ve Destek'i t�klat�n.";
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
    
    var L_Ident1WhatToDoNext1_Text = "Bu bilgisayar� kullanacak ki�ilerin adlar�n� girdikten sonra devam etmek i�in �leri'yi t�klat�n.";
    Agent_Speak(L_Ident1WhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_Ident1WhatToDoNext2_Text = "Windows kurulumunu bitirdikten sonra bu isimleri de�i�tirebilir ve daha ba�ka kullan�c�lar da ekleyebilirsiniz.";
    Agent_Speak(L_Ident1WhatToDoNext2_Text);
        
    var L_Ident1WhatToDoNext3_Text = "Ba�lat men�s�ndeki Denetim Masas�'n� t�klat�p Kullan�c� Hesaplar�'n� se�in.";
    Agent_Speak(L_Ident1WhatToDoNext3_Text);
}



function Agent_IdentitiesAddCommands() 
{
    var L_IdentitiesAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_IdentitiesAddCommands2_Text = "Kullan�c� hesab� ne&dir?";
    var L_IdentitiesAddCommands3_Text = "Kullan�c� &hesab� olu�turman�n yararlar� nelerdir?";
    var L_IdentitiesAddCommands4_Text = "&Sonra ne yapmal�y�m?";

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
	var L_IdentitiesAboutThisStep1_Text = "Bu ekranda bu bilgisayar� kullanacak di�er kullan�c�lar� tan�mlayacaks�n�z.";
	Agent_Speak(L_IdentitiesAboutThisStep1_Text);
	
	var L_IdentitiesAboutThisStep2_Text = "Bu bilgisayar� ba�kalar�yla payla��yorsan�z, her ki�i kendisi i�in bir kullan�c� hesab� olu�turarak Windows XP'yi ki�iselle�tirebilir.";
	Agent_Speak(L_IdentitiesAboutThisStep2_Text);
    
    var L_IdentitiesAboutThisStep3_Text = "Bu yolla her kullan�c� kendi bilgisayar ayarlar�na, ayr�cal�klar�na, ve �zel dosyalar�na, web sitesi ba�lant�lar�na, ve di�er se�eneklere, kendisi i�in ki�iselle�tirme �eklini etkilemeden sahip sahip olur.";
    Agent_Speak(L_IdentitiesAboutThisStep3_Text);
    
    var L_IdentitiesAboutThisStep4_Text = "Bilgisayar�n�z� ba�latt���n�zda, bu ekrana yazd���n�z b�t�n adlar, Kar��lama ekran�nda alfabetik olarak g�sterilir.";
    Agent_Speak(L_IdentitiesAboutThisStep4_Text);
    
    var L_IdentitiesAboutThisStep5_Text = "Her ki�i i�in bir resim bile g�sterir.";
    Agent_Speak(L_IdentitiesAboutThisStep5_Text);
    
    var L_IdentitiesAboutThisStep6_Text = "Daha sonra Ba�lat men�s�nden Denetim Masas�'n� t�klat�p Kullan�c� Hesaplar� ��esini se�erek bu adlar� de�i�tirebilirsiniz.";
    Agent_Speak(L_IdentitiesAboutThisStep6_Text);
}

function Agent_IdentitiesCommand_WhatIsUserAccount() 
{	
	var L_IdentitiesWhatIsUserAccount1_Text = "Ev ya da i�yerinizdeki ki�ilerle bir bilgisayar� payla��yorsan�z, kullan�c� hesaplar� ho�unuza gidecektir.";
	Agent_Speak(L_IdentitiesWhatIsUserAccount1_Text);
	
	var L_IdentitiesWhatIsUserAccount2_Text = "Kullan�c� hesaplar�yla yapabilecekleriniz:";
	Agent_Speak(L_IdentitiesWhatIsUserAccount2_Text);
    
    var L_IdentitiesWhatIsUserAccount3_Text = "Di�er kullan�c� tercihlerini etkilemeden Windows'un bilgileri organize etme ve g�sterme �eklini ki�iselle�tirin;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount3_Text);
    
    var L_IdentitiesWhatIsUserAccount4_Text = "Dosyalar�n�za eri�im i�in parola gerekli olsun;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount4_Text);
    
    var L_IdentitiesWhatIsUserAccount5_Text = "Ki�isel S�k Kullan�lan Web sitelerini ve son ziyaret edilen siteleri hat�rla;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount5_Text);
    
    var L_IdentitiesWhatIsUserAccount6_Text = "�nemli bilgisayar ayarlar�n�z� koruyun;";
    Agent_Speak(L_IdentitiesWhatIsUserAccount6_Text);
    
    var L_IdentitiesWhatIsUserAccount7_Text = "Her kullan�c� i�in masa�st�n� �zelle�tirin ve";
    Agent_Speak(L_IdentitiesWhatIsUserAccount7_Text);
    
    var L_IdentitiesWhatIsUserAccount8_Text = "Oturum a�may� ve kullan�c�lar� �abuk de�i�tirmeyi kolayla�t�r.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount8_Text);
}

function Agent_IdentitiesCommand_Benefits() 
{	
	var L_IdentitiesBenefits1_Text = "Bilgisayar payla�mak, ba�ka kullan�c�lar�n sizin �zel dosyalar�n�z� g�rebilmesi, oyun ya da istemedi�iniz ba�ka yaz�l�mlar� y�klemesi ya da bilgisayar�n�z�n ayarlar�n� de�i�tirebilmesi demektir.";
	Agent_Speak(L_IdentitiesBenefits1_Text);
	
	var L_IdentitiesBenefits2_Text = "Art�k hepsi de�i�ti!";
	Agent_Speak(L_IdentitiesBenefits2_Text);
    
    var L_IdentitiesBenefits3_Text = "Kullan�c� hesaplar�n� olu�turdu�unuzda her kullan�c� bu bilgisayar�n di�er kullan�c�lar� etkilemeden Windows'u ki�iselle�tirebilir.";
    Agent_Speak(L_IdentitiesBenefits3_Text);
    
    var L_IdentitiesBenefits4_Text = "Kullan�c� hesaplar�yla ilgili ek bilgi edinmek, sorular�n�za yan�t bulmak ve ba�ka �nemli bilgi edinmek i�in Ba�lat men�s�nden Yard�m ve Destek'i t�klat�n.";
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
    
    var L_IdentitiesWhatToDoNext1_Text = "Bu bilgisayar� kullanacak ki�ilerin adlar�n� girdikten sonra devam etmek i�in �leri'yi t�klat�n.";
    Agent_Speak(L_IdentitiesWhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_IdentitiesWhatToDoNext2_Text = "Windows kurulumunu bitirdikten sonra bu isimleri de�i�tirebilir ve daha ba�ka kullan�c�lar da ekleyebilirsiniz.";
    Agent_Speak(L_IdentitiesWhatToDoNext2_Text);
        
    var L_IdentitiesWhatToDoNext3_Text = "Ba�lat men�s�ndeki Denetim Masas�'n� t�klat�p Kullan�c� Hesaplar�'n� se�in.";
    Agent_Speak(L_IdentitiesWhatToDoNext3_Text);
}



function Agent_KeybdAddCommands() 
{
	var L_KeybdMenuCommand1_Text = "Bu &a�amayla ilgili bilgi ver";
    var L_KeybdMenuCommand2_Text = "&B�lgemi nas�l se�erim?";
    var L_KeybdMenuCommand3_Text = "&Kullanaca��m dili nas�l se�erim?";
    var L_KeybdMenuCommand4_Text = "Kla&vyemi nas�l se�erim?";

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
    var L_KeybdAboutThisStep1_Text = "Sonraki birka� ekranda, Windows'a dil tercihlerinize, b�lgenize veya saat diliminize ba�l� olarak metin, tarih ve say�lar� nas�l g�r�nt�lemesi gerekti�ini belirtebilirsiniz.";
    Agent_Speak(L_KeybdAboutThisStep1_Text);
        
    var L_KeybdAboutThisStep2_Text = "�rne�in bu ekranda ya�ad���n�z yere en yak�n d�nya b�lgesini, bilgisayar�n�zda s�k kullanaca��n�z dili ve kulland���n�z klavyeyi se�ebilirsiniz.";
    Agent_Speak(L_KeybdAboutThisStep2_Text);
        
    var L_KeybdAboutThisStep3_Text = "Windows, tarih, saat ve para biriminin do�ru olarak g�r�nt�lenmesini sa�layacakt�r.";
    Agent_Speak(L_KeybdAboutThisStep3_Text);
        
    var L_KeybdAboutThisStep4_Text = "�rne�in, b�lgeniz olarak ABD'yi ve diliniz olarak �ngilizce'yi se�erseniz, para cinsinden tutarlar� ABD Dolar� olarak g�r�necektir.";
    Agent_Speak(L_KeybdAboutThisStep4_Text);

    var L_KeybdAboutThisStep5_Text = "Ancak b�lgeniz olarak ABD yerine �ngiltere'ye girerseniz, para tutarlar� �ngiliz poundu cinsinden g�r�n�r.";
    Agent_Speak(L_KeybdAboutThisStep5_Text);
}

function Agent_KeybdHowToSelectRegion() 
{     
    Agent_GestureAtElement(g.selRegion, "Left");
     
    var L_KeybdHowToSelectRegion1_Text = "Bu listede d�nya b�lgeleri alfabetik s�rada g�r�n�r.";
    Agent_Speak(L_KeybdHowToSelectRegion1_Text);	
   
    var L_KeybdHowToSelectRegion2_Text = "Bu listede t�klat�n veya bu b�lgeyi g�r�nceye kadar klavyenizde Sekme tu�una bas�n.";
    Agent_Speak(L_KeybdHowToSelectRegion2_Text);	
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selRegion, "Right");
        
    var L_KeybdHowToSelectRegion3_Text = "Sonra, b�lgeleri de�i�tirmek i�in bu k���k ok d��melerini t�klat�n veya klavyeden yukar� veya a�a�� ok tu�lar�n� kullan�n.";
    Agent_Speak(L_KeybdHowToSelectRegion3_Text);
        
    var L_KeybdHowToSelectRegion4_Text = "Ya�ad���n�z yere en yak�n b�lgeyi g�rd���n�zde ilgili ��eyi t�klat�n veya klavyenizde Enter tu�una bas�n.";
    Agent_Speak(L_KeybdHowToSelectRegion4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.RegionName, "Left");

    var L_KeybdHowToSelectRegion5_Text = "Se�ti�iniz b�lge bu kutuda g�r�necek.";
    Agent_Speak(L_KeybdHowToSelectRegion5_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectLanguage() 
{        		
    var L_KeybdHowToSelectLanguage1_Text = "�leti�im s�ras�nda en s�k kulland���n�z dili se�in.";
    Agent_Speak(L_KeybdHowToSelectLanguage1_Text);
        
    var L_KeybdHowToSelectLanguage2_Text = "�rne�in �o�unlukla �spanyolca konu�uyorsan�z ancak �al��t���n�z bilgisayar programlar� ve dosyalar genellikle �ngilizce ise, burada �ngilizce'yi se�in.";
    Agent_Speak(L_KeybdHowToSelectLanguage2_Text);   
        
    Agent_GestureAtElement(g.selLang, "Left");  
        
    var L_KeybdHowToSelectLanguage3_Text = "Diller, bu listede alfabetik s�rada g�r�n�r.";
    Agent_Speak(L_KeybdHowToSelectLanguage3_Text);

    var L_KeybdHowToSelectLanguage4_Text = "Buray� t�klat�n ya da klavyenizin Sekme tu�una buraya gelene dek bas�n. ";
    Agent_Speak(L_KeybdHowToSelectLanguage4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selLang, "Right");

    var L_KeybdHowToSelectLanguage5_Text = "Sonra, b�lgeleri de�i�tirmek i�in bu k���k ok d��melerini t�klat�n veya klavyeden yukar� veya a�a�� ok tu�lar�n� kullan�n.";
    Agent_Speak(L_KeybdHowToSelectLanguage5_Text);

    var L_KeybdHowToSelectLanguage6_Text = "�stedi�iniz dili g�rd���n�zde, dili t�klat�n veya klavyenizde Enter tu�una bas�n.";
    Agent_Speak(L_KeybdHowToSelectLanguage6_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.LangName, "Left");

    var L_KeybdHowToSelectLanguage7_Text = "Se�ti�iniz dil bu kutuda g�r�necek.";
    Agent_Speak(L_KeybdHowToSelectLanguage7_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectKeyboard() 
{		
    var L_KeybdHowToSelectKeyboard1_Text = "Klavyeler, bu listede alfabetik s�rada g�r�n�r.";
    Agent_Speak(L_KeybdHowToSelectKeyboard1_Text);
    
    Agent_GestureAtElement(g.selKeyboard, "Left");
        
    var L_KeybdHowToSelectKeyboard2_Text = "Buray� t�klat�n ya da klavyenizin Sekme tu�una buraya gelene dek bas�n. ";
    Agent_Speak(L_KeybdHowToSelectKeyboard2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selKeyboard, "Right");
        
    var L_KeybdHowToSelectKeyboard3_Text = "Ard�ndan, listede ilerlemek i�in bu k���k ok d��melerini t�klat�n ya da klavyenizdeki yukar� ve a�a�� ok tu�lar�n� kullan�n.";
    Agent_Speak(L_KeybdHowToSelectKeyboard3_Text);
        
    var L_KeybdHowToSelectKeyboard4_Text = "Bu bilgisayarla kulland���n�z klavyeyi g�rd���n�zde, klavyeyi t�klat�n veya klavyenizde Enter tu�una bas�n.";
    Agent_Speak(L_KeybdHowToSelectKeyboard4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.KeyboardName, "Left");

    var L_KeybdHowToSelectKeyboard5_Text = "Se�ti�iniz klavye bu kutuda g�r�necek.";
    Agent_Speak(L_KeybdHowToSelectKeyboard5_Text);
    
    Agent_Play("RestPose");
}



function Agent_EulaAddCommands() 
{
    var L_EulaCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_EulaCommand2_Text = "&Nas�l yan�t veririm?";
    var L_EulaCommand3_Text = "&EULA tam olarak nedir?";
    var L_EulaCommand4_Text = "E&ULA'da ne anlat�lmaktad�r?";
    var L_EulaCommand5_Text = "�leri &d��mesi neden kullan�lamaz?";
    var L_EulaCommand6_Text = "&Sonra ne yapmal�y�m?";

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
        var L_EulaMenuCommand5_Text = "�leri &d��mesi neden kullan�lamaz?";

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
    var L_EulaAboutThisStep1_Text = "Bu ekranda, Microsoft Windows lisans s�zle�mesi g�r�nt�lenir ve bu s�zle�meyi kabul edip etmedi�inizi burada belirtirsiniz.";
    Agent_Speak(L_EulaAboutThisStep1_Text);		
    
    Agent_GestureAtElement(g.txtEULA,"Left");
        
    var L_EulaAboutThisStep2_Text = "Windows'u kullanmak i�in bu s�zle�meyi kabul etmeniz gerekir.";
    Agent_Speak(L_EulaAboutThisStep2_Text);
    
    Agent_Play("RestPose");
}

function Agent_EulaHowToAnswer() 
{		
    Agent_GestureAtElement(g.radioAgree,"Left");
    
    var L_EulaHowToAnswer1_Text = "Yaln�zca, fare i�aret�isini yan�t�n�z�n solundaki beyaz dairenin i�ine getirin ve bir kez t�klat�n.";
    Agent_Speak(L_EulaHowToAnswer1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaHowToAnswer2_Text = "Ard�ndan �leri d��mesini t�klat�n.";
    Agent_Speak(L_EulaHowToAnswer2_Text);
}

function Agent_EulaWhatIsEula() 
{		
    var L_EulaWhatIsEula1_Text = "Microsoft �r�nleri, kullan�m�n�z son kullan�c� lisans s�zle�mesi (EULA) �artlar�na ve telif hakk� yasas�na uygun olarak haz�rlanm��t�r.";
    Agent_Speak(L_EulaWhatIsEula1_Text);
        
    var L_EulaWhatIsEula2_Text = "EULA, lisansl� �r�n� yasal olarak kullanman�z�n ko�ullar�n� belirleyen ve size bilgisayar�n�zda bu �r�n� kullanma �zel hakk�n� veren bir s�zle�medir.";
    Agent_Speak(L_EulaWhatIsEula2_Text);
}

function Agent_EulaWhatDoesEulaSay() 
{		
    var L_EulaWhatDoesEulaSay1_Text = "�artlar�n� bir defa kabul etti�inizde, EULA, size Windows XP kullanma haklar� ile birlikte baz� ek haklar sunar.";
    Agent_Speak(L_EulaWhatDoesEulaSay1_Text);
        
    var L_EulaWhatDoesEulaSay2_Text = "Ayr�ca Windows XP kullan�m�n�za baz� k�s�tlamalar getirir.";
    Agent_Speak(L_EulaWhatDoesEulaSay2_Text);	
    
    Agent_GestureAtElement(g.txtEULA,"Right");	
        
    var L_EulaWhatDoesEulaSay3_Text = "Ayr�nt�lar� okumak i�in, �Lisans Verme' b�l�m�ne gidin.";
    Agent_Speak(L_EulaWhatDoesEulaSay3_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatDoesEulaSay4_Text = "EULA, ayr�ca s�n�rl� garantiyi ve Windows XP'nin yede�ini veya ar�iv kopyas�n� hangi ko�ullarda alabilece�inizi a��klar.";
    Agent_Speak(L_EulaWhatDoesEulaSay4_Text);
}

function Agent_EulaWhereIsNextButton() 
{		
    var L_EulaWhereIsNextButton1_Text = "Bu lisans s�zle�mesini kabul edip etmedi�inize karar vermedi�iniz i�in �leri d��mesi hen�z kullan�lamaz.";
    Agent_Speak(L_EulaWhereIsNextButton1_Text);
        
    var L_EulaWhereIsNextButton2_Text = "�nce Evet ya da Hay�r se�ene�ini t�klatman�z gerekli.";
    Agent_Speak(L_EulaWhereIsNextButton2_Text);
}

function Agent_EulaWhatToDoNext() 
{			
    Agent_GestureAtElement(g.radioAgree,"Left");
    	
    var L_EulaWhatToDoNext1_Text = "Lisans s�zle�mesini okuduktan sonra kabul etmek i�in, Evet'i t�klat�n.";
    Agent_Speak(L_EulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatToDoNext2_Text = "Ya da s�zle�meyi kabul etmek istemiyorsan�z, Hay�r'� t�klat�n.";
    Agent_Speak(L_EulaWhatToDoNext2_Text);
        
    var L_EulaWhatToDoNext3_Text = "Windows'u kullanmaya devam edebilmek i�in, bu s�zle�meyi kabul etmeniz gerekir.";
    Agent_Speak(L_EulaWhatToDoNext3_Text);
    			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_EulaWhatToDoNext4_Text = "Ard�ndan sonraki ekrana ge�mek i�in �leri d��mesini t�klat�n.";
    Agent_Speak(L_EulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_BadEulaAddCommands() {

    var L_BadEulaCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_BadEulaCommand2_Text = "E&ULA'da ne anlat�lmaktad�r?";
    var L_BadEulaCommand3_Text = "EU&LA'y� kabul etmezsem ne olur?";
    var L_BadEulaCommand4_Text = "&Sonraki a�amadan ne yapmal�y�m";

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
    var L_BadEulaAboutThisStep1_Text = "�nceki ekranda lisans s�zle�mesini kabul etmemeye karar verdiniz.";
    Agent_Speak(L_BadEulaAboutThisStep1_Text);

    var L_BadEulaAboutThisStep2_Text = "Bu durumda, Windows'u kullanamayacaks�n�z.";
    Agent_Speak(L_BadEulaAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadEulaAboutThisStep3_Text = "Ancak Geri d��mesini t�klatarak �nceki ekrana d�nebilir ve s�zle�meyi kabul edebilirsiniz.";
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
        
    var L_BadEulaAboutThisStep4_Text = "Ya da Windows kullanmay� b�rakmak istedi�inizi onaylay�p, bilgisayar�n�z� kapatabilirsiniz.";
    Agent_Speak(L_BadEulaAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_BadEulaWhatDoesEulaSay()
{
    var L_BadEulaWhatDoesEulaSay1_Text = "�artlar�n� bir defa kabul etti�inizde, EULA, size Windows XP kullanma haklar� ile birlikte baz� ek haklar sunar.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay1_Text);

    var L_BadEulaWhatDoesEulaSay2_Text = "Ayr�ca Windows XP kullan�m�n�za baz� k�s�tlamalar getirir.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay2_Text);

    var L_BadEulaWhatDoesEulaSay3_Text = "Ayr�nt�lar� okumak i�in, Geri d��mesini t�klat�p EULA'y� a��n ve �Lisans Verme' b�l�m�ne gidin.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay3_Text);
        
    var L_BadEulaWhatDoesEulaSay4_Text = "EULA, ayr�ca s�n�rl� garantiyi ve Windows XP'nin yede�ini veya ar�iv kopyas�n� hangi ko�ullarda alabilece�inizi a��klar.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay4_Text);
}

function Agent_BadEulaWhatIfIDontAcceptEula()
{
    var L_BadEulaWhatIfIDontAcceptEula1_Text = "EULA size Windows XP kullanma iznini verdi�i i�in, Windows XP kullanmaya ba�lamadan �nce bu s�zle�meyi kabul etmeniz gerekir.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadEulaWhatIfIDontAcceptEula2_Text = "S�zle�meyi kabul etmemeye karar verdiyseniz, Kapat d��mesini t�klatarak bilgisayar�n�z� kapatabilirsiniz.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula2_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatIfIDontAcceptEula3_Text = "Bilgisayar� yeniden ba�latt���n�zda bu ekrana d�neceksiniz.";
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
    
    var L_BadEulaWhatToDoNext1_Text = "Lisans s�zle�mesini kabul etmeye karar verdiyseniz, Geri d��mesini t�klat�n.";
    Agent_Speak(L_BadEulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatToDoNext2_Text = "Bu i�leme devam etmek ve Windows kullanmaya ba�lamak i�in bu s�zle�meyi kabul etmeniz gerekir.";
    Agent_Speak(L_BadEulaWhatToDoNext2_Text);

    var L_BadEulaWhatToDoNext3_Text = "S�zle�meyi kabul etmemeye karar verdiyseniz, bilgisayar�n�z� kapatmak i�in Kapat d��mesini t�klat�n.";
    Agent_Speak(L_BadEulaWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_BadEulaWhatToDoNext4_Text = "Bilgisayar� yeniden ba�latt���n�zda bu ekrana d�neceksiniz.";
    Agent_Speak(L_BadEulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}




function Agent_ProductKeyAddCommands() 
{
    var L_ProductKeyAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_ProductKeyAddCommands2_Text = "�&r�n anahtar� ne demektir?";
    var L_ProductKeyAddCommands4_Text = "&Sonra ne yapmal�y�m?";

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

        var L_ProductKeyAddCommands3_Text = "�leri &d��mesi neden kullan�lamaz?";

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
    var L_ProductKeyAboutThisStep1_Text = "Buras�, size bilgisayar �reticiniz taraf�ndan sa�lanmas� gereken 25 karakter uzunlu�undaki �r�n anahtar�n� yazaca��n�z ekrand�r.";
    Agent_Speak(L_ProductKeyAboutThisStep1_Text);

    var L_ProductKeyAboutThisStep2_Text = "�r�n anahtar� CD kapa��n�n �zerinde yoksa, PC'nizin �zerinde veya �ba�larken' kitab�n�n arkas�nda bulunan �zg�nl�k Belgesi etiketine bak�n.";
    Agent_Speak(L_ProductKeyAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pid1,"Left");

    var L_ProductKeyAboutThisStep3_Text = "Burada yazd���n�z her harf sizin i�in otomatik olarak b�y�k harfe d�n��t�r�l�r.";
    Agent_Speak(L_ProductKeyAboutThisStep3_Text);
    
    Agent_Play("RestPose");
        
    var L_ProductKeyAboutThisStep4_Text = "Bu ad�mdan sonra, bilgisayar�n�z� ve Microsoft Windows kopyan�z� kaydettirebilirsiniz.";
    Agent_Speak(L_ProductKeyAboutThisStep4_Text);
        
    var L_ProductKeyAboutThisStep5_Text = "Windows'u kaydettirmek �ok kolay, �stelik size �ok yarar sa�lar.";
    Agent_Speak(L_ProductKeyAboutThisStep5_Text);
}

function Agent_ProductKeyWhatIsProdKey()
{
    var L_ProductKeyWhatIsProdKey1_Text = "Microsoft taraf�ndan �retilen her Windows kopyas�, benzersiz bir �r�n anahtar�yla kodlan�r.";
    Agent_Speak(L_ProductKeyWhatIsProdKey1_Text);

    var L_ProductKeyWhatIsProdKey2_Text = "�r�n anahtar�, ger�ek bir Microsoft �r�n� sat�n ald���n�zdan emin olman�za yard�mc� olur.";
    Agent_Speak(L_ProductKeyWhatIsProdKey2_Text);

    var L_ProductKeyWhatIsProdKey3_Text = "Ayr�ca Windows'un korsan kopyalar�ndan korunman�za yard�mc� olur.";
    Agent_Speak(L_ProductKeyWhatIsProdKey3_Text);
        
    var L_ProductKeyWhatIsProdKey4_Text = "�r�n anahtar� ayn� zamanda size, destek, pazarlama hizmeti, y�kseltme ve Web sunumlar� gibi belirli m��teri kazan�lar� sa�lar.";
    Agent_Speak(L_ProductKeyWhatIsProdKey4_Text);
}

function Agent_ProductKeyWhyNextNotAvailable()
{
    var L_ProductKeyWhyNextNotAvailable1_Text = "Ge�erli bir �r�n anahtar� yazmad���n�zdan �leri d��mesi kullan�labilir de�il.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable1_Text);

    var L_ProductKeyWhyNextNotAvailable2_Text = "Ge�erli bir �r�n anahtar� yazman�z gerekir.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable2_Text);

    var L_ProductKeyWhyNextNotAvailable3_Text = "Ard�ndan devam etmek i�in �leri'yi t�klatabilirsiniz.";
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
    
    var L_ProductKeyWhatToDoNext1_Text = "Ge�erli bir �r�n anahtar� girdikten sonra �leri d��mesini t�klat�n.";
    Agent_Speak(L_ProductKeyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}




function Agent_Reg1AddCommands() 
{
    var L_Reg1Command1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_Reg1Command2_Text = "Kay�&t i�lemi hakk�nda bilgi ver";
    var L_Reg1Command3_Text = "�u anda na&s�l kay�t olurum?";
    var L_Reg1Command4_Text = "Da&ha sonra kay�t olabilir miyim?";
    var L_Reg1Command5_Text = "Kay�t olman�n &anlam� nedir?";
    var L_Reg1Command6_Text = "Bilgi payla��m�yla ilgili bilgi &ver";

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
    var L_Reg1AboutThisStep1_Text = "Buras�, kay�t b�l�m�n�n ba�lang�c�d�r.";
    Agent_Speak(L_Reg1AboutThisStep1_Text);

    var L_Reg1AboutThisStep2_Text = "Burada Windows kopyan�z� kaydedebilirsiniz.";
    Agent_Speak(L_Reg1AboutThisStep2_Text);

    var L_Reg1AboutThisStep3_Text = "Kaydoldu�unuzda, Microsoft m��terisi haklar�ndan yararlan�rs�n�z.";
    Agent_Speak(L_Reg1AboutThisStep3_Text);
        
    var L_Reg1AboutThisStep4_Text = "Bunlar aras�nda �r�n g�ncelle�tirmelerinin bildirilmesi ve �d�l kazanm�� olan Microsoft �r�n destek hizmetlerine eri�me olana�� bulunmaktad�r.";
    Agent_Speak(L_Reg1AboutThisStep4_Text);
        
    var L_Reg1AboutThisStep5_Text = "Bu ekranda, nas�l kaydolaca��n�za karar verebilirsiniz.";
    Agent_Speak(L_Reg1AboutThisStep5_Text);
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");
        
    var L_Reg1AboutThisStep6_Text = "Ve Microsoft gizlilik ilkesi hakk�nda ek bilgi almak istiyorsan�z, bu ba�lant�y� t�klat�n.";
    Agent_Speak(L_Reg1AboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1AboutRegistration()
{    
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1AboutRegistration1_Text = "Kay�t i�lemine ba�lamak i�in buray� t�klat�n, ard�ndan �leri d��mesini t�klat�n.";
    Agent_Speak(L_Reg1AboutRegistration1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.rb_reg_ms_no,"Left");

    var L_Reg1AboutRegistration2_Text = "Ancak kay�t olmamay� tercih ederseniz ikinci se�ene�i se�ip ard�ndan \"�leri\" d��mesini t�klat�n.";
    Agent_Speak(L_Reg1AboutRegistration2_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1HowToRegister()
{      
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1HowToRegister1_Text = "Windows kopyan�z� kaydettirmek i�in Evet se�ene�inin se�ili oldu�undan emin olun.";
    Agent_Speak(L_Reg1HowToRegister1_Text); 
    
    Agent_Play("RestPose");

    var L_Reg1HowToRegister2_Text = "Devam etmek i�in �leri'yi t�klat�n.";
    Agent_Speak(L_Reg1HowToRegister2_Text);
}

function Agent_Reg1RegisterLater()
{
    var L_Reg1RegisterLater1_Text = "Kay�t olma i�lemini �u anda atlarsan�z, Windows kurulumunu tamamlad�ktan sonra Windows kopyan�z� kaydettirebilirsiniz.";
    Agent_Speak(L_Reg1RegisterLater1_Text);

    var L_Reg1RegisterLater2_Text = "Yaln�zca, Ba�lat men�s�nde �al��t�r'� t�klat�n ve regwiz /r yaz�n.";
    Agent_Speak(L_Reg1RegisterLater2_Text);

    var L_Reg1RegisterLater3_Text = "Bu ad�mlar� unutursan�z, sorular�n�za yan�t bulmak, benzeri �nemli bilgiyi edinmek i�in Ba�lat men�s�ndeki Yard�m ve Destek'� t�klat�n.";
    Agent_Speak(L_Reg1RegisterLater3_Text);
}

function Agent_Reg1WhyRegister()
{
    var L_Reg1WhyRegister1_Text = "Windows kopyan�z� kaydetti�inizde, bir�ok Microsoft m��terisi haklar�ndan yararlan�rs�n�z.";
    Agent_Speak(L_Reg1WhyRegister1_Text);

    var L_Reg1WhyRegister2_Text = "Bunlar aras�nda �r�n g�ncelle�tirmelerinin bildirilmesi ve �d�l kazanm�� olan Microsoft �r�n destek hizmetlerine eri�me olana�� bulunmaktad�r.";
    Agent_Speak(L_Reg1WhyRegister2_Text);
}

function Agent_Reg1AboutSharingInfo()
{
    
    if (!window.external.get_RetailOOBE()) 
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Bu se�enekleri i�aretledi�inide, kay�t bilginizi Microsoft ve bilgisayar�n�z�n �reticisiyle payla�may� se�ersiniz.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text); 
    
        Agent_Play("RestPose");
    }
    else
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Bu se�enekleri i�aretledi�inide, kay�t bilginizi Microsoft'la payla�may� se�ersiniz.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");     
    }
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");

    var L_Reg1AboutSharingInfo2_Text = "Microsoft gizlilik ilkesi hakk�nda ek bilgi almak i�in, bu ba�lant�y� t�klat�n.";
    Agent_Speak(L_Reg1AboutSharingInfo2_Text);
    
    Agent_Play("RestPose");
    
    if (!window.external.get_RetailOOBE()) 
    {           
        Agent_GestureAtElement(g.reg1_spn3,"Left");
                
        var L_Reg1AboutSharingInfo3_Text = "%1 gizlilik ilkesi hakk�nda ek bilgi almak i�in, bu ba�lant�y� t�klat�n.";
        Agent_Speak(ApiObj.FormatMessage(L_Reg1AboutSharingInfo3_Text, g_OEMNameStr));
    
        Agent_Play("RestPose");
    }
}




function Agent_Reg3AddCommands() 
{
    var L_Reg3Command1_Text = "Bu &a�amayla ilgili bilgi ver";
    var L_Reg3Command2_Text = "&Bilgileri nas�l de�i�tiririm?";
    var L_Reg3Command3_Text = "Bilgi payla��m�yla ilgili bilgi &ver";

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
    var L_Reg3AboutThisStep1_Text = "Microsoft Windows kopyan�z� kaydettirmek i�in bu ekrandaki bilgileri doldurman�z gerekir.";
    Agent_Speak(L_Reg3AboutThisStep1_Text);
    
    Agent_GestureAtElement(g.UserCity,"Left");

    var L_Reg3AboutThisStep2_Text = "'�ste�e Ba�l�' olarak i�aretlenenler d���nda t�m kutular i�in, bilgi girmeniz gerekmektedir.";
    Agent_Speak(L_Reg3AboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_Reg3AboutThisStep3_Text = "Ancak iste�e ba�l� bilgileri de doldurman�z yararl� olur.";
    Agent_Speak(L_Reg3AboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_Reg3AboutThisStep4_Text = "Bilgi girmeyi tamamlad���n�zda, yaln�zca �leri d��mesini t�klat�n.";
    Agent_Speak(L_Reg3AboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg3HowToChangeInfo()
{
    var L_Reg3HowToChangeInfo1_Text = "Ne yapaca��n�z� g�stermek i�in, kutular�n i�ine baz� ipu�lar� eklenmi�tir.";
    Agent_Speak(L_Reg3HowToChangeInfo1_Text);
    
    Agent_GestureAtElement(g.UserLastName,"Left");

    var L_Reg3HowToChangeInfo2_Text = "�rne�in, yazmaya ba�lamak i�in yaln�zca bu Soyad� kutusunu t�klat�n.";
    Agent_Speak(L_Reg3HowToChangeInfo2_Text);

    var L_Reg3HowToChangeInfo3_Text = "Kutuda, ekleme noktas� olarak bilinen, yan�p s�nen bir dikey �izginin g�r�nmesi gerekir.";
    Agent_Speak(L_Reg3HowToChangeInfo3_Text);

    var L_Reg3HowToChangeInfo4_Text = "Yazd�klar�n�z ekleme noktas�na girilir.";
    Agent_Speak(L_Reg3HowToChangeInfo4_Text);
    
    Agent_Play("RestPose");

    var L_Reg3HowToChangeInfo5_Text = "Klavyenizdeki Sol ya da Sa� Ok tu�lar�na basarak ekleme noktas�n� metin kutusu i�inde ta��yabilirsiniz.";
    Agent_Speak(L_Reg3HowToChangeInfo5_Text);

    var L_Reg3HowToChangeInfo6_Text = "Ekleme noktas�ndan sonraki karakterleri kald�rmak i�in Delete tu�unu kullanabilir veya ekleme noktas�ndan �nceki karakterleri kald�rmak i�in Geri al tu�unu kullanabilirsiniz.";
    Agent_Speak(L_Reg3HowToChangeInfo6_Text);

    var L_Reg3HowToChangeInfo7_Text = "Karakter eklemek istiyorsan�z, i�aret�iyi kutu i�inde karakteri eklemek istedi�iniz yere getirin ve t�klat�n.";
    Agent_Speak(L_Reg3HowToChangeInfo7_Text);

    var L_Reg3HowToChangeInfo8_Text = "Ard�ndan eklemek istedi�iniz karakteri yaz�n.";
    Agent_Speak(L_Reg3HowToChangeInfo8_Text);

    var L_Reg3HowToChangeInfo9_Text = "Bir kutunun i�ine yazmazsan�z ve ipucu hala orada duruyorsa, endi�elenmeyin.";
    Agent_Speak(L_Reg3HowToChangeInfo9_Text);

    var L_Reg3HowToChangeInfo10_Text = "�pucu, yaln�zca size yard�mc� olmak amac�yla tasarlanm��t�r. Kay�t bilgilerinizin bir par�as� de�il.";
    Agent_Speak(L_Reg3HowToChangeInfo10_Text);
}

function Agent_Reg3AboutSharingInfo()
{    
    if (!window.external.get_RetailOOBE()) 
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
        
        var L_Reg3AboutSharingInfo1_Text = "Bu se�enekleri i�aretledi�inide, kay�t bilginizi Microsoft ve bilgisayar�n�z�n �reticisiyle payla�may� se�ersiniz.";
        Agent_Speak(L_Reg3AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");
    }
    else
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
         
        var L_Reg3AboutSharingInfo1_Text = "Bu se�enekleri i�aretledi�inide, kay�t bilginizi Microsoft'la payla�may� se�ersiniz.";
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

        

        L_Register3PlayCheckBoxScript1_Text = "�u anda bu ekrandaki kay�t bilgileri, hem Microsoft hem de bilgisayar�n �reticisine g�nderilmek �zere ayarlanm�� durumda.";
        L_Register3PlayCheckBoxScript2_Text = "�u anda bu ekrandaki kay�t bilgileri, bilgisayar�n �reticisine de�il, yaln�zca Microsoft'a g�nderilmek �zere ayarlanm�� durumda.";
        L_Register3PlayCheckBoxScript3_Text = "�u anda bu ekrandaki kay�t bilgileri, Microsoft'a de�il, yaln�zca bilgisayar�n �reticisine g�nderilmek �zere ayarlanm�� durumda.";
        L_Register3PlayCheckBoxScript4_Text = "�u anda bu ekrandaki kay�t bilgileri, ne Microsoft'a ne de bilgisayar�n �reticisine g�nderilecek.";

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

        var L_Register3PlayCheckBoxScript5_Text = "Bu bilgiler, onlar�n �r�n g�ncelle�tirmelerini ve kay�tl� m��terilere sunduklar� di�er haklar� size bildirmelerine yard�mc� olur.";
        Agent_Speak(L_Register3PlayCheckBoxScript5_Text);

        var L_Register3PlayCheckBoxScript6_Text = "Bu bilgilerin g�nderilip g�nderilmeme durumunu de�i�tirmek isterseniz,";
        Agent_Speak(L_Register3PlayCheckBoxScript6_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(elem, "TopCenterWidth");
		else
			Agent_GestureAtElement(elem, "Left");

        var L_Register3PlayCheckBoxScript7_Text = "Buradaki kutular� t�klat�n yeter.";
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

        var L_Register3EncourageTabKey1_Text = "Buraya gelmek i�in Sekme tu�una bas�n.";
        Agent_Speak(L_Register3EncourageTabKey1_Text);
}

function Agent_Register3EncourageMouseClick() {

        var L_Register3EncourageMouseClick1_Text = "Fare i�aret�isini buraya getirip sol d��mesini t�klat�n.";
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

                        var L_Register3PlayElementScript1_Text = "Bu kutuya ad�n�z� yaz�n.";
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

                        var L_Register3PlayElementScript3_Text = "Buras� ikinci ad�n�z� yazaca��n�z yerdir.";
                        Agent_Speak(L_Register3PlayElementScript3_Text);

                        break;

                case "UserLastName":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript4_Text = "Bu kutuya soyad�n�z� yaz�n.";
                        Agent_Speak(L_Register3PlayElementScript4_Text);

                        break;

                case "UserAddress":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript5_Text = "Buraya adresinizi yaz�n.";
                        Agent_Speak(L_Register3PlayElementScript5_Text);

                        break;

                case "UserAddress2":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        Agent_Play("Think");

                        var L_Register3PlayElementScript6_Text = "Adresinizi yazmak i�in ek alana gerek duyarsan�z burada enter tu�una bas�n. Aksi halde, di�er kutuya ge�mek �zere Sekme tu�una bas�n.";
                        Agent_Speak(L_Register3PlayElementScript6_Text);

                        Agent_Play("RestPose");

                        break;

                case "UserCity":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript7_Text = "Buraya, ya�ad���n�z �ehrin ya da kasaban�n ad�n� yaz�n.";
                        Agent_Speak(L_Register3PlayElementScript7_Text);

                        break;

                case "UserStateTextBox":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript8_Text = "Buraya eyaletinizi ya da ilinizi yaz�n.";
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
                                var L_Register3PlayElementScript91_Text = "Eyaletinizi se�meniz gerekir.";
                                Agent_Speak(L_Register3PlayElementScript91_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript92_Text = "Eyaletlerin listesini g�r�nt�lemek i�in, farenizle a�a�� oku t�klat�n.";
                                Agent_Speak(L_Register3PlayElementScript92_Text);

                        }

                        else if (elem.id == "selCAProvince") {
                                var L_Register3PlayElementScript93_Text = "�linizi se�meniz gerekir.";
                                Agent_Speak(L_Register3PlayElementScript93_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript94_Text = "�llerin listesini g�r�nt�lemek i�in, farenizle a�a�� oku t�klat�n.";
                                Agent_Speak(L_Register3PlayElementScript94_Text);

                        }

                        else {
                                var L_Register3PlayElementScript95_Text = "�lke ya da b�lgenizi se�meniz gerekiyor, farenizle a�a�� oku t�klat�n.";
                                Agent_Speak(L_Register3PlayElementScript95_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript96_Text = "�lkelerin ve b�lgelerin listesini g�r�nt�lemek i�in farenizle a�a�� oku t�klat�n.";
                                Agent_Speak(L_Register3PlayElementScript96_Text);

                        }

                        Agent_Play("Explain");

                        var L_Register3PlayElementScript11_Text = "Sonra, eyaletinizi t�klat�p bir se�im yap�n.";
                        var L_Register3PlayElementScript12_Text = "Sonra, ilinizi t�klat�p bir se�im yap�n.";
                        var L_Register3PlayElementScript13_Text = "Sonra �lke ya da b�lgenizi t�klat�p se�in.";

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

                        var L_Register3PlayElementScript14_Text = "Buraya posta kodunuzu girin.";
                        Agent_Speak(L_Register3PlayElementScript14_Text);

                        break;

                case "UserEmailAddress":

                        if (elem.value == "") {

							if (g.document.dir == "rtl") 
								Agent_GestureAtElement(elem, "Left");
		
							else
								Agent_GestureAtElement(elem, "Right");

                            var L_Register3PlayElementScript15_Text = "E-posta adresinizi iste�e ba�l� olsa da sizinle ba�lant�ya ge�mekte tercih etti�imiz yoldur.";
                            Agent_Speak(L_Register3PlayElementScript15_Text);
							
							g_bAgentRegister3ShortEmail = true;
							
							Agent_Play("Explain");
							
                            var L_Register3PlayElementScript16_Text = "E-posta adresiniz yoksa bu kutuyu bo� b�rak�n.";
                            Agent_Speak(L_Register3PlayElementScript16_Text);
							
							Agent_Play("Blink");
							                             
                        }
                        
                        else if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) {

	                       if (g_strAgentLastFocusID == "UserEmailAddress") {

								Agent_Play("Decline");
								
								var L_Register3PlayElementScript17_Text = "Bu, ge�erli bir e-posta adresine benzemiyor.";
								Agent_Speak(L_Register3PlayElementScript17_Text);

								Agent_ExplainEmailAddress();
								
								if (g.document.dir == "rtl")
									Agent_GestureAtElement(elem, "Left");
								
								else
									Agent_GestureAtElement(elem, "Right");
                                        
								Agent_Play("Alert");
                                        
								var L_Register3PlayElementScript18_Text = "E-posta adresiniz yoksa bu alan� bo� b�rak�n.";
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
        var L_ExplainEmailAddress1_Text = "E-posta adresleri iki k�s�mdan olu�ur.";
        Agent_Speak(L_ExplainEmailAddress1_Text);

        var L_ExplainEmailAddress2_Text = "�lk k�s�m, @ simgesinden �nce gelen hesap ad�d�r. �kinci k�s�m ise etki alan� ad�d�r.";
        Agent_Speak(L_ExplainEmailAddress2_Text);

        var L_ExplainEmailAddress3_Text = "�rne�in, e-posta adresleri �u bi�imdedir: %s";
        var re = /%s/i;
        var strEmail = "\\map=\"\"=\"greatcustomer@msn.com\"\\";

        Agent_Speak(L_ExplainEmailAddress3_Text.replace(re, strEmail) + "\\pau=2000\\");

        Agent_Play("RestPose");
}







function Agent_PrivacyMSAddCommands() 
{
    var L_PrivacyMSCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_PrivacyMSCommand2_Text = "G�&venli sunucu nedir?";
    var L_PrivacyMSCommand3_Text = "&Tan�mlama bilgisi nedir?";
    var L_PrivacyMSCommand4_Text = "&Sonra ne yapmal�y�m?";

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
    var L_PrivacyMSAboutThisStep1_Text = "Bu ekranda Microsoft'un gizlilik bildirimi g�r�nt�lenir.";
    Agent_Speak(L_PrivacyMSAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.privtext,"Left");

    var L_PrivacyMSAboutThisStep2_Text = "Buradaki metni okuyabilirsiniz.";
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

    var L_PrivacyMSAboutThisStep3_Text = "Ard�ndan, �nceki ekrana d�nmek i�in Geri d��mesini t�klat�n.";
    Agent_Speak(L_PrivacyMSAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PrivacyMSWhatIsSecureServer()
{
    var L_PrivacyMSWhatIsSecureServer1_Text = "Sunucu, bir a�daki di�er bilgisayarlara, bilgi gibi payla��lan kaynaklar sa�layan bir bilgisayard�r.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer1_Text);

    var L_PrivacyMSWhatIsSecureServer2_Text = "G�venli sunucu, i�lemlerin g�venli bi�imde ger�ekle�tirilebilmesini ve �zerinde saklanan bilgilere yetkisiz ki�iler taraf�ndan eri�ilemeyece�inden emin olman�z� sa�layan bir bilgisayard�r.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer2_Text);

    var L_PrivacyMSWhatIsSecureServer3_Text = "�rne�in Microsoft'a kay�t yapt�r�rken, ad�n�z ve adres bilgileriniz Microsoft g�venli kay�t sunucusunda saklan�r.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer3_Text);
        
    var L_PrivacyMSWhatIsSecureServer4_Text = "B�ylece, bilgilerinizin gizlili�i ve g�venli�i korunur ve kay�t olma i�lemi sonucunda, Microsoft d���ndaki ki�iler taraf�ndan ili�ki kurulamaz.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer4_Text);
}

function Agent_PrivacyMSWhatIsCookie()
{
    var L_PrivacyMSWhatIsCookie1_Text = "Tan�mlama bilgisi, belirli Web sitelerini ziyaret ederken bilgisayar�n�zda depolanan k���k bir veri dosyas�d�r.";
    Agent_Speak(L_PrivacyMSWhatIsCookie1_Text);

    var L_PrivacyMSWhatIsCookie2_Text = "Tan�mlama bilgisi, e-posta adresiniz gibi hakk�n�zdaki temel bilgileri i�erir. B�ylece siteyi her ziyaret etti�inizde bu bilgileri yeniden girmeniz gerekmez.";
    Agent_Speak(L_PrivacyMSWhatIsCookie2_Text);

    var L_PrivacyMSWhatIsCookie3_Text = "�rne�in bir Web sitesinde al��veri� yaparsan�z, bu site bilgisayar�n�za al��veri� bilgilerinizi i�eren bir tan�mlama bilgisi g�nderebilir.";
    Agent_Speak(L_PrivacyMSWhatIsCookie3_Text);
        
    var L_PrivacyMSWhatIsCookie4_Text = "B�ylece Web sitesini yeniden ziyaret etti�inizde, bu bilgileri yeniden girmeniz gerekmez.";
    Agent_Speak(L_PrivacyMSWhatIsCookie4_Text);
        
    var L_PrivacyMSWhatIsCookie5_Text = "Microsoft'a kay�t yapt�r�rken �r�n kimli�iniz, ad�n�z ve adresiniz bilgisayar�n�zda bir tan�mlama bilgisinde saklan�r.";
    Agent_Speak(L_PrivacyMSWhatIsCookie5_Text);
        
    var L_PrivacyMSWhatIsCookie6_Text = "B�ylece www.microsoft.com sitesini daha sonra ziyaret etti�inizde, Web sitesi sizi kay�tl� bir Windows kullan�c�s� olarak tan�yacakt�r.";
    Agent_Speak(L_PrivacyMSWhatIsCookie6_Text);
}

function Agent_PrivacyMSWhatToDoNext()
{    
    Agent_GestureAtElement(g.privtext,"Left");
    
    var L_PrivacyMSWhatToDoNext1_Text = "Gizlilik bildiriminin devam�n� g�rmek i�in bu kutuyu t�klat�n.";
    Agent_Speak(L_PrivacyMSWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.privtext,"Right");

    var L_PrivacyMSWhatToDoNext2_Text = "Daha sonra, buradaki yukar� ve a�a�� ok d��melerini kullanarak gizlilik bildirimi boyunca ileri geri gidin.";
    Agent_Speak(L_PrivacyMSWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_PrivacyMSWhatToDoNext3_Text = "Metin �zerinde hareket etmek i�in Page Down ve Page Up tu�lar�n� da kullanabilirsiniz.";
    Agent_Speak(L_PrivacyMSWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
        
    var L_PrivacyMSWhatToDoNext4_Text = "Gizlilik bildirimini okuduktan sonra, �nceki kay�t ekran�na d�nmek i�in Geri d��mesini t�klat�n.";
    Agent_Speak(L_PrivacyMSWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}





function Agent_RefDialAddCommands() 
{
    var L_RefDialAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_RefDialAddCommands2_Text = "&Sonra ne yapmal�y�m?";

    g_AgentCharacter.Commands.Add("Agent_RefDialAboutThisStep", L_RefDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialWhatToDoNext", L_RefDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RefDialAboutThisStep()
{
    var L_RefDialAboutThisStep1_Text = "Bu noktada Windows'un �cretsiz bir numaray� aramas� gerekiyor.";
    Agent_Speak(L_RefDialAboutThisStep1_Text);

    var L_RefDialAboutThisStep2_Text = "Bu i�lem bilgisayar�n�zdaki varolan Internet hesab�n� kullanman�z� sa�lar.";
    Agent_Speak(L_RefDialAboutThisStep2_Text);
}

function Agent_RefDialWhatToDoNext()
{    
    Agent_GestureAtElement(g.btnManual,"Left");
    
    var L_RefDialWhatToDoNext1_Text = "Internet servis sa�lay�c�n�z (k�saca ISS) varsa veya hangi ISS'yi kullanmak istedi�inizi biliyorsan�z, bu Ayarlar� Var d��mesini t�klat�n.";
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

    var L_RefDialWhatToDoNext2_Text = "B�lgenizde kullan�labilir olan ISS'leri g�steren listeden se�im yapmak istiyorsan�z, devam etmek i�in �leri'yi t�klat�n.";
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

    var L_RefDialWhatToDoNext3_Text = "Ya da bu bilgisayar� Internet eri�imi i�in ayarlamadan devam etmek i�in, Atla'y� t�klat�n.";
    Agent_Speak(L_RefDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RefDialingAddCommands() 
{
    var L_RefDialingAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_RefDialingAddCommands2_Text = "Ekran�m�n ortas�ndaki �ubuk ne&dir?";
    var L_RefDialingAddCommands3_Text = "&Sonra ne yapmal�y�m?";

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
    var L_RefDialingAboutThisStep1_Text = "Windows, bulundu�unuz b�lgedeki Internet servis sa�lay�c�lar�n�n bir listesini almak i�in sizi Microsoft Ba�vuru Servisi'ne ba�l�yor.";
    Agent_Speak(L_RefDialingAboutThisStep1_Text);

    var L_RefDialingAboutThisStep2_Text = "Bekleyin...";
    Agent_Speak(L_RefDialingAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingAboutThisStep3_Text = "�sterseniz, bu ad�m� atlayabilir ya da �nceki ekrana geri d�nebilirsiniz.";
    Agent_Speak(L_RefDialingAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RefDialingWhatsThisBar()
{    
    Agent_GestureAtElement(g.tblProg,"Left");
    
    var L_RefDialingWhatsThisBar1_Text = "Bu, i�lemin neresinde oldu�unuzu g�steren bir ilerleme �ubu�udur.";
    Agent_Speak(L_RefDialingWhatsThisBar1_Text);

    var L_RefDialingWhatsThisBar2_Text = "Bilgiler ba�vuru merkezinden bilgisayar�n�za y�klenirken, �ubuk dolar.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
    
    Agent_Play("RestPose");

    var L_RefDialingWhatsThisBar3_Text = "T�m bilgiler kar��dan y�klendi�inde �ubuk tamamen dolar ve otomatik olarak sonraki ekrana ge�ersiniz.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
}

function Agent_RefDialingWhatToDoNext()
{
    var L_RefDialingWhatToDoNext1_Text = "Windows, Microsoft Ba�vuru Servisi'nden ISS'lerle ilgili bilgiyi bilgisayar�n�za indirirken bekleyin.";
    Agent_Speak(L_RefDialingWhatToDoNext1_Text);

    var L_RefDialingWhatToDoNext2_Text = "Kar��dan y�kleme tamamlan�nca, sonraki ekran otomatik olarak g�r�n�r.";
    Agent_Speak(L_RefDialingWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingWhatToDoNext3_Text = "Bu ad�m� atlamak i�in Atla d��mesini t�klat�n.";
    Agent_Speak(L_RefDialingWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RegDialAddCommands()
{
    var L_RegDialAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_RegDialAddCommands2_Text = "&Sonra ne yapmal�y�m?";

    g_AgentCharacter.Commands.Add("Agent_RegDialAboutThisStep", L_RegDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RegDialWhatToDoNext", L_RegDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RegDialAboutThisStep()
{
    var L_RegDialAboutThisStep1_Text = "Windows, kay�t merkezine ba�lan�rken �cretsiz bir telefon numaras�n� aramak i�in bilgisayar�n�z� kullan�yor.";
    Agent_Speak(L_RegDialAboutThisStep1_Text);

    var L_RegDialAboutThisStep2_Text = "Bekleyin...";
    Agent_Speak(L_RegDialAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialAboutThisStep3_Text = "�sterseniz, bu ad�m� atlayabilir ya da �nceki ekrana d�nebilirsiniz.";
    Agent_Speak(L_RegDialAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RegDialWhatToDoNext()
{
    var L_RegDialWhatToDoNext1_Text = "Windows kay�t merkezine ba�lan�rken bekleyin.";
    Agent_Speak(L_RegDialWhatToDoNext1_Text);

    var L_RegDialWhatToDoNext2_Text = "Windows ba�land���nda, otomatik olarak sonraki ekrana gider.";
    Agent_Speak(L_RegDialWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialWhatToDoNext3_Text = "Bu ad�m� atlamak i�in Atla d��mesini t�klat�n.";
    Agent_Speak(L_RegDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigDialAddCommands()
{
    var L_MigDialAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_MigDialAddCommands2_Text = "&Sonraki a�amadan ne yapmal�y�m";

    g_AgentCharacter.Commands.Add("Agent_MigDialAboutThisStep", L_MigDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_MigDialWhatToDoNext", L_MigDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_MigDialAboutThisStep()
{
    var L_MigDialAboutThisStep1_Text = "Bu noktada Windows'un �cretsiz bir numaray� aramas� gerekiyor.";
    Agent_Speak(L_MigDialAboutThisStep1_Text);

    var L_MigDialAboutThisStep2_Text = "Bu i�lem bilgisayar�n�zdaki varolan Internet hesab�n� kullanman�z� sa�lar.";
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
    
    var L_MigDialWhatToDoNext1_Text = "Aramaya ba�lamak i�in �leri'yi t�klat�n.";
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

    var L_MigDialWhatToDoNext2_Text = "Bu ad�m� atlamak i�in Atla'y� t�klat�n.";
    Agent_Speak(L_MigDialWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}





function Agent_MigListAddCommands() 
{
    
    
    
	var L_MigListAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
	var L_MigListAddCommands2_Text = "&Sonraki a�amadan ne yapmal�y�m";
	
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
    var L_MigListAboutThisStep1_Text = "Bu ekranda kullanmak istedi�iniz Internet Servis Sa�lay�c�'y� (ISS) se�in.";
    Agent_Speak(L_MigListAboutThisStep1_Text);

    var L_MigListAboutThisStep2_Text = "Bu i�lem bilgisayar�n�zdaki varolan Internet hesab�n� kullanman�z� sa�lar.";
    Agent_Speak(L_MigListAboutThisStep2_Text);
}

function Agent_MigListWhatToDoNext()
{
    Agent_GestureAtElement(g.selISPDropList,"Left");
    
    var L_MigListWhatToDoNext1_Text = "Bu listeden t�klat�p Internet Servis Sa�lay�c�'n�z� se�in.";
    Agent_Speak(L_MigListWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_MigListWhatToDoNext2_Text = "Listede kendi servis sa�lay�c�n�z� g�rm�yorsan�z, listenin sonundaki \"Benim kulland���m ISS listede yok\" ba�lant�s�n� se�in se�in.";
    Agent_Speak(L_MigListWhatToDoNext2_Text);

    var L_MigListWhatToDoNext3_Text = "Bu bilgisayarda Internet hesab�n�z� yeniden kurmayla ilgili ISS'nizle temasa ge�in.";
    Agent_Speak(L_MigListWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_MigListWhatToDoNext4_Text = "Devam etmek i�in �leri'yi t�klat�n.";
    Agent_Speak(L_MigListWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigPageAddCommands() 
{
	var L_MigPageAddCommands1_Text = "�leride ne yapaca��m� &bildir";
	var L_MigPageAddCommands2_Text = "Bu ekran hakk�nda bilgi &ver";
	var L_MigPageAddCommands3_Text = "Sonraki &ekrana gitmeyi g�ster";
	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_WhatToDoNext", L_MigPageAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_AboutThisStep", L_MigPageAddCommands2_Text);
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_HowToMoveOn", L_MigPageAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_MigPageCommand_WhatToDoNext() {
		
	var L_MigPageWhatToDoNext1_Text = "Bu sayfay� tamamlad���n�zda.";
	Agent_Speak(L_MigPageWhatToDoNext1_Text);
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
			
	var L_MigPageWhatToDoNext2_Text = "�leri'yi t�klat�n.";
	Agent_Speak(L_MigPageWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}

function Agent_MigPageCommand_AboutThisStep() 
{
	var L_MigPageAboutThisStep1_Text = "Bu ekranda, varolan servis sa�lay�c�n�z�n verdi�i Internet hesab�n�z� etkinle�tirmeye �al��aca��z.";
	Agent_Speak(L_MigPageAboutThisStep1_Text);
	
	Agent_Play("Pleased");
	
	var L_MigPageAboutThisStep2_Text = "Yaln�zca, bu ekrandaki Internet servis sa�lay�c�n�z taraf�ndan sa�lanm�� olan y�nergeleri izleyin.";
	Agent_Speak(L_MigPageAboutThisStep2_Text);
}

function Agent_MigPageCommand_HowToMoveOn() 
{
	var L_MigPageHowToMoveOn1_Text = "Bu ekrandaki bilgileri girdi�inizde,";
	Agent_Speak(L_MigPageHowToMoveOn1_Text);		
			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

	var L_MigPageHowToMoveOn2_Text = "Devam etmek i�in �leri'yi t�klat�n.";
	Agent_Speak(L_MigPageHowToMoveOn2_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPDialAddCommands() 
{
    var L_ISPDial1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_ISPDial2_Text = "&Sonra ne yapmal�y�m?";

    g_AgentCharacter.Commands.Add("Agent_ISPDialAboutThisStep", L_ISPDial1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDialWhatToDoNext", L_ISPDial2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPDialAboutThisStep()
{
    var L_ISPDialAboutThisStep1_Text = "Bu noktada Windows'un �cretsiz bir numaray� aramas� gerekiyor.";
    Agent_Speak(L_ISPDialAboutThisStep1_Text);

    var L_ISPDialAboutThisStep2_Text = "Bu, sizi yeni Internet hesab�n�za kaydeder.";
    Agent_Speak(L_ISPDialAboutThisStep2_Text);

    var L_ISPDialAboutThisStep3_Text = "Devam etmek i�in �leri'yi t�klat�n yeter.";
    Agent_Speak(L_ISPDialAboutThisStep3_Text);
}

function Agent_ISPDialWhatToDoNext()
{
    var L_ISPDialWhatToDoNext1_Text = "Devam etmek i�in �leri'yi t�klat�n.";
    Agent_Speak(L_ISPDialWhatToDoNext1_Text);

    var L_ISPDialWhatToDoNext2_Text = "Atla'y� t�klatarak bu bilgisayar� Internet eri�imi i�in kurmadan devam edebilirsiniz. Bu i�lemi daha sonra da yapabilirsiniz...";
    Agent_Speak(L_ISPDialWhatToDoNext2_Text);
}




function Agent_DialToneAddCommands()
{
    var L_DialToneAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_DialToneAddCommands2_Text = "Bilgisa&yar� ta��mam gerekirse ne  olur?";
    var L_DialToneAddCommands3_Text = "&Sonra ne yapmal�y�m?";

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
    var L_DialToneAboutThisStep1_Text = "Windows �evir sesi alg�layamad�.";
    Agent_Speak(L_DialToneAboutThisStep1_Text);

    var L_DialToneAboutThisStep2_Text = "Bunun birka� nedeni olabilir.";
    Agent_Speak(L_DialToneAboutThisStep2_Text);

    var L_DialToneAboutThisStep3_Text = "Bilgisayar�n�z�n telefon kablosunun her iki ucunun da do�ru �ekilde tak�l�p tak�lmad���n� g�zden ge�irin.";
    Agent_Speak(L_DialToneAboutThisStep3_Text);

    var L_DialToneAboutThisStep4_Text = "Sonra telefon hatt�n�z� �u an kimsenin kullanmamas�n� sa�lay�n.";
    Agent_Speak(L_DialToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneAboutThisStep5_Text = "Ard�ndan yeniden �evirmeyi denemek i�in Yeniden �evir'i t�klat�n.";
    Agent_Speak(L_DialToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_DialToneHowToMove()
{
    var L_DialToneHowToMove1_Text = "Telefon hatt�n�za ba�lamak i�in bilgisayar�n�z� ta��man�z gerekirse, g�c�n kapal� olmas�n� sa�lay�n.";
    Agent_Speak(L_DialToneHowToMove1_Text);

    var L_DialToneHowToMove2_Text = "Bilgisayar�n�z� yeniden ba�latt���n�zda, Windows kald���n�z yerden devam eder.";
    Agent_Speak(L_DialToneHowToMove2_Text);
}

function Agent_DialToneWhatToDoNext()
{
    var L_DialToneWhatToDoNext1_Text = "�nce bilgisayar�n�z�n telefon hatt�na ba�lant�s�n� denetleyin.";
    Agent_Speak(L_DialToneWhatToDoNext1_Text);

    var L_DialToneWhatToDoNext2_Text = "Ard�ndan telefon hatt�n�z�n �u an kullan�mda olmamas�n� sa�lay�n.";
    Agent_Speak(L_DialToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneWhatToDoNext3_Text = "Ard�ndan yeniden �evirmeyi denemek i�in Yeniden �evir'i t�klat�n.";
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

    var L_DialToneWhatToDoNext4_Text = "Ya da kay�t olmadan veya Windows XP kopyan�z� etkinle�tirmeden devam etmek i�in, Atla d��mesini t�klatabilirsiniz.";
    Agent_Speak(L_DialToneWhatToDoNext4_Text);
    
    Agent_Play("RestPose");

    var L_DialToneWhatToDoNext5_Text = "Daha sonra istedi�iniz zaman kay�t yapt�rabilirsiniz.";
    Agent_Speak(L_DialToneWhatToDoNext5_Text);
}



function Agent_CnnctErrAddCommands() 
{
    var L_CnnctErrAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_CnnctErrAddCommands2_Text = "Arama bekletmeyi &nas�l kapat�r�m?";
    var L_CnnctErrAddCommands3_Text = "&Sonra ne yapmal�y�m?";

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
    var L_CnnctErrAboutThisStep1_Text = "Kay�t merkeziyle telefon ba�lant�n�z kesildi.";
    Agent_Speak(L_CnnctErrAboutThisStep1_Text);

    var L_CnnctErrAboutThisStep2_Text = "Bunun birka� nedeni olabilir.";
    Agent_Speak(L_CnnctErrAboutThisStep2_Text);

    var L_CnnctErrAboutThisStep3_Text = "�nce, uzun s�redir etkin olarak kullanmad���n�zdan ba�lant�n�z kendili�inden kesilmi� olabilir.";
    Agent_Speak(L_CnnctErrAboutThisStep3_Text);

    var L_CnnctErrAboutThisStep4_Text = "Sonra biri siz ba�l�yken telefon hatt�n� kullanmaya �al��m�� olabilir.";
    Agent_Speak(L_CnnctErrAboutThisStep4_Text);

    var L_CnnctErrAboutThisStep5_Text = "���nc� olarak, arama bekletmeniz varsa, gelen bir arama sizi kesintiye u�ratm�� olabilir.";
    Agent_Speak(L_CnnctErrAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrAboutThisStep6_Text = "Telefon hizmetinizde arama bekletme varsa ve bu �zelli�i kapatmak i�in gereken numaray� biliyorsan�z, bu numaray� buraya yaz�n.";
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

    var L_CnnctErrAboutThisStep7_Text = "Ard�ndan yeniden ba�lanmay� denemek i�in �leri d��mesini t�klat�n.";
    Agent_Speak(L_CnnctErrAboutThisStep7_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrTurnOffCallWaiting()
{
    var L_CnnctErrTurnOffCallWaiting1_Text = "Telefon hizmeti sa�lay�c�n�z, arama bekletme �zelli�ini kapatmak i�in gereken kodu size verebilir.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting1_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrTurnOffCallWaiting2_Text = "Bu ba�lant�y� olu�tururken telefonunuzun arama bekletme hizmetini kapatmak istiyorsan�z, bu numaray� buraya yaz�n.";
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

    var L_CnnctErrTurnOffCallWaiting3_Text = "Sonra �leri'yi t�klat�n.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrWhatToDoNext()
{
    var L_CnnctErrWhatToDoNext1_Text = "�nce, Microsoft'ta ba�lanmaya �al���rken kulland���n�z telefon hatt�n� kimsenin kullanmamas�n� sa�lay�n.";
    Agent_Speak(L_CnnctErrWhatToDoNext1_Text);

    var L_CnnctErrWhatToDoNext2_Text = "Sonra, arama bekletmeniz varsa ge�ici olarak kapat�n.";
    Agent_Speak(L_CnnctErrWhatToDoNext2_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrWhatToDoNext3_Text = "Kapatmak i�in bu kutuya kodu girin.";
    Agent_Speak(L_CnnctErrWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_CnnctErrWhatToDoNext4_Text = "Araman�z sona erdi�inde, arama bekletme �zelli�i otomatik olarak yeniden a��lacakt�r.";
    Agent_Speak(L_CnnctErrWhatToDoNext4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrWhatToDoNext5_Text = "Yeniden denemeye haz�r oldu�unuzda, �leri d��mesini t�klat�n.";
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

    var L_CnnctErrWhatToDoNext6_Text = "Ya da kay�t yapt�rmadan devam etmek i�in Atla d��mesini t�klat�n.";
    Agent_Speak(L_CnnctErrWhatToDoNext6_Text);
    
    Agent_Play("RestPose");
}



function Agent_HandShakeAddCommands() 
{
    var L_HandShakeAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_HandShakeAddCommands2_Text = "&Sonra ne yapmal�y�m?";

    g_AgentCharacter.Commands.Add("Agent_HandShakeAboutThisStep", L_HandShakeAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_HandShakeWhatToDoNext", L_HandShakeAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_HandShakeAboutThisStep()
{
    var L_HandShakeAboutThisStep1_Text = "Windows, Microsoft'a �u anda ba�lanamad�.";
    Agent_Speak(L_HandShakeAboutThisStep1_Text);

    var L_HandShakeAboutThisStep2_Text = "Bunun nedeni telefon hatlar�n�n me�gul olmas� veya bilgisayar�n�z�n telefon aramas� yapamamas� olabilir.";
    Agent_Speak(L_HandShakeAboutThisStep2_Text);

    var L_HandShakeAboutThisStep3_Text = "Birka� dakika beklemeyi deneyin.";
    Agent_Speak(L_HandShakeAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_HandShakeAboutThisStep4_Text = "Sonra yeniden denemek i�in, Yeniden �evir'i t�klat�n.";
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
    
    var L_HandShakeWhatToDoNext1_Text = "Birka� dakika bekleyip Yeniden �evir'i t�klat�n.";
    Agent_Speak(L_HandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_HandShakeWhatToDoNext2_Text = "Bunu zaten birka� kez denediyseniz, bilgisayar �reticinizle temasa ge�in.";
    Agent_Speak(L_HandShakeWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_HandShakeWhatToDoNext3_Text = "ya da bilgisayar�n�z� kaydettirmeden devam etmek i�in Atla'y� t�klat�n.";
    Agent_Speak(L_HandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_NoAnswerAddCommands() 
{
    var L_NoAnswerAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_NoAnswerAddCommands2_Text = "Telefon &numaras� yanl��sa?";
    var L_NoAnswerAddCommands3_Text = "&Sonra ne yapmal�y�m?";

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
    var L_NoAnswerAboutThisStep1_Text = "Aramaya �al��t���m�z telefon numaras� yan�t vermedi.";
    Agent_Speak(L_NoAnswerAboutThisStep1_Text);

    var L_NoAnswerAboutThisStep2_Text = "Numaran�n do�ru olup olmad���na bak�n.";
    Agent_Speak(L_NoAnswerAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_NoAnswerAboutThisStep3_Text = "Sorun yoksa, birka� dakika bekleyip ard�ndan yeniden denemek i�in, Yeniden �evir d��mesini t�klat�n.";
    Agent_Speak(L_NoAnswerAboutThisStep3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.edtPhoneNumber,"Left");

    var L_NoAnswerAboutThisStep4_Text = "Ancak numara do�ru de�ilse, buray� t�klat�n ve numaray� d�zenleyin.";
    Agent_Speak(L_NoAnswerAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_NoAnswerAboutThisStep5_Text = "Sonra Yeniden �evir d��mesini t�klat�n.";
    Agent_Speak(L_NoAnswerAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.btnRestore,"Right");

    var L_NoAnswerAboutThisStep6_Text = "Geri Y�kle d��mesini t�klatarak, Windows'un �evirmeyi denedi�i ilk numaray� her zaman i�in geri y�kleyebilirsiniz.";
    Agent_Speak(L_NoAnswerAboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_NoAnswerWhatIfWrongNumber()
{
    var L_NoAnswerWhatIfWrongNumber1_Text = "Buradaki numara do�ru de�ilse, metin kutusunu t�klat�n.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber1_Text);

    var L_NoAnswerWhatIfWrongNumber2_Text = "Kutuda, ekleme noktas� olarak bilinen, yan�p s�nen bir dikey �izginin g�r�nmesi gerekir.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber2_Text);

    var L_NoAnswerWhatIfWrongNumber3_Text = "Yazd�klar�n�z ekleme noktas�na girilir.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber3_Text);

    var L_NoAnswerWhatIfWrongNumber4_Text = "Klavyenizdeki Sol ya da Sa� Ok tu�lar�na basarak ekleme noktas�n� metin kutusu i�inde ta��yabilirsiniz.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber4_Text);

    var L_NoAnswerWhatIfWrongNumber5_Text = "Ekleme noktas�ndan sonraki karakterleri silmek i�in Delete tu�unu kullanabilirsiniz.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber5_Text);

    var L_NoAnswerWhatIfWrongNumber6_Text = "Ekleme noktas�ndan �nceki karakterleri silmek i�in Backspace tu�unu kullan�n.";
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
    
    var L_NoAnswerWhatToDoNext1_Text = "Buradaki telefon numaras�n� denetlediyseniz ve do�ru g�r�n�yorsa, yeniden ba�lanmay� denemek i�in Yeniden �evir'i t�klat�n.";
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

    var L_NoAnswerWhatToDoNext2_Text = "Devam etmek i�in, yeniden ba�lanmay� ya da �u anda bilgisayar�n�z� kaydetme i�lemini atlamay� se�meniz gerekir.";
    Agent_Speak(L_NoAnswerWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}



function Agent_PulseAddCommands() 
{

    var L_PulseAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_PulseAddCommands2_Text = "&Sonra ne yapmal�y�m?";

    g_AgentCharacter.Commands.Add("Agent_PulseAboutThisStep", L_PulseAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_PulseWhatToDoNext", L_PulseAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_PulseAboutThisStep()
{
    var L_PulseAboutThisStep1_Text = "Windows, telefonunuzun tonlu ya da darbeli aramay� kulland���n� belirleyemedi.";
    Agent_Speak(L_PulseAboutThisStep1_Text);

    var L_PulseAboutThisStep2_Text = "Windows'un ilerlemeden �nce bunu bilmesi gerekir.";
    Agent_Speak(L_PulseAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseAboutThisStep3_Text = "Bu ekranda, telefon hatt�n�z�n �evirme y�ntemini belirlersiniz.";
    Agent_Speak(L_PulseAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PulseWhatToDoNext()
{
    var L_PulseWhatToDoNext1_Text = "Telefon hatt�n�z�n kulland��� �evirme y�nteminin solundaki beyaz dairenin i�ini t�klat�n.";
    Agent_Speak(L_PulseWhatToDoNext1_Text);
    
    Agent_GestureAtElement(g.tone,"Left");

    var L_PulseWhatToDoNext2_Text = "Telefonunuz tonlu aramay� kullan�yorsa buray� t�klat�n.";
    Agent_Speak(L_PulseWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseWhatToDoNext3_Text = "Darbeli arama i�inse buray� t�klat�n.";
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

    var L_PulseWhatToDoNext4_Text = "Yeniden aramay� denemek i�in �leri'yi t�klat�n.";
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

    var L_PulseWhatToDoNext5_Text = "ya da bilgisayar�n�z� kaydettirmeden devam etmek i�in Atla'y� t�klat�n.";
    Agent_Speak(L_PulseWhatToDoNext5_Text);
    
    Agent_Play("RestPose");
}





function Agent_TooBusyAddCommands() 
{
        var L_TooBusyAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
        var L_TooBusyAddCommands2_Text = "Telefon &numaras� yanl��sa?";
        var L_TooBusyAddCommands3_Text = "&Sonra ne yapmal�y�m?";

        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_AboutThisStep", L_TooBusyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatIfIncorrect", L_TooBusyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatToDoNext", L_TooBusyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_TooBusyCommand_AboutThisStep() 
{
    var L_TooBusyAboutThisStep1_Text = "�evrilmeye �al���lan telefon numaras� do�ru de�il ya da me�gul.";
    Agent_Speak(L_TooBusyAboutThisStep1_Text);

    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyAboutThisStep2_Text = "Bu numaran�n do�ru olup olmad���n� denetleyin.";
    Agent_Speak(L_TooBusyAboutThisStep2_Text);
        
    Agent_Play("RestPose");

    var L_TooBusyAboutThisStep3_Text = "Tamamsa, birka� dakika bekleyin,";
    Agent_Speak(L_TooBusyAboutThisStep3_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyAboutThisStep4_Text = "Ard�ndan yeniden �evirmeyi denemek i�in Yeniden �evir'i t�klat�n.";
    Agent_Speak(L_TooBusyAboutThisStep4_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatIfIncorrect() 
{        
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect1_Text = "Buradaki telefon numaras� do�ru de�ilse,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("cb_altnumber"),"Left");
    
    var L_TooBusyPhoneNumberIncorrect2_Text = " bu onay kutusunu i�aretleyip";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_altnumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect3_Text = "buraya ba�ka bir numara girin.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("cb_outsideline"),"Left");

    var L_TooBusyPhoneNumberIncorrect4_Text = "D�� hat alabilmek i�in bir numara �evirmeniz gerekirse, bu onay kutusunu i�aretleyip";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect4_Text);

    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("edt_outsideline"),"Right");

    var L_TooBusyPhoneNumberIncorrect5_Text = "numaray� buraya girin.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect5_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect6_Text = "Arama bekletmeniz varsa yat���n�z arama gelen bir arama y�z�nden kesintiye u�rayabilir.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect6_Text);

    var L_TooBusyPhoneNumberIncorrect7_Text = "Bu ba�lant�y� yaparken telefonunuzun arama bekletme hizmetini kapatmak �ok kolayd�r.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect7_Text);
        
    Agent_GestureAtElement(g.document.all("cb_callwaiting"),"Left");

    var L_TooBusyPhoneNumberIncorrect8_Text = "Yaln�zca bu onay kutusunu t�klat�n";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect8_Text);

    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_callwaiting"),"Right");

    var L_TooBusyPhoneNumberIncorrect9_Text = "ve kodu buraya yaz�n.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect9_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect10_Text = "Arama tamamland�ktan sonra arama bekletme �zelli�i yeniden a��lacak.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect10_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyPhoneNumberIncorrect11_Text = "Yeniden denemeye haz�r oldu�unuzda, Yeniden �evir d��mesini t�klatmay� unutmay�n.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect11_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatToDoNext() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyWhatToDoNext1_Text = "Telefon numaras�n� denetlediyseniz ve do�ru g�r�n�yorsa,";
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
    
     var L_TooBusyWhatToDoNext2_Text = "Yeniden ba�lanmay� denemek i�in Yeniden �evir'i t�klat�n.";
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

    var L_TooBusyWhatToDoNext3_Text = "Bu ad�m� atlamak istiyorsan�z, Atla d��mesini t�klat�n.  Windows kurulumunu tamamlad�ktan sonra istedi�iniz zaman kay�t yapt�rabilirsiniz.";
    Agent_Speak(L_TooBusyWhatToDoNext3_Text);
        
    Agent_Play("RestPose");
}



function Agent_ISPDToneAddCommands() 
{
    var L_ISPDToneAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_ISPDToneAddCommands2_Text = "Bilgisa&yar� ta��mam gerekirse ne olur";
    var L_ISPDToneAddCommands3_Text = "&Sonraki a�amadan ne yapmal�y�m";

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
    var L_ISPDToneAboutThisStep1_Text = "Windows �evir sesi alg�layamad�.";
    Agent_Speak(L_ISPDToneAboutThisStep1_Text);

    var L_ISPDToneAboutThisStep2_Text = "Bunun birka� nedeni olabilir.";
    Agent_Speak(L_ISPDToneAboutThisStep2_Text);

    var L_ISPDToneAboutThisStep3_Text = "Bilgisayar�n�z�n telefon kablosunun her iki ucunun da do�ru �ekilde tak�l�p tak�lmad���n� g�zden ge�irin.";
    Agent_Speak(L_ISPDToneAboutThisStep3_Text);

    var L_ISPDToneAboutThisStep4_Text = "Sonra telefon hatt�n�z� �u an kimsenin kullanmamas�n� sa�lay�n.";
    Agent_Speak(L_ISPDToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneAboutThisStep5_Text = "Ard�ndan yeniden �evirmeyi denemek i�in Yeniden �evir'i t�klat�n.";
    Agent_Speak(L_ISPDToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPDToneHowToMove()
{
    var L_ISPDToneHowToMove1_Text = "Telefon hatt�n�za ba�lamak i�in bilgisayar�n�z� ta��man�z gerekirse, g�c�n kapal� olmas�n� sa�lay�n.";
    Agent_Speak(L_ISPDToneHowToMove1_Text);

    var L_ISPDToneHowToMove2_Text = "Bilgisayar�n�z� yeniden ba�latt���n�zda, Windows kald���n�z yerden devam eder.";
    Agent_Speak(L_ISPDToneHowToMove2_Text);
}

function Agent_ISPDToneWhatToDoNext()
{
    var L_ISPDToneWhatToDoNext1_Text = "�nce bilgisayar�n�z�n telefon hatt�na ba�lant�s�n� denetleyin.";
    Agent_Speak(L_ISPDToneWhatToDoNext1_Text);

    var L_ISPDToneWhatToDoNext2_Text = "Ard�ndan telefon hatt�n�z�n �u an kullan�mda olmamas�n� sa�lay�n.";
    Agent_Speak(L_ISPDToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneWhatToDoNext3_Text = "Ard�ndan yeniden �evirmeyi denemek i�in Yeniden �evir'i t�klat�n.";
    Agent_Speak(L_ISPDToneWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_ISPCnErrAddCommands() {

        var L_ISPCnErrAddCommands1_Text = "�leride ne yapaca��m� &bildir";
        var L_ISPCnErrAddCommands2_Text = "�a�r� bekletmeyi &nas�l kapataca��m� s�yle";
        var L_ISPCnErrAddCommands3_Text = "Bu ekran hakk�nda bilgi &ver";
        var L_ISPCnErrAddCommands4_Text = "Sonraki &ekrana gitmeyi g�ster";

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
        var L_ISPCnErrIntro1_Text = "Internet hizmetini kurmak i�in yap�lan telefon ba�lant�n�z kesildi.";
        Agent_Speak(L_ISPCnErrIntro1_Text);

        Agent_MoveToElement(g.document.all("txtBullet1"),"Left");
        
        var L_ISPCnErrIntro2_Text = "Bunun birka� nedeni olabilir.";
        Agent_Speak(L_ISPCnErrIntro2_Text);

        var L_ISPCnErrIntro3_Text = "�nce, uzun s�redir etkin olarak kullanmad���n�zdan ba�lant�n�z kendili�inden kesilmi� olabilir.";
        Agent_Speak(L_ISPCnErrIntro3_Text);

        var L_ISPCnErrIntro4_Text = "Sonra biri siz ba�l�yken telefon hatt�n� kullanmaya �al��m�� olabilir.";
        Agent_Speak(L_ISPCnErrIntro4_Text);

        var L_ISPCnErrIntro5_Text = "���nc� olarak, arama bekletmeniz varsa, gelen bir arama sizi kesintiye u�ratm�� olabilir.";
        Agent_Speak(L_ISPCnErrIntro5_Text);

        Agent_GestureAtElement(g.document.all("Callwait"),"Left");

        var L_ISPCnErrIntro6_Text = "Telefon hizmeti arama bekletme sunuyor, bu hizmeti kapatan numaray� biliyorsan�z, buraya girin.";
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

        var L_ISPCnErrIntro7_Text = "Ard�ndan yeniden ba�lanmaya �al��mak i�in Yeniden �evir'i t�klat�n.";
        Agent_Speak(L_ISPCnErrIntro7_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("txtBullet1"),"Left");

        var L_ISPCnErrWhatToDoNext1_Text = "T�m olas� sorunlar� ��zd�yseniz,";
        Agent_Speak(L_ISPCnErrWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPCnErrWhatToDoNext2_Text = "Yeniden ba�lanmaya �al��mak istiyorsunuz,";
        Agent_Speak(L_ISPCnErrWhatToDoNext2_Text);

        var L_ISPCnErrWhatToDoNext3_Text = "Yeniden denemek i�in Yeniden �evir'i t�klat�n.";
        Agent_Speak(L_ISPCnErrWhatToDoNext3_Text);
}

function Agent_ISPCnErrCommand_HowToTurnOffCallWaiting() 
{
        Agent_GestureAtElement(g.document.all("Callwait"),"Left");
        
        var L_ISPCnErrHowToTurnOffCallWaiting1_Text = "Bu ba�lant�y� yaparken, telefonunuzun arama bekletme hizmetini kapatmak i�in,";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting1_Text);

        var L_ISPCnErrHowToTurnOffCallWaiting2_Text = "O numaray� buraya girin.";
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

        var L_ISPCnErrHowToTurnOffCallWaiting3_Text = "Ard�ndan, Yeniden �evir'i t�klat�n.";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_HowToMoveOn() 
{
        var L_ISPCnErrHowToMoveOn1_Text = "�lerlemek i�in, yeniden ba�lanmay� ya da bu ad�m� atlamay� se�meniz gerekir.";
        Agent_Speak(L_ISPCnErrHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrHowToMoveOn2_Text = "Yeniden ba�lanmaya �al��mak i�in Yeniden �evir'i t�klat�n,";
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

        var L_ISPCnErrHowToMoveOn3_Text = "ya da yeniden denemeden ��kmak i�in Atla'y� t�klat�n.";
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

        var L_ISPHandShakeAddCommands1_Text = "�leride ne yapaca��m� &bildir";
        var L_ISPHandShakeAddCommands2_Text = "Bu ekran hakk�nda bilgi ve&r";
        var L_ISPHandShakeAddCommands3_Text = "Sonraki &ekrana gitmeyi g�ster";

        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_WhatToDoNext", L_ISPHandShakeAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_AboutThisScreen", L_ISPHandShakeAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_HowToMoveOn", L_ISPHandShakeAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPHandShakeIntro() {

}

function Agent_ISPHandShakeCommand_AboutThisScreen() 
{
        var L_ISPHandShakeIntro1_Text = "Se�ti�iniz Internet servis sa�lay�c�s�na ait yeni hesap hizmetleri �u anda kullan�lam�yor.";
        Agent_Speak(L_ISPHandShakeIntro1_Text);

        var L_ISPHandShakeIntro2_Text = "Nedenini bilmiyorum.";
        Agent_Speak(L_ISPHandShakeIntro2_Text);

        var L_ISPHandShakeIntro3_Text = "Yine de, birka� dakika bekledikten sonra yeniden �evirmeyi deneyebilirsiniz.";
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
        
        var L_ISPHandShakeIntro4_Text = "Internet servisinizi �u anda kurma i�ini atlayabilirsiniz.";
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

        var L_ISPHandShakeWhatToDoNext1_Text = "Birka� dakika bekleyip Yeniden �evir'i t�klat�n.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeWhatToDoNext2_Text = "Bunu zaten birka� kez denediyseniz,";
        Agent_Speak(L_ISPHandShakeWhatToDoNext2_Text);
        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeWhatToDoNext3_Text = "Internet servis sa�lay�c�n�z� �u anda kurmadan devam etmek i�in Atla'y� t�klatabilirsiniz.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPHandShakeCommand_HowToMoveOn() 
{
        var L_ISPHandShakeHowToMoveOn1_Text = "Birka� dakika bekleyin,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPHandShakeHowToMoveOn2_Text = "Ard�ndan yeniden ba�lanmay� denemek i�in Yeniden �evir'i t�klat�n.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeHowToMoveOn3_Text = "Ya da bunu daha �nce denediyseniz,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeHowToMoveOn4_Text = "Atla d��mesini t�klatarak, Internet hizmetini kurmadan devam edebilirsiniz.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn4_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPInsAddCommands() {

        var L_ISPInsAddCommands1_Text = "�leride ne yapaca��m� &bildir";
        var L_ISPInsAddCommands2_Text = "Bu ekran hakk�nda bilgi &ver";
        var L_ISPInsAddCommands3_Text = "Sonraki &ekrana gitmeyi g�ster";

        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_WhatToDoNext", L_ISPInsAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_AboutThisScreen", L_ISPInsAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_HowToMoveOn", L_ISPInsAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPInsIntro() {

}

function Agent_ISPInsCommand_AboutThisScreen() 
{
        var L_ISPInsIntro1_Text = "Windows, se�ti�iniz servis sa�lay�c� ile Internet'e ba�lanamad�.";
        Agent_Speak(L_ISPInsIntro1_Text);

        var L_ISPInsIntro2_Text = "Internet'e ba�lan�rken Web taray�c�n�zla ya da elektronik posta g�nderme ve almada sorunlar ya��yorsan�z,";
        Agent_Speak(L_ISPInsIntro2_Text);

        var L_ISPInsIntro3_Text = "Yard�m i�in servis sa�lay�c�n�z�n teknik deste�ini aray�n.";
        Agent_Speak(L_ISPInsIntro3_Text);
}

function Agent_ISPInsCommand_WhatToDoNext() 
{
        var L_ISPInsWhatToDoNext1_Text = "Devam etmek i�in �leri'yi t�klat�n.";
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

        var L_ISPInsHowToMoveOn1_Text = "�leri'yi t�klatman�z yeterli.";
        Agent_Speak(L_ISPInsHowToMoveOn1_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPNoAnwAddCommands() {

        var L_ISPNoAnwAddCommands1_Text = "�leride ne yapaca��m� &bildir";
        var L_ISPNoAnwAddCommands2_Text = "Telefon numaras� yanl��sa &ne yapmam gerekti�ini s�yle";
        var L_ISPNoAnwAddCommands3_Text = "Bu ekran hakk�nda bilgi &ver";
        var L_ISPNoAnwAddCommands4_Text = "Sonraki &ekrana gitmeyi g�ster";

        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoNext", L_ISPNoAnwAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect", L_ISPNoAnwAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_AboutThisScreen", L_ISPNoAnwAddCommands3_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_HowToMoveOn", L_ISPNoAnwAddCommands4_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPNoAnwCommand_AboutThisScreen() 
{
        var L_ISPNoAnwIntro1_Text = "Aramaya �al��t���m�z telefon numaras� yan�t vermedi.";
        Agent_Speak(L_ISPNoAnwIntro1_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro2_Text = "Numaran�n do�ru olup olmad���na bak�n.";
        Agent_Speak(L_ISPNoAnwIntro2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwIntro3_Text = "Tamamsa, birka� dakika bekleyin,";
        Agent_Speak(L_ISPNoAnwIntro3_Text);

        var L_ISPNoAnwIntro4_Text = "Sonra yeniden denemek i�in, Yeniden �evir'i t�klat�n.";
        Agent_Speak(L_ISPNoAnwIntro4_Text);

        var L_ISPNoAnwIntro5_Text = "Ancak numara yanl��sa,";
        Agent_Speak(L_ISPNoAnwIntro5_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro6_Text = "Buray� t�klat�p d�zenleyin.";
        Agent_Speak(L_ISPNoAnwIntro6_Text);

        Agent_Play("RestPose");

        var L_ISPNoAnwIntro7_Text = "Sonra Yeniden �evir d��mesini t�klat�n.";
        Agent_Speak(L_ISPNoAnwIntro7_Text);
}

function Agent_ISPNoAnwCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwWhatToDoNext1_Text = "Telefon numaras�n� denetlediyseniz ve do�ru g�r�n�yorsa,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwWhatToDoNext2_Text = "Yeniden ba�lanmaya �al��mak i�in haz�rs�n�z,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext2_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwWhatToDoNext3_Text = "Yeniden �evir'i t�klat�n.";
        Agent_Speak(L_ISPNoAnwWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwPhoneNumberIncorrect1_Text = "Buradaki telefon numaras� do�ru de�ilse,";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect1_Text);

        var L_ISPNoAnwPhoneNumberIncorrect2_Text = "Metin kutusunu t�klat�n.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwPhoneNumberIncorrect3_Text = "Kutuda, ekleme noktas� olarak bilinen, yan�p s�nen bir dikey �izginin g�r�nmesi gerekir.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect3_Text);

        var L_ISPNoAnwPhoneNumberIncorrect4_Text = "Yazd�klar�n�z ekleme noktas�na girilir.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect4_Text);

        var L_ISPNoAnwPhoneNumberIncorrect5_Text = "Ekleme noktas�n� klavyenizdeki Sa� ve Sol Ok tu�lar�n� kullanarak metin kutusunda ta��yabilirsiniz.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect5_Text);

        var L_ISPNoAnwPhoneNumberIncorrect6_Text = "Ekleme noktas�ndan sonraki karakterleri silmek i�in Delete tu�unu kullanabilirsiniz.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect6_Text);

        var L_ISPNoAnwPhoneNumberIncorrect7_Text = "Ekleme noktas�ndan �nceki karakterleri silmek i�in Backspace tu�unu kullan�n.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect7_Text);
}

function Agent_ISPNoAnwCommand_HowToMoveOn() 
{
        var L_ISPNoAnwHowToMoveOn1_Text = "Devam etmek i�in, yeniden ba�lanmay� ya da Internet hizmetini kurma i�ini atlaman�z gerekir.";
        Agent_Speak(L_ISPNoAnwHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwHowToMoveOn2_Text = "Yeniden ba�lanmay� denemek i�in Yeniden �evir'i t�klat�n.";
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

        var L_ISPNoAnwHowToMoveOn3_Text = "Internet hizmetini kurmadan devam etmek i�in Atla'y� t�klat�n.";
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

        var L_ISPPhBsyAddCommands1_Text = "�leride ne &yapaca��m� bildir";
        var L_ISPPhBsyAddCommands2_Text = "Telefon numaras� yanl��sa &ne yapmam gerekti�ini s�yle";
        var L_ISPPhBsyAddCommands3_Text = "&Bu a�amayla ilgili bilgi ver";

        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoNext", L_ISPPhBsyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect", L_ISPPhBsyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_AboutThisScreen", L_ISPPhBsyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPPhBsyIntro() {

}

function Agent_ISPPhBsyCommand_AboutThisScreen() 
{
        var L_ISPPhBsyIntro1_Text = "Windows, se�ti�iniz Internet servis sa�lay�c�ya ba�lanamad�.";
        Agent_Speak(L_ISPPhBsyIntro1_Text);

        var L_ISPPhBsyIntro2_Text ="Telefon hatt� me�gul olabilir ya da Internet servis sa�lay�c�da teknik sorunlar olabilir.";
        Agent_Speak(L_ISPPhBsyIntro2_Text);

        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyIntro3_Text = "Numaran�n do�ru olup olmad���na bak�n.";
        Agent_Speak(L_ISPPhBsyIntro3_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro4_Text = "Tamamsa, birka� dakika bekleyin,";
        Agent_Speak(L_ISPPhBsyIntro4_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPPhBsyIntro5_Text = "Ard�ndan yeniden �evirmeyi denemek i�in Yeniden �evir'i t�klat�n.";
        Agent_Speak(L_ISPPhBsyIntro5_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro6_Text = "Ancak numara yanl��sa,";
        Agent_Speak(L_ISPPhBsyIntro6_Text);

        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyIntro7_Text = "Telefon defterinden ba�ka bir numara denemek i�in buray� t�klat�n.";
        Agent_Speak(L_ISPPhBsyIntro7_Text);

        Agent_Play("RestPose");

        var L_ISPPhBsyIntro8_Text = "Sonra Yeniden �evir d��mesini t�klat�n.";
        Agent_Speak(L_ISPPhBsyIntro8_Text);
}

function Agent_ISPPhBsyCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyWhatToDoNext1_Text = "Telefon numaras�n� denetlediyseniz ve do�ru g�r�n�yorsa,";
        Agent_Speak(L_ISPPhBsyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");    
    
        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyWhatToDoNext2_Text = "ya da ba�ka bir numara �evirmeyi se�tiyseniz,";
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

        var L_ISPPhBsyWhatToDoNext4_Text = "Yeniden ba�lanmay� denemek i�in Yeniden �evir'i t�klat�n.";
        Agent_Speak(L_ISPPhBsyWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_ISPPhBsyPhoneNumberIncorrect1_Text = "Buradaki telefon numaras� do�ru de�ilse,";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

    var L_ISPPhBsyPhoneNumberIncorrect2_Text = "Telefon defterinde ba�ka bir numara denemek i�in bu onay d��mesini i�aretleyin.";
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

    var L_ISPPhBsyPhoneNumberIncorrect3_Text = "Yeniden ba�lanmay� denemeye haz�r oldu�unuzda Yeniden �evir'i t�klat�n.";
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

    var L_FinishAddCommands1_Text = "&Bu a�amayla ilgili bilgi ver";  
    var L_FinishAddCommands2_Text = "Masa�st�mden nas�l ka&y�t olurum?";    
    var L_FinishAddCommands3_Text = "&Windows'u masa�st�nden nas�l etkinle�tiririm?";    
    var L_FinishAddCommands4_Text = "I&nternet'e nas�l eri�irim?";    
    var L_FinishAddCommands5_Text = "&Sonra ne yapmal�y�m?";

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
    var L_FinishAboutThisStep1_Text = "Tebrikler! Bu i�lemi tamamlad�n�z!";
    Agent_Speak(L_FinishAboutThisStep1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishAboutThisStep2_Text = "Windows kullanmaya hemen ba�lamak i�in, Son d��mesini t�klatman�z yeterlidir.";
    Agent_Speak(L_FinishAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_FinishAboutThisStep3_Text = "Windows XP'nin ilgin� ve yeni �zelliklerine ��yle bir g�zatmak i�in, Ba�lat men�s�nde Yard�m ve Destek'i t�klat�p ard�ndan Arama kutusuna \"tur\" yaz�n.";
    Agent_Speak(L_FinishAboutThisStep3_Text);
}

function Agent_FinishHowToRegister() 
{
    var L_FinishHowToRegister1_Text = "Bu s�re�te kay�t olmay� daha �nce atlad�ysan�z, Windows kopyan�z� istedi�iniz zaman Ba�lat men�s�nde �al��t�r'� t�klatt�ktan sonra regwiz /r yazarak kaydettirebilirsiniz.";
    Agent_Speak(L_FinishHowToRegister1_Text);
        
    var L_FinishHowToRegister2_Text = "Bu ad�mlar� unutursan�z, sorular�n�za yan�t bulmak, benzeri �nemli bilgiyi edinmek i�in Ba�lat men�s�ndeki Yard�m ve Destek'� t�klat�n.";
    Agent_Speak(L_FinishHowToRegister2_Text);
}

function Agent_FinishHowToActivate() 
{
    var L_FinishHowToActivate1_Text = "Bu s�re�te etkinle�tirmeyi daha �nce atlad�ysan�z, Windows masa�st�nde k���k bir an�msat�c� birka� g�nde bir g�r�necektir.";
    Agent_Speak(L_FinishHowToActivate1_Text);
        
    var L_FinishHowToActivate2_Text = "Kullanmaya devam etmek i�in, Windows'u belirtilen etkinle�tirme s�resi i�inde etkinle�tirmeniz gerekir.";
    Agent_Speak(L_FinishHowToActivate2_Text);

    var L_FinishHowToActivate3_Text = "An�msat�c�y� beklemek istemiyorsan�z, Ba�lat men�s�nde Windows'u Etkinle�tir'i t�klatarak �r�n Etkinle�tirme Sihirbaz�'n� �al��t�rabilirsiniz.";
    Agent_Speak(L_FinishHowToActivate3_Text);

    var L_FinishHowToActivate4_Text = "Bu ad�mlar� unutursan�z, sorular�n�za yan�t bulmak, benzeri �nemli bilgiyi edinmek i�in Ba�lat men�s�ndeki Yard�m ve Destek'� t�klat�n.";
    Agent_Speak(L_FinishHowToActivate4_Text);
}

function Agent_FinishHowToAccessInternet() 
{
    var L_FinishHowToAccessInternet1_Text = "Bu bilgisayar� Internet'e eri�ecek bi�imde ayarlad�ysan�z, yaln�zca Windows masa�st�nde Ba�lat men�s�n�n �st k�sm�nda Internet'i t�klat�n.";
    Agent_Speak(L_FinishHowToAccessInternet1_Text);
        
    var L_FinishHowToAccessInternet2_Text = "Bu bilgisayar�n Internet eri�imi ayarlanmam��sa, Internet Ba�lant� Sihirbaz g�r�n�r.";
    Agent_Speak(L_FinishHowToAccessInternet2_Text);

    var L_FinishHowToAccessInternet3_Text = "Internet'e ba�lanmak i�in bu sihirbazdaki ad�mlar� izleyin.";
    Agent_Speak(L_FinishHowToAccessInternet3_Text);
}

function Agent_FinishWhatToDoNext() 
{
    var L_FinishWhatToDoNext1_Text = "Bilgisayar�n�zda Windows XP kurulumunu tamamlad�n�z!";
    Agent_Speak(L_FinishWhatToDoNext1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishWhatToDoNext2_Text = "Son'u t�klatman�z yeterli.";
    Agent_Speak(L_FinishWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_FinishWhatToDoNext3_Text = "Windows XP'nin ilgin� ve yeni �zelliklerine ��yle bir g�zatmak i�in, Ba�lat men�s�nde Yard�m ve Destek'i t�klat�p ard�ndan Arama kutusuna \"tur\" yaz�n.";
    Agent_Speak(L_FinishWhatToDoNext3_Text);

    var L_FinishWhatToDoNext4_Text = "Ve Windows Windows XP kullanman�n keyfini ��kar�n!";
    Agent_Speak(L_FinishWhatToDoNext4_Text);
}






function Agent_MouseTutAddCommands() {

        var L_MouseTutMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_MouseTutMenuCommand2_Text = "Bu ekran hakk�nda bilgi &ver";
        var L_MouseTutMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

        
        
        

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

        var L_MouseTutIntroTellMeWhatToDoNext1_Text = "Ba�lamak i�in, ��retici'yi t�klat�n.";
        Agent_Speak(L_MouseTutIntroTellMeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutTellMeAboutThisScreen() 
{
        var L_MouseTutTellMeAboutThisScreen1_Text = "Bu, bilgisayar�n�z�n faresini kullanmay� ��renmenize yard�mc� olmak i�in haz�rlanan ekranlar k�mesinin ilkidir.";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen1_Text);

        var L_MouseTutTellMeAboutThisScreen2_Text = "Bu ��reticide ilerlemeyi se�ebilirsiniz,";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen2_Text);

        var L_MouseTutTellMeAboutThisScreen3_Text = "�sterseniz, fareyi rahat kullan�yorsan�z ��reticiyi atlayabilirsiniz.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen1_Text = "Ba�lamak i�in, ��retici'yi t�klat�n.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text = "Bu ��reticiyi atlamak i�in �leri'yi t�klat�n.";
        Agent_Speak(L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_MouseTutAAddCommands() {

        var L_MouseTutAMenuCommand1_Text = "�leri&de ne yapaca��m� bildir";
        var L_MouseTutAMenuCommand2_Text = "Bu ekran hakk�nda &bilgi ver";
        var L_MouseTutAMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeWhatToDoNext", L_MouseTutAMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeAboutThisScreen", L_MouseTutAMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeHowToMoveToNextScreen", L_MouseTutAMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutATellMeWhatToDoNext() 
{
        var L_MouseTutAWhatToDoNext1_Text = "Fareyi dola�t�rmay� deneyip farenin i�aret�iyi ekranda nas�l hareket ettirdi�ini g�r�n.";
        Agent_Speak(L_MouseTutAWhatToDoNext1_Text);

        var L_MouseTutAWhatToDoNext2_Text = "D�z bir y�zeyde hareket edilmesini sa�lay�n.";
        Agent_Speak(L_MouseTutAWhatToDoNext2_Text);
}

function Agent_OnMouseTutATellMeAboutThisScreen() 
{

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutATellMeAboutThisScreen1_Text = "Bu ekran, ekranda i�aret�iyi hareket ettirmek i�in farenizi nas�l kullanaca��n�z� g�sterir.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutATellMeAboutThisScreen2_Text = "Bilgisayarda fareyi sa�a sola ya da ileri geri hareket ettirmeniz yeterlidir.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen2_Text);

        var L_MouseTutATellMeAboutThisScreen3_Text = "Kendiniz deneyin!";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen3_Text);
}

function Agent_OnMouseTutATellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutBAddCommands() {

        var L_MouseTutBMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_MouseTutBMenuCommand2_Text = "Bu ekran &hakk�nda bilgi ver";
        var L_MouseTutBMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeWhatToDoNext", L_MouseTutBMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeAboutThisScreen", L_MouseTutBMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeHowToMoveToNextScreen", L_MouseTutBMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutBTellMeWhatToDoNext() 
{
        var L_MouseTutBWhatToDoNext1_Text = "Fareyi al�p ba�ka bir yere hareket ettirmeyi deneyin.";
        Agent_Speak(L_MouseTutBWhatToDoNext1_Text);

        var L_MouseTutBWhatToDoNext2_Text = "�imdi a�a��ya b�rak�p yeniden dola�t�r�n.";
        Agent_Speak(L_MouseTutBWhatToDoNext2_Text);
}

function Agent_OnMouseTutBTellMeAboutThisScreen() 
{
        var L_MouseTutBTellMeAboutThisScreen1_Text = "Bu ekran size fare ekran d���na ��kt���n�zda fareyi nas�l ayarlayaca��n�z� g�sterir.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen1_Text);

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutBTellMeAboutThisScreen2_Text = "Yaln�zca fareyi yukar� kald�r�p uygun bir noktaya ta��y�n.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen2_Text);

        Agent_Play("RestPose");

        var L_MouseTutBTellMeAboutThisScreen3_Text = "Fareyi geri al�p hareket ettirdi�inizde, i�aret�i sizin hareketinizi izler.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen3_Text);

        var L_MouseTutBTellMeAboutThisScreen4_Text = "��aret�inin, fareyi yaln�zca d�z bir y�zey �zeride hareket ettirdi�inizde hareket etti�ine dikkat edin!";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutBTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutCAddCommands() {

        var L_MouseTutCMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_MouseTutCMenuCommand2_Text = "Bu ekran hak&k�nda s�yle";
        var L_MouseTutCMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeWhatToDoNext", L_MouseTutCMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeAboutThisScreen", L_MouseTutCMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeHowToMoveToNextScreen", L_MouseTutCMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_MouseTutCIntro() {
        
}

function Agent_OnMouseTutCTellMeWhatToDoNext() 
{
        var L_MouseTutCWhatToDoNext1_Text = "��aret�iyi bu ekrandaki grafik d��meleri �zerinde gezdirmek i�in fareyi hareket ettirmeyi deneyin.";
        Agent_Speak(L_MouseTutCWhatToDoNext1_Text);
}

function Agent_OnMouseTutCTellMeAboutThisScreen() 
{
        var L_MouseTutCTellMeAboutThisScreen1_Text = "Bu ekranda farenizle i�aret�iyi hareket ettirme konusunda deneyim kazanman�z sa�lan�r.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutCTellMeAboutThisScreen2_Text = "��aret�iyi bu grafik d��meleri �zerinde gezdirmek i�in farenizi kullan�n.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutCTellMeAboutThisScreen3_Text = "��aret�iyi d��menin �zerine getirdi�inizde d��menin g�r�n�m�n�n de�i�ti�ine dikkat edin!";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen3_Text);

        var L_MouseTutCTellMeAboutThisScreen4_Text = "��aret�iyi g�r�nt�s�n�n �zerinden �ekti�inizde d��me ilk g�r�n�m�ne geri d�ner.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutCTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutDAddCommands() {

        var L_MouseTutDMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_MouseTutDMenuCommand2_Text = "Bu ekran hakk�nda bilgi &ver";
        var L_MouseTutDMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeWhatToDoNext", L_MouseTutDMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeAboutThisScreen", L_MouseTutDMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeHowToMoveToNextScreen", L_MouseTutDMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutDTellMeWhatToDoNext() 
{
        var L_MouseTutDWhatToDoNext1_Text = "Farenizin sol d��mesini t�klatmay� deneyin.";
        Agent_Speak(L_MouseTutDWhatToDoNext1_Text);
}

function Agent_OnMouseTutDTellMeAboutThisScreen() 
{
        var L_MouseTutDTellMeAboutThisScreen1_Text = "Fare ��reticisinin bu k�sm�nda farenin t�klat�lmas� ��retilir.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen1_Text);

        var elem = g.document.all("image");

        Agent_MoveToElement(elem, "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen2_Text = "Ekranda bir ��eyi se�mek i�in, i�aret�iyi ��e �zerine ta��mak �zere fareyi kullan�n,";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen2_Text);

        Agent_GestureAtElement(g.document.all("image"), "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen3_Text = "Sonra burada g�rd���n�z gibi, fare d��mesine bas�p serbest b�rak�n.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutDTellMeAboutThisScreen4_Text = "Buna t�klatma denir!";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutDTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutEAddCommands() {

        var L_MouseTutEMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_MouseTutEMenuCommand2_Text = "Bu ekran hakk�nda bilgi &ver";
        var L_MouseTutEMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeWhatToDoNext", L_MouseTutEMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeAboutThisScreen", L_MouseTutEMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeHowToMoveToNextScreen", L_MouseTutEMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutETellMeWhatToDoNext() 
{
        var L_MouseTutEWhatToDoNext1_Text = "Ekrandaki grafik d��meleri �zerinde farenin sol d��mesini t�klatmay� deneyin.";
        Agent_Speak(L_MouseTutEWhatToDoNext1_Text);
}

function Agent_OnMouseTutETellMeAboutThisScreen() 
{
        var L_MouseTutETellMeAboutThisScreen1_Text = "Bu ekran, farenizle t�klat�rken deneyim kazanman�za olanak sa�lar.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutETellMeAboutThisScreen2_Text = "Bu grafik d��melerinden birini g�stermek i�in farenizi kullan�n.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutETellMeAboutThisScreen3_Text = "Sonra da sol fare d��mesini t�klat�n.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen3_Text);

        var L_MouseTutETellMeAboutThisScreen4_Text = "Daha sonra, bu i�lemi di�er grafik d��meleriyle deneyin.";
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

        var L_MouseTutFMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_MouseTutFMenuCommand2_Text = "Bu ekran hakk�nda bilgi &ver";
        var L_MouseTutFMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

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
        var L_MouseTutFTellMeAboutThisScreen1_Text = "Aferin!";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen1_Text);

        var L_MouseTutFTellMeAboutThisScreen2_Text = "�u ana kadar farenizle nas�l g�sterilece�ini ve t�klat�laca��n� ��rendiniz.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen2_Text);

        var L_MouseTutFTellMeAboutThisScreen3_Text = "�imdi ise bu ��rendiklerinizi, Windows'da ya da Web sayfalar�nda bulaca��n�z di�er ��elerle b�t�nle�tirme al��t�rmas� yapacaks�n�z.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen3_Text);

        var L_MouseTutFTellMeAboutThisScreen4_Text = "Devam etmeye haz�r oldu�unuzda �leri d��mesini t�klat�n.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutFTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutGAddCommands() {

        var L_MouseTutGMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_MouseTutGMenuCommand2_Text = "Bu ekran hak&k�nda bilgi ver";
        var L_MouseTutGMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeWhatToDoNext", L_MouseTutGMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeAboutThisScreen", L_MouseTutGMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeHowToMoveToNextScreen", L_MouseTutGMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutGPreDisplayMenu() {

        if (g.btnNext.disabled) {

                var L_MouseTutGMenuCommand4_Text = "�leri &d��mesinin neden kullan�lamaz oldu�unu s�yle";

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
        var L_MouseTutGWhyNextNotAvailable1_Text = "Hen�z bir �ehir se�medi�iniz i�in �leri d��mesi etkin de�il.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable1_Text);

		Agent_GestureAtElement(g.document.all("selCity"),"LeftCenter");

        var L_MouseTutGWhyNextNotAvailable2_Text = "�nce bu �ehirlerden birini t�klatman�z gerekir.";
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

        var L_MouseTutGWhyNextNotAvailable3_Text = "Ard�ndan devam etmek i�in �leri'yi t�klatabilirsiniz.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeWhatToDoNext() {
		
		if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "RightCenter");

        var L_MouseTutGWhatToDoNext1_Text = "�ehir listesinde yukar� a�a�� gitmek i�in otlar� kullan�n.";
        Agent_Speak(L_MouseTutGWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

		if (g.document.dir == "rtl")
			Agent_Play("RestPose");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGWhatToDoNext2_Text = "Ad�n� t�klatarak bir �ehir se�in.";
        Agent_Speak(L_MouseTutGWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutGWhatToDoNext3_Text = "Daha sonra listedeki di�er �ehirleri t�klatmay� deneyin!";
        Agent_Speak(L_MouseTutGWhatToDoNext3_Text);

        Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
}

function Agent_OnMouseTutGTellMeAboutThisScreen() {
        var L_MouseTutGTellMeAboutThisScreen1_Text = "Bu ekranda listeden bir ��e se�mek �zere t�klatma al��t�rmas� yapabilirsiniz.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGTellMeAboutThisScreen2_Text = "Listeden bir �ehir t�klatt���n�zda,";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");
		
        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("imgTable"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("imgTable"), "RightCenter");

        var L_MouseTutGTellMeAboutThisScreen3_Text = "Resmi burada g�r�n�r.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeHowToMoveToNextScreen() {

        if (g.btnNext.disabled) {

                Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

                var L_MouseTutGHowToMoveToNextScreen1_Text = "Burada bir �ehri t�klatman�z gerekiyor,";
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

                var L_MouseTutGHowToMoveToNextScreen2_Text = "Sonra �leri'yi t�klat�n.";
                Agent_Speak(L_MouseTutGHowToMoveToNextScreen2_Text);
    
                Agent_Play("RestPose");
        }

        else
                MouseTut_HowToMoveToNextScreen();

}




function Agent_MouseTutHAddCommands() {

        var L_MouseTutHMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_MouseTutHMenuCommand2_Text = "Bu e&kran hakk�nda bilgi ver";
        var L_MouseTutHMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeWhatToDoNext", L_MouseTutHMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeAboutThisScreen", L_MouseTutHMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeHowToMoveToNextScreen", L_MouseTutHMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutHTellMeWhatToDoNext() {

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHWhatToDoNext1_Text = "Yan�ndaki daireyi t�klatarak se�eneklerden birini se�in.";
        Agent_Speak(L_MouseTutHWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutHWhatToDoNext2_Text = "Bu i�lem, resmin g�r�n�m�n� de�i�tirir.";
        Agent_Speak(L_MouseTutHWhatToDoNext2_Text);

        var L_MouseTutHWhatToDoNext3_Text = "Daha sonra di�er se�ene�i t�klatmay� deneyin!";
        Agent_Speak(L_MouseTutHWhatToDoNext3_Text);
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeAboutThisScreen() {
        var L_MouseTutHTellMeAboutThisScreen1_Text = "Bu ekranda, bir defada yaln�zca tek bir se�enek ayarlanabildi�i zaman nas�l se�im yap�laca��n� deneyebilirsiniz.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHTellMeAboutThisScreen2_Text = "Buradaki daireleri t�klatt���n�zda,";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("cityImg"), "LeftCenter");
        else
			Agent_GestureAtElement(g.document.all("cityImg"), "RightCenter");

        var L_MouseTutHTellMeAboutThisScreen3_Text = "Resmin buradaki g�r�n�m�n� de�i�tirir.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutIAddCommands() {

        var L_MouseTutIMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_MouseTutIMenuCommand2_Text = "Bu ekran hakk�nda bilgi &ver";
        var L_MouseTutIMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeWhatToDoNext", L_MouseTutIMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeAboutThisScreen", L_MouseTutIMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeHowToMoveToNextScreen", L_MouseTutIMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutITellMeWhatToDoNext() {

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutIWhatToDoNext1_Text = "Buradaki se�eneklerden birini ya da daha fazlas�n� t�klat�p resimdeki etkisini izleyin.";
        Agent_Speak(L_MouseTutIWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutIWhatToDoNext2_Text = "Se�imi temizlemek i�in yeniden bir se�enek t�klat�n.";
        Agent_Speak(L_MouseTutIWhatToDoNext2_Text);

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeAboutThisScreen() {
        var L_MouseTutITellMeAboutThisScreen1_Text = "Bazen bir se�im k�mesi i�inde birden �ok se�im yapabilirsiniz.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen1_Text);

        var L_MouseTutITellMeAboutThisScreen2_Text = "Bu ekranda, resminiz i�in farkl� g�r�nt� stilleri se�ebilirsiniz.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen2_Text);

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutITellMeAboutThisScreen3_Text = "Yaln�zca buradaki se�eneklerin yan�ndaki kutular� t�klatman�z yeterli.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutJAddCommands() {

        var L_MouseTutJMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_MouseTutJMenuCommand2_Text = "Bu ekran hakk�nda bilgi &ver";
        var L_MouseTutJMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

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

        var L_MouseTutJWhatToDoNext1_Text = "Buradaki kutuyu t�klat�n,";
        Agent_Speak(L_MouseTutJWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutJWhatToDoNext2_Text = "Ba�l�k olarak g�r�nmesini istedi�iniz metni yaz�n.";
        Agent_Speak(L_MouseTutJWhatToDoNext2_Text);
}

function Agent_OnMouseTutJTellMeAboutThisScreen() {
        var L_MouseTutJTellMeAboutThisScreen1_Text = "Bazen se�ene�i kendi s�zc�klerinizle ki�iselle�tirebilirsiniz.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen1_Text);

        var L_MouseTutJTellMeAboutThisScreen2_Text = "Bu ekranda, resminiz i�in bir ba�l�k yazabilirsiniz.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen2_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(g.document.all("caption"), "Left");
		else
			Agent_GestureAtElement(g.document.all("CaptionLabel"), "Left");

        var L_MouseTutJTellMeAboutThisScreen3_Text = "Yaln�zca buradaki kutuyu t�klat�n ve ba�l���n�z� yaz�n.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutJTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutKAddCommands() {

        var L_MouseTutKMenuCommand1_Text = "�leride ne yapaca��m� &bildir";
        var L_MouseTutKMenuCommand2_Text = "Bu ekran hakk�nda bilgi &ver";
        var L_MouseTutKMenuCommand3_Text = "Sonraki &ekrana gitmeyi g�ster";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeWhatToDoNext", L_MouseTutKMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeAboutThisScreen", L_MouseTutKMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeHowToMoveToNextScreen", L_MouseTutKMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutKTellMeWhatToDoNext() {
        var L_MouseTutKWhatToDoNext1_Text = "Kutlar�z! Fare ��reticisini tamamlad�n�z!";
        Agent_Speak(L_MouseTutKWhatToDoNext1_Text);

        var L_MouseTutKWhatToDoNext2_Text = "Sonraki ekrana ge�mek i�in �leri'yi t�klat�n.";
        Agent_Speak(L_MouseTutKWhatToDoNext2_Text);
}

function Agent_OnMouseTutKTellMeAboutThisScreen() {
        var L_MouseTutKTellMeAboutThisScreen1_Text = "Aferin! Tatil resminiz bitti!";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen1_Text);
        
        var L_MouseTutKTellMeAboutThisScreen2_Text = "Fare ��reticisini tamamlad�n�z.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen2_Text);

        var L_MouseTutKTellMeAboutThisScreen3_Text = "S�r�kleme, yeniden boyutland�rma ve sa� fare d��mesini kullanma becerilerini kapsayan daha ayr�nt�l� bir fare ��reticisi i�in Windows ilk ba�lad���nda gelen Yard�m'a bak�n.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutKTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function MouseTut_WhatToDoNext() 
{
        var L_MouseTutTellMeWhatToDoNext1_Text = "Sonraki ekrana ilerlemek i�in �leri d��mesini t�klat�n,";
        Agent_Speak(L_MouseTutTellMeWhatToDoNext1_Text);

        var L_MouseTutTellMeWhatToDoNext2_Text = "Bu ��reticinin kalan k�sm�n� atlamak i�in Atla'y� t�klat�n.";
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

        var L_MouseTutTellMeHowToMoveToNextScreen1_Text = "Sonraki ekrana ge�mek i�in �leri'yi";
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

        var L_MouseTutTellMeHowToMoveToNextScreen2_Text = "ya da bu ��reticiyi ge�mek i�in Atla'y� t�klat�n.";
        Agent_Speak(L_MouseTutTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_2nicsAddCommands() 
{
    var L_2nicsMenuCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    
    g_AgentCharacter.Commands.Add("Agent_On2nicsAboutThisStep", L_2nicsMenuCommand1_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_On2nicsAboutThisStep() 
{
    var L_2nicsAboutThisScreen1_Text = "Bu ekranda, bilgisayar�n�z� Internet'e ba�lamak i�in birden �ok olas� yol bulundu�u a��klanmaktad�r.";
	Agent_Speak(L_2nicsAboutThisScreen1_Text);
	
    var L_2nicsAboutThisScreen2_Text = "Windows kurulumunu tamamlad�ktan sonra hangi ba�lant�y� kullanmak istedi�inizi se�ebilirsiniz.";
	Agent_Speak(L_2nicsAboutThisScreen2_Text);
}



function Agent_UserNameAddCommands() 
{
    var L_UserNameCommand1_Text = "&Bu a�amayla ilgili bilgi ver";
    var L_UserNameCommand2_Text = "&Ad�m nerede g�r�necek?";
    var L_UserNameCommand3_Text = "Ad�m� daha &sonra nas�l de�i�tirebilirim?";
    var L_UserNameCommand4_Text = "&Sonra ne yapmal�y�m?";
    
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
    var L_UserNameAboutThisStep1_Text = "Buras�, oturum a�arken Windows'un sizi tan�yabilmesi i�in ad�n�z ve soyad�n�zla kendinizi tan�mlad���n�z ekrand�r.";
	Agent_Speak(L_UserNameAboutThisStep1_Text);
}

function Agent_OnUserNameWhereIsName() 
{
    var L_UserNameWhereIsName1_Text = "Ad�n�z, Windows'u ba�lat�rken g�r�nen Kar��lama ekran�nda g�r�n�r.";
	Agent_Speak(L_UserNameWhereIsName1_Text);
	
    var L_UserNameWhereIsName2_Text = "Ayr�ca, oturum a�arken Ba�lat men�s�n�n �st k�sm�nda g�r�n�r.";
	Agent_Speak(L_UserNameWhereIsName2_Text);
	
    var L_UserNameWhereIsName3_Text = "Ba�ka bir ki�i bilgisayar�n�zda oturum a�ar ve Belgelerim klas�r�n�z� a�arsa, ad�n�z klas�r ad�nda g�r�n�r.";
	Agent_Speak(L_UserNameWhereIsName3_Text);
	
    var L_UserNameWhereIsName4_Text = "�rne�in, klas�r \"Gamze'nin Belgeleri\" bi�iminde g�r�n�r, b�ylece di�er kullan�c�lar bu klas�r�n size ait oldu�unu bilebilir.";
	Agent_Speak(L_UserNameWhereIsName4_Text);
	
    var L_UserNameWhereIsName5_Text = "Ba�lat men�s�nde Denetim Masas�'n� t�klat�p ard�ndan Kullan�c� Hesaplar�'n� t�klatt���n�zda, ad�n�z kullan�c�lar listesinde de g�r�n�r.";
	Agent_Speak(L_UserNameWhereIsName5_Text);
}

function Agent_OnUserNameHowToChangeName() 
{
    var L_UserNameHowToChangeName1_Text = "Windows'da oturum a�t�ktan sonra ad�n�z� de�i�tirmek i�in, Ba�lat men�s�nde Denetim Masas�'n� t�klat�n.";
	Agent_Speak(L_UserNameHowToChangeName1_Text);
	
    var L_UserNameHowToChangeName2_Text = "Ard�ndan Kullan�c� Hesaplar�'n� t�klat�n.";
	Agent_Speak(L_UserNameHowToChangeName2_Text);
	
    var L_UserNameHowToChangeName3_Text = "Kendi ad�n�z�n yan� s�ra bu bilgisayardaki di�er kullan�c�lar�n adlar�n� da de�i�tirebilirsiniz.";
	Agent_Speak(L_UserNameHowToChangeName3_Text);
}

function Agent_OnUserNameWhatToDoNext() 
{
    var L_UserNameWhatToDoNext1_Text = "Internet'e yeniden ba�lanmay� denemek i�in, �leri d��mesini t�klat�n.";
	Agent_Speak(L_UserNameWhatToDoNext1_Text);
	
    var L_UserNameWhatToDoNext2_Text = "Ya da Internet'e ba�lanmadan devam etmek i�in, Atla d��mesini t�klat�n.";
	Agent_Speak(L_UserNameWhatToDoNext2_Text);
}
