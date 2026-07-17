import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LocationsCount {

    @Field(() => Int, {nullable:false})
    areas?: number;

    @Field(() => Int, {nullable:false})
    gameIndices?: number;

    @Field(() => Int, {nullable:false})
    evolution?: number;
}
