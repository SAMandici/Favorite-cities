import { useRouter } from "next/router";

const CityInfo = () => {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic 'id' parameter from the URL

  return (
    <div>
      <h1>City Info for {id}</h1>
      {/* Fetch and display city details based on the `id` */}
      <p>Displaying information for city {id}.</p>
    </div>
  );
};

export default CityInfo;
