import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexVersionGroupsWhereInput } from './pokedex-version-groups-where.input';

@InputType()
export class PokedexVersionGroupsListRelationFilter {

    @Field(() => PokedexVersionGroupsWhereInput, {nullable:true})
    every?: PokedexVersionGroupsWhereInput;

    @Field(() => PokedexVersionGroupsWhereInput, {nullable:true})
    some?: PokedexVersionGroupsWhereInput;

    @Field(() => PokedexVersionGroupsWhereInput, {nullable:true})
    none?: PokedexVersionGroupsWhereInput;
}
