class Transition {
    private initialState: string;
    private finalState : string;
    
    constructor(initialState: string,finalState: string) {
        this.initialState = initialState;
        this.finalState = finalState
    }

    displayTransition(): void {
        console.log(`Transition from ${this.initialState} to ${this.finalState} `);
    }

}

export default Transition;
