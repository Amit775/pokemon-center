import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutItemGameIndicesInput } from './generations-create-without-item-game-indices.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutItemGameIndicesInput } from './generations-create-or-connect-without-item-game-indices.input';
import { GenerationsUpsertWithoutItemGameIndicesInput } from './generations-upsert-without-item-game-indices.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput } from './generations-update-to-one-with-where-without-item-game-indices.input';

@InputType()
export class GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput {

    @Field(() => GenerationsCreateWithoutItemGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutItemGameIndicesInput)
    create?: GenerationsCreateWithoutItemGameIndicesInput;

    @Field(() => GenerationsCreateOrConnectWithoutItemGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutItemGameIndicesInput)
    connectOrCreate?: GenerationsCreateOrConnectWithoutItemGameIndicesInput;

    @Field(() => GenerationsUpsertWithoutItemGameIndicesInput, {nullable:true})
    @Type(() => GenerationsUpsertWithoutItemGameIndicesInput)
    upsert?: GenerationsUpsertWithoutItemGameIndicesInput;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput, {nullable:true})
    @Type(() => GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput)
    update?: GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput;
}
