import { Chart } from 'react-chartjs-2';

var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;

Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    var chart = this.chart;
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    var fontSize = (height / 114).toFixed(2);
    console.log(fontSize);
    ctx.font = fontSize + "em sans-serif";    
    ctx.textBaseline = "middle";

    var textsecond = chart.options.title.textsecond,
        textsecondX = Math.round((width - ctx.measureText(textsecond).width) / 2),
        //secondtextX = Math.round((width - ctx.measureText(secondtext).width) / 2),
        textsecondY = height / 2;

    var text = chart.options.title.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        //secondtextX = Math.round((width - ctx.measureText(secondtext).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY-20);
    ctx.fillText(textsecond, textX, 20+textY);
  }
});