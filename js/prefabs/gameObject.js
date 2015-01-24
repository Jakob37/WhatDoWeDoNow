'use strict';

var dirEnum = {
    Up : 0,
    Down : 1,
    Left : 2,
    Right : 3
};

var GameObject = function( game, x, y) {
    Phaser.Sprite.call(this, game,x, y, 'square');
    
    
};

GameObject.prototype = Object.create(Phaser.Sprite.prototype);
GameObject.prototype.constructor = GameObject;

GameObject.prototype.move = function(instance, dir) {
            if (dir === dirEnum.Right) {
                instance.body.position.x += tile_size;
            }
            else if (dir === dirEnum.Left) {
                instance.body.position.x -= tile_size;
            }
            else if (dir === dirEnum.Up) {
                instance.body.position.y -= tile_size;
            }
            else if (dir === dirEnum.Down) {
                instance.body.position.y += tile_size;
            }
};