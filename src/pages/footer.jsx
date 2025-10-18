import React from 'react'

function Footer(){
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">MediCare Hospital Management System</h3>
            <p className="text-[#E5E7EB] text-sm">
              Providing comprehensive healthcare solutions with cutting-edge technology 
              and compassionate care for over 20 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#E5E7EB]">
              <li><button className="hover:text-white transition-colors">Emergency Services</button></li>
              <li><button className="hover:text-white transition-colors">Find a Doctor</button></li>
              <li><button className="hover:text-white transition-colors">Patient Portal</button></li>
              <li><button className="hover:text-white transition-colors">Careers</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="text-sm text-[#E5E7EB] space-y-2">
              <p>123 Healthcare Ave</p>
              <p>Medical City, MC 12345</p>
              <p>Phone: (555) 123-HEAL</p>
              <p>Email: info@medicare-hms.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#374151] mt-8 pt-6 text-center text-sm text-[#E5E7EB]">
          <p>&copy; 2024 MediCare HMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer