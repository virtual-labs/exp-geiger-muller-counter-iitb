class Question {
    constructor(questions, options, answer, container, next_act) {
        this.random_order = [];
        this.select_option = () => {
            //console.log('here');
            let op1 = (document.getElementById('op-1'));
            let op2 = (document.getElementById('op-2'));
            let op3 = (document.getElementById('op-3'));
            let op4 = (document.getElementById('op-4'));
            // if(op1.style.background == 'Yellow' && this.answer == '1') {
            //     console.log('i was here');
            //     this.next_act();
            // } else if (op2.style.background == 'Yellow' && this.answer == '2') {
            //     this.next_act();
            // } else if (op3.style.background == 'Yellow' && this.answer == '3') {
            //     this.next_act();
            // } else if (op4.style.background == 'Yellow' && this.answer == '4') {
            //     this.next_act();
            //    }
            console.log(Question.sop, this.answer);
            if (Question.sop == this.answer) {
                Question.sop = '';
                this.answer = 'none';
                this.next_act();
            }
            else {
                alert('Incorrect Response');
            }
        };
        this.question = questions;
        this.options = options;
        this.answer = answer;
        this.container = container;
        this.next_act = next_act;
    }
    load_question() {
        // while(this.random_order.length < 4) {
        //     console.log('here');
        //     let rn = Math.floor(Math.random()*5);
        //     if(this.random_order.indexOf(rn) != -1) {
        //         this.random_order.push(rn);
        //     }
        // }
        let text = `
            <div style='width: 80vw; margin: auto;' id='question-div'>
                <h5 class='fs-16px'>${this.question}</h5>
                <br>
                <div style='display: grid; grid-template-columns: 1fr 1fr;'>
                    <div id='op-1' style='border: 2px solid black; margin: 5px;' onclick="Question.select_op('1')"><span> </span> ${this.options[0]}</div>
                    <div id='op-2' style='border: 2px solid black; margin: 5px;' onclick="Question.select_op('2')"><span> </span> ${this.options[1]}</div>
                    <div id='op-3' style='border: 2px solid black; margin: 5px;' onclick="Question.select_op('3')"><span> </span> ${this.options[2]}</div>
                    <div id='op-4' style='border: 2px solid black; margin: 5px;' onclick="Question.select_op('4')"><span> </span> ${this.options[3]}</div>
                </div>
                <br>
                <button id='q-btn' class='btn btn-info std-btn' style='margin-left: 35%;'>Submit</button>
            </div>
        `;
        this.container.innerHTML += text;
        let btn = (document.getElementById('q-btn'));
        btn.onclick = this.select_option;
    }
    static select_op(op) {
        let op1 = (document.getElementById('op-1'));
        let op2 = (document.getElementById('op-2'));
        let op3 = (document.getElementById('op-3'));
        let op4 = (document.getElementById('op-4'));
        op1.style.background = 'white';
        op2.style.background = 'white';
        op3.style.background = 'white';
        op4.style.background = 'white';
        if (op == '1') {
            op1.style.background = 'Yellow';
            Question.sop = '1';
        }
        else if (op == '2') {
            op2.style.background = 'Yellow';
            Question.sop = '2';
        }
        else if (op == '3') {
            op3.style.background = 'Yellow';
            Question.sop = '3';
        }
        else if (op == '4') {
            op4.style.background = 'Yellow';
            Question.sop = '4';
        }
    }
    get_question_element() {
        let d = (document.getElementById('question-div'));
        return d;
    }
}
Question.sop = '';
class Question_Options extends Question {
    constructor(questions, options, answer, container, id, next_act) {
        super(questions, options, answer, container, next_act);
        this.select_option = () => {
            console.log(Question.sop, this.answer);
            if (Question.sop == this.answer) {
                Question.sop = '';
                this.answer = 'none';
                this.submit_btn.remove();
                this.next_act();
            }
            else {
                alert('Incorrect Response');
            }
        };
        this.id = id;
    }
    load_question() {
        let text = `
           <div style='width: 80vw; margin: auto;' id='${this.id}-question-div'>
               <h5 class='fs-16px'>${this.question}</h5>
               <br>
               <div style='display: grid; grid-template-columns: 1fr 1fr;' id="${this.id}-option-box">

               </div>
               <br>
               <button id='${this.id}-q-btn' class='btn btn-info std-btn' style='margin-left: 35%;'>Submit</button>
           </div>
       `;
        this.container.innerHTML += text;
        let option_box = (document.getElementById(`${this.id}-option-box`));
        if (this.options.length % 2 !== 0) {
            option_box.style.gridTemplateColumns = '1fr';
        }
        for (let i = 0; i < this.options.length; i++) {
            let optionElement = document.createElement('div');
            optionElement.id = `${this.id}-op-${i + 1}`;
            optionElement.classList.add('option');
            optionElement.style.border = '2px solid black';
            optionElement.style.margin = '5px';
            optionElement.style.padding = '5px';
            optionElement.style.backgroundColor = 'white';
            optionElement.innerHTML = `<span>${this.options[i]}</span>`;
            optionElement.addEventListener('click', () => this.select_op(i + 1));
            option_box.appendChild(optionElement);
        }
        this.submit_btn = (document.getElementById(`${this.id}-q-btn`));
        this.submit_btn.onclick = this.select_option;
    }
    select_op(op) {
        let opt = (document.getElementById(`${this.id}-op-${op}`));
        for (let i = 0; i < this.options.length; i++) {
            document.getElementById(`${this.id}-op-${i + 1}`).style.backgroundColor = 'white';
        }
        opt.style.background = 'Yellow';
        Question.sop = op;
    }
    get_question_element() {
        let d = (document.getElementById(`${this.id}-question-div`));
        return d;
    }
}
class Updated_Question {
    constructor(questions, options, answer, container, next_act) {
        this.random_order = [];
        this.selected_option = '';
        // fat arrow function is necessary here to use the "this" keyword inside a function for accesing class level variables/functions
        this.select_option = () => {
            if (this.selected_option == this.answer) {
                let btn = document.getElementById(`q-btn-${Updated_Question.question_number}`);
                alert("Your response is correct!!");
                btn.style.display = 'none';
                this.next_act();
            }
            else {
                alert("Incorrect Response");
            }
        };
        this.question = questions;
        this.options = options;
        this.answer = answer;
        this.container = container;
        this.next_act = next_act;
        Updated_Question.question_number++;
    }
    load_question() {
        let option_text = '';
        for (let i = 0; i < this.options.length; i++) {
            option_text += `
			<div id='op-${Updated_Question.question_number}-${i + 1}' style='border: 2px solid black; margin: 5px;'>
				<span> </span> ${this.options[i]}
			</div>`;
        }
        let question_text = `
			<br>
            <div style='width: 80vw; margin: auto;' id='question-div'>
                <h5 class='fs-16px'>${this.question}</h5>
                <br>
                <div style='display: grid; grid-template-columns: 1fr 1fr;'>
                    ${option_text}
                </div>
                <br>
                <button id='q-btn-${Updated_Question.question_number}' class='btn btn-info std-btn' style='margin-left: 35%;' >Submit</button>
            </div>
        `;
        let p = new Promise((resolve, reject) => {
            resolve('success');
            reject('Failed to render question text!!');
        });
        //promise for synchronous execution
        p.then(() => {
            // render the question here
            this.container.innerHTML += question_text;
        }).then(() => {
            //attech events here
            for (let i = 0; i < this.options.length; i++) {
                let op = document.getElementById(`op-${Updated_Question.question_number}-${i + 1}`);
                op.onclick = () => {
                    this.op_click((i + 1).toString());
                };
            }
            let btn = document.getElementById(`q-btn-${Updated_Question.question_number}`);
            //event function for verify button
            btn.onclick = this.select_option;
        }).catch((message) => {
            console.log(message);
        });
    }
    //onclick event function for options
    op_click(selected_option) {
        for (let i = 1; i <= this.options.length; i++) {
            let op1 = document.getElementById(`op-${Updated_Question.question_number}-${i}`);
            op1.style.background = 'white';
            op1.style.color = 'black';
        }
        for (let i = 1; i <= this.options.length; i++) {
            let op1 = document.getElementById(`op-${Updated_Question.question_number}-${i}`);
            if (selected_option == i.toString()) {
                op1.style.background = 'darkgreen';
                op1.style.color = 'white';
                this.selected_option = i.toString();
            }
        }
    }
}
Updated_Question.question_number = 0;
//# sourceMappingURL=questions.js.map