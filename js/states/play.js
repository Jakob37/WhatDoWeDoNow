
var play = function(game) {
};

var player_group;
var block_group;
var stopped_block_group;

var text;

var tile_size = 32;

var delay = 70;

var create_time = 0;
var create_delay = 2000;

var test_tile;
var sfx;
var music;

var info_text;

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

        player_group = this.game.add.group();
        block_group = this.game.add.group();
        stopped_block_group = this.game.add.group();
        
        var style = { font: "45px Arial", fill: "white", align: "center" };
        text = this.game.add.text(this.game.world.centerX, this.game.world.centerY -100, "What will we do now?", style);
        text.anchor.set(0.5);
        this.game.time.events.add(Phaser.Timer.SECOND * 1.5, this.remove_text, this);
        
        this.setup_players();
        
        this.generate_terrain();
        info_text = this.game.add.text(10, 10, 'Clogged tiles: ',
            {fontSize: '12px', fill:'#fff'});
        //this.create_square_pair();
    },
    
    remove_text: function() {
        this.game.add.tween(text).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        //music.play();
    },
    
    setup_players: function() {

        player_group = this.game.add.group();
        var player = new Player(this, 320, 224);
        var player2 = new Player2(this, 128, 224);
        player_group.add(player);
        player_group.add(player2);

    },
    
    generate_terrain: function() {
        
        var tiles = 0;
        for (var n = 0; n < tiles; n++) {
            this.create_random_tile();            
        }
    },
    
    create_square_pair: function() {
        var block = new SquareBlock(this, 200, 0, 1);
        var block2 = new SquareBlock(this, 200, 480, 0);
        block_group.add(block);
        block_group.add(block2);
    },
    
    create_random_tile: function() {
        
        var direction = Math.floor(Math.random() * 4);
                
        var x = this.get_x(direction);
        var y = this.get_y(direction);
        
        var block = new SquareBlock(this, x, y, direction);
        
//        var block_number = Math.floor(Math.random() * 3);
//
//        var block;        
//        if (block_number === 0) {
//            block = new SquareBlock(this, x, y, direction);
//        }
//        else if (block_number === 1) {
//            block = new LBlock(this, x, y, direction);
//        }
//        else if (block_number === 2) {
//            block = new LongBlock(this, x, y, direction);    
//        }
        
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
            return -2*tile_size;
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
            return -2*tile_size;
        }
        else {
            alert("whats going on");
        }
    },
    get_random_tile_pos: function() {
        return Math.floor(Math.random() * 15 - 1) * tile_size;
    },
    
    update: function() {

        this.game.physics.arcade.collide(player_group, player_group, self.test_func, null, this);
        
        // Update players
        player_group.forEach(function(pl){
            pl.update_player(block_group);
        }, this);
        
        // Collision
        block_group.forEach(function(sub_block) {
            this.game.physics.arcade.collide(player_group, sub_block);
            if(sub_block.is_moving) {

                if (sub_block.willCollide(block_group) ||
                        sub_block.willCollidePlayer(player_group)) {
                    console.log("stopping movement!");
                    sub_block.stopMovement();
                }
            }
        }, this);
        
        // Movement
        block_group.forEach(function(sub_block) {
            if(sub_block.is_moving) {
                sub_block.update_movement();
            }
        }, this);
        
        // Check for components dead outside
        block_group.forEach(function(sub_block) {
            if (!sub_block.is_moving) {
                sub_block.forEach(function(component){
                    if (component.isOutside()) {
                        component.kill();
                    }
                }, this);
            }
        }, this);
        
        this.tile_generator();
        
        info_text.text = "Clogged tiles: " + this.count_stopped_blocks();
    },
    
    tile_generator: function() {
        if (this.game.time.now > create_time) {
            this.create_random_tile();
            create_time = this.game.time.now + create_delay;
            create_delay *= 0.98;
        }
    },
    
    count_stopped_blocks: function() {
        var blocks = 0;
        block_group.forEach(function(block) {
            
            if(block.is_moving) {
                return;
            }
            
            block.forEach(function(component) {
                if (!component.isDead()) {
                    blocks += 1;
                }
            });
        });
        
        return blocks;
    },
};
