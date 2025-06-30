const EventEmitter = require("node:events"); //class
const emitter = new EventEmitter(); //object

//event listner

emitter.on("greet", function (name) {
  console.log(`Hello,${name}`);
});
//emitting the event
emitter.emit("greet", "DG");
