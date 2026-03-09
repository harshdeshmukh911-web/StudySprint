let seconds = 0;
let timer;
let totalStudyTime = parseInt(localStorage.getItem('totalStudyTime')) || 0;
let treesGrown = parseInt(localStorage.getItem('treesGrown')) || 0;
let dailyStats = JSON.parse(localStorage.getItem('dailyStats')) || {};
let sessionTrees = 0;

function updateDisplay() {
    // Update total time display
    let totalHrs = Math.floor(totalStudyTime / 3600);
    let totalMin = Math.floor((totalStudyTime % 3600) / 60);
    let totalSec = totalStudyTime % 60;
    document.getElementById("totalTime").innerHTML =
        (totalHrs < 10 ? "0" + totalHrs : totalHrs) + ":" +
        (totalMin < 10 ? "0" + totalMin : totalMin) + ":" +
        (totalSec < 10 ? "0" + totalSec : totalSec);
    
    // Update trees count
    document.getElementById("treesCount").innerHTML = treesGrown;
    
    // Update session trees
    document.getElementById("sessionTrees").innerHTML = sessionTrees;
}

// Initialize display
updateDisplay();

function startTimer(){
    // Prevent multiple timers from running
    if (timer) {
        clearInterval(timer);
    }
    
    timer = setInterval(function(){
        seconds++;
        totalStudyTime++;

        let hrs = Math.floor(seconds / 3600);
        let min = Math.floor((seconds % 3600) / 60);
        let sec = seconds % 60;

        document.getElementById("timer").innerHTML =
        (hrs < 10 ? "0" + hrs : hrs) + ":" +
        (min < 10 ? "0" + min : min) + ":" +
        (sec < 10 ? "0" + sec : sec);

        // Grow tree every 30 minutes (1800 seconds) - only 1 tree grows per 30 minutes
        if (seconds % 1800 === 0 && seconds > 0) {
            let leaves = document.getElementById("leaves");
            let currentHeight = parseInt(leaves.style.height) || 0;
            leaves.style.height = (currentHeight + 30) + "px";
            sessionTrees++;
        }

        // Save to localStorage
        localStorage.setItem('totalStudyTime', totalStudyTime);
    },1000);
}

function stopTimer(){
    clearInterval(timer);
    timer = null; // Ensure timer is null
    
    // Add only the trees that were grown during the session
    treesGrown += sessionTrees;
    localStorage.setItem('treesGrown', treesGrown);

    // Save daily stats
    let today = new Date().toDateString();
    if (!dailyStats[today]) dailyStats[today] = 0;
    dailyStats[today] += seconds;
    localStorage.setItem('dailyStats', JSON.stringify(dailyStats));
    
    updateDisplay();
}

function resetTimer(){
    clearInterval(timer);
    seconds = 0;
    sessionTrees = 0;
    document.getElementById("timer").innerHTML="00:00:00";
    document.getElementById("leaves").style.height = "0px";
    updateDisplay();
}

// Prevent user from leaving when timer is running
window.addEventListener('beforeunload', function(e) {
    if (timer !== null && timer !== undefined) {
        e.preventDefault();
        e.returnValue = 'Your study timer is still running! Please stop the timer before leaving.';
        return e.returnValue;
    }
});
