import { useState, useEffect } from 'react';
import { Database, CheckCircle, XCircle, Loader2 } from 'lucide-react';

interface DatabaseHealth {
  status: string;
  database: string;
  timestamp?: string;
}

interface DatabaseTest {
  success: boolean;
  message: string;
  gems_count?: number;
  admins_count?: number;
  timestamp?: string;
}

export default function DatabaseStatus() {
  const [health, setHealth] = useState<DatabaseHealth | null>(null);
  const [testData, setTestData] = useState<DatabaseTest | null>(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    checkHealth();
    // Refresh every 30 seconds
    const interval = setInterval(checkHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  const checkHealth = async () => {
    try {
      const healthRes = await fetch(`${API_BASE_URL}/health`);
      const healthData = await healthRes.json();
      setHealth(healthData);
      
      if (expanded) {
        const testRes = await fetch(`${API_BASE_URL}/db/test`);
        const testData = await testRes.json();
        setTestData(testData);
      }
    } catch (error) {
      console.error('Failed to check database health:', error);
      setHealth({ status: 'Error', database: 'Disconnected' });
    } finally {
      setLoading(false);
    }
  };

  const isConnected = health?.database === 'Connected';

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
      {/* Header */}
      <button
        onClick={() => {
          setExpanded(!expanded);
          if (!expanded && !testData) checkHealth();
        }}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            isConnected 
              ? 'bg-green-50 text-green-600' 
              : 'bg-red-50 text-red-600'
          }`}>
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Database className="h-5 w-5" />
            )}
          </div>
          <div className="text-left">
            <h3 className="text-sm font-medium text-gray-900">Database Status</h3>
            <div className="flex items-center gap-2 mt-0.5">
              {isConnected ? (
                <>
                  <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                  <span className="text-xs text-green-600 font-medium">Connected</span>
                </>
              ) : (
                <>
                  <XCircle className="h-3.5 w-3.5 text-red-600" />
                  <span className="text-xs text-red-600 font-medium">Disconnected</span>
                </>
              )}
            </div>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded Details */}
      {expanded && (
        <div className="border-t border-gray-200 bg-gray-50 p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">Server Status</div>
              <div className="text-sm font-medium text-gray-900">{health?.status || 'Unknown'}</div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">Connection</div>
              <div className={`text-sm font-medium ${
                isConnected ? 'text-green-600' : 'text-red-600'
              }`}>
                {health?.database || 'Unknown'}
              </div>
            </div>
          </div>

          {testData && (
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">Total Gems</div>
                <div className="text-2xl font-bold text-[#c4a962]">{testData.gems_count || 0}</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">Admin Users</div>
                <div className="text-2xl font-bold text-[#2d3748]">{testData.admins_count || 0}</div>
              </div>
            </div>
          )}

          {health?.timestamp && (
            <div className="text-xs text-gray-400 text-center">
              Last checked: {new Date(health.timestamp).toLocaleTimeString()}
            </div>
          )}

          <button
            onClick={checkHealth}
            disabled={loading}
            className="w-full px-4 py-2 bg-[#c4a962] hover:bg-[#b39952] text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Checking...
              </>
            ) : (
              <>
                <Database className="h-4 w-4" />
                Refresh Status
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
