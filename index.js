const inquirer= require('inquirier');
const mysql= require('mysql2');

const db= mysql.createConnection (
  {
    host: '127.0.0.1',
    user: 'root',
    // TODO: ADD MYSQL PASSWORD HERE
    password: 'misoyuri',
    database: 'employee_db'
  },
  console.log(`Connected to the employee database.`)
);

function addDepartment() {

};

function addRole() {

};

function addEmployee() {

};

function updateEmpRole() {
  
};

function menu() {
  inquirer.prompt (
    [{
      type: 'list',
      name: 'menu',
      message: 'What would you like to do?',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }]
  ).then((response) => {
    switch (response.menu) {
      case 'View all departments':
        db.query('SELECT * FROM department', (err, results) => {
          if (err) {
            throw err
          };
          console.table(results);
          menu();
        });
        break;
      case 'View all roles':
        db.query(``, (err, results) => {
          if (err) {
            throw err
          };
          console.table(results);
          menu();
        });
        break;
        case 'View all employees':
          db.query(``, (err, results) => {
            if (err) {
              throw err
            };
            console.table(results);
            menu();
          });
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmpRole();
    }
  })
}

menu();