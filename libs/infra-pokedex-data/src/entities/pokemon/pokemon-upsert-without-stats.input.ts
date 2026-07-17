import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateWithoutStatsInput } from './pokemon-update-without-stats.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutStatsInput } from './pokemon-create-without-stats.input';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonUpsertWithoutStatsInput {

    @Field(() => PokemonUpdateWithoutStatsInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutStatsInput)
    update!: Identity<PokemonUpdateWithoutStatsInput>;

    @Field(() => PokemonCreateWithoutStatsInput, {nullable:false})
    @Type(() => PokemonCreateWithoutStatsInput)
    create!: Identity<PokemonCreateWithoutStatsInput>;

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: Identity<PokemonWhereInput>;
}
