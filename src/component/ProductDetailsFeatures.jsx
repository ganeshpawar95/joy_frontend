export default function ProductDetailsFeatures(props) {
  return (
    <div className="container">
      <div className="row">
        <label
          className="labels"
          style={{
            fontSize: "18px",
          }}
        >
          {props.label}
        </label>
        <ul
          style={{ listStyle: "none", display: "flex" }}
          id="colors"
          className="product-list-image-test medium-9 columns"
          data-ga-category="MainContent"
        >
          {props.data.map((master) => (
            <li
              className="variantItem selectedVariant"
              style={{ marginLeft: 10 }}
            >
              {master.is_selected != undefined ? (
                <button type="button" class="btn_outline_active">
                  {master.name}
                </button>
              ) : (
                <button type="button" class="btn_outline">
                  {master.name}
                </button>
              )}
            </li>
          ))}

          {/* <li className="variantItem selectedVariant" color-data="Pink">
            <figure>
              <figcaption style={{ textAlign: "center" }}>
                <span className="h-listprice webprice">Pink</span>
              </figcaption>
            </figure>
          </li> */}
        </ul>
        <div className="medium-3 columns">&nbsp;</div>
      </div>
    </div>
  );
}
