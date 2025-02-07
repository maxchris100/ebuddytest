export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: FirebaseFirestore.Timestamp;
  totalAverageWeightRatings: number;
  numberOfRents: number;
  recentlyActive: number;
}