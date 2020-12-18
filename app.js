  
const fs = require('fs');
const { report } = require('process');

module.exports = {
    // Create Method
    create(title) {
        // Fetch Todos From DB File
        const db = this.list();

        // Create New Todo Object
        const newTodo = { title,task_status: false };

   
        db.push(newTodo);

       
        this.save(db);
    },

    // List Method
    list() {
        return JSON.parse(fs.readFileSync('./data.json'));
    },

    // Show Method
    show(index) {
        const db = this.list();

        return db[index].title;
    },

   // Remove Method
    remove(index) {
        // Fetch All Data
        
        const db = this.list();
        if(db[index]!=null){
        // Remove Todo By Index
        db.splice(index, 1);

        // Save Data
        this.save(db);
        console.log(`Deleted todo ${index}`)
        }else{
            console.log(`Error: todo ${index} does not exist.Nothing deleted.`)
        }
       
    },

    // Update Completed Status Method
    toggle(index) {
        // Fetch All Data
        const db = this.list();
        
        // Fetch Todo by Index
        const todo = db[index];
        if(todo!=null){
        // Reverse Todo Completed Status
        todo.task_status = !todo.task_status;

        // Save Data
        this.save(db);
        console.log(`Marked todo ${index} as done.`)
        }else{
            console.log(`Error: todo ${index} does not exist.`)
        }
    },

    // Save Method
    save(data) {
        fs.writeFileSync('./data.json', JSON.stringify(data))
    },
   
};