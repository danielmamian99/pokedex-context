import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const ButtonsNavigation = memo(
  ({ id }) => {
    const navigate = useNavigate();
    const [value, setValue] = useState(id);
    const handleChange = (event, newValue) => {
      if (newValue > id) setValue(newValue + 1);
      else {
        setValue(newValue - 1);
      }
      navigate(`/pokedex/pokemon/${newValue}`);
    };

    return (
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        {id > 1 && (
          <BottomNavigationAction
            value={id - 1}
            label="Prev"
            icon={<ArrowBackIosNewIcon />}
          />
        )}
        {id < 898 && (
          <BottomNavigationAction
            value={id + 1}
            label="Next"
            icon={<ArrowForwardIosIcon />}
          />
        )}
      </BottomNavigation>
    );
  },
  (prevProps, nextProps) => {
    if (nextProps.id !== prevProps.id) {
      return false;
    }
    return true;
  }
);
