import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutGameIndicesInput } from './items-create-without-game-indices.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutGameIndicesInput } from './items-create-or-connect-without-game-indices.input';
import { ItemsUpsertWithoutGameIndicesInput } from './items-upsert-without-game-indices.input';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateToOneWithWhereWithoutGameIndicesInput } from './items-update-to-one-with-where-without-game-indices.input';

@InputType()
export class ItemsUpdateOneRequiredWithoutGameIndicesNestedInput {

    @Field(() => ItemsCreateWithoutGameIndicesInput, {nullable:true})
    @Type(() => ItemsCreateWithoutGameIndicesInput)
    create?: ItemsCreateWithoutGameIndicesInput;

    @Field(() => ItemsCreateOrConnectWithoutGameIndicesInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutGameIndicesInput)
    connectOrCreate?: ItemsCreateOrConnectWithoutGameIndicesInput;

    @Field(() => ItemsUpsertWithoutGameIndicesInput, {nullable:true})
    @Type(() => ItemsUpsertWithoutGameIndicesInput)
    upsert?: ItemsUpsertWithoutGameIndicesInput;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateToOneWithWhereWithoutGameIndicesInput, {nullable:true})
    @Type(() => ItemsUpdateToOneWithWhereWithoutGameIndicesInput)
    update?: ItemsUpdateToOneWithWhereWithoutGameIndicesInput;
}
