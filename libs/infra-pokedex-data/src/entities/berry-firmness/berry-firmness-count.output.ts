import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BerryFirmnessCount {

    @Field(() => Int, {nullable:false})
    berries?: number;
}
