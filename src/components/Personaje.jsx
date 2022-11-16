import { Link } from "react-router-dom";


export default function Personaje() {
	
	const queryString = window.location.href.toString()
	const id = queryString.slice(queryString.indexOf('e/')+2,queryString.length)
	console.log(id)
	const personajes = JSON.parse(localStorage.getItem('V1'))
	const persona = personajes.find((person) => person.login.md5 == id)
	// personaje = personajes.id.		Object.values(personajes).filter(value => personajes[id.value] === id)
	// 
	return (
    <>	
		<div className="w-3/5 self-center mt-36 p-6 pb-9 bg-bckg rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
			<div className='flex flex-col w-full '>
				<div className="flex text-center justify-center mb-4 relative">
					<h2 className="text-xl font-bold">{persona.name.first} {persona.name.last}</h2>
				</div>
				<hr />
			</div>
			<div className="flex p-2 justify-center mt-5">
				<img src={persona.picture.large} width={200} />
			</div>
				<h5>Age: {persona.dob.age}</h5>
				<h5>Country: {persona.location.country}</h5>
				<h5>Phone: {persona.phone}</h5>
				<h5>Email: {persona.email}</h5>
				<h5 className="text-center m-4">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ut natus enim deleniti velit atque provident laudantium ex eligendi ipsam blanditiis recusandae fuga, distinctio tempora molestiae quibusdam sequi rem. Fugiat nihil minima aliquid architecto. Atque officia, eius, in sint qui quae odio ad dolorem architecto porro sequi eos, nihil illum?
				</h5>
				<button
					className="bg-primary hover:bg-blue-400 hover:drop-shadow-xl text-white font-bold py-2 px-4 mt-5 rounded-full w-24"
				>
					<Link to={`/`}>
						Volver
					</Link>
				</button>
		</div>    
    </>
	)
}