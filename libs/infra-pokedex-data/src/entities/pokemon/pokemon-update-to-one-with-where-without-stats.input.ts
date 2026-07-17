import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonUpdateWithoutStatsInput } from './pokemon-update-without-stats.input';

@InputType()
export class PokemonUpdateToOneWithWhereWithoutStatsInput {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: Identity<PokemonWhereInput>;

    @Field(() => PokemonUpdateWithoutStatsInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutStatsInput)
    data!: Identity<PokemonUpdateWithoutStatsInput>;
}
