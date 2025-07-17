
import React from 'react';
import { Atom, Book, Users, ArrowRight, Microscope, Cpu, Network, Shield, Brain, Zap, Beaker, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Research = () => {
  const researchProjects = [
    {
      title: "Quantum Machine Learning for Healthcare",
      description: "Developing quantum algorithms for cardiovascular disease prediction and mental health analysis using enhanced machine learning techniques.",
      status: "Active",
      funding: "₹5.2 Lakhs",
      icon: Brain,
      category: "Healthcare"
    },
    {
      title: "Post-Quantum Cryptography Systems",
      description: "Implementation of quantum-resistant encryption methods including lattice-based cryptography and quantum key distribution protocols.",
      status: "Active",
      funding: "₹3.8 Lakhs",
      icon: Shield,
      category: "Security"
    },
    {
      title: "Quantum Error Correction Algorithms",
      description: "Research into noise mitigation techniques and error correction codes for NISQ-era quantum computers.",
      status: "Planning",
      funding: "₹4.5 Lakhs",
      icon: Cpu,
      category: "Algorithms"
    },
    {
      title: "Quantum Network Simulation",
      description: "Development of simulation frameworks for quantum internet protocols and entanglement distribution networks.",
      status: "Active",
      funding: "₹6.2 Lakhs",
      icon: Network,
      category: "Networks"
    }
  ];

  const publications = [
    {
      title: "Quantum-Enhanced Lattice Cryptography: AES Encryption with Crystal Kyber and QRNG IV",
      type: "Book Chapter",
      journal: "Data Analytics for Smart Robotics and Its Applications",
      status: "Published",
      year: "2024"
    },
    {
      title: "Quantum Computing Method for Prediction of Cardiovascular Disease",
      type: "Research Paper",
      journal: "ITL Wiley",
      status: "Under Minor Revision",
      year: "2024"
    },
    {
      title: "Quantum-Enhanced Machine Learning Techniques for Mental Health Predictions",
      type: "Research Paper",
      journal: "Natural Product Research",
      status: "Under Communication",
      year: "2025"
    },
    {
      title: "Exploring Quantum Key Distribution: Protocol Efficiency and Implementation Challenges",
      type: "Book Chapter",
      journal: "Data Analytics for Smart Robotics and Its Applications",
      status: "Published",
      year: "2024"
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
              <Microscope className="w-5 h-5 text-purple-300" />
              <span className="text-purple-200 text-sm font-medium">Research & Innovation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Advancing 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Quantum </span>
              Science
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Exploring the frontiers of quantum computing through groundbreaking research in algorithms, 
              cryptography, machine learning, and quantum communication systems.
            </p>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Active Research Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="border-purple-400 text-purple-300 mb-2">
                          {project.category}
                        </Badge>
                        <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                      </div>
                    </div>
                    <Badge 
                      variant={project.status === 'Active' ? 'default' : 'secondary'}
                      className={project.status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300 font-semibold">Funding: {project.funding}</span>
                    <Button variant="outline" size="sm" className="border-purple-400 text-purple-300 hover:bg-purple-500/20">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Recent Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/20">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Book className="w-5 h-5 text-purple-400" />
                        <Badge variant="outline" className="border-blue-400 text-blue-300">
                          {pub.type}
                        </Badge>
                        <Badge 
                          variant="secondary"
                          className={
                            pub.status === 'Published' ? 'bg-green-500/20 text-green-300' :
                            pub.status === 'Under Minor Revision' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-blue-500/20 text-blue-300'
                          }
                        >
                          {pub.status}
                        </Badge>
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">{pub.title}</h3>
                      <p className="text-purple-200">{pub.journal} • {pub.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Research Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Atom, title: "Quantum Algorithms", desc: "Developing efficient quantum algorithms for optimization and machine learning" },
              { icon: Shield, title: "Quantum Cryptography", desc: "Quantum-safe encryption and secure communication protocols" },
              { icon: Brain, title: "Quantum ML", desc: "Machine learning enhanced by quantum computing principles" },
              { icon: Zap, title: "Error Correction", desc: "Quantum error correction and noise mitigation techniques" },
              { icon: Network, title: "Quantum Networks", desc: "Design and simulation of quantum communication networks" },
              { icon: Cpu, title: "Quantum Hardware", desc: "Interface development for quantum devices and systems" }
            ].map((area, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 text-center hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{area.title}</h3>
                  <p className="text-purple-200">{area.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
