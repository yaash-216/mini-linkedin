function Profilepic({ name }: { name: string }) {
  return (
    <img
      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
      )}&background=E3F2FD&color=1976D2`}
      alt={name}
      className="w-full h-full object-cover"
    />
  );
}

export default Profilepic;
