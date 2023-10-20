
import toast from 'react-hot-toast';
import { MdMarkEmailRead} from 'react-icons/md';
const Subscribe = () => {
   
    let handleSubscribe=e=>{
e.preventDefault();
e.target.email.value=''
toast.success('Thanks for Subscribing')
    }
  return (
    <div className="bg-[#4747476e] mt-32 py-14  px-2 -z-10">
      <section className="container mx-auto">
        <h1 className="lg:text-6xl text-3xl font-bold text-[#802828] text-center drop-shadow-lg	">
          NEWS<span className="text-[#0f3020]">LETTER</span>
          
        </h1>
        <p className="text-[#fc044e52] text-center lg:text-lg text-sm p-2">keep up to date to our latest news and evennts.Subscribe our newsletter</p>
      
            <form onSubmit={handleSubscribe} className="flex items-center overflow-hidden border rounded-lg shadow-xl lg:w-96 mt-10 mx-auto">
            <input type="email" placeholder="email@example.com" required name="email" id="email"  className="border-0 outline-none border-b-2 border-[#8a3636]  text-[#0d271a] focus:border-[#4c89c2] w-[80%] p-4 lg:p-3"/>
        <button className=" text-[#103121] hover:text-[#532323]" type="submit"><MdMarkEmailRead className="text-5xl"></MdMarkEmailRead></button>
            </form>
      </section>
    </div>
  );
};

export default Subscribe;
