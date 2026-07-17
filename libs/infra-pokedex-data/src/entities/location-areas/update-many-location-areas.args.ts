import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationAreasUpdateManyMutationInput } from './location-areas-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LocationAreasWhereInput } from './location-areas-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyLocationAreasArgs {

    @Field(() => LocationAreasUpdateManyMutationInput, {nullable:false})
    @Type(() => LocationAreasUpdateManyMutationInput)
    data!: LocationAreasUpdateManyMutationInput;

    @Field(() => LocationAreasWhereInput, {nullable:true})
    @Type(() => LocationAreasWhereInput)
    where?: LocationAreasWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
