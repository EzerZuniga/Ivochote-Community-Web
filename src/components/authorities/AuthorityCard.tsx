import React from "react";
import type { Authority } from "../../types/authorities";

type Props = {
  authority: Authority;
};

export default function AuthorityCard({ authority }: Props) {
  return (
    <div className="authority-card border border-primary-100 rounded p-3 flex gap-3 items-center">
      {authority.image && (
        <img
          src={authority.image}
          alt={authority.name}
          className="w-16 h-16 rounded-full object-cover"
        />
      )}
      <div>
        <h4 className="font-medium text-primary-900">{authority.name}</h4>
        <div className="text-sm text-primary-900/60">{authority.position}</div>
      </div>
    </div>
  );
}
