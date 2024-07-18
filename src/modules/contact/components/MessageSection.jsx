import Input from "../../../common/components/elements/Input";

const MessageSection = () => {
  return (
    <div>
      <h1 className="mb-2 text-lg text-neutral-700 font-medium">
        Send Me a Message
      </h1>
      <form action="">
        <div className="grid grid-cols-2 gap-2">
          <Input placeholder={"Name"} name={"name"} />
          <Input placeholder={"Email"} name={"email"} />
        </div>

        <textarea
          name="message"
          id="message"
          placeholder="Type your message here"
          rows={4}
          className="w-full border rounded-lg p-5 mt-4"
        />

        <button
          type="submit"
          className="py-2 mt-3 w-full flex justify-center items-center bg-slate-800 rounded-lg text-white hover:opacity-75"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default MessageSection;
