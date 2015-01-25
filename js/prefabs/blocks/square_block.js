'use strict';

var SquareBlock = function(game, x, y, direction) {
    Phaser.Group.call(this, game);

    self.tile_size = 32;
    self.color = this.getRandomColor();
    console.log(this.getRandomColor());
    self.damped_color = 0x999999;
    this.move_time = 0;
    this.move_time_delay = 100;
    this.direction = direction;
    
    this.is_moving = true;
    
    this.origo_component = this.addComponent(x, y, 0, 0);
    this.comp3 = this.addComponent(x, y, 1, 0);
    this.comp4 = this.addComponent(x, y, 1, 1);
    this.second_com = this.addComponent(x, y, 0, 1);
};

SquareBlock.prototype = Object.create(Phaser.Group.prototype);
SquareBlock.prototype.constructor = SquareBlock;

SquareBlock.prototype.getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '0x';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

SquareBlock.prototype.addComponent = function(xpos, ypos, xtile, ytile) {
    this.tile = new BlockComponent(this.game, xpos + xtile*self.tile_size, 
        ypos + ytile*self.tile_size);
    //this.tile.tint = self.color;
    this.tile.setTint(self.color);

    this.add(this.tile);
    return this.tile;
};

SquareBlock.prototype.get_coordinate = function() {
    return [this.origo_component.position.x, this.origo_component.position.y];        
};

SquareBlock.prototype.stopMovement = function() {
    this.is_moving = false;
    this.origo_component.tint = self.damped_color;
    this.second_com.tint = self.damped_color;
    this.comp3.tint = self.damped_color;
    this.comp4.tint = self.damped_color;
};

SquareBlock.prototype.update_movement = function() {

    if (this.is_moving === true && this.game.time.now > this.move_time) {
        
        move_blocks_in_group(this, this.direction);
        this.move_time = this.game.time.now + this.move_time_delay;
    }
};

SquareBlock.prototype.getCollidePositions = function() {
    
    var coordinate = this.get_coordinate();
    if (coordinate === undefined) {
        return;
    }
    var x = coordinate[0];
    var y = coordinate[1];
    var tile_size = 32;
    
    var block_height = 2;
    
    if (this.direction === 0) {
        return [[x, y - tile_size],[x+tile_size, y-tile_size]];
    }
    if (this.direction === 1) {
        return [[x, y + 2*tile_size],[x+tile_size, y + block_height*tile_size]];
    }
    if (this.direction === 2) {
        return [[x-tile_size, y],[x-tile_size, y+tile_size]];
    }
    if (this.direction === 3) {
        return [[x+2*tile_size, y],[x+tile_size, y+tile_size]];
    }
};

SquareBlock.prototype.willCollide = function(block_group) {
        
    var will_collide = false;
    block_group.forEach(function(block) {
        
        if (block.is_moving) {
            return;
        }
        
        block.forEach(function(component) {
            
            if (component.isDead()) {
                return;
            }
            
            var collidePositions = this.getCollidePositions();
            var componentPosition = [component.position.x, component.position.y];
            var colliding = this.checkCollision(collidePositions, componentPosition);
            if (colliding === true) {
                will_collide = true;
            }
            //console.log('x: ' + component.position.x + ' y: ' + component.position.y);
        }, this);
    }, this);
    
    return will_collide;
};

SquareBlock.prototype.willCollidePlayer = function(player_group) {
    var will_collide = false;
    player_group.forEach(function(player){
        var collidePositions = this.getCollidePositions();
        var playerPosition = [player.position.x, player.position.y];
        var colliding = this.checkCollision(collidePositions, playerPosition);
        if (colliding === true) {
            will_collide = true;
        }
    }, this);
    
    return will_collide;
};

SquareBlock.prototype.checkCollision = function(collidePositions, componentPosition) {
    
    var collision_detected = false;
    collidePositions.forEach(function(pos) {
        
        if (pos[0] === componentPosition[0] && pos[1] === componentPosition[1]) {
            collision_detected = true;
        }
    }, this);
    return collision_detected;
};