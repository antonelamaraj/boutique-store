import {z} from 'zod';
import { insertPrdouctSchema } from '@/lib/validators'; 


export type Product = z.infer<typeof insertPrdouctSchema> &{
  id:string;
  rating:number;
  createdAt: Date;
  price:
}