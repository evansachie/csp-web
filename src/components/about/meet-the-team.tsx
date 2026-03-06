const team = [
  { name: "Insert Name", role: "Chief Executive Officer" },
  { name: "Insert Name", role: "Head of Procurement" },
  { name: "Insert Name", role: "Supply Chain Director" },
  { name: "Insert Name", role: "Head of Logistics" },
  { name: "Insert Name", role: "Business Advisory Lead" },
  { name: "Insert Name", role: "IT Consultancy Lead" },
];

export function MeetTheTeam() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Meet the Team
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            At CSP, our strength lies in our people. Our team of experienced
            professionals brings together expertise in procurement, logistics,
            IT, and business advisory to deliver innovative and reliable
            solutions. Each member is committed to excellence, collaboration, and
            driving value for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-muted/30 px-6 py-8"
            >
              <div className="mb-2 size-14 rounded-full bg-muted" />
              <div className="font-semibold text-foreground">{member.name}</div>
              <div className="text-sm text-muted-foreground">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
