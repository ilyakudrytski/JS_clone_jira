const TASKS_LOCAL = 'http://localhost:3000/tasks';

// fetch(TASKS_LOCAL).then(
//     (res) => {
//         return res.json();
//     }).then(
//     (data) => {
//         const tasksBox = document.querySelector('.task-col1 .all-tasks');
//         data.forEach((task) => {
//             tasksBox.innerHTML += `
//         <a class="task-item" id="drag${task.id}" href="#">
//           <div class="task-info">
//               <p class="descr">${task.description}</p>
//               <div class="task-about">
//                   <div>
//                       <i class="material-icons current-state">done</i>
//                       <i class="material-icons current-progress">arrow_upward</i>
//                   </div>
//                   <div class="avatar">
//                       <div class="avatar-img">
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </a>
//         `
//         })
//         initDragAndDrop();

//     }
// )

const getResourse = async(url) => {
    const res = await fetch(url);
    return res.json();
}

const renderTasks = async() => {

    const data = await getResourse(TASKS_LOCAL);

    data.forEach((task) => {
        const tasksBox = document.querySelector(`.task-col1[data-id="${task.colId}"] .all-tasks`);
        tasksBox.innerHTML += `

        <a class="task-item" id="drag${task.id}" href="#">
          <div class="task-info">
              <p class="descr">${task.description}</p>
              <div class="task-about">
                  <div>
                      <i class="material-icons current-state">done</i>
                      <i class="material-icons current-progress">arrow_upward</i>
                  </div>
                  <div class="avatar">
                      <div class="avatar-img">
                      </div>
                  </div>
              </div>
          </div>
      </a>
        `
    })
    initDragAndDrop();

}

renderTasks()