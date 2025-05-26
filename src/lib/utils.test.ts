describe('Funções utilitárias', () => {
    it('deve retornar verdadeiro para 1 + 1 igual a 2', () => {
        expect(1 + 1).toBe(2);
    });

    it('deve retornar falso para 1 + 1 diferente de 3', () => {
        expect(1 + 1).not.toBe(3);
    });
});