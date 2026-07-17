import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonStatsScalarWhereInput } from './pokemon-stats-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonStatsUpdateManyMutationInput } from './pokemon-stats-update-many-mutation.input';

@InputType()
export class PokemonStatsUpdateManyWithWhereWithoutStatInput {

    @Field(() => PokemonStatsScalarWhereInput, {nullable:false})
    @Type(() => PokemonStatsScalarWhereInput)
    where!: PokemonStatsScalarWhereInput;

    @Field(() => PokemonStatsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonStatsUpdateManyMutationInput)
    data!: PokemonStatsUpdateManyMutationInput;
}
