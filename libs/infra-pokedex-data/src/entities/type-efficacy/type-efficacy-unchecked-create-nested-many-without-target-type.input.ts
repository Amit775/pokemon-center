import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeEfficacyCreateWithoutTargetTypeInput } from './type-efficacy-create-without-target-type.input';
import { Type } from 'class-transformer';
import { TypeEfficacyCreateOrConnectWithoutTargetTypeInput } from './type-efficacy-create-or-connect-without-target-type.input';
import type { Identity } from 'identity-type';
import { TypeEfficacyCreateManyTargetTypeInputEnvelope } from './type-efficacy-create-many-target-type-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypeEfficacyWhereUniqueInput } from './type-efficacy-where-unique.input';

@InputType()
export class TypeEfficacyUncheckedCreateNestedManyWithoutTargetTypeInput {

    @Field(() => [TypeEfficacyCreateWithoutTargetTypeInput], {nullable:true})
    @Type(() => TypeEfficacyCreateWithoutTargetTypeInput)
    create?: Array<TypeEfficacyCreateWithoutTargetTypeInput>;

    @Field(() => [TypeEfficacyCreateOrConnectWithoutTargetTypeInput], {nullable:true})
    @Type(() => TypeEfficacyCreateOrConnectWithoutTargetTypeInput)
    connectOrCreate?: Array<TypeEfficacyCreateOrConnectWithoutTargetTypeInput>;

    @Field(() => TypeEfficacyCreateManyTargetTypeInputEnvelope, {nullable:true})
    @Type(() => TypeEfficacyCreateManyTargetTypeInputEnvelope)
    createMany?: Identity<TypeEfficacyCreateManyTargetTypeInputEnvelope>;

    @Field(() => [TypeEfficacyWhereUniqueInput], {nullable:true})
    @Type(() => TypeEfficacyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TypeEfficacyWhereUniqueInput, 'damage_type_id_target_type_id'>>;
}
