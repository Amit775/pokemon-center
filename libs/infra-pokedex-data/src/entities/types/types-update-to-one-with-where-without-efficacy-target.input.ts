import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateWithoutEfficacyTargetInput } from './types-update-without-efficacy-target.input';

@InputType()
export class TypesUpdateToOneWithWhereWithoutEfficacyTargetInput {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;

    @Field(() => TypesUpdateWithoutEfficacyTargetInput, {nullable:false})
    @Type(() => TypesUpdateWithoutEfficacyTargetInput)
    data!: Identity<TypesUpdateWithoutEfficacyTargetInput>;
}
