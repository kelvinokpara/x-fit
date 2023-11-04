import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-coltainer flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-ue"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for<span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div>
        <input type="text" placeholder="subscribe@xfit.com" className="input" />
        <div>
          <Button label={"sign Up"} />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
