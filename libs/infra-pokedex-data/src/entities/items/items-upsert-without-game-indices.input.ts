import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsUpdateWithoutGameIndicesInput } from './items-update-without-game-indices.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutGameIndicesInput } from './items-create-without-game-indices.input';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsUpsertWithoutGameIndicesInput {

    @Field(() => ItemsUpdateWithoutGameIndicesInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutGameIndicesInput)
    update!: ItemsUpdateWithoutGameIndicesInput;

    @Field(() => ItemsCreateWithoutGameIndicesInput, {nullable:false})
    @Type(() => ItemsCreateWithoutGameIndicesInput)
    create!: ItemsCreateWithoutGameIndicesInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: ItemsWhereInput;
}
