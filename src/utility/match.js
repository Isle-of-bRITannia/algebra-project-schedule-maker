const match = (matchFunctions) => (tile) => {
    if (tile._tag in matchFunctions === false) {
      throw new Error(`No matching function provided for _tag == "${schedule._tag}"`);
    }
    
    return matchFunctions[tile._tag](tile);
  };
  
  export {match};