var end = function(game) {
};

end.prototype = {
    
    preload: function() {

    },
    create: function() {
//        this.start_button = this.game.add.button(this.game.width / 2, this.game.height / 2, 
//            'start_button', this.start_click, this);
//        this.start_button.anchor.setTo(0.5, 0.5);
        
        var style = { font: 'bold 45pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450 };
        var style2 = { font: 'bold 24pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450 };

        var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, "You Are Clogged!", style);
        text.anchor.set(0.5);
        
        var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 100, "Press [space] to restart", style2);
        text.anchor.set(0.5);

    },
    update: function() {
        var key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        if (key.isDown) {
            this.game.state.start('Menu');
        }
    }
    
};