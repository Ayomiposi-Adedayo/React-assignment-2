import { useEffect, useState } from "react";
import { useFetch } from "../components/useFetch";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./UsersPage.css";

const UsersPage = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage - 1;
      if (nextPage < 0) {
        nextPage = oldPage + 1;
      }
      return nextPage;
    });
  };
  useEffect(() => {
    if (loading) return;
    setUsers(data[page]);
  }, [loading, data, page]);
  if (loading) {
    return <h4>loading...</h4>;
  } else {
    return (
      <div className="users-page">
        {!loading &&
          users.map((user) => {
            // name, gender, email, location(country)
            const { gender } = user;
            console.log(gender);

            return (
              <div className="user" key={user.id}>
                <div className="user-icon">
                  <img src="https://res.cloudinary.com/percy-1789/image/upload/v1667162011/person_jvwgwz.png" alt="user" />
                </div>

                <div className="user-data">
                  <p>
                    Name:{" "}
                    <span>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</span>{" "}
                  </p>
                  <p>
                    Gender: <span>{gender}</span>
                  </p>
                  <p>
                    Email: <span>{user.email}</span>
                  </p>
                  <p>
                    Country:{" "}
                    <span>{`${user.location.city}, ${user.location.country}`}</span>{" "}
                  </p>
                </div>
              </div>
            );
          })}

        <div className="btn">
          {!loading && (
            <div>
              <button className="single-btn" onClick={prevPage} single-btn>
                <AiOutlineArrowLeft />
              </button>
              {data.map((item, index) => {
                return (
                  <button
                    className="single-btn"
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
              <button className="single-btn" onClick={nextPage}>
                <AiOutlineArrowRight />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default UsersPage;
