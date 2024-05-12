class Calculator {
    private output: Element;
    private reset: HTMLElement;
    private operators: NodeList;
    private numbers: NodeList;
    private choosennumber!: number;
    private choosenoper!: string;
    private operpressed:boolean = false

    constructor(output: string, reset: string, oper: string, numbers: string) {
        this.choosennumber = null
        this.choosenoper = null
        this.output = document.querySelector('.' + output);
        this.reset = document.getElementById(reset);
        this.operators = document.querySelectorAll('.' + oper);
        this.numbers = document.querySelectorAll('.' + numbers);
        this.resetfunc();
        this.operators.forEach(el => {
            // @ts-ignore
            el.addEventListener('click', () => this.operpress(el))
        });
        this.numbers.forEach((el) => {
            // @ts-ignore
            el.addEventListener('click', () => this.numberpress(el));
        })
    }

    resetfunc(): boolean {
        this.output.textContent = '0';
        this.choosennumber = null
        this.choosenoper = null
        return true;
    }

    operpress(operelement) {
        this.choosenoper = operelement.textContent
        this.operpressed = true
        // console.log(this.choosenoper)
    }

    numberpress(element) {
        if (this.choosenoper != null && this.operpressed==true) {
            this.choosennumber = element.textContent
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
            if (this.choosenoper == '/') {
                this.output.textContent = (Number(this.output.textContent) / Number(this.choosennumber)).toString();
            }
        } else {
            console.log('Else')
            this.output.textContent = element.textContent
        }
        this.operpressed=false
    }
}

const calc = new Calculator('output', 'reset', 'oper', 'number');
