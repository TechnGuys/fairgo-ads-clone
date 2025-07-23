
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Target, Zap, BarChart3, PhoneCall, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const services = [
    {
      title: "Google Ads Management",
      description: "Get more leads and sales with high-converting Google Ads. I run targeted Search, Display, and Shopping campaigns tailored to your business goals.",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Facebook & Instagram Ads Management",
      description: "Reach users where they scroll. From lead gen forms to e-commerce retargeting, I manage Facebook & Instagram campaigns that engage, convert, and scale.",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "YouTube Ads Management",
      description: "Leverage the power of video. I develop YouTube ad campaigns that boost your brand visibility and drive viewers to take the next step.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-red-500 to-red-600"
    },
    {
      title: "TikTok Ads Management",
      description: "Tap into one of the fastest-growing platforms. I create short-form video ad strategies that drive awareness, traffic, and action for brands targeting younger audiences.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600"
    }
  ];

  const features = [
    "Multi-Platform Expertise: Google, Meta (Facebook & Instagram), TikTok, and YouTube",
    "Targeted Campaigns: Reach the right people, at the right time",
    "Real-Time Performance Tracking: See how your ads perform anytime",
    "Cost-Effective Strategy: Maximum impact without overspending",
    "Expert Insights: In-depth research and competitor analysis for your niche",
    "Transparent Reporting: Full clarity on your campaign's performance and ROI",
    "Continuous Optimization: I don't set and forget—I constantly refine for better ROI"
  ];

  const pricing = [
    {
      name: "Basic Plan",
      subtitle: "Start Strong with Essentials That Work",
      description: "Perfect for small businesses launching their first campaigns. Covers the basics—strategy, keywords, and setup.",
      price: 299,
      features: [
        "Campaign setup and strategy",
        "Keyword research and ad writing",
        "Budget recommendations",
        "Basic performance tracking"
      ],
      popular: false
    },
    {
      name: "Standard Plan",
      subtitle: "Smarter Targeting, Better Results",
      description: "Great for growing brands. Adds advanced targeting and optimisation for better leads and lower CPC.",
      price: 399,
      features: [
        "Everything in Basic Plan",
        "Advanced audience targeting",
        "Landing page optimization advice",
        "Weekly performance updates"
      ],
      popular: true
    },
    {
      name: "Premium Plan",
      subtitle: "Full-Funnel Strategy for Serious Growth",
      description: "Built for scaling. Includes remarketing, A/B testing, and conversion tracking to boost ROI.",
      price: 699,
      features: [
        "Everything in Standard Plan",
        "Dynamic remarketing setup",
        "A/B testing for creatives and keywords",
        "Conversion tracking for leads and sales"
      ],
      popular: false
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Research & Analysis",
      description: "In-depth understanding of your business, audience, and competitors."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Custom strategy including platform selection, targeting, creatives, and budgeting."
    },
    {
      number: "03",
      title: "Campaign Implementation",
      description: "Launch and manage your ads across Google, Meta, TikTok, and YouTube."
    },
    {
      number: "04",
      title: "Reporting & Optimization",
      description: "Ongoing performance reporting and campaign adjustments to maximize results."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              <Star className="w-4 h-4 mr-2" />
              14 Years of Proven Experience
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Maximize Your Marketing Potential with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                Expert Google Ads Management
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Navigating the world of paid advertising can be a game-changer—or a costly gamble—if not done right. 
              That's where FairGo Ads comes in. I'm Raj, a Certified Google Ads Specialist with over 14 years of experience 
              helping businesses grow through strategic ad management across Google, Facebook, Instagram, TikTok, and YouTube.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                Book Your Free PPC Consultation Today!
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2">
                Read More About Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Offer</h2>
            <p className="text-xl text-gray-600">Multi-Platform Ads Management Services Tailored to Your Success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2">
              Check All My Services
            </Button>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How I Work</h2>
            <p className="text-xl text-gray-600">4 Steps to Multi-Platform Ads Success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FairGo Ads</h2>
            <p className="text-xl text-gray-600">Why Choose FairGo Ads for Your Google Ads Management?</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Prices</h2>
            <p className="text-xl text-gray-600">Flexible and Transparent Pricing</p>
            <p className="text-sm text-gray-500 mt-2">All Packages come with dedicated Google Ads Ongoing Consultations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-xl scale-105' : 'border shadow-lg'} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{plan.subtitle}</p>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/per mo</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
                    👉 Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Card className="max-w-md mx-auto border-2 border-gradient-to-r from-purple-500 to-pink-500 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Plan</h3>
                <p className="text-purple-600 font-semibold mb-3">Tailored Strategy for High-Ad-Spend Accounts</p>
                <p className="text-gray-600 mb-6">For ad budgets over $10,000/month. Offers full custom strategy, daily optimisations, and priority support.</p>
                <ul className="space-y-2 mb-6 text-left">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Everything in Premium Plan</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">End-to-end campaign strategy & daily optimisation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cross-platform ad coordination (Google, Meta, TikTok, YouTube)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Priority support & 1-on-1 monthly strategy calls</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  👉 Enquire About This
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <h3 className="text-2xl text-blue-600 font-semibold mb-6">Helping You Reach New Heights in Digital Advertising</h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I work hands-on with each client to understand their unique needs and marketing goals. With a personalized and results-focused approach, 
              I create ad campaigns that align with your brand, audience, and budget.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              My mission is to help you grow faster with smarter ad strategies, transparent reporting, and continuous optimization—across every platform.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
              Talk to Your Google Ads Specialist Now!
              <PhoneCall className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business with Expert Ads Management?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Partner with FairGo Ads to build smarter campaigns, reach more customers, and increase your ROI across Google, Facebook, Instagram, TikTok, and YouTube.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            👉 Schedule Your Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">FairGo Ads</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                FairGo Ads is run by Raj, a certified Google Ads specialist based in Melbourne, dedicated to helping small businesses grow through smart, 
                data-driven PPC strategies. With 14+ years of experience, I create targeted campaigns that lower CPC, boost conversions, and deliver real results—without agency overheads.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Melbourne, VIC - Australia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@fairgoads.com.au</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneCall className="w-5 h-5 text-blue-400" />
                  <span>+61 402 510 463</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Me</a></li>
                <li><a href="#" className="hover:text-white transition-colors">My Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Me</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">My Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Google Ads Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook & Instagram Ads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube Ads Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok Ads Management</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FairGo Ads. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
