# Prueba Técnica - Jr. Backend Developer

Hola,

Gracias por la oportunidad. Este repositorio contiene las respuestas a la prueba técnica, tanto en este archivo `README.md` como en el código fuente que ilustra cada una de las soluciones propuestas.

## Cómo Ejecutar el Proyecto

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/JoelCabrera18/prueba-backend.git
    cd prueba-backend
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

4.  **Iniciar el servidor:**
    ```bash
    npm start
    ```
    El servidor estará corriendo en `http://localhost:3001`, el puerto se configura en el archivo `.env`.

---

## Respuestas a la Prueba



### 1. Verbo de API para Lectura Rápida

*   **Respuesta Correcta:** `1. GET`
*   **Justificación:** El verbo `GET` es el estándar para la recuperación de datos. Es semánticamente correcto, idempotente y, crucialmente, sus respuestas pueden ser cacheadas, lo que lo convierte en la opción más performante para operaciones de solo lectura.
*   **Ilustración en Código:** He implementado un endpoint `GET /api/trades` para recuperar órdenes de trading.
    *   **Ruta:** `src\orders\infraestructure\routes\order.router.ts`
    *   **Controlador:** `src\orders\infraestructure\controllers\order.controller.ts`
    *   **Servicio:** `src\orders\aplication\services\order.service.ts`
    *   **Respositorio Implementado:** `src\orders\infraestructure\repositories\mssql-order.repository.ts`
    *   **Prueba:** `curl http://localhost:3001/api/orders`

### 2. Ruta de API para un Contacto Único

*   **Respuesta Correcta:** `2. /contacts/{contact_id}`
*   **Justificación:** Esta estructura sigue la convención estándar de REST. Utiliza el sustantivo plural para la colección (`contacts`) y un parámetro para el identificador único, haciéndola predecible y escalable.
*   **Ilustración en Código:** He creado la ruta `GET /api/contacts/:contactId`.
    *   **Ruta:** `src\customers\infraestructure\routes\customer.router.ts`
    *   **Prueba (demostrando también la Pregunta 4):**
        ```bash
        # Usando un UUID de ejemplo en lugar de texto abstracto
        curl http://localhost:3001/api/contacts/af9b499c-649c-4848-81d7-fb7fbcf3628f
        ```

### 3. Código de Error para Fallos de Autenticación

*   **Respuesta Correcta:** `4. 401 if the user doesn't exist or if the password is wrong.`
*   **Justificación:** Devolver un código `401 Unauthorized` en ambos casos previene los ataques de enumeración de usuarios, ya que no se revela si el fallo fue por el usuario o la contraseña. Es la práctica de seguridad estándar.
*   **Ilustración en Código:** El endpoint `POST /api/auth/login` devuelve `401` para cualquier credencial inválida.
    *   **Controlador:** `src\auth\infraestructure\controllers\auth.controller.ts`
    *   **Prueba:** Las pruebas se realizaron con el programa `Postman`
        ```bash
        #Endpoint 
        http://localhost:3001/api/auth/login

        # Usuario correcto
        {
            "username": "joeldavid78",
            "password": "joel1234"
        }

        # Usuario incorrecto
        {
            "username": "joeldavid78",
            "password": "asdfasdfasd"
        }
        ```

### 4. Documentación con UUIDs de Ejemplo

*   **Respuesta Correcta:** `1. TRUE`
*   **Justificación:** Usar un ejemplo con el formato correcto (un UUID falso pero válido) es mucho más claro e informativo para el desarrollador que un texto genérico como "UUID". Muestra el formato esperado de un vistazo.
*   **Ilustración en Código:** En la sección de la **Pregunta 2** de este mismo README.

### 5. Responsabilidad del Método `handleErrors`

