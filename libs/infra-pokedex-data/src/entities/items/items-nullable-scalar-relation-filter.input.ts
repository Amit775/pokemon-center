import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsNullableScalarRelationFilter {

    @Field(() => ItemsWhereInput, {nullable:true})
    is?: ItemsWhereInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    isNot?: ItemsWhereInput;
}
