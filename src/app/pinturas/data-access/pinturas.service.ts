import { inject, Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, orderBy, where } from '@angular/fire/firestore';

export interface Pintura {
    id: number,
    precio: number,
    thumbnailurl: string,
    titulo: string
}

const PATH = 'pintura';

@Injectable({
    providedIn: 'root',
})
export class PinturasService {
    private _firestore = inject(Firestore);
    private _collection = collection(this._firestore, PATH);

    async getPinturas(): Promise<Pintura[]> {
        try {
            const querySnapshot = await getDocs(query(this._collection, orderBy('titulo')));  // Agregar 'orderBy' si necesitas ordenarlos
            const pinturas: Pintura[] = [];

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                pinturas.push({
                    id: data["id"],
                    precio: data["precio"],
                    thumbnailurl: data["thumbnailurl"],
                    titulo: data["titulo"],
                });
            });

            return pinturas;
        } catch (error) {
            console.error('Error al obtener las pinturas:', error);
            return [];
        }
    }

    async getPinturaById(id: number): Promise<Pintura | null> {
        try {
            const querySnapshot = await getDocs(
                query(this._collection, where('id', '==', id))
            );

            if (querySnapshot.empty) {
                console.warn(`No se encontró ninguna pintura con el ID: ${id}`);
                return null;
            }

            const doc = querySnapshot.docs[0];
            const data = doc.data();

            return {
                id: data['id'],
                precio: data['precio'],
                thumbnailurl: data['thumbnailurl'],
                titulo: data['titulo'],
            };
        } catch (error) {
            console.error(`Error al obtener la pintura con ID ${id}:`, error);
            return null;
        }
    }
}
