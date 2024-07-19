import { FaCheck } from "react-icons/fa";
import { useState } from "react";
const DropDown = ({
  display,
  sortby,
  onChangesort,
  orderby,
  onChangeorder,
}) => {
  if (!display) {
    return null;
  }
  return (
    <div className="sort">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          className="sort-style"
          role="menuitem"
          onClick={() => onChangesort("petName")}
        >
          Pet Name{" "}
          {sortby === "petName" && (
            <p>
              <FaCheck className="check" />
            </p>
          )}
        </div>
        <div
          className="sort-style"
          role="menuitem"
          onClick={() => onChangesort("ownerName")}
        >
          Owner Name{" "}
          {sortby === "ownerName" && (
            <p>
              {" "}
              <FaCheck className="check" />
            </p>
          )}
        </div>
        <div
          className="sort-style"
          role="menuitem"
          onClick={() => onChangesort("aptDate")}
        >
          Date{" "}
          {sortby === "aptDate" && (
            <p>
              {" "}
              <FaCheck className="check" />
            </p>
          )}
        </div>
        <div
          className="sort-style"
          role="menuitem"
          onClick={() => onChangeorder("asc")}
        >
          Asc{" "}
          {sortby === "asc" && (
            <p>
              {" "}
              <FaCheck className="check" />
            </p>
          )}
        </div>
        <div
          className="sort-style"
          role="menuitem"
          onClick={() => onChangeorder("desc")}
        >
          Desc{" "}
          {sortby === "desc" && (
            <p>
              {" "}
              <FaCheck className="check" />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Search = ({
  query,
  onChangequery,
  sortby,
  onChangesort,
  orderby,
  onChangeorder,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <label htmlFor="query" className="sr-only" />
      <input
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={(event) => {
          onChangequery(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setShow(!show);
        }}
      >
        Sort by
      </button>
      <DropDown
        display={show}
        sortby={sortby}
        onChangesort={(mysort) => onChangesort(mysort)}
        orderby={orderby}
        onChangeorder={(myOrder) => onChangeorder(myOrder)}
      />
    </div>
  );
};

export default Search;
