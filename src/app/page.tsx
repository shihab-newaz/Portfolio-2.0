import {
  BlurFadeText,
  BlurFade,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Badge,
} from "@/components/ui";
import { ResumeCard, ProjectCard } from "@/components";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {" "}
      {/* hero */}
      <section id="hero" className="pt-16 w-full">
        <div className="w-full">
          <div className="flex items-center justify-between gap-8">
            <div className="flex flex-col space-y-4">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tight sm:text-5xl"
                text={`Hi, I'm ${DATA.name.split(" ")[0]}👋`}
              />
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="max-w-[600px] text-lg text-muted-foreground"
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-32 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* about me */}
      <section id="about" className="space-y-4 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* work experience */}
      <section id="work" className="space-y-4 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-2xl font-bold">Work Experience</h2>
        </BlurFade>
        <div className="space-y-4">
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      {/* education */}
      <section id="education" className="space-y-4 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-2xl font-bold">Education</h2>
        </BlurFade>
        <div className="space-y-4">
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      {/* skills */}
      <section id="skills" className="space-y-4 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-2xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            </BlurFade>
          ))}
        </div>
      </section>

          {/* programming */}
          <section id="programming" className="space-y-4 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <h2 className="text-2xl font-bold">Programming Experience</h2>
        </BlurFade>
        <div className="space-y-4">
          {Object.entries(DATA.programming).map(([key, platform], index) => (
            <BlurFade key={key} delay={BLUR_FADE_DELAY * (12 + index)}>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <platform.icon className="w-6 h-6" />
                  {platform.url ? (
                    <Link 
                      href={platform.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Link>
                  ) : (
                    <h3 className="text-lg font-semibold">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </h3>
                  )}
                </div>
                <span>{platform.solved} problems solved</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-8 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="space-y-4 text-center">
            <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto">
              I've worked on a variety of projects, including web development, blockchain development, 
              mobile app development and more. Here are a few of my favorites.
            </p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-8 pb-16 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-4 text-center">
            <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[800px] text-muted-foreground">
              Want to chat? Feel free to reach out to me via email at{" "}
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="text-primary hover:underline"
              >
                {DATA.contact.email}
              </Link>
              <span> or call me at {DATA.contact.tel}. I'll do my best to respond promptly. </span> 
            </p>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
