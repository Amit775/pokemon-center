import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutItemGameIndicesInput } from './generations-create-without-item-game-indices.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutItemGameIndicesInput } from './generations-create-or-connect-without-item-game-indices.input';
import { GenerationsUpsertWithoutItemGameIndicesInput } from './generations-upsert-without-item-game-indices.input';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput } from './generations-update-to-one-with-where-without-item-game-indices.input';

@InputType()
export class GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput {

    @Field(() => GenerationsCreateWithoutItemGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutItemGameIndicesInput)
    create?: Identity<GenerationsCreateWithoutItemGameIndicesInput>;

    @Field(() => GenerationsCreateOrConnectWithoutItemGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutItemGameIndicesInput)
    connectOrCreate?: Identity<GenerationsCreateOrConnectWithoutItemGameIndicesInput>;

    @Field(() => GenerationsUpsertWithoutItemGameIndicesInput, {nullable:true})
    @Type(() => GenerationsUpsertWithoutItemGameIndicesInput)
    upsert?: Identity<GenerationsUpsertWithoutItemGameIndicesInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput, {nullable:true})
    @Type(() => GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput)
    update?: Identity<GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput>;
}
