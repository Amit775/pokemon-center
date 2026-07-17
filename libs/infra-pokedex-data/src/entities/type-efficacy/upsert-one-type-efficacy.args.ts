import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypeEfficacyWhereUniqueInput } from './type-efficacy-where-unique.input';
import { Type } from 'class-transformer';
import { TypeEfficacyCreateInput } from './type-efficacy-create.input';
import { TypeEfficacyUpdateInput } from './type-efficacy-update.input';

@ArgsType()
export class UpsertOneTypeEfficacyArgs {

    @Field(() => TypeEfficacyWhereUniqueInput, {nullable:false})
    @Type(() => TypeEfficacyWhereUniqueInput)
    where!: Prisma.AtLeast<TypeEfficacyWhereUniqueInput, 'damage_type_id_target_type_id'>;

    @Field(() => TypeEfficacyCreateInput, {nullable:false})
    @Type(() => TypeEfficacyCreateInput)
    create!: TypeEfficacyCreateInput;

    @Field(() => TypeEfficacyUpdateInput, {nullable:false})
    @Type(() => TypeEfficacyUpdateInput)
    update!: TypeEfficacyUpdateInput;
}
