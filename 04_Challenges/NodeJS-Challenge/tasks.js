
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  if (text === 'quit\n') {
    quit();
  }
  else if( text === 'hello\n'){
    hello(text);
  }
  else if (text.substring(0, 6) === "hello ") {
    hello(text.replace("\n", "").substring());
  }
  else if (text === 'exit\n') {
    quit();
  }
  else if(text === 'help\n') {
    givehelp();
  }
  else if (text==='list\n'){
    list();
  }
  else if (text==='\n'){
    console.log('\n');
  }
  else if (text==='add\n'){
    console.log("ERROR! Specify a task to add");
  }
  else if (text.substring(0, 4) === "add "){
    add(text.replace("add ", "").substring(0,4));
  }
  else if (text==='remove\n'){
   removelast();
  }
  else if (text.substring(0, 7)==='remove '){
    removeNumber(text);
   }
   //adding more stuffs because why not?
   else if (text.substring(0, 10)==='done with '){
    removeNumber(text);
   }
   else if (text==='edit\n'){
    console.log("ERROR! specify what to edit");
   }
   else if (text.substring(0, 5)==='edit '){
    editlast();
   }
  
  else{
    unknownCommand(text);
  }
}

let Tasks=["Eat your breakfast", "Eat your lunch", "Eat your dinner", "Sleep well", "Do exercises"]
function list(){
  for(let i=0; i<Tasks.length; i++)
  console.log("Task" + (i+1) + ': ' + Tasks[i]);

}
function add(text){
  text=text.replace("\n","")
  text=text.trim(" ")
  Tasks.push(text);
  list();
}

function editlast(text){
  text=text.replace("\n","")
  text=text.trim(" ")
  Tasks.push(text);
  list();
}

function removelast(){
  Tasks.pop();
  list();
}

function removeNumber(text){
  // Tasks.splice(text.substring(7)-1,1);
  // console.log("done");
  if (text.substring(7)-1 > Tasks.length){
    console.log("add a valid task number")
  }
  else if (text.substring(7)-1< 0){
    console.log("add a valid task number")
  }
  //I LOVED THAT =D
  else{
    Tasks.splice(text.substring(7)-1,1);
  console.log("done");
  }
}


/**
 * Says hello
 *
 * @returns {void}
 */

function hello(text){
  text=text.replace("\n","")
  text=text.trim(" ")
  console.log(text+"!")
}
//const first = str.split(' ').at(0);
//console.log(); // 👉️ Hello

//using the same function quit to exit

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}





/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
   
// This function lists for the user all the commands available 
function givehelp(){
  console.log('possible commands are :\n"hello" or any command line that starts with "hello " for greetings \n"quit" or "exit" for quitting the app \n"help" to help you get the list of available commands')
  console.log('"list" to see the tasks list \n"add" to add more tasks \n"remove" to delete the last task \n"remove n" to remove the nth task for example remove 3, removes the 3rd task ')

}
// The following line starts the application
startApp("Nour")
