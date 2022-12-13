const div1 = document.getElementById('container');

for (let index = 0; index < 16; index++) {
    var grid = document.createElement('div');
    div1.appendChild(grid);
    grid.className = 'gridSize';
}

for (let index = 0; index < 16; index++) {
    var grid2 = document.createElement('div');
    grid.appendChild(grid2);
    grid2.className = 'gridSize';
}
