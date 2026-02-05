import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

const prisma = new PrismaClient()

// Carrega variáveis de ambiente
dotenv.config();

async function seed() {
    console.log('🌱 Iniciando seed do banco de dados...');

    // Configurações do admin via .env
    const adminMatricula = process.env.ADMIN_MATRICULA || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const adminNome = process.env.ADMIN_NOME || 'Administrador do Sistema';
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@sigflux.gov.br';
    const adminCpf = process.env.ADMIN_CPF || '000.000.000-00';
    const adminTelefone = process.env.ADMIN_TELEFONE || '(00) 00000-0000';
    const adminCargo = process.env.ADMIN_CARGO || 'Administrador';

    // Hash da senha
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Verifica se o admin já existe
    const existingAdmin = await prisma.user.findUnique({
        where: { matricula: adminMatricula }
    });

    if (existingAdmin) {
        console.log('⚠️  Usuário admin já existe. Atualizando...');
        
        await prisma.user.update({
            where: { matricula: adminMatricula },
            data: {
                nomeCompleto: adminNome,
                email: adminEmail,
                cpf: adminCpf,
                telefone: adminTelefone,
                cargo: adminCargo,
                password: hashedPassword,
            }
        });
        
        console.log('✅ Usuário admin atualizado com sucesso!');
    } else {
        // Cria o usuário admin
        await prisma.user.create({
            data: {
                nomeCompleto: adminNome,
                cpf: adminCpf,
                email: adminEmail,
                matricula: adminMatricula,
                telefone: adminTelefone,
                cargo: adminCargo,
                password: hashedPassword,
            }
        });
        
        console.log('✅ Usuário admin criado com sucesso!');
    }

    console.log('\n📋 Credenciais do admin:');
    console.log(`   - Matrícula: ${adminMatricula}`);
    console.log(`   - Senha: ${adminPassword}`);
    
    console.log('\n✅ Seed concluído com sucesso!');
}

seed()
    .catch((error) => {
        console.error('❌ Erro no seed:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
