import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AddService = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <input
            name="Title"
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full"
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            defaultValue={user?.email}
            className="input input-bordered w-full"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered w-full my-3"
          placeholder="Your message"
          required
        ></textarea>
        <input
          className="btn my-2 rounded-lg text-center"
          type="submit"
          value="Place Your Order"
        />
      </form>
    </div>
  );
};

export default AddService;
