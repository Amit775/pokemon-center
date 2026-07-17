import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonShapesWhereInput } from './pokemon-shapes-where.input';

@InputType()
export class PokemonShapesScalarRelationFilter {

    @Field(() => PokemonShapesWhereInput, {nullable:true})
    is?: Identity<PokemonShapesWhereInput>;

    @Field(() => PokemonShapesWhereInput, {nullable:true})
    isNot?: Identity<PokemonShapesWhereInput>;
}
