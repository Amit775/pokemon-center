import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFlavorsUpdateManyMutationInput } from './berry-flavors-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BerryFlavorsWhereInput } from './berry-flavors-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyBerryFlavorsArgs {

    @Field(() => BerryFlavorsUpdateManyMutationInput, {nullable:false})
    @Type(() => BerryFlavorsUpdateManyMutationInput)
    data!: Identity<BerryFlavorsUpdateManyMutationInput>;

    @Field(() => BerryFlavorsWhereInput, {nullable:true})
    @Type(() => BerryFlavorsWhereInput)
    where?: Identity<BerryFlavorsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
