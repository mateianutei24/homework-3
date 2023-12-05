import FiniteAutomatum from "./classes/finiteAutomatum";


function main(){
    const filePath = 'C:\\Users\\matei\\OneDrive\\Desktop\\lab3\\src\\finiteAut.txt';
    
    
    const automatum = new FiniteAutomatum([],[],[],[],[]);
    automatum.readAutomatumFromFile(filePath);
    automatum.displayAutomatum();

}



main();