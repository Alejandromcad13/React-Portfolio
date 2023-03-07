import AnchorLink from "react-anchor-link-smooth-scroll"


const DotGroup = ({selectedPage, setSelectedPage}) => {
    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
    const pages = ['home', 'skills' ,'projects', 'contact'];
  return (
    <div className="flex flex-col gap-6 fixed top-[50%] right-7">
        {pages.map((p) => {
            return <AnchorLink className={`${selectedPage === p ? selectedStyles : 'bg-dark-grey'} w-3 h-3 rounded-full hover:text-yellow transition duration-500`} 
             href={`#${p}`}
             onClick={()=> setSelectedPage(p)} />
        })}

    </div>
  )
}

export default DotGroup;