import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsCreateWithoutMovesInput } from './generations-create-without-moves.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutMovesInput } from './generations-create-or-connect-without-moves.input';
import { GenerationsUpsertWithoutMovesInput } from './generations-upsert-without-moves.input';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { GenerationsUpdateToOneWithWhereWithoutMovesInput } from './generations-update-to-one-with-where-without-moves.input';

@InputType()
export class GenerationsUpdateOneRequiredWithoutMovesNestedInput {

    @Field(() => GenerationsCreateWithoutMovesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutMovesInput)
    create?: GenerationsCreateWithoutMovesInput;

    @Field(() => GenerationsCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutMovesInput)
    connectOrCreate?: GenerationsCreateOrConnectWithoutMovesInput;

    @Field(() => GenerationsUpsertWithoutMovesInput, {nullable:true})
    @Type(() => GenerationsUpsertWithoutMovesInput)
    upsert?: GenerationsUpsertWithoutMovesInput;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateToOneWithWhereWithoutMovesInput, {nullable:true})
    @Type(() => GenerationsUpdateToOneWithWhereWithoutMovesInput)
    update?: GenerationsUpdateToOneWithWhereWithoutMovesInput;
}
