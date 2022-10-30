import User from "./User";

const Users = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        // name, gender, email, location(country)
        return (
          <User
            key={user.login.uuid}
            name={user.name}
            gender={user.gender}
            email={user.email}
            location={user.location}
          />
        );
      })}
    </div>
  );
};

export default Users;
