// 界面管理类
window.UI = {};

/**
 * [展示底牌]
 * @return {[type]} [description]
 */
UI.show_dipai = function(dipai) {
    dipai.forEach(function(a) {
        UI.gen_poker_DOM(a, !0).appendTo('#dipai');
    });
}

/**
 * [展示全部用户头像]
 * @param  {[type]} users [description]
 * @param  {[type]} myid  [description]
 * @return {[type]}       [description]
 */
UI.show_users = function(users, myid) {
    var arr = [
        [2, 0, 1],
        [0, 1, 2],
        [1, 2, 0]
    ];
    arr = arr[myid];
    var ids = ['#leftUser', '#myProfile', '#rightUser'];

    for(var i = 0; i < 3; i++) {
        var user_id = arr[i];
        if(users[user_id]) {
            users[user_id].nodeID = ids[i];
            UI.show_one_user(users[user_id], user_id, users[user_id].nodeID);
        }
    }
}

UI.show_my_pokers = function(pokers) {
    $('#myPokers').empty();

    var pokers = Poker.sort(pokers),
        len, interval, right_margin,
        $node;

    len = pokers.length;
    interval = 33;
    right_margin = Math.floor((850 - (interval * (len - 1) + len)) / 2);

    pokers.forEach(function(poker, i) {
        console.log(poker, i);
        $node = UI.gen_poker_DOM(poker);
        $node.css({zIndex: (100 - i), right: right_margin + interval * i}).appendTo('#myPokers');
    });
}

/**
 * [展示单个用户头像]
 * @param  {[type]} user  [description]
 * @param  {[type]} index [description]
 * @param  {[type]} id    [description]
 * @return {[type]}       [description]
 */
UI.show_one_user = function(user, index, id){
    var len = user.pokers.length,
        name = user.name,
        sex = user.sex,
        is_dizhu = user.is_dizhu,
        $node;

    $node = UI.gen_user_DOM(is_dizhu, name, index, sex, len);
    $node.appendTo(id);
}

/**
 * [生成用户头像DOM]
 * @param  {Boolean} isDizhu   [description]
 * @param  {[type]}  name      [description]
 * @param  {[type]}  userIndex [description]
 * @param  {[type]}  sex       [description]
 * @param  {[type]}  num       [description]
 * @return {[type]}            [description]
 */
UI.gen_user_DOM = function(is_dizhu, name, user_index, sex, num) {
    if(is_dizhu){
        num = num || 20;
        sex = 'dizhu';
    }else{
        num = num || 17;
        sex = sex || 'male';
    }

    var id = 'userID' + user_index;
    var $node = $('<div id="' + id + '" class="user"></div>');
    var num_html = UI.gen_num_html(num);
    $node.html('<div class="clock"><p>10</p></div><p class="name">' + name + '</p><div class="img"><div class="' + sex + '"></div></div><div class="pokerNum">' + num_html + '</div>');
    return $node;
}

/**
 * [生成数字对应的html标签]
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
UI.gen_num_html = function(num) {
    num = '00'+num;
    num = num.slice(-2);
    num = num.split('');
    return '<div class="goldNum'+num[0]+'"></div><div class="goldNum'+num[1]+'"></div>';
}

/**
 * [生成扑克的DOM]
 * @param  {[type]}  poker    [description]
 * @param  {Boolean} is_small [description]
 * @return {[type]}          [description]
 */
UI.gen_poker_DOM = function(poker, is_small) {
    is_small  = is_small || false;
    var value = Poker.get_number(poker),
       $node,
       type = Poker.gen_shape_str(poker);
    is_small = is_small ? 'poker spoker' : 'poker';
    $node = $('<div class="' + is_small + '" poker="' + poker + '"></div>');
    $node.html('<div class="p-content ' + type + ' poker' + value + '" ><p class="paimian"></p><p class="huase"></p></div>');
    //console.log($node);
    return $node;
}
