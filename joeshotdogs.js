
let num_hotdogs = prompt("How many hotdogs do you want?");
let num_fries = prompt("How many fries do you want?");
let num_sodas = prompt("How many sodas do you want?");
document.write("Quantity of Hotdogs: " + num_hotdogs + "<br><br>");
document.write("Quantity of Fries: " + num_fries + "<br><br>");
document.write("Quantity of Sodas: " + num_sodas + "<br><br><br><br>");

let sub_total = (4 * num_hotdogs) + (3.50 * num_fries) + (1.75 * num_sodas);
document.write("Subtotal: $" + roundNum(sub_total) + "<br><br>");

let discount = 0;
if (sub_total > 20) {
        discount = 0.1 * sub_total;
        if (discount > 0) {
                document.write("Discount: $" + roundNum(discount) + "<br><br>");
        }
        sub_total = sub_total - discount;
        document.write("New Subtotal: $" + roundNum(sub_total) + "<br><br>");
}

let tax = 0.0625 * sub_total;
document.write("Tax: $" + roundNum(tax) + "<br><br>");

let total = sub_total + tax;
let sum = roundNum(total);
document.write("Total: $" + sum);


function roundNum(num) {
        let dollar = "" + parseInt((num + 0.005) * 100) / 100;

        let index = dollar.indexOf('.');
        if (index == -1) {
                dollar += ".00";
        } else if (index == dollar.length - 2) {
                dollar += "0";
        }

        return dollar;
}