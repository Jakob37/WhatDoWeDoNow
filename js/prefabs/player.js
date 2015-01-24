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
        this.update_movement();
        player1_move_time = this.game.time.now + delay;
    }
};

Player.prototype.update_movement = function() {
    var cursors = this.game.input.keyboard.createCursorKeys();

    if (cursors.right.isDown) {
        GameObject.prototype.move(this, dirEnum.Right);
    }
    else if (cursors.left.isDown) {
        GameObject.prototype.move(this, dirEnum.Left);
    }
    else if (cursors.up.isDown) {
        GameObject.prototype.move(this, dirEnum.Up);
    }
    else if (cursors.down.isDown) {
        GameObject.prototype.move(this, dirEnum.Down);
    }
};
