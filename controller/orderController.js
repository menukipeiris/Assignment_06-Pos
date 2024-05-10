import orderModel from "../model/orderModel.js";
import {orders} from "../db/db.js";

// var orders=[];
var recordIndex;

$('#customer-section').css({display:'none'});
$('#item-section').css({display:'none'});
$('#order-section').css({display:'block'})
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
    $('#order-tbl-tbody').empty();

    orders.map((item, index) => {
        let record = `<tr>
              <td class="item-id-value">${item.code}</td>
                <td class="item-price-value">${item.price}</td>
                <td class="item-quantity-value">${item.quantity}</td>
                <td class="item-total-value">${item.total}</td>
            </tr>`;

        $("#order-tbl-tbody").append(record);
    });
}


//save button
$('#order-submit').on('click', ()=> {
    var item_code=$('#item_Id').val();
    var item_price=$('#unit_price').val();
    var item_quantity=$('#order_quantity').val();
    var item_total=$('#unit_price * #order_quantity').val();

    // let order={
    //     code: item_code,
    //     price: item_price,
    //     quantity: item_quantity,
    //     total: item_total
    // }

    let order=new orderModel(item_code,item_price,item_quantity,item_total);

    orders.push(order);

    loadTable();
    // $("#order").click();

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
