



var L_PhoneNumberLegit_Text = "\\map=\"ένα \\pau=100\\ οκτακόσια R U le jit\"=\"1-800-R U LEGIT\"\\";


var g_strRegionSetting = "";
var g_strKeyboardSetting = "";
var g_strLangSetting = " ";



function Agent_AddCommonCommands() 
{
    g_AgentCharacter.Commands.RemoveAll();

    var L_AddCommonCommands1_Text = "&Κλείσιμο μενού";

    g_AgentCharacter.Commands.Add("CloseMenu", L_AddCommonCommands1_Text);
        
    if (g_bAgentShowSpecialISPCommands) 
    {
        
		var L_AddCommonCommands2_Text = "Π&ληροφορίες για την εγγραφή στο Internet";
		var L_AddCommonCommands3_Text = "Επανάλη&ψη εγγραφής στο Internet";
		var L_AddCommonCommands4_Text = "&Παράλειψη της εγγραφής στο Internet";

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
        var L_AddAssistantanceCommand1_Text = "Πώς μπορώ να πάρω περισσότερη &βοήθεια;";       

        g_AgentCharacter.Commands.Add("Agent_OnCommand_AboutAssistance", L_AddAssistantanceCommand1_Text);
    }
}

function Agent_OnCommand_AboutAssistance() 
{

    Agent_StopAll();

    var L_AboutAssistance1_Text = "Επικοινωνήστε με τον κατασκευαστή του υπολογιστή σας στο %s.";
    var re = /%s/i;
    var L_AboutAssistance2_Text = "Επικοινωνήστε με τον κατασκευαστή του υπολογιστή σας.";

    
    

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
            Agent_Speak(L_AboutAssistance2_Text);
    else
            Agent_Speak(L_AboutAssistance1_Text.replace(re, strPhoneNumber));

    Agent_Play("ReadReturn");
}

function Agent_AddWhatToDoNextCommand() 
{
    var L_AddWhatToDoNextCommand1_Text = "Τι πρέπει να κάνω στη &συνέχεια;";
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

        var L_WhatToDoNext1_Text = "Για να συνεχίσετε, κάντε κλικ στο κουμπί \"Επόμενο\".";
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

        var L_WhatToDoNext2_Text = "Για να επιστρέψετε στο προηγούμενο βήμα, κάντε κλικ στο κουμπί \"Προηγούμενο\".";
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

        var L_WhatToDoNext3_Text = "Μπορείτε επίσης να παραλείψετε ολόκληρο αυτό το βήμα κάνοντας κλικ στο κουμπί \"Παράλειψη\".";
        Agent_Speak(L_WhatToDoNext3_Text);
        
        Agent_Play("RestPose");
    }       
}

