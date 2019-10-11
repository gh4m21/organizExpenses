window.addEventListener('load', function () {
    //Get the forms we want to validate
    var forms = document.getElementsByClassName('needs-validate');
    //loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                console.log('if ok');
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);

/* script to add dynamic select option */

//option for earning

var categoryEarning = [{
        category: "Choose...",
        categoryValue: ""
    },
    {
        category: "Transfert",
        categoryValue: "transfert"
    },
    {
        category: "Cash",
        categoryValue: "cash"
    },
    {
        category: "Bank Account",
        categoryValue: "bank"
    },
    {
        category: "Check",
        categoryValue: "check"
    },
    {
        category: "Other",
        categoryValue: "other"
    }
]

//option for expense

var categoryExpense = [{
        category: "Choose...",
        categoryValue: ""
    },
    {
        category: "School",
        categoryValue: "school"
    },
    {
        category: "Food",
        categoryValue: "food"
    },
    {
        category: "Transport",
        categoryValue: "transport"
    },
    {
        category: "Divertissement",
        categoryValue: "divertissement"
    },
    {
        category: "Other",
        categoryValue: "other"
    }
]

//option for expense

var categoryBill = [{
        category: "Choose...",
        categoryValue: ""
    },
    {
        category: "House",
        categoryValue: "house"
    },
    {
        category: "Electricity",
        categoryValue: "electricity"
    },
    {
        category: "Water",
        categoryValue: "water"
    },
    {
        category: "Internet",
        categoryValue: "internet"
    },
    {
        category: "Other",
        categoryValue: "other"
    }
]


//Select variable

var selectType = document.getElementById('action-type'),
    selectCategory = document.getElementById('category-action');

   
    //Events when the values changed
selectType.addEventListener('change', (event)=>{
    var valType = selectType.options[selectType.selectedIndex].value;

    console.log(valType);

    if(valType === "Earning"){
        addOption(categoryEarning, selectCategory);
    }else if(valType === "Expense"){
        addOption(categoryExpense, selectCategory);
    }else if(valType === "Bill"){
        addOption(categoryBill, selectCategory);
    } else {
        addOption([{category:"Choose...",categoryValue:""}], selectCategory);
    }


},false);

//function 
function addOption(arText,mySelect){
    var lenghtOpt = mySelect.length;

    if(lenghtOpt != 0){
 
        for(var i=0;i<lenghtOpt;i++){
            mySelect.remove(0);
        }
    }

    arText.forEach(opt => {
        var option = document.createElement("Option");
        option.text=opt.category;
        option.value = opt.categoryValue;
        mySelect.add(option);
    });
}
