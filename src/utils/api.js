// api.js
export const sendVerificationEmail = async (email, loginId) => {
  // Mock email sending - simulate an API call
  const verificationLink = `${window.location.origin}/verify/${loginId}`;
  
  // Ideally, you would send an actual email through an API.
  console.log(`Sending verification link to ${email}: ${verificationLink}`);
  alert(`Verification link for ${email}: ${verificationLink}`);
  
  // Simulate a delay for the mock API
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
