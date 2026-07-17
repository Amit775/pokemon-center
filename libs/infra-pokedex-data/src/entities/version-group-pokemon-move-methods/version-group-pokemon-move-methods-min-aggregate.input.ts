import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VersionGroupPokemonMoveMethodsMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    version_group_id?: true;

    @Field(() => Boolean, {nullable:true})
    pokemon_move_method_id?: true;
}
