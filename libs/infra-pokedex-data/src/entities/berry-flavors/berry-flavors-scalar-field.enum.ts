import { registerEnumType } from '@nestjs/graphql';

export enum BerryFlavorsScalarFieldEnum {
    berry_id = "berry_id",
    contest_type_id = "contest_type_id",
    flavor = "flavor"
}


registerEnumType(BerryFlavorsScalarFieldEnum, { name: 'BerryFlavorsScalarFieldEnum', description: undefined })
