import React from 'react';

type Props = {
  name: string;
  role?: string;
  avatar?: string;
};

export default function MemberCard({ name, role, avatar }: Props) {
  return (
    <div className="member-card flex items-center gap-3 p-2">
      {avatar && <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />}
      <div>
        <div className="font-medium">{name}</div>
        {role && <div className="text-sm text-gray-600">{role}</div>}
      </div>
    </div>
  );
}