*   **Respuesta Correcta:** `2. Check for the presence of an error. If it exists, throw an exception with the error.`
*   **Justificación:** Lanzar una excepción es la forma explícita y robusta de señalar una condición de error. Esto detiene el flujo normal y obliga al código que llama a manejar la situación, evitando efectos secundarios ocultos.
*   **Ilustración en Código:** En el `authController`, método `login` se encarga de ejecuatar el proceso de autenticacion, dentro de `try...catch` se capturan todas las excepciones que generen a lo largo del proceso, primero se comprueban si las credenciales cumplen con estandares basico, que no vengan vacias las variables de la credencial (se pueden agregar mas validaciones), despues se consultan las credenciales y se comparan las claves, la que se ha guardado previamente y la que viene del formulario, en el `AuthService` se orquesta toda la logica de negocio necesaria para loguear a alguien, si en algun paso falla el proceso automaticamente se propaga una excepcion y se controla el error en `handleError`, este metodo envia al usuario el resultado del proceso, si todo ha ido bien, se devuelve la informacion del usuario con un token que se puede usar en una app Frontend, sino la excepcion generada a lo largo del proceso, en la ruta `src\auth\domain\exceptions` se pueden ver las posibles excepciones que se devuelven si falla el proceso.
    *   **Controlador:** `src\auth\infraestructure\controllers\auth.controller.ts`
    *   **Servicio:** `src\auth\application\services\auth.service.ts`
    *   **Repositorio:** `src\auth\infraestructure\repositories\mssql-auth.repository.ts`
    *   **Entidad:** `src\auth\domain\entities\auth.entity.ts`

### 6. Reutilización de Código de Manejo de Errores

*   **Respuesta Correcta:** `2. Make a trait to handle errors so it'll collect errors in any class that uses it.`
*   **Justificación:** Un `trait` (o un patrón equivalente como un *mixin* o un módulo helper en JavaScript) es ideal para compartir una implementación común entre clases no relacionadas, promoviendo el principio DRY (Don't Repeat Yourself).
*   **Ilustración en Código:** He creado un módulo `error-handler` que exporta una función `handerAuthError`. Este módulo es importado y utilizado tanto por `AuthController`, si el controlador tuviera mas funcionalidades, como por ejemplo, recuperar contraseseña o metodo relativos, el `error-handler` podria exportar las funciones necesarias para solventar la necesidad de controllar la excepción, no solo en este controlador, sino donde se lo necesite.
    *   **Módulo "Trait":** `src\utils\modules\error-handler.module.ts`
    *   **Uso:** `src\auth\infraestructure\controllers\auth.controller.ts`

### 7. Nomenclatura de Métodos

*   **Respuesta Correcta:** `3. parseDataForProducts()`
*   **Justificación:** Los nombres de los métodos deben describir su propósito (`qué` hacen) y no su implementación (`cómo` lo hacen). `parseDataForProducts()` es conciso, claro y se centra en el resultado.
*   **Ilustración en Código:** He creado la clase `AuthEntity` con sus propiedades privadas, metodo `createCredential` lo hice estatico para poder contruir el objeto y cuando use el objeto `AuthEntity`.
    *   **Clase:** `src\auth\domain\entities\auth.entity.ts`
    *   **Uso:** `src\auth\infraestructure\repositories\mssql-auth.repository.ts`

### 8. Estrategia para Almacenar Credenciales

*   **Respuesta Correcta:** `4. Put them in a .env file, load data from it into a configuration system, then request the credentials from a database service provider.`
*   **Justificación:** Esta es la práctica estándar de la industria (Twelve-Factor App). Separa estrictamente la configuración del código, es seguro (las credenciales no se versionan) y es flexible para diferentes entornos.
*   **Ilustración en Código:** El proyecto implementa este flujo completo:
    1.  Hay un archivo `.env` (ignorado por Git) para las credenciales, para esta prueba por unica vez subire al repositorio el `.env`.
    2.  La librería `dotenv` carga estas variables en `index.ts`.
    3.  El módulo `src\index.ts` actúa como el sistema de configuración, leyendo `process.env`.
    4.  El `MSSQLDatabase` actúa como un "service provider" que lee el archivo `.env` el cual contiene las credenciales y datos de configuracion para la clase.
    *   **Archivos relevantes:** `.env`, `src\index.ts`, `src\utils\classes\mssql-database.util.ts`.