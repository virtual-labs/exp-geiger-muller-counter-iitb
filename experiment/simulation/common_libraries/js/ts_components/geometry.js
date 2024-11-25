// namespace Chemistry {
//     export class Point{
//         x:number;
//         y:number;
//         constructor(x:number,y:number){
//             this.x=x;
//             this.y=y;
//         }
//     }
//     export class Geometry {
//         name:string;
//         color:string;
//         img:CanvasImageSource;
//         private _stpt:Point;
//         private _dragable:boolean=true;
//         value:number;
//         move_x:boolean=false;
//         revolve:boolean=false;
//         l:number;
//         dy:number;
//         dx:number;
//         l_last:number;
//         width:number;
//         width_last:number;
//         text:string;
//         constructor() { }
//         set stpt(pt:Point){
//             if(this._dragable){
//                 this._stpt=pt;
//             }
//         }
//         get stpt(){
//             return(this._stpt);
//         }
//         get draggable():boolean{
//             return(this._dragable);
//         }
//         draw() { }
//         protected calculate() { }
//         get area():number{
//             return(0);
//         }
//         isinside(point:Point):boolean{
//             let dx=(this._stpt.x-point.x)*lscale;
//             let dy=(this._stpt.y-point.y)*lscale;
//             let r=Math.pow(dx*dx+dy*dy,0.5);
//             if(r<50)
//             {
//                 return(true);
//             }
//             else{
//                 return(false);
//             }
//         }
//         lock(){
//             this._dragable=false;
//         }
//         protected triangle_area(pt1:Point,pt2:Point,pt3:Point):number{
//             return(0);
//         }
//         change_value(){}
//         set_connection(geo:Geometry){}
//         protected random(max:number,min:number):number{
//             return(Math.random()*(max-min)+min);
//         }
//     }
//     export class Circle extends Geometry {
//         radius: number;
//         canvas: HTMLCanvasElement;
//         context: CanvasRenderingContext2D;
//         value:number=0;
//         color:string="red";
//         objconnected:Geometry;
//         connected:boolean=false;
//         constructor(stpt:Point, radius: number, canvas: HTMLCanvasElement) {
//             super();
//             this.stpt=stpt
//             this.radius = radius;
//             this.canvas = canvas;
//             this.context = this.canvas.getContext('2d');
//         }
//         draw(): void {
//             this.context.beginPath();
//             this.context.arc(this.stpt.x * lscale, this.stpt.y * lscale, this.radius * lscale, 0, 2 * Math.PI, false);
//             this.context.fillStyle=this.color;
//             this.context.fill();
//             this.context.lineWidth = 1;
//             this.context.stroke();
//             // let text=new Text(this.value.toString(),this.stpt,this.canvas);
//             // text.textalingment="center";
//             // text.draw();
//             if(this.connected){
//                 this.draw_connection();
//             }
//         }
//         isinside(point: Point): boolean {
//             let dx=(this.stpt.x-point.x)*lscale;
//             let dy=(this.stpt.y-point.y)*lscale;
//             let r=Math.pow(dx*dx+dy*dy,0.5);
//             if(r<this.radius){
//                 return(true);
//             }
//             else{
//                 return(false);
//             }
//         }
//         change_value(){
//             if(this.value==0)
//             {
//                 this.value=1;
//                 this.color="green"
//             }
//             else if(this.value==1){
//                 this.value=0;
//                 this.color="red"
//             }
//         }
//         set_connection(geo:Geometry){
//             this.objconnected=geo;
//             this.connected=true;
//         }
//         draw_connection(){
//             this.context.beginPath();
//             this.context.moveTo(this.stpt.x*lscale,this.stpt.y*lscale);
//             this.context.lineTo(this.objconnected.stpt.x*lscale,this.objconnected.stpt.y*lscale);
//             this.context.stroke();
//             this.objconnected.color=this.color;
//             this.objconnected.value=this.value;
//         }
//     }
//     export class Ellipse extends Geometry{
//         points:Point[]=[];
//         a:number;
//         b:number;
//         canvas:HTMLCanvasElement;
//         context:CanvasRenderingContext2D;
//         constructor(stpt:Point,major_length:number,minor_length:number,canvas:HTMLCanvasElement){
//             super();
//             this.stpt=stpt;
//             this.a=major_length/2;
//             this.b=minor_length/2;
//             this.canvas=canvas;
//             this.context=this.canvas.getContext("2d");
//             this.points=[];
//         }
//         protected calculate(): void {
//             this.points=[];
//             for(let ang=0;ang<360;ang++){
//                 let ang1=ang*Math.PI/180;
//                 let x=this.stpt.x*lscale+this.a*lscale*Math.cos(ang1);
//                 let y=this.stpt.y*lscale+this.b*lscale*Math.sin(ang1);
//                 // console.log(lscale);
//                 this.points.push(new Point(x,y));
//             }
//         }
//         draw(): void {
//             this.calculate();
//             this.context.beginPath();
//             this.context.moveTo(this.points[0].x,this.points[0].y);
//             for(let i=1;i<this.points.length;i++){
//                 this.context.lineTo(this.points[i].x,this.points[i].y)
//             }
//             this.context.lineWidth=1;
//             this.context.fillStyle="blue";
//             this.context.closePath();
//             this.context.fill();
//             this.context.stroke();
//         }
//         get area():number{
//             let a=0;
//             for(let i=0;i<this.points.length-1;i++){
//                 a+=this.points[i].x*this.points[i+1].y-this.points[i+1].x*this.points[i].y;
//             }
//             a+=this.points[this.points.length-1].x*this.points[0].y-this.points[0].x*this.points[this.points.length-1].y;
//             a=a/2;
//             return(Math.abs(a));
//         }
//     }
//     export class Polygon extends Geometry{
//         points:Point[]=[];
//         l:number;
//         n:number;
//         stang:number=0;
//         canvas:HTMLCanvasElement;
//         context:CanvasRenderingContext2D;
//         color:string="blue";
//         vx:number;
//         constructor(stpt:Point,l:number,n:number,canvas:HTMLCanvasElement){
//             super();
//             this.stpt=stpt;
//             this.l=l;
//             this.n=n;
//             this.canvas=canvas;
//             this.context=this.canvas.getContext("2d");
//             this.points=[];
//             this.vx=this.random(5,1);
//         }
//         protected calculate(): void {
//             this.points=[];
//             let angbet=360.0/this.n;
//             let ang=this.stang;
//             for(let i=0;i<this.n;i++){
//                 let ang1=ang*Math.PI/180;
//                 let x=this.stpt.x*lscale+this.l*lscale*Math.cos(ang1);
//                 let y=this.stpt.y*lscale+this.l*lscale*Math.sin(ang1);
//                 this.points.push(new Point(x,y));
//                 ang+=angbet;
//             }
//         }
//         protected rotate(){
//             this.stang++;
//             this.rotate_check();
//         }
//         protected rotate_check(){
//             if(this.stang>=360){
//                 this.stang=0;
//             }
//         }
//         draw(): void {
//             if(this.revolve){
//                 this.rotate();
//             }
//             if(this.move_x){
//                 this.motion_x();
//             }
//             this.calculate();
//             this.context.beginPath();
//             this.context.moveTo(this.points[0].x,this.points[0].y);
//             for(let i=1;i<this.points.length;i++){
//                 this.context.lineTo(this.points[i].x,this.points[i].y)
//             }
//             this.context.lineWidth=1;
//             this.context.fillStyle=this.color;
//             this.context.closePath();
//             this.context.fill();
//             this.context.stroke();
//         }
//         get area():number{
//             let a=0;
//             for(let i=0;i<this.points.length-1;i++){
//                 a+=this.points[i].x*this.points[i+1].y-this.points[i+1].x*this.points[i].y;
//             }
//             a+=this.points[this.points.length-1].x*this.points[0].y-this.points[0].x*this.points[this.points.length-1].y;
//             a=a/2;
//             return(a);
//         }
//         isinside(point:Point):boolean{
//             point.x=point.x*lscale;
//             point.y=point.y*lscale;
//             let a=0;
//             for(let i=0;i<this.points.length-1;i++){
//                 a+=this.triangle_area(point,this.points[i],this.points[i+1]);
//             }
//             a+=this.triangle_area(point,this.points[this.points.length-1],this.points[0]);
//             if(Math.abs(this.area-a)<0.000001){
//                 return(true);
//             }
//             else{
//                 return(false);
//             }
//         }
//         protected triangle_area(pt1:Point,pt2:Point,pt3:Point):number{
//             let a=0;
//             a+=pt1.x*pt2.y-pt2.x*pt1.y;
//             a+=pt2.x*pt3.y-pt3.x*pt2.y;
//             a+=pt3.x*pt1.y-pt1.x*pt3.y;
//             return(Math.abs(a/2));
//         }
//         protected motion_x(){
//             this.stpt.x+=this.vx;
//             this.motion_x_check();
//         }
//         protected motion_x_check(){
//             if(this.stpt.x>1800){
//                 this.stpt.x=50;
//             }
//         }
//     } 
//    export class Flask extends Geometry{
//     img:CanvasImageSource;
//     canvas:HTMLCanvasElement;
//     context:CanvasRenderingContext2D;
//     dx=225;
//     dy=190;
//     vx:number;
//     stang:number=0;
//     constructor(image:CanvasImageSource,stpt:Point,canvas:HTMLCanvasElement){
//         super();
//         this.img=image;
//         this.canvas=canvas;
//         this.context=this.canvas.getContext("2d");
//         this.stpt=stpt;
//         this.vx=this.random(5,1);
//     }
//     draw(): void {
//         if(this.move_x){
//             this.motion_x();
//         }
//         this.context.save();
//         this.context.translate(this.stpt.x*lscale,this.stpt.y*lscale);
//         this.context.scale(1,-1);
//         if(this.revolve){
//             this.rotate();
//         }
//         this.context.drawImage(this.img,-this.dx/2*lscale,-this.dy/2*lscale,this.dx*lscale,this.dy*lscale);
//         this.context.restore();
//     }
//     protected rotate(){
//         this.stang--;
//         this.context.rotate(this.stang*Math.PI/180);
//         this.rotate_check();
//     }
//     protected rotate_check(){
//         if(this.stang<=-360){
//             this.stang=0;
//         }
//     }
//     isinside(point:Point):boolean{
//         point.x=point.x*lscale;
//         point.y=point.y*lscale;
//         if(point.x> this.stpt.x*lscale-this.dx/2*lscale && point.x< this.stpt.x*lscale+this.dx/2*lscale){
//             if(point.y> this.stpt.y*lscale-this.dy/2*lscale && point.y< this.stpt.y*lscale+this.dy/2*lscale){
//                 return(true);
//             }
//         }
//         return(false);
//     }
//     protected motion_x(){
//         this.stpt.x+=this.vx;
//         this.motion_x_check();
//     }
//     protected motion_x_check(){
//         if(this.stpt.x>1800){
//             this.stpt.x=50;
//         }
//     }
//    }
//    export class L_bracket extends Geometry{
//     points:Point[]=[];
//     canvas:HTMLCanvasElement;
//     context:CanvasRenderingContext2D;
//     path:Path2D;
//     constructor(stpt:Point,canvas:HTMLCanvasElement){
//         super();
//         this.stpt=stpt;
//         this.canvas=canvas;
//         this.context=this.canvas.getContext('2d');
//     }
//     protected calculate(): void {
//         this.points=[];
//         this.points.push(new Point((this.stpt.x-20)*lscale,(this.stpt.y-20)*lscale));
//         this.points.push(new Point((this.stpt.x-20)*lscale,(this.stpt.y-20+100)*lscale));
//         this.points.push(new Point((this.stpt.x-20+40)*lscale,(this.stpt.y-20+100)*lscale));
//         this.points.push(new Point((this.stpt.x-20+40)*lscale,(this.stpt.y-20+40)*lscale));
//         this.points.push(new Point((this.stpt.x-20+100)*lscale,(this.stpt.y-20+40)*lscale));
//         this.points.push(new Point((this.stpt.x-20+100)*lscale,(this.stpt.y-20)*lscale));
//         this.points.push(new Point((this.stpt.x-20)*lscale,(this.stpt.y-20)*lscale));
//     }
//     draw(): void {
//         this.calculate();
//         this.path=new Path2D();
//         this.path.moveTo(this.points[0].x,this.points[0].y)
//         for(let i=1;i<this.points.length;i++){
//             this.path.lineTo(this.points[i].x,this.points[i].y)
//         }
//         this.context.beginPath();
//         this.context.strokeStyle="black";
//         this.context.fillStyle="red"
//         this.context.fill(this.path);
//         this.context.lineWidth=1;
//         this.context.stroke(this.path);
//     }
//     isinside(point: Point): boolean {
//         point.x=point.x*lscale;
//         point.y=point.y*lscale;
//         this.context.save();
//         this.context.translate(0,this.canvas.height);
//         this.context.scale(1,-1);
//         if(this.context.isPointInPath(this.path,point.x,point.y)){
//             this.context.restore();
//             return(true);
//         }
//         else{
//             this.context.restore();
//             return(false);
//         }
//     }
//    }
//    export class Text{
//     font="17px Arial";
//     color="black";
//     angle=0;
//     textalingment:CanvasTextAlign="left";
//     stpt:Point;
//     text:string;
//     canvas:HTMLCanvasElement;
//     context:CanvasRenderingContext2D;
//     constructor(text:string,stpt:Point,canvas:HTMLCanvasElement){
//         this.stpt=stpt;
//         this.canvas=canvas;
//         this.context=this.canvas.getContext("2d");
//         this.text=text;
//     }
//     draw(){
//         // this.font=`17px Arial`;
//         let y = this.font.split("px");
//         let font_size = parseInt(y[0])*lscale;
//         //this.font = `${font_size}px Arial`;
//         this.context.font= `${font_size}px Arial`;
//         this.context.fillStyle=this.color;
//         this.context.textAlign=this.textalingment;
//         this.context.save();
//         this.context.translate(this.stpt.x*lscale,this.stpt.y*lscale)
//         this.context.rotate(this.angle*Math.PI/180);
//         this.context.scale(1,-1);
//         this.context.fillText(this.text,0,0);
//         this.context.restore();
//     }
//    }
//    export class Sine extends Geometry{
//     magnitude:number=100;
//     canvas:HTMLCanvasElement;
//     context:CanvasRenderingContext2D;
//     points:Point[];
//     k:number=0;
//     geo:Geometry;
//     constructor(stpt:Point,geo:Geometry,canvas:HTMLCanvasElement){
//         super();
//         this.stpt=stpt;
//         this.geo=geo;
//         this.canvas=canvas;
//         this.context=this.canvas.getContext("2d");
//     }
//     protected calculate(){
//         this.points=[];
//         for(let i=0;i<=360;i++){
//             let x=this.stpt.x+i;
//             let y=this.stpt.y+this.magnitude*Math.sin(i*Math.PI/180);
//             this.points.push(new Point(x,y));
//         }
//     }
//     draw(){
//         this.calculate();
//         this.context.beginPath();
//         this.context.moveTo(this.points[0].x*lscale,this.points[0].y*lscale);
//         for(let i=1;i<=360;i++){
//             this.context.lineTo(this.points[i].x*lscale,this.points[i].y*lscale);
//         }
//         this.context.strokeStyle="red";
//         this.context.lineWidth=2;
//         this.context.stroke();
//         this.context.strokeStyle="black";
//         this.geo.stpt=new Point(this.points[this.k].x,this.points[this.k].y);
//         this.geo.draw();
//         this.update();
//     }
//     protected update(){
//         this.k++;
//         if(this.k>360){
//             this.k=0;
//         }
//     }
//    }
//    export class Custome_image extends Geometry{
//     img:CanvasImageSource;
//     canvas:HTMLCanvasElement;
//     context:CanvasRenderingContext2D;
//     dx=225;
//     dy=190;
//     vx:number;
//     stang:number=0;
//     constructor(image:CanvasImageSource,stpt:Point,width:number,height:number,canvas:HTMLCanvasElement){
//         super();
//         this.img=image;
//         this.canvas=canvas;
//         this.dx=width;
//         this.dy=height;
//         this.context=this.canvas.getContext("2d");
//         this.stpt=stpt;
//         this.vx=this.random(5,1);
//     }
//     draw(): void {
//         if(this.move_x){
//             this.motion_x();
//         }
//         this.context.save();
//         this.context.translate(this.stpt.x*lscale,this.stpt.y*lscale);
//         this.context.scale(1,-1);
//         if(this.revolve){
//             this.rotate();
//         }
//         this.context.rotate(this.stang*Math.PI/180);
//         this.context.drawImage(this.img,-this.dx/2*lscale,-this.dy/2*lscale,this.dx*lscale,this.dy*lscale);
//         this.context.restore();
//     }
//     protected rotate(){
//         this.stang--;
//         this.context.rotate(this.stang*Math.PI/180);
//         this.rotate_check();
//     }
//     protected rotate_check(){
//         if(this.stang<=-360){
//             this.stang=0;
//         }
//     }
//     isinside(point:Point):boolean{
//         point.x=point.x*lscale;
//         point.y=point.y*lscale;
//         if(point.x> this.stpt.x*lscale-this.dx/2*lscale && point.x< this.stpt.x*lscale+this.dx/2*lscale){
//             if(point.y> this.stpt.y*lscale-this.dy/2*lscale && point.y< this.stpt.y*lscale+this.dy/2*lscale){
//                 return(true);
//             }
//         }
//         return(false);
//     }
//     protected motion_x(){
//         this.stpt.x+=this.vx;
//         this.motion_x_check();
//     }
//     protected motion_x_check(){
//         if(this.stpt.x>1800){
//             this.stpt.x=50;
//         }
//     }
//    }
//    export class anim_image extends Custome_image{
//     l:number=290;
//     l_last:number=525;
//     startx:number=0;
//     constructor(image:CanvasImageSource,stpt:Point,width:number,height:number,canvas:HTMLCanvasElement){
//         super(image,stpt,width,height,canvas);
//     }
//     draw(){
//         if(this.move_x){
//             this.motion_x();
//         }
//         this.context.save();
//         this.context.translate(this.stpt.x*lscale,this.stpt.y*lscale);
//         this.context.scale(1,-1);
//         if(this.revolve){
//             this.rotate();
//         }
//         this.context.drawImage(this.img,this.startx,this.dy-this.l,this.dx-this.width,this.dy,(-this.dx/2+this.startx)*lscale,(this.dy/2-this.l)*lscale,(this.dx-this.width)*lscale,(this.dy)*lscale);
//         if(this.l<this.l_last){
//             this.l++;
//         }
//         this.context.restore();
//     }
//    }
//    export class anim_image_x_dir extends Custome_image{
//     l:number=290;
//     l_last:number=525;
//     startx:number=0;
//     width_last:number=0;
//     constructor(image:CanvasImageSource,stpt:Point,width:number,height:number,canvas:HTMLCanvasElement){
//         super(image,stpt,width,height,canvas);
//     }
//     draw(){
//         if(this.move_x){
//             this.motion_x();
//         }
//         this.context.save();
//         this.context.translate(this.stpt.x*lscale,this.stpt.y*lscale);
//         this.context.scale(1,-1);
//         if(this.revolve){
//             this.rotate();
//         }
//         this.context.drawImage(this.img,this.startx,this.dy-this.l,this.dx-this.width,this.dy,(-this.dx/2+this.startx)*lscale,(this.dy/2-this.l)*lscale,(this.dx-this.width)*lscale,(this.dy)*lscale);
//         if(this.width>this.width_last){
//             this.width--;
//         }
//         this.context.restore();
//     }
//    }
//    export class anim_image_y_dir_down extends Custome_image{
//     l:number=290;
//     l_last:number=525;
//     startx:number=0;
//     starty:number=0;
//     constructor(image:CanvasImageSource,stpt:Point,width:number,height:number,canvas:HTMLCanvasElement){
//         super(image,stpt,width,height,canvas);
//         this.l_last=this.dy;
//     }
//     draw(){
//         if(this.move_x){
//             this.motion_x();
//         }
//         this.context.save();
//         this.context.translate(this.stpt.x*lscale,this.stpt.y*lscale);
//         this.context.scale(1,-1);
//         if(this.revolve){
//             this.rotate();
//         }
//         this.context.drawImage(this.img,this.startx,this.starty,this.dx-this.width,this.l,(-this.dx/2+this.startx)*lscale,(-this.dy/2+this.starty)*lscale,(this.dx-this.width)*lscale,(this.l)*lscale);
//         if(this.l<this.l_last){
//             this.l++;
//         }
//         this.context.restore();
//     }
//    }
//    export class Pump_controller extends Geometry{
//     points:Point[]=[];
//     l:number;
//     n:number;
//     stang:number=0;
//     canvas:HTMLCanvasElement;
//     context:CanvasRenderingContext2D;
//     color:string="red";
//     color1:string="red";
//     vx:number;
//     constructor(canvas:HTMLCanvasElement){
//         super();
//         this.canvas=canvas;
//         this.context=this.canvas.getContext("2d");
//         this.vx=this.random(5,1);
//     }
//     protected calculate(): void {
//     }
//     draw(): void {
//         this.calculate();
//         this.context.beginPath();
//         this.context.moveTo(850*lscale,780*lscale);
//         this.context.lineTo(990*lscale,780*lscale);
//         this.context.lineTo(990*lscale,680*lscale);
//         this.context.lineTo(850*lscale,680*lscale);    
//         this.context.lineWidth=3;
//         this.context.fillStyle="#3399ff";
//         this.context.closePath();
//         this.context.fill();
//         this.context.stroke();
//         this.context.beginPath();
//         this.context.arc(880*lscale,725*lscale, 18 * lscale, 0, 2 * Math.PI, false);
//         this.context.fillStyle=this.color;
//         this.context.fill();
//         this.context.lineWidth = 2;
//         this.context.stroke();
//         this.context.stroke();
//         let t1=new Geo_Text("P",new Point(880,718),this.canvas);
//         t1.color="blue";
//         t1.textalingment="center";
//         t1.draw();
//         this.context.beginPath();
//         this.context.arc(950*lscale,725*lscale, 18 * lscale, 0, 2 * Math.PI, false);
//         this.context.fillStyle=this.color1;
//         this.context.fill();
//         this.context.lineWidth = 2;
//         this.context.stroke();
//         let t2=new Geo_Text("H",new Point(950,718),this.canvas);
//         t2.color="blue";
//         t2.textalingment="center";
//         t2.draw();
//         this.context.lineWidth=1;
//     }
//     } 
//     export class Geo_Text extends Geometry{
//         font="17px Arial";
//         color="black";
//         angle=0;
//         textalingment:CanvasTextAlign="left";
//         // stpt:Point;
//         text:string;
//         canvas:HTMLCanvasElement;
//         context:CanvasRenderingContext2D;
//         constructor(text:string,stpt:Point,canvas:HTMLCanvasElement){
//             super();
//             this.stpt=stpt;
//             this.canvas=canvas;
//             this.context=this.canvas.getContext("2d");
//             this.text=text;
//         }
//         draw(){
//             let y = this.font.split("px");
//             let font_size = parseInt(y[0])*lscale;
//             this.context.font=`${font_size}px Arial`;
//             this.context.fillStyle=this.color;
//             this.context.textAlign=this.textalingment;
//             this.context.save();
//             this.context.translate(this.stpt.x*lscale,this.stpt.y*lscale)
//             this.context.rotate(this.angle*Math.PI/180);
//             this.context.scale(1,-1);
//             this.context.fillText(this.text,0,0);
//             this.context.restore();
//         }
//        }
//    //added rectangle class
//    export class Rectangle extends Geometry {
//         l:number;
//         w:number;
//         name: string;
//         canvas:HTMLCanvasElement;
//         context:CanvasRenderingContext2D;
//         color:string="#599d9c";
//         angle = 0;
//         constructor(l:number, w:number, stpt: Point, canvas: HTMLCanvasElement) {
//             super();
//             this.stpt = stpt;
//             this.l = l;
//             this.w = w;
//             this.canvas = canvas;
//             this.context = this.canvas.getContext('2d');
//         }
//         draw(): void {
//             this.context.save();
//             this.context.translate(this.stpt.x*lscale, this.stpt.y*lscale);
//             this.context.rotate(this.angle*Math.PI/180);
//             this.context.beginPath();
//             this.context.moveTo(0, 0);
//             this.context.lineTo(0 + this.l*lscale, 0);
//             this.context.lineTo(0 + this.l*lscale, 0 + this.w*lscale);
//             this.context.lineTo(0, 0 + this.w*lscale);
//             this.context.lineTo(0, 0);
//             this.context.closePath();
//             this.context.lineWidth = 1;
//             this.context.fillStyle = this.color;
//             this.context.fill();
//             this.context.stroke();
//             this.context.restore();
//         }
//         isinside(point: Point): boolean {
//             let x = point.x;
//             let y = point.y;
//             if((x >= this.stpt.x) && (x <= (this.stpt.x + this.l))) {
//                 if((y >= this.stpt.y) && (y <= (this.stpt.y + this.w))) {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             }
//             return false;
//         }
//    }
//    export class Arrow extends Geometry {
//        pointing_direction: string = "left";
//        color: string = "green";
//        canvas: HTMLCanvasElement;
//        context: CanvasRenderingContext2D;
//        constructor(stpt: Point, pointing_direction: string, canvas: HTMLCanvasElement) {
//            super();
//            this.stpt = stpt;
//            this.pointing_direction = pointing_direction;
//            this.canvas = canvas;
//            this.context = canvas.getContext('2d');
//        }
//        draw(): void {
//         // rotating
//         this.context.save();
//         this.context.translate(this.stpt.x*lscale, this.stpt.y*lscale)
//         if(this.pointing_direction == "top") {
//             this.context.rotate(-90*Math.PI/180);
//           } else if(this.pointing_direction == "left") {
//             this.context.rotate(0);
//           } else if(this.pointing_direction == "bottom") {
//             this.context.rotate(90*Math.PI/180);
//           } else if(this.pointing_direction == "right") {
//             this.context.rotate(180*Math.PI/180);   
//           }
//           // drawing lines
//           this.context.beginPath();
//           this.context.moveTo(0, 0);
//           this.context.lineTo(10*lscale, 10*lscale);
//           this.context.lineTo(0, 0);
//           this.context.lineTo(50*lscale, 0);
//           this.context.lineTo(0, 0);
//           this.context.lineTo(10*lscale, -10*lscale);
//           this.context.lineWidth = 4;
//         //   this.context.fillStyle = this.color;
//         //   this.context.fill();
//         //   this.context.closePath();
//           this.context.strokeStyle = "#1b7e48";
//           this.context.stroke();
//           this.context.restore();
//        }
//    }
// }
//# sourceMappingURL=geometry.js.map