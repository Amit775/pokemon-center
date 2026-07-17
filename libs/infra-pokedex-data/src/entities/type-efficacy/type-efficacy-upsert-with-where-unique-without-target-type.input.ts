import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypeEfficacyWhereUniqueInput } from './type-efficacy-where-unique.input';
import { Type } from 'class-transformer';
import { TypeEfficacyUpdateWithoutTargetTypeInput } from './type-efficacy-update-without-target-type.input';
import { TypeEfficacyCreateWithoutTargetTypeInput } from './type-efficacy-create-without-target-type.input';

@InputType()
export class TypeEfficacyUpsertWithWhereUniqueWithoutTargetTypeInput {

    @Field(() => TypeEfficacyWhereUniqueInput, {nullable:false})
    @Type(() => TypeEfficacyWhereUniqueInput)
    where!: Prisma.AtLeast<TypeEfficacyWhereUniqueInput, 'damage_type_id_target_type_id'>;

    @Field(() => TypeEfficacyUpdateWithoutTargetTypeInput, {nullable:false})
    @Type(() => TypeEfficacyUpdateWithoutTargetTypeInput)
    update!: TypeEfficacyUpdateWithoutTargetTypeInput;

    @Field(() => TypeEfficacyCreateWithoutTargetTypeInput, {nullable:false})
    @Type(() => TypeEfficacyCreateWithoutTargetTypeInput)
    create!: TypeEfficacyCreateWithoutTargetTypeInput;
}
