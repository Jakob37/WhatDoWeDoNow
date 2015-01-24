var menu = function(game) {
    //alert("hi!");
};

menu.prototype = {
    
    preload: function() {
        this.game.load.image('start_button', 'sprites/title_text.png');

    },
    create: function() {
        this.start_button = this.game.add.button(this.game.width / 2, this.game.height / 2, 
            'start_button', this.start_click, this);
        this.start_button.anchor.setTo(0.5, 0.5);
    },
    start_click: function() {
        this.game.state.start('Play');
    },
    update: function() {
        
    }
    
};