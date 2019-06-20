const url_signin='https://api.linkedin.com/v2/me';


$(document).ready(function(){
    $("#share_linkedin").click(function(){
        console.log('clicked');
      $.ajax({
        url: url_signin,
        type: 'get',
        xhrFields: {
            withCredentials: true
        },
        data: {},
        success:
        (response)=>{
            console.log(`response is: ${response}`)
        },
        error: (xhr, status)=> {
            console.log(`xhr is ${xhr} and status is ${status}`);
        }
      });
    });
});

