import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema, type Contact } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate input
      const validatedData = contactSchema.parse(req.body);
      
      // Store contact submission
      const contactSubmission = await storage.createContact(validatedData);
      
      // Return success response
      res.status(201).json({
        message: "Contact form submitted successfully",
        id: contactSubmission.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Validation error
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        // Server error
        console.error("Error submitting contact form:", error);
        res.status(500).json({ 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get all contact submissions (could be protected in production)
  app.get("/api/contact", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.status(200).json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
