export default Contact = () => {
  return (
    <div className="text-center m-2 p-2">
      <h2 className="font-bold text-xl">Contact Us</h2>
      <div className="m-2 p-2">
        <input
          placeholder="Name"
          className="border border-black m-4 p-2 rounded-md"
        />
        <input
          placeholder="Number"
          className="border border-black m-4 p-2 rounded-md"
        />
        <button className="border border-black m-4 p-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};
