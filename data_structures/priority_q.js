var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var priorityQ = [];
var insert = function (task) {
    var closesSmallerIndex = priorityQ.findIndex(function (item) { return item.priority >= task.priority; });
    if (closesSmallerIndex === -1) {
        return priorityQ = __spreadArrays(priorityQ, [task]);
    }
    priorityQ = __spreadArrays(priorityQ.slice(0, closesSmallerIndex), [task], priorityQ.slice(closesSmallerIndex));
};
// for the testing purpose; has to be infinity loop
var taskRunnerIteration = 0;
var taskRuner = function (array) {
    if (!array.length)
        return;
    console.log('on the', taskRunnerIteration, 'Q length -->', priorityQ.length);
    taskRunnerIteration++;
    priorityQ[0].item.run();
    priorityQ.shift();
    return taskRuner(priorityQ);
};
insert({ priority: 1, item: { run: function () { console.log(this.name); }, name: 'Priority 1' } });
insert({ priority: 5, item: { run: function () { console.log(this.name); }, name: 'Priority 5' } });
insert({ priority: 7, item: { run: function () { console.log(this.name); }, name: 'Priority 7' } });
insert({ priority: 3, item: { run: function () { console.log(this.name); }, name: 'Priority 3' } });
insert({ priority: 9, item: { run: function () { console.log(this.name); }, name: 'Priority 9' } });
insert({ priority: 0, item: { run: function () { console.log(this.name); }, name: 'Priority 0' } });
insert({ priority: 2, item: { run: function () { console.log(this.name); }, name: 'Priority 2' } });
insert({ priority: 6, item: { run: function () { console.log(this.name); }, name: 'Priority 6' } });
insert({ priority: 4, item: { run: function () { console.log(this.name); }, name: 'Priority 4' } });
insert({ priority: 8, item: { run: function () { console.log(this.name); }, name: 'Priority 8' } });
insert({ priority: 10, item: { run: function () { console.log(this.name); }, name: 'Priority 10' } });
taskRuner(priorityQ);
