import type { Authority } from "../../types/authorities";

interface Props {
  authority: Authority;
}

export default function AuthorityCard({ authority }: Props) {
  return (
    <article className="bg-white border border-primary-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start gap-4">
        {authority.image ? (
          <img
            src={authority.image}
            alt={authority.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-primary-200 flex-shrink-0"
            loading="lazy"
            width={80}
            height={80}
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 text-2xl font-bold flex-shrink-0">
            {authority.name.charAt(0)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-primary-900">{authority.name}</h3>
          {authority.position && <div className="text-sm font-medium text-primary-700">{authority.position}</div>}
          {authority.department && <div className="text-xs text-primary-900/50 mt-0.5">{authority.department}</div>}
        </div>
      </div>
      {authority.bio && <p className="mt-3 text-sm text-primary-900/60 line-clamp-3">{authority.bio}</p>}
      <div className="mt-3 flex flex-wrap gap-3">
        {authority.email && <a className="text-xs text-primary-700 hover:underline" href={`mailto:${authority.email}`}>{authority.email}</a>}
        {authority.phone && <span className="text-xs text-primary-900/50">{authority.phone}</span>}
      </div>
    </article>
  );
}
