<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# API REST FIBONACCI

Este proyecto esta hecho en NestJS, primero instale las dependencias:

```console
npm i
```

Una vez instalada las dependencias inicie el server ejecutando el siguiente comando:

```console
npm run start
```

Luego puede realizar la petición desde **http://localhost:3000/fibonacci/{index}**

Dentro del service **AppService**, en el constructor de la clase se llama al metodo **generateFibonacci**, el cual cargara un array llamado **\_arrayFib** con los valores iniciales de la secuencia ([0, 1, 1, 2, 3, 5, 8, 13]). Para ello uso una variable llamada **limit** la cual inicia en 8.

```javascript

  private _limit = 8;

  private _generateFibonacci(start: number, addNewValue = false) {
    for (let i = start; i < this._limit; i++) {
      const value = this._arrayFib[i - 1] + this._arrayFib[i - 2];
      if (addNewValue) {
        this._arrayFib.push(value);
      } else {
        this._arrayFib[i] = value;
      }
    }
  }
```

Cuando se inicia el service, se cargaran los valores iniciales :

```javascript

  constructor() {
    this._generateFibonacci(2);
  }
```

En la función **getFibonacci** se captura el **indice** enviado de la petición, primero verificamos que exista un valor en nuestro array **\_arrayFib**, si existe retornamos el valor, de lo contrario lo ideal es volver a calcular el limite en base al indice enviado, de esa manera iremos cargando solo los nuevos valores necesarios al array **\_arrayFib** sin necesidad de volver a generar todas las secuencias desde cero.

```javascript

getFibonacci(index: number): number {
    const value = this._arrayFib[index];
    if (value) {
      return value;
    }
    const newLimit = Number(index) + 1 - this._limit;
    this._limit = this._limit + newLimit;

    this._generateFibonacci(this._arrayFib.length, true);

    return this._arrayFib[index];
  }
```
