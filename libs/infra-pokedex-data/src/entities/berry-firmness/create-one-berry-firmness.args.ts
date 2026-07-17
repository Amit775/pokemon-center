import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerryFirmnessCreateInput } from './berry-firmness-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBerryFirmnessArgs {

    @Field(() => BerryFirmnessCreateInput, {nullable:false})
    @Type(() => BerryFirmnessCreateInput)
    data!: BerryFirmnessCreateInput;
}
