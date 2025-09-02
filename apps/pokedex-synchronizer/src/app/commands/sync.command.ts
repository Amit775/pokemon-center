import { Command, CommandService } from 'nestjs-command';
import { Injectable, Logger } from '@nestjs/common';
import { PokedexSynchronizerService } from '../services/pokedex-synchronizer.service';

@Injectable()
export class SyncPokedexCommand {
  private readonly logger = new Logger(SyncPokedexCommand.name);

  constructor(
    private readonly synchronizer: PokedexSynchronizerService,
  ) {}

  @Command({
    command: 'sync:pokedex',
    describe: 'Synchronize Pokedex data from PostgreSQL to Elasticsearch',
  })
  async run(): Promise<void> {
    try {
      this.logger.log('🚀 Starting Pokedex synchronization...');
      
      await this.synchronizer.synchronize();
      
      this.logger.log('✅ Pokedex synchronization completed successfully!');
      
      // Get and display sync status
      const status = await this.synchronizer.getSyncStatus();
      this.logger.log(`📊 Sync Status: ${status.message}`);
      
    } catch (error) {
      this.logger.error(`❌ Pokedex synchronization failed: ${error.message}`);
      process.exit(1);
    }
  }
}
