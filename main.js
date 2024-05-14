var Calculator = /** @class */ (function () {
    function Calculator(output, reset, oper, numbers) {
        var _this = this;
        this.operpressed = false;
        this.choosennumber = null;
        this.choosenoper = null;
        this.output = document.querySelector('.' + output);
        this.reset = document.getElementById(reset);
        this.operators = document.querySelectorAll('.' + oper);
        this.numbers = document.querySelectorAll('.' + numbers);
        this.resetfunc();
        this.operators.forEach(function (el) {
            // @ts-ignore
            el.addEventListener('click', function () { return _this.operpress(el); });
        });
        this.numbers.forEach(function (el) {
            // @ts-ignore
            el.addEventListener('click', function () { return _this.numberpress(el); });
        });
    }
    Calculator.prototype.resetfunc = function () {
        this.output.textContent = '0';
        this.choosennumber = null;
        this.choosenoper = null;
        return true;
    };
    Calculator.prototype.operpress = function (operelement) {
        this.choosenoper = operelement.textContent;
        this.operpressed = true;
        // console.log(this.choosenoper)
    };
    Calculator.prototype.numberpress = function (element) {
        if (this.choosenoper != null && this.operpressed == true) {
            this.choosennumber = element.textContent;
            // console.log(`Current output ${this.output.textContent} oper=${this.choosenoper} second number ${this.choosennumber}`)
            if (this.choosenoper == '+') {
                this.output.textContent = (Number(this.output.textContent) + Number(this.choosennumber)).toString();
            }
            if (this.choosenoper == '-') {
                this.output.textContent = (Number(this.output.textContent) - Number(this.choosennumber)).toString();
            }
            if (this.choosenoper == '*') {
                this.output.textContent = (Number(this.output.textContent) * Number(this.choosennumber)).toString();
            }
            if (this.choosenoper == '%') {
                this.output.textContent = (Number(this.output.textContent) / Number(this.choosennumber)).toString();
            }
        }
        else {
            console.log('Else');
            this.output.textContent = element.textContent;
        }
        this.operpressed = false;
    };
    return Calculator;
}());
var calc = new Calculator('output', 'reset', 'oper', 'number');
