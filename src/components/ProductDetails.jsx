import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";

export default function ProductDetails({ productDetails }) {
  const { image, title, price, category, description } = productDetails;
  return (
    <div className="border -mt-5 relative grid grid-cols-2">
      <div className="p-10 pl-5 border-r flex">
        <img className="" src={image} alt={title} />
      </div>
      <div className="p-10 pr-5">
        <h1 className="text-3xl font-semibold mb-8">{title}</h1>
        <Price>
          <a href="">${price}</a>
        </Price>
        <h3 className="bg-gray-100 border border-gray-300 rounded  px-4 py-3 text-yellow-700 font-bold mt-8 mb-3">
          {category}
        </h3>
        <p className="text-gray-500 text-lg mb-4">{description}</p>
        <VerticalButton>
          <div>
            <i>
              <MdShoppingCart />
            </i>
          </div>
          <div>Add to Cart</div>
        </VerticalButton>
      </div>
      <div className="absolute top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4 bg-white font-bold">
        AND
      </div>
    </div>
  );
}

const Price = styled.h2`
  font-size: 1.4rem;

  a {
    background-color: #00b5ad;
    font-weight: 700;
    margin-left: 24px;
    color: #fff;
    padding: 11px 32px 12px;
    border-radius: 0 0.28571429rem 0.28571429rem 0;
    position: relative;

    &:hover {
      background-color: #009c95;
    }

    &:before {
      content: "";
      position: absolute;
      transform: translateY(-50%) translateX(50%) rotate(-45deg);
      top: 50%;
      right: 100%;
      background-color: inherit;
      background-image: none;
      width: 1.58em;
      height: 1.58em;
      transition: none;
    }

    &:after {
      position: absolute;
      content: "";
      top: 50%;
      left: -0.25em;
      margin-top: -0.25em;
      background-color: #fff;
      width: 0.5em;
      height: 0.5em;
      box-shadow: 0 -1px 1px 0 rgb(0 0 0 / 30%);
      border-radius: 500rem;
    }
  }
`;

const VerticalButton = styled.div`
  background-color: #ff3e6c;
  text-align: center;
  font-size: 18px;
  max-width: 10rem;
  position: relative;
  cursor: pointer;
  font-weight: 700;
  border-radius: 3px;
  overflow: hidden;
  color: #fff;

  & > * {
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    transition: top 0.3s ease, transform 0.3s ease, -webkit-transform 0.3s ease;
  }

  div:first-child {
    position: absolute;
    left: 0;
    top: -100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    & > * {
      transform: translateY(100%);
    }
  }
`;
