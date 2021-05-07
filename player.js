class Player {
    constructor(){
this.index = null
this.distance = 0
this.name = null
this.rank = null

    }
    getCount(){
        database.ref('playerCount').on("value",function(bag){
            playerCount = bag.val()
        }) 
    }
    updateCount(a){
        database.ref('/').update({
            playerCount:a
        })
    }
    update(){
        var playerInfo = "players/player"+this.index
        database.ref(playerInfo).update({
            name:this.name,
            distance:this.distance
        })
    }
getFinishedPlayers (){
    database.ref('finishedPlayers').on("value",(data) =>  {
        this.rank = data.val()
    })
}
static updateFinishedPlayers(rank){
    database.ref('/').update({
        finishedPlayers:rank
    })
}

    static getPlayerInfo(){
        database.ref('players').on("value",(data)=>{
allPlayers = data.val()
        }) 
    }
}
