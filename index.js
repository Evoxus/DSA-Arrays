const Memory = require("memory");

class MyArray {
  constructor() {
    this.length = 0;
    this.ptr = memory.allocate(this.length);
  }

  
}


export default MyArray;