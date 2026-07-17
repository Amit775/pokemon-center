import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemPocketsCreateInput } from './item-pockets-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneItemPocketsArgs {

    @Field(() => ItemPocketsCreateInput, {nullable:false})
    @Type(() => ItemPocketsCreateInput)
    data!: ItemPocketsCreateInput;
}
