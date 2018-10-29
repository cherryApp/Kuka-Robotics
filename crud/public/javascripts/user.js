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
    fetch('/users/api/user', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(user)
    }).then( response => {
        return response.json();
    }).then( json => {
        console.log( json );
        fetchUsers();
    });
};

var deleteUser = function(user) {
    fetch('/users/api/user/'+user.id, {
        method: "DELETE"
    }).then( response => {
        return response.json();
    }).then( json => {
        console.log(json);
        fetchUsers();
    })
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
    input.value = user[key] || '';
    if (disabled) {
        input.setAttribute('disabled', 'disabled');
    }
    input.onchange = function() {
        user[key] = this.value;
    };
    td.appendChild(input);
    return td;
};

// Create a row for the table.
var tableRow = function(user) {
    user = user || {};

    var tr = document.createElement('tr');
    tr.appendChild( tableCell(user, 'id', true) );
    tr.appendChild( tableCell(user, 'name', false) );
    tr.appendChild( tableCell(user, 'email', false) );

    
    // Create update button in tr element.
    var td = document.createElement('td');
    tr.appendChild(td);
    var group = document.createElement('div');
    td.appendChild(group);
    group.className = 'btn-group';

    if (!user.id) {
        var createButton = document.createElement('button');
        group.appendChild(createButton);
        createButton.user = user;
        createButton.innerHTML = 'create';
        createButton.className = 'btn btn-success';
        createButton.addEventListener('click', function() {
            putUser(this.user);
        });
        return tr;
    }

    var button = document.createElement('button');
    group.appendChild(button);
    button.user = user;
    button.innerHTML = 'update';
    button.className = 'btn btn-info';
    button.addEventListener('click', function() {
        postUser(this.user);
    });

    // Create delete button.
    var dButton = document.createElement('button');
    group.appendChild(dButton);
    dButton.user = user;
    dButton.innerHTML = 'delete';
    dButton.className = 'btn btn-danger';
    dButton.addEventListener('click', function() {
        deleteUser(this.user);
    });

    return tr;
};

var fillTable = function(json) {
    var tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    tbody.appendChild( tableRow() );
    for (var k in json) {
        tbody.appendChild( tableRow(json[k]) );
    }
};