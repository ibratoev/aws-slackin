var body = document.body;

// elements
var select = body.querySelector('select');
var input = body.querySelector('input');
var button = body.querySelector('button');

// remove loading state
button.className = '';

// capture submit
body.addEventListener('submit', function(ev) {
  ev.preventDefault();
  button.disabled = true;
  button.className = '';
  button.innerHTML = 'Please Wait';

  // TODO: call your api here.
  var apigClient = apigClientFactory.newClient(); 
  var body = {
    "email": input.value
  };
  apigClient.rootPost({}, body, {})
    .then(function(result) {
      if(result.data.success) {
        button.className = 'success';
      } else {
        button.className = 'error';
        button.removeAttribute('disabled');
      }
      button.innerHTML = result.data.message })
    .catch(function(result) {
      button.removeAttribute('disabled');
      button.className = 'error';
      button.innerHTML = "Error! Status Code: " + result.status;    
  });
});
