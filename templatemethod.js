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
var BaseClass = /** @class */ (function () {
    function BaseClass() {
    }
    BaseClass.prototype.templateMethod = function () {
        this.actionA();
        this.actionB();
        this.actionC();
    };
    BaseClass.prototype.actionA = function () {
        console.log('Base A action');
    };
    ;
    BaseClass.prototype.actionB = function () {
        console.log('Base B action');
    };
    BaseClass.prototype.actionC = function () {
        throw new Error('should be overwrited by Class A and B');
    };
    return BaseClass;
}());
var ConcreteAClass = /** @class */ (function (_super) {
    __extends(ConcreteAClass, _super);
    function ConcreteAClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteAClass.prototype.actionC = function () {
        console.log('Method C is overwrited by class A');
    };
    return ConcreteAClass;
}(BaseClass));
var ConcreteBClass = /** @class */ (function (_super) {
    __extends(ConcreteBClass, _super);
    function ConcreteBClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteBClass.prototype.actionC = function () {
        console.log('Method C is overwrited by class B');
    };
    return ConcreteBClass;
}(BaseClass));
(function main() {
    var a = new ConcreteAClass();
    var b = new ConcreteBClass();
    a.templateMethod();
    b.templateMethod();
})();
