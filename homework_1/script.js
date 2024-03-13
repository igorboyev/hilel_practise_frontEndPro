let day = new Date().getDay();
let month = new Date().getMonth();
let year = new Date().getFullYear();
let date = `${day}.${month}.${year}`;


let captionString = `Food prices ≠ <ВИВІД ПОТОЧНОГО ДНЯ>.<ВИВІД ПОТОЧНОГО МІСЯЦЯ>.<ВИВІД ПОТОЧНОГО РОКУ>`;
    captionString = captionString.replaceAll(`≠ <ВИВІД ПОТОЧНОГО ДНЯ>.<ВИВІД ПОТОЧНОГО МІСЯЦЯ>.<ВИВІД ПОТОЧНОГО РОКУ>`,`- ${date}`);

let apple = `🍎`,
    applePrice = 10,
    appleCount = +prompt(`How many apples do you need?`),
    appleSalePercent = 7;

let orange = `🍊`,
    orangePrice = 12,
    orangeCount = +prompt(`How many oranges do you need?`),
    orangeSalePercent = 3;

let kiwi = `🥝`,
    kiwiPrice = 15,
    kiwiCount = +prompt(`How many kiwi do you need?`),
    kiwiCountryPercent = 10;

let appleQty = applePrice*appleCount;
let appleFinalPrice = (appleQty)-(appleQty/100*(appleSalePercent));

let orangeQty = orangePrice*orangeCount;
let orangeFinalPrice = (orangeQty)-(orangeQty/100*(orangeSalePercent));

let kiwiQty = kiwiPrice*kiwiCount; 
let kiwiFinalPrice = (kiwiQty)+(kiwiQty/100*(kiwiCountryPercent));

let finalPriceForAll = kiwiFinalPrice + appleFinalPrice +orangeFinalPrice;

console.log(captionString);
console.log(`Final price for ${appleCount} ${apple} = ${appleFinalPrice.toFixed()}`);
console.log(`Final price for ${orangeCount} ${orange} = ${orangeFinalPrice.toFixed()}`);
console.log(`Final price for ${kiwiCount} ${kiwi} = ${kiwiFinalPrice.toFixed()}`);
console.log(`Final price for all products = ${finalPriceForAll.toFixed()} UAH`);