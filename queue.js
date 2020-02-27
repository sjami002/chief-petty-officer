class Queue = {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove(record){
        this.data.pop();
    }
}