import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateManyCategoryInput } from './items-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ItemsCreateManyCategoryInputEnvelope {

    @Field(() => [ItemsCreateManyCategoryInput], {nullable:false})
    @Type(() => ItemsCreateManyCategoryInput)
    data!: Array<ItemsCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
