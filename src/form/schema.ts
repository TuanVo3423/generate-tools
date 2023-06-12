//@ts-nocheck

import {
  EMAIL_REG_EXP,
  // IBAN_REGEX,
  PASSWORD_REGEXP,
  PHONE_REG_EXP,
} from '@/constants';
import * as Yup from 'yup';

export const schema_password_required = Yup.string()
  .trim()
  .matches(PASSWORD_REGEXP, 'password_schema')
  .required('field_is_a_required_field')
  .nullable(true)
  .max(256, 'maximum_character_is256');

export const schema_confirm_password = Yup.string()
  .trim()
  .oneOf([Yup.ref('password'), null], 'passwords_must_match');

export const schema_confirm_new_password = Yup.string()
  .trim()
  .oneOf([Yup.ref('new_password'), null], 'passwords_must_match');

export const schema_string_required = Yup.string()
  .trim()
  .required('field_is_a_required_field')
  .nullable(true)
  .max(256, 'maximum_character_is256');

export const schema_string_no_length_required = Yup.string()
  .trim()
  .required('field_is_a_required_field')
  .nullable(true);

export const schema_string = Yup.string()
  .trim()
  .nullable(true)
  .max(256, 'maximum_character_is256');

export const schema_number_required = Yup.number()
  .required('field_is_a_required_field')
  .typeError('field_is_a_required_field')
  .min(0, 'field_must_be_greater_than_or_equal_to_0')
  .nullable(true)
  .transform((_, val: number) => {
    return val === Number(val) ? val : null;
  });

export const schema_number = Yup.number()
  .typeError('field_is_a_required_field')
  .min(0, 'field_must_be_greater_than_or_equal_to_0')
  .nullable(true)
  .transform((_, val: number) => {
    return val === Number(val) ? val : null;
  });

export const schema_email_required = Yup.string()
  .trim()
  .matches(EMAIL_REG_EXP, 'email_must_be_a_valid_email')
  .required('field_is_a_required_field')
  .max(256, 'maximum_character_is256');

export const schema_phone_number_required = Yup.string()
  .trim()
  .matches(PHONE_REG_EXP, 'phone_invalid')
  .required('field_is_a_required_field')
  .max(256, 'maximum_character_is256');

export const schema_last_name_required = Yup.string()
  .trim()
  .required('field_is_a_required_field')
  .max(256, 'maximum_character_is256');

export const schema_first_name_required = Yup.string()
  .trim()
  .max(256, 'maximum_character_is256')
  .required('field_is_a_required_field');

export const schema_pin_required = Yup.string()
  .trim()
  .max(256, 'maximum_character_is256')
  .required('field_is_a_required_field')
  .test(
    'len',
    'the_verification_code_is_not_correct',
    (val) => val?.length === 6
  );

export const schema_object_required = Yup.object()
  .required('field_is_a_required_field')
  .nullable(true);

export const schema_object = Yup.object().nullable(true);

export const schema_array_select_option_required = Yup.array()
  .min(1, 'field_is_a_required_field')
  .of(
    Yup.object().shape({
      label: Yup.string().required('field_is_a_required_field'),
      value: Yup.string().required('field_is_a_required_field'),
    })
  );

export const schema_array_string_required = Yup.array()
  .min(1, 'field_is_a_required_field')
  .of(Yup.string().required('field_is_a_required_field'));

export const schema_siren_required = Yup.string()
  .trim()
  .required('field_is_a_required_field')
  .nullable(true)
  .matches(/^[0-9]+$/, 'must_be_only_digits')
  .test(
    'len',
    'siren_must_be_at_least_9_characters',
    (val) => val?.length === 9
  );

export const schema_siret_required = Yup.string()
  .trim()
  .required('field_is_a_required_field')
  .nullable(true)
  .matches(/^[0-9]+$/, 'must_be_only_digits')
  .test('len', 'must_be_at_least_14_characters', (val) => val?.length === 14);

export const schema_website_required = Yup.string()
  .trim()
  .url('enter_correct_url')
  .max(256, 'maximum_character_is256')
  .required('field_is_a_required_field');

export const schema_healthcare_number = Yup.string()
  .trim()
  .required('field_is_a_required_field')
  .matches(/^[0-9]+$/, 'must_be_only_digits')
  .test('len', 'must_be_15_characters', (val) => val?.length === 15)
  .nullable(true);

// export const schema_iban_required = Yup.string()
//   .trim()
//   .matches(IBAN_REGEX, 'iban_invalid')
//   .max(34, 'maximum_character_is34')
//   .required('field_is_a_required_field');

// export const schema_iban = Yup.string()
//   .trim()
//   .matches(IBAN_REGEX, 'iban_invalid')
//   .max(34, 'maximum_character_is34');

export const schema_birth_department = Yup.string()
  .trim()
  .required('field_is_a_required_field')
  .nullable(true)
  .min(2, 'must_be_at_least_2_characters')
  .max(3, 'the_field_should_be_at_most3_characters');

export const schema_number_transform = Yup.number().transform((_, value) =>
  Number.isNaN(value) ? 0 : value
);

export const schema_number_more_than_zero = schema_number_transform.moreThan(
  0,
  'field_must_be_greater_than_0'
);
