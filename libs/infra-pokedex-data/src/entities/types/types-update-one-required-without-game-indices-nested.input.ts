import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutGameIndicesInput } from './types-create-without-game-indices.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutGameIndicesInput } from './types-create-or-connect-without-game-indices.input';
import { TypesUpsertWithoutGameIndicesInput } from './types-upsert-without-game-indices.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesUpdateToOneWithWhereWithoutGameIndicesInput } from './types-update-to-one-with-where-without-game-indices.input';

@InputType()
export class TypesUpdateOneRequiredWithoutGameIndicesNestedInput {

    @Field(() => TypesCreateWithoutGameIndicesInput, {nullable:true})
    @Type(() => TypesCreateWithoutGameIndicesInput)
    create?: TypesCreateWithoutGameIndicesInput;

    @Field(() => TypesCreateOrConnectWithoutGameIndicesInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutGameIndicesInput)
    connectOrCreate?: TypesCreateOrConnectWithoutGameIndicesInput;

    @Field(() => TypesUpsertWithoutGameIndicesInput, {nullable:true})
    @Type(() => TypesUpsertWithoutGameIndicesInput)
    upsert?: TypesUpsertWithoutGameIndicesInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateToOneWithWhereWithoutGameIndicesInput, {nullable:true})
    @Type(() => TypesUpdateToOneWithWhereWithoutGameIndicesInput)
    update?: TypesUpdateToOneWithWhereWithoutGameIndicesInput;
}
