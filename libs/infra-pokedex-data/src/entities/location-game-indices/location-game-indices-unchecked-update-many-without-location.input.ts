import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class LocationGameIndicesUncheckedUpdateManyWithoutLocationInput {

    @Field(() => Int, {nullable:true})
    generation_id?: number;

    @Field(() => Int, {nullable:true})
    game_index?: number;
}
