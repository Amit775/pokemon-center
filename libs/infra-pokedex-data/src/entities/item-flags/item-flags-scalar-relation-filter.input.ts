import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlagsWhereInput } from './item-flags-where.input';

@InputType()
export class ItemFlagsScalarRelationFilter {

    @Field(() => ItemFlagsWhereInput, {nullable:true})
    is?: ItemFlagsWhereInput;

    @Field(() => ItemFlagsWhereInput, {nullable:true})
    isNot?: ItemFlagsWhereInput;
}
