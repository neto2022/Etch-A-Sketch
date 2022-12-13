const div1 = document.getElementById('container');

for (let index = 0; index < 16; index++) {
    var p1 = document.createElement('p');
    var grid = document.createElement('div');
    grid.appendChild(p1);
    div1.appendChild(grid);
    grid.className = 'gridSize';

    for (let index = 0; index < 16; index++) {
        var grid2 = document.createElement('div');
        div1.appendChild(grid2);
        grid2.className = 'gridSize';
    }

}


