const menuBar={async addAba(){if(await GFN.isFree()){GFN.modal_CRM_Free();return}let e=GFN.language.CRM_newAbaName,t=document.querySelectorAll(`[aba-id^="${e}"]`);t.length>0&&(e=`${e} ${t.length}`);let a=await GFN.getStorage("userTabs"),s={chats:[],tag:e,type:"user"};a.userTabs.unshift(s),chrome.storage.local.set({userTabs:a.userTabs}),document.querySelector(".content");let n=document.querySelector('div[data-id="inbox"]'),i=document.createElement("div");i.classList.add("aba-Content"),i.setAttribute("aba-id",s.tag.toLowerCase()),i.setAttribute("data-id",s.tag.toLowerCase()),n.insertAdjacentElement("afterend",i),injectPainel.header(i,!1,s.tag,s.chats.length);let r=document.createElement("div");r.classList.add("list-contatos"),r.setAttribute("list-users",s.tag.toLowerCase()),i.appendChild(r),controler.listControler(r,s.chats),Content("atualizarAbas"),GFN.notificacao("success",GFN.language.CRM_abaCriada),controler.sortableAbasUsers(r)},async menuAbas(){let[e,t,a]=GFN.modal(!0);t.setAttribute("style","margin: 4% auto;width: 500px;max-height: 535px;height: auto;");let s=document.createElement("h1");s.innerHTML=GFN.language.tab_settings_heading,t.appendChild(s);let n=document.createElement("div");n.setAttribute("tag","configTabs-menu"),t.appendChild(n);let i=await GFN.getStorage("userTabs");(i=i.userTabs).forEach(e=>{let t=document.createElement("div");t.setAttribute("tag","configTabs-content"),n.appendChild(t);let a=document.createElement("div");a.setAttribute("tag","configTabs-dados"),t.appendChild(a);let s=document.createElement("span");s.setAttribute("tag","configTabs-nome"),s.innerHTML=e.tag,a.appendChild(s);let i=document.createElement("span");i.setAttribute("tag","configTabs-tam"),i.innerHTML=e.chats.length,a.appendChild(i);let r=document.createElement("div");r.setAttribute("tag","configTabs-config"),t.appendChild(r);let l=document.createElement("span");l.setAttribute("tag","configTabs-ico"),$(l).one("click",()=>{menuBar.abasFunctions.edit(s,i,l)}),r.appendChild(l),GFN.svg(l,"../assets/images/svgs/tab_rename.svg");let o=document.createElement("span");o.setAttribute("tag","configTabs-ico"),o.addEventListener("click",()=>{menuBar.abasFunctions.delete(t,e.tag)}),r.appendChild(o),GFN.svg(o,"../assets/images/svgs/tab_delete.svg");let c=document.createElement("span");c.setAttribute("tag","configTabs-ico"),c.addEventListener("click",()=>{menuBar.abasFunctions.visibilidade(e.tag,c)}),r.appendChild(c),e.crm||void 0==e.crm?GFN.svg(c,"../assets/images/svgs/tab_visible.svg"):GFN.svg(c,"../assets/images/svgs/tab_invisible.svg")})},abasFunctions:{edit(e,t,a){let s=e.innerHTML;t.classList.add("d-none"),a.innerHTML="",GFN.svg(a,"../assets/images/svgs/save.svg"),e.setAttribute("contenteditable",!0),e.focus();let n=document.createRange();n.selectNodeContents(e),n.collapse(!1);let i=window.getSelection();function r(t){if("Enter"===t.key){t.preventDefault(),$(e).off("blur"),e.blur(),l(),e.removeEventListener("keydown",r);return}}i.removeAllRanges(),i.addRange(n),$(a).one("click",()=>{l()}),e.addEventListener("keydown",r),$(e).one("blur",()=>{l()});let l=async()=>{$(a).off("click"),e.removeEventListener("keydown",r),$(e).off("blur"),t.classList.remove("d-none"),e.setAttribute("contenteditable",!1),a.innerHTML="",GFN.svg(a,"../assets/images/svgs/tab_rename.svg"),$(a).one("click",()=>{menuBar.abasFunctions.edit(e,t,a)});let n=e.innerHTML.replace(/[^a-zA-Z0-9\s]/g,"");if(n==s)return;let i=await GFN.getStorage("userTabs");for(let l of i=i.userTabs)if(l.tag.toLowerCase().includes(n.toLowerCase())){GFN.notificacao("error",GFN.language.CRM_abaEditError),e.innerHTML=s;return}for(let o=0;o<i.length;o++)if(i[o].tag.toLowerCase()==s.toLowerCase()){i[o].tag=n;break}chrome.storage.local.set({userTabs:i}),controler.abaUpdate(s,n),GFN.notificacao("success",GFN.language.CRM_abaCriada),Content("atualizarAbas")}},delete(e,t){Swal.fire({title:GFN.language.CRM_abaRemove,showCancelButton:!0,cancelButtonColor:"red",confirmButtonColor:"limegreen",confirmButtonText:GFN.language.resetar_chave_true,cancelButtonText:GFN.language.resetar_chave_false}).then(async a=>{if(a.isConfirmed){let s=await GFN.getStorage("userTabs");updatedTabs=(s=s.userTabs).filter(e=>e.tag.toLowerCase()!=t.toLowerCase()),chrome.storage.local.set({userTabs:updatedTabs}),e?.remove(),controler.abaRemove(t),Content("atualizarAbas"),GFN.notificacao("success","Aba removida com sucesso!")}})},async visibilidade(e,t){let a=await GFN.getStorage("userTabs");a=a.userTabs;let s="";for(let n=0;n<a.length;n++)if((a[n-1]?.crm==void 0||a[n-1]?.crm==!0)&&(s=a[n-1]?.tag),a[n].tag.toLowerCase().includes(e.toLowerCase())){void 0==a[n].crm||!0==a[n].crm?(a[n].crm=!1,r()):(a[n].crm=!0,i(a[n],s));break}function i(a,s){t.innerHTML="",GFN.svg(t,"../assets/images/svgs/tab_visible.svg"),console.log(s);let n=document.querySelector(`div[aba-id="${e.toLowerCase()}"]`);if(n){n?.classList.remove("d-none");return}{let i=document.createElement("div");i.classList.add("aba-Content"),i.setAttribute("aba-id",a.tag.toLowerCase()),i.setAttribute("data-id",a.tag.toLowerCase()),s?document.querySelector(`div[data-id="${s.toLowerCase()}"]`)?.insertAdjacentElement("afterend",i):(document.querySelector('div[data-id="inbox"]').insertAdjacentElement("afterend",i),console.log("OK")),injectPainel.header(i,!1,a.tag,a.chats.length);let r=document.createElement("div");r.classList.add("list-contatos"),r.setAttribute("list-users",a.tag.toLowerCase()),i.appendChild(r),controler.listControler(r,a.chats),controler.sortableAbasUsers(r)}}function r(){t.innerHTML="",GFN.svg(t,"../assets/images/svgs/tab_invisible.svg"),document.querySelector(`div[aba-id="${e.toLowerCase()}"]`)?.classList.add("d-none")}chrome.storage.local.set({userTabs:a}),console.log(a)}},async confPeformace(){let[e,t,a]=GFN.modal(!0),s=document.createElement("h1");s.setAttribute("style","font-size:1.7rem;"),s.innerHTML=GFN.language.CRM_confPeformace,t.appendChild(s);let n=await GFN.getStorage("crm_peformace");n=n.crm_peformace;let i=document.createElement("div");i.setAttribute("tag","peformace-main"),t.appendChild(i);let r=document.createElement("div");r.setAttribute("tag","peformace-content"),i.appendChild(r);let l=document.createElement("p");l.innerHTML=GFN.language.CRM_limiteInbox,r.appendChild(l);let o=document.createElement("input");o.setAttribute("type","number"),o.setAttribute("min","1"),o.value=n.inbox,r.appendChild(o);let c=document.createElement("div");c.setAttribute("tag","peformace-content"),i.appendChild(c);let d=document.createElement("p");d.innerHTML=GFN.language.CRM_limiteAbas,c.appendChild(d);let g=document.createElement("input");g.setAttribute("type","number"),g.setAttribute("min","1"),g.value=n.abas,c.appendChild(g);let u=document.createElement("div");u.setAttribute("style","text-align: center;"),i.appendChild(u);let b=document.createElement("button");b.innerHTML=GFN.language.CRM_limiteSave,u.appendChild(b),b.addEventListener("click",()=>{let t={inbox:1>parseInt(o.value)?1:parseInt(o.value),abas:1>parseInt(g.value)?1:parseInt(g.value)};chrome.storage.local.set({crm_peformace:t}),e?.remove(),init()})},async lupa(e){let t=await GFN.getStorage("zoomCRM");if(t=t.zoomCRM,(t+=e)<30){GFN.notificacao("error",GFN.language.CRM_minZoom);return}if(t>180){GFN.notificacao("error",GFN.language.CRM_maxZoom);return}GFN.notificacao("success",`${GFN.language.CRM_updateZoom} ${t}%`),document.querySelector(".content").setAttribute("style",`zoom:${t}%;`),chrome.storage.local.set({zoomCRM:t})}};