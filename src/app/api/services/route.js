import { services } from "../../../../public/services";


export async function GET() {
  return Response.json(services);
}