function saveEmployeeDetails() {
    let name = document.getElementById("name").value
    console.log(name);

    let department = document.getElementsByClassName("checkbox")
    for (var i = 0; i < department.length; i++) {
        if (department[i].checked) {
            console.log(department[i].value)
        }
    }
    console.log(department);

    let gender = document.getElementsByName("gender")
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            console.log(gender[i].value)
        }
    }
    console.log(gender);

    let salary = document.getElementById("salary").value
    console.log(salary);

    const salary = document.querySelector('#salary');
    const salaryOutput = document.querySelector('.salary-output');
    salaryOutput.textContent = salary.value;
    salary.addEventListener('input', function () {
        salaryOutput.textContent = salary.value;
    })
}






