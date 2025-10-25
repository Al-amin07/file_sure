/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProps {
  icon: any;
  title: string;
  description: string;
  colorClass: string;
}
const ValuePillar = ({ icon, title, description, colorClass }: IProps) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-gray-100 transition duration-300 hover:shadow-xl">
    <div
      className={`flex items-center justify-center h-14 w-14 rounded-full ${colorClass} text-white mb-4`}
    >
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ValuePillar;
