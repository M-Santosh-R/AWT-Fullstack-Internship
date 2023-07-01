const str="Root scored close to a 1000 runs for Yorkshire's first XI in 2009. Root scored 180 in the second Ashes Test at Lord's. Root is known for his solid batting technique and consistency."
document.write(str);
document.write("<br/><hr>"+str.replace("Root","Kohli"));
document.write("<br/><hr>");

const reg=/Root/;
const str1="Root scored close to a 1000 runs for Yorkshire's first XI in 2009. Root scored 180 in the second Ashes Test at Lord's. Root is known for his solid batting technique and consistency."
document.write("<br/>"+str1);
document.write("<br/><hr>"+str1.replace(reg,"Smith"));
document.write("<br/><hr>");

const regex=/Root/g;
const str2="Root scored close to a 1000 runs for Yorkshire's first XI in 2009. Root scored 180 in the second Ashes Test at Lord's. Root is known for his solid batting technique and consistency."
document.write("<br/>"+str2);
document.write("<br/><hr>"+str2.replace(regex,"Smith"));
document.write("<br/><hr>");

const str3="Root scored close to a 1000 runs for Yorkshire's first XI in 2009. root scored 180 in the second Ashes Test at Lord's. Root is known for his solid batting technique and consistency."
document.write("<br/>"+str3);
document.write("<br/><hr>"+str3.replace(/Root/gi,"Smith"));
document.write("<br/><hr>");

var search=/Root/;
var word="Root scored close to a 1000 runs for Yorkshire's first XI in 2009."
var result=search.exec(word);
document.write("<br/>",result);
console.log(result);
document.write("<br/><hr>");

var search=/Root/;
var word="Root scored close to a 1000 runs for Yorkshire's first XI in 2009."
var result=search.test(word);
document.write("<br/>",result);
console.log(result);
document.write("<br/><hr>");

let txt="WHAT what what this this this 76368937";
let res=txt.match(/[WHAT]/);
document.write("<br/>",res);
let res1=txt.match(/[0-9]/g);
document.write("<br/>",res1);

