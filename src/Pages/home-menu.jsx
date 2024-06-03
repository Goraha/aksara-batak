
const HomeMenuPage = () => {
	return(
		<div className="flex flex-col h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
				<div className="flex item justify-center w-full">
					<h1 className="text-3xl font-bold mb-2 text-white my-2">Aksara Batak</h1>
				</div>
				<div className="flex w-full h-full items-center justify-center">
					<div className="w-1/2">
						<div className="grid grid-cols-2 gap-4">
							<div className="flex items-center justify-center h-32 rounded-md bg-indigo-950 cursor-pointer 
							transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 
							hover:scale-110 hover:bg-indigo-900 duration-300"
							onClick={() => {window.location.href = "/aksara-simalungun"}}>
								<p className="text-white text-md">Aksara Toba</p>
							</div>
							<div className="flex items-center justify-center h-32 rounded-md bg-indigo-950 cursor-pointer 
							transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 
							hover:scale-110 hover:bg-indigo-900 duration-300"
							onClick={() => {window.location.href = "/aksara-simalungun"}}>
								<p className="text-white text-md">Aksara Simalungun</p>
							</div>
							<div className="flex items-center justify-center h-32 rounded-md bg-indigo-950 cursor-pointer 
							transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 
							hover:scale-110 hover:bg-indigo-900 duration-300"
							onClick={() => {window.location.href = "/aksara-simalungun"}}>
								<p className="text-white text-md">Aksara Karo</p>
							</div>
							<div className="flex items-center justify-center h-32 rounded-md bg-indigo-950 cursor-pointer 
							transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 
							hover:scale-110 hover:bg-indigo-900 duration-300"
							onClick={() => {window.location.href = "/aksara-simalungun"}}>
								<p className="text-white text-md">Aksara Angkola</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center fixed inset-x-0 bottom-0">
					<p className="text-white text-sm">Copyright © {new Date().getFullYear()} G.A_Purba</p>
				</div>
		</div>
		
	)
}
export default HomeMenuPage