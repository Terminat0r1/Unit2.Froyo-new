const userObjectText = prompt(`Please enter a list of comma separated froyo flavors:`);

const flavorArray = userObjectText.split(`,`);

const flavorCounts = {};
for (const item of flavorArray) {
    if (flavorCounts[item]) {
        flavorCounts[item]++;
    } else {
        flavorCounts[item] = 1;
    }
}
console.table(flavorCounts);