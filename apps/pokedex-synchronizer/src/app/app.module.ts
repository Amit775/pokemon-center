import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokedexSynchronizerService } from './services/pokedex-synchronizer.service';
import { PokemonTransformerService } from './services/pokemon-transformer.service';
import { PokedexElasticsearchService } from './services/elasticsearch.service';
import { SyncPokedexCommand } from './commands/sync.command';
import { elasticsearchConfig } from './config/elasticsearch.config';

@Module({
	imports: [CommandModule, ElasticsearchModule.register(elasticsearchConfig)],
	controllers: [AppController],
	providers: [AppService, PokedexSynchronizerService, PokemonTransformerService, PokedexElasticsearchService, SyncPokedexCommand],
})
export class AppModule {}
