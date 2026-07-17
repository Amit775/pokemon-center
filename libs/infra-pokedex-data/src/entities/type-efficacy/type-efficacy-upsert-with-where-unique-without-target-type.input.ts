import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypeEfficacyWhereUniqueInput } from './type-efficacy-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypeEfficacyUpdateWithoutTargetTypeInput } from './type-efficacy-update-without-target-type.input';
import { TypeEfficacyCreateWithoutTargetTypeInput } from './type-efficacy-create-without-target-type.input';

@InputType()
export class TypeEfficacyUpsertWithWhereUniqueWithoutTargetTypeInput {

    @Field(() => TypeEfficacyWhereUniqueInput, {nullable:false})
    @Type(() => TypeEfficacyWhereUniqueInput)
    where!: Prisma.AtLeast<TypeEfficacyWhereUniqueInput, 'damage_type_id_target_type_id'>;

    @Field(() => TypeEfficacyUpdateWithoutTargetTypeInput, {nullable:false})
    @Type(() => TypeEfficacyUpdateWithoutTargetTypeInput)
    update!: Identity<TypeEfficacyUpdateWithoutTargetTypeInput>;

    @Field(() => TypeEfficacyCreateWithoutTargetTypeInput, {nullable:false})
    @Type(() => TypeEfficacyCreateWithoutTargetTypeInput)
    create!: Identity<TypeEfficacyCreateWithoutTargetTypeInput>;
}
