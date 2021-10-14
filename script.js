function Leer() {
  const peli = document.getElementById("input").value;
  //obtain an apikey on this web
  //http://www.omdbapi.com/apikey.aspx
  const key='6ab2ae6e';
  const api_url=`http://www.omdbapi.com/?s=${peli}&apikey=${key}`
  buscar1(api_url);
}

function buscar1(api_url){

  fetch(api_url)
    .then(data => {return data.json()})
    .then(resultado=>{(resultado);

          const {Search=[]} = resultado;
        
          console.log(Search)
          

         
          
          document.getElementById("movie").innerHTML='';

          Search.map((p)=>{
              document.getElementById("movie").innerHTML+=`
              
              <div style="margin-top:10px;">
                       <img width='100%' src=${p.Poster} alt="No hay poster"></img>
      
                <div id="data-sheet">
                   <div id="year">Year: ${p.Year}</div>
                   <div id="type">Type: ${p.Type}</div>
                </div>
                </div>  `;         
          ;
          })
    });


}
