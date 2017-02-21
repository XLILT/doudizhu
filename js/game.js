/*
 *  COPYRIGHT NOTICE
 *  Copyright (c) XiaolongMa
 *  All rights reserved.
 *
 *  @version : 1.0
 *  @author : mxl
 *  @E-mail : xiaolongicx@gmail.com
 *  @date : 2016/5/17
 *
 *  Revision Notes :
 */

/**
 * [玩家闭包]
 */
function Player() {
}

//Player.prototype.name = "";

Player.prototype.name = "";
Player.prototype.sex = "male";

Player.prototype.is_landlord = false;
Player.prototype.pokers = [];

/**
 * [重置游戏状态]
 * @return {[type]} [description]
 */
Player.prototype.clear_game_status = function() {
    this.is_landlord = false;
    this.pokers = [];
};

Player.prototype.add_pokers = function(add_pokers) {
    this.pokers = this.pokers.concat(add_pokers);
};

/**
 * [游戏闭包]
 */
function Game() {
}

window.game = new Game;

/**
 * [一局游戏的玩家]
 * @type {Array}
 */
Game.prototype.players = [null, null, null];

/**
 * [当前玩家数量]
 * @type {Number}
 */
Game.prototype.player_count = 0;

/**
 * [地主牌（底牌）]
 * @type {Array}
 */
Game.prototype.landlord_pokers = [];

/**
 * [当前出牌玩家下标]
 * @type {Number}
 */
Game.prototype.playing_index = -1;

/**
 * [添加玩家到游戏]
 * @param {[type]} player [description]
 */
Game.prototype.join_player = function(index, player) {
    if(this.player_count >= 3) {
        return false;
    }

    if(index >= 0 && index <=2) {
        if(this.players[index] === null) {
            this.players[index] = player;
            this.player_count++;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }

    return true;
};

/**
 * [使玩家离开游戏]
 * @param  {[type]} index [description]
 * @return {[type]}       [description]
 */
Game.prototype.leave_player = function(index) {
    if(index >= 0 && index <=2) {
        if(this.players[index] !== null) {
            this.players[index] = null;
            this.player_count--;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }

    return true;
};

/**
 * [开始游戏]
 * @return {[type]} [description]
 */
Game.prototype.start = function() {
    if(this.player_count !== 3) {
        return false;
    }

    var all_pokers = Poker.gen_random_all_pokers();
    this.landlord_pokers = all_pokers.splice(0, 3);

    this.players.forEach(function(player) {
        player.clear_game_status();

        player.pokers = all_pokers.splice(0, 17);
    });
}

/**
 * [玩家叫地主]
 * @param  {[type]} index [description]
 * @return {[type]}       [description]
 */
Game.prototype.get_landlord = function(index) {
    if(index >= 0 && index <= 2) {
        var landlord = this.players[index];
        landlord.is_landlord = true;

        if(this.landlord_pokers.length === 3) {
            landlord.add_pokers(this.landlord_pokers);
        }
    }
    else {
        return false;
    }
};
