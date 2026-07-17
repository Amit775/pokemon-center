import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokedexVersionGroupsCreateManyInput {

    @Field(() => Int, {nullable:false})
    pokedex_id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;
}
