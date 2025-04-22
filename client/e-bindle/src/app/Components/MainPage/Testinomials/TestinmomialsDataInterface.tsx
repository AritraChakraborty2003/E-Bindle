// types/testimonial.ts
export interface TestimonialData {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating?: number; // Optional rating out of 5
}
