## ExpressJS Reverse Proxy

A simple reverse proxy to make API calls, hidding sensitive headers in client side.

## Before running

Create a .env file following the instructions on .env.example

### CAVEATS:

"API_REQUIRED_HEADERS" is a JSON array with objects with this shape {name: name, value: value} inside it.
It must to be stringyfied.

"LOG_LEVEL" accepts on of this: 'debug', 'info', 'warn', 'error', 'silent'

"ALLOWED_ORIGINS" is a comma-separated list of domains 
## How to run?

- npm install

- npm run start
