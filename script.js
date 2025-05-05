


let quoteEle = document.getElementById("quote");
        let author = document.getElementById("author");

        async function quoteAPI() {
            try {
                let response = await fetch("https://zenquotes.io/api/random");
                
                
                let quote = await response.json();
                quoteEle.innerHTML = quote.content;
                author.innerHTML = "-- " + quote.author;
            } catch (error) {
                quoteEle.innerHTML = "An error occurred while fetching the quote.";
                author.innerHTML = "";
                console.error("Error fetching quote:", error);
            }
        }

        document.getElementById("getquote").onclick = quoteAPI;