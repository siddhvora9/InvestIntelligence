import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Mail, Phone, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { COMPANY_INFO } from '@/lib/constants';

// Contact form schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  company: z.string().min(1, { message: 'Company name is required' }),
  service: z.string().min(1, { message: 'Please select a service' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const { toast } = useToast();
  
  // Define the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      service: '',
      message: '',
    },
  });

  // Mutation for sending the contact form
  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: 'Message sent!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: 'Error sending message',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | SHC Partners</title>
        <meta name="description" content="Get in touch with SHC Partners. Our team is ready to discuss your financial and strategic needs." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-white font-playfair font-bold text-4xl md:text-5xl mb-6 text-shadow">Contact Us</h1>
            <p className="text-white/90 text-lg md:text-xl">
              We're here to help. Reach out to discuss how SHC Partners can support your business goals with tailored financial solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details and Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={fadeIn('right', 'tween', 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="mb-10">
                <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Get in Touch</h2>
                <div className="w-20 h-1 gold-gradient rounded-full mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Whether you're looking to raise capital, optimize your debt structure, or explore strategic options, our team is ready to help. Contact us to start a conversation about your financial needs.
                </p>
              </div>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="font-playfair font-semibold text-xl text-primary mb-2">Our Location</h3>
                    <p className="text-gray-700">{COMPANY_INFO.address}</p>
                    <p className="text-gray-700">{COMPANY_INFO.city}, {COMPANY_INFO.country}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="font-playfair font-semibold text-xl text-primary mb-2">Email Us</h3>
                    <p className="text-gray-700 mb-1">
                      <span className="font-medium">General Inquiries:</span> {COMPANY_INFO.email.info}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Deal-related:</span> {COMPANY_INFO.email.deals}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="font-playfair font-semibold text-xl text-primary mb-2">Call Us</h3>
                    <p className="text-gray-700 mb-1">
                      <span className="font-medium">Office:</span> {COMPANY_INFO.phone}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Mobile:</span> {COMPANY_INFO.mobile}
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-playfair font-semibold text-xl text-primary mb-4">Connect With Us</h3>
                <div className="flex space-x-5">
                  <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition duration-300">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              variants={fadeIn('left', 'tween', 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-gray-50 p-8 rounded-lg shadow-xl"
            >
              <h2 className="font-playfair font-bold text-2xl text-primary mb-6">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="px-4 py-3 rounded-md border border-gray-300 focus:ring-secondary/50 focus:border-secondary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="px-4 py-3 rounded-md border border-gray-300 focus:ring-secondary/50 focus:border-secondary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Company Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Company Ltd." 
                            className="px-4 py-3 rounded-md border border-gray-300 focus:ring-secondary/50 focus:border-secondary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Service of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="px-4 py-3 rounded-md border border-gray-300 focus:ring-secondary/50 focus:border-secondary">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="equity">Equity Solutions</SelectItem>
                            <SelectItem value="debt">Debt Advisory</SelectItem>
                            <SelectItem value="strategic">Strategic Advisory</SelectItem>
                            <SelectItem value="valuation">Valuation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={5} 
                            placeholder="Tell us about your requirements..." 
                            className="px-4 py-3 rounded-md border border-gray-300 focus:ring-secondary/50 focus:border-secondary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md transition duration-300 flex items-center justify-center"
                    disabled={isPending}
                  >
                    <span>{isPending ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5087616403195!2d72.86391631490515!3d19.07004008709129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87c253c34b1%3A0x3a772979c944c324!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1596607923449!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              frameBorder="0"
              loading="lazy"
              allowFullScreen
              title="SHC Partners Office Location"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
