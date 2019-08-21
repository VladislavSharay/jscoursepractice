
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
         sessionStorage.getItem(key);
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

    constructor(selector, audio = false, video = true) {
        this.selector = selector;
        this.constraints = {
            audio: audio,
            video: video
        }
        this.video = document.createElement('video');
        this.video.width = 640;
        this.video.height = 400;
    }

    getMedia() {
        return new Promise((resolve, reject) => {
            const video = this.video;
            const selector = this.selector;
            let mediaDiv;
            navigator.mediaDevices.getUserMedia(this.constraints)
                .then((stream) => {
                    if (selector === undefined) mediaDiv = document.body;
                    else mediaDiv = document.querySelector(selector);
                    mediaDiv.appendChild(video);
                    video.style.display = 'block';
                    video.srcObject = stream;
                    video.onloadedmetadata = () => video.play();
                    resolve()
                })
                .catch((err) => {
                    console.log(err);
                    reject();
                });
        });
    }

    setWidth(width) {
        if(width != undefined) this.video.width = width;
    }

    setHeight(height) {
        if(height != undefined) this.video.height = height;
    }

    setParam(width, height) {
        this.setWidth(width);
        this.setHeight(height);
    }

}