import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovesUpdateManyMutationInput } from './moves-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MovesWhereInput } from './moves-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMovesArgs {

    @Field(() => MovesUpdateManyMutationInput, {nullable:false})
    @Type(() => MovesUpdateManyMutationInput)
    data!: MovesUpdateManyMutationInput;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
