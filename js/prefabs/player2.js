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
  
    if (this.game.time.now > player1_move_time) {
        this.update_movement();
        player2_move_time = this.game.time.now + delay;
    }  
};

Player2.prototype.update_movement = function() {
    var upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    var downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

    if (upKey.isDown) {
        GameObject.prototype.move(this, dirEnum.Up);
    }
    else if (leftKey.isDown) {
        GameObject.prototype.move(this, dirEnum.Left);
    }
    else if (rightKey.isDown) {
        GameObject.prototype.move(this, dirEnum.Right);
    }
    else if (downKey.isDown) {
        GameObject.prototype.move(this, dirEnum.Down);
    }
};