class Player {
    constructor(){
    }
//This function will take the value of player count from the database
getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
        playerCount = data.val();
    });
    }
    //This function will update the value of the player count
    updateCount(count){
        database.ref('/').update({
            playerCount:count 
        });
    }
    //This function is to update the database under the value of player's name
    update(name)
    {
        var playerIndex = "Player" + playerCount ;
        database.ref(playerIndex).set({
    //this will be setting the player name
        Name:name
        });

    }
}