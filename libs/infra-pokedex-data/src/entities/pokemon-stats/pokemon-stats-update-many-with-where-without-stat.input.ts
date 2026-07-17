import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonStatsScalarWhereInput } from './pokemon-stats-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonStatsUpdateManyMutationInput } from './pokemon-stats-update-many-mutation.input';

@InputType()
export class PokemonStatsUpdateManyWithWhereWithoutStatInput {

    @Field(() => PokemonStatsScalarWhereInput, {nullable:false})
    @Type(() => PokemonStatsScalarWhereInput)
    where!: Identity<PokemonStatsScalarWhereInput>;

    @Field(() => PokemonStatsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonStatsUpdateManyMutationInput)
    data!: Identity<PokemonStatsUpdateManyMutationInput>;
}
