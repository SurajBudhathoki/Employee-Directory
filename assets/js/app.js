

//creating a function to view all employees when clicking view button

const render = function() {
    $('.content').empty();

    for(let i = 0; i < employeeList.length; i++){
       
      $('.content').append(`<p>${(employeeList[i].name)} <br> ${(employeeList[i].officeNum)} <br> ${(employeeList[i].phoneNum)} </p>`);
    }
}

$('#view').on('click', render);


//creating an add function to add a new employee to the directory

const getInput  = function() {
   
  
    const name = $('#name').val();
    const officeNum = $('#office').val();
    const phoneNum = $('#phone').val();
 
//validating to make sure user enters name, officenum and phone before adding
    if(!name ||!officeNum || !phoneNum){
        alert ('Must enter name, office # and phone to add a new employee');
    }
    else {
        employeeList.push({name, officeNum, phoneNum}); 

    render();
  
    }

//after action is performed, clearing out the user input values from the fields
    $('#name').val('');
    $('#office').val('');
     $('#phone').val('');
   
}
   
$('#add').on('click', getInput);



//creating a verify function to check if the name inputed by user is present in the directory or not

const check = function() {

    const nameVal = $('#current-name').val();

//validating to make user user enters a name to verify    
    if(!nameVal) {
        alert('Please enter name to verify');
    }

    else {
     for(let i = 0; i < employeeList.length; i++){  
        if (employeeList[i].name.includes(nameVal)) {
            $('.content').html('<br/> <h3>yes</h3>');
        break;
        }
            $('.content').html('</br> <h3> no </h3>');
        }

    }
    $('#current-name').val('');
}


$('#verify').on('click', check);



//creating a function to delete an employee from the directory if a matching name is entered by the user

const remove = function() {
    const nameVal = $('#current-name').val();

    //validating to make user user enters a name to delete  
    if (!nameVal){
        alert('Please enter a name to delete');
        }
    else {
        for( let i=0; i < employeeList.length; i++){
            if(employeeList[i].name === nameVal){
            employeeList.splice(i, 1);
            render(); 
            }
        }
    }
    $('#current-name').val(''); 
}

$('#delete').on('click', remove);



//creating a function to update information of a current employee in the directory

const update = function() {
   
    const nameVal = $('#current-name').val();
    
    const name = $('#updatedName').val();
    const officeNum = $('#updatedOffice').val();
    const phoneNum = $('#updatedPhone').val();

// added a validation to ensure user enters new name, office# and phone number before updating it

    if (!nameVal || !officeNum || !phoneNum || !name){
    alert('Must enter new name, new office # and new phone number to update ');
    }

    else {
        for(let i = 0; i < employeeList.length; i++){
        const nameIndex = employeeList[i].name.indexOf(nameVal);
    
            if(nameIndex > -1) {
            employeeList.splice(i, 1, {name, officeNum, phoneNum});
            }
            render();
        }
    }   

    $('#name').val('');
    $('#updatedName').val('');
    $('#updatedOffice').val('');
    $('#updatedPhone').val('');
  
}

$('#update').on('click', update);

