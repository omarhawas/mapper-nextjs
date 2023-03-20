// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const result = await axios.get(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${apiKey}`
  );

  res.status(200).json({ data: result.data });
}
