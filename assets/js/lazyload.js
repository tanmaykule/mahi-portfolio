async function lazyload() {
    const imagesParentDiv = document.getElementsByClassName("lazyload")[0]
    await new Promise(r => setTimeout(r, 1000))
    const images = [...imagesParentDiv.children]
    images.forEach(image => {
        image.classList.add("opacity-0")
        image.classList.add("h-[500px]")
    })
    const options = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1
    }
    var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const imgDiv = entry.target
                const img = imgDiv.getElementsByTagName("img")[0]
                if(img.complete) {
                    imgDiv.classList.add("fade-up")
                    imgDiv.classList.remove("opacity-0")
                    imgDiv.classList.remove("h-[500px]")
                }
                else {
                    img.onload = () => {
                        imgDiv.classList.add("fade-up")
                        imgDiv.classList.remove("opacity-0")
                        imgDiv.classList.remove("h-[500px]")
                    }
                }
                observer.unobserve(img);
            }
        })
    }, options)
    images.forEach(image => observer.observe(image))
}