import { Form } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  return null;
};

const NewsLetter = () => {
  return (
    <Form className="form" method="POST">
      <h4
        style={{
          marginBottom: "2rem",
          color: "lightGreen",
          textAlign: "center",
        }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
          defaultValue="shahid"
        />
      </div>
      {/* lastName */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
          defaultValue="khan"
        />
      </div>
      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          name="email"
          defaultValue="shahidlanger0@gmail.com"
          id="email"
          required
          className="form-input"
        />
      </div>
      <button
        className="btn btn-block"
        type="submit"
        style={{ marginTop: "0.5rem" }}>
        submit
      </button>
    </Form>
  );
};

export default NewsLetter;
