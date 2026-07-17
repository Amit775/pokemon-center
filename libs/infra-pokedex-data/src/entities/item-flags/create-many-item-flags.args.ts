import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlagsCreateManyInput } from './item-flags-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyItemFlagsArgs {

    @Field(() => [ItemFlagsCreateManyInput], {nullable:false})
    @Type(() => ItemFlagsCreateManyInput)
    data!: Array<ItemFlagsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
