function upload() {

    var postBookRequest = new XMLHttpRequest();
    var url = "http://localhost:17854/api/books";
    postBookRequest.open("POST", url, true);
    postBookRequest.setRequestHeader("Content-type", "application/json");

    var isbn = document.getElementById('isbn').value;
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var date = document.getElementById('date').value;

    var json = {
        isbn: isbn,
        title: title,
        author: author,
        imageURL: "",
        downloadURL: "",
        publishedDate: date
    };

    postBookRequest.onreadystatechange = function () {
        if (postBookRequest.readyState === 4 && postBookRequest.status === 200) {
            var postBookJSON = JSON.parse(postBookRequest.responseText);
            console.log("SUCCESS");
            console.log(postBookJSON);

            

            var postImageRequest = new XMLHttpRequest();
            postImageRequest.open('POST', url, true);

            postImageRequest.onreadystatechange = function () {
                if (postImageRequest.readyState === 4 && postImageRequest.status === 200) {
                    var postImageJSON = JSON.parse(postImageRequest.responseText);
                    console.log("SUCCESS");
                    console.log(postImageJSON);
                }

            };
            postImageRequest.onerror = function (error) {
                console.log(error);
            };
            postImageRequest.send(formData);
        }
        else if (postBookRequest.readyState === 4 && postBookRequest.status === 400) {
            postBookJSON = JSON.parse(postBookRequest.responseText);
            console.log("FAILURE");
            console.log(postBookJSON);
        }
        else if (postBookRequest.readyState === 4 && postBookRequest.status === 404) {
            postBookJSON = JSON.parse(postBookRequest.responseText);
            console.log("FAILURE");
            console.log(postBookJSON);
        }
    };

    postBookRequest.send(json);
    
}