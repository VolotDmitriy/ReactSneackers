export const priceCounter = (items) =>{
    let count = 0;
    items.map(items => count += items.price);
    return [Math.round(count), Math.round(count * 0.05)];
}


