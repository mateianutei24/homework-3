import FiniteAutomatum from "./classes/finiteAutomatum";


function main(){
    const filePath = 'C:\\Users\\Anutei Matei\\Desktop\\New folder\\src\\finiteAut.txt';
    
    
    const automatum = new FiniteAutomatum([],[],[],[],[]);
    automatum.readAutomatumFromFile(filePath);
    automatum.displayAutomatum();

}



main();