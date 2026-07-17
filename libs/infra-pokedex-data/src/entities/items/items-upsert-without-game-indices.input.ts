import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateWithoutGameIndicesInput } from './items-update-without-game-indices.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutGameIndicesInput } from './items-create-without-game-indices.input';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsUpsertWithoutGameIndicesInput {

    @Field(() => ItemsUpdateWithoutGameIndicesInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutGameIndicesInput)
    update!: Identity<ItemsUpdateWithoutGameIndicesInput>;

    @Field(() => ItemsCreateWithoutGameIndicesInput, {nullable:false})
    @Type(() => ItemsCreateWithoutGameIndicesInput)
    create!: Identity<ItemsCreateWithoutGameIndicesInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;
}
