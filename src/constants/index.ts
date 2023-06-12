/* eslint-disable no-useless-escape */

export const PROJECT_AUTH_TOKEN = 'SPARK_PLAN_AUTH_TOKEN';
export const FORMAT_DATE = 'DD/MM/YYYY';

export const EMAIL_REG_EXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PHONE_REG_EXP =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const PASSWORD_REGEXP = /^(?=(.*[a-z]){1})(?=(.*[A-Z]){1}).{8,}$/;
