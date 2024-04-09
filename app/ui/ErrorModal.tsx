export default function ErrorModal({ message}: { message: string}) {
  return (
    <div className="bg-red-500 flex text-white rounded-lg">
      <div className="flex-1 text-center">
        <p className="p-2 leading-7">{message}</p>
      </div>
    </div>
  );
}
