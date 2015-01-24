    'use strict';

var Player2 = function(game, x, y) {
    GameObject.call(this, game, x, y, 'square');

    this.game.physics.arcade.enableBody(this);
    this.body.collideWorldBounds = true;
};

Player2.prototype = Object.create(Phaser.Sprite.prototype);
Player2.prototype.constructor = Player2;

var player2_move_time = 0;

Player2.prototype.update = function() {
  
  
  
};

