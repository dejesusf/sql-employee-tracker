//required packages
const inquirer= require('inquirer');
const mysql= require('mysql2');

//connect to mysql2
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

//function to add a department
function addDepartment() {
  inquirer.prompt ([
    {
      type: 'input',
      name: 'dept',
      message: 'What is the name of the department?'
    }
  ]).then((response) => {
    db.query(`INSERT INTO department(name) VALUES(?);`, response.dept, (err, results) => {
      if (err) {
        throw err 
      }
      console.table(results)
      menu();
    })
  })
};

//function to add a role
function addRole() {
  inquirer.prompt ([
    {
      type: 'input',
      name: 'role',
      message: 'What is the name of the role?'
    },
    {
      type: 'number',
      name: 'salary',
      message: 'What is the salary of the role?'
    },
    {
      type: 'number',
      name: 'deptId',
      message: 'Which department ID does this role belong to?'
    }
  ]).then((response) => {
    db.query(`INSERT INTO role(title,salary,department_id) VALUES(?, ?, ?);`, [response.role, response.salary, response.deptId], (err, results) => {
      if (err) {
        throw err 
      }
      console.table(results)
      menu();
    })
  })
};

//function to add an employee
function addEmployee() {
  inquirer.prompt ([
    {
      type: 'input',
      name: 'firstName',
      message: "What is the employee's first name?"
    },
    {
      type: 'input',
      name: 'lastName',
      message: "What is the employee's last name?"
    },
    {
      type: 'input',
      name: 'empRole',
      message: "What is the employee's role?"
    },
    {
      type: 'input',
      name: 'empManager',
      message: "Who is the employee's manager?"
    }
  ])
};

//function to update an emploee's role
function updateEmpRole() {
  
};

//function for the main menu
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

//init
menu();