import { ipcRenderer } from 'electron'

const useIpc = () => {
	const getFile = () => {
		ipcRenderer
			.invoke('getFileFromDisk')
			.then((res) => {
				console.log(res)
			})
			.catch((err) => console.log(err))
	}

	return {
		getFile: getFile,
	}
}

export default useIpc
