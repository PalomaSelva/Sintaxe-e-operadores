var number=document.getElementById('number1');
var n1=prompt("Digite um número:");
n1=parseInt(n1)
number.innerHTML= n1
var number2=document.getElementById('number2');
var n2=prompt("Digite um número:");
n2=parseInt(n2)
number2.innerHTML= n2

function sintaxe(a,b) {
    sintese=document.getElementById('sintese')
    if (a===b) {
        x=(`Os números ${a} e ${b} são iguais. `)
        sintese.innerHTML=x
    } else {
       x=(`Os números ${a} e ${b} não são iguais. `) 
       sintese.innerHTML=x
    }

}
function soma(a,b) {
    sintese=document.getElementById('sintese')
    soma=a+b
    console.log(soma)
    if (soma>10) {
        soma10="maior"
        
    }else{
        soma10="menor"
    }
    if (soma>20) {
        soma20="maior"
    } else {
        soma20="menor"
    }
        Y=("Sua soma é "+soma+", que é "+soma10+" que 10 e "+soma20+" que 20.")
        sintese.innerHTML=Y
}

sintaxe(n1,n2)
soma(n1,n2)

