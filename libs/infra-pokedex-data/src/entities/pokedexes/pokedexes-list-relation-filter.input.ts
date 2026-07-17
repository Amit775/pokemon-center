import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesWhereInput } from './pokedexes-where.input';

@InputType()
export class PokedexesListRelationFilter {

    @Field(() => PokedexesWhereInput, {nullable:true})
    every?: Identity<PokedexesWhereInput>;

    @Field(() => PokedexesWhereInput, {nullable:true})
    some?: Identity<PokedexesWhereInput>;

    @Field(() => PokedexesWhereInput, {nullable:true})
    none?: Identity<PokedexesWhereInput>;
}
