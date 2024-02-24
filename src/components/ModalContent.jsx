import PropsTypes from 'prop-types'
function ModalContent({closeModal}) {
  return (
    <>
        {/* create our overlay */}
        <div className="fixed inset-0 bg-slate-800/75" onClick={closeModal}></div>
        {/* content of modal */}
        <div className="fixed z-10 top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-300 text-slate-900 p-10 rounded">
            <p>Here is the content</p>
            <button className="absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 rounded" onClick={closeModal}>
               X
            </button>
        </div>
    </>
  )
}

export default ModalContent

ModalContent.propTypes = {
    closeModal:PropsTypes.func
}
