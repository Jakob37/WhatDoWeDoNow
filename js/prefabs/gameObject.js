'use strict';

var GameObject = function(game, x, y) {
    Phaser.Sprite.call(this, game,x, y, 'square');
    
    
};

GameObject.prototype = Object.create(Phaser.Sprite.prototype);
GameObject.prototype.constructor = GameObject;

GameObject.prototype.move = function() {
    
};