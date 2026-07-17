import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutMovesInput } from './generations-create-without-moves.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutMovesInput } from './generations-create-or-connect-without-moves.input';
import { GenerationsUpsertWithoutMovesInput } from './generations-upsert-without-moves.input';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { GenerationsUpdateToOneWithWhereWithoutMovesInput } from './generations-update-to-one-with-where-without-moves.input';

@InputType()
export class GenerationsUpdateOneRequiredWithoutMovesNestedInput {

    @Field(() => GenerationsCreateWithoutMovesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutMovesInput)
    create?: Identity<GenerationsCreateWithoutMovesInput>;

    @Field(() => GenerationsCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Identity<GenerationsCreateOrConnectWithoutMovesInput>;

    @Field(() => GenerationsUpsertWithoutMovesInput, {nullable:true})
    @Type(() => GenerationsUpsertWithoutMovesInput)
    upsert?: Identity<GenerationsUpsertWithoutMovesInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateToOneWithWhereWithoutMovesInput, {nullable:true})
    @Type(() => GenerationsUpdateToOneWithWhereWithoutMovesInput)
    update?: Identity<GenerationsUpdateToOneWithWhereWithoutMovesInput>;
}
