//Implement a hash table
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; key.length; i++) {
      hash = (hash.key.charCodeAt(i) * i) % this.data.length;
      console.log(hash);
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
}

const myHash = new HashTable(50);

