class Sorter {
  constructor() {
    this.elements = [];    
    function compareNum(a, b) {
      return a - b;
    }
    this.compareNum = compareNum;
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    
    this.sArr = [];
    indices = indices.sort((a, b) => a - b);
      
    indices.forEach((element, index) => {
      this.sArr[index] = this.elements[element];
    });

    this.sArr.sort(this.compareNum);
 
    indices.forEach((element, index) => {
      this.elements[element] = this.sArr[index];
    })

  }

  setComparator(compareNum) {
    this.compareNum = compareNum;
  }
}

module.exports = Sorter;

