import Button from 'components/button'

interface Props {
  onClick: () => void,
  formId: string
}

const ModalFooter = ({ onClick, formId }: Props) => {
  return <>
  <div className="flex justify-end p-3">
    <Button color='slate' onClick={onClick} >
      Close
    </Button>
    <Button color='blue' type='submit' form={formId}>
      Save
    </Button>
  </div>
  </>
}

export default ModalFooter
