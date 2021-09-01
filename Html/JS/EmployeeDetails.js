window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
})

const createInnerHtml = () => {
    const headerHtml = " <th> Name </th><th>Gender</th><th> Department </th>" +
        "<th> Salary </th><th>Start Date </th><th> Actions </th>";

    let empPayrollData = createEmployeePayrollJSON()[0];
    const innerHTML = `${headerHtml}
    <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></img> </td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>
        <div class='dept-label'>${empPayrollData._department[0]}</div>
        <div class='dept-label'>${empPayrollData._department[1]}</div>
        </td>

        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        </td>
        <img name="${empPayrollData._id}" onclick="remove(this)" src="Assets\delete-black-18dp.svg
        " alt="delete">
        <img name="${empPayrollData._id}" onclick="update(this)" src="Assets\create-black-18dp.svg" alt="edit">
        
   </tr>
     `;
    document.querySelector('#table-display').innerHTML = innerHtml;


}


const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Meghna Borkar',
            _gender: 'female',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '29 Oct 2020',
            _id: new Date().getTime(),
            _profilePic: 'Assets\Ellipse -2.png'
        },
    ];
    return empPayrollListLocal;
}