import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeEfficacyCreateWithoutDamageTypeInput } from './type-efficacy-create-without-damage-type.input';
import { Type } from 'class-transformer';
import { TypeEfficacyCreateOrConnectWithoutDamageTypeInput } from './type-efficacy-create-or-connect-without-damage-type.input';
import type { Identity } from 'identity-type';
import { TypeEfficacyCreateManyDamageTypeInputEnvelope } from './type-efficacy-create-many-damage-type-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypeEfficacyWhereUniqueInput } from './type-efficacy-where-unique.input';

@InputType()
export class TypeEfficacyUncheckedCreateNestedManyWithoutDamageTypeInput {

    @Field(() => [TypeEfficacyCreateWithoutDamageTypeInput], {nullable:true})
    @Type(() => TypeEfficacyCreateWithoutDamageTypeInput)
    create?: Array<TypeEfficacyCreateWithoutDamageTypeInput>;

    @Field(() => [TypeEfficacyCreateOrConnectWithoutDamageTypeInput], {nullable:true})
    @Type(() => TypeEfficacyCreateOrConnectWithoutDamageTypeInput)
    connectOrCreate?: Array<TypeEfficacyCreateOrConnectWithoutDamageTypeInput>;

    @Field(() => TypeEfficacyCreateManyDamageTypeInputEnvelope, {nullable:true})
    @Type(() => TypeEfficacyCreateManyDamageTypeInputEnvelope)
    createMany?: Identity<TypeEfficacyCreateManyDamageTypeInputEnvelope>;

    @Field(() => [TypeEfficacyWhereUniqueInput], {nullable:true})
    @Type(() => TypeEfficacyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TypeEfficacyWhereUniqueInput, 'damage_type_id_target_type_id'>>;
}
