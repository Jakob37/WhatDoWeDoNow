'use strict';

var LongBlock = function(game, x, y, direction) {
    Phaser.Group.call(this, game);

    self.tile_size = 32;
    self.color = 0x0000ff;
    this.move_time = 0;
    this.move_time_delay = 300;
    this.direction = direction;
    
    this.addComponent(x, y, 0, 0);
    this.addComponent(x, y, 0, 1);
    this.addComponent(x, y, 0, 2);
    this.addComponent(x, y, 0, 3);
    
};

LongBlock.prototype = Object.create(Phaser.Group.prototype);
LongBlock.prototype.constructor = LongBlock;

LongBlock.prototype.addComponent = function(xpos, ypos, xtile, ytile) {
    this.tile = new BlockComponent(this.game, xpos + xtile*self.tile_size, 
        ypos + ytile*self.tile_size);
    this.tile.tint = self.color;
    this.add(this.tile);
};

LongBlock.prototype.update = function() {
    if (this.game.time.now > this.move_time) {
        move_blocks_in_group(this, this.direction);
        this.move_time = this.game.time.now + this.move_time_delay;
    }
};