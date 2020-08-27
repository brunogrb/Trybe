let a = "queen";

switch(a){
    case "pawn":
        console.log("In general, pedestrians move only forward, one square at a time. An exception is the first time a pawn is moved, when it can move two squares.");
        break;
    
    case "bishop":
        console.log("The bishop moves in a straight line diagonally across the board. He can move as many squares as he wants until he finds the end of the board or another piece.");
        break;
    
    case "horse":
        console.log("The horse moves two spaces horizontally or vertically and then one more space at a right angle");
        break;
    
    case "tower":
        console.log("The tower moves in a straight line horizontally and vertically by the number of unoccupied squares, until it reaches the end of the board or is blocked by another piece.");
        break;
    
    case "queen":
        console.log("The Queen can move any number of squares in a straight line - vertically, horizontally or diagonally.");
        break;

    case "king":
        console.log("The king can move to any adjacent square. Thus, it can move a house in any direction: horizontally, vertically or diagonally.");
        break;    
    
}