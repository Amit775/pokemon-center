import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlagsCreateInput } from './item-flags-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneItemFlagsArgs {

    @Field(() => ItemFlagsCreateInput, {nullable:false})
    @Type(() => ItemFlagsCreateInput)
    data!: ItemFlagsCreateInput;
}
