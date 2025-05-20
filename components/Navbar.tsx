import Link from "next/link";

/*
const Navbar = () => {
    return (
        <div>
      <h1 className="font-bold text-3xl absolute left-[35px]">Home</h1>
        <div className="hairline-h absolute left-[0px] top-[45px]"></div>
        <div className="hairline-v absolute top-[0px] left-[150px]"></div>
        <div className="w-[150px] h-[800px] absolute top-[50px] bg-transparent">
              <ul className="hidden md:flex flex-col gap-5 text-white items-center">
                <li className="rounded-lg"> 
                <Link href="home/dms">
                    <p>DMs</p>
                  </Link>
                </li>
                <li className="rounded-lg">
                  <Link href="home/groups">
                    <p>Groups</p>
                  </Link>
                </li>
              </ul>
              <button />
        </div>
        </div>
    );
  };*/

  const Navbar = ({page}:{page: number}) => {
    return (
      <>
        <div className="w-full h-20 sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              <ul className="hidden md:flex gap-x-6 text-white">
                <li className={page == 2 ? "bg-gray-400" : ""}>
                  <Link href="/home/dms">
                    <p>Dms</p>
                  </Link>
                </li>
                <li className={page == 1 ? "bg-gray-400" : ""}>
                  <Link href="/home/groups">
                    <p>Groups</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

/*
  const Navbar = () => {
    return (
      <div className=" overflow-auto border border-gray-300">
      <div className="grid grid-cols-3 gap-2 p-2">
      <button className="container-item" onClick={() => redirect("/auth")}>
<div className="absolute left-0/0 bottom-1/3">
<h1 className="text-xl">Group 1</h1>
<p >This is the description of Group 1</p>
</div>
      </button>
     
      </div>
    </div>
    )
  }
  */
    export default Navbar;

    