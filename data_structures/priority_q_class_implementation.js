var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.taskQ = [];
    }
    PriorityQueue.prototype.insert = function (priority, item) {
        var closesSmallerIndex = this.taskQ.findIndex(function (item) { return item.priority >= priority; });
        if (closesSmallerIndex === -1) {
            return this.taskQ = __spreadArrays(this.taskQ, [item]);
        }
        this.taskQ = __spreadArrays(this.taskQ.slice(0, closesSmallerIndex), [item], this.taskQ.slice(closesSmallerIndex));
    };
    PriorityQueue.prototype.getHighestPriority = function () {
        return this.taskQ[0];
    };
    PriorityQueue.prototype.deleteHighestPriority = function () {
        this.taskQ.shift();
    };
    return PriorityQueue;
}());
var priorityQueue = new PriorityQueue();
priorityQueue.insert(1, { run: function () { console.log(this.name); }, name: 'Priority 1' });
priorityQueue.insert(5, { run: function () { console.log(this.name); }, name: 'Priority 5' });
priorityQueue.insert(7, { run: function () { console.log(this.name); }, name: 'Priority 7' });
priorityQueue.insert(3, { run: function () { console.log(this.name); }, name: 'Priority 3' });
priorityQueue.insert(9, { run: function () { console.log(this.name); }, name: 'Priority 9' });
priorityQueue.insert(0, { run: function () { console.log(this.name); }, name: 'Priority 0' });
priorityQueue.insert(2, { run: function () { console.log(this.name); }, name: 'Priority 2' });
priorityQueue.insert(6, { run: function () { console.log(this.name); }, name: 'Priority 6' });
priorityQueue.insert(4, { run: function () { console.log(this.name); }, name: 'Priority 4' });
priorityQueue.insert(8, { run: function () { console.log(this.name); }, name: 'Priority 8' });
priorityQueue.insert(10, { run: function () { console.log(this.name); }, name: 'Priority 10' });
var iteration = 0;
var runer = function (array) {
    if (!array.length)
        return;
    console.log('on the', iteration, 'Q length -->', priorityQueue.taskQ.length);
    iteration++;
    priorityQueue.getHighestPriority().run();
    priorityQueue.deleteHighestPriority();
    return runer(priorityQueue.taskQ);
};
runer(priorityQueue.taskQ);
