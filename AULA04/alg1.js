// laço de repetiçao

// for
//for (condiçao) {
//bloco de codigo
//}

for (let i = 10; i <= 20; i++) {
  console.log(i);
}

for (let i = 20; i >= 10; i--) {
  console.log(i);
}

for (let i = 0; i <= 100; i = +10) {
  console.log(i);
}
  
//while 
//while (condiçao) {
    // bloco de codigo 
//}

let i = 9;
while(i < 10) {
   console.log(i);
    i++;
}

let i = 9;
while (i < 10) {
  console.log(i);
  i++;
}


//do while 
// do  {
    // bloco de codigo 
//} while (condiçao);

let k = 5;
do {
   console.log(k);
  k++;
} while (k < 10);

let k = 15;
do while (k < 25) {
  console.log(k);
  k++;
} while (k < 15);

let l = 0;
do {
  console.log(l);
  l += 10;
} while(l <= 100);

//break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break
  }
  console.log(i)
}

//continue 
for (let i = 0; i < 10; i++) {
    if (i === 5) {
   continue;
  }
  console.log(i);
}


