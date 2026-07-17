import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerryFirmnessUpdateManyMutationInput } from './berry-firmness-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BerryFirmnessWhereInput } from './berry-firmness-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyBerryFirmnessArgs {

    @Field(() => BerryFirmnessUpdateManyMutationInput, {nullable:false})
    @Type(() => BerryFirmnessUpdateManyMutationInput)
    data!: BerryFirmnessUpdateManyMutationInput;

    @Field(() => BerryFirmnessWhereInput, {nullable:true})
    @Type(() => BerryFirmnessWhereInput)
    where?: BerryFirmnessWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
