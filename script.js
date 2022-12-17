const div1 = document.getElementById('container');
var manygrids = 16;
for (let i = 0; i < manygrids; i++) {
    var grid = document.createElement('div');
    grid.className = 'gridSize';
    for (let j = 0; j < manygrids; j++) {
        var grid2 = document.createElement('div');
        grid.appendChild(grid2);
        grid2.className = 'gridSize2';
    }
    div1.appendChild(grid)
}