window.onload = StartGame();

function StartGame(){
    Clear();
    document.turn="X";
    document.getElementById('player_blue').style.opacity=0.2;
    document.winner=null;
    document.draw=0;
    SendMessage("Player "+document.turn+" start.");

}

function SendMessage(msg){
    document.getElementById('message').textContent=msg;
}

function NextMove(square){
    document.draw++;
    if(document.winner!=null){
        SendMessage("Game over! Player : " +document.winner + " already won");
    }
    else if(square.textContent==""){
        square.textContent=document.turn;
        square.className="piece";
        switchTurn();
        if(document.draw>=9){
            if(checkForWinner(document.turn)){
                SendMessage("Player "+document.turn+" wins.");
                document.winner=document.turn;
            }
            else{
                document.getElementById('player_red').style.opacity=0.2;
                document.getElementById('player_blue').style.opacity=0.2;
                SendMessage('Draw!');
            }
        }
    }
    else{
        if(document.draw>=9){
            SendMessage('Draw!');
        }
        else{
            SendMessage("Wrong square!");
            document.draw--;
        }
    }

}
function switchTurn(){
    if(checkForWinner(document.turn)){
        SendMessage("Player "+document.turn+" wins.");
        document.winner=document.turn;
    }
    else if(document.turn == "X"){
        document.turn="O";
        SendMessage("Player "+document.turn+" turn.");
        document.getElementById('player_red').style.opacity=0.2;
        document.getElementById('player_blue').style.opacity=1;
    }
    else{
        document.turn="X";
        SendMessage("Player "+document.turn+" turn.");
        document.getElementById('player_blue').style.opacity=0.2;
        document.getElementById('player_red').style.opacity=1;
    }
}

function checkRow(a,b,c,move){
    var result=false;
    if(getBox(a)== move&&getBox(b)== move&&getBox(c)== move){
        result =true;
    }
    return result;
}

function checkForWinner(move){
    var result = false;
    if (checkRow(1,2,3,move)||
        checkRow(4,5,6,move)||
        checkRow(7,8,9,move)||
        checkRow(1,4,7,move)||
        checkRow(2,5,8,move)||
        checkRow(3,6,9,move)||
        checkRow(3,5,7,move)||
        checkRow(1,5,9,move)
    ){
        result = true;
    }
    return result;
}

function getBox(number){
    return document.getElementById('s'+number).textContent;
}
function Clear(){
    var pieces =[];
    pieces = document.getElementsByClassName('piece');
    for (var i =0;i<pieces.length;i++){
        pieces[i].textContent="";
    }
}

/**
 * Created by admin on 21.03.2017.
 */
