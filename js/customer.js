var customers=[];
var recordIndex;

$('#customer-section').css({display:'block'});
$('#item-section').css({display:'none'});
$('#order-section').css({display:'none'})
$('#orderDetails-section').css({display:'none'})

//customer nav management
$('#nav-customer').on('click',()=>{
    $('#customer-section').css({display:'block'});
    $('#item-section').css({display:'none'});
    $('#order-section').css({display:'none'})
    $('#orderDetails-section').css({display:'none'})
});

//item nav management
$('#nav-item').on('click',()=>{
    $('#customer-section').css({display:'none'});
    $('#item-section').css({display:'block'});
    $('#order-section').css({display:'none'})
    $('#orderDetails-section').css({display:'none'})
});

//order nav management
$('#nav-order').on('click',()=>{
    $('#customer-section').css({display:'none'});
    $('#item-section').css({display:'none'});
    $('#order-section').css({display:'block'})
    $('#orderDetails-section').css({display:'none'})
});

//orderDetails nav management
$('#nav-orderDetails').on('click',()=>{
    $('#customer-section').css({display:'none'});
    $('#item-section').css({display:'none'});
    $('#order-section').css({display:'none'})
    $('#orderDetails-section').css({display:'block'})
});

function loadTable() {
    $('#customer-tbl-tbody').empty();

    customers.map((item, index) => {
        let record = `<tr>
              <td class="customer-id-value">${item.id}</td>
                <td class="customer-name-value">${item.name}</td>
                <td class="customer-address-value">${item.address}</td>
                <td class="customer-salary-value">${item.salary}</td>
            </tr>`;

        $("#customer-tbl-tbody").append(record);
    });
}


//save button
$('#customer-submit').on('click', ()=> {
    var customerId=$('#id').val();
    var customerName=$('#name').val();
    var customerAddress=$('#address').val();
    var customerSalary=$('#salary').val();

    let customer={
        id: customerId,
        name: customerName,
        address: customerAddress,
        salary: customerSalary
    }

    customers.push(customer);

    loadTable();
    $("#customer-reset1").click();
});


//update button
$("#customer-update").on('click', () => {
    var customerId=$('#custID').val();
    var customerName=$('#custName').val();
    var customerAddress=$('#custAddress').val();
    var customerSalary=$('#custSalary').val();

    let customerObj=customers[recordIndex];
    customerObj.id=customerId;
    customerObj.name=customerName;
    customerObj.salary=customerSalary;
    customerObj.address=customerAddress;

    loadTable();
    $("#customer-reset").click();
});


//delete button
$("#customer-delete").on('click', () => {
    customers.splice(recordIndex,1);
    loadTable();
    $("#customer-reset").click();
});


$("#customer-tbl-tbody").on('click', 'tr', function() {
    let index=$(this).index();
    recordIndex=index;

    console.log("index",index);

    let id=$(this).find(".customer-id-value").text();
    let name=$(this).find(".customer-name-value").text();
    let address=$(this).find(".customer-address-value").text();
    let salary=$(this).find(".customer-salary-value").text();

    $("#custID").val(id);
    $("#custName").val(name);
    $("#custAddress").val(address);
    $("#custSalary").val(salary);

})
