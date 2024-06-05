import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ViewButtonComp = (props) => {
    return (
        <Button
            endIcon={<KeyboardArrowRightIcon />}
            {...props}
            sx={{
                width: "fit-content",
                ...props.sx,
            }}
        >
            {props.children}
        </Button>
    );
};

export default ViewButtonComp;
