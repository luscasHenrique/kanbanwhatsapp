chrome.storage.local.get("privacySettings",e=>{let a=e.privacySettings,s=e=>{(el=document.getElementById("waTidy-privacy-css"+e))&&el.parentNode.removeChild(el)},i=e=>{if(!document.getElementById("waTidy-privacy-css"+e)){var a=document.createElement("link");a.id="waTidy-privacy-css"+e,a.href=chrome.runtime.getURL("assets/css/privacy/"+e+".css"),a.type="text/css",a.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(a)}};a.allMsgs?i("allMsgs"):s("allMsgs"),a.lastMsg?i("lastMsg"):s("lastMsg"),a.mediaPreview?i("mediaPreview"):s("mediaPreview"),a.mediaGallery?i("mediaGallery"):s("mediaGallery"),a.profilePic?i("profilePic"):s("profilePic"),a.names?i("names"):s("names")});