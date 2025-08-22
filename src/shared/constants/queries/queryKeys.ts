export const queryKeys = {
    users: {
        all: ["users"] as const,
        details: (id: string) => ["users", id] as const,
    },
    products: {
        all: ["products"] as const,
        details: (id: string) => ["products", id] as const,
    },
};

//? Configuración de Query Keys (diccionario)
//! Este solo es un ejemplo de cómo estructurar las claves de consulta