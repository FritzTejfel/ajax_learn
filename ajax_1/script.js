  document.getElementById('button')
            .addEventListener('click', loadtext);

            function loadtext() {
                var xhr = new XMLHttpRequest();
                
                xhr.open('GET', 'sample.txt', true);

                    //Loader    
                xhr.onprogress = function() {
                    console.log('Readystate: ', xhr.readyState);
                }
                
                xhr.onload = function() {
                    if(this.status == 200) {
                        document.getElementById('text')
                        .innerHTML = this.responseText;                       
                    }
                    else if(this.status == 404) {
                        Console.log( document.getElementById('text')
                        .innerHTML = 'Not found');
                    }
                }

            

                // xhr.onreadystatechange = function () {
                //     if(this.readyState == 4 && this.readyState == 200) {
                //         document.getElementById('text')
                //         .innerHTML = this.responseText;
                //     }
                // }

                xhr.onerror = function() {
                    console.log('Request error');
                }

                xhr.send();
            }
