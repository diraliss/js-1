function createTable() {
    var j, i;
    var table = document.createElement('table');
    var td, tr;
    table.id = 'table';
    document.body.appendChild(table);

    for (i = 0; i < 9; i++) {
        td = document.createElement('tr');
        td.id = 'td' + i;
        table.appendChild(td);

        if (i === 0) {
            document.getElementById('td' + i).appendChild(document.createElement('td'));
            tr = document.createElement('td');
            tr.innerText = 'A';
            tr.id = 's1';
            document.getElementById('td' + i).appendChild(tr);
            tr = document.createElement('td');
            tr.innerText = 'B';
            tr.id = 's2';
            document.getElementById('td' + i).appendChild(tr);
            tr = document.createElement('td');
            tr.innerText = 'C';
            tr.id = 's3';
            document.getElementById('td' + i).appendChild(tr);
            tr = document.createElement('td');
            tr.innerText = 'D';
            tr.id = 's4';
            document.getElementById('td' + i).appendChild(tr);
            tr = document.createElement('td');
            tr.innerText = 'E';
            tr.id = 's5';
            document.getElementById('td' + i).appendChild(tr);
            tr = document.createElement('td');
            tr.innerText = 'F';
            tr.id = 's6';
            document.getElementById('td' + i).appendChild(tr);
            tr = document.createElement('td');
            tr.innerText = 'G';
            tr.id = 's7';
            document.getElementById('td' + i).appendChild(tr);
            tr = document.createElement('td');
            tr.innerText = 'H';
            tr.id = 's8';
            document.getElementById('td' + i).appendChild(tr);
        } else {
            tr = document.createElement('td');
            tr.innerText = i.toString();
            document.getElementById('td' + i).appendChild(tr);
            for (j = 0; j < 8; j++) {
                tr = document.createElement('td');
                tr.id = document.getElementById('s' + (j + 1).toString()).innerText + i.toString();
                document.getElementById('td' + i).appendChild(tr);
            }
        }
    }
    createChess();
}

function createChess() {
    document.getElementById('A2').className = document.getElementById('B2').className = document.getElementById('C2').className = document.getElementById('D2').className =
        document.getElementById('E2').className = document.getElementById('F2').className = document.getElementById('G2').className = document.getElementById('H2').className = 'pawn';
    document.getElementById('A7').className = document.getElementById('B7').className = document.getElementById('C7').className = document.getElementById('D7').className =
        document.getElementById('E7').className = document.getElementById('F7').className = document.getElementById('G7').className = document.getElementById('H7').className = 'pawn_b';
    document.getElementById('A1').className = document.getElementById('H1').className = 'rook';
    document.getElementById('A8').className = document.getElementById('H8').className = 'rook_b';
    document.getElementById('B1').className = document.getElementById('G1').className = 'knight';
    document.getElementById('B8').className = document.getElementById('G8').className = 'knight_b';
    document.getElementById('C1').className = document.getElementById('F1').className = 'bishop';
    document.getElementById('C8').className = document.getElementById('F8').className = 'bishop_b';
    document.getElementById('D1').className = 'king';
    document.getElementById('D8').className = 'king_b';
    document.getElementById('E1').className = 'queen';
    document.getElementById('E8').className = 'queen_b';
}

window.onload = function () {
    createTable();
};