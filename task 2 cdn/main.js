const cat =document.querySelector('#optionsForCat').value;
  const type =document.querySelector('#optionsForType').value;

  axios
    .get(`https://sv443.net/jokeapi/v2/joke/${cat}?type=${type}`)
    .then(res => showoutput(res.data))
    .catch(err => console.error(err));


  // const jokes =document.querySelector('.joke');
  function showoutput(data){
    const jokes =document.querySelector('#joke');
    console.log(data);
    if(data.type==='twopart'){
      jokes.innerHTML = `
      <h2>ID:: ${data.id}</h2>
      <h2>Category:: ${data.category}</h2>
      <h2>Type:: ${data.type}</h2>
      <h2>Setup:: ${data.setup}</h2>
      <h2>Delivery:: ${data.delivery}</h2>

      `;
      jokes.style.border = 'solid' ;

    }else{
      jokes.innerHTML = `
      <h2>ID:: ${data.id}</h2>
      <h2>Category:: ${data.category}</h2>
      <h2>Type:: ${data.type}</h2>
      <h2>Joke:: ${data.joke}</h2>

      `;
      jokes.style.border = 'solid' ;
    }

  }

const search1=document.querySelector('.btn');

search1.addEventListener('click',function(e){
  e.preventDefault;

  const cat =document.querySelector('#optionsForCat').value;
  const type =document.querySelector('#optionsForType').value;

  axios
    .get(`https://sv443.net/jokeapi/v2/joke/${cat}?type=${type}`)
    .then(res => showoutput(res.data))
    .catch(err => console.error(err));


  // const jokes =document.querySelector('.joke');
  function showoutput(data){
    const jokes =document.querySelector('#joke');
    console.log(data);
    if(data.type==='twopart'){
      jokes.innerHTML = `
      <h2>ID:: ${data.id}</h2>
      <h2>Category:: ${data.category}</h2>
      <h2>Type:: ${data.type}</h2>
      <h2>Setup:: ${data.setup}</h2>
      <h2>Delivery:: ${data.delivery}</h2>

      `;
      jokes.style.border = 'solid' ;

    }else{
      jokes.innerHTML = `
      <h2>ID:: ${data.id}</h2>
      <h2>Category:: ${data.category}</h2>
      <h2>Type:: ${data.type}</h2>
      <h2>Joke:: ${data.joke}</h2>

      `;
      jokes.style.border = 'solid' ;
    }

  }

  // console.log(jokes);
  // jokes.innerHTML = `<h1>hello</h1>`;

});

