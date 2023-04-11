getAllStudents()
function saveStudent(){

    let name=$('#exampleFormControlInput2').val();
    let address=$('#exampleFormControlInput3').val();
    let number=$('#exampleFormControlInput4').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/student/saveStudent",
        async:true,
        data:JSON.stringify({
            "id":"",
            "name":name,
            "address":address,
            "contact":number
        }),
        success: function (data) {
            alert("saved")
            getAllStudents()
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })
}

function getAllStudents(){

    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/student/getAllStudents",
        async:true,
        success: function (data) {
            if (data.code==="00"){
                $('#studentTable').empty();
                for (let stu of data.content){
                    let id=stu.id
                    let name=stu.name
                    let address=stu.address
                    let contact=stu.contact

                    var row=`<tr><td>${id}</td><td>${name}</td><td>${address}</td><td>${contact}</td></tr>`;
                    $('#studentTable').append(row);
                }
            }
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })
}