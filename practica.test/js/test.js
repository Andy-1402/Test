class Test{
perfecto(){
    console.log("Perfecto")
    //let num=6
    let num = parseInt(document.getElementById("num").value)
    let res = document.getElementById("resp")
    console.log("numero",num)
    console.log("etiqueta", res)
    console.log("res",res.textContent)
    let r=0
    let c=1
    let ac=0
    // c       c    c     c     c         c      r    num    ac
    // 6%1   6%2   6%3   6%4   6%5        1     0     6     3
    // r 0     0     0    2      1
    while(c < num){
     r = num % c
     if (r==0){
        console.log(c)
     ac=ac+c
     }
      c=c+1

    }
   
    console.log("suma divisores " , ac)

    if (ac==num){
        console.log(num, "Es perfecto")
        res.textContent=`${num} Es perfecto`
    }else{
        console.log(num, "No es perfecto")
        res.textContent= `${num} No es perfecto` 
    }

}

// n = 6
//a   b   c(a+b)     c c c 
//0    1     1       2 3 5
//     a      b
fibonacci(){
    console.log("Fibonacci")
 let a=0, b=1 , c=2, cont=2  
 //let n = 6
 let n = parseInt(document.getElementById("n").value)
 let res=document.getElementById("resp")
 res.innerHTML=""
 let serie=a.toString()+"<br> "+b.toString()   //0 1
console.log(a,b)
while(cont<n){
    c=a+b
    console.log(c)
    serie= serie+" "+c.toString()   // 0 1 1 2 3 5
    a=b
    b=c
   cont=cont+1


}
res.innerHTML= serie


}



}
const test = new Test()
//test.fibonacci()