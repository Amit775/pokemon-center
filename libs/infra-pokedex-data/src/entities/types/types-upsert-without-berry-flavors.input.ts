import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateWithoutBerryFlavorsInput } from './types-update-without-berry-flavors.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutBerryFlavorsInput } from './types-create-without-berry-flavors.input';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesUpsertWithoutBerryFlavorsInput {

    @Field(() => TypesUpdateWithoutBerryFlavorsInput, {nullable:false})
    @Type(() => TypesUpdateWithoutBerryFlavorsInput)
    update!: Identity<TypesUpdateWithoutBerryFlavorsInput>;

    @Field(() => TypesCreateWithoutBerryFlavorsInput, {nullable:false})
    @Type(() => TypesCreateWithoutBerryFlavorsInput)
    create!: Identity<TypesCreateWithoutBerryFlavorsInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;
}
