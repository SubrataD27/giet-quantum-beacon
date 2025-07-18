
import React from 'react';
import { Atom, Book, Users, Mail, Calendar, Award, ArrowRight, ExternalLink, Phone, Zap, Network, Shield, Brain, FlaskConical, Microscope, MapPin, Globe, Target, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import FloatingContactSidebar from '@/components/FloatingContactSidebar';

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

  const associationLogos = [
    { 
      src: "https://i.imgur.com/hTLpc3f.png", 
      alt: "GIET University Logo",
      name: "GIET University",
      role: "Host Institution"
    },
    { 
      src: "https://www.ieindia.org/Image/iei_Logo.jpg", 
      alt: "IEI Logo",
      name: "Institution of Engineers India",
      role: "" 
    },
    { 
      src: "https://www.isteonline.in/icons/logo.png", 
      alt: "ISTE logo",
      name: "ISTE",
      role: "" 
    },
    { 
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBQ1jkLg3mTTciU1oRwspnMMUmETXWF75MQ&s", 
      alt: "UGC",
      name: "UGC",
      role: ""
    },
    { 
      src: "https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2021/07/AICTE-Logo-250x250-1.png?w=250&ssl=1", 
      alt: "AICTE Logo",
      name: "AICTE",
      role: ""
    },
    { 
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADwCAMAAABCI8pNAAAAh1BMVEX///8AAACUlJSoqKi5ubmfn5/b29s0NDTMzMz8/PyamprU1NTY2Nh5eXnw8PC0tLTt7e3j4+Ourq7Dw8Pg4OBpaWmMjIyDg4PAwMDPz8+AgICenp739/eOjo5BQUFzc3NdXV1ISEhkZGRQUFBUVFQqKio7OzsiIiIVFRUcHBwREREuLi42NjaT4469AAAdL0lEQVR4nO19h5brNs8tIEoy1Xu1uuTu93++C1CeczyTM8mX/Ums3OW9Zo2LZBtbJNEIUgBvvPHGG6+DaZdaWIYyagzz1bL8n+FXUTIauKJDHLDte/3VUv1fIIjISUOR5JD5NeQVoKHXKF4t119Hg7cksKw0hhZsS4ABRqhJOB1eLdhfh4UJWEbp5A3KY9CbHWixG+odNq+W7K8DDee4n3rtvMg41cN2wALOfYPZqwX765h3TWFhL3+80RiFtPUBXyjTXwDp6h/P+wGgCCEUgbUeC0yYu1D+tyhppOTGlQC4iLLwIa7jGX1gBai3BWCkXX6c7rTFtnV6ciTT47q7Y6heHoJSIDFaTkk30VFsyCiVtjyQ2lDwRxxnROeFIv8BAsz0mB7Zth51qNB3GwTbA8g8tOCqz67vhWUDiKpzNjiQ7rMyjF8s+LeI0HFc9ewEYTZ6SPbHT6SWWHToRKMqoMYr26anlwYdcubVQJndZttpIbFBDaNpFAP6PWkBjV5p4/mkGgKXZUcjJyjJ2raX4w1b9TmR9OPrpP492EekNoro+sO+AUufx8sASi141xAz05LontgixXNDPZOGU+Q/Phqj//33vgzRgk2KnWY11B41vVFHnq7X4ykEuaBcHVf/ZgrSe16AGJKNalU3tXyYr6c8CF/M4AuaYxesavoMBYiFR7/X6CnqxAPTuDAyxEXXNBNtRBOyEgbUg5C7455bzBkRJ+vFLD5hNNZBBN4CO9INCx6CwDtCCRe0xVwJ1HwpKWAqnAtSG471QldgYLUgvUPJn/TlfXglha+4RmRVoQm9LhxaOA7gGsHeJlWdoiDn1e773tbtUsTQpTZpiDlvkjg7kO4zjl6+fkddbcmdDbEe68ER5CVkNOyrhWQ76hQl0aBx94OWZaK52WGee705zETBHvwsd20+7kfYSDrfO6iW2wqGuFnWjnefbZdM6UIdqixJIcRXO8dBQnRC9GiEmTtd4y53Y7U9AXm0NNoOJ6ySHpZsOxrCuzbKABHkBdOxGPZE6haRWvNjmaER0ABK8zsrvTvsISnJ1DpBi8UBkoO254E0N7Me3F7L4yfKjnpSKfohASMZgMMkCE8VTmRqrcChaH3SpsYFN6vjsYFROllnVNRFqYGq3A88/hJ57kvIhpcS+YlDCF42yvlyQzfH3QTZDKQXZIw98b3rEGiwiDyvPNB98tSzED1DuRN5h17adupbTH4Ygpcy+YBFimrRwbgMUQOTmaE/V/cYwtri4bMgzr4eWn1SdG5TkHnCasF8TEDqQweO21wWkdmzMI+dR/321WxW3HCsyFbeKtLOrQf5lNOrusDgPAUIPIAkjTSTXIWWNBwOjnWIgjpH7xqD7uHtiubNwwBKQ7TDq8ms8L1lb0z7pS1K8LGAoyXIJxgqEp/6Ue8dcWyiTJJJ", 
      alt: "DSIR Logo",
      name: "DSIR",
      role: ""
    },
    { 
      src: "https://i.imgur.com/vm3WyIN.png", 
      alt: "NBA Logo",
      name: "NBA",
      role: ""
    },
    { 
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyf3Dx0DxFNj_HxGi6N4y1MAe08pD3mlIzlZA01Q5YrokK11mnaiJde4xNVRUXQPk6CSE&usqp=CAU", 
      alt: "ICAR Logo",
      name: "ICAR",
      role: ""
    },
    { 
      src: "https://brand-experience.ieee.org/wp-content/uploads/2016/12/20040818-300x168.jpeg", 
      alt: "IEEE Logo",
      name: "IEEE",
      role: ""
    },
    { 
      src: "data:image/png;base64,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", 
      alt: "INC Logo",
      name: "INC",
      role: ""
    },
    { 
      src: "data:image/png;base64,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", 
      alt: "AIU Logo",
      name: "AIU",
      role: ""
    }
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

      {/* Association Logos Ribbon */}
      <div className="bg-gradient-to-r from-blue-100 via-white to-purple-100 py-8 border-t-4 border-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Professional Associations</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          {/* Continuous scrolling ribbon */}
          <div className="relative">
            <div className="flex space-x-12 items-center animate-scroll-infinite">
              {/* First set of logos */}
              {associationLogos.map((logo, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 flex flex-col items-center group">
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300 border border-gray-200">
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="text-2xl font-bold text-gray-600">${logo.name.substring(0, 3)}</div>`;
                        }
                      }}
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-xs font-medium text-gray-700">{logo.name}</p>
                    {logo.role && <p className="text-xs text-gray-500">{logo.role}</p>}
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {associationLogos.map((logo, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 flex flex-col items-center group">
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300 border border-gray-200">
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="text-2xl font-bold text-gray-600">${logo.name.substring(0, 3)}</div>`;
                        }
                      }}
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-xs font-medium text-gray-700">{logo.name}</p>
                    {logo.role && <p className="text-xs text-gray-500">{logo.role}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for scrolling animation */}
      <style>
        {`
          @keyframes scroll-infinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50%));
            }
          }
          
          .animate-scroll-infinite {
            animation: scroll-infinite 30s linear infinite;
          }
          
          .animate-scroll-infinite:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Floating Contact Sidebar */}
      <FloatingContactSidebar />
    </div>
  );
};

export default Index;
