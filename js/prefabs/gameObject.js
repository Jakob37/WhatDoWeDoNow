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
    
    var end_pos = [instance.body.position.x, instance.body.position.y];
    return end_pos;
};

GameObject.prototype.getComponentsAt = function(block_group, posx, posy) {
    
    var target_components = [];
    //var target_component = null;
    
    block_group.forEach(function(block){

        block.forEach(function(component){
            
            var compx = component.position.x;
            var compy = component.position.y;
            if(compx === posx && compy === posy) {
                //target_component = component;
                target_components.push(component);
            }
        }, this);
    }, this);
    return target_components;
};