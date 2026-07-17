import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemPocketsUpdateManyMutationInput } from './item-pockets-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ItemPocketsWhereInput } from './item-pockets-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyItemPocketsArgs {

    @Field(() => ItemPocketsUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemPocketsUpdateManyMutationInput)
    data!: Identity<ItemPocketsUpdateManyMutationInput>;

    @Field(() => ItemPocketsWhereInput, {nullable:true})
    @Type(() => ItemPocketsWhereInput)
    where?: Identity<ItemPocketsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
