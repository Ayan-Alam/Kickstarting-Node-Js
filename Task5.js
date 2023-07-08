 new Promise((resolve, reject)=>{

   setTimeout(()=>{

     resolve('c');

   },3000)

 })

 .then(data => console.log(data))

 .then(()=>new Promise((resolve, reject)=>{

   setTimeout(()=>{

     resolve('d')

   },0)

 }))

.then(data => console.log(data))

.then(()=>console.log('e'))





//Async Await



async function abcde(){

  console.log('a');

  console.log('b');



  await new Promise((resolve, reject)=>{

    setTimeout(()=>{

      resolve();

    },3000)

  })

  console.log('c');

  await new Promise((resolve, reject)=>{

    setTimeout(()=>{

      resolve();

    },0)

  })

  console.log('d');

  console.log('e');

}

abcde();