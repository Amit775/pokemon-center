import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesWhereInput } from './pokedexes-where.input';

@InputType()
export class PokedexesScalarRelationFilter {

    @Field(() => PokedexesWhereInput, {nullable:true})
    is?: PokedexesWhereInput;

    @Field(() => PokedexesWhereInput, {nullable:true})
    isNot?: PokedexesWhereInput;
}
