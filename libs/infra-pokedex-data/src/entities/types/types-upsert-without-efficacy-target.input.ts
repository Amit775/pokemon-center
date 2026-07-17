import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateWithoutEfficacyTargetInput } from './types-update-without-efficacy-target.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutEfficacyTargetInput } from './types-create-without-efficacy-target.input';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesUpsertWithoutEfficacyTargetInput {

    @Field(() => TypesUpdateWithoutEfficacyTargetInput, {nullable:false})
    @Type(() => TypesUpdateWithoutEfficacyTargetInput)
    update!: Identity<TypesUpdateWithoutEfficacyTargetInput>;

    @Field(() => TypesCreateWithoutEfficacyTargetInput, {nullable:false})
    @Type(() => TypesCreateWithoutEfficacyTargetInput)
    create!: Identity<TypesCreateWithoutEfficacyTargetInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;
}
