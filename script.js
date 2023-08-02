const gameBoard = (function() {
    let gameBoardScore = [];

   

    
    const game = (function() {
        //...

        function creatPlayer(name){
            return {
                name: name,
                score: 0,
            }
        }

        function startGame() {
            //...

        }

        function endGame() {
            //...

        }

        function handleTurn(player) {
            //...

        }


        return {
            creatPlayer: creatPlayer,
            startGame: startGame,
            endGame: endGame,
            handleTurn: handleTurn,
        }
    })();

    const player1 = game.creatPlayer("med", 100);
    const player2 = game.creatPlayer("sad", 200);

    return game;
})();