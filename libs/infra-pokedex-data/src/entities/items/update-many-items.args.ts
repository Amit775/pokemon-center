import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateManyMutationInput } from './items-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ItemsWhereInput } from './items-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyItemsArgs {

    @Field(() => ItemsUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemsUpdateManyMutationInput)
    data!: Identity<ItemsUpdateManyMutationInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
