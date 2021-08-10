import { Dialog, DialogContent } from "@material-ui/core";

const Login = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog open={open} onclose={handleClose}>
            <DialogContent>
                <p>hello</p>
            </DialogContent>
        </Dialog>

    )
}

export default Login;