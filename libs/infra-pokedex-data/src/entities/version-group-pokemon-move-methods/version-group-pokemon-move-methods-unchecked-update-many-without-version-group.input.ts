import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupInput {

    @Field(() => Int, {nullable:true})
    pokemon_move_method_id?: number;
}
