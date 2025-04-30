import Feed from "@components/Feed";

const Home = () => {
<<<<<<< HEAD
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Keep Track of Your Medicine &
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          Put Your Mind at Ease
        </span>
      </h1>
      <p className="Desc text-center">
        Medtrac is an app that helps you keep track of your daily medicine intake!
      </p>
      <Feed />
    </section>
  );
};
=======
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
>>>>>>> 647f8256c2ec7750aa42ec2c92a534e5aa53da50

export default Home;
