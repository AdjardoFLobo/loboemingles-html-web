/*PEGAR TODOS OS INPUTS DA PERGUNTA 1*/
let input1a = document.getElementById('input-1a');
let input1b = document.getElementById('input-1b');
let input1c = document.getElementById('input-1c');
let input1d = document.getElementById('input-1d');
let input1e1 = document.getElementById('input-1e-1');
let input1e2 = document.getElementById('input-1e-2');

/*OS ARRAYS DAS POSSÍVEIS RESPOSTAS DE CADA ITEM*/
let resposta1a = ['eat' , 'sell' , 'buy', 'prepare'];
let resposta1b = "don't";
let resposta1c = ['do' , 'Do'];
let resposta1d = ['i', 'I'];
let resposta1e1 = "don't";
let resposta1e2 = ['like', 'eat', 'buy', 'sell', 'prepare'];


/*COMPARA OS INPUTS COM AS RESPOSTAS! */
input1a.addEventListener('change', (e)=>{
    if(resposta1a.includes(e.target.value)){
        input1a.classList.add('resposta-ok');
    } else {
        input1a.classList.remove('resposta-ok');
    }
})

input1b.addEventListener('change', (e)=>{
    if(resposta1b === e.target.value){
        input1b.classList.add('resposta-ok');
    } else {
        input1b.classList.remove('resposta-ok');
    }
})

input1c.addEventListener('change', (e)=>{
    if(resposta1c.includes(e.target.value)){
        input1c.classList.add('resposta-ok');
    } else {
        input1c.classList.remove('resposta-ok');
    }
})

input1d.addEventListener('change', (e)=>{
    if(resposta1d.includes(e.target.value)){
        input1d.classList.add('resposta-ok');
    } else {
        input1d.classList.remove('resposta-ok');
    }
})

input1e1.addEventListener('change', (e)=>{
    if(resposta1e1 === e.target.value){
        input1e1.classList.add('resposta-ok');
    } else {
        input1e1.classList.remove('resposta-ok');
    }
})

input1e2.addEventListener('change', (e)=>{
    if(resposta1e2.includes(e.target.value)){
        input1e2.classList.add('resposta-ok');
    } else {
        input1e2.classList.remove('resposta-ok');
    }
})

