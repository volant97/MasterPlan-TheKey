export interface CaseData {
  case: string;
  description: string;
  suspects: {
    name: string;
    description: string;
    details: string;
    attributes: string;
  }[];
  places: {
    name: string;
    type: string;
    description: string;
  }[];
  weapons: {
    name: string;
    weight: string;
    description: string;
  }[];
  clues: string[];
  statements: {
    person: string;
    text: string;
  }[];
  answers: {
    who: string;
    what: string;
    where: string;
  };
}

// Define the type for the entire JSON data
export interface JsonData {
  [key: string]: CaseData; // Allows indexing with a string key
}
