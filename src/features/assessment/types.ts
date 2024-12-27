export interface Question {
  id: number;
  text: string;
  options: Array<{
    value: string;
    text: string;
  }>;
} 