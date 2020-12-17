let priorityQ = [];

interface ItemInterface {
  run: () => void;
  name: string;
}

interface TaskInterface {
  priority: number;
  item: ItemInterface;
}

const insert = (task: TaskInterface) => {
  const closesSmallerIndex = priorityQ.findIndex(item => item. priority >= task.priority)
  if (closesSmallerIndex === -1) {
       return priorityQ = [...priorityQ, task]
  }
  priorityQ = [...priorityQ.slice(0, closesSmallerIndex), task, ...priorityQ.slice(closesSmallerIndex)]
}

// for the testing purpose; has to be infinity loop
let taskRunnerIteration: number = 0;
const taskRuner = array => {
  if (!array.length) return;

  console.log('on the', taskRunnerIteration, 'Q length -->', priorityQ.length);
  taskRunnerIteration++;
  priorityQ[0].item.run();
  priorityQ.shift();
  return taskRuner(priorityQ);
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
