import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonColorsUpdateManyMutationInput } from './pokemon-colors-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonColorsWhereInput } from './pokemon-colors-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonColorsArgs {

    @Field(() => PokemonColorsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonColorsUpdateManyMutationInput)
    data!: PokemonColorsUpdateManyMutationInput;

    @Field(() => PokemonColorsWhereInput, {nullable:true})
    @Type(() => PokemonColorsWhereInput)
    where?: PokemonColorsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
