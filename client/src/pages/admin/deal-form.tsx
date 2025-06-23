import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AdminLayout from "@/components/layout/AdminLayout";
import { dealsAPI } from "@/services/api";

interface Deal {
  _id: string;
  title: string;
  company: string;
  amount: string;
  type: string;
  status: string;
  deadline: string;
  progress: number;
  description: string;
  highlights?: string[];
}

interface DealFormData {
  title: string;
  company: string;
  amount: string;
  type: string;
  status: string;
  deadline: string;
  progress: string;
  description: string;
  highlights: string[];
}

export default function DealForm() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<DealFormData>({
    title: "",
    company: "",
    amount: "",
    type: "",
    status: "New",
    deadline: "",
    progress: "",
    description: "",
    highlights: [""],
  });

  // Get deal ID from URL if editing
  const dealId = window.location.pathname.split("/").pop();
  const isEditing = dealId !== "new";

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuth");
    if (!isAuthenticated) {
      setLocation("/admin/login");
      return;
    }

    if (isEditing) {
      fetchDeal();
    }
  }, [setLocation, isEditing, dealId]);

  const fetchDeal = async () => {
    try {
      const deals = await dealsAPI.getAll();
      const deal = deals.find((d: Deal) => d._id === dealId);
      if (deal) {
        setFormData({
          title: deal.title,
          company: deal.company,
          amount: deal.amount !== undefined && deal.amount !== null && !isNaN(Number(deal.amount)) ? String(deal.amount) : "",
          type: deal.type,
          status: deal.status,
          deadline: new Date(deal.deadline).toISOString().split('T')[0],
          progress: deal.progress !== undefined && deal.progress !== null && !isNaN(Number(deal.progress)) ? String(deal.progress) : "",
          description: deal.description,
          highlights: deal.highlights || [""],
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch deal details",
        variant: "destructive",
      });
      setLocation("/admin/deals");
    }
  };
  console.log('DealForm handleSubmit called', formData);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Prepare data for submission
    const submitData = {
      ...formData,
      amount: formData.amount, // Keep as string
      progress: Number(formData.progress), // Convert to number
      highlights: formData.highlights.filter(h => h.trim() !== ''), // Remove empty highlights
    };

    try {
      if (isEditing && dealId) {
        await dealsAPI.update(dealId, submitData);
        toast({
          title: "Success",
          description: "Deal updated successfully",
        });
      } else {
        await dealsAPI.create(submitData);
        toast({
          title: "Success",
          description: "Deal created successfully",
        });
      }
      setLocation("/admin/deals");
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      toast({
        title: "Error",
        description: isEditing ? "Failed to update deal" : "Failed to create deal",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const addHighlight = () => {
    setFormData({
      ...formData,
      highlights: [...formData.highlights, ""],
    });
  };

  const removeHighlight = (index: number) => {
    setFormData({
      ...formData,
      highlights: formData.highlights.filter((_, i) => i !== index),
    });
  };

  const updateHighlight = (index: number, value: string) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData({
      ...formData,
      highlights: newHighlights,
    });
  };

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => setLocation("/admin/deals")}
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h2 className="text-3xl font-bold text-gray-900">
            {isEditing ? "Edit Deal" : "Create New Deal"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <Input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <Input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <Input
                type="text"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="mt-1"
                placeholder="e.g., $5M - $8M or 5000000"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <Select
                value={formData.type}
                onValueChange={(value) =>
                  setFormData({ ...formData, type: value })
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select deal type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="equity">Equity Funding</SelectItem>
                  <SelectItem value="debt">Debt Financing</SelectItem>
                  <SelectItem value="preipo">Pre-IPO</SelectItem>
                  <SelectItem value="bridge">Bridge Loan</SelectItem>
                  <SelectItem value="convertible">Convertible Note</SelectItem>
                  <SelectItem value="seed">Seed Funding</SelectItem>
                  <SelectItem value="venturedebt">Venture Debt</SelectItem>
                  <SelectItem value="buyout">Buyout</SelectItem>
                  <SelectItem value="ipo">IPO Advisory</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData({ ...formData, status: value })
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Closing Soon">Closing Soon</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Deadline
              </label>
              <Input
                type="date"
                value={formData.deadline}
                onChange={(e) =>
                  setFormData({ ...formData, deadline: e.target.value })
                }
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Progress (%)
              </label>
              <Input
                type="number"
                min="0"
                max="100"
                value={formData.progress}
                onChange={(e) =>
                  setFormData({ ...formData, progress: e.target.value })
                }
                className="mt-1"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <Textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="mt-1"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Highlights
            </label>
            {formData.highlights.map((highlight, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Input
                  type="text"
                  value={highlight}
                  onChange={(e) => updateHighlight(index, e.target.value)}
                  placeholder="Enter highlight"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => removeHighlight(index)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={addHighlight}
              className="mt-2"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Highlight
            </Button>
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading
                ? isEditing
                  ? "Updating..."
                  : "Creating..."
                : isEditing
                ? "Update Deal"
                : "Create Deal"}
            </Button>
          </div>
        </form>
      </motion.div>
    </AdminLayout>
  );
} 