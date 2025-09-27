import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemPocketsWhereInput } from './item-pockets-where.input';

@InputType()
export class ItemPocketsScalarRelationFilter {

    @Field(() => ItemPocketsWhereInput, {nullable:true})
    is?: ItemPocketsWhereInput;

    @Field(() => ItemPocketsWhereInput, {nullable:true})
    isNot?: ItemPocketsWhereInput;
}
