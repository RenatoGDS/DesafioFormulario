export function validateSubmitButton(form) {
  const formList = [];
  for (const key in form) {
    formList.push(form[key]);
  }
  return formList.some((current) => !current);
}
