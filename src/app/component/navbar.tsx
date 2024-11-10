import Link from "next/link";

function Navbar(){
    return(
        <div className="">
<ul className="flex justify-end gap-5 bg-slate-700 text-white p-3">
        <li className="hover:text-slate-400 text-xl font-bold"><Link href="\">Home</Link></li>
        <li className="hover:text-slate-400 text-xl font-bold"><Link href="\About">About Me</Link></li>
        <li className="hover:text-slate-400 text-xl font-bold"><Link href="\Skills">Skills</Link></li>
        <li className="hover:text-slate-400 text-xl font-bold"><Link href="\Portfolio">Portfolio</Link></li>
        <li className="hover:text-slate-400 text-xl font-bold"><Link href="\Contact">Contact</Link></li>
      </ul>
        </div>
    )
}
export default Navbar;