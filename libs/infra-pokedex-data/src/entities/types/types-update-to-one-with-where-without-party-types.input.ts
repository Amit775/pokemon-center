import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateWithoutPartyTypesInput } from './types-update-without-party-types.input';

@InputType()
export class TypesUpdateToOneWithWhereWithoutPartyTypesInput {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;

    @Field(() => TypesUpdateWithoutPartyTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutPartyTypesInput)
    data!: TypesUpdateWithoutPartyTypesInput;
}
