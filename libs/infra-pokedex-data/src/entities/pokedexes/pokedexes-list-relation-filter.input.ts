import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesWhereInput } from './pokedexes-where.input';

@InputType()
export class PokedexesListRelationFilter {

    @Field(() => PokedexesWhereInput, {nullable:true})
    every?: PokedexesWhereInput;

    @Field(() => PokedexesWhereInput, {nullable:true})
    some?: PokedexesWhereInput;

    @Field(() => PokedexesWhereInput, {nullable:true})
    none?: PokedexesWhereInput;
}
