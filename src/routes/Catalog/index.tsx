import DSCHeader from "../../components/Header";
import DSCSearchBar from "../../components/SearchBar";

export default function Catalog() {
    return (
        <>
            <DSCHeader />
            <main>
                <section id="catalog-section" className="dsc-container">
                    <DSCSearchBar />

                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src="images/computer.png" alt="Computer" />
                            </div>
                            <div className="dsc-catalog-card-bottom">
                                <h3>R$ 5000,00</h3>
                                <h4>
                                    Computador Gamer XT
                                </h4>
                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src="images/computer.png" alt="Computer" />
                            </div>
                            <div className="dsc-catalog-card-bottom">
                                <h3>R$ 5000,00</h3>
                                <h4>
                                    Computador Gamer XT com suporte e 16GB de memória e processador
                                    turbo plus
                                </h4>
                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src="images/computer.png" alt="Computer" />
                            </div>
                            <div className="dsc-catalog-card-bottom">
                                <h3>R$ 5000,00</h3>
                                <h4>
                                    Computador Gamer XT
                                </h4>
                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src="images/computer.png" alt="Computer" />
                            </div>
                            <div className="dsc-catalog-card-bottom">
                                <h3>R$ 5000,00</h3>
                                <h4>
                                    Computador Gamer XT
                                </h4>
                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src="images/computer.png" alt="Computer" />
                            </div>
                            <div className="dsc-catalog-card-bottom">
                                <h3>R$ 5000,00</h3>
                                <h4>
                                    Computador Gamer XT
                                </h4>
                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src="images/computer.png" alt="Computer" />
                            </div>
                            <div className="dsc-catalog-card-bottom">
                                <h3>R$ 5000,00</h3>
                                <h4>
                                    Computador Gamer XT
                                </h4>
                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src="images/computer.png" alt="Computer" />
                            </div>
                            <div className="dsc-catalog-card-bottom">
                                <h3>R$ 5000,00</h3>
                                <h4>
                                    Computador Gamer XT
                                </h4>
                            </div>
                        </div>
                        <div className="dsc-card">
                            <div className="dsc-catalog-card-top dsc-line-bottom">
                                <img src="images/computer.png" alt="Computer" />
                            </div>
                            <div className="dsc-catalog-card-bottom">
                                <h3>R$ 5000,00</h3>
                                <h4>
                                    Computador Gamer XT
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="dsc-btn-next-page">Carregar mais</div>
                </section>
            </main>
        </>
    );
}