import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonMovesUpdateManyMutationInput } from './pokemon-moves-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonMovesWhereInput } from './pokemon-moves-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonMovesArgs {

    @Field(() => PokemonMovesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonMovesUpdateManyMutationInput)
    data!: PokemonMovesUpdateManyMutationInput;

    @Field(() => PokemonMovesWhereInput, {nullable:true})
    @Type(() => PokemonMovesWhereInput)
    where?: PokemonMovesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
