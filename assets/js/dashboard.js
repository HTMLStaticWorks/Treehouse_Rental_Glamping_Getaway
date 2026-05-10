/* 
    ARBORIA - DASHBOARD JAVASCRIPT
    Specific logic for the hospitality dashboard
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const wrapper = document.getElementById('wrapper');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', (e) => {
            e.preventDefault();
            wrapper.classList.toggle('toggled');
        });
    }

    // 2. Dummy Chart (if using Chart.js)
    // For now, simple interaction logic
    const reservationActions = document.querySelectorAll('.res-action');
    reservationActions.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            alert(`Reservation ${action} successfully!`);
        });
    });

    // 3. Notification Dropdown Toggle
    const notificationBtn = document.querySelector('.notification-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            // Logic for showing notifications
        });
    }
});
