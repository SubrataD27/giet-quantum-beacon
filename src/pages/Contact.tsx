
import React from 'react';
import { Mail, Phone, MapPin, Clock, Globe, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "raghvendra@giet.edu",
      description: "Primary contact for lab inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91-7804068698",
      description: "Direct line to lab director"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "QC² Research Lab, Department of CSE, GIET University, Gunupur-765022, Odisha, India",
      description: "Visit us at our campus location"
    },
    {
      icon: Clock,
      title: "Lab Hours",
      details: "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM",
      description: "Operating hours for lab access"
    }
  ];

  const quickContacts = [
    {
      name: "Dr. Raghvendra Kumar",
      position: "Lab Director",
      email: "raghvendra@giet.edu",
      phone: "+91-7804068698"
    },
    {
      name: "Mr. Dillip Kumar Mishra",
      position: "Assistant Professor",
      email: "dillipkumarmishra@giet.edu",
      phone: "7326977444"
    },
    {
      name: "Dr. K.M. Gopal",
      position: "Deputy Dean",
      email: "hodcse@giet.edu",
      phone: "Contact via email"
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
              <Mail className="w-5 h-5 text-purple-300" />
              <span className="text-purple-200 text-sm font-medium">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> QC² Lab </span>
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Ready to explore quantum computing? Get in touch with our team for research collaborations, 
              educational programs, or any inquiries about our facilities and projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Contact Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30 text-center hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200 font-semibold mb-2">{info.details}</p>
                  <p className="text-purple-300 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send us a Message</CardTitle>
                <CardDescription className="text-purple-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-purple-200">First Name</Label>
                      <Input 
                        id="firstName" 
                        className="bg-purple-900/20 border-purple-500/30 text-white placeholder-purple-400"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-purple-200">Last Name</Label>
                      <Input 
                        id="lastName" 
                        className="bg-purple-900/20 border-purple-500/30 text-white placeholder-purple-400"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-purple-200">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      className="bg-purple-900/20 border-purple-500/30 text-white placeholder-purple-400"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-purple-200">Subject</Label>
                    <Input 
                      id="subject" 
                      className="bg-purple-900/20 border-purple-500/30 text-white placeholder-purple-400"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-purple-200">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={5}
                      className="bg-purple-900/20 border-purple-500/30 text-white placeholder-purple-400"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contacts */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">Quick Contacts</h3>
              {quickContacts.map((contact, index) => (
                <Card key={index} className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-blue-500/30">
                  <CardContent className="p-6">
                    <h4 className="text-white font-semibold text-lg mb-1">{contact.name}</h4>
                    <p className="text-blue-300 mb-3">{contact.position}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-blue-200">
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="text-sm">{contact.email}</span>
                      </div>
                      <div className="flex items-center text-blue-200">
                        <Phone className="w-4 h-4 mr-2" />
                        <span className="text-sm">{contact.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* University Info */}
              <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Globe className="mr-2 w-5 h-5" />
                    GIET University
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200 text-sm leading-relaxed">
                    GIET University, Gunupur is a 22-year-old autonomous college accredited by NBA 
                    and NAAC with A+ grade. Accorded state private University status in December 2018, 
                    it's one of the oldest AICTE-approved autonomous engineering colleges in Eastern India.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
