var cosmosDevToolbar=document.createElement('div');
cosmosDevToolbar.className = 'colorpicker';
var colorSwatches = { 'dark' : ['#191c24', '#000', '#FFF'], 
                        'flame' : ['#3C8712', '#000', 'red'], 
                        'mantis' : ['#5F257E', '#000', 'green']
                    };
var cssInlineVars;
function switchColor(event) {
    var themeColor = event.target.textContent;
    var generalBgColor = colorSwatches[themeColor][0];
    var generalPageColor = colorSwatches[themeColor][1];
    var generalTextColor = colorSwatches[themeColor][2];
    var cssCustomVarStyles = `:root {
        --generalBgColor: ${generalBgColor};
        --generalPageColor: ${generalPageColor};
        --generalTextColor: ${generalTextColor};
    }`;
    if(cssInlineVars) {
        cssInlineVars.parentNode.removeChild(cssInlineVars);
    }
    cssInlineVars=document.createElement('style');
    cssInlineVars.type = 'text/css'; 

    if (cssInlineVars.styleSheet)  
        cssInlineVars.styleSheet.cssText = cssCustomVarStyles; 
    else  
        cssInlineVars.appendChild(document.createTextNode(cssCustomVarStyles)); 
    document.getElementsByTagName("head")[0].appendChild(cssInlineVars); 
    document.body.removeChild(cosmosDevToolbar);
}
function RunCosmosDevTools() {
    var colorPicker = `<div onclick='switchColor(event);'>`;
    for(var i in colorSwatches) {
        colorPicker += `<button style='background:${colorSwatches[i][0]};color:${colorSwatches[i][2]}'>${i}</button>`;
    }
    colorPicker += `</div>`;
    cosmosDevToolbar.innerHTML = colorPicker;
    document.body.appendChild(cosmosDevToolbar);
    var cosmosCSS=document.createElement('link');
    cosmosCSS.setAttribute('rel','stylesheet');
    cosmosCSS.setAttribute('type','text/css');
    cosmosCSS.setAttribute('href','https://ricmars.github.io/cosmostheme/cosmosthemeswitcher.css');
    document.body.appendChild(cosmosCSS);
}
RunCosmosDevTools();
