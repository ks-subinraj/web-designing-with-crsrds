function buttonclick(val)
{
    document.getElementById('screen').value+=val;
} 
function clearDisplay(){
    document.getElementById('screen').value=''
}
// function equalClick(){
//     var text=document.getElementById('screen').value
//     var result=eval(text)
//     document.getElementById('screen').value=result
// }

function operatorClick(val){
// {var text=0
//     if(val=='='){
//         console.log(text)
// }
// else{
    
    val1=val
    text=document.getElementById('screen').value
    document.getElementById('screen').value=''
    // arr=[text,val1]
    // text2=equalClick()
    // text5=text+text2
    // return text5
    
}
function equalClick(){
    // names=operatorClick()
    // console.log(names[1])
    text1=document.getElementById('screen').value
    document.getElementById('screen').value=''
    // if(names[1]=='+'){ 
    // var text2=names[0]+text1
    // console.log(text1)
    // document.getElementById('screen').value=2
    // }
    if(val1=='+'){
    text2= parseFloat(text)+ parseFloat(text1)
    }else if(val1=='-'){
        text2= parseFloat(text)- parseFloat(text1)

    }else if(val1=='*'){
        text2= parseFloat(text)* parseFloat(text1)

    }else if(val1=='/'){
        text2= parseFloat(text)/ parseFloat(text1)

    }
    document.getElementById('screen').value=text2
    // var name=operatorClick()
    // document.getElementById('screen')=name
    // return text1
}