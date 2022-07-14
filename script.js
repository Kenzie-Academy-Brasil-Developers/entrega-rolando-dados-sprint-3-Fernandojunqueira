

function Dados (n){

    let u = [2,3,4,5,6,7,8,9,10,11,12]
    let count = [0,0,0,0,0,0,0,0,0,0,0]
     
   for(let i = 0; i < n; i++){

     let c = getRandomInt(1,7) + getRandomInt(1,7)
     let b = u.indexOf(c)
     let d = count[b] + 1
     count.splice(b,1,d)

    }
    
    let minhaBarra2  = document.querySelector('.dois')
    let minhaBarra3  = document.querySelector('.tres')
    let minhaBarra4  = document.querySelector('.quatro')
    let minhaBarra5  = document.querySelector('.cinco')
    let minhaBarra6  = document.querySelector('.seis')
    let minhaBarra7  = document.querySelector('.sete')
    let minhaBarra8  = document.querySelector('.oito')
    let minhaBarra9  = document.querySelector('.nove')
    let minhaBarra10 = document.querySelector('.dez')
    let minhaBarra11 = document.querySelector('.onze')

    minhaBarra2.style.width  = `${count[0]*5}px`
    minhaBarra3.style.width  = `${count[1]*5}px`
    minhaBarra4.style.width  = `${count[2]*5}px`
    minhaBarra5.style.width  = `${count[3]*5}px`
    minhaBarra6.style.width  = `${count[4]*5}px`
    minhaBarra7.style.width  = `${count[5]*5}px`
    minhaBarra8.style.width  = `${count[6]*5}px`
    minhaBarra9.style.width  = `${count[7]*5}px`
    minhaBarra10.style.width = `${count[8]*5}px`
    minhaBarra11.style.width = `${count[9]*5}px`

    
}
console.log(Dados(1000))




  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  