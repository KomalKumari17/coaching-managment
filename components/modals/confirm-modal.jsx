import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";

const ConfirmModal = ({children, onConfirm}) => {
    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    This Action cannot be undone.
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm} className="bg-black hover:bg-gray-800 text-white">
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
export default ConfirmModal;