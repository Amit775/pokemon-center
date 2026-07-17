import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NaturesUpdateManyMutationInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    hates_flavor_id?: number;

    @Field(() => Int, {nullable:true})
    likes_flavor_id?: number;

    @Field(() => Int, {nullable:true})
    game_index?: number;
}
