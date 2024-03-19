This is a simple http server that logs request params and payload to the console. It's intended for use in developing an asynchronous API that generates calllbacks,
but can be used for any purpose where you need to log the details of an HTTP request.

## Usage
Install requirements, `npm i`

Start the server `npm run start`

This will start an http server on port 9000, requests with any valid http method will be logged to console thusly:

```
METHOD: POST
QUERY:
{ foo: 'bar' }
BODY:
{
  name: 'Callback Server',
  version: '1.0.0',
  requirements: [ 'express', 'nodeJS' ],
  usage: 'See README'
}
```
