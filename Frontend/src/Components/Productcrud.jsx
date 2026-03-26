import React, {  useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Productcrud = ({ event }) => {
  const location = useLocation();
  const navigate = useNavigate()
  const product = location?.state || "";

  const [result, setResult] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    title: product?.title || "",
    price: product?.price || "",
    description: product?.description || "",
    category: product?.category || "",
    image: product?.image || "",
  });

  const api = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handlesend = async (e) => {
    e.preventDefault();
    setError("");
    let newerror = {};
    if (!formdata?.title) newerror.title = "Name is required";
    if (!formdata?.price) newerror.price = "Price is required";
    if (!formdata?.description)
      newerror.description = "Description is required";
    if (!formdata?.category) newerror.category = "Category is required";
    if (!formdata?.image) newerror.image = "Image is required";
    const URLcheck = /^https?:\/\//;
    if (formdata?.image && !URLcheck.test(formdata.image)) {
      newerror.image = "Starts with http or https";
    }
    if (Object.keys(newerror).length > 0) {
      setError(newerror);
      return;
    }
    try {
      setLoading(true);
      setResult("");
      let responsetab = {};
      if (event == "add") {
        const response = await fetch(`${api}/products`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formdata),
        });
        if (!response.ok && response.status == "400")
          responsetab.error = `HTTPS ERROR:${response.status}`;
        else if (!response.ok && response.status) {
          responsetab.error = "Unexpected error";
        } else if (response.ok && response.status == "201") {
          responsetab.res = "Product successfully Added";
        }
        setResult(responsetab);
        return;
      } else if (event == "update") {
        const response = await fetch(`${api}/products/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formdata),
        });
        if (!response.ok && response.status == "400")
          responsetab.error = `HTTPS ERROR:${response.status}`;
        else if (!response.ok && response.status) {
          responsetab.error = "Unexpected error";
        } else if (response.ok && response.status == "200") {
          toast.success("Product successfully Updated");
        }
        setResult(responsetab);
        return;
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  // useEffect(() => {
  //   if (result.error || result.res) {
  //     setTimeout(() => {
  //       document.getElementById("popupresponse").style.display = "none";
  //     }, 5000);
  //   }
  // }, [result.error, result.res]);
  const handleback=(e)=>{
    e.preventDefault()
    e.stopPropagation();
        navigate(-1)
  }

  return (
    <form onSubmit={handlesend}>
      <div className="formcard">
        <div
          style={{
            display: result.error || result.res ? "block" : "none",
            backgroundColor: result.res ? "#00FF00" : " #FF0000",
            color: " #FFFFFF",
          }}
          id="popupresponse"
        >
          <p style={{ fontWeight: "400" }}>{result.res}</p>
        </div>
        <div className="productalign">
          <div className="floatingform">
            <div class="form-floating mb-3">
              <input
                class="form-control grouping-inputs border-bottom "
                id="floatingInput"
                type="text"
                name="title"
                value={formdata?.title}
                onChange={handlechange}
                placeholder="Enter Title"
              ></input>
              <label for="floatingInput">Title</label>
            </div>
              <p style={{ color: "red", fontSize: "12px", fontWeight: "bold", visibility: error.title ? "visible" : "hidden" }}>
                {error.title || " " }
              </p>
          </div>
          <div className="floatingform">
            <div class="form-floating mb-3">
              <input
                class="form-control grouping-inputs border-bottom "
                id="floatingInput"
                type="number"
                name="price"
                min="1"
                value={formdata?.price}
                onChange={handlechange}
                placeholder="Enter price"
              ></input>
              <label for="floatingInput">Price</label>
            </div>
             
              <p style={{ color: "red", fontSize: "12px", fontWeight: "bold", visibility: error.price ? "visible" : "hidden" }}>
                {error.price || " "}
              </p>
            
          </div>
        </div>
        <div className="productalign">
          <div className="floatingform">
            <div class="form-floating  mb-3">
              <input
                class="form-control grouping-inputs border-bottom "
                id="floatingInput"
                type="text"
                name="description"
                value={formdata?.description}
                onChange={handlechange}
                placeholder="Enter description"
              ></input>
              <label for="floatingInput">Description</label>
            </div>
           
              <p style={{ color: "red", fontSize: "12px", fontWeight: "bold", visibility: error.description ? "visible" : "hidden" }}>
                {error.description || " "}
              </p>
            
          </div>
          <div>
            <div className="floatingform">
              <div class="form-floating mb-3">
                <input
                 class="form-control grouping-inputs border-bottom"
                  id="floatingInput"
                  type="text"
                  name="category"
                  value={formdata?.category}
                  onChange={handlechange}
                  placeholder="Enter category"
                ></input>
                <label for="floatingInput">Category</label>
              </div>
               
                <p
                  style={{ color: "red", fontSize: "12px", fontWeight: "bold",visibility: error.category ? "visible" : "hidden" }}
                >
                  {error.category || " "}
                </p>
              
            </div>
          </div>
        </div>
        <div class="form-floating mb-3">
          <input
            class="form-control grouping-inputs border-bottom "
            id="floatingInput"
            type="text"
            name="image"
            value={formdata?.image}
            onChange={handlechange}
            placeholder="Enter image"
          ></input>
          <label for="floatingInput">Image URL</label>
        </div>
       
          <p className="m-0" style={{ color: "red", fontSize: "12px", fontWeight: "bold", visibility: error.image ? "visible" : "hidden" }}>
            {error.image || " "}
          </p>
        <div className="buttonalign">
        <button type="submit">
          <div
            class={loading ? "spinner-border text-primary" : "none"}
            role="status"
          >
            {!product ? "Add" : "Update"}
          </div>
        </button>
        <button className="backicon" onClick={handleback}>&larr;Back</button>
        </div>
      </div>
    </form>
  );
};

export default Productcrud;
