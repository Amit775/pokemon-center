import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class LocationGameIndicesCreateManyLocationInput {

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;
}
