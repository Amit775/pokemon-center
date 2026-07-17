import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokedexesCount {

    @Field(() => Int, {nullable:false})
    dexNumbers?: number;

    @Field(() => Int, {nullable:false})
    versionGroups?: number;
}
