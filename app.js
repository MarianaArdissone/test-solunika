// EJERCICIO N1
let arr = [1,75, 23];

// Este ejercicio lo realice de 2 formas ya que al finalizarlo se me ocurrio una mas resumida,
// lo dejo para que lo puedan ver. Gracias :)

// METODO 1

// const numbers = (arr) => {
//     let minNumber = [];
//     let middleNumber = [];
//     let maxNumber = [];

//     arr.sort((a, b) =>  a - b );

//     minNumber.push(arr.shift());
//     maxNumber.push(arr.pop());
//     middleNumber.push(...arr);

//     console.log(maxNumber);
//     console.log(middleNumber);
//     console.log(minNumber);
// };

// METODO 2

const numbers = (arr) => {
    arr.sort((a, b) =>  a - b );
    
    arr.reverse().map( num => console.log(num));
};

numbers(arr);

console.log('------------------------------------------------------------------------')
// EJERCICIO N2

const palindromo = (p1,p2,p3,p4) => {
    let arr = [p1,p2,p3,p4];
    let minToMax = [];

    arr.map( cap => {
        if ( !isNaN(cap) ) {

            let capReverse = Number(cap.toString().split("").reverse().join(""));

            // Comparo las dos frases.
            if( cap === capReverse ){
                // Si el resultado es positivo
                resultado="es un Palindromo";
                minToMax.push(cap);
            }
            else{
                // Si el resultado es negativo
                resultado="no es un Palindromo";
            }
            // Muestro el el resultado
            console.log(`${cap} ${resultado}`);
        }
    })
    minToMax.sort((a, b) =>  a - b );
    console.log(minToMax);
}
palindromo(101,'hello',50,55);

console.log('------------------------------------------------------------------------')
// EJERCICIO N3

let arrNumber = [1,2,3,4,5,6,7,22];


const theWinnerIs = (arrNumber) => {
    let arrPar = [];
    let arrImpar = [];

    arrNumber.map( n => (n % 2 === 0) ? arrPar.push(n) : arrImpar.push(n));
    const sumaPar = () => arrPar.reduce((acc, num) => acc + num, 0);
    const sumaImpar = () => arrImpar.reduce((acc, num) => acc + num, 0);
    
    if (sumaPar() > sumaImpar()) {
        console.log(`Los pares son mayores a los impares con un resultado de: ${sumaPar()}`);
    }   else if(sumaPar() < sumaImpar()) {
        console.log(`Los impares son mayores a los pares con un resultado de: ${sumaImpar()}`);
    }   else {
        console.log('No hay ganador, ambos son iguales');
    }
};

theWinnerIs(arrNumber);
console.log('------------------------------------------------------------------------')