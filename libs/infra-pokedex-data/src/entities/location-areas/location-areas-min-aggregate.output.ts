import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LocationAreasMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    location_id?: number;

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;
}
