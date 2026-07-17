import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonStatsCreateManyPokemonInput } from './pokemon-stats-create-many-pokemon.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonStatsCreateManyPokemonInputEnvelope {

    @Field(() => [PokemonStatsCreateManyPokemonInput], {nullable:false})
    @Type(() => PokemonStatsCreateManyPokemonInput)
    data!: Array<PokemonStatsCreateManyPokemonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
