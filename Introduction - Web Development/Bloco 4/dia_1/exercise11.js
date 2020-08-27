let salarioBruto = 1500.10;
let descontoInss = 1;
let descontoIr = 1;

if(salarioBruto>5189.82) descontoInss = 570.88;
else if(salarioBruto>2594.93) descontoInss = salarioBruto*0.11;
else if(salarioBruto>1556.92)descontoInss = salarioBruto*0.09;
else descontoInss=salarioBruto*0.08;

if(salarioBruto<1903.98) descontoIr = 0;
else if(salarioBruto<2826.65) descontoIr = 142.80 + salarioBruto*0.075;
else if(salarioBruto<3751.05)descontoIr = 354.80 + salarioBruto*0.15;
else if(salarioBruto<4664.68)descontoIr = 636.13 + salarioBruto*0.225;
else descontoIr= 869.36 + salarioBruto*0.275;

console.log(descontoInss);

