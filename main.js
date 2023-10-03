setTimeout(() => {
    console.info(`first log after 1s`);
}, 1000);
setTimeout(() => {
    console.table(`second log after 2s`);
}, 2000);
setTimeout(() => {
    console.error(`third log after 3s`);
}, 3000);
setTimeout(() => {
    console.warn(`forth log after 4s`);
}, 4000);