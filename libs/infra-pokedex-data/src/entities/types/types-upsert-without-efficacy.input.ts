import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateWithoutEfficacyInput } from './types-update-without-efficacy.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutEfficacyInput } from './types-create-without-efficacy.input';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesUpsertWithoutEfficacyInput {

    @Field(() => TypesUpdateWithoutEfficacyInput, {nullable:false})
    @Type(() => TypesUpdateWithoutEfficacyInput)
    update!: Identity<TypesUpdateWithoutEfficacyInput>;

    @Field(() => TypesCreateWithoutEfficacyInput, {nullable:false})
    @Type(() => TypesCreateWithoutEfficacyInput)
    create!: Identity<TypesCreateWithoutEfficacyInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;
}
