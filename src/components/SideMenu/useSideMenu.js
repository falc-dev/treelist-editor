import { useRecoilCallback } from 'recoil';
import { fileState } from "stores/file";

export default () => {
    const loadFile = useRecoilCallback(({ set }) => () => {
        var a = document.createElement("input")
        a.style = "display: none"
        document.body.appendChild(a)
        a.type = "file"
        a.addEventListener('change', (ev) => {
            let extfile = ev.target.files[0]
            const reader = new FileReader()
            reader.onload = (e) => {
                let data = JSON.parse(e.target.result)
                set(fileState, data);
            }
            reader.readAsText(extfile)
            a.parentNode.removeChild(a)
        })
        a.click();
    });

    const saveFile = useRecoilCallback(({ snapshot }) => () => {
        var a = document.createElement("a")
        document.body.appendChild(a)
        a.style = "display: none"
        const store = snapshot.getLoadable(fileState).contents
        var json = JSON.stringify(store)
        var blob = new Blob([json], {type: "octet/stream"})
        var url = window.URL.createObjectURL(blob)
        a.href = url
        a.download = 'treeFile.txt'
        a.click()
        window.URL.revokeObjectURL(url)
        a.parentNode.removeChild(a)
    });

    return {
        loadFile,
        saveFile
    }
}