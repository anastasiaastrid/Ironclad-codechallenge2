"use client";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

const TeamPage: NextPage = () => {
  const [teamMembers, setTeamMembers] = useState<RandomUser[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=3");
        const data = await res.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  const getJobTitle = (index: number): string => {
    switch (index) {
      case 0:
        return "CEO";
      case 1:
        return "Watch Designer";
      case 2:
        return "Marketing";
      default:
        return "Team Member";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 sm:px-8 md:px-16 lg:px-32">
      <Head>
        <title>Ironclad Watch Team</title>
        <link rel="preload" href="/fonts/ZenDots-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/BakbakOne-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </Head>

      <h1 className="text-3xl font-bold mb-10">Meet Our Team</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <img
              src={member.picture.large}
              alt={`Avatar of ${member.name.first} ${member.name.last}`}
              className="w-24 h-24 rounded-full"
            />
            <div className="text-center">
              <p className="font-semibold">{`${member.name.first} ${member.name.last}`}</p>
              <p className="text-gray-500">{member.email}</p>
              <p className="text-gray-500">{getJobTitle(index)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
