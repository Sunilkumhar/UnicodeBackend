let data= ['Rashmil Panchani 99 97', 'Parag Vaid 95 93', 'Siddharth Sanghavi 98 100' ];


function arrange(data){
  let avg=[];
  let sortedArray=[];

  data.forEach(function(individual) {
    let res = individual.split(" ");

    let average=(parseInt(res[2])+parseInt(res[3]))/2;

    avg.push(average);

  });

  avg.sort(function(a, b){return b-a});

  avg.forEach(function(t) {

    for(let i=0;i<data.length;i++){
      
      let res = data[i].split(" ");
      let average=(parseInt(res[2])+parseInt(res[3]))/2;
      if(average===t){
        let x=JSON.stringify({ first:  `${res[0]} ${res[1]}`,maths :`${res[2]}` ,eng:`${res[3]}`} );
        var y= JSON.parse(x);

        sortedArray.push(y);
        break;

      }    
    }
  });

  return sortedArray;
}
let finalSorted = arrange(data);
finalSorted.forEach(function(ele){

  console.log( `{ Name: "${ele.first}", Score:{maths: ${ele.maths},English: ${ele.eng} }}`);

});
