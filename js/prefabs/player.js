'use strict';

var Player = function(game, x, y) {
    GameObject.call(this, game, x, y, 'square');

    this.game.physics.arcade.enableBody(this);
    this.body.collideWorldBounds = true;
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

var player1_move_time = 0;

Player.prototype.update_player = function(block_group) {
  
    if (this.game.time.now > player1_move_time) {
        this.update_movement(block_group);
        player1_move_time = this.game.time.now + delay;
    }
};

Player.prototype.update_movement = function(block_group) {
    var cursors = this.game.input.keyboard.createCursorKeys();

    if (cursors.right.isDown) {
        GameObject.prototype.move(this, dirEnum.Right);

//        block_group.forEach(function(){
//            console.log("hello!");
//        });
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

