const Error = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-red-500 text-sm">{children}</span>;
};

export default Error;
