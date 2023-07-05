import * as yup from 'yup';

export const commentValidationSchema = yup.object().shape({
  content: yup.string().required(),
  rating: yup.number().integer().required(),
  guest_user_id: yup.string().nullable(),
  review_id: yup.string().nullable(),
});
