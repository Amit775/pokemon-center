import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypesUpdateManyMutationInput } from './types-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TypesWhereInput } from './types-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyTypesArgs {

    @Field(() => TypesUpdateManyMutationInput, {nullable:false})
    @Type(() => TypesUpdateManyMutationInput)
    data!: TypesUpdateManyMutationInput;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
