document.write("<br/>"+Number("3.14526635767653"));
console.log(typeof "3.15451");
document.write("<br/>"+Number(" "));
document.write("<br/>"+Number(""));
document.write("<br/>"+Number("98 66"));
document.write("<br/>");

document.write("<br/>toExponential:");
let num=6.26;
document.write("<br/>"+num.toExponential(1));
document.write("<br/>"+num.toExponential(2));
document.write("<br/>"+num.toExponential(3));
document.write("<br/>"+num.toExponential(4));
document.write("<br/>");

document.write("<br/>toFixed:");
let numex=6.26;
document.write("<br/>"+numex.toFixed(1));
document.write("<br/>"+numex.toFixed(2));
document.write("<br/>"+numex.toFixed(3));
document.write("<br/>"+numex.toFixed(4));
document.write("<br/>");

document.write("<br/>toPrecision:");
let numpre=3.827;
document.write("<br/>"+numpre.toPrecision(1));
document.write("<br/>"+numpre.toPrecision(2));
document.write("<br/>"+numpre.toPrecision(3));
document.write("<br/>"+numpre.toPrecision(4));
document.write("<br/>");

document.write("<br/>MAX VALUE : "+Number.MAX_VALUE);
document.write("<br/>MIN VALUE : "+Number.MIN_VALUE);
document.write("<br/>POSITIVE INFINITY : "+Number.POSITIVE_INFINITY);
document.write("<br/>NEGATIVE INFINITY : "+Number.NEGATIVE_INFINITY);
document.write("<br/>");

document.write("<br/>"+parseInt("10"));
document.write("<br/>"+parseInt("10.33"));
document.write("<br/>"+parseInt(" 10"));
document.write("<br/>"+parseInt("10 33"));
document.write("<br/>"+parseInt("-10.33"));
document.write("<br/>"+parseInt("10 20 33"));
document.write("<br/>"+parseInt("year is 2023"));

document.write("<br/>");
document.write("<br/>"+parseFloat("10"));
document.write("<br/>"+parseFloat("10.33"));
document.write("<br/>"+parseFloat("10"));
document.write("<br/>"+parseFloat("10 33"));
document.write("<br/>"+parseFloat("-10.33"));
document.write("<br/>"+parseFloat("10.33 20 33"));
document.write("<br/>"+parseFloat("year is 2023"));

document.write("<br/>");
document.write("<br/>"+new Date());
document.write("<br/>"+new Date("2003-07-22"));
document.write("<br/>"+new Date(2011, 3, 2, 10, 20, 17));
document.write("<br/>"+new Date("July 22,2003 22:07"));
document.write("<br/>");

var d=new Date();
document.write("<br/>"+d.toString());
document.write("<br/>"+d.toDateString());
document.write("<br/>"+d.toISOString());
document.write("<br/>"+d.toUTCString());
document.write("<br/>");

document.write("<br/> TIME : "+d.getTime());
document.write("<br/> DATE : "+d.getDate());
document.write("<br/> DAY : "+d.getDay());
document.write("<br/>YEAR : "+d.getFullYear());
document.write("<br/>HOURS : "+d.getHours());
document.write("<br/> MILLISEC : "+d.getMilliseconds());
document.write("<br/> MINUTES : "+d.getMinutes());
document.write("<br/> MONTH : "+d.getMonth());



