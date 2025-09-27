import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeEfficacyDamage_type_idTarget_type_idCompoundUniqueInput } from './type-efficacy-damage-type-id-target-type-id-compound-unique.input';
import { TypeEfficacyWhereInput } from './type-efficacy-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { TypesScalarRelationFilter } from '../types/types-scalar-relation-filter.input';

@InputType()
export class TypeEfficacyWhereUniqueInput {

    @Field(() => TypeEfficacyDamage_type_idTarget_type_idCompoundUniqueInput, {nullable:true})
    damage_type_id_target_type_id?: TypeEfficacyDamage_type_idTarget_type_idCompoundUniqueInput;

    @Field(() => [TypeEfficacyWhereInput], {nullable:true})
    AND?: Array<TypeEfficacyWhereInput>;

    @Field(() => [TypeEfficacyWhereInput], {nullable:true})
    OR?: Array<TypeEfficacyWhereInput>;

    @Field(() => [TypeEfficacyWhereInput], {nullable:true})
    NOT?: Array<TypeEfficacyWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    damage_type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    target_type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    damage_factor?: IntFilter;

    @Field(() => TypesScalarRelationFilter, {nullable:true})
    damageType?: TypesScalarRelationFilter;

    @Field(() => TypesScalarRelationFilter, {nullable:true})
    targetType?: TypesScalarRelationFilter;
}
