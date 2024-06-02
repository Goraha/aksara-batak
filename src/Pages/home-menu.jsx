import Button from "../components/Elements/Button"

const HomeMenuPage = () => {
	return(
		<div className="flex justify-center">
			<div className="flex flex-col w-1/2 border border-gray-500 rounded-xl p-5 m-2">
				<Button variant="bg-red-500" type="button" onClick={() => {window.location.href = "/aksara-toba"}}>
					Aksara Toba
				</Button>
				<Button variant="bg-red-500" type="button" onClick={() => {window.location.href = "/aksara-simalungun"}}>
					Aksara Simalungun
				</Button>
				<Button variant="bg-red-500" type="button" onClick={() => {window.location.href = "/aksara-toba"}}>
					Aksara Karo
				</Button>
			</div>
		</div>
	)
}

export default HomeMenuPage