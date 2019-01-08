const validate = (val, rules, connectedValue) => {
  let isValid = true; //set to true by default
  for (let rule in rules) {
    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(val);
        break;
      /* if we had another rule here that was checked before 'isEmail' and it set isValid to false,
        then the result of emailValidator(val) wouldn't then override the val that we recieve.
        so we always just take the old val that we already have and then update our information.
        and only if all of the rules are true, will isValid = true. */
      case "minLength":
        isValid = isValid && minLengthValidator(val, rules[rule]);
      case "equalTo":
        isValid = isValid && equalToValidator(val, connectedValue[rule]);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
};

const emailValidator = val => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      val
    );
  };
  
  const minLengthValidator = (val, minLength) => {
      return val.length >= minLength;
  };
  
  const equalToValidator = (val, checkValue) => {
      return val === checkValue;
  };
  
  export default validate;