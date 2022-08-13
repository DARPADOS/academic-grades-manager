import { useId, useState } from 'react'
import ModalFooter from 'components/modal/modal-footer'
import ModalHeader from 'components/modal/modal-header'
import Modal from 'components/modal/modal'
import FormSemester from './semester.form'

interface Props {
  onSubmit: () => void
}

const SemesterModal = ({ onSubmit } : Props) => {
  const [opened, setOpened] = useState<boolean>(false)
  const formId = useId()

  const modalHandle = () => {
    setOpened(!opened)
  }

  return <>
    <Modal open={opened} handleToggle={modalHandle}>
      <ModalHeader title={'New Semester'} onClick={modalHandle}/>
      <FormSemester onSemesterSubmitted={() => { modalHandle(); onSubmit() }} formId={formId}/>
      <ModalFooter onClick={modalHandle} formId={formId}/>
    </Modal>
  </>
}

export default SemesterModal
