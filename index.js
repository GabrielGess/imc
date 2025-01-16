//let variavel = 'Isso é uma variavel.' (valor de uma variavel em umtrevho de codigo)
//const constatnte = 'valor que não se altera'

//variavel = 'Agora mudei o meu valor' (valor geral de uma variavel )
//console.log(variavel)


//imc >= 25 && < 30; Sobrepeso.Overweiht
//imc >= 18.5 && < 25; Regular.Regular
//imc < 18.5; Abaixo do peso.Underweiht
// else = Obesity

const conversionfactor = 0.01 // Fator de converção 

const IMC_STATUS_DICT = {
    UNDERWEIGHT: 'UNDERWEIGHT',
    REGULAR: 'REGULAR',
    OVERWEIGHT: 'OVERWEIGHT',
    OBESITY: 'OBESITY',
}

 
function calculateIMC(){ // Função para calcular o IMC
    let height = person.height;
    let weight = person.weight;
        //Variaveis de altura e peso,
    height *= conversionfactor; // Converção da altura 
    
    let imc = weight / (height * height); // Linha de calculo do IMC.
    const classification = classificateIMC(imc);
    const classificationDetail = getclassificationDetail(classification);
const result = "O resultado do IMC é de: " + imc;
    const isHealthy = true;
    
    return{
        name: person.name,
        imc,
        classification,
        classificationDetail,
        result,
        isHealthy,
    }

}

function classificateIMC(imc){
if (25 <= imc < 30){
    return IMC_STATUS_DICT.OVERWEIGHT;
}else if (18.5 <= imc < 25){
    return IMC_STATUS_DICT.REGULAR;
}else if (imc < 18.5){
    return IMC_STATUS_DICT.UNDERWEIGHT;
}else{
    return IMC_STATUS_DICT.OBESITY;    
}
} 

/*function getclassificationDescrition; escrito com o metdo de object mapping */

function getclassificationDescrition(classification){
        
    return {
        [IMC_STATUS_DICT.OVERWEIGHT]:'Acima do peso',
        [IMC_STATUS_DICT.REGULAR]:'Regular',
        [IMC_STATUS_DICT.UNDERWEIGHT]:'Abaixo do peso',
        [IMC_STATUS_DICT.OBESITY]:'Obesidade!',
    }[classification]  || 'Falha ao encontrar a descriçaõ de status'

}


/*function getclassificationDescrition; escrito com o operador condicional switch case.*/

// function getclassificationDescrition(classification){
    //switch(classification){
        //case IMC_STATUS_DICT.OVERWEIGHT:
            //return 'Acima do peso';
        //case IMC_STATUS_DICT.REGULAR:
            //return 'Peso normal.';
        //case IMC_STATUS_DICT.UNDERWEIGHT:
            //return 'Abaixo do peso';
        //case IMC_STATUS_DICT.OBESITY:
            //return 'Peso com gral de obesidade, obesidade!';
        //default:
            //return 'Falha ao encontrar a descrição do status';
    //}
//}

const person = {
    name: 'Fabio',
    weight: 70,
    height: 170,
}

const person2 = {
    name: 'Laryssa',
    weight: 60,
    height: 160,
}

console.log(calculateIMC(person))
console.log(calculateIMC(person2))