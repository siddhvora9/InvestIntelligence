import { Deal, CreateDealInput, UpdateDealInput } from "@/types/deal";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export const dealService = {
  async getDeals(): Promise<Deal[]> {
    const response = await fetch(`${API_URL}/deals`);
    if (!response.ok) {
      throw new Error("Failed to fetch deals");
    }
    return response.json();
  },

  async getDealById(id: number): Promise<Deal> {
    const response = await fetch(`${API_URL}/deals/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch deal");
    }
    return response.json();
  },

  async createDeal(deal: CreateDealInput): Promise<Deal> {
    const response = await fetch(`${API_URL}/deals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deal),
    });
    if (!response.ok) {
      throw new Error("Failed to create deal");
    }
    return response.json();
  },

  async updateDeal(deal: UpdateDealInput): Promise<Deal> {
    const response = await fetch(`${API_URL}/deals/${deal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deal),
    });
    if (!response.ok) {
      throw new Error("Failed to update deal");
    }
    return response.json();
  },

  async deleteDeal(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/deals/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete deal");
    }
  },

  // Additional methods for deal-specific operations
  async updateDealProgress(id: number, progress: number): Promise<Deal> {
    return this.updateDeal({ id, progress });
  },

  async updateDealStatus(id: number, status: Deal["status"]): Promise<Deal> {
    return this.updateDeal({ id, status });
  },

  async getActiveDeals(): Promise<Deal[]> {
    const deals = await this.getDeals();
    return deals.filter((deal) => deal.status === "Active");
  },

  async getClosingSoonDeals(): Promise<Deal[]> {
    const deals = await this.getDeals();
    return deals.filter((deal) => deal.status === "Closing Soon");
  },
}; 