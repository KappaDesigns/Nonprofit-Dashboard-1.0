const redis = require('redis');
const client = redis.createClient();

// Theory
/*
    Create a hashmap in redis which is page:id this stores the html class or ids
    of text and image elems

    ________
    | Spec |
    --------

    - id of page would be the page name in nav/url. Consider storing in custom
    data-attribute on the body of each page?

    - html ids would probably be better option due to the uniqueness. Consider
      custom data-attribute on text/img elems for ease of access

    - Store with string. String should be prefixed by the node type e.g [TXT]: or
      [IMG]: in order to parse where values go front end

        Jquery Psuedo
        key -> key from redis hashmap
        value -> get from key
        prefix -> value split : index 0
        data -> value split : index 1

        if (prefix === [TXT])
          $(key) text = data
        else
          $(key) src = data

    ---------------------------------------------------------------------------
      Testing
    ---------------------------------------------------------------------------

    To garuntee results create mock html in console that is a struct that is
    either txt or img, and contains some data field.

     This can be initialized in start

*/


client.on('error', (err) => {
  console.log(`Error: ${err}`);
});
