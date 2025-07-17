
import React from 'react';
import { Mail, Phone, Users, GraduationCap, BookOpen, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Team = () => {
  const faculty = [
    {
      name: "Dr. Raghvendra Kumar",
      position: "Professor & Lab Director",
      department: "Department of Computer Science and Engineering",
      email: "raghvendra@giet.edu",
      phone: "+91-7804068698",
      specialization: "Quantum Algorithms, Machine Learning",
      experience: "15+ years",
      education: "Ph.D. in Computer Science"
    },
    {
      name: "Mr. Dillip Kumar Mishra",
      position: "Assistant Professor",
      department: "Department of Computer Science and Engineering",
      email: "dillipkumarmishra@giet.edu",
      phone: "7326977444",
      specialization: "Quantum Cryptography, Security Protocols",
      experience: "8+ years",
      education: "M.Tech in Computer Science"
    },
    {
      name: "Dr. K.M. Gopal",
      position: "Deputy Dean, Computational Sciences",
      department: "School of Engineering and Technology",
      email: "hodcse@giet.edu",
      phone: "",
      specialization: "Quantum Networks, Communication Systems",
      experience: "12+ years",
      education: "Ph.D. in Electronics & Communication"
    }
  ];

  const researchScholars = [
    {
      name: "Priya Sharma",
      level: "Ph.D. Scholar",
      area: "Quantum Machine Learning for Healthcare",
      year: "3rd Year",
      supervisor: "Dr. Raghvendra Kumar"
    },
    {
      name: "Arun Patel",
      level: "M.Tech Student",
      area: "Post-Quantum Cryptography",
      year: "2nd Year",
      supervisor: "Mr. Dillip Kumar Mishra"
    },
    {
      name: "Sneha Rao",
      level: "Ph.D. Scholar",
      area: "Quantum Error Correction",
      year: "1st Year",
      supervisor: "Dr. K.M. Gopal"
    },
    {
      name: "Vikash Singh",
      level: "M.Tech Student",
      area: "Quantum Network Simulation",
      year: "1st Year",
      supervisor: "Dr. K.M. Gopal"
    }
  ];

  const visitingExperts = [
    {
      name: "Dr. Sarah Chen",
      affiliation: "IBM Research, USA",
      expertise: "Quantum Hardware",
      collaboration: "Quantum Error Correction Project"
    },
    {
      name: "Prof. Michael Weber",
      affiliation: "University of Vienna, Austria",
      expertise: "Quantum Cryptography",
      collaboration: "Quantum Key Distribution Research"
    },
    {
      name: "Dr. Amit Thakur",
      affiliation: "IIT Delhi, India",
      expertise: "Quantum Algorithms",
      collaboration: "Quantum ML Applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30 mb-6">
              <Users className="w-5 h-5 text-purple-300" />
              <span className="text-purple-200 text-sm font-medium">Research Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Quantum </span>
              Experts
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Our diverse team of researchers, faculty, and students are pushing the boundaries 
              of quantum computing through innovative research and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Team */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Faculty & Research Mentors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 text-center hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-purple-300">{member.position}</CardDescription>
                  <p className="text-purple-400 text-sm">{member.department}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-left">
                    <div>
                      <Badge variant="outline" className="border-purple-400 text-purple-300 mb-2">
                        {member.education}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">Specialization:</h4>
                      <p className="text-purple-200 text-sm">{member.specialization}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">Experience:</h4>
                      <p className="text-blue-300 text-sm">{member.experience}</p>
                    </div>
                    <div className="pt-3 space-y-2">
                      <div className="flex items-center text-purple-200 text-sm">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>{member.email}</span>
                      </div>
                      {member.phone && (
                        <div className="flex items-center text-purple-200 text-sm">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>{member.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Scholars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Research Scholars & Students</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {researchScholars.map((scholar, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{scholar.name}</CardTitle>
                      <CardDescription className="text-blue-300">{scholar.level}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-blue-300 font-semibold text-sm">Research Area:</h4>
                      <p className="text-blue-200">{scholar.area}</p>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <h4 className="text-blue-300 font-semibold text-sm">Year:</h4>
                        <p className="text-blue-200">{scholar.year}</p>
                      </div>
                      <div>
                        <h4 className="text-blue-300 font-semibold text-sm">Supervisor:</h4>
                        <p className="text-blue-200">{scholar.supervisor}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visiting Experts */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Visiting Experts & Collaborators</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {visitingExperts.map((expert, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">{expert.name}</CardTitle>
                  <CardDescription className="text-purple-300">{expert.affiliation}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <Badge variant="outline" className="border-purple-400 text-purple-300 mb-2">
                        {expert.expertise}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="text-purple-300 font-semibold text-sm mb-1">Collaboration:</h4>
                      <p className="text-purple-200 text-sm">{expert.collaboration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
