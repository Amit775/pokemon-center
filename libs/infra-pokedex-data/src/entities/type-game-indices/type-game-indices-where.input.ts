import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { TypesScalarRelationFilter } from '../types/types-scalar-relation-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';

@InputType()
export class TypeGameIndicesWhereInput {

    @Field(() => [TypeGameIndicesWhereInput], {nullable:true})
    AND?: Array<TypeGameIndicesWhereInput>;

    @Field(() => [TypeGameIndicesWhereInput], {nullable:true})
    OR?: Array<TypeGameIndicesWhereInput>;

    @Field(() => [TypeGameIndicesWhereInput], {nullable:true})
    NOT?: Array<TypeGameIndicesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;

    @Field(() => TypesScalarRelationFilter, {nullable:true})
    type?: TypesScalarRelationFilter;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: GenerationsScalarRelationFilter;
}
