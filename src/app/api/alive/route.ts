




import { NextResponse } from 'next/server';


export async function GET() {
    return NextResponse.json({ message: "Server is alive!" }, { status: 200 });
}