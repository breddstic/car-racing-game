class Game {
    constructor(){

    }

    getState(){
        database.ref('gameState').on("value",function(bag){
            gameState = bag.val()
        }
            
        )
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if (gameState === 0){
            background(bg)
            form = new Form()
            form.display()
            player = new Player()
            player.getCount()
        }
        car1 = createSprite(100,200)
        car1.addImage("c1", c1)
        car2 = createSprite(300,200)
        car2.addImage ("c2", c2)
        car3 = createSprite(500,200)
        car3.addImage ("c3", c3)
        car4 = createSprite(700,200)
        car4.addImage ("c4", c4)
        cars = [car1, car2, car3, car4]

    }
    play(){
        form.hide()
        textSize(30)
        text("Game Start",displayWidth/2,100)
        Player.getPlayerInfo()
        player.getFinishedPlayers()
        if(allPlayers!==undefined){
            background ("green")
            image (trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5)

            var index = 0
            var x = 250;
            var y = 0
            for(var i in allPlayers){
                index = index + 1
                x = x + 200
                y = displayHeight - allPlayers[i].distance
                cars [index-1].position.x = x
                cars[index-1].position.y = y
                if(i === "player"+player.index){
                    cars[index-1].shapeColor = "green"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].position.y
                    fill('yellow')
                    ellipseMode('CENTRE')
                    ellipse(x,y,70,70)
                    textSize(15)
                    text(allPlayers[i].name,x,y+75)
                }
                else{
                    cars[index-1].shapeColor = "yellow"
                    textSize(15)
                    text(allPlayers[i].name,x,y+75)
                }
                //dp+=20
                //textSize(15)
                //text(allPlayers[i].name+" : "+allPlayers[i].distance,120,dp)
            }
        }
        if(keyDown(UP_ARROW)&&player.index!==null){
            player.distance += 50
            player.update()
        }

        if (player.distance > 4150){
            gameState = 2
            player.rank += 1
            Player.updateFinishedPlayers(player.rank)
        } 


        drawSprites();

    }

    end(){
        var gameOver = createElement('h1')
        gameOver.html("GAME OVER")
        gameOver.position (displayWidth/2-50,200)
        var rank= createElement('h1')
        rank.html(player.rank)
        rank.position(displayWidth/2,220)
        rank.style('fontSize','50px')
    }






}