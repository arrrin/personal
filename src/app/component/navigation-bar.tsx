import ContactButton from "./button"

export default function NavigationBar() {
  const navigationList = [
    {link:'',name:'About me'},
    {link:'',name:'Experience'},
    {link:'',name:'Education'},
    {link:'',name:'Technology'},
  ]
  return (
    <header className="sticky flex flex-col shadow-sm  shadow-blue-900 border-b-[0.5px] border-gray-700 p-3 ">
    <ul className="flex flex-row">
      <span className="self-center">Logo</span>
      <div className="inline-flex gap-x-10 ml-auto">
      {
        navigationList.map((l)=>{
          return <li className="flex items-center cursor-pointer hover:text-blue-500 transition-colors hover:underline" key={l.name}><a>{l.name}</a></li>
        })
      }
      <ContactButton></ContactButton>
      </div>
    </ul>

    </header>
  )
}
