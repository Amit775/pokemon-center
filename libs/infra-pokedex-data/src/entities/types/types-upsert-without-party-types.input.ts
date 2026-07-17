import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesUpdateWithoutPartyTypesInput } from './types-update-without-party-types.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutPartyTypesInput } from './types-create-without-party-types.input';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesUpsertWithoutPartyTypesInput {

    @Field(() => TypesUpdateWithoutPartyTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutPartyTypesInput)
    update!: TypesUpdateWithoutPartyTypesInput;

    @Field(() => TypesCreateWithoutPartyTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutPartyTypesInput)
    create!: TypesCreateWithoutPartyTypesInput;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;
}
