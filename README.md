## OBJETIVO DEL EJERCICIO

Reconocer los elementos fundamentales del Domain Object Model y los mecanismos para
la manipulación de elementos en un documento html
Conocer los conceptos de Herencia y Cadena de Prototipos en la Programación Orientada
a Objetos

## PROBLEMA

Aduana de Chile, necesita crear un software que registre el ingreso de las distintas
empresas que realizan importaciones, además de clasificarlas por id de registro, nombre y
rut. Aduanas también requiere saber el total de importaciones de la empresa.

Por otro lado, se necesita dejar registro de las importaciones de cada empresa. Estas deben
ser registradas por id de importación, producto, número de productos y precio unitario

Sumado a esto Aduanas de chile solicita poder diferenciar las distintas empresas que
ingresan sus importaciones por rubro de importación (minería, agricultura, etc.) y por
tamaño de importador (pequeño, mediano o grande)

Al desarrollo anterior se debe integrar a la creación de un formulario para el ingreso de
empresas. El formulario debe filtrar y advertir al usuario si las mercancías se pueden
importar o no y si son sujetas a visaciones, certificaciones o vistos buenos para su
importación. Referencia en:

- https://www.aduana.cl/todas-las-preguntas-frecuentes-para-importaciones/aduana/2007-02-28/161116.html

Junto a esto se debe mostrar una tabla y/o dahsboard con el detalle de cada producto id
de registro, producto, número de productos y precio unitario. Esta tabla debe desplegarse
con un botón que al hacer click muestre una modal con la información detallada del total
de las importaciones de la empresa.

## REQUERIMIENTOS

[x] 1. Crear todo el código usando ES6. (1 punto)

2. Genera un diagrama UML de la relación de ambas Clases (se recomienda el uso de
   www.drawio.com). (1 punto)

[x] 3. Crear una Clase para cada objeto. (2 puntos)

4. Crear los siguientes métodos: (3 puntos)
  [x] a. Agregar Importación
  [x] b. Suma total de importaciones
   c. Suma total por el número de productos y su precio unitario

5. Generar una clase extendida que herede los atributos de los importadores y que
   diferencie a estos por rubro y tamaño de importador (3 puntos)

6. Generar un formulario que filtre los inputs según las condiciones de importación
   de visación o prohibición. (1 punto)

7. Mostrar una tabla con la información de las importaciones de las empresas y sus
   atributos (4 puntos)
   Requerimiento opcional
   
8. Generar un dashboard dinámico que resuma la información para cada empresa
   seleccionada
   El trabajo debe ser subido en formato zip, rar o archivo de texto con URL del repositorio

## RECURSOS BIBLIOGRÁFICOS

- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes
- https://www.freecodecamp.org/espanol/news/programacion-orientada-a-objectos-en-javascript-explicado-con-ejemplos/
