import Users from "@/components/Users";

async function fetchUsers() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  console.log(data.data);
  return data;
}

async function IndexPage() {
  const users = await fetchUsers();
  console.log(users);
  return <Users users={users} />;
}

export default IndexPage;
