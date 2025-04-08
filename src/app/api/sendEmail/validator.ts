



import { BodySendMailRequest } from "@/models/bodySendEmailRequest.model";


export const validateBodySendMailRequest = (body: BodySendMailRequest) => {
    if (!body.from || body.from.length === 0) {
        return { isValid: false, message: "From is required" };
    } else if (!body.from.includes("@")) {
        return { isValid: false, message: "From format is not correct" };
    }

    if (!body.to || body.to.length === 0) {
        return { isValid: false, message: "Email is required" };
    } else if (!body.to.includes("@")) {
        return { isValid: false, message: "Email format is not correct" };
    }

    if (!body.subject) {
        return { isValid: false, message: "Subject is required" };
    }

    if (!body.content) {
        return { isValid: false, message: "Message is required" };
    }

    return { isValid: true, message: "" };
};