function Pricing() {
  const plans = [
    { name: "Basic", price: "$9.99/month", features: ["720p Streaming", "1 Device", "Basic Support"] },
    { name: "Pro", price: "$19.99/month", features: ["1080p Streaming", "3 Devices", "Priority Support"] },
    { name: "Premium", price: "$29.99/month", features: ["4K Streaming", "5 Devices", "24/7 Support"] },
  ];

  return (
    <section id="pricing" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="text-3xl font-bold my-4">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;