let RandNum = Math.floor (Math.random()*100) +1 //generate random number between 1 and 100

if (RandNum <20) {
    console.log ('The number selected (' + RandNum + ') is less than 20')
}

else

if (RandNum <=80) {
    console.log ('The number selected (' + RandNum + ') is between 20 and 80')
}

else

if (RandNum >80) {
    console.log ('The number selected (' + RandNum + ') is between 80 and 100')
}