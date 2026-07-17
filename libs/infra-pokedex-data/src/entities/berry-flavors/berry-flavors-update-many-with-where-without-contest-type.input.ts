import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerryFlavorsScalarWhereInput } from './berry-flavors-scalar-where.input';
import { Type } from 'class-transformer';
import { BerryFlavorsUpdateManyMutationInput } from './berry-flavors-update-many-mutation.input';

@InputType()
export class BerryFlavorsUpdateManyWithWhereWithoutContestTypeInput {

    @Field(() => BerryFlavorsScalarWhereInput, {nullable:false})
    @Type(() => BerryFlavorsScalarWhereInput)
    where!: BerryFlavorsScalarWhereInput;

    @Field(() => BerryFlavorsUpdateManyMutationInput, {nullable:false})
    @Type(() => BerryFlavorsUpdateManyMutationInput)
    data!: BerryFlavorsUpdateManyMutationInput;
}
