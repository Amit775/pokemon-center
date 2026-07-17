import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormGenerationsUpdateManyMutationInput } from './pokemon-form-generations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonFormGenerationsWhereInput } from './pokemon-form-generations-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonFormGenerationsArgs {

    @Field(() => PokemonFormGenerationsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonFormGenerationsUpdateManyMutationInput)
    data!: PokemonFormGenerationsUpdateManyMutationInput;

    @Field(() => PokemonFormGenerationsWhereInput, {nullable:true})
    @Type(() => PokemonFormGenerationsWhereInput)
    where?: PokemonFormGenerationsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
