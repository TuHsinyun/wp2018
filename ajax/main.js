$(document).ready(function() {

$("#listall button").click(function(event) {
    event.preventDefault();//取消reload
    
    $.ajax({
        method: "get",
        url: "ajax.php",
        data: {
            action: "listall",
        },
        datatype: "json",
        success: function(data) {
        //     for(id in data) {
        //     if(data[id]) {
        //         text = text + id + ":" + data[id] + "<br>";
        //     }
        // }
            $("#ajax_content").text(data);
        }
    })

    // setTimeout(() => $('#ajax_content').html('loading'), 3000)
})  

$("#search button").click(function(event) {
    event.preventDefault();

    $.ajax({
        method: "get",
        url: "ajax.php",
        data: {
            action: "search",
            search_id: $("#search input[name='student_id']").val(),
        },
        success: function(data) {
            console.log(data[0]);
            $("#search_content").text(data);
        }
    })
})
$("#add button").click(function(event) {
    event.preventDefault();

    $.ajax({
        method: "get",
        url: "ajax.php",
        data: {
            action: "add",
            add_id: $("#add input[name='add_id']").val(),
            add_name: $("#add input[name='add_name']").val()
        },
        success: function(data) {
            console.log(data);
            $("#add_content").text("added");
        }
    })
})
$("#delete button").click(function(event) {
    event.preventDefault();

    $.ajax({
        method: "get",
        url: "ajax.php",
        data: {
            action: "delete",
            del_id: $("#delete input[name='delete_id']").val()
        },
        success: function(data) {
            console.log(data);
            $("#delete_content").text("deleted");
        }
    })
})
// $('#ajax-form button[type=submit]').click((event) => {
//   event.preventDefault()
//   // no need if button type is not `submit`,
//   //   but make it work without ajax is a good practice

//   $.get('ajax.php', {
//     fname: $('#ajax-form input[name=fname]').val(),
//     lname: $('#ajax-form input[name=lname]').val(),
//   }, (data) => {
//     $('#ajax-output').html(data)
//   })
//   setTimeout(() => $('#ajax-output').html('loading'), 3000)
//   // try to modify the timeout
// })



})