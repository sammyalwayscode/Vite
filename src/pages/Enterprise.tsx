import React from "react";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllproducts, postAllproducts } from "../utils/ApiCalls";

const Enterprise = () => {
  const client = useQueryClient();

  const getAll = useQuery({
    queryFn: getAllproducts,
    queryKey: ["allProducts"],
  });

  // console.log("this is data", getAll?.data);

  const [title, setTitle] = React.useState("");

  const uploadData = useMutation({
    mutationFn: postAllproducts,
    onSuccess: (data: any) => {
      client.invalidateQueries(["socialMediaPost"]);
    },
  });

  const actions = () => {
    uploadData.mutate({
      title,
    });
  };

  return (
    <div>
      <h1>Enteprice Content coming soon</h1>

      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          console.log(`title `, title);
        }}
        style={{ width: "300px", height: "50px", border: "1px solid blue" }}
        type="text"
      />

      <button onClick={actions}>Submit </button>

      {getAll?.data?.data?.map((el: any) => (
        <div>
          <h3>{el?.title} </h3>
        </div>
      ))}
    </div>
  );
};

export default Enterprise;
