export function formatFieldName(fieldName: string): string {
    const words = fieldName.replace(/([a-z])([A-Z])/g, '$1 $2').split('_');
    const formattedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return formattedWords.join(' ');
  }
  
   