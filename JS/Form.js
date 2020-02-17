class Form {
    constructor(){
    }
    display(){
        var title = createElement('H1');
        title.html ("Cool Cars 3D") ; 
        title.position(600,100);
        var input = createInput("Name");
        input.position(630,350);
        var button = createButton('Lets Go!');
        button.position(650,450);
        var greeting = createElement('H2');
        button.mousePressed(function(){
        input.hide();
        button.hide();

        var name = input.value();
        playerCount = playerCount + 1 ;
        player.update(name);
        player.updateCount(playerCount)
        greeting.html("Welcome!"+name);
        greeting.position(650,250);
        });
    }
}