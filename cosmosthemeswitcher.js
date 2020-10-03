var cosmosBaseCSS=document.createElement('link');
cosmosBaseCSS.setAttribute('rel','stylesheet');
cosmosBaseCSS.setAttribute('type','text/css');
cosmosBaseCSS.setAttribute('href','https://ricmars.github.io/cosmostheme/cosmosthemebase.css');
var cosmosCSS = document.createElement('link');
cosmosCSS.setAttribute('rel','stylesheet');
cosmosCSS.setAttribute('type','text/css');
cosmosCSS.setAttribute('href','https://ricmars.github.io/cosmostheme/cosmosthemeswitcher.css');
var cosmosDevToolbar=document.createElement('div');
var cosmosInitTool = false;
cosmosDevToolbar.className = 'colorpicker';
/* List the different themes by background color, page bg color, text color, interactive color, case header bg color */
var colorSwatches = { 'light' : ['#FFF', '#e0e0e0', '#000', '#006BBD','#e0e0e0'],
            'dark' : ['#191c24', '#000', '#FFF', '#8db4fd','#191c24'], 
            'mustard' : ['#f7dc75', 'f3f0dd', '#FFF','#8db4fd','f3f0dd'], 
            'mantis' : ['#53832D', '#000', '#FFF','#8db4fd','#33610d'],
            'honey flower' : ['#5F257E', '#000', '#FFF','#8db4fd','#4f0063'],
            'deep cerise': ['#D3197C', '#000', '#FFF','#8db4fd','#9a0151'],
          };
var cssInlineVars;
function CloseCosmosDevTools(event) {
  event.preventDefault();
  document.body.removeChild(cosmosDevToolbar);
}

function switchColor(event) {
  var themeColor = event.target.textContent;
  if(themeColor === 'reset') {
    document.body.removeChild(cosmosCSS);
    document.body.removeChild(cosmosDevToolbar);
    document.body.removeChild(cosmosBaseCSS);
    cosmosInitTool = false;
    return;
  }
  if(typeof (colorSwatches[themeColor]) === 'undefined') {
    return;
  }
  var generalBgColor = colorSwatches[themeColor][0];
  var generalPageColor = colorSwatches[themeColor][1];
  var generalTextColor = colorSwatches[themeColor][2];
  var generalInteractiveColor = colorSwatches[themeColor][3];
  var caseHeaderBgColor = colorSwatches[themeColor][4];
  var cssCustomVarStyles = `:root {
      --generalBgColor: ${generalBgColor};
      --generalPageColor: ${generalPageColor};
      --generalTextColor: ${generalTextColor};
      --generalInteractiveColor: ${generalInteractiveColor};
      --caseHeaderBgColor: ${caseHeaderBgColor};
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
  if(!cosmosInitTool) {
    cosmosInitTool = true;
    document.body.appendChild(cosmosCSS);
  }
}
function RunCosmosDevTools() {
  var colorPicker = `<div onclick='switchColor(event);'><div><h4>Theme switcher</h4><button onclick='CloseCosmosDevTools(event);' aria-label='Close the theme switcher' class='icon-close'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20px" height="20px" fill="currentColor">
<path d="M20.3375,3 C20.3375,3 21.7742187,4.43671875 21.7742187,4.43671875 C21.7742187,4.43671875 4.43671875,21.4867188 4.43671875,21.4867188 C4.43671875,21.4867188 3,20.19375 3,20.19375 C3,20.19375 20.3375,3 20.3375,3 Z M21.7265625,20.0976563 C21.7265625,20.0976563 20.3859375,21.534375 20.3859375,21.534375 C20.3859375,21.534375 3.00078125,4.3890625 3.00078125,4.3890625 C3.00078125,4.3890625 4.38984375,3 4.38984375,3 C4.38984375,3 21.7273438,20.0976563 21.7273438,20.0976563 L21.7265625,20.0976563 Z"/>
</svg></button></div><div><button>reset</button>`;
  for(var i in colorSwatches) {
    colorPicker += `<button style='background:${colorSwatches[i][0]};color:${colorSwatches[i][2]}'>${i}</button>`;
  }
  colorPicker += `</div></div>`;
  cosmosDevToolbar.innerHTML = colorPicker;
  document.body.appendChild(cosmosDevToolbar);
  document.body.appendChild(cosmosBaseCSS);
}
RunCosmosDevTools();
