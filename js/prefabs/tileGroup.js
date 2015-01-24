'use strict';

//var Tile = require('./tile');

var TileGroup = function(game, parent) {
  Phaser.Group.call(this, game, parent);
  
  // 0,0 indicates that the group shouldn't be transposed
  // last 0 indicates that we use the first frame
  this.topPipe = new Tile(this.game, 0, 0, 0);
  this.bottomPipe = new Tile(this.game, 0, 20, 1);
  this.add(this.topPipe); 
  this.add(this.bottomPipe);
  this.hasScored = false;
  
  // Calls the method on all instances
  this.setAll('body.velocity.x', -200);
};

TileGroup.prototype = Object.create(Phaser.Group.prototype);
TileGroup.prototype.constructor = TileGroup;

TileGroup.prototype.update = function() {
    this.checkWorldBounds();
};

TileGroup.prototype.reset = function(x, y) {
    this.topPipe.reset(0, 0);
    this.bottomPipe.reset(0, 440);
    this.x = x;
    this.y = y;
    this.setAll('body.velocity.x', -200);
    this.hasScored = false;
    this.exists = true;
}

TileGroup.prototype.checkWorldBounds = function() {

    if (!this.topPipe.inWorld) {
        this.exists = false;
    }
};


module.exports = TileGroup;
