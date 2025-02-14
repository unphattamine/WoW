window.onload = function() {
    document.getElementById("solutionTimeline").innerText = localStorage.getItem("solutionTimeline") + " weeks";
    document.getElementById("devTimeline").innerText = localStorage.getItem("devTimeline") + " weeks";
    document.getElementById("cost").innerText = "GBP " + localStorage.getItem("cost");
    document.getElementById("sell").innerText = "GBP " + localStorage.getItem("sell");
    
    //CUSTOMER
    document.getElementById("fcustomer").innerText = localStorage.getItem("fcustomer");
    document.getElementById("fname").innerText = localStorage.getItem("fname");
    document.getElementById("fmail").innerText = localStorage.getItem("fmail");
    

    const integrations = localStorage.getItem("integrations");
    const channels = localStorage.getItem("channels");

    //console.log(channels)
    const customReporting = localStorage.getItem("customReporting");
    console.log(customReporting)
    if (customReporting) {
        console.log(`Loaded Custom Reporting Value: ${customReporting}`);
    } else {
        console.log('No custom reporting value found in local storage.');
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
        console.log("channels verified - FAIL");
        let message = document.createElement("p");
        message.innerText = "⛔ We can not deliver email channel without email or API integration. Please discuss the implementation possibilities with technical team";
        message.classList.add("message");
        document.getElementById("noIntegrations").appendChild(message);
    } else {
        console.log("channels verified - OK");
    }
    if(integrations == "false" && channels.includes('SMS')) {
        console.log("channels verified - FAIL");
        let message = document.createElement("p");
        message.innerText = "⛔ We can not deliver SMS channel without SMS or API integration. Please discuss the implementation possibilities with technical team";
        message.classList.add("message");
        document.getElementById("noIntegrations").appendChild(message);
    } else {
        console.log("channels verified - OK");
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

