
import React from 'react';
import { Cpu, Cloud, Server, Shield, Monitor, Zap, Network, Database, Microscope, FlaskConical } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Facilities = () => {
  const quantumPlatforms = [
    {
      name: "IBM Quantum Network",
      description: "Access to IBM's quantum computers including 127-qubit processors",
      qubits: "Up to 127 qubits",
      access: "24/7 Cloud Access",
      icon: Cpu,
      status: "Active"
    },
    {
      name: "Microsoft Azure Quantum",
      description: "Azure's quantum computing service with multiple hardware providers",
      qubits: "Varies by provider",
      access: "On-demand",
      icon: Cloud,
      status: "Active"
    },
    {
      name: "Rigetti Quantum Cloud",
      description: "Access to superconducting quantum processors",
      qubits: "Up to 80 qubits",
      access: "Scheduled Access",
      icon: Server,
      status: "Available"
    }
  ];

  const simulationTools = [
    { name: "Qiskit Aer", usage: "95%", description: "High-performance quantum circuit simulation" },
    { name: "Cirq", usage: "78%", description: "Google's quantum computing framework" },
    { name: "PennyLane", usage: "65%", description: "Quantum machine learning library" },
    { name: "PyQuil", usage: "45%", description: "Rigetti's quantum programming toolkit" },
    { name: "Q#", usage: "52%", description: "Microsoft's quantum programming language" }
  ];

  const infrastructure = [
    {
      title: "High-Performance Computing Cluster",
      specs: "128 CPU cores, 512 GB RAM, GPU acceleration",
      purpose: "Classical simulation of quantum systems",
      icon: Server
    },
    {
      title: "Quantum-Safe Cryptography Lab",
      specs: "Dedicated servers for post-quantum algorithms",
      purpose: "Testing and implementing quantum-resistant security",
      icon: Shield
    },
    {
      title: "Visualization and Analysis Station",
      specs: "4K displays, specialized quantum visualization software",
      purpose: "Quantum state visualization and data analysis",
      icon: Monitor
    },
    {
      title: "Network Simulation Environment",
      specs: "Software-defined networking for quantum protocols",
      purpose: "Quantum network protocol development",
      icon: Network
    }
  ];

  const labEquipment = [
    {
      category: "Measurement & Control",
      items: [
        "Quantum state analyzers",
        "RF signal generators",
        "Lock-in amplifiers",
        "Cryogenic temperature controllers"
      ]
    },
    {
      category: "Computing Infrastructure",
      items: [
        "Quantum development workstations",
        "High-speed data acquisition systems",
        "Specialized quantum software suites",
        "Real-time control systems"
      ]
    },
    {
      category: "Research Tools",
      items: [
        "Quantum algorithm development platforms",
        "Error correction simulation tools",
        "Quantum machine learning frameworks",
        "Protocol verification systems"
      ]
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
              <FlaskConical className="w-5 h-5 text-purple-300" />
              <span className="text-purple-200 text-sm font-medium">Research Infrastructure</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              World-Class 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Quantum </span>
              Facilities
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              State-of-the-art quantum computing infrastructure, simulation tools, and research equipment 
              supporting cutting-edge quantum research and education.
            </p>
          </div>
        </div>
      </section>

      {/* Quantum Platforms */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Quantum Computing Platforms</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {quantumPlatforms.map((platform, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <platform.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={platform.status === 'Active' ? 'border-green-400 text-green-300' : 'border-blue-400 text-blue-300'}
                    >
                      {platform.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{platform.name}</CardTitle>
                  <CardDescription className="text-purple-300">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-purple-200">
                      <span>Qubits:</span>
                      <span className="font-semibold text-blue-300">{platform.qubits}</span>
                    </div>
                    <div className="flex justify-between text-purple-200">
                      <span>Access:</span>
                      <span className="font-semibold text-blue-300">{platform.access}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Simulation Tools */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Quantum Simulation Tools</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl text-center">Software Framework Usage</CardTitle>
                <CardDescription className="text-purple-300 text-center">
                  Lab utilization of various quantum programming frameworks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {simulationTools.map((tool, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-semibold">{tool.name}</h3>
                        <p className="text-purple-300 text-sm">{tool.description}</p>
                      </div>
                      <span className="text-blue-300 font-semibold">{tool.usage}</span>
                    </div>
                    <Progress value={parseInt(tool.usage)} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Research Infrastructure</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {infrastructure.map((infra, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <infra.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-lg">{infra.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-blue-300 font-semibold mb-1">Specifications:</h4>
                      <p className="text-blue-200">{infra.specs}</p>
                    </div>
                    <div>
                      <h4 className="text-blue-300 font-semibold mb-1">Purpose:</h4>
                      <p className="text-blue-200">{infra.purpose}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Equipment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Laboratory Equipment</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {labEquipment.map((category, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Microscope className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-purple-200 flex items-center">
                        <Zap className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
