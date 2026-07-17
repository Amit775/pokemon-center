import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutTypeGameIndicesInput } from './generations-create-without-type-game-indices.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutTypeGameIndicesInput } from './generations-create-or-connect-without-type-game-indices.input';
import { GenerationsUpsertWithoutTypeGameIndicesInput } from './generations-upsert-without-type-game-indices.input';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { GenerationsUpdateToOneWithWhereWithoutTypeGameIndicesInput } from './generations-update-to-one-with-where-without-type-game-indices.input';

@InputType()
export class GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput {

    @Field(() => GenerationsCreateWithoutTypeGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutTypeGameIndicesInput)
    create?: Identity<GenerationsCreateWithoutTypeGameIndicesInput>;

    @Field(() => GenerationsCreateOrConnectWithoutTypeGameIndicesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutTypeGameIndicesInput)
    connectOrCreate?: Identity<GenerationsCreateOrConnectWithoutTypeGameIndicesInput>;

    @Field(() => GenerationsUpsertWithoutTypeGameIndicesInput, {nullable:true})
    @Type(() => GenerationsUpsertWithoutTypeGameIndicesInput)
    upsert?: Identity<GenerationsUpsertWithoutTypeGameIndicesInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateToOneWithWhereWithoutTypeGameIndicesInput, {nullable:true})
    @Type(() => GenerationsUpdateToOneWithWhereWithoutTypeGameIndicesInput)
    update?: Identity<GenerationsUpdateToOneWithWhereWithoutTypeGameIndicesInput>;
}
