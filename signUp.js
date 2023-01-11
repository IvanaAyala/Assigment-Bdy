import {auth, createUserWithEmailAndPassword} from './firebase.js'
$(document).ready(()=>{
    $('btn').on('click',(e)=>{
        e.preventDefault()

        if($('p').length){
            $('p').each(function(){
                $(this).remove()
            })
        }
        
        const email = $($('.form-control')[0]).val()
        const password = $($('.form-control')[1]).val()
        const firstName = $($('.form-control')[2]).val()
        const lastName = $($('.form-control')[3]).val()
 
        document.getElementById("birthday").addEventListener("change", function() {
        console.log(this.value);
        });
                              
        auth.createUserWithEmailAndPassword(auth, email, password)
           .then((userCredential) => {
            
              const user = userCredential.user;
              console.log(user)
          })
          .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             console.log(errorMessage)
         });

        })
    })
