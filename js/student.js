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
            // getAllStudents()
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })
}
