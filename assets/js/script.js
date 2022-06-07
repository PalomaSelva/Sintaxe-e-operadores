var number=document.getElementById('number1');
var n1=prompt("Digite um número:");
number.innerHTML= n1
var number2=document.getElementById('number2');
var n2=prompt("Digite um número:");
number2.innerHTML= n2



function sintaxe(a,b) {
    sintese=document.getElementById('sintese')
    if (a===b) {
        document.write("Os números ",a," e ",b," são iguais. ")
    } else {
       document.write("Os números ",a," e ",b," não são iguais. ") 
    }

}
function soma(a,b) {
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
    document.write("Sua soma é ",soma,", que é ",soma10," que 10 e ",soma20," que 20.")
}





sintaxe(n,n2)
soma(n,n2)

