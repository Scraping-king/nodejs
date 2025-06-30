const buffer = new Buffer.from("Desye");
buffer.write("Gir"); //overqrite
console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());
