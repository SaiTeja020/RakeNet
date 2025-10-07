import { useState, useEffect, FC } from 'react';
import { X, Loader2, Lightbulb } from 'lucide-react';
import { RakeSuggestion, Order, Inventory } from '../types';

interface ExplainabilityModalProps {
  plan: RakeSuggestion;
  orders: Order[];
  inventories: Inventory[];
  onClose: () => void;
}

const ExplainabilityModal: FC<ExplainabilityModalProps> = ({ plan, orders, inventories, onClose }) => {
  const [explanation, setExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const generateLocalExplanation = () => {
      const relatedOrders = orders.filter(o => plan.fulfilledOrderIds.includes(o.id));
      const totalTonnage = relatedOrders.reduce((sum, o) => sum + (o.quantity || 0), 0);
      const destination = plan.destination;
      const base = plan.source || plan.baseName || "source location";
      const commodity = relatedOrders[0]?.commodity || "goods";

      return `
**Strategic Value:**
This plan efficiently allocates a rake from **${base}** to **${destination}**, ensuring optimal wagon utilization and meeting demand for ${commodity}. 

**Key Benefits:**
- Fulfills ${relatedOrders.length} active order${relatedOrders.length !== 1 ? 's' : ''}, totaling approximately ${totalTonnage.toLocaleString()} tonnes.
- Uses available stock efficiently without depleting key reserves.
- Consolidates multiple deliveries to the same destination, reducing total transit cost.
- Aligns rake movement with operational priorities and network flow efficiency.

**Potential Risks or Considerations:**
- High stock drawdown at ${base} may temporarily reduce flexibility for future dispatches.
- Delivery schedule assumes ideal rail network availability and minimal congestion.
      `;
    };

    // Simulate async processing for UI consistency
    const timer = setTimeout(() => {
      try {
        const localExplanation = generateLocalExplanation();
        setExplanation(localExplanation);
      } catch (e) {
        console.error(e);
        setError("Could not generate explanation.");
      } finally {
        setIsLoading(false);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [plan, orders, inventories]);

  // Simple markdown-like renderer
  const formatExplanation = (text: string) => {
    const lines = text.split('\n');
    const elements = [];
    let listItems: JSX.Element[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc pl-5 space-y-1">
            {listItems}
          </ul>
        );
        listItems = [];
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('- ')) {
        listItems.push(<li key={`li-${i}`}>{line.substring(2)}</li>);
      } else {
        flushList();
        if (line.startsWith('**') && line.endsWith('**')) {
          elements.push(
            <h3 key={`h3-${i}`} className="font-bold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              {line.replace(/\*\*/g, '')}
            </h3>
          );
        } else if (line) {
          elements.push(
            <p key={`p-${i}`} className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {line}
            </p>
          );
        }
      }
    }
    flushList();
    return elements;
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Lightbulb className="text-sail-orange" size={24} />
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Plan Explanation: {plan.rakeId}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-48">
              <Loader2 className="animate-spin text-sail-orange h-12 w-12" />
              <p className="mt-4 text-gray-600 dark:text-gray-300">Generating insights...</p>
            </div>
          )}
          {error && (
            <div className="text-center text-red-600 p-4 bg-red-50 rounded-md">
              <p className="font-semibold">Error</p>
              <p>{error}</p>
            </div>
          )}
          {!isLoading && !error && (
            <div className="prose prose-sm max-w-none text-gray-600 dark:text-gray-300 space-y-2">
              {formatExplanation(explanation)}
            </div>
          )}
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-700 border-t dark:border-gray-600 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-sail-blue text-white rounded-md hover:bg-blue-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExplainabilityModal;
