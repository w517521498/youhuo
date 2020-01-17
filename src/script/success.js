
    function success(){
        if (localStorage.getItem('username')) {
            $('.loginbar').hide();
            $('.admin').show();
            $('.admin span').html(localStorage.getItem('username'))
        }
        $('.admin a').on('click', function () {
            $('.login').show();
            $('.admin').hide();
            localStorage.removeItem('username');
        });
    }

    
export{
    success
}

