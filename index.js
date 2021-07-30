// if(navigator.serviceWorker)
// {
//     window.addEventListener('load',()=>{
//         navigator.serviceWorker.register('.sw.js')
//         .then(reg=>console.log("service worker registered"))
//         .catch(err=>console.log(`service worker error : ${err}`));
//     })
// }
navigator.serviceWorker.register('sw.js')
var bt = document.getElementById('showNotification');
bt.onclick=showNotification;
function showNotification() {
    console.log('function called');
  Notification.requestPermission(function(result) {
    if (result === 'granted') {
        console.log('function called : yes');
      setTimeout(()=>{
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('Message from admin', {
            body: 'Buzz! Buzz!'
          });
        });
      },4000)
    }
  });
}
document.addEventListener("visibilitychange",()=>{
  if(document.visibilityState==='hidden'){
    navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification('Message from admin', {
        body: 'Hey!!! Why did you left us, come back'
      });
    });
  }
})
