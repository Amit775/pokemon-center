import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EncounterMethodsCount {

    @Field(() => Int, {nullable:false})
    slots?: number;

    @Field(() => Int, {nullable:false})
    encounterRates?: number;
}
