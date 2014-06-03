omphaloskepsis
==============

Example of using [Temboo APIs](https://temboo.com/library/Library/Labs/GoodCitizen/Civic/]) to find your local officials, [Connect](http://www.senchalabs.org/connect/) and [Connect-rest](https://github.com/imrefazekas/connect-rest).

The following URL will get  the geocode for 104 Franklin St., New York NY 10013 (spaces are automaticaly urlencoded by Chrome)

```no-highlight
 https://host.domain.com/geocode/104 Franklin St., New York NY 10013
```

The following URL will get  details about the civic representative for 104 Franklin St., New York NY 10013 (spaces are automaticaly urlencoded by Chrome)

```no-highlight
https://host.domain.com/civic/104 Franklin St., New York NY 10013
```

If you don't enter any parameters, the value defaults to "104 Franklin St., New York NY 10013"

I don't have a UI for it at the moment so you're better off using something like [Postman](http://www.getpostman.com/) if you want to see the prettified JSON results.
