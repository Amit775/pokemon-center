import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonColorsUpdateManyMutationInput } from './pokemon-colors-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonColorsWhereInput } from './pokemon-colors-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonColorsArgs {

    @Field(() => PokemonColorsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonColorsUpdateManyMutationInput)
    data!: Identity<PokemonColorsUpdateManyMutationInput>;

    @Field(() => PokemonColorsWhereInput, {nullable:true})
    @Type(() => PokemonColorsWhereInput)
    where?: Identity<PokemonColorsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
