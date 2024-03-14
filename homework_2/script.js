let price = 0;
let bun = prompt(`hamburger or cheeseburger`);

if (bun === `hamburger`){
    price = price + 10;
}else if(bun === `cheeseburger`){
    price = price + 15;
}else if(bun){
    prompt(`hamburger or cheeseburger`);
};

console.log(price);