var canvas;
var lscale = 2;
var context;
var canvas_box_scale;
var scene;
var rect;
var cc = document.getElementById("pannelcreate");
var pp = new Pannel(cc);
pp.addoffcanvas(3);
var act1_btn = document.createElement('div');
act1_btn.innerHTML = `<button id="panel1_btn" class="btn btn-primary" onclick="move_to_activity3()" style="position: absolute; bottom: 12vh; width: 85%;">Next</button>`;
var act1_start_button = document.createElement('div');
act1_start_button.innerHTML = `<button id="panel1_btn" class="btn btn-primary" onclick="start_act1();">Start</button>`;
// function start_act1() {
//     document.getElementById('panel1_btn').remove();
//     canvas.addEventListener('click',a1_mouseclick);
//     a1_load_questions();
//     a1_random_questions();
//     a1_display_current_question();
// }
// function move_to_activity3() {
//     document.getElementById('panel1_btn').remove();
//     canvas.removeEventListener('click',a1_mouseclick);
//     // activity3();
// }
// //varibles related to activity 1
// var question:{srno:number,question:string,ans:string,hint:string[]}[]=[];
// var arrayofrandquestion=[];
// var current_question:number;
// var current_hint:number = 1;
// var total_score: number = 0;
// var current_score:number = 3;
// var global_score: number = 0;
// var a1_panel: HTMLDivElement;
// var all_text_content = document.getElementById("div");
// var canvas_box_scale: number = 1;
// var highlighted_images = [];
// var a1_labels: Chemistry.Text[] = [];
// var a1_scene: Scene;
// var a1_index: number[] = [];
// var text;
// var ans;
// var question_text;
// // var display_result;
// var display_result:Chemistry.Text;
// var display_score: Chemistry.Text;
// var timer1;
// var current_index;
// var question_div_box = document.createElement('div');
// question_div_box.id = 'question-div-box';
// function activity1() {
//     //define the canvas
//     pp.addcanvas('mycanvas');
//     // pp.addtorightpannel(question_div_box, 3);
//     pp.showtitle(`<p id="exp-title">Let's Identify the components required to study the <span id="des"> Heat Transfer Coefficient under Turbulent Conditions</span><p>`, 3);
//     pp.showscore(0, 3);
//     canvas = pp.canvas;
//     context = canvas.getContext('2d');
//     // add rect and scene
//     canvas.style.cursor="crosshair";
//     rect=canvas.getBoundingClientRect();
//     scene=new Scene();
//     // add canvas sizing
//     window.onload=a1_windowresize;
//     window.onresize=a1_windowresize;
//     a1_windowresize();
//     var bsOffcanvas = new bootstrap.Offcanvas(
//         document.getElementById("offcanvasRight3")
//       );
//       bsOffcanvas.show();
//     a1_draw_all_components();
//     window.addEventListener("resize", a1_display_current_question);
//     // add_button(`<button id='screen-button' class="btn btn-info" style="width: 100%; margin-bottom: 5%;" onclick="(() =>{
//     //     document.getElementById('screen-button').remove();
//     //     canvas.addEventListener('click',a1_mouseclick);
//     //      a1_load_questions();
//     //      a1_random_questions();
//     //      a1_display_current_question();})();
//     //    ">Start</button>`);
//     pp.addtorightpannel(act1_start_button.innerHTML, 3);
//     // question_div_box.innerHTML = act1_start_button.innerHTML;
//     load_higlighted_images();
// }
// function a1_windowresize() {
//      //canvas size
//      a1_canvas_size();
//      //canvas mapping
//      a1_canvas_mapping();
//     //draw scene
//      scene.draw();
//     //  for(let j = 0; j<a1_index.length; j++) {
//     //      a1_labels[a1_index[j]].draw();
//     //  }
// }
// function a1_canvas_size() {
//     canvas.width=window.innerWidth*0.91;
//     canvas.height=canvas.width*1080.0/1920*0.85;
//     lscale=canvas.width/1920.0;
//     document.getElementById('leftpannel').style.height = (canvas.height + 5) + "px";
//     document.getElementById('leftpannel').style.margin = '0';
// }
// function a1_canvas_mapping(){
//     context.translate(0,canvas.height);
//     context.scale(1,-1);
// }
// function a1_draw_all_components() {
//     var sq=new Chemistry.Custome_image(tank,new Chemistry.Point(600,200),500,280,canvas);
//     sq.name="tank";
//     scene.add(sq);
//     var sq=new Chemistry.Custome_image(pump,new Chemistry.Point(1450,170),350,246.86,canvas);
//     sq.name="pump";
//     scene.add(sq);
//     var sq=new Chemistry.Custome_image(test_section,new Chemistry.Point(1650,600),420,550,canvas);
//     sq.name="test_section";
//     scene.add(sq);
//     var sq=new Chemistry.Custome_image(horizontal_pipe,new Chemistry.Point(280,830),364,151,canvas);
//     sq.name="horizontal_pipe";
//     scene.add(sq);
//     var sq=new Chemistry.Custome_image(vertical_pipe,new Chemistry.Point(150,220),80,314,canvas);
//     sq.name="vertical_pipe";
//     scene.add(sq);
//     var sq=new Chemistry.Custome_image(rotometer,new Chemistry.Point(230,580),100,302.8,canvas);
//     sq.name="rotometer";
//     scene.add(sq);
//     var sq=new Chemistry.Custome_image(heater,new Chemistry.Point(1150,400),350,68.6,canvas);
//     sq.name="heater";
//     scene.add(sq);
//     var sq=new Chemistry.Custome_image(temp_controller,new Chemistry.Point(1150,700),320,313.6,canvas);
//     sq.name="temp_controller";
//     scene.add(sq);
//     var sq=new Chemistry.Custome_image(t_in,new Chemistry.Point(600,550),170,200,canvas);
//     sq.stang = -90;
//     sq.name="t_in";
//     scene.add(sq);
// }
// //list of all activity 1 questions
// function a1_load_questions(){}
// {
//     question=[];
//     question.push({srno:1,question:"Select <span style='color: #018fc3'>Pump</span>",ans:"pump",hint:["Has Suction and Discharge","Has valve attached","Triangular Base"]});
//     question.push({srno:2,question:"Select <span style='color: #018fc3'> Tank </span>",ans:"tank",hint:["Rectangular","Mounted Vertically","Has valves attached"]});
//     question.push({srno:3,question:"Select <span style='color: #018fc3'> Rotometer </span>",ans:"rotometer",hint:["Rectangular","Mounted Vertically","Has valves attached"]});
//     question.push({srno:4,question:"Select <span style='color: #018fc3'>Test Section</span>",ans:"test_section",hint:["Double Pipe","pipe inside a pipe","Has two inlets and outlets"]});
//     question.push({srno:5,question:"Select <span style='color: #018fc3'>Heater </span>",ans:"heater",hint:["U-Shape","Mounted horizontally","Has two pins"]});
//     question.push({srno:6,question:"Select <span style='color: #018fc3'> Temperature Controller </span>",ans:"temp_controller",hint:["Rectangular box with sensor","Display SET T","Has two wires protruding down"]});
//     question.push({srno:7,question:"Select <span style='color: #018fc3'> Temperature Indicator </span>",ans:"t_in",hint:["Rectnagular box with sensor","Horizontal",""]});
//     question.push({srno:8,question:"Select <span style='color: #018fc3'> Verticle Pipe </span>",ans:"vertical_pipe",hint:["Mounted Vertically","Mounted Vertically","Mounted Vertically"]});
//     question.push({srno:9,question:"Select <span style='color: #018fc3'> Horizontal Pipe </span>",ans:"horizontal_pipe",hint:["Mounted Horizontally","Mounted Horizontally","Mounted Horizontally"]});
// }
// function a1_display_current_question(){
//     //document.getElementById("score-div-box").innerText = total_score.toString();
//     for(let i=0;i<question.length;i++){
//         if(arrayofrandquestion[current_question-1]==question[i].srno){
//             text=question[i].question;
//             ans=question[i].ans;
//             current_index=i;
//             break;
//         }
//     }
//     scene.draw();
//     for(let j = 0; j<a1_index.length; j++) {
//         a1_labels[a1_index[j]].draw();
//     }
//     question_text=new Chemistry.Text(text,new Chemistry.Point(1100,520),canvas)
//     question_text.color="white";
//    // question_text.draw();
//     //display_score=new Chemistry.Text(`Score: ${total_score}/27`,new Chemistry.Point(1650,620),canvas);
//     //display_score.color="yellow";
//     // display question and score on panel
//     //document.getElementById("a1-question-div-box").innerText = text;
//     pp.showdescription(`<div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: calc(1vw + 12px);">${text}</div>`, 3);
// }
// function load_higlighted_images() {
//     highlighted_images = [
//         [tank_right, tank_wrong],
//         [pump_right, pump_wrong],
//         [test_section_right, test_section_wrong],
//         [horizontal_pipe_right, horizontal_pipe_wrong],
//         [vertical_pipe_right, vertical_pipe_wrong],
//         [rotometer_right, rotometer_wrong],
//         [heater_right, heater_wrong],
//         [temp_controller_right, temp_controller_wrong],
//         [t_in_right, t_in_wrong]
//     ]
//     a1_labels = [
//         new Chemistry.Text("tank",new Chemistry.Point(400,80),canvas),
//         new Chemistry.Text("pump",new Chemistry.Point(1300,1700),canvas),
//         new Chemistry.Text("test_section",new Chemistry.Point(1050,730),canvas),
//         new Chemistry.Text("horizontal_pipe",new Chemistry.Point(200,850),canvas),
//         new Chemistry.Text("vertical_pipe",new Chemistry.Point(100,40),canvas),
//         new Chemistry.Text("rotometer",new Chemistry.Point(80,500),canvas),
//         new Chemistry.Text("heater",new Chemistry.Point(1150,480),canvas),
//         new Chemistry.Text("temp_controller",new Chemistry.Point(1000,600),canvas),
//         new Chemistry.Text("t_in",new Chemistry.Point(600,420),canvas),
//     ]
// }
// function a1_random_questions(){
//     arrayofrandquestion=[];
//     while(true){
//         let no:number=Math.round(Math.random()*(question.length-1)+1);
//         let found=false;
//         for(let i=0;i<arrayofrandquestion.length;i++){
//             if(arrayofrandquestion[i]==no){
//                 found=true;
//                 break;
//             }
//         }
//         if(!found){
//             arrayofrandquestion.push(no);
//         }
//         if(arrayofrandquestion.length>=9){
//             break;
//         }
//     }
//     current_question=1;
//     current_hint=1;
// }
// function a1_check_isinside(x:number,y:number){
//     let found=0;
//     for(let i=0;i<scene.container.length;i++){
//         if(scene.container[i].geo.isinside(new Chemistry.Point(x,y))){
//             if(scene.container[i].geo.name==ans){
//                 found=1;
//                 var bsOffcanvas = new bootstrap.Offcanvas(
//                     document.getElementById("offcanvasRight3")
//                   );
//                   bsOffcanvas.show();
//                 let original_image = scene.container[i].geo.img;
//                 scene.container[i].geo.img = highlighted_images[i][0];
//                 scene.draw();
//                 a1_index.push(i);
//                 setTimeout(() => {
//                     scene.container[i].geo.img = original_image;
//                     scene.draw();
//                     for(let j = 0; j<a1_index.length; j++) {
//                         a1_labels[a1_index[j]].draw();
//                     }
//                 }, 1000);
//                 break;
//             }
//             else{
//                 found=2;
//                 document.getElementById('hide_panel3').click();
//                 let original_image = scene.container[i].geo.img;
//                 scene.container[i].geo.img = highlighted_images[i][1];
//                 scene.draw();
//                 setTimeout(() => {
//                     scene.container[i].geo.img = original_image;
//                     scene.draw();
//                     for(let j = 0; j<a1_index.length; j++) {
//                         a1_labels[a1_index[j]].draw();
//                     }
//                 }, 1000);
//             }
//         }
//     }
//     if(found==1){
//         display_result=new Chemistry.Text("Bingo! it is correct",new Chemistry.Point(1100,450),canvas);
//         display_result.color="yellow";
//         display_result.font = "24px";
//         //display_result.draw();
//         if(current_question<=question.length){
//             current_question++;
//             current_hint=1;
//             total_score += current_score;
//             current_score = 3;
//             global_score =  total_score;
//         }
//         // if(current_question == question.length) {
//         //     current_question++;
//         // }
//         timer1=setTimeout(a1_change_question,2000);
//         //document.getElementById("result-101").innerText = "Correct!";
//         // pp.showdescription("Great!! <div> That is <span class='text-color-blue'>Correct<span></div>", 3);
//         // document.getElementById("question-div-box").innerHTML = `
//         // Great!! <div> That is <span class='text-color-blue'>Correct<span></div>
//         // `
//         pp.showdescription(`
//         <div style="background-color: #f4ccccff; border-radius: 10px; border: black; padding: 5%; font-weight: 500; font-size: 2.5vw;"> Great!! <div> That is <span class='text-color-blue'>Correct<span></div></div>
//         `, 3);
//         // setTimeout(() => {
//         // }, 1000);
//     }
//     else if(found==2){
//         console.log(current_hint);
//         var bsOffcanvas = new bootstrap.Offcanvas(
//             document.getElementById("offcanvasRight3")
//           );
//           bsOffcanvas.show();
//         display_result=new Chemistry.Text("Try again. Hint:"+question[current_index].hint[current_hint-1],new Chemistry.Point(1100,450),canvas);
//         // document.getElementById("question-div-box").innerHTML = `
//         // <div class='text-color-purple'>Thats not a ${ans}</div>
//         // <div>Try Again!!</div>
//         // <div>Hint: <span class="text-color-blue">${question[current_index].hint[current_hint-1]}</span></div>
//         // `;
//         pp.showdescription(` <div class='text-color-purple'>Thats not a ${ans}</div>
//         <div>Try Again!!</div>
//         <div>Hint: <span class="text-color-blue">${question[current_index].hint[current_hint-1]}</span></div>`, 3);
//         // let div = document.createElement('div');
//         // div.innerHTML = `<div class='text-color-purple'>Thats not a ${ans}</div>
//         // <div>Try Again!!</div>
//         // <div>Hint: <span class="text-color-blue">${question[current_index].hint[current_hint-1]}</span></div>`
//         // pp.addtorightpannel(div, 3);
//        // document.getElementById("result-101").innerText = "Try again. Hint:"+question[current_index].hint[current_hint-1];
//         if(current_hint<3){
//             current_score  = 3 - current_hint;
//             current_hint++;
//         }
//         display_result.color="white";
//         display_result.font="15px";
//         //display_result.draw();
//         timer1=setTimeout(a1_change_question,2000);
//     }
// }
// function a1_change_question(){
//     if(current_question > 9) {       
//         scene.draw();
//         for(let j = 0; j<a1_index.length; j++) {
//             a1_labels[a1_index[j]].draw();
//         }
//         // document.getElementById("score-div-box").innerText = total_score.toString();
//         // pp.showscore(total_score.toString(), 3);
//         pp.showscore(total_score.toString(), 3);
//         // question_text=new Chemistry.Text("Activity 1 Completed",new Chemistry.Point(1100,520),canvas);
//         // question_text.color="White";
//         // question_text.draw();
//         // display_result=new Chemistry.Text(`You Scored ${total_score}/27`,new Chemistry.Point(1100,450),canvas)
//         // display_result.color="Green";
//         // display_result.draw();
//         global_score = total_score;
//         const act2: HTMLButtonElement = <HTMLButtonElement> document.createElement("input");
//         act2.type="button";
//         act2.onclick=activity3;
//         //document.getElementById("root").appendChild(act2);
//         act2.value="Next";
//         act2.className="btn btn-success";
//         act2.style.fontSize = "1.0vw";
//        // guide.value  = "Click Next Button";
//         //document.getElementById("question-div-box").innerText = "";
//         // add_button(`<button id='screen-button' class="btn btn-info" style="width: 100%; margin-bottom: 5%;" onclick="(() =>{
//         //     document.getElementById('screen-button').remove();
//         //     canvas.removeEventListener('click',a1_mouseclick);
//         //     activity2();})();">Next</button>`)
//         pp.addtorightpannel(act1_btn.innerHTML, 3);
//         //document.getElementById("question-div-box").appendChild(act2);
//         window.removeEventListener("resize", a1_display_current_question);
//         //clearInterval(timer1);
//     } else {
//         a1_display_current_question();
//         //clearInterval(timer1);
//         // for(let j = 0; j<a1_index.length; j++) {
//         //     a1_labels[a1_index[j]].draw();
//         // }
//     }
// }
// function a1_mouseclick(e:MouseEvent){
//     let x=Math.round((e.clientX-rect.x)/lscale);
//     let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
//     a1_check_isinside(x,y);
// }
//# sourceMappingURL=activity1.js.map