class Game {
constructor(){
}
//This will grab the value of the gamestate from the database
getState(){
var gameStateRef = database.ref('gameState');
gameStateRef.on("value",function(data){
    gameState = data.val();
});
}
//This function will update the value of the gameState
update(state){
    database.ref('/').update({
        gameState:state 
    });
}
//This function is to start the game
start(){
   if(gameState ===0){
player = new Player();
player.getCount ();
form = new Form();
form.display();
}}}