import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,       // Somente permite propriedades que são decoradas com decorators no DTO
    transform: true,       // Transforma o payload para ser uma instância do DTO
    forbidNonWhitelisted: true, // Lança um erro quando o payload contém qualquer propriedade não permitida no DTO
    disableErrorMessages: false  // Pode ser configurado para true para desabilitar mensagens de erro detalhadas em produção
  }));
  
  await app.listen(3000);
}
bootstrap();