function Agent_DoSpecialISPCommand1() 
{
	
	
			
	Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
			
	var L_ISPSpecialTellMeAboutInternetSignup1_Text = "Αυτήν τη στιγμή βρίσκεστε στη διαδικασία εγγραφής για πρόσβαση στο Internet.";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup1_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup2_Text = "Εάν έχετε πρόβλημα να συνεχίσετε, κάντε κλικ εδώ ή πατήστε το πλήκτρο F1";
	Agent_Speak(L_ISPSpecialTellMeAboutInternetSignup2_Text);
			
	var L_ISPSpecialTellMeAboutInternetSignup3_Text = "και θα εμφανιστούν εντολές στο μενού, τις οποίες μπορείτε να επιλέξετε για να ξεκινήσετε πάλι ή να μεταβείτε στην επόμενη ενότητα.";
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

    var L_EncourageNextButton1_Text = "Κάντε κλικ στο κουμπί \"Επόμενο\". | Απλώς κάντε κλικ στο κουμπί \"Επόμενο\"! | Επιλέξτε το κουμπί \"Επόμενο\". | Κάντε κλικ στο κουμπί \"Επόμενο\" για να προχωρήσετε στο επόμενο βήμα.";
    Agent_Speak(L_EncourageNextButton1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnF1() 
{
    var L_OnF1_Text = "Πώς μπορώ να σας βοηθήσω; | Πώς μπορώ να σας εξυπηρετήσω;";
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

    var L_PreWelcomeScript1_Text = "Καλώς ορίσατε στα Windows XP";
    Agent_Speak(L_PreWelcomeScript1_Text);

    var L_PreWelcomeScript2_Text = "Είμαι εδώ για να σας βοηθήσω να ρυθμίσετε τον υπολογιστή σας.";
    Agent_Speak(L_PreWelcomeScript2_Text);

    var L_PreWelcomeScript3_Text = "Μπορώ να δίνω εξηγήσεις καθώς προχωράτε.";
    Agent_Speak(L_PreWelcomeScript3_Text);
                
    Agent_MoveToElement(document.all("AssistImg"), "LeftCenter"); 
    
    

    var L_PreWelcomeScript4_Text = "Όποτε χρειάζεστε βοήθεια, απλώς κάντε κλικ στην εικόνα μου με το ποντίκι ή πιέστε το πλήκτρο F1.";
    Agent_Speak(L_PreWelcomeScript4_Text);
    
    Agent_Play("PointLeft");

    var L_PreWelcomeScript5_Text = "Θα βρίσκομαι εδώ εάν με χρειαστείτε.";
    Agent_Speak(L_PreWelcomeScript5_Text);
    
    Agent_Play("RestPose");

    g_AgentRequestHideImage = g_AgentCharacter.Hide();
}



function Agent_WelcomeAddCommands() 
{
    
    
    

    var L_WelcomeAddCommands1_Text = "Πληροφορίες για αυτήν την &ενέργεια";
    var L_WelcomeAddCommands2_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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

    var L_WelcomeWhatToDoNext1_Text = "Εάν είστε έτοιμοι να ξεκινήσετε, κάντε κλικ στο κουμπί \"Επόμενο\".";
    Agent_Speak(L_WelcomeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnWelcomeCommand_AboutProcess() 
{
    Agent_StopAll();

    var L_AboutProcess1_Text = "Αυτή που βλέπετε πίσω μου είναι η πρώτη από μια σειρά οθονών που έχουν σχεδιαστεί για να σας βοηθήσουν να ρυθμίσετε τον υπολογιστή σας όπως θέλετε.";
    Agent_Speak(L_AboutProcess1_Text);

    var L_AboutProcess2_Text = "Κάθε οθόνη θα σας ζητήσει να κάνετε μια επιλογή ή να πληκτρολογήσετε μερικές πληροφορίες ή θα σας συμβουλεύσει για την επόμενη ενέργειά σας.";
    Agent_Speak(L_AboutProcess2_Text);

    var L_AboutProcess3_Text = "Αυτή είναι μια γρήγορη επισκόπηση των βημάτων που θα κάνουμε τα επόμενα λίγα λεπτά:";
    Agent_Speak(L_AboutProcess3_Text);

    var L_AboutProcess4_Text = "Πρώτα, θα βεβαιωθούμε ότι το υλικό του υπολογιστή σας, όπως ηχεία, πληκτρολόγιο και ρολόι, λειτουργεί κανονικά.";
    Agent_Speak(L_AboutProcess4_Text);

    var L_AboutProcess5_Text = "Θα βεβαιωθούμε επίσης ότι ο υπολογιστής σας είναι σωστά συνδεδεμένος σε ένα δίκτυο αν το θέλετε.";
    Agent_Speak(L_AboutProcess5_Text);


    var L_AboutProcess6_Text = "Δεύτερον, θα διαβάσουμε την άδεια χρήσης που περιγράφει τους όρους χρήσης του %1.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess6_Text, g_ProductName));
    
    if (!window.external.get_RetailOOBE()) 
    {
    var L_AboutProcess7_Text = "Αν ο υπολογιστής έχει ένα ενεργό μόντεμ ή σύνδεση δικτύου, θα έχετε την επιλογή εγγραφής στη Microsoft και %1 για να σας στείλουμε πληροφορίες σχετικά με ενημερωμένες εκδόσεις προϊόντων και προσφορές που ενδεχομένως να σας ενδιαφέρουν.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess7_Text, g_OEMNameStr));
    } 
    else 
    {    
    var L_AboutProcess7_Text = "Εάν ο υπολογιστής σας έχει μόντεμ σε λειτουργία ή σύνδεση με δίκτυο, έχετε τη δυνατότητα να εγγραφείτε ως νόμιμος χρήστης στη Microsoft, έτσι ώστε να μπορούμε να σας στέλνουμε πληροφορίες για ενημερωμένες εκδόσεις προϊόντων και προσφορές που πιθανόν να σας ενδιαφέρουν.";
    Agent_Speak(L_AboutProcess7_Text);
    }       

    var L_AboutProcess8_Text = "Επίσης θα έχετε την επιλογή να επαληθεύσετε την αυθεντικότητα του %1, για να είστε βέβαιοι ότι χρησιμοποιείτε ένα νόμιμο αντίγραφο.";
    Agent_Speak(ApiObj.FormatMessage(L_AboutProcess8_Text, g_ProductName));

    var L_AboutProcess9_Text = "Τρίτον, θα σας βοηθήσω, αν θέλετε, να συνδεθείτε στο Internet.";
    Agent_Speak(L_AboutProcess9_Text); 

    var L_AboutProcess10_Text = "Αν επιλέξετε να παραλείψετε αυτό το βήμα, μπορείτε πάντα να συνδεθείτε μόνοι σας αργότερα.";
    Agent_Speak(L_AboutProcess10_Text);

    var L_AboutProcess11_Text = "Και τέταρτον, θα σας βοηθήσω να προσαρμόσετε αυτόν τον υπολογιστή για κάθε άτομο που θα τον χρησιμοποιήσει. ";
    Agent_Speak(L_AboutProcess11_Text);

    var L_AboutProcess12_Text = "Αυτό είναι! Δεν έχουμε πολλά να κάνουμε, ας ξεκινήσουμε λοιπόν!";
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

    var L_AboutProcess13_Text = "Για να ξεκινήσετε, κάντε κλικ στο κουμπί \"Επόμενο\".";
    Agent_Speak(L_AboutProcess13_Text);
    
    Agent_Play("RestPose");
}


                                                       

function Agent_TimeZoneAddCommands() 
{
    var L_TimeZoneCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_TimeZoneCommand2_Text = "Πώς επιλέγω τη &ζώνη ώρας μου;";

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
        var L_TimeZoneMenuCommand3_Text = "&Τι είναι η θερινή ώρα;";

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
    var L_ExplainTimeZoneStep1_Text = "Πείτε μας σε ποια ζώνη ώρας πρόκειται να χρησιμοποιήσετε τον υπολογιστή σας και τα Windows θα ρυθμίσουν ανάλογα το ρολόι του υπολογιστή σας.";
    Agent_Speak(L_ExplainTimeZoneStep1_Text);

    var L_ExplainTimeZoneStep2_Text = "Και, αν θέλετε, τα Windows μπορούν να ενημερώνουν αυτόματα το ρολόι για τη θερινή ώρα.";
    Agent_Speak(L_ExplainTimeZoneStep2_Text);

    var L_ExplainTimeZoneStep3_Text = "Αυτό είναι το τελευταίο βήμα που αφορά το υλικό σας.";
    Agent_Speak(L_ExplainTimeZoneStep3_Text);

    var L_ExplainTimeZoneStep4_Text = "Στη συνέχεια, θα πάμε στην άδεια χρήσης.";
    Agent_Speak(L_ExplainTimeZoneStep4_Text);
    
}

function Agent_OnTimeZoneCommand_SelectZone() 
{
    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone1_Text = "Οι ζώνες ώρας σε αυτήν τη λίστα εμφανίζονται ως Μέση ώρα Γκρίνουιτς, ή GMT, συν ή πλην έναν αριθμό ωρών.";
    Agent_Speak(L_TellUserHowToSelectTimeZone1_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Left");

    var L_TellUserHowToSelectTimeZone2_Text = "Κάντε κλικ εδώ ή πιέστε το πλήκτρο Tab στο πληκτρολόγιό σας για να φτάσετε εκεί. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone2_Text);
    
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.document.all("selTimeZone"),"Right");

    var L_TellUserHowToSelectTimeZone3_Text = "Κατόπιν κάντε κλικ στα μικρά κουμπιά με τα βέλη ή χρησιμοποιήστε τα πλήκτρα βέλους προς τα επάνω και κάτω στο πληκτρολόγιό σας, για να μετακινηθείτε μέσα στη λίστα που περιέχει τις ζώνες ώρας. ";
    Agent_Speak(L_TellUserHowToSelectTimeZone3_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone4_Text = "Όταν βρείτε τη ζώνη ώρας που θέλετε, κάντε κλικ πάνω της ή πιέστε το πλήκτρο Enter στο πληκτρολόγιό σας.";
    Agent_Speak(L_TellUserHowToSelectTimeZone4_Text);

    var L_TellUserHowToSelectTimeZone5_Text = "Η ζώνη ώρας που επιλέξαταε θα επισημανθεί.";
    Agent_Speak(L_TellUserHowToSelectTimeZone5_Text);

    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserHowToSelectTimeZone6_Text = "Εάν ζείτε σε μια περιοχή όπου ισχύει η θερινή/χειμερινή ώρα, τοποθετήστε το δείκτη του ποντικιού εδώ και κάντε κλικ μία φορά, για να ενεργοποιήσετε αυτή την επιλογή.";
    Agent_Speak(L_TellUserHowToSelectTimeZone6_Text);
    
    Agent_Play("RestPose");

    var L_TellUserHowToSelectTimeZone7_Text = "Τα Windows θα ρυθμίζουν αυτόματα το ρολόι του υπολογιστή σας δύο φορές το χρόνο.";
    Agent_Speak(L_TellUserHowToSelectTimeZone7_Text);
    
}

function Agent_OnTimeZoneCommand_DaylightSavings() 
{
    Agent_GestureAtElement(g.document.all("daylight"),"Left");

    var L_TellUserAboutDaylightOption1_Text = "Σε ορισμένες ζώνες ώρας τα ρολόγια ρυθμίζονται μπροστά και πίσω κατά τη διάρκεια ορισμένων εποχών του έτους, ώστε να προσαρμόζονται στις διαφορές του φωτός της ημέρας.";
    Agent_Speak(L_TellUserAboutDaylightOption1_Text);
    
    Agent_Play("RestPose");

    var L_TellUserAboutDaylightOption2_Text = "Αν θέλετε τα Windows να ρυθμίσουν αυτόματα το ρολόι του υπολογιστή σας όταν συμβαίνει αυτό, επιλέξτε αυτήν την επιλογή τοποθετώντας το δείκτη εδώ και κάνοντας κλικ μία φορά.";
    Agent_Speak(L_TellUserAboutDaylightOption2_Text);

}



function Agent_OEMHWAddCommands() 
{
    var L_OEMHWMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_OEMHWMenuCommand2_Text = "Πώς &ξέρω αν το σύστημα ήχου μου λειτουργεί;";
    var L_OEMHWMenuCommand3_Text = "&Τι γίνεται αν ο ήχος μου δεν λειτουργεί;";
    var L_OEMHWMenuCommand4_Text = "Πώς &δηλώνω την απάντησή μου;";

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
    var L_OEMHWAboutThisScreen1_Text = "Αυτή είναι η οθόνη όπου επιβεβαιώνετε ότι το σύστημα ήχου του υπολογιστή σας λειτουργεί.";
	  Agent_Speak(L_OEMHWAboutThisScreen1_Text);

    var L_OEMHWAboutThisScreen2_Text = "Το σύστημα ήχου αποτελείται από τα ηχεία σας, μια κάρτα ήχου μέσα στον υπολογιστή σας και το λογισμικό %1, το οποίο σας επιτρέπει να αναπαράγετε τον ήχο.";
	  Agent_Speak(ApiObj.formatMessage(L_OEMHWAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnOEMHWHowDoIKnow() 
{
    var L_OEMHWHowDoIKnow1_Text = "Αν αυτήν τη στιγμή ακούτε έναν ήχο, τότε λειτουργεί.";
	  Agent_Speak(L_OEMHWHowDoIKnow1_Text);

    var L_OEMHWHowDoIKnow2_Text = "Αν δεν ακούτε έναν ήχο, ελέγξτε πρώτα την ένταση των ηχείων για να βεβαιωθείτε ότι δεν είναι πολύ χαμηλή.";
	  Agent_Speak(L_OEMHWHowDoIKnow2_Text);

    var L_OEMHWHowDoIKnow3_Text = "Αν αυτό δεν διορθώσει την κατάσταση, θα ερευνήσουμε άλλες δυνατότητες.";
	  Agent_Speak(L_OEMHWHowDoIKnow3_Text);
}

function Agent_OnOEMHWIsNotWorking() 
{
    var L_OEMHWIsNotWorking1_Text = "Πρώτα, βεβαιωθείτε ότι τα ηχεία σας είναι ανοιχτά.";
	  Agent_Speak(L_OEMHWIsNotWorking1_Text);
	
    var L_OEMHWIsNotWorking2_Text = "Μερικά ηχεία έχουν ένα λαμπάκι ένδειξης λειτουργίας.";
	  Agent_Speak(L_OEMHWIsNotWorking2_Text);

    var L_OEMHWIsNotWorking3_Text = "Δεύτερον, βεβαιωθείτε ότι είναι ρυθμισμένα σε ένταση που μπορείτε να ακούσετε.";
	  Agent_Speak(L_OEMHWIsNotWorking3_Text);

    var L_OEMHWIsNotWorking4_Text = "Αν ακόμα δεν ακούτε ήχο από αυτά...";
	  Agent_Speak(L_OEMHWIsNotWorking4_Text);

    var L_OEMHWIsNotWorking5_Text = "Τρίτο, βεβαιωθείτε ότι τα ηχεία είναι συνδεδεμένα σε μια πρίζα τροφοδοσίας και ότι είναι σωστά συνδεδεμένα στον υπολογιστή σας.";
	  Agent_Speak(L_OEMHWIsNotWorking5_Text);
	
	  var L_OEMHWIsNotWorking6_Text = "Είναι εύκολο να μπερδέψετε την υποδοχή μικροφώνου του υπολογιστή σας με την υποδοχή ηχείων.";
	  Agent_Speak(L_OEMHWIsNotWorking6_Text);

    var L_OEMHWIsNotWorking7_Text = "Τέταρτον, αν έχετε σετ στερεοφωνικών ηχείων, βεβαιωθείτε ότι είναι συνδεδεμένα μεταξύ τους.";
	  Agent_Speak(L_OEMHWIsNotWorking7_Text);

    var L_OEMHWIsNotWorking8_Text = "Τέλος, αν ακόμα δεν ακούτε ήχο, δανειστείτε ένα σετ ηχείων από έναν άλλον υπολογιστή.";
	  Agent_Speak(L_OEMHWIsNotWorking8_Text);

    var L_OEMHWIsNotWorking9_Text = "Εάν τα ηχεία που δανειστήκατε λειτουργούν, αλλά τα δικά σας όχι, τότε θα χρειαστεί να αντικαταστήσετε ή να επισκευάσετε τα ηχεία σας.";
	  Agent_Speak(L_OEMHWIsNotWorking9_Text);
}

function Agent_OnOEMHWIndicateAnswer() 
{
	  Agent_GestureAtElement(g.document.all("Sound_Yes"), "Left");
    
    var L_OEMHWIndicateAnswer1_Text = "Απλώς τοποθετήστε τον δείκτη του ποντικιού στον λευκό κύκλο στα αριστερά της απάντησής σας,";
	  Agent_Speak(L_OEMHWIndicateAnswer1_Text);
    
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("radioNoSound"), "Left");

    var L_OEMHWIndicateAnswer2_Text = "και κάντε κλικ μία φορά.";
	  Agent_Speak(L_OEMHWIndicateAnswer2_Text);
    
    Agent_Play("RestPose");

    var L_OEMHWIndicateAnswer3_Text = "Εάν θέλετε να χρησιμοποιήσετε το πληκτρολόγιο για να απαντήσετε, πιέστε το πλήκτρο Tab μέχρι να εμφανιστεί ένα αμυδρό ορθογώνιο γύρω από τον λευκό κύκλο του πεδίου που θέλετε να συμπληρώσετε και πιέστε το πλήκτρο διαστήματος.";
	  Agent_Speak(L_OEMHWIndicateAnswer3_Text);
}




function Agent_CompNameAddCommands() 
{
    var L_CompNameMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_CompNameMenuCommand2_Text = "Πώς &μετονομάζω τον υπολογιστή αργότερα;";

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
    var L_CompNameAboutThisScreen1_Text = "Αυτή είναι η οθόνη όπου δίνετε στον υπολογιστή σας ένα όνομα.";
	  Agent_Speak(L_CompNameAboutThisScreen1_Text);

    var L_CompNameAboutThisScreen2_Text = "Με αυτό το όνομα ο υπολογιστής σας αναγνωρίζεται από άλλους χρήστες, εάν ο υπολογιστής είναι συνδεδεμένος με άλλους υπολογιστές σε δίκτυο.";
	  Agent_Speak(L_CompNameAboutThisScreen2_Text);
}

function Agent_OnCompNameHowToRename() 
{
    var L_CompNameHowToRename1_Text = "Αφού τελειώσετε την εγκατάσταση των Windows, κάντε κλικ στην επιλογή \"Πίνακας Ελέγχου\" στο μενού \"Έναρξη\".";
	  Agent_Speak(L_CompNameHowToRename1_Text);

    var L_CompNameHowToRename2_Text = "Κάντε κλικ στο εικονίδιο \"Σύστημα\" στην περιοχή \"Επιδόσεις και συντήρηση\" και ακολουθήστε τις οδηγίες που εμφανίζονται στην καρτέλα \"Όνομα υπολογιστή\".";
	  Agent_Speak(L_CompNameHowToRename2_Text);

    var L_CompNameHowToRename3_Text = "Εάν ξεχάσετε αυτά τα βήματα, κάντε κλικ στην επιλογή \"Βοήθεια και Υποστήριξη\" στο μενού \"Έναρξη\", για να βρείτε τις απαντήσεις στις απορίες σας, καθώς και άλλες πολύτιμες πληροφορίες.";
	  Agent_Speak(L_CompNameHowToRename3_Text);
}




function Agent_SECURITYPASSAddCommands() 
{
    var L_SECURITYPASSMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_SECURITYPASSMenuCommand2_Text = "Ποιος είναι ο καλύτερος τρόπος &δημιουργίας ενός κωδικού πρόσβασης;";

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
    var L_SECURITYPASSAboutThisScreen1_Text = "Σε αυτό το παράθυρο διαλόγου δημιουργείτε έναν κωδικό πρόσβασης, εάν θέλετε να προστατεύσετε τον υπολογιστή από μη εξουσιοδοτημένη πρόσβαση.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen1_Text);

    var L_SECURITYPASSAboutThisScreen2_Text = "Σημειώστε αυτό: εάν αυτός ο υπολογιστής είναι συνδεδεμένος με άλλους υπολογιστές σε δίκτυο, ο χρήστης που θα συνδεθεί με το όνομα χρήστη \"Administrator\" και τον έγκυρο κωδικό πρόσβασης θα έχει πρόσβαση σε ολόκληρο το δίκτυο.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen2_Text);
    
    var L_SECURITYPASSAboutThisScreen3_Text = "Για αυτόν το λόγο συνιστάται ιδιαίτερα να ζητήσετε έναν κωδικό πρόσβασης διαχειριστή για να προστατεύσετε τον υπολογιστή σας - και το δίκτυό σας, εάν έχετε.";
	  Agent_Speak(L_SECURITYPASSAboutThisScreen3_Text);
}

function Agent_OnSECURITYPASSBestWay() 
{
    var L_SECURITYPASSBestWay1_Text = "Για να ενισχύσετε την ασφάλεια ενός κωδικού πρόσβασης, θα πρέπει να περιλαμβάνει τουλάχιστον δύο από τα στοιχεία αυτά: κεφαλαία γράμματα, πεζά γράμματα και αριθμούς.";
	  Agent_Speak(L_SECURITYPASSBestWay1_Text);

    var L_SECURITYPASSBestWay2_Text = "Επίσης, όσο πιο τυχαία είναι η ακολουθία χαρακτήρων, τόσο ασφαλέστερος είναι ο κωδικός πρόσβασης.";
	  Agent_Speak(L_SECURITYPASSBestWay2_Text);

    var L_SECURITYPASSBestWay3_Text = "Οι κωδικοί πρόσβασης μπορούν να έχουν μήκος έως 127 χαρακτήρες.";
	  Agent_Speak(L_SECURITYPASSBestWay3_Text);
    
    var L_SECURITYPASSBestWay4_Text = "Αν όμως χρησιμοποιείτε τα Windows σε δίκτυο που έχει και υπολογιστές με Windows 95 ή Windows 98 και θέλετε να έχετε τη δυνατότητα σύνδεσης στο δίκτυο από αυτούς τους υπολογιστές, μην χρησιμοποιείτε κωδικούς πρόσβασης που έχουν περισσότερους από 14 χαρακτήρες.";
	  Agent_Speak(L_SECURITYPASSBestWay4_Text);
}



function Agent_JOINDOMAINAddCommands() 
{
    var L_JOINDOMAINMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_JOINDOMAINMenuCommand2_Text = "Τι είναι ένας &τομέας;";
    var L_JOINDOMAINMenuCommand3_Text = "Πώς συμμετέχω σε έναν τ&ομέα;"; 
    var L_JOINDOMAINMenuCommand4_Text = "Τι πρέπει να κάνω στη &συνέχεια;";


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
    var L_JOINDOMAINAboutThisScreen1_Text = "Σε αυτό το παράθυρο διαλόγου μπορείτε να καθορίσετε εάν θέλετε να γίνει αυτός ο υπολογιστής μέλος ενός τομέα ή όχι.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen1_Text);

    var L_JOINDOMAINAboutThisScreen2_Text = "Αν επιλέξετε να συμμετάσχετε σε έναν τομέα, πρέπει να πληκτρολογήσετε το όνομα του τομέα στο οποίο συμμετέχει αυτός ο υπολογιστής.";
    Agent_Speak(L_JOINDOMAINAboutThisScreen2_Text);
}

function Agent_OnJOINDOMAINDifference() 
{
    var L_JOINDOMAINDifference1_Text = "Ένας τομέας είναι μια ομάδα υπολογιστών των οποίων η διαχείριση γίνεται σαν μία μονάδα.";
    Agent_Speak(L_JOINDOMAINDifference1_Text);
    
    var L_JOINDOMAINDifference2_Text = "Για παράδειγμα, μια επιχείρηση μπορεί να προσθέσει σε έναν τομέα όλους τους υπολογιστές των γραφείων της σε μια πόλη, ώστε να χρησιμοποιούν τα ίδια δικαιώματα πρόσβασης και να συνδέονται στους ίδιους εκτυπωτές.";
    Agent_Speak(L_JOINDOMAINDifference2_Text);

    var L_JOINDOMAINDifference3_Text = "Αν δεν είστε βέβαιοι ποια επιλογή θέλετε, επιλέξτε \"Όχι\" και κάντε κλικ στο κουμπί \"Επόμενο\".";
    Agent_Speak(L_JOINDOMAINDifference3_Text);
}

function Agent_OnJOINDOMAINHowToName() 
{
 	  Agent_GestureAtElement(g.document.all("radioYesDomain"), "Left");
 
    var L_JOINDOMAINHowToName1_Text = "Αν κάνετε την επιλογή να συμμετάσχετε σε έναν τομέα,";
    Agent_Speak(L_JOINDOMAINHowToName1_Text);
      
    Agent_Play("RestPose");
  
    Agent_GestureAtElement(g.document.all("textboxDomain"), "Left");
  
    var L_JOINDOMAINHowToName2_Text = "μπορείτε να πληκτρολογήσετε ένα όνομα στο πλαίσιο κάτω από αυτήν την επιλογή.";
    Agent_Speak(L_JOINDOMAINHowToName2_Text);
      
    Agent_Play("RestPose");
  
    var L_JOINDOMAINHowToName3_Text = "Δεν μπορείτε να πληκτρολογήσετε ένα όνομα, αν δεν έχετε επιλέξει να συμμετάσχετε σε έναν τομέα.";
    Agent_Speak(L_JOINDOMAINHowToName3_Text);
  
    var L_JOINDOMAINHowToName4_Text = "Έτσι το πλαίσιο θα παραμείνει γκρι υποδεικνύοντας ότι δεν μπορείτε να πληκτρολογήσετε μέσα σε αυτό αν δεν επιλέξετε τη δυνατότητα συμμετοχής σε τομέα.";
    Agent_Speak(L_JOINDOMAINHowToName4_Text);
  
    var L_JOINDOMAINHowToName5_Text = "Αν ο υπολογιστής σας συμμετέχει σε έναν τομέα, ρωτήστε το διαχειριστή δικτύου σας για ένα έγκυρο όνομα τομέα.";
    Agent_Speak(L_JOINDOMAINHowToName5_Text);
  
    var L_JOINDOMAINHowToName6_Text = "Αν δεν συμμετέχετε σε έναν τομέα, δεν χρειάζεται να καθορίσετε ένα όνομα.";
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
    
    var L_JOINDOMAINWhatToDoNext1_Text = "Αφού επιλέξετε, κάντε κλικ στο κουμπί \"Επόμενο\".";
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
    
    var L_JOINDOMAINWhatToDoNext2_Text = "Μπορείτε επίσης να επιλέξετε να επιστρέψετε στην προηγούμενη οθόνη κάνοντας κλικ στο κουμπί \"Προηγούμενο\".";
    Agent_Speak(L_JOINDOMAINWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}




function Agent_JNDOM_AAddCommands() 
{
    var L_JNDOMAMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_JNDOMAMenuCommand2_Text = "Πώς εισάγω το όνομα χρήστη και τον &κωδικό πρόσβασης;";
    var L_JNDOMAMenuCommand3_Text = "Τι είναι ένας &τομέας;";
    var L_JNDOMAMenuCommand4_Text = "Τι πρέπει να κάνω στη &συνέχεια;";
    
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
    var L_JNDOM_A_AboutThisStep1_Text = "Σε αυτό το παράθυρο διαλόγου καθορίζετε το άτομο που έχει δικαίωμα να προσθέσει αυτόν τον υπολογιστή σε έναν τομέα.";
  	Agent_Speak(L_JNDOM_A_AboutThisStep1_Text);
}

function Agent_OnJNDOM_AHowToEnter() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_HowToEnter1_Text = "Το όνομα που πληκτρολογείτε εδώ πρέπει να είναι μοναδικό ανάμεσα στα άλλα ονόματα χρηστών στον τομέα.";
    Agent_Speak(L_JNDOM_A_HowToEnter1_Text);
      
    Agent_Play("RestPose");

    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_HowToEnter2_Text = "Ο κωδικός πρόσβασης που πληκτρολογείτε εδώ πρέπει να συμφωνεί με τον κωδικό πρόσβασης στο λογαριασμό αυτού του χρήστη.";
    Agent_Speak(L_JNDOM_A_HowToEnter2_Text);
      
    Agent_Play("RestPose");
    
    var L_JNDOM_A_HowToEnter3_Text = "Αν δεν ξέρετε ποιο όνομα χρήστη και κωδικό πρόσβασης να χρησιμοποιήσετε, επικοινωνήστε με το διαχειριστή του δικτύου σας.";
    Agent_Speak(L_JNDOM_A_HowToEnter3_Text);
}

function Agent_OnJNDOM_AWhatIsDomain() 
{
    var L_JNDOM_A_WhatIsDomain1_Text = "Ένας τομέας είναι μια ομάδα υπολογιστών των οποίων η διαχείριση γίνεται σαν μία μονάδα.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain1_Text);
  	
    var L_JNDOM_A_WhatIsDomain2_Text = "Για παράδειγμα, μια επιχείρηση μπορεί να προσθέσει σε έναν τομέα όλους τους υπολογιστές των γραφείων της σε μια πόλη, ώστε να χρησιμοποιούν τα ίδια δικαιώματα πρόσβασης και να συνδέονται στους ίδιους εκτυπωτές.";
  	Agent_Speak(L_JNDOM_A_WhatIsDomain2_Text);
      
    Agent_Play("RestPose");		
}

function Agent_OnJNDOM_AWhatToDoNext() 
{
    Agent_GestureAtElement(g.textboxDomUser, "Right");
    
    var L_JNDOM_A_WhatToDoNext1_Text = "Αφού πληκτρολογήσετε το όνομα χρήστη εδώ";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext1_Text);
      
    Agent_Play("RestPose");		
  	
    Agent_GestureAtElement(g.textboxDomPass, "Right");
    
    var L_JNDOM_A_WhatToDoNext2_Text = "και τον κωδικό πρόσβασης αυτού του χρήστη εδώ,";
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
    
    var L_JNDOM_A_WhatToDoNext3_Text = "Κάντε κλικ στο κουμπί \"Επόμενο\".";
  	Agent_Speak(L_JNDOM_A_WhatToDoNext3_Text);
      
    Agent_Play("RestPose");		
}



function Agent_ActivationAddCommands() 
{
    var L_ActivationMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_ActivationMenuCommand2_Text = "Πληροφορίες για την &ενεργοποίηση";
    var L_ActivationMenuCommand3_Text = "Πώς κάνω ενεργοποίηση &αργότερα;";
    var L_ActivationMenuCommand4_Text = "Πώς ε&νεργοποιώ αν δεν έχω σύνδεση στο Internet;";
    var L_ActivationMenuCommand5_Text = "Τι &γίνεται αν δεν ενεργοποιήσω;";
    var L_ActivationMenuCommand6_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
    
    var L_ActivationAboutThisScreen1_Text = "Αυτή είναι η οθόνη όπου αποφασίζετε αν θέλετε να ενεργοποιήσετε τα %1 τώρα ή αργότερα.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutThisScreen1_Text, g_ProductName));
    
    var L_ActivationAboutThisScreen2_Text = "Εάν δεν κάνετε ενεργοποίηση τώρα, μπορείτε να εκτελέσετε τον \"Οδηγό ενεργοποίησης προϊόντος\" από το μενού \"Έναρξη\".";
    Agent_Speak(L_ActivationAboutThisScreen2_Text);
    
    var L_ActivationAboutThisScreen3_Text = "Και θα σας υπενθυμίζουμε κάθε λίγες μέρες να ενεργοποιήσετε τα Windows ώστε να μπορείτε να συνεχίσετε να τα χρησιμοποιείτε.";
    Agent_Speak(L_ActivationAboutThisScreen3_Text);
}

function Agent_OnActivationAboutActivation() 
{
    var L_ActivationAboutActivation1_Text = "Όταν η τράπεζά σας εκδίδει μια πιστωτική ή χρεωστική κάρτα για εσάς, τυπικά σας ζητά να 'ενεργοποιήσετε' την κάρτα για να μπορέσετε να τη χρησιμοποιήσετε.";
    Agent_Speak(L_ActivationAboutActivation1_Text);
    
    var L_ActivationAboutActivation2_Text = "Η ενεργοποίηση προστατεύει εσάς και την τράπεζά σας από μη εξουσιοδοτημένη χρήση της κάρτας σας.";
    Agent_Speak(L_ActivationAboutActivation2_Text);
    
    var L_ActivationAboutActivation3_Text = "Η ενεργοποίηση %1 λειτουργεί με τον ίδιο τρόπο, εκτός από το ότι μπορείτε να χρησιμοποιήσετε το προϊόν %2 για την καθορισμένη περίοδο ενεργοποίησης πριν να σας ζητηθεί να το ενεργοποιήσετε.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationHowToActivateLater() 
{
    var L_ActivationHowToActivateLater1_Text = "Αν παραλείψετε την ενεργοποίηση τώρα, μια μικρή υπενθύμιση θα εμφανίζεται στην επιφάνεια εργασίας του %1 κάθε μερικές ημέρες.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationHowToActivateLater1_Text, g_ProductName));
    
    var L_ActivationHowToActivateLater2_Text = "Στη συνέχεια, μπορείτε να ξεκινήσετε τον \"Οδηγό ενεργοποίησης προϊόντος\", μεταβαίνοντας στο μενού \"Έναρξη\" και κάνοντας κλικ στην επιλογή \"Ενεργοποίηση των Windows\".";
    Agent_Speak(L_ActivationHowToActivateLater2_Text);
    
    var L_ActivationHowToActivateLater3_Text = "Εάν ξεχάσετε αυτά τα βήματα, μεταβείτε στο μενού \"Έναρξη\" και κάντε κλικ στην επιλογή \"Βοήθεια και Υποστήριξη\", για να βρείτε την απάντηση στις απορίες σας, καθώς και άλλες πολύτιμες πληροφορίες.";
    Agent_Speak(L_ActivationHowToActivateLater3_Text);
}

function Agent_OnActivationHowToActivateUnconnected() 
{
    Agent_GestureAtElement(g.rb_act_2, "Left");
    	
    var L_ActivationHowToActivateUnconnected1_Text = "Απλώς επιλέξτε \"Όχι\" εδώ.";
    Agent_Speak(L_ActivationHowToActivateUnconnected1_Text);
    
    Agent_Play("RestPose");
    
    var L_ActivationHowToActivateUnconnected2_Text = "Αφού ολοκληρώσετε την εγκατάσταση των Windows, μπορείτε να εκτελέσετε τον \"Οδηγό ενεργοποίησης προϊόντος\", κάνοντας κλικ στην επιλογή \"Ενεργοποίηση των Windows\" από το μενού \"Έναρξη\".";
    Agent_Speak(L_ActivationHowToActivateUnconnected2_Text);
    
    var L_ActivationHowToActivateUnconnected3_Text = "Ο οδηγός θα σας εμφανίσει έναν αριθμό τηλεφώνου που μπορείτε να καλέσετε για να ενεργοποιήσετε τα Windows τηλεφωνικά.";
    Agent_Speak(L_ActivationHowToActivateUnconnected3_Text);
}

function Agent_OnActivationWhatHappensNoActivate() 
{
    var L_ActivationWhatHappensNoActivate1_Text = "Μπορείτε να συνεχίσετε να χρησιμοποιείτε το %1 μέχρι να λήξει η περίοδος ενεργοποίησης.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate1_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate2_Text = "Στο τέλος όμως αυτής της περιόδου, πρέπει να ενεργοποιήσετε το %1 για να συνεχίσετε να το χρησιμοποιείτε.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate2_Text, g_ProductName));
    
    var L_ActivationWhatHappensNoActivate3_Text = "Αν η περίοδος ενεργοποίησης λήξει, δεν θα μπορείτε πλέον να χρησιμοποιείτε το %1.";
    Agent_Speak(ApiObj.FormatMessage(L_ActivationWhatHappensNoActivate3_Text, g_ProductName));
}

function Agent_OnActivationWhatToDoNext() 
{
    Agent_GestureAtElement(g.act_spn1, "Left");
    
    var L_ActivationWhatToDoNext1_Text = "Αφού επιλέξετε την απάντηση σε αυτήν την ερώτηση,";
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
            
    var L_ActivationWhatToDoNext2_Text = "Κάντε κλικ στο κουμπί \"Επόμενο\".";
    Agent_Speak(L_ActivationWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");	
}



function Agent_ActivationErrorAddCommands() 
{
    var L_ActivationErrorMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_ActivationErrorMenuCommand2_Text = "Πληροφορίες για την &ενεργοποίηση";
    var L_ActivationErrorMenuCommand3_Text = "Πώς κάνω ενεργοποίηση &αργότερα;";
    var L_ActivationErrorMenuCommand4_Text = "Πώς ε&νεργοποιώ αν δεν έχω σύνδεση στο Internet;";
    var L_ActivationErrorMenuCommand5_Text = "Τι &γίνεται αν δεν ενεργοποιήσω;";


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
    var L_ActivationErrorAboutThisScreen1_Text = "Αυτή η οθόνη εμφανίζεται επειδή δεν ήταν δυνατό να επικοινωνήσετε με το κέντρο ενεργοποίησης.";
	Agent_Speak(L_ActivationErrorAboutThisScreen1_Text);
	
    var L_ActivationErrorAboutThisScreen2_Text = "Αφού ολοκληρώσετε την εγκατάσταση του %1, μπορείτε να εκτελέσετε τον \"Οδηγό ενεργοποίησης προϊόντος\", κάνοντας κλικ στην επιλογή \"Ενεργοποίηση των Windows\" από το μενού \"Έναρξη\".";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutThisScreen2_Text, g_ProductName));
}

function Agent_OnActivationErrorAboutActivation() 
{
    var L_ActivationErrorAboutActivation1_Text = "Όταν η τράπεζά σας εκδίδει μια πιστωτική ή χρεωστική κάρτα για εσάς, τυπικά σας ζητά να 'ενεργοποιήσετε' την κάρτα για να μπορέσετε να τη χρησιμοποιήσετε.";
	Agent_Speak(L_ActivationErrorAboutActivation1_Text);
	
    var L_ActivationErrorAboutActivation2_Text = "Η ενεργοποίηση προστατεύει εσάς και την τράπεζά σας από μη εξουσιοδοτημένη χρήση της κάρτας σας.";
	Agent_Speak(L_ActivationErrorAboutActivation2_Text);
	
    var L_ActivationErrorAboutActivation3_Text = "Η ενεργοποίηση %1 λειτουργεί με τον ίδιο τρόπο, εκτός από το ότι μπορείτε να χρησιμοποιήσετε το προϊόν %2 για καθορισμένο αριθμό ημερών πριν να σας ζητηθεί να το ενεργοποιήσετε.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationErrorHowToActivateLater() 
{
    var L_ActivationErrorHowToActivateLater1_Text = "Αν παραλείψετε την ενεργοποίηση τώρα, μια μικρή υπενθύμιση θα εμφανίζεται στην επιφάνεια εργασίας του %1 κάθε μερικές ημέρες.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationErrorHowToActivateLater2_Text = "Στη συνέχεια, μπορείτε να ξεκινήσετε τον \"Οδηγό ενεργοποίησης προϊόντος\", μεταβαίνοντας στο μενού \"Έναρξη\" και κάνοντας κλικ στην επιλογή \"Ενεργοποίηση των Windows\".";
	Agent_Speak(L_ActivationErrorHowToActivateLater2_Text);
	
    var L_ActivationErrorHowToActivateLater3_Text = "Εάν ξεχάσετε αυτά τα βήματα, μεταβείτε στο μενού \"Έναρξη\" και κάντε κλικ στην επιλογή \"Βοήθεια και Υποστήριξη\", για να βρείτε την απάντηση στις απορίες σας, καθώς και άλλες πολύτιμες πληροφορίες.";
	Agent_Speak(L_ActivationErrorHowToActivateLater3_Text);
}

function Agent_OnActivationErrorHowToActivateUnconnected() 
{
    var L_ActivationErrorHowToActivateUnconnected1_Text = "Αφού ολοκληρώσετε την εγκατάσταση των Windows, μπορείτε να εκτελέσετε τον \"Οδηγό ενεργοποίησης προϊόντος\", κάνοντας κλικ στην επιλογή \"Ενεργοποίηση των Windows\" από το μενού \"Έναρξη\".";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected1_Text);
	
    var L_ActivationErrorHowToActivateUnconnected2_Text = "Ο οδηγός θα σας εμφανίσει έναν αριθμό τηλεφώνου που μπορείτε να καλέσετε για να ενεργοποιήσετε τα Windows τηλεφωνικά.";
	Agent_Speak(L_ActivationErrorHowToActivateUnconnected2_Text);
}

function Agent_OnActivationErrorWhatHappensNoActivate() 
{
    var L_ActivationErrorWhatHappensNoActivate1_Text = "Μπορείτε να συνεχίσετε να χρησιμοποιείτε το %1 μέχρι να λήξει η περίοδος ενεργοποίησης.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate2_Text = "Στο τέλος όμως αυτής της περιόδου, πρέπει να ενεργοποιήσετε το %1 για να συνεχίσετε να το χρησιμοποιείτε.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationErrorWhatHappensNoActivate3_Text = "Αν η περίοδος ενεργοποίησης λήξει, δεν θα μπορείτε πλέον να χρησιμοποιείτε το %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationErrorWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_ActivationPrivacyPolicyAddCommands() 
{
    var L_ActivationPrivacyPolicyMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_ActivationPrivacyPolicyMenuCommand2_Text = "Πληροφορίες για την &ενεργοποίηση";
    var L_ActivationPrivacyPolicyMenuCommand3_Text = "Πώς κάνω ενεργοποίηση &αργότερα;";
    var L_ActivationPrivacyPolicyMenuCommand4_Text = "Πώς ενεργοποιώ αν δεν έχω &σύνδεση στο Internet;";
    var L_ActivationPrivacyPolicyMenuCommand5_Text = "Τι &γίνεται αν δεν ενεργοποιήσω;";


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
    var L_ActivationPrivacyPolicyAboutThisScreen1_Text = "Αυτή η οθόνη εξηγεί τον τρόπο προστασίας του προσωπικού σας απορρήτου όταν κάνετε ενεργοποιείτε τα %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutThisScreen1_Text, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyAboutActivation() 
{
    var L_ActivationPrivacyPolicyAboutActivation1_Text = "Όταν η τράπεζά σας εκδίδει μια πιστωτική ή χρεωστική κάρτα για εσάς, τυπικά σας ζητά να 'ενεργοποιήσετε' την κάρτα για να μπορέσετε να τη χρησιμοποιήσετε.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation1_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation2_Text = "Η ενεργοποίηση προστατεύει εσάς και την τράπεζά σας από μη εξουσιοδοτημένη χρήση της κάρτας σας.";
	Agent_Speak(L_ActivationPrivacyPolicyAboutActivation2_Text);
	
    var L_ActivationPrivacyPolicyAboutActivation3_Text = "Η ενεργοποίηση %1 λειτουργεί με τον ίδιο τρόπο, εκτός από το ότι μπορείτε να χρησιμοποιήσετε το προϊόν %2 για την καθορισμένη περίοδο ενεργοποίησης πριν να σας ζητηθεί να το ενεργοποιήσετε.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyAboutActivation3_Text, g_ProductName, g_ProductName));
}

function Agent_OnActivationPrivacyPolicyHowToActivateLater() 
{
    var L_ActivationPrivacyPolicyHowToActivateLater1_Text = "Αν παραλείψετε την ενεργοποίηση τώρα, μια μικρή υπενθύμιση θα εμφανίζεται στην επιφάνεια εργασίας του %1 κάθε μερικές ημέρες.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyHowToActivateLater1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyHowToActivateLater2_Text = "Στη συνέχεια, μπορείτε να ξεκινήσετε τον \"Οδηγό ενεργοποίησης προϊόντος\", μεταβαίνοντας στο μενού \"Έναρξη\" και κάνοντας κλικ στην επιλογή \"Ενεργοποίηση των Windows\".";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater2_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateLater3_Text = "Εάν ξεχάσετε αυτά τα βήματα, μεταβείτε στο μενού \"Έναρξη\" και κάντε κλικ στην επιλογή \"Βοήθεια και Υποστήριξη\", για να βρείτε την απάντηση στις απορίες σας, καθώς και άλλες πολύτιμες πληροφορίες.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateLater3_Text);
}

function Agent_OnActivationPrivacyPolicyHowToActivateUnconnected() 
{
    var L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text = "Αφού ολοκληρώσετε την εγκατάσταση των Windows, μπορείτε να εκτελέσετε τον \"Οδηγό ενεργοποίησης προϊόντος\", κάνοντας κλικ στην επιλογή \"Ενεργοποίηση των Windows\" από το μενού \"Έναρξη\".";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected1_Text);
	
    var L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text = "Ο οδηγός θα σας εμφανίσει έναν αριθμό τηλεφώνου που μπορείτε να καλέσετε για να ενεργοποιήσετε τα Windows τηλεφωνικά.";
	Agent_Speak(L_ActivationPrivacyPolicyHowToActivateUnconnected2_Text);
}

function Agent_OnActivationPrivacyPolicyWhatHappensNoActivate() 
{
    var L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text = "Μπορείτε να συνεχίσετε να χρησιμοποιείτε τα %1 μέχρι να λήξει η περίοδος της πολιτικής απορρήτου ενεργοποίησης.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate1_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text = "Στο τέλος όμως αυτής της περιόδου, πρέπει να ενεργοποιήσετε το %1 για να συνεχίσετε να το χρησιμοποιείτε.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate2_Text, g_ProductName));
	
    var L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text = "Αν η περίοδος της πολιτικής απορρήτου ενεργοποίησης λήξει, δεν θα μπορείτε πλέον να χρησιμοποιείτε τα %1.";
	Agent_Speak(ApiObj.FormatMessage(L_ActivationPrivacyPolicyWhatHappensNoActivate3_Text, g_ProductName));
}



function Agent_DSLMAINAddCommands() 
{
    var L_DSLMAINMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_DSLMAINMenuCommand2_Text = "&Μερικοί λόγοι για την απόκτηση ονόματος χρήστη και κωδικού πρόσβασης";
    var L_DSLMAINMenuCommand3_Text = "Τι πρέπει να κάνω στη &συνέχεια;";
    
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
    var L_DSLMAINAboutThisScreen1_Text = "Σε αυτό το παράθυρο διαλόγου καθορίζετε εάν θα απαιτείται όνομα χρήση και κωδικός πρόσβασης για πρόσβαση στο Internet από αυτόν τον υπολογιστή.";
	Agent_Speak(L_DSLMAINAboutThisScreen1_Text);
}

function Agent_OnDSLMAINSomeReasons() 
{
    var L_DSLMAINHowToMoveOn1_Text = "Εάν είστε το μόνο άτομο που θα χρησιμοποιήσει αυτόν τον υπολογιστή, τότε σας εξυπηρετεί να επιτρέψετε στο %1 να αποθηκεύσει αυτόματα το όνομα χρήστη και τον κωδικό πρόσβασης.";
	Agent_Speak(ApiObj.FormatMessage(L_DSLMAINHowToMoveOn1_Text, g_ProductName));
	
    var L_DSLMAINHowToMoveOn2_Text = "Με τον τρόπο αυτό, δεν θα χρειάζεται να πληκτρολογείτε αυτές τις πληροφορίες κάθε φορά που θέλετε να συνδεθείτε στο Internet.";
	Agent_Speak(L_DSLMAINHowToMoveOn2_Text);
	
    var L_DSLMAINHowToMoveOn3_Text = "Εάν όμως χρησιμοποιείτε αυτόν τον υπολογιστή μαζί με άλλους χρήστες και δεν θέλετε να έχετε κοινόχρηστο λογαριασμό Internet, τότε μπορείτε να προστατέψετε το λογαριασμό σας χρησιμοποιώντας όνομα χρήστη και κωδικό πρόσβασης.";
	Agent_Speak(L_DSLMAINHowToMoveOn3_Text);
	
    var L_DSLMAINHowToMoveOn4_Text = "Για παράδειγμα, ίσως θέλετε να κάνετε κοινή χρήση αυτού του υπολογιστή με τα παιδιά σας ώστε να μπορούν να παίζουν παιχνίδια.";
	Agent_Speak(L_DSLMAINHowToMoveOn4_Text);
	
    var L_DSLMAINHowToMoveOn5_Text = "Αλλά ίσως δεν θέλετε να κάνουν σερφ στο Internet χωρίς την άδειά σας.";
	Agent_Speak(L_DSLMAINHowToMoveOn5_Text);		
}

function Agent_OnDSLMAINWhatToDoNext()
{	
	Agent_GestureAtElement(g.dslmain_TitleText, "Left");
	
    var L_DSLMAINWhatToDoNext1_Text = "Αφού επιλέξετε την απάντηση σε αυτήν την ερώτηση,";
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
	
	var L_DSLMAINWhatToDoNext2_Text = "Κάντε κλικ στο κουμπί \"Επόμενο\".";
	Agent_Speak(L_DSLMAINWhatToDoNext2_Text);	
    
    Agent_Play("RestPose");
}



function Agent_DSL_AAddCommands() 
{
    var L_DSLAMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_DSLAMenuCommand2_Text = "&Τι ακριβώς είναι το Internet;";
    var L_DSLAMenuCommand3_Text = "Τι &χρειάζομαι για σύνδεση στο Internet;";
    var L_DSLAMenuCommand4_Text = "Πληροφορίες για την &εγγραφή στο Internet";

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
    var L_DSL_A_AboutThisStep1_Text = "Σε αυτό το παράθυρο διαλόγου μπορείτε να δημιουργήσετε ένα λογαριασμό με μια υπηρεσία παροχής Internet ή, για συντομία, \"ISP\", ώστε να μπορείτε να συνδέεστε με το Internet από αυτόν τον υπολογιστή.";
	Agent_Speak(L_DSL_A_AboutThisStep1_Text);
}

function Agent_DSL_AWhatIsInternet() 
{
    var L_DSL_A_WhatIsInternet1_Text = "Το Internet είναι ένα παγκόσμιο δίκτυο υπολογιστών.";
	Agent_Speak(L_DSL_A_WhatIsInternet1_Text);
	
    var L_DSL_A_WhatIsInternet2_Text = "Εάν έχετε πρόσβαση στο Internet, μπορείτε να ανακτάτε πληροφορίες οι οποίες διατίθενται δημόσια από εκατομμύρια πηγές, συμπεριλαμβανομένων εκπαιδευτικών ιδρυμάτων, κυβερνητικών οργανισμών, επιχειρήσεων και ιδιωτών.";
	Agent_Speak(L_DSL_A_WhatIsInternet2_Text);
	
    var L_DSL_A_WhatIsInternet3_Text = "Το World Wide Web ή, για συντομία, \"το Web\", είναι ένα σύστημα εξερεύνησης του Internet με τη χρήση υπερ-συνδέσεων.";
	Agent_Speak(L_DSL_A_WhatIsInternet3_Text);
	
    var L_DSL_A_WhatIsInternet4_Text = "Οι υπερ-συνδέσεις είναι κείμενο ή εικόνες με τις οποίες, όταν κάνετε κλικ επάνω τους, μεταβαίνετε σε άλλη ιστοσελίδα ή σε άλλο σημείο στην ίδια σελίδα, ή εκτελείτε ορισμένες ενέργειες, όπως το άνοιγμα ενός προγράμματος.";
	Agent_Speak(L_DSL_A_WhatIsInternet4_Text);
	
    var L_DSL_A_WhatIsInternet5_Text = "Για την περιήγησή σας στο Web, χρησιμοποιείτε ένα πρόγραμμα περιήγησης, ένα πρόγραμμα δηλαδή που εμφανίζει πληροφορίες του Internet σε μορφή κειμένου, εικόνων, ήχων και ψηφιακών ταινιών.";
	Agent_Speak(L_DSL_A_WhatIsInternet5_Text);
	
    var L_DSL_A_WhatIsInternet6_Text = "Η Microsoft προσφέρει δύο προγράμματα περιήγησης στο Web:";
	Agent_Speak(L_DSL_A_WhatIsInternet6_Text);
	
    var L_DSL_A_WhatIsInternet7_Text = "Το πρόγραμμα MSN Explorer, που είναι ιδανικό για αρχάριους και όσους χρησιμοποιούν τον υπολογιστή τους στο σπίτι, καθώς και ο Internet Explorer.";
	Agent_Speak(L_DSL_A_WhatIsInternet7_Text);
}

function Agent_DSL_ANeedToConnect() 
{	
    var L_DSL_A_NeedToConnect1_Text = "Χρειάζεστε μόνον τρία πράγματα για να συνδεθείτε στο Internet.";
	Agent_Speak(L_DSL_A_NeedToConnect1_Text);	
	
    var L_DSL_A_NeedToConnect2_Text = "Πρώτον, χρειάζεστε έναν υπολογιστή, που το έχετε ήδη.";
	Agent_Speak(L_DSL_A_NeedToConnect2_Text);
	
    var L_DSL_A_NeedToConnect3_Text = "Δεύτερον, χρειάζεστε μια υπηρεσία παροχής Internet ή για συντομία \"ISP\".";
	Agent_Speak(L_DSL_A_NeedToConnect3_Text);
	
    var L_DSL_A_NeedToConnect4_Text = "Η υπηρεσία παροχής Internet παρέχει υπηρεσίες ή πρόσβαση στο Internet, όπως ακριβώς μια τηλεφωνική υπηρεσία παρέχει τηλεφωνικές υπηρεσίες.";
	Agent_Speak(L_DSL_A_NeedToConnect4_Text);
	
    var L_DSL_A_NeedToConnect5_Text = "Όταν φτάσουμε στο κεφάλαιο ρύθμισης του υπολογιστή σας για πρόσβαση στο Internet, θα σας βοηθήσω να βρείτε μια υπηρεσία παροχής Internet, εάν δεν έχετε βρει ήδη.";
	Agent_Speak(L_DSL_A_NeedToConnect5_Text);
	
    var L_DSL_A_NeedToConnect6_Text = "Τρίτον, χρειάζεστε μια συσκευή που κάνει τη φυσική σύνδεση μεταξύ του υπολογιστή σας και της ISP.";
	Agent_Speak(L_DSL_A_NeedToConnect6_Text);
	
    var L_DSL_A_NeedToConnect7_Text = "Αυτός είναι ο σκοπός αυτής της οθόνης.";
	Agent_Speak(L_DSL_A_NeedToConnect7_Text);
}

function Agent_DSL_AInternetSignup() 
{
    var L_DSL_A_AboutThisScreen1_Text = "Εάν έχετε ήδη λογαριασμό Internet, τότε η υπηρεσία παροχής Internet θα σας έχει δώσει ήδη αυτήν την πληροφορία.";
	Agent_Speak(L_DSL_A_AboutThisScreen1_Text);
	
    var L_DSL_A_AboutThisScreen2_Text = "Δεν χρειάζεται να εγκαταστήσετε έναν νέο λογαριασμό Internet επειδή έχετε νέο υπολογιστή.";
	Agent_Speak(L_DSL_A_AboutThisScreen2_Text);
	
    var L_DSL_A_AboutThisScreen3_Text = "Μπορείτε να χρησιμοποιήσετε τις ίδιες ακριβώς πληροφορίες λογαριασμού που χρησιμοποιούσατε με τον παλιό σας υπολογιστή.";
	Agent_Speak(L_DSL_A_AboutThisScreen3_Text);
	
    var L_DSL_A_AboutThisScreen4_Text = "Εάν δεν έχετε συνδεθεί ποτέ στο Internet από τον υπολογιστή σας, ίσως να έχετε πάρει πληροφορίες για λογαριασμούς Internet όταν αγοράσατε αυτόν τον υπολογιστή.";
	Agent_Speak(L_DSL_A_AboutThisScreen4_Text);
	
    var L_DSL_A_AboutThisScreen5_Text = "Εάν ο προμηθευτής σας σας έδωσε ένα χαρτί με ένα όνομα χρήστη, κωδικό πρόσβασης και το όνομα μιας υπηρεσίας παροχής Internet, πληκτρολογήστε αυτές τις πληροφορίες σε αυτό το παράθυρο διαλόγου.";
	Agent_Speak(L_DSL_A_AboutThisScreen5_Text);
}



function Agent_DSL_BAddCommands() 
{

    var L_DSL_B_MenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_DSL_B_MenuCommand2_Text = "&Τι σημαίνει IP;";
    var L_DSL_B_MenuCommand3_Text = "Τι σ&ημαίνει DNS;";
    var L_DSL_B_MenuCommand4_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
    var L_DSL_B_AboutThisScreen1_Text = "Στο προηγούμενο παράθυρο, καθορίσατε τον τρόπο με τον οποίο θα συνδέεστε στο Internet, δίνοντας τις πληροφορίες του λογαριασμού σας για το Internet.";
	Agent_Speak(L_DSL_B_AboutThisScreen1_Text);

    var L_DSL_B_AboutThisScreen2_Text = "Σε αυτό το παράθυρο, θα χρειαστεί να δηλώσετε τον τρόπο με τον οποίο θα γίνεται η φυσική σύνδεση του υπολογιστή σας με το Internet.";
	Agent_Speak(L_DSL_B_AboutThisScreen2_Text);
}

function Agent_OnDSL_BWhatIsIP() 
{
    var L_DSL_B_WhatIsIP1_Text = "Κάθε υπολογιστής ο οποίος συνδέεται με το Internet διαθέτει ένα πρωτόκολλο Internet ή διεύθυνση \"IP\", η οποία είναι ένας μοναδικός αριθμός με τον οποίο ο υπολογιστής αναγνωρίζεται από τους άλλους υπολογιστές στο Internet.";
	Agent_Speak(L_DSL_B_WhatIsIP1_Text);

    var L_DSL_B_WhatIsIP2_Text = "Όταν συνδέεστε, η υπηρεσία ISP σας συνήθως δίνει αυτόματα στον υπολογιστή σας μια διεύθυνση IP.";
	Agent_Speak(L_DSL_B_WhatIsIP2_Text);

    var L_DSL_B_WhatIsIP3_Text = "Σε αυτήν την περίπτωση ωστόσο, πρέπει να εισαγάγετε εσείς τη διεύθυνση IP.";
	Agent_Speak(L_DSL_B_WhatIsIP3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_staticip, "Left");
	
	var L_DSL_B_WhatIsIP4_Text = "Η υπηρεσία ISP σας πρέπει να σας δώσει μια διεύθυνση IP για να πληκτρολογήσετε εδώ.";
	Agent_Speak(L_DSL_B_WhatIsIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnDSL_BWhatIsDNS() 
{
    var L_DSL_B_WhatIsDNS1_Text = "Προκειμένου να εντοπίσει διευθύνσεις στο Internet, ο υπολογιστής σας πρέπει να συνδεθεί σε έναν διακομιστή DNS, ο οποίος μετατρέπει αριθμητικές διευθύνσεις IP σε αντίστοιχα φιλικά προς το χρήστη ονόματα και το αντίστροφο.";
	Agent_Speak(L_DSL_B_WhatIsDNS1_Text);

    var L_DSL_B_WhatIsDNS2_Text = "Στις περισσότερες περιπτώσεις, μια διεύθυνση DNS εκχωρείται από την ISP σας.";
	Agent_Speak(L_DSL_B_WhatIsDNS2_Text);

    var L_DSL_B_WhatIsDNS3_Text = "Η υπηρεσία ISP σας απαιτεί να ορίσετε τη διεύθυνση DNS στον υπολογιστή σας.";
	Agent_Speak(L_DSL_B_WhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.dsl_intl_prefdns, "Left");

    var L_DSL_B_WhatIsDNS4_Text = "Η υπηρεσία ISP σας πρέπει να σας δώσει ένα προτιμώμενο DNS για να πληκτρολογήσετε εδώ";
	Agent_Speak(L_DSL_B_WhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.dsl_lbl_altdns, "Left");

    var L_DSL_B_WhatIsDNS5_Text = "και πιθανόν έναν εναλλακτικό DNS για χρήση αν ο προτιμώμενος DNS δεν είναι διαθέσιμος.";
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
	
    var L_DSL_B_WhatToDoNext1_Text = "Για να συνεχίσετε, κάντε κλικ στο κουμπί \"Επόμενο\".";
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

    var L_DSL_B_WhatToDoNext2_Text = "Μπορείτε επίσης να κάνετε κλικ στο κουμπί \"Προηγούμενο\" για να επιστρέψετε στο προηγούμενο βήμα.";
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

    var L_DSL_B_WhatToDoNext3_Text = "Διαφορετικά, εάν αλλάξατε γνώμη, κάντε κλικ στο κουμπί \"Παράλειψη\", για να συνεχίσετε χωρίς να ρυθμίσετε τον υπολογιστή για πρόσβαση στο Internet.";
	Agent_Speak(L_DSL_B_WhatToDoNext3_Text);
    
    Agent_Play("RestPose");	
}



function Agent_ICONNECTAddCommands() 
{

    var L_ICONNECTMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_ICONNECTMenuCommand2_Text = "Τι είναι μια &στατική διεύθυνση IP;";
    var L_ICONNECTMenuCommand3_Text = "Τι σ&ημαίνει DNS;";
    var L_ICONNECTMenuCommand4_Text = "Τι πρέπει να κάνω στη σ&υνέχεια;";

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
    var L_ICONNECTAboutThisScreen1_Text = "Στο προηγούμενο παράθυρο, καθορίσατε τον τρόπο με τον οποίο θα συνδέεστε στο Internet, δίνοντας τις πληροφορίες του λογαριασμού σας για το Internet.";
	Agent_Speak(L_ICONNECTAboutThisScreen1_Text);

    var L_ICONNECTAboutThisScreen2_Text = "Σε αυτό το παράθυρο, θα χρειαστεί να δηλώσετε τον τρόπο με τον οποίο θα γίνεται η φυσική σύνδεση του υπολογιστή σας με το Internet.";
	Agent_Speak(L_ICONNECTAboutThisScreen2_Text);
}

function Agent_OnICONNECTWhatIsStaticIP() 
{
    var L_ICONNECTWhatIsStaticIP1_Text = "Κάθε υπολογιστής ο οποίος συνδέεται με το Internet διαθέτει ένα πρωτόκολλο Internet ή διεύθυνση \"IP\", η οποία είναι ένας μοναδικός αριθμός με τον οποίο ο υπολογιστής αναγνωρίζεται από τους άλλους υπολογιστές στο Internet.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP1_Text);

    var L_ICONNECTWhatIsStaticIP2_Text = "Όταν συνδέεστε, η υπηρεσία ISP σας συνήθως δίνει αυτόματα στον υπολογιστή σας μια διεύθυνση IP.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP2_Text);

    var L_ICONNECTWhatIsStaticIP3_Text = "Σε αυτήν την περίπτωση ωστόσο, πρέπει να εισαγάγετε εσείς τη διεύθυνση IP.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_staticIP, "Left");
	
	var L_ICONNECTWhatIsStaticIP4_Text = "Η υπηρεσία ISP σας πρέπει να σας δώσει μια διεύθυνση IP για να πληκτρολογήσετε εδώ.";
	Agent_Speak(L_ICONNECTWhatIsStaticIP4_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnICONNECTWhatIsDNS() 
{
    var L_ICONNECTWhatIsDNS1_Text = "Προκειμένου να εντοπίσει διευθύνσεις στο Internet, ο υπολογιστής σας πρέπει να συνδεθεί σε έναν διακομιστή DNS, ο οποίος εκχωρεί διευθύνσεις IP στους υπολογιστές που συνδέονται με το Internet.";
	Agent_Speak(L_ICONNECTWhatIsDNS1_Text);

    var L_ICONNECTWhatIsDNS2_Text = "Στις περισσότερες περιπτώσεις, μια διεύθυνση DNS εκχωρείται από την ISP σας.";
	Agent_Speak(L_ICONNECTWhatIsDNS2_Text);

    var L_ICONNECTWhatIsDNS3_Text = "Η υπηρεσία ISP σας απαιτεί να ορίσετε τη διεύθυνση DNS στον υπολογιστή σας.";
	Agent_Speak(L_ICONNECTWhatIsDNS3_Text);
	
	Agent_GestureAtElement(g.iconnect_spn_prefrDNS, "Left");

    var L_ICONNECTWhatIsDNS4_Text = "Η υπηρεσία ISP σας πρέπει να σας δώσει ένα προτιμώμενο DNS για να πληκτρολογήσετε εδώ";
	Agent_Speak(L_ICONNECTWhatIsDNS4_Text);
    
    Agent_Play("RestPose");
	
	Agent_GestureAtElement(g.iconnect_spn_alterDNS, "Left");

    var L_ICONNECTWhatIsDNS5_Text = "και πιθανόν έναν εναλλακτικό DNS για χρήση αν ο προτιμώμενος DNS δεν είναι διαθέσιμος.";
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
	
    var L_ICONNECTWhatToDoNext1_Text = "Για να συνεχίσετε, κάντε κλικ στο κουμπί \"Επόμενο\".";
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

    var L_ICONNECTWhatToDoNext2_Text = "Διαφορετικά, εάν αλλάξατε γνώμη, κάντε κλικ στο κουμπί \"Παράλειψη\", για να συνεχίσετε χωρίς να ρυθμίσετε τον υπολογιστή για πρόσβαση στο Internet.";
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

    var L_ICONNECTWhatToDoNext3_Text = "Μπορείτε επίσης να επιστρέψετε στην προηγούμενη οθόνη κάνοντας κλικ στο κουμπί \"Προηγούμενο\".";
	Agent_Speak(L_ICONNECTWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}





function Agent_ICNTLASTAddCommands() {

        var L_ICNTLASTMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_ICNTLASTMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_ICNTLASTMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        
        
        

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

        var L_SCONNECTMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_SCONNECTMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_SCONNECTMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        
        
        

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

        var L_SCNTLASTMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_SCNTLASTMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_SCNTLASTMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        
        
        

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
    var L_BadPIDMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_BadPIDMenuCommand2_Text = "Πώς εισάγω τον &αριθμό-κλειδί του προϊόντος μου;";
    var L_BadPIDMenuCommand3_Text = "Τι συμβαίνει αν &δεν γνωρίζω τον αριθμό-κλειδί του προϊόντος μου;";
    var L_BadPIDMenuCommand4_Text = "Τι συμβαίνει αν ο αριθμός κλειδί του &προϊόντος μου δεν λειτουργεί;";
    var L_BadPIDMenuCommand5_Text = "Πώς μπορώ να πάρ&ω περισσότερη βοήθεια;";
    var L_BadPIDMenuCommand6_Text = "Τι πρέπει να κάνω στη &συνέχεια;";
        
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
    var L_BadPIDAboutThisStep1_Text = "Ο αριθμός-κλειδί προϊόντος που πληκτρολογήσατε στην προηγούμενη οθόνη δεν είναι έγκυρος.";
    Agent_Speak(L_BadPIDAboutThisStep1_Text);
    
    var L_BadPIDAboutThisStep2_Text = "Αυτό σημαίνει ότι δεν συμφωνεί με έναν αριθμό-κλειδί προϊόντος για ένα αυθεντικό αντίγραφο των Windows XP.";
    Agent_Speak(L_BadPIDAboutThisStep2_Text);

    var L_BadPIDAboutThisStep3_Text = "Και τα Windows δεν λειτουργούν χωρίς έναν έγκυρο αριθμό-κλειδί προϊόντος.";
    Agent_Speak(L_BadPIDAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDAboutThisStep4_Text = "Αν νομίζετε ότι δεν έχετε πληκτρολογήσει σωστά, κάντε κλικ στο κουμπί \"Προηγούμενο\" και πληκτρολογήστε το σωστό κλειδί.";
    Agent_Speak(L_BadPIDAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep5_Text = "Εάν όμως είστε βέβαιοι ότι πληκτρολογήσατε σωστά τον αριθμό-κλειδί προϊόντος ή προσπαθήσατε αρκετές φορές χωρίς επιτυχία, τότε ενδέχεται το αντίγραφο των Windows που έχετε να είναι παράνομο.";
    Agent_Speak(L_BadPIDAboutThisStep5_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDAboutThisStep6_Text = "Αν συμβαίνει αυτό, κάντε κλικ στο κουμπί \"Τερματισμός\" για να κλείσετε τον υπολογιστή σας.";
    Agent_Speak(L_BadPIDAboutThisStep6_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDAboutThisStep7_Text = "Κατόπιν καλέστε 1-800-RU-LEGIT στις ΗΠΑ ή στον Canada.";
    Agent_Speak(L_BadPIDAboutThisStep7_Text);

    var L_BadPIDAboutThisStep8_Text = "Σε όλες τις άλλες χώρες/περιοχές, επικοινωνήστε με την τοπική θυγατρική της Microsoft.";
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
	
    var L_BadPIDHowToEnter1_Text = "Κάντε κλικ στο κουμπί \"Προηγούμενο\", για να επιστρέψετε στην προηγούμενη οθόνη.";
    Agent_Speak(L_BadPIDHowToEnter1_Text);
    
    Agent_Play("RestPose");
    
    var L_BadPIDHowToEnter2_Text = "Ο δείκτης, ο οποίος εμφανίζεται σαν κάθετη γραμμή που αναβοσβήνει, θα είναι ήδη τοποθετημένος στο πρώτο πλαίσιο μέσα στο οποίο πρέπει να πληκτρολογήσετε.";
    Agent_Speak(L_BadPIDHowToEnter2_Text);

    var L_BadPIDHowToEnter3_Text = "Μόλις πληκτρολογήσετε τους πρώτους 5 χαρακτήρες, ο δείκτης θα μετακινηθεί αυτόματα στο επόμενο πλαίσιο, ώστε να μπορέσετε να πληκτρολογήσετε τους 5 επόμενους χαρακτήρες.";
    Agent_Speak(L_BadPIDHowToEnter3_Text);

    var L_BadPIDHowToEnter4_Text = "Μην πληκτρολογήσετε παύλες και μην ανησυχείτε για συμφωνία πεζών/κεφαλαίων γραμμάτων.";
    Agent_Speak(L_BadPIDHowToEnter4_Text);

    var L_BadPIDHowToEnter5_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επόμενο\" για να συνεχίσετε.";
    Agent_Speak(L_BadPIDHowToEnter5_Text);
}

function Agent_OnBadPIDWhatIfNotKnown() 
{
    var L_BadPIDWhatIfNotKnown1_Text = "Εάν ο αριθμός-κλειδί του προϊόντος (Product Key) δεν υπάρχει στο εξώφυλλο του CD, ελέγξτε το αυτοκόλλητο του Πιστοποιητικού Αυθεντικότητας (Certificate of Authenticity) στον υπολογιστή σας ή στο βιβλίο \"Γρήγορα αποτελέσματα\".";
    Agent_Speak(L_BadPIDWhatIfNotKnown1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
    
    var L_BadPIDWhatIfNotKnown2_Text = "Μόλις βρείτε τον αριθμό-κλειδί του προϊόντος (Product Key), κάντε κλικ στο κουμπί \"Πίσω\" και πληκτρολογήστε τον αριθμό-κλειδί στα πλαίσια του προηγούμενου παραθύρου.";
    Agent_Speak(L_BadPIDWhatIfNotKnown2_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotKnown3_Text = "Αν δεν μπορείτε να βρείτε τον αριθμό-κλειδί του προϊόντος σας, επικοινωνήστε με τον κατασκευαστή του υπολογιστή σας στο %s.";
    var re = /%s/i;
    var L_BadPIDWhatIfNotKnown4_Text = "Αν δεν μπορείτε να βρείτε τον αριθμό-κλειδί του προϊόντος σας, επικοινωνήστε με τον κατασκευαστή του υπολογιστή σας.";

    var strPhoneNumber = window.external.GetSupportPhoneNum();

    if (strPhoneNumber == "")
        Agent_Speak(L_BadPIDWhatIfNotKnown4_Text);
    else
        Agent_Speak(L_BadPIDWhatIfNotKnown3_Text.replace(re, strPhoneNumber));
}

function Agent_OnBadPIDWhatIfNotWorking() 
{
    var L_BadPIDWhatIfNotWorking1_Text = "Ίσως δεν πληκτρολογήσατε σωστά.";
    Agent_Speak(L_BadPIDWhatIfNotWorking1_Text);
    
    var L_BadPIDWhatIfNotWorking2_Text = "Πρέπει να συμπεριλάβετε και τους 25 χαρακτήρες του αριθμού-κλειδιού προϊόντος.";
    Agent_Speak(L_BadPIDWhatIfNotWorking2_Text);

    var L_BadPIDWhatIfNotWorking3_Text = "Κάθε τμήμα πρέπει να αποτελείται από 5 γράμματα ή αριθμούς.";
    Agent_Speak(L_BadPIDWhatIfNotWorking3_Text);

    var L_BadPIDWhatIfNotWorking4_Text = "Πρέπει να πληκτρολογήσετε έναν έγκυρο αριθμό-κλειδί προϊόντος πριν αρχίσετε να χρησιμοποιείτε τα Windows.";
    Agent_Speak(L_BadPIDWhatIfNotWorking4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadPIDWhatIfNotWorking5_Text = "Αν νομίζετε ότι δεν έχετε πληκτρολογήσει σωστά, κάντε κλικ στο κουμπί \"Προηγούμενο\" και πληκτρολογήστε το σωστό κλειδί.";
    Agent_Speak(L_BadPIDWhatIfNotWorking5_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking6_Text = "Εάν όμως είστε βέβαιοι ότι πληκτρολογήσατε σωστά τον αριθμό-κλειδί προϊόντος ή προσπαθήσατε αρκετές φορές χωρίς επιτυχία, τότε ενδέχεται το αντίγραφο των Windows που έχετε να είναι παράνομο.";
    Agent_Speak(L_BadPIDWhatIfNotWorking6_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatIfNotWorking7_Text = "Αν συμβαίνει αυτό, κάντε κλικ στο κουμπί \"Τερματισμός\" για να κλείσετε τον υπολογιστή σας.";
    Agent_Speak(L_BadPIDWhatIfNotWorking7_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatIfNotWorking8_Text = "Στη συνέχεια καλέστε 1-800-RU-LEGIT στις ΗΠΑ ή στον Canada.";
    Agent_Speak(L_BadPIDWhatIfNotWorking8_Text);

    var L_BadPIDWhatIfNotWorking9_Text = "Σε όλες τις άλλες χώρες/περιοχές, επικοινωνήστε με την τοπική θυγατρική της Microsoft.";
    Agent_Speak(L_BadPIDWhatIfNotWorking9_Text);
}

function Agent_OnBadPIDWhoCanICall() 
{
    var L_BadPIDWhoCanICall1_Text = "Αν ο αριθμός-κλειδί προϊόντος σας δεν γίνεται δεκτός, καλέστε το 1-800-RU-LEGIT στις ΗΠΑ ή τον Καναδά.";
    Agent_Speak(L_BadPIDWhoCanICall1_Text);
    
    var L_BadPIDWhoCanICall2_Text = "Σε όλες τις άλλες χώρες/περιοχές, επικοινωνήστε με την τοπική θυγατρική της Microsoft.";
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
	
    var L_BadPIDWhatToDoNext1_Text = "Κάντε κλικ στο κουμπί  \"Προηγούμενο\" και πληκτρολογήστε τον σωστό αριθμό-κλειδί.";
    Agent_Speak(L_BadPIDWhatToDoNext1_Text);
    
    var L_BadPIDWhatToDoNext2_Text = "Αν ο αριθμός-κλειδί προϊόντος σας δεν γίνεται δεκτός, ίσως έχετε ένα παράνομο αντίγραφο των Windows.";
    Agent_Speak(L_BadPIDWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadPIDWhatToDoNext3_Text = "Αν συμβαίνει αυτό, κάντε κλικ στο κουμπί \"Τερματισμός\" για να κλείσετε τον υπολογιστή σας. ";
    Agent_Speak(L_BadPIDWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_BadPIDWhatToDoNext4_Text = "Στη συνέχεια καλέστε 1-800-RU-LEGIT στις ΗΠΑ ή στον Canada.";
    Agent_Speak(L_BadPIDWhatToDoNext4_Text);

    var L_BadPIDWhatToDoNext5_Text = "Σε όλες τις άλλες χώρες/περιοχές, επικοινωνήστε με την τοπική θυγατρική της Microsoft.";
    Agent_Speak(L_BadPIDWhatToDoNext5_Text);
}



function Agent_IconnAddCommands() 
{
    var L_IconnMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_IconnMenuCommand2_Text = "Ποια &επιλογή πρέπει να διαλέξω;";
    var L_IconnMenuCommand3_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
    var L_IconnAboutThisStep1_Text = "Εγκαταστήσατε με επιτυχία τα Windows XP στον υπολογιστή σας!";
    Agent_Speak(L_IconnAboutThisStep1_Text); 
      
    var L_IconnAboutThisStep2_Text = "Σε αυτό το σημείο, μπορώ να σας βοηθήσω να ρυθμίσετε τον υπολογιστή σας για πρόσβαση στο Internet.";
    Agent_Speak(L_IconnAboutThisStep2_Text);
       
    var L_IconnAboutThisStep3_Text = "Εάν δεν είστε έτοιμοι να το κάνετε τώρα, μπορείτε να εκτελέσετε τον \"Οδηγό σύνδεσης στο Internet\" από το μενού \"Έναρξη\", αφού ολοκληρωθεί η εγκατάσταση των Windows.";
    Agent_Speak(L_IconnAboutThisStep3_Text);
}

function Agent_IconnWhichOption() 
{    
    var L_IconnWhichOption1_Text = "Κάντε κλικ στην επιλογή \"Όχι\", εάν πρόκειται να χρησιμοποιήσετε μια υπηρεσία παροχής Internet, ή \"ISP\" για συντομία, η οποία απαιτεί να εγκαταστήσετε το δικό της λογισμικό.";
    Agent_Speak(L_IconnWhichOption1_Text); 
      
    var L_IconnWhichOption2_Text = "Θα ξέρετε ότι είναι έτσι, αν έχετε ήδη ένα CD από αυτήν την ISP.";
    Agent_Speak(L_IconnWhichOption2_Text);
       
    var L_IconnWhichOption3_Text = "Τότε, ρυθμίστε τον υπολογιστή σας για πρόσβαση στο Internet αφού τελειώσετε την εγκατάσταση των Windows.";
    Agent_Speak(L_IconnWhichOption3_Text);
}

function Agent_OnIconnWhatToDoNext() 
{      
    Agent_GestureAtElement(g.radioYesIconn, "Left");  
    
    var L_IconnWhatToDoNext1_Text = "Αν θέλετε βοήθεια με την εγκατάσταση μιας σύνδεσης στο Internet, κάντε κλικ στην επιλογή \"Ναι\".";
    Agent_Speak(L_IconnWhatToDoNext1_Text);
    
    Agent_Play("RestPose"); 
        
    Agent_GestureAtElement(g.radioNoIconn, "Left");  
    
    var L_IconnWhatToDoNext2_Text = "Ή, αν δεν θέλετε να δημιουργήσετε μια σύνδεση στο Internet τώρα, επιλέξτε \"Όχι\"";
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

    var L_IconnWhatToDoNext3_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επόμενο\" για να συνεχίσετε.";
    Agent_Speak(L_IconnWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPAddCommands() 
{
    var L_ISPMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_ISPMenuCommand2_Text = "Τι συμβαίνει αν ο προμηθευτής του &υπολογιστή μου μου έδωσε πληροφορίες λογαριασμού;";
    var L_ISPMenuCommand3_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
    var L_ISPAboutThisStep1_Text = "Σε αυτήν την οθόνη επιλέγετε πώς θέλετε να κάνετε πρόσβαση στο Internet.";
    Agent_Speak(L_ISPAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");

    var L_ISPAboutThisStep2_Text = "Μπορείτε να χρησιμοποιήσετε το MSN,";
    Agent_Speak(L_ISPAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");

        var L_ISPAboutThisStep3_Text = "ή μια άλλη υπηρεσία παροχής Internet.";
        Agent_Speak(L_ISPAboutThisStep3_Text);
        
        Agent_Play("RestPose");
    }
    
    Agent_GestureAtElement(g.radioSkip, "Left");

    var L_ISPAboutThisStep4_Text = "Ή, μπορείτε να συνεχίσετε χωρίς να εγκαταστήσετε μια σύνδεση Internet τώρα.";
    Agent_Speak(L_ISPAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPWhatIfGivenAccount() 
{
    var L_ISPWhatIfGivenAccount1_Text = "Όταν αγοράσατε τον υπολογιστή σας, είναι πιθανό να σας έδωσε ο προμηθευτής σας ένα χαρτί με τις πληροφορίες για το λογαριασμό Internet.";
	Agent_Speak(L_ISPWhatIfGivenAccount1_Text);
	
    var L_ISPWhatIfGivenAccount2_Text = "Οι πληροφορίες του λογαριασμού περιλαμβάνουν το όνομα χρήστη, τον κωδικό πρόσβασης, το όνομα και το τηλέφωνο της υπηρεσίας παροχής Internet.";
	Agent_Speak(L_ISPWhatIfGivenAccount2_Text);
	
    var L_ISPWhatIfGivenAccount3_Text = "Αν έχετε αυτές τις πληροφορίες, τότε έχετε ήδη ένα λογαριασμό Internet.";
	Agent_Speak(L_ISPWhatIfGivenAccount3_Text);
    
    Agent_GestureAtElement(g.radioGetNewISP, "Left");
	
    var L_ISPWhatIfGivenAccount4_Text = "Αν το όνομα της ISP είναι MSN, επιλέξτε την πρώτη επιλογή.";
	Agent_Speak(L_ISPWhatIfGivenAccount4_Text);
    
    Agent_Play("RestPose");

    
    if (g.radioMigrateISP != null)
    {
        Agent_GestureAtElement(g.radioMigrateISP, "Left");
    	
        var L_ISPWhatIfGivenAccount5_Text = "Αν το όνομα της ISP δεν είναι MSN, επιλέξτε τη δεύτερη επιλογή.";
    	Agent_Speak(L_ISPWhatIfGivenAccount5_Text);
        
        Agent_Play("RestPose");
    }

    Agent_GestureAtElement(g.radioSkip, "Left");
    
    var L_ISPWhatIfGivenAccount6_Text = "Διαφορετικά, εάν θέλετε να ρυθμίσετε αργότερα τη σύνδεση του υπολογιστή σας με το Internet, κάντε κλικ στην τελευταία επιλογή.";
	Agent_Speak(L_ISPWhatIfGivenAccount6_Text);
			    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
	
    var L_ISPWhatIfGivenAccount7_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επόμενο\".";
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
    
    var L_ISPWhatToDoNext1_Text = "Αφού κάνετε μια επιλογή, κάντε κλικ στο κουμπί \"Επόμενο\".";
	Agent_Speak(L_ISPWhatToDoNext1_Text);
	
	Agent_Play("RestPose");
}



function Agent_ICSAddCommands() 
{
	var L_ICSAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
	var L_ICSAddCommands2_Text = "Τι είναι το &τείχος προστασίας σύνδεσης στο Internet;";
	var L_ICSAddCommands3_Text = "Τι είναι &ο \"Οδηγός οικιακού δικτύου\";";
	
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
	var L_ICSAboutThisStep1_Text = "Σε αυτήν την οθόνη διαλέγετε πώς θέλετε να κάνει πρόσβαση στο Internet αυτός ο υπολογιστής.";
	Agent_Speak(L_ICSAboutThisStep1_Text);
	
	var L_ICSAboutThisStep2_Text = "Αν αυτός ο υπολογιστής είναι συνδεδεμένος σε ένα δίκτυο άλλων υπολογιστών, μπορείτε να χρησιμοποιήσετε το δίκτυο για πρόσβαση στο Internet.";
	Agent_Speak(L_ICSAboutThisStep2_Text);
	
	var L_ICSAboutThisStep3_Text = "Αλλιώς, ο υπολογιστής μπορεί να ρυθμιστεί να κάνει μια απευθείας σύνδεση με το Internet.";
	Agent_Speak(L_ICSAboutThisStep3_Text);
	
	var L_ICSAboutThisStep4_Text = "Ανεξάρτητα από την επιλογή σας, τα Windows XP σάς προστατεύουν με ένα τείχος προστασίας για συνδέσεις στο Internet, προκειμένου να προφυλάξουν τον υπολογιστή σας από μη εξουσιοδοτημένη πρόσβαση από άλλους χρήστες.";
	Agent_Speak(L_ICSAboutThisStep4_Text);
}
	
function Agent_ICSWhatIsFirewall() 
{
	var L_ICSWhatIsFirewall1_Text = "Το τείχος προστασίας είναι ένα σύστημα ασφαλείας που έχει σχεδιαστεί για την προστασία του υπολογιστή σας - ή του δικτύου σας - από εξωτερικές απειλές, όπως εισβολείς, που προέρχονται από ένα άλλο δίκτυο, όπως το Internet.";
	Agent_Speak(L_ICSWhatIsFirewall1_Text);
	
	var L_ICSWhatIsFirewall2_Text = "Κάθε φορά που δημιουργείτε ένα δίκτυο μέσα από τα Windows XP, ενεργοποιείται αυτόματα η δυνατότητα τείχους προστασίας για τις συνδέσεις στο Internet.";
	Agent_Speak(L_ICSWhatIsFirewall2_Text);
	
	var L_ICSWhatIsFirewall3_Text = "Ενεργοποιείται επίσης αν αυτός ο υπολογιστής δεν είναι μέρος ενός δικτύου αλλά κάνει πρόσβαση κατευθείαν στο Internet.";
	Agent_Speak(L_ICSWhatIsFirewall3_Text);
}
	
function Agent_ICSWhatIsNetworkWizard() 
{
	var L_ICSWhatIsNetworkWizard1_Text = "Αυτός ο οδηγός σας καθοδηγεί σε κάθε βήμα της εγκατάστασης ενός δικτύου στο σπίτι ή το χώρο εργασίας σας.";
	Agent_Speak(L_ICSWhatIsNetworkWizard1_Text);
	
	var L_ICSWhatIsNetworkWizard2_Text = "Αν δεν θέλετε να συνδέσετε αυτόν τον υπολογιστή σε ένα δίκτυο στη διάρκεια αυτής της διαδικασίας, μπορείτε να το κάνετε αργότερα.";
	Agent_Speak(L_ICSWhatIsNetworkWizard2_Text);
	
	var L_ICSWhatIsNetworkWizard3_Text = "Απλώς πηγαίνετε στο μενού \"Έναρξη\" και κάντε κλικ στην επιλογή \"Περισσότερα προγράμματα\".";
	Agent_Speak(L_ICSWhatIsNetworkWizard3_Text);
	
	var L_ICSWhatIsNetworkWizard4_Text = "Μετά κάντε κλικ στην επιλογή \"Βοηθήματα\" και \"Επικοινωνίες\" για να βρείτε τον \"Οδηγό οικιακού δικτύου\".";
	Agent_Speak(L_ICSWhatIsNetworkWizard4_Text);
	
	var L_ICSWhatIsNetworkWizard5_Text = "Αν δεν θυμάστε αυτά τα βήματα, κάντε κλικ στην επιλογή \"Βοήθεια και Υποστήριξη\" του μενού \"Έναρξη\", για να δείτε την απάντηση στις απορίες σας και άλλες χρήσιμες πληροφορίες";
	Agent_Speak(L_ICSWhatIsNetworkWizard5_Text);
}



function Agent_ICSDCAddCommands() 
{
	var L_ICSDCAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
	var L_ICSDCAddCommands2_Text = "Τι πρέπει να κάνω στη &συνέχεια;";
	
	g_AgentCharacter.Commands.Add("Agent_ICSDCAboutThisStep", L_ICSDCAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_ICSDCWhatToDoNext", L_ICSDCAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_ICSDCAboutThisStep() 
{
	var L_ICSDCAboutThisStep1_Text = "Αυτή η οθόνη εξηγεί ότι ο υπολογιστής σας έχει αποσυνδεθεί από το Internet.";
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
    
	var L_ICSDCWhatToDoNext1_Text = "Κάντε κλικ στο κουμπί \"Επανάληψη\" για να προσπαθήσετε να συνδεθείτε στο Internet.";
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
    
	var L_ICSDCWhatToDoNext2_Text = "Ή κάντε κλικ στο κουμπί \"Παράλειψη\" για να συνεχίσετε χωρίς να συνδεθείτε στο Internet.";
	Agent_Speak(L_ICSDCWhatToDoNext2_Text);
	
	Agent_Play("RestPose");
}



function Agent_Ident1AddCommands() 
{
    var L_Ident1AddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_Ident1AddCommands2_Text = "Τι είναι ένας &λογαριασμός χρήστη;";
    var L_Ident1AddCommands3_Text = "&Πλεονεκτήματα από την εγκατάσταση λογαριασμών χρηστών";
    var L_Ident1AddCommands4_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
	var L_Ident1AboutThisStep1_Text = "Αυτή είναι η οθόνη όπου καθορίζετε τα άλλα άτομα που θα χρησιμοποιούν τον υπολογιστή σας.";
	Agent_Speak(L_Ident1AboutThisStep1_Text);
	
	var L_Ident1AboutThisStep2_Text = "Εάν ο υπολογιστής σας χρησιμοποιείται και από άλλους χρήστες, τότε κάθε χρήστης μπορεί να προσαρμόσει τα Windows XP δημιουργώντας έναν προσωπικό λογαριασμό.";
	Agent_Speak(L_Ident1AboutThisStep2_Text);
    
    var L_Ident1AboutThisStep3_Text = "Με αυτόν τον τρόπο, κάθε χρήστης μπορεί να έχει τις δικές του ρυθμίσεις, τα δικαιώματα, τα προσωπικά αρχεία, τις συνδέσεις με τοποθεσίες Web και άλλες επιλογές, χωρίς να επηρεάζει τον τρόπο με τον οποίο έχετε προσαρμόσει εσείς τον υπολογιστή.";
    Agent_Speak(L_Ident1AboutThisStep3_Text);
    
    var L_Ident1AboutThisStep4_Text = "Όταν ξεκινάτε τον υπολογιστή σας, η οθόνη υποδοχής θα εμφανίζει με αλφαβητική σειρά όλα τα ονόματα που πληκτρολογείτε σε αυτό το παράθυρο.";
    Agent_Speak(L_Ident1AboutThisStep4_Text);
    
    var L_Ident1AboutThisStep5_Text = "Και θα σας εμφανίσει ακόμα και μια εικόνα για κάθε άτομο.";
    Agent_Speak(L_Ident1AboutThisStep5_Text);
    
    var L_Ident1AboutThisStep6_Text = "Μπορείτε να αλλάξετε αυτά τα ονόματα οποιαδήποτε στιγμή αργότερα, κάνοντας κλικ στην επιλογή Πίνακας Ελέγχου του μενού \"Έναρξη\" και κατόπιν στο εικονίδιο \"Λογαριασμοί χρηστών\".";
    Agent_Speak(L_Ident1AboutThisStep6_Text);
}

function Agent_Ident1Command_WhatIsUserAccount() 
{	
	var L_Ident1WhatIsUserAccount1_Text = "Αν κάνετε κοινή χρήση ενός υπολογιστή με άλλα άτομα στο σπίτι ή το γραφείο σας, θα αγαπήσετε τους λογαριασμούς χρηστών.";
	Agent_Speak(L_Ident1WhatIsUserAccount1_Text);
	
	var L_Ident1WhatIsUserAccount2_Text = "Με λογαριασμούς χρήστη, μπορείτε:";
	Agent_Speak(L_Ident1WhatIsUserAccount2_Text);
    
    var L_Ident1WhatIsUserAccount3_Text = "Προσαρμόστε τον τρόπο με τον οποίο θέλετε τα Windows να οργανώνουν και να εμφανίζουν τις πληροφορίες, χωρίς να επηρεάζονται οι προτιμήσεις των άλλων χρηστών.";
    Agent_Speak(L_Ident1WhatIsUserAccount3_Text);
    
    var L_Ident1WhatIsUserAccount4_Text = "Απαιτείτε έναν κωδικό πρόσβασης για πρόσβαση στα αρχεία σας.";
    Agent_Speak(L_Ident1WhatIsUserAccount4_Text);
    
    var L_Ident1WhatIsUserAccount5_Text = "Αποθηκεύσετε την προσωπική σας λίστα αγαπημένων του Web και τοποθεσιών που έχετε επισκεφτεί πρόσφατα.";
    Agent_Speak(L_Ident1WhatIsUserAccount5_Text);
    
    var L_Ident1WhatIsUserAccount6_Text = "Προστατεύσετε τις σημαντικές ρυθμίσεις του υπολογιστή σας.";
    Agent_Speak(L_Ident1WhatIsUserAccount6_Text);
    
    var L_Ident1WhatIsUserAccount7_Text = "Προσαρμόσετε την επιφάνεια εργασίας για κάθε χρήστη. Και";
    Agent_Speak(L_Ident1WhatIsUserAccount7_Text);
    
    var L_Ident1WhatIsUserAccount8_Text = "Απλοποιήσετε τη σύνδεση και εναλλαγή μεταξύ χρηστών του υπολογιστή.";
    Agent_Speak(L_Ident1WhatIsUserAccount8_Text);
}

function Agent_Ident1Command_Benefits() 
{	
	var L_Ident1Benefits1_Text = "Κοινή χρήση του υπολογιστή σημαίνει συνήθως ότι άλλοι χρήστες μπορούν να δουν τα προσωπικά σας αρχεία, να εγκαταστήσουν παιχνίδια ή άλλο λογισμικό που δεν θέλετε εσείς ή να αλλάξουν τις ρυθμίσεις του υπολογιστή σας.";
	Agent_Speak(L_Ident1Benefits1_Text);
	
	var L_Ident1Benefits2_Text = "Τώρα αυτό έχει αλλάξει.";
	Agent_Speak(L_Ident1Benefits2_Text);
    
    var L_Ident1Benefits3_Text = "Δημιουργώντας λογαριασμούς χρηστών, κάθε χρήστης μπορεί να προσαρμόσει τα Windows χωρίς να επηρεάζει τους άλλους χρήστες του υπολογιστή.";
    Agent_Speak(L_Ident1Benefits3_Text);
    
    var L_Ident1Benefits4_Text = "Για να μάθετε περισσότερα σχετικά με τους λογαριασμούς χρηστών, κάντε κλικ στην επιλογή \"Βοήθεια και Υποστήριξη\" στο μενού \"Έναρξη\" και βρείτε την απάντηση στις απορίες σας, καθώς και άλλες πολύτιμες πληροφορίες.";
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
    
    var L_Ident1WhatToDoNext1_Text = "Αφού πληκτρολογήσετε τα ονόματα των άλλων ατόμων που θα χρησιμοποιούν αυτόν τον υπολογιστή, κάντε κλικ στο κουμπί \"Επόμενο\" για να συνεχίσετε.";
    Agent_Speak(L_Ident1WhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_Ident1WhatToDoNext2_Text = "Μπορείτε να αλλάξετε αυτά τα ονόματα και να προσθέσετε περισσότερους χρήστες αργότερα αφού τελειώσετε την εγκατάσταση των Windows.";
    Agent_Speak(L_Ident1WhatToDoNext2_Text);
        
    var L_Ident1WhatToDoNext3_Text = "Κάντε απλώς κλικ στον Πίνακα Ελέγχου του μενού Έναρξη και επιλέξτε \"Λογαριασμοί χρηστών\".";
    Agent_Speak(L_Ident1WhatToDoNext3_Text);
}



function Agent_IdentitiesAddCommands() 
{
    var L_IdentitiesAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_IdentitiesAddCommands2_Text = "Τι είναι ένας &λογαριασμός χρήστη;";
    var L_IdentitiesAddCommands3_Text = "&Πλεονεκτήματα από την εγκατάσταση λογαριασμών χρηστών";
    var L_IdentitiesAddCommands4_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
	var L_IdentitiesAboutThisStep1_Text = "Αυτή είναι η οθόνη όπου καθορίζετε τα άλλα άτομα που θα χρησιμοποιούν τον υπολογιστή σας.";
	Agent_Speak(L_IdentitiesAboutThisStep1_Text);
	
	var L_IdentitiesAboutThisStep2_Text = "Εάν ο υπολογιστής σας χρησιμοποιείται και από άλλους χρήστες, τότε κάθε χρήστης μπορεί να προσαρμόσει τα Windows XP δημιουργώντας έναν προσωπικό λογαριασμό.";
	Agent_Speak(L_IdentitiesAboutThisStep2_Text);
    
    var L_IdentitiesAboutThisStep3_Text = "Με αυτόν τον τρόπο, κάθε χρήστης μπορεί να έχει τις δικές του ρυθμίσεις, τα δικαιώματα, τα προσωπικά αρχεία, τις συνδέσεις με τοποθεσίες Web και άλλες επιλογές, χωρίς να επηρεάζει τον τρόπο με τον οποίο έχετε προσαρμόσει εσείς τον υπολογιστή.";
    Agent_Speak(L_IdentitiesAboutThisStep3_Text);
    
    var L_IdentitiesAboutThisStep4_Text = "Όταν ξεκινάτε τον υπολογιστή σας, η οθόνη υποδοχής θα εμφανίζει με αλφαβητική σειρά όλα τα ονόματα που πληκτρολογείτε σε αυτό το παράθυρο.";
    Agent_Speak(L_IdentitiesAboutThisStep4_Text);
    
    var L_IdentitiesAboutThisStep5_Text = "Και θα σας εμφανίσει ακόμα και μια εικόνα για κάθε άτομο.";
    Agent_Speak(L_IdentitiesAboutThisStep5_Text);
    
    var L_IdentitiesAboutThisStep6_Text = "Μπορείτε να αλλάξετε αυτά τα ονόματα οποιαδήποτε στιγμή αργότερα, κάνοντας κλικ στην επιλογή Πίνακας Ελέγχου του μενού \"Έναρξη\" και κατόπιν στο εικονίδιο \"Λογαριασμοί χρηστών\".";
    Agent_Speak(L_IdentitiesAboutThisStep6_Text);
}

function Agent_IdentitiesCommand_WhatIsUserAccount() 
{	
	var L_IdentitiesWhatIsUserAccount1_Text = "Αν κάνετε κοινή χρήση ενός υπολογιστή με άλλα άτομα στο σπίτι ή το γραφείο σας, θα αγαπήσετε τους λογαριασμούς χρηστών.";
	Agent_Speak(L_IdentitiesWhatIsUserAccount1_Text);
	
	var L_IdentitiesWhatIsUserAccount2_Text = "Με λογαριασμούς χρήστη, μπορείτε:";
	Agent_Speak(L_IdentitiesWhatIsUserAccount2_Text);
    
    var L_IdentitiesWhatIsUserAccount3_Text = "Προσαρμόστε τον τρόπο με τον οποίο θέλετε τα Windows να οργανώνουν και να εμφανίζουν τις πληροφορίες, χωρίς να επηρεάζονται οι προτιμήσεις των άλλων χρηστών.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount3_Text);
    
    var L_IdentitiesWhatIsUserAccount4_Text = "Απαιτείτε έναν κωδικό πρόσβασης για πρόσβαση στα αρχεία σας.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount4_Text);
    
    var L_IdentitiesWhatIsUserAccount5_Text = "Αποθηκεύσετε την προσωπική σας λίστα αγαπημένων του Web και τοποθεσιών που έχετε επισκεφτεί πρόσφατα.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount5_Text);
    
    var L_IdentitiesWhatIsUserAccount6_Text = "Προστατεύσετε τις σημαντικές ρυθμίσεις του υπολογιστή σας.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount6_Text);
    
    var L_IdentitiesWhatIsUserAccount7_Text = "Προσαρμόσετε την επιφάνεια εργασίας για κάθε χρήστη. Και";
    Agent_Speak(L_IdentitiesWhatIsUserAccount7_Text);
    
    var L_IdentitiesWhatIsUserAccount8_Text = "Απλοποιήσετε τη σύνδεση και εναλλαγή μεταξύ χρηστών του υπολογιστή.";
    Agent_Speak(L_IdentitiesWhatIsUserAccount8_Text);
}

function Agent_IdentitiesCommand_Benefits() 
{	
	var L_IdentitiesBenefits1_Text = "Κοινή χρήση του υπολογιστή συνήθως σημαίνει ότι άλλοι χρήστες μπορούν να δουν τα προσωπικά σας αρχεία, να εγκαταστήσουν παιχνίδια ή άλλο λογισμικό που δεν θέλετε εσείς ή να αλλάξουν τις ρυθμίσεις του υπολογιστή σας.";
	Agent_Speak(L_IdentitiesBenefits1_Text);
	
	var L_IdentitiesBenefits2_Text = "Τώρα αυτό έχει αλλάξει.";
	Agent_Speak(L_IdentitiesBenefits2_Text);
    
    var L_IdentitiesBenefits3_Text = "Όταν δημιουργείτε λογαριασμούς χρηστών, κάθε χρήστης μπορεί να προσαρμόσει τα Windows χωρίς να επηρεάζει τους άλλους χρήστες του υπολογιστή.";
    Agent_Speak(L_IdentitiesBenefits3_Text);
    
    var L_IdentitiesBenefits4_Text = "Για να μάθετε περισσότερα για τους λογαριασμούς χρηστών, κάντε κλικ στην επιλογή \"Βοήθεια και Υποστήριξη\" στο μενού Έναρξη για να βρείτε την απάντηση στις απορίες σας και άλλες χρήσιμες πληροφορίες.";
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
    
    var L_IdentitiesWhatToDoNext1_Text = "Αφού πληκτρολογήσετε τα ονόματα των άλλων ατόμων που θα χρησιμοποιούν αυτόν τον υπολογιστή, κάντε κλικ στο κουμπί \"Επόμενο\" για να συνεχίσετε.";
    Agent_Speak(L_IdentitiesWhatToDoNext1_Text);
    
    Agent_Play('RestPose');
        
    var L_IdentitiesWhatToDoNext2_Text = "Μπορείτε να αλλάξετε αυτά τα ονόματα και να προσθέσετε περισσότερους χρήστες αργότερα αφού τελειώσετε την εγκατάσταση των Windows.";
    Agent_Speak(L_IdentitiesWhatToDoNext2_Text);
        
    var L_IdentitiesWhatToDoNext3_Text = "Κάντε απλώς κλικ στον Πίνακα Ελέγχου του μενού Έναρξη και επιλέξτε \"Λογαριασμοί χρηστών\".";
    Agent_Speak(L_IdentitiesWhatToDoNext3_Text);
}



function Agent_KeybdAddCommands() 
{
	var L_KeybdMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_KeybdMenuCommand2_Text = "Πώς επιλέγω την &περιοχή μου;";
    var L_KeybdMenuCommand3_Text = "Πώς επιλέγω τη &γλώσσα μου;";
    var L_KeybdMenuCommand4_Text = "Πώς επιλέγω το π&ληκτρολόγιό μου;";

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
    var L_KeybdAboutThisStep1_Text = "Στα επόμενα παράθυρα διαλόγου, μπορείτε να καθορίσετε πώς θέλετε να εμφανίζονται το κείμενο, οι ημερομηνίες και οι αριθμοί στα Windows, με βάση τις προτιμήσεις σας για τη γλώσσα, τη γεωγραφική περιοχή και τη ζώνη ώρας.";
    Agent_Speak(L_KeybdAboutThisStep1_Text);
        
    var L_KeybdAboutThisStep2_Text = "Για παράδειγμα, σε αυτό το παράθυρο διαλόγου επιλέξτε την πλησιέστερη σε εσάς γεωγραφική περιοχή, τη γλώσσα την οποία θα χρησιμοποιείτε συχνότερα στον υπολογιστή σας και το πληκτρολόγιο που έχετε.";
    Agent_Speak(L_KeybdAboutThisStep2_Text);
        
    var L_KeybdAboutThisStep3_Text = "Το Windows θα εξασφαλίσουν τη σωστή εμφάνιση ημερομηνίας, ώρας και νομίσματος.";
    Agent_Speak(L_KeybdAboutThisStep3_Text);
        
    var L_KeybdAboutThisStep4_Text = "Για παράδειγμα, εάν επιλέξετε ως περιοχή τις Η.Π.Α. και ως γλώσσα την αγγλική, τότε τα χρηματικά ποσά θα εμφανίζονται σε δολάρια Η.Π.Α.";
    Agent_Speak(L_KeybdAboutThisStep4_Text);

    var L_KeybdAboutThisStep5_Text = "Αλλά αν αντί για αυτό επιλέξετε σαν περιοχή σας το \"Ηνωμένο Βασίλειο\", θα εμφανιστούν σε λίρες Βρετανίας.";
    Agent_Speak(L_KeybdAboutThisStep5_Text);
}

function Agent_KeybdHowToSelectRegion() 
{     
    Agent_GestureAtElement(g.selRegion, "Left");
     
    var L_KeybdHowToSelectRegion1_Text = "Οι περιοχές του κόσμου εμφανίζονται σε αυτή τη λίστα με αλφαβητική σειρά.";
    Agent_Speak(L_KeybdHowToSelectRegion1_Text);	
   
    var L_KeybdHowToSelectRegion2_Text = "Κάντε κλικ μέσα στη λίστα ή πιέστε το πλήκτρο Tab στο πληκτρολόγιό σας μέχρι να την επιλέξετε.";
    Agent_Speak(L_KeybdHowToSelectRegion2_Text);	
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selRegion, "Right");
        
    var L_KeybdHowToSelectRegion3_Text = "Κατόπιν κάντε κλικ στα μικρά κουμπιά με τα βέλη ή χρησιμοποιήστε τα πλήκτρα βέλους προς τα επάνω και κάτω στο πληκτρολόγιό σας, για να μετακινηθείτε μέσα στη λίστα που περιέχει τις γεωγραφικές περιοχές.";
    Agent_Speak(L_KeybdHowToSelectRegion3_Text);
        
    var L_KeybdHowToSelectRegion4_Text = "Όταν βρείτε την εγγύτερη περιοχή στο σημείο που ζείτε, κάντε κλικ σε αυτή ή πιέστε το πλήκτρο Enter στο πληκτρολόγιό σας.";
    Agent_Speak(L_KeybdHowToSelectRegion4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.RegionName, "Left");

    var L_KeybdHowToSelectRegion5_Text = "Η περιοχή που επιλέγετε θα εμφανιστεί σε αυτό το πλαίσιο.";
    Agent_Speak(L_KeybdHowToSelectRegion5_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectLanguage() 
{        		
    var L_KeybdHowToSelectLanguage1_Text = "Επιλέξτε τη γλώσσα με την οποία επικοινωνείτε συχνότερα.";
    Agent_Speak(L_KeybdHowToSelectLanguage1_Text);
        
    var L_KeybdHowToSelectLanguage2_Text = "Για παράδειγμα, εάν μιλάτε περισσότερο ισπανικά, αλλά τα προγράμματα και τα αρχεία με τα οποία εργάζεστε είναι συνήθως στην αγγλική γλώσσα, επιλέξτε \"Αγγλικά\" εδώ.";
    Agent_Speak(L_KeybdHowToSelectLanguage2_Text);   
        
    Agent_GestureAtElement(g.selLang, "Left");  
        
    var L_KeybdHowToSelectLanguage3_Text = "Οι γλώσσες εμφανίζονται σε αυτήν τη λίστα με αλφαβητική σειρά.";
    Agent_Speak(L_KeybdHowToSelectLanguage3_Text);

    var L_KeybdHowToSelectLanguage4_Text = "Κάντε κλικ εδώ ή πιέστε το πλήκτρο Tab στο πληκτρολόγιό σας για να φτάσετε εκεί.";
    Agent_Speak(L_KeybdHowToSelectLanguage4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selLang, "Right");

    var L_KeybdHowToSelectLanguage5_Text = "Κατόπιν κάντε κλικ στα μικρά κουμπιά με τα βέλη ή χρησιμοποιήστε τα πλήκτρα βέλους προς τα επάνω και κάτω στο πληκτρολόγιό σας, για να μετακινηθείτε μέσα στη λίστα που περιέχει τις γεωγραφικές περιοχές.";
    Agent_Speak(L_KeybdHowToSelectLanguage5_Text);

    var L_KeybdHowToSelectLanguage6_Text = "Όταν βρείτε τη γλώσσα που θέλετε, κάντε κλικ σε αυτή ή πιέστε το πλήκτρο Enter στο πληκτρολόγιό σας";
    Agent_Speak(L_KeybdHowToSelectLanguage6_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.LangName, "Left");

    var L_KeybdHowToSelectLanguage7_Text = "Η γλώσσα που επιλέγετε θα εμφανιστεί σε αυτό το πλαίσιο.";
    Agent_Speak(L_KeybdHowToSelectLanguage7_Text);
    
    Agent_Play("RestPose");
}

function Agent_KeybdHowToSelectKeyboard() 
{		
    var L_KeybdHowToSelectKeyboard1_Text = "Τα πληκτρολόγια εμφανίζονται σε αυτήν τη λίστα με αλφαβητική σειρά.";
    Agent_Speak(L_KeybdHowToSelectKeyboard1_Text);
    
    Agent_GestureAtElement(g.selKeyboard, "Left");
        
    var L_KeybdHowToSelectKeyboard2_Text = "Κάντε κλικ εδώ ή πιέστε το πλήκτρο Tab στο πληκτρολόγιό σας για να φτάσετε εκεί.";
    Agent_Speak(L_KeybdHowToSelectKeyboard2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.selKeyboard, "Right");
        
    var L_KeybdHowToSelectKeyboard3_Text = "Κατόπιν κάντε κλικ στα μικρά κουμπιά με τα βέλη ή χρησιμοποιήστε τα πλήκτρα βέλους προς τα επάνω και κάτω στο πληκτρολόγιό σας, για να μετακινηθείτε μέσα στη λίστα.";
    Agent_Speak(L_KeybdHowToSelectKeyboard3_Text);
        
    var L_KeybdHowToSelectKeyboard4_Text = "Όταν βρείτε το πληκτρολόγιο που χρησιμοποιείτε με αυτόν τον υπολογιστή, κάντε κλικ σε αυτό ή πιέστε το πλήκτρο Enter στο πληκτρολόγιό σας.";
    Agent_Speak(L_KeybdHowToSelectKeyboard4_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.KeyboardName, "Left");

    var L_KeybdHowToSelectKeyboard5_Text = "Το πληκτρολόγιο που επιλέγετε θα εμφανιστεί σε αυτό το πλαίσιο.";
    Agent_Speak(L_KeybdHowToSelectKeyboard5_Text);
    
    Agent_Play("RestPose");
}



function Agent_EulaAddCommands() 
{
    var L_EulaCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_EulaCommand2_Text = "Πώς &δηλώνω την απάντησή μου";
    var L_EulaCommand3_Text = "&Τι ακριβώς είναι η ’δεια Χρήσης;";
    var L_EulaCommand4_Text = "Τι &λέει η ’δεια Χρήσης;";
    var L_EulaCommand5_Text = "&Γιατί δεν είναι διαθέσιμο το κουμπί \"Επόμενο\";";
    var L_EulaCommand6_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
        var L_EulaMenuCommand5_Text = "&Γιατί δεν είναι διαθέσιμο το κουμπί \"Επόμενο\";";

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
    var L_EulaAboutThisStep1_Text = "Σε αυτό το παράθυρο διαλόγου μπορείτε να προβάλετε την άδεια χρήσης των Windows και κατόπιν να δηλώσετε εάν την αποδέχεστε.";
    Agent_Speak(L_EulaAboutThisStep1_Text);		
    
    Agent_GestureAtElement(g.txtEULA,"Left");
        
    var L_EulaAboutThisStep2_Text = "Για να χρησιμοποιήσετε τα Windows, πρέπει να αποδεχτείτε αυτήν τη συμφωνία.";
    Agent_Speak(L_EulaAboutThisStep2_Text);
    
    Agent_Play("RestPose");
}

function Agent_EulaHowToAnswer() 
{		
    Agent_GestureAtElement(g.radioAgree,"Left");
    
    var L_EulaHowToAnswer1_Text = "Απλώς τοποθετήστε τον δείκτη στον λευκό κύκλο στα αριστερά της απάντησής σας, και κάντε κλικ μία φορά.";
    Agent_Speak(L_EulaHowToAnswer1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaHowToAnswer2_Text = "Στη συνέχεια πιέστε το κουμπί \"Επόμενο\".";
    Agent_Speak(L_EulaHowToAnswer2_Text);
}

function Agent_EulaWhatIsEula() 
{		
    var L_EulaWhatIsEula1_Text = "Η χρήση των προϊόντων της Microsoft διέπεται από τους όρους της ’δειας Χρήσης Τελικού Χρήστη (’δεια), καθώς και από τους νόμους περί πνευματικής ιδιοκτησίας.";
    Agent_Speak(L_EulaWhatIsEula1_Text);
        
    var L_EulaWhatIsEula2_Text = "Η ’δεια Χρήσης Τελικού Χρήστη (’δεια) είναι το συμβόλαιο που περιγράφει τους όρους νόμιμης χρήσης του προϊόντος για το οποίο παραχωρείται άδεια χρήσης και σας κατοχυρώνει το συγκεκριμένο δικαίωμα χρήσης αυτού του προϊόντος στον υπολογιστή σας.";
    Agent_Speak(L_EulaWhatIsEula2_Text);
}

function Agent_EulaWhatDoesEulaSay() 
{		
    var L_EulaWhatDoesEulaSay1_Text = "Μόλις αποδεχτείτε τους όρους της, η ’δεια σας παρέχει το δικαίωμα χρήσης των Windows XP και σας παραχωρούνται ορισμένα επιπλέον δικαιώματα.";
    Agent_Speak(L_EulaWhatDoesEulaSay1_Text);
        
    var L_EulaWhatDoesEulaSay2_Text = "Επιβάλλει επίσης ορισμένους περιορισμούς στη χρήση των Windows XP.";
    Agent_Speak(L_EulaWhatDoesEulaSay2_Text);	
    
    Agent_GestureAtElement(g.txtEULA,"Right");	
        
    var L_EulaWhatDoesEulaSay3_Text = "Για να διαβάσετε τις λεπτομέρειες, κάντε κύλιση κάτω στο τμήμα \"Παραχώρηση ’δειας Χρήσης\".";
    Agent_Speak(L_EulaWhatDoesEulaSay3_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatDoesEulaSay4_Text = "Η ’δεια περιγράφει επίσης την περιορισμένη εγγύηση και τους όρους σύμφωνα με τους οποίους μπορείτε να δημιουργείτε αντίγραφα ασφαλείας των Windows XP για σκοπούς τήρησης αντιγράφου ασφαλείας (back-up) ή αρχειοθέτησης.";
    Agent_Speak(L_EulaWhatDoesEulaSay4_Text);
}

function Agent_EulaWhereIsNextButton() 
{		
    var L_EulaWhereIsNextButton1_Text = "Το κουμπί \"Επόμενο\" δεν είναι ακόμη διαθέσιμο, επειδή δεν έχετε επιλέξει εάν αποδέχεστε την άδεια χρήσης ή όχι.";
    Agent_Speak(L_EulaWhereIsNextButton1_Text);
        
    var L_EulaWhereIsNextButton2_Text = "Πρέπει πρώτα να κάνετε κλικ στην επιλογή \"Ναι\" ή \"Όχι\".";
    Agent_Speak(L_EulaWhereIsNextButton2_Text);
}

function Agent_EulaWhatToDoNext() 
{			
    Agent_GestureAtElement(g.radioAgree,"Left");
    	
    var L_EulaWhatToDoNext1_Text = "Αφού διαβάσετε την άδεια χρήσης, κάντε κλικ στο κουμπί \"Ναι\" για να την αποδεχτείτε.";
    Agent_Speak(L_EulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
        
    var L_EulaWhatToDoNext2_Text = "Ή αν δεν θέλετε να την αποδεχτείτε, κάντε κλικ στο κουμπί \"Όχι\".";
    Agent_Speak(L_EulaWhatToDoNext2_Text);
        
    var L_EulaWhatToDoNext3_Text = "Πρέπει να αποδεχτείτε αυτήν τη συμφωνία αν θέλετε να συνεχίσετε να χρησιμοποιείτε τα Windows.";
    Agent_Speak(L_EulaWhatToDoNext3_Text);
    			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_EulaWhatToDoNext4_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επόμενο\" για να μετακινηθείτε στην επόμενη οθόνη.";
    Agent_Speak(L_EulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_BadEulaAddCommands() {

    var L_BadEulaCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_BadEulaCommand2_Text = "&Τι λέει η ’δεια Χρήσης;";
    var L_BadEulaCommand3_Text = "Τι γίνεται, αν &δεν αποδεχτώ την ’δεια Χρήσης;";
    var L_BadEulaCommand4_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
    var L_BadEulaAboutThisStep1_Text = "Στην προηγούμενη οθόνη επιλέξατε να μην αποδεχτείτε τους όρους της ’δειας Χρήσης.";
    Agent_Speak(L_BadEulaAboutThisStep1_Text);

    var L_BadEulaAboutThisStep2_Text = "Σαν αποτέλεσμα δεν θα έχετε τη δυνατότητα να χρησιμοποιήσετε τα Windows.";
    Agent_Speak(L_BadEulaAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 

    var L_BadEulaAboutThisStep3_Text = "Αλλά μπορείτε να επιστρέψετε στην προηγούμενη οθόνη κάνοντας κλικ στο κουμπί \"Προηγούμενο\" και να αποδεχτείτε την άδεια χρήσης.";
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
        
    var L_BadEulaAboutThisStep4_Text = "Ή να επιβεβαιώσετε ότι θέλετε να σταματήσετε να χρησιμοποιείτε τα Windows και να σβήσετε τον υπολογιστή σας.";
    Agent_Speak(L_BadEulaAboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_BadEulaWhatDoesEulaSay()
{
    var L_BadEulaWhatDoesEulaSay1_Text = "Μόλις αποδεχτείτε τους όρους της, η ’δεια σας παρέχει το δικαίωμα χρήσης των Windows XP και σας παραχωρούνται ορισμένα επιπλέον δικαιώματα.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay1_Text);

    var L_BadEulaWhatDoesEulaSay2_Text = "Επιβάλλει επίσης ορισμένους περιορισμούς στη χρήση των Windows XP.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay2_Text);

    var L_BadEulaWhatDoesEulaSay3_Text = "Για λεπτομερείς πληροφορίες, κάντε κλικ στο κουμπί \"Προηγούμενο\", ανοίξτε την ’δεια και μεταφερθείτε με κύλιση στην ενότητα \"Παραχώρηση άδειας χρήσης\".";
    Agent_Speak(L_BadEulaWhatDoesEulaSay3_Text);
        
    var L_BadEulaWhatDoesEulaSay4_Text = "Η ’δεια περιγράφει επίσης την περιορισμένη εγγύηση και τους όρους σύμφωνα με τους οποίους μπορείτε να δημιουργείτε αντίγραφα ασφαλείας των Windows XP για σκοπούς τήρησης αντιγράφου ασφαλείας (back-up) ή αρχειοθέτησης.";
    Agent_Speak(L_BadEulaWhatDoesEulaSay4_Text);
}

function Agent_BadEulaWhatIfIDontAcceptEula()
{
    var L_BadEulaWhatIfIDontAcceptEula1_Text = "Εφόσον η ’δεια σας παρέχει το δικαίωμα χρήσης των Windows XP, πρέπει να αποδεχθείτε τους όρους αυτής της άδειας για να μπορέσετε να χρησιμοποιήσετε τα Windows XP.";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_BadEulaWhatIfIDontAcceptEula2_Text = "Αν αποφασίσετε να μην την αποδεχτείτε, μπορείτε να σβήσετε τον υπολογιστή σας κάνοντας κλικ στο κουμπί \"Τερματισμός\".";
    Agent_Speak(L_BadEulaWhatIfIDontAcceptEula2_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatIfIDontAcceptEula3_Text = "Όταν επανεκκινήσετε τον υπολογιστή σας, θα επιστρέψετε σε αυτήν την οθόνη.";
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
    
    var L_BadEulaWhatToDoNext1_Text = "Αν αποφασίσετε να αποδεχθείτε την ’δεια Χρήσης, κάντε κλικ στο κουμπί 'Προηγούμενο'.";
    Agent_Speak(L_BadEulaWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_BadEulaWhatToDoNext2_Text = "Πρέπει να αποδεχθείτε τη συμφωνία για να συνεχίσετε τη διαδικασία και να αρχίσετε να χρησιμοποιείτε τα Windows.";
    Agent_Speak(L_BadEulaWhatToDoNext2_Text);

    var L_BadEulaWhatToDoNext3_Text = "Αν αποφασίσετε να μην την αποδεχτείτε, κάντε κλικ στο κουμπί \"Τερματισμός\" για να σβήσετε τον υπολογιστή σας.";
    Agent_Speak(L_BadEulaWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_BadEulaWhatToDoNext4_Text = "Όταν επανεκκινήσετε τον υπολογιστή σας, θα επιστρέψετε σε αυτήν την οθόνη.";
    Agent_Speak(L_BadEulaWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}




function Agent_ProductKeyAddCommands() 
{
    var L_ProductKeyAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_ProductKeyAddCommands2_Text = "Τι είναι ο &αριθμός-κλειδί προϊόντος;";
    var L_ProductKeyAddCommands4_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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

        var L_ProductKeyAddCommands3_Text = "Γιατί δεν είναι &διαθέσιμο το κουμπί \"Επόμενο\";";

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
    var L_ProductKeyAboutThisStep1_Text = "Σε αυτή την οθόνη πληκτρολογείτε το 25ψήφιο αριθμό-κλειδί προϊόντος (Product Key) που θα πρέπει να σας έχει χορηγήσει ο κατασκευαστής του υπολογιστή σας.";
    Agent_Speak(L_ProductKeyAboutThisStep1_Text);

    var L_ProductKeyAboutThisStep2_Text = "Αν ο αριθμός-κλειδί προϊόντος δεν υπάρχει στο εξώφυλλο του CD, ελέγξτε το αυτοκόλλητο με το Πιστοποιητικό Αυθεντικότητας (Certificate of Authenticity) στον υπολογιστή σας ή στο πίσω μέρος του βιβλίου \"Γρήγορα αποτελέσματα\".";
    Agent_Speak(L_ProductKeyAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pid1,"Left");

    var L_ProductKeyAboutThisStep3_Text = "Τα γράμματα που πληκτρολογείτε εδώ θα γραφούν αυτόματα με κεφαλαία.";
    Agent_Speak(L_ProductKeyAboutThisStep3_Text);
    
    Agent_Play("RestPose");
        
    var L_ProductKeyAboutThisStep4_Text = "Μετά από αυτό το βήμα, μπορείτε να δηλώσετε τον υπολογιστή και το αντίγραφό σας των Microsoft Windows.";
    Agent_Speak(L_ProductKeyAboutThisStep4_Text);
        
    var L_ProductKeyAboutThisStep5_Text = "Είναι εύκολο και δηλώνοντας τα Windows, πολλά σπουδαία οφέλη είναι διαθέσιμα σε εσάς.";
    Agent_Speak(L_ProductKeyAboutThisStep5_Text);
}

function Agent_ProductKeyWhatIsProdKey()
{
    var L_ProductKeyWhatIsProdKey1_Text = "Το κάθε αντίγραφο των Windows κωδικοποιείται από τη Microsoft με έναν μοναδικό αριθμό-κλειδί προϊόντος.";
    Agent_Speak(L_ProductKeyWhatIsProdKey1_Text);

    var L_ProductKeyWhatIsProdKey2_Text = "Ο αριθμός-κλειδί προϊόντος εξασφαλίσει ότι έχετε αγοράσει ένα γνήσιο προϊόν της Microsoft.";
    Agent_Speak(L_ProductKeyWhatIsProdKey2_Text);

    var L_ProductKeyWhatIsProdKey3_Text = "Επίσης σας προστατεύει από πειρατικά αντίγραφα των Windows.";
    Agent_Speak(L_ProductKeyWhatIsProdKey3_Text);
        
    var L_ProductKeyWhatIsProdKey4_Text = "Ο αριθμός-κλειδί προϊόντος σας παρέχει επίσης το δικαίωμα για ορισμένα προνόμια πελατών, όπως υποστήριξη, υπηρεσίες μάρκετινγκ, αναβαθμίσεις και προσφορές Web.";
    Agent_Speak(L_ProductKeyWhatIsProdKey4_Text);
}

function Agent_ProductKeyWhyNextNotAvailable()
{
    var L_ProductKeyWhyNextNotAvailable1_Text = "Το κουμπί \"Επόμενο\" δεν είναι διαθέσιμο επειδή δεν πληκτρολογήσατε έναν έγκυρο αριθμό-κλειδί προϊόντος.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable1_Text);

    var L_ProductKeyWhyNextNotAvailable2_Text = "Πρέπει να πληκτρολογήσετε έναν έγκυρο αριθμό-κλειδί προϊόντος.";
    Agent_Speak(L_ProductKeyWhyNextNotAvailable2_Text);

    var L_ProductKeyWhyNextNotAvailable3_Text = "Στη συνέχεια θα έχετε τη δυνατότητα να κάνετε κλικ στο κουμπί \"Επόμενο\" για να συνεχίσετε.";
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
    
    var L_ProductKeyWhatToDoNext1_Text = "Αφού πληκτρολογήσετε έναν έγκυρο αριθμό-κλειδί προϊόντος, κάντε κλικ στο κουμπί \"Επόμενο\".";
    Agent_Speak(L_ProductKeyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}




function Agent_Reg1AddCommands() 
{
    var L_Reg1Command1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_Reg1Command2_Text = "Π&ληροφορίες για τη δήλωση";
    var L_Reg1Command3_Text = "&Πώς κάνω δήλωση τώρα;";
    var L_Reg1Command4_Text = "Μπορώ να κάνω δήλωση &αργότερα;";
    var L_Reg1Command5_Text = "Ποια είναι η &σημασία της δήλωσης;";
    var L_Reg1Command6_Text = "Πληροφορίες για την &κοινή χρήση πληροφοριών";

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
    var L_Reg1AboutThisStep1_Text = "Αυτή είναι η αρχική ενότητα της δήλωσης προϊόντος.";
    Agent_Speak(L_Reg1AboutThisStep1_Text);

    var L_Reg1AboutThisStep2_Text = "Σε αυτό το σημείο έχετε τη δυνατότητα να δηλώσετε το αντίγραφό σας των Windows.";
    Agent_Speak(L_Reg1AboutThisStep2_Text);

    var L_Reg1AboutThisStep3_Text = "Όταν ολοκληρώσετε τη δήλωση προϊόντος, αποκτάτε πρόσβαση σε αρκετά οφέλη για πελάτες της Microsoft.";
    Agent_Speak(L_Reg1AboutThisStep3_Text);
        
    var L_Reg1AboutThisStep4_Text = "Αυτά περιλαμβάνουν την ειδοποίηση για ενημερωμένες εκδόσεις προϊόντων και την πρόσβαση στις βραβευμένες υπηρεσίες υποστήριξης προϊόντων της Microsoft.";
    Agent_Speak(L_Reg1AboutThisStep4_Text);
        
    var L_Reg1AboutThisStep5_Text = "Σε αυτήν την οθόνη, μπορείτε να αποφασίσετε τον τρόπο δήλωσης του προϊόντος.";
    Agent_Speak(L_Reg1AboutThisStep5_Text);
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");
        
    var L_Reg1AboutThisStep6_Text = "Και αν θέλετε να μάθετε περισσότερα για την πολιτική απορρήτου της Microsoft, κάντε κλικ σε αυτήν τη σύνδεση.";
    Agent_Speak(L_Reg1AboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1AboutRegistration()
{    
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1AboutRegistration1_Text = "Κάντε κλικ εδώ για ξεκινήσετε τη διαδικασία δήλωσης και στη συνέχεια κάντε κλικ στο κουμπί \"Επόμενο\".";
    Agent_Speak(L_Reg1AboutRegistration1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.rb_reg_ms_no,"Left");

    var L_Reg1AboutRegistration2_Text = "Αλλά αν προτιμάτε να μην κάνετε δήλωση, κάντε κλικ στη δεύτερη επιλογή και στη συνέχεια κάντε κλικ στο κουμπί \"Επόμενο\".";
    Agent_Speak(L_Reg1AboutRegistration2_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg1HowToRegister()
{      
    Agent_GestureAtElement(g.rb_reg_ms_yes,"Left");
    
    var L_Reg1HowToRegister1_Text = "Για να δηλώσετε το αντίγραφό σας των Windows, βεβαιωθείτε ότι έχει επιλεχθεί η επιλογή \"Ναι\".";
    Agent_Speak(L_Reg1HowToRegister1_Text); 
    
    Agent_Play("RestPose");

    var L_Reg1HowToRegister2_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επόμενο\" για να συνεχίσετε.";
    Agent_Speak(L_Reg1HowToRegister2_Text);
}

function Agent_Reg1RegisterLater()
{
    var L_Reg1RegisterLater1_Text = "Αν δεν δηλώσετε τώρα το αντίγραφο των Windows, μπορείτε να το δηλώσετε αφού ολοκληρωθεί η εγκατάσταση των Windows.";
    Agent_Speak(L_Reg1RegisterLater1_Text);

    var L_Reg1RegisterLater2_Text = "Απλώς κάντε κλικ στην επιλογή \"Εκτέλεση\" του μενού \"Έναρξη\" και πληκτρολογήστε regwiz /r.";
    Agent_Speak(L_Reg1RegisterLater2_Text);

    var L_Reg1RegisterLater3_Text = "Αν δεν θυμάστε αυτά τα βήματα, κάντε κλικ στην επιλογή \"Βοήθεια και Υποστήριξη\" του μενού \"Έναρξη\", για να δείτε την απάντηση στις απορίες σας και άλλες χρήσιμες πληροφορίες";
    Agent_Speak(L_Reg1RegisterLater3_Text);
}

function Agent_Reg1WhyRegister()
{
    var L_Reg1WhyRegister1_Text = "Δηλώνοντας το αντίγραφο των Windows, έχετε δικαίωμα για ορισμένα οφέλη που έχουν οι πελάτες της Microsoft.";
    Agent_Speak(L_Reg1WhyRegister1_Text);

    var L_Reg1WhyRegister2_Text = "Αυτά περιλαμβάνουν την ειδοποίηση για ενημερωμένες εκδόσεις προϊόντων και την πρόσβαση στις βραβευμένες υπηρεσίες υποστήριξης προϊόντων της Microsoft.";
    Agent_Speak(L_Reg1WhyRegister2_Text);
}

function Agent_Reg1AboutSharingInfo()
{
    
    if (!window.external.get_RetailOOBE()) 
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Κάνοντας αυτές τις επιλογές, επιλέγετε να κοινοποιήσετε στη Microsoft και στον κατασκευαστή του υπολογιστή σας τα στοιχεία δήλωσης του προϊόντος σας.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text); 
    
        Agent_Play("RestPose");
    }
    else
    {         
        Agent_GestureAtElement(g.reg1_spn3,"Left");
        
        var L_Reg1AboutSharingInfo1_Text = "Όταν κάνετε αυτές τις επιλογές, επιλέγετε να κάνετε γνωστές τις πληροφορίες δήλωσής σας στη Microsoft.";
        Agent_Speak(L_Reg1AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");     
    }
    
    Agent_GestureAtElement(g.txtMSReglink,"Left");

    var L_Reg1AboutSharingInfo2_Text = "Για να μάθετε περισσότερα για την πολιτική απορρήτου της Microsoft, κάντε κλικ σε αυτήν τη σύνδεση.";
    Agent_Speak(L_Reg1AboutSharingInfo2_Text);
    
    Agent_Play("RestPose");
    
    if (!window.external.get_RetailOOBE()) 
    {           
        Agent_GestureAtElement(g.reg1_spn3,"Left");
                
        var L_Reg1AboutSharingInfo3_Text = "Για να μάθετε περισσότερα για την πολιτική απορρήτου %1, κάντε κλικ σε αυτήν τη σύνδεση.";
        Agent_Speak(ApiObj.FormatMessage(L_Reg1AboutSharingInfo3_Text, g_OEMNameStr));
    
        Agent_Play("RestPose");
    }
}




function Agent_Reg3AddCommands() 
{
    var L_Reg3Command1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_Reg3Command2_Text = "&Πώς αλλάζω πληροφορίες;";
    var L_Reg3Command3_Text = "Πληροφορίες για την &κοινή χρήση πληροφοριών";

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
    var L_Reg3AboutThisStep1_Text = "Για να δηλώσετε το αντίγραφο των Microsoft Windows, πρέπει να συμπληρώσετε τις απαιτούμενες πληροφορίες σε αυτήν την οθόνη.";
    Agent_Speak(L_Reg3AboutThisStep1_Text);
    
    Agent_GestureAtElement(g.UserCity,"Left");

    var L_Reg3AboutThisStep2_Text = "Θα χρειαστούμε πληροφορίες για όλα τα πλαίσια, εκτός από εκείνα που έχουν σημειωθεί ως \"Προαιρετικό\".";
    Agent_Speak(L_Reg3AboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_Reg3AboutThisStep3_Text = "Αλλά θα ήταν καταπληκτικό αν μπορούσατε να συμπληρώσετε και τις προαιρετικές πληροφορίες.";
    Agent_Speak(L_Reg3AboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_Reg3AboutThisStep4_Text = "Όταν έχετε ολοκληρώσει, απλώς κάντε κλικ στο κουμπί \"Επόμενο\".";
    Agent_Speak(L_Reg3AboutThisStep4_Text);
    
    Agent_Play("RestPose");
}

function Agent_Reg3HowToChangeInfo()
{
    var L_Reg3HowToChangeInfo1_Text = "Προσθέσαμε μερικές υποδείξεις μέσα στα πλαίσια για να σας δείξουμε τι να κάνετε.";
    Agent_Speak(L_Reg3HowToChangeInfo1_Text);
    
    Agent_GestureAtElement(g.UserLastName,"Left");

    var L_Reg3HowToChangeInfo2_Text = "Για παράδειγμα, απλώς κάντε κλικ σε αυτό το πλαίσιο \"Επώνυμο\" για να ξεκινήσετε την πληκτρολόγηση.";
    Agent_Speak(L_Reg3HowToChangeInfo2_Text);

    var L_Reg3HowToChangeInfo3_Text = "Μια κατακόρυφη γραμμή που αναβοσβήνει, γνωστή ως σημείο εισαγωγής, εμφανίζεται μέσα στο πλαίσιο.";
    Agent_Speak(L_Reg3HowToChangeInfo3_Text);

    var L_Reg3HowToChangeInfo4_Text = "Οτιδήποτε πληκτρολογείτε θα εισαχθεί στο σημείο εισαγωγής.";
    Agent_Speak(L_Reg3HowToChangeInfo4_Text);
    
    Agent_Play("RestPose");

    var L_Reg3HowToChangeInfo5_Text = "Μπορείτε να μετακινήσετε το σημείο παρεμβολής στο πλαίσιο κειμένου πιέζοντας τα πλήκτρα αριστερού ή δεξιού βέλους στο πληκτρολόγιό σας.";
    Agent_Speak(L_Reg3HowToChangeInfo5_Text);

    var L_Reg3HowToChangeInfo6_Text = "Μπορείτε επίσης να χρησιμοποιήσετε το πλήκτρο Delete για να διαγράψετε χαρακτήρες μετά το σημείο παρεμβολής ή το πλήκτρο Backspace για να διαγράψετε χαρακτήρες πριν από το σημείο παρεμβολής.";
    Agent_Speak(L_Reg3HowToChangeInfo6_Text);

    var L_Reg3HowToChangeInfo7_Text = "Αν θέλετε να εισαγάγετε ένα χαρακτήρα, τοποθετήστε το δείκτη μέσα στο πλαίσιο στη θέση όπου θέλετε να προσθέσετε το χαρακτήρα και κάντε κλικ.";
    Agent_Speak(L_Reg3HowToChangeInfo7_Text);

    var L_Reg3HowToChangeInfo8_Text = "Στη συνέχεια πληκτρολογήστε το χαρακτήρα που θέλετε να εισαγάγετε.";
    Agent_Speak(L_Reg3HowToChangeInfo8_Text);

    var L_Reg3HowToChangeInfo9_Text = "Μην ανησυχείτε αν δεν πληκτρολογείτε μέσα σε ένα πλαίσιο και η υπόδειξη εξακολουθεί να εμφανίζεται εκεί.";
    Agent_Speak(L_Reg3HowToChangeInfo9_Text);

    var L_Reg3HowToChangeInfo10_Text = "Η υπόδειξη είναι μόνο για να σας βοηθήσει. Δεν είναι μέρος των πληροφοριών δήλωσης.";
    Agent_Speak(L_Reg3HowToChangeInfo10_Text);
}

function Agent_Reg3AboutSharingInfo()
{    
    if (!window.external.get_RetailOOBE()) 
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
        
        var L_Reg3AboutSharingInfo1_Text = "Κάνοντας αυτές τις επιλογές, επιλέγετε να κοινοποιήσετε στη Microsoft και στον κατασκευαστή του υπολογιστή σας τα στοιχεία δήλωσης του προϊόντος σας.";
        Agent_Speak(L_Reg3AboutSharingInfo1_Text);
    
        Agent_Play("RestPose");
    }
    else
    {    
        Agent_GestureAtElement(g.sharemsonly,"Left");
         
        var L_Reg3AboutSharingInfo1_Text = "Όταν κάνετε αυτές τις επιλογές, επιλέγετε να κάνετε γνωστές τις πληροφορίες δήλωσής σας στη Microsoft.";
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

        

        L_Register3PlayCheckBoxScript1_Text = "Αυτήν τη στιγμή, οι πληροφορίες δήλωσης προϊόντος σε αυτήν την οθόνη έχουν οριστεί να αποσταλούν στη Microsoft και τον κατασκευαστή του υπολογιστή σας.";
        L_Register3PlayCheckBoxScript2_Text = "Αυτήν τη στιγμή, οι πληροφορίες δήλωσης προϊόντος σε αυτήν την οθόνη έχουν οριστεί να αποσταλούν στη Microsoft, αλλά όχι στον κατασκευαστή του υπολογιστή σας.";
        L_Register3PlayCheckBoxScript3_Text = "Αυτήν τη στιγμή, οι πληροφορίες δήλωσης προϊόντος σε αυτήν την οθόνη έχουν οριστεί να αποσταλούν στον κατασκευαστή του υπολογιστή σας και όχι στη Microsoft.";
        L_Register3PlayCheckBoxScript4_Text = "Αυτήν τη στιγμή, οι πληροφορίες δήλωσης προϊόντος σε αυτήν την οθόνη έχουν οριστεί να μην αποσταλούν ούτε στη Microsoft ούτε στον κατασκευαστή του υπολογιστή σας.";

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

        var L_Register3PlayCheckBoxScript5_Text = "Αυτές οι πληροφορίες βοηθούν ώστε να είστε ενήμεροι για ενημερώσεις προϊόντων και για άλλα οφέλη που προορίζονται για καταχωρημένους πελάτες.";
        Agent_Speak(L_Register3PlayCheckBoxScript5_Text);

        var L_Register3PlayCheckBoxScript6_Text = "Εάν θέλετε να αλλάξετε τον προορισμό αυτών των πληροφοριών,";
        Agent_Speak(L_Register3PlayCheckBoxScript6_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(elem, "TopCenterWidth");
		else
			Agent_GestureAtElement(elem, "Left");

        var L_Register3PlayCheckBoxScript7_Text = "Απλώς κάντε κλικ στα πλαίσια εδώ.";
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

        var L_Register3EncourageTabKey1_Text = "Πιέστε το πλήκτρο Tab για να μετακινηθείτε εδώ.";
        Agent_Speak(L_Register3EncourageTabKey1_Text);
}

function Agent_Register3EncourageMouseClick() {

        var L_Register3EncourageMouseClick1_Text = "Μετακινήστε το δείκτη του ποντικιού εδώ και κάντε κλικ με το αριστερό κουμπί του ποντικιού.";
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

                        var L_Register3PlayElementScript1_Text = "Σε αυτό το πλαίσιο, πληκτρολογήστε το όνομά σας.";
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

                        var L_Register3PlayElementScript3_Text = "Εδώ είναι η θέση που πρέπει να πληκτρολογήσετε το πατρώνυμό σας.";
                        Agent_Speak(L_Register3PlayElementScript3_Text);

                        break;

                case "UserLastName":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript4_Text = "Σε αυτό το πλαίσιο πληκτρολογήστε το επώνυμό σας.";
                        Agent_Speak(L_Register3PlayElementScript4_Text);

                        break;

                case "UserAddress":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript5_Text = "Πληκτρολογήστε εδώ τη διεύθυνσή σας.";
                        Agent_Speak(L_Register3PlayElementScript5_Text);

                        break;

                case "UserAddress2":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        Agent_Play("Think");

                        var L_Register3PlayElementScript6_Text = "Εάν χρειάζεστε επιπλέον χώρο για τη διεύθυνσή σας, πληκτρολογήστε το εδώ. Διαφορετικά, πατήστε το πλήκτρο Tab για να συνεχίσετε.";
                        Agent_Speak(L_Register3PlayElementScript6_Text);

                        Agent_Play("RestPose");

                        break;

                case "UserCity":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript7_Text = "Πληκτρολογήστε εδώ το όνομα της πόλης που κατοικείτε.";
                        Agent_Speak(L_Register3PlayElementScript7_Text);

                        break;

                case "UserStateTextBox":

                        if (g.document.dir == "rtl")
							Agent_GestureAtElement(elem, "Left");
						else 
							Agent_GestureAtElement(elem, "Right");

                        var L_Register3PlayElementScript8_Text = "Πληκτρολογήστε εδώ το νομό ή επαρχία σας.";
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
                                var L_Register3PlayElementScript91_Text = "Θα πρέπει να επιλέξετε το νομό σας.";
                                Agent_Speak(L_Register3PlayElementScript91_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript92_Text = "Για την εμφάνιση της λίστας με τους νομούς, κάντε κλικ στο βέλος με κατεύθυνση προς τα κάτω με το ποντίκι σας.";
                                Agent_Speak(L_Register3PlayElementScript92_Text);

                        }

                        else if (elem.id == "selCAProvince") {
                                var L_Register3PlayElementScript93_Text = "Θα πρέπει να επιλέξετε την επαρχία σας.";
                                Agent_Speak(L_Register3PlayElementScript93_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript94_Text = "Για την εμφάνιση της λίστας με τις επαρχίες, κάντε κλικ στο κουμπί κάτω βέλους με το ποντίκι σας.";
                                Agent_Speak(L_Register3PlayElementScript94_Text);

                        }

                        else {
                                var L_Register3PlayElementScript95_Text = "Πρέπει να επιλέξετε τη χώρα ή την περιοχή σας. Κάντε κλικ στο κουμπί κάτω βέλους με το ποντίκι σας.";
                                Agent_Speak(L_Register3PlayElementScript95_Text);

                                Agent_GestureAtElement(elem, dir);

                                var L_Register3PlayElementScript96_Text = "Για την εμφάνιση της λίστας με τις χώρες και τις περιοχές, κάντε κλικ στο κουμπί κάτω βέλους με το ποντίκι σας.";
                                Agent_Speak(L_Register3PlayElementScript96_Text);

                        }

                        Agent_Play("Explain");

                        var L_Register3PlayElementScript11_Text = "Στη συνέχεια, επιλέξτε το νομό σας.";
                        var L_Register3PlayElementScript12_Text = "Στη συνέχεια, επιλέξτε την επαρχία σας.";
                        var L_Register3PlayElementScript13_Text = "Στη συνέχεια, επιλέξτε τη χώρα σας ή την περιοχή σας.";

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

                        var L_Register3PlayElementScript14_Text = "Πληκτρολογήστε τον ταχυδρομικό σας κώδικα εδώ.";
                        Agent_Speak(L_Register3PlayElementScript14_Text);

                        break;

                case "UserEmailAddress":

                        if (elem.value == "") {

							if (g.document.dir == "rtl") 
								Agent_GestureAtElement(elem, "Left");
		
							else
								Agent_GestureAtElement(elem, "Right");

                            var L_Register3PlayElementScript15_Text = "Αν και η διεύθυνση ηλεκτρονικού ταχυδρομείου είναι προαιρετική, είναι ο τρόπος επικοινωνίας που προτιμάμε.";
                            Agent_Speak(L_Register3PlayElementScript15_Text);
							
							g_bAgentRegister3ShortEmail = true;
							
							Agent_Play("Explain");
							
                            var L_Register3PlayElementScript16_Text = "Εάν δεν έχετε διεύθυνση ηλεκτρονικού ταχυδρομείου, αφήστε αυτό το πλαίσιο κενό.";
                            Agent_Speak(L_Register3PlayElementScript16_Text);
							
							Agent_Play("Blink");
							                             
                        }
                        
                        else if ((elem.value.indexOf("@") < 0) || (elem.value.indexOf(".") < 0)) {

	                       if (g_strAgentLastFocusID == "UserEmailAddress") {

								Agent_Play("Decline");
								
								var L_Register3PlayElementScript17_Text = "Αυτή δεν φαίνεται να είναι έγκυρη διεύθυνση ηλεκτρονικού ταχυδρομείου.";
								Agent_Speak(L_Register3PlayElementScript17_Text);

								Agent_ExplainEmailAddress();
								
								if (g.document.dir == "rtl")
									Agent_GestureAtElement(elem, "Left");
								
								else
									Agent_GestureAtElement(elem, "Right");
                                        
								Agent_Play("Alert");
                                        
								var L_Register3PlayElementScript18_Text = "Εάν δεν έχετε διεύθυνση ηλεκτρονικού ταχυδρομείου, αφήστε αυτό το πλαίσιο κενό.";
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
        var L_ExplainEmailAddress1_Text = "Μια διεύθυνση ηλεκτρονικού ταχυδρομείου αποτελείται συνήθως από δύο τμήματα.";
        Agent_Speak(L_ExplainEmailAddress1_Text);

        var L_ExplainEmailAddress2_Text = "Το πρώτο τμήμα είναι το όνομα λογαριασμού το οποίο ακολουθείται από το σύμβολο @. Το δεύτερο τμήμα είναι το όνομα τομέα.";
        Agent_Speak(L_ExplainEmailAddress2_Text);

        var L_ExplainEmailAddress3_Text = "Για παράδειγμα, μια διεύθυνση ηλεκτρονικού ταχυδρομείου εμφανίζεται ως: %s";
        var re = /%s/i;
        var strEmail = "\\map=\"\"=\"greatcustomer@msn.com\"\\";

        Agent_Speak(L_ExplainEmailAddress3_Text.replace(re, strEmail) + "\\pau=2000\\");

        Agent_Play("RestPose");
}







function Agent_PrivacyMSAddCommands() 
{
    var L_PrivacyMSCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_PrivacyMSCommand2_Text = "&Τι είναι ένας ασφαλής διακομιστής;";
    var L_PrivacyMSCommand3_Text = "Τι είναι έ&να cookie;";
    var L_PrivacyMSCommand4_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
    var L_PrivacyMSAboutThisStep1_Text = "Αυτή η οθόνη εμφανίζει τη δήλωση απορρήτου της Microsoft.";
    Agent_Speak(L_PrivacyMSAboutThisStep1_Text);
    
    Agent_GestureAtElement(g.privtext,"Left");

    var L_PrivacyMSAboutThisStep2_Text = "Μπορείτε να διαβάσετε εδώ το κείμενο.";
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

    var L_PrivacyMSAboutThisStep3_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Προηγούμενο\", για να επιστρέψετε στην προηγούμενη οθόνη.";
    Agent_Speak(L_PrivacyMSAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PrivacyMSWhatIsSecureServer()
{
    var L_PrivacyMSWhatIsSecureServer1_Text = "Ένας διακομιστής είναι ένας υπολογιστής που παρέχει κοινόχρηστους πόρους, όπως πληροφορίες, σε άλλους υπολογιστές σε ένα δίκτυο.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer1_Text);

    var L_PrivacyMSWhatIsSecureServer2_Text = "Ένας ασφαλής διακομιστής είναι ένας υπολογιστής αυτού του  είδους ο οποίος έχει τη δυνατότητα να παρέχει ασφαλείς συναλλαγές, διασφαλίζοντας ότι δεν θα είναι δυνατή η πρόσβαση μη εξουσιοδοτημένων μερών στις πληροφορίες που είναι αποθηκευμένες σε αυτόν.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer2_Text);

    var L_PrivacyMSWhatIsSecureServer3_Text = "Για παράδειγμα, όταν δηλώνετε το προϊόν σας στη Microsoft, τα στοιχεία που αφορούν το όνομα και τη διεύθυνσή σας αποθηκεύονται στο διακομιστή ασφαλούς δήλωσης προϊόντος.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer3_Text);
        
    var L_PrivacyMSWhatIsSecureServer4_Text = "Με αυτόν τον τρόπο, τα στοιχεία σας παραμένουν απόρρητα και ασφαλή και κανείς άλλος εκτός από τη Microsoft δεν πρόκειται να έρθει σε επαφή μαζί σας μετά τη δήλωση του προϊόντος.";
    Agent_Speak(L_PrivacyMSWhatIsSecureServer4_Text);
}

function Agent_PrivacyMSWhatIsCookie()
{
    var L_PrivacyMSWhatIsCookie1_Text = "Ένα cookie είναι ένα μικρό αρχείο δεδομένων που αποθηκεύεται στον υπολογιστή σας όταν επισκέπτεστε ορισμένες τοποθεσίες Web.";
    Agent_Speak(L_PrivacyMSWhatIsCookie1_Text);

    var L_PrivacyMSWhatIsCookie2_Text = "Το cookie περιέχει βασικές πληροφορίες για εσάς, όπως την ηλεκτρονική σας διεύθυνση, ώστε να μην χρειάζεται να επαναλαμβάνετε την εισαγωγή τους κάθε φορά που επισκέπτεστε την τοποθεσία.";
    Agent_Speak(L_PrivacyMSWhatIsCookie2_Text);

    var L_PrivacyMSWhatIsCookie3_Text = "Για παράδειγμα, αν κάνετε μια αγορά σε μια τοποθεσία Web, η τοποθεσία αυτή ενδέχεται να στείλει στον υπολογιστή σας ένα cookie με τις σχετικές πληροφορίες αποστολής.";
    Agent_Speak(L_PrivacyMSWhatIsCookie3_Text);
        
    var L_PrivacyMSWhatIsCookie4_Text = "Έτσι, την επόμενη φορά που επισκέπτεστε αυτήν την τοποθεσία Web, δεν θα χρειαστεί να εισαγάγετε πάλι τις πληροφορίες.";
    Agent_Speak(L_PrivacyMSWhatIsCookie4_Text);
        
    var L_PrivacyMSWhatIsCookie5_Text = "Όταν δηλώνετε το προϊόν σας στη Microsoft, ο αναγνωριστικός αριθμός προϊόντος, το όνομά σας και η διεύθυνσή σας αποθηκεύονται σε ένα cookie στον υπολογιστή σας.";
    Agent_Speak(L_PrivacyMSWhatIsCookie5_Text);
        
    var L_PrivacyMSWhatIsCookie6_Text = "Έτσι, την επόμενη φορά που θα επισκεφθείτε τη διεύθυνση www.microsoft.com, η τοποθεσία Web θα σας αναγνωρίσει ως εγγεγραμμένο χρήστη των Windows.";
    Agent_Speak(L_PrivacyMSWhatIsCookie6_Text);
}

function Agent_PrivacyMSWhatToDoNext()
{    
    Agent_GestureAtElement(g.privtext,"Left");
    
    var L_PrivacyMSWhatToDoNext1_Text = "Για να δείτε περισσότερες πληροφορίες σχετικά με τη δήλωση απορρήτου, κάντε κλικ σε αυτό το πλαίσιο.";
    Agent_Speak(L_PrivacyMSWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.privtext,"Right");

    var L_PrivacyMSWhatToDoNext2_Text = "Στη συνέχεια, χρησιμοποιήστε τα πλήκτρα επάνω και κάτω βέλους εδώ, για να μετακινηθείτε στο κείμενο της δήλωσης απορρήτου.";
    Agent_Speak(L_PrivacyMSWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_PrivacyMSWhatToDoNext3_Text = "Μπορείτε επίσης να χρησιμοποιήσετε τα πλήκτρα Page Down και Page Up του πληκτρολογίου σας, για να μετακινηθείτε στο κείμενο.";
    Agent_Speak(L_PrivacyMSWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnBack, "TopLeft");
    }
    else
    {
        Agent_GestureAtElement(g.btnBack, "TopCenterWidth");
    } 
        
    var L_PrivacyMSWhatToDoNext4_Text = "Μόλις ολοκληρώσετε την ανάγνωση της δήλωσης απορρήτου, κάντε κλικ στο κουμπί \"Προηγούμενο\", για να επιστρέψετε στην προηγούμενη οθόνη δήλωσης.";
    Agent_Speak(L_PrivacyMSWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}





function Agent_RefDialAddCommands() 
{
    var L_RefDialAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_RefDialAddCommands2_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

    g_AgentCharacter.Commands.Add("Agent_RefDialAboutThisStep", L_RefDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RefDialWhatToDoNext", L_RefDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RefDialAboutThisStep()
{
    var L_RefDialAboutThisStep1_Text = "Σε αυτό το σημείο, τα Windows πρέπει να κάνουν μια τηλεφωνική κλήση χωρίς χρέωση.";
    Agent_Speak(L_RefDialAboutThisStep1_Text);

    var L_RefDialAboutThisStep2_Text = "Αυτό σας παρέχει τη δυνατότητα να χρησιμοποιήσετε τον υπάρχοντα λογαριασμό σας Internet σε αυτόν τον υπολογιστή.";
    Agent_Speak(L_RefDialAboutThisStep2_Text);
}

function Agent_RefDialWhatToDoNext()
{    
    Agent_GestureAtElement(g.btnManual,"Left");
    
    var L_RefDialWhatToDoNext1_Text = "Αν έχετε ήδη μια υπηρεσία παροχής Internet, ή για συντομία \"ISP\", ή ξέρετε ποια ISP θέλετε να χρησιμοποιήσετε, κάντε κλικ σε αυτό το κουμπί \"";
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

    var L_RefDialWhatToDoNext2_Text = "Αν θέλετε να επιλέξετε από μια λίστα διαθέσιμων ISP στην περιοχή σας, κάντε κλικ στο κουμπί \"Επόμενο\" για να συνεχίσετε.";
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

    var L_RefDialWhatToDoNext3_Text = "Ή κάντε κλικ στο κουμπί \"Παράλειψη\" για να συνεχίσετε χωρίς να ρυθμίσετε αυτόν τον υπολογιστή για πρόσβαση στο Internet.";
    Agent_Speak(L_RefDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RefDialingAddCommands() 
{
    var L_RefDialingAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_RefDialingAddCommands2_Text = "&Τι είναι η γραμμή στο μέσον της οθόνης μου;";
    var L_RefDialingAddCommands3_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
    var L_RefDialingAboutThisStep1_Text = "Τα Windows θα συνδεθούν τώρα με την υπηρεσία Microsoft Referral Service με σκοπό την ανάκτηση μιας λίστας με τις υπηρεσίες παροχής Internet που είναι διαθέσιμες στην περιοχή σας.";
    Agent_Speak(L_RefDialingAboutThisStep1_Text);

    var L_RefDialingAboutThisStep2_Text = "Περιμένετε...";
    Agent_Speak(L_RefDialingAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingAboutThisStep3_Text = "Διαφορετικά, εάν προτιμάτε, μπορείτε να παρακάμψετε αυτό το βήμα ή να επιστρέψετε στην προηγούμενη οθόνη.";
    Agent_Speak(L_RefDialingAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RefDialingWhatsThisBar()
{    
    Agent_GestureAtElement(g.tblProg,"Left");
    
    var L_RefDialingWhatsThisBar1_Text = "Αυτή είναι η γραμμή προόδου, που σας δείχνει πού βρίσκεστε στη διαδικασία.";
    Agent_Speak(L_RefDialingWhatsThisBar1_Text);

    var L_RefDialingWhatsThisBar2_Text = "Καθώς λαμβάνονται οι πληροφορίες από την υπηρεσία αναφοράς στον υπολογιστή σας, η γραμμή γεμίζει.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
    
    Agent_Play("RestPose");

    var L_RefDialingWhatsThisBar3_Text = "Όταν ληφθούν όλες οι πληροφορίες, θα συμπληρωθεί η γραμμή και θα μετακινηθείτε αυτόματα στην επόμενη οθόνη.";
    Agent_Speak(L_RefDialingWhatsThisBar2_Text);
}

function Agent_RefDialingWhatToDoNext()
{
    var L_RefDialingWhatToDoNext1_Text = "Περιμένετε όσο τα Windows λαμβάνουν πληροφορίες για ISP στον υπολογιστή σας από την υπηρεσία Microsoft Referral Service.";
    Agent_Speak(L_RefDialingWhatToDoNext1_Text);

    var L_RefDialingWhatToDoNext2_Text = "Μόλις ολοκληρωθεί η λήψη, η επόμενη οθόνη θα εμφανιστεί αυτόματα.";
    Agent_Speak(L_RefDialingWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RefDialingWhatToDoNext3_Text = "Αν θέλετε να παραλείψετε αυτό το βήμα, κάντε κλικ στο κουμπί \"Παράλειψη\".";
    Agent_Speak(L_RefDialingWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_RegDialAddCommands()
{
    var L_RegDialAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_RegDialAddCommands2_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

    g_AgentCharacter.Commands.Add("Agent_RegDialAboutThisStep", L_RegDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_RegDialWhatToDoNext", L_RegDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_RegDialAboutThisStep()
{
    var L_RegDialAboutThisStep1_Text = "Τα Windows χρησιμοποιούν τον υπολογιστή σας για την πραγματοποίηση μιας τηλεφωνικής κλήσης χωρίς χρέωση, για να συνδεθούν στην υπηρεσία δήλωσης.";
    Agent_Speak(L_RegDialAboutThisStep1_Text);

    var L_RegDialAboutThisStep2_Text = "Περιμένετε...";
    Agent_Speak(L_RegDialAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialAboutThisStep3_Text = "Διαφορετικά, εάν προτιμάτε, μπορείτε να παρακάμψετε αυτό το βήμα ή να επιστρέψετε στην προηγούμενη οθόνη.";
    Agent_Speak(L_RegDialAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_RegDialWhatToDoNext()
{
    var L_RegDialWhatToDoNext1_Text = "Περιμένετε όσο τα Windows συνδέονται στην υπηρεσία δήλωσης.";
    Agent_Speak(L_RegDialWhatToDoNext1_Text);

    var L_RegDialWhatToDoNext2_Text = "Μόλις τα Windows συνδεθούν, θα μετακινηθούν αυτόματα στην επόμενη οθόνη.";
    Agent_Speak(L_RegDialWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_RegDialWhatToDoNext3_Text = "Αν θέλετε να παραλείψετε αυτό το βήμα, κάντε κλικ στο κουμπί \"Παράλειψη\".";
    Agent_Speak(L_RegDialWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigDialAddCommands()
{
    var L_MigDialAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_MigDialAddCommands2_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

    g_AgentCharacter.Commands.Add("Agent_MigDialAboutThisStep", L_MigDialAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_MigDialWhatToDoNext", L_MigDialAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_MigDialAboutThisStep()
{
    var L_MigDialAboutThisStep1_Text = "Σε αυτό το σημείο, τα Windows πρέπει να κάνουν μια τηλεφωνική κλήση χωρίς χρέωση.";
    Agent_Speak(L_MigDialAboutThisStep1_Text);

    var L_MigDialAboutThisStep2_Text = "Αυτό σας παρέχει τη δυνατότητα να χρησιμοποιήσετε τον υπάρχοντα λογαριασμό σας Internet σε αυτόν τον υπολογιστή.";
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
    
    var L_MigDialWhatToDoNext1_Text = "Κάντε κλικ στο κουμπί 'Επόμενο' για να ξεκινήσετε να πραγματοποιείτε την κλήση.";
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

    var L_MigDialWhatToDoNext2_Text = "Αν θέλετε να παραλείψετε αυτό το βήμα, κάντε κλικ στο κουμπί \"Παράλειψη\".";
    Agent_Speak(L_MigDialWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}





function Agent_MigListAddCommands() 
{
    
    
    
	var L_MigListAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
	var L_MigListAddCommands2_Text = "Τι πρέπει να κάνω στη &συνέχεια;";
	
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
    var L_MigListAboutThisStep1_Text = "Σε αυτήν την οθόνη μπορείτε να καθορίσετε την υπηρεσία παροχής Internet, ή για συντομία \"ISP\", που θέλετε να χρησιμοποιείτε.";
    Agent_Speak(L_MigListAboutThisStep1_Text);

    var L_MigListAboutThisStep2_Text = "Αυτό σας παρέχει τη δυνατότητα να χρησιμοποιήσετε τον υπάρχοντα λογαριασμό σας Internet σε αυτόν τον υπολογιστή.";
    Agent_Speak(L_MigListAboutThisStep2_Text);
}

function Agent_MigListWhatToDoNext()
{
    Agent_GestureAtElement(g.selISPDropList,"Left");
    
    var L_MigListWhatToDoNext1_Text = "Επιλέξτε την υπηρεσία παροχής Internet κάνοντας κλικ στην καταχώρησή της στη λίστα.";
    Agent_Speak(L_MigListWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_MigListWhatToDoNext2_Text = "Εάν δεν βλέπετε την υπηρεσία παροχής στη λίστα, κάντε κλικ στο \"Η ISP μου δεν είναι στη λίστα\" στο κάτω μέρος της λίστας.";
    Agent_Speak(L_MigListWhatToDoNext2_Text);

    var L_MigListWhatToDoNext3_Text = "Επικοινωνήστε με την ISP σας για βοήθεια σχετικά με την επαναδημιουργία του λογαριασμού σας Interenet σε αυτόν τον υπολογιστή.";
    Agent_Speak(L_MigListWhatToDoNext3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_MigListWhatToDoNext4_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επόμενο\" για να συνεχίσετε.";
    Agent_Speak(L_MigListWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}



function Agent_MigPageAddCommands() 
{
	var L_MigPageAddCommands1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
	var L_MigPageAddCommands2_Text = "Πληροφορίες για &αυτήν την οθόνη";
	var L_MigPageAddCommands3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";
	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_WhatToDoNext", L_MigPageAddCommands1_Text);	
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_AboutThisStep", L_MigPageAddCommands2_Text);
	g_AgentCharacter.Commands.Add("Agent_MigPageCommand_HowToMoveOn", L_MigPageAddCommands3_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}
	
function Agent_MigPageCommand_WhatToDoNext() {
		
	var L_MigPageWhatToDoNext1_Text = "Όταν έχετε ολοκληρώσει αυτήν τη σελίδα.";
	Agent_Speak(L_MigPageWhatToDoNext1_Text);
	
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
			
	var L_MigPageWhatToDoNext2_Text = "Κάντε κλικ στο κουμπί \"Επόμενο\".";
	Agent_Speak(L_MigPageWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}

function Agent_MigPageCommand_AboutThisStep() 
{
	var L_MigPageAboutThisStep1_Text = "Σε αυτήν την οθόνη, θα γίνει προσπάθεια ενεργοποίησης του λογαριασμού σας Internet με την υπάρχουσα υπηρεσία παροχής.";
	Agent_Speak(L_MigPageAboutThisStep1_Text);
	
	Agent_Play("Pleased");
	
	var L_MigPageAboutThisStep2_Text = "Απλώς ακολουθήστε τις οδηγίες που εμφανίζονται στην οθόνη και τις οποίες σας παρέχει η υπηρεσία παροχής Internet.";
	Agent_Speak(L_MigPageAboutThisStep2_Text);
}

function Agent_MigPageCommand_HowToMoveOn() 
{
	var L_MigPageHowToMoveOn1_Text = "Όταν έχετε ολοκληρώσει αυτήν την οθόνη,";
	Agent_Speak(L_MigPageHowToMoveOn1_Text);		
			
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

	var L_MigPageHowToMoveOn2_Text = "Για να συνεχίσετε, κάντε κλικ στο κουμπί \"Επόμενο\".";
	Agent_Speak(L_MigPageHowToMoveOn2_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPDialAddCommands() 
{
    var L_ISPDial1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_ISPDial2_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

    g_AgentCharacter.Commands.Add("Agent_ISPDialAboutThisStep", L_ISPDial1_Text);
    g_AgentCharacter.Commands.Add("Agent_ISPDialWhatToDoNext", L_ISPDial2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_ISPDialAboutThisStep()
{
    var L_ISPDialAboutThisStep1_Text = "Σε αυτό το σημείο, τα Windows πρέπει να κάνουν μια τηλεφωνική κλήση χωρίς χρέωση.";
    Agent_Speak(L_ISPDialAboutThisStep1_Text);

    var L_ISPDialAboutThisStep2_Text = "Με αυτόν τον τρόπο θα αποκτήσετε τον νέο σας λογαριασμό Internet.";
    Agent_Speak(L_ISPDialAboutThisStep2_Text);

    var L_ISPDialAboutThisStep3_Text = "Κάντε απλώς κλικ στο κουμπί \"Επόμενο\" για να συνεχίσετε.";
    Agent_Speak(L_ISPDialAboutThisStep3_Text);
}

function Agent_ISPDialWhatToDoNext()
{
    var L_ISPDialWhatToDoNext1_Text = "Για να συνεχίσετε, κάντε κλικ στο κουμπί \"Επόμενο\".";
    Agent_Speak(L_ISPDialWhatToDoNext1_Text);

    var L_ISPDialWhatToDoNext2_Text = "Ή κάντε κλικ στο \"Παράλειψη\" για να συνεχίσετε χωρίς να ρυθμίσετε τον υπολογιστή για πρόσβαση στο Internet. Μπορείτε να το κάνετε αργότερα...";
    Agent_Speak(L_ISPDialWhatToDoNext2_Text);
}




function Agent_DialToneAddCommands()
{
    var L_DialToneAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_DialToneAddCommands2_Text = "Αν χρειαστεί να &μετακινήσω τον υπολογιστή;";
    var L_DialToneAddCommands3_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
    var L_DialToneAboutThisStep1_Text = "Τα Windows δεν ήταν δυνατό να εντοπίσουν σήμα τηλεφωνικής επιλογής.";
    Agent_Speak(L_DialToneAboutThisStep1_Text);

    var L_DialToneAboutThisStep2_Text = "Δεν αποκλείεται να υπάρχουν αρκετοί λόγοι που είναι υπεύθυνοι για αυτό.";
    Agent_Speak(L_DialToneAboutThisStep2_Text);

    var L_DialToneAboutThisStep3_Text = "Πρώτον, βεβαιωθείτε ότι το καλώδιο του τηλεφώνου για τον υπολογιστή σας είναι σωστά συνδεδεμένο και στις δύο άκρες του.";
    Agent_Speak(L_DialToneAboutThisStep3_Text);

    var L_DialToneAboutThisStep4_Text = "Δεύτερο, βεβαιωθείτε ότι δεν προσπαθεί κανείς να χρησιμοποιήσει την τηλεφωνική σας γραμμή αυτήν τη στιγμή.";
    Agent_Speak(L_DialToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneAboutThisStep5_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\", για να προσπαθήσετε πάλι.";
    Agent_Speak(L_DialToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_DialToneHowToMove()
{
    var L_DialToneHowToMove1_Text = "Αν χρειάζεται να μετακινήσετε τον υπολογιστή σας για να τον συνδέσετε στην τηλεφωνική γραμμή, βεβαιωθείτε ότι έχετε κλείσει το ρεύμα.";
    Agent_Speak(L_DialToneHowToMove1_Text);

    var L_DialToneHowToMove2_Text = "Όταν επανεκκινήσετε τον υπολογιστή σας, τα Windows θα συνεχίσουν αυτήν τη διεργασία από το σημείο που είχε διακοπεί.";
    Agent_Speak(L_DialToneHowToMove2_Text);
}

function Agent_DialToneWhatToDoNext()
{
    var L_DialToneWhatToDoNext1_Text = "Ελέγξτε πρώτα τη σύνδεση του υπολογιστή σας με την τηλεφωνική γραμμή.";
    Agent_Speak(L_DialToneWhatToDoNext1_Text);

    var L_DialToneWhatToDoNext2_Text = "Στη συνέχεια βεβαιωθείτε ότι η τηλεφωνική σας γραμμή δεν χρησιμοποιείται ήδη.";
    Agent_Speak(L_DialToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_DialToneWhatToDoNext3_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\", για να προσπαθήσετε πάλι.";
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

    var L_DialToneWhatToDoNext4_Text = "Ή κάντε κλικ στο κουμπί \"Παράλειψη\" για να συνεχίσετε χωρίς να δηλώσετε ή να ενεργοποιήσετε το αντίγραφό σας των Windows XP.";
    Agent_Speak(L_DialToneWhatToDoNext4_Text);
    
    Agent_Play("RestPose");

    var L_DialToneWhatToDoNext5_Text = "Μπορείτε πάντα να κάνετε δήλωση αργότερα.";
    Agent_Speak(L_DialToneWhatToDoNext5_Text);
}



function Agent_CnnctErrAddCommands() 
{
    var L_CnnctErrAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_CnnctErrAddCommands2_Text = "Πώς &απενεργοποιώ την αναμονή κλήσης;";
    var L_CnnctErrAddCommands3_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
    var L_CnnctErrAboutThisStep1_Text = "Η τηλεφωνική σας κλήση στο κέντρο δήλωσης διακόπηκε.";
    Agent_Speak(L_CnnctErrAboutThisStep1_Text);

    var L_CnnctErrAboutThisStep2_Text = "Δεν αποκλείεται να υπάρχουν αρκετοί λόγοι που είναι υπεύθυνοι για αυτό.";
    Agent_Speak(L_CnnctErrAboutThisStep2_Text);

    var L_CnnctErrAboutThisStep3_Text = "Πρώτον, ίσως δεν έχετε χρησιμοποιήσει τη σύνδεσή σας για μεγάλο χρονικό διάστημα και αποσυνδεθήκατε αυτόματα.";
    Agent_Speak(L_CnnctErrAboutThisStep3_Text);

    var L_CnnctErrAboutThisStep4_Text = "Δεύτερο, ίσως κάποιος να έχει προσπαθήσει να χρησιμοποιήσει την τηλεφωνική σας γραμμή ενώ ήσασταν συνδεδεμένοι.";
    Agent_Speak(L_CnnctErrAboutThisStep4_Text);

    var L_CnnctErrAboutThisStep5_Text = "Τρίτο, εάν έχετε αναμονή κλήσης, ενδέχεται να έχετε διακοπεί από μια εισερχόμενη κλήση.";
    Agent_Speak(L_CnnctErrAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrAboutThisStep6_Text = "Εάν η υπηρεσία τηλεφωνίας περιλαμβάνει τη δυνατότητα αναμονής κλήσης και γνωρίζετε τον αριθμό για να την απενεργοποιήσετε, πληκτρολογήστε τον εδώ.";
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

    var L_CnnctErrAboutThisStep7_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επόμενο\", για να προσπαθήσετε να επανασυνδεθείτε.";
    Agent_Speak(L_CnnctErrAboutThisStep7_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrTurnOffCallWaiting()
{
    var L_CnnctErrTurnOffCallWaiting1_Text = "Η υπηρεσία σας παροχής τηλεφωνίας μπορεί να σας πει τον κωδικό για να απενεργοποιήσετε την αναμονή κλήσης.";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting1_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrTurnOffCallWaiting2_Text = "Αν επιθυμείτε να απενεργοποιήσετε την υπηρεσία αναμονής κλήσεων του τηλεφώνου σας ενώ κάνετε αυτήν τη σύνδεση, πληκτρολογήστε εδώ αυτόν τον αριθμό.";
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

    var L_CnnctErrTurnOffCallWaiting3_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επόμενο\".";
    Agent_Speak(L_CnnctErrTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_CnnctErrWhatToDoNext()
{
    var L_CnnctErrWhatToDoNext1_Text = "Βεβαιωθείτε πρώτα ότι κανένας άλλος δεν χρησιμοποιεί την τηλεφωνική γραμμή που προσπαθείτε να χρησιμοποιήσετε για επικοινωνία με τη Microsoft.";
    Agent_Speak(L_CnnctErrWhatToDoNext1_Text);

    var L_CnnctErrWhatToDoNext2_Text = "Δεύτερον, αν έχετε αναμονή κλήσης, απενεργοποιήστε την προσωρινά.";
    Agent_Speak(L_CnnctErrWhatToDoNext2_Text);
    
    Agent_GestureAtElement(g.Callwait,"Left");

    var L_CnnctErrWhatToDoNext3_Text = "Για να την απενεργοποιήσετε, πληκτρολογήστε τον κωδικό σε αυτό το πλαίσιο.";
    Agent_Speak(L_CnnctErrWhatToDoNext3_Text);
    
    Agent_Play("RestPose");

    var L_CnnctErrWhatToDoNext4_Text = "Μετά την ολοκλήρωση της κλήσης σας, θα ενεργοποιήσουμε πάλι την αναμονή κλήσης αυτόματα.";
    Agent_Speak(L_CnnctErrWhatToDoNext4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_CnnctErrWhatToDoNext5_Text = "Όταν είστε έτοιμοι να προσπαθήσετε πάλι, κάντε κλικ στο κουμπί \"Επόμενο\".";
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

    var L_CnnctErrWhatToDoNext6_Text = "Ή κάντε κλικ στο κουμπί \"Παράλειψη\" για να συνεχίσετε χωρίς να δηλώσετε το προϊόν.";
    Agent_Speak(L_CnnctErrWhatToDoNext6_Text);
    
    Agent_Play("RestPose");
}



function Agent_HandShakeAddCommands() 
{
    var L_HandShakeAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_HandShakeAddCommands2_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

    g_AgentCharacter.Commands.Add("Agent_HandShakeAboutThisStep", L_HandShakeAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_HandShakeWhatToDoNext", L_HandShakeAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_HandShakeAboutThisStep()
{
    var L_HandShakeAboutThisStep1_Text = "Τα Windows δεν ήταν δυνατό να συνδεθούν με τη Microsoft αυτήν τη στιγμή.";
    Agent_Speak(L_HandShakeAboutThisStep1_Text);

    var L_HandShakeAboutThisStep2_Text = "Αυτό μπορεί να οφείλεται στο ότι οι τηλεφωνικές γραμμές είναι απασχολημένες ή στο ότι ο υπολογιστής δεν ήταν δυνατό να πραγματοποιήσει μια τηλεφωνική κλήση.";
    Agent_Speak(L_HandShakeAboutThisStep2_Text);

    var L_HandShakeAboutThisStep3_Text = "Δοκιμάστε να περιμένετε μερικά λεπτά.";
    Agent_Speak(L_HandShakeAboutThisStep3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_HandShakeAboutThisStep4_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\" για να προσπαθήσετε πάλι.";
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
    
    var L_HandShakeWhatToDoNext1_Text = "Περιμένετε μερικά λεπτά και μετά κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\".";
    Agent_Speak(L_HandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

    var L_HandShakeWhatToDoNext2_Text = "Εάν έχετε ήδη προσπαθήσει να το κάνετε αυτό μερικές φορές, επικοινωνήστε με τον κατασκευαστή του υπολογιστή σας.";
    Agent_Speak(L_HandShakeWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

    var L_HandShakeWhatToDoNext3_Text = "Ή κάντε κλικ στο κουμπί \"Παράλειψη\" για να συνεχίσετε χωρίς να δηλώσετε το προϊόν.";
    Agent_Speak(L_HandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_NoAnswerAddCommands() 
{
    var L_NoAnswerAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_NoAnswerAddCommands2_Text = "Αν ο &αριθμός τηλεφώνου είναι εσφαλμένος;";
    var L_NoAnswerAddCommands3_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
    var L_NoAnswerAboutThisStep1_Text = "Ο αριθμός τηλεφώνου που καλέστηκε δεν απάντησε.";
    Agent_Speak(L_NoAnswerAboutThisStep1_Text);

    var L_NoAnswerAboutThisStep2_Text = "Ελέγξτε να δείτε εάν ο αριθμός εμφανίζεται σωστά.";
    Agent_Speak(L_NoAnswerAboutThisStep2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_NoAnswerAboutThisStep3_Text = "Αν φαίνεται εντάξει, περιμένετε λίγα λεπτά και στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\" για να προσπαθήσετε πάλι.";
    Agent_Speak(L_NoAnswerAboutThisStep3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.edtPhoneNumber,"Left");

    var L_NoAnswerAboutThisStep4_Text = "Ωστόσο, αν ο αριθμός δεν είναι σωστός, κάντε κλικ εδώ και αλλάξτε τον.";
    Agent_Speak(L_NoAnswerAboutThisStep4_Text);
    
    Agent_Play("RestPose");

    var L_NoAnswerAboutThisStep5_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\".";
    Agent_Speak(L_NoAnswerAboutThisStep5_Text);
    
    Agent_GestureAtElement(g.btnRestore,"Right");

    var L_NoAnswerAboutThisStep6_Text = "Μπορείτε να επαναφέρετε τον αρχικό αριθμό που προσπάθησαν να καλέσουν τα Windows κάνοντας κλικ στο κουμπί \"Επαναφορά\".";
    Agent_Speak(L_NoAnswerAboutThisStep6_Text);
    
    Agent_Play("RestPose");
}

function Agent_NoAnswerWhatIfWrongNumber()
{
    var L_NoAnswerWhatIfWrongNumber1_Text = "Αν ο αριθμός τηλεφώνου εδώ δεν είναι σωστός, κάντε κλικ στο πλαίσιο κειμένου.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber1_Text);

    var L_NoAnswerWhatIfWrongNumber2_Text = "Μια κατακόρυφη γραμμή που αναβοσβήνει, γνωστή ως σημείο εισαγωγής, εμφανίζεται μέσα στο πλαίσιο.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber2_Text);

    var L_NoAnswerWhatIfWrongNumber3_Text = "Οτιδήποτε πληκτρολογείτε θα εισαχθεί στο σημείο εισαγωγής.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber3_Text);

    var L_NoAnswerWhatIfWrongNumber4_Text = "Μπορείτε να μετακινήσετε το σημείο παρεμβολής στο πλαίσιο κειμένου πιέζοντας τα πλήκτρα αριστερού ή δεξιού βέλους στο πληκτρολόγιό σας.";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber4_Text);

    var L_NoAnswerWhatIfWrongNumber5_Text = "Μπορείτε να χρησιμοποιήσετε το πλήκτρο Delete για να καταργήσετε χαρακτήρες μετά το σημείο εισαγωγής,";
    Agent_Speak(L_NoAnswerWhatIfWrongNumber5_Text);

    var L_NoAnswerWhatIfWrongNumber6_Text = "Ή χρησιμοποιήστε το πλήκτρο Backspace για να καταργήσετε χαρακτήρες πριν από το σημείο εισαγωγής.";
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
    
    var L_NoAnswerWhatToDoNext1_Text = "Εάν έχετε ελέγξει τον αριθμό τηλεφώνου εδώ και εμφανίζεται σωστά, κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\" για να προσπαθήσετε να ξανασυνδεθείτε.";
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

    var L_NoAnswerWhatToDoNext2_Text = "Για να συνεχίσετε, πρέπει να επιλέξετε εάν επιθυμείτε να επαναλάβετε τη σύνδεση ή να παραλείψετε την καταχώρηση του υπολογιστή σας προς το παρόν.";
    Agent_Speak(L_NoAnswerWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
}



function Agent_PulseAddCommands() 
{

    var L_PulseAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_PulseAddCommands2_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

    g_AgentCharacter.Commands.Add("Agent_PulseAboutThisStep", L_PulseAddCommands1_Text);
    g_AgentCharacter.Commands.Add("Agent_PulseWhatToDoNext", L_PulseAddCommands2_Text);
        
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_PulseAboutThisStep()
{
    var L_PulseAboutThisStep1_Text = "Τα Windows δεν ήταν δυνατό να προσδιορίσουν, εάν το τηλέφωνό σας χρησιμοποιεί τονική ή παλμική κλήση.";
    Agent_Speak(L_PulseAboutThisStep1_Text);

    var L_PulseAboutThisStep2_Text = "Τα Windows πρέπει να το γνωρίσζουν πριν συνεχίσουμε.";
    Agent_Speak(L_PulseAboutThisStep2_Text);
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseAboutThisStep3_Text = "Σε αυτήν την οθόνη, καθορίζετε τη μέθοδο κλήσης της τηλεφωνικής σας γραμμής.";
    Agent_Speak(L_PulseAboutThisStep3_Text);
    
    Agent_Play("RestPose");
}

function Agent_PulseWhatToDoNext()
{
    var L_PulseWhatToDoNext1_Text = "Κάντε κλικ μέσα στον λευκό κύκλο στα αριστερά της μεθόδου κλήσης που χρησιμοποιεί η τηλεφωνική σας γραμμή.";
    Agent_Speak(L_PulseWhatToDoNext1_Text);
    
    Agent_GestureAtElement(g.tone,"Left");

    var L_PulseWhatToDoNext2_Text = "Κάντε κλικ εδώ, εάν το τηλέφωνό σας χρησιμοποιεί τονική κλήση.";
    Agent_Speak(L_PulseWhatToDoNext2_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.pulse,"Left");

    var L_PulseWhatToDoNext3_Text = "Ή εδώ για παλμική κλήση.";
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

    var L_PulseWhatToDoNext4_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επόμενο\" για να προσπαθήσετε πάλι να καλέσετε.";
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

    var L_PulseWhatToDoNext5_Text = "Ή κάντε κλικ στο κουμπί \"Παράλειψη\" για να συνεχίσετε χωρίς να δηλώσετε το προϊόν.";
    Agent_Speak(L_PulseWhatToDoNext5_Text);
    
    Agent_Play("RestPose");
}





function Agent_TooBusyAddCommands() 
{
        var L_TooBusyAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
        var L_TooBusyAddCommands2_Text = "Αν ο &αριθμός τηλεφώνου είναι εσφαλμένος;";
        var L_TooBusyAddCommands3_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_AboutThisStep", L_TooBusyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatIfIncorrect", L_TooBusyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_TooBusyCommand_WhatToDoNext", L_TooBusyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_TooBusyCommand_AboutThisStep() 
{
    var L_TooBusyAboutThisStep1_Text = "Ο αριθμός τηλεφώνου που προσπαθήσαμε να καλέσουμε είναι εσφαλμένος ή απασχολημένος.";
    Agent_Speak(L_TooBusyAboutThisStep1_Text);

    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyAboutThisStep2_Text = "Ελέγξτε αν αυτός ο αριθμός φαίνεται σωστός.";
    Agent_Speak(L_TooBusyAboutThisStep2_Text);
        
    Agent_Play("RestPose");

    var L_TooBusyAboutThisStep3_Text = "Εάν εμφανίζεται σωστά, περιμένετε λίγα λεπτά,";
    Agent_Speak(L_TooBusyAboutThisStep3_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyAboutThisStep4_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\", για να προσπαθήσετε πάλι.";
    Agent_Speak(L_TooBusyAboutThisStep4_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatIfIncorrect() 
{        
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect1_Text = "Εάν ο αριθμός τηλεφώνου εδώ δεν είναι σωστός,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("cb_altnumber"),"Left");
    
    var L_TooBusyPhoneNumberIncorrect2_Text = " κάντε κλικ σε αυτό το πλαίσιο κειμένου,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_altnumber"),"Right");
    
    var L_TooBusyPhoneNumberIncorrect3_Text = "και εισαγάγετε έναν εναλλακτικό αριθμό εδώ.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect3_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("cb_outsideline"),"Left");

    var L_TooBusyPhoneNumberIncorrect4_Text = "Αν χρειάζεται να καλέσετε έναν αριθμό για να λάβετε εξωτερική γραμμή, κάντε κλικ σε αυτό το πλαίσιο ελέγχου,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect4_Text);

    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("edt_outsideline"),"Right");

    var L_TooBusyPhoneNumberIncorrect5_Text = "και πληκτρολογήστε τον αριθμό εδώ.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect5_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect6_Text = "Αν έχετε αναμονή κλήσης, η εξερχόμενη κλήση σας μπορεί να διακοπεί από μια εισερχόμενη κλήση.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect6_Text);

    var L_TooBusyPhoneNumberIncorrect7_Text = "Είναι εύκολο να απενεργοποιήσετε την υπηρεσία αναμονής κλήσης του τηλεφώνου σας καθώς κάνετε αυτήν τη σύνδεση.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect7_Text);
        
    Agent_GestureAtElement(g.document.all("cb_callwaiting"),"Left");

    var L_TooBusyPhoneNumberIncorrect8_Text = "Απλώς κάντε κλικ σε αυτό το πλαίσιο ελέγχου,";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect8_Text);

    Agent_Play("RestPose");
        
    Agent_GestureAtElement(g.document.all("edt_callwaiting"),"Right");

    var L_TooBusyPhoneNumberIncorrect9_Text = "και πληκτρολογήστε τον κωδικό εδώ.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect9_Text);

    Agent_Play("RestPose");

    var L_TooBusyPhoneNumberIncorrect10_Text = "Η αναμονή κλήσης θα ενεργοποιηθεί ξανά αφού ολοκληρωθεί η κλήση.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect10_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_TooBusyPhoneNumberIncorrect11_Text = "Θυμηθείτε να κάνετε κλικ στο κουμπί \"Επανάληψη κλήσης\" όταν είστε έτοιμοι να προσπαθήσετε πάλι.";
    Agent_Speak(L_TooBusyPhoneNumberIncorrect11_Text);
        
    Agent_Play("RestPose");
}

function Agent_TooBusyCommand_WhatToDoNext() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_TooBusyWhatToDoNext1_Text = "Εάν έχετε ελέγξει τον αριθμό τηλεφώνου εδώ και εμφανίζεται σωστά,";
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
    
     var L_TooBusyWhatToDoNext2_Text = "κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\", για να προσπαθήσετε να επανασυνδεθείτε.";
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

    var L_TooBusyWhatToDoNext3_Text = "Ή κάντε κλικ στο κουμπί \"Παράλειψη\" για να παραλείψετε αυτό το βήμα. Μπορείτε πάντα να κάνετε δήλωση μετά την ολοκλήρωση της εγκατάστασης των Windows.";
    Agent_Speak(L_TooBusyWhatToDoNext3_Text);
        
    Agent_Play("RestPose");
}



function Agent_ISPDToneAddCommands() 
{
    var L_ISPDToneAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_ISPDToneAddCommands2_Text = "Πληροφορίες για τη &μετακίνηση του υπολογιστή";
    var L_ISPDToneAddCommands3_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
    var L_ISPDToneAboutThisStep1_Text = "Τα Windows δεν ήταν δυνατό να εντοπίσουν σήμα τηλεφωνικής επιλογής.";
    Agent_Speak(L_ISPDToneAboutThisStep1_Text);

    var L_ISPDToneAboutThisStep2_Text = "Δεν αποκλείεται να υπάρχουν αρκετοί λόγοι που είναι υπεύθυνοι για αυτό.";
    Agent_Speak(L_ISPDToneAboutThisStep2_Text);

    var L_ISPDToneAboutThisStep3_Text = "Πρώτον, βεβαιωθείτε ότι το καλώδιο του τηλεφώνου για τον υπολογιστή σας είναι σωστά συνδεδεμένο και στις δύο άκρες του.";
    Agent_Speak(L_ISPDToneAboutThisStep3_Text);

    var L_ISPDToneAboutThisStep4_Text = "Δεύτερο, βεβαιωθείτε ότι δεν προσπαθεί κανείς να χρησιμοποιήσει την τηλεφωνική σας γραμμή αυτήν τη στιγμή.";
    Agent_Speak(L_ISPDToneAboutThisStep4_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneAboutThisStep5_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\", για να προσπαθήσετε πάλι.";
    Agent_Speak(L_ISPDToneAboutThisStep5_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPDToneHowToMove()
{
    var L_ISPDToneHowToMove1_Text = "Αν χρειάζεται να μετακινήσετε τον υπολογιστή σας για να τον συνδέσετε στην τηλεφωνική γραμμή, βεβαιωθείτε ότι έχετε κλείσει το ρεύμα.";
    Agent_Speak(L_ISPDToneHowToMove1_Text);

    var L_ISPDToneHowToMove2_Text = "Όταν επανεκκινήσετε τον υπολογιστή σας, τα Windows θα συνεχίσουν αυτήν τη διεργασία από το σημείο που είχε διακοπεί.";
    Agent_Speak(L_ISPDToneHowToMove2_Text);
}

function Agent_ISPDToneWhatToDoNext()
{
    var L_ISPDToneWhatToDoNext1_Text = "Ελέγξτε πρώτα τη σύνδεση του υπολογιστή σας με την τηλεφωνική γραμμή.";
    Agent_Speak(L_ISPDToneWhatToDoNext1_Text);

    var L_ISPDToneWhatToDoNext2_Text = "Στη συνέχεια βεβαιωθείτε ότι η τηλεφωνική σας γραμμή δεν χρησιμοποιείται ήδη.";
    Agent_Speak(L_ISPDToneWhatToDoNext2_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

    var L_ISPDToneWhatToDoNext3_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\", για να προσπαθήσετε πάλι.";
    Agent_Speak(L_ISPDToneWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}




function Agent_ISPCnErrAddCommands() {

        var L_ISPCnErrAddCommands1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_ISPCnErrAddCommands2_Text = "Πληροφορίες για τον τρόπο α&πενεργοποίησης της αναμονής κλήσης";
        var L_ISPCnErrAddCommands3_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_ISPCnErrAddCommands4_Text = "Πληροφορίες για τον τρόπο μετά&βασης στην επόμενη οθόνη";

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
        var L_ISPCnErrIntro1_Text = "Διακόπηκε η τηλεφωνική σύνδεση κατά την ρύθμιση της υπηρεσίας Internet.";
        Agent_Speak(L_ISPCnErrIntro1_Text);

        Agent_MoveToElement(g.document.all("txtBullet1"),"Left");
        
        var L_ISPCnErrIntro2_Text = "Δεν αποκλείεται να υπάρχουν αρκετοί λόγοι που είναι υπεύθυνοι για αυτό.";
        Agent_Speak(L_ISPCnErrIntro2_Text);

        var L_ISPCnErrIntro3_Text = "Πρώτο, ίσως δεν έχετε χρησιμοποιήσει τη σύνδεσή σας για ένα παρατεταμένο χρονικό διάστημα και αποσυνδεθήκατε αυτόματα.";
        Agent_Speak(L_ISPCnErrIntro3_Text);

        var L_ISPCnErrIntro4_Text = "Δεύτερο, ίσως κάποιος να έχει προσπαθήσει να χρησιμοποιήσει την τηλεφωνική σας γραμμή ενώ ήσασταν συνδεδεμένοι.";
        Agent_Speak(L_ISPCnErrIntro4_Text);

        var L_ISPCnErrIntro5_Text = "Τρίτο, εάν έχετε αναμονή κλήσης, ενδέχεται να έχετε διακοπεί από μια εισερχόμενη κλήση.";
        Agent_Speak(L_ISPCnErrIntro5_Text);

        Agent_GestureAtElement(g.document.all("Callwait"),"Left");

        var L_ISPCnErrIntro6_Text = "Εάν η υπηρεσία τηλεφωνίας περιλαμβάνει τη δυνατότητα αναμονής κλήσης και γνωρίζετε τον αριθμό για να την απενεργοποιήσετε, πληκτρολογήστε τον εδώ.";
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

        var L_ISPCnErrIntro7_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\", για να προσπαθήσετε να επανασυνδεθείτε.";
        Agent_Speak(L_ISPCnErrIntro7_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("txtBullet1"),"Left");

        var L_ISPCnErrWhatToDoNext1_Text = "Εάν έχετε επιλύσει όλες αυτές τις πιθανές αιτίες,";
        Agent_Speak(L_ISPCnErrWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPCnErrWhatToDoNext2_Text = "Επιθυμείτε να προσπαθήσετε να επανασυνδεθείτε,";
        Agent_Speak(L_ISPCnErrWhatToDoNext2_Text);

        var L_ISPCnErrWhatToDoNext3_Text = "Κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\", για να προσπαθήσετε πάλι.";
        Agent_Speak(L_ISPCnErrWhatToDoNext3_Text);
}

function Agent_ISPCnErrCommand_HowToTurnOffCallWaiting() 
{
        Agent_GestureAtElement(g.document.all("Callwait"),"Left");
        
        var L_ISPCnErrHowToTurnOffCallWaiting1_Text = "Εάν επιθυμείτε να απενεργοποιήσετε την υπηρεσία αναμονής κλήσης ενώ κάνετε αυτήν τη σύνδεση,";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting1_Text);

        var L_ISPCnErrHowToTurnOffCallWaiting2_Text = "Πληκτρολογήστε αυτόν τον αριθμό εδώ.";
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

        var L_ISPCnErrHowToTurnOffCallWaiting3_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\".";
        Agent_Speak(L_ISPCnErrHowToTurnOffCallWaiting3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPCnErrCommand_HowToMoveOn() 
{
        var L_ISPCnErrHowToMoveOn1_Text = "Για να προχωρήσετε, πρέπει να επιλέξετε να επανασυνδεθείτε ή να παραλείψετε αυτό το βήμα.";
        Agent_Speak(L_ISPCnErrHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPCnErrHowToMoveOn2_Text = "Κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\", για να προσπαθήσετε να επανασυνδεθείτε,";
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

        var L_ISPCnErrHowToMoveOn3_Text = "Ή κάντε κλικ στο κουμπί \"Παράλειψη\", για να συνεχίσετε χωρίς να επαναλάβετε την προσπάθεια.";
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

        var L_ISPHandShakeAddCommands1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_ISPHandShakeAddCommands2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_ISPHandShakeAddCommands3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_WhatToDoNext", L_ISPHandShakeAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_AboutThisScreen", L_ISPHandShakeAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPHandShakeCommand_HowToMoveOn", L_ISPHandShakeAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPHandShakeIntro() {

}

function Agent_ISPHandShakeCommand_AboutThisScreen() 
{
        var L_ISPHandShakeIntro1_Text = "Οι υπηρεσίες νέου λογαριασμού, για την υπηρεσία παροχής Internet που επιλέξατε, δεν είναι αυτήν τη στιγμή διαθέσιμες.";
        Agent_Speak(L_ISPHandShakeIntro1_Text);

        var L_ISPHandShakeIntro2_Text = "Δεν είμαι βέβαιος(η) γιατί.";
        Agent_Speak(L_ISPHandShakeIntro2_Text);

        var L_ISPHandShakeIntro3_Text = "Ωστόσο, μπορείτε να δοκιμάσετε να περιμένετε μερικά λεπτά και μετά να καλέσετε ξανά,";
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
        
        var L_ISPHandShakeIntro4_Text = "Διαφορετικά, μπορείτε να παρακάμψετε την εγκατάσταση της υπηρεσίας Internet προς το παρόν.";
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

        var L_ISPHandShakeWhatToDoNext1_Text = "Περιμένετε μερικά λεπτά και μετά κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\".";
        Agent_Speak(L_ISPHandShakeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeWhatToDoNext2_Text = "Εάν έχετε ήδη προσπαθήσει να το κάνετε αυτό μερικές φορές,";
        Agent_Speak(L_ISPHandShakeWhatToDoNext2_Text);
        
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeWhatToDoNext3_Text = "Μπορείτε να κάνετε κλικ στο κουμπί \"Παράλειψη\" για να συνεχίσετε χωρίς να ορίσετε την υπηρεσία Internet αυτήν τη στιγμή.";
        Agent_Speak(L_ISPHandShakeWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPHandShakeCommand_HowToMoveOn() 
{
        var L_ISPHandShakeHowToMoveOn1_Text = "Περιμένετε μερικά λεπτά,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPHandShakeHowToMoveOn2_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\", για να προσπαθήσετε να συνδεθείτε πάλι.";
        Agent_Speak(L_ISPHandShakeHowToMoveOn2_Text);
    
    Agent_Play("RestPose");

        var L_ISPHandShakeHowToMoveOn3_Text = "Ή εάν έχετε ήδη προσπαθήσει να το κάνετε αυτό,";
        Agent_Speak(L_ISPHandShakeHowToMoveOn3_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnSkip, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnSkip, "TopLeft");
    }

        var L_ISPHandShakeHowToMoveOn4_Text = "Μπορείτε να συνεχίσετε χωρίς να ορίσετε την υπηρεσία Internet, κάνοντας κλικ στο κουμπί \"Παράλειψη\".";
        Agent_Speak(L_ISPHandShakeHowToMoveOn4_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPInsAddCommands() {

        var L_ISPInsAddCommands1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_ISPInsAddCommands2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_ISPInsAddCommands3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_WhatToDoNext", L_ISPInsAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_AboutThisScreen", L_ISPInsAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPInsCommand_HowToMoveOn", L_ISPInsAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPInsIntro() {

}

function Agent_ISPInsCommand_AboutThisScreen() 
{
        var L_ISPInsIntro1_Text = "Λυπούμαστε. Τα Windows δεν ήταν δυνατό να συνδεθούν με την υπηρεσία παροχής Internet που επιλέξατε.";
        Agent_Speak(L_ISPInsIntro1_Text);

        var L_ISPInsIntro2_Text = "Εάν αντιμετωπίζετε προβλήματα σύνδεσης στο Internet με το πρόγραμμα περιήγησης ή με την αποστολή ή τη λήψη ηλεκτρονικού ταχυδρομείου,";
        Agent_Speak(L_ISPInsIntro2_Text);

        var L_ISPInsIntro3_Text = "Καλέστε την τεχνική υποστήριξη της υπηρεσίας σας παροχής, για βοήθεια.";
        Agent_Speak(L_ISPInsIntro3_Text);
}

function Agent_ISPInsCommand_WhatToDoNext() 
{
        var L_ISPInsWhatToDoNext1_Text = "Για να συνεχίσετε, κάντε κλικ στο κουμπί \"Επόμενο\".";
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

        var L_ISPInsHowToMoveOn1_Text = "Απλώς κάντε κλικ στο κουμπί \"Επόμενο\".";
        Agent_Speak(L_ISPInsHowToMoveOn1_Text);
    
    Agent_Play("RestPose");
}



function Agent_ISPNoAnwAddCommands() {

        var L_ISPNoAnwAddCommands1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_ISPNoAnwAddCommands2_Text = "Πληροφορίες για τις ενέργειες που πρέπει να γίνουν αν ο &αριθμός τηλεφώνου είναι εσφαλμένος";
        var L_ISPNoAnwAddCommands3_Text = "Πληροφορίες για α&υτήν την οθόνη";
        var L_ISPNoAnwAddCommands4_Text = "Πληροφορίες για τον τρόπο μετά&βασης στην επόμενη οθόνη";

        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoNext", L_ISPNoAnwAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect", L_ISPNoAnwAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_AboutThisScreen", L_ISPNoAnwAddCommands3_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPNoAnwCommand_HowToMoveOn", L_ISPNoAnwAddCommands4_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPNoAnwCommand_AboutThisScreen() 
{
        var L_ISPNoAnwIntro1_Text = "Ο αριθμός τηλεφώνου που καλέστηκε δεν απάντησε.";
        Agent_Speak(L_ISPNoAnwIntro1_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro2_Text = "Ελέγξτε να δείτε εάν ο αριθμός εμφανίζεται σωστά.";
        Agent_Speak(L_ISPNoAnwIntro2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwIntro3_Text = "Εάν εμφανίζεται σωστά, περιμένετε λίγα λεπτά,";
        Agent_Speak(L_ISPNoAnwIntro3_Text);

        var L_ISPNoAnwIntro4_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\" για να προσπαθήσετε πάλι.";
        Agent_Speak(L_ISPNoAnwIntro4_Text);

        var L_ISPNoAnwIntro5_Text = "Εντούτοις, εάν ο αριθμός είναι εσφαλμένος,";
        Agent_Speak(L_ISPNoAnwIntro5_Text);

        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwIntro6_Text = "Κάντε κλικ εδώ, για να τον διορθώσετε.";
        Agent_Speak(L_ISPNoAnwIntro6_Text);

        Agent_Play("RestPose");

        var L_ISPNoAnwIntro7_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\".";
        Agent_Speak(L_ISPNoAnwIntro7_Text);
}

function Agent_ISPNoAnwCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwWhatToDoNext1_Text = "Εάν έχετε ελέγξει τον αριθμό τηλεφώνου εδώ και εμφανίζεται σωστά,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwWhatToDoNext2_Text = "Είστε έτοιμοι για να επανασυνδεθείτε,";
        Agent_Speak(L_ISPNoAnwWhatToDoNext2_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwWhatToDoNext3_Text = "Κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\".";
        Agent_Speak(L_ISPNoAnwWhatToDoNext3_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPNoAnwCommand_WhatToDoPhoneNumberIncorrect() 
{
        Agent_GestureAtElement(g.document.all("edtPhoneNumber"),"Left");

        var L_ISPNoAnwPhoneNumberIncorrect1_Text = "Εάν ο αριθμός τηλεφώνου εδώ δεν είναι σωστός,";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect1_Text);

        var L_ISPNoAnwPhoneNumberIncorrect2_Text = "Κάντε κλικ στο πλαίσιο κειμένου.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect2_Text);
    
    Agent_Play("RestPose");

        var L_ISPNoAnwPhoneNumberIncorrect3_Text = "Μια κατακόρυφη γραμμή που αναβοσβήνει, γνωστή ως σημείο εισαγωγής, εμφανίζεται μέσα στο πλαίσιο.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect3_Text);

        var L_ISPNoAnwPhoneNumberIncorrect4_Text = "Οτιδήποτε πληκτρολογείτε θα εισαχθεί στο σημείο εισαγωγής.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect4_Text);

        var L_ISPNoAnwPhoneNumberIncorrect5_Text = "Έχετε τη δυνατότητα να μετακινήσετε το σημείο εισαγωγής στο πλαίσιο κειμένου, πιέζοντας τα πλήκτρα αριστερού ή δεξιού βέλους στο πληκτρολόγιό σας.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect5_Text);

        var L_ISPNoAnwPhoneNumberIncorrect6_Text = "Μπορείτε να χρησιμοποιήσετε το πλήκτρο Delete για να καταργήσετε χαρακτήρες μετά το σημείο εισαγωγής,";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect6_Text);

        var L_ISPNoAnwPhoneNumberIncorrect7_Text = "Ή χρησιμοποιήστε το πλήκτρο Backspace για να καταργήσετε χαρακτήρες πριν από το σημείο εισαγωγής.";
        Agent_Speak(L_ISPNoAnwPhoneNumberIncorrect7_Text);
}

function Agent_ISPNoAnwCommand_HowToMoveOn() 
{
        var L_ISPNoAnwHowToMoveOn1_Text = "Για να συνεχίσετε, πρέπει να επιλέξετε εάν επιθυμείτε να επαναλάβετε τη σύνδεση ή να παραλείψετε τη ρύθμιση της υπηρεσίας Internet.";
        Agent_Speak(L_ISPNoAnwHowToMoveOn1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPNoAnwHowToMoveOn2_Text = "Κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\", για να προσπαθήσετε να επανασυνδεθείτε.";
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

        var L_ISPNoAnwHowToMoveOn3_Text = "Διαφορετικά, για να συνεχίσετε χωρίς να ορίσετε την υπηρεσία Internet κάντε κλικ στο κουμπί \"Παράλειψη\".";
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

        var L_ISPPhBsyAddCommands1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_ISPPhBsyAddCommands2_Text = "Πληροφορίες για τις ενέργειες που πρέπει να γίνουν αν ο &αριθμός τηλεφώνου είναι εσφαλμένος";
        var L_ISPPhBsyAddCommands3_Text = "Πληροφορίες για αυτό το &βήμα";

        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoNext", L_ISPPhBsyAddCommands1_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect", L_ISPPhBsyAddCommands2_Text);
        g_AgentCharacter.Commands.Add("Agent_ISPPhBsyCommand_AboutThisScreen", L_ISPPhBsyAddCommands3_Text);

        Agent_AddAssistantanceCommand();
}

function Agent_ISPPhBsyIntro() {

}

function Agent_ISPPhBsyCommand_AboutThisScreen() 
{
        var L_ISPPhBsyIntro1_Text = "Τα Windows δεν ήταν δυνατό να συνδεθούν με την υπηρεσία παροχής Internet που επιλέξατε.";
        Agent_Speak(L_ISPPhBsyIntro1_Text);

        var L_ISPPhBsyIntro2_Text ="Ίσως η γραμμή του τηλεφώνου να είναι κατειλημμένη ή η υπηρεσία παροχής Internet να αντιμετωπίζει τεχνικά προβλήματα.";
        Agent_Speak(L_ISPPhBsyIntro2_Text);

        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyIntro3_Text = "Ελέγξτε να δείτε εάν ο αριθμός εμφανίζεται σωστά.";
        Agent_Speak(L_ISPPhBsyIntro3_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro4_Text = "Εάν εμφανίζεται σωστά, περιμένετε λίγα λεπτά,";
        Agent_Speak(L_ISPPhBsyIntro4_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  

        var L_ISPPhBsyIntro5_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\", για να προσπαθήσετε πάλι.";
        Agent_Speak(L_ISPPhBsyIntro5_Text);
    
    Agent_Play("RestPose");

        var L_ISPPhBsyIntro6_Text = "Εντούτοις, εάν ο αριθμός είναι εσφαλμένος,";
        Agent_Speak(L_ISPPhBsyIntro6_Text);

        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyIntro7_Text = "Κάντε κλικ εδώ, για να δοκιμάσετε έναν εναλλακτικό αριθμό στο ευρετήριο τηλεφώνων.";
        Agent_Speak(L_ISPPhBsyIntro7_Text);

        Agent_Play("RestPose");

        var L_ISPPhBsyIntro8_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\".";
        Agent_Speak(L_ISPPhBsyIntro8_Text);
}

function Agent_ISPPhBsyCommand_WhatToDoNext() 
{
        Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

        var L_ISPPhBsyWhatToDoNext1_Text = "Εάν έχετε ελέγξει τον αριθμό τηλεφώνου,";
        Agent_Speak(L_ISPPhBsyWhatToDoNext1_Text);
    
    Agent_Play("RestPose");    
    
        Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

        var L_ISPPhBsyWhatToDoNext2_Text = "ή έχετε επιλέξει να καλέσετε έναν εναλλακτικό αριθμό,";
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

        var L_ISPPhBsyWhatToDoNext4_Text = "Κάντε κλικ στο κουμπί \"Επανάληψη κλήσης\", για να προσπαθήσετε να επανασυνδεθείτε.";
        Agent_Speak(L_ISPPhBsyWhatToDoNext4_Text);
    
    Agent_Play("RestPose");
}

function Agent_ISPPhBsyCommand_WhatToDoPhoneNumberIncorrect() 
{
    Agent_GestureAtElement(g.document.all("spanDisplayNumber"),"Right");

    var L_ISPPhBsyPhoneNumberIncorrect1_Text = "Εάν ο αριθμός τηλεφώνου εδώ δεν είναι σωστός,";
    Agent_Speak(L_ISPPhBsyPhoneNumberIncorrect1_Text);
    
    Agent_Play("RestPose");
    
    Agent_GestureAtElement(g.document.all("DialRuleYes"),"Left");

    var L_ISPPhBsyPhoneNumberIncorrect2_Text = "Κάντε κλικ σε αυτό το κουμπί επιλογής για να δοκιμάσετε έναν εναλλακτικό αριθμό στο ευρετήριο τηλεφώνων.";
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

    var L_ISPPhBsyPhoneNumberIncorrect3_Text = "Κάντε κλικ στο κουμπί Επανάληψη Κλήσης όταν θελήσετε να ξαναδοκιμάσετε να συνδεθείτε.";
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

    var L_FinishAddCommands1_Text = "Πληροφορίες για αυτό το &βήμα";  
    var L_FinishAddCommands2_Text = "Πληροφορίες για την &εγγραφή από την επιφάνεια εργασίας.";    
    var L_FinishAddCommands3_Text = "Πώς ε&νεργοποιώ τα Windows από την επιφάνεια εργασίας;";    
    var L_FinishAddCommands4_Text = "Πώς κάνω &πρόσβαση στο Internet;";    
    var L_FinishAddCommands5_Text = "Τι πρέπει να κάνω στη &συνέχεια;";

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
    var L_FinishAboutThisStep1_Text = "Συγχαρητήρια! Έχετε ολοκληρώσει αυτήν τη διαδικασία.";
    Agent_Speak(L_FinishAboutThisStep1_Text);

    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishAboutThisStep2_Text = "Για να αρχίσετε να χρησιμοποιείτε τα Windows τώρα, κάντε κλικ στο κουμπί \"Τέλος\".";
    Agent_Speak(L_FinishAboutThisStep2_Text);
    
    Agent_Play("RestPose");

    var L_FinishAboutThisStep3_Text = "Αν θέλετε μια περιήγηση στις νέες, συναρπαστικές δυνατότητες των Windows XP, κάντε κλικ στην επιλογή \"Βοήθεια και Υποστήριξη\" του μενού \"Έναρξη\" και κατόπιν πληκτρολογήστε \"περιήγηση\" στο πλαίσιο \"Αναζήτηση\".";
    Agent_Speak(L_FinishAboutThisStep3_Text);
}

function Agent_FinishHowToRegister() 
{
    var L_FinishHowToRegister1_Text = "Αν δεν δηλώσατε το αντίγραφο των Windows νωρίτερα στη διάρκεια αυτής της διαδικασίας, μπορείτε να το δηλώσετε οποιαδήποτε στιγμή, κάνοντας κλικ στην επιλογή \"Εκτέλεση\" του μενού \"Έναρξη\" και πληκτρολογώντας regwiz /r.";
    Agent_Speak(L_FinishHowToRegister1_Text);
        
    var L_FinishHowToRegister2_Text = "Αν δεν θυμάστε αυτά τα βήματα, κάντε κλικ στην επιλογή \"Βοήθεια και Υποστήριξη\" του μενού \"Έναρξη\", για να δείτε την απάντηση στις απορίες σας και άλλες χρήσιμες πληροφορίες";
    Agent_Speak(L_FinishHowToRegister2_Text);
}

function Agent_FinishHowToActivate() 
{
    var L_FinishHowToActivate1_Text = "Αν δεν ενεργοποιήσατε το αντίγραφο των Windows νωρίτερα στη διάρκεια αυτής της διαδικασίας, κάθε λίγες ημέρες θα εμφανίζεται μια υπενθύμιση στην επιφάνεια εργασίας των Windows.";
    Agent_Speak(L_FinishHowToActivate1_Text);
        
    var L_FinishHowToActivate2_Text = "Πρέπει να ενεργοποιήσετε τα Windows μέσα στην καθορισμένη περίοδο ενεργοποίησης για να συνεχίσετε να τα χρησιμοποιείτε.";
    Agent_Speak(L_FinishHowToActivate2_Text);

    var L_FinishHowToActivate3_Text = "Αν δεν θέλετε να περιμένετε μέχρις ότου εμφανιστεί η υπενθύμιση, μπορείτε να εκτελέσετε τον \"Οδηγό ενεργοποίησης προϊόντος\", κάνοντας κλικ στην επιλογή \"Ενεργοποίηση των Windows\" από το μενού \"Έναρξη\".";
    Agent_Speak(L_FinishHowToActivate3_Text);

    var L_FinishHowToActivate4_Text = "Αν δεν θυμάστε αυτά τα βήματα, κάντε κλικ στην επιλογή \"Βοήθεια και Υποστήριξη\" του μενού \"Έναρξη\", για να δείτε την απάντηση στις απορίες σας και άλλες χρήσιμες πληροφορίες";
    Agent_Speak(L_FinishHowToActivate4_Text);
}

function Agent_FinishHowToAccessInternet() 
{
    var L_FinishHowToAccessInternet1_Text = "Αν έχετε ρυθμίσει αυτόν τον υπολογιστή ώστε να έχετε πρόσβαση στο Internet, κάντε κλικ στην επιλογή \"Internet\" στο επάνω μέρος του μενού \"Έναρξη\" στην επιφάνεια εργασίας των Windows.";
    Agent_Speak(L_FinishHowToAccessInternet1_Text);
        
    var L_FinishHowToAccessInternet2_Text = "Αν αυτός ο υπολογιστής δεν είναι ρυθμισμένος για πρόσβαση στο Internet, θα εμφανιστεί ο \"Οδηγός σύνδεσης στο Internet\".";
    Agent_Speak(L_FinishHowToAccessInternet2_Text);

    var L_FinishHowToAccessInternet3_Text = "Ακολουθήστε τα βήματα σε αυτόν τον οδηγό για να συνδεθείτε στο Internet.";
    Agent_Speak(L_FinishHowToAccessInternet3_Text);
}

function Agent_FinishWhatToDoNext() 
{
    var L_FinishWhatToDoNext1_Text = "Τελειώσατε τη ρύθμιση παραμέτρων του υπολογιστή σας με τα Microsoft Windows XP!";
    Agent_Speak(L_FinishWhatToDoNext1_Text);
    
    if (window.parent.document.dir == "rtl")
    {
        Agent_GestureAtElement(g.btnNext, "TopCenterWidth");
    }
    else
    {
        Agent_GestureAtElement(g.btnNext, "TopLeft");
    }  
        
    var L_FinishWhatToDoNext2_Text = "Απλώς κάντε κλικ στο κουμπί \"Τέλος\".";
    Agent_Speak(L_FinishWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

    var L_FinishWhatToDoNext3_Text = "Αν θέλετε μια περιήγηση στις νέες, συναρπαστικές δυνατότητες των Windows XP, κάντε κλικ στην επιλογή \"Βοήθεια και Υποστήριξη\" του μενού \"Έναρξη\" και κατόπιν πληκτρολογήστε \"περιήγηση\" στο πλαίσιο \"Αναζήτηση\".";
    Agent_Speak(L_FinishWhatToDoNext3_Text);

    var L_FinishWhatToDoNext4_Text = "Και απολαύστε τα Windows XP!";
    Agent_Speak(L_FinishWhatToDoNext4_Text);
}






function Agent_MouseTutAddCommands() {

        var L_MouseTutMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_MouseTutMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_MouseTutMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        
        
        

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

        var L_MouseTutIntroTellMeWhatToDoNext1_Text = "Για να ξεκινήσετε, κάντε κλικ στο κουμπί \"Πρόγραμμα εκμάθησης\".";
        Agent_Speak(L_MouseTutIntroTellMeWhatToDoNext1_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutTellMeAboutThisScreen() 
{
        var L_MouseTutTellMeAboutThisScreen1_Text = "Αυτή είναι η αρχή ενός συνόλου οθονών, που θα σας βοηθήσουν να μάθετε πώς να χρησιμοποιήσετε το ποντίκι του υπολογιστή.";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen1_Text);

        var L_MouseTutTellMeAboutThisScreen2_Text = "Μπορείτε να επιλέξετε να προχωρήσετε σε αυτό το πρόγραμμα εκμάθησης,";
        Agent_Speak(L_MouseTutTellMeAboutThisScreen2_Text);

        var L_MouseTutTellMeAboutThisScreen3_Text = "Ή μπορείτε να το παραβλέψετε, εάν γνωρίζετε ήδη πώς να χρησιμοποιήσετε το ποντίκι σας.";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen1_Text = "Για να ξεκινήσετε, κάντε κλικ στο κουμπί \"Πρόγραμμα εκμάθησης\".";
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

        var L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text = "Ή κάντε κλικ στο κουμπί \"Επόμενο\", για να παρακάμψετε το πρόγραμμα εκμάθησης.";
        Agent_Speak(L_MouseTutIntroTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_MouseTutAAddCommands() {

        var L_MouseTutAMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_MouseTutAMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_MouseTutAMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeWhatToDoNext", L_MouseTutAMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeAboutThisScreen", L_MouseTutAMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutATellMeHowToMoveToNextScreen", L_MouseTutAMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutATellMeWhatToDoNext() 
{
        var L_MouseTutAWhatToDoNext1_Text = "Προσπαθήστε να μετακινήσετε το ποντίκι, για να δείτε πώς μετακινεί το δείκτη στην οθόνη σας.";
        Agent_Speak(L_MouseTutAWhatToDoNext1_Text);

        var L_MouseTutAWhatToDoNext2_Text = "Βεβαιωθείτε ότι μετακινείτε το ποντίκι σε επίπεδη επιφάνεια.";
        Agent_Speak(L_MouseTutAWhatToDoNext2_Text);
}

function Agent_OnMouseTutATellMeAboutThisScreen() 
{

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutATellMeAboutThisScreen1_Text = "Αυτή η οθόνη σας δείχνει πώς να χρησιμοποιήσετε το ποντίκι, για να μετακινήσετε το δείκτη στην οθόνη.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutATellMeAboutThisScreen2_Text = "Απλώς μετακινήστε το ποντίκι αριστερά, δεξιά, προς ή μακριά από τον υπολογιστή σας.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen2_Text);

        var L_MouseTutATellMeAboutThisScreen3_Text = "Προσπαθήστε μόνοι σας.";
        Agent_Speak(L_MouseTutATellMeAboutThisScreen3_Text);
}

function Agent_OnMouseTutATellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutBAddCommands() {

        var L_MouseTutBMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_MouseTutBMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_MouseTutBMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeWhatToDoNext", L_MouseTutBMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeAboutThisScreen", L_MouseTutBMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutBTellMeHowToMoveToNextScreen", L_MouseTutBMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutBTellMeWhatToDoNext() 
{
        var L_MouseTutBWhatToDoNext1_Text = "Πιάστε το ποντίκι σας και μετακινήστε το σε άλλη θέση.";
        Agent_Speak(L_MouseTutBWhatToDoNext1_Text);

        var L_MouseTutBWhatToDoNext2_Text = "Κατόπιν, αφήστε το κάτω και μετακινήστε το πάλι.";
        Agent_Speak(L_MouseTutBWhatToDoNext2_Text);
}

function Agent_OnMouseTutBTellMeAboutThisScreen() 
{
        var L_MouseTutBTellMeAboutThisScreen1_Text = "Αυτή η οθόνη σας δείχνει πώς να προσαρμόσετε το ποντίκι, εάν δεν έχετε χώρο.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen1_Text);

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("image"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("image"), "RightCenter");

        var L_MouseTutBTellMeAboutThisScreen2_Text = "Απλώς πιάστε το ποντίκι και μετακινήστε το σε πιο άνετη θέση.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen2_Text);

        Agent_Play("RestPose");

        var L_MouseTutBTellMeAboutThisScreen3_Text = "Όταν το αφήσετε κάτω και το μετακινήσετε, ο δείκτης ακολουθεί τις κινήσεις σας.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen3_Text);

        var L_MouseTutBTellMeAboutThisScreen4_Text = "Παρατηρήστε ότι ο δείκτης μετακινείται, μόνον όταν μετακινείτε το ποντίκι σε λεία επιφάνεια.";
        Agent_Speak(L_MouseTutBTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutBTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutCAddCommands() {

        var L_MouseTutCMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_MouseTutCMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_MouseTutCMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeWhatToDoNext", L_MouseTutCMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeAboutThisScreen", L_MouseTutCMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutCTellMeHowToMoveToNextScreen", L_MouseTutCMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_MouseTutCIntro() {
        
}

function Agent_OnMouseTutCTellMeWhatToDoNext() 
{
        var L_MouseTutCWhatToDoNext1_Text = "Προσπαθήστε μετακινώντας το ποντίκι να μετακινήσετε το δείκτη επάνω στα κουμπιά γραφικών σε αυτήν την οθόνη.";
        Agent_Speak(L_MouseTutCWhatToDoNext1_Text);
}

function Agent_OnMouseTutCTellMeAboutThisScreen() 
{
        var L_MouseTutCTellMeAboutThisScreen1_Text = "Αυτή η οθόνη σας βοηθά να εξασκηθείτε, μετακινώντας το δείκτη με το ποντίκι.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutCTellMeAboutThisScreen2_Text = "Χρησιμοποιήστε το ποντίκι, για να μετακινήσετε το δείκτη επάνω σε αυτά τα κουμπιά γραφικών.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutCTellMeAboutThisScreen3_Text = "Παρατηρήστε ότι όταν μετακινείτε το δείκτη επάνω στο κουμπί, αλλάζει η μορφή του.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen3_Text);

        var L_MouseTutCTellMeAboutThisScreen4_Text = "Το κουμπί ανακτά την αρχική του μορφή, όταν μετακινείτε το δείκτη εκτός του γραφικού.";
        Agent_Speak(L_MouseTutCTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutCTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutDAddCommands() {

        var L_MouseTutDMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_MouseTutDMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_MouseTutDMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        
        
        

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeWhatToDoNext", L_MouseTutDMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeAboutThisScreen", L_MouseTutDMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutDTellMeHowToMoveToNextScreen", L_MouseTutDMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutDTellMeWhatToDoNext() 
{
        var L_MouseTutDWhatToDoNext1_Text = "Προσπαθήστε να κάνετε κλικ με το αριστερό κουμπί του ποντικιού.";
        Agent_Speak(L_MouseTutDWhatToDoNext1_Text);
}

function Agent_OnMouseTutDTellMeAboutThisScreen() 
{
        var L_MouseTutDTellMeAboutThisScreen1_Text = "Σε αυτό το τμήμα του προγράμματος εκμάθησης θα μάθετε πώς να κάνετε κλικ με τα κουμπιά του ποντικιού.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen1_Text);

        var elem = g.document.all("image");

        Agent_MoveToElement(elem, "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen2_Text = "Για να επιλέξετε ένα στοιχείο στην οθόνη, χρησιμοποιήστε το ποντίκι για να μετακινήσετε το δείκτη επάνω από το στοιχείο,";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen2_Text);

        Agent_GestureAtElement(g.document.all("image"), "LeftCenter");

        var L_MouseTutDTellMeAboutThisScreen3_Text = "Κατόπιν πατήστε και αφήστε το κουμπί του ποντικιού, όπως βλέπετε εδώ.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutDTellMeAboutThisScreen4_Text = "Αυτή η ενέργεια ονομάζεται κλικ.";
        Agent_Speak(L_MouseTutDTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutDTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutEAddCommands() {

        var L_MouseTutEMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_MouseTutEMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_MouseTutEMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeWhatToDoNext", L_MouseTutEMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeAboutThisScreen", L_MouseTutEMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutETellMeHowToMoveToNextScreen", L_MouseTutEMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutETellMeWhatToDoNext() 
{
        var L_MouseTutEWhatToDoNext1_Text = "Εξασκηθείτε κάνοντας κλικ με το αριστερό κουμπί του ποντικιού στα κουμπιά γραφικών σε αυτήν την οθόνη.";
        Agent_Speak(L_MouseTutEWhatToDoNext1_Text);
}

function Agent_OnMouseTutETellMeAboutThisScreen() 
{
        var L_MouseTutETellMeAboutThisScreen1_Text = "Αυτή η οθόνη σας βοηθά να εξασκηθείτε, κάνοντας κλικ με το ποντίκι.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("toolbar"), "LeftCenter");

        var L_MouseTutETellMeAboutThisScreen2_Text = "Χρησιμοποιήστε το ποντίκι, για να τοποθετήσετε το δείκτη του ποντικιού σε ένα από αυτά τα κουμπιά γραφικών.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutETellMeAboutThisScreen3_Text = "Κάντε κλικ με το αριστερό κουμπί του ποντικιού.";
        Agent_Speak(L_MouseTutETellMeAboutThisScreen3_Text);

        var L_MouseTutETellMeAboutThisScreen4_Text = "Έπειτα, προσπαθήστε να πραγματοποιήσετε την παραπάνω ενέργεια με τα άλλα κουμπιά γραφικών.";
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

        var L_MouseTutFMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_MouseTutFMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_MouseTutFMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

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
        var L_MouseTutFTellMeAboutThisScreen1_Text = "Τα καταφέρατε πολύ καλά!";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen1_Text);

        var L_MouseTutFTellMeAboutThisScreen2_Text = "Μέχρι στιγμής, μάθατε πώς να τοποθετείτε το δείκτη του ποντικιού και να κάνετε κλικ με το ποντίκι.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen2_Text);

        var L_MouseTutFTellMeAboutThisScreen3_Text = "Τώρα θα εξασκήσετε αυτά που μάθατε, για να χρησιμοποιήσετε άλλα στοιχεία που θα βρείτε στα Windows ή σε ιστοσελίδες.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen3_Text);

        var L_MouseTutFTellMeAboutThisScreen4_Text = "Όταν είστε έτοιμοι, κάντε κλικ στο κουμπί \"Επόμενο\" για να συνεχίσετε.";
        Agent_Speak(L_MouseTutFTellMeAboutThisScreen4_Text);
}

function Agent_OnMouseTutFTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutGAddCommands() {

        var L_MouseTutGMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_MouseTutGMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_MouseTutGMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeWhatToDoNext", L_MouseTutGMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeAboutThisScreen", L_MouseTutGMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutGTellMeHowToMoveToNextScreen", L_MouseTutGMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutGPreDisplayMenu() {

        if (g.btnNext.disabled) {

                var L_MouseTutGMenuCommand4_Text = "Πληροφορίες για το λόγο που &δεν είναι διαθέσιμο το κουμπί \"Επόμενο\"";

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
        var L_MouseTutGWhyNextNotAvailable1_Text = "Το κουμπί \"Επόμενο\" δεν είναι διαθέσιμο επειδή δεν έχετε επιλέξει πόλη.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable1_Text);

		Agent_GestureAtElement(g.document.all("selCity"),"LeftCenter");

        var L_MouseTutGWhyNextNotAvailable2_Text = "Πρέπει πρώτα να κάνετε κλικ σε μία από αυτές τις πόλεις.";
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

        var L_MouseTutGWhyNextNotAvailable3_Text = "Στη συνέχεια θα έχετε τη δυνατότητα να κάνετε κλικ στο κουμπί \"Επόμενο\" για να συνεχίσετε.";
        Agent_Speak(L_MouseTutGWhyNextNotAvailable3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeWhatToDoNext() {
		
		if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "RightCenter");

        var L_MouseTutGWhatToDoNext1_Text = "Κάντε κλικ στα πλήκτρα επάνω και κάτω βέλους, για να μετακινηθείτε στη λίστα των πόλεων.";
        Agent_Speak(L_MouseTutGWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

		if (g.document.dir == "rtl")
			Agent_Play("RestPose");
		else
			Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGWhatToDoNext2_Text = "Κατόπιν, επιλέξτε μια πόλη, κάνοντας κλικ στο όνομά της.";
        Agent_Speak(L_MouseTutGWhatToDoNext2_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutGWhatToDoNext3_Text = "Στη συνέχεια, προσπαθήστε να κάνετε κλικ σε άλλες πόλεις στη λίστα.";
        Agent_Speak(L_MouseTutGWhatToDoNext3_Text);

        Agent_MoveToElement(document.all("AssistImg"),"BottomCenterWidthExactBottom");
}

function Agent_OnMouseTutGTellMeAboutThisScreen() {
        var L_MouseTutGTellMeAboutThisScreen1_Text = "Σε αυτήν την οθόνη μπορείτε να εξασκηθείτε, κάνοντας κλικ για να επιλέξετε ένα στοιχείο μιας λίστας.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

        var L_MouseTutGTellMeAboutThisScreen2_Text = "Όταν κάνετε κλικ σε μια πόλη από αυτήν τη λίστα,";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");
		
        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("imgTable"), "LeftCenter");
		else
			Agent_GestureAtElement(g.document.all("imgTable"), "RightCenter");

        var L_MouseTutGTellMeAboutThisScreen3_Text = "Η εικόνα της θα εμφανιστεί εδώ.";
        Agent_Speak(L_MouseTutGTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutGTellMeHowToMoveToNextScreen() {

        if (g.btnNext.disabled) {

                Agent_GestureAtElement(g.document.all("selCity"), "LeftCenter");

                var L_MouseTutGHowToMoveToNextScreen1_Text = "Πρέπει να κάνετε κλικ σε μια πόλη εδώ,";
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

                var L_MouseTutGHowToMoveToNextScreen2_Text = "Στη συνέχεια κάντε κλικ στο κουμπί \"Επόμενο\".";
                Agent_Speak(L_MouseTutGHowToMoveToNextScreen2_Text);
    
                Agent_Play("RestPose");
        }

        else
                MouseTut_HowToMoveToNextScreen();

}




function Agent_MouseTutHAddCommands() {

        var L_MouseTutHMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_MouseTutHMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_MouseTutHMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeWhatToDoNext", L_MouseTutHMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeAboutThisScreen", L_MouseTutHMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutHTellMeHowToMoveToNextScreen", L_MouseTutHMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutHTellMeWhatToDoNext() {

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHWhatToDoNext1_Text = "Επιλέξτε μία επιλογή, κάνοντας κλικ στον κύκλο που βρίσκεται δίπλα της.";
        Agent_Speak(L_MouseTutHWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutHWhatToDoNext2_Text = "Αυτή η ενέργεια, θα αλλάξει τον τρόπο εμφάνισης της εικόνας.";
        Agent_Speak(L_MouseTutHWhatToDoNext2_Text);

        var L_MouseTutHWhatToDoNext3_Text = "Κατόπιν, προσπαθήστε να κάνετε κλικ στην άλλη επιλογή.";
        Agent_Speak(L_MouseTutHWhatToDoNext3_Text);
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeAboutThisScreen() {
        var L_MouseTutHTellMeAboutThisScreen1_Text = "Σε αυτήν την οθόνη μπορείτε να εξασκηθείτε πώς να κάνετε μια επιλογή, όταν μπορείτε να κάνετε μόνο μία επιλογή κάθε φορά.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen1_Text);

        Agent_GestureAtElement(g.document.all("bwsel"), "Left");

        var L_MouseTutHTellMeAboutThisScreen2_Text = "Όταν κάνετε κλικ στους κύκλους εδώ,";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen2_Text);
    
    Agent_Play("RestPose");

        if (g.document.dir == "rtl") 
			Agent_GestureAtElement(g.document.all("cityImg"), "LeftCenter");
        else
			Agent_GestureAtElement(g.document.all("cityImg"), "RightCenter");

        var L_MouseTutHTellMeAboutThisScreen3_Text = "Αυτή η ενέργεια αλλάζει τον τρόπο που εμφανίζεται εδώ η εικόνα.";
        Agent_Speak(L_MouseTutHTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
        
        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutHTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutIAddCommands() {

        var L_MouseTutIMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_MouseTutIMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_MouseTutIMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeWhatToDoNext", L_MouseTutIMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeAboutThisScreen", L_MouseTutIMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutITellMeHowToMoveToNextScreen", L_MouseTutIMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutITellMeWhatToDoNext() {

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutIWhatToDoNext1_Text = "Κάντε κλικ σε μία ή περισσότερες από τις επιλογές εδώ και δείτε το αποτέλεσμα στην εικόνα.";
        Agent_Speak(L_MouseTutIWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutIWhatToDoNext2_Text = "Κάντε πάλι κλικ σε μια επιλογή, για να καταργήσετε την επιλογή.";
        Agent_Speak(L_MouseTutIWhatToDoNext2_Text);

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeAboutThisScreen() {
        var L_MouseTutITellMeAboutThisScreen1_Text = "Μερικές φορές, μπορείτε να επιλέξετε πολλές επιλογές από ένα σύνολο επιλογών.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen1_Text);

        var L_MouseTutITellMeAboutThisScreen2_Text = "Σε αυτήν την οθόνη, μπορείτε να επιλέξετε διαφορετικά στυλ εμφάνισης για την εικόνα σας.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen2_Text);

		Agent_GestureAtElement(g.document.all("mattesel"), "Left");

        var L_MouseTutITellMeAboutThisScreen3_Text = "Απλώς κάντε κλικ στα πλαίσια δίπλα από τις επιλογές.";
        Agent_Speak(L_MouseTutITellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");

        Agent_MoveToElement(document.all("AssistImg"), "BottomCenterWidthExactBottom");
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutITellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutJAddCommands() {

        var L_MouseTutJMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_MouseTutJMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_MouseTutJMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

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

        var L_MouseTutJWhatToDoNext1_Text = "Κάντε κλικ στο πλαίσιο εδώ,";
        Agent_Speak(L_MouseTutJWhatToDoNext1_Text);
    
    Agent_Play("RestPose");

        var L_MouseTutJWhatToDoNext2_Text = "Και στη συνέχεια πληκτρολογήστε το κείμενο που θέλετε να εμφανιστεί ως λεζάντα.";
        Agent_Speak(L_MouseTutJWhatToDoNext2_Text);
}

function Agent_OnMouseTutJTellMeAboutThisScreen() {
        var L_MouseTutJTellMeAboutThisScreen1_Text = "Μερικές φορές, μπορείτε να προσαρμόσετε μια επιλογή, χρησιμοποιώντας τις δικές σας λέξεις.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen1_Text);

        var L_MouseTutJTellMeAboutThisScreen2_Text = "Σε αυτήν την οθόνη, μπορείτε να πληκτρολογήσετε μια λεζάντα για την εικόνα σας.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen2_Text);

        if (g.document.dir == "rtl")
			Agent_GestureAtElement(g.document.all("caption"), "Left");
		else
			Agent_GestureAtElement(g.document.all("CaptionLabel"), "Left");

        var L_MouseTutJTellMeAboutThisScreen3_Text = "Απλώς κάντε κλικ στο πλαίσιο εδώ και πληκτρολογήστε τη λεζάντα σας.";
        Agent_Speak(L_MouseTutJTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutJTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function Agent_MouseTutKAddCommands() {

        var L_MouseTutKMenuCommand1_Text = "Πληροφορίες για την επόμενη ε&νέργεια";
        var L_MouseTutKMenuCommand2_Text = "Πληροφορίες για &αυτήν την οθόνη";
        var L_MouseTutKMenuCommand3_Text = "Πληροφορίες για τον τρόπο &μετάβασης στην επόμενη οθόνη";

        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeWhatToDoNext", L_MouseTutKMenuCommand1_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeAboutThisScreen", L_MouseTutKMenuCommand2_Text);
        g_AgentCharacter.Commands.Add("Agent_OnMouseTutKTellMeHowToMoveToNextScreen", L_MouseTutKMenuCommand3_Text);

        Agent_AddAssistantanceCommand();

}

function Agent_OnMouseTutKTellMeWhatToDoNext() {
        var L_MouseTutKWhatToDoNext1_Text = "Συγχαρητήρια! Έχετε ολοκληρώσει αυτό το πρόγραμμα εκμάθησης ποντικιού.";
        Agent_Speak(L_MouseTutKWhatToDoNext1_Text);

        var L_MouseTutKWhatToDoNext2_Text = "Κάντε κλικ στο κουμπί \"Επόμενο\" για να μετακινηθείτε στην επόμενη οθόνη.";
        Agent_Speak(L_MouseTutKWhatToDoNext2_Text);
}

function Agent_OnMouseTutKTellMeAboutThisScreen() {
        var L_MouseTutKTellMeAboutThisScreen1_Text = "Τα καταφέρατε καλά! Η φωτογραφία των διακοπών σας είναι ολοκληρωμένη.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen1_Text);
        
        var L_MouseTutKTellMeAboutThisScreen2_Text = "Ολοκληρώσατε το πρόγραμμα εκμάθησης του ποντικιού.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen2_Text);

        var L_MouseTutKTellMeAboutThisScreen3_Text = "Για ένα λεπτομερέστερο πρόγραμμα εκμάθησης του ποντικιού που περιλαμβάνει δεξιότητες όπως μεταφορά, αλλαγή μεγέθους και χρήση του δεξιού κουμπιού του ποντικιού, ανατρέξτε στη Βοήθεια, όταν τα Windows ξεκινήσουν για πρώτη φορά.";
        Agent_Speak(L_MouseTutKTellMeAboutThisScreen3_Text);
    
    Agent_Play("RestPose");
}

function Agent_OnMouseTutKTellMeHowToMoveToNextScreen() {

        MouseTut_HowToMoveToNextScreen();

}



function MouseTut_WhatToDoNext() 
{
        var L_MouseTutTellMeWhatToDoNext1_Text = "Απλώς κάντε κλικ στο κουμπί \"Επόμενο\" για να μετακινηθείτε στην επόμενη οθόνη.";
        Agent_Speak(L_MouseTutTellMeWhatToDoNext1_Text);

        var L_MouseTutTellMeWhatToDoNext2_Text = "Ή κάντε κλικ στο κουμπί \"Παράλειψη\", για να παρακάμψετε το πρόγραμμα εκμάθησης.";
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

        var L_MouseTutTellMeHowToMoveToNextScreen1_Text = "Κάντε κλικ στο κουμπί \"Επόμενο\", για να μετακινηθείτε στην επόμενη οθόνη,";
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

        var L_MouseTutTellMeHowToMoveToNextScreen2_Text = "Ή κάντε κλικ στο κουμπί \"Παράλειψη\", για να παρακάμψετε το πρόγραμμα εκμάθησης.";
        Agent_Speak(L_MouseTutTellMeHowToMoveToNextScreen2_Text);
    
    Agent_Play("RestPose");
}



function Agent_2nicsAddCommands() 
{
    var L_2nicsMenuCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    
    g_AgentCharacter.Commands.Add("Agent_On2nicsAboutThisStep", L_2nicsMenuCommand1_Text);

    Agent_AddWhatToDoNextCommand();    
    if (!window.external.get_RetailOOBE()) 
    {
        Agent_AddAssistantanceCommand();
    }
}

function Agent_On2nicsAboutThisStep() 
{
    var L_2nicsAboutThisScreen1_Text = "Αυτή η οθόνη εξηγεί ότι υπάρχουν περισσότεροι από ένας πιθανοί τρόποι σύνδεσης του υπολογιστή σας με το Internet.";
	Agent_Speak(L_2nicsAboutThisScreen1_Text);
	
    var L_2nicsAboutThisScreen2_Text = "Μπορείτε να επιλέξετε ποια σύνδεση θέλετε να χρησιμοποιήσετε αφού τελειώσετε την εγκατάσταση των Windows.";
	Agent_Speak(L_2nicsAboutThisScreen2_Text);
}



function Agent_UserNameAddCommands() 
{
    var L_UserNameCommand1_Text = "Πληροφορίες για αυτό το &βήμα";
    var L_UserNameCommand2_Text = "Πού εμφανίζεται &το όνομα μου;";
    var L_UserNameCommand3_Text = "&Πώς μπορώ να αλλάξω το όνομά μου αργότερα;";
    var L_UserNameCommand4_Text = "Τι πρέπει να κάνω στη &συνέχεια;";
    
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
    var L_UserNameAboutThisStep1_Text = "Σε αυτήν την οθόνη, γίνεται έλεγχος της ταυτότητάς σας με τη χρήση του ονόματος και του επωνύμου σας, ώστε να σας αναγνωρίζουν τα Windows όταν είστε συνδεδεμένοι.";
	Agent_Speak(L_UserNameAboutThisStep1_Text);
}

function Agent_OnUserNameWhereIsName() 
{
    var L_UserNameWhereIsName1_Text = "Το μικρό σας όνομα θα εμφανιστεί στην οθόνη υποδοχής, που εμφανίζεται ότνα ξεκινάτε τα Windows.";
	Agent_Speak(L_UserNameWhereIsName1_Text);
	
    var L_UserNameWhereIsName2_Text = "Επίσης στο πάνω μέρος του μενού \"Έναρξη\" όταν είστε συνδεδεμένοι.";
	Agent_Speak(L_UserNameWhereIsName2_Text);
	
    var L_UserNameWhereIsName3_Text = "Αν κάποιος συνδεθεί με τον υπολογιστή σας και ανοίξει το φάκελό σας \"Τα έγγραφά μου\", θα εμφανιστεί το όνομά σας στο όνομα φακέλου.";
	Agent_Speak(L_UserNameWhereIsName3_Text);
	
    var L_UserNameWhereIsName4_Text = "Για παράδειγμα, ο φάκελος θα εμφανιστεί με το όνομα \"Τα έγγραφα του Γιώργου\", ώστε να γνωρίζουν οι άλλοι χρήστες ότι σας ανήκει.";
	Agent_Speak(L_UserNameWhereIsName4_Text);
	
    var L_UserNameWhereIsName5_Text = "Το όνομά σας θα εμφανιστεί επίσης στη λίστα χρηστών, όταν κάνετε κλικ στην επιλογή Πίνακας Ελέγχου στο μενού \"Έναρξη\" και κατόπιν κάνετε κλικ στην επιλογή \"Λογαριασμοί χρηστών\".";
	Agent_Speak(L_UserNameWhereIsName5_Text);
}

function Agent_OnUserNameHowToChangeName() 
{
    var L_UserNameHowToChangeName1_Text = "Για να αλλάξετε το όνομά σας όταν έχετε συνδεθεί στα Windows, κάντε κλικ στην επιλογή \"Πίνακας Ελέγχου\" στο μενού \"Έναρξη\".";
	Agent_Speak(L_UserNameHowToChangeName1_Text);
	
    var L_UserNameHowToChangeName2_Text = "Στη συνέχεια κάντε κλικ στην επιλογή \"Λογαριασμοί χρηστών\".";
	Agent_Speak(L_UserNameHowToChangeName2_Text);
	
    var L_UserNameHowToChangeName3_Text = "Θα έχετε τη δυνατότητα να αλλάξετε το όνομα σας καθώς και τα ονόματα άλλων χρηστών αυτού του υπολογιστή.";
	Agent_Speak(L_UserNameHowToChangeName3_Text);
}

function Agent_OnUserNameWhatToDoNext() 
{
    var L_UserNameWhatToDoNext1_Text = "Κάντε κλικ στο κουμπί \"Επόμενο\" για να προσπαθήσετε να συνδεθείτε πάλι στο Internet.";
	Agent_Speak(L_UserNameWhatToDoNext1_Text);
	
    var L_UserNameWhatToDoNext2_Text = "Ή κάντε κλικ στο κουμπί \"Παράλειψη\" για να συνεχίσετε χωρίς να συνδεθείτε στο Internet.";
	Agent_Speak(L_UserNameWhatToDoNext2_Text);
}
