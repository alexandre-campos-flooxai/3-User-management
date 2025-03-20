var fields = document.querySelectorAll('#form-user-create [name]');
var user = {};

function addLine(dataUSer) {
  console.log(dataUSer);

  document.getElementById('table-users').innerHTML = `
   <tr>
                      <td>
                        <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
                      </td>
                      <td>${dataUSer.name}</td>
                      <td>${dataUSer.email}</td>
                      <td>${dataUSer.admin}</td>
                      <td>${dataUSer.birth}</td>
                      <td>
                        <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                        <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                      </td>
                    </tr>

  `;
}

document
  .getElementById('form-user-create')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    fields.forEach((field) => {
      if (field.name == 'gender') {
        if (field.checked) {
          user[field.name] = field.value;
        }
      } else {
        user[field.name] = field.value;
      }
    });

    var objectUser = new User(
      user.name,
      user.gender,
      user.birth,
      user.country,
      user.email,
      user.password,
      user.photo,
      user.admin,
    );

    addLine(objectUser);
    console.log(user);
  });
console.log(user);
