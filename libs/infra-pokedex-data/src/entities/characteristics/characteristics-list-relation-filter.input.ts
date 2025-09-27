import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacteristicsWhereInput } from './characteristics-where.input';

@InputType()
export class CharacteristicsListRelationFilter {

    @Field(() => CharacteristicsWhereInput, {nullable:true})
    every?: CharacteristicsWhereInput;

    @Field(() => CharacteristicsWhereInput, {nullable:true})
    some?: CharacteristicsWhereInput;

    @Field(() => CharacteristicsWhereInput, {nullable:true})
    none?: CharacteristicsWhereInput;
}
