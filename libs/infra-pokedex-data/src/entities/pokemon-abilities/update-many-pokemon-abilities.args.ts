import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonAbilitiesUpdateManyMutationInput } from './pokemon-abilities-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonAbilitiesWhereInput } from './pokemon-abilities-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonAbilitiesArgs {

    @Field(() => PokemonAbilitiesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonAbilitiesUpdateManyMutationInput)
    data!: PokemonAbilitiesUpdateManyMutationInput;

    @Field(() => PokemonAbilitiesWhereInput, {nullable:true})
    @Type(() => PokemonAbilitiesWhereInput)
    where?: PokemonAbilitiesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
