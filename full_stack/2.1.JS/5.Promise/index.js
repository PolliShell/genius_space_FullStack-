console.log('Request data');
// setTimeout(()=>{
//     console.log('Preparing data...');
//
//     const backendData={
//         server:'aws',
//         port:2000,
//         status: 'working'
//     }
//
//     setTimeout(()=>{
//         backendData.modified=true;
//         console.log('Data received', backendData);
//     },2000);
//
// },2000);
//


const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData);
    }, 2000)
})
p.then((data) => {
    // console.log('Promise resolved',data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
            // console.log('Data received', backendData);
        }, 2000);
    })

    // p2.then(clientData=>{
    //     console.log('Data received',clientData);
    // })
}).catch(err => console.log(err))
    .then(clientData => {
        clientData.fromPromise = true;
        return clientData;

    }).then(data => {
    console.log('Modified', data);
})
    .catch(err => console.error('Error: ', err))
    .finally(() => console.log('Finally'))