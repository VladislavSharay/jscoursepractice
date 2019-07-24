let tokenStr;
let API = 'https://intern-staging.herokuapp.com/api/identification';

let formSignUp = document.querySelector('#loginInReg');

let checkSignUp;

formSignUp.addEventListener('submit', event => {
    event.preventDefault();
    let url = API;
    let method = 'POST';
    let form = formToJson(formSignUp);
    let opt = 'signUp';

    doRequest(url, method, form, opt)
    .then(() => {
        if(tokenStr != undefined) {
            let url = API + '/activate';
            let form = JSON.stringify({ id: tokenStr });
            let opt = 'activate';
            doRequest(url, method, form, opt)
                .then(() => tokenStr = undefined)
        }
    });
})

const doRequest = (url, method, data, options) => new Promise ((resolve, _reject) => {
    resolve(
    fetch(url, {
        method: method,
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        resp => resp.json()
    ).then(
        json => {
            console.log(json);
            if(options == 'signUp'){
                if (json._id) tokenStr = json._id;
                else alert('Такой пользователь уже зарегистрирован');
            }
            if (json.error) checkSignUp = json.error;
            else if(options == 'activate') alert('Ваш пароль пришел на почту :)')
            
        }
    ))
});

function formToJson(event) {
    let formData = new FormData(event);
    let object = {};
    formData.forEach((value, key) => { object[key] = value });
    let data = JSON.stringify(object);

    return data;
}


function getUsers() {
    fetch('https://intern-staging.herokuapp.com/api/identification', {
        method: 'GET',
    }).then(
        resp => resp.json()
    ).then(
        json => console.log(json)
    );
}

////////////////////////////////////////////////////////////////////////

let formSign = document.querySelector('#loginIN')

formSign.addEventListener('submit', event => {
    event.preventDefault();
}) 

formSign.addEventListener('submit', function (event) {
    let log = document.getElementById("logSignIn");
    let pass = document.getElementById("passSignIn");
    let vallog = log.value;
    let valpass = pass.value;
    let signInReq = {
        email: vallog,
        password: valpass
    };
    doRequestSignIn(signInReq);
    
});

function doRequestSignIn(data) {
    fetch('https://intern-staging.herokuapp.com/api/identification/sign_in', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',

        },
    }).then(
        resp => resp.json()
    ).then(
        json => {console.log(json)
        token=json.token;
    }
    );
}

///////////////////////////////////////////////////////////////////


let formComment = document.querySelector('#commentIN')

formComment.addEventListener('submit', event => {
    event.preventDefault();
})
let commentOut;

formComment.addEventListener('submit', function(event){
    let commentAdd = document.getElementById("commentAdd");
    let parrentId = document.getElementById("parrentId");
    let valCommentAdd = commentAdd.value;
    let valParrentId = parrentId.value;
    let comment={ message: valCommentAdd, parrentId:valParrentId};
    let tokenStr = token;
    doRequestComment(comment, tokenStr);
});


function doRequestComment(data, token){
    fetch('https://intern-staging.herokuapp.com/api/comment', {
        method: 'POST',
        body: JSON.stringify(data),
      headers:{
          'Content-Type':'application/json',
          'token':token
      },
      }).then(
          resp=>resp.json()
      ).then(
          json => {console.log(json)
          commentOut=json.message;
          document.getElementById('comment').innerHTML=commentOut;
        
          }
      );
}

/////////////////////////////////////////////////////////////


let urlImg
function doRequestImg(method, data, headers){
    fetch('https://intern-staging.herokuapp.com/api/file', {
        method: method,
        body: data,
      headers: headers,
      }).then(
          resp=>resp.json()
      ).then(
          json =>{ console.log(json)
          urlImg=json.url;
          }
      );
}

let img1=document.querySelector('.images');
let imgOut = document.createElement('img'); 
 imgOut.id='imgOut'; 

 img1.appendChild(imgOut)

// urlImg.appendChild('#imgOut');

let formImg = document.forms.namedItem('imagesIN');

formImg.addEventListener('submit', function(ev){
    var formImgD=new FormData(formImg);

    formImgD.append('parentEntityId', '1455qwe1');

    doRequestImg( 'POST', formImgD, {'token': token});

ev.preventDefault();

})