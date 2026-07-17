import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypeEfficacyWhereUniqueInput } from './type-efficacy-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypeEfficacyUpdateWithoutDamageTypeInput } from './type-efficacy-update-without-damage-type.input';
import { TypeEfficacyCreateWithoutDamageTypeInput } from './type-efficacy-create-without-damage-type.input';

@InputType()
export class TypeEfficacyUpsertWithWhereUniqueWithoutDamageTypeInput {

    @Field(() => TypeEfficacyWhereUniqueInput, {nullable:false})
    @Type(() => TypeEfficacyWhereUniqueInput)
    where!: Prisma.AtLeast<TypeEfficacyWhereUniqueInput, 'damage_type_id_target_type_id'>;

    @Field(() => TypeEfficacyUpdateWithoutDamageTypeInput, {nullable:false})
    @Type(() => TypeEfficacyUpdateWithoutDamageTypeInput)
    update!: Identity<TypeEfficacyUpdateWithoutDamageTypeInput>;

    @Field(() => TypeEfficacyCreateWithoutDamageTypeInput, {nullable:false})
    @Type(() => TypeEfficacyCreateWithoutDamageTypeInput)
    create!: Identity<TypeEfficacyCreateWithoutDamageTypeInput>;
}
