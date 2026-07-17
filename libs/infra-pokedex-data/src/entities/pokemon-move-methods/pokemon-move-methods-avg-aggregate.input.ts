import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PokemonMoveMethodsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
