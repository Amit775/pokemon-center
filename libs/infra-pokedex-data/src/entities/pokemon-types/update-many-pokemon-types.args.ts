import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonTypesUpdateManyMutationInput } from './pokemon-types-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonTypesWhereInput } from './pokemon-types-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonTypesArgs {

    @Field(() => PokemonTypesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonTypesUpdateManyMutationInput)
    data!: PokemonTypesUpdateManyMutationInput;

    @Field(() => PokemonTypesWhereInput, {nullable:true})
    @Type(() => PokemonTypesWhereInput)
    where?: PokemonTypesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
