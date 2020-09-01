let n = 5;                  //base of the pyramid

for(let i=1; i<=n-1 ; i+=1){  //loop for printing the pyramid
    let pyramid = "";
    let k = 0;

    for(let j=i;j<n;j+=1){  //printing spaces
        pyramid += " ";
    }
                            
    while(k != (2*i-1)){    //printing "*"
        if(k==0 || k==(2*i-2)) pyramid+="*";
        else pyramid+=" ";

        k+=1;
    }
    console.log(pyramid);
}
let piramid = "";
for(let i=0;i<n;i+=1) { //printing pyramid base
    piramid+="* ";
}
console.log(piramid);