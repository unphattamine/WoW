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
    let customReporting = document.querySelector('input[name="customReporting"]:checked') ? document.querySelector('input[name="customReporting"]:checked').value : 'No option selected';
    let ContentSharingRequired = document.querySelector('input[name="ContentSharingRequired"]:checked');
    let RecordingsRequired = document.querySelector('input[name="RecordingsRequired"]:checked');
    let DynamicFAQTraining = document.querySelector('input[name="DynamicFAQTraining"]:checked');
    let DataInformationMasking = document.querySelector('input[name="DataInformationMasking"]:checked');
    let DemoRequirements = document.querySelector('input[name="DemoRequirements"]:checked');


    let enablement = parseInt(document.getElementById("Enablement").value) || 0;
    
    let multiplier = (channel === "Voice" || channel === "Chat") ? 1 : 1.7;

    //TIMELINE FORMULAS
    let kickoffTimeline = config.elapsedTimeKickoff;
    let solutionTimeline = (1*complexUCs) + (0.75*simpleUCs)+ 2;
    let devTimeline = (1*complexUCs) + (0.5*simpleUCs) + 2;
    let UATTimeline = (1*UAT);
    let HypercareTimeline = (1*Hypercare);
    let totalTimeline = config.elapsedTimeKickoff + devTimeline + UATTimeline + HypercareTimeline;

    let PMLOE = totalTimeline*5*8*0.5;
    let solutionLOE = (0.7*complexUCs*5*8) + (0.6*simpleUCs*5*8) + (0.5*3*5*8);
    let devLOE = (1.75*complexUCs*5*8) + (1.25*simpleUCs*5*8) + (3*5*8);
    let UATLOE = (5*8*UAT);
    let TBAkickoff = 0.5*8*5*kickoffTimeline;
    let TBAsolutioning = (0.7*complexUCs*5*8) + (0.6*simpleUCs*5*8) +0.5*3*5*8;
    let TBAdevelopment = (1.75*complexUCs*5*8) + (1.25*simpleUCs*5*8) + 3*5*8;
    let TBAUAT = UAT*5*8;
    let TBAHypercare = Hypercare*5*8;
    let TBATotal = TBAkickoff+TBAsolutioning+TBAdevelopment+TBAUAT+TBAHypercare;
    let SAkickoff = 0.5*8*5*kickoffTimeline;
    let SAsolutioning = TBAsolutioning*0.25;
    let SAdevelopment = TBAdevelopment*0.1;
    let SAUAT = 0;
    let SAHypercare = 0;
    let SATotal = SAkickoff+SAsolutioning+SAdevelopment+SAUAT+SAHypercare;
    
    //let devTimeline = ((complexUCs * config.complexUCsDevMultiplier) + ((simpleUCs + config.simpleUCsDevAdditional) * config.devMultiplier)) * multiplier;
    let cost = (config.costPerHour * 5 * config.solutionMultiplier * solutionTimeline) + 
               (config.devCostPerHour * 5 * devTimeline) + 
               (config.costPerHour * 5 * config.solutionAdditionalMultiplier * (devTimeline + solutionTimeline)) + 
               (config.devCostPerHour * 5 * (Hypercare + UAT)) + 
               (enablement * config.enablementCost);
    let sell = (config.sellPerHour * 5 * config.solutionMultiplier * solutionTimeline) + 
               (config.devSellPerHour * 5 * devTimeline) + 
               (config.sellPerHour * 5 * config.sellAdditionalMultiplier * (devTimeline + solutionTimeline)) + 
               (config.devSellPerHour * 5 * (Hypercare + UAT)) + 
               (enablement * config.enablementSell);


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

    localStorage.setItem("customReporting", customReporting.value);
    localStorage.setItem("ContentSharingRequired", ContentSharingRequired.value);
    localStorage.setItem("RecordingsRequired", RecordingsRequired.value);
    localStorage.setItem("DynamicFAQTraining", DynamicFAQTraining.value);
    localStorage.setItem("DataInformationMasking", DataInformationMasking.value);
    localStorage.setItem("DemoRequirements", DemoRequirements.value);

    localStorage.setItem("solutionTimeline", solutionTimeline.toFixed(2));
    localStorage.setItem("devTimeline", devTimeline.toFixed(2));
    localStorage.setItem("cost", cost.toFixed(2));
    localStorage.setItem("sell", sell.toFixed(2));
    localStorage.setItem("fcustomer", fcustomer);
    localStorage.setItem("fnotes", fnotes);
    localStorage.setItem("fmail", fmail);
    localStorage.setItem("fname", fname);
    
    //localStorage.setItem("integrations", integrations);
 

    localStorage.setItem("customReporting", customReporting);
    customReporting = localStorage.getItem("customReporting");
    if (customReporting) {
        //console.log(`Loaded Custom Reporting Value: ${customReporting}`);
    } else {
        //console.log('No custom reporting value found in local storage.');
    }

/*
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(key, value);
    }
*/
    window.location.href = "results.html";
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

