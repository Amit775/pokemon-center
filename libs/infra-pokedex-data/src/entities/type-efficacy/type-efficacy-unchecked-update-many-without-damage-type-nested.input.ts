import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeEfficacyCreateWithoutDamageTypeInput } from './type-efficacy-create-without-damage-type.input';
import { Type } from 'class-transformer';
import { TypeEfficacyCreateOrConnectWithoutDamageTypeInput } from './type-efficacy-create-or-connect-without-damage-type.input';
import { TypeEfficacyUpsertWithWhereUniqueWithoutDamageTypeInput } from './type-efficacy-upsert-with-where-unique-without-damage-type.input';
import type { Identity } from 'identity-type';
import { TypeEfficacyCreateManyDamageTypeInputEnvelope } from './type-efficacy-create-many-damage-type-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypeEfficacyWhereUniqueInput } from './type-efficacy-where-unique.input';
import { TypeEfficacyUpdateWithWhereUniqueWithoutDamageTypeInput } from './type-efficacy-update-with-where-unique-without-damage-type.input';
import { TypeEfficacyUpdateManyWithWhereWithoutDamageTypeInput } from './type-efficacy-update-many-with-where-without-damage-type.input';
import { TypeEfficacyScalarWhereInput } from './type-efficacy-scalar-where.input';

@InputType()
export class TypeEfficacyUncheckedUpdateManyWithoutDamageTypeNestedInput {

    @Field(() => [TypeEfficacyCreateWithoutDamageTypeInput], {nullable:true})
    @Type(() => TypeEfficacyCreateWithoutDamageTypeInput)
    create?: Array<TypeEfficacyCreateWithoutDamageTypeInput>;

    @Field(() => [TypeEfficacyCreateOrConnectWithoutDamageTypeInput], {nullable:true})
    @Type(() => TypeEfficacyCreateOrConnectWithoutDamageTypeInput)
    connectOrCreate?: Array<TypeEfficacyCreateOrConnectWithoutDamageTypeInput>;

    @Field(() => [TypeEfficacyUpsertWithWhereUniqueWithoutDamageTypeInput], {nullable:true})
    @Type(() => TypeEfficacyUpsertWithWhereUniqueWithoutDamageTypeInput)
    upsert?: Array<TypeEfficacyUpsertWithWhereUniqueWithoutDamageTypeInput>;

    @Field(() => TypeEfficacyCreateManyDamageTypeInputEnvelope, {nullable:true})
    @Type(() => TypeEfficacyCreateManyDamageTypeInputEnvelope)
    createMany?: Identity<TypeEfficacyCreateManyDamageTypeInputEnvelope>;

    @Field(() => [TypeEfficacyWhereUniqueInput], {nullable:true})
    @Type(() => TypeEfficacyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TypeEfficacyWhereUniqueInput, 'damage_type_id_target_type_id'>>;

    @Field(() => [TypeEfficacyWhereUniqueInput], {nullable:true})
    @Type(() => TypeEfficacyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TypeEfficacyWhereUniqueInput, 'damage_type_id_target_type_id'>>;

    @Field(() => [TypeEfficacyWhereUniqueInput], {nullable:true})
    @Type(() => TypeEfficacyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TypeEfficacyWhereUniqueInput, 'damage_type_id_target_type_id'>>;

    @Field(() => [TypeEfficacyWhereUniqueInput], {nullable:true})
    @Type(() => TypeEfficacyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TypeEfficacyWhereUniqueInput, 'damage_type_id_target_type_id'>>;

    @Field(() => [TypeEfficacyUpdateWithWhereUniqueWithoutDamageTypeInput], {nullable:true})
    @Type(() => TypeEfficacyUpdateWithWhereUniqueWithoutDamageTypeInput)
    update?: Array<TypeEfficacyUpdateWithWhereUniqueWithoutDamageTypeInput>;

    @Field(() => [TypeEfficacyUpdateManyWithWhereWithoutDamageTypeInput], {nullable:true})
    @Type(() => TypeEfficacyUpdateManyWithWhereWithoutDamageTypeInput)
    updateMany?: Array<TypeEfficacyUpdateManyWithWhereWithoutDamageTypeInput>;

    @Field(() => [TypeEfficacyScalarWhereInput], {nullable:true})
    @Type(() => TypeEfficacyScalarWhereInput)
    deleteMany?: Array<TypeEfficacyScalarWhereInput>;
}
