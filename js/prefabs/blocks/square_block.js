'use strict';

var SquareBlock = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'square_block');

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.immovable = true;
  
};

SquareBlock.prototype = Object.create(Phaser.Sprite.prototype);
SquareBlock.prototype.constructor = SquareBlock;
