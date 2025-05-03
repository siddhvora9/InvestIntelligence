import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { fadeIn } from '@/lib/animations';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';

// Contact form schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  company: z.string().min(1, { message: 'Company name is required' }),
  service: z.string().min(1, { message: 'Please select a service' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-3">Contact Us</h2>
              <div className="w-20 h-1 gold-gradient rounded-full mb-6"></div>
              <p className="text-gray-600 mb-6">
                Ready to explore how SHC Partners can help your business? Our team is here to discuss your goals and provide tailored solutions.
              </p>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-playfair font-semibold text-primary">Our Location</h3>
                  <p className="text-gray-600">42 Corporate Avenue, Bandra Kurla Complex<br />Mumbai 400051, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Mail className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-playfair font-semibold text-primary">Email Us</h3>
                  <p className="text-gray-600">info@shcpartners.com<br />deals@shcpartners.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Phone className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-playfair font-semibold text-primary">Call Us</h3>
                  <p className="text-gray-600">+91 22 4890 2200<br />+91 98765 43210</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-6">
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
                    <FormItem className="mb-6">
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
                    <FormItem className="mb-6">
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
                    <FormItem className="mb-6">
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
                    <FormItem className="mb-6">
                      <FormLabel className="text-primary font-medium">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4} 
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
  );
};

export default ContactSection;
