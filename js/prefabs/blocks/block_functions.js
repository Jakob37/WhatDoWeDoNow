
move_blocks_in_group = function(context, direction) {
    context.forEach(function(component) {
        GameObject.prototype.move(component, direction);
    }, context);    
};

