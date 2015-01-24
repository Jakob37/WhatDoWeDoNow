'use strict';

var LBlock = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'l_block');

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.immovable = true;
  
};

LBlock.prototype = Object.create(Phaser.Sprite.prototype);
LBlock.prototype.constructor = LBlock;

