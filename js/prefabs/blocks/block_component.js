'use strict';

var BlockComponent = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'tile');

    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
    
    this.health = 5;
};

BlockComponent.prototype = Object.create(Phaser.Sprite.prototype);
BlockComponent.prototype.constructor = BlockComponent;

BlockComponent.prototype.setTint = function(color) {
    this.tint = color;
};

BlockComponent.prototype.damage = function() {
    
    this.health -= 1;
    if (this.health <= 0) {
        this.kill();
    }
};