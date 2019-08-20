
class LocalStorage {
    setItem(key, value) {
        localStorage.setItem(key, value);
    }

    getItem(key) {
        localStorage.getItem(key);
    }

    removeItem(key) {
        localStorage.removeItem(key);
    }
    clear(){
    localStorage.clear()
    }
}
console.log('!!!localStorage!!!')
console.log('localStorage.setItem(key, value)')
console.log('localStorage.getItem(key)')
console.log('localStorage.removeItem(key)')
console.log('localStorage.clear()')

class SessionStorage {

    setItem(key, value) {
        sessionStorage.setItem(key, value);
    }

    getItem(key) {
        return sessionStorage.getItem(key);
    }

    removeItem(key) {
        sessionStorage.removeItem(key);
    }
    clear(){
        sessionStorage.clear()
        }
}

console.log('!!!sessionStorage!!!')
console.log('sessionStorage.setItem(key, value)')
console.log('sessionStoragee.getItem(key)')
console.log('sessionStorage.removeItem(key)')
console.log('sessionStorage.clear()')

//MEDIA
class Media {
// getMedia(){
//     navigator.mediaDevices.getUserMedia(constraints) // { audio: true, video: true }
//     .then((stream) => {
//       var video = document.querySelector('video'); 
//       video.srcObject = mediaStream;
//       video.onloadedmetadata = function(e) {
//         video.play(); 
//       };
//     })
//     .catch((err) => { 
//       /* handle the error */ 
//     });
// }

}