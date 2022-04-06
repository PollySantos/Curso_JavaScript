var n1 = Number(window.prompt('Digite um numero')) // string 
 var n2 = Number(window.prompt('Digite outro numero')) // string
var s = n1 + n2
window.alert('A soma dos valores é ' + String(s)) // s.ToString() ou String(s) então ficaria:
window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}`)

// (number + number) para adição
// (string + string) para concatenação.
//number.parseInt = converte para numeros inteiros
// number.parseFloat = para numeros reais
// number = é mais preciso e usa os dois.