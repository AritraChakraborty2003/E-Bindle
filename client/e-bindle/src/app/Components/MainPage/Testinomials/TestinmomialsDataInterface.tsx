// types/testimonial.ts
export interface TestimonialData {
  id: number;
  name: string;
  role: string;
  avatar: string;
  qoute: string;
  rating?: number; // Optional rating out of 5
}
