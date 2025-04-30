import { toast } from 'react-toastify'

type FeedbackType = 'success' | 'error' | 'info' | 'warning'

export const sendFeedback = (message: string, type: FeedbackType = 'info') => {
  switch (type) {
    case 'success':
      toast.success(message)
      break
    case 'error':
      toast.error(message)
      break
    case 'warning':
      toast.warning(message)
      break
    default:
      toast.info(message)
  }
}
