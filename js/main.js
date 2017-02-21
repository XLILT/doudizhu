(function(window){
    /*
    users = [
    {
        name: "user0",
        sex: 'male',
        pokers: [203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 518, 519, 303, 304]
    },
    {
        name: "user1",
        sex: 'female',
        pokers: [104]
    },
    {
        name: "user2",
        sex: 'female',
        pokers: [105]
    }
    ];

    var my_id = 0;
    UI.show_users(users, my_id);
    window.I = users[my_id];
    I.index = my_id;
    UI.show_my_pokers(I.pokers);

    UI.init_my_buttons();
    */

    for (var i = 0; i < 3; i++) {
        var player = new Player;
        player.name = "user" + i;

        game.join_player(i, player);
    }

    game.start();

    var my_id = 0;
    game.get_landlord(my_id);


    UI.show_landlord_pokers(game.landlord_pokers);

    UI.show_users(game.players, my_id);

    window.I = game.players[my_id];
    I.index = my_id;

    UI.show_my_pokers(I.pokers);

    UI.init_my_buttons();

    UI.bind_event();

})(window);
