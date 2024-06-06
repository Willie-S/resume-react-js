import { Link } from "@mui/material";

const InLineLinkComp = ({ onClickHandler, ...props }) => {
    return (
        <Link
            component="button"
            variant="body1"
            onClick={onClickHandler}
            {...props}
            sx={{
                color: "primary.main",
                textTransform: "none",
                mx: 0.5,
                ...props.sx,
            }}
        >
            {props.children}
        </Link>
    );
};

export default InLineLinkComp;
