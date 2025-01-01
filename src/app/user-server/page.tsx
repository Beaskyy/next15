type User = {
  id: number;
  name: string;
  email: string;
}

export default async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users)
  return (
    <div>
      {users.map((user: User) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
