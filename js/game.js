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
Game.prototype.players = [
	new Player,
	new Player,
	new Player
];

/**
 * [牌库]
 * @type {[type]}
 */
Game.prototype.pokers_library = Poker.all_pokers;

/**
 * [当前出牌玩家下标]
 * @type {Number}
 */
Game.prototype.playing_index = 0;
