
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    Array.from(htmlElement.children).forEach(child =>{
        htmlElement.removeChild(child);
    });
    const ptag = document.createElement("p");
    const str = document.createTextNode(string);
    ptag.appendChild(str);
    htmlElement.appendChild(ptag);
    
    // htmlElement.remove()
    
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('our wifi is gone', partyHeader);

// module.exports = htmlGenerator;