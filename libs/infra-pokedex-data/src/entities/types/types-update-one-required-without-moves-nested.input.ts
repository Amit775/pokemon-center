import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutMovesInput } from './types-create-without-moves.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutMovesInput } from './types-create-or-connect-without-moves.input';
import { TypesUpsertWithoutMovesInput } from './types-upsert-without-moves.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesUpdateToOneWithWhereWithoutMovesInput } from './types-update-to-one-with-where-without-moves.input';

@InputType()
export class TypesUpdateOneRequiredWithoutMovesNestedInput {

    @Field(() => TypesCreateWithoutMovesInput, {nullable:true})
    @Type(() => TypesCreateWithoutMovesInput)
    create?: TypesCreateWithoutMovesInput;

    @Field(() => TypesCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: TypesCreateOrConnectWithoutMovesInput;

    @Field(() => TypesUpsertWithoutMovesInput, {nullable:true})
    @Type(() => TypesUpsertWithoutMovesInput)
    upsert?: TypesUpsertWithoutMovesInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateToOneWithWhereWithoutMovesInput, {nullable:true})
    @Type(() => TypesUpdateToOneWithWhereWithoutMovesInput)
    update?: TypesUpdateToOneWithWhereWithoutMovesInput;
}
