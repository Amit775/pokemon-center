import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionsUpdateManyMutationInput } from './regions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RegionsWhereInput } from './regions-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyRegionsArgs {

    @Field(() => RegionsUpdateManyMutationInput, {nullable:false})
    @Type(() => RegionsUpdateManyMutationInput)
    data!: RegionsUpdateManyMutationInput;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: RegionsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
