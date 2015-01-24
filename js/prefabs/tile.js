'use strict';

var Tile = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'tile');

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;
  this.body.immovable = true;
  
};

Tile.prototype = Object.create(Phaser.Sprite.prototype);
Tile.prototype.constructor = Tile;

Tile.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

//module.exports = Tile;
