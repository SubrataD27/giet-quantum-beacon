
import React from 'react';
import { Calendar, Users, Award, Clock, MapPin, ExternalLink, GraduationCap, BookOpen, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Programs = () => {
  const workshops = [
    {
      title: "Five Days Hands-on Workshop on Quantum Computing and Security",
      date: "15th - 19th January 2024",
      duration: "5 Days",
      participants: "50+",
      funding: "DST SERB (₹2 Lakh)",
      status: "Completed",
      type: "Workshop"
    },
    {
      title: "Two Days National Seminar on Future of Quantum Computing and Communication",
      date: "19th - 20th April 2024",
      duration: "2 Days",
      participants: "100+",
      funding: "DST SERB (₹2 Lakh)",
      status: "Completed",
      type: "Seminar"
    },
    {
      title: "Hands-on Workshop on Quantum Computing",
      date: "9th - 13th December 2024",
      duration: "5 Days",
      participants: "60+",
      funding: "AIU-GIET University-AADC",
      status: "Completed",
      type: "Workshop"
    },
    {
      title: "ATAL Online Faculty Development Program on Post-Quantum Cryptography",
      date: "3rd - 8th February 2025",
      duration: "6 Days",
      participants: "80+",
      funding: "AICTE ATAL FDP",
      status: "Upcoming",
      type: "FDP"
    }
  ];

  const upcomingPrograms = [
    {
      title: "Student Development Program on Quantum Technologies",
      date: "2nd - 10th July 2025",
      duration: "9 Days",
      target: "Students",
      description: "Comprehensive program covering quantum programming, algorithms, and applications"
    },
    {
      title: "International Conference on Quantum Computing",
      date: "September 2025",
      duration: "3 Days",
      target: "Researchers",
      description: "Global platform for sharing quantum computing research and innovations"
    }
  ];

  const certificationPrograms = [
    {
      title: "Quantum Programming Certification",
      duration: "3 Months",
      level: "Beginner to Intermediate",
      topics: ["Qiskit", "Cirq", "Quantum Algorithms", "Quantum Gates"],
      certificate: "Industry Recognized"
    },
    {
      title: "Quantum Cryptography Specialist",
      duration: "2 Months",
      level: "Advanced",
      topics: ["QKD Protocols", "Post-Quantum Cryptography", "Security Analysis"],
      certificate: "Professional Certificate"
    },
    {
      title: "Quantum Machine Learning Track",
      duration: "4 Months",
      level: "Intermediate to Advanced",
      topics: ["Quantum Neural Networks", "Variational Algorithms", "Hybrid Systems"],
      certificate: "Specialization Certificate"
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
              <GraduationCap className="w-5 h-5 text-purple-300" />
              <span className="text-purple-200 text-sm font-medium">Education & Training</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Education </span>
              Programs
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Comprehensive training programs, workshops, and certification courses designed to build 
              quantum computing expertise from foundational concepts to advanced applications.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="workshops" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-purple-900/30">
              <TabsTrigger value="workshops" className="data-[state=active]:bg-purple-600">Past Events</TabsTrigger>
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-purple-600">Upcoming</TabsTrigger>
              <TabsTrigger value="certification" className="data-[state=active]:bg-purple-600">Certifications</TabsTrigger>
            </TabsList>

            <TabsContent value="workshops" className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Past Workshops & Events</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="border-purple-400 text-purple-300 mb-2">
                          {workshop.type}
                        </Badge>
                        <Badge 
                          variant={workshop.status === 'Completed' ? 'default' : 'secondary'}
                          className={workshop.status === 'Completed' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'}
                        >
                          {workshop.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-lg">{workshop.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-purple-200">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{workshop.date}</span>
                        </div>
                        <div className="flex items-center text-purple-200">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{workshop.duration}</span>
                        </div>
                        <div className="flex items-center text-purple-200">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{workshop.participants} Participants</span>
                        </div>
                        <div className="flex items-center text-blue-300">
                          <Award className="w-4 h-4 mr-2" />
                          <span className="font-semibold">{workshop.funding}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingPrograms.map((program, index) => (
                  <Card key={index} className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/30">
                    <CardHeader>
                      <Badge variant="outline" className="border-blue-400 text-blue-300 mb-2 w-fit">
                        {program.target}
                      </Badge>
                      <CardTitle className="text-white text-lg">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-blue-200">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{program.date}</span>
                        </div>
                        <div className="flex items-center text-blue-200">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{program.duration}</span>
                        </div>
                        <p className="text-blue-200">{program.description}</p>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full mt-4">
                          Register Interest
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certification" className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Certification Programs</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {certificationPrograms.map((cert, index) => (
                  <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                      <CardDescription className="text-purple-300">{cert.level}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center text-purple-200">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{cert.duration}</span>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold">Topics Covered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.topics.map((topic, topicIndex) => (
                              <Badge key={topicIndex} variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="pt-4">
                          <Badge variant="outline" className="border-blue-400 text-blue-300">
                            {cert.certificate}
                          </Badge>
                        </div>
                        <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-500/20 w-full mt-4">
                          Enroll Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Programs;
