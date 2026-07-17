import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutGameIndicesInput } from './items-update-without-game-indices.input';

@InputType()
export class ItemsUpdateToOneWithWhereWithoutGameIndicesInput {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;

    @Field(() => ItemsUpdateWithoutGameIndicesInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutGameIndicesInput)
    data!: Identity<ItemsUpdateWithoutGameIndicesInput>;
}
