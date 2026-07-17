import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypeEfficacyUpdateInput } from './type-efficacy-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { TypeEfficacyWhereUniqueInput } from './type-efficacy-where-unique.input';

@ArgsType()
export class UpdateOneTypeEfficacyArgs {

    @Field(() => TypeEfficacyUpdateInput, {nullable:false})
    @Type(() => TypeEfficacyUpdateInput)
    data!: Identity<TypeEfficacyUpdateInput>;

    @Field(() => TypeEfficacyWhereUniqueInput, {nullable:false})
    @Type(() => TypeEfficacyWhereUniqueInput)
    where!: Prisma.AtLeast<TypeEfficacyWhereUniqueInput, 'damage_type_id_target_type_id'>;
}
