import { useNavigate } from "react-router-dom";

const routes = [
  { path: "/header", name: "Header" },
  { path: "/footer", name: "Footer" },
  { path: "/image-slider", name: "Image Slider" },
  { path: "/testimonial", name: "Testimonial" },
  { path: "/about-hero-section", name: "About Hero Section" },
  { path: "/buttons", name: "Buttons" },
  { path: "/Faqs", name: "Faqs" },
  { path: "/continues-slider", name: "Continues Slider" },
  { path: "/contact-touch-us", name: "Contact Touch Us" },
  { path: "/certificate", name: "Certificate" },
  { path: "/galleyImages", name: "Galley Images" },
  { path: "/couting-section", name: "Counting Section" },
  { path: "/popup", name: "Popup" },
  { path: "/pagination", name: "Pagination" },
];

const RouteTable = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto my-5 mt-100">
      <h2 className="text-2xl font-bold mb-4 text-center">Navigation Table</h2>
      <div style={{ maxHeight: "260px", overflowY: "auto" }}>
        <table className="min-w-full border border-gray-300 rounded overflow-hidden">
          <thead className="bg-gray-200 sticky top-0 z-10">
            <tr>
              <th className="py-2 px-4 border-b">Route Name</th>
              <th className="py-2 px-4 border-b">Path</th>
              <th className="py-2 px-4 border-b">Go</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => (
              <tr key={route.path} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{route.name}</td>
                <td className="py-2 px-4 border-b font-mono">{route.path}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded"
                    onClick={() => navigate(route.path)}
                  >
                    Go
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RouteTable;
