console.log('hello');

// Promises

const timeoutPromise = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(true);
        }, 4000)
    })
}
console.log(timeoutPromise());
timeoutPromise()
.then(data=>console.log(data))
.catch((err)=> console.log(err,'error'))

const connectToDb = (uri) => {
    return new  Promise((resolve, reject)=>{
        if(connect(uri)) resolve(uri)
        else reject('error')
    })
}

const getUser = (user) =>{
    return new
}

