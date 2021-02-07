$(function() {

    var $list, $newItemForm, $a;
    $list = $('ul');
    $newItemForm = $('#newItemForm');
    $input = $('input:text').val('');

    $newItemForm.submit(function(e) {
        e.preventDefault();
        var text = $('input:text').val();
        $list.append('<li>' + text + '</li>');
        $input;
    });


    $list.on('click', 'li', function() {
        var $this = $(this);
        $this.remove();
    });



});