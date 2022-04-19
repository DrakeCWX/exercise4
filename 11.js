// Wenxing Chen/Drake  
function sum(){
    var text1=document.getElementById("text1").value;
    var text2=document.getElementById("text2").value;
    var sum = Number(text1) + Number(text2)
    var reg=/\d/
    if(!text1||!text2) {
        alert("please write number")
    }else{
    document.getElementById("result").innerHTML = sum;
    }
}
    
