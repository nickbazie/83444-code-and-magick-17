'use strict';
var canvasPositionX = 100;
var canvasPositionY = 10;
var CANVAS_WIDTH = 420;
var CANVAS_HEIGHT = 270;

window.renderStatistics = function(ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; //canvas shadow
  ctx.fillRect(canvasPositionX + 10, canvasPositionY + 10, CANVAS_WIDTH, CANVAS_HEIGHT)

  ctx.fillStyle = '#fff'; //canvas body
  ctx.fillRect(canvasPositionX, canvasPositionY, CANVAS_WIDTH, CANVAS_HEIGHT);
};