import { forwardRef, useState, useImperativeHandle } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";

export interface SnackRef {
  open: (message: string) => void;
  close: () => void;
}

const Snack = forwardRef<
  SnackRef,
  {
    autoHideDuration: number;
    severity?: AlertColor | undefined;
    onClose?: () => void;
  }
>(({ autoHideDuration, severity, onClose }, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (): void => {
    setIsOpen(false);

    if (onClose) {
      onClose();
    }
  };

  const open = (message: string): void => {
    if (isOpen) {
      setIsOpen(false);

      setTimeout(() => {
        setMessage(message);
        setIsOpen(true);
      }, 50);
    } else {
      setMessage(message);
      setIsOpen(true);
    }
  };

  const close = (): void => {
    setIsOpen(false);
  };

  useImperativeHandle(ref, () => ({
    open: open,
    close: close,
  }));

  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={autoHideDuration}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
});

export default Snack;

// const Snack = ({
//   message,
//   open,
//   severity,
//   autoHideDuration,
//   onClose,
// }: {
//   message: string;
//   open: boolean;
//   severity?: AlertColor | undefined;
//   autoHideDuration?: number;
//   onClose?: () => void;
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     setIsOpen(open);
//   }, [open]);

//   const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
//     props,
//     ref
//   ) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//   });

//   const handleClose = (
//     event: React.SyntheticEvent | Event,
//     reason?: string
//   ): void => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setIsOpen(false);

//     if (onClose) {
//       onClose();
//     }
//   };

//   return (
//     <Snackbar
//       open={isOpen}
//       autoHideDuration={autoHideDuration}
//       onClose={handleClose}
//     >
//       <Alert onClose={handleClose} severity={severity}>
//         {message}
//       </Alert>
//     </Snackbar>
//   );
// };

// export default Snack;
