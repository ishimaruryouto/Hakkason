//=============================
//Ajax ページ共通化
//=============================

// 共通のパーツを引き出す
function include_common(){
    $.ajax({
        url: './site/common.html',
        async: false,
    }).done(function(common_html){
        document.write(common_html);
    });
}

  // headerを引き出す
function include_header(){
    $.ajax({
        url: './site/header.html',
        async: false,
    }).done(function(header_html){
        document.write(header_html);
    });
}

  // footer引き出す
function include_footer(){
    $.ajax({
        url:'./site/footer.html',
        async:false,
    }).done(function(footer_html){
        document.write(footer_html);
    });
}