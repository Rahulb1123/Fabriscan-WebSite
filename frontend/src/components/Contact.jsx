import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { MapPin, Mail } from 'lucide-react';

const locations = [
  {
    country: 'United States (California)',
    address: '2001 Gateway Place, Suite 210W, San Jose, CA 95110',
  },
  {
    country: 'United States (Michigan)',
    address: '39111 Six Mile Road, Suite 503-147, Livonia, MI 48152',
  },
  {
    country: 'United States (New Jersey)',
    address: '190 Witherspoon Street, Princeton, NJ 08540',
  },
  {
    country: 'United States (New Jersey)',
    address: '190 Middlesex Turnpike, Suite 405, Iselin, NJ 08830',
  },
  {
    country: 'United States (Pennsylvania)',
    address: '875 Greentree Rd, 7 Parkway Center, Suite 104, PA 15220',
  },
  {
    country: 'India (Ahmedabad)',
    address: 'Ground Floor, President Plaza, S G Highway, Ahmedabad, Gujarat – 380054',
  },
  {
    country: 'India (Bengaluru)',
    address: 'Building-2, 4th Floor, Prestige Technostar, Brookefield Main Road, Doddanakundi Industrial Area, Whitefield, Bangalore, Karnataka-560048',
  },
  {
    country: 'Ethiopia',
    address: 'Kebede Haile Building, Bole Road, Addis Ababa, Ethiopia',
  },
  {
    country: 'Canada (Toronto)',
    address: '55 York Street, Suite 401, Toronto M5J 1R7, Canada',
  },
  {
    country: 'Canada (Toronto)',
    address: '401 Bay Street, 16th Floor, Toronto, Canada, M5H 2Y4',
  },
  {
    country: 'Singapore',
    address: '#08-03 SGX Centre 2, 4 Shenton Way, Singapore 068807',
  }
];

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
  "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
  "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
  "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
  "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands",
  "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
  "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
  "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

function ContactPage() {
  const [result, setResult] = React.useState(""); // for showing result message
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
  
    // Check if the checkbox is checked
    if (!isSubscribed) {
      setResult("Please agree to the subscription policy before submitting.");
      return;
    }
  
  const form = event.target;
    const formData = new FormData(form);
  
    formData.append("access_key", "385c1c7e-5bf7-44b2-9c6e-3656e8ee552a");
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Submitted Successfully");
  
        // Reset form immediately
        form.reset();
        setIsSubscribed(false); // Reset checkbox state
  
        // Remove success message after 5 seconds
        setTimeout(() => {
          setResult(""); // Clear the result message
        }, 5000);
      } else {
        console.log("Error", data);
        setResult("Submission Failed! Please try again later.");
      }
    } catch (error) {
      console.error("Submission Error: ", error);
      setResult("Submission Failed! Please try again later.");
    }
  };  

  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        {/* Hero Section */}
        <div 
          className="h-[400px] relative bg-cover bg-center"
          style={{ backgroundImage: 'url(https://i.postimg.cc/9Fj6gr65/contact.jpg)' }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-50"></div>

          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Ready to go frictionless?</h2>
            <p className="text-gray-600 mb-8">
              Let us know what’s holding you back, and we’ll be in touch.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-11 h-11 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p className="text-gray-600">CMR Institute of Technology, Brookefield Main Road, Doddanakundi Industrial Area, Whitefield, Bangalore, Karnataka-560048,
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-gray-600">FabriScan@company.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <select
                    name="country"
                    defaultValue="" // Ensures the field is empty by default
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled></option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required></textarea>
              </div>
              

              {/* Checkbox for subscription */}
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="subscribe" 
                  checked={isSubscribed} 
                  onChange={() => setIsSubscribed(!isSubscribed)} 
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="subscribe" className="text-sm text-gray-600">
                  Sign me up for email, updates, valuable resources, and helpful tips from Relevance Lab. Subscription implies consent to our 
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </label>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
                Submit
              </button>
            </form>
            {result && <span className="text-green-500">{result}</span>} {/* Success message here */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
