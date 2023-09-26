export const getErrorMessage = (error: any): string => {
    const string = String(error);

    if (string.includes('auth/invalid-login-credentials')) return "Please double-check the email and password that you entered.";
    if (string.includes('auth/invalid-email')) return "Please double-check the email you entered.";
    
    return string;
}