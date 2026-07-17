import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlagsUpdateManyMutationInput } from './item-flags-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ItemFlagsWhereInput } from './item-flags-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyItemFlagsArgs {

    @Field(() => ItemFlagsUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemFlagsUpdateManyMutationInput)
    data!: ItemFlagsUpdateManyMutationInput;

    @Field(() => ItemFlagsWhereInput, {nullable:true})
    @Type(() => ItemFlagsWhereInput)
    where?: ItemFlagsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
