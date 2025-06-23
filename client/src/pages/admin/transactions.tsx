import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { dealsAPI } from '@/services/api';

interface Transaction {
  id: string;
  image: string;
  category: string;
  company: string;
  amount: string;
  description: string;
  industry: string;
  date: string;
}

const categories = [
  'Series A Funding',
  'Series B Funding',
  'Series C Funding',
  'M&A Advisory',
  'Debt Syndication',
  'Strategic Investment',
  'Growth Equity',
  'Pre-IPO Funding'
];

const industries = [
  'AI & SaaS',
  'Clean Energy',
  'Hospitality',
  'Healthcare',
  'E-commerce',
  'FinTech',
  'EdTech',
  'Manufacturing'
];

const TransactionsPage = () => {
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Series B Funding',
      company: 'TechInnovate Solutions',
      amount: '$12.5M',
      description: 'Led Series B round for an AI-powered SaaS platform, enabling international expansion and product development.',
      industry: 'AI & SaaS',
      date: 'March 2023'
    },
    // Add more sample transactions here
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState<Transaction | null>(null);
  const [formData, setFormData] = useState<Partial<Transaction>>({});

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const deals = await dealsAPI.getAll();
        const mapped = deals.map((deal: any) => ({
          id: deal._id,
          image: 'https://via.placeholder.com/150',
          category: deal.type || 'N/A',
          company: deal.company || '',
          amount: deal.amount ? `$${Number(deal.amount).toLocaleString()}` : 'N/A',
          description: deal.description || '',
          industry: deal.industry || '',
          date: deal.deadline ? new Date(deal.deadline).toLocaleDateString() : '',
        }));
        setTransactions((prev) => [
          ...prev.filter(t => t.id === '1'), // keep the sample transaction for demo
          ...mapped
        ]);
        console.log('Mapped deals:', mapped);
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to fetch deals',
          variant: 'destructive',
        });
      }
    };
    fetchDeals();
  }, [toast]);

  const handleAdd = () => {
    const newTransaction = {
      id: Date.now().toString(),
      ...formData
    } as Transaction;
    
    setTransactions([...transactions, newTransaction]);
    setFormData({});
    setIsAddDialogOpen(false);
    toast({
      title: "Transaction added successfully",
      variant: "default",
    });
  };

  const handleEdit = () => {
    if (!currentTransaction) return;
    
    const updatedTransactions = transactions.map(t => 
      t.id === currentTransaction.id ? { ...t, ...formData } : t
    );
    
    setTransactions(updatedTransactions);
    setCurrentTransaction(null);
    setFormData({});
    setIsEditDialogOpen(false);
    toast({
      title: "Transaction updated successfully",
      variant: "default",
    });
  };

  const handleDelete = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id));
    toast({
      title: "Transaction deleted successfully",
      variant: "destructive",
    });
  };

  const TransactionForm = ({ isEdit = false }) => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          value={formData.image || ''}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          placeholder="Enter image URL"
        />
      </div>
      
      <div>
        <Label htmlFor="category">Category</Label>
        <Select 
          value={formData.category}
          onValueChange={(value) => setFormData({ ...formData, category: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          value={formData.company || ''}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="Enter company name"
        />
      </div>

      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          value={formData.amount || ''}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          placeholder="Enter amount (e.g., $10M)"
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          value={formData.description || ''}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Enter transaction description"
        />
      </div>

      <div>
        <Label htmlFor="industry">Industry</Label>
        <Select 
          value={formData.industry}
          onValueChange={(value) => setFormData({ ...formData, industry: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          value={formData.date || ''}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          placeholder="Enter date (e.g., March 2023)"
        />
      </div>

      <Button 
        className="w-full mt-6" 
        onClick={isEdit ? handleEdit : handleAdd}
      >
        {isEdit ? 'Update Transaction' : 'Add Transaction'}
      </Button>
    </div>
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-primary">Manage Transactions</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Transaction
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Transaction</DialogTitle>
            </DialogHeader>
            <TransactionForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.company}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.industry}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => {
                            setCurrentTransaction(transaction);
                            setFormData(transaction);
                          }}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Transaction</DialogTitle>
                        </DialogHeader>
                        <TransactionForm isEdit />
                      </DialogContent>
                    </Dialog>
                    
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(transaction.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionsPage; 