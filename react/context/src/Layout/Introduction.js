export default function Introduction() {
  return (
    <>
      <section className="flex w-5/6 gap-10 mt-28">
        <div className="w-1/2 flex justify-center">
          {/* img of bruel */}
          <img src="/assets/bruel-pic.png" width={474} height={355} alt="Bruel pic" />
        </div>
        <div className="flex flex-col w-1/2 text-sm gap-3 leading-6">
          <h3 className="text-greenBtns font-bold text-3xl">Designer d’espace</h3>
          <p className="font-normal text-sm ">Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison finale du chantier. <br /> <br />

            Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les couleurs dans le respect de l’esprit des lieux, et le choix adapté des matériaux. Le suivi du chantier sera assuré dans le souci du détail, le respect du planning et du budget. <br /> <br />

            En cas de besoin, une équipe pluridisciplinaire peut être constituée : architecte DPLG, décorateur(trice).</p>
        </div>
      </section>
    </>
  )
}