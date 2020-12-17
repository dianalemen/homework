interface ItemInterface {
  run: () => void;
  name: string;
}

class PriorityQueue {
  taskQ = [];

  insert(priority, item: ItemInterface) {
    const closesSmallerIndex = this.taskQ.findIndex(item => item.priority >= priority)
    if (closesSmallerIndex === -1) {
         return this.taskQ = [...this.taskQ, item]
    }
    this.taskQ = [...this.taskQ.slice(0, closesSmallerIndex), item, ...this.taskQ.slice(closesSmallerIndex)]
  }

  getHighestPriority() {
    return this.taskQ[0];
  }

  deleteHighestPriority() {
    this.taskQ.shift();
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.insert(1, { run: function () { console.log(this.name) }, name: 'Priority 1' });
priorityQueue.insert(5, { run: function () { console.log(this.name) }, name: 'Priority 5' });
priorityQueue.insert(7, { run: function () { console.log(this.name) }, name: 'Priority 7' });
priorityQueue.insert(3, { run: function () { console.log(this.name) }, name: 'Priority 3' });
priorityQueue.insert(9, { run: function () { console.log(this.name) }, name: 'Priority 9' });
priorityQueue.insert(0, { run: function () { console.log(this.name) }, name: 'Priority 0' });
priorityQueue.insert(2, { run: function () { console.log(this.name) }, name: 'Priority 2' });
priorityQueue.insert(6, { run: function () { console.log(this.name) }, name: 'Priority 6' });
priorityQueue.insert(4, { run: function () { console.log(this.name) }, name: 'Priority 4' });
priorityQueue.insert(8, { run: function () { console.log(this.name) }, name: 'Priority 8' });
priorityQueue.insert(10, { run: function () { console.log(this.name) }, name: 'Priority 10' });

let iteration = 0;
const runer = array => {
  if (!array.length) return;

  console.log('on the', iteration, 'Q length -->', priorityQueue.taskQ.length);
  iteration++;
  priorityQueue.getHighestPriority().run();
  priorityQueue.deleteHighestPriority();
  return runer(priorityQueue.taskQ);
}

runer(priorityQueue.taskQ);
