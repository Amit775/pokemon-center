import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NaturesCreateInput } from './natures-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNaturesArgs {

    @Field(() => NaturesCreateInput, {nullable:false})
    @Type(() => NaturesCreateInput)
    data!: Identity<NaturesCreateInput>;
}
