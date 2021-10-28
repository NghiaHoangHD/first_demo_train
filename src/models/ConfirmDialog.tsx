import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { Box } from '@mui/system'
import React, { ReactElement } from 'react'
import create from 'zustand'

type ConfirmDialogStore = {
  message: string
  onSubmit?: () => void
  close: () => void
}

const useConfirmDialogStore = create<ConfirmDialogStore>(set => ({
  message: '',
  onSubmit: undefined,
  close: () =>
    set({
      onSubmit: undefined,
    }),
}))

export const confirmDialog = (message: string, onSubmit: () => void) => {
  useConfirmDialogStore.setState({
    message,
    onSubmit,
  })
}

const ConfirmDialog: React.FC = () => {
  const { message, onSubmit, close } = useConfirmDialogStore()
  return (
    <Dialog
      open={Boolean(onSubmit)}
      onClose={close}
      maxWidth="sm"
      fullWidth
      color="error"
    >
      <DialogTitle>Confirm Action</DialogTitle>
      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={close}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            if (onSubmit) {
              onSubmit()
            }
            close()
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
