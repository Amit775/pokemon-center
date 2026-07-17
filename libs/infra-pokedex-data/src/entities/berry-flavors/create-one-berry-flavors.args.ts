import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerryFlavorsCreateInput } from './berry-flavors-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBerryFlavorsArgs {

    @Field(() => BerryFlavorsCreateInput, {nullable:false})
    @Type(() => BerryFlavorsCreateInput)
    data!: BerryFlavorsCreateInput;
}
