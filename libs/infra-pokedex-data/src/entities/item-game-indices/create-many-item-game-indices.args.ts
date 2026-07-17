import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemGameIndicesCreateManyInput } from './item-game-indices-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyItemGameIndicesArgs {

    @Field(() => [ItemGameIndicesCreateManyInput], {nullable:false})
    @Type(() => ItemGameIndicesCreateManyInput)
    data!: Array<ItemGameIndicesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
