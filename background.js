// Called when the user clicks on the browser action.

// const pickRandom = () => {
//     if (!document.location.href.startsWith('https://www.10bis.co.il/next/restaurants/search')) {
//         document.location = 'https://www.10bis.co.il/';
//         return setTimeout(pickRandom, 3000);
//     }
//     const items = document.querySelectorAll('[data-test=restaurant-item]');
//     if (items.length === 0) {
//         return setTimeout(pickRandom, 3000);
//     }
//     const item = items[Math.floor(Math.random() * items.length)];
//     item.click()
// };
// pickRandom();

// Basic:
//"items=document.querySelectorAll('[data-test=restaurant-item]'); items[Math.floor(Math.random() * items.length)].click();"
chrome.browserAction.onClicked.addListener(function (tab) {
    // No tabs or host permissions needed!
    console.log('Randomizing 10Bis');
    chrome.tabs.executeScript({
        code: `
        const pickRandom = () => {
            if (!document.location.href.startsWith('https://www.10bis.co.il/next/restaurants/search')) {  
                document.location = 'https://www.10bis.co.il/';
            }
            const items=document.querySelectorAll('[data-test=restaurant-item]');
            if (items.length === 0) {
                return setTimeout(pickRandom, 3000);
            }
            const item = items[Math.floor(Math.random() * items.length)];
            item.click()
        };
        pickRandom();`
    });
});
