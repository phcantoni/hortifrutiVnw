import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    hortifruti: [
      {
        imagem: "https://s3-alpha-sig.figma.com/img/a266/54a7/1472f8dc7d5149a1fd409a3048dcb7d5?Expires=1678665600&Signature=BGgKwH0guY1QP4yHdyvgSxZJAuF1hR9y-VwkEJZzTL0T9wxqDjild04t5macBjd6F3Y6mM8dsrw8LKzP4Z9Qet0adjipJ3rKwIgScLG2hTD1TzhTV6vANO0slRpk0eHeb5l04p3539pIlvCjwcI7jyYJ~jy7DjMIQXHYJO-ferXlekKr9ShdeoymhM1ySdHYw2y5~wPv~COI0KkJpE1PAqB2CxoFiydue4Wroc-izU7y02bdP63IfUWld5T7EkcsSmtOSzGsBHSP73Q4oxD160enmtN3p24RGT9rVCkMII9P5f5IF8gF3Bul99Y~H5no12X-tCRqj8UdmdWdNJyNUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      },
      {
        imagem: "https://s3-alpha-sig.figma.com/img/571a/0c88/1f40edbb241bafa2fa318651f0a481de?Expires=1678665600&Signature=Hq3M30Gfvum7TjQZ2U8w1-uHnB-wGAtAUNfaunDKbX2vLhl~KeZik-rkN1~pODXaIBjCL88K1y2XvasefwzP0h-uaNFZTQdrKnBV5nzOCORwhliMMjzeRv69Q5XG4evowk~h6DE~NPpwY6FYSljril2bmP7IahImSPm9E6n1k9MlNApe~Jy23HF3dGZNRQpMKECnK709owdkMYv7dV33MwJli~e-WC8H1V1EwXI-G-ueXC-AInwKIOlVau0Fodyf9L3-bGdu6h-ZO5g87AVh~DeFBX1b5XLruL0yw1TbAlEeZF7ppJ7gFdCv2~lB2nWVHqqTEwXQBspxyW580NypkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      },
      {
        imagem: "https://s3-alpha-sig.figma.com/img/2209/62ef/1ed832ee2d4bfa891ca9b84f326433d8?Expires=1678665600&Signature=blCQzp77ctkDZ7jy7PIKANdxvNa0ADQtvB6KmfRVO1c6uYnRVbB77Ls4BYYhBE7r-4C-kY6uvA0X1BXVcrNUF8DlqRaiSRgYPqbWZesGfJrZZCsqrO1SfV2GpdqVItpNYvoGB5fnKZRpY6YWKiKGTtYi1jnePj5kb6BX2HFpcDiCwkjql2ll6mYJm95rdD-KcYNB0E3AOj51E2S45VEaNXet-rCD4pAu6YFTRr-75g1Lcyg4JQ7EtU1kPMNmL56IGyOwgyzPzrUSVPeLnBqubbqd9Qxe6Ktjk8nAhQ~g-K~P-LW3~mV2pYPmy7TRO8mXgAqgg39BWc1ZBPfPVLY6PA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      },
      {
        imagem: "https://s3-alpha-sig.figma.com/img/6a47/44c6/99ab5bc00d689be76a75f467bf4c8d49?Expires=1678665600&Signature=UcqbFrPnO~dm5qZdvilb2cno6gXJXbzjeXAw5i-utJdAaUcop3kGzARBx8SurRf~guJ5GmU-qBXYOkGgfx2ZQhLvoMQUOPrLZJYJGlPYrWv2~LqF~ZeY6k3ukHKaX0ACu~puNJZ8kM2iewaZPduPY9EMV-ZSGwGw4KKjpEE-nPgu5Z3-IQleRa-S6e9RRKERQW4V54Ief3tSh2G40xoCoUx4Du6Bou6PoXaZqJJOJNDMkvNxvoELPEUMa7GBv7oDBzs8RBlUYL4ZqFG-DXKnxkU5RO68e0fqWUI6qhf723JY5nChyVEaNCjUrBo7YGggWKF91t8CvoZsQ2GivilGvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      },
      {
        imagem: "https://s3-alpha-sig.figma.com/img/8a6b/4f81/24b5bd7e0c624a1522f7647ce13c5ed0?Expires=1678665600&Signature=Oul8cDJ73IzYeurkkjpXSIQnrgnpTFwWaON0s3438tjEvLL7bhSKN-289MPCahg0HlXQG6Z7RIVIFkcCzgrwBNCaErI-V~Vx75fAoCQXxjv-2q3xZusDovk7jGGig65VAAQLT6TywYQhRjbDfGgZKkL4CZ0ypbO82EYtzgB598k-2nIftOUJKq10NeX3ZZ6bR1IyM7HILMjfGLYMMKXX4P9~AU9o~63xs5CuWnt6EIaaNMQbspoIlACPMhc23MzcAVj3V5gEJLojXVSMcgr2y9POmDMh83Xw6G~M1Jv1w0fVD0OwL31wHN98F9vDqoDxOUZGnog9MMxcZ86PAGZmDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      },
      {
        imagem: "https://s3-alpha-sig.figma.com/img/a143/4960/b6820744c5e12cbd078a8ab86cf209f4?Expires=1678665600&Signature=bM0e4O6Pps3SWnBkTbhc7dpnQqFr8aBPNQuPm7yZmQoNOm3VZHaItpcYL2ytCo8nDGvR~E2yzRI0Ze79opr2OOcYPwrFtnJ3dmFStVWvMk-5ej1Myauc4MMNt6JJqQQSgGdl1gkk5KnnPymNa3c-~XdFoaEDb3occNKNtfb8SBfBkp-c8dja-Yv6Ctx-RfIqs74uH6X5ToiqDH4VXVlF~Oi~3xD0xPqzZ5~eu0rZu4eW~PbY3NySq7mxJWaC~QTMnjdpuJRh-4oPH-iSRKon1tZTQ2f3jV3090gHxDzjmI8GO8Oa55hStZpfOJqHrXKvrw9AiCRSjMVfBhSnmDRHVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      },
      {
        imagem: "https://s3-alpha-sig.figma.com/img/20fe/986a/db5d0df313cc370b5c91706d16458129?Expires=1678665600&Signature=X5JVQ9JqIZoxDBoRuvhAth0hgLmXCYEOozseReHstdFMjzmviJ9-gwrV~C4ZuwaN5cMQd2XvmndHCVXcylT-KvNRRo~2Z3tTkIxFdDQHLeB8fEmdklY0-DT8ZwNZVtJgP5vUAKy4eF1bdFnm1Qo4POZUYznfrHr9HXCK50WFDdzrXE9f8VmRKs1sCDcljrFR6Ec3oQ6JM1R7j~~4hHvIohEIDTMHuUbfIqp~DqJeOoBGVFPWzausMfJPazN~jSc0CSqFv~TaYGCBx3pku2V2UwWDSUHuhqKLqug3HM6sjOYo~h3BvN4C8-Rh5ZFj4rZoiQy5YJ700v817pA6PGuwgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      },
      {
        imagem: "https://s3-alpha-sig.figma.com/img/70a5/7c98/082ad83eb1c82169ee159824213b5e19?Expires=1678665600&Signature=G9lQ5Gy16VMUDVYfoPTwBfTHnxaemdbq8hHVBUKlCidmVH0az0bzEeMh8qrH9h0lGoE56sJHZHu0HM5ANrnX1vR2xkRI7WAzJTP0P3zL21O605Ewk7TFwxKJuvAx7Q4CuCNJv--6mrAqGHaIjmCUOkaNAaV9PpDf4a~y2nyoAlt2YXJoQqCFoQPMbiEyEKIioI1E9bhn9YJ1bQ2zdbD8fQeP7oys0ouc9ZL~7SVx9R-Dyw43SweL-Dko35oYmjA8V8a4Rc74Hthf9t8ryb1n-DgKcan7TTOwOd36b5GRPZQY~YaTlKPs5UVI4iNOtwgCZr1K3R7HvRD3oOOtTxAy4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      }
    ]
  }

  render () {
    return(
      <>
        <header>
            <h1>Hortifruti</h1>
            <h2>VnW</h2>
        </header>
        <main>
          <section className="firstSectionMain">
              <h2>Nossos produtos</h2>
              <div>
              {this.state.hortifruti.map ((item) => (
                  <img src={item.imagem}/>
                  ))}
              </div>
          </section>
          <section className="secondSectionMain">
              <div>
                <img src="https://github.com/matEvangelista/vnw-hortifruti/blob/master/src/assets/ShoppingCart.png?raw=true"></img>
                <p>Arraste seu produto aqui para colocar no carrinho</p>
              </div>
              <div>
                <button>+</button>
                <button>-</button>
              </div>
          </section>
        </main>
        <footer>
          <p>Paulo Henrique de Albergaria Cantoni</p>
        </footer>
      </>
    )
  }
}

export default App;
