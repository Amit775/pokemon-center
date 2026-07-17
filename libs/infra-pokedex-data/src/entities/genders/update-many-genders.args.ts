import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GendersUpdateManyMutationInput } from './genders-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GendersWhereInput } from './genders-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyGendersArgs {

    @Field(() => GendersUpdateManyMutationInput, {nullable:false})
    @Type(() => GendersUpdateManyMutationInput)
    data!: GendersUpdateManyMutationInput;

    @Field(() => GendersWhereInput, {nullable:true})
    @Type(() => GendersWhereInput)
    where?: GendersWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
