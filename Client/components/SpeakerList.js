import React from "react";
import { useQuery } from "@apollo/client";
import Toolbar from "../components/Toolbar";
import { GET_SPEAKERS } from "../graphql/queries";
import SpeakerCard from "./SpeakerCard";

const SpeakerList = () => {
  const { loading, error, data } = useQuery(GET_SPEAKERS);

  if (loading) return <div className="">Loading...</div>;

  if (error === true) return <div className="col-sm6">Error</div>;
  return (
    <>
      <Toolbar />
      <div className="grid grid-rows-3 grid-flow-col gap-2">
        {data.speakers.datalist.map(({ id, first, last, fullName, favorite }, i) => {
          return (
            <SpeakerCard key={id} speaker={{ id, first, last, favorite, fullName, i }} />
          );
        })}
      </div>
    </>
  );
};

export default SpeakerList;
