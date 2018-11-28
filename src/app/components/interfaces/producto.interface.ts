 import { Categoria} from '../../components/interfaces/categoria.interface';
// import { TipoEmpaque} from './tipoEmpaque.interface';
export interface Producto {
    'codigoProducto': number;
    'descripcion': string;
    'imagen': string;
    'categoria': Categoria;
    // 'codigoTipoEmpaque': TipoEmpaque;
}