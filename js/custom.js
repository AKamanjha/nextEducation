var userList = [{
    employeeId: "001",
    name: "Aman Jha",
    department: "Maketing"
  },
  {
    employeeId: "002",
    name: "Pawan Pandey",
    department: "Sales"
  }, {
    employeeId: "003",
    name: "Sumit yadav",
    department: "IT"
  }
];
var removeList = [],
  index = 0;

userList.forEach(ele => {
  index++;
  $("tbody").append("<tr id=" + index + ">");
  $("#" + index).append("<td>" + ele.employeeId);
  $("#" + index).append("<td>" + ele.name);
  $("#" + index).append("<td>" + ele.department);
  $("tbody").append("</tr>");
});


$("#employeeList tr").draggable({
  helper: "clone",
  cursor: "move",
  opacity: "0.5",
  revert: false,
  start: function (event, ui) {

    ui.helper.data('dropped', false);
    $(this).css({
      opacity: 0.1
    })

  },
  stop: function (event, ui) {

    if (!ui.helper.data('dropped'))
    $(this).css({
      opacity: 1
    })


  }
});

$("#trash").droppable({
  drop: function (event, ui) {
    ui.helper.data('dropped', true);

    var x = $(ui.draggable).html();

    $("#trash .trashTable").append("<tr>"+ x + "</tr>");
    $(ui.draggable).remove();
    $(ui.helper).remove();
  }
});

$("#addUser").click(function () {
  $("#addUserModal").modal('toggle');
  var obj = {};
  var a = $("#addUserForm").serializeArray();
  index = userList.length + 1;
  $("#employeeTable tbody").append("<tr id=" + index + ">");
  a.forEach(ele => {
    obj[ele.name] = ele.value;
    $("#" + index).append("<td>" + ele.value + "</td>");
    console.log("ele is : ", ele);
  })
  $("#employeeTable tbody").append("</tr>");

  setTimeout(() => {
    userList.push(obj);
    //re-initializing draggable event
    $("#employeeList tr").draggable({
      helper: "clone"
    });
    //resetting form
    $('#addUserForm')[0].reset();

  }, 100)
})

function removeUser(obj) {
  console.log("obj is :", obj);

}