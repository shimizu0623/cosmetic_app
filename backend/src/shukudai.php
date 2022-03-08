<!-- 生年月日を年代に変える処理 -->

<?php


function birthday_string() {
    $today = date('Ymd');
    $birthday = '2011-11-11';
    $birthday = str_replace("-", "", $birthday);
    $age = floor(($today - $birthday) / 100000);
    if($age < 1){
        return '10歳以下';
    }else{
        return $age . '0代'; //11歳以上から
    }
}

echo birthday_string();


// function birthday_string() {
//     $today = date('Ymd');
//     $birthday = '1995-06-27';
//     $birthday = str_replace("-", "", $birthday);
//     $age = floor(($today - $birthday) / 10000);
//     echo $age . '歳';
// }

// echo birthday_string();