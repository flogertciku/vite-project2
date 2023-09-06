const databas = ["flogert","test",2]

// server
const getuser = new Promise( (resolve, reject) => {
    const id = "flogert"
    if(databas.includes(id)) {
        resolve("Good, this user exists");
    } else {
        reject("this user doesn't exist");
    }
});





// react part (axios)
getuser
    .then( res => console.log("then: "+res) )
    .catch( err => console.log("catch: "+err) );
