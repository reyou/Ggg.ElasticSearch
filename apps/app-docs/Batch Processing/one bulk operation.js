async function TestAwait() {
    let promise = await new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("resolved");
        }, 2000);
    });
    return promise;
}


let result = TestAwait();
console.log(result);