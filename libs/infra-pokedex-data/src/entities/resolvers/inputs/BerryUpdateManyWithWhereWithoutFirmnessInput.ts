import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryScalarWhereInput } from "../inputs/BerryScalarWhereInput";
import { BerryUpdateManyMutationInput } from "../inputs/BerryUpdateManyMutationInput";

@TypeGraphQL.InputType("BerryUpdateManyWithWhereWithoutFirmnessInput", {})
export class BerryUpdateManyWithWhereWithoutFirmnessInput {
  @TypeGraphQL.Field(_type => BerryScalarWhereInput, {
    nullable: false
  })
  where!: BerryScalarWhereInput;

  @TypeGraphQL.Field(_type => BerryUpdateManyMutationInput, {
    nullable: false
  })
  data!: BerryUpdateManyMutationInput;
}
