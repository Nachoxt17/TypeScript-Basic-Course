/**+-CURSO DE TYPESCRYPT:_ LO BÁSICO:_En este Curso vamos a Aprender TypeScript viendo las Diferencias entre el mismo con JavaScript, por lo que se debe saber JS ES6 como Prerequisito.
 *
 * +-La Primera de estas diferencias es que los Archivos de TypeScript tienen extensión ".ts" en vez de ".js", y a estos tenemos que compilarlos. Para hacer esta compilación, abrimos una
 * Terminal de Comandos dentro de la Carpeta de Nuestro Proyecto y Ejecutamos el Comando "tsc -init" 1 SOLA VEZ al Inicio del Proyecto que creará un Archivo "tsconfig.json" que tendrá
 * Todas las Configuraciones de Typescript en este Proyecto y luego a donde esté Nuestro Archivo ".ts" y Ejecutamos el Comando "tsc *fileName*" para compilar el Archivo ".ts" que queramos,
 * lo que creará otro Archivo Igual al Nuestro PERO con terminación ".js" (Va a ser Código con la misma Funcionalidad pero en Javascript Puro).
 *
 * +-Para Automatizar el Proceso de Compilación a JS de Nuestros Archivos de TS, deberemos Ejecutar en la Terminal el Comando "tsc -w" cada vez que volvamos a abrir el Proyecto así no tenemos
 * que Ejecutar "tsc *fileName*" cada vez que hagamos un Cambio.*/

/**+-(1)-DECLARACIÓN DE VARIABLES EN TS:_ En TS las Variables se Declaran con la Misma Sintaxis que JS vES6 en Adelante CON LA DIFERENCIA de que se puede Espicificar el Tipo de Dato de la Var
 * poniendo un ": DataTypeOfVar" al lado del Nombre de la variable, así:_.*/

let sayHi: string = "Hello Beautyfull World";
/**+-(1)-Tener en Cuenta que de todas formas si no se especifica el tipo de Dato, TS lo detecta Automáticamente al Asignarle su 1er Valor a la LET. Si a una LET que en un Principio le Asignamos
 * una "string" después le Asignamos un valor = "number" o cualquier otro que no sea el Mismo Tipo de Dato que el del Valor Original, nos dará Error.*/

let ten = 10;

const greetings = () => {
  console.log(sayHi);
  console.log(ten);
};

greetings();

/**+-(1)-En TS También existe el Tipo de Dato "any" que se le asigna a una LET para que se le pueda Asignar y Cambiar cualquier tipo de valor sin que de Error.*/

let random: any;
random = 123;
random = "random";
random = ["random", 123];

/**+-(2)-DEFINICIÓN DE CLASES Y OBJETOS EN TS:_ Las Clases en TS Se crean Igual que en JS PERO con la Diferencia de que se le debe asignar Obligatoriamente el Tipo de Dato a los Parámetros de la
 * Clase, y los mismos pueden ser Públicos(Por Defecto son así, se los Define así Escribiendo los Parámetros de Forma Normal o la Palabra "public" al Inicio) o Privados(se denominan poniéndole
 * la palabra "private" al principio del Parámetro) a los Cuales Solo se Puede Acceder con un Método Especial propio, como Ejemplificaremos a Continuación:_.*/

class Person {
  public name: string;
  private surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  getSurname(): string {
    return this.surname;
  }
}

let person1 = new Person("Jhon", "Smith");
console.log(person1.name);
console.log(person1.getSurname());

/**+-(3)-INTERFACES EN TS:_ Son el Equivalente en TS a los Modelos de Datos en MongoDB/Mongoose, son Similares a las Classes o los Prototypes PERO estas 2 anteriores ya están Obsoletas incluso
 * en JS y los Modelos de Datos Interfaces y Types de TypeScript son más Fáciles y Llevaderos de Escribir y Leer. Más Info en:_
 *  https://medium.com/@jesusmurfontanals/typescript-para-que-sirven-los-types-y-interfaces-y-en-que-se-diferencian-bee0af17fffa .
 *
 * +-A continuación, vamos a ver Cómo se hace una Interface:_*/

interface User {
  userName: string;
  password: string;
  confirmPassword?: string /**+-El Símbolo "?" indica que este Valor es Opcional.*/;
}

/**+-(3)-Ahora crearemos una nueva LET siguiendo el Modelo de Interface(Interface Model) de User, similar a Crear un Nuevo Document a partir de un Model en MongoDB/Mongoose.*/
let user1: User = {
  userName: "Connor",
  password: "test123",
  confirmPassword: "test123",
};

console.log(user1);

/**+-(4)-GENERICS EN TS:_ Los GENERICS EN TS en crear Objects o Arrays y Especificar qué Tipos de Datos van a contener los Mismos, de forma que no podamos intentar meterle ningún Dato de
 *  otro Tipo, porque nos dará Error. Su Sintaxis es la Siguiente:_*/

let arrayOfNums: Array<number> = [1, 2, 3, 4];

//console.log(arrayOfNums.push("five")); +-Esto de aquí daría Error.

/**+-(5)-DECORADORES DE CLASSES, METHODS y ATRIBUTOS CON TS ( https://sodocumentation.net/es/typescript/topic/4592/decorador-de-clase ):_ Un decorador de clase es solo una función que toma a la
 * clase como su único argumento y la devuelve después de hacer algo con ella. ES UNA CARACTERÍSTICA EXPERIMENTAL, NO USAR POR AHORA.*/

// const SayHello = (target: Function): void => {
//   target.prototype.greetings = (): void => console.log("Hello from Decorators");
// };

// @SayHello
// class Hello {
//   constructor() {}
// }

// let hello1 = new Hello();
// hello1.SayHello();
