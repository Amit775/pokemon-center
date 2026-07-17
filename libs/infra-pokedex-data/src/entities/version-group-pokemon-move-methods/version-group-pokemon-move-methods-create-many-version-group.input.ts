import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class VersionGroupPokemonMoveMethodsCreateManyVersionGroupInput {

    @Field(() => Int, {nullable:false})
    pokemon_move_method_id!: number;
}
