import React from "react";

const AddService = () => {


  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const imgUrl = form.img.value;
    const members = form.members.value;
    const rating = form.rating.value;


    const courses = {
      name: title,
      price: price,
      description: description,
      img: imgUrl,
      rating: rating,
      members: members,


    };


    fetch("https://meet-your-trainer-server-atik2788.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(courses),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order Placed Successfully!");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
        <h2 className="text-4xl text-center font-bold my-10 text-blue-700">Add New Service</h2>
      <form onSubmit={handlePlaceOrder} className='mb-48'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <input name="title" type="text" placeholder="Title" className="input input-bordered w-full"/>
          <input name="price" type="text" placeholder="Price /week" className="input input-bordered w-full" required/>
          <input name="description" type="text" placeholder="Description" className="input input-bordered w-full" required/>
          <input name="img" type="text" placeholder="Image Url" className="input input-bordered w-full" required/>
          <input name="members" type="text" placeholder="Members" className="input input-bordered w-full" required/>
          <input name="rating" type="text" placeholder="Rating" className="input input-bordered w-full" required/>         
        </div>

        <input className="btn btn-outline btn-primary my-5 rounded-lg px-10 text-center" type="submit" value="Add"/>
      </form>
    </div>
  );
};

export default AddService;
