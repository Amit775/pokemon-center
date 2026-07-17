import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonUpdateWithoutStatsInput } from './pokemon-update-without-stats.input';

@InputType()
export class PokemonUpdateToOneWithWhereWithoutStatsInput {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;

    @Field(() => PokemonUpdateWithoutStatsInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutStatsInput)
    data!: PokemonUpdateWithoutStatsInput;
}
