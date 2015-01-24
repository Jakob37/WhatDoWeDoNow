'use strict';

var LongBlock = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'long_block');

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.immovable = true;
  
};

LongBlock.prototype = Object.create(Phaser.Sprite.prototype);
LongBlock.prototype.constructor = LongBlock;
