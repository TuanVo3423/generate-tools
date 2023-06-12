// Password must a symbol, a capital letters, 8 character minimum
export const handleCheckPasswordStrengthChecker = (password: string) => {
  const weaknesses = calculatePasswordStrength(password);

  let strength = 100;
  weaknesses.forEach((weakness) => {
    if (weakness == null) return;
    strength -= weakness.deduction;
  });
  return strength > 0 ? strength : 0;
};

function calculatePasswordStrength(password: string) {
  const weaknesses = [];
  weaknesses.push(lowercaseWeakness(password));
  weaknesses.push(uppercaseWeakness(password));
  weaknesses.push(lengthWeakness(password));
  weaknesses.push(numberWeakness(password));
  weaknesses.push(specialCharactersWeakness(password));
  return weaknesses;
}

function uppercaseWeakness(password: string) {
  return characterTypeWeakness(password, /[A-Z]/g);
}

function lowercaseWeakness(password: string) {
  return characterTypeWeakness(password, /[a-z]/g);
}

function numberWeakness(password: string) {
  return characterTypeWeakness(password, /[0-9]/g);
}

function specialCharactersWeakness(password: string) {
  return characterTypeWeakness(password, /[^0-9a-zA-Z\s]/g);
}

function lengthWeakness(password: string) {
  const length = password.length;

  if (length <= 5) {
    return {
      deduction: 40,
    };
  }

  if (length < 12) {
    return {
      deduction: 20,
    };
  }
}

function characterTypeWeakness(password: string, regex: RegExp) {
  const matches = password.match(regex) || [];

  if (matches.length === 0) {
    return {
      deduction: 20,
    };
  }

  if (matches.length <= 2) {
    return {
      deduction: 20,
    };
  }
}
