
import React from 'react';
import { Atom, Book, Users, Mail, Calendar, Award, ArrowRight, ExternalLink, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const researchAreas = [
    "Quantum Algorithms and Complexity",
    "Quantum Cryptography and Secure Communication", 
    "Quantum Machine Learning",
    "Quantum Error Correction and Noise Mitigation",
    "Quantum Network Design and Simulation",
    "Quantum Devices and Hardware Interfacing"
  ];

  const activities = [
    {
      title: "Five Days Hands-on Workshop on Quantum Computing and Security",
      date: "15th - 19th January 2024",
      funding: "DST SERB (2 Lakh)"
    },
    {
      title: "Two Days National Seminar on Future of Quantum Computing and Communication",
      date: "19 - 20 April 2024", 
      funding: "DST SERB (2 Lakh)"
    },
    {
      title: "25th Annual Faculty Convention of ISTE Orissa Section",
      date: "3rd - 4th August 2024",
      funding: "ISTE"
    },
    {
      title: "Faculty Development Program on Quantum Computing and Communication",
      date: "5th - 9th August 2024",
      funding: "E&ICT Academy, IIT Roorkee"
    },
    {
      title: "Exploring Future Computing and Communication through Quantum Vision",
      date: "9th - 10th August 2024",
      funding: "AICTE VAANI Scheme (2 Lakh)"
    },
    {
      title: "Hands-on Workshop on Quantum Computing",
      date: "9th - 13th December 2024",
      funding: "AIU-GIET University-AADC"
    }
  ];

  const mentors = [
    {
      name: "Dr. Raghvendra Kumar",
      position: "Professor, Department of CSE",
      email: "raghvendra@giet.edu",
      phone: "+91-7804068698"
    },
    {
      name: "Mr. Dillip Kumar Mishra",
      position: "Assistant Professor, Department of CSE", 
      email: "dillipkumarmishra@giet.edu",
      phone: "7326977444"
    },
    {
      name: "Dr. K.M. Gopal",
      position: "Dy. Dean, Computational Sciences",
      email: "hodcse@giet.edu",
      phone: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
                <Atom className="w-6 h-6 text-white animate-spin" style={{animationDuration: '8s'}} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">QC² Research Lab</h1>
                <p className="text-sm text-purple-300">GIET University</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-purple-200 hover:text-white transition-colors">About</a>
              <a href="#research" className="text-purple-200 hover:text-white transition-colors">Research</a>
              <a href="#team" className="text-purple-200 hover:text-white transition-colors">Team</a>
              <a href="#activities" className="text-purple-200 hover:text-white transition-colors">Activities</a>
              <a href="#contact" className="text-purple-200 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30 mb-4">
                <Atom className="w-5 h-5 text-purple-300" />
                <span className="text-purple-200 text-sm font-medium">Quantum Computing & Communication Research Lab</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Pioneering the
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Quantum </span>
              Future
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advancing quantum technologies through cutting-edge research in quantum computing, 
              communication, cryptography, and machine learning at GIET University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
                Explore Research
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-400 text-purple-300 hover:bg-purple-500/20 px-8 py-3">
                <ExternalLink className="mr-2 w-5 h-5" />
                Lab Resources
              </Button>
            </div>
          </div>
        </div>
        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-70"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">About QC² Research Lab</h2>
            <p className="text-purple-200 text-lg max-w-3xl mx-auto">
              A dedicated research facility at GIET University focused on advancing quantum technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Atom className="mr-2 w-6 h-6 text-purple-400" />
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-200">
                  To be a pioneering center of excellence in quantum computing and communication, 
                  driving transformative research and innovation for societal advancement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Book className="mr-2 w-6 h-6 text-blue-400" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200">
                  Conduct cutting-edge research, collaborate with institutions, train professionals, 
                  and develop quantum solutions for enhanced cybersecurity and sustainable computing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="mr-2 w-6 h-6 text-purple-400" />
                  Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-200">
                  Develop scalable quantum algorithms, investigate quantum communication protocols, 
                  and promote innovation through collaborative research and training.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* University Info */}
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">About GIET University</h3>
            <p className="text-purple-200 leading-relaxed">
              GIET University, Gunupur is a 22-year-old autonomous college accredited by NBA (five times) 
              and NAAC (twice) with A+ grade (CGPA 3.28/4.0). Accorded state private University status 
              in December 2018, it is one of the oldest AICTE-approved autonomous engineering colleges 
              in Eastern India, symbolizing quality education and sensitivity to globalization trends.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="research" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Key Research Areas</h2>
            <p className="text-purple-200 text-lg">
              Exploring the frontiers of quantum science and technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Atom className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-white font-semibold leading-tight">{area}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Facilities */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Facilities & Resources</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white">Cloud-Based Quantum Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-purple-200">
                    <li>• IBM Quantum Platform</li>
                    <li>• Microsoft Azure Quantum</li>
                    <li>• Quantum circuit simulation tools</li>
                    <li>• Communication protocol simulators</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="text-white">Research Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-blue-200">
                    <li>• Quantum-safe cryptography toolkits</li>
                    <li>• High-performance computing infrastructure</li>
                    <li>• Hybrid quantum-classical simulations</li>
                    <li>• Quantum programming environments</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Research Mentors</h2>
            <p className="text-purple-200 text-lg">Leading experts guiding quantum research excellence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{mentor.name}</CardTitle>
                  <CardDescription className="text-purple-300">{mentor.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-purple-200">
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-sm">{mentor.email}</span>
                    </div>
                    {mentor.phone && (
                      <div className="flex items-center justify-center text-purple-200">
                        <Phone className="w-4 h-4 mr-2" />
                        <span className="text-sm">{mentor.phone}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Achievements */}
      <section id="activities" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Lab Activities & Achievements</h2>
            <p className="text-purple-200 text-lg">Workshops, seminars, and research milestones</p>
          </div>
          
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <Card key={index} className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-2">{activity.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 w-fit">
                          <Calendar className="w-3 h-3 mr-1" />
                          {activity.date}
                        </Badge>
                        <Badge variant="outline" className="border-blue-400 text-blue-300 w-fit">
                          <Award className="w-3 h-3 mr-1" />
                          {activity.funding}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Research Achievements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Book className="mr-2 w-6 h-6 text-purple-400" />
                    Book Chapters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-purple-200">
                    <li>• Quantum-Enhanced Lattice Cryptography: AES Encryption with Crystal Kyber and QRNG IV</li>
                    <li>• Exploring Quantum Key Distribution: Protocol Efficiency and Implementation Challenges</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="mr-2 w-6 h-6 text-blue-400" />
                    Research Papers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-blue-200">
                    <li>• Quantum Computing Method for Prediction of Cardiovascular Disease (ITL Wiley - Under Minor Revision)</li>
                    <li>• Quantum-Enhanced ML Techniques for Mental Health Predictions (Under Communication)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-purple-200 text-lg">Get in touch with our quantum research team</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Lab Information</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-purple-300 font-semibold">QC² Research Lab</h4>
                        <p className="text-purple-200">Department of Computer Science and Engineering</p>
                        <p className="text-purple-200">School of Engineering and Technology</p>
                        <p className="text-purple-200">GIET University, Gunupur-765022</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Primary Contact</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-blue-300 font-semibold">Dr. Raghvendra Kumar</h4>
                        <p className="text-blue-200">Professor, Department of CSE</p>
                        <div className="flex items-center mt-2 text-blue-200">
                          <Mail className="w-4 h-4 mr-2" />
                          <span>raghvendra@giet.edu</span>
                        </div>
                        <div className="flex items-center mt-1 text-blue-200">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>+91-7804068698</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-purple-500/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">QC² Research Lab</h3>
                <p className="text-purple-300 text-sm">GIET University</p>
              </div>
            </div>
            <p className="text-purple-300 text-sm text-center md:text-right">
              © 2024 QC² Research Lab, GIET University. Advancing Quantum Technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
