document.addEventListener("DOMContentLoaded", function() {
    const gameBoard = (function() {
        let gameBoardScore = [
            ["X", "O", "X"],
            ["O", "X", "O"],
            ["X", "O", "O"],
        ];

        return {
            getGameBoard: function() {
                return gameBoardScore;
            },
        };
    
    })();
   
    function renderGameBoard(gameBoard) {
        const gameBoardTable = document.getElementById("gameBoardTable");

        gameBoardTable.innerHTML = "";

        for (let i = 0; i < gameBoard.length; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < gameBoard[i].length; j++) {
                const cell = document.createElement("td");
                cell.textContent = gameBoard[i][j];
                row.appendChild(cell);
            }
            gameBoardTable.appendChild(row);
        }
    }

    renderGameBoard(gameBoard.getGameBoard());
})


const gameBoard = (function() {
   
    

   

    
    const game = (function() {
        //...

        function createPlayer(name){
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
            createPlayer: createPlayer,
            startGame: startGame,
            endGame: endGame,
            handleTurn: handleTurn,
        }
    })();

    const player1 = game.createPlayer("med", 100);
    const player2 = game.createPlayer("sad", 200);

    return game;
})();


