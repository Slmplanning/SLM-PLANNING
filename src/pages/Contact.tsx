import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import HeroCarousel from "@/components/HeroCarousel";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[38rem] flex items-center justify-center overflow-hidden">
        <HeroCarousel heightClass="h-[38rem]" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Let's Build the Future Together
          </h1>
          <p className="font-inter text-xl md:text-2xl animate-fade-in">
            Ready to start your next urban development project? We're here to help.
          </p>
        </div>
        {/* Animated Scroll Indicator */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
          style={{ bottom: '36px' }}
          aria-label="Scroll down"
        >
          <div
            className="scroll-mouse group w-8 h-14 md:w-9 md:h-16 border-2 border-white rounded-full flex items-start justify-center relative transition-transform duration-200 hover:scale-110"
            tabIndex={0}
            role="img"
            aria-label="Scroll down"
          >
            <span
              className="block bg-white rounded-full absolute left-1/2 -translate-x-1/2"
              style={{ width: '6px', height: '12px', top: '8px', animation: 'scroll-dot 1.4s cubic-bezier(0.45,0,0.55,1) infinite' }}
            />
          </div>
        </div>
        <style>{`
          @keyframes scroll-dot {
            0% { transform: translate(-50%, 0); opacity: 1; }
            40% { opacity: 1; }
            60% { transform: translate(-50%, 18px); opacity: 0.7; }
            100% { transform: translate(-50%, 0); opacity: 1; }
          }
          .scroll-mouse {
            background: rgba(255,255,255,0.04);
            box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
            outline: none;
          }
          .scroll-mouse:focus {
            box-shadow: 0 0 0 3px #fff6, 0 2px 8px 0 rgba(0,0,0,0.08);
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-slm-green-700">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="font-inter text-gray-600">
                    Have a question or want to discuss a potential project? We'd love to hear from you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-inter font-medium text-slm-green-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="border-slm-green-300 focus:border-slm-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-inter font-medium text-slm-green-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="border-slm-green-300 focus:border-slm-green-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-inter font-medium text-slm-green-700">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        required
                        className="border-slm-green-300 focus:border-slm-green-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-inter font-medium text-slm-green-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        rows={6}
                        placeholder="Tell us about your project or inquiry..."
                        required
                        className="border-slm-green-300 focus:border-slm-green-500"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-slm-green-600 hover:bg-slm-green-700 text-white font-semibold py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-slm-green-700">
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-slm-green-600">📍</span>
                      <div>
                        <p className="font-inter font-semibold text-gray-800">Address</p>
                        <p className="font-inter text-gray-600">
                          123 Urban Plaza<br />
                          Green City, GC 12345<br />
                          United States
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-slm-green-600">📞</span>
                      <div>
                        <p className="font-inter font-semibold text-gray-800">Phone</p>
                        <p className="font-inter text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-slm-green-600">📧</span>
                      <div>
                        <p className="font-inter font-semibold text-gray-800">Email</p>
                        <p className="font-inter text-gray-600">info@slmplanning.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-slm-green-600">🕒</span>
                      <div>
                        <p className="font-inter font-semibold text-gray-800">Office Hours</p>
                        <p className="font-inter text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-slm-green-700">
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="h-64 bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  >
                    <div className="h-full bg-slm-green-600/20 rounded-lg flex items-center justify-center">
                      <p className="text-white font-inter font-semibold bg-slm-green-800/80 px-4 py-2 rounded">
                        Interactive Map Coming Soon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-slm-green-700">
                    Connect With Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="border-slm-green-300 text-slm-green-600 hover:bg-slm-green-50">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="border-slm-green-300 text-slm-green-600 hover:bg-slm-green-50">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="border-slm-green-300 text-slm-green-600 hover:bg-slm-green-50">
                      Instagram
                    </Button>
                  </div>
                  <p className="font-inter text-gray-600 text-sm mt-4">
                    Follow us for updates on our latest projects and industry insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slm-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="font-inter text-xl text-slm-green-100 mb-8">
            Get a custom quote and discover how we can help bring your vision to life.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-slm-green-600 hover:bg-slm-cream font-semibold px-8 py-3"
          >
            <a href="/quote">Get Your Quote</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
