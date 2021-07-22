const TASKS_LOCAL = 'http://localhost:3000/tasks';


const getResource = async(url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Error code////////// ${res.status}`);
    }

    return res.json();
}

const getAllTasks = async() => {
    const allItems = await getResource(TASKS_LOCAL);
    const tasksBox = document.querySelector('.task-col1 .all-tasks');
    allItems.forEach((task) => {
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

getAllTasks();

/* fetch(TASKS_LOCAL).then(
  (res) => {
    return res.json();
  }).then(
    (data) => {
      const tasksBox = document.querySelector('.task-col1 .all-tasks');
      data.forEach((task) => {
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
  ) */