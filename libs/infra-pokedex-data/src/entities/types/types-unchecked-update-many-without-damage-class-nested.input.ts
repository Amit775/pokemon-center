import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutDamageClassInput } from './types-create-without-damage-class.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutDamageClassInput } from './types-create-or-connect-without-damage-class.input';
import { TypesUpsertWithWhereUniqueWithoutDamageClassInput } from './types-upsert-with-where-unique-without-damage-class.input';
import { TypesCreateManyDamageClassInputEnvelope } from './types-create-many-damage-class-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesUpdateWithWhereUniqueWithoutDamageClassInput } from './types-update-with-where-unique-without-damage-class.input';
import { TypesUpdateManyWithWhereWithoutDamageClassInput } from './types-update-many-with-where-without-damage-class.input';
import { TypesScalarWhereInput } from './types-scalar-where.input';

@InputType()
export class TypesUncheckedUpdateManyWithoutDamageClassNestedInput {

    @Field(() => [TypesCreateWithoutDamageClassInput], {nullable:true})
    @Type(() => TypesCreateWithoutDamageClassInput)
    create?: Array<TypesCreateWithoutDamageClassInput>;

    @Field(() => [TypesCreateOrConnectWithoutDamageClassInput], {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutDamageClassInput)
    connectOrCreate?: Array<TypesCreateOrConnectWithoutDamageClassInput>;

    @Field(() => [TypesUpsertWithWhereUniqueWithoutDamageClassInput], {nullable:true})
    @Type(() => TypesUpsertWithWhereUniqueWithoutDamageClassInput)
    upsert?: Array<TypesUpsertWithWhereUniqueWithoutDamageClassInput>;

    @Field(() => TypesCreateManyDamageClassInputEnvelope, {nullable:true})
    @Type(() => TypesCreateManyDamageClassInputEnvelope)
    createMany?: TypesCreateManyDamageClassInputEnvelope;

    @Field(() => [TypesWhereUniqueInput], {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TypesWhereUniqueInput, 'id'>>;

    @Field(() => [TypesWhereUniqueInput], {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TypesWhereUniqueInput, 'id'>>;

    @Field(() => [TypesWhereUniqueInput], {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TypesWhereUniqueInput, 'id'>>;

    @Field(() => [TypesWhereUniqueInput], {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TypesWhereUniqueInput, 'id'>>;

    @Field(() => [TypesUpdateWithWhereUniqueWithoutDamageClassInput], {nullable:true})
    @Type(() => TypesUpdateWithWhereUniqueWithoutDamageClassInput)
    update?: Array<TypesUpdateWithWhereUniqueWithoutDamageClassInput>;

    @Field(() => [TypesUpdateManyWithWhereWithoutDamageClassInput], {nullable:true})
    @Type(() => TypesUpdateManyWithWhereWithoutDamageClassInput)
    updateMany?: Array<TypesUpdateManyWithWhereWithoutDamageClassInput>;

    @Field(() => [TypesScalarWhereInput], {nullable:true})
    @Type(() => TypesScalarWhereInput)
    deleteMany?: Array<TypesScalarWhereInput>;
}
