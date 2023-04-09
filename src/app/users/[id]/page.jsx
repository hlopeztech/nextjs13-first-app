"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

async function fetchUser(id) {
  return await fetch(`https://reqres.in/api/users/${id}`).then((res) =>
    res.json()
  );
}

function UsersPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(id).then((user) => setUser(user));
  }, [id]);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {
          user && (
            <div className="card">
              <div className="card-header text-center">
                <img src={user.data.avatar} alt={user.data.email} />
              </div>
              <div className="card-body text-center">
                <h5>
                  {user.data.id} {user.data.first_name} {user.data.last_name}
                </h5>
                <p>{user.data.email}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default UsersPage;
