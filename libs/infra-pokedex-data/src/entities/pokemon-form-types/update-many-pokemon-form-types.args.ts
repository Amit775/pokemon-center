import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormTypesUpdateManyMutationInput } from './pokemon-form-types-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonFormTypesWhereInput } from './pokemon-form-types-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonFormTypesArgs {

    @Field(() => PokemonFormTypesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonFormTypesUpdateManyMutationInput)
    data!: PokemonFormTypesUpdateManyMutationInput;

    @Field(() => PokemonFormTypesWhereInput, {nullable:true})
    @Type(() => PokemonFormTypesWhereInput)
    where?: PokemonFormTypesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
