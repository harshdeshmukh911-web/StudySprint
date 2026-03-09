window.onload = function() {
    let totalTime = localStorage.getItem('totalStudyTime') || 0;
    let trees = localStorage.getItem('treesGrown') || 0;
    document.getElementById('totalTime').innerText = formatTime(totalTime);
    document.getElementById('trees').innerText = trees;

    // Generate charts
    let dailyStats = JSON.parse(localStorage.getItem('dailyStats')) || {};
    createTimeChart(dailyStats);
    createTreeChart(trees);
}

function createTimeChart(dailyStats) {
    let today = new Date();
    let labels = [];
    let data = [];

    for (let i = 6; i >= 0; i--) {
        let date = new Date(today);
        date.setDate(today.getDate() - i);
        let dateStr = date.toDateString();
        labels.push(date.toLocaleDateString());
        data.push((dailyStats[dateStr] || 0) / 60); // minutes
    }

    const ctx = document.getElementById('timeChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Study Time (minutes)',
                data: data,
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true },
                title: { display: true, text: 'Daily Study Time (Last 7 Days)' }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function createTreeChart(trees) {
    const ctx = document.getElementById('treeChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Trees Grown', 'Trees Remaining'],
            datasets: [{
                data: [trees, Math.max(10 - trees, 0)], // assuming goal of 10 trees
                backgroundColor: ['#4ecdc4', '#f8f9fa'],
                borderColor: ['#4ecdc4', '#ddd']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' },
                title: { display: true, text: 'Tree Growth Progress' }
            }
        }
    });
}

function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let min = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;
    return `${hrs}h ${min}m ${sec}s`;
}