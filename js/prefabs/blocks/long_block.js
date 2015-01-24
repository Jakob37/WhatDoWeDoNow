'use strict';

var LongBlock = function(game, x, y) {
    Phaser.Group.call(this, game);

    self.tile_size = 32;
    self.color = 0x0000ff;
    
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
    this.forEach(function(component) {
        console.log("In update movement");
        GameObject.prototype.move(component, dirEnum.Down);
    }, this);
};