const match = (matchFunctions) => (schedule) => {
    if (schedule._tag in matchFunctions === false) {
      throw new Error(`No matching function provided for _tag == "${schedule._tag}"`);
    }
    
    return matchFunctions[schedule._tag](schedule);
  };
  
  export {match};