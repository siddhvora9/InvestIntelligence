import { useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AdminLayout from "@/components/layout/AdminLayout";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("adminAuth");
    if (!isAuthenticated) {
      setLocation("/admin/login");
    }
  }, [setLocation]);

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h2>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Total Users
            </h3>
            <p className="text-3xl font-bold text-primary">1,234</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Active Projects
            </h3>
            <p className="text-3xl font-bold text-primary">56</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Revenue
            </h3>
            <p className="text-3xl font-bold text-primary">$45,678</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow mt-8">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New user registration</p>
                  <p className="text-sm text-gray-500">2 minutes ago</p>
                </div>
                <span className="text-green-500">Completed</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Content update</p>
                  <p className="text-sm text-gray-500">1 hour ago</p>
                </div>
                <span className="text-blue-500">In Progress</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">System backup</p>
                  <p className="text-sm text-gray-500">3 hours ago</p>
                </div>
                <span className="text-green-500">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
} 