'use strict';

var Player = function(game, x, y) {
    GameObject.call(this, game, x, y, 'square');

    this.game.physics.arcade.enableBody(this);
    this.body.collideWorldBounds = true;
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

var player1_move_time = 0;

Player.prototype.update = function() {
  
    if (this.game.time.now > player1_move_time) {
      this.update_movement(player);
      player1_move_time = this.game.time.now + delay;
    }
  
};

Player.prototype.update_movement = function() {
    var cursors = this.game.input.keyboard.createCursorKeys();
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (cursors.right.isDown) {
        this.move(dirEnum.Right, player);
    }
    else if (cursors.left.isDown) {
        this.move(dirEnum.Left, player);
    }
    else if (cursors.up.isDown) {
        this.move(dirEnum.Up, player);
    }
    else if (cursors.down.isDown) {
        this.move(dirEnum.Down, player);
    }
};

Player.prototype.move = function(dir) {
    this.constructor.prototype.move(dir);
};