import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypeEfficacyWhereUniqueInput } from './type-efficacy-where-unique.input';
import { Type } from 'class-transformer';
import { TypeEfficacyUpdateWithoutDamageTypeInput } from './type-efficacy-update-without-damage-type.input';

@InputType()
export class TypeEfficacyUpdateWithWhereUniqueWithoutDamageTypeInput {

    @Field(() => TypeEfficacyWhereUniqueInput, {nullable:false})
    @Type(() => TypeEfficacyWhereUniqueInput)
    where!: Prisma.AtLeast<TypeEfficacyWhereUniqueInput, 'damage_type_id_target_type_id'>;

    @Field(() => TypeEfficacyUpdateWithoutDamageTypeInput, {nullable:false})
    @Type(() => TypeEfficacyUpdateWithoutDamageTypeInput)
    data!: TypeEfficacyUpdateWithoutDamageTypeInput;
}
