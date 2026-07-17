import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemGameIndicesCreateInput } from './item-game-indices-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneItemGameIndicesArgs {

    @Field(() => ItemGameIndicesCreateInput, {nullable:false})
    @Type(() => ItemGameIndicesCreateInput)
    data!: Identity<ItemGameIndicesCreateInput>;
}
