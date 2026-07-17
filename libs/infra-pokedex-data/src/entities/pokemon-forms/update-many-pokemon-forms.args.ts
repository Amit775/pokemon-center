import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsUpdateManyMutationInput } from './pokemon-forms-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonFormsArgs {

    @Field(() => PokemonFormsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonFormsUpdateManyMutationInput)
    data!: Identity<PokemonFormsUpdateManyMutationInput>;

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    @Type(() => PokemonFormsWhereInput)
    where?: Identity<PokemonFormsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
