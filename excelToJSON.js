
let selectedFile

document.getElementById("fileUpload").addEventListener("change", (event) => {
    selectedFile = event.target.files[0]
})
document.getElementById("uploadExcel").addEventListener("click", () => {
    if (selectedFile) {
        console.log("dale")
        let fileReader = new FileReader()
        fileReader.onload = function(event) {
            let data = event.target.result

            let workbook = XLSX.read(data, {
                type: "binary"
            })
            workbook.SheetNames.forEach(sheet => {
                // Escolher a planilha
                sheet1 = workbook.SheetNames[0]
                sheet2 = workbook.SheetNames[1]
                
                let rowObject = XLSX.utils.sheet_to_row_object_array(
                    workbook.Sheets[sheet1]
                    
                );

                    var jsonObject = JSON.stringify(rowObject, null, "\t")

                    document.getElementById("jsonData").innerHTML = jsonObject
                    console.log("JSON", jsonObject)
                    console.log("ROW", rowObject)
            })
            
        }
        fileReader.readAsBinaryString(selectedFile)
    }
})