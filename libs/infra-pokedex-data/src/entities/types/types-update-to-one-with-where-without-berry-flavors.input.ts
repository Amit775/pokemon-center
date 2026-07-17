import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateWithoutBerryFlavorsInput } from './types-update-without-berry-flavors.input';

@InputType()
export class TypesUpdateToOneWithWhereWithoutBerryFlavorsInput {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;

    @Field(() => TypesUpdateWithoutBerryFlavorsInput, {nullable:false})
    @Type(() => TypesUpdateWithoutBerryFlavorsInput)
    data!: Identity<TypesUpdateWithoutBerryFlavorsInput>;
}
