class Forma {
    private nome: string = "";

    public constructor(nome: string) {
        this.setNome(nome);
    }

    public getArea(): number {
        return 0;
    }

    public getPerimetro(): number {
        return 0;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }
}

class Retangulo extends Forma {
    private largura: number;
    private altura: number;

    public constructor(nome: string, largura: number, altura: number) {
        super(nome);
        this.largura = largura;
        this.altura = altura;
    }

    public getArea(): number {
        return this.largura * this.altura;
    }

    public getPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}

class Circulo extends Forma {
    private raio: number;

    public constructor(nome: string, raio: number) {
        super(nome);
        this.raio = raio;
    }

    public getArea(): number {
        return Math.PI * this.raio * this.raio;
    }

    public getPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

const retangulo = new Retangulo("Retangulo", 3, 4);
const circulo = new Circulo("Circulo", 5);

console.log(retangulo.getArea());
console.log(circulo.getPerimetro());

const formas: Forma[] = [retangulo, circulo];

formas.forEach((forma) => {
    console.log(forma.getNome() + " Area: " + forma.getArea());
});
