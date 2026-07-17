import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonStatsCreateInput } from './pokemon-stats-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonStatsArgs {

    @Field(() => PokemonStatsCreateInput, {nullable:false})
    @Type(() => PokemonStatsCreateInput)
    data!: PokemonStatsCreateInput;
}
