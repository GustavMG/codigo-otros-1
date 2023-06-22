const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se corrigió el tipo de selector del name y del blog a class
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  //Se eliminó el await ya que NO estamos trabajando con funciones asincronas
  const response = await fetch(`${usersEndpoint}/${username}`)
  //Se anexaron los metodos de fetch, los .then() y .catch()
    .then(respuesta => {
      //Se tuvo que verificar la respuesta del estado de la solicitud
      // https://developer.mozilla.org/es/docs/Web/API/Response
      if (respuesta.ok) {
        return respuesta.json()//Convertimos en un JSON los datos que "respondió" la api que vienen como cadena
      }
      else {
        //capturamos el error del código de estado
        // https://developer.mozilla.org/es/docs/Web/HTTP/Status/404?utm_source=mozilla&utm_medium=devtools-netmonitor&utm_campaign=default
        throw new Error('Error al obtener los datos(Error 404), la solicitud falló con el código: ' + respuesta.status);
      }
    })
    .then(pintarDOM => {   //almacenamos los datos obtenidos en una función flecha que obtiene en una variable llamada pintarDOM los datos de la API
      console.log(pintarDOM);//Imprimimos TODO el objeto
      // Se cambiaron las comillas dobles por backticks para activar las plantillas literales
      //Para poder "pintar el DOM" debemos decirle a las plantillas litarales que van a tomar los valores del objeto pintarDOM y NO de data que esta validando la conexión con la api como estaba al principio
      $n.textContent = `${pintarDOM.name}`;
      $b.textContent = `${pintarDOM.blog}`;
      $l.textContent = `${pintarDOM.location}`;
    })
    .catch(error => {
      handleError(error);
    });
    //Se añadió el retorno de la función ya que el metodo fetch se colocó dentro de una variable, pendiente saber pq se optó esto si ya se encontraba dentro de una función y no se repite código
  return response
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

//Se hizo pruebas de que los datos del usuario stolinski sean obtenidos correctamente lo cual funciona
//Se llamo unicamente a la función dandole el parámetro de entrada de un nombre de usuario
displayUser('stolinskii');