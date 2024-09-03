import { NextResponse } from "next/server";

export async function GET(req) {
    return NextResponse.json({time: new Date().toLocaleString() });
}


// mongodb+srv://jay:dXyhnOFRY7lVdrw4@cluster0.wmpn4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
