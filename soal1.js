
function gcf(a,b){
  return (b ==0 )? (a):(gcf(b,a%b));
}
function lcm(a,b){
  return(a/gcf(a,b)*b)
}
fpb_kpk(2,3)
console.log(fpb_kpk)