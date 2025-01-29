import Form from "../components/Form";

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center gap-[35px] text-center   font-garet overflow-hidden">
      {/* Logo and Title */}
      <div className="flex flex-col items-center justify-center ">
        <img
          className="w-[155px] h-[85px] object-cover"
          alt="Logo"
          src="/logo-frame@2x.png"
        />
        <div className="font-poppins tracking-[0.01em] text-mini1 sm:text-sm md:text-sm lg:text-sm xl:text-sm w-full text-center mt-2">
          Welcome to my store
        </div>
      </div>

      {/* Form */}
      <Form />

      {/* Powered by Samparka */}
      <div className="flex flex-row items-center justify-center gap-[5px] z-[6] text-right text-3xs1 text-darkslategray-100 font-poppins mt-8">
        <div className="relative">Powered By</div>
        <div className="flex flex-col items-start justify-start">
          <a
            className="[text-decoration:none] w-[83px] h-[11.5px] bg-[url('/public/samparka-16-5@3x.png')] bg-cover bg-no-repeat bg-[top]"
            href="https://www.samparka.info/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Powered by Samparka"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
