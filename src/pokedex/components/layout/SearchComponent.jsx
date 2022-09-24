import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha, InputBase } from "@mui/material";

import "./searchComponent.css";
import { useForm } from "../../../hooks";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "80%",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      "&:focus": {
        width: "100%",
      },
    },
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const SearchComponent = ({ placeHolder = "Search..." }) => {
  const { searchText, onInputChange } = useForm();
  const navigate = useNavigate();
  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/pokedex/pokemon/${searchText}`);
  };
  return (
    <form className="search-form" onSubmit={onSearchSubmit}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          name="searchText"
          onChangeCapture={onInputChange}
          placeholder={placeHolder}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </form>
  );
};
