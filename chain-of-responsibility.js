var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Object.defineProperty(Handler.prototype, "successor", {
        get: function () {
            return this._successor;
        },
        set: function (successor) {
            this._successor = successor;
        },
        enumerable: false,
        configurable: true
    });
    Handler.prototype.handleRequest = function (msg) { };
    ;
    return Handler;
}());
var ConcreteHandlerA = /** @class */ (function (_super) {
    __extends(ConcreteHandlerA, _super);
    function ConcreteHandlerA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteHandlerA.prototype.handleRequest = function (req) {
        if (req > 0) {
            console.log("Hanlder A process " + req);
        }
        else {
            this.successor.handleRequest(req);
        }
    };
    return ConcreteHandlerA;
}(Handler));
var ConcreteHandlerB = /** @class */ (function (_super) {
    __extends(ConcreteHandlerB, _super);
    function ConcreteHandlerB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteHandlerB.prototype.handleRequest = function (req) {
        if (req < 0) {
            console.log("Hanlder B process " + req);
        }
        else {
            this.successor.handleRequest(req);
        }
    };
    return ConcreteHandlerB;
}(Handler));
var ConcreteHandlerC = /** @class */ (function (_super) {
    __extends(ConcreteHandlerC, _super);
    function ConcreteHandlerC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteHandlerC.prototype.handleRequest = function (req) {
        if (req === 0) {
            console.log("Hanlder C process " + req);
        }
        else {
            this.successor.handleRequest(req);
        }
    };
    return ConcreteHandlerC;
}(Handler));
(function main() {
    var reqA = new ConcreteHandlerA();
    var reqB = new ConcreteHandlerB();
    var reqC = new ConcreteHandlerC();
    reqA.successor = reqB;
    reqB.successor = reqC;
    reqA.handleRequest(0);
    reqA.handleRequest(1);
    reqA.handleRequest(-1);
})();
