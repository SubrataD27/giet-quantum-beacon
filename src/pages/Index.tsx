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
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADwCAMAAABCI8pNAAAAh1BMVEX///8AAACUlJSoqKi5ubmfn5/b29s0NDTMzMz8/PyamprU1NTY2Nh5eXnw8PC0tLTt7e3j4+Ourq7Dw8Pg4OBpaWmMjIyDg4PAwMDPz8+AgICenp739/eOjo5BQUFzc3NdXV1ISEhkZGRQUFBUVFQqKio7OzsiIiIVFRUcHBwREREuLi42NjaT4469AAAdL0lEQVR4nO19h5brNs8tIEoy1Xu1uuTu93++C1CeczyTM8mX/Ums3OW9Zo2LZBtbJNEIUgBvvPHGG6+DaZdaWIYyagzz1bL8n+FXUTIauKJDHLDte/3VUv1fIIjISUOR5JD5NeQVoKHXKF4t119Hg7cksKw0hhZsS4ABRqhJOB1eLdhfh4UJWEbp5A3KY9CbHWixG+odNq+W7K8DDee4n3rtvMg41cN2wALOfYPZqwX765h3TWFhL3+80RiFtPUBXyjTXwDp6h/P+wGgCCEUgbUeC0yYu1D+tyhppOTGlQC4iLLwIa7jGX1gBai3BWCkXX6c7rTFtnV6ciTT47q7Y6heHoJSIDFaTkk30VFsyCiVtjyQ2lDwRxxnROeFIv8BAsz0mB7Zth51qNB3GwTbA8g8tOCqz67vhWUDiKpzNjiQ7rMyjF8s+LeI0HFc9ewEYTZ6SPbHT6SWWHToRKMqoMYr26anlwYdcubVQJndZttpIbFBDaNpFAP6PWkBjV5p4/mkGgKXZUcjJyjJ2raX4w1b9TmR9OPrpP492EekNoro+sO+AUufx8sASi141xAz05LontgixXNDPZOGU+Q/Phqj//33vgzRgk2KnWY11B41vVFHnq7X4ykEuaBcHVf/ZgrSe16AGJKNalU3tXyYr6c8CF/M4AuaYxesavoMBYiFR7/X6CnqxAPTuDAyxEXXNBNtRBOyEgbUg5C7455bzBkRJ+vFLD5hNNZBBN4CO9INCx6CwDtCCRe0xVwJ1HwpKWAqnAtSG471QldgYLUgvUPJn/TlfXglha+4RmRVoQm9LhxaOA7gGsHeJlWdoiDn1e773tbtUsTQpTZpiDlvkjg7kO4zjl6+fkddbcmdDbEe68ER5CVkNOyrhWQ76hQl0aBx94OWZaK52WGee705zETBHvwsd20+7kfYSDrfO6iW2wqGuFnWjnefbZdM6UIdqixJIcRXO8dBQnRC9GiEmTtd4y53Y7U9AXm0NNoOJ6ySHpZsOxrCuzbKABHkBdOxGPZE6haRWvNjmaER0ABK8zsrvTvsISnJ1DpBi8UBkoO254E0N7Me3F7L4yfKjnpSKfohASMZgMMkCE8VTmRqrcChaH3SpsYFN6vjsYFROllnVNRFqYGq3A88/hJ57kvIhpcS+YlDCF42yvlyQzfH3QTZDKQXZIw98b3rEGiwiDyvPNB98tSzED1DuRN5h17adupbTH4Ygpcy+YBFimrRwbgMUQOTmaE/V/cYwtri4bMgzr4eWn1SdG5TkHnCasF8TEDqQweO21wWkdmzMI+dR/321WxW3HCsyFbeKtLOrQf5lNOrusDgPAUIPIAkjTSTXIWWNBwOjnWIgjpH7xqD7uHtiubNwwBKQ7TDq8ms8L1lb0z7pS1K8LGAoyXIJxgqEp/6Ue8dcWyiTJJJSnZ46EXoI2S4i6DQyVEyyxAq75iNZRvnuJXUpcSx8LJF0xGCDPVGmzybNIZTI5bQNPSAN24sUuRom4lve25u0xkF6pMHQoLWnrXcEMuGMnzJ5RItQ19NpCpC9DX/RlwKNjknaOoz/sRxiMjvljkRcU/dGUknYDgmBw+X8Ib7VxN5gjVXaWLkGnk6EIQ0xkNxO7BvgE1cht48IV5HPF06T9jU2YSAutUM0EdwOgx3dtQY+w7lH//Qvwit3Yt6aPQdGs1JG20fCk3UeOVUeGg5mrTHxSrzBHLuhuhQxLS", 
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
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABgFBMVEX///8AAAD8/Pz5+fn19fXx8fHj4+Pp6enu7u7BwcHm5ubd3d3X19fT09OpqanNzc2dnZ1ISEhCQkIrKyuMjIx+fn6jo6NgYGBmZmawsLBaWlo1NTUYGBhsbGweHh67u7tRUVEPDw91dXWVlZXOIhLhAAAgAElEQVR4nMUd12LjOM7qktWrVaz+//94BEBSVHFJZmYPD7uZxJYIEr3xdvtzMG0v1QjmYVqSQP/iS9ZYLtPMv6ZNnvPNl/41GPfmQQt6dlkd+8ZPvhs0dTdwfJbY/D/j44ZFjkvJ074KjF+sxhnLqXviqT6au/n3l/j1QrwSl6FlSxP85Ej2cPfWvsPntGv8+8f8ETjNgqjkfeJZ7z5oWHyFLw9Odxk+SG/d6v0f0LmPC25mWnjO5QfCOCSi8YtyxB+cqonj2H9BSozeUIzkhfcfE5sb1cgraeS/OJQgy9IKV1VoWoG/auac/bJdCu/FQ4MqJaL1/kNRoMdEE21kn95qxnRSDfv7gCfCTrBErEohiLviBSkZd0KnK+P/Ch1nQXbN4wvdYDTDsMLSPTw4/4Y49Hf4U6ZJKOnTTekfv39vCN/qP2Edo0BVN0SXe2expXcB+8HFNT0YXis7Qp//tratcQKdlMCH40Eb1tMjzArkyqyN/xQNhIaEaOFe/9mI2B9j9oNFRxDdbuw3aXgjZIB5dIad1sPGR2xbzsgw4UIEmf7bw9Gdnkh6J8CM0N7+EQMGukRGC4F7OkAv1MTSW44eMx1ySWe7lQc9ypfoH8o1swGyH5Ydd7reok0b6fuMimqXkBlm2F7GPTnIrwpoEz/D5FvHfuOwp6Xie04Sqys3xxqoufzKzvsN+AXIsLRRXmrYHpzV3Gy4MeGVM3632GeXni2oYJzxBPqvCYUNmWoQQptR1sLYZ3fe5gqCLRv/zeHELcqhePuNHldkZCpCyWQcMTMaMhlvJTGsZ8kJmZxLN5RvgEzJ2YuBX8OWRPsXhguK8eDvo2JWE2oWRUf6BVcKoyoNPLboSr+Z7G+FOZIZipKJnUOLe2+wXcni2539r6PD8GlPksM73Qhe0P51sUYCudztUkPWR7y3AUJ2JKVxM9lSSxfkMgAjQ5MJ3AU/6rCfWvvmMZZZ8CtBTZ86Lakosd6tERFuwSppp2Hr8ZFKQd2jFsFNwGUpPWxUnSSXg/ypV6v/ruokm57IoKcqXmOSGVZ3yt45bArtD5mAYX9h1baSSBBY4GYpwIaeE9nMAsPzbMhGVdQJtRsdY3Ml2Pj7GXq45DKitW0e73Rhbdyu95DMc01KQxEE+YlFAL1CpfQq6m8nyO8nCZ/8SawB9Nwpg01vPnV2YT46u+YBjHvDbMh5SUzB/AM/oBIeigxkgtv61ELgXAezmbWRSR9aLYlnwYXn5wS", 
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
            <div className="flex animate-scroll space-x-12 items-center">
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

      {/* Add custom CSS for scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Index;
