const saveButton=document.querySelector("#save");
let content=[];
const reset=document.getElementById("reset");
const table_info=document.getElementById("table");
const Low=document.getElementById("low");
const High=document.getElementById("high");
const Medium=document.getElementById("med");
const All=document.getElementById("all");
const first_row=document.createElement("div");
first_row.className="row";
const col_header1=document.createElement("div");
col_header1.setAttribute("class","col");
col_header1.setAttribute("id","task_tab");
col_header1.innerText="Task";
const col_header2=document.createElement("div");
col_header2.setAttribute("class","col");
col_header2.setAttribute("id","priority_tab");
col_header2.innerText="Priority";
first_row.append(col_header1);
first_row.append(col_header2);
function showPriorityList(pid)
{
  let i=content.length;
  table_info.innerHTML=null;
  table_info.append(first_row);
  if(pid=="All")
  {
      for(var index=0;index<i;index++)
      {
       const p=content[index]["priority"];
       const t=content[index]["task_name"];
       const task_DIV=createDiv(t,p);
       const priority_DIV=createDiv(p,p);
       const newRow=createRow(task_DIV,priority_DIV);
       table_info.append(newRow);
       }
       return;
  }
  for(var index=0;index<i;index++)
  {
    const p=content[index]["priority"];
    if(p==pid)
    {
      console.log("En");
      const t=content[index]["task_name"];
      const task_DIV=createDiv(t,p);
      const priority_DIV=createDiv(p,p);
      const newRow=createRow(task_DIV,priority_DIV);
      table_info.append(newRow);
    }
  }
}
reset.addEventListener('click',function(event){
  content=[];
  table_info.innerHTML=null;
  table_info.append(first_row);
  document.getElementById("task_name").value="";
  document.getElementById("task_priority").options[1].selected="selected";

})
saveButton.addEventListener('click', function (event) {
    const task=document.querySelector("#task_name").value;
    const priority=(document.getElementById("task_priority")).value;
    const newTask=createDiv(task,priority);
    const newPriority=createDiv(priority,priority);
    const newRow=createRow(newTask,newPriority);
    insertIntoTable(newRow);
    content.push({task_name:`${task}`,priority:`${priority}`});
    showPriorityList("All");
  });
  function createRow(task_DIV,priority_DIV) {
    var row=document.createElement("div");
    row.className="row";
    row.append(task_DIV);
    row.append(priority_DIV);
    return row;
  }
  function createDiv(column_content,p) {
    var new_div=document.createElement("div");
    new_div.className="col";
    if(p=="High")
      new_div.setAttribute("style","background-color:#bd2130; color: white");
    else if(p=="Medium")
      new_div.setAttribute("style","background-color:#FF7E00; color-black");
    else
      new_div.setAttribute("style","background-color:#28a745; color-black");
    new_div.innerText=column_content;
    return new_div;
  }
  function insertIntoTable(newRow){
    table_info.append(newRow);
  }
  