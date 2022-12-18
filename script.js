const div1 = document.getElementById('container');
let manygrids = 16;
for (let i = 0; i < manygrids; i++) {
    let grid = document.createElement('div');
    grid.className = 'gridSize';
    for (let j = 0; j < manygrids; j++) {
        let grid2 = document.createElement('div');
        grid2.className = 'gridSize2';
        grid2.addEventListener("mouseenter", () => {
            grid2.style.backgroundColor = 'black';
        })
        grid.appendChild(grid2);
    }
    div1.appendChild(grid);
}