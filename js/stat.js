'use strict';
var canvasPositionX = 100;
var canvasPositionY = 10;
var canvasWidth = 420;
var canvasHeight = 270;

window.renderStatistics = function(ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; //canvas shadow
  ctx.fillRect(canvasPositionX + 10, canvasPositionY + 10, canvasWidth, canvasHeight)

  ctx.fillStyle = '#fff'; //canvas body
  ctx.fillRect(canvasPositionX, canvasPositionY, canvasWidth, canvasHeight);
};