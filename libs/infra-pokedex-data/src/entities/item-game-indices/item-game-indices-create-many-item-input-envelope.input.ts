import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemGameIndicesCreateManyItemInput } from './item-game-indices-create-many-item.input';
import { Type } from 'class-transformer';

@InputType()
export class ItemGameIndicesCreateManyItemInputEnvelope {

    @Field(() => [ItemGameIndicesCreateManyItemInput], {nullable:false})
    @Type(() => ItemGameIndicesCreateManyItemInput)
    data!: Array<ItemGameIndicesCreateManyItemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
