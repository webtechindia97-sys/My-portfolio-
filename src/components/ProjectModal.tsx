import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Check, 
  Code2, 
  Layers, 
  Cpu, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  Search, 
  BarChart2, 
  CheckCircle,
  Database,
  Calculator,
  Calendar,
  Clock
} from 'lucide-react';
import { ProjectItem, ThemeMode } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  theme: ThemeMode;
  onClose: () => void;
  onSelectProjectForContact?: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  theme, 
  onClose,
  onSelectProjectForContact 
}) => {
  if (!project) return null;

  // State for interactive simulations inside the modal
  // 1. E-Commerce interactive state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Wireless Noise-Cancelling Headphones', price: 89, qty: 1 },
    { id: 2, name: 'Minimalist Mechanical Keyboard', price: 110, qty: 1 }
  ]);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponCode, setCouponCode] = useState('SAHILDEV');

  // 2. Grocery interactive state
  const [groceryBasket, setGroceryBasket] = useState<{ id: number; name: string; price: number; qty: number }[]>([
    { id: 101, name: 'Organic Farm Fresh Apples (1kg)', price: 4.5, qty: 2 },
    { id: 102, name: 'Pure Country Farm Milk (1L)', price: 2.8, qty: 1 },
  ]);
  const [selectedSlot, setSelectedSlot] = useState('Today (6:00 PM - 8:00 PM)');

  // 3. Business Cost Estimator state
  const [pageCount, setPageCount] = useState(5);
  const [needsEcommerce, setNeedsEcommerce] = useState(true);
  const [needsDataEntry, setNeedsDataEntry] = useState(true);

  // 4. Data Entry Excel Simulator state
  const [searchSku, setSearchSku] = useState('SKU-104');
  const [inventoryList, setInventoryList] = useState([
    { sku: 'SKU-101', product: 'Cotton T-Shirt L', category: 'Apparel', stock: 450, status: 'In Stock', price: 19.99 },
    { sku: 'SKU-102', product: 'Slim Fit Denim 32', category: 'Apparel', stock: 220, status: 'In Stock', price: 49.99 },
    { sku: 'SKU-103', product: 'Leather Wallet Brown', category: 'Accessories', stock: 15, status: 'Low Stock', price: 29.50 },
    { sku: 'SKU-104', product: 'Chronograph Watch Silver', category: 'Accessories', stock: 85, status: 'In Stock', price: 149.00 },
    { sku: 'SKU-105', product: 'Running Shoes 10M', category: 'Footwear', stock: 0, status: 'Out of Stock', price: 79.90 },
  ]);

  // Calculations for simulations
  const cartSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const cartDiscount = couponApplied ? cartSubtotal * 0.15 : 0;
  const cartTotal = cartSubtotal - cartDiscount;

  const groceryTotal = groceryBasket.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const estimatedBudget = (pageCount * 45) + (needsEcommerce ? 180 : 0) + (needsDataEntry ? 120 : 0);

  const searchedInventory = inventoryList.filter(item => 
    item.sku.toLowerCase().includes(searchSku.toLowerCase()) || 
    item.product.toLowerCase().includes(searchSku.toLowerCase())
  );

  return (
    <div 
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="project-modal-container"
        className={`relative w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col transition-all ${
          theme === 'dark' 
            ? 'glass-panel-dark bg-slate-900 border-slate-700 text-slate-100' 
            : 'glass-panel-light bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          theme === 'dark' ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
              {project.categoryLabel}
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-heading truncate max-w-md">
              {project.title}
            </h3>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              theme === 'dark' 
                ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800' 
                : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Main Visual Banner with Overview */}
          <div className="relative rounded-2xl overflow-hidden aspect-video max-h-64 sm:max-h-80 w-full group">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
                Live Prototype &amp; Case Study
              </span>
              <h2 className="text-white text-xl sm:text-2xl font-bold font-heading">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Technology Badges Matrix */}
          <div>
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold mb-2 ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Built With Modern Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                    theme === 'dark' 
                      ? 'bg-slate-800/80 border-slate-700 text-cyan-300' 
                      : 'bg-cyan-50 border-cyan-200 text-cyan-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description & Problem Solving */}
          <div>
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold mb-2 ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Project Overview &amp; Architecture
            </h4>
            <p className={`text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {project.longDescription}
            </p>
          </div>

          {/* Key Deliverables & Features */}
          <div className={`p-4 rounded-xl border ${
            theme === 'dark' ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h4 className="text-sm font-bold font-heading mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span>Key Features &amp; Implementation Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* INTERACTIVE DEMO SIMULATOR EMBED */}
          <div className={`p-5 rounded-2xl border ${
            theme === 'dark' ? 'bg-slate-950/80 border-cyan-500/30' : 'bg-cyan-50/40 border-cyan-200'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <h4 className="text-sm font-bold font-heading">
                  Interactive Live Feature Simulation
                </h4>
              </div>
              <span className="text-[11px] font-mono text-cyan-500 font-semibold">
                Test UI Logic Below ↓
              </span>
            </div>

            {/* E-Commerce Simulation */}
            {project.category === 'ecommerce' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  Experience real-time cart recalculation, coupon deduction, and quantity adjustments:
                </p>
                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-xs sm:text-sm">
                      <div>
                        <span className="font-semibold">{item.name}</span>
                        <span className="block text-cyan-400 font-mono">${item.price} each</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 border border-slate-700 rounded-lg p-1">
                          <button 
                            onClick={() => setCartItems(cartItems.map(i => i.id === item.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))}
                            className="p-1 hover:bg-slate-800 rounded"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono font-bold px-1.5">{item.qty}</span>
                          <button 
                            onClick={() => setCartItems(cartItems.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i))}
                            className="p-1 hover:bg-slate-800 rounded"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-mono font-bold text-emerald-400 min-w-16 text-right">
                          ${(item.price * item.qty).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs uppercase font-mono"
                      placeholder="Coupon"
                    />
                    <button 
                      onClick={() => setCouponApplied(true)}
                      className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs cursor-pointer"
                    >
                      {couponApplied ? 'Applied (-15%)' : 'Apply SAHILDEV'}
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">Total: </span>
                    <span className="text-base font-bold font-mono text-cyan-400">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Grocery Delivery Simulation */}
            {project.category === 'grocery' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  Select delivery slot and adjust fresh grocery items in your express cart:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {groceryBasket.map((item) => (
                    <div key={item.id} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex justify-between items-center text-xs">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-emerald-400 font-mono">${item.price.toFixed(2)}</p>
                      </div>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded font-mono font-bold">
                        Qty: {item.qty}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <label className="text-xs font-mono text-slate-400 block mb-1">Express Delivery Slot:</label>
                  <select 
                    value={selectedSlot} 
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200"
                  >
                    <option>Today (6:00 PM - 8:00 PM) - Express ⚡</option>
                    <option>Tomorrow Morning (8:00 AM - 10:00 AM)</option>
                    <option>Tomorrow Evening (5:00 PM - 7:00 PM)</option>
                  </select>
                </div>

                <div className="flex justify-between items-center pt-2 text-xs">
                  <span className="text-emerald-400 font-medium">✓ Guaranteed Fresh or 100% Refund</span>
                  <span className="font-mono font-bold text-sm text-cyan-400">Total: ${groceryTotal.toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* Business Cost Estimator Simulation */}
            {project.category === 'business' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  Interactive Web Development Scope &amp; Budget Estimator:
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1">
                      <span>Number of Custom Pages:</span>
                      <span className="font-mono font-bold text-cyan-400">{pageCount} Pages</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="15" 
                      value={pageCount}
                      onChange={(e) => setPageCount(Number(e.target.value))}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={needsEcommerce} 
                        onChange={(e) => setNeedsEcommerce(e.target.checked)}
                        className="accent-cyan-500 rounded"
                      />
                      <span>E-Commerce / Payment Gateway Integration</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={needsDataEntry} 
                        onChange={(e) => setNeedsDataEntry(e.target.checked)}
                        className="accent-cyan-500 rounded"
                      />
                      <span>Excel Data Import &amp; Database Setup</span>
                    </label>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                    <span>Estimated Project Quote:</span>
                    <span className="text-base font-mono font-bold text-emerald-400">${estimatedBudget} USD</span>
                  </div>
                </div>
              </div>
            )}

            {/* Data Entry & Excel Simulator */}
            {project.category === 'data-entry' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  Simulated SQL Query &amp; Excel VLOOKUP inventory pipeline (50k+ records capability):
                </p>
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-cyan-400" />
                  <input 
                    type="text" 
                    value={searchSku} 
                    onChange={(e) => setSearchSku(e.target.value)}
                    placeholder="Search SKU or Product..."
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono"
                  />
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="p-2">SKU ID</th>
                        <th className="p-2">Product Name</th>
                        <th className="p-2">Category</th>
                        <th className="p-2">Stock</th>
                        <th className="p-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 bg-slate-950">
                      {searchedInventory.map((item) => (
                        <tr key={item.sku} className="hover:bg-slate-900/50">
                          <td className="p-2 text-cyan-400 font-bold">{item.sku}</td>
                          <td className="p-2 text-slate-200">{item.product}</td>
                          <td className="p-2 text-slate-400">{item.category}</td>
                          <td className="p-2 text-slate-300 font-bold">{item.stock}</td>
                          <td className="p-2">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              item.stock > 20 ? 'bg-emerald-500/20 text-emerald-300' : item.stock > 0 ? 'bg-amber-500/20 text-amber-300' : 'bg-red-500/20 text-red-300'
                            }`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Accuracy Standard: 99.9% verified</span>
                  <span className="text-cyan-400">Excel Macros + MySQL sync ready</span>
                </div>
              </div>
            )}

            {/* Default / Web Dev Simulation */}
            {project.category === 'web-dev' && (
              <div className="space-y-3">
                <p className="text-xs text-slate-400">
                  Simulated dynamic frontend-backend syncing with responsive validation:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block">Performance</span>
                    <span className="text-emerald-400 font-mono font-bold text-sm">99/100</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block">SEO &amp; Best Practices</span>
                    <span className="text-cyan-400 font-mono font-bold text-sm">100%</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block">Mobile Responsive</span>
                    <span className="text-indigo-400 font-mono font-bold text-sm">Verified</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className={`px-6 py-4 border-t flex flex-wrap items-center justify-between gap-3 ${
          theme === 'dark' ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="modal-view-code-btn"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  theme === 'dark'
                    ? 'border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-300'
                    : 'border-slate-300 text-slate-700 hover:border-cyan-600 hover:text-cyan-600 bg-white'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              id="modal-request-similar-btn"
              onClick={() => {
                onClose();
                if (onSelectProjectForContact) {
                  onSelectProjectForContact(project.title);
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-md cursor-pointer hover:opacity-95"
            >
              <span>Build Similar Project With Sahil</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
