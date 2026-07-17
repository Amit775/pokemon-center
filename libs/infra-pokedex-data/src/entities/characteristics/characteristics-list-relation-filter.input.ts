import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { CharacteristicsWhereInput } from './characteristics-where.input';

@InputType()
export class CharacteristicsListRelationFilter {

    @Field(() => CharacteristicsWhereInput, {nullable:true})
    every?: Identity<CharacteristicsWhereInput>;

    @Field(() => CharacteristicsWhereInput, {nullable:true})
    some?: Identity<CharacteristicsWhereInput>;

    @Field(() => CharacteristicsWhereInput, {nullable:true})
    none?: Identity<CharacteristicsWhereInput>;
}
