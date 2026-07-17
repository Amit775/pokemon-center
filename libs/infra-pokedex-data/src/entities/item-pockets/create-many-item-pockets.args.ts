import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemPocketsCreateManyInput } from './item-pockets-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyItemPocketsArgs {

    @Field(() => [ItemPocketsCreateManyInput], {nullable:false})
    @Type(() => ItemPocketsCreateManyInput)
    data!: Array<ItemPocketsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
