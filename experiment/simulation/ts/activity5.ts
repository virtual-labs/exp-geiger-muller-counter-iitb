

var move_act7_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="activity7();" style=" position: absolute; bottom: 8vh; width: 85%;">Next</button>`;

 declare var Chart;

 var label = [];
  var data = [];
  var data1 = [];


  function draw_chart() {

    document.getElementById('hide_panel3').click();

    pp.clearleftpannel();
    pp.addcanvas('myChart');

    if(document.getElementById('panel1_btn')) {
        document.getElementById("panel1_btn").remove();
    }


  
    for(let i=0; i<main_data_table.length; i++) {
        label.push(main_data_table[i][1]);
        data.push(main_data_table[i][3]);
    }

    // calculate_y_datapoints();
    var ctx = document.getElementById('myChart');
    ctx.style.backgroundColor = "white";
    ctx.style.marginTop = "5px";
    ctx.style.marginLeft = "10%";
    ctx.style.padding = "10px";
    ctx.style.borderRadius = "8px";
    if(typeof chart!='undefined')
    {
        chart.destroy();
    }
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
        labels: label,
        datasets: [
        {
            label: 'Experimental',
            data: data,
            fill: false,
            borderColor: 'blue',
            tension: 0.5,
            showLine: true,
            // yAxisID: 'A',
            // borderWidth: 1,
            // borderColor: "green",
            // backgroundColor: "rgba(34, 139, 34, 0.5)",
        },
        // {
        //     label: 'Best Fit ln(X) = A + B/T + C x ln(T)',
        //     data: data1,
        //     fill: false,
        //     borderColor: 'red',
        //     tension: 0.5,
        //     showLine: true
        //     // yAxisID: 'A',
        //     // borderWidth: 1,
        //     // borderColor: "red",
        //     // backgroundColor: "rgba(255, 0, 0, 0.5)",
        // },
        
        
        ]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
              y: {
                title: {
                    display: true,
                    text: 'Corrected Count',
                    font:{size:14,weight:'bold'}
                  }
              },
              x: {
                title: {
                    display: true,
                    text: 'Voltage',
                    font:{size:14,weight:'bold'}
                  }
              }
            
            },
            plugins: {
                title: {
                  display: true,
                  text: `Voltage vs Corrected Count`,
                  font: {size: 18},
                },
                legend:{labels:{font:{size:14,weight:'bold'}}}
            },
                   
        }
    });

    pp.addtorightpannel(move_act7_btn, 3);
  }

//   function calculate_y_datapoints() {
//     // pol = regression_linear(label, data);
//     // console.log(pol);
//     for(let i=0; i<label.length; i++) {
//       data1.push(Math.exp(A + B/T[i] + C*Math.log(T[i])));
//     }
    
//   }

 
  

  
//   var pol;


