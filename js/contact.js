




/*============ Template Introduction=====================
Template Name:wend - Tour, Travel & Travel Agency Template
Version: 1.0
Author:Andit Theme/Hadayet
Template URI: http://demo.anditthemes.com/html/travel-agency/
License URI: https://andit.co/
Tags:   hotel, resort, tour, tourism, tourist, tours website, travel, traveler, traveling, traveling websites, rest, Travelo, vacation.
================================================================*/

$(document).ready(function() {

    "use strict";
/*----------------------------------------
            contact form Plugin
   ----------------------------------------*/

		document.querySelector('.contactsuccess').addEventListener('click', function (e) {
        e.preventDefault();
        // UI ELEMENTS
        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const message = document.querySelector('#message');
		
		const ck = [name,email,message]
		var a = 0;
		ck.forEach(item => {
			item.style.border = '2px solid green';
			if(item.value === ''){
				a++;
				item.style.border = '2px solid red';
			}
		});
			
        const sendBtn = document.querySelector('.contactsuccess');
        const msg = document.querySelector('.success-msg');
		 const loader = document.querySelector('.sending-gif');

        //   Clear Fields
        function clear() {
            name.value = '';
            email.value = '';
            message.value = '';
        }

        
		if(a === 0){
		//   Loader On, Button Disabled
        loader.style.display = 'block';
			
        sendBtn.disabled = true;
        $.ajax({
                url: 'mail.php',
                method: 'POST',
                data: {
                    name: name.value,
                    email: email.value,
                    message: message.value
                }
            })
            .done(function (response) {
                console.log(response);
                setTimeout(() => {
                    loader.style.display = 'none';
                    msg.style.display = 'block';
                    setTimeout(() => {
                        msg.style.display = 'none';
                        sendBtn.disabled = false;
                        clear();
						ck.forEach(item => item.style.border = 'none');
                    }, 1000);
                }, 1500);
            })
            .error(function () {
                console.log('ERROR');
            });
		}
    });




	
	
	
	  
}); 