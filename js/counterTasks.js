const counterTasks = () => {

    const currentCounter = document.querySelectorAll('.task-counter');
    const boxTasks = document.querySelectorAll('.all-tasks');

    boxTasks.forEach((boxTask, index) => {
        const currentTasks = boxTask.getElementsByClassName('task-item').length;
        currentCounter[index].innerHTML = currentTasks;
    })

}

counterTasks();