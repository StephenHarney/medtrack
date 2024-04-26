import Feed from "@components/Feed";


const Home = () => {
    return(
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
     Keep Track of Your Medicine &
      <br className="max-md:hidden" />
<<<<<<< HEAD
      <span className="orange_gradient text-center">Put Your Mind at Ease</span>
=======
      <span  className="orange_gradient text-center">Put Your Mind at Ease</span>
>>>>>>> 17e1b51f5bafa9bda9911bf99ebe70f3bda2a1d7
     </h1>
     <p className="Desc text-center">
      Medtrac is an app that helps you keep track of your daily Medicne intake!
     </p>
      <Feed/>
  </section>
)

}
export default Home