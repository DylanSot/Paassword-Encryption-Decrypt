
const encrypt = (string, decrypt = false) => {
    const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const special = ['!','@','#','$','%','^','&',"*"];
    const nums = ['0','1','2','3','4','5','6','7','8','9'];
    const conjoin = lowerCase.concat(special);
    const numbers = conjoin.concat(nums);
    const array = numbers.concat(upperCase);

    if (decrypt === true){
        const newString = string.split('');
        const reversed = newString.reverse();
        let decrypted = [];
        for (let i = 0; i < string.length; i++){
            decrypted.push(array[array.indexOf(reversed[i]) - 2] );
        }
        return decrypted.join('');
    }else{
        const newString = string.split("");
        const reversed = newString.reverse();
        let encrypted = [];
        for (let i = 0; i < string.length; i++){
            encrypted.push(array[array.indexOf(reversed[i]) + 2] );
        }
        
        return encrypted.join('');  
    }

}

const decrypt = (string) => {
    const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const special = ['!','@','#','$','%','^','&',"*"];
    const nums = ['0','1','2','3','4','5','6','7','8','9'];
    const conjoin = lowerCase.concat(special);
    const numbers = conjoin.concat(nums);
    const array = numbers.concat(upperCase);

    const newString = string.split('');
    const reversed = newString.reverse();
    let decrypted = [];
    for (let i = 0; i < string.length; i++){
        decrypted.push(array[array.indexOf(reversed[i]) - 2] );
    }
    return decrypted.join('');
}







//uncomment below to check if

/*
let message = encrypt('KILLERzombie01!$$');


console.log(message);

//Takes the encrypted password as a arguement.
let decryptIt = decrypt(message);

console.log(decryptIt);
*/



//If using node to export uncomment below.

//module.exports = { encrypt, decrypt }; 

//If using ES6 to export uncomment below.

//export { encrypt, decrypt };
