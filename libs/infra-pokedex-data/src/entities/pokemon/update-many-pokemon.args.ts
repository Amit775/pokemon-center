import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonUpdateManyMutationInput } from './pokemon-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonWhereInput } from './pokemon-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonArgs {

    @Field(() => PokemonUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonUpdateManyMutationInput)
    data!: PokemonUpdateManyMutationInput;

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
