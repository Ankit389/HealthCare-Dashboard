import React from "react";

const Diagnostic = () => {
  return (
    <div className="bg-gray-100 p-2 relative bottom-24">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Diagnostic List Section */}
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Diagnostic List
        </h2>
        <div className="overflow-hidden border rounded-lg">
          {/* Scrollable Container */}
          <div className="overflow-y-auto max-h-64">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-gray-600 font-medium">
                    Problem/Diagnosis
                  </th>
                  <th className="py-3 px-4 text-gray-600 font-medium border-r">
                    Description
                  </th>
                  <th className="py-3 px-4 text-gray-600 font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-4 text-gray-800">Hypertension</td>
                  <td className="py-3 px-4 text-gray-600 border-r">
                    Chronic high blood pressure
                  </td>
                  <td className="py-3 px-4  font-semibold">
                    Under Observation
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 text-gray-800">Type 2 Diabetes</td>
                  <td className="py-3 px-4 text-gray-600 border-r">
                    Insulin resistance and elevated blood sugar
                  </td>
                  <td className="py-3 px-4  font-semibold">Cured</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 text-gray-800">Asthma</td>
                  <td className="py-3 px-4 text-gray-600 border-r">
                    Recurrent episodes of bronchial constriction
                  </td>
                  <td className="py-3 px-4 text-gray-500 font-semibold">
                    Inactive
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 text-gray-800">Osteoarthritis</td>
                  <td className="py-3 px-4 text-gray-600 border-r">
                    Degenerative joint disease
                  </td>
                  <td className="py-3 px-4 font-semibold">Untreated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnostic;
