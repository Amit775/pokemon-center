import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonStatsCreateManyStatInput } from './pokemon-stats-create-many-stat.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonStatsCreateManyStatInputEnvelope {

    @Field(() => [PokemonStatsCreateManyStatInput], {nullable:false})
    @Type(() => PokemonStatsCreateManyStatInput)
    data!: Array<PokemonStatsCreateManyStatInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
