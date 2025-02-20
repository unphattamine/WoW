window.onload = function() {

    document.getElementById("solutionTimeline").innerText = localStorage.getItem("solutionTimeline") + " weeks";
    document.getElementById("devTimeline").innerText = localStorage.getItem("devTimeline") + " weeks";
    
    //DOCUMENT DATE
    document.getElementById('documentDate').textContent = new Date().toLocaleDateString('en-GB');

    //NOTES
    document.getElementById("fnotes").innerText = localStorage.getItem("fnotes");
    document.getElementById("fnotes1").innerText = localStorage.getItem("fnotes");
    
    //CUSTOMER
    //getting all elements with the id fcustomer, not recommended really
    document.getElementById("fcustomer").innerText = localStorage.getItem("fcustomer");
    document.getElementById("fcustomer1").innerText = localStorage.getItem("fcustomer");
    document.getElementById("fname").innerText = localStorage.getItem("fname");
    document.getElementById("fmail").innerText = localStorage.getItem("fmail");
    
    document.getElementById("complexUCs").innerText = localStorage.getItem("complexUCs");
    document.getElementById("simpleUCs").innerText = localStorage.getItem("simpleUCs");
    const channels = localStorage.getItem("channels");
    const productLanguage = localStorage.getItem("productLanguage");
    document.getElementById("AmeliaTrainingCourse").innerText = localStorage.getItem("AmeliaTrainingCourse");
    document.getElementById("customTimezone").innerText = localStorage.getItem("customTimezone");
    document.getElementById("customLocation").innerText = localStorage.getItem("customLocation");

    document.getElementById("kickoffTimeline").innerText = config.elapsedTimeKickoff.toFixed(2)  + " weeks";
    document.getElementById("Hypercare").innerText = localStorage.getItem("Hypercare");
    document.getElementById("HypercareTimeline").innerText = localStorage.getItem("HypercareTimeline") + " weeks";
    document.getElementById("UAT").innerText = localStorage.getItem("UAT");
    document.getElementById("UATTimeline").innerText = localStorage.getItem("UATTimeline") + " weeks";
    document.getElementById("totalTimeline").innerText = localStorage.getItem("totalTimeline") + " weeks";
    /* LOE TABLE
    document.getElementById("solutionLOE").innerText = localStorage.getItem("solutionLOE") + " hours";
    document.getElementById("devLOE").innerText = localStorage.getItem("devLOE") + " hours";
    document.getElementById("UATLOE").innerText = localStorage.getItem("UATLOE") + " hours";
    document.getElementById("PMLOE").innerText = localStorage.getItem("PMLOE") + " hours";
    */
    document.getElementById("PMTotal1").innerText = localStorage.getItem("PMTotal1") + " hrs";
    document.getElementById("TBAkickoff").innerText = localStorage.getItem("TBAkickoff");
    document.getElementById("TBAsolutioning").innerText = localStorage.getItem("TBAsolutioning");
    document.getElementById("TBAdevelopment").innerText = localStorage.getItem("TBAdevelopment");
    document.getElementById("TBAUAT").innerText = localStorage.getItem("TBAUAT");
    document.getElementById("TBAHypercare").innerText = localStorage.getItem("TBAHypercare");
    document.getElementById("TBATotal").innerText = localStorage.getItem("TBATotal") + " hours";
    document.getElementById("TBATotal1").innerText = localStorage.getItem("TBATotal") + " hrs";
    document.getElementById("SAkickoff").innerText = localStorage.getItem("SAkickoff");
    document.getElementById("SAsolutioning").innerText = localStorage.getItem("SAsolutioning");
    document.getElementById("SAdevelopment").innerText = localStorage.getItem("SAdevelopment");
    document.getElementById("SAUAT").innerText = localStorage.getItem("SAUAT");
    document.getElementById("SAHypercare").innerText = localStorage.getItem("SAHypercare");
    document.getElementById("SATotal").innerText = localStorage.getItem("SATotal") + " hours";
    document.getElementById("SATotal1").innerText = localStorage.getItem("SATotal") + " hrs";
    document.getElementById("CIEkickoff").innerText = localStorage.getItem("CIEkickoff");
    document.getElementById("CIEsolutioning").innerText = localStorage.getItem("CIEsolutioning");
    document.getElementById("CIEdevelopment").innerText = localStorage.getItem("CIEdevelopment");
    document.getElementById("CIEUAT").innerText = localStorage.getItem("CIEUAT");
    document.getElementById("CIEHypercare").innerText = localStorage.getItem("CIEHypercare");
    document.getElementById("CIETotal").innerText = localStorage.getItem("CIETotal") + " hours";
    document.getElementById("CIETotal1").innerText = localStorage.getItem("CIETotal") + " hrs";
    document.getElementById("PRMTotal1").innerText = localStorage.getItem("PRMTotal") + " hrs";

    //COST + MAN HOURS
    document.getElementById("TBACost").innerText = localStorage.getItem("TBACost");
    document.getElementById("TBACostwContingency").innerText = localStorage.getItem("TBACostwContingency");
    document.getElementById("TBASell").innerText = localStorage.getItem("TBASell");
    document.getElementById("SACost").innerText = localStorage.getItem("SACost");
    document.getElementById("SACostwContingency").innerText = localStorage.getItem("SACostwContingency");
    document.getElementById("SASell").innerText = localStorage.getItem("SASell");
    document.getElementById("PMCost").innerText = localStorage.getItem("PMCost");
    document.getElementById("PMCostwContingency").innerText = localStorage.getItem("PMCostwContingency");
    document.getElementById("PMSell").innerText = localStorage.getItem("PMSell");
    document.getElementById("CIECost").innerText = localStorage.getItem("CIECost");
    document.getElementById("CIECostwContingency").innerText = localStorage.getItem("CIECostwContingency");
    document.getElementById("CIESell").innerText = localStorage.getItem("CIESell");
    document.getElementById("PRMCost").innerText = localStorage.getItem("PRMCost");
    document.getElementById("PRMCostwContingency").innerText = localStorage.getItem("PRMCostwContingency");
    document.getElementById("PRMSell").innerText = localStorage.getItem("PRMSell");
    document.getElementById("TotalHours").innerText = localStorage.getItem("TotalHours")  + " hrs";
    document.getElementById("TotalCost").innerText = localStorage.getItem("TotalCost");
    document.getElementById("TotalCost2").innerText = "GBP " + localStorage.getItem("TotalCost2");
    document.getElementById("TotalCostwContingency").innerText = localStorage.getItem("TotalCostwContingency");
    document.getElementById("TotalSell").innerText = localStorage.getItem("TotalSell");
    document.getElementById("TotalSell2").innerText = "GBP " + localStorage.getItem("TotalAmount");
    document.getElementById("TotalHoursEnablement").innerText = localStorage.getItem("TotalHoursEnablement")  + " hrs";
    document.getElementById("TotalCostEnablement").innerText = localStorage.getItem("TotalCostEnablement");
    document.getElementById("TotalCostEnablementwContingency").innerText = localStorage.getItem("TotalCostEnablementwContingency");
    document.getElementById("TotalSellEnablement").innerText = localStorage.getItem("TotalSellEnablement");
    document.getElementById("TotalAmount").innerText = "GBP " + localStorage.getItem("TotalAmount");
    document.getElementById("TotalAmountBMS1").innerText = "GBP " + localStorage.getItem("TotalAmountBMS1");
    document.getElementById("TotalAmountBMS2").innerText = "GBP " + localStorage.getItem("TotalAmountBMS2");

    document.getElementById("Enablement").innerText = localStorage.getItem("Enablement");
    document.getElementById("GoLiveApproach").innerText = localStorage.getItem("GoLiveApproach");
    
    document.getElementById("integrationRequirements").innerText = localStorage.getItem("integrationRequirements");
    document.getElementById("APInumbers").innerText = localStorage.getItem("APInumbers");
    document.getElementById("APIStartDate").innerText = localStorage.getItem("APIStartDate");
    document.getElementById("APIExposed").innerText = localStorage.getItem("APIExposed");
    document.getElementById("ISCRequirements").innerText = localStorage.getItem("ISCRequirements");
    document.getElementById("fAPInotes").innerText = localStorage.getItem("fAPInotes");

    document.getElementById("IntentModelRequired").innerText = localStorage.getItem("IntentModelRequired");
    document.getElementById("IntentNumber").innerText = localStorage.getItem("IntentNumber");
    document.getElementById("contextswitching").innerText = localStorage.getItem("contextswitching");
    document.getElementById("customLeveling").innerText = localStorage.getItem("customLeveling");
    document.getElementById("EntityRequirements").innerText = localStorage.getItem("EntityRequirements");
    document.getElementById("IntentModelTrainingData").innerText = localStorage.getItem("IntentModelTrainingData");

    document.getElementById("EndCustomerGovernanceRequired").innerText = localStorage.getItem("EndCustomerGovernanceRequired");
    document.getElementById("AmeliaCoordination").innerText = localStorage.getItem("AmeliaCoordination");

    document.getElementById("DTMFRequired").innerText = localStorage.getItem("DTMFRequired");
    document.getElementById("BargeInRequired").innerText = localStorage.getItem("BargeInRequired");

    document.getElementById("customReporting").innerText = localStorage.getItem("customReporting");
    document.getElementById("ContentSharingRequired").innerText = localStorage.getItem("ContentSharingRequired");
    document.getElementById("RecordingsRequired").innerText = localStorage.getItem("RecordingsRequired");
    document.getElementById("DynamicFAQTraining").innerText = localStorage.getItem("DynamicFAQTraining");
    document.getElementById("DataInformationMasking").innerText = localStorage.getItem("DataInformationMasking");
    document.getElementById("DemoRequirements").innerText = localStorage.getItem("DemoRequirements");

    const integrations = localStorage.getItem("integrations");
    
    //console.log(productLanguage);
    document.getElementById("channels").innerText = localStorage.getItem("channels");
    document.getElementById("productLanguage").innerText = localStorage.getItem("productLanguage");


    //WARNINGS SECTION, ASSUMPTIONS
    //REPORTING
    const customReporting = localStorage.getItem("customReporting");
    /*//REPORTING WARNING
    if (customReporting == "true") {
        let message = document.createElement("p");
        message.innerText = "⚠️ Custom reporting will require additional discussion with Bell pre-sales representative.";
        message.classList.add("message");
        document.getElementById("customReportingMessage").appendChild(message);
    }
    */
    //If CHANNEL SMS/Email
    if(channels.includes('email')||channels.includes('SMS')){
        let message = document.createElement("p");
        message.innerText = "⚠️ Custom Channel required, a sales representative will be reaching to clarify channel integration requirements. ";
        message.classList.add("message");
        document.getElementById("warning").appendChild(message);
    } else {
        //console.log("channels verified - OK");
    }

    //If Custom Timezone requirements
        if(localStorage.getItem("customTimezone") !== "no"){
        let message = document.createElement("p");
        message.innerText = "⚠️ Estimation is not considering custom Delivery location requirements, a sales representative will be reaching to clarify. ";
        message.classList.add("message");
        document.getElementById("warning").appendChild(message);
    } else {
        //ASSUMPTION
        message = document.createElement("p");
        message.innerText = "ℹ️ Delivery working hours are 8 AM to 6 PM UK timezone, additional availability requirements are subject to Change Request process and additional charges";
        message.classList.add("assumptions");
        document.getElementById("assumptions").appendChild(message);
    }

    //If Amelia training course
    if(localStorage.getItem("AmeliaTrainingCourse") === "false"){
        //ASSUMPTION
        let message = document.createElement("p");
        message.innerText = "🚫 Training for Amelia/Autopilot is outside the scope";
        message.classList.add("outofscope");
        document.getElementById("outofscope").appendChild(message);
    } else {
        //
    }

    //If Go Live no Single. 
    if(localStorage.getItem("GoLiveApproach") !== "Single"){
        let message = document.createElement("p");
        message.innerText = "⚠️ Custom GoLive approach selected, a sales representative will be reaching to clarify GoLive approach";
        message.classList.add("message");
        document.getElementById("warning").appendChild(message);
    } else {
        //ASSUMPTION
        message = document.createElement("p");
        message.innerText = "ℹ️ Single Go Live is expected in this SOW, any other Go Live approach will be subject to Change request process and additional charges";
        message.classList.add("assumptions");
        document.getElementById("assumptions").appendChild(message);
    }
    
    //If not APIExposed 
    if(localStorage.getItem("APIExposed") !== "true"){
        let message = document.createElement("p");
        message.innerText = "⚠️ Integrations not Internet facing, a sales representative will be reaching out to clarify Integration connectivity and authentication requirements. ";
        message.classList.add("message");
        document.getElementById("warning").appendChild(message);
    } else {
        //console.log("channels verified - OK");
    }

    //If Custom Leveling selected 
    if(localStorage.getItem("customLeveling") !== "false"){
        let message = document.createElement("p");
        message.innerText = "⚠️ Custom leveling selected, a sales representative will be reaching out to clarify  requirements";
        message.classList.add("message");
        document.getElementById("warning").appendChild(message);
    } else {
        //console.log("channels verified - OK");
    }

    //If Complex Entity selected  
    if(localStorage.getItem("EntityRequirements") !== "false"){
        let message = document.createElement("p");
        message.innerText = "⚠️ Complex Entity selected, a sales representative will be reaching out to clarify  requirements";
        message.classList.add("message");
        document.getElementById("warning").appendChild(message);
    } else {
        //console.log("channels verified - OK");
    }

    //If Intent model training data not available
    if(localStorage.getItem("IntentModelTrainingData") !== "true"){
        let message = document.createElement("p");
        message.innerText = "⚠️ Intent model not provided,  a sales representative will be reaching out to clarify  requirements";
        message.classList.add("message");
        document.getElementById("warning").appendChild(message);
    } else {
        //
    }

    //If End Customer Governance
    if(localStorage.getItem("EndCustomerGovernanceRequired") !== "false"){
        let message = document.createElement("p");
        message.innerText = "⚠️ Customer Governance selected,   a sales representative will be reaching out to clarify  requirements";
        message.classList.add("message");
        document.getElementById("warning").appendChild(message);
    } else {
        //console.log("channels verified - OK");
    }

    //If Amelia Coordination
    if(localStorage.getItem("AmeliaCoordination") !== "false"){
        let message = document.createElement("p");
        message.innerText = "⚠️ Amelia coordination required,  a sales representative will be reaching out to clarify  requirements";
        message.classList.add("message");
        document.getElementById("warning").appendChild(message);
    } else {
        message = document.createElement("p");
        message.innerText = "🚫 Any type of Amelia coordination or tasks : Environment setup i.e Domain creation, Amelia instance configuration, Access management, Voice mapping etc..";
        message.classList.add("outofscope");
        document.getElementById("outofscope").appendChild(message);
    }

    //If custom reporting requirements 
    if(localStorage.getItem("customReporting") !== "false"){
        let message = document.createElement("p");
        message.innerText = "⚠️ Custom reporting requirements required, a sales representative will be reaching out to clarify requirements and gather samples";
        message.classList.add("message");
        document.getElementById("warning").appendChild(message);
    } else {
        //console.log("channels verified - OK");
    }

    //If content Sharing 
    if(localStorage.getItem("ContentSharingRequired") !== "false"){
        let message = document.createElement("p");
        message.innerText = "⚠️ Custom Content Sharing required, a sales representative will be reaching out to clarify requirements";
        message.classList.add("message");
        document.getElementById("warning").appendChild(message);
    } else {
        //console.log("channels verified - OK");
    }

    //If Custom Demo, milestones closure proccess 
    if(localStorage.getItem("DemoRequirements") !== "false"){
        let message = document.createElement("p");
        message.innerText = "⚠️ Custom demo or milestone requirements selected,  a sales representative will be reaching out to clarify requirements";
        message.classList.add("message");
        document.getElementById("warning").appendChild(message);
    } else {
        //console.log("channels verified - OK");
    }
    //IF CHANNEL EMAIL & NO INTEGRATIONS
    if(localStorage.getItem("integrationRequirements") == "false" && channels.includes('email')){
        console.log("channels verified - FAIL SMS");
        let message = document.createElement("p");
        message.innerText = "⛔ We can not deliver email channel without email or API integration. Please discuss the implementation possibilities with technical team";
        message.classList.add("outofscope");
        document.getElementById("warning").appendChild(message);
    } else {
        //console.log("channels verified - OK");
    }
    if(localStorage.getItem("integrationRequirements") == "false" && channels.includes('SMS')) {
        //console.log("channels verified - FAIL");
        let message = document.createElement("p");
        message.innerText = "⛔ We can not deliver SMS channel without SMS or API integration. Please discuss the implementation possibilities with technical team";
        message.classList.add("outofscope");
        document.getElementById("warning").appendChild(message);
    } else {
        //console.log("channels verified - OK");
    }
};

