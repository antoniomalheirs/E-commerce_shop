(()=>{var e={692:e=>{e.exports=class e{constructor(){if(this.constructor===e)throw new Error("Cannot instantiate absctract class'")}parse(e){}add(e){}findOne(e){}findAll(){}get(e){}remove(e){}}},349:e=>{e.exports=class e{constructor(t={}){if(this.constructor===e)throw new Error("Cannot instantiate absctract class'");this.options=t}connect(){}}},874:(e,t,a)=>{e.exports={Wrapper:a(349),MongoDB:a(280)}},46:(e,t,a)=>{const l=a(692);e.exports=class extends l{constructor(e,t){if(super(),!e||!t)throw new Error("O modelo de usuário não pode ser nulo.");this.mongoose=e,this.model="string"==typeof t?e.model(t):t}parse(e){return e?{codigouser:e.codigouser?String(e.codigouser):null,username:e.username,voiceTime:e.voiceTime||0,totalMessages:e.totalMessages||0,idguild:e.idguild||"nada encontrado"}:null}add(e){return this.model.create(e).then(this.parse)}findOne(e,t){return this.model.findOne({codigouser:e},t).then(this.parse)}findByUsername(e,t){return this.model.findOne({username:e},t).then(this.parse)}findByGuildId(e,t){return this.model.findOne({idguild:e},t).then((e=>!!e&&this.parse(e)))}get size(){return this.model.find({}).then((e=>e.length))}get(e,t){return this.model.findOne({codigouser:e},t).then((t=>t?this.parse(t):this.add({codigouser:e})))}getByUserIdAndGuildId(e,t,a){return this.model.findOne({codigouser:e,idguild:t},a).then((a=>a?this.parse(a):this.add({codigouser:e,idguild:t})))}getAllUniqueYoutubeAttributes(){return this.model.distinct("codigouser").exec()}remove(e){return this.model.findOneAndDelete({codigouser:e}).then(this.parse)}update(e,t,a={upsert:!0}){return this.model.updateOne({codigouser:e},t,a)}updateByUserIdAndGuildId(e,t,a,l={upsert:!0}){return this.model.updateOne({codigouser:e,idguild:t},a,l)}async verify(e){return!!await this.model.findOne({codigouser:e})}findAll(e){return this.model.find({},e).then((e=>e.map(this.parse)))}findAllByGuildId(e,t){return this.model.find({idguild:e},t).then((e=>e.map(this.parse)))}}},280:(e,t,a)=>{const l=a(349),s=a(37),{UserRepository:r}=a(79);e.exports=class extends l{constructor(e={}){super(e),this.mongoose=s}async connect(){return s.connect(process.env.DATABASE_CONNECT,{useNewUrlParser:!0,useUnifiedTopology:!0}).then((e=>{this.users=new r(e)}))}}},88:(e,t,a)=>{const l=a(46),s=a(821);e.exports=class extends l{constructor(e){super(e,e.model("Users",s))}parse(e){return{codigouser:null,username:null,voiceTime:null,totalMessages:null,idguild:null,...super.parse(e)||{}}}}},79:(e,t,a)=>{e.exports={UserRepository:a(88)}},821:(e,t,a)=>{const{Schema:l}=a(37);e.exports=new l({codigouser:{type:String},username:{type:String},voiceTime:{type:Number,default:0},totalMessages:{type:Number,default:0},idguild:{type:String}})},267:(e,t,a)=>{const{MongoDB:l}=a(874);e.exports=class{constructor(){this.database=!1}async call(){await this.LoaderDatabase(),console.log("[1m[95m[BANCO DE DADOS][0m","Bancos de Dados Operando.")}async LoaderDatabase(e=l,t={}){try{this.database=new e(t),await this.database.connect()}catch(e){console.error("[1m[33m[BANCO DE DADOS][0m",`Erro ao conectar o Banco de Dados.\n${e}`),process.exit(1)}}}},255:(e,t,a)=>{const l=a(252).Router(),s=a(15),r=a(468),{default:n}=a(952);l.use(((e,t,a)=>{console.log("Time: ",Date.now()),a()})),l.get("/about",((e,t)=>{t.send("About meu pau no seu bumbum")})),l.get("/testando",((e,t)=>{const a=`<!DOCTYPE html>\n  <html lang="en">\n  <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\n      <title>Hot Dog Adams</title>\n      <style>\n          body{\n              background-color: #ccc;\n              font-family: 'Poppins', sans-serif;\n              font-weight: 1000;\n          }\n          \n          span, .primary-color{\n              background-image: linear-gradient(to right,#fce729, #f1cd2c);\n              -webkit-background-clip: text;\n              color: transparent;\n          }\n          </style>\n  </head>\n  <body>\n      ${r.renderToString(s.createElement(n,null))}\n  </body>\n  </html>`;t.send(a)})),e.exports=l},952:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var l=a(15),s=a.n(l);const r=()=>s().createElement("div",{className:"py-4"},s().createElement("h1",{className:"text-center text-3xl font-bold black ml-4"},"Login de Administrador"),s().createElement("h1",null," ola mundo "),s().createElement("a",{className:"bg-green-100",href:"/auth/about"},"Ir para About"))},818:e=>{"use strict";e.exports=require("dotenv")},252:e=>{"use strict";e.exports=require("express")},37:e=>{"use strict";e.exports=require("mongoose")},15:e=>{"use strict";e.exports=require("react")},468:e=>{"use strict";e.exports=require("react-dom/server")}},t={};function a(l){var s=t[l];if(void 0!==s)return s.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=a(252),t=a.n(e),l=a(15),s=a.n(l),r=a(468),n=a.n(r);const o=require("passport");var c=a.n(o);const m=require("passport-local"),i=require("express-session");var d=a.n(i),u=a(255),p=a.n(u);const g=()=>s().createElement("div",{className:"py-6 max-w-[1200px] mx-auto",id:"cardapio"},s().createElement("div",{className:"mx-auto px-4 md:px-8"},s().createElement("div",{className:"mb-4 flex flex-col items-center justify-between gap-8"},s().createElement("h2",{className:"text-2xl lg:text-3xl text-zinc-600"}," Cardápio"),s().createElement("div",{className:"flex flex-row gap-4"},s().createElement("h2",{className:"text-2xl lg:text-3xl text-yellow-400 hover:text-yellow-600"}," Todos"),s().createElement("h2",{className:"text-2xl lg:text-3xl text-yellow-400 hover:text-yellow-600"}," Lanches"),s().createElement("h2",{className:"text-2xl lg:text-3xl text-yellow-400 hover:text-yellow-600"}," Bedidas"))),s().createElement("div",{className:"mb-8"},s().createElement("br",null),s().createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},s().createElement("div",{className:"bg-gray-800 p-4 rounded-lg"},s().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Hamburguer Simples"),s().createElement("p",{className:"text-gray-400"},"Pão, carne, queijo, alface, tomate, cebola e maionese."),s().createElement("p",{className:"text-gray-400"},"R$ 10,00")),s().createElement("div",{className:"bg-gray-800 p-4 rounded-lg"},s().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Pizza de Pepperoni"),s().createElement("p",{className:"text-gray-400"},"Massa de pizza, molho de tomate, queijo, pepperoni e orégano."),s().createElement("p",{className:"text-gray-400"},"R$ 20,00")),s().createElement("div",{className:"bg-gray-800 p-4 rounded-lg"},s().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Salada Caesar"),s().createElement("p",{className:"text-gray-400"},"Alface romana, croutons, queijo parmesão, molho Caesar e frango grelhado."),s().createElement("p",{className:"text-gray-400"},"R$ 15,00")))),s().createElement("div",{className:"mb-8"},s().createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},s().createElement("div",{className:"bg-gray-800 p-4 rounded-lg"},s().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Hamburguer Simples"),s().createElement("p",{className:"text-gray-400"},"Pão, carne, queijo, alface, tomate, cebola e maionese."),s().createElement("p",{className:"text-gray-400"},"R$ 10,00")),s().createElement("div",{className:"bg-gray-800 p-4 rounded-lg"},s().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Pizza de Pepperoni"),s().createElement("p",{className:"text-gray-400"},"Massa de pizza, molho de tomate, queijo, pepperoni e orégano."),s().createElement("p",{className:"text-gray-400"},"R$ 20,00")),s().createElement("div",{className:"bg-gray-800 p-4 rounded-lg"},s().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Salada Caesar"),s().createElement("p",{className:"text-gray-400"},"Alface romana, croutons, queijo parmesão, molho Caesar e frango grelhado."),s().createElement("p",{className:"text-gray-400"},"R$ 15,00")))),s().createElement("div",{className:"mb-8"},s().createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},s().createElement("div",{className:"bg-gray-800 p-4 rounded-lg"},s().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Hamburguer Simples"),s().createElement("p",{className:"text-gray-400"},"Pão, carne, queijo, alface, tomate, cebola e maionese."),s().createElement("p",{className:"text-gray-400"},"R$ 10,00")),s().createElement("div",{className:"bg-gray-800 p-4 rounded-lg"},s().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Pizza de Pepperoni"),s().createElement("p",{className:"text-gray-400"},"Massa de pizza, molho de tomate, queijo, pepperoni e orégano."),s().createElement("p",{className:"text-gray-400"},"R$ 20,00")),s().createElement("div",{className:"bg-gray-800 p-4 rounded-lg"},s().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Salada Caesar"),s().createElement("p",{className:"text-gray-400"},"Alface romana, croutons, queijo parmesão, molho Caesar e frango grelhado."),s().createElement("p",{className:"text-gray-400"},"R$ 15,00")))),s().createElement("div",{className:"mb-8"},s().createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},s().createElement("div",{className:"bg-gray-800 p-4 rounded-lg"},s().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Hamburguer Simples"),s().createElement("p",{className:"text-gray-400"},"Pão, carne, queijo, alface, tomate, cebola e maionese."),s().createElement("p",{className:"text-gray-400"},"R$ 10,00")),s().createElement("div",{className:"bg-gray-800 p-4 rounded-lg"},s().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Pizza de Pepperoni"),s().createElement("p",{className:"text-gray-400"},"Massa de pizza, molho de tomate, queijo, pepperoni e orégano."),s().createElement("p",{className:"text-gray-400"},"R$ 20,00")),s().createElement("div",{className:"bg-gray-800 p-4 rounded-lg"},s().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Salada Caesar"),s().createElement("p",{className:"text-gray-400"},"Alface romana, croutons, queijo parmesão, molho Caesar e frango grelhado."),s().createElement("p",{className:"text-gray-400"},"R$ 15,00")))))),x=(require("react-type-animation"),()=>s().createElement("div",null,s().createElement("div",{className:" my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row\r justify-center align-center",id:"destaques"},s().createElement("div",{className:" flex-col my-auto mx-auto"},s().createElement("p",{className:"md:text-5xl sm:text-xl font-bold text-red-300"},"Happy HotDog"),s().createElement("h1",{className:"md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"}),s().createElement("div",{className:"flex justify-center items-center"},s().createElement("p",{className:"md:text-5xl sm:text-4xl text-xl font-bold text-gray-500"},"Felicidade em cada mordida. "))),s().createElement("div",{className:"my-auto"},s().createElement("img",{className:" rounded-xl w-[300px] sm:w-[500px] mx-auto h-auto ",src:"",alt:""}))))),h=()=>{const[e,t]=(0,l.useState)(!1);return s().createElement("div",{className:"bg-black"},s().createElement("div",{className:" text-red-500 flex justify-between items-center max-w=[1240px] mx-auto h-20 px-4 text-l"},s().createElement("h1",{className:"text-3xl font-bold primary-color ml-4"},"Cardapio Online"),s().createElement("ul",{className:"hidden md:flex"},s().createElement("li",{className:"p-5"},s().createElement("a",{href:"#destaques"},"Destaques")),s().createElement("li",{className:"p-5"},s().createElement("a",{href:"#ofertas"},"Ofertas")),s().createElement("li",{className:"p-5"},s().createElement("a",{href:"#cardapio"},"Cardapio")),s().createElement("li",{className:"p-5"},s().createElement("a",{href:"/auth/about"},"Login ou Cadastro")))))},E=()=>s().createElement("div",{className:"py-10 text-white bg-[#232325] h-auto",id:"ofertas"},s().createElement("div",{className:"flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto"},s().createElement("div",null,s().createElement("div",{className:"w-[400px] h-full"},s().createElement("img",{src:"",alt:"",className:"rounded-xl w-[300px] sm:w-[400px] mx-auto h-auto "}))),s().createElement("div",null,s().createElement("div",{className:"p-2"},s().createElement("div",{className:"text-gray-300 my-3"},s().createElement("h3",{className:"text-4xl font-semibold mb-5"},"Ofertas"),s().createElement("p",{className:"text-justify leading-7 w-11/12 mx-auto"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis reprehenderit suscipit itaque molestiae accusantium a odio repellat provident. Aperiam labore adipisci illum ut tempore architecto iure dolorum dicta laborum perferendis?"))),s().createElement("div",{className:"flex mt-10 items-center gap-7"},s().createElement("div",{className:"bg-red-600 p-5 rounded-lg"},s().createElement("h3",{className:"md:text-4xl text-2xl font-semibold text-white"},"Combo Dog"),s().createElement("p",null,s().createElement("span",{className:"md:text-base text-xs"},"1 HotDog simples+ 1 coca 1l.")),s().createElement("p",null,s().createElement("span",{className:"md:text-base text-xs"},"Preço: R$ 29,90"))),s().createElement("div",{className:"bg-red-600 p-5 rounded-lg"},s().createElement("h3",{className:"md:text-4xl text-2xl font-semibold text-white"},"Combo Dog"),s().createElement("p",null,s().createElement("span",{className:"md:text-base text-xs"},"1 HotDog simples+ 1 coca 1l.")),s().createElement("p",null,s().createElement("span",{className:"md:text-base text-xs"},"Preço: R$ 29,90"))),s().createElement("div",{className:"bg-red-600 p-5 rounded-lg"},s().createElement("h3",{className:"md:text-4xl text-2xl font-semibold text-white"},"Combo Dog"),s().createElement("p",null,s().createElement("span",{className:"md:text-base text-xs"},"1 HotDog simples+ 1 coca 1l.")),s().createElement("p",null,s().createElement("span",{className:"md:text-base text-xs"},"Preço: R$ 29,90"))))))),b=function(){return s().createElement(s().Fragment,null,s().createElement(h,null),s().createElement(E,null),s().createElement(g,null),s().createElement(x,null))};var y=a(267),f=a.n(y);const N=t()();a(818).config(),N.use("/auth",p()),c().use(new m.Strategy({usernameField:"email"},(async(e,t,a)=>{}))),c().serializeUser(((e,t)=>{t(null,e.id)})),c().deserializeUser((async(e,t)=>{})),N.use(d()({secret:"oiacordei",resave:!1,saveUninitialized:!1})),N.use(c().initialize()),N.use(c().session()),N.get("/",(function(e,t){const a=`<!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\n        <title>Hot Dog Adams</title>\n        <style>\n            body{\n                background-color: #ccc;\n                font-family: 'Poppins', sans-serif;\n                font-weight: 1000;\n            }\n            \n            span, .primary-color{\n                background-image: linear-gradient(to right,#fce729, #f1cd2c);\n                -webkit-background-clip: text;\n                color: transparent;\n            }\n            </style>\n    </head>\n    <body>\n        ${n().renderToString(s().createElement(b,null))}\n    </body>\n    </html>`;t.send(a)})),(new(f())).call().then((()=>{console.log("Banco de dados carregado e conectado com sucesso.")})).catch((e=>{console.error("Erro ao carregar o banco de dados:",e)})),N.listen(5173,(function(){console.log("Servidor na porta 5173")}))})()})();