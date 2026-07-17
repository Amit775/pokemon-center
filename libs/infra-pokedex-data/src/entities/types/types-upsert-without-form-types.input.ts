import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateWithoutFormTypesInput } from './types-update-without-form-types.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutFormTypesInput } from './types-create-without-form-types.input';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesUpsertWithoutFormTypesInput {

    @Field(() => TypesUpdateWithoutFormTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutFormTypesInput)
    update!: Identity<TypesUpdateWithoutFormTypesInput>;

    @Field(() => TypesCreateWithoutFormTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutFormTypesInput)
    create!: Identity<TypesCreateWithoutFormTypesInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;
}
