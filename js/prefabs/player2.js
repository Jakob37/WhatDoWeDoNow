    'use strict';

var Player2 = function(game, x, y) {
    GameObject.call(this, game, x, y, 'square');

    this.game.physics.arcade.enableBody(this);
    this.body.collideWorldBounds = true;
};

Player2.prototype = Object.create(Phaser.Sprite.prototype);
Player2.prototype.constructor = Player2;

var player2_move_time = 0;

Player2.prototype.update_player = function(block_group) {
  
    if (this.game.time.now > player2_move_time) {
        this.update_movement(block_group);
        player2_move_time = this.game.time.now + delay;
    }  
};

Player2.prototype.update_movement = function(block_group) {
    var upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    var downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

    var attempted_pos = null;
    if (upKey.isDown) {
        attempted_pos = GameObject.prototype.move(this, dirEnum.Up);
    }
    else if (leftKey.isDown) {
        attempted_pos = GameObject.prototype.move(this, dirEnum.Left);
    }
    else if (rightKey.isDown) {
        attempted_pos = GameObject.prototype.move(this, dirEnum.Right);
    }
    else if (downKey.isDown) {
        attempted_pos = GameObject.prototype.move(this, dirEnum.Down);
    }
    
    if (attempted_pos !== null) {
        var collide_components = GameObject.prototype.getComponentsAt(block_group, attempted_pos[0], attempted_pos[1]);
        if (collide_components.length !== 0) {
            collide_components.forEach(function(collide_component) {
                collide_component.damage();                
            }, this);            
        }
    }
};