import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonDexNumbersUpdateManyMutationInput } from './pokemon-dex-numbers-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonDexNumbersWhereInput } from './pokemon-dex-numbers-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonDexNumbersArgs {

    @Field(() => PokemonDexNumbersUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonDexNumbersUpdateManyMutationInput)
    data!: Identity<PokemonDexNumbersUpdateManyMutationInput>;

    @Field(() => PokemonDexNumbersWhereInput, {nullable:true})
    @Type(() => PokemonDexNumbersWhereInput)
    where?: Identity<PokemonDexNumbersWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
