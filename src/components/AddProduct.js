import React, { useState } from 'react';  // Ensure this is at the top

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Product Name: ${product.name}\nCategory: ${product.category}\nQuantity: ${product.quantity}\nPrice: ${product.price}\nDescription: ${product.description}`);
    console.log('Product submitted:', product);
  };

  const handleCancel = () => {
    setProduct({
      name: '',
      category: '',
      quantity: '',
      price: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Add Product</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default AddProduct;
