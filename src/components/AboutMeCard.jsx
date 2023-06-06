export default function AboutMeCard() {
  return (
    <div className="container  grid grid-cols-1 grid-rows-3 text-center">
      <h1 className="text-4xl font-bold uppercase  text-gray-500">
        {`\u{1F44B}`}Auroiah Morgan
      </h1>
      <p className="text-gray-500">FullStack Web Developer</p>

      <p className="justify break-words text-lg antialiased font-medium tracking-wider leading-8">
        Web developer with 4 years total experience, including 2 years
        experience in frontend and backend development. Experienced in HTML,
        CSS, JavaScript, and ASP.Net ecosystem and PHP with knowledge in
        frameworks including React, Next.js, Angular, Razor and Blazor. Familiar
        with source control with git, creating and digesting APIs, supporting
        and updating within Apache servers with PHP and Databases such as SQL,
        PostgreSQL and non-SQL with and without ORMs such as Prisma. Supported
        multiple websites with hosting, SSL renewal and domain registration.{' '}
        <span className="text-rose-600">
          Providing secure, accessible, and scalable, cloud web solutions in
          logistics, entertainment, and rental services industries.
        </span>
      </p>
    </div>
  );
}
