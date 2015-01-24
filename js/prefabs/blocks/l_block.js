'use strict';

var LBlock = function(game, x, y) {
    Phaser.Group.call(this, game);

    self.tile_size = 32;
    self.color = 0x00ff00;
    
    this.addComponent(x, y, 0, 0);
    this.addComponent(x, y, 0, 1);
    this.addComponent(x, y, 0, 2);
    this.addComponent(x, y, 1, 2);
    
};

LBlock.prototype = Object.create(Phaser.Group.prototype);
LBlock.prototype.constructor = LBlock;

LBlock.prototype.addComponent = function(xpos, ypos, xtile, ytile) {
    this.tile = new BlockComponent(this.game, xpos + xtile*self.tile_size, 
        ypos + ytile*self.tile_size);
    this.tile.tint = self.color;
    this.add(this.tile);
};

