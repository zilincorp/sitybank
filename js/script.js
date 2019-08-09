// var input = document.getElementById('username');
// var form  = document.getElementById('form');
//
// var elem = document.createElement('div');
// elem.id = 'notify';
// elem.style.display = 'none';
// form.appendChild(elem);
//
//
// input.addEventListener('invalid', function(event){
//   event.preventDefault();
//   if ( ! event.target.validity.valid ) {
//     elem.textContent   = 'Username should only contain lowercase letters e.g. john';
//     elem.className     = 'error';
//     elem.style.display = 'block';
//
//     input.className    = 'form-input input-name invalid';
//   }
// });
//
//
// input.addEventListener('input', function(event){
//   if ( 'block' === elem.style.display ) {
//     input.className = 'form-input input-name';
//     elem.style.display = 'none';
//   }
// });

//
// (function() {
//
//   var input              = document.getElementById('username');
//   var form               = document.getElementById('form');
//   var elem               = document.createElement('div');
//   elem.id            = 'notify';
//   elem.style.display = 'none';
//
//   form.appendChild(elem);
//
//   input.addEventListener('invalid', function(event){
//     event.preventDefault();
//     if ( ! event.target.validity.valid ) {
//       input.className    = 'invalid form-input input-name';
//       elem.textContent   = 'Username should only contain lowercase letters e.g. john';
//       elem.className     = 'error';
//       elem.style.display = 'block';
//     }
//   });
//
//
//
//
//   input.addEventListener('input', function(event){
//     if ( 'block' === elem.style.display ) {
//       input.className = 'form-input input-name';
//       elem.style.display = 'none';
//     }
//   });
//
// })();




//
//
// function validate(){
//   //Считаем значения из полей name и email в переменные x и y
//   var y=document.forms['form']['email'].value;
//   var x=document.forms['form']['name'].value;
//   //Если поле email пустое выведем сообщение и предотвратим отправку формы
//   if (y.length==0){
//     document.getElementById('input-error1').innerHTML="*email введен не верно";
//     return false;
//   }
//   //Если поле name пустое выведем сообщение и предотвратим отправку формы
//   if (x.length==0){
//     document.getElementById('input-error2').innerHTML="*email введен не верно";
//     return false;
//   }
//   //Проверим содержит ли значение введенное в поле email символы @ и .
//   at=y.indexOf("@");
//   dot=y.indexOf(".");
//   //Если поле не содержит эти символы знач email введен не верно
//   if (at<1 || dot <1){
//     document.getElementById('input-error1').input.className = 'error-block';
//     return false;
//   }
// }


function validate(){
  //Считаем значения из полей name и email в переменные x и y
  let x=document.forms["form"]["name"].value;
  let y=document.forms["form"]["email"].value;
  //Если поле name пустое выведем сообщение и предотвратим отправку формы
  if (x.length==0){
    document.getElementById("namef").innerHTML="*данное поле обязательно для заполнения";
    return false;
  }
  //Если поле email пустое выведем сообщение и предотвратим отправку формы
  if (y.length==0){
    document.getElementById("emailf").innerHTML="*данное поле обязательно для заполнения";
    return false;
  }
  //Проверим содержит ли значение введенное в поле email символы @ и .
  at=y.indexOf("@");
  dot=y.indexOf(".");
  //Если поле не содержит эти символы знач email введен не верно
  if (at<1 || dot <1){
    document.getElementById("emailf").innerHTML="*email введен не верно";
    return false;
  }
}