import "tailwindcss/tailwind.css";

export const TailwindComponent = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">Tailwind CSS</div>
        {[...Array(10000)].map((_, i) => (
          <p className="text-gray-500" key={i}>
            You are using Tailwind CSS for styling this component.
          </p>
        ))}
      </div>
    </div>
  );
};
