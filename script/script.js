//CALCULATES SOW PRICE
function calculatePrice() {
    let fcustomer = document.getElementById('fcustomer').value;
    let fname = document.getElementById('fname').value;
    let fmail = document.getElementById('fmail').value;
    console.log(fcustomer+fname+fmail)
    let complexUCs = parseInt(document.getElementById("complexUCs").value) || 0;
    let simpleUCs = parseInt(document.getElementById("simpleUCs").value) || 0;
    let hypercare = parseInt(document.getElementById("Hypercare").value) || 0;
    let UAT = parseInt(document.getElementById("UAT").value) || 0;

    //INTEGRATIONS
    let integrations = document.querySelector('input[name="integrationRequirements"]:checked') ? document.querySelector('input[name="integrationRequirements"]:checked').value : 'No option selected';
    //CHANNELS
    let channels = document.querySelectorAll('#channel input[type="checkbox"]');
    let checkedChannels = [];
    channels.forEach(checkbox => {
        if (checkbox.checked) {
            checkedChannels.push(checkbox.value);
        }
    });
    channels = checkedChannels

    
    let enablement = parseInt(document.getElementById("Enablement").value) || 0;
    let customReporting = document.querySelector('input[name="customReporting"]:checked') ? document.querySelector('input[name="customReporting"]:checked').value : 'No option selected';
    let multiplier = (channel === "Voice" || channel === "Chat") ? 1 : 1.7;

    let solutionTimeline = (((complexUCs * config.complexUCsMultiplier) + (simpleUCs * config.simpleUCsMultiplier)) * multiplier) + config.baseSolutionTimeline;
    let devTimeline = ((complexUCs * config.complexUCsDevMultiplier) + ((simpleUCs + config.simpleUCsDevAdditional) * config.devMultiplier)) * multiplier;
    let cost = (config.costPerHour * 5 * config.solutionMultiplier * solutionTimeline) + 
               (config.devCostPerHour * 5 * devTimeline) + 
               (config.costPerHour * 5 * config.solutionAdditionalMultiplier * (devTimeline + solutionTimeline)) + 
               (config.devCostPerHour * 5 * (hypercare + UAT)) + 
               (enablement * config.enablementCost);
    let sell = (config.sellPerHour * 5 * config.solutionMultiplier * solutionTimeline) + 
               (config.devSellPerHour * 5 * devTimeline) + 
               (config.sellPerHour * 5 * config.sellAdditionalMultiplier * (devTimeline + solutionTimeline)) + 
               (config.devSellPerHour * 5 * (hypercare + UAT)) + 
               (enablement * config.enablementSell);

    localStorage.setItem("solutionTimeline", solutionTimeline.toFixed(2));
    localStorage.setItem("devTimeline", devTimeline.toFixed(2));
    localStorage.setItem("cost", cost.toFixed(2));
    localStorage.setItem("sell", sell.toFixed(2));
    localStorage.setItem("fcustomer", fcustomer);
    localStorage.setItem("fmail", fmail);
    localStorage.setItem("fname", fname);
    localStorage.setItem("channels", channels);
    localStorage.setItem("integrations", integrations);

    localStorage.setItem("customReporting", customReporting);
    customReporting = localStorage.getItem("customReporting");
    if (customReporting) {
        console.log(`Loaded Custom Reporting Value: ${customReporting}`);
    } else {
        console.log('No custom reporting value found in local storage.');
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

