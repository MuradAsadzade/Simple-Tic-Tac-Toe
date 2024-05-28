let player = 'X';

let board = {
    '1' : null,
    '2' : null,
    '3' : null,
    '4' : null,
    '5' : null,
    '6' : null,
    '7' : null,
    '8' : null,
    '9' : null,
}

function gameOver(board){
    if(checkWin(board)){
        document.getElementById('player-text').innerText = "Game Over! " + player + ' win!';
        return true;
    }else if(!isEmpty(board)){
        document.getElementById('player-text').innerText = "Game Over! Tie!";
        return true;
    }else{
        return false;
    }
}

function isEmpty(board){
    for(let i in board){
        if(board[i] == null){
            return true;
        }
    }
    document.getElementById('1').style.color = 'var(--tie)';
    document.getElementById('2').style.color = 'var(--tie)';
    document.getElementById('3').style.color = 'var(--tie)';
    document.getElementById('4').style.color = 'var(--tie)';
    document.getElementById('5').style.color = 'var(--tie)';
    document.getElementById('6').style.color = 'var(--tie)';
    document.getElementById('7').style.color = 'var(--tie)';
    document.getElementById('8').style.color = 'var(--tie)';
    document.getElementById('9').style.color = 'var(--tie)';
    return false;
}

function checkWin(board){
    if(board['1'] == board['2'] && board['2'] == board['3'] && board['1'] != null){
        document.getElementById('1').style.color = 'var(--win)';
        document.getElementById('2').style.color = 'var(--win)';
        document.getElementById('3').style.color = 'var(--win)';
        return true;
    }else if(board['4'] == board['5'] && board['5'] == board['6'] && board['4'] != null){
        document.getElementById('4').style.color = 'var(--win)';
        document.getElementById('5').style.color = 'var(--win)';
        document.getElementById('6').style.color = 'var(--win)';
        return true;
    }else if(board['7'] == board['8'] && board['8'] == board['9'] && board['7'] != null){
        document.getElementById('7').style.color = 'var(--win)';
        document.getElementById('8').style.color = 'var(--win)';
        document.getElementById('9').style.color = 'var(--win)';
        return true;
    }else if(board['1'] == board['4'] && board['4'] == board['7'] && board['1'] != null){
        console.log('win', board['1'], board['4'], board['7']);
        document.getElementById('1').style.color = 'var(--win)';
        document.getElementById('4').style.color = 'var(--win)';
        document.getElementById('7').style.color = 'var(--win)';
        return true;
    }else if(board['2'] == board['5'] && board['5'] == board['8'] && board['2'] != null){
        document.getElementById('2').style.color = 'var(--win)';
        document.getElementById('5').style.color = 'var(--win)';
        document.getElementById('8').style.color = 'var(--win)';
        return true;
    }else if(board['3'] == board['6'] && board['6'] == board['9'] && board['3'] != null){
        document.getElementById('3').style.color = 'var(--win)';
        document.getElementById('6').style.color = 'var(--win)';
        document.getElementById('9').style.color = 'var(--win)';
        return true;
    }else if(board['1'] == board['5'] && board['5'] == board['9'] && board['1'] != null){
        document.getElementById('1').style.color = 'var(--win)';
        document.getElementById('5').style.color = 'var(--win)';
        document.getElementById('9').style.color = 'var(--win)';
        return true;
    }else if(board['3'] == board['5'] && board['5'] == board['7'] && board['3'] != null){
        document.getElementById('3').style.color = 'var(--win)';
        document.getElementById('5').style.color = 'var(--win)';
        document.getElementById('7').style.color = 'var(--win)';
        return true;
    }else{
        console.log('no win');
        return false;
    }
}

function play(id){
    if(document.getElementById(id).innerHTML != ''){
        window.alert('Move not playable');
    }else{
        board[id] = player;
        document.getElementById(id).innerHTML = player;
        if(gameOver(board) == false){  
            player = player === 'X'? 'O' : 'X';
            document.getElementById('player-text').innerText = player + ' turn';
        }else{
            const buttons = document.getElementsByTagName("button");
            for (const button of buttons) {
                button.disabled = true;
            }
        }
    }
}