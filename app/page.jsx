import Feed from "@components/Feed";


const Home = () => {
    return(
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
     Keep Track of Your Medicine &
      <br className="max-md:hidden" />
      <span  className="purple_gradient text-center">Put Your Mind at Ease</span>
     </h1>
     <p className="Desc text-center text-white">
      Medtrac is an app that helps you keep track of your daily Medicine intake!
     </p>
      <Feed/>
  </section>
)

}
export default Home