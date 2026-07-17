import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonItemsUpdateManyMutationInput } from './pokemon-items-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonItemsWhereInput } from './pokemon-items-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonItemsArgs {

    @Field(() => PokemonItemsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonItemsUpdateManyMutationInput)
    data!: PokemonItemsUpdateManyMutationInput;

    @Field(() => PokemonItemsWhereInput, {nullable:true})
    @Type(() => PokemonItemsWhereInput)
    where?: PokemonItemsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
