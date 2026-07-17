import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationGameIndicesScalarWhereInput } from './location-game-indices-scalar-where.input';
import { Type } from 'class-transformer';
import { LocationGameIndicesUpdateManyMutationInput } from './location-game-indices-update-many-mutation.input';

@InputType()
export class LocationGameIndicesUpdateManyWithWhereWithoutLocationInput {

    @Field(() => LocationGameIndicesScalarWhereInput, {nullable:false})
    @Type(() => LocationGameIndicesScalarWhereInput)
    where!: LocationGameIndicesScalarWhereInput;

    @Field(() => LocationGameIndicesUpdateManyMutationInput, {nullable:false})
    @Type(() => LocationGameIndicesUpdateManyMutationInput)
    data!: LocationGameIndicesUpdateManyMutationInput;
}
