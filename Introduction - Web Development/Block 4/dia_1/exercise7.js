let nota = 60;

if(nota>100 || nota<0)
{
    console.log("Invalid Grade");
}else if(nota>=90) return console.log("Grade A");
else if(nota>=80) return console.log("Grade B");
else if(nota>=70) return console.log("Grade C");
else if(nota>=60) return console.log("Grade D");
else if(nota>=50) return console.log("Grade E");
else return console.log("Grade F");