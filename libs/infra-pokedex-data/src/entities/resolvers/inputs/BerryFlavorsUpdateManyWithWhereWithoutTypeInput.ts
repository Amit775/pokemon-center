import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsScalarWhereInput } from "../inputs/BerryFlavorsScalarWhereInput";
import { BerryFlavorsUpdateManyMutationInput } from "../inputs/BerryFlavorsUpdateManyMutationInput";

@TypeGraphQL.InputType("BerryFlavorsUpdateManyWithWhereWithoutTypeInput", {})
export class BerryFlavorsUpdateManyWithWhereWithoutTypeInput {
  @TypeGraphQL.Field(_type => BerryFlavorsScalarWhereInput, {
    nullable: false
  })
  where!: BerryFlavorsScalarWhereInput;

  @TypeGraphQL.Field(_type => BerryFlavorsUpdateManyMutationInput, {
    nullable: false
  })
  data!: BerryFlavorsUpdateManyMutationInput;
}
