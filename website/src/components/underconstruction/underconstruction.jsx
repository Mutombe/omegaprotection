import React from 'react';
import { Shield, Mail, Phone, MapPin, Clock, AlertCircle } from 'lucide-react';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12">
          <Shield className="w-16 h-16 text-yellow-500 mb-4" />
          <h1 className="text-4xl font-bold text-center mb-2">Omega Protection Services</h1>
          <p className="text-xl text-yellow-500">(Private) Limited</p>
        </div>

        {/* Under Construction Notice */}
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg border border-yellow-500/20">
          <div className="flex items-center justify-center mb-6">
            <AlertCircle className="w-8 h-8 text-yellow-500 mr-2" />
            <h2 className="text-2xl font-semibold">Website Under Construction</h2>
          </div>
          
          <p className="text-gray-300 text-center mb-8">
            Our new website is currently under development. We're working hard to bring you a better online experience.
          </p>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <Phone className="w-5 h-5 text-yellow-500 mr-2" />
              <span>+263 772 754 460, +263 77 501 5011</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-5 h-5 text-yellow-500 mr-2" />
              <span>11/23 Mt Pleasant Heights, Harare</span>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-6 text-yellow-500">Our Security Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Retail Security',
              'Armed Security Guards',
              'Close Protection Officers',
              'Construction Security',
              'Corporate Security',
              'Bank & Gold Escorts',
              'Event Security',
              'Private Security & Investigations'
            ].map((service) => (
              <div key={service} className="bg-gray-800/50 p-4 rounded-lg border border-yellow-500/10">
                <p className="text-gray-300">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Omega Protection Services (Pvt) Ltd Zimbabwe</p>
          <p className="text-sm mt-2">All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default UnderConstruction;