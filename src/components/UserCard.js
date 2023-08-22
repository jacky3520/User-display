import React from "react";

function UserCard({ user }) {
  return (
    <div className="bg-slate-600 w-80 rounded-lg m-4 drop-shadow-lg border-slate-2 p-4">
      <div className="text-white text-xl sm:text-2xl text-left font-bold">{user.name}</div>
      <div className="text-white text-lg sm:text-xl text-left">{user.email}</div>
      <div className="text-white text-lg sm:text-xl text-left">{user.phone}</div>
    </div>
  );
}

export default UserCard;
