import Input from "../../../common/components/elements/Input";

const MessageSection = () => {
  return (
    <div>
      <h1 className="mb-3 text-md md:text-lg text-neutral-700 font-medium dark:text-white">
        Or Send Me a Message
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
          className="w-full border rounded-lg p-5 mt-4 text-xs md:text-md lg:text-base"
        />

        <button
          type="submit"
          className="py-2 mt-3 w-full flex justify-center items-center bg-slate-800 rounded-lg text-white hover:opacity-75 text-xs md:text-md lg:text-base"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default MessageSection;
