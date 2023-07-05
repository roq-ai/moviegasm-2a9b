import { UserInterface } from 'interfaces/user';
import { ReviewInterface } from 'interfaces/review';
import { GetQueryInterface } from 'interfaces';

export interface CommentInterface {
  id?: string;
  content: string;
  rating: number;
  guest_user_id?: string;
  review_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  review?: ReviewInterface;
  _count?: {};
}

export interface CommentGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  guest_user_id?: string;
  review_id?: string;
}
