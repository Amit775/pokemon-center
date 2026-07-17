import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormTypesUpdateManyMutationInput } from './pokemon-form-types-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonFormTypesWhereInput } from './pokemon-form-types-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonFormTypesArgs {

    @Field(() => PokemonFormTypesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonFormTypesUpdateManyMutationInput)
    data!: Identity<PokemonFormTypesUpdateManyMutationInput>;

    @Field(() => PokemonFormTypesWhereInput, {nullable:true})
    @Type(() => PokemonFormTypesWhereInput)
    where?: Identity<PokemonFormTypesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
