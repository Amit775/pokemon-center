import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeEfficacyCreateWithoutTargetTypeInput } from './type-efficacy-create-without-target-type.input';
import { Type } from 'class-transformer';
import { TypeEfficacyCreateOrConnectWithoutTargetTypeInput } from './type-efficacy-create-or-connect-without-target-type.input';
import { TypeEfficacyUpsertWithWhereUniqueWithoutTargetTypeInput } from './type-efficacy-upsert-with-where-unique-without-target-type.input';
import { TypeEfficacyCreateManyTargetTypeInputEnvelope } from './type-efficacy-create-many-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TypeEfficacyWhereUniqueInput } from './type-efficacy-where-unique.input';
import { TypeEfficacyUpdateWithWhereUniqueWithoutTargetTypeInput } from './type-efficacy-update-with-where-unique-without-target-type.input';
import { TypeEfficacyUpdateManyWithWhereWithoutTargetTypeInput } from './type-efficacy-update-many-with-where-without-target-type.input';
import { TypeEfficacyScalarWhereInput } from './type-efficacy-scalar-where.input';

@InputType()
export class TypeEfficacyUncheckedUpdateManyWithoutTargetTypeNestedInput {

    @Field(() => [TypeEfficacyCreateWithoutTargetTypeInput], {nullable:true})
    @Type(() => TypeEfficacyCreateWithoutTargetTypeInput)
    create?: Array<TypeEfficacyCreateWithoutTargetTypeInput>;

    @Field(() => [TypeEfficacyCreateOrConnectWithoutTargetTypeInput], {nullable:true})
    @Type(() => TypeEfficacyCreateOrConnectWithoutTargetTypeInput)
    connectOrCreate?: Array<TypeEfficacyCreateOrConnectWithoutTargetTypeInput>;

    @Field(() => [TypeEfficacyUpsertWithWhereUniqueWithoutTargetTypeInput], {nullable:true})
    @Type(() => TypeEfficacyUpsertWithWhereUniqueWithoutTargetTypeInput)
    upsert?: Array<TypeEfficacyUpsertWithWhereUniqueWithoutTargetTypeInput>;

    @Field(() => TypeEfficacyCreateManyTargetTypeInputEnvelope, {nullable:true})
    @Type(() => TypeEfficacyCreateManyTargetTypeInputEnvelope)
    createMany?: TypeEfficacyCreateManyTargetTypeInputEnvelope;

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

    @Field(() => [TypeEfficacyUpdateWithWhereUniqueWithoutTargetTypeInput], {nullable:true})
    @Type(() => TypeEfficacyUpdateWithWhereUniqueWithoutTargetTypeInput)
    update?: Array<TypeEfficacyUpdateWithWhereUniqueWithoutTargetTypeInput>;

    @Field(() => [TypeEfficacyUpdateManyWithWhereWithoutTargetTypeInput], {nullable:true})
    @Type(() => TypeEfficacyUpdateManyWithWhereWithoutTargetTypeInput)
    updateMany?: Array<TypeEfficacyUpdateManyWithWhereWithoutTargetTypeInput>;

    @Field(() => [TypeEfficacyScalarWhereInput], {nullable:true})
    @Type(() => TypeEfficacyScalarWhereInput)
    deleteMany?: Array<TypeEfficacyScalarWhereInput>;
}
