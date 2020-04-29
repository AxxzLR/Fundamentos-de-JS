var llovia = () => Math.random()<0.25
var dias = 0;

do {

    dias += 1;

}while (!llovia());

const palabra = rep => rep==1 ? 'vez' : 'veces' 

console.log(`Fui a ver si llovia ${dias} ${palabra(dias)}`); 