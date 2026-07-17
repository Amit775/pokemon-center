import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMoveMethodsUpdateManyMutationInput } from './pokemon-move-methods-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsWhereInput } from './pokemon-move-methods-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonMoveMethodsArgs {

    @Field(() => PokemonMoveMethodsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonMoveMethodsUpdateManyMutationInput)
    data!: Identity<PokemonMoveMethodsUpdateManyMutationInput>;

    @Field(() => PokemonMoveMethodsWhereInput, {nullable:true})
    @Type(() => PokemonMoveMethodsWhereInput)
    where?: Identity<PokemonMoveMethodsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
