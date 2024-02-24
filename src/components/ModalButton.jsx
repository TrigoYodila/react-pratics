import { createPortal } from "react-dom"
import { useState } from "react"
import ModalContent from "./ModalContent"

function ModalButton() {

    const [showModal, setShowModal] = useState(false)

  return (
   <>
         <button className="block w-fit mx-auto bg-slate-200 text-slate-900 py-2 px-3 rounded" onClick={()=>setShowModal(true)}>
        Open the Modal
        </button>
        {
            showModal && createPortal(<ModalContent closeModal={()=>setShowModal(false)}/>, document.body)
        }
   </>
  )
}

export default ModalButton
