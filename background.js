chrome.runtime.onInstalled.addListener(function(e){let a=[{label:"Afghanistan",code:"93"},{label:"Albania",code:"355"},{label:"Algeria",code:"213"},{label:"American Samoa",code:"1684"},{label:"Andorra",code:"376"},{label:"Angola",code:"244"},{label:"Anguilla",code:"1264"},{label:"Antarctica",code:"672"},{label:"Antigua and Barbuda",code:"1268"},{label:"Argentina",code:"54"},{label:"Armenia",code:"374"},{label:"Aruba",code:"297"},{label:"Australia",code:"61"},{label:"Austria",code:"43"},{label:"Azerbaijan",code:"994"},{label:"Bahamas",code:"1242"},{label:"Bahrain",code:"973"},{label:"Bangladesh",code:"880"},{label:"Barbados",code:"1246"},{label:"Belarus",code:"375"},{label:"Belgium",code:"32"},{label:"Belize",code:"501"},{label:"Benin",code:"229"},{label:"Bermuda",code:"1441"},{label:"Bhutan",code:"975"},{label:"Bolivia",code:"591"},{label:"Bosnia and Herzegovina",code:"387"},{label:"Botswana",code:"267"},{label:"Bouvet Island",code:"55"},{label:"Brazil",code:"55"},{label:"British Indian Ocean Territory",code:"246"},{label:"Brunei",code:"673"},{label:"Bulgaria",code:"359"},{label:"Burkina Faso",code:"226"},{label:"Burundi",code:"257"},{label:"Cambodia",code:"855"},{label:"Cameroon",code:"237"},{label:"Canada",code:"1"},{label:"Cape Verde",code:"238"},{label:"Cayman Islands",code:"1345"},{label:"Central African Republic",code:"236"},{label:"Chad",code:"235"},{label:"Chile",code:"56"},{label:"China",code:"86"},{label:"Christmas Island",code:"61"},{label:"Cocos (Keeling) Islands",code:"61"},{label:"Colombia",code:"57"},{label:"Comoros",code:"269"},{label:"Congo",code:"242"},{label:"Cook Islands",code:"682"},{label:"Costa Rica",code:"506"},{label:"Croatia",code:"385"},{label:"Cuba",code:"53"},{label:"Cyprus",code:"357"},{label:"Czech Republic",code:"420"},{label:"Denmark",code:"45"},{label:"Djibouti",code:"253"},{label:"Dominica",code:"1767"},{label:"Dominican Republic",code:"1849"},{label:"East Timor",code:"670"},{label:"Ecuador",code:"593"},{label:"Egypt",code:"20"},{label:"El Salvador",code:"503"},{label:"England",code:"44"},{label:"Equatorial Guinea",code:"240"},{label:"Eritrea",code:"291"},{label:"Estonia",code:"372"},{label:"Ethiopia",code:"251"},{label:"Falkland Islands",code:"500"},{label:"Faroe Islands",code:"298"},{label:"Fiji Islands",code:"679"},{label:"Finland",code:"358"},{label:"France",code:"33"},{label:"French Guiana",code:"594"},{label:"French Polynesia",code:"689"},{label:"French Southern territories",code:"262"},{label:"Gabon",code:"241"},{label:"Gambia",code:"220"},{label:"Georgia",code:"995"},{label:"Germany",code:"49"},{label:"Ghana",code:"233"},{label:"Gibraltar",code:"350"},{label:"Greece",code:"30"},{label:"Greenland",code:"299"},{label:"Grenada",code:"1473"},{label:"Guadeloupe",code:"590"},{label:"Guam",code:"1671"},{label:"Guatemala",code:"502"},{label:"Guinea",code:"224"},{label:"Guinea-Bissau",code:"245"},{label:"Guyana",code:"592"},{label:"Haiti",code:"509"},{label:"Heard Island and McDonald Islands",code:"672"},{label:"Holy See (Vatican City State)",code:"379"},{label:"Honduras",code:"504"},{label:"Hong Kong",code:"852"},{label:"Hungary",code:"36"},{label:"Iceland",code:"354"},{label:"India",code:"91"},{label:"Indonesia",code:"62"},{label:"Iran",code:"98"},{label:"Iraq",code:"964"},{label:"Ireland",code:"353"},{label:"Israel",code:"972"},{label:"Italy",code:"39"},{label:"Ivory Coast",code:"225"},{label:"Jamaica",code:"1876"},{label:"Japan",code:"81"},{label:"Jordan",code:"962"},{label:"Kazakhstan",code:"7"},{label:"Kenya",code:"254"},{label:"Kiribati",code:"686"},{label:"Kuwait",code:"965"},{label:"Kyrgyzstan",code:"996"},{label:"Laos",code:"856"},{label:"Latvia",code:"371"},{label:"Lebanon",code:"961"},{label:"Lesotho",code:"266"},{label:"Liberia",code:"231"},{label:"Libyan Arab Jamahiriya",code:"218"},{label:"Liechtenstein",code:"423"},{label:"Lithuania",code:"370"},{label:"Luxembourg",code:"352"},{label:"Macao",code:"853"},{label:"North Macedonia",code:"389"},{label:"Madagascar",code:"261"},{label:"Malawi",code:"265"},{label:"Malaysia",code:"60"},{label:"Maldives",code:"960"},{label:"Mali",code:"223"},{label:"Malta",code:"356"},{label:"Marshall Islands",code:"692"},{label:"Martinique",code:"596"},{label:"Mauritania",code:"222"},{label:"Mauritius",code:"230"},{label:"Mayotte",code:"262"},{label:"Mexico",code:"52"},{label:"Micronesia, Federated States of",code:"691"},{label:"Moldova",code:"373"},{label:"Monaco",code:"377"},{label:"Mongolia",code:"976"},{label:"Montserrat",code:"1664"},{label:"Morocco",code:"212"},{label:"Mozambique",code:"258"},{label:"Myanmar",code:"95"},{label:"Namibia",code:"264"},{label:"Nauru",code:"674"},{label:"Nepal",code:"977"},{label:"Netherlands",code:"31"},{label:"Netherlands Antilles",code:"599"},{label:"New Caledonia",code:"687"},{label:"New Zealand",code:"64"},{label:"Nicaragua",code:"505"},{label:"Niger",code:"227"},{label:"Nigeria",code:"234"},{label:"Niue",code:"683"},{label:"Norfolk Island",code:"672"},{label:"North Korea",code:"850"},{label:"Northern Ireland",code:"44"},{label:"Northern Mariana Islands",code:"1670"},{label:"Norway",code:"47"},{label:"Oman",code:"968"},{label:"Pakistan",code:"92"},{label:"Palau",code:"680"},{label:"Palestine",code:"970"},{label:"Panama",code:"507"},{label:"Papua New Guinea",code:"675"},{label:"Paraguay",code:"595"},{label:"Peru",code:"51"},{label:"Philippines",code:"63"},{label:"Pitcairn",code:"64"},{label:"Poland",code:"48"},{label:"Portugal",code:"351"},{label:"Puerto Rico",code:"1939"},{label:"Qatar",code:"974"},{label:"Reunion",code:"262"},{label:"Romania",code:"40"},{label:"Russian Federation",code:"7"},{label:"Rwanda",code:"250"},{label:"Saint Helena",code:"290"},{label:"Saint Kitts and Nevis",code:"1869"},{label:"Saint Lucia",code:"1758"},{label:"Saint Pierre and Miquelon",code:"508"},{label:"Saint Vincent and the Grenadines",code:"1784"},{label:"Samoa",code:"685"},{label:"San Marino",code:"378"},{label:"Sao Tome and Principe",code:"239"},{label:"Saudi Arabia",code:"966"},{label:"Scotland",code:"44"},{label:"Senegal",code:"221"},{label:"Serbia",code:"381"},{label:"Seychelles",code:"248"},{label:"Sierra Leone",code:"232"},{label:"Singapore",code:"65"},{label:"Slovakia",code:"421"},{label:"Slovenia",code:"386"},{label:"Solomon Islands",code:"677"},{label:"Somalia",code:"252"},{label:"South Africa",code:"27"},{label:"South Georgia and the South Sandwich Islands",code:"500"},{label:"South Korea",code:"82"},{label:"South Sudan",code:"211"},{label:"Spain",code:"34"},{label:"Sri Lanka",code:""},{label:"Sudan",code:"249"},{label:"Suriname",code:"597"},{label:"Svalbard and Jan Mayen",code:"47"},{label:"Swaziland",code:"268"},{label:"Sweden",code:"46"},{label:"Switzerland",code:"41"},{label:"Syria",code:"963"},{label:"Taiwan",code:"886"},{label:"Tajikistan",code:"992"},{label:"Tanzania",code:"255"},{label:"Thailand",code:"66"},{label:"The Democratic Republic of Congo",code:"243"},{label:"Togo",code:"228"},{label:"Tokelau",code:"690"},{label:"Tonga",code:"676"},{label:"Trinidad and Tobago",code:"1868"},{label:"Tunisia",code:"216"},{label:"Turkey",code:"90"},{label:"Turkmenistan",code:"993"},{label:"Turks and Caicos Islands",code:"1649"},{label:"Tuvalu",code:"688"},{label:"Uganda",code:"256"},{label:"Ukraine",code:"380"},{label:"United Arab Emirates",code:"971"},{label:"United Kingdom",code:"44"},{label:"United States",code:"1"},{label:"United States Minor Outlying Islands",code:"1"},{label:"Uruguay",code:"598"},{label:"Uzbekistan",code:"998"},{label:"Vanuatu",code:"678"},{label:"Venezuela",code:"58"},{label:"Vietnam",code:"84"},{label:"Virgin Islands, British",code:"1"},{label:"Virgin Islands, U.S.",code:"1"},{label:"Wales",code:"44"},{label:"Wallis and Futuna",code:"681"},{label:"Western Sahara",code:"212"},{label:"Yemen",code:"967"},{label:"Zambia",code:"260"},{label:"Zimbabwe",code:"263"},],l=[{tag:"tab_all",img:"all",type:"system"},{tag:"tab_unread",img:"unread",type:"system"},{tag:"tab_groups",img:"groups",type:"system"},{tag:"tab_1_1",img:"1_1",type:"system"}],o=[{id:"edit_tabs",icon:"all",title:"Configura\xe7\xf5es de abas"},{id:"notifications",icon:"notifications",title:"Notifica\xe7\xf5es"},{id:"campaign",icon:"campaign",title:"Envios em Massa"},{id:"settings",icon:"cog",title:"Configura\xe7\xf5es"},];chrome.storage.local.get(null,e=>{e.license&&removeLicense(),chrome.storage.local.set({userTabs:e.userTabs||[],notifications:e.notifications||[],notes:e.notes||[],events:e.events||[],ccList:a,menuItems:o,systemTabs:l,lang:e.lang||"pt",license:e.license||null,privacySettings:{allMsgs:e.privacySettings?.allMsgs||!1,lastMsg:e.privacySettings?.lastMsg||!1,mediaGallery:e.privacySettings?.mediaGallery||!1,mediaPreview:e.privacySettings?.mediaPreview||!1,names:e.privacySettings?.names||!1,profilePic:e.privacySettings?.profilePic||!1},crm_peformace:{inbox:e.crm_peformace?.inbox||15,abas:e.crm_peformace?.abas||15},zoomCRM:e.zoomCRM||100,perfil:e.perfil||[],valNegocio:e.valNegocio||[]})}),chrome.alarms.get("validationAlarm",e=>{e||chrome.alarms.create("validationAlarm",{periodInMinutes:6})})}),chrome.runtime.onMessage.addListener((e,a,l)=>("getLanguageURI"===e.message&&chrome.storage.local.get("lang",e=>{l(chrome.runtime.getURL(`assets/js/lang/${e.lang}.json`))}),"openLink"==e.message&&chrome.tabs.create({url:e.link}),"modoCRM"==e.message&&chrome.tabs.query({url:chrome.runtime.getURL("CRM/index.html")},function(e){e.length>0?chrome.tabs.update(e[0].id,{active:!0}):chrome.tabs.create({url:chrome.runtime.getURL("CRM/index.html")})}),"setUninstallURL"==e.message&&removeLicense(),!0)),chrome.runtime.onMessageExternal.addListener((e,a,l)=>{"chatsReady"==e.message&&chrome.tabs.query({active:!0,currentWindow:!0},function(a){chrome.tabs.sendMessage(a[0].id,{message:"chatsReady",data:e.data})})}),chrome.action.onClicked.addListener(()=>{chrome.tabs.create({url:"https://web.whatsapp.com"})}),chrome.storage.onChanged.addListener((e,a)=>{"privacySettings"in e&&chrome.tabs.query({url:"https://web.whatsapp.com/"},e=>{if(e.length){var a=e[0].id;chrome.scripting.executeScript({target:{tabId:a},files:["assets/js/privacy.js"]})}})});let validateLicense=()=>{chrome.storage.local.get("license",e=>{e.license&&fetch(`https://adm.wascript.com.br/licenses/status?key=${e.license}`).then(e=>e.json()).then(e=>{console.log(e),e.active||(chrome.storage.local.set({license:null}),chrome.tabs.query({url:"https://web.whatsapp.com/*"},function(e){chrome.tabs.sendMessage(e[0].id,{type:"removeKey"})}))})})};async function removeLicense(){chrome.storage.local.get("license",e=>{chrome.runtime.setUninstallURL(`https://watidy.com.br/script/inactiveKey.php/?token=${e.license}&url=1&label=3`)})}validateLicense(),chrome.alarms.onAlarm.addListener(()=>{validateLicense(),chrome.runtime.sendMessage({action:"CrmUsersUpdate"})}),removeLicense();