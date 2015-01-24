    'use strict';

var Player = function(game, x, y) {
    GameObject.call(this, game, x, y, 'square');

    this.game.physics.arcade.enableBody(this);
    this.body.collideWorldBounds = true;
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

