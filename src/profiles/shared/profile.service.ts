import { Injectable } from '@nestjs/common';
import { Profile } from './profile';

@Injectable()
export class ProfileService {
    profiles: Profile[] = [
        { id: 1, 
          nome: 'João das Couves', 
          endereco: 'Rua Mato Grosso, 35',
          telefone: '568457789',
          habilidade: 'C#, .Net, Cobol, Angular - C#, .Net, Cobol, Angular - C#, .Net, Cobol, Angular - C#, .Net, Cobol, Angular',
          experiencia: 'Analista de Sistemas ma empresa XPTO Analista de Sistemas ma empresa XPTO Analista de Sistemas ma empresa XPTO Analista de Sistemas ma empresa XPTO Analista de Sistemas ma empresa XPTO' },
        { id: 2, 
            nome: 'Manoel das Flores', 
            endereco: 'Rua Mato Grosso, 35',
            telefone: '568457789',
            habilidade: 'C#, .Net, Cobol, Angular - C#, .Net, Cobol, Angular - C#, .Net, Cobol, Angular - C#, .Net, Cobol, Angular',
            experiencia: 'Analista de Sistemas ma empresa XPTO Analista de Sistemas ma empresa XPTO Analista de Sistemas ma empresa XPTO Analista de Sistemas ma empresa XPTO Analista de Sistemas ma empresa XPTO' },
        { id: 3, 
            nome: 'Maria José', 
            endereco: 'Rua Mato Grosso, 35',
            telefone: '568457789',
            habilidade: 'C#, .Net, Cobol, Angular - C#, .Net, Cobol, Angular - C#, .Net, Cobol, Angular - C#, .Net, Cobol, Angular',
            experiencia: 'Analista de Sistemas ma empresa XPTO Analista de Sistemas ma empresa XPTO Analista de Sistemas ma empresa XPTO Analista de Sistemas ma empresa XPTO Analista de Sistemas ma empresa XPTO' },
    ];

    getAll() {
        return this.profiles;
    }

    getById(id: number){
        const profile = this.profiles.find((value) => value.id == id);
        return profile;
    }     
}
