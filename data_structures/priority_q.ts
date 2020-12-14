const priorityQ = [];

const insert = task => {
  priorityQ.push(task);
}

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
let taskRunnerIteration = 0;
const taskRuner = array => {
  if (!array.length) return;
  const sortedQByPriority = quiqSortByPriority(array);

  console.log('on the', taskRunnerIteration, 'Q length -->', sortedQByPriority.length);
  taskRunnerIteration++;
  sortedQByPriority[0].item.run();
  sortedQByPriority.shift();
  return taskRuner(sortedQByPriority);
}

insert({ priority: 1, item: { run: function () { console.log(this.name) }, name: 'Priority 1' }});
insert({ priority: 5, item: { run: function () { console.log(this.name) }, name: 'Priority 5' }});
insert({ priority: 7, item: { run: function () { console.log(this.name) }, name: 'Priority 7' }});
insert({ priority: 3, item: { run: function () { console.log(this.name) }, name: 'Priority 3' }});
insert({ priority: 9, item: { run: function () { console.log(this.name) }, name: 'Priority 9' }});
insert({ priority: 0, item: { run: function () { console.log(this.name) }, name: 'Priority 0' }});
insert({ priority: 2, item: { run: function () { console.log(this.name) }, name: 'Priority 2' }});
insert({ priority: 6, item: { run: function () { console.log(this.name) }, name: 'Priority 6' }});
insert({ priority: 4, item: { run: function () { console.log(this.name) }, name: 'Priority 4' }});
insert({ priority: 8, item: { run: function () { console.log(this.name) }, name: 'Priority 8' }});
insert({ priority: 10, item : { run: function () { console.log(this.name) }, name: 'Priority 10' }});

taskRuner(priorityQ);
