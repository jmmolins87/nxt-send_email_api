

import { NextRequest, NextResponse } from "next/server";

import { BodySendMailRequest } from "@/models/bodySendEmailRequest.model";
import { sendEmailService } from "@/services/sendEmails/sendEmail.service";

import { validateBodySendMailRequest } from "./validator";


export async function POST(request: NextRequest) {
    const body: BodySendMailRequest = await request.json();

    // Validation request body
    const validation = validateBodySendMailRequest(body);
    if (!validation.isValid) {
        return NextResponse.json(
            { message: validation.message, success: false },
            { status: 400 }
        );
    } // end validation request body

    // send email service
    const result = await sendEmailService(body);

    if (!result.success) {
        return NextResponse.json(result, { status: 500 });
    }

    return NextResponse.json(result, { status: 201 });
}