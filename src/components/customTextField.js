import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";


const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null
      }}
    />
  );
};

export default IconTextField;


// How to use ?

// export default function App() {
//     return (
//       <Box
//         className="App"
//         sx={{
//           display: "grid",
//           gridTemplateColumns: "270px 270px",
//           gridGap: 10
//         }}
//       >
//         <IconTextField
//           label="Salary"
//           iconStart={<AttachMoneyIcon sx={{ color: "green", fontSize: 20 }} />}
//           iconEnd={<QuestionMark sx={{ color: "#0089ff", fontSize: 20 }} />}
//         />
//         <IconTextField label="Password" iconEnd={<Visibility />} />
//         <IconTextField label="First Name" iconStart={<AccountCircle />} />
//         <IconTextField
//           label="Last Name"
//           iconEnd={<ErrorOutlineIcon sx={{ color: "red" }} />}
//         />
//       </Box>
//     );
//   }