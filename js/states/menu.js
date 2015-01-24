var menu = function(game) {
};

menu.prototype = {
    
    preload: function() {
        this.game.load.image('start_button', 'sprites/title_text.png');

    },
    create: function() {
        this.start_button = this.game.add.button(this.game.width / 2, this.game.height / 2, 
            'start_button', this.start_click, this);
        this.start_button.anchor.setTo(0.5, 0.5);
        
        var style = { font: 'bold 45pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450 };

        var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, "Two Blocks", style);

        text.anchor.set(0.5);
        

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