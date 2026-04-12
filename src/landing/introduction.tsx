import { NeolitComponent } from "@ubs-platform/neolit/core";

export class Introduction extends NeolitComponent {
    render(): HTMLElement {
        return <div className="h-full flex flex-col items-center justify-center gap-4">
            <img src="/assets/logo.svg" alt="Neolit Logo" className="w-32 h-32" />
            <h1 className="text-4xl font-bold">Neolit</h1>
            <p className="text-lg text-gray-600">Neolit, modern web uygulamaları geliştirmek için tasarlanmış bir bileşen tabanlı framework'tür. Hızlı, esnek ve güçlü yapısıyla projelerinizi kolayca oluşturmanıza olanak tanır.</p>
            <div className="flex">
                <div>
                    <h3 className="text-2xl font-semibold">Hızlı Geliştirme</h3>
                    <p className="text-gray-600">Neolit, bileşen tabanlı mimarisi sayesinde hızlı ve verimli bir geliştirme deneyimi sunar.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold">Esnek Yapı</h3>
                    <p className="text-gray-600">Neolit, esnek yapısı sayesinde farklı projelerde kolayca uyarlanabilir ve genişletilebilir.</p>
                </div>
            </div>
            <p className="text-lg text-gray-600">Hemen başlayın ve Neolit'in sunduğu avantajları keşfedin!</p>
        </div>;
    }
}