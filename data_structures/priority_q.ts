const minPrioryty = 10;
const maxPriority = 0;

const priorityQ = [
  { name: 'Priority 1', priority: 1, run: function () { console.log(this.name) } },
  { name: 'Priority 5', priority: 5, run: function () { console.log(this.name) } },
  { name: 'Priority 7', priority: 7, run: function () { console.log(this.name) } },
  { name: 'Priority 3', priority: 3, run: function () { console.log(this.name) } },
  { name: 'Priority 9', priority: 9, run: function () { console.log(this.name) } },
  { name: 'Priority 0', priority: 0, run: function () { console.log(this.name) } },
  { name: 'Priority 2', priority: 2, run: function () { console.log(this.name) } },
  { name: 'Priority 6', priority: 6, run: function () { console.log(this.name) } },
  { name: 'Priority 4', priority: 4, run: function () { console.log(this.name) } },
  { name: 'Priority 8', priority: 8, run: function () { console.log(this.name) } },
  { name: 'Priority 10', priority: 10, run: function () { console.log(this.name) } }
];

const quiqSortByPriority = array => {
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
  return quiqSortByPriority(left).concat(pivot, quiqSortByPriority(right));
}

// for the testing purpose; has to be infinity loop
const taskRuner = array => {
  if (!array.length) return;
  const sortedQByPriority = quiqSortByPriority(array);
  sortedQByPriority[0].run();
  sortedQByPriority.shift();
  return taskRuner(sortedQByPriority);
}

taskRuner(priorityQ);
