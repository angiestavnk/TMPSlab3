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
var Colleague = /** @class */ (function () {
    function Colleague(mediator) {
        this.mediator = mediator;
    }
    Colleague.prototype.send = function (msg) {
        this.mediator.send(msg, this);
    };
    ;
    Colleague.prototype.receiveMsg = function (msg) {
        console.log(msg);
    };
    ;
    return Colleague;
}());
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator() {
    }
    ConcreteMediator.prototype.send = function (msg, sender) {
        if (sender === this.A) {
            this.A.receiveMsg(msg);
            this.B.receiveMsg(msg);
        }
        if (sender === this.B) {
            this.A.receiveMsg(msg);
        }
    };
    return ConcreteMediator;
}());
var ClassAColleague = /** @class */ (function (_super) {
    __extends(ClassAColleague, _super);
    function ClassAColleague(mediator) {
        return _super.call(this, mediator) || this;
    }
    ClassAColleague.prototype.send = function (msg) {
        console.log('A customized logic');
        _super.prototype.send.call(this, msg);
    };
    return ClassAColleague;
}(Colleague));
var ClassBColleague = /** @class */ (function (_super) {
    __extends(ClassBColleague, _super);
    function ClassBColleague(mediator) {
        return _super.call(this, mediator) || this;
    }
    ClassBColleague.prototype.send = function (msg) {
        console.log('B customized logic');
        _super.prototype.send.call(this, msg);
    };
    return ClassBColleague;
}(Colleague));
(function main() {
    var mediator = new ConcreteMediator();
    var a = new ClassAColleague(mediator);
    var b = new ClassBColleague(mediator);
    mediator.A = a;
    mediator.B = b;
    a.send('A sends message to A, B');
    b.send('B sends message to A');
})();
