class Form {
    constructor(){
    this.input = createInput('').attribute('placeholder','Your Name')
    this.button = createButton('play')
    this.reset = createButton("reset")
    this.greeting = createElement('h2')
    }
    display(){
        var title = createElement('h1')
        title.html("multiplayer car racing game")
        title.position(displayWidth/2-200,0)
        title.style('fontSize','50px')

    
        this.input.position(displayWidth/2-50,200)
        this.input.style('height','30px')
        this.input.style('fontSize','20px')
        this.button.position(displayWidth/2-50,250)
        this.button.style('width','60px')
        this.button.style('height','40px')
        this.button.style('borderRadius','15px')
        this.button.style('fontSize','20px')
        this.reset.position(displayWidth-100,50)
        this.reset.style('width','60px')
        this.reset.style('height','30px')
        this.reset.style('fontSize', '20px')
        this.reset.mousePressed(()=>{
            game.updateState(0)
            player.updateCount(0)
            database.ref('/').update({
                players:null,
                finishedPlayers:0
            })
        })

        this.button.mousePressed(()=>{
          this.input.hide()
            this.button.hide()

            player.name = this.input.value()
            playerCount += 1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)

            
            this.greeting.html("hello " + player.name)
            this.greeting.position(displayWidth/2,200)
            this.greeting.style('fontSize','50px')
            
        })   
    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()

    }
}