// Write your solution in this file!
var customerName= "bob";
function upperCaseCustomerName(bob) {
    window.customerName = window.customerName.toUpperCase();
}
function setBestCustomer() {
    window.bestCustomer = 'not bob';
}
function overwriteBestCustomer(maybeBob) {
    window.bestCustomer = maybeBob;
}
const leastFavoriteCustomer=
 "anotheCustomer";
function changeLeastFavoriteCustomer() {
     leastFavoriteCustomer = "anyOne"
}