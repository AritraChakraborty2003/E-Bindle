import axios from "axios";
export async function checkIsLoggedIn(): Promise<boolean> {
  const res = await axios(
    process.env.NEXT_PUBLIC_API_URL_TEST + "api/v1/admin/isLoggedin",
    {
      withCredentials: true,
    }
  );

  return res.data.isLoggedIn as boolean;
}
