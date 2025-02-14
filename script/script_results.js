window.onload = function() {

    document.getElementById("solutionTimeline").innerText = localStorage.getItem("solutionTimeline") + " weeks";
    document.getElementById("devTimeline").innerText = localStorage.getItem("devTimeline") + " weeks";
    document.getElementById("cost").innerText = "GBP " + localStorage.getItem("cost");
    document.getElementById("sell").innerText = "GBP " + localStorage.getItem("sell");
    

    
    //DOCUMENT DATE
    document.getElementById('documentDate').textContent = new Date().toLocaleDateString('en-GB');

    //NOTES
    document.getElementById("fnotes").innerText = localStorage.getItem("fnotes");
    
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

    document.getElementById("Hypercare").innerText = localStorage.getItem("Hypercare");
    document.getElementById("UAT").innerText = localStorage.getItem("UAT");
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


    //REPORTING
    const customReporting = localStorage.getItem("customReporting");
    //console.log(customReporting)
    if (customReporting) {
        //console.log(`Loaded Custom Reporting Value: ${customReporting}`);
    } else {
        //console.log('No custom reporting value found in local storage.');
    }

    //REPORTING WARNING
    if (customReporting == "true") {
        let message = document.createElement("p");
        message.innerText = "⚠️ Custom reporting will require additional discussion with Bell pre-sales representative.";
        message.classList.add("message");
        document.getElementById("customReportingMessage").appendChild(message);
    }

    //IF CHANNEL EMAIL & NO INTEGRATIONS
    if(integrations == "false" && channels.includes('email')){
        //console.log("channels verified - FAIL");
        let message = document.createElement("p");
        message.innerText = "⛔ We can not deliver email channel without email or API integration. Please discuss the implementation possibilities with technical team";
        message.classList.add("message");
        document.getElementById("noIntegrations").appendChild(message);
    } else {
        //console.log("channels verified - OK");
    }
    if(integrations == "false" && channels.includes('SMS')) {
        //console.log("channels verified - FAIL");
        let message = document.createElement("p");
        message.innerText = "⛔ We can not deliver SMS channel without SMS or API integration. Please discuss the implementation possibilities with technical team";
        message.classList.add("message");
        document.getElementById("noIntegrations").appendChild(message);
    } else {
        //console.log("channels verified - OK");
    }
};

function goBack(){
    window.location.href = "index.html";
}

//SEND EMAIL
function send_email(){
    let body = document.getElementById('pdf_results').innerText
    window.open(`mailto:test@example.com?subject=CostGen Report&body=${encodeURIComponent(body)}`);
}

//EXPORT PDF
/*function downloadPDF() {
    const element = document.getElementById('pdf_results');
    const images = element.getElementsByTagName('img');

    for (let img of images) {
        img.crossOrigin = 'Anonymous';
    }

    
    html2pdf()
        .from(element)
        .set({
            margin: [10, 10, 10, 10], // Adjust margins as needed
            filename: 'SOW_draft.pdf',
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        })
        .save()
        .then(() => {
            console.log('PDF generated successfully.');
        })
        .catch((error) => {
            console.error('Error generating PDF:', error);
        });
}
*/
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

    // Create a Word document structure with embedded CSS
    const preHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Export HTML to DOC</title>
    <style>
        ${cssContent}
    </style>
    </head><body>`;
const postHtml = `</body></html>`;
const fullHtml = preHtml + htmlContent + postHtml;

// Create a blob with the Word document content
const blob = new Blob(['\ufeff', fullHtml], {
    type: 'application/msword'
});

// Create a link element
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "SOW_draft.doc";

// Append the link to the body
document.body.appendChild(link);

// Programmatically click the link to trigger the download
link.click();

// Remove the link from the document
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