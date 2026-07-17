import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonTypesWhereInput } from './pokemon-types-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonTypesArgs {

    @Field(() => PokemonTypesWhereInput, {nullable:true})
    @Type(() => PokemonTypesWhereInput)
    where?: PokemonTypesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
