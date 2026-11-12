export type Project = {
  name: string;
  subName: string;
  description: string;
  technologies: string[];

  overview: string;
  motivation: string;
  architecture: string;

  challenges: string[];
  decisions: string[];

  lessons: string;
  futureImprovements: string[];
};

export const projects: Array<Project> = [
  {
    name: "Request Blackhole",
    subName: "Full Stack Application",
    description:
      "A browser request management application built with React, TypeScript, C#/.NET, MySQL, Redis, and AWS.",

    technologies: ["C#", ".NET 8", "React", "TypeScript", "AWS"],

    overview:
      "A browser-based application for inspecting, managing, and controlling network requests.",

    motivation:
      "I built Request Blackhole to better understand browser networking, request interception, authentication, and full-stack application architecture.",

    architecture:
      "The application uses a React and TypeScript frontend with a C#/.NET 8 API backend. MySQL provides persistent storage, Redis handles temporary and high-speed data, and AWS provides the application infrastructure.",

    challenges: [
      "Intercepting and managing browser network requests.",
      "Coordinating communication between the browser extension, frontend, and backend.",
      "Implementing authentication and managing application state.",
      "Deploying and connecting the application components in AWS.",
    ],

    decisions: [
      "Used React and TypeScript for a strongly typed and component-based frontend.",
      "Used C#/.NET 8 for the backend API.",
      "Used MySQL for persistent application data.",
      "Used Redis for fast access to temporary data.",
      "Used AWS for hosting and infrastructure.",
    ],

    lessons:
      "Building the application gave me a deeper understanding of browser extensions, HTTP requests, authentication, asynchronous communication, and the relationship between frontend, backend, and infrastructure.",

    futureImprovements: [
      "Improve request filtering and management capabilities.",
      "Add more granular permissions and security controls.",
      "Expand automated integration testing.",
    ],
  },

  {
    name: "Web Crawler",
    subName: "Cloud Application",
    description:
      "A C# web crawler that parses webpages for stock ticker occurrences and stores extracted data in Amazon S3.",

    technologies: ["C#", "AWS EC2", "Amazon S3"],

    overview:
      "A cloud-based web crawler that retrieves webpages, searches their contents for stock ticker symbols, and stores the extracted results.",

    motivation:
      "I built the crawler to explore web scraping, cloud computing, and large-scale data processing using AWS.",

    architecture:
      "The crawler runs as a C# application on an Amazon EC2 instance. It retrieves webpages, parses their contents for stock ticker occurrences, and stores the resulting data in Amazon S3.",

    challenges: [
      "Retrieving and parsing webpages reliably.",
      "Identifying stock ticker occurrences within webpage content.",
      "Running the crawler as a cloud-based application.",
      "Persisting extracted data in Amazon S3.",
    ],

    decisions: [
      "Used C# for the crawler and data-processing logic.",
      "Used EC2 to run the application in the cloud.",
      "Used Amazon S3 for durable and scalable data storage.",
    ],

    lessons:
      "The project gave me practical experience with web crawling, cloud infrastructure, data processing, and AWS services.",

    futureImprovements: [
      "Improve crawler scalability and concurrency.",
      "Add more robust error handling and retry logic.",
      "Expand the types of financial data extracted from webpages.",
    ],
  },
];

