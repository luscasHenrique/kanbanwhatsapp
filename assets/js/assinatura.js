var ASSINATURA_GLOBAL,AUDIO_ISCLICK=!1,IS_FREE=!1;async function verificaFree(){chrome.storage.local.get("dataVerif",async e=>{var t,a=new Date,s=String(a.getDate()).padStart(2,"0"),i=`${String(a.getMonth()+1).padStart(2,"0")}/${s}/${a.getFullYear()}`;if(void 0==e.dataVerif)IS_FREE=!1,chrome.storage.local.set({dataVerif:i},()=>{init()});else{var l,n=new Date(e.dataVerif);if(Math.abs(new Date(i)-n)/864e5>=3){IS_FREE=!0;let r={nome:(await readLocalStorage("assinatura")).nome,is_select:!1};chrome.storage.local.set({assinatura:r})}else IS_FREE=!1}})}function placeholder(){document.querySelector("#placeholder")?.remove();let e=document.querySelector("._3Uu1_ > .g0rxnol2"),t=document.createElement("div");t.setAttribute("id","placeholder"),t.classList.add("lhggkp7q","qq0sjtgm","jxacihee","qzp46edm","b9fczbqn","bze30y65","jgi8eev7","t35qvd06","m62443ks","rkxvyd19","c5h0bzs2"),t.innerHTML=language.ass_Placeholder,e.appendChild(t)}function inputEvent(e,t){e.focus();let a=setInterval(()=>{let t=e.querySelector("p");t&&(t.classList.add("d-none"),t.classList.add("c-none"),clearInterval(a))},10);var s=new InputEvent("input",{data:`*_${t}:_*`,bubbles:!0,composed:!0,cancelable:!0,inputType:"insertText"});e.dispatchEvent(s);let i=setInterval(()=>{let t=e.querySelector("p");t&&(t.setAttribute("id","assinatura"),document.querySelector("#placeholder")?.remove(),placeholder(),clearInterval(i))},10)}function simulateKeydown(e,t,a,s,i){var l=new KeyboardEvent("keydown",{isTrusted:!0,_lexicalHandled:!0,code:"Enter",which:e,bubbles:!0,composed:!0,keyCode:e,which:e,cancelable:!0,char:String.fromCharCode(e),key:"Enter",shiftKey:t,ctrlKey:a,altKey:s});i.dispatchEvent(l);let n=setInterval(()=>{let e=i.querySelectorAll("p")[1];e&&(e.setAttribute("id","insertText"),clearInterval(n))},10)}chrome.storage.local.get("license",e=>{e.license?IS_FREE=!1:verificaFree()});const modalAssinar=async e=>{let t=await readLocalStorage("assinatura");null===t.nome&&(t.nome="");let a=setInterval(()=>{let t=document.querySelector("#swal2-title");if(t){t.setAttribute("aria-describedby","tooltip");let s=document.createElement("span");s.setAttribute("role","tooltip"),s.classList.add("popper"),s.innerHTML=`${language.modal_Ass_Desc}
               
            <div tabindex="-1" class="_1-FMR message-out focusable-list-item _7GVCb _2SnTA" data-id="true_553171644915@c.us_3EB0ED354318BC8435BA_out" data-testid="conv-msg-true_553171644915@c.us_3EB0ED354318BC8435BA_out" style="
            padding: 2rem 0 0 0.5rem;
            display: flex;
            align-items: flex-start;
             "><span></span>
   <div data-testid="msg-container" class="_1-lf9 _3mSPV _18q-J"><span data-testid="tail-out" data-icon="tail-out" class="_1kh65"><svg viewBox="0 0 8 13" height="13" width="8" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 8 13" xml:space="preserve">
         <path opacity="0.13" d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"></path>
         <path fill="currentColor" d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"></path>
       </svg></span>
     <div class="ItfyB _3nbHh"><span aria-label="Voc\xea:"></span>
       <div class="_27K43">
         <div class="copyable-text" data-pre-plain-text="[15:39, 2023-02-02] Talk Manager: ">
           <div class="_21Ahp"><span dir="ltr" aria-label="" class="_11JPr selectable-text copyable-text"><span><strong class="_11JPr selectable-text copyable-text"><em class="_11JPr selectable-text copyable-text">John:</em></strong>
 ${language.modal_Ass_Msg}</span></span><span class=""><span class="lak21jic i86elurf neme6l2y kojwoqec bbl9m3t3 i5tg98hk jfqm35v0 przvwfww bdbt56hn" aria-hidden="true"><span class="tvf2evcx oq44ahr5 qg8w82as"></span><span class="tvf2evcx oq44ahr5">15:39</span></span></span></div>
         </div>
         <div class="_2_-To">
           <div class="gq1t1y46 o38k74y6 e4p1bexh cr2cog7z le5p0ye3" data-testid="msg-meta" role="button"><span class="l7jjieqr fewfhwl7" dir="auto">15:39</span>
             <div class="do8e0lj9 l7jjieqr k6y3xtnu"><span data-testid="msg-dblcheck" aria-label=" Lida " data-icon="msg-dblcheck" class="S7n_s"><svg viewBox="0 0 16 11" height="11" width="16" preserveAspectRatio="xMidYMid meet" class="" fill="none">
                   <path d="M11.0714 0.652832C10.991 0.585124 10.8894 0.55127 10.7667 0.55127C10.6186 0.55127 10.4916 0.610514 10.3858 0.729004L4.19688 8.36523L1.79112 6.09277C1.7488 6.04622 1.69802 6.01025 1.63877 5.98486C1.57953 5.95947 1.51817 5.94678 1.45469 5.94678C1.32351 5.94678 1.20925 5.99544 1.11192 6.09277L0.800883 6.40381C0.707784 6.49268 0.661235 6.60482 0.661235 6.74023C0.661235 6.87565 0.707784 6.98991 0.800883 7.08301L3.79698 10.0791C3.94509 10.2145 4.11224 10.2822 4.29844 10.2822C4.40424 10.2822 4.5058 10.259 4.60313 10.2124C4.70046 10.1659 4.78086 10.1003 4.84434 10.0156L11.4903 1.59863C11.5623 1.5013 11.5982 1.40186 11.5982 1.30029C11.5982 1.14372 11.5348 1.01888 11.4078 0.925781L11.0714 0.652832ZM8.6212 8.32715C8.43077 8.20866 8.2488 8.09017 8.0753 7.97168C7.99489 7.89128 7.8891 7.85107 7.75791 7.85107C7.6098 7.85107 7.4892 7.90397 7.3961 8.00977L7.10411 8.33984C7.01947 8.43717 6.97715 8.54508 6.97715 8.66357C6.97715 8.79476 7.0237 8.90902 7.1168 9.00635L8.1959 10.0791C8.33132 10.2145 8.49636 10.2822 8.69102 10.2822C8.79681 10.2822 8.89838 10.259 8.99571 10.2124C9.09304 10.1659 9.17556 10.1003 9.24327 10.0156L15.8639 1.62402C15.9358 1.53939 15.9718 1.43994 15.9718 1.32568C15.9718 1.1818 15.9125 1.05697 15.794 0.951172L15.4386 0.678223C15.3582 0.610514 15.2587 0.57666 15.1402 0.57666C14.9964 0.57666 14.8715 0.635905 14.7657 0.754395L8.6212 8.32715Z" fill="currentColor"></path>
                 </svg></span></div>
           </div>
         </div>
       </div><span></span>
       <div class="_39T_J"></div>
     </div>
     <div class="p357zi0d ktfrpxia nu7pwgvd kcgo1i74 sap93d0t gndfcl4n _1m68F">
       <div class="tvf2evcx m0h2a7mj lb5m6g5c j7l1k36l ktfrpxia nu7pwgvd gjuq5ydh rqm6ogl5 i5tg98hk folpon7g przvwfww snweb893">
         <div></div>
       </div>
     </div>
   </div>
 </div>
            `,s.style.fontSize="1rem",document.querySelector('[aria-describedby="swal2-html-container"]').appendChild(s),GFN.initPopper(t,s,"right"),GFN.initPopper(document.querySelector(".swal2-icon"),s,"right"),!0===e&&s.classList.add("d-block"),clearInterval(a)}}),{value:s}=await Swal.fire({icon:"question",title:language.modal_Ass_Titulo,html:`<div><input value="${t.nome}" placeholder="${language.modal_Ass_Placeholder}" id="swal-input1" class="swal2-input" style="width: 85%;"></div><div class="divInputCheck"><p>${language.modal_Ass_Active}</p><label class="switch"><input type="checkbox" ${!0===t.is_select||!0===e?"checked":""} id="swal-input2" class="swal2-input"><span class="slider round" style="display: flex;"></span></label></div>
          <p class="assFree ${!0===IS_FREE?"":"d-none"}">${language.Teste_free_alert}</p>`,focusConfirm:!1,confirmButtonColor:"limegreen",confirmButtonText:language.save,preConfirm:()=>[document.getElementById("swal-input1").value,document.getElementById("swal-input2").checked]});if(!0===e&&editMensagemFinalizar(!0),s){if(0==s[0].length&&!0==s[1])Swal.fire(language.modal_Ass_error,"","error");else if(!1===IS_FREE){let i="",l={nome:i=0==s[0].length?t.nome:s[0],is_select:s[1]};chrome.storage.local.set({assinatura:l}),ASSINATURA_GLOBAL=l,!1===l.is_select?$("#imgAss").addClass("assImgOff"):$("#imgAss").removeClass("assImgOff"),n(l,t)}else setTimeout(()=>{let e=!1,t=language.Teste_free_alert;GFN.modalPremium(e,t)},100)}function n(e,t){let a=document.querySelector('[data-testid="conversation-compose-box-input"]'),s=a.querySelectorAll("p");s.length<=1&&!1===t.is_select&&!0===e.is_select?(inputEvent(a,e.nome),simulateKeydown(13,!0,!1,!1,a),$("#_sendTexto").addClass("d-none"),$("#_sendAudio").removeClass("d-none")):resetChat(a,s)}},assinatura=async()=>{if(GFN.assAtivo)return;GFN.assAtivo=!0;let e=await readLocalStorage("assinatura");if(ASSINATURA_GLOBAL=e,AUDIO_ISCLICK=!1,document.querySelector('[data-testid="compose-box"] > [data-testid="block-message"]')||(clickAudioReset(),""!==document.querySelector('[data-testid="compose-box"] > span').innerText)){GFN.assAtivo=!1;return}btnsEvent(),resetAssinaturaEvt();let t=document.querySelector("#_sendAudio"),a=document.querySelector("#_sendTexto"),s=document.querySelector('[data-testid="conversation-compose-box-input"]'),i=s?.querySelectorAll("p"),l=document.querySelector("._2xy_p._1bAtO"),n=document.createElement("div");n.classList.add("divAssinar");let r=document.createElement("img");r.classList.add("assinar"),!1===e.is_select||void 0===e.is_select?r.classList.add("assImgOff"):r.classList.remove("assImgOff"),GFN.initTitle(r,language.ass_Title,"top"),r.setAttribute("src",chrome.runtime.getURL("assets/images/svgs/assinatura.svg")),r.setAttribute("id","imgAss"),r.addEventListener("click",()=>{modalAssinar(!1)}),n.appendChild(r),l.appendChild(n),hashtagNome(),1===i.length&&!0===e.is_select?(inputEvent(s,e.nome),simulateKeydown(13,!0,!1,!1,s)):i.length>1&&resetChat(s,i),!0===e.is_select||1===$("#assinatura").length?(a.classList.add("d-none"),t.classList.remove("d-none")):(a.classList.remove("d-none"),t.classList.add("d-none")),i[1]&&i[1].innerText.length>1&&(a.classList.remove("d-none"),t.classList.add("d-none")),s.addEventListener("keydown",e=>{setTimeout(()=>{let i=s.querySelector("#assinatura"),l=s.querySelector("#insertText"),n=s.querySelectorAll("p");!1===AUDIO_ISCLICK&&"Enter"===e.key&&null===i&&!0===ASSINATURA_GLOBAL.is_select&&(inputEvent(s,ASSINATURA_GLOBAL.nome),simulateKeydown(13,!0,!1,!1,s),t.classList.remove("d-none"),a.classList.add("d-none")),(l&&"<br>"!==l.innerHTML||n[1]&&"<br>"!==n[1].innerHTML)&&(document.querySelector("#placeholder")?.remove(),t.classList.add("d-none"),a.classList.remove("d-none")),!0===ASSINATURA_GLOBAL.is_select&&(l&&"<br>"===l.innerHTML||n[1]&&"<br>"===n[1].innerHTML)&&(placeholder(),t.classList.remove("d-none"),a.classList.add("d-none")),!1===AUDIO_ISCLICK&&"Backspace"===e.key&&!0===ASSINATURA_GLOBAL.is_select&&1===n.length&&(null===l||null===n[1])&&simulateKeydown(13,!0,!1,!1,s)},100)}),GFN.initTitle(document.querySelector('[data-testid="smiley"]'),language.emoji_Title,"top-start");let c=document.querySelector('[data-testid="clip"]');c.title="",GFN.initTitle(c,language.anexar_Title,"top");let _=document.querySelector('[data-testid="search-alt"]');_.title="",GFN.initTitle(_,language.pesquisar_Title,"bottom");let d=document.querySelector("._28_W0 > ._3OtEr > ._3ndVb");d.title="",GFN.initTitle(d,language.maisOp_Title,"bottom"),GFN.initTitle(document.querySelector("#_sendTexto"),language.envAudiTxt_Title,"top"),GFN.initTitle(document.querySelector("#_sendAudio"),language.envAudiTxt_Title,"top"),GFN.assAtivo=!1},resetChat=(e,t)=>{AUDIO_ISCLICK=!0,t[0]?.classList.add("c-none"),t[0]?.classList.remove("d-none"),t[1]?.classList.add("c-none"),document.querySelector("#placeholder")?.remove(),e.focus();let a=setInterval(()=>{var s=new KeyboardEvent("keydown",{isTrusted:!0,_lexicalHandled:!0,code:"Backspace",which:8,bubbles:!0,composed:!0,keyCode:8,which:8,cancelable:!0,char:"\b",key:"Backspace",ctrlKey:!0}),i=new KeyboardEvent("keydown",{isTrusted:!0,_lexicalHandled:!0,code:"Delete",which:46,bubbles:!0,composed:!0,keyCode:46,which:46,cancelable:!0,char:".",key:"Delete",ctrlKey:!0});if(e.dispatchEvent(s),e.dispatchEvent(i),"\n"===e.innerText){if(clearInterval(a),!1===ASSINATURA_GLOBAL.is_select){t[0]?.classList.remove("c-none"),AUDIO_ISCLICK=!1;return}AUDIO_ISCLICK=!1,inputEvent(e,ASSINATURA_GLOBAL.nome),simulateKeydown(13,!0,!1,!1,e)}},10)},resetAssinaturaEvt=()=>{let e=document.querySelectorAll("#main > span")[1],t=new MutationObserver(e=>{e[0].removedNodes.length&&(msg_rapidas(),assinatura(),t.disconnect())});t.observe(e,{childList:!0})},initAudio=(e,t)=>{AUDIO_ISCLICK=!0,document.querySelector("#assinatura")?.classList.remove("d-none"),document.querySelector("#placeholder")?.remove();let a=document.querySelector('[data-testid="conversation-compose-box-input"]');a.focus();let s=setInterval(()=>{var i=new KeyboardEvent("keydown",{isTrusted:!0,_lexicalHandled:!0,code:"Backspace",which:8,bubbles:!0,composed:!0,keyCode:8,which:8,cancelable:!0,char:"\b",key:"Backspace",ctrlKey:!0}),l=new KeyboardEvent("keydown",{isTrusted:!0,_lexicalHandled:!0,code:"Delete",which:46,bubbles:!0,composed:!0,keyCode:46,which:46,cancelable:!0,char:".",key:"Delete",ctrlKey:!0});a.dispatchEvent(i),a.dispatchEvent(l);let n=document.querySelector('#_sendTexto  [data-testid="ptt-ready-btn"]');if(n){t.classList.add("d-none"),e.classList.remove("d-none");var r=new MouseEvent("mousedown",{bubbles:!0,cancelable:!0,composed:!0});n.dispatchEvent(r),clearInterval(s)}},10)},clickAudioReset=()=>{let e=document.querySelector('[data-testid="compose-box"] > span'),t=new MutationObserver(e=>{0!==e[0].removedNodes.length&&(assinatura(),t.disconnect())});t.observe(e,{childList:!0})},btnsEvent=()=>{let e=document.querySelector("._1VZX7"),t=document.querySelector("._2xy_p._3XKXx");t.setAttribute("id","_sendTexto");let a=document.createElement("div");a.setAttribute("id","_sendAudio"),a.classList.add("_2xy_p","_3XKXx");let s=document.createElement("button");s.classList.add("tvf2evcx","oq44ahr5","lb5m6g5c","svlsagor","p2rjqpw5","epia9gcq"),s.innerHTML='<span data-testid="ptt" data-icon="ptt" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg></span>',s.addEventListener("click",()=>{initAudio(t,a)}),a.appendChild(s),e.appendChild(a)},finalizarAtendimento=()=>{let e=async()=>{let e=await readLocalStorage("finalizar");if(!1===e.arquivar&&!1===e.envTxt){Swal.fire(language.finalizar_error,"","error");return}if(!0===IS_FREE){let t=!1,a=language.Teste_free_alert;GFN.modalPremium(t,a);return}window.postMessage({request:"finalizarAtendimento",dados:e},"*")},t=()=>{let e=setInterval(()=>{let t=document.querySelector('[data-testid="contact-menu-dropdown"]');if(t){document.querySelector("#_MsgFim")?.remove();let a=document.createElement("li");a.setAttribute("tabindex","0"),a.classList.add("jScby","Iaqxu","FCS6Q"),a.setAttribute("data-animate-dropdown-item","true"),a.setAttribute("data-testid","mi-select-messages"),a.style.opacity="1",a.setAttribute("id","_MsgFim"),a.addEventListener("click",()=>{editMensagemFinalizar(!1)}),a.innerHTML=`<div class="iWqod _1MZM5 _2BNs3" role="button" aria-label="mensagem de finaliza\xe7\xe3o">${language.edit_Msg_finalizacao}</div>`,t.prepend(a),clearInterval(e)}},200)};$('[data-testid="conversation-menu-button"] > div').on("click",()=>{t()}),$('[role="application"]').mousedown(function(e){2==e.button&&t()});let a=document.createElement("div");a.classList.add("_3vsRF");let s=document.createElement("div");s.classList.add("bntFinalizar");let i=document.createElement("span");i.innerHTML='<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path style="color: var(--waTidy-header-bg);" fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>',i.classList.add("opFinalizar"),i.addEventListener("click",editMensagemFinalizar),GFN.initTitle(i,language.edit_Msg_finalizacao,"bottom");let l=document.createElement("div"),n=document.createElement("button");n.innerHTML=language.finalizar,n.classList.add("_btnFinalizar"),n.addEventListener("click",e),GFN.initTitle(n,language.finalizar_Title,"bottom"),l.appendChild(n),s.appendChild(l),s.appendChild(i),a.appendChild(s);document.querySelectorAll("._1sPvB._2XdMx")[1].querySelector("._3vsRF").insertAdjacentElement("beforebegin",a)},editMensagemFinalizar=async e=>{let t=await readLocalStorage("finalizar");void 0===t.txt&&(t.txt="");let{value:a}=await Swal.fire({icon:"question",title:language.modal_finalizar_Titulo,showClass:{popup:"swalContent"},html:`
         <textarea id="_txtSwal" placeholder="${language.finalizar_Title}" class="txtSwal waTidy_modal_input"></textarea>
         
         <div class="slcMain">
         <div class="slcContent">
         <p>${language.modal_finalizar_active}</p>
         <label class="switch">
         <input  ${!0===t.envTxt||!0===e?"checked":""} type="checkbox" id="_checkFinaliza" class="swal2-input">
         <span class="slider round" style="display: flex;"></span>
         </label>
         </div>
          
         <div class="slcContent">
         <p>${language.modal_finalizar_Arquivar}</p>
         <label class="switch">
         <input ${!0===t.arquivar?"checked":""} type="checkbox" id="_checkArquiva" class="swal2-input">
         <span class="slider round" style="display: flex;"></span>
         </label>
         </div>

         <p class="assFree ${!0===IS_FREE?"":"d-none"}" style="text-align: center;">${language.Teste_free_alert}</p>
         </div>
         `,focusConfirm:!1,confirmButtonColor:"limegreen",confirmButtonText:language.save,preConfirm:()=>[$("#_txtSwal").val(),document.querySelector("#_checkFinaliza").checked,document.querySelector("#_checkArquiva").checked]});if(a){let s=a[0],i={txt:s=`*_#${language.finalizar_msg}_*
`+s,envTxt:a[1],arquivar:a[2]};chrome.storage.local.set({finalizar:i})}},initAtendente=setInterval(()=>{let e=document.querySelector('[aria-label="Lista de conversas"]');e&&(setTimeout(()=>{window.postMessage({request:"initAtendente"},"*")},5e3),atualizaAtendente(),clearInterval(initAtendente))}),atualizaAtendente=()=>{let e=()=>{let e=document.querySelector("#pane-side");new MutationObserver(e=>{e.forEach(e=>{0!==e.addedNodes.length&&0!==e.target.children.length&&3===e.target.children[0].attributes.length&&"data-tab"===e.target.children[0].attributes[2].nodeName&&(window.postMessage({request:"initAtendente"},"*"),a())})}).observe(e,{attributes:!0,childList:!0,subtree:!0})},t=e=>{let t=document.querySelector('[data-testid="chat-list-search"]'),a=document.querySelector('[data-testid="icon-search-morph"]');t.addEventListener("keydown",()=>{window.postMessage({request:"initAtendente"},"*")}),a.addEventListener("click",()=>{window.postMessage({request:"initAtendente"},"*")});let s=new MutationObserver(e=>{e[0].removedNodes.length&&window.postMessage({request:"initAtendente"},"*")});s.observe(e,{childList:!0})},a=()=>{let e=document.querySelector('[aria-label="Lista de conversas"]');var t=!1,a=!1;new MutationObserver(e=>{e.forEach(e=>{"Abrir o menu da conversa"!==e.target.ariaLabel&&"SPAN"!==e.target.nodeName&&"atendenteID"!==e.target.className&&"_3GlyB"!==e.target.className&&"_8hzr9 i0jNr"!==e.target.className&&(!1===t?(t=!0,window.postMessage({request:"initAtendente"},"*"),setTimeout(()=>{t=!1},1500),chrome.runtime.sendMessage({action:"updateInbox"})):!0===t&&(setTimeout(()=>{window.postMessage({request:"initAtendente"},"*"),t=!1},2500),t=void 0,chrome.runtime.sendMessage({action:"updateInbox"})))})}).observe(e,{attributes:!0,childList:!0,subtree:!0})},s=setInterval(()=>{let e=document.querySelector('[data-testid="chat-list-search-container"] > .tKJAr > span');e&&(t(e),clearInterval(s))},100);a(),e()},hashtagNome=()=>{if(document.querySelector('[data-testid="block-message"]'))return;let e=document.querySelector("._2xy_p._1bAtO"),t=document.createElement("div"),a=document.createElement("span");function s(){let e={isNumber:e=>!isNaN(e=e.replaceAll("+","").replaceAll(" ","").replaceAll("-","")),cleanText(t,s,i,l){if(0===t){e.insertName(s,a,i);return}i.focus();for(let n=0;n<t;n++){var r=new KeyboardEvent("keydown",{isTrusted:!0,_lexicalHandled:!0,code:"Backspace",which:8,bubbles:!0,composed:!0,keyCode:8,which:8,cancelable:!0,char:"\b",key:"Backspace",ctrlKey:!0});i.dispatchEvent(r)}e.insertName(s,a,i)},insertName(e,t,a){var s=new InputEvent("input",{inputType:"insertText",data:e+" "+t,bubbles:!0,cancelable:!0,composed:!0});a.dispatchEvent(s)}},t=document.querySelector('[data-testid="conversation-compose-box-input"]'),a=document.querySelector('[data-testid="conversation-info-header-chat-title"]').textContent,s=t.querySelectorAll("p"),i=s.length-1;s=s[s.length-1];let l=s.textContent;if(t.focus(),!0===e.isNumber(a)){GFN.notificacao("error",language.hashtagNome_error);return}e.cleanText(s.textContent.length,l,t,i)}a.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="25" height="25" x="0" y="0" viewBox="0 0 67.7 89" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
    <g>
        <path d="M50.5 31.4c6.2-9.2 3.8-21.8-5.4-28s-21.8-3.8-28 5.4c-4.6 6.8-4.6 15.7 0 22.5C6.5 37.4 0 48.6 0 60.8 0 71 4.6 77 14.2 79.1l5.3.9c3.4 5.5 9.3 8.9 15.8 9 1.4 0 2.5-1.1 2.5-2.5S36.7 84 35.3 84c-6.9 0-13.4-6.1-13.4-12.5.1-6.6 5.6-11.9 12.3-11.7 5.6.1 10.2 4.1 11.3 9.6 0 .2.7 3.8-1.2 5.7-.5.4-1 .6-1.6.7-.3-3-.4-6-.3-9 0-1.4-1-2.5-2.4-2.6-.8 0-1.5.3-2 .9-3.7-2.2-8.5-1-10.7 2.7s-1 8.5 2.7 10.7c2.5 1.5 5.7 1.5 8.2-.1.9 1.6 2.5 2.5 4.3 2.3.3 0 15.5-1.4 20.1-6 3.4-3.2 5.1-7.7 5.1-14 0-12.1-6.6-23.3-17.2-29.3zM34 74.7c-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9 2.9 1.3 2.9 2.9c0 1.6-1.3 2.9-2.9 2.9zm16-.1c2.6-6.8-2.9-20-16.1-20-9.3 0-16.9 7.6-16.9 16.9 0 1 .1 2 .3 3l-2.1-.4C7.9 72.6 4.9 68.7 4.9 60.8c0-11 6.2-21 16-25.8.9-.5 1.6-1.3 1.8-2.3s0-2.1-.7-2.9c-5.3-6.5-4.3-16.1 2.2-21.4 2.9-2.3 6.5-3.5 10.2-3.4 8.4.3 14.9 7.4 14.6 15.8-.1 3.2-1.3 6.3-3.3 8.9-1.2 1.6-1 3.9.6 5.1.2.1.4.3.6.4C56.7 40 62.8 50 62.7 60.8c0 8.7-3.7 12.5-12.7 13.8z" fill="var(--panel-header-icon)" data-original="#000000" class=""></path>
        <path d="M33.7 7.6c-5.2 0-9.8 3.2-11.7 8-.3.9.1 1.9 1 2.2.2.1.4.1.6.1.7 0 1.3-.4 1.6-1.1 1.4-3.5 4.7-5.8 8.5-5.8.5 0 .9 0 1.4.1.9.1 1.8-.5 1.9-1.4s-.5-1.8-1.4-1.9c0 0-1.2-.2-1.9-.2z" fill="var(--panel-header-icon)" data-original="#000000" class=""></path>
    </g>
    </svg>`,a.setAttribute("style","cursor:pointer;"),GFN.initTitle(a,language.hashtagNome_Title,"top"),t.appendChild(a),e.appendChild(t),a.addEventListener("click",s),document.querySelector('[data-testid="conversation-compose-box-input"]').addEventListener("keydown",function(e){e.ctrlKey&&"b"===e.key&&s()})};