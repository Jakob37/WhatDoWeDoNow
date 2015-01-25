'use strict';

var BlockComponent = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'tile');

    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;
    
    this.health = 3;
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

BlockComponent.prototype.isDead = function() {
    return this.health <= 0;
};

BlockComponent.prototype.isOutside = function() {
    var x = this.position.x;
    var y = this.position.y;
    
    var x_outside = (x < 0 || x >= 480);
    var y_outside = (y < 0 || y >= 480);
    return (x_outside || y_outside);
};