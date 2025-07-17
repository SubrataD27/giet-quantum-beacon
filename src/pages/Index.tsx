
import React from 'react';
import { Atom, Book, Users, Mail, Calendar, Award, ArrowRight, ExternalLink, Phone, Zap, Network, Shield, Brain, FlaskConical, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Index = () => {
  const researchAreas = [
    "Quantum Algorithms and Complexity",
    "Quantum Cryptography and Secure Communication", 
    "Quantum Machine Learning",
    "Quantum Error Correction and Noise Mitigation",
    "Quantum Network Design and Simulation",
    "Quantum Devices and Hardware Interfacing"
  ];

  const featuredProjects = [
    {
      title: "Quantum-Enhanced Healthcare",
      description: "Developing quantum algorithms for cardiovascular disease prediction using machine learning techniques.",
      icon: Brain,
      status: "Active"
    },
    {
      title: "Post-Quantum Security",
      description: "Implementation of quantum-resistant encryption methods and secure communication protocols.",
      icon: Shield,
      status: "Active"
    },
    {
      title: "Quantum Network Simulation",
      description: "Advanced simulation frameworks for quantum internet protocols and entanglement distribution.",
      icon: Network,
      status: "Planning"
    }
  ];

  const recentAchievements = [
    {
      title: "DST SERB Workshop Success",
      description: "Successfully conducted 5-day hands-on workshop with 50+ participants",
      date: "January 2024",
      funding: "₹2 Lakh"
    },
    {
      title: "Research Publication",
      description: "Quantum Computing Method for Cardiovascular Disease Prediction",
      date: "2024",
      status: "Under Review"
    },
    {
      title: "International Collaboration",
      description: "Partnership with IBM Quantum Network for advanced research",
      date: "2024",
      type: "Collaboration"
    }
  ];

  const stats = [
    { number: "50+", label: "Research Publications", icon: Book },
    { number: "200+", label: "Students Trained", icon: Users },
    { number: "15+", label: "Workshop Conducted", icon: Award },
    { number: "5+", label: "Industry Partners", icon: Network }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              <Link to="/research">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
                  Explore Research
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/facilities">
                <Button variant="outline" size="lg" className="border-purple-400 text-purple-300 hover:bg-purple-500/20 px-8 py-3">
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Lab Facilities
                </Button>
              </Link>
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

      {/* Stats Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 text-center hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-purple-200">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Research Projects</h2>
            <p className="text-purple-200 text-lg">Cutting-edge quantum research addressing real-world challenges</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge 
                      variant={project.status === 'Active' ? 'default' : 'secondary'}
                      className={project.status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/research">
              <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-500/20">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
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
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Recent Achievements</h2>
            <p className="text-purple-200 text-lg">Latest milestones and accomplishments</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentAchievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/30">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-blue-200 mb-3">{achievement.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300 text-sm">{achievement.date}</span>
                    {achievement.funding && (
                      <Badge variant="outline" className="border-green-400 text-green-300">
                        {achievement.funding}
                      </Badge>
                    )}
                    {achievement.status && (
                      <Badge variant="outline" className="border-yellow-400 text-yellow-300">
                        {achievement.status}
                      </Badge>
                    )}
                    {achievement.type && (
                      <Badge variant="outline" className="border-blue-400 text-blue-300">
                        {achievement.type}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Quantum Journey</h2>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              Interested in quantum computing research, collaboration opportunities, or educational programs? 
              Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/programs">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  View Programs
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-500/20">
                  Contact Us
                </Button>
              </Link>
            </div>
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
