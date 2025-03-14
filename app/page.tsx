import getApi from "@/app/services/getApi"

export default async function Home() {
  const data: {mess: string} = await getApi('home')
  return (
    <div>
      {data.mess}
    </div>
  )
}
