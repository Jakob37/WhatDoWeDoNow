
var play = function(game) {
};

var player_group;
var block_group;

var tile_size = 32;

var delay = 150;

var create_time = 0;
var create_delay = 1000;

var test_tile;
var sfx;
var music;

play.prototype = {

    preload: function() {
        this.game.load.image('square', 'sprites/purple_sq.png');
        this.game.load.image('tile', 'sprites/green_sq.png');

        this.game.load.image('l_block', 'sprites/l_block.png');
        this.game.load.image('long_block', 'sprites/long_block.png');
        this.game.load.image('square_block', 'sprites/square_block.png');

        this.game.load.audio('colored_squares_song', 'sound/testsong1.ogg');
        this.game.load.audio('sfx', ['sound/random_sound1.wav']);
    },
    
    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        sfx = this.game.add.audio('sfx');
        music = this.game.add.audio('colored_squares_song');
        music.play();

        player_group = this.game.add.group();
        block_group = this.game.add.group();
        
        this.setup_players();
        
        //this.generate_terrain();
    },
    
    setup_players: function() {

        player_group = this.game.add.group();
        var player = new Player(this, 64, 64);
        var player2 = new Player2(this, 256, 256);
        player_group.add(player);
        player_group.add(player2);

    },
    
    generate_terrain: function() {
        
        var tiles = 4;
        for (var n = 0; n < tiles; n++) {
            this.create_random_tile();            
        }
    },
    
    create_random_tile: function() {
        
        var direction = Math.floor(Math.random() * 4);
                
        var x = this.get_x(direction);
        var y = this.get_y(direction);
        
        var block_number = Math.floor(Math.random() * 3);

        var block;        
        if (block_number === 0) {
            block = new SquareBlock(this, x, y, direction);
        }
        else if (block_number === 1) {
            block = new LBlock(this, x, y, direction);
        }
        else if (block_number === 2) {
            block = new LongBlock(this, x, y, direction);    
        }
        
        block_group.add(block);
    },
    get_x: function(direction) {
        if (direction === 0 || direction === 1) {
            return this.get_random_tile_pos();
        }
        else if (direction === 2) {
            return this.game.width;
        }
        else if (direction === 3) {
            return 0;
        }
        else {
            alert("whats going on");
        }
    },
    get_y: function(direction) {
        if (direction === 2 || direction === 3) {
            return this.get_random_tile_pos();
        }
        else if (direction === 0) {
            return this.game.height;
        }
        else if (direction === 1) {
            return 0;
        }
        else {
            alert("whats going on");
        }
    },
    get_random_tile_pos: function() {
        return Math.floor(Math.random() * 15) * tile_size;
    },
    
    update: function() {

        this.game.physics.arcade.collide(player_group, player_group);
        
        block_group.forEach(function(sub_block) {
            this.game.physics.arcade.collide(player_group, sub_block);
            //sub_block.prototype.update();
        }, this);
        
        this.tile_generator();
    },
    
    tile_generator: function() {
        if (this.game.time.now > create_time) {
            this.create_random_tile();
            create_time = this.game.time.now + create_delay;
            create_delay *= 0.95;
            console.log("Current delay: " + create_delay);
        }
    }
};
