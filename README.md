
![Logo](https://res.cloudinary.com/dkhelyskt/image/upload/v1703066874/accrue_logo_ngot9b.png) 

# Accrue TypeScript Library

Accrue is a TypeScript library that provides convenient access to the Accrue API for managing various financial operations.



## Installation

Install my-project with npm

```bash
  npm install accrue
```
    
## Usage/Examples

- Initialization
```typescript
import { Accrue } from 'accrue';

const accrue = new Accrue({
  // configuration options
}, 'your-secret-key');

// OR
const accrue = new Accrue() // assuming you have a .env file with ACCRUE_SECRET_KEY variable
```

- Get Account Details
```typescript

async function getAccountDetails() {
  try {
    const details = await accrue.account.getAccountDetails();
    console.log('Account Balance:', details.accountBalance);
    console.log('Account ID:', details.id);
    console.log('Account address:', details.depositAddress);
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

getAccountDetails();

```
For more examples see the [examples](https://github.com/t-ega/Accrue-Typescript-SDK/tree/main/src/examples) folder

## API Reference

### Accrue Class

Initialize the Accrue SDK with optional configuration options and a secret key.

```typescript
constructor(config?: SdkOptions, secretKey?: string): Accrue
```
```typescript
interface SdkOptions  {
    errorHandler?: IErrorHandler;
    deserializer?: IResponseDeserializer;
    responseValidator?: IResponseValidation;
}

interface IErrorHandler {
    handleErrors(error: any): Promise<boolean>;
}

interface IResponseDeserializer { 
    deserialize<TReturnType>(action:string, response: AxiosResponse): Promise<TReturnType>;
}

interface IResponseValidation {
    validateResponse: (response: AxiosResponse) => Promise<any | null>;
}

```

### Account

Get account details.

```typescript
getAccountDetails(): Promise<IAccount>

interface IAccount {
    id: string
    accountBalance: number | null
    depositAddress: string | null
}

```

See the [examples](https://github.com/t-ega/Accrue-Typescript-SDK/tree/main/src/examples) section for more usage examples.
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## License

This library is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) - see the LICENSE file for details.

