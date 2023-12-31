export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  const re = new RegExp('^(?=.*\w)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{10,10}$', 'mg')
  const setOfPassword = new Set([...password]);
  
  if (!re.test(password)) return false
  else if(forbiddenPasswords.includes(password)) return false
  else if(setOfPassword.size < 4) return false
  else return true
}
