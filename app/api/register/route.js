import UserModel from "@/models/UserModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import ConnectDb from "@/utils/connectDb";

export async function POST(req){
    //dbconnection
    try{
        await ConnectDb();
        const {name, email, password} = await req.json();
        const user = await UserModel.findOne({email});
        if(user){
            return NextResponse.json({
                status: 400,
                message:"Email already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        await UserModel.create({name, email, password: hashedPassword})
        return NextResponse.json({message:"Registered successfully"}, {status:201})
    }
    catch(error){
        return NextResponse({message:error.message}, {status:500})
    }
}