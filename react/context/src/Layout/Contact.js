export default function Contact() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col font-normal text-sm items-center ">
          <h4 className="text-greenBtns text-xl font-semibold">Contact</h4>
          <p>Vous avez un projet ? Discutons-en !</p>
        </div>
        <div className="flex flex-col w-80 gap-6 text-xs font-normal pt-5 mb-10 mx-auto">
          <div className="flex flex-col gap-2">
            <h5>Nom</h5>
            <input className="h-10 drop-shadow-xl" />
          </div>

          <div className="flex flex-col gap-2">
            <h5>E-mail</h5>
            <input className="h-10 drop-shadow-xl" />
          </div>

          <div className="flex flex-col gap-2">
            <h5>Message</h5>
            <input className="h-40 drop-shadow-xl" />
          </div>
        </div>
      </div>
    </>
  )
}