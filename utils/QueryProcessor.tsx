export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return ( "khalifat" );
  }

    if (query.toLowerCase().includes("name")) {
    return ( "khalifa" );
  }

    // Check if the query asks for the largest number
    if (query.toLowerCase().includes("largest")) {
      // Extract numbers from the query string
      const numbers = query.match(/\d+/g).map(Number);
      // Find and return the largest number using Math.max()
      return Math.max(...numbers);
    }



  return "";
}
