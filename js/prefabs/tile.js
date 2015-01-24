'use strict';

var Tile = function(game, x, y) {
    GameObject.call(this, game, x, y, 'tile');

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = true;
  //this.body.immovable = true;
  
};

Tile.prototype = Object.create(Phaser.Sprite.prototype);
Tile.prototype.constructor = Tile;

var tile_move_time = 0;

Tile.prototype.update = function() {
  console.log("In update ");
    if (this.game.time.now > tile_move_time) {
        console.log("In update if");
        this.update_movement();
        tile_move_time = this.game.time.now + delay;
    } 
  
};

Tile.prototype.update_movement = function() {
    console.log("In update movement");
    GameObject.move(this, dirEnum.Down);
};