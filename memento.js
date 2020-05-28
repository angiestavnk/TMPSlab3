var State = /** @class */ (function () {
    function State(value) {
        this._value = value;
    }
    Object.defineProperty(State.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            this._value = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return State;
}());
var Memento = /** @class */ (function () {
    function Memento(state) {
        this._state = state;
    }
    Object.defineProperty(Memento.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            this._state = newState;
        },
        enumerable: false,
        configurable: true
    });
    return Memento;
}());
var Originator = /** @class */ (function () {
    function Originator(state) {
        console.log(state.value);
        this._state = state;
    }
    Object.defineProperty(Originator.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            console.log(state.value);
            this._state = state;
        },
        enumerable: false,
        configurable: true
    });
    Originator.prototype.createMemento = function () {
        console.log("create " + this._state.value + " memento");
        return new Memento(this._state);
    };
    Originator.prototype.restoreMemento = function (memento) {
        console.log("restore " + memento.state.value);
        this._state = memento.state;
    };
    return Originator;
}());
var CareTaker = /** @class */ (function () {
    function CareTaker() {
    }
    Object.defineProperty(CareTaker.prototype, "memento", {
        get: function () {
            return this._memento;
        },
        set: function (memento) {
            // memento saved
            this._memento = memento;
        },
        enumerable: false,
        configurable: true
    });
    return CareTaker;
}());
(function main() {
    // Save check point
    var oldState = new State('check point');
    var originator = new Originator(oldState);
    var careTaker = new CareTaker();
    careTaker.memento = originator.createMemento();
    // Player dies
    var currentState = new State('die');
    originator.state = currentState;
    // Player reset to check point
    originator.restoreMemento(careTaker.memento);
    // Player gain medel
    var medalState = new State('get medal');
    originator.state = medalState;
    // Save
    careTaker.memento = originator.createMemento();
})();
