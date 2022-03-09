//Javascript object Notation
//JSON= javascript object notation
const user = { id: 11, name: "Tanver Rana", job: "Developer" };
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop = {
    name: "Tanver store",
    address: "Mohammadpur , Dhaka",
    profit: 4875,
    products: ["laptop", "Mobile", "Pepsi"],
    owner: {
        name: "Rana",
        profession: "Actor"
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);