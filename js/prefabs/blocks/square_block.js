'use strict';

var SquareBlock = function(game, x, y) {
    Phaser.Group.call(this, game);

    self.tile_size = 32;
    
    this.addComponent(x, y, 0, 0);
    this.addComponent(x, y, 0, 1);
    this.addComponent(x, y, 1, 0);
    this.addComponent(x, y, 1, 1);
    
};

SquareBlock.prototype = Object.create(Phaser.Group.prototype);
SquareBlock.prototype.constructor = SquareBlock;

SquareBlock.prototype.addComponent = function(xpos, ypos, xtile, ytile) {
    this.tile = new BlockComponent(this.game, xpos + xtile*self.tile_size, 
        ypos + ytile*self.tile_size);
    this.add(this.tile);
};

