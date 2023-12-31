import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  rating: yup.number().integer().required(),
  movie_critic_id: yup.string().nullable(),
  website_id: yup.string().nullable(),
});
