import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NaturesCreateManyDecreasedStatInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    increased_stat_id!: number;

    @Field(() => Int, {nullable:false})
    hates_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    likes_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;
}
