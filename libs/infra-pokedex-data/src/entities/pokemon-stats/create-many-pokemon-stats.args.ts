import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonStatsCreateManyInput } from './pokemon-stats-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonStatsArgs {

    @Field(() => [PokemonStatsCreateManyInput], {nullable:false})
    @Type(() => PokemonStatsCreateManyInput)
    data!: Array<PokemonStatsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
