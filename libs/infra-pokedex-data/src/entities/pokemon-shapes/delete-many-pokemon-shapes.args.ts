import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonShapesWhereInput } from './pokemon-shapes-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonShapesArgs {

    @Field(() => PokemonShapesWhereInput, {nullable:true})
    @Type(() => PokemonShapesWhereInput)
    where?: Identity<PokemonShapesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
