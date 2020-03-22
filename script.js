var isX=true;
var count=0;
var arr=new Array(3);
 arr[0]=new Array(3);
 arr[1]=new Array(3);
 arr[2]=new Array(3);
 myGame();
 function myGame(){
$("table td").click(function(){
var c=$(this).index();
var r=$(this).parent().index();
var current = $(this).text();
if(isX ===true)
    {
        if(current!='X' && current!='O'){
            $(this).text("X");
            arr[r][c]="X";
            count=count+1;
            winner();
            console.log(arr[r][c]);
            console.log(r);
            console.log(c);
            isX=!isX;
        }
    }
else{
    if(current !='X' && current !='O'){
        $(this).text("O");
        arr[r][c]="O";
        count=count+1;
        winner();
        console.log(arr[r][c]);
        console.log(r);
        console.log(c);
        isX=!isX;
}   
}
})
 }
 const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
 const winningMessageElement = document.getElementById('winningMessage')
 const restartButton = document.getElementById('restartButton');
 const restartButton2 = document.getElementById('restartButton2');
function winner()
{
   // console.log(document.getElementById("0").text());
  // console.log(arr[2][1]);
    if((arr[0][0]=="X" && arr[0][1]=="X"&&arr[0][2]=="X") ||( arr[1][0]=="X"&& arr[1][1]=="X" && arr[1][2]=="X" )||(arr[2][0]=="X" && arr[2][1]=="X" && arr[2][2]=="X") ||
    (arr[0][0]=="X" && arr[1][0]=="X"&&arr[2][0]=="X") ||( arr[0][1]=="X"&& arr[1][1]=="X" && arr[2][1]=="X")||(arr[0][2]=="X" && arr[1][2]=="X" && arr[2][2]=="X")||
    (arr[0][0]=="X" && arr[1][1]=="X"&& arr[2][2]=="X")||(arr[0][2]=="X"&&arr[1][1]=="X"&& arr[2][0]=="X" ))
    {
        winningMessageTextElement.innerText = 'X Wins!!';
        restartButton2.classList.add('hide');
        winningMessageElement.classList.add('show');
        console.log("x wins")
    }else if((arr[0][0]=="O" && arr[0][1]=="O"&&arr[0][2]=="O") ||( arr[1][0]=="O"&& arr[1][1]=="O" && arr[1][2]=="O" )||(arr[2][0]=="O" && arr[2][1]=="O" && arr[2][2]=="O") ||
    (arr[0][0]=="O" && arr[1][0]=="O"&&arr[2][0]=="O") ||( arr[0][1]=="O"&& arr[1][1]=="O" && arr[2][1]=="O")||(arr[0][2]=="O" && arr[1][2]=="O" && arr[2][2]=="O")||
    (arr[0][0]=="O" && arr[1][1]=="O"&& arr[2][2]=="O")||(arr[0][2]=="O"&&arr[1][1]=="O"&& arr[2][0]=="O" ))
    {
        winningMessageTextElement.innerText = 'o wins!';
        restartButton2.classList.add('hide');
        winningMessageElement.classList.add('show');
        console.log("O WINS");
    }
    else if(count>8)
    {
        winningMessageTextElement.innerText = 'draw!!';
        restartButton2.classList.add('hide');
        winningMessageElement.classList.add('show');
        console.log("draw");
    }
}
restartButton.addEventListener('click', gameReset)
restartButton2.addEventListener('click', gameReset)
function  gameReset()
{ 
    isX=true;
    restartButton2.classList.remove('hide');
    winningMessageElement.classList.remove('show');
   $("#0").html("");
   $("#1").html("");
   $("#2").html("");
   $("#3").html("");
   $("#4").html("");
   $("#5").html("");
   $("#6").html("");
   $("#7").html("");
   $("#8").html("");
    count=0;
    for(var i=0;i<3;i++)
    {
        //document.getElementById("i").reset();
        for(var j=0;j<3;j++)
        arr[i][j]="";
    }
   // myGame();
}