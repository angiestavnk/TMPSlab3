var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(uniqueID) {
        this.uniqueID = uniqueID;
    }
    ConcreteObserver.prototype.update = function () {
        console.log(this.uniqueID + " updates something");
    };
    return ConcreteObserver;
}());
function findObserver(obs, uniqueID) {
    var index = 0;
    var existed = obs.some(function (observer, idx) {
        index = idx;
        return observer.uniqueID === uniqueID;
    });
    return {
        existed: existed,
        index: index
    };
}
var Subject = /** @class */ (function () {
    function Subject() {
        this._observers = [];
    }
    Subject.prototype.registerObserver = function (ob) {
        var id = ob.uniqueID;
        if (findObserver(this._observers, id).existed) {
            return console.log("Observer " + id + " is already in list");
        }
        this._observers.push(ob);
        console.log("Observer " + ob.uniqueID + " is pushed into list");
        console.log(this._observers);
    };
    Subject.prototype.removeObserver = function (uniqueID) {
        var _a = findObserver(this._observers, uniqueID), existed = _a.existed, index = _a.index;
        if (existed) {
            this._observers.splice(index, 1);
            console.log("Observer " + uniqueID + " is removed from list");
        }
        else {
            console.log('Observer not existed');
        }
    };
    Subject.prototype.notifyObservers = function () {
        console.log('Subject notify all observers ');
        this._observers.map(function (observer) {
            observer.update();
        });
    };
    return Subject;
}());
(function main() {
    var subject = new Subject();
    var obA = new ConcreteObserver('A');
    var obB = new ConcreteObserver('B');
    var obC = new ConcreteObserver('C');
    subject.registerObserver(obA);
    subject.registerObserver(obA); // already existed
    subject.registerObserver(obB);
    subject.registerObserver(obC);
    subject.notifyObservers();
})();
