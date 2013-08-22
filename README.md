
# encryptor

  Encrypt a credit card number.

  Returns an encrypted token.

## Installation

    $ component install iman-components/encryptor

## API

	// require encryptor
	var Encryptor = require('encryptor');

	// create a new Encryptor passing in modulus and exponent parameters
	var encryptor = new Encryptor(modulus, exponent);

	// call encrypt method on a creditcard number
	encryptor.encrypt(number);

  /**
    4111111111111111
    converts to
    9ae373d7fcfebb9ba27d711db7e3953b6f1424784d2620b46205494c148C9ae373d7fcfebb9ba27d711db7e3953b6f1424784d2620b46205494c148c57f19de8300293df9b1d54e732b5c398f9a9641cfba15bf4d6f07f2a04024fb1de5635d57e188f38ae6eeb02f27ec3be52cf3e9cb16f8d02195352543d0bcf216cfef16bde60a6d0b817a3b5c1d587b2905d34ed1e9958218a241d6194ac45d7e792
  **/
