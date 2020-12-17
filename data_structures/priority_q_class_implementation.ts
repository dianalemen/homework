class PriorityQueue {
  quiqSortByPriority(array) {
    if (array.length < 2) return array;
    let pivot = array[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < array.length; i++) {
      if (pivot.priority > array[i].priority) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    return this.quiqSortByPriority(left).concat(pivot, this.quiqSortByPriority(right));
  }

  insert(priority, item) {
    this.taskQ = this.quiqSortByPriority([...this.taskQ || [], { item, priority }]);
  }

  getHighestPriority() {
    return this.taskQ[0].item;
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
