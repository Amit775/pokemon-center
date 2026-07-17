import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NaturesUpdateManyMutationInput } from './natures-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NaturesWhereInput } from './natures-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyNaturesArgs {

    @Field(() => NaturesUpdateManyMutationInput, {nullable:false})
    @Type(() => NaturesUpdateManyMutationInput)
    data!: NaturesUpdateManyMutationInput;

    @Field(() => NaturesWhereInput, {nullable:true})
    @Type(() => NaturesWhereInput)
    where?: NaturesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
