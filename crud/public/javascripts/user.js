// Get users.
var fetchUsers = function() {
    fetch('/users/api/user')
        .then( response => {
            return response.json();
        }).then( json => {
            console.log( json );
            fillTable(json);
        }).catch( err => {
            console.error( err );
        });
};

// Send user data to the server.
var postUser = function(user) {
    fetch('/users/api/user/'+user.id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(user)
    }).then( response => {
        return response.json();
    }).then( json => {
        console.log(json);
    });
};

var putUser = function(user) {
    fetch('/users/api/user/'+user.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(user)
    }).then( response => {
        return response.json();
    });
};

var deleteUser = function(user) {
    fetch('/users/api/user/'+user.id, {
        method: "DELETE"
    }).then( response => {
        return response.json();
    });
};

document.querySelector('.fetch-users').addEventListener('click', function() {
    fetchUsers();
});

// Create table cell.
var tableCell = function(user, key, disabled) {
    var input = document.createElement('input');
    var td = document.createElement('td');

    input.type = 'text';
    input.className = 'form-control';
    input.key = key;
    input.user = user;
    input.value = user[key];
    if (disabled) {
        input.setAttribute('disabled', 'disabled');
    }
    td.appendChild(input);
    return td;
};

// Create a row for the table.
var tableRow = function(user) {
    var tr = document.createElement('tr');
    tr.appendChild( tableCell(user, 'id', true) );
    tr.appendChild( tableCell(user, 'name', false) );
    tr.appendChild( tableCell(user, 'email', false) );

    
    // Create update button in tr element.
    var td = document.createElement('td');
    tr.appendChild(td);
    var button = document.createElement('button');
    td.appendChild(button);
    button.user = user;
    button.innerHTML = 'update';
    button.className = 'btn btn-info';
    button.addEventListener('click', function() {
        postUser(this.user);
    });

    return tr;
};

var fillTable = function(json) {
    var tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for (var k in json) {
        tbody.appendChild( tableRow(json[k]) );
    }
};