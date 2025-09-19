import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorScalarWhereInput } from "../inputs/BerryFlavorScalarWhereInput";
import { BerryFlavorUpdateManyMutationInput } from "../inputs/BerryFlavorUpdateManyMutationInput";

@TypeGraphQL.InputType("BerryFlavorUpdateManyWithWhereWithoutBerryInput", {})
export class BerryFlavorUpdateManyWithWhereWithoutBerryInput {
  @TypeGraphQL.Field(_type => BerryFlavorScalarWhereInput, {
    nullable: false
  })
  where!: BerryFlavorScalarWhereInput;

  @TypeGraphQL.Field(_type => BerryFlavorUpdateManyMutationInput, {
    nullable: false
  })
  data!: BerryFlavorUpdateManyMutationInput;
}
