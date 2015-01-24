'use strict';

var BlockComponent = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'tile');

    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;
    this.body.immovable = true;  
};

BlockComponent.prototype = Object.create(Phaser.Sprite.prototype);
BlockComponent.prototype.constructor = BlockComponent;


