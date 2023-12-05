import Transition from "./transition";
import * as fs from 'fs';

import generateArray from "../functions/generateArray";
import generateTransitions from "../functions/generateTransition";

class FiniteAutomatum {
    // Properties
    private setOfStates: string[];
    private  alphabet: string[];
    private initialStates: string[];
    private finalStates: string[];
    private transitions: Transition[];


    constructor(
        setOfStates: string[],
        alphabet: string[],
        initialStates: string[],
        finalStates: string[],
        transitions: Transition[]
    ) {
        this.setOfStates = setOfStates;
        this.alphabet = alphabet;
        this.initialStates = initialStates;
        this.finalStates = finalStates;
        this.transitions = transitions;
    }

    readAutomatumFromFile(filePath:string): void {
     const fileContent = fs.readFileSync(filePath,'utf8');
     const rows: string[] = fileContent.split(/\r?\n/);

    
    const set_of_states: string[] = generateArray(rows[0]);
    const alphabet : string[] = generateArray(rows[1]);
    const initial_states: string[] = generateArray(rows[2]);
    const final_states: string[] = generateArray(rows[3]);

        this.setOfStates = set_of_states;
        this.alphabet = alphabet;
        this.initialStates = initial_states;
        this.finalStates = final_states;
    var transitions: Transition[] =[];
    let i = 5;
    for(i=5;i<rows.length-1;i++){
       var temp = generateTransitions(rows[i]); 
        transitions = transitions.concat(temp);
    }
    this.transitions = transitions;
    }

    displayAutomatum() : void{
        console.log(`Set of states ${this.setOfStates}`);
        console.log(`Alphabet ${this.alphabet}`);
        console.log(`Initial States ${this.initialStates}`);
        console.log(`Final States ${this.finalStates}`);
        console.log(`Transitions`);
        console.log(this.transitions);
    }
}

export default FiniteAutomatum;
