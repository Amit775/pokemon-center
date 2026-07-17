import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncountersUpdateManyMutationInput } from './encounters-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EncountersWhereInput } from './encounters-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEncountersArgs {

    @Field(() => EncountersUpdateManyMutationInput, {nullable:false})
    @Type(() => EncountersUpdateManyMutationInput)
    data!: EncountersUpdateManyMutationInput;

    @Field(() => EncountersWhereInput, {nullable:true})
    @Type(() => EncountersWhereInput)
    where?: EncountersWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
