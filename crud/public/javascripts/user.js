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

// Create a row for the table.
var tableRow = function(user) {
    // Output string. It contains the html source.
    var output = `<td>${user.id}</td>`;
    output += `<td>${user.name}</td>`;
    output += `<td>${user.email}</td>`;

    // Add update button.
    output += `<button class="send-btn btn btn-success">send</button>`;
    
    // Create the the tr object.
    var tr = document.createElement('tr');
    tr.innerHTML = output;

    // Find update button in tr element.
    var button = tr.querySelector('button');
    button.user = user;
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