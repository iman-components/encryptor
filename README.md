
# encryptor

  Encrypt a credit card number. Takes a modulus and public key and returns a token

## Installation

    $ component install iman-components/encryptor

## API

	// require encryptor
	var Encryptor = require('encryptor');

	// create a new Encryptor passing in modulus and exponent parameters
	var encryptor = new Encryptor(modulus, exponent);

	// call encrypt method
	encryptor.encrypt(number);

## License

  MIT
