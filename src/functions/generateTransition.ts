 import Transition from "../classes/transition";

function generateTransitions(characters : string){
  // Regular expression to match the format 'initialState->finalState1|finalState2|...'
  const regex = /^(\w+)->(.+)$/;

  // Use regex.exec to get the matched parts
  const match = regex.exec(characters);

  // If there is a match, extract the parts
  if (match && match[1] && match[2]) {
      const initialState = match[1];
      const finalStates = match[2].split('|').map(state => state.trim());

      // Create Transition instances for each final state
      const transitions = finalStates.map(finalState => new Transition(initialState, finalState));

      return transitions;
  }

  // Return null if no match is found
  return [];
 }

 export default generateTransitions;