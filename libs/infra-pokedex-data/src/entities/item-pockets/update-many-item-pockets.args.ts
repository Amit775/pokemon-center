import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemPocketsUpdateManyMutationInput } from './item-pockets-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ItemPocketsWhereInput } from './item-pockets-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyItemPocketsArgs {

    @Field(() => ItemPocketsUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemPocketsUpdateManyMutationInput)
    data!: ItemPocketsUpdateManyMutationInput;

    @Field(() => ItemPocketsWhereInput, {nullable:true})
    @Type(() => ItemPocketsWhereInput)
    where?: ItemPocketsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
