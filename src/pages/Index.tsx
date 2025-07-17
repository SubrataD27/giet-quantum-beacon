
import React from 'react';
import { Atom, Book, Users, Mail, Calendar, Award, ArrowRight, ExternalLink, Phone, Zap, Network, Shield, Brain, FlaskConical, Microscope, MapPin, Globe, Target, Lightbulb } from 'lucide-react';
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
      status: "Active",
      funding: "DST SERB"
    },
    {
      title: "Post-Quantum Security",
      description: "Implementation of quantum-resistant encryption methods and secure communication protocols.",
      icon: Shield,
      status: "Active",
      funding: "AICTE"
    },
    {
      title: "Quantum Network Simulation",
      description: "Advanced simulation frameworks for quantum internet protocols and entanglement distribution.",
      icon: Network,
      status: "Planning",
      funding: "Internal"
    }
  ];

  const recentAchievements = [
    {
      title: "DST SERB Workshop Success",
      description: "Successfully conducted 5-day hands-on workshop with 50+ participants",
      date: "January 2024",
      funding: "₹2 Lakh",
      type: "Workshop"
    },
    {
      title: "Research Publication",
      description: "Quantum Computing Method for Cardiovascular Disease Prediction",
      date: "2024",
      status: "Under Review",
      type: "Publication"
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
    { number: "15+", label: "Workshops Conducted", icon: Award },
    { number: "8+", label: "Active Projects", icon: Lightbulb }
  ];

  const collaborations = [
    { name: "IBM Quantum Network", logo: "🔬" },
    { name: "Microsoft Azure Quantum", logo: "☁️" },
    { name: "DST SERB", logo: "🏛️" },
    { name: "AICTE", logo: "🎓" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <MapPin className="w-4 h-4" />
            <span>GIET University, Gunupur-765022, Odisha, India</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-4 h-4" />
            <span>raghvendra@giet.edu</span>
            <Phone className="w-4 h-4" />
            <span>+91-7804068698</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Atom className="w-6 h-6 text-blue-900 animate-spin" style={{animationDuration: '8s'}} />
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-sm">QC² Research Lab</div>
                  <div className="text-blue-200 text-xs">Department of Computer Science & Engineering</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block text-3xl md:text-4xl lg:text-5xl mb-2 text-blue-200">Quantum Computing &</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Communication</span>
              <span className="block text-white">Research Lab</span>
            </h1>
            
            <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-black px-6 py-2 rounded-full inline-block mb-8 font-semibold">
              Centre of Excellence in Quantum Technologies
            </div>
            
            <p className="text-xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Advancing quantum technologies through cutting-edge research in quantum computing, 
              communication, cryptography, and machine learning at GIET University - A pioneer in quantum research excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/research">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  Explore Research
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/facilities">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm">
                  <FlaskConical className="mr-2 w-5 h-5" />
                  Lab Facilities
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <stat.icon className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* About GIET University Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About GIET University</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A prestigious institution with 22 years of excellence in technical education
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-blue-900">Accreditation Excellence</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    NBA accredited 5 times and NAAC A+ grade with CGPA 3.28/4.0. 
                    Autonomous college status since 2018.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-blue-900">Location & Legacy</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Located in Gunupur, Odisha. One of the oldest AICTE approved 
                    autonomous engineering colleges in Eastern India.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-blue-900">Vision & Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Symbol of quality education sensitive to globalization trends 
                    in higher education and technological advancement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Research Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Cutting-edge quantum research addressing real-world challenges</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={project.status === 'Active' ? 'default' : 'secondary'}
                        className={project.status === 'Active' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-yellow-100 text-yellow-800 border-yellow-200'}
                      >
                        {project.status}
                      </Badge>
                      <div className="text-xs text-gray-500 mt-1">{project.funding}</div>
                    </div>
                  </div>
                  <CardTitle className="text-gray-900 text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/research">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Research Areas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Exploring the frontiers of quantum science and technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {researchAreas.map((area, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600 hover:border-l-purple-600 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Atom className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-gray-900 font-semibold leading-tight">{area}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations & Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Collaborations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Strategic partnerships driving quantum innovation</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {collaborations.map((partner, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <h3 className="font-semibold text-gray-900 text-sm">{partner.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Latest milestones and accomplishments</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recentAchievements.map((achievement, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      {achievement.type}
                    </Badge>
                    <span className="text-gray-500 text-sm">{achievement.date}</span>
                  </div>
                  <h3 className="text-gray-900 font-semibold text-lg mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{achievement.description}</p>
                  {achievement.funding && (
                    <Badge variant="outline" className="border-green-400 text-green-700 bg-green-50">
                      {achievement.funding}
                    </Badge>
                  )}
                  {achievement.status && (
                    <Badge variant="outline" className="border-amber-400 text-amber-700 bg-amber-50">
                      {achievement.status}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Quantum Journey</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Interested in quantum computing research, collaboration opportunities, or educational programs? 
              Connect with our world-class research team and be part of the quantum revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/programs">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3">
                  View Programs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3">
                  <Mail className="mr-2 w-5 h-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Atom className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">QC² Research Lab</h3>
                  <p className="text-gray-400 text-sm">GIET University</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Advancing quantum technologies through cutting-edge research in quantum computing, 
                communication, cryptography, and machine learning.
              </p>
              <div className="text-sm text-gray-400">
                <p>Department of Computer Science & Engineering</p>
                <p>School of Engineering and Technology</p>
                <p>GIET University, Gunupur-765022, Odisha, India</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/research" className="hover:text-white transition-colors">Research</Link></li>
                <li><Link to="/programs" className="hover:text-white transition-colors">Programs</Link></li>
                <li><Link to="/facilities" className="hover:text-white transition-colors">Facilities</Link></li>
                <li><Link to="/team" className="hover:text-white transition-colors">Team</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  raghvendra@giet.edu
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +91-7804068698
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Gunupur, Odisha
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 QC² Research Lab, GIET University. All rights reserved. | Advancing Quantum Technologies for a Better Tomorrow</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
