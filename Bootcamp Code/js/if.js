let x = 5; y = 4; z = 7;

if (x < y || z >= x) console.log(`x is less than y or z is greater than or equal to x`);

if (x < y) console.log(`x is less than y`);
else
    console.log(`x is greater than or equal to y`);

//In a block of statement inside {}, all statements are executed

    if (x + 1 == y) {
        console.log(`This is a block statement in the true block`);
        console.log(`x+1 is equal to y`)
    }
    else {
        console.log(`This is a block statement in the false block`);
        console.log(`x+1 is not equal to y`);
    }