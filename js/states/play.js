
var play = function(game) {
};

var player_group;
var tile_group;

var player;
var player2;

var tile_size = 32;

var delay = 150;
var player2_move_time = 0;

var tile_size = 32;

var test_tile;
var sfx;

play.prototype = {

    preload: function() {
        this.game.load.image('square', 'sprites/purple_sq.png');
        this.game.load.image('tile', 'sprites/green_sq.png');

        this.game.load.image('l_block', 'sprites/l_block.png');
        this.game.load.image('long_block', 'sprites/long_block.png');
        this.game.load.image('square_block', 'sprites/square_block.png');

        this.game.load.audio('sfx', ['sound/random_sound1.wav']);
    },
    
    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        sfx = this.game.add.audio('sfx');

        this.setup_players();
        this.generate_terrain();        
    },
    
    setup_players: function() {

        player_group = this.game.add.group();
        player = new Player(this, 64, 64);
        player2 = new Player2(this, 256, 256);
        player_group.add(player);
        player_group.add(player2);

        this.game.physics.arcade.enable(player);
        player.body.collideWorldBounds = true;

        this.game.physics.arcade.enable(player2);
        player2.body.collideWorldBounds = true;
    },
    
    generate_terrain: function() {
        tile_group = this.game.add.group();
        tile_group.enableBody = true;
        
        var tiles = 4;
        for (var n = 0; n < tiles; n++) {
            this.create_random_tile(tile_group);            
        }
    },
    create_random_tile: function(tile_group) {
        var x = this.get_random_tile_pos();
        var y = this.get_random_tile_pos();
        
        var block_number = Math.floor(Math.random() * 3);
        
        var tile;
        if (block_number === 0) {
            tile = new SquareBlock(this, x, y);
        }
        else if (block_number === 1) {
            tile = new LBlock(this, x, y);            
        }
        else if (block_number === 2) {
            tile = new LongBlock(this, x, y);            
        }
        
        tile_group.add(tile);

    },
    get_random_tile_pos: function() {
        return Math.floor(Math.random() * 15) * tile_size;
    },
    
    update: function() {

        this.game.physics.arcade.collide(player, player2);
        this.game.physics.arcade.collide(player_group, tile_group);
    }
}
