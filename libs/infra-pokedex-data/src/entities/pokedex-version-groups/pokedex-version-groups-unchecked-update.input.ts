import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokedexVersionGroupsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    pokedex_id?: number;

    @Field(() => Int, {nullable:true})
    version_group_id?: number;
}
