# Kofile Challenge

This project was created in order to complete the challenge provided by Kofile. Details of the challenge can be found [here](https://gist.github.com/ericve25/4058b6625fc0976700b88bd0135eb060).

## Summary

The challenge is broken up into 3 parts. The first and second part are simple console output tasks. The remaining third part receives JSON formatted data, does calculation and summarization and returns the data.

## Configuration

Perform the following step(s) to set up the environment to run the tasks:
  1. Select a folder to clone the repository to and cd to that directory in the terminal
  2. Run 'git clone https://github.com/saivickna/kofile.git' to clone the repo
  3. Run 'cd kofile'
  4. Run 'npm install'

## Part 1: Fees

Perform the following step(s) to output the fee calculations:
  1. Run 'npm run fees'
  2. Verify that the output of the data is in the following format:

```
Order ID: <order number>  
   Order item <type>: $<price>
   Order item <type>: $<price>
   ..
   ..

   Order total: $<total>
```

## Part 2: Distribution

Perform the following step(s) to output the dist calculations:
  1. Run 'npm run dist'
  2. Verify that the output of the data is in the following format:

```
Order ID: <order number>  
  Fund - <fund name>: $<amount>
  Fund - <fund name>: $<amount>
  ..  
  ..  

Order ID: <order number>
  Fund - <fund name>: $<amount>
  Fund - <fund name>: $<amount>
  ..  
  ..  
  ..  

Total distributions:
  Fund - <fund name>: $<amount>
  Fund - <fund name>: $<amount>
  ..  
  ..
```
## Testing

Perform the following step(s) to verify the server application is working as expected:
  1. Run 'npm test'
  2. Verify that all the tests are passing and has an output similar to:

```
  Kofile Challenge
    Error Tests
      √ Returns a 404 with an invalid endpoint
      √ Returns a 400 if order data is not provided for the order price endpoint
      √ Returns a 400 if order data is not provided for the order dist endpoint
      √ Returns a 500 if order data is not valid for the order price endpoint
      √ Returns a 500 if order data is not valid for the order dist endpoint
    Order Price
      √ Returns a 200 if order data is valid for the order price endpoint
      √ Returns JSON data if order data is valid for the order price endpoint
    Order Dist
      √ Returns a 200 if order data is valid for the order dist endpoint
      √ Returns JSON data if order data is valid for the order dist endpoint


  9 passing (93ms)
```

## Part 3

Perform the following step(s) to run the server application:
  1. Run 'npm start'
  2. Using curl or Postman, create post requests to the `/orderPrice` and `/orderDist` endpoints using data that followings the following structure:

```
[
  {
    "order_date": <Order date (mm/dd/yyyy)>,
    "order_number": <Order number>,
    "order_items": [
      {
        "order_item_id": <id>,
        "type": <type of order>,
        "pages": <number of pages>
      },
      ...
    ]
  },
  ...
]
```