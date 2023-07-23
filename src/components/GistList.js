import React, { useEffect, useState } from "react";
import { getPublicGists, getGistForUser } from "../services/gistService";
import Gist from "./Gist";

const GistList = ({ searchValue }) => {
  // Set the list of gist users
  const [data, setData] = useState([]);

  useEffect(() => {
    // if q: searchValue is present than fetch the users according to value

    if (searchValue) {
      getGistForUser(searchValue)
        .then((res) => {
          setData(res?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Initially fetch public gist user 
      getPublicGists()
        .then((res) => {
          setData(res?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <div className="list">
      {/* if search value is present and there is no data 
      than render no user found otherwise render list of users */}

      {searchValue && !data?.length ? (
        <div className="no-user">
          <h1>No User Found</h1>
        </div>
      ) : (
        <>
          {data?.map((item, i) => {
            return <Gist gist={item} key={i} />;
          })}
        </>
      )}
    </div>
  );
};

export default GistList;
