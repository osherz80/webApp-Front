import type { GoogleBook } from "../../types/book"

const checkValidation = (isManual: boolean, googleBook: GoogleBook | null, manualTitle: string, manualAuthor: string, recommendation: string, rating: number) => {
    let error: string = '';
    if (isManual) {
        error = checkManualValidation(manualTitle, manualAuthor);
    } else {
        error = checkGoogleValidation(googleBook);
    }
    if (!error) {
        error = checkMandatoryFields(recommendation, rating);
    }
    return error;
}
const checkManualValidation = (title: string, author: string) => {
    return checkManualMandatoryFields(title, author);
}
const checkManualMandatoryFields = (title: string, author: string) => {
    if (!title || !author) {
        return 'Please provide both book title and author for manual entry.';
    }
    return '';
}
const checkGoogleValidation = (googleBook: GoogleBook | null) => {
    return checkGoogleBookSelected(googleBook);
}

const checkGoogleBookSelected = (googleBook: GoogleBook | null) => {
    if (!googleBook) {
        return 'Please search and select a book, or use manual entry';
    }
    return '';
}
const checkMandatoryFields = (recommendation: string, rating: number) => {
    if (!recommendation || !rating) {
        return 'Please provide a recommendation and give a rating.';
    }
    return '';
}

export { checkValidation };
