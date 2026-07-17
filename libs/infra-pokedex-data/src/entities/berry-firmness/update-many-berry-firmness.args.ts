import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFirmnessUpdateManyMutationInput } from './berry-firmness-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BerryFirmnessWhereInput } from './berry-firmness-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyBerryFirmnessArgs {

    @Field(() => BerryFirmnessUpdateManyMutationInput, {nullable:false})
    @Type(() => BerryFirmnessUpdateManyMutationInput)
    data!: Identity<BerryFirmnessUpdateManyMutationInput>;

    @Field(() => BerryFirmnessWhereInput, {nullable:true})
    @Type(() => BerryFirmnessWhereInput)
    where?: Identity<BerryFirmnessWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
