import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ItemsCount {

    @Field(() => Int, {nullable:false})
    pokemonItems?: number;

    @Field(() => Int, {nullable:false})
    machines?: number;

    @Field(() => Int, {nullable:false})
    berries?: number;

    @Field(() => Int, {nullable:false})
    gameIndices?: number;

    @Field(() => Int, {nullable:false})
    flagMap?: number;

    @Field(() => Int, {nullable:false})
    babyTriggerItems?: number;

    @Field(() => Int, {nullable:false})
    triggerItems?: number;

    @Field(() => Int, {nullable:false})
    heldItems?: number;
}
