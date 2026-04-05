import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { LogOut, Plus, Pencil, Trash2, Gem, Search, Filter, X } from 'lucide-react';
import { api } from '../utils/api';
import { toast } from 'sonner';
import DatabaseStatus from '../components/DatabaseStatus';

interface GemData {
  id: number;
  name: string;
  category: string;
  carat: string;
  origin: string;
  price: string;
  image_url: string;
  clarity?: string;
  cut?: string;
  created_at: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [gems, setGems] = useState<GemData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  const token = localStorage.getItem('adminToken');
  const adminUser = localStorage.getItem('adminUser');

  useEffect(() => {
    if (!token || !adminUser) {
      navigate('/admin/login');
      return;
    }
    fetchGems();
  }, [token, adminUser, navigate]);

  const fetchGems = async () => {
    try {
      const data = await api.getAllGems();
      setGems(data);
    } catch (error) {
      toast.error('Failed to fetch gems');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const handleDelete = async (id: number) => {
    if (!token) return;

    try {
      await api.deleteGem(id, token);
      toast.success('Gem deleted successfully');
      setGems(gems.filter(gem => gem.id !== id));
      setDeleteConfirm(null);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to delete gem');
    }
  };

  const filteredGems = gems.filter(gem => {
    const matchesSearch = gem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gem.origin.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || gem.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const admin = adminUser ? JSON.parse(adminUser) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c4a962] to-[#d4b976] rounded-lg flex items-center justify-center">
                <Gem className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-heading text-[#2d3748]">Admin Dashboard</h1>
                <p className="text-sm text-gray-600 font-body">Welcome, {admin?.username}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 text-sm text-gray-600 hover:text-[#c4a962] transition-colors font-body"
              >
                View Website
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-body"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full md:w-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search gems..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body"
                />
              </div>

              <div className="relative min-w-[200px]">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c4a962] focus:border-transparent font-body appearance-none"
                >
                  <option value="">All Categories</option>
                  <option value="Precious Gems">Precious Gems</option>
                  <option value="Rare Stones">Rare Stones</option>
                  <option value="Custom Collection">Custom Collection</option>
                </select>
              </div>
            </div>

            {/* Add Button */}
            <button
              onClick={() => navigate('/admin/gems/add')}
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#c4a962] to-[#d4b976] hover:from-[#b39952] hover:to-[#c4a962] text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-body whitespace-nowrap"
            >
              <Plus className="h-5 w-5" />
              Add Gem
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#c4a962] font-heading">{gems.length}</div>
              <div className="text-sm text-gray-600 font-body">Total Gems</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#c4a962] font-heading">
                {gems.filter(g => g.category === 'Precious Gems').length}
              </div>
              <div className="text-sm text-gray-600 font-body">Precious Gems</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#c4a962] font-heading">
                {gems.filter(g => g.category === 'Rare Stones').length}
              </div>
              <div className="text-sm text-gray-600 font-body">Rare Stones</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#c4a962] font-heading">
                {gems.filter(g => g.category === 'Custom Collection').length}
              </div>
              <div className="text-sm text-gray-600 font-body">Custom Collection</div>
            </div>
          </div>
        </div>

        {/* Gems Table */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#c4a962] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredGems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Gem className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl text-gray-600 mb-2 font-heading">No gems found</h3>
            <p className="text-gray-500 font-body">
              {searchTerm || categoryFilter ? 'Try adjusting your filters' : 'Start by adding your first gem'}
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-body">
                      Gem
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-body">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-body">
                      Details
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-body">
                      Price
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider font-body">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredGems.map((gem) => (
                    <motion.tr
                      key={gem.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={gem.image_url.startsWith('http') ? gem.image_url : `http://localhost:5000${gem.image_url}`}
                            alt={gem.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <div className="font-medium text-gray-900 font-body">{gem.name}</div>
                            <div className="text-sm text-gray-500 font-body">{gem.origin}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-3 py-1 text-xs rounded-full bg-amber-100 text-amber-800 font-body">
                          {gem.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 font-body">{gem.carat}</div>
                        <div className="text-sm text-gray-500 font-body">{gem.clarity || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-[#c4a962] font-body">{gem.price}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => navigate(`/admin/gems/edit/${gem.id}`)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(gem.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setDeleteConfirm(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-heading text-[#2d3748]">Confirm Delete</h3>
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-gray-600 mb-6 font-body">
                Are you sure you want to delete this gem? This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-body"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-body"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}