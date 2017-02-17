// 扑克类
window.Poker = {};

// 定义54张牌
Poker.all_pokers = [
    115,103,104,105,106,107,108,109,110,111,112,113,114,
    215,203,204,205,206,207,208,209,210,211,212,213,214,
    315,303,304,305,306,307,308,309,310,311,312,313,314,
    415,403,404,405,406,407,408,409,410,411,412,413,414,
    518,519
];

// 定义花色
Poker.shape = {
    1:'meihua',     //梅花
    2:'fangkuai',   //方块
    3:'heitao',     //黑桃
    4:'hongtao',    //红桃
    5:''            //大王
};

/**
 * [获取牌面花色]
 * @param  {[type]} poker [description]
 * @return {[type]}       [description]
 */
Poker.get_shape = function(poker) {
    return Math.floor(poker / 100);
}

/**
 * [获取牌面点数]
 * @param  {[type]} poker [description]
 * @return {[type]}       [description]
 */
Poker.get_number = function(poker) {
    return poker % 100;
}

/**
 * [获取牌面的花色字符串]
 * @param  {[type]} poker [description]
 * @return {[type]}       [description]
 */
Poker.gen_shape_str = function(poker) {
    return Poker.shape[Poker.get_shape(poker)];
}

Poker.sort = function(pokers) {
    return pokers.sort(function(a, b) {
                a = a%100;
                b = b%100;
                return a - b;
            });
}
