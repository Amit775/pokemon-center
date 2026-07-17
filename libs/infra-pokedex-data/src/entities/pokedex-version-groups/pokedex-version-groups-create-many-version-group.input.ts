import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokedexVersionGroupsCreateManyVersionGroupInput {

    @Field(() => Int, {nullable:false})
    pokedex_id!: number;
}
