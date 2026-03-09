window.onload = function() {
    let trees = parseInt(localStorage.getItem('treesGrown')) || 0;
    document.getElementById('treeCount').innerText = trees;

    let container = document.getElementById('treesContainer');
    for (let i = 0; i < trees; i++) {
        let treeDiv = document.createElement('div');
        treeDiv.style.display = 'inline-block';
        treeDiv.style.position = 'relative';
        treeDiv.style.width = '50px';
        treeDiv.style.height = '80px';
        treeDiv.style.margin = '10px';

        let trunk = document.createElement('div');
        trunk.style.width = '10px';
        trunk.style.height = '30px';
        trunk.style.background = '#8B4513';
        trunk.style.position = 'absolute';
        trunk.style.bottom = '0';
        trunk.style.left = '20px';

        let leaves = document.createElement('div');
        leaves.style.width = '40px';
        leaves.style.height = '50px';
        leaves.style.background = 'green';
        leaves.style.position = 'absolute';
        leaves.style.bottom = '30px';
        leaves.style.left = '5px';
        leaves.style.borderRadius = '50% 50% 0 0';

        treeDiv.appendChild(trunk);
        treeDiv.appendChild(leaves);
        container.appendChild(treeDiv);
    }
};
