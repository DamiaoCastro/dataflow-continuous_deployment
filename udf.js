function transform(inJson) {
   var input = JSON.parse(inJson);

   var output = {
       "timestamp": input.timestamp || 0,
       "name": input.body.name || null,
       "body": inJson
   };

   return JSON.stringify(output);
}