//-------------------------------------Create Account--------------

function create() {
    var name     = document.getElementById('name').value;
    var email    = document.getElementById('email').value;
    var password = document.getElementById('password').value;    
    var url = '/account/create/' + name + '/' + email + '/' + password;

    superagent
        .get(url)
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.txt);
            }
        });
}

//---------------------------------------------------------------

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
    var email    = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;   
    var status   = document.getElementById('loginStatus'); 
    var url = '/account/login/' + email + '/' + password;

    superagent
        .get(url)
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                if (res.body){
                    console.log(res.body);
                    status.innerHTML = 'Login Successful';
                    setTimeout(function(){ status.innerHTML = '';}, 3000);

                }
                else{
                    console.log('Authentication Failed');
                }
                
            }
        });
}

// --------------------Deposit-----------------
//  YOUR CODE
//  Deposit funds user funds on server
// -------------------------------------
function deposit() {
  
    var email    = document.getElementById('depositEmail').value;
    var amount   = document.getElementById('depositAmount').value;
    var url = '/account/deposit/' + email + '/' + amount;
    superagent
        .get(url)
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                if (res.text){
                    console.log(res.text);
                    status.innerHTML = res.text;

                }
                else{
                    console.log('Deposit Failed');
                    status.innerHTML = 'Deposit Failed';
                }
                setTimeout(function(){ status.innerHTML = '';}, 3000);
            }    
        });    

}

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
    var email    = document.getElementById('withdrawEmail').value;
    var amount   = document.getElementById('withdrawAmount').value;
    var url = '/account/withdraw/' + email + '/' + amount;
    superagent
        .get(url)
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                if (res.text){
                    console.log(res.text);
                    status.innerHTML = res.text;

                }
                else{
                    console.log('Withdrawal Failed');
                    status.innerHTML = 'Withdrawal Failed';
                }
                setTimeout(function(){ status.innerHTML = '';}, 3000);
            }    
        });    



}

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
    var email    = document.getElementById('transactionsEmail').value;
    var url = '/account/transactions/'+ '/' + email;

    superagent
        .get(url)
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.txt);
            }
        });
}

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
    var email    = document.getElementById('balanceEmail').value;
    var url = '/account/balance/'+ '/' + email;

    superagent
        .get(url)
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.txt);
            }
        });
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
var url = '/account/all';
superagent
        .get(url)
        .end(function(err, res){
            if (err) {
                console.log(err);
            } else {
                console.log(res.txt);
            }
        });

}

