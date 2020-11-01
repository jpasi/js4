let ListaN = []
let list = []
let max = 0

document.getElementById("regi").addEventListener("submit", function(event){
  alert("me and all my relatives are owned by China")
  event.preventDefault()
  
})


document.getElementById("sub").addEventListener("submit", function(event){
    list.push(new gente(nome = document.getElementById("nome").value, sobre = document.getElementById("sobre").value ,idade = document.getElementById("idade").value));
    document.getElementById("regi").reset();
    mostrarReg()
    masViejo()
    familia()
  })


function gente(nome, sobre, idade){
    this.nome = nome
    this.sobre = sobre
    this.idade = idade      
}


function mostrarReg() {
      document.getElementById("Registros").innerHTML = "Registros de:"
      ListaN.push(nome);
      document.getElementById("Nombres").children[0].innerHTML += "<li>"+ListaN[ListaN.length-1]+"</li>"
}     
    
function masViejo()
    const newLocal = document.getElementById("Old").innerHTML = "A pessoa mais velha é:"
    for ( let i=0; i < list.length; i++) 
        list[i].idade = Number(list[i].idade)
    list.forEach(list => {
        if (list.idade > max){
            max = list.idade
        }
    })
        let item = list.find(item => item.idade === max)
        document.getElementById("Oldp").innerHTML = item.nome





function familia(list) {
    let esFamilia = [ list ]
    

    for(let persona of list) {
        if(persona.sobre === persona.sobre) {
            esFamilia = [persona]
        }
    for(let persona of list) {     
        if (persona.sobre === esFamilia[0].sobre) {
            esFamilia.push(persona)
            
        }    
    }
    }
     return esFamilia 
}
    let fam = familia(list)
    fam.shift()
    const newLocal = document.getElementById("F").innerHTML = "As pessoas na lista de abaixo tem o mesmo sobrenome:"
    for ( let i=0; i < fam.length; i++){
        console.log(fam[i].nome)
    document.getElementById("Fa").children[0].innerHTML += "<li>"+fam[fam.length-1]+"</li>"
    }








    function obterMaisNovo (list) {
        let emaisnovo = [list[0] ]

        for(let persona of list) {
            if(persona.idade < emaisnovo[0].idade) {
                emaisnovo = [persona]
            }
        }

        return emaisnovo
    }
        let maisNovo = obterMaisNovo(list)
        for(let pn of maisNovo) {
        document.getElementById("Oldp").innerHTML = `A pessoa mais nova da lista é ${pn.nome}`
        }