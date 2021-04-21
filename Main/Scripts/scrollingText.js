const codeStrings = [
    `std::cout << "Hello World!";`,
    `Console.WriteLine("Hello World!");`,
    `print("Hello World!")`,
    `console.log("Hello World!")`,
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function initRotate(spanElement, period, strings = codeStrings) {
    while(true) {
        for (string of strings) {
            let viewedStr = ""

            // Repeatedly add a char onto the displayed string
            for (char of string.split("")) {
                viewedStr += char
                spanElement.innerHTML = `<span class="wrap">${viewedStr}<span>`;
                await sleep(200 - Math.random() * 100);
            }
            
            await sleep(period);
            
            // Repeatedly "delete" the rightmost char
            for (let i = string.length; i > 0; i--) { 
                spanElement.innerHTML = `<span class="wrap">${string.substring(0, i)}<span>`;
                await sleep(100 - Math.random() * 50);
            }
        }
    }
}

window.onload = function() {
    for (element of document.getElementsByClassName('typewrite')) {
        var period = element.getAttribute('data-period');
        initRotate(element, period);
    }
};