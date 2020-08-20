
function initReader(address, element, options) {
    if (!options) {
        options = {
            pdfOpenParams: { scrollbar: '1', toolbar: '0', statusbar: '0', messages: '0', navpanes: '0' }
        };
    }

    let elementID = element.id;

    console.log(`id is: ${elementID}`);

    if ($(elementID).length == 0) {
        elementID = uniqid();
        $(element).attr('id', elementID);
    }

    PDFObject.embed(address, `#${elementID}`, options);
}

function uniqid(a = "", b = false) {
    const c = Date.now() / 1000;
    let d = c.toString(16).split(".").join("");
    while (d.length < 14) d += "0";
    let e = "";
    if (b) {
        e = ".";
        e += Math.round(Math.random() * 100000000);
    }
    return `id${(a + d + e).toString()}`;
}