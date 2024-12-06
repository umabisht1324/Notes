function filterTasks() {
    const selectedStatus = document.querySelector('input[name="status"]:checked')?.value;
    const tasks = document.querySelectorAll('.task');

    tasks.forEach(task => {
        const taskStatus = task.getAttribute('data-status');
        if (selectedStatus && taskStatus !== selectedStatus) {
            task.style.display = 'none';  // Hide task if status does not match
        } else {
            task.style.display = 'block';  // Show task if status matches
        }
    });
}

// Handle Button Click for Filter by Task Type (All, To Do, Completed)
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterType = button.getAttribute('data-filter');
        const tasks = document.querySelectorAll('.task');

        tasks.forEach(task => {
            // Display tasks based on filter type
            if (filterType === 'all') {
                task.style.display = 'block';  // Show all tasks
            } else if (filterType === task.getAttribute('data-filter')) {
                task.style.display = 'block';  // Show matching tasks
            } else {
                task.style.display = 'none';  // Hide non-matching tasks
            }
        });
    });
});