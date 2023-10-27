// annonce.model.ts

export class Annonce {
    id: number;
    title: string;
    description: string;
    category: string;
    // Add other fields as needed
  
    constructor(id: number, title: string, description: string, category: string) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.category = category;
      // Initialize other fields with default values if needed
    }
  }
  
  // Example usage:
  const defaultAnnonce = new Annonce(1, 'Sample Title', 'Sample Description', 'Sample Category');
  console.log(defaultAnnonce);
  