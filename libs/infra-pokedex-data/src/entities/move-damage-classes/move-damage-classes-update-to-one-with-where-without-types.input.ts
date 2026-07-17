import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesUpdateWithoutTypesInput } from './move-damage-classes-update-without-types.input';

@InputType()
export class MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput {

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    where?: Identity<MoveDamageClassesWhereInput>;

    @Field(() => MoveDamageClassesUpdateWithoutTypesInput, {nullable:false})
    @Type(() => MoveDamageClassesUpdateWithoutTypesInput)
    data!: Identity<MoveDamageClassesUpdateWithoutTypesInput>;
}
