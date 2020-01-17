class login{
    constructor(){
        this.$btn=$('.login-btn');
    }
    init(){
        $('.login-btn').on('click', function () {
            $.ajax({
                type: 'post',
                url: 'http://10.31.152.47/youhuo/php/login.php',
                data: {
                    user: $('.username').val(),
                    pass: $('.password').val(),
                }
            }).done(function (result) {
                if (result) { 
                    location.href = 'index1.html';
                    localStorage.setItem('username', $('.username').val());
                } else { 
                    $('.password').val('');
                    alert('用户名或者密码错误');
                }
            });
        });
    }
}
export{
    login
}
