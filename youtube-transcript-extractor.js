////Get the transcript from youtube videos and consolidate it to 

// include juery as it is not there 
var script = document.createElement('script');script.src = "https://code.jquery.com/jquery-3.4.1.min.js";document.getElementsByTagName('head')[0].appendChild(script);

//version 1 - log it into the console
var text = ''; $('ytd-transcript-body-renderer').find('div[role="button"]').each((index,div)=>text+=div.textContent.trim() + '\n');text

//version 2 - create new web page
var text = ''; $('ytd-transcript-body-renderer').find('div[role="button"]').each((index,div)=>{text+=div.textContent.trim();text+=index%2?'<br/>':' '});window.open().document.write(text);
