var items=[];
var recordIndex;

$('#customer-section').css({display:'none'});
$('#item-section').css({display:'block'});
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
    $('#item-tbl-tbody').empty();

    items.map((item, index) => {
        let record = `<tr>
              <td class="item-code-value">${item.code}</td>
                <td class="item-name-value">${item.name}</td>
                <td class="item-quantity-value">${item.quantity}</td>
                <td class="item-price-value">${item.price}</td>
            </tr>`;

        $("#item-tbl-tbody").append(record);
    });
}


//save button
$('#item-submit').on('click', ()=> {
    var itemCode=$('#itemCode').val();
    var itemName=$('#itemName').val();
    var itemQuantity=$('#itemQuantity').val();
    var itemPrice=$('#itemPrice').val();

    let item={
        code: itemCode,
        name: itemName,
        quantity: itemQuantity,
        price: itemPrice
    }

    items.push(item);

    loadTable();
    $("#item-reset").click();

});


//update button
$("#item-update").on('click', () => {
    var itemCode=$('#item-code').val();
    var itemName=$('#item-name').val();
    var itemQuantity=$('#quantity').val();
    var itemPrice=$('#price').val();

    let itemObj=items[recordIndex];
    itemObj.code=itemCode;
    itemObj.name=itemName;
    itemObj.quantity=itemQuantity;
    itemObj.price=itemPrice;

    loadTable();
    $("#item-reset").click();
});


//delete button
$("#item-delete").on('click', () => {
    items.splice(recordIndex,1);
    loadTable();
    $("#item-reset").click();
});


$("#item-tbl-tbody").on('click', 'tr', function() {
    let index=$(this).index();
    recordIndex=index;

    console.log("index",index);

    let code=$(this).find(".item-code-value").text();
    let name=$(this).find(".item-name-value").text();
    let quantity=$(this).find(".item-quantity-value").text();
    let price=$(this).find(".item-price-value").text();

    $("#item-code").val(code);
    $("#item-name").val(name);
    $("#quantity").val(quantity);
    $("#price").val(price);

})