import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFlavorsScalarWhereInput } from './berry-flavors-scalar-where.input';
import { Type } from 'class-transformer';
import { BerryFlavorsUpdateManyMutationInput } from './berry-flavors-update-many-mutation.input';

@InputType()
export class BerryFlavorsUpdateManyWithWhereWithoutBerryInput {

    @Field(() => BerryFlavorsScalarWhereInput, {nullable:false})
    @Type(() => BerryFlavorsScalarWhereInput)
    where!: Identity<BerryFlavorsScalarWhereInput>;

    @Field(() => BerryFlavorsUpdateManyMutationInput, {nullable:false})
    @Type(() => BerryFlavorsUpdateManyMutationInput)
    data!: Identity<BerryFlavorsUpdateManyMutationInput>;
}
