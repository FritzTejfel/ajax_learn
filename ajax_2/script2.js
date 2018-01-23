document.getElementById('button2').addEventListener('click', loadusers);

function loadusers() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'users.json', true);

    xhr.onload = function() {
        if(this.status == 200) {

            var users = JSON.parse(this.responseText);

            var output = '';

            for(var i in users) {
                output += '<ul>' 
            + '<li>ID: '+ users[i].id +'</li>' 
            + '<li>Name: '+ users[i].name +'</li>' 
            +'<li>E-mail: '+ users[i].email +'</li>' 
            +'</ul>';         
            }

            document.getElementById('users').innerHTML = output;
            
           

        } else if (this.status == 404) {
            console.log('Failed');            
        }
    }

    xhr.send();
}