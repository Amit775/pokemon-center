import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagsUpdateManyMutationInput } from './item-flags-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ItemFlagsWhereInput } from './item-flags-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyItemFlagsArgs {

    @Field(() => ItemFlagsUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemFlagsUpdateManyMutationInput)
    data!: Identity<ItemFlagsUpdateManyMutationInput>;

    @Field(() => ItemFlagsWhereInput, {nullable:true})
    @Type(() => ItemFlagsWhereInput)
    where?: Identity<ItemFlagsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
