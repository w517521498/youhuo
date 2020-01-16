
class louti{
    constructor(){
        this.return=$('.return-top')
    }
    init(){
        $('.return-top').on('click',function(){
            $('html').animate({
                scrollTop:0
            });
        });
    }
}
export{
    louti
}