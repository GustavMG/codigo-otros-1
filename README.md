# codigo-otros-1
Repositorio para tarea revisión de codigos externos: "Código de otros 1" gestinada por Generation Mexico

Del usuario stolinski se obtienen los atributos de:
-nombre
-blog
-location

Se requirió verificar la respuesta del estado de la solicitud ya que siendo la respuesta del método GET 200 o 404, esta se toma como "respuesta exitosa" pq hubo una respuesta.
Verificamos si hay una respuesta ok ya que esta propiedad contiene un estado indicando si la respuesta fue exitosa (estado en el rango 200-299) o no.
Si tenemos respuesta entonces retornamos los datos como un objeto para su posterior uso, en caso de NO tener respuesta procedemos a lanzar una excepción y le decimos que hará si no se conecta..., siendo en este caso la impresión de un texto concatenando el estatus de la respuesta.

![code2](https://github.com/GustavMG/codigo-otros-1/assets/94927159/5a656d94-283c-4f96-8f3b-3af72b2cc13f)
Verificar los siguientes recursos:
https://developer.mozilla.org/es/docs/Web/API/Response
https://developer.mozilla.org/es/docs/Web/HTTP/Status/404?utm_source=mozilla&utm_medium=devtools-netmonitor&utm_campaign=default

Almacenamos los datos obtenidos en una función flecha que obtiene en una variable llamada pintarDOM los datos de la API para posteriormente poder accesar a sus .atributos y mediante etiquetas <p> pintar en el DOM.
Para trabajar con los errores el metodo .catch() invoca a la función function handleError(err) que se encargá de pintar el DOM e imprimir en consola el error.
![code3](https://github.com/GustavMG/codigo-otros-1/assets/94927159/6de587f8-5c54-4bdd-8df0-5b89ec60711f)

 
Invocando la función "displayUser('stolinskii');" y dandole un parámetro de entrada válido (un usuario registrado en la API) los atributos se pintan en el DOM .

![image](https://github.com/GustavMG/codigo-otros-1/assets/94927159/5668acdc-c95b-4c68-ab8a-b3bec64f5237)

Se imprime el objeto completo en consola.

![image](https://github.com/GustavMG/codigo-otros-1/assets/94927159/054f8b9f-3772-4906-ba64-d1c0bf0f36c0)

Se pinta en el DOM en la primera etiqueta <p> el texto "Algo salió mal: " concatenando con el error obtenido.
![image](https://github.com/GustavMG/codigo-otros-1/assets/94927159/cfdd9ab8-69f5-4ea4-ab4b-c4d0a114451c)

Se imprime en consola la frase "OH NO!" y posteriormente la impresión de un texto concatenando el estatus de la respuesta.
Estamos pudiendo ejecutar el error del metodo .catch() en la funcion "handleError(err)" ya que anteriormente creamos la excepcion del error con: throw new Error.
![image](https://github.com/GustavMG/codigo-otros-1/assets/94927159/b452bcfb-48f3-4f79-8c88-9a6e4a872195)

Última actualización: 22/06/23 01:38hrs
