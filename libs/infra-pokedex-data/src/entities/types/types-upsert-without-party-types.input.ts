import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateWithoutPartyTypesInput } from './types-update-without-party-types.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutPartyTypesInput } from './types-create-without-party-types.input';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesUpsertWithoutPartyTypesInput {

    @Field(() => TypesUpdateWithoutPartyTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutPartyTypesInput)
    update!: Identity<TypesUpdateWithoutPartyTypesInput>;

    @Field(() => TypesCreateWithoutPartyTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutPartyTypesInput)
    create!: Identity<TypesCreateWithoutPartyTypesInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;
}
