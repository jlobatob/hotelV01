//creación de función
//function JQuery(){
//}
//puedes llamar todo el documento con document , el cuerpo body, elemento #id, una clase com .clase, a este proceso se le llama selector
//jQuery('.clase')

//creación de función alias
//function $(){
//}
//puedes llamar todo el documento con document , el cuerpo body, elemento #id, una clase com .clase
//$('.clase')
//jquery no solo es una función es una clase

//esta sintaxix es un selector que nos devuelve un objeto
//$('.clase')

//por ejemplo
//$('.clase').text();

//por ejemplo si se modifica el parametro se reemplaza el texto
//$('.clase').text('Hola Hola');

//api.jquery.com 
//permite separar funcionalidad de contenido

//$(document).ready(function(){
//} );

//se espera a que cargue el documento completamente
$(document).ready(function(){
//con ready se crea la funcion a crear
document.addEventListener("deviceready", function()
			{
				window.location.href='#login';
				$('#regEnviar').click(function(){
					var nom=$('#regNom').val();
					var email=$('#regMail').val();
					var tel=$('#regTel').val();
					if(nom != '' && email != '' && tel != '')
						{
							navigator.notification.confirm("Nombre: " + nom + "Mail: " + email + "Teléfono: " + tel, function(botones){
							switch(botones)
							{
							case 1:
								navigator.notification.beep(2);
					
								break;
							case 2:
								navigator.notification.vibrate(500);
							break;
		
							}					
							}, "titutlo", "Beep, Vibrar, Salir" );
						}
					else
						{
						navigator.notification.alert('Todos los campos son requeridos', null, "Error de registro en los datos", "Aceptar");
					}
				});
			}, false);
		} );

		
		