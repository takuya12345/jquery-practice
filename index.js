'use strict'

$(() => {
    $('button').click(() => {
        // $('p').text('hi!')
        // $('p').addClass('red-text');
        // $('p').text('hi!').addClass('red-text');

        // $('li').eq(2).addClass('red-text');
        // $('li:nth-child(odd), li:last-child').addClass('red-text');

        const $input = $('input');
        $input.focus();
        $('<li>').text($input.val()).appendTo('ul');
        $input.val('').focus();
    });

    $('ul').click(e => {
        if(e.target.nodeName !== 'LI' || !confirm('Are you sure?')) {
            return;
        }
        $(e.target).fadeOut();
    })
});