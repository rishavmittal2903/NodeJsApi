import jsonwebtoken from "jsonwebtoken"

export const getExpiryTime=(token:string)=>{
    const decodedToken:any=jsonwebtoken.decode(token);
    return decodedToken.exp;
}

export const getUserName=(token:string)=>{
    const decodedToken:any=jsonwebtoken.decode(token);
    return decodedToken.user_name;
}

export const getClientId=(token:string)=>{
    const decodedToken:any=jsonwebtoken.decode(token);
    return decodedToken.client_id;
}