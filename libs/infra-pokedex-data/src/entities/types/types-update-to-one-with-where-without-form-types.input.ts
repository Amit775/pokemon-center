import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateWithoutFormTypesInput } from './types-update-without-form-types.input';

@InputType()
export class TypesUpdateToOneWithWhereWithoutFormTypesInput {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;

    @Field(() => TypesUpdateWithoutFormTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutFormTypesInput)
    data!: Identity<TypesUpdateWithoutFormTypesInput>;
}
