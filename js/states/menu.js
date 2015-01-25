var menu = function(game) {
};

menu.prototype = {
    
    preload: function() {
        this.game.load.image('square', 'sprites/purple_sq.png');

    },
    create: function() {
        
        var style = { font: 'bold 45pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450 };
        var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, "Two Blocks", style);
        text.anchor.set(0.5);
        
        var style2 = { font: 'bold 12pt Arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 450 };
        var text2 = this.game.add.text(145, this.game.world.centerY + 50, "[W,A,S,D]", style2);
        text2.anchor.set(0.5);
        
        var style4 = { font: 'bold 12pt Arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 450 };
        var text4 = this.game.add.text(340, this.game.world.centerY + 50, "[Arrowkeys] ", style4);
        text4.anchor.set(0.5);
        
        var style3 = { font: 'bold 18pt Arial', fill: 'white', align: 'left', wordWrap: false, wordWrapWidth: 450 };
        var text3 = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 150, "Press [SPACEBAR] to start", style3);
        text3.anchor.set(0.5,0.5); 
        
        this.game.add.sprite(128, 224 , 'square');
        this.game.add.sprite(320, 224 , 'square');
    },
    start_click: function() {
        this.game.state.start('Play');
    },
    update: function() {
        var key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        if (key.isDown) {
            this.game.state.start('Play');
        }
    }
    
};