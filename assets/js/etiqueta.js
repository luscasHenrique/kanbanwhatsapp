var CHANGER_TABS=!1;const etiqueta=async()=>{let e=document.querySelector('div[tag="etiqueta"]'),t="";if(e)e.innerHTML="",t=e;else{let a=document.querySelector("div._1VwoK >  div._1sPvB._2XdMx");(t=document.createElement("div")).setAttribute("tag","etiqueta"),a.prepend(t)}let i=await GFN.Wpp_Request("labels"),l=await GFN.Wpp_Request("getActiveChat"),s=l.labels.map(e=>i.find(t=>t.hexColor&&t.id===e)).filter(Boolean).map(({id:e,name:t,hexColor:a})=>({id:e,name:t,color:a})),n=document.createElement("div");if(n.classList.add("etiquetaIco"),n.addEventListener("click",e=>{$(e,i,l)}),GFN.initTitle(n,language.Etiquetas,"bottom"),t.prepend(n),s.length>0){let r=0;s.forEach(e=>{if(r>=11)return;let t=document.createElement("span");t.innerHTML=`<svg width="24px" height="18px" viewBox="0 0 18 12" class="_2FjqD">
          <path fill="${e.color}" d="M11.208,0.925H2.236C1.556,0.925,1,1.565,1,2.357V9.57C1,10.362,1.556,11,2.236,11h8.972 c0.414,0,0.785-0.237,1.007-0.604l2.701-4.433L12.215,1.53C11.993,1.162,11.622,0.925,11.208,0.925z"></path>
          </svg>`,n.appendChild(t),r++})}else n.innerHTML=`<span class="etiqueta" data-testid="label" data-icon="label" class=""><svg viewBox="0 0 24 24" width="24px" height="18px" class="">
        <path id="etiquetaPath" fill="currentColor" d="M5.81 6.899a.917.917 0 0 0-.919.911v8.379c0 .501.413.911.92.911l9.583.008c.302 0 .58-.146.749-.385L19.494 12l-3.352-4.725a.915.915 0 0 0-.748-.384l-9.584.008zM15.393 5c.921 0 1.774.447 2.292 1.182L21.812 12l-.466.657-3.66 5.159A2.804 2.804 0 0 1 15.393 19l-9.583-.008A2.808 2.808 0 0 1 3 16.19V7.81a2.807 2.807 0 0 1 2.809-2.802L15.393 5z"></path>
        </svg></span>`;let $=async(e,t,a)=>{document.querySelector("#modalEtiqueta")?.remove(),e.stopPropagation();let i=document.createElement("span");i.setAttribute("role","tooltip"),i.setAttribute("data-show",""),i.setAttribute("id","modalEtiqueta"),i.classList.add("popper"),i.style.backgroundColor="var(--panel-header-background)";let l=document.createElement("div");async function s(e){await GFN.Wpp_Request("addOrRemoveLabels",{label:{labelId:e.value,type:e.checked?"add":"remove"},id:a.serialized}),await GFN.aguarde(2200),etiqueta();let t=await GFN.Wpp_Request("getActiveChat");GFN.tabsAtualize.etiquetas(t.id,t.labels),chrome.runtime.sendMessage({action:"etiquetaUpdate",activeID:t.id,labels:t.labels})}l.classList.add("etiquetaContent"),l.setAttribute("id","alc"),i.appendChild(l),document.querySelector(".waTidy_tooltips").appendChild(i),Popper.createPopper(document.querySelector(".etiquetaIco"),i,{placement:"bottom",modifiers:[{name:"offset",options:{offset:[0,5]}},]}),t.forEach(e=>{if(!e.hexColor)return;let t=document.createElement("input");t.setAttribute("type","checkbox"),t.setAttribute("value",e.id),t.setAttribute("id",`label-${e.id}`),a.labels.includes(e.id)&&t.setAttribute("checked","checked");let i=document.createElement("label");i.setAttribute("for",`label-${e.id}`);let n=document.createElement("span");n.innerHTML=`<svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="25"
                                zoomAndPan="magnify"
                                viewBox="0 0 36 36.000001"
                                preserveAspectRatio="xMidYMid meet"
                                version="1.0"
                            >
                                <defs>
                                    <clipPath id="813b2589cb">
                                        <path d="M 1.445312 5.324219 L 34.28125 5.324219 L 34.28125 29.402344 L 1.445312 29.402344 Z M 1.445312 5.324219 " clip-rule="nonzero" />
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#813b2589cb)">
                                    <path
                                        fill="${e.hexColor}"
                                        d="M 26.730469 6.777344 C 26.101562 5.898438 25.074219 5.324219 23.90625 5.324219 L 4.910156 5.339844 C 3.003906 5.339844 1.457031 6.863281 1.457031 8.761719 L 1.457031 25.964844 C 1.457031 27.863281 3.003906 29.386719 4.910156 29.386719 L 23.90625 29.402344 C 25.074219 29.402344 26.101562 28.828125 26.730469 27.949219 L 34.269531 17.363281 Z M 26.730469 6.777344 "
                                        fill-opacity="1"
                                        fill-rule="nonzero"
                                    />
                                </g>
                            </svg> ${e.name}`,i.appendChild(t),i.appendChild(n),l.appendChild(i),t.addEventListener("change",()=>{s(t)})})}},abas=()=>{let e=document.querySelector("div._1VwoK >  div._1sPvB._2XdMx"),t=document.createElement("div");async function a(e){let t=await readLocalStorage("userTabs"),a=await GFN.Wpp_Request("getActiveChat");if(0===t.length){Swal.fire({icon:"error",title:"Oops...",text:language.abas_empy_error,confirmButtonColor:"limegreen"});return}document.querySelector("#_modalAbas")?.remove(),e.stopPropagation();let i=document.createElement("span");i.setAttribute("role","tooltip"),i.setAttribute("data-show",""),i.setAttribute("id","_modalAbas"),i.classList.add("popper"),i.style.backgroundColor="var(--panel-header-background)";let l=document.createElement("div");l.classList.add("modalAbasContent"),i.appendChild(l),document.querySelector(".waTidy_tooltips").appendChild(i),t.forEach(e=>{let i=document.createElement("label");i.classList.add("abasUser");let s=document.createElement("p");s.classList.add("menu_text"),s.innerHTML=e.tag,i.appendChild(s);let n=document.createElement("span");n.innerHTML=`(${e.chats.length})`,s.appendChild(n);let r=document.createElement("input");r.classList.add("modalTabInput"),r.value=e.tag,r.setAttribute("type","checkbox"),i.appendChild(r),l.appendChild(i),0!==e.chats.length&&e.chats.find(e=>{e.id==a.id&&(r.checked="true")}),r.addEventListener("change",()=>{t.forEach(async e=>{if(e.tag===r.value){if(!0===r.checked){let i={num:a.serialized},l={id:a.id,picture:await GFN.Wpp_Request("getPicture",i),name:document.querySelector('[data-testid="conversation-info-header-chat-title"]').innerText,dataEntrada:await GFN.tabsAtualize.userTabsDataEntrada(t,a),etiqueta:a.labels};console.log(l),e.chats.unshift(l),chrome.runtime.sendMessage({action:"insertUserAba",aba:e.tag,activeID:a.id,user:l})}else e.chats=e.chats.filter(e=>e.id!=a.id),chrome.runtime.sendMessage({action:"removeUserAba",aba:e.tag,activeID:a.id});chrome.storage.local.set({userTabs:t}),GFN.tabsAtualize.updateUser(t)}CHANGER_TABS=!0})})}),Popper.createPopper(document.querySelector(".abasContent"),i,{placement:"bottom",modifiers:[{name:"offset",options:{offset:[0,5]}},]})}t.classList.add("abasContent"),t.innerHTML=innerHTML=`<svg  data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 1080">
    <defs>
        <style>
            .cls-2 {
                stroke-width: 7px;
                fill: url(#linear-gradient);
            }
        </style>
        <linearGradient id="linear-gradient" x1="602.05" y1="457.02" x2="602.05" y2="700.1" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff" />
            <stop offset="0.4" stop-color="#fafafa" />
            <stop offset="0.86" stop-color="#ececec" />
            <stop offset="1" stop-color="#e6e6e6" />
        </linearGradient>
    </defs>
    <path d="M480.57,280.39V236.48a44.39,44.39,0,0,0-44.39-44.38H218.38A44.39,44.39,0,0,0,174,236.48V807.62A44.39,44.39,0,0,0,218.38,852H969.57A44.38,44.38,0,0,0,1014,807.62V369.16a44.39,44.39,0,0,0-44.38-44.39H525A44.38,44.38,0,0,1,480.57,280.39Z" />
    <path d="M438.19,280.39V236.48a44.38,44.38,0,0,0-44.38-44.38H176a44.38,44.38,0,0,0-44.39,44.38V807.62A44.38,44.38,0,0,0,176,852H927.2a44.38,44.38,0,0,0,44.38-44.38V369.16a44.39,44.39,0,0,0-44.38-44.39H482.58A44.39,44.39,0,0,1,438.19,280.39Z" />
    <polygon class="cls-2" points="706.88 507.91 615.26 439.62 615.26 498.68 405.6 498.68 405.6 653.72 615.26 653.72 615.26 712.77 706.88 644.48 798.5 576.2 706.88 507.91" />
    </svg>`,t.addEventListener("click",e=>{a(e)}),GFN.initTitle(t,language.Abas,"bottom"),e.prepend(t)};