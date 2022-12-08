import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import * as Tone from 'tone'


  const Parser = require('expr-eval').Parser;




export default function Home() {
  const [arr2, setArr2] = useState([[1000,1000,2000, 3000, 1000, 3000, 5000]])
  const [arrnum, setArrnum] = useState([-3,-2,1, 0, 1, 2, 3])
  
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.

  useEffect(() => {





    
    if (sessionStorage.getItem('arrnum')){
      setArrnum(sessionStorage.getItem('arrnum'))
      console.log("numb " + arrnum)

  

    }
    

    if (sessionStorage.getItem('arr')){
      setArr2([sessionStorage.getItem('arr').split(',')])
      console.log(sessionStorage.getItem('arr') )
     // alert(arr2[0])

  

    }




    getnum(sessionStorage.getItem('arrnum'))
   //alert(arr2[0].length/2)



    

    
}, [])





 

const parser = new Parser();

let arr = []
//const [arr2, setArr2] = useState([0, 1, 2, 3])
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

function getSound(){

  const synth = new Tone.Synth().toDestination();
  const melody = []
  const arrlen = arr2[0].length
  const full = arr2[0].max() + Math.abs(arr2[0].min());
 // alert(arr2.max())

  for (let i = 1; i<arrlen; i++){
  // alert(eval(Math.abs(arr2[0].min()) + parseInt(arr2[0][i])))
   console.log("math eval: " + Math.abs(arr2[0].min()))
   console.log("arr2: " + arr2[0][i])
  // alert(Math.floor((eval(Math.abs(arr2[0].min()) + parseInt(arr2[0][i]))/full) * 10))

    melody.push({ note: "C" + Math.floor((eval(Math.abs(arr2[0].min()) + parseInt(arr2[0][i]))/full) * 10), duration: "8n", timing: i/3 })
   // alert(arr2[0][i] + " + abd + " + Math.floor((arr2[0][i]/3000) * 10))
   

  }
  
      
melody.forEach(tune => {
    const now = Tone.now()
    synth.triggerAttackRelease(tune.note, tune.duration, now + tune.timing)
})

}

function getnum(arr3){
  //alert(Math.ceil(arr3/2))
 // alert(arr3)
  
  
  const arrnum2 = [];
for (let i = arr3; i > 1; i--){
    arrnum2.push(-i)
   // alert(i)
}
for (let i = 0; i < arr3; i++){
  arrnum2.push(i)
} 

 console.log("dd" + arrnum2)

setArrnum(arrnum2)
console.log(arrnum)
}




//alert(arrnum)
function solvePoly(vare, amt){
  let expr = parser.parse(vare);
  expr.evaluate({ x: 3 })
  

  for (var i =amt; i > 1; i--){

    arr.push(  expr.evaluate({ x: -i })    )

  }
  for (var i =0; i < amt; i++){

    arr.push(  expr.evaluate({ x: i })    )

  } // alert(arr.length)
   //alert(arr[0])

  sessionStorage.setItem('arr', arr)
  sessionStorage.setItem('arrnum', amt)

  console.log(  sessionStorage.getItem('arr')  )

}

let amt = []
//alert(arr2[0].length)

for (let i = 0; i < arr2[0].length; i++){
    amt.push(i)
    console.log('f')
}
console.log(amt)


const data = {
  labels: amt,
  datasets: [
    {
      label: 'Graph',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(202, 139, 4,0.4)',
      borderColor: 'rgba(202, 139, 4,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(202, 139, 4,1)',
      pointHoverBorderColor: 'rgba(202, 139, 4,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: arr2[0],
    }
  ]
};

const lineOptions = {
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
      },
    }],
    yAxes: [{
      // stacked: true,
      gridLines: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        // Return an empty string to draw the tick line but hide the tick label
        // Return `null` or `undefined` to hide the tick line entirely
        userCallback(value) {
          // Convert the number to a string and splite the string every 3 charaters from the end
          value = value.toString();
          value = value.split(/(?=(?:...)*$)/);

          // Convert the array to a string and format the output
          value = value.join('.');
          return `Rp.${value}`;
        },
      },
    }],
  },
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
};


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};



  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
  <header className="text-green-900 absolute top-0 left-0 bg-green-100 text-opacity-60 w-full body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-green-900 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-1.5 text-xl text-green-900">Polynomials to Music Converter</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="https://github.com/funn-github/empathy" className="mr-5 hover:text-gray-900">Github</a>
    </nav>
    <button onClick={() => {let x = prompt("Insert Polynomial", "2 * (x ^ 3)"); let amt = prompt("Insert Table Lenght", "20"); solvePoly(x, amt)}} className="inline-flex items-center bg-green-900 py-2 px-4 focus:outline-none hover:bg-green-700 rounded-xl text-green-200 mt-4 md:mt-0">Enter Polynomial
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>


<div className='w-full flex'>
<div className='h-screen w-1/2 p-5'>pk
  <div className='bg-yellow-200 rounded-3xl w-full mt-14 '>
    <div className='border-yellow-600 border-t-4 border-b-2 border-r-4 border-l-4 w-full flex justify-around rounded-t-3xl text-yellow-600 font-bold text-lg p-4'>
    <div>number</div>
    <div>data</div>
    </div>


    
    {arr2[0].map((item) => (
      <div className='flex w-full'> 
              <div className='flex items-center justify-center border-l-4 border-t-2 border-b-2 border-r-2 border-yellow-600 w-1/2 py-3 font-bold'>{arrnum[arr2[0].indexOf(item)]}</div>

        <div className='flex items-center justify-center border-l-4 border-t-2 border-b-2 border-r-2 border-yellow-600 w-1/2 py-3 font-bold'>{item}</div>

      </div>
    ))}


  </div>
</div>
<div className='h-screen w-1/2 p-5'>
  <div className='bg-yellow-200 border-4 border-yellow-600 rounded-3xl w-full mt-20 '>
  <div style={styles}>
    <Line data={data} options={lineOptions} />
  </div>

  <button onClick={() => {getSound()}}>Play Sound</button>



  </div>
</div>
</div>

  

</div>


   


    </div>
  )
}
