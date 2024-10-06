function number(){

    var num1=prompt("give an postive number")
    if(num1<0){
        alert("Wrong input")
    }else{
        alert(num1 )
        alert(Math.round(num1))
        alert(Math.floor(num1))
        alert(Math.ceil(num1) )
    }
}
function negnumber(){

    var num1=prompt("give an negative number")
    if(num1>0){
        alert("Wrong input")
    }else{
        alert(num1 )
        alert(Math.round(num1))
        alert(Math.floor(num1))
        alert(Math.ceil(num1) )
    }
}
function abnumber(){
    var num1=prompt("give an  number")
    alert(Math.abs(num1))

}
function headandtails(){
    var du=prompt("pick a side head or tails ")
    var du1=prompt("enter your name ")
    var du2=prompt("enter other one's name ")
    if(du.toLowerCase ==="heads"||"HEADS"||"Heads"){
        var biglol=Math.floor(Math.random()*2)
    
    
    if(biglol==1){
        alert("its heads yayayayya")
    }else{
        alert("its tails yayayayya")
    }
    }else if(biglol==0){
            alert("its tails yayayayya")
}else{
    alert("input invalid")
}   
    }        
    function dice(){
        let d=Math.floor((Math.random()*6)+1)
        if(d===1){
            alert("DICE ROLLED 1")
        }else if(d===2){
            alert("DICE ROLLED 2")
        }
        else if(d===3){
            alert("DICE ROLLED  3")
        }
        else if(d===4){
            alert("DICE ROLLED  4")
        }
        else if(d===5){
            alert("DICE ROLLED  5")
        }
        else if(d===6){
            alert("DICE ROLLED 6 ")
        }
    }
    function random(){
        alert("your random number from 1 to 100 is "
        +(Math.random()*100)+1)
    
    }
    function question(){
       var sawal= prompt("Enter your weight in kgs")
      alert(parseInt(sawal)+"kgs")
    }
function last(){
    let d=Math.floor((Math.random()*10)+1)
    var a=prompt("Guess a number from 1 to 10")
    if(a==d){
        alert("yayayyay")
    }else{
        alert("sorry lol")
    }
}