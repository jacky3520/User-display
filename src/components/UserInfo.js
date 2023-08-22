import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserInfo() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const filteredResults = users.filter(
      user =>
        user.name.toLowerCase().includes(searchKeyword) ||
        user.email.toLowerCase().includes(searchKeyword) ||
        user.phone.toLowerCase().includes(searchKeyword)
    );

    setFilteredUsers(filteredResults);
  }, [users, searchKeyword]);

  useEffect(() => {
    const sortedResults = [...filteredUsers].sort((a, b) =>
      a[sortBy].localeCompare(b[sortBy])
    );
    setFilteredUsers(sortedResults);
  }, [filteredUsers, sortBy]);

  const handleSearch = event => {
    const keyword = event.target.value.toLowerCase();
    setSearchKeyword(keyword);
  };

  return (
    <div>
      <div className="mt-4 flex mx-2 justify-center">
        <input
          className="rounded-l-2xl h-12 px-2 w-4/6 text-white bg-slate-600"
          type="text"
          placeholder="Search by name, email or phone number"
          value={searchKeyword}
          onChange={handleSearch}
        />

        <select
          className="px-2 h-12 bg-slate-600 rounded-r-2xl text-gray-400"
          value={sortBy}
          onChange={event => setSortBy(event.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="email">Sort by Email</option>
          <option value="phone">Sort by Phone</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserInfo;
