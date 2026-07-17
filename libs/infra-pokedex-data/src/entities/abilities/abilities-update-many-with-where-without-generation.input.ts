import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { AbilitiesScalarWhereInput } from './abilities-scalar-where.input';
import { Type } from 'class-transformer';
import { AbilitiesUpdateManyMutationInput } from './abilities-update-many-mutation.input';

@InputType()
export class AbilitiesUpdateManyWithWhereWithoutGenerationInput {

    @Field(() => AbilitiesScalarWhereInput, {nullable:false})
    @Type(() => AbilitiesScalarWhereInput)
    where!: Identity<AbilitiesScalarWhereInput>;

    @Field(() => AbilitiesUpdateManyMutationInput, {nullable:false})
    @Type(() => AbilitiesUpdateManyMutationInput)
    data!: Identity<AbilitiesUpdateManyMutationInput>;
}
