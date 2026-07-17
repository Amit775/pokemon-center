import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeGameIndicesCreateWithoutTypeInput } from './type-game-indices-create-without-type.input';
import { Type } from 'class-transformer';
import { TypeGameIndicesCreateOrConnectWithoutTypeInput } from './type-game-indices-create-or-connect-without-type.input';
import { TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput } from './type-game-indices-upsert-with-where-unique-without-type.input';
import { TypeGameIndicesCreateManyTypeInputEnvelope } from './type-game-indices-create-many-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';
import { TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput } from './type-game-indices-update-with-where-unique-without-type.input';
import { TypeGameIndicesUpdateManyWithWhereWithoutTypeInput } from './type-game-indices-update-many-with-where-without-type.input';
import { TypeGameIndicesScalarWhereInput } from './type-game-indices-scalar-where.input';

@InputType()
export class TypeGameIndicesUpdateManyWithoutTypeNestedInput {

    @Field(() => [TypeGameIndicesCreateWithoutTypeInput], {nullable:true})
    @Type(() => TypeGameIndicesCreateWithoutTypeInput)
    create?: Array<TypeGameIndicesCreateWithoutTypeInput>;

    @Field(() => [TypeGameIndicesCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => TypeGameIndicesCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<TypeGameIndicesCreateOrConnectWithoutTypeInput>;

    @Field(() => [TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput)
    upsert?: Array<TypeGameIndicesUpsertWithWhereUniqueWithoutTypeInput>;

    @Field(() => TypeGameIndicesCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => TypeGameIndicesCreateManyTypeInputEnvelope)
    createMany?: TypeGameIndicesCreateManyTypeInputEnvelope;

    @Field(() => [TypeGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>>;

    @Field(() => [TypeGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>>;

    @Field(() => [TypeGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>>;

    @Field(() => [TypeGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>>;

    @Field(() => [TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput)
    update?: Array<TypeGameIndicesUpdateWithWhereUniqueWithoutTypeInput>;

    @Field(() => [TypeGameIndicesUpdateManyWithWhereWithoutTypeInput], {nullable:true})
    @Type(() => TypeGameIndicesUpdateManyWithWhereWithoutTypeInput)
    updateMany?: Array<TypeGameIndicesUpdateManyWithWhereWithoutTypeInput>;

    @Field(() => [TypeGameIndicesScalarWhereInput], {nullable:true})
    @Type(() => TypeGameIndicesScalarWhereInput)
    deleteMany?: Array<TypeGameIndicesScalarWhereInput>;
}
