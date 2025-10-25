import Image from "next/image";

interface IProps {
  name: string;
  role: string;
  imageUrl: string;
}
const TeamMember = ({ name, role, imageUrl }: IProps) => (
  <div className="text-center">
    <Image
      height={200}
      width={200}
      className="mx-auto h-32 w-32 rounded-full object-cover shadow-md border-4 border-white transition-transform duration-300 hover:scale-[1.02]"
      src={imageUrl}
      alt={`Profile of ${name}`}
    />
    <h3 className="mt-4 text-lg font-bold text-gray-900">{name}</h3>
    <p className="text-indigo-600 font-medium">{role}</p>
  </div>
);
export default TeamMember;
