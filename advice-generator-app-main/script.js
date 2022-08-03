function main() {
    const getAdvice = async () => {
        try {
            const getData = await axios.get("https://api.adviceslip.com/advice");
            const resData = await getData.data.slip;
            render(resData);
        } catch (error) {
            console.log(error);
        }
    }

    const render = (advice) => {
        const title = document.querySelector(".advice-id");
        const text = document.querySelector(".advice-text");
        title.innerHTML = advice.id;
        text.innerHTML = advice.advice;
    }

    document.addEventListener("DOMContentLoaded", () => {
        getAdvice();
    });
}

(main())