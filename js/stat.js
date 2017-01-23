const WINDOW_HEIGHT = 300;

window.convertY = function(y) {
  return WINDOW_HEIGHT - y;
}

window.renderStatistics = function(ctx, names, times) {
  const cloudX0 = 100;
  const cloudY0 = 10;
  const cloudHeight = 270;
  const cloudWidth  = 420;

  var cloudX = cloudX0;
  var cloudY = cloudY0 + cloudHeight;

  var cloudShadowX = cloudX + 10;
  var cloudShadowY = cloudY - 10;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(cloudShadowX, convertY(cloudShadowY), cloudWidth, cloudHeight);

  ctx.fillStyle = 'white';
  ctx.fillRect(cloudX, convertY(cloudY), cloudWidth, cloudHeight);

  var cloudTitleX = cloudX + 15;
  var cloudTitleY = cloudY - 15;
  var cloudTitle2Y = cloudTitleY - 20;

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', cloudTitleX, convertY(cloudTitleY));
  ctx.fillText('Список результатов:', cloudTitleX, convertY(cloudTitle2Y));

  Histogram.drawHist(ctx, names, times, cloudX0 + 50, cloudY0 + 10);
}


var Histogram = {
  histHeight:   150,
  histWidth:     40,
  histColMargin: 50,
  lineHeight:    16,
  lineSpace:      8,

  drawHist: function(ctx, names, times, x0, y0) {
    var maxTime = Math.max.apply(null, times);
    var ratio = this.histHeight / maxTime;
    for(var playerNumber = 0; playerNumber < times.length; playerNumber++) {
      this.drawColumn(ctx, names[playerNumber], times[playerNumber], playerNumber, ratio, x0, y0);
    }
  },

  drawColumn: function(ctx, name, time, playerNumber, ratio, x0, y0) {
    var columnX = (this.histWidth + this.histColMargin) * playerNumber + x0;
    var columnHeight = ratio * time;
    var columnY = columnHeight + (this.lineHeight + this.lineSpace) + y0;
  
    ctx.fillStyle = this.findColor(name);

    ctx.fillRect(columnX, convertY(columnY), this.histWidth, columnHeight);

    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(name, columnX, convertY(this.lineHeight + y0));
    ctx.fillText(Math.round(time), columnX, convertY(this.lineHeight + this.lineSpace + columnY));
  },

  findColor: function(name) {
    if (name == 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    } else {
      return 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
  }
}
