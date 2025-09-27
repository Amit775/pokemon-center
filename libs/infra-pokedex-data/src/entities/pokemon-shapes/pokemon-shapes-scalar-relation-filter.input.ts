import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonShapesWhereInput } from './pokemon-shapes-where.input';

@InputType()
export class PokemonShapesScalarRelationFilter {

    @Field(() => PokemonShapesWhereInput, {nullable:true})
    is?: PokemonShapesWhereInput;

    @Field(() => PokemonShapesWhereInput, {nullable:true})
    isNot?: PokemonShapesWhereInput;
}
