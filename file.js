var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, year) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.year = year;
        return _this;
    }
    BMW.prototype.getInfo = function () {
        console.log("Model: " + this.model + "; Year:" + this.year);
    };
    return BMW;
}(Car));
var Tayota = /** @class */ (function (_super) {
    __extends(Tayota, _super);
    function Tayota(model, year) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.year = year;
        return _this;
    }
    Tayota.prototype.getInfo = function () {
        console.log("Model: " + this.model + "; Year:" + this.year);
    };
    return Tayota;
}(Car));
var Mustang = /** @class */ (function (_super) {
    __extends(Mustang, _super);
    function Mustang(model, year) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.year = year;
        return _this;
    }
    Mustang.prototype.getInfo = function () {
        console.log("Model: " + this.model + "; Year:" + this.year);
    };
    return Mustang;
}(Car));
var someCar1 = new BMW("x5", 2014);
someCar1.getInfo();
var someCar2 = new Tayota("qwe1", 2017);
someCar2.getInfo();
var someCar3 = new Mustang("rty2", 2019);
someCar3.getInfo();
var someCar11 = new BMW("qqq x5", 2014);
someCar1.getInfo();
var someCar12 = new Tayota("qqq qwe1", 2017);
someCar2.getInfo();
var someCar14 = new Mustang("qqq rty2", 2019);
someCar3.getInfo();
