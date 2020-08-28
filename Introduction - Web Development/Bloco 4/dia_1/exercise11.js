let salarioBruto = 3000;
let salarioBase = 0;
let descontoInss = 0;
let descontoIr = 0;

if(salarioBruto>5189.82) descontoInss = 570.88;
else if(salarioBruto>2594.93) descontoInss = salarioBruto*0.11;
else if(salarioBruto>1556.92)descontoInss = salarioBruto*0.09;
else descontoInss=salarioBruto*0.08;

salarioBase = salarioBruto - descontoInss;

if(salarioBase>4664.68) descontoIr = salarioBase*0.275 - 869,36;
else if(salarioBase>=3751.06)descontoIr = salarioBase*0.225 - 636.13;
else if(salarioBase>=2826.66) descontoIr = salarioBase*0.15 - 354.80;
else if(salarioBase>=1903.99) descontoIr = salarioBase*0.075 - 142.80;
else descontoIr = 0;

salarioBase = salarioBase-descontoIr;

console.log(salarioBase);

