//asyn make a function that will return a promise
//await pauses the function excution until the promise is resolved or rejected
//looks & bahave likre synchronus (more efficient & responsive)

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded!0")
        }, 2000)

    });
}

async function getData() {
    console.log("start");

    const result = await fetchData();//wait for 2 seconds until the peomise is resolved
    console.log(result);

    console.log("End");


}
getData();
//const newData = async()=>{