# About

Simple sum web app in node.js because mm why not, eh? Posts to /test route given an x + y value, adds the two numbers. 

View demo with form here (https://rocky-atoll-30961.herokuapp.com/).

# Use case

Request (POST) 

``` json

{x: "2003213.23123", y: "213.4232"}
```

Response 

``` json
{
_x: "2003213.23123",
_y: "213.4232",
parsedX: 2003213.23123,
parsedY: 213.4232,
sum: 2003426.65443
}
```

Request (POST) 

``` json

{x: "bar", y: "foo"}
```

Response 
 
``` json
{
_x: "foo",
_y: "bar",
parsedX: false,
parsedY: false,
sum: "One or both of your numbers are invalid!"
}
```
