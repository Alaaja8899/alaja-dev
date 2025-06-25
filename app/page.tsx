"use client"
import Image from "next/image"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  MapPin,
  Calendar,
  LinkIcon,
  Users,
  Calendar1,
  CalendarClock,
  Code,
  Code2,
  Atom,
  Layers,
  Server,
  ServerCrash,
  Leaf,
  Database,
  GitGraph,
  Cloud,
  Box,
  GitBranch,
  Wind,
  Repeat,
  TestTube,
  PenTool,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function SocialProfilePage() {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Abdirizak (alaaja)
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Mail className="mr-2 h-4 w-4" />
              Message
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/me.webp" alt="@user" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"        >
          <div
            className="relative max-w-md w-full p-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          >
            <Image
              src="/me.webp"
              alt="Enlarged Profile"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <button
              className="absolute top-1 right-1 text-white text-2xl font-bold"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <main>
        {/* Profile Header */}
        <div className="relative">
          <div className="h-48 md:h-64 w-full bg-muted">
            <Image
              src="/bg.webp"
              alt="Cover"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative">
            <div className="absolute -top-16 l(eft-4 md:left-8 flex items-end">
              <div
                className="relative h-32 w-32 rounded-full border-4 border-background overflow-hidden">
                <Image
                  src="/me.webp"
                  alt="Profile"
                  fill
                  className="object-cover cursor-pointer"
                  priority
                  onClick={() => setShowModal(true)}

                />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="container pt-20 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Abdirizak Abdullahi (Alaja)</h1>
              <p className="text-muted-foreground">Software Engineer 🖥 💻</p>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>📍 Mogadishu , Somalia </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-6">
            <div className="text-center">
              <div className="font-bold">100+</div>
              <div className="text-xs text-muted-foreground">Repositories</div>
            </div>
            <div className="text-center">
              <div className="font-bold">8k+</div>
              <div className="text-xs text-muted-foreground">Contributions</div>
            </div>
            <div className="text-center">
              <div className="font-bold">50+</div>
              <div className="text-xs text-muted-foreground">Projects</div>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6">
            <p className="text-sm">
              Expertise in developing web applications, IoT solutions, 2D games, and AI wrappers. Passionate about solving real-world problems through Modern technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/" className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground">
              <LinkIcon className="mr-1 h-3 w-3" />
              #
            </Link>
            <Link href="https://github.com/alaaja8899" className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground">
              <Github className="mr-1 h-3 w-3" />
              github.com/alaaja8899
            </Link>
            <Link href="https://wa.me/+252611430930" className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground">
              <MessageCircle className="mr-1 h-3 w-3" />
              Chat on WhatsApp
            </Link>
          </div>
        </div>

        <Separator />

        {/* Tabs and Content */}
        <div className="container py-6">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>



            {/* Experience Tab */}
            <TabsContent value="experience" className="mt-6">
              <div className="space-y-6">
                {[
                  {
                    role: "Software Engineer Intern",
                    company: "Upstash",
                    logo: "/upstash.webp",
                    period: "jun-2025 - Present",
                    location: "Intern - Remote",
                    description:
                      "Working on serverless backend systems using Redis, vector search, and QStash. I focus on improving scalability, developer experience, and edge-ready API integrations.",
                  },
                  // {
                  //   role: "Former  CTO & Software",
                  //   company: "Danab Power Bank Station",
                  //   logo: "/danab-1.webp",
                  //   period: "2024 - jun25-2025",
                  //   location: "Mogadishu, Somalia",
                  //   description:
                  //     "I worked on backend structuring, improving UI scalability, and enhancing the overall performance of Danab servers.",
                  // },
                  {
                    role: "Former -  Developer",
                    company: "Shape Ads",
                    logo: "/shapeads.webp",
                    period: "mar - 2025 - jun-10th-2025",
                    location: "Mogadishu, Somalia",
                    description:
                      "Building AI automation tools to manage social media ads and CMS - ERP Next solutions for businesses.",
                  },
                  {
                    role: "Former - Software Engineer",
                    company: "TAHQIIQ Solutions Inc.",
                    logo: "/tahqiq.webp",
                    period: "2024-aug - 2025-apr",
                    location: "Mogadishu, Somalia",
                    description:
                      "Worked on programming IoT devices primarily using C++, and developed user interfaces directly integrated with the hardware. Also contributed to innovative hardware solutions, including IoT systems and smart home electrical devices, aimed at streamlining operations and improving efficiency."
                  },
                ].map((job, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={job.logo || "/placeholder.svg"}
                            alt={job.company}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold">{job.role}</h3>
                          <div className="text-sm">{job.company}</div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                            <Calendar className="h-3 w-3" />
                            <span>{job.period}</span>
                            <span>•</span>
                            <MapPin className="h-3 w-3" />
                            <span>{job.location}</span>
                          </div>
                          <p className="text-sm mt-3">{job.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* Projects Tab */}
            <TabsContent value="projects" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  // {
                  //   title: "Danab Power Bank Rental App",
                  //   description:
                  //     "A web application for renting Danab power bank stations, featuring real-time availability, rental tracking, and secure payment integration.",
                  //   tags: ["Next.js", "TailwindCss", "Redux", "ShadCn", "WaafiPay"],
                  //   image: "/danab.webp",
                  //   date: "Nov 16, 2024",
                  //   link: "https://dn-frontend-gamma.vercel.app/"
                  // },
                  {
                    title: "AlajArt",
                    description:
                      "A website that transforms image images into cartoon like styles or professional photo pose shot .",
                    tags: ["Next.js", "Convex", "Tailwind CSS", "Redux", "WaafiPay"],
                    image: "/alajart.webp",
                    date: "Apr 29, 2025",
                    link: "https://alaj-art.vercel.app/"
                  },
                  {
                    title: "Space Invaders",
                    description: `
                  A classic Space Invaders game implemented using Pygame.

This project is a simple implementation of the Space Invaders arcade game using Python and Pygame. It includes basic gameplay mechanics such as moving the spaceship horizontally, shooting bullets, and dodging enemy attacks.


                  `,
                    tags: ["Python", "Pygame", "SPrite", "SV-8 engine"],
                    image: "/space.webp",
                    date: "Jul 4, 2022",
                    link: "https://github.com/Alaaja8899/space-invaders"
                  },
                  {
                    title: "Echopal - Audio streaming",
                    description: "Echopal is Open source project a live audio streaming web application where users can create and join various rooms to chat with friends or meet new people. It helps communities discuss their interests, whether it's anime (for otaku people), for developers , for family & freind or classmates discussion",
                    tags: ["React.js", "Firebase", "TailwindCss", "Agora"],
                    image: "/echopal.webp",
                    date: "Jul 26, 2024",
                    link: "https://echopal.vercel.app/"

                  },
                ].map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <CalendarClock className="h-4 w-4" />
                            First Commit :  {project.date}
                          </span>
                        </div>
                        <Button variant="outline" size="sm" className="gap-1">
                          <ExternalLink className="h-3 w-3" />
                          <Link href={project.link}>
                            View
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Technical Skills</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: "C++", level: "Expert", icon: <Code className="text-blue-500 h-5 w-5" />, description: "Proficient in developing high-performance applications, including IoT and embedded systems." },
                      { name: "JavaScript", level: "Expert", icon: <Code2 className="text-yellow-500 h-5 w-5" />, description: "Skilled in building dynamic and interactive web applications." },
                      { name: "TypeScript", level: "Advanced", icon: <Code className="text-blue-600 h-5 w-5" />, description: "Experienced in creating scalable and type-safe applications." },
                      { name: "React", level: "Expert", icon: <Atom className="text-cyan-500 h-5 w-5" />, description: "Expert in building reusable components and managing state effectively." },
                      { name: "Next.js", level: "Advanced", icon: <Layers className="text-gray-800 h-5 w-5" />, description: "Proficient in server-side rendering and building SEO-friendly web apps." },
                      { name: "Node.js", level: "Advanced", icon: <Server className="text-green-500 h-5 w-5" />, description: "Experienced in building scalable backend services and APIs." },
                      { name: "Express", level: "Expert", icon: <ServerCrash className="text-gray-500 h-5 w-5" />, description: "Capable of creating RESTful APIs and middleware for web applications." },
                      { name: "MongoDB", level: "Advanced", icon: <Leaf className="text-green-600 h-5 w-5" />, description: "Skilled in designing and managing NoSQL databases for high-performance applications." },
                      { name: "PostgreSQL", level: "Advanced", icon: <Database className="text-blue-700 h-5 w-5" />, description: "Experienced in relational database design and query optimization." },
                      { name: "GraphQL", level: "Advanced", icon: <GitGraph className="text-pink-500 h-5 w-5" />, description: "Proficient in building flexible and efficient APIs for modern applications." },
                      { name: "AWS", level: "Expert", icon: <Cloud className="text-orange-500 h-5 w-5" />, description: "Experienced in deploying and managing cloud-based applications." },
                      { name: "Docker", level: "Advanced", icon: <Box className="text-blue-400 h-5 w-5" />, description: "Skilled in containerizing applications for consistent and scalable deployments." },
                      { name: "Git", level: "Advanced", icon: <GitBranch className="text-red-500 h-5 w-5" />, description: "Proficient in version control and collaborative development workflows." },
                      { name: "Tailwind CSS", level: "Advanced", icon: <Wind className="text-teal-500 h-5 w-5" />, description: "Expert in creating responsive and modern UI designs efficiently." },
                      { name: "Redux", level: "Advanced", icon: <Repeat className="text-purple-500 h-5 w-5" />, description: "Experienced in managing complex application state effectively." },
                      { name: "Jest", level: "Advanced", icon: <TestTube className="text-red-400 h-5 w-5" />, description: "Capable of writing unit and integration tests for robust applications." },
                      { name: "Figma", level: "Intermediate", icon: <PenTool className="text-pink-400 h-5 w-5" />, description: "Skilled in designing user interfaces and collaborating with design teams." },
                    ].map((skill, index) => (
                      <div key={index} className="border rounded-lg p-3 hover:border-primary transition-colors flex items-center gap-3">
                        <div>
                          <div className="top flex items-center gap-1">
                            {skill.icon}
                            <div className="main">
                              <div className="font-medium">{skill.name}</div>
                              <span className="text-xs text-muted-foreground">{skill.level}</span>
                            </div>
                          </div>
                          <p className="desc text-sm text-muted-foreground mt-2">{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Certifications</h3>
                  <div className="space-y-4">
                    {[
                      {
                        name: "AWS Certified Solutions Architect – Associate",
                        issuer: "Amazon Web Services",
                        date: "Dec-2024",
                        logo: "https://www.inovex.de/wp-content/uploads/Amazon_Web_Services_Logo-kl.png",
                      },
                      {
                        name: "Meta Certified Front-End Developer",
                        issuer: "Meta Platforms, Inc.",
                        date: "2024-jul",
                        logo: "https://ztd-euwest2-prod-s3.s3.eu-west-2.amazonaws.com/Meta_63e391ad39.png",
                      },
                      {
                        name: "MongoDB Certified Developer Associate",
                        issuer: "MongoDB University",
                        date: "2024",
                        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/b9/9b3af01d614d18a4d39471abb25b55/Google-Play-Store-Banner_1920x960px.jpg?auto=format%2Ccompress&dpr=1&w=200&h=200",
                      },
                      {
                        name: "Google Cloud Professional Data Engineer",
                        issuer: "Google Cloud",
                        date: "2024",
                        logo: "https://avatars.githubusercontent.com/u/2810941?s=200&v=4",
                      },
                      {
                        name: "Certified Kubernetes Administrator (CKA)",
                        issuer: "Cloud Native Computing Foundation",
                        date: "2025",
                        logo: "https://avatars.githubusercontent.com/u/13455738?s=280&v=4",
                      },
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={cert.logo || "/placeholder.svg"}
                            alt={cert.issuer}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{cert.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {cert.issuer} • {cert.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Alaaja . All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