/*function goBack(){
    window.location.href = "index.html";
}*/

//SEND EMAIL
function send_email(){
    let body = document.getElementById('pdf_results').innerText
    window.open(`mailto:test@example.com?subject=CostGen Report&body=${encodeURIComponent(body)}`);
}

//GENERATE ESTIMATES
function generate_estimates(){
    window.location.href = "estimates.html";
}

//EXPORT PDF
function downloadPDF() {
    const element = document.getElementById('pdf_results');
    const images = element.getElementsByTagName('img');

    for (let img of images) {
        img.crossOrigin = 'Anonymous';
    }

    // Calculate the height of the content
    const contentHeight = element.scrollHeight;

    html2pdf()
        .from(element)
        .set({
            margin: [20, 20, 20, 20],
            autoPaging: 'text',
            filename: 'SOW_draft.pdf',
            html2canvas: {
                scrollY: 0,
                allowTaint: true,
                letterRendering: true,
                logging: false,
                scale: 2,
                useCORS: true
            },
            jsPDF: { unit: 'mm', format: [210, 297], orientation: 'portrait' }
        })
        .save()
        .then(() => {
            console.log('PDF generated successfully.');
        })
        .catch((error) => {
            console.error('Error generating PDF:', error);
        });
}

async function exportHTMLToDocx() {
    const cssResponse = await fetch('style/style.css');
    const cssContent = await cssResponse.text();
    const htmlContent = document.getElementById("pdf_results").outerHTML;

    const preHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Export HTML to DOC</title>
    <style>
        ${cssContent}
    </style>
    </head><body>`;
const postHtml = `</body></html>`;
const fullHtml = preHtml + htmlContent + postHtml;

const blob = new Blob(['\ufeff', fullHtml], {
    type: 'application/msword'
});


const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "SOW_draft.doc";

document.body.appendChild(link);
link.click();
document.body.removeChild(link);
  }


  document.addEventListener("DOMContentLoaded", function() {
    function updateSpans() {
        const spans = document.querySelectorAll("#tableSummary span");

        spans.forEach(span => {
            const text = span.textContent.toLowerCase();
            if (text === "no" || text === "false") {
                span.textContent = "❌";
            } else if (text === "yes" || text === "true") {
                span.textContent = "✔️";
            }
        });
    }
    updateSpans();
    setInterval(updateSpans, 100);
});