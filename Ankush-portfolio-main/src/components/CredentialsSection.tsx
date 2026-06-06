import FadeIn from './FadeIn';

const CREDENTIALS = [
  {
    number: '01',
    category: 'Education',
    title: 'Diploma in Computer Science Engineering',
    description:
      'Noida International University (2023–2026) — Focused on core computer science subjects, programming fundamentals, web technologies, and software engineering principles.',
  },
  {
    number: '02',
    category: 'Education',
    title: 'HIGH SCHOOL',
    description:
      'Ascent International School, Greater Noida (2020-2021).'
  },
  {
    number: '03',
    category: 'Internship',
    title: 'Web Development Internship – Kodbud',
    description:
      'Acquired hands-on experience building responsive web interfaces, optimizing layout performance, and translating designs into clean HTML, CSS, and JavaScript.',
  },
  {
    number: '04',
    category: 'Certification',
    title: 'HTML5 Certificate',
    description:
      'Demonstrated expertise in semantic markup, web accessibility standard (a11y), forms validation, and structuring modern responsive layouts.',
  },
  {
    number: '05',
    category: 'Job Simulation',
    title: 'Front-End Software Engineering Job Simulation – Forage',
    description:
      'Simulated real-world frontend engineering tasks, learning how to work with modular code structures and building user-centric interfaces.',
  },
  {
    number: '06',
    category: 'Job Simulation',
    title: 'Deloitte Technology Job Simulation',
    description:
      'Completed tasks representing consulting development pipelines, design requirements validation, and software architecture scaling analysis.',
  },
];

const CredentialsSection = () => {
  return (
    <section
      id="credentials"
      className="relative w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="text-center font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
        >
          Credentials
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {CREDENTIALS.map((credential, i) => (
          <FadeIn key={credential.number} delay={i * 0.1} y={30}>
            <div
              className="flex flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === CREDENTIALS.length - 1
                  ? { borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }
                  : {}),
              }}
            >
              <div
                className="shrink-0 font-black text-[#0C0C0C] leading-none"
                style={{ fontSize: 'clamp(2rem, 8vw, 100px)' }}
              >
                {credential.number}
              </div>

              <div className="group flex flex-col gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2 md:pt-3">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#0C0C0C]/50">
                  {credential.category}
                </span>
                <h3
                  className="font-medium uppercase text-[#0C0C0C] leading-tight relative inline-block w-fit"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
                >
                  {credential.title}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#0C0C0C]/60 transition-all duration-500 group-hover:w-full" />
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.8rem, 1.5vw, 1.15rem)',
                    opacity: 0.7,
                  }}
                >
                  {credential.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default CredentialsSection;
