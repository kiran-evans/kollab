export const getErrorMessage = (error: any): string => {
    
    if (error.code?.includes('auth/invalid-login-credentials')) return "Please double-check the email and password that you entered.";
    if (error.code?.includes('auth/invalid-email')) return "Please double-check the email you entered.";
    if (error.code?.includes('auth/email-already-in-use')) return "Please double-check the email you entered.";
    
    if (error.includes('Unique')) return "Please choose a different username.";
    
    
    return "Sorry, but that didn't work.";
}