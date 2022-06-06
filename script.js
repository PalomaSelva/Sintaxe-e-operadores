
function sintaxe(a,b) {
    if (a===b) {
        document.write("Os números ",a," e ",b," são iguais")
    } else {
       document.write("Os números ",a," e ",b," não são iguais") 
    }

}
function soma(a,b) {
    a=parseInt("a")
    b=parseInt("b")
    soma=a+b
    console.log(soma)
    if (soma>10 && soma<20) {
        document.write("A soma dos números é maior que 10 e menor que 20")
    }
}
n=prompt("Digite um número")
n2=prompt("Digite o 2 número")
sintaxe(n,n2)
soma(n,n2)
