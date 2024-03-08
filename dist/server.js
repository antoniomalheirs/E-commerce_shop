(()=>{var e={692:e=>{e.exports=class e{constructor(){if(this.constructor===e)throw new Error("Cannot instantiate absctract class'")}parse(e){}add(e){}findOne(e){}findAll(){}get(e){}remove(e){}}},349:e=>{e.exports=class e{constructor(t={}){if(this.constructor===e)throw new Error("Cannot instantiate absctract class'");this.options=t}connect(){}}},874:(e,t,a)=>{e.exports={Wrapper:a(349),MongoDB:a(280)}},907:(e,t,a)=>{const r=a(692);e.exports=class extends r{constructor(e,t){if(super(),!e||!t)throw new Error("O modelo de loja não pode ser nulo.");this.mongoose=e,this.model="string"==typeof t?e.model(t):t}parse(e){return e?{_id:e._id,nome:e.nome,numero:e.numero,cpf:e.cpf,rg:e.rg,data:e.data,administrador:e.administrador,gerente:e.gerente,diasdefuncionamento:e.diasdefuncionamento}:null}async add(e){if(await this.model.findOne({nome:e.nome,numero:e.numero,cpf:e.cpf,rg:e.rg,data:e.data,administrador:e.administrador,gerente:e.gerente}))throw new Error("Loja já existe no banco de dados.");return this.model.create(e).then(this.parse)}async findOne(e){return this.model.findById(e).then(this.parse)}async remove(e){return this.model.findByIdAndDelete(e).then(this.parse)}async update(e,t){return this.model.findByIdAndUpdate(e,t,{new:!0}).then(this.parse)}async findAll(){return this.model.find({}).then((e=>e.map(this.parse)))}}},46:(e,t,a)=>{const r=a(692),n=a(486);e.exports=class extends r{constructor(e,t){if(super(),!e||!t)throw new Error("O modelo de usuário não pode ser nulo.");this.mongoose=e,this.model="string"==typeof t?e.model(t):t}parse(e){return e?{_id:e._id,username:e.username,password:e.password,hash:e.hash}:null}add(e){return this.model.create(e).then(this.parse)}async add(e,t){try{const a={username:e,hash:await n.hash(t,10)};return await this.model.create(a)}catch(e){throw console.error("Erro ao adicionar usuário:",e),e}}findOne(e,t){return this.model.findOne({username:e},t).then(this.parse)}get size(){return this.model.find({}).then((e=>e.length))}get(e,t){return this.model.findOne({username:e},t).then((t=>t?this.parse(t):this.add({username:e})))}remove(e){return this.model.findOneAndDelete({username:e}).then(this.parse)}update(e,t,a={upsert:!0}){return this.model.updateOne({username:e},t,a)}async verify(e){return!!await this.model.findOne({username:e})}async verifyPassword(e,t){try{const a=await this.model.findOne({username:e});if(a.password=t,!a)return!1;const r=a.hash;return await n.compare(t,r)}catch(e){throw console.error("Erro ao verificar a senha:",e),e}}findAll(e){return this.model.find({},e).then((e=>e.map(this.parse)))}}},280:(e,t,a)=>{const r=a(349),n=a(37),{UserRepository:l,ShopRepository:s}=a(79);e.exports=class extends r{constructor(e={}){super(e),this.mongoose=n}async connect(){return n.connect(process.env.DATABASE_CONNECT).then((e=>{this.users=new l(e),this.shops=new s(e)}))}}},707:(e,t,a)=>{const r=a(46),n=a(550);e.exports=class extends r{constructor(e){super(e,e.model("Shops",n))}parse(e){return{_id:null,nome:null,numero:null,cpf:null,rg:null,data:null,administrador:null,gerente:null,diasdefuncionamento:null,...super.parse(e)||{}}}}},88:(e,t,a)=>{const r=a(46),n=a(821);e.exports=class extends r{constructor(e){super(e,e.model("Users",n))}parse(e){return{_id:null,username:null,password:null,hash:null,...super.parse(e)||{}}}}},79:(e,t,a)=>{e.exports={UserRepository:a(88),ShopRepository:a(707)}},550:(e,t,a)=>{const{Schema:r}=a(37);e.exports=new r({nome:{type:String,required:!0},numero:{type:String,required:!0},cpf:{type:String,required:!0},rg:{type:String,required:!0},data:{type:Date,required:!0},administrador:{type:String,required:!0},gerente:{type:String},diasdefuncionamento:[{type:String}]})},821:(e,t,a)=>{const{Schema:r}=a(37);e.exports=new r({username:{type:String},password:{type:String},hash:{type:String}})},267:(e,t,a)=>{const{MongoDB:r}=a(874);e.exports=class{constructor(){this.database=!1}async call(){await this.LoaderDatabase(),console.log("[1m[95m[BANCO DE DADOS][0m","Bancos de Dados Operando.")}async LoaderDatabase(e=r,t={}){try{this.database=new e(t),await this.database.connect()}catch(e){console.error("[1m[33m[BANCO DE DADOS][0m",`Erro ao conectar o Banco de Dados.\n${e}`),process.exit(1)}}}},255:(e,t,a)=>{const r=a(252),n=a(278),l=r.Router(),s=a(15),o=a(468),{default:m}=a(952),{default:c}=a(262),{default:i}=a(234),{default:d}=a(40),{default:u}=a(59);l.use(((e,t,a)=>{console.log("Auth Time: ",Date.now()),a()})),l.get("/about",((e,t,a)=>{if(e.isAuthenticated())return a();t.redirect("/")}),((e,t)=>{t.send("About meu pau no seu bumbum")})),l.get("/logout",((e,t)=>{e.logout((()=>{t.redirect("/")}))})),l.post("/login",n.authenticate("local",{failureRedirect:"/auth/admin"}),(async(e,t,a)=>{const r=`\n    <!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\n        <title>Hot Dog Adams</title>\n      </head>\n      <body>\n        ${o.renderToString(s.createElement(c,{field1Data:e.user.username,field2Data:"Nome de administrador",field3Data:e.user._id,field4Data:"Id de administrador"}))}\n        ${o.renderToString(s.createElement(u,null))}\n        ${o.renderToString(s.createElement(d,null))}\n      </body>\n    </html>`;t.send(r)})),l.post("/signup",n.authenticate("signup",{failureRedirect:"/auth/register"}),(async(e,t,a)=>{const r=`<!DOCTYPE html>\n      <html lang="en">\n      <head>\n          <meta charset="UTF-8">\n          <meta name="viewport" content="width=device-width, initial-scale=1.0">\n          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\n          <title>Hot Dog Adams</title>\n      </head>\n      <body>\n        ${o.renderToString(s.createElement(c,{field1Data:e.user.username,field2Data:"Nome de administrador",field3Data:e.user._id,field4Data:"Id de administrador"}))}\n        ${o.renderToString(s.createElement(d,null))}\n      </body>\n      </html>`;t.send(r)})),l.get("/register",((e,t)=>{const a=`<!DOCTYPE html>\n  <html lang="en">\n  <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\n      <title>Hot Dog Adams</title>\n  </head>\n  <body>\n      ${o.renderToString(s.createElement(i,null))}\n  </body>\n  </html>`;t.send(a)})),l.get("/admin",((e,t)=>{const a=`<!DOCTYPE html>\n  <html lang="en">\n  <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\n      <title>Hot Dog Adams</title>\n  </head>\n  <body>\n      ${o.renderToString(s.createElement(m,null))}\n  </body>\n  </html>`;t.send(a)})),e.exports=l},946:(e,t,a)=>{const r=a(278),{Strategy:n}=a(752),l=a(37),s=a(46);r.serializeUser(((e,t)=>{console.log("Serializing..."),console.log(e),t(null,e.username)})),r.deserializeUser((async(e,t)=>{const a=new s(l,"Users"),r=await a.findOne(e);try{r&&(console.log("Deserializing..."),console.log(e),t(null,r))}catch(e){t(e,!1)}})),r.use(new n({usernameField:"username"},(async(e,t,a)=>{try{const r=new s(l,"Users"),n=await r.findOne(e);return n?await r.verifyPassword(e,t)?(console.log("Senha correta"),a(null,n)):(console.log("Senha incorreta"),a(null,!1)):(console.log("Usuário não encontrado"),a(null,!1))}catch(e){return console.error("Erro ao autenticar usuário:",e),a(e,!1)}}))),r.use("signup",new n({usernameField:"username"},(async(e,t,a)=>{try{const r=new s(l,"Users");if(await r.findOne(e))return console.log("Usuário existente"),a(null,!1);try{const n=await r.add(e,t);return console.log("Conta criada"),a(null,n)}catch(e){return console.error("Erro ao criar usuário:",e),a(e,!1)}}catch(e){return console.error("Erro ao autenticar usuário:",e),a(e,!1)}})))},14:(e,t,a)=>{const r=a(252).Router(),n=a(15),l=a(468),{default:s}=a(179),{default:o}=a(40),m=a(37),c=a(907),i=(e,t,a)=>{if(e.isAuthenticated())return a();t.redirect("/")};r.use(((e,t,a)=>{console.log("Shop Time: ",Date.now()),a()})),r.get("/newB",i,((e,t)=>{const a=`\n    <!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\n        <title>Hot Dog Adams</title>\n      </head>\n      <body>\n        ${l.renderToString(n.createElement(s,{field1Data:e.user._id}))}\n        ${l.renderToString(n.createElement(o,null))}\n      </body>\n    </html>`;t.send(a)})),r.post("/**",i,(async(e,t)=>{const a=new c(m,"Shops"),r=e.body;"string"==typeof r.diasdefuncionamento&&(r.diasdefuncionamento=r.diasdefuncionamento.split(",").map((e=>e.trim())).filter(Boolean));try{await a.add(r),console.log("Dados da requisição:",e.body);const m=`\n      <!DOCTYPE html>\n      <html lang="en">\n        <head>\n          <meta charset="UTF-8">\n          <meta name="viewport" content="width=device-width, initial-scale=1.0">\n          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\n          <title>Hot Dog Adams</title>\n        </head>\n        <body>\n          ${l.renderToString(n.createElement(s,null))}\n          ${l.renderToString(n.createElement(o,null))}\n        </body>\n      </html>`;t.send(m)}catch(e){"Loja já existe no banco de dados."===e.message?t.status(400).send("Loja já existe no banco de dados."):(console.error("Erro ao adicionar loja:",e),t.status(500).send("Erro interno do servidor."))}})),e.exports=r},952:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var r=a(15),n=a.n(r),l=a(633),s=a.n(l),o=a(368),m=a.n(o);const c=()=>{const[e,t]=(0,r.useState)(""),[a,l]=(0,r.useState)("");return n().createElement("div",{className:"flex items-center justify-center h-screen bg-gray-900"},n().createElement("div",{className:"py-4 bg-white rounded-lg shadow-lg p-8 w-96"},n().createElement("h1",{className:"text-center text-3xl font-bold text-gray-900 mb-4"},"Login"),n().createElement("form",{action:"/auth/login",method:"POST",className:"flex flex-col items-center"},n().createElement(s(),{placeholder:"Nome de usuário",variant:"outlined",value:e,onChange:e=>t(e.target.value),className:"my-2 w-full",required:!0,name:"username"}),n().createElement(s(),{type:"password",placeholder:"Senha",variant:"outlined",value:a,onChange:e=>l(e.target.value),className:"my-2 w-full",required:!0,name:"password"}),n().createElement(m(),{type:"submit",variant:"contained",style:{backgroundColor:"#FF0000"},className:"my-2 w-full"},"Entrar")),n().createElement("a",{href:"/auth/register",className:"block text-center text-red-500 mt-4 underline"},"Registrar conta")))}},40:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var r=a(15),n=a.n(r);const l=()=>n().createElement("div",{className:"fixed bottom-0 w-full bg-gray-900 py-4 flex justify-center items-center"},n().createElement("div",{className:"flex flex-row"},n().createElement("a",{href:"/auth/about",className:"block text-center text-red-500 mr-4 underline"},"Ir para sobre!"),n().createElement("a",{href:"/auth/logout",className:"block text-center text-red-500 underline"},"Sair e Voltar para o Inicio")))},262:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var r=a(15),n=a.n(r),l=a(633),s=a.n(l);const o=({field1Data:e,field2Data:t,field3Data:a,field4Data:r})=>n().createElement("div",{className:"py-4 flex justify-center items-center",style:{backgroundColor:"#FFFFFF"}},n().createElement("div",{className:"flex flex-row"},n().createElement("div",{className:"mx-2"},n().createElement(s(),{label:t,variant:"outlined",value:e,disabled:!0,fullWidth:!0,className:"my-2",InputProps:{style:{backgroundColor:"#ffffff"}}})),n().createElement("div",{className:"mx-2"},n().createElement(s(),{label:r,variant:"outlined",value:a,disabled:!0,fullWidth:!0,className:"my-2",InputProps:{style:{backgroundColor:"#ffffff"}}}))))},59:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var r=a(15),n=a.n(r),l=a(368),s=a.n(l);const o=()=>n().createElement("div",{className:"flex justify-center items-center h-screen"},n().createElement("div",{className:"bg-gray-800 text-white rounded-md p-3 md:p-4 my-6 md:my-8"},n().createElement("h1",{className:"text-2xl md:text-3xl font-bold mb-1 md:mb-2"},"Crie sua loja aqui"),n().createElement("p",{className:"text-gray-300 mb-1 md:mb-3"},"Comece a explorar oportunidades de negócios agora!"),n().createElement("a",{href:"/shop/newB"},n().createElement(s(),{variant:"contained",color:"primary",className:"bg-yellow-500 hover:bg-yellow-600"},"Adicionar Loja"))))},179:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var r=a(15),n=a.n(r),l=a(368),s=a.n(l),o=a(633),m=a.n(o);const c=({field1Data:e})=>{const[t,a]=(0,r.useState)(""),[l,o]=(0,r.useState)(""),[c,i]=(0,r.useState)(""),[d,u]=(0,r.useState)(""),[g,p]=(0,r.useState)(""),[h,x]=(0,r.useState)(""),[E,f]=(0,r.useState)([]);return n().createElement("div",{className:"py-4 px-8 rounded-md"},n().createElement("h1",{className:"bg-red-500 text-white px-4 py-2 rounded-xl text-2xl mb-4"},"Crie sua loja aqui"),n().createElement("div",{className:"flex flex-col justify-center items-center"},n().createElement("form",{action:"/shop/**",method:"POST",className:"mt-4"},n().createElement("div",{className:"mb-4"},n().createElement("label",{htmlFor:"nome",className:"text-gray-800"},"Nome:"),n().createElement(m(),{name:"nome",placeholder:"Nome",variant:"outlined",value:t,onChange:e=>a(e.target.value),required:!0,className:"w-full"})),n().createElement("div",{className:"mb-4"},n().createElement("label",{htmlFor:"numero",className:"text-gray-800"},"Número:"),n().createElement(m(),{name:"numero",placeholder:"Número",variant:"outlined",value:l,onChange:e=>o(e.target.value),required:!0,className:"w-full"})),n().createElement("div",{className:"mb-4"},n().createElement("label",{htmlFor:"cpf",className:"text-gray-800"},"CPF:"),n().createElement(m(),{name:"cpf",placeholder:"CPF",variant:"outlined",value:c,onChange:e=>i(e.target.value),required:!0,className:"w-full"})),n().createElement("div",{className:"mb-4"},n().createElement("label",{htmlFor:"rg",className:"text-gray-800"},"RG:"),n().createElement(m(),{name:"rg",placeholder:"RG",variant:"outlined",value:d,onChange:e=>u(e.target.value),required:!0,className:"w-full"})),n().createElement("div",{className:"mb-4"},n().createElement("label",{htmlFor:"data",className:"text-gray-800"},"Data:"),n().createElement(m(),{name:"data",type:"date",placeholder:"Data",variant:"outlined",value:g,onChange:e=>p(e.target.value),required:!0,className:"w-full"})),n().createElement("input",{type:"hidden",name:"administrador",value:e}),n().createElement("div",{className:"mb-4"},n().createElement("label",{htmlFor:"gerente",className:"text-gray-800"},"Gerente:"),n().createElement(m(),{name:"gerente",placeholder:"Gerente",variant:"outlined",value:h,onChange:e=>x(e.target.value),required:!0,className:"w-full"})),n().createElement("div",{className:"mb-4"},n().createElement("label",{htmlFor:"diasdefuncionamento",className:"text-gray-800"},"Dias de Funcionamento:"),n().createElement(m(),{name:"diasdefuncionamento",placeholder:"Dias de Funcionamento (separados por vírgula)",variant:"outlined",value:E.join(","),onChange:e=>{const t=e.target.value.split(",").map((e=>e.trim())).filter(Boolean);f(t)},required:!0,className:"w-full"})),n().createElement(s(),{type:"submit",variant:"contained",style:{backgroundColor:"#FFD700"},className:"w-full"},"Enviar"))))}},234:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var r=a(15),n=a.n(r),l=a(633),s=a.n(l),o=a(368),m=a.n(o);const c=()=>{const[e,t]=(0,r.useState)(""),[a,l]=(0,r.useState)("");return n().createElement("div",{className:"flex items-center justify-center h-screen bg-gray-900"},n().createElement("div",{className:"py-4 bg-white rounded-lg shadow-lg p-8 w-96"},n().createElement("h1",{className:"text-center text-3xl font-bold text-gray-900 mb-4"},"Criar conta"),n().createElement("form",{action:"/auth/signup",method:"POST",className:"flex flex-col items-center"},n().createElement(s(),{placeholder:"Nome de usuário",variant:"outlined",value:e,onChange:e=>t(e.target.value),className:"my-2 w-full",required:!0,name:"username"}),n().createElement(s(),{type:"password",placeholder:"Senha",variant:"outlined",value:a,onChange:e=>l(e.target.value),className:"my-2 w-full",required:!0,name:"password"}),n().createElement(m(),{type:"submit",variant:"contained",style:{backgroundColor:"#FF0000"},className:"my-2 w-full"},"Criar conta")),n().createElement("a",{href:"/auth/admin",className:"block text-center text-red-500 mt-4 underline"},"Fazer login")))}},368:e=>{"use strict";e.exports=require("@mui/material/Button")},633:e=>{"use strict";e.exports=require("@mui/material/TextField")},486:e=>{"use strict";e.exports=require("bcrypt")},818:e=>{"use strict";e.exports=require("dotenv")},252:e=>{"use strict";e.exports=require("express")},37:e=>{"use strict";e.exports=require("mongoose")},278:e=>{"use strict";e.exports=require("passport")},752:e=>{"use strict";e.exports=require("passport-local")},15:e=>{"use strict";e.exports=require("react")},468:e=>{"use strict";e.exports=require("react-dom/server")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,a),l.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=a(252),t=a.n(e),r=a(15),n=a.n(r),l=a(278),s=a.n(l),o=a(468),m=a.n(o);const c=require("express-session");var i=a.n(c),d=a(255),u=a.n(d),g=a(14),p=a.n(g);const h=()=>n().createElement("div",{className:"py-6 max-w-[1200px] mx-auto",id:"cardapio"},n().createElement("div",{className:"mx-auto px-4 md:px-8"},n().createElement("div",{className:"mb-4 flex flex-col items-center justify-between gap-8"},n().createElement("h2",{className:"text-3xl lg:text-4xl text-zinc-600"},"Cardápio"),n().createElement("div",{className:"flex flex-row gap-4"},n().createElement("h2",{className:"text-2xl lg:text-3xl text-yellow-400 hover:text-yellow-600"},"Todos"),n().createElement("h2",{className:"text-2xl lg:text-3xl text-yellow-400 hover:text-yellow-600"},"Lanches"),n().createElement("h2",{className:"text-2xl lg:text-3xl text-yellow-400 hover:text-yellow-600"},"Bebidas"))),n().createElement("div",{className:"mb-8"},n().createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},n().createElement("div",{className:"bg-gray-800 p-4 rounded-lg text-center"},n().createElement("img",{src:"/images/simples.png",alt:"",className:"w-24 h-auto mx-auto mb-4 rounded-lg"}),n().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Hamburguer Simples"),n().createElement("p",{className:"text-gray-400"},"Pão, carne, queijo, alface, tomate, cebola e maionese."),n().createElement("p",{className:"text-gray-400"},"R$ 10,00")),n().createElement("div",{className:"bg-gray-800 p-4 rounded-lg text-center"},n().createElement("img",{src:"/images/peperoni.png",alt:"",className:"w-24 h-auto mx-auto mb-4 rounded-lg"}),n().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Pizza de Pepperoni"),n().createElement("p",{className:"text-gray-400"},"Massa de pizza, molho de tomate, queijo, pepperoni e orégano."),n().createElement("p",{className:"text-gray-400"},"R$ 20,00")),n().createElement("div",{className:"bg-gray-800 p-4 rounded-lg text-center"},n().createElement("img",{src:"/images/caesar.png",alt:"",className:"w-24 h-auto mx-auto mb-4 rounded-lg"}),n().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Salada Caesar"),n().createElement("p",{className:"text-gray-400"},"Alface romana, croutons, queijo parmesão, molho Caesar e frango grelhado."),n().createElement("p",{className:"text-gray-400"},"R$ 15,00")))),n().createElement("div",{className:"mb-8"},n().createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},n().createElement("div",{className:"bg-gray-800 p-4 rounded-lg text-center"},n().createElement("img",{src:"/images/simples.png",alt:"",className:"w-24 h-auto mx-auto mb-4 rounded-lg"}),n().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Hamburguer Simples"),n().createElement("p",{className:"text-gray-400"},"Pão, carne, queijo, alface, tomate, cebola e maionese."),n().createElement("p",{className:"text-gray-400"},"R$ 10,00")),n().createElement("div",{className:"bg-gray-800 p-4 rounded-lg text-center"},n().createElement("img",{src:"/images/peperoni.png",alt:"",className:"w-24 h-auto mx-auto mb-4 rounded-lg"}),n().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Pizza de Pepperoni"),n().createElement("p",{className:"text-gray-400"},"Massa de pizza, molho de tomate, queijo, pepperoni e orégano."),n().createElement("p",{className:"text-gray-400"},"R$ 20,00")),n().createElement("div",{className:"bg-gray-800 p-4 rounded-lg text-center"},n().createElement("img",{src:"/images/caesar.png",alt:"",className:"w-24 h-auto mx-auto mb-4 rounded-lg"}),n().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Salada Caesar"),n().createElement("p",{className:"text-gray-400"},"Alface romana, croutons, queijo parmesão, molho Caesar e frango grelhado."),n().createElement("p",{className:"text-gray-400"},"R$ 15,00")))),n().createElement("div",{className:"mb-8"},n().createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},n().createElement("div",{className:"bg-gray-800 p-4 rounded-lg text-center"},n().createElement("img",{src:"/images/hot.png",alt:"",className:"w-24 h-auto mx-auto mb-4 rounded-lg"}),n().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"HotDog"),n().createElement("p",{className:"text-gray-400"},"Pão, salsicha, mostarda, ketchup, batata palha"),n().createElement("p",{className:"text-gray-400"},"R$ 15,00")),n().createElement("div",{className:"bg-gray-800 p-4 rounded-lg text-center"},n().createElement("img",{src:"/images/hot.png",alt:"",className:"w-24 h-auto mx-auto mb-4 rounded-lg"}),n().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"HotDog"),n().createElement("p",{className:"text-gray-400"},"Pão, salsicha, mostarda, ketchup, batata palha"),n().createElement("p",{className:"text-gray-400"},"R$ 15,00")),n().createElement("div",{className:"bg-gray-800 p-4 rounded-lg text-center"},n().createElement("img",{src:"/images/hot.png",alt:"",className:"w-24 h-auto mx-auto mb-4 rounded-lg"}),n().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"HotDog"),n().createElement("p",{className:"text-gray-400"},"Pão, salsicha, mostarda, ketchup, batata palha"),n().createElement("p",{className:"text-gray-400"},"R$ 15,00")))),n().createElement("div",{className:"mb-8"},n().createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},n().createElement("div",{className:"bg-gray-800 p-4 rounded-lg text-center"},n().createElement("img",{src:"/images/fanta.png",alt:"",className:"w-24 h-auto mx-auto mb-4 rounded-lg"}),n().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Fanta 375ml"),n().createElement("p",{className:"text-gray-400"},"R$ 4,00")),n().createElement("div",{className:"bg-gray-800 p-4 rounded-lg text-center"},n().createElement("img",{src:"/images/coca.png",alt:"",className:"w-24 h-auto mx-auto mb-4 rounded-lg"}),n().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Coca-cola 375ml"),n().createElement("p",{className:"text-gray-400"},"R$ 4,00")),n().createElement("div",{className:"bg-gray-800 p-4 rounded-lg text-center"},n().createElement("img",{src:"/images/agua.png",alt:"",className:"w-24 h-auto mx-auto mb-4 rounded-lg"}),n().createElement("h4",{className:"text-yellow-400 text-lg font-semibold mb-2"},"Água 500 ml"),n().createElement("p",{className:"text-gray-400"},"R$ 3,00")))))),x=(require("react-type-animation"),()=>n().createElement("div",null,n().createElement("div",{className:" my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row\r justify-center align-center",id:"destaques"},n().createElement("div",{className:" flex-col my-auto mx-auto"},n().createElement("p",{className:"md:text-5xl sm:text-xl font-bold text-red-300"},"Happy HotDog"),n().createElement("h1",{className:"md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"}),n().createElement("div",{className:"flex justify-center items-center"},n().createElement("p",{className:"md:text-5xl sm:text-4xl text-xl font-bold text-gray-500"},"Felicidade em cada mordida. "))),n().createElement("div",{className:"my-auto"},n().createElement("img",{className:" rounded-xl w-[300px] sm:w-[500px] mx-auto h-auto ",src:"/images/logo.png",alt:""}))))),E=()=>{const[e,t]=(0,r.useState)(!1);return n().createElement("div",null,n().createElement("div",{className:" text-red-500 flex justify-between items-center max-w=[1240px] mx-auto h-20 px-4 text-l"},n().createElement("h1",{className:"text-3xl font-bold primary-color ml-4"},"Cardapio Online"),n().createElement("ul",{className:"hidden md:flex"},n().createElement("li",{className:"p-5"},n().createElement("a",{href:"#destaques"},"Destaques")),n().createElement("li",{className:"p-5"},n().createElement("a",{href:"#ofertas"},"Ofertas")),n().createElement("li",{className:"p-5"},n().createElement("a",{href:"#cardapio"},"Cardapio")),n().createElement("li",{className:"p-5"},n().createElement("a",{href:"/auth/admin"},"Login ou Cadastro")))))},f=()=>n().createElement("div",{className:" py-10 text-white  h-auto bg-gray-800",id:"ofertas"},n().createElement("div",{className:"flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto"},n().createElement("div",null,n().createElement("div",{className:"w-[400px] h-full"},n().createElement("img",{src:"/images/ofertas.webp",alt:"",className:"rounded-xl w-[300px] sm:w-[400px] mx-auto h-auto "}))),n().createElement("div",null,n().createElement("div",{className:"p-2"},n().createElement("div",{className:"text-gray-300 my-3"},n().createElement("h3",{className:"text-4xl font-semibold mb-5"},"Ofertas"),n().createElement("p",{className:"text-justify leading-7 w-11/12 mx-auto"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis reprehenderit suscipit itaque molestiae accusantium a odio repellat provident. Aperiam labore adipisci illum ut tempore architecto iure dolorum dicta laborum perferendis?"))),n().createElement("div",{className:"flex mt-10 items-center gap-7"},n().createElement("div",{className:"bg-red-600 p-5 rounded-lg"},n().createElement("h3",{className:"md:text-4xl text-2xl font-semibold text-white"},"Combo Dog"),n().createElement("p",null,n().createElement("span",{className:"md:text-base text-xs"},"1 HotDog simples+ 1 coca 1l.")),n().createElement("p",null,n().createElement("span",{className:"md:text-base text-xs"},"Preço: R$ 29,90"))),n().createElement("div",{className:"bg-red-600 p-5 rounded-lg"},n().createElement("h3",{className:"md:text-4xl text-2xl font-semibold text-white"},"Combo Dog"),n().createElement("p",null,n().createElement("span",{className:"md:text-base text-xs"},"1 HotDog simples+ 1 coca 1l.")),n().createElement("p",null,n().createElement("span",{className:"md:text-base text-xs"},"Preço: R$ 29,90"))),n().createElement("div",{className:"bg-red-600 p-5 rounded-lg"},n().createElement("h3",{className:"md:text-4xl text-2xl font-semibold text-white"},"Combo Dog"),n().createElement("p",null,n().createElement("span",{className:"md:text-base text-xs"},"1 HotDog simples+ 1 coca 1l.")),n().createElement("p",null,n().createElement("span",{className:"md:text-base text-xs"},"Preço: R$ 29,90"))))))),y=function(){return n().createElement(n().Fragment,null,n().createElement(E,null),n().createElement(x,null),n().createElement(f,null),n().createElement(h,null))};var b=a(267),N=a.n(b);a(946);const v=require("cookie-parser");var w=a.n(v);const S=require("body-parser");var D=a.n(S);const C=require("path");var q=a.n(C);a(818).config();const j=new(N()),O=t()();O.use(D().urlencoded({extended:!0})),O.use(D().json()),O.set("trust proxy",1),O.set("views",__dirname+"/views"),O.use(w()()),O.use(i()({secret:process.env.SECRET_KEY,name:"E-Commerce_Shop",resave:!0,saveUninitialized:!0,cookie:{maxAge:999e3}})),O.use(s().initialize()),O.use(s().session()),O.use("/auth",u()),O.use("/shop",p()),O.get("/",(function(e,a){const r=`<!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">\n        <title>Hot Dog Adams</title>\n       \n    </head>\n    <body>\n        ${m().renderToString(n().createElement(y,null))}\n       \n    </body>\n    </html>`,l=q().resolve(__dirname,"public","img").replace(q().sep+"dist"+q().sep,q().sep);console.log("Caminho da imagem:",l),O.use("/images",t().static(q().resolve(l))),a.send(r)})),j.call().then((()=>{console.log("Banco de dados carregado e conectado com sucesso."),O.listen(5173,(function(){console.log("Servidor na porta 5173")}))})).catch((e=>{console.error("Erro ao carregar o banco de dados:",e)}))})()})();