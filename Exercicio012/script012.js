var hora = 1
if (hora < 12) {
console.log("Bom dia!")
} else if (hora <= 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa Noite!")
 }


 // como pegar a hora atual do sistema

 var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
console.log("Bom dia!")
} else if (hora <= 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa Noite!")
 }