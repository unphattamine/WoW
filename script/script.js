//CALCULATES SOW PRICE
function calculatePrice() {

    //CONTACT INFO
    let fcustomer = document.getElementById('fcustomer').value;
    let fname = document.getElementById('fname').value;
    let fmail = document.getElementById('fmail').value;
    
    //MAIN SCOPE
    let complexUCs = parseInt(document.getElementById("complexUCs").value) || 0;
    let simpleUCs = parseInt(document.getElementById("simpleUCs").value) || 0;
    //CHANNELS
    let channels = document.querySelectorAll('#channel input[type="checkbox"]');
    let checkedChannels = [];
    channels.forEach(checkbox => {
        if (checkbox.checked) {
            checkedChannels.push(checkbox.value);
        }
    });
    channels = checkedChannels
    //LANGUAGE
    let productLanguage = document.querySelector('input[name="productLanguage"]:checked');
    //AMELIA TRAINING
    let AmeliaTrainingCourse = document.querySelector('input[name="AmeliaTrainingCourse"]:checked');
    //NOTES
    let fnotes = document.getElementById('fnotes').value;

    //DELIVERY TEAM LOCATION
    let customTimezone = document.querySelector('input[name="customTimezone"]:checked');
    let customLocation = document.querySelector('input[name="customLocation"]:checked');
    
    //ADDITIONAL TIMELINE REQS
    let Hypercare = parseInt(document.getElementById("Hypercare").value) || 0;
    let UAT = parseInt(document.getElementById("UAT").value) || 0;
    let Enablement = parseInt(document.getElementById("Enablement").value) || 0;
    let GoLiveApproach = document.querySelector('input[name="GoLiveApproach"]:checked');

    //INTEGRATIONS
    let integrationRequirements = document.querySelector('input[name="integrationRequirements"]:checked');
    let APInumbers = parseInt(document.getElementById("APInumbers").value) || 0;
    let APIStartDate = document.querySelector('input[name="APIStartDate"]:checked');
    let APIExposed = document.querySelector('input[name="APIExposed"]:checked');
    let ISCRequirements = document.querySelector('input[name="ISCRequirements"]:checked');
    let fAPInotes = document.getElementById('fAPInotes').value;

    //NLU
    let IntentModelRequired = document.querySelector('input[name="IntentModelRequired"]:checked');
    let IntentNumber = parseInt(document.getElementById("IntentNumber").value) || 0;
    let contextswitching = document.querySelector('input[name="contextswitching"]:checked');
    let customLeveling = document.querySelector('input[name="customLeveling"]:checked');
    let EntityRequirements = document.querySelector('input[name="EntityRequirements"]:checked');
    let IntentModelTrainingData = document.querySelector('input[name="IntentModelTrainingData"]:checked');

    //PROJECT MGMT
    let EndCustomerGovernanceRequired = document.querySelector('input[name="EndCustomerGovernanceRequired"]:checked');
    let AmeliaCoordination = document.querySelector('input[name="AmeliaCoordination"]:checked');

    //VOICE DAVANCED
    let DTMFRequired = document.querySelector('input[name="DTMFRequired"]:checked');
    let BargeInRequired = document.querySelector('input[name="BargeInRequired"]:checked');

    //OTHERS
    let SSO = document.querySelector('input[name="SSO"]:checked');
    let customReporting = document.querySelector('input[name="customReporting"]:checked') ? document.querySelector('input[name="customReporting"]:checked').value : 'No option selected';
    let ContentSharingRequired = document.querySelector('input[name="ContentSharingRequired"]:checked');
    let RecordingsRequired = document.querySelector('input[name="RecordingsRequired"]:checked');
    let DynamicFAQTraining = document.querySelector('input[name="DynamicFAQTraining"]:checked');
    let DataInformationMasking = document.querySelector('input[name="DataInformationMasking"]:checked');
    let DemoRequirements = document.querySelector('input[name="DemoRequirements"]:checked');

//////////////////////////////////////////////
    if(complexUCs+simpleUCs<=6){
        console.log("UCs <=6")
        //TIMELINE FORMULAS
    let kickoffTimeline = config.elapsedTimeKickoff;
    let solutionTimeline = (1*complexUCs) + (0.75*simpleUCs) + 2;
    let devTimeline = (2*complexUCs) + (1*simpleUCs) + 2;
    let UATTimeline = (1*UAT);
    let HypercareTimeline = (1*Hypercare);
    let totalTimeline = config.elapsedTimeKickoff + solutionTimeline + devTimeline + UATTimeline + HypercareTimeline;

    let PMLOE = totalTimeline*5*8*0.5;
    let PMTotal = PMLOE;
    let solutionLOE = (0.7*complexUCs*5*8) + (0.6*simpleUCs*5*8) + (0.5*3*5*8);
    let devLOE = devTimeline*5*8;
    let UATLOE = (5*8*UAT);
    let TBAkickoff = 0.5*8*5*kickoffTimeline;
    let TBAsolutioning = (0.7*complexUCs*5*8) + (0.6*simpleUCs*5*8) +0.5*3*5*8;
    let TBAdevelopment = devTimeline*5*8;
    let TBAUAT = UAT*5*8;
    let TBAHypercare = Hypercare*5*8;
    let TBATotal = TBAkickoff+TBAsolutioning+TBAdevelopment+TBAUAT+TBAHypercare;
    let SAkickoff = 0.5*8*5*kickoffTimeline;
    let SAsolutioning = TBAsolutioning*0.25;
    let SAdevelopment = TBAdevelopment*0.1;
    let SAUAT = 0;
    let SAHypercare = 0;
    let SATotal = SAkickoff+SAsolutioning+SAdevelopment+SAUAT+SAHypercare;
    let CIEkickoff = 0;
    let CIEsolutioning = 0.5*5*8;
    let CIEdevelopment = TBAdevelopment*0.5;
    let CIEUAT = TBAUAT*0.5;
    let CIEHypercare = TBAHypercare*0.5;
    let CIETotal = CIEkickoff+CIEsolutioning+CIEdevelopment+CIEUAT+CIEHypercare;
    let PRMTotal = 10*totalTimeline;

    let TBACost = TBATotal*config.avgCostTBA;
    let TBACostwContingency = TBACost*config.contingency;
    let TBASell = TBACostwContingency*config.sellMargin;
    let SACost = SATotal*config.avgCostSA;
    let SACostwContingency = SACost*config.contingency;
    let SASell = SACostwContingency*config.sellMargin;
    let PMCost = PMTotal*config.avgCostPM;
    let PMCostwContingency = PMCost*config.contingency;
    let PMSell = PMCostwContingency*config.sellMargin;
    let CIECost = CIETotal*config.avgCostCOG;
    let CIECostwContingency = CIECost*config.contingency;
    let CIESell = CIECostwContingency*config.sellMargin;
    let PRMCost = PRMTotal*config.avgCostPRM;
    let PRMCostwContingency = PRMCost*config.contingency;
    let PRMSell = PRMCostwContingency*config.sellMargin;

    let TotalHours = TBATotal + SATotal + CIETotal + PMTotal + PRMTotal;
    let TotalCost = TBACost + SACost + CIECost + PMCost + PRMCost;
    let TotalCostwContingency = TotalCost*config.contingency;
    let TotalCost2 //FOR LAST SECTION, in case of enablement or not
    let TotalSell = TBASell + SASell + CIESell + PMSell + PRMSell;
    let TotalHoursEnablement = Enablement;

    let TotalCostEnablement;
    let TotalCostEnablementwContingency;
    let TotalSellEnablement;
    let TotalAmountBMS1;
    let TotalAmountBMS2;
    let TotalAmount;
    if (TotalHoursEnablement === 0) {
        TotalCostEnablement = 0;
        TotalCostEnablementwContingency = 0;
        TotalSellEnablement = 0;
        TotalCost2 = TotalCost
        TotalAmount = TotalSell;
        TotalAmountBMS1 = TotalAmount/2;
        TotalAmountBMS2 = TotalAmount/2;
    } else {
        TotalHoursEnablement = TotalHours + Enablement;
        TotalCostEnablement = (Enablement * config.avgCostCOG) + (12 * 8 * 5 * 0.05 * config.avgCostPM) + TotalCost;
        TotalCostEnablementwContingency = TotalCostEnablement*config.contingency;
        TotalSellEnablement = TotalCostEnablementwContingency * config.sellMargin;
        TotalCost2 = TotalCostEnablement;
        TotalAmount = TotalSellEnablement;
        TotalAmountBMS1 = TotalAmount/2;
        TotalAmountBMS2 = TotalAmount/2;
    }
    
    localStorage.setItem("fcustomer", fcustomer);
    localStorage.setItem("fmail", fmail);
    localStorage.setItem("fname", fname);

    localStorage.setItem("complexUCs", complexUCs);
    localStorage.setItem("simpleUCs", simpleUCs);
    localStorage.setItem("channels", channels);
    localStorage.setItem("productLanguage", productLanguage.value);
    localStorage.setItem("AmeliaTrainingCourse", AmeliaTrainingCourse.value);
    localStorage.setItem("fnotes", fnotes);

    localStorage.setItem("customTimezone", customTimezone.value);
    localStorage.setItem("customLocation", customLocation.value);
    localStorage.setItem("kickoffTimeline", kickoffTimeline);
    localStorage.setItem("Hypercare", Hypercare);
    localStorage.setItem("HypercareTimeline", HypercareTimeline.toFixed(2));
    localStorage.setItem("UAT", UAT);
    localStorage.setItem("UATTimeline", UATTimeline.toFixed(2));
    localStorage.setItem("totalTimeline", totalTimeline.toFixed(2));
    localStorage.setItem("solutionLOE", solutionLOE.toFixed(2));
    localStorage.setItem("devLOE", devLOE.toFixed(2));
    localStorage.setItem("UATLOE", UATLOE.toFixed(2));
    localStorage.setItem("PMLOE", PMLOE.toFixed(2));
    localStorage.setItem("PMTotal1", PMTotal.toFixed(2));
    localStorage.setItem("TBAkickoff", TBAkickoff.toFixed(2));
    localStorage.setItem("TBAsolutioning", TBAsolutioning.toFixed(2));
    localStorage.setItem("TBAdevelopment", TBAdevelopment.toFixed(2));
    localStorage.setItem("TBAUAT", TBAUAT.toFixed(2));
    localStorage.setItem("TBAHypercare", TBAHypercare.toFixed(2));
    localStorage.setItem("TBATotal", TBATotal.toFixed(2));
    localStorage.setItem("SAkickoff", SAkickoff.toFixed(2));
    localStorage.setItem("SAsolutioning", SAsolutioning.toFixed(2));
    localStorage.setItem("SAdevelopment", SAdevelopment.toFixed(2));
    localStorage.setItem("SAUAT", SAUAT.toFixed(2));
    localStorage.setItem("SAHypercare", SAHypercare.toFixed(2));
    localStorage.setItem("SATotal", SATotal.toFixed(2));
    localStorage.setItem("CIEkickoff", CIEkickoff.toFixed(2));
    localStorage.setItem("CIEsolutioning", CIEsolutioning.toFixed(2));
    localStorage.setItem("CIEdevelopment", CIEdevelopment.toFixed(2));
    localStorage.setItem("CIEUAT", CIEUAT.toFixed(2));
    localStorage.setItem("CIEHypercare", CIEHypercare.toFixed(2));
    localStorage.setItem("CIETotal", CIETotal.toFixed(2));
    localStorage.setItem("PRMTotal", PRMTotal.toFixed(2));

    localStorage.setItem("TBACost", TBACost.toFixed(2));
    localStorage.setItem("TBACostwContingency", TBACostwContingency.toFixed(2));
    localStorage.setItem("TBASell", TBASell.toFixed(2));
    localStorage.setItem("SACost", SACost.toFixed(2));
    localStorage.setItem("SACostwContingency", SACostwContingency.toFixed(2));
    localStorage.setItem("SASell", SASell.toFixed(2));
    localStorage.setItem("PMCost", PMCost.toFixed(2));
    localStorage.setItem("PMCostwContingency", PMCostwContingency.toFixed(2));
    localStorage.setItem("PMSell", PMSell.toFixed(2));
    localStorage.setItem("CIECost", CIECost.toFixed(2));
    localStorage.setItem("CIECostwContingency", CIECostwContingency.toFixed(2));
    localStorage.setItem("CIESell", CIESell.toFixed(2));
    localStorage.setItem("PRMCost", PRMCost.toFixed(2));
    localStorage.setItem("PRMCostwContingency", PRMCostwContingency.toFixed(2));
    localStorage.setItem("PRMSell", PRMSell.toFixed(2));
    localStorage.setItem("TotalHours", TotalHours.toFixed(2));
    localStorage.setItem("TotalCost", TotalCost.toFixed(2));
    localStorage.setItem("TotalCost2", TotalCost2.toFixed(2));
    localStorage.setItem("TotalCostwContingency", TotalCostwContingency.toFixed(2));
    localStorage.setItem("TotalSell", TotalSell.toFixed(2));
    localStorage.setItem("TotalHoursEnablement", TotalHoursEnablement.toFixed(2));
    localStorage.setItem("TotalCostEnablement", TotalCostEnablement.toFixed(2));
    localStorage.setItem("TotalCostEnablementwContingency", TotalCostEnablementwContingency.toFixed(2));
    localStorage.setItem("TotalSellEnablement", TotalSellEnablement.toFixed(2));
    localStorage.setItem("TotalAmount", TotalAmount.toFixed(2));
    localStorage.setItem("TotalAmountBMS1", TotalAmountBMS1.toFixed(2));
    localStorage.setItem("TotalAmountBMS2", TotalAmountBMS2.toFixed(2));

    localStorage.setItem("Enablement", Enablement);
    localStorage.setItem("GoLiveApproach", GoLiveApproach.value);

    localStorage.setItem("integrationRequirements", integrationRequirements.value);
    localStorage.setItem("APInumbers", APInumbers);
    localStorage.setItem("APIStartDate", APIStartDate.value);
    localStorage.setItem("APIExposed", APIExposed.value);
    localStorage.setItem("ISCRequirements", ISCRequirements.value);
    localStorage.setItem("fAPInotes", fAPInotes);

    localStorage.setItem("IntentModelRequired", IntentModelRequired.value);
    localStorage.setItem("IntentNumber", IntentNumber);
    localStorage.setItem("contextswitching", contextswitching.value);
    localStorage.setItem("customLeveling", customLeveling.value);
    localStorage.setItem("EntityRequirements", EntityRequirements.value);
    localStorage.setItem("IntentModelTrainingData", IntentModelTrainingData.value);

    localStorage.setItem("EndCustomerGovernanceRequired", EndCustomerGovernanceRequired.value);
    localStorage.setItem("AmeliaCoordination", AmeliaCoordination.value);

    localStorage.setItem("DTMFRequired", DTMFRequired.value);
    localStorage.setItem("BargeInRequired", BargeInRequired.value);

    localStorage.setItem("SSO", SSO.value);
    localStorage.setItem("customReporting", customReporting.value);
    localStorage.setItem("ContentSharingRequired", ContentSharingRequired.value);
    localStorage.setItem("RecordingsRequired", RecordingsRequired.value);
    localStorage.setItem("DynamicFAQTraining", DynamicFAQTraining.value);
    localStorage.setItem("DataInformationMasking", DataInformationMasking.value);
    localStorage.setItem("DemoRequirements", DemoRequirements.value);

    localStorage.setItem("solutionTimeline", solutionTimeline.toFixed(2));
    localStorage.setItem("devTimeline", devTimeline.toFixed(2));
    localStorage.setItem("fcustomer", fcustomer);
    localStorage.setItem("fnotes", fnotes);
    localStorage.setItem("fmail", fmail);
    localStorage.setItem("fname", fname);
    
    localStorage.setItem("customReporting", customReporting);
    customReporting = localStorage.getItem("customReporting");
    if (customReporting) {
        //console.log(`Loaded Custom Reporting Value: ${customReporting}`);
    } else {
        //console.log('No custom reporting value found in local storage.');
    }

    window.location.href = "results.html";
    } else if((complexUCs+simpleUCs>6)&&(complexUCs+simpleUCs)<=12){
        console.log("UCs >6<=12");
    //TIMELINE FORMULAS
    let kickoffTimeline = config.elapsedTimeKickoff;
    let solutionTimeline = (1*complexUCs) + (0.75*simpleUCs) + 3;
    let devTimeline = ((2*complexUCs) + (1*simpleUCs))*0.7 + 3;
    let UATTimeline = (1*UAT);
    let HypercareTimeline = (1*Hypercare);
    let totalTimeline = config.elapsedTimeKickoff + solutionTimeline*0.75 + devTimeline + UATTimeline + HypercareTimeline;

    let PMLOE = totalTimeline*5*8*0.5;
    let PMTotal = PMLOE;
    let solutionLOE = (0.7*complexUCs*5*8) + (0.6*simpleUCs*5*8) + (0.5*3*5*8);
    let devLOE = devTimeline*5*8;
    let UATLOE = (5*8*UAT);
    let TBAkickoff = 0.5*8*5*kickoffTimeline;
    let TBAsolutioning = (0.7*complexUCs*5*8) + (0.6*simpleUCs*5*8) +0.5*3*5*8;
    let TBAdevelopment = devTimeline*5*8*2;
    let TBAUAT = UAT*5*8*2;
    let TBAHypercare = Hypercare*5*8*2;
    let TBATotal = TBAkickoff+TBAsolutioning+TBAdevelopment+TBAUAT+TBAHypercare;
    let SAkickoff = 0.5*8*5*kickoffTimeline;
    let SAsolutioning = TBAsolutioning*0.25;
    let SAdevelopment = devTimeline*0.1*5*8;
    let SAUAT = 0;
    let SAHypercare = 0;
    let SATotal = SAkickoff+SAsolutioning+SAdevelopment+SAUAT+SAHypercare;
    let CIEkickoff = 0;
    let CIEsolutioning = 0.5*5*8;
    let CIEdevelopment = devTimeline*0.5*5*8;
    let CIEUAT = UATTimeline*0.5*5*8;
    let CIEHypercare = HypercareTimeline*0.5*5*8;
    let CIETotal = CIEkickoff+CIEsolutioning+CIEdevelopment+CIEUAT+CIEHypercare;
    let PRMTotal = 10*totalTimeline;

    let TBACost = TBATotal*config.avgCostTBA;
    let TBACostwContingency = TBACost*config.contingency;
    let TBASell = TBACostwContingency*config.sellMargin;
    let SACost = SATotal*config.avgCostSA;
    let SACostwContingency = SACost*config.contingency;
    let SASell = SACostwContingency*config.sellMargin;
    let PMCost = PMTotal*config.avgCostPM;
    let PMCostwContingency = PMCost*config.contingency;
    let PMSell = PMCostwContingency*config.sellMargin;
    let CIECost = CIETotal*config.avgCostCOG;
    let CIECostwContingency = CIECost*config.contingency;
    let CIESell = CIECostwContingency*config.sellMargin;
    let PRMCost = PRMTotal*config.avgCostPRM;
    let PRMCostwContingency = PRMCost*config.contingency;
    let PRMSell = PRMCostwContingency*config.sellMargin;

    let TotalHours = TBATotal + SATotal + CIETotal + PMTotal + PRMTotal;
    let TotalCost = TBACost + SACost + CIECost + PMCost + PRMCost;
    let TotalCostwContingency = TotalCost*config.contingency;
    let TotalCost2 //FOR LAST SECTION, in case of enablement or not
    let TotalSell = TBASell + SASell + CIESell + PMSell + PRMSell;
    let TotalHoursEnablement = Enablement;

    let TotalCostEnablement;
    let TotalCostEnablementwContingency;
    let TotalSellEnablement;
    let TotalAmountBMS1;
    let TotalAmountBMS2;
    let TotalAmount;
    if (TotalHoursEnablement === 0) {
        TotalCostEnablement = 0;
        TotalCostEnablementwContingency = 0;
        TotalSellEnablement = 0;
        TotalCost2 = TotalCost
        TotalAmount = TotalSell;
        TotalAmountBMS1 = TotalAmount/2;
        TotalAmountBMS2 = TotalAmount/2;
    } else {
        TotalHoursEnablement = TotalHours + Enablement;
        TotalCostEnablement = (Enablement * config.avgCostCOG) + (12 * 8 * 5 * 0.05 * config.avgCostPM) + TotalCost;
        TotalCostEnablementwContingency = TotalCostEnablement*config.contingency;
        TotalSellEnablement = TotalCostEnablementwContingency * config.sellMargin;
        TotalCost2 = TotalCostEnablement;
        TotalAmount = TotalSellEnablement;
        TotalAmountBMS1 = TotalAmount/2;
        TotalAmountBMS2 = TotalAmount/2;
    }
    
    localStorage.setItem("fcustomer", fcustomer);
    localStorage.setItem("fmail", fmail);
    localStorage.setItem("fname", fname);

    localStorage.setItem("complexUCs", complexUCs);
    localStorage.setItem("simpleUCs", simpleUCs);
    localStorage.setItem("channels", channels);
    localStorage.setItem("productLanguage", productLanguage.value);
    localStorage.setItem("AmeliaTrainingCourse", AmeliaTrainingCourse.value);
    localStorage.setItem("fnotes", fnotes);

    localStorage.setItem("customTimezone", customTimezone.value);
    localStorage.setItem("customLocation", customLocation.value);
    localStorage.setItem("kickoffTimeline", kickoffTimeline);
    localStorage.setItem("Hypercare", Hypercare);
    localStorage.setItem("HypercareTimeline", HypercareTimeline.toFixed(2));
    localStorage.setItem("UAT", UAT);
    localStorage.setItem("UATTimeline", UATTimeline.toFixed(2));
    localStorage.setItem("totalTimeline", totalTimeline.toFixed(2));
    localStorage.setItem("solutionLOE", solutionLOE.toFixed(2));
    localStorage.setItem("devLOE", devLOE.toFixed(2));
    localStorage.setItem("UATLOE", UATLOE.toFixed(2));
    localStorage.setItem("PMLOE", PMLOE.toFixed(2));
    localStorage.setItem("PMTotal1", PMTotal.toFixed(2));
    localStorage.setItem("TBAkickoff", TBAkickoff.toFixed(2));
    localStorage.setItem("TBAsolutioning", TBAsolutioning.toFixed(2));
    localStorage.setItem("TBAdevelopment", TBAdevelopment.toFixed(2));
    localStorage.setItem("TBAUAT", TBAUAT.toFixed(2));
    localStorage.setItem("TBAHypercare", TBAHypercare.toFixed(2));
    localStorage.setItem("TBATotal", TBATotal.toFixed(2));
    localStorage.setItem("SAkickoff", SAkickoff.toFixed(2));
    localStorage.setItem("SAsolutioning", SAsolutioning.toFixed(2));
    localStorage.setItem("SAdevelopment", SAdevelopment.toFixed(2));
    localStorage.setItem("SAUAT", SAUAT.toFixed(2));
    localStorage.setItem("SAHypercare", SAHypercare.toFixed(2));
    localStorage.setItem("SATotal", SATotal.toFixed(2));
    localStorage.setItem("CIEkickoff", CIEkickoff.toFixed(2));
    localStorage.setItem("CIEsolutioning", CIEsolutioning.toFixed(2));
    localStorage.setItem("CIEdevelopment", CIEdevelopment.toFixed(2));
    localStorage.setItem("CIEUAT", CIEUAT.toFixed(2));
    localStorage.setItem("CIEHypercare", CIEHypercare.toFixed(2));
    localStorage.setItem("CIETotal", CIETotal.toFixed(2));
    localStorage.setItem("PRMTotal", PRMTotal.toFixed(2));

    localStorage.setItem("TBACost", TBACost.toFixed(2));
    localStorage.setItem("TBACostwContingency", TBACostwContingency.toFixed(2));
    localStorage.setItem("TBASell", TBASell.toFixed(2));
    localStorage.setItem("SACost", SACost.toFixed(2));
    localStorage.setItem("SACostwContingency", SACostwContingency.toFixed(2));
    localStorage.setItem("SASell", SASell.toFixed(2));
    localStorage.setItem("PMCost", PMCost.toFixed(2));
    localStorage.setItem("PMCostwContingency", PMCostwContingency.toFixed(2));
    localStorage.setItem("PMSell", PMSell.toFixed(2));
    localStorage.setItem("CIECost", CIECost.toFixed(2));
    localStorage.setItem("CIECostwContingency", CIECostwContingency.toFixed(2));
    localStorage.setItem("CIESell", CIESell.toFixed(2));
    localStorage.setItem("PRMCost", PRMCost.toFixed(2));
    localStorage.setItem("PRMCostwContingency", PRMCostwContingency.toFixed(2));
    localStorage.setItem("PRMSell", PRMSell.toFixed(2));
    localStorage.setItem("TotalHours", TotalHours.toFixed(2));
    localStorage.setItem("TotalCost", TotalCost.toFixed(2));
    localStorage.setItem("TotalCost2", TotalCost2.toFixed(2));
    localStorage.setItem("TotalCostwContingency", TotalCostwContingency.toFixed(2));
    localStorage.setItem("TotalSell", TotalSell.toFixed(2));
    localStorage.setItem("TotalHoursEnablement", TotalHoursEnablement.toFixed(2));
    localStorage.setItem("TotalCostEnablement", TotalCostEnablement.toFixed(2));
    localStorage.setItem("TotalCostEnablementwContingency", TotalCostEnablementwContingency.toFixed(2));
    localStorage.setItem("TotalSellEnablement", TotalSellEnablement.toFixed(2));
    localStorage.setItem("TotalAmount", TotalAmount.toFixed(2));
    localStorage.setItem("TotalAmountBMS1", TotalAmountBMS1.toFixed(2));
    localStorage.setItem("TotalAmountBMS2", TotalAmountBMS2.toFixed(2));

    localStorage.setItem("Enablement", Enablement);
    localStorage.setItem("GoLiveApproach", GoLiveApproach.value);

    localStorage.setItem("integrationRequirements", integrationRequirements.value);
    localStorage.setItem("APInumbers", APInumbers);
    localStorage.setItem("APIStartDate", APIStartDate.value);
    localStorage.setItem("APIExposed", APIExposed.value);
    localStorage.setItem("ISCRequirements", ISCRequirements.value);
    localStorage.setItem("fAPInotes", fAPInotes);

    localStorage.setItem("IntentModelRequired", IntentModelRequired.value);
    localStorage.setItem("IntentNumber", IntentNumber);
    localStorage.setItem("contextswitching", contextswitching.value);
    localStorage.setItem("customLeveling", customLeveling.value);
    localStorage.setItem("EntityRequirements", EntityRequirements.value);
    localStorage.setItem("IntentModelTrainingData", IntentModelTrainingData.value);

    localStorage.setItem("EndCustomerGovernanceRequired", EndCustomerGovernanceRequired.value);
    localStorage.setItem("AmeliaCoordination", AmeliaCoordination.value);

    localStorage.setItem("DTMFRequired", DTMFRequired.value);
    localStorage.setItem("BargeInRequired", BargeInRequired.value);

    localStorage.setItem("SSO", SSO.value);
    localStorage.setItem("customReporting", customReporting.value);
    localStorage.setItem("ContentSharingRequired", ContentSharingRequired.value);
    localStorage.setItem("RecordingsRequired", RecordingsRequired.value);
    localStorage.setItem("DynamicFAQTraining", DynamicFAQTraining.value);
    localStorage.setItem("DataInformationMasking", DataInformationMasking.value);
    localStorage.setItem("DemoRequirements", DemoRequirements.value);

    localStorage.setItem("solutionTimeline", solutionTimeline.toFixed(2));
    localStorage.setItem("devTimeline", devTimeline.toFixed(2));
    localStorage.setItem("fcustomer", fcustomer);
    localStorage.setItem("fnotes", fnotes);
    localStorage.setItem("fmail", fmail);
    localStorage.setItem("fname", fname);
    
    localStorage.setItem("customReporting", customReporting);
    customReporting = localStorage.getItem("customReporting");
    if (customReporting) {
        //console.log(`Loaded Custom Reporting Value: ${customReporting}`);
    } else {
        //console.log('No custom reporting value found in local storage.');
    }

    window.location.href = "results.html";
    } else {
        console.log("UCs >> 12");
    
    //ALERT
    function manyUCs() {
        Swal.fire({
            title: '',
            html: 'ℹ️ You specified more than 12 use-cases in total<br><br>Please consider this calculation informational only, additional charges may apply',
            showConfirmButton: true,
            showCancelButton: false,
            cancelButtonText: 'Back',
            confirmButtonText: 'OK',
            customClass: {
                popup: 'azure-popup',
                title: 'azure-title',
                content: 'azure-content',
                confirmButton: 'azure-button',
                cancelButton: 'azure-button'
            },
            didOpen: () => {
                // Remove animation
                document.querySelector('.swal2-popup').style.animation = 'none';
            }
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "results.html";
                //window.stop();
            }
        });

    }
    
        //TIMELINE FORMULAS
    let kickoffTimeline = config.elapsedTimeKickoff;
    let solutionTimeline = (1*complexUCs) + (0.75*simpleUCs) + 3;
    let devTimeline = ((2*complexUCs) + (1*simpleUCs))*0.4 + 3;
    let UATTimeline = (1*UAT);
    let HypercareTimeline = (1*Hypercare);
    let totalTimeline = config.elapsedTimeKickoff + solutionTimeline*0.5 + devTimeline + UATTimeline + HypercareTimeline;

    let PMLOE = totalTimeline*5*8*0.5;
    let PMTotal = PMLOE;
    let solutionLOE = (0.7*complexUCs*5*8) + (0.6*simpleUCs*5*8) + (0.5*3*5*8);
    let devLOE = devTimeline*5*8;
    let UATLOE = (5*8*UAT);
    let TBAkickoff = 0.5*8*5*kickoffTimeline;
    let TBAsolutioning = (0.7*complexUCs*5*8) + (0.6*simpleUCs*5*8) +0.5*3*5*8;
    let TBAdevelopment = devTimeline*5*8*3;
    let TBAUAT = UAT*5*8*3;
    let TBAHypercare = Hypercare*5*8*3;
    let TBATotal = TBAkickoff+TBAsolutioning+TBAdevelopment+TBAUAT+TBAHypercare;
    let SAkickoff = 0.5*8*5*kickoffTimeline;
    let SAsolutioning = TBAsolutioning*0.25;
    let SAdevelopment = devTimeline*0.1*5*8;
    let SAUAT = 0;
    let SAHypercare = 0;
    let SATotal = SAkickoff+SAsolutioning+SAdevelopment+SAUAT+SAHypercare;
    let CIEkickoff = 0;
    let CIEsolutioning = 0.5*5*8;
    let CIEdevelopment = devTimeline*0.5*5*8;
    let CIEUAT = UATTimeline*0.5*5*8;
    let CIEHypercare = HypercareTimeline*0.5*5*8;
    let CIETotal = CIEkickoff+CIEsolutioning+CIEdevelopment+CIEUAT+CIEHypercare;
    let PRMTotal = 10*totalTimeline;

    let TBACost = TBATotal*config.avgCostTBA;
    let TBACostwContingency = TBACost*config.contingency;
    let TBASell = TBACostwContingency*config.sellMargin;
    let SACost = SATotal*config.avgCostSA;
    let SACostwContingency = SACost*config.contingency;
    let SASell = SACostwContingency*config.sellMargin;
    let PMCost = PMTotal*config.avgCostPM;
    let PMCostwContingency = PMCost*config.contingency;
    let PMSell = PMCostwContingency*config.sellMargin;
    let CIECost = CIETotal*config.avgCostCOG;
    let CIECostwContingency = CIECost*config.contingency;
    let CIESell = CIECostwContingency*config.sellMargin;
    let PRMCost = PRMTotal*config.avgCostPRM;
    let PRMCostwContingency = PRMCost*config.contingency;
    let PRMSell = PRMCostwContingency*config.sellMargin;

    let TotalHours = TBATotal + SATotal + CIETotal + PMTotal + PRMTotal;
    let TotalCost = TBACost + SACost + CIECost + PMCost + PRMCost;
    let TotalCostwContingency = TotalCost*config.contingency;
    let TotalCost2 //FOR LAST SECTION, in case of enablement or not
    let TotalSell = TBASell + SASell + CIESell + PMSell + PRMSell;
    let TotalHoursEnablement = Enablement;

    let TotalCostEnablement;
    let TotalCostEnablementwContingency;
    let TotalSellEnablement;
    let TotalAmountBMS1;
    let TotalAmountBMS2;
    let TotalAmount;
    if (TotalHoursEnablement === 0) {
        TotalCostEnablement = 0;
        TotalCostEnablementwContingency = 0;
        TotalSellEnablement = 0;
        TotalCost2 = TotalCost
        TotalAmount = TotalSell;
        TotalAmountBMS1 = TotalAmount/2;
        TotalAmountBMS2 = TotalAmount/2;
    } else {
        TotalHoursEnablement = TotalHours + Enablement;
        TotalCostEnablement = (Enablement * config.avgCostCOG) + (12 * 8 * 5 * 0.05 * config.avgCostPM) + TotalCost;
        TotalCostEnablementwContingency = TotalCostEnablement*config.contingency;
        TotalSellEnablement = TotalCostEnablementwContingency * config.sellMargin;
        TotalCost2 = TotalCostEnablement;
        TotalAmount = TotalSellEnablement;
        TotalAmountBMS1 = TotalAmount/2;
        TotalAmountBMS2 = TotalAmount/2;
    }
    
    localStorage.setItem("fcustomer", fcustomer);
    localStorage.setItem("fmail", fmail);
    localStorage.setItem("fname", fname);

    localStorage.setItem("complexUCs", complexUCs);
    localStorage.setItem("simpleUCs", simpleUCs);
    localStorage.setItem("channels", channels);
    localStorage.setItem("productLanguage", productLanguage.value);
    localStorage.setItem("AmeliaTrainingCourse", AmeliaTrainingCourse.value);
    localStorage.setItem("fnotes", fnotes);

    localStorage.setItem("customTimezone", customTimezone.value);
    localStorage.setItem("customLocation", customLocation.value);
    localStorage.setItem("kickoffTimeline", kickoffTimeline);
    localStorage.setItem("Hypercare", Hypercare);
    localStorage.setItem("HypercareTimeline", HypercareTimeline.toFixed(2));
    localStorage.setItem("UAT", UAT);
    localStorage.setItem("UATTimeline", UATTimeline.toFixed(2));
    localStorage.setItem("totalTimeline", totalTimeline.toFixed(2));
    localStorage.setItem("solutionLOE", solutionLOE.toFixed(2));
    localStorage.setItem("devLOE", devLOE.toFixed(2));
    localStorage.setItem("UATLOE", UATLOE.toFixed(2));
    localStorage.setItem("PMLOE", PMLOE.toFixed(2));
    localStorage.setItem("PMTotal1", PMTotal.toFixed(2));
    localStorage.setItem("TBAkickoff", TBAkickoff.toFixed(2));
    localStorage.setItem("TBAsolutioning", TBAsolutioning.toFixed(2));
    localStorage.setItem("TBAdevelopment", TBAdevelopment.toFixed(2));
    localStorage.setItem("TBAUAT", TBAUAT.toFixed(2));
    localStorage.setItem("TBAHypercare", TBAHypercare.toFixed(2));
    localStorage.setItem("TBATotal", TBATotal.toFixed(2));
    localStorage.setItem("SAkickoff", SAkickoff.toFixed(2));
    localStorage.setItem("SAsolutioning", SAsolutioning.toFixed(2));
    localStorage.setItem("SAdevelopment", SAdevelopment.toFixed(2));
    localStorage.setItem("SAUAT", SAUAT.toFixed(2));
    localStorage.setItem("SAHypercare", SAHypercare.toFixed(2));
    localStorage.setItem("SATotal", SATotal.toFixed(2));
    localStorage.setItem("CIEkickoff", CIEkickoff.toFixed(2));
    localStorage.setItem("CIEsolutioning", CIEsolutioning.toFixed(2));
    localStorage.setItem("CIEdevelopment", CIEdevelopment.toFixed(2));
    localStorage.setItem("CIEUAT", CIEUAT.toFixed(2));
    localStorage.setItem("CIEHypercare", CIEHypercare.toFixed(2));
    localStorage.setItem("CIETotal", CIETotal.toFixed(2));
    localStorage.setItem("PRMTotal", PRMTotal.toFixed(2));

    localStorage.setItem("TBACost", TBACost.toFixed(2));
    localStorage.setItem("TBACostwContingency", TBACostwContingency.toFixed(2));
    localStorage.setItem("TBASell", TBASell.toFixed(2));
    localStorage.setItem("SACost", SACost.toFixed(2));
    localStorage.setItem("SACostwContingency", SACostwContingency.toFixed(2));
    localStorage.setItem("SASell", SASell.toFixed(2));
    localStorage.setItem("PMCost", PMCost.toFixed(2));
    localStorage.setItem("PMCostwContingency", PMCostwContingency.toFixed(2));
    localStorage.setItem("PMSell", PMSell.toFixed(2));
    localStorage.setItem("CIECost", CIECost.toFixed(2));
    localStorage.setItem("CIECostwContingency", CIECostwContingency.toFixed(2));
    localStorage.setItem("CIESell", CIESell.toFixed(2));
    localStorage.setItem("PRMCost", PRMCost.toFixed(2));
    localStorage.setItem("PRMCostwContingency", PRMCostwContingency.toFixed(2));
    localStorage.setItem("PRMSell", PRMSell.toFixed(2));
    localStorage.setItem("TotalHours", TotalHours.toFixed(2));
    localStorage.setItem("TotalCost", TotalCost.toFixed(2));
    localStorage.setItem("TotalCost2", TotalCost2.toFixed(2));
    localStorage.setItem("TotalCostwContingency", TotalCostwContingency.toFixed(2));
    localStorage.setItem("TotalSell", TotalSell.toFixed(2));
    localStorage.setItem("TotalHoursEnablement", TotalHoursEnablement.toFixed(2));
    localStorage.setItem("TotalCostEnablement", TotalCostEnablement.toFixed(2));
    localStorage.setItem("TotalCostEnablementwContingency", TotalCostEnablementwContingency.toFixed(2));
    localStorage.setItem("TotalSellEnablement", TotalSellEnablement.toFixed(2));
    localStorage.setItem("TotalAmount", TotalAmount.toFixed(2));
    localStorage.setItem("TotalAmountBMS1", TotalAmountBMS1.toFixed(2));
    localStorage.setItem("TotalAmountBMS2", TotalAmountBMS2.toFixed(2));

    localStorage.setItem("Enablement", Enablement);
    localStorage.setItem("GoLiveApproach", GoLiveApproach.value);

    localStorage.setItem("integrationRequirements", integrationRequirements.value);
    localStorage.setItem("APInumbers", APInumbers);
    localStorage.setItem("APIStartDate", APIStartDate.value);
    localStorage.setItem("APIExposed", APIExposed.value);
    localStorage.setItem("ISCRequirements", ISCRequirements.value);
    localStorage.setItem("fAPInotes", fAPInotes);

    localStorage.setItem("IntentModelRequired", IntentModelRequired.value);
    localStorage.setItem("IntentNumber", IntentNumber);
    localStorage.setItem("contextswitching", contextswitching.value);
    localStorage.setItem("customLeveling", customLeveling.value);
    localStorage.setItem("EntityRequirements", EntityRequirements.value);
    localStorage.setItem("IntentModelTrainingData", IntentModelTrainingData.value);

    localStorage.setItem("EndCustomerGovernanceRequired", EndCustomerGovernanceRequired.value);
    localStorage.setItem("AmeliaCoordination", AmeliaCoordination.value);

    localStorage.setItem("DTMFRequired", DTMFRequired.value);
    localStorage.setItem("BargeInRequired", BargeInRequired.value);

    localStorage.setItem("SSO", SSO.value);
    localStorage.setItem("customReporting", customReporting.value);
    localStorage.setItem("ContentSharingRequired", ContentSharingRequired.value);
    localStorage.setItem("RecordingsRequired", RecordingsRequired.value);
    localStorage.setItem("DynamicFAQTraining", DynamicFAQTraining.value);
    localStorage.setItem("DataInformationMasking", DataInformationMasking.value);
    localStorage.setItem("DemoRequirements", DemoRequirements.value);

    localStorage.setItem("solutionTimeline", solutionTimeline.toFixed(2));
    localStorage.setItem("devTimeline", devTimeline.toFixed(2));
    localStorage.setItem("fcustomer", fcustomer);
    localStorage.setItem("fnotes", fnotes);
    localStorage.setItem("fmail", fmail);
    localStorage.setItem("fname", fname);
    
    localStorage.setItem("customReporting", customReporting);
    customReporting = localStorage.getItem("customReporting");
    if (customReporting) {
        //console.log(`Loaded Custom Reporting Value: ${customReporting}`);
    } else {
        //console.log('No custom reporting value found in local storage.');
    }
    manyUCs();
    /*setTimeout(() => {
        window.location.href = "results.html";
    }, 3000);*/
    }
}

function goBack(){
    window.location.href = "index.html";
}

//CHECKS INVALID INT VALUES
function checkValue(input) { 
    if (input.value < 0) {
        input.setCustomValidity("Please enter a value of 0 or higher.");
    } else {
        input.setCustomValidity("");
    }
}

//DISPLAY ISC
document.addEventListener('DOMContentLoaded', function() {
    const integrationYes = document.getElementById('integrationYes');
    const integrationNo = document.getElementById('integrationNo');
    const ISCRequirementsContainer = document.getElementById('ISCRequirementsContainer');

    function toggleISCRequirements() {
        if (integrationYes.checked) {
            ISCRequirementsContainer.style.display = 'block';
        } else {
            ISCRequirementsContainer.style.display = 'none';
        }
    }

    integrationYes.addEventListener('change', toggleISCRequirements);
    integrationNo.addEventListener('change', toggleISCRequirements);
});

