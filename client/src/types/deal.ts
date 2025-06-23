export type DealStatus = "New" | "Active" | "Closing Soon";
export type DealType = "Equity Funding" | "Debt Financing" | "Pre-IPO" | "M&A";

export interface Deal {
  id: number;
  title: string;
  company: string;
  amount: string;
  status: DealStatus;
  type: DealType;
  deadline: string;
  progress: number;
  description: string;
  highlights: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateDealInput {
  title: string;
  company: string;
  amount: string;
  type: DealType;
  status: DealStatus;
  deadline: string;
  progress: number;
  description: string;
  highlights: string[];
}

export interface UpdateDealInput extends Partial<CreateDealInput> {
  id: number;
} 