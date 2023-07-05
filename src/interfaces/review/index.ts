import { CommentInterface } from 'interfaces/comment';
import { UserInterface } from 'interfaces/user';
import { WebsiteInterface } from 'interfaces/website';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  title: string;
  content: string;
  rating: number;
  movie_critic_id?: string;
  website_id?: string;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  user?: UserInterface;
  website?: WebsiteInterface;
  _count?: {
    comment?: number;
  };
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  movie_critic_id?: string;
  website_id?: string;
}
