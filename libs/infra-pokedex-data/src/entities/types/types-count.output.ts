import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TypesCount {

    @Field(() => Int, {nullable:false})
    moves?: number;

    @Field(() => Int, {nullable:false})
    pokemonTypes?: number;

    @Field(() => Int, {nullable:false})
    formTypes?: number;

    @Field(() => Int, {nullable:false})
    gameIndices?: number;

    @Field(() => Int, {nullable:false})
    efficacy?: number;

    @Field(() => Int, {nullable:false})
    efficacyTarget?: number;

    @Field(() => Int, {nullable:false})
    berryFlavors?: number;

    @Field(() => Int, {nullable:false})
    knownMoveTypes?: number;

    @Field(() => Int, {nullable:false})
    partyTypes?: number;

    @Field(() => Int, {nullable:false})
    naturalGiftTypes?: number;
}
