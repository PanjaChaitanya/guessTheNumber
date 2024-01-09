var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;


    document.getElementById("guessBtn").addEventListener("click",function()
    {
        var ui=parseInt(document.getElementById("guessInput").value);
        attempts++;
       if(ui==randomNumber)
       {
        displaymsg("Congratulations You guess the Number in "+attempts+"attempts");
        document.getElementById("guessBtn").disabled=true;

       }
       else if(ui<randomNumber)
       {
        displaymsg("Too Low try another Number");

       }
       else{
        displaymsg("Too High try another Number");
    
       }

    });
    function displaymsg(k){
    
        document.getElementById("msg").textContent=k;
    }