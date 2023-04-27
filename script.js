function numeroDeTermos(A1,r,An){
   if(!A1 || !r || !An) return 0;
   let n = ((Number(An) - Number(A1))/Number(r))+1;
   return n;
}
function somaDosTermos(A1,An,n){
   if(!A1 || !An || !n) return 0;
   let Sn = (((Number(A1) + Number(An)) *Number(n)))/2;
   return Sn;
}
function acharA1(An,r,n){
   if(!An || !r || !n) return 0;
   let A1 = Number(An) - (Number(n)-1)*Number(r);
   return A1;
}
function acharAn(A1,r,n){
   if(!A1 || !r || !n) return 0;
   let An = Number(A1) + (Number(r)*(Number(n)-1));
   return An;
}
function acharRazao(A1,A2){
   if(!A1 || !A2) return 0;
   let r = Number(A2)-Number(A1);
   return r;
}
function AnSemA1(an,r,n,resta){
   if(!an || !r || !n || !resta) return 0;
   let An = Number(an) + (Number(n)-Number(resta))*Number(r);
   return An;
}
function acharPaInteira(A1,n,r){
   let pa = [Number(A1)];
   for(let i = 0; i < n-1; i++){
      pa.push(pa[i]+Number(r));
   }
   return pa;
}

function setInactive(e){
   e.className = "inactive";
   e.setAtribute("disabled",true);
}

let A1 = document.getElementById("A1");
let A2 = document.getElementById("A2");
let An = document.getElementById("An");
let n = document.getElementById("n");
let r = document.getElementById("r");
let resta = document.getElementById("resta");
let resultado = document.getElementById("resultado");
function typing(texto,v,i){
   let text = Array.isArray(texto) ? texto : texto.split("");
   setTimeout(() => {
      resultado.value += text[i];
      if(i == text.length-1){
         return false;
      }
      i++;
      typing(text,v,i);
   }, v*100)
}


//opcões do select

let func = document.getElementById("func");

func.addEventListener("change", (e) => {
   A1.value = "";
   A2.value = "";
   An.value = "";
   n.value = "";
   r.value = "";
   resta.value = "";
   switch (func.value){
      case "A1":
         A1.className = "inactive"
         A2.className = "inactive"
         resta.className = "inactive"
         A1.setAttribute("disabled",true);
         A2.setAttribute("disabled",true);
         resta.setAttribute("disabled",true);

         An.className = "";
         n.className = "";
         r.className = "";
         An.removeAttribute("disabled");
         n.removeAttribute("disabled");
         r.removeAttribute("disabled");
         break;
      case "n":
         n.className = "inactive"
         A2.className = "inactive"
         resta.className = "inactive"
         n.setAttribute("disabled",true);
         A2.setAttribute("disabled",true);
         resta.setAttribute("disabled",true);

         An.className = "";
         A1.className = "";
         r.className = "";
         An.removeAttribute("disabled");
         A1.removeAttribute("disabled");
         r.removeAttribute("disabled");
         break;
      case "r":
         r.className = "inactive"
         An.className = "inactive"
         resta.className = "inactive"
         n.className = "inactive"
         r.setAttribute("disabled",true);
         An.setAttribute("disabled",true);
         resta.setAttribute("disabled",true);
         n.setAttribute("disabled",true);

         A1.className = "";
         A2.className = "";
         A1.removeAttribute("disabled");
         A2.removeAttribute("disabled");
         break;
      case "An":
         An.className = "inactive"
         A2.className = "inactive"
         resta.className = "inactive"
         An.setAttribute("disabled",true);
         A2.setAttribute("disabled",true);
         resta.setAttribute("disabled",true);

         A1.className = "";
         n.className = "";
         r.className = "";
         A1.removeAttribute("disabled");
         n.removeAttribute("disabled");
         r.removeAttribute("disabled");
         break;
      case "Ans":
         A1.className = "inactive"
         A2.className = "inactive"
         A1.setAttribute("disabled",true);
         A2.setAttribute("disabled",true);

         An.className = "";
         n.className = "";
         r.className = "";
         resta.className = "";
         An.removeAttribute("disabled");
         n.removeAttribute("disabled");
         r.removeAttribute("disabled");
         resta.removeAttribute("disabled");
         break;
      case "Sn":
         r.className = "inactive"
         A2.className = "inactive"
         resta.className = "inactive"
         r.setAttribute("disabled",true);
         A2.setAttribute("disabled",true);
         resta.setAttribute("disabled",true);

         An.className = "";
         A1.className = "";
         n.className = "";
         An.removeAttribute("disabled");
         A1.removeAttribute("disabled");
         n.removeAttribute("disabled");
         break;
      
   }
});

let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
   e.preventDefault();
   resultado.value = "";
   switch (func.value){
      case "A1":
         typing(`A1 = ${acharA1(An.value,r.value,n.value)}
PA = (${acharPaInteira(acharA1(An.value,r.value,n.value),n.value,r.value)})
         `,0.2,0);
         break
      case "n":
         typing(`
Número de termos = ${numeroDeTermos(A1.value,r.value,An.value)}
PA = (${acharPaInteira(A1.value,numeroDeTermos(A1.value,r.value,An.value),r.value)})
         `,0.2,0);
         break
      case "r":
         typing(`
Razão = ${acharRazao(A1.value,A2.value)}
         `,0.2,0);
         break
      case "An":
         typing(`
An = ${acharAn(A1.value,r.value,n.value)}
PA = (${acharPaInteira(A1.value,n.value,r.value)})
         `,0.2,0);
         break
      case "Ans":
         typing(`
An = ${AnSemA1(An.value,r.value,n.value,resta.value)}
         `,0.2,0);
         break
      case "Sn":
         typing(`
Soma dos termos = ${somaDosTermos(A1.value,An.value,n.value)}
         `,0.2,0);
         break
   }
});