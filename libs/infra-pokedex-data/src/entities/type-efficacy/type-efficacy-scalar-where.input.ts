import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class TypeEfficacyScalarWhereInput {

    @Field(() => [TypeEfficacyScalarWhereInput], {nullable:true})
    AND?: Array<TypeEfficacyScalarWhereInput>;

    @Field(() => [TypeEfficacyScalarWhereInput], {nullable:true})
    OR?: Array<TypeEfficacyScalarWhereInput>;

    @Field(() => [TypeEfficacyScalarWhereInput], {nullable:true})
    NOT?: Array<TypeEfficacyScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    damage_type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    target_type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    damage_factor?: Identity<IntFilter>;
}
