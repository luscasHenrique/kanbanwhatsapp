var notas_agendamentos=[];const init=async()=>{function e(){return new Promise(e=>{chrome.runtime.sendMessage({message:"getLanguageURI"},async function(a){let t=await fetch(a),o=await t.json();e(o)})})}chrome.storage.local.get("darkMode",e=>{e.darkMode?document.body.classList.add("dark"):document.body.classList.remove("dark")});let a=await e();GFN.language=a,document.querySelector("#app")?.remove();let t=document.createElement("div");t.setAttribute("id","app"),document.body.prepend(t),painel(t),notas_agendamentos={agendamentos:await getAgendamentos(),notas:await getNotas()}},getAgendamentos=async()=>(await GFN.getStorage("agendaMsg")).agendaMsg,getNotas=async()=>(await GFN.getStorage("notes")).notes;function WPP(e,a){return new Promise((t,o)=>{let s=Math.random().toString(36).substr(2,10);chrome.tabs.query({url:"https://web.whatsapp.com/*"},function(t){t.length>0?chrome.tabs.sendMessage(t[0].id,{type:"controler",action:e,dados:a,id:s}):Swal.fire({title:GFN.language.CRM_errorNoWhatsTitle,text:GFN.language.CRM_errorNoWhatsText,icon:"warning",confirmButtonColor:"#FDB813",confirmButtonText:GFN.language.CRM_errorNoWhatsReload}).then(e=>{e.isConfirmed&&(window.location.href="https://web.whatsapp.com/")})}),chrome.runtime.onMessage.addListener(function(e,a,o){if("returnControler"===e.type&&e.id==s)return t(JSON.parse(e.response)),!0})})}function Content(e){chrome.tabs.query({url:"https://web.whatsapp.com/*"},function(a){a.length>0?chrome.tabs.sendMessage(a[0].id,{type:e}):Swal.fire({title:GFN.language.CRM_errorNoWhatsTitle,text:GFN.language.CRM_errorNoWhatsText,icon:"warning",confirmButtonColor:"#FDB813",confirmButtonText:GFN.language.CRM_errorNoWhatsReload}).then(e=>{e.isConfirmed&&(window.location.href="https://web.whatsapp.com/")})})}init(),chrome.runtime.onMessage.addListener(function(e,a,t){switch(e.action){case"themeReload":e.darkMode?document.body.classList.add("dark"):document.body.classList.remove("dark");break;case"languageReload":case"importBackup":init();break;case"updateInbox":controler.updateInbox();break;case"insertUserAba":controler.insertUserAba(e.aba,e.activeID,e.user);break;case"removeUserAba":controler.removeUserAba(e.aba,e.activeID);break;case"abaAdd":controler.abaAdd(e.aba);break;case"abaUpdate":controler.abaUpdate(e.oldAba,e.newAba);break;case"abaRemove":controler.abaRemove(e.aba);break;case"etiquetaUpdate":controler.etiquetaUpdate(e.activeID,e.labels,reload=!0);break;case"abaListUpdate":controler.abaListUpdate(e.aba);break;case"CrmUsersUpdate":console.log("RECEBIA ATUALIZE"),controler.saveUpdateUsers(usersUpdate);break;case"userUpdateNome":controler.userUpdateNome(e.contato);break;case"updateContNotas":controler.updateContNotas(e.userID)}});let toolTipsContainer=document.createElement("div");toolTipsContainer.classList.add("tooltips");const allToolips=document.createElement("span");allToolips.setAttribute("role","tooltip"),allToolips.classList.add("popper"),allToolips.setAttribute("id","allTitle"),toolTipsContainer.appendChild(allToolips),document.body.appendChild(toolTipsContainer);const usersUpdate=[];window.onclick=function(e){document.querySelector("#allTitle")?.removeAttribute("data-show"),e.target.closest('div[tag="card"]')&&!e.target.closest('div[tag="card-content"]')&&document.querySelector('div[tag="card"]')?.remove(),e.target.closest("#modalEtiqueta")||(document.querySelector("#modalEtiqueta")?.removeAttribute("data-show"),document.querySelector("#modalEtiqueta")?.remove(),document.querySelector(".user[active]")?.removeAttribute("active"))};