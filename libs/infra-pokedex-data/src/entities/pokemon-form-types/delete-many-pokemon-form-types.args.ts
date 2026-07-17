import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormTypesWhereInput } from './pokemon-form-types-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonFormTypesArgs {

    @Field(() => PokemonFormTypesWhereInput, {nullable:true})
    @Type(() => PokemonFormTypesWhereInput)
    where?: PokemonFormTypesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
